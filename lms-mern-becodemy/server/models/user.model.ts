import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcryptjs"; // bcrypt is need to hashing our password

// This is needed to validate the email format
const emailRegexPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Need to make interface
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar: {
    public_id: string; // As we are using cloudinary
    url: string;
  };
  role: string;
  isVerified: boolean;
  courses: Array<{ courseId: string }>; // Purchased courses by users
  comparePassword: (password: string) => Promise<boolean>;
  // isAdmin: boolean; // not needed
}

// Declare the Schema of the Mongo model
const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name."],
      // index: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email."],
      unique: true,
      validate: {
        validator: function (value: string) {
          return emailRegexPattern.test(value);
        },
        message: "Please enter a valid email.",
      },
    },
    password: {
      type: String,
      required: [true, "Please enter your password."],
      minlength: [6, "Password must be at least 6 characters."],
      select: false,
    },
    avatar: {
      public_id: String,
      url: String,
    },
    role: {
      type: String,
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false, // At the beginning not verified
    },
    courses: [
      {
        courseId: String, // Suppose user purchases the course we will add those courses Id into the courses array at here, and then when the user go to course details page, then we will check it is exist in user course list or not if not then cant access that course.
      },
    ],
  },
  { timestamps: true }
);

// Hash our password, in db we need to store hash password
userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) {
    // we are receiving user pass and here we are bcrypting it.
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// compare password
userSchema.methods.comparePassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

//Export the model
const userModel: Model<IUser> = mongoose.model("User", userSchema);

export default userModel;

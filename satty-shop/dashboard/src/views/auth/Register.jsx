const Register = () => {
  return (
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[350px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <h2 className="text-xl mb-3">Welcome to e-commerce</h2>
          <p className="text-sm mb-3">
            Please register to your account and start your business
          </p>
          <form>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="name"
                placeholder="Enter your name"
                id="name"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="email"
                placeholder="Enter your email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="password"
                placeholder="Enter your password"
                id="password"
                required
              />
            </div>
            <div className="flex items-center gap-3 w-full mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
                required
              />
              <label htmlFor="checkbox">
                I agree to privacy policy & terms
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-[#FFFFFF] rounded-md px-7 py-2 mb-3"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

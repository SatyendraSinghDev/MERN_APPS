// Create a class for error handler, why class, because might be in our app we have lot of errors like user entering wring pass, user did something wrong, so for that we need to return some error or some code, and for that we might need to create multiple object, so to avoid this we are using object oriented class concept when we are using same object multiple time to avoid this class object is best.
class ErrorHandler extends Error {
  statusCode: Number;

  constructor(message: any, statusCode: Number) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;

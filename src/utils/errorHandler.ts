export class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiError, please be pateint with us!";
  }
}

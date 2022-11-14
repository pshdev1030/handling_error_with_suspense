import { AxiosError } from "axios";

const STATUSCODE = { NOTFOUND: 404, UNAUTHORIZED: 401 } as const;

type axiosErrorType = {
  message: string;
};

class HTTPError extends Error {
  statusCode: number;
  message: string;
  axiosError: AxiosError;
  constructor(axiosError: AxiosError<any>) {
    super();
    this.name = "HTTPError";
    this.statusCode = 500;
    this.message = axiosError.message;
    this.axiosError = axiosError;
    if (axiosError.response) {
      this.statusCode = axiosError.response.status;
      if (axiosError.response.data) {
        this.message = axiosError.response.data.message;
      }
    }
    Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends HTTPError {
  constructor(axiosError: AxiosError<any>) {
    super(axiosError);
    this.name = "NotFoundError";
  }
  handler() {
    //error handling
    console.log("NotFoundError");
  }
}

class UnauthorizedError extends HTTPError {
  constructor(axiosError: AxiosError<any>) {
    super(axiosError);
    this.name = "UnauthorizedError";
  }
  handler() {
    // 세션 날리기 등,,,
    console.log("UnauthorizedError");
  }
}

const HTTPErrorGenerator = (axiosError: AxiosError<axiosErrorType>) => {
  switch (axiosError.response?.status) {
    case STATUSCODE.NOTFOUND:
      return new NotFoundError(axiosError);
    case STATUSCODE.UNAUTHORIZED:
      return new UnauthorizedError(axiosError);
    default:
      return new HTTPError(axiosError);
  }
};
export { HTTPErrorGenerator, HTTPError, NotFoundError };

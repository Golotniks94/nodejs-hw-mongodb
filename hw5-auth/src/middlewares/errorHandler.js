const errorHandler = (err, req, res, next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
      data: err.data,
    });
  }

  console.error(err);
  res.status(500).json({
    status: 500,
    message: 'Something went wrong!',
    data: null,
  });
};

export default errorHandler;

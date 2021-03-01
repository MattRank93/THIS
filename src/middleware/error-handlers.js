// https://github.com/wesbos/Learn-Node/blob/master/stepped-solutions/45%20-%20Finished%20App/handlers/errorHandlers.js
//
// /**
//  * Handler to catch `async` operation errors.
//  * Reduces having to write `try-catch` all the time.
//  */
// exports.catchErrors = (action) => {
//   return (req, res, next) => {
//     action(req, res).catch(next)
//   }
// }
//
// /**
//  * Handle any invalid routes.
//  */
// exports.invalidRoute = (req, res, next) => {
//   const err = new Error('Invalid route man, the heck rrrya doin: ' + req.method + ':' + req.route)
//   err.status = 404
//   next(err)
// }
//
// /**
//  * Validation error handler for Mongo.
//  * The client app should handle displaying the errors.
//  */
// exports.validationErrors = (err, req, res, next) => {
//   // catch unique field error
//   if (err.code && err.code === 11000) {
//     err.status = 400
//     err.message = err.errmsg
//     return next(err)
//   }
//
//   if (!err.errors) {
//     return next(err)
//   }
//   res.status(400).json({
//     status: 400,
//     error: err.errors,
//     data: {}
//   })
// }


/*
  Catch Errors Handler
  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch and errors they throw, and pass it along to our express middleware with next()
*/

exports.catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

/*
  Not Found Error Handler
  If we hit a route that is not found, we mark it as 404 and pass it along to the next error handler to display
*/
exports.notFound = (req, res, next) => {
  const err = new Error('Not Found ya dummy');
  err.status = 404;
  next(err);
};

/*
  MongoDB Validation Error Handler
  Detect if there are mongodb validation errors that we can nicely show via flash messages
*/

exports.flashValidationErrors = (err, req, res, next) => {
  if (!err.errors) return next(err);
  // validation errors look like
  const errorKeys = Object.keys(err.errors);
  errorKeys.forEach(key => req.flash('error', err.errors[key].message));
  res.redirect('back');
};



/*
  Production Error Hanlder
  No stacktraces are leaked to user
*/
exports.productionErrors = (err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
};

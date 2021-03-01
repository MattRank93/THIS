const jwt = require('jsonwebtoken');

exports.verifyJWTToken = async (token) => {
    return new Promise((resolve, reject) =>
    {
        jwt.verify(token, "9x7D]'QN|x8z4d_)EsRrSCIxPZD73GOliM2R=S1~i?OWNm{Up>7aA=cMsqCxxf/", (err, decodedToken) =>
        {
            if (err || !decodedToken)
            {
                return reject(err)
            }

            resolve(decodedToken)//
        })
    })
}




























// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose'),
//     User = mongoose.model('users');
//
//
//
//
// module.exports = (req, res, next) => {
//     let object = {}
//     console.log("1")
//     let token = req.headers["token"]
//     object.token = token
//
//
//     try {
//
//         const user = User.find(object).exec()
//         console.log(user.token)
//         console.log("2")
//         if(user.isAuthorized(token) === false) {
//             console.log("in")
//             //res.json({user})
//             // res.status(401).json({
//             //     error: new Error('Invalid request!')
//             // });
//         }next();
//
//
//     } catch {
//
//          res.status(401).json({
//              error: new Error('Invalid request!')
//          });
//     }
// };


// module.exports = function (req, res, next) {
//     let passObject = {}
//     passObject.token = req.headers["token"]
//     User.find(passObject)
//         .exec(function (error, user) {
//             if (error) {
//                 return next(error);
//             } else {
//                 if (user === null) {
//                     const err = new Error("Not authorized! Go back!");
//                     err.status = 400;
//                     return next(err); // This will be caught by error handler
//                 } else {
//                     return next(); // No error proceed to next middleware
//                 }
//             }
//         });
// };


// module.exports = (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(' ')[1];
//         const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
//         const userId = decodedToken.userId;
//         if (req.body.userId && req.body.userId !== userId) {
//             throw 'Invalid user ID';
//         } else {
//             next();
//         }
//     } catch {
//         res.status(401).json({
//             error: new Error('Invalid request!')
//         });
//     }
// };
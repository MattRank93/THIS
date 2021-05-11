const { verifyJWTToken } = require('./auth');

exports.verifyJWT_MW = async (req, res, next) => {
    let token = req.headers["token"]
    console.log(token)
    verifyJWTToken(token)
        .then((decodedToken) => {
            console.log(decodedToken)
            req.user = decodedToken.data
            next()
        })
        .catch((err) => {
            res.status(400)
                .json({message: "Invalid auth token provided."})
        })
}

exports.verifyJWT_MW_employee = async (req, res, next) => {
    let token = req.headers["token"]
    console.log(token)
    verifyJWTToken(token)
        .then((decodedToken) => {
            console.log(decodedToken.user.role)
            if(decodedToken.user.role === "employee"){
                req.user = decodedToken.data
                next()} else { res.status(400).json({message: "not an employee."})}
        })
        .catch((err) => {
            res.status(400)
                .json({message: "Invalid auth token provided."})
        })
}

exports.verifyJWT_MW_admin = async (req, res, next) => {
    let token = req.headers["token"]
    console.log(token)
    verifyJWTToken(token)
        .then((decodedToken) => {
            console.log(decodedToken.user.role)
            if(decodedToken.user.role === "admin"){
            req.user = decodedToken.data
            next()} else { res.status(400).json({message: "not an admin."})}
        })
        .catch((err) => {
            res.status(400)
                .json({message: "Invalid auth token provided."})
        })
}

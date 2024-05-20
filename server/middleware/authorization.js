const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header("token");

        if (!jwtToken) {
            return res.status(403).json("Not authorized");
        }

        const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);
        req.user = payload.user;

        next(); // Doğrulama başarılı olduğunda bir sonraki middleware'e geçiş yap
    } catch (err) {
        console.error(err.message);
        return res.status(403).json("Not authorized"); // Token geçersizse 403 döndür
    }
};

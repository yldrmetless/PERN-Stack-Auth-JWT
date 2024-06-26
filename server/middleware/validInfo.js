module.exports = (req, res, next) => {
    const {email, name, password} = req.body;

    const validEmail = (userEmail) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)
    }

    if(req.path === "/register"){
        // console.log(!email.length);

        if(![email, name, password].every(Boolean)){
            return res.status(401).json("Missing credentials");
        }else if(req.path === "/login"){
            return res.status(401).json("Invalid email")
        }
    }
    else if(req.path === "/login"){
        if(![email, password].every(Boolean)){
            return res.status(401).json("Missing credentials")
        } else if(!validEmail(email)){
            return res.status(401).json("Imvalid email")
        }
    }
    next()
}
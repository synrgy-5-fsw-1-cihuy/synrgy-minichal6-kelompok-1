function authToken(request, response, next) {
    
    if(request.headers["authorization"] == "admin") {
        next();
        return;
    } else if(request.headers["authorization"] == "user" && request.methode == "get") {
        next();
        return;
    } 
    response.status(401).json({error: "Unauthorized access"});
}

module.exports = authToken;
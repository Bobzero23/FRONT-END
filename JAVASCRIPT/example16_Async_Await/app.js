const login = async (username, password) => {
    if (!username || !password) throw "missing credentials";
    if (password === "mypassword") return "WELCOME"
    throw "invalid password"
}

login("bobzero", "mypassword")
    .then((data) => {
        console.log(data);
        console.log("LOGGED IN");
    })
    .catch((err) => {
        console.log(err)
    })
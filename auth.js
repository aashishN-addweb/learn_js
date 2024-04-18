const register = (username) => {
    console.log(`User ${username} has been Registered`);
}

const login = (username, password) => {
    console.log(`User ${username} is logged in`);
}

// export single method
// module.exports = register;

// export for multiple methods
// NOTE : if key value same then use single string
module.exports = {
    register,
    login
};

exports.isAuthorized = (data) => {
    return data.username && data.password && data.password === 'Welcome';
}
    
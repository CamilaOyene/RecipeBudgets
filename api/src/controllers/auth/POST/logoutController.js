const logoutController = (req, res, next) => {
try {
    req.session.destroy();
    delete req.user
    res.send('Sesión cerrada exitosamente')
} catch (error) {
    console.log('error en logoutController', error);
    next(error)
}
}

export default logoutController;
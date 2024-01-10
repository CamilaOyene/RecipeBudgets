export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Manejar errores específicos
    if (err.name === 'ValidationError') {
      res.status(400).json({ error: 'Los datos de entrada no son válidos' });
    } else if (err.message === 'Usuario ya registrado') {
      res.status(400).json({ error: 'El usuario ya está registrado' });
    } else if (err.message === 'Invalid email or password') {
      res.status(401).json({ error: 'Correo electrónico o contraseña inválidos' });
    } else {
      // Propagar otros errores inesperados
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

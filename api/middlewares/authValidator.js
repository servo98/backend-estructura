import jwt from 'jwt-simple';
import config from '../config/index.js';
import User from '../models/User.js';

const isAuth = async (req, res, next) => {
  try {
    /**
     * Ver si está pasando el token ✅
     * Si no está mandando el token -> 400 ✅
     * Si sí mando el token -> decodificar ✅
     * Si falla la decodificación -> 401 (token inválido) ✅
     * Si el token es válido buscar al usuario con ese id ✅
     * Si no existe 401 ✅
     * Si sí existe seguir con el request -> next() ✅
     *
     */

    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({
        msg: 'Cabecera Authorization faltante',
      });
    }

    const payload = jwt.decode(token, config.jwt.secret);

    const user = await User.findById(payload.userId);

    if (!user) {
      return res.status(401).json({
        msg: 'Token inválido',
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      msg: 'Token inválido',
    });
  }
};

export default isAuth;

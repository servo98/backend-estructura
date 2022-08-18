import bcrypt from 'bcrypt';
import User from '../models/User.js';

const register = async (req, res) => {
  try {
    /**
     * middleware de validación 🟩
     * encriptar el password 🟩
     * guardar usuario nuevo con el pass encriptado
     */
    const encryptedPass = await bcrypt.hash(req.body.password, 4);
    req.body.password = encryptedPass;
    const user = await User.create(req.body);
    user.password = undefined;
    return res.json({
      msg: 'Usuario creado',
      data: { user },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        msg: 'Ya existe un usuario registrado con ese correo',
      });
    }
    return res.status(500).json({
      msg: 'Ocurrio un error al registrar usuario',
      error,
    });
  }
};

const login = () => {};

export { login, register };

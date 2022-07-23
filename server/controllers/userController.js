const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModal = require('../models/user');

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await UserModal.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: 'El usuario no existe.' });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Credenciales Inválidas.' });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_KEY,
      {
        expiresIn: '1h',
      }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    res.status(500).json({ message: 'Algo salió mal. Intente nuevamente.' });
  }
};

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: 'El usuario ya existe.' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWT_KEY,
      {
        expiresIn: '1h',
      }
    );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Algo salió mal. Intente nuevamente.' });

    console.log(error);
  }
};

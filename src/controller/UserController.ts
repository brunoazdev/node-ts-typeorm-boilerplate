import { Request, Response } from 'express';
import EmailService from '../services/emailService';

class UserController{
  getUser(req: Request, res: Response){
    return res.send('olá');
  }

  createUser(req: Request, res: Response){
    const emailService = new EmailService();
    emailService.sendMail(
      {name: 'Bruno de Azevedo Lima', email: 'bruno.advance.s@gmail.com'},
      { subject: 'Confirmação de cadastro', body: 'Olá seu usuário foi cadastrado' }
    )

    return res.send('email enviado')
  }
}

export default UserController;
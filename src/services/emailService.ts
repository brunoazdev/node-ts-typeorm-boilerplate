interface ITo {
  name: string;
  email: string
}

interface IMessage{
  subject: string;
  body: string;
}

class EmailService{
  sendMail(to: ITo, message: IMessage){
    console.log(`Send mail to: ${to.name} with ${message.subject}`)
  }
}

export default EmailService;
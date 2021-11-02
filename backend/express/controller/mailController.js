const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const Controller = {}

Controller.sendMail = (req, res, next) =>{
   const {email, nombrePaciente, nombreDoctor, hora, lugar } = req.body;
    console.log(email, nombrePaciente)
    const msg = {
      "to": String(email), // Change to your recipient
      "from": "no-reply@em7397.med-aid.software", // Change to your verified sender
      //"subject": "Sending with SendGrid is Really Fun :D",
     // text: "and easy to do anywhere, even with Node.js",
      //html: "<strong>and easy to do anywhere, even with Node.js</strong>",
      "dynamicTemplateData":{
         "nombrePaciente":nombrePaciente,
         "nombreDoctor":nombreDoctor,
         "hora":hora,
         "lugar": lugar
      },
      "template_id":"d-8f284cbd5d3442c2acb3fdf94ab1ec01",
    };

   sgMail.send(msg)
    .then(()=>{
       return res.status(200).json({estado:"enviado"})
      })
    .catch(e=>{
      return res.status(400).json({estado:String(e)})
    })
}

module.exports = Controller


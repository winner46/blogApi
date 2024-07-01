const formidable = require('formidable');
const Joi = require('joi');

const joiValidator = (schema) => {
    return (req, res, next) => {
      const form = new formidable.IncomingForm();
  
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error('Error parsing the form:', err);
          return res.status(400).send({ error: 'Error parsing the form' });
        }
        const data = { ...fields, ...files ,...req.params};
        if(Object.keys(fields).length > 0 && Object.keys(req.params).length == 0 ){
            const { error, value } = schema.validate(data);
            if (error) {
                return res.status(400).send({ message: error.details[0].message });
            }
           

        }
        if(Object.keys(fields).length > 0 && Object.keys(req.params).length > 0){
            const { error, value } = schema.validate(data);
            if (error) {
                return res.status(400).send({ message: error.details[0].message });
            }
        }
     
        
      if(Object.keys(fields).length == 0 ){
        const { error, value } = schema.validate(data);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }

      }

       
        // const data = { ...fields, ...files };
  
        // // Validate request body (if present)
        // const { error: bodyError } = schema.body.validate(data);
        // if (bodyError) {
        //   console.error('Body validation error:', bodyError.details[0].message);
        //   return res.status(400).send({ error: bodyError.details[0].message });
        // }
  
        // // Validate URL parameters (if present)
        // const { error: paramsError } = schema.params.validate(req.params);
        // if (paramsError) {
        //   console.error('Params validation error:', paramsError.details[0].message);
        //   return res.status(400).send({ error: paramsError.details[0].message });
        // }else{
        //     return res.status(400).send("Params validation")
        // }
  
        // Store parsed fields and files in req object
        req.fields = fields;
        req.files = files;
  
        next();
      });
    };
  };
  
  

module.exports = joiValidator;


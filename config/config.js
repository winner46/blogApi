const dotenv = require('dotenv')

dotenv.config('./env')

const configVariables = {
    PORT: process.env.PORT,
    MONGO_URL : process.env.MONGODB_URL,
    CLOUDINARY_SECERET : process.env.CLOUDINARY_SECERET,
    CLOUDINARY_PUBLIC : process.env.CLOUDINARY_PUBLIC,
    CLOUD_NAME : process.env.CLOUD_NAME,
    JWT_SECRET : process.env.JWT_SECRET_KEY,
}
module.exports = configVariables
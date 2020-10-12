const mongoose = require('mongoose'),
    config = require('./config/mongoDB')

const URI = config.MONGODB_URI

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connection = mongoose.connection

exports.connection = connection
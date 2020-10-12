const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    songsRouter = require('./routes/songs'),
    app = express(),
    { connection } = require('./database'),
    { saveSongsInDB } = require('./savedSongs/savedSongs'),
    {importSongsFromDB} = require('./savedSongs/importSongs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/songs', songsRouter)

if (process.env.LOAD_SONGS !== undefined) {
    // MongoDB connection
    console.log('Connecting with DB...');
    connection.once('open', async () => {
        console.log('DB is connected to Patagonian Challenge in MongoDB')
    if(process.env.LOAD_SONGS === 'load') return saveSongsInDB()
    if(process.env.LOAD_SONGS === 'json') return importSongsFromDB()
    })
}


module.exports = app
const { createToken } = require('../middlewares/spotify/tokenValidation'),
    fs = require('fs'),
    artistSongs = require('../models/artistSongs')

const importSongsFromDB = async (type) => {
    // Create new token for Spotify API
    await createToken()
    // Fetch each artist, process and save data in const songs
    console.log('Collecting all the songs...')
    await artistSongs.find({},
        (err, response) => {
            if (err) {
                console.log(err)
            }
            if (response) {
                console.log('Creating your file...')
                // Create file
                fs.createWriteStream(`./public/imports/songs.${type}`).write(JSON.stringify(...response), () => {
                    console.log('Your file is ready! You will find it in the folder: /public/imports/')
                })
            }
        })
    process.exit()
}
exports.importSongsFromDB = importSongsFromDB

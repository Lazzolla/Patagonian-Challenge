const { createToken } = require('../middlewares/spotify/tokenValidation'),
    fs = require('fs'),
    artistSongs = require('../models/artistSongs')

const importSongsFromDB = async () => {
    // Create new token for Spotify API
    await createToken()
    // Fetch each artist, process and save data in const songs
    console.log('Collecting all the songs...')
    await artistSongs.find({},
        (err, response) => {
            if (err) {
                console.log(err)
            }
            if (response.length > 0) {
                console.log('Creating your file...')
                // Create file
                fs.createWriteStream('./imports/songs.json').write(JSON.stringify(...response), () => {
                    console.log('Your file is ready! You will find it in the folder: /imports/')
                })
            } else {
                console.log('First you need to save songs in the Database. Then run < npm run importJSON > again to import.');
            }
        })
    process.exit()
}
exports.importSongsFromDB = importSongsFromDB

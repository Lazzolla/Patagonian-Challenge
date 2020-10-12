const artistList = require('../artistList.json'),
    { getSongsByArtistId } = require('../controllers/songs.controllers'),
    { createToken } = require('../middlewares/spotify/tokenValidation'),
    artistSongs = require('../models/artistSongs')

const saveSongsInDB = async () => {
    // Create new token for Spotify API
    await createToken()
    // Fetch each artist, process and save data in const songs
    await Promise.all(artistList.artists.map(async artistId => {
        const songs = await getSongsByArtistId(artistId)
        // reject invalid Ids
        if (songs.status === 400) return console.log(`The id: ${artistId} is not a valid id artist.`)
        // Save data in DB cheking if already exists
        await artistSongs
            .findOneAndUpdate(
                { artistName: songs.artistName },
                { albums: songs.albums },
                { upsert: true },
                (err, response) => {
                    if (err) {
                        return console.log(err);
                    }
                    console.log(`Saved all the songs of ${songs.artistName}, id: ${artistId}`);
                })

    }))
    console.log('Job complete! all the songs were saved.')
    console.log('You can import them using the command <npm run importJSON> to save them in a JSON file, this file would be saved in the folder /public/imports')
    process.exit()
}




// 
// "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q"

exports.saveSongsInDB = saveSongsInDB

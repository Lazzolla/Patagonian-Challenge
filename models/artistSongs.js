const mongoose = require('mongoose'),
    Schema = mongoose.Schema

const artistSongsSchema = new Schema({
// This a very simple Schema for simplicity sake of this test. I should definitely take more time to work on this knowing more about are needs with this data.
    artistName: {
        type: String,
        required: true,
    },
    albums: [
        {
          albumTitle: {
              type: String,
              required: true
          },
          tracks: [
              {
              songId: {
                  type: String,
                  required: true
              },
              songTitle: {
                  type: String,
                  required: true
              }
            }
          ]
        }
    ]
})

const artistSongs = mongoose.model('artistSongs', artistSongsSchema, 'SavedSongs')

module.exports = artistSongs
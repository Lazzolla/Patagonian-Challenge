const { songsFetch } = require('../_api/axios')

module.exports = {
    async searchSongs(searchURL, offset) {
        try {
            const { data } = await songsFetch.get(`search?type=track&q=artist:${searchURL}&offset=${offset}&limit=20`)
            return data
        } catch (err) {
            return err
        }
    },
    async searchSongsByArtistId(id) {
        try {
            const { data } = await songsFetch.get(`artists/${id}/albums`)
            const albumsId = data.items.map(album => album.id)
            try {
                const { data } = await songsFetch.get(`albums?ids=${encodeURIComponent(albumsId)}`)
                return data
            } catch (err) {
                console.log(err);
            }

        } catch (err) {
           return err.response
        }
    },

    async searchSongById(id) {
        try {
            const { data } = await songsFetch.get(`tracks/${id}`)
            return data
        } catch (err) {
            return err.response.data
        }
    }
}
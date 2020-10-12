const { searchSongs, searchSongById, searchSongsByArtistId } = require('../services/songs.services')

module.exports = {
    // Search songs by artist
    async getSongsByName(req, res) {
        const querySearch = req.query.artistName.trim().toLowerCase()
        const page = parseInt(req.query.page) || 0
        if (querySearch.length < 3) return res.send("Please supply at least 3 characters to search your artist's songs.")
        const response = await searchSongs(encodeURIComponent(querySearch), 20 * page)
        const { items, total } = response.tracks
        const songs = items.map(song => {
            return {
                songId: song.id,
                songTitle: song.name
            }
        })
        const data = {
            songs,
            total,
            pagesTotal: total % 20 === 0 ? total / 20 : Math.floor(total / 20) + 1
        }
        res.send(data)
    },
    // Search song by Id
    async getSongsById(req, res) {
        const querySearch = req.params.id.trim()
        const data = await searchSongById(querySearch)
        res.send(data)
    },
    // Search songs by artist
    async getSongsByArtistId(id) {
        const data = await searchSongsByArtistId(id)
        if (data.status === 400) return data
            const albums = data.albums.map(album => {
                const albumFiltered = {
                    albumTitle: album.name,
                    tracks: album.tracks.items.map(track => {
                        return {
                            songId: track.id,
                            songTitle: track.name
                        }
                    })
                }
                return albumFiltered
            })
            return {
                artistName: data.albums[0].artists[0].name,
                albums
            }
    }
}
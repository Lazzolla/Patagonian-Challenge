
const tableIdHead = document.getElementById('tableIdHead')
const tableIdBody = document.getElementById('tableIdBody')

const handleSubmitId = async (event) => {
    event.preventDefault()
    const songId = document.getElementById('idSong').value
    if (songId.length > 0) {
        const response = await fetch(`http://localhost:8080/songs/${songId}`)
        console.log(response.status);
        const data = await response.json()
        if (response.status === 200) {
            // If multiple artists are authors
            const artists = data.artists.map(artist => {
                const span = document.createElement('span')
                span.innerHTML = `${artist.name} </br>`
                return span.outerHTML
            })
            tableIdHead.innerHTML =
                `<tr>
                <th>Name</th>
                <th>Album</th>
                <th>Artist</th>
            </tr>`
            const tr = document.createElement('tr')
            tr.innerHTML = `<td>${data.name}</td><td>${data.album.name}</td><td>${artists}</td>`
            tableIdBody.append(tr)
        } else {
            const span = document.createElement('span')
            span.innerHTML = `<h2>${data.message}</h2>`
            tableIdHead.innerHTML = span.outerHTML
        }

    }
}

document.getElementById('submitId').addEventListener('submit', handleSubmitId)
document.getElementById('idSong').addEventListener('input', () => {
    tableIdHead.innerHTML = ''
    tableIdBody.innerHTML = ''
})
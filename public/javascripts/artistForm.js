let currentPage = 0,
    pagesTotal = 1,
    artistName

const tableHead = document.getElementById('tableArtistHead')
const tableBody = document.getElementById('tableArtistBody')

const handleSubmit = async (event) => {
    event.preventDefault()
    if (currentPage < pagesTotal) {
        const name = document.getElementById('artistName').value
        const response = await fetch(`http://localhost:8080/songs?artistName=${name}&page=${currentPage}`)
        const data = await response.json()
        console.log(data);
        artistName = name
        pagesTotal = data.pagesTotal
        currentPage++
        tableHead.innerHTML =
            `<tr>
                <th>Song Name</th>
                <th>Song Id</th>
            </tr>`
        data.songs.forEach(song => {
            const tr = document.createElement('tr')
            tr.innerHTML = `<td>${song.songTitle}</td><td>${song.songId}</td>`
            tableBody.append(tr)
        })
    }
}

document.getElementById('submitArtistName').addEventListener('submit', handleSubmit)
document.getElementById('artistName').addEventListener('input', () => {
    tableHead.innerHTML = ''
    tableBody.innerHTML = ''
    currentPage = 0
    pagesTotal = 1
})
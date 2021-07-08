// 'http://localhost:3001/api'
export const apiNotes = (url) => {
    fetch(url)
        .then((data) => data.json())
        .then((data) => {
            console.log(data)
            return data
        })
}

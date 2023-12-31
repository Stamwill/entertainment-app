const search = document.getElementById('searchBox')
const trending = document.getElementById('trending')

console.log('TRENDING: ', trending)
const resetSearch = () => {
  search.reset()
}

// function fetchData() {
//   fetch('../../data.json')
//     .then((res) => {
//       return res.json()
//     })
//     .then((data) => console.log(data.title))
// }

function fetchData() {
  fetch('../../data.json')
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      for (let i = 0; i < json.length; i++) {
        if (json[i].isTrending) {
          console.log(json[i])
          // Append FROM SECTION, GIVE SECTION ID AND APPEND THERE
          var divElement = document.createElement('Div')
          divElement.id = 'divID'

          // Styling it
          divElement.style.textAlign = 'center'
          divElement.style.fontWeight = 'bold'
          divElement.style.fontSize = 'smaller'
          divElement.style.paddingTop = '15px'

          // Adding a paragraph to it
          var paragraph = document.createElement('P')
          var text = document.createTextNode(`${json[i].title}`)
          paragraph.appendChild(text)
          divElement.appendChild(paragraph)

          // Appending the div element to body
          trending.appendChild(divElement)
        }
      }
    })
}

fetchData()

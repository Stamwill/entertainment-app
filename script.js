const search = document.getElementById('searchBox')
const trending = document.getElementById('trending')

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
          // Append FROM SECTION, GIVE SECTION ID AND APPEND THERE
          let divElement = document.createElement('Div')
          divElement.id = 'divID'

          divElement.style.textAlign = 'center'
          divElement.style.fontWeight = 'bold'
          divElement.style.fontSize = 'smaller'
          divElement.style.paddingTop = '15px'

          let paragraph = document.createElement('P')
          let text = document.createTextNode(`${json[i].title}`)

          paragraph.appendChild(text)
          divElement.appendChild(paragraph)

          let trendingImg = document.createElement('img')
          trendingImg.src = `${'.' + json[i].thumbnail.trending.small}`
          trendingImg.classList.add('trendingImgContainer')

          divElement.appendChild(trendingImg)

          // Appending the div element to body
          trending.appendChild(divElement)
        }
      }
    })
}

fetchData()

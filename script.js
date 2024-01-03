const search = document.getElementById('searchBox')
const trending = document.getElementById('trending')

const resetSearch = () => {
  search.reset()
}

function fetchData() {
  fetch('../../data.json')
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      for (let i = 0; i < json.length; i++) {
        if (json[i].isTrending) {
          let trendingItemContainer = document.getElementById('trendingItems')
          let trendingItem = document.createElement('Div')
          trendingItem.classList.add('trendingItem')

          let paragraph = document.createElement('P')
          let text = document.createTextNode(`${json[i].title}`)

          paragraph.appendChild(text)
          trendingItem.appendChild(paragraph)

          let trendingImg = document.createElement('img')
          trendingImg.src = `${'.' + json[i].thumbnail.trending.small}`
          trendingImg.classList.add('trendingImgContainer')

          trendingItem.appendChild(trendingImg)
          trendingItemContainer.appendChild(trendingItem)
        }
      }
    })
}

fetchData()

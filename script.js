const search = document.getElementById('searchBox')
const trending = document.getElementById('trending')

const resetSearch = () => {
  search.reset()
}

const fetchTrending = () => {
  fetch('../../data.json')
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      for (let i = 0; i < json.length; i++) {
        if (json[i].isTrending) {
          let title = document.createTextNode(`${json[i].title}`)
          let year = document.createTextNode(`${json[i].year}`)
          let rating = document.createTextNode(`${json[i].rating}`)
          let category = document.createTextNode(`${json[i].category}`)
          let image = document.createElement('img')
          image.src = `${'.' + json[i].thumbnail.trending.small}`

          createEntertainmentBlock(title, year, rating, category, image)
        }
      }
    })
}

fetchTrending()

const createEntertainmentBlock = (title, year, rating, category, image) => {
  let trendingItemContainer = document.getElementById('trendingItems')
  let trendingItem = document.createElement('div')
  let trendingTextContainer = document.createElement('div')
  let trendingItemText = document.createElement('div')
  let imgContainer = document.createElement('div')

  let titleText = document.createElement('p')
  let yearText = document.createElement('p')
  let ratingText = document.createElement('p')
  let categoryText = document.createElement('p')

  // Append props
  titleText.appendChild(title)
  yearText.appendChild(year)
  ratingText.appendChild(rating)
  categoryText.appendChild(category)

  trendingItemText.appendChild(yearText)
  trendingItemText.appendChild(categoryText)
  trendingItemText.appendChild(ratingText)

  trendingItem.appendChild(trendingItemText)
  trendingItem.appendChild(titleText)

  trendingTextContainer.appendChild(trendingItemText)
  trendingTextContainer.appendChild(titleText)

  trendingItem.appendChild(trendingTextContainer)

  titleText.classList.add('trendingTitleText')
  trendingTextContainer.classList.add('trendingTextContainer')

  //Image

  let trendingImgContainer = document.createElement('div')

  trendingImgContainer.classList.add('trendingImgContainer')
  image.classList.add('trendingImg')

  trendingImgContainer.appendChild(image)
  trendingItem.appendChild(trendingImgContainer)
  trendingItemContainer.appendChild(trendingItem)

  trendingItem.classList.add('trendingItem')
  trendingItemText.classList.add('trendingItemText')
}

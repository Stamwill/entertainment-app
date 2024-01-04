const search = document.getElementById('searchBox')
const trending = document.getElementById('trending')

const resetSearch = () => {
  search.reset()
}

// function fetchData() {
//   fetch('../../data.json')
//     .then(function (response) {
//       return response.json()
//     })
//     .then(function (json) {
//       for (let i = 0; i < json.length; i++) {
//         if (json[i].isTrending) {
//           let trendingItemContainer = document.getElementById('trendingItems')
//           let trendingItem = document.createElement('Div')
//           let trendingItemText = document.createElement('Div')

//           //Add classes
//           trendingItem.classList.add('trendingItem')
//           trendingItemText.classList.add('trendingItemText')

//           let titleText = document.createElement('P')
//           let yearText = document.createElement('P')
//           let ratingText = document.createElement('P')

//           let title = document.createTextNode(`${json[i].title}`)
//           let year = document.createTextNode(`${json[i].year}`)
//           let rating = document.createTextNode(`${json[i].rating}`)

//           // Data to append
//           titleText.appendChild(title)
//           yearText.appendChild(year)
//           ratingText.appendChild(rating)

//           // Append to trending Item
//           trendingItemText.appendChild(titleText)
//           trendingItemText.appendChild(yearText)
//           trendingItemText.appendChild(ratingText)
//           trendingItem.appendChild(trendingItemText)
//           trendingItemContainer.appendChild(trendingItem)

//           // Image creation
//           let trendingImgContainer = document.createElement('Div')
//           let trendingImg = document.createElement('img')
//           trendingImg.src = `${'.' + json[i].thumbnail.trending.small}`
//           trendingImgContainer.classList.add('trendingImgContainer')
//           trendingImg.classList.add('trendingImg')

//           trendingImgContainer.appendChild(trendingImg)
//           trendingItem.appendChild(trendingImgContainer)
//         }
//       }
//     })
// }

// fetchData()

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

  trendingItem.appendChild(imgContainer)
  trendingItem.appendChild(trendingItemText)
  trendingItem.appendChild(titleText)

  trendingTextContainer.appendChild(trendingItemText)
  trendingTextContainer.appendChild(titleText)

  trendingItem.appendChild(trendingTextContainer)

  titleText.classList.add('trendingTitleText')
  trendingTextContainer.classList.add('trendingTextContainer')

  //Image

  let trendingImgContainer = document.createElement('Div')

  trendingImgContainer.classList.add('trendingImgContainer')
  image.classList.add('trendingImg')

  trendingImgContainer.appendChild(image)
  trendingItem.appendChild(trendingImgContainer)
  trendingItemContainer.appendChild(trendingItem)

  trendingItem.classList.add('trendingItem')
  trendingItemText.classList.add('trendingItemText')
}

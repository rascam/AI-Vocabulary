import dotenv from "dotenv"
dotenv.config()
const UNSPLASH_API_KEY= process.env.UNSPLASH_API_KEY

export async function getUnsplashImageByKeyword(keyword: string) {
  try {

  if (!keyword) {
    throw new Error("No image search keyword provided")
  }
  
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${keyword}&per_page=3&content_filter=high&orientation=portrait`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Client-ID -ANZSgOmVhSxrDesaO8DHO2SGIi73Ylbyfxqi-RZvDA",
      },
    }
  )

  const photo = await response.json()
  // console.log(photo.results[0]) 
  const photoCount = photo.results.length
  const photoIndex = Math.floor(Math.random() * photoCount)
  const imgUrl: string = photo.results[photoIndex].urls.thumb || ""
  const credits: string = photo.results[photoIndex].user.name || ""
  const creditsUrl: string = photo.results[photoIndex].user.links.html || ""

  // console.log(imgUrl, credits, creditsUrl)

    return {
      imgUrl,
      credits,
      creditsUrl
    }
  } catch (error) {
      console.error(error)
  }
  }

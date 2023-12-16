
import { User } from "../../lib/types"
import { getUnsplashImageByKeyword } from "./image.model"


export async function getImageController (user: User, srcWord: string, targetWord: string, english: string) {

  if (!srcWord || !targetWord) {
    throw new Error("No image search text provided")
  }
  
  let photoSearchTerm = "dictionary"
    if (user.userSrcLang === "en") {
      photoSearchTerm = srcWord
    } else if (user.userTargetLang === "en") {
      photoSearchTerm = targetWord
    } else {
      photoSearchTerm = english
    }

    photoSearchTerm
      .replace(
        /^(The |a |an |to |der |die |das |ein |eine |o |um |uma |un |una |el |la |le |une |les |l'|il )/gim,
        ""
      )
      .trim()
    if (photoSearchTerm === "") photoSearchTerm = "dictionary"


  const image = await getUnsplashImageByKeyword(photoSearchTerm)
  
  return image
}




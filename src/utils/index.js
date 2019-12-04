const baseUrl = process.env.BASE_URL

export function getPublicImg(path) {
  return baseUrl + path
}

export function getBgImageStyle(path) {
  return {
    backgroundImage: `url(${baseUrl + path})`
  }
}
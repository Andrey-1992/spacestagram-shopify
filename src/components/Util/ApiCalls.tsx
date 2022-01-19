export const fetchSpaceContainerImg = async () => {
  try {
    const response = await fetch("https://api.nasa.gov/planetary/apod?count=10&api_key=iO71ydirnMQL3x20vdpVLigRiB3uytZaCgxG23z5")
    if (!response.ok || response.status === 500) {
      throw Error('Error fetching pictures')
    }
    const data = await response.json()
    return data
  } catch(err) {
    console.log(err.message)
    return err;
  }
}
export const openPopupWindow = (url, width, height) => {
  const left = (window.innerWidth - width) / 2
  const top = (window.innerHeight - height) / 2
  window.open(url, '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`)
}

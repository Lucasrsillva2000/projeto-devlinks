function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    img.setAttribute('src', 'https://github.com/lucasrsillva2000.png')
  } else {
    img.setAttribute('src', './assets/photo.jpg')
  }
}

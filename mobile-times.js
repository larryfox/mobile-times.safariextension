var href = window.location.href
if (href.match(/^https?:\/\/www\.nytimes\.com\/\d{4}\/\d{2}\/\d{2}/)) {
  href = href.replace('www.nytimes.com','mobile.nytimes.com')
  window.location.href = href
}

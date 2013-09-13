var re = /^https?:\/\/(\w+)(?:\.\w+)?\.nytimes\.com\/\d{4}\/\d{2}\/\d{2}/i
var href = window.location.href
var match = href.match(re)
if (match && match[1]) {
  var subdomain = match[1]
  if (subdomain === 'www') {
    href = href.replace('www.nytimes.com', 'mobile.nytimes.com')
  } else {
    var new_domain = 'mobile.nytimes.com/blogs/'+subdomain
    href = href.replace(/(\w+)(?:\.\w+)?\.nytimes\.com/i, new_domain)
  }
  if (subdomain !== 'mobile') {
    window.location.href = href
  }
}

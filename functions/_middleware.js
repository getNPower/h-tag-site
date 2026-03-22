export function onRequest(context) {
  const url = new URL(context.request.url)

  if (url.hostname === "h-tag-site.pages.dev") {
    url.hostname = "h-tag.dev"
    return Response.redirect(url.toString(), 301)
  }

  return context.next()
}

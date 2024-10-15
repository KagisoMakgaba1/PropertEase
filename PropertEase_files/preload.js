;(function () {
  // skipping the preload/re-directing part might be needed in the context
  // of headless rendering, when generating PNG/PDF version of the document
  if (window.__pitch_disable_preload__) {
    return
  }

  const path = window.location.pathname
  const session = localStorage.getItem(window['pitch_config']['session_name'])

  const publicRoutes = [
    '/app/login',
    '/app/public',
    '/app/presentation/link',
    '/app/presentation/',
    '/app/embed/',
    '/app/reader/',
  ]

  function isPublicRoute(route) {
    return publicRoutes.some((publicRoute) => {
      return route.startsWith(publicRoute)
    })
  }

  window['pitch-is-public-route'] = isPublicRoute(path)

  function getCookie(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift()
  }
})()

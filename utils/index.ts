export const isInViewport = (el: HTMLElement | null, threshold = 0) => {
  if (!el) return false

  const rect = el.getBoundingClientRect()
  return (
    rect.left >= 0 &&
    rect.bottom + threshold <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * Smoothly scrolls to target section element with header offset
 * @param {string} sectionId - The ID of target section without '#'
 */
export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const headerOffset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/**
 * Returns the current calendar year
 */
export function getCurrentYear() {
  return new Date().getFullYear();
}


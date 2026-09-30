(() => {
  const button = document.getElementById("backToTop");
  if (!button) return;

  function updateVisibility() {
    button.hidden = window.scrollY < 300;
  }

  window.addEventListener("scroll", updateVisibility, {
    passive: true
  });

  button.addEventListener("click", () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "instant" : "smooth"
    });
  });

  updateVisibility();
})();
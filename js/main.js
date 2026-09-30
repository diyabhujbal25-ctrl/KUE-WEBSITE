// Edit text and images directly in sports.html and wellness.html.
const $ = (selector, root = document) => root.querySelector(selector);
function refreshIcons() {
  if (window.lucide?.createIcons) window.lucide.createIcons();
}
$("#siteOverlays").innerHTML = enquiryModal();
bindEnquiry();
refreshIcons();
let demoTrigger;
document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-acti-enquiry]");
  if (trigger) demoTrigger = trigger;
  if (event.target.closest("#actiModalClose, #actiBackdrop"))
    demoTrigger?.focus();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") demoTrigger?.focus();
  if (event.key !== "Tab" || !$("#actiModal").classList.contains("open"))
    return;
  const items = [
    ...$("#actiModal").querySelectorAll(
      "button, input, select, textarea, a[href]",
    ),
  ];
  const first = items[0],
    last = items[items.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  }
  if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}


);



// DEMO FORM MARKUP AND EMAIL HANDOFF. Recipient is in settings.js.
function enquiryModal() {
  return /* HTML */ `
    <div class="modal-backdrop acti-backdrop" id="actiBackdrop"></div>
    <section
      class="modal acti-modal"
      id="actiModal"
      aria-modal="true"
      role="dialog"
      aria-labelledby="actiModalTitle"
    >
      <button
        class="icon-button acti-modal-close"
        id="actiModalClose"
        aria-label="Close demo enquiry"
      >
        <i data-lucide="x" class="ui-icon" aria-hidden="true"></i>
      </button>
      <span class="acti-eyebrow">
        <span class="acti-pulse"></span>
        ACTICOMPRESS / PRODUCT DEMO
      </span>
      <h2 id="actiModalTitle">Book a demo</h2>
      <p class="acti-modal-intro">
        Tell us a little about your requirements and we’ll prepare a suitable
        demonstration.
      </p>
      <form id="actiEnquiryForm">
        <div class="acti-form-grid">
          <label>
            Your name
            <input name="name" autocomplete="name" required="" />
          </label>
          <label>
            Work email
            <input name="email" type="email" autocomplete="email" required="" />
          </label>
          <label>
            Phone number
            <input name="phone" type="tel" autocomplete="tel" required="" />
          </label>
          <label>
            City
            <input name="city" autocomplete="address-level2" required="" />
          </label>
          <label>
            Organisation or practice
            <input name="organisation" autocomplete="organization" />
          </label>
          <label>
            Preferred demo date
            <input name="preferredDate" type="date" />
          </label>
          <label class="acti-config-field">
            Configuration of interest
            <select name="configuration">
              <option>Help me choose</option>
              <option>Knee</option>
              <option>Calf</option>
              <option>Full Leg</option>
            </select>
          </label>
          <label class="acti-config-field">
            Demo preference
            <select name="preference">
              <option>In-person demo</option>
              <option>Online walkthrough</option>
            </select>
          </label>
          <label class="acti-message-field">
            What would you like to explore?
            <textarea name="message" rows="3"></textarea>
          </label>
        </div>
        <button class="button acti-primary acti-submit" type="submit">
          Prepare enquiry email
          <i
            data-lucide="arrow-up-right"
            class="ui-icon"
            aria-hidden="true"
          ></i>
        </button>
      </form>
      <div
        id="actiFormMessage"
        class="acti-form-message"
        role="status"
        aria-live="polite"
      ></div>
      <p class="acti-contact-note">
        Enquiry email:
        <a href="mailto:${ACTI_CONTACT_EMAIL}">${ACTI_CONTACT_EMAIL}</a>
      </p>
    </section>
  `;
}
function openActiModal() {
  const modal = $("#actiModal"),
    backdrop = $("#actiBackdrop");
  modal?.classList.add("open");
  backdrop?.classList.add("open");
  setTimeout(() => $("#actiEnquiryForm input")?.focus(), 80);
}
function bindEnquiry() {
  $("#app").addEventListener("click", (e) => {
    if (e.target.closest("[data-acti-enquiry]")) openActiModal();
  });
  const closeActi = () => {
    $("#actiModal")?.classList.remove("open");
    $("#actiBackdrop")?.classList.remove("open");
  };
  $("#actiModalClose")?.addEventListener("click", closeActi);
  $("#actiBackdrop")?.addEventListener("click", closeActi);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeActi();
  });
  $("#actiEnquiryForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const fields = [
      ["Name", data.get("name")],
      ["Email", data.get("email")],
      ["Phone", data.get("phone")],
      ["City", data.get("city")],
      ["Organisation", data.get("organisation") || "Not specified"],
      ["Preferred demo date", data.get("preferredDate") || "Flexible"],
      ["Configuration", data.get("configuration")],
      ["Demo preference", data.get("preference")],
      ["Requirements", data.get("message") || "Not specified"],
    ];
    const body = fields
      .map(([label, value]) => `${label}: ${value}`)
      .join("\n");
    const mailto = `mailto:${ACTI_CONTACT_EMAIL}?subject=${encodeURIComponent("ActiCompress demo enquiry")}&body=${encodeURIComponent(body)}`;
    $("#actiFormMessage").innerHTML =
      `Your email app will open with the enquiry details. If it does not, <a href="${mailto}">send the enquiry by email</a>.`;
    window.location.href = mailto;
  });
}


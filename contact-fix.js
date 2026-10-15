(function () {
  "use strict";

  var phoneNumber = "+923308973085";

  function showCopiedMessage() {
    var existing = document.getElementById("contact-fix-phone-message");
    if (existing) existing.remove();

    var message = document.createElement("div");
    message.id = "contact-fix-phone-message";
    message.textContent = "Phone number copied";
    Object.assign(message.style, {
      position: "fixed",
      left: "50%",
      bottom: "24px",
      transform: "translateX(-50%)",
      zIndex: "2147483647",
      padding: "10px 16px",
      borderRadius: "999px",
      background: "#171717",
      color: "#fff",
      font: "500 13px/1.2 system-ui, sans-serif",
      opacity: "0",
      transition: "opacity 180ms ease"
    });
    document.body.appendChild(message);
    requestAnimationFrame(function () { message.style.opacity = "1"; });
    setTimeout(function () {
      message.style.opacity = "0";
      setTimeout(function () { message.remove(); }, 220);
    }, 2000);
  }

  function copyPhoneNumber() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(phoneNumber).catch(function () {});
    }
    var input = document.createElement("textarea");
    input.value = phoneNumber;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    try { document.execCommand("copy"); } catch (error) {}
    input.remove();
    return Promise.resolve();
  }

  function fieldLabel(field) {
    if (field.labels && field.labels.length) return field.labels[0].textContent.trim();
    return field.getAttribute("aria-label") || field.name || field.id || "Field";
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a[href]");
    if (!link) return;
    var href = link.getAttribute("href") || "";
    if (/tel:/i.test(href)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      copyPhoneNumber().then(showCopiedMessage);
    } else if (/mailto:/i.test(href)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.href = "mailto:business@corx.club";
    }
  }, true);

  document.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    var fields = Array.from(event.target.elements || []).filter(function (field) {
      return /^(INPUT|SELECT|TEXTAREA)$/i.test(field.tagName) &&
        !/^(submit|button|reset|image)$/i.test(field.type || "");
    });
    var lines = fields.map(function (field) {
      var value;
      if (field.type === "checkbox" || field.type === "radio") value = field.checked ? "Yes" : "No";
      else value = field.value || "";
      return fieldLabel(field) + ": " + value;
    });
    var mailto = "mailto:business@corx.club?" + new URLSearchParams({
      subject: "New project inquiry",
      body: lines.join("\n")
    }).toString();
    window.location.href = mailto;
  }, true);
}());

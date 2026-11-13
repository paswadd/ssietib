/*
 * SSIETIB global site behaviour
 * - responsive mobile navigation toggle
 * - desktop dropdown (keyboard + pointer + touch) with correct aria-expanded
 * - active primary-nav highlighting based on the current file name
 * - header shadow on scroll
 * - current year in the footer
 * - client-side contact form handler
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    /* ---- Mobile navigation ---- */
    var toggle = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-nav-menu]");

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var isOpen = menu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
      });

      menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          menu.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    /* ---- Desktop dropdowns ---- */
    var dropdowns = document.querySelectorAll("[data-nav-dropdown]");

    function closeDropdown(dd) {
      dd.classList.remove("open");
      var btn = dd.querySelector("[data-dropdown-toggle]");
      if (btn) btn.setAttribute("aria-expanded", "false");
    }

    dropdowns.forEach(function (dd) {
      var btn = dd.querySelector("[data-dropdown-toggle]");
      if (!btn) return;

      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var open = dd.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(open));
      });

      dd.addEventListener("mouseenter", function () {
        btn.setAttribute("aria-expanded", "true");
      });
      dd.addEventListener("mouseleave", function () {
        if (!dd.classList.contains("open")) btn.setAttribute("aria-expanded", "false");
      });
      dd.addEventListener("focusin", function () {
        btn.setAttribute("aria-expanded", "true");
      });
      dd.addEventListener("focusout", function () {
        window.setTimeout(function () {
          if (!dd.contains(document.activeElement)) closeDropdown(dd);
        }, 0);
      });
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest("[data-nav-dropdown]")) {
        dropdowns.forEach(closeDropdown);
      }
    });

    /* ---- Active navigation highlighting ---- */
    var current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!current) current = "index.html";

    document.querySelectorAll("[data-nav-link]").forEach(function (link) {
      var raw = link.getAttribute("href") || "";
      var target = raw.split("#")[0].split("/").pop().toLowerCase();
      if (!target) target = "index.html";
      if (target === current) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });

    /* ---- Header elevation on scroll ---- */
    var header = document.querySelector("[data-header]");
    if (header) {
      var onScroll = function () {
        header.classList.toggle("is-scrolled", window.scrollY > 8);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* ---- Footer year (fixed) ---- */
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = "2026";
    });

    /* ---- Contact form (demo handler) ---- */
    var form = document.querySelector("[data-contact-form]");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var status = form.querySelector("[data-form-status]");
        if (status) {
          status.textContent =
            "Thank you. Your enquiry has been recorded and a member of our team will respond shortly.";
          status.classList.remove("hidden");
          status.setAttribute("role", "status");
          status.focus();
        }
        form.reset();
      });
    }
  });
})();

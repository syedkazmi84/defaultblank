/* ============================================================
   AuthorWings — Service Comparison enhancements
   Progressive enhancement only: the table is fully usable
   without this script. Safe to load in the footer.
   ============================================================ */
(function () {
  "use strict";

  function init() {
    var root = document.querySelector(".awp-compare");
    if (!root || root.dataset.awpReady === "1") return;
    root.dataset.awpReady = "1";

    // Marks that JS is live; only then does the reveal animation hide content.
    root.classList.add("awp-js");

    var table = root.querySelector(".awp-table");

    /* 1) Column cross-highlight on hover (desktop pointer only) ---- */
    if (table && window.matchMedia && window.matchMedia("(hover: hover)").matches) {
      table.addEventListener("mouseover", function (e) {
        var cell = e.target.closest("td, th");
        if (!cell || cell.hasAttribute("colspan")) return;
        var idx = cell.cellIndex + 1;           // 1-based
        if (idx < 2) return;                    // skip feature-name column
        table.classList.remove("awp-hl-2", "awp-hl-3", "awp-hl-4");
        table.classList.add("awp-hl-" + idx);
      });
      table.addEventListener("mouseleave", function () {
        table.classList.remove("awp-hl-2", "awp-hl-3", "awp-hl-4");
      });
    }

    /* 2) Scroll reveal for the intro / table / CTAs --------------- */
    var reveals = root.querySelectorAll(".awp-reveal");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach(function (el) { el.classList.add("awp-in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("awp-in");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      reveals.forEach(function (el) { io.observe(el); });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* main.js : perilaku umum semua halaman. Dimuat SETELAH components.js */
(function () {
  // Fokus ke input saat bar pencarian terbuka
  var sb = document.getElementById("searchBar");
  if (sb)
    sb.addEventListener("shown.bs.collapse", function () {
      document.getElementById("q").focus();
    });

  // Desktop: dropdown dibuka dengan hover (CSS), klik menu induk langsung pindah halaman.
  // HP: tetap klik untuk membuka sub-menu.
  if (matchMedia("(min-width:992px)").matches)
    document
      .querySelectorAll("#topbar .top-links .dropdown-toggle")
      .forEach(function (a) {
        a.removeAttribute("data-bs-toggle");
      });

  // ===== SCROLL REVEAL =====
  // Stagger: anak [data-stagger] muncul berurutan (diulang per baris di grid 3 kolom)
  document.querySelectorAll("[data-stagger]").forEach(function (group) {
    var cols = matchMedia("(min-width:768px)").matches ? 3 : 1;
    Array.prototype.forEach.call(group.children, function (el, i) {
      el.style.setProperty("--d", (i % cols) * 0.12 + "s");
    });
  });
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) {
      el.classList.add("show", "done");
    });
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.classList.add("show");
        io.unobserve(el);
        el.addEventListener("transitionend", function onEnd(e) {
          if (e.target !== el || e.propertyName !== "transform") return;
          el.classList.add("done");
          el.removeEventListener("transitionend", onEnd);
        });
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
  );
  items.forEach(function (el) {
    io.observe(el);
  });
})();

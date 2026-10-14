/* components.js : header + footer yang dipakai SEMUA halaman.
   Edit menu/footer cukup di file ini.
   Pemakaian di tiap halaman:
     <body data-page="nama-halaman">
     <div id="site-header"></div> ... <div id="site-footer"></div>
     <script src="(../)js/components.js" data-base="(../)"></script>
   data-base: kosong untuk index.html, "../" untuk halaman di folder page/ */
(function () {
  var B = document.currentScript.getAttribute("data-base") || ""; // awalan ke root
  var P = B === "" ? "page/" : ""; // awalan ke folder page
  var page = document.body.getAttribute("data-page") || "";
  var act = function (n) {
    return page === n ? " active" : "";
  };

  /* ---- data menu dropdown ---- */
  var MENUS = [
    {
      f: "akademik",
      t: "Akademik",
      i: [
        ["kurikulum", "Kurikulum"],
        ["kalender", "Kalender Akademik"],
        ["dosen", "Dosen &amp; Staf"],
        ["fasilitas", "Fasilitas"],
      ],
    },
  ];
  var items = function (m) {
    return m.i
      .map(function (x) {
        return (
          '<li><a class="dropdown-item" href="' +
          P +
          m.f +
          ".html#" +
          x[0] +
          '">' +
          x[1] +
          "</a></li>"
        );
      })
      .join("");
  };
  var topMenus = MENUS.map(function (m) {
    return (
      '<div class="dropdown"><a class="dropdown-toggle" href="' +
      P +
      m.f +
      '.html" data-bs-toggle="dropdown" aria-expanded="false">' +
      m.t +
      '</a><ul class="dropdown-menu shadow">' +
      items(m) +
      "</ul></div>"
    );
  }).join("");
  var mobileMenus = MENUS.map(function (m, k) {
    return (
      '<li class="nav-item dropdown d-lg-none' +
      (k === 0 ? " border-top border-secondary mt-2 pt-2" : "") +
      '"><a class="nav-link dropdown-toggle' +
      act(m.f) +
      '" href="' +
      P +
      m.f +
      '.html" data-bs-toggle="dropdown" aria-expanded="false">' +
      m.t +
      '</a><ul class="dropdown-menu shadow">' +
      items(m) +
      "</ul></li>"
    );
  }).join("");

  /* ---- sosmed (dipakai di header & footer) ---- */
  var SOSMED = [
    ["Instagram", "instagram", "https://www.instagram.com/kipolmedofficial"],
    ["YouTube", "youtube", "https://www.youtube.com/@kipolmedofficial9300"],
    ["Facebook", "facebook", "https://www.facebook.com/official.polmed/"],
    ["X", "twitter-x", "https://twitter.com/polmed_official"],
    [
      "LinkedIn",
      "linkedin",
      "https://www.linkedin.com/school/politeknik-negeri-medan/",
    ],
    [
      "TikTok",
      "tiktok",
      "https://www.tiktok.com/@humaspolmed?_r=1&amp;_t=ZS-9AMXia8Gfp9",
    ],
  ];
  var sosmed = SOSMED.map(function (s) {
    return (
      '<a href="' +
      s[2] +
      '" aria-label="' +
      s[0] +
      '"><i class="bi bi-' +
      s[1] +
      '"></i></a>'
    );
  }).join("");

  var logo = B + "pict/logo.png";
  var home = B + "index.html";

  /* ---- HEADER ---- */
  var header =
    '<div id="topbar"><div class="container py-3"><div class="d-flex justify-content-between align-items-center">' +
    '<a class="d-flex align-items-center gap-3" href="' +
    home +
    '"><img src="' +
    logo +
    '" alt="" width="56" height="56" class="rounded-circle" onerror="this.style.visibility=\'hidden\'" />' +
    '<span class="lh-sm"><strong class="d-block brand-title">POLITEKNIK NEGERI MEDAN</strong><small class="opacity-75">Jurusan Teknik Komputer dan Informatika</small></span></a>' +
    '<div class="d-flex flex-column align-items-end gap-2"><div class="d-flex align-items-center gap-3">' +
    '<div class="social d-none d-md-flex gap-3">' +
    sosmed +
    "</div>" +
    '<span class="divider d-none d-md-block"></span>' +
    '<button class="btn btn-link p-0 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#searchBar" aria-controls="searchBar" aria-label="Buka pencarian"><i class="bi bi-search"></i></button></div>' +
    '<nav class="top-links d-none d-lg-flex align-items-center gap-4">' +
    topMenus +
    '<a href="' +
    P +
    'kontak.html">Kontak</a>' +
    "</nav></div></div></div>" +
    '<div id="searchBar" class="collapse bg-white"><div class="container py-3">' +
    '<form action="' +
    P +
    'pencarian.html" method="get" role="search" class="d-flex align-items-center gap-2 border border-dark rounded-pill px-3 ms-auto" style="max-width:640px">' +
    '<i class="bi bi-search text-dark"></i><input id="q" name="q" type="search" class="form-control border-0 shadow-none bg-transparent px-1" placeholder="Telusuri" autocomplete="off" required />' +
    '<button type="button" class="btn-close" data-bs-toggle="collapse" data-bs-target="#searchBar" aria-label="Tutup pencarian"></button></form></div></div></div>' +
    '<nav id="mainbar" class="navbar navbar-expand-lg navbar-dark sticky-top p-0"><div class="container">' +
    '<span class="navbar-brand d-lg-none fw-bold">Menu</span>' +
    '<button class="navbar-toggler border-light my-2" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Buka menu"><span class="navbar-toggler-icon"></span></button>' +
    '<div class="collapse navbar-collapse" id="mainNav"><ul class="navbar-nav me-auto">' +
    '<li class="nav-item"><a class="nav-link' +
    act("index") +
    '" href="' +
    home +
    '">Beranda</a></li>' +
    '<li class="nav-item"><a class="nav-link' +
    act("tentang-kami") +
    '" href="' +
    P +
    'tentang-kami.html">Tentang Kami</a></li>' +
    '<li class="nav-item"><a class="nav-link' +
    act("program-studi") +
    '" href="' +
    P +
    'program-studi.html">Program Studi</a></li>' +
    '<li class="nav-item"><a class="nav-link' +
    act("berita") +
    '" href="' +
    P +
    'berita.html">Berita</a></li>' +
    mobileMenus +
    '<li class="nav-item d-lg-none"><a class="nav-link' +
    act("kontak") +
    '" href="' +
    P +
    'kontak.html">Kontak</a></li>' +
    "</ul></div></div></nav>";

  /* ---- FOOTER ---- */
  var footer =
    '<footer class="pt-5 pb-3 text-center"><div class="container reveal">' +
    '<div class="footer-social d-flex justify-content-center gap-4 mb-4">' +
    sosmed +
    "</div>" +
    '<a class="d-inline-flex align-items-center gap-3 text-white text-decoration-none mb-4" href="' +
    home +
    '"><img src="' +
    logo +
    '" alt="" width="64" height="64" class="rounded-circle" onerror="this.style.visibility=\'hidden\'" />' +
    '<span class="lh-sm text-start"><strong class="d-block fs-5">POLITEKNIK NEGERI MEDAN</strong><span class="opacity-75">Jurusan Teknik Komputer dan Informatika</span></span></a>' +
    '<p class="mb-3 mx-auto" style="max-width:520px"><i class="bi bi-geo-alt-fill opacity-75 me-2"></i>Jl. Almamater No. 1, Padang Bulan, Kec. Medan Baru, Kota Medan, Sumatera Utara 20155</p>' +
    /* GANTI email & telepon dengan data asli jurusan */
    '<p class="footer-contact small mb-4">Email: <a href="mailto:jki@polmed.ac.id">jki@polmed.ac.id</a> | Ponsel: <a href="tel:061- 8211235">+62 (061) 8211235</a> | <a href="' +
    P +
    'kontak.html">Halaman Kontak</a></p>' +
    '<div class="border-top border-light border-opacity-25 pt-3 small opacity-75">&copy; 2026 Jurusan Teknik Komputer dan Informatika, Politeknik Negeri Medan. Hak cipta dilindungi.</div>' +
    "</div></footer>";

  var h = document.getElementById("site-header"),
    f = document.getElementById("site-footer");
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;
})();

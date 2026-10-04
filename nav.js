// Sidebar navigation, shared by every page.
// To add a page: add one line to the right list below. Paths are from the site's main folder.
(function () {
  var pages = [
    { group: null, items: [
      { label: "Home", href: "index.html", icon: "home" }
    ]},
    { group: "Experience", items: [
      { label: "Engineering Intern, Sepro America", href: "experience/sepro.html", icon: "briefcase" }
    ]},
    { group: "Projects", items: [
      { label: "Phone Deterrent Device", href: "projects/phone-deterrent.html", icon: "phone" },
      { label: "Structural Bracket", href: "projects/bracket.html", icon: "bracket" },
      { label: "Galaxy Blitz", href: "projects/galaxy-blitz.html", icon: "game" },
      { label: "Marble Dispenser", href: "projects/marble-dispenser.html", icon: "marble" }
    ]},
    { group: null, items: [
      { label: "About me", href: "about.html", icon: "user" }
    ]}
  ];

  var icons = {
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    bracket: '<path d="M5 4v16h14"/><path d="M5 9l10 11"/>',
    game: '<rect x="2" y="7" width="20" height="11" rx="4"/><path d="M7 11v4M5 13h4"/><circle cx="15.5" cy="12" r="0.8"/><circle cx="17.5" cy="14" r="0.8"/>',
    marble: '<circle cx="12" cy="12" r="8"/><circle cx="9.5" cy="9.5" r="2"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/>'
  };

  // Work out where the site's main folder is, based on where this script lives
  var script = document.currentScript;
  var root = new URL(".", script.src);
  var here = location.pathname.replace(/\/$/, "/index.html");

  var nav = document.createElement("nav");
  nav.className = "sidenav";
  nav.setAttribute("aria-label", "Site");

  var html = "";
  pages.forEach(function (section) {
    html += '<div class="sidenav-group">';
    if (section.group) html += '<span class="sidenav-heading">' + section.group + "</span>";
    section.items.forEach(function (item) {
      var url = new URL(item.href, root);
      var current = url.pathname === here;
      html += '<a href="' + url.href + '"' + (current ? ' class="current" aria-current="page"' : "") + ' title="' + item.label + '">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true">' + icons[item.icon] + "</svg>" +
        '<span class="sidenav-label">' + item.label + "</span></a>";
    });
    html += "</div>";
  });
  nav.innerHTML = html;
  document.body.prepend(nav);
})();
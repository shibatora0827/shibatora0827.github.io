/* =========================================================
   ICT-shibasaka — main.js
   - 移行バナーのクローズ（localStorage で記憶）
   - モバイルナビトグル
   - ナビゲーションのアクティブリンク自動付与
   ========================================================= */

(function () {
  "use strict";

  // ---------- Migration banner close ----------
  var banner = document.querySelector(".migration-banner");
  var bannerClose = document.querySelector(".migration-banner__close");
  if (banner && bannerClose) {
    try {
      if (localStorage.getItem("ict-shibasaka.bannerClosed") === "1") {
        banner.classList.add("is-hidden");
      }
    } catch (e) { /* ignore */ }

    bannerClose.addEventListener("click", function () {
      banner.classList.add("is-hidden");
      try {
        localStorage.setItem("ict-shibasaka.bannerClosed", "1");
      } catch (e) { /* ignore */ }
    });
  }

  // ---------- Mobile nav toggle ----------
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
      var expanded = nav.classList.contains("is-open");
      navToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
    // close on link click (mobile)
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
      });
    });
  }

  // ---------- Active nav link by current path ----------
  try {
    var path = (location.pathname || "").split("/").pop() || "index.html";
    document.querySelectorAll(".nav a").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (href === path || (path === "" && href === "index.html")) {
        a.classList.add("active");
      }
    });
  } catch (e) { /* ignore */ }
})();

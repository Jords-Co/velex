"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/digerati/skipToMainContent.ts
  var skipToMainContent = () => {
    const trigger = document.querySelector('[dd-skip-to-main-content="trigger"]'), target = document.querySelector('[dd-skip-to-main-content="target"]');
    if (!trigger || !target) {
      return;
    }
    ["click", "keypress"].forEach((event) => {
      trigger.addEventListener(event, (e) => {
        if (e.type === "keydown" && e.which !== 13) {
          return;
        }
        e.preventDefault();
        target.setAttribute("tabindex", "-1");
        target.focus();
      });
    });
  };

  // src/digerati/currentYear.ts
  var currentYear = () => {
    const target = document.querySelector('[dd-date="current-year"]');
    if (!target) {
      return;
    }
    const fullYear = (/* @__PURE__ */ new Date()).getFullYear();
    target.innerText = fullYear.toString();
  };

  // src/velex/autoPlayTabs.ts
  var autoPlayTabs = () => {
    var tabInterval;
    clearInterval(tabInterval);
    tabLoop2();
    function tabLoop2() {
      tabInterval = setInterval(function() {
        var $allImages = $(".w-tab-pane");
        var $allTabs = $(".layout219_tabs-link");
        console.log($allTabs);
        var $currentImage = $(".w-tab-content").children(".w--tab-active:first");
        var $nextImage = $currentImage.next();
        var $current = $(".layout219_tabs-menu").children(".w--current:first");
        var $next = $current.next();
        if ($next.length) {
          $allTabs.attr("aria-selected", false);
          $next.attr("aria-selected", true);
          $allTabs.removeClass("w--current");
          $next.addClass("w--current");
          $allImages.removeClass("w--tab-active");
          $nextImage.addClass("w--tab-active");
        } else {
          $allTabs.removeClass("w--current");
          $(".layout219_tabs-link:first").addClass("w--current");
          $allTabs.attr("aria-selected", false);
          $(".layout219_tabs-link:first").attr("aria-selected", true);
          $allImages.removeClass("w--tab-active");
          $(".w-tab-pane:first").addClass("w--tab-active");
        }
        ;
      }, 5e3);
    }
    ;
    $(".layout219_tabs-link").click(function(e) {
      e.preventDefault();
      $tab = $(this).data("wTab");
      $image = $(`.w-tab-pane[data-w-tab="${$tab}"]`);
      $(".layout219_tabs-link").removeClass("w--current");
      $(".w-tab-pane").removeClass("w--tab-active");
      $(this).addClass("w--current");
      $($image).addClass("w--tab-active");
      clearInterval(tabInterval);
      tabLoop2();
    });
  };

  // src/index.ts
  window.Webflow || [];
  window.Webflow.push(() => {
    skipToMainContent();
    currentYear();
    autoPlayTabs();
  });
})();
//# sourceMappingURL=index.js.map

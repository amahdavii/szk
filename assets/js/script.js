

$(document).ready(function () {
  function menuscroll() {
    let navmenu = $(".header__nav");
    if ($(window).scrollTop() > 50) {
      navmenu.addClass("fixed-top is-scrolling");
    } else {
      navmenu.removeClass("is-scrolling");
    }
  }

  menuscroll();
  $(window).on("scroll", menuscroll);

  let sideNav = $("#navbar");
  sideNav.on("show.bs.collapse", function () {
    $(this).parents(".nav-menu").addClass("menu-is-open");
  });

  sideNav.on("hide.bs.collapse", function () {
    $(this).parents(".nav-menu").removeClass("menu-is-open");
  });

  $("#header__nav .header__nav-items .header__nav-item a").on(
    "click",
    function (e) {
      let target = $(this.hash);
      if (target.length) {
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          400
        );
      }
    }
  );
});

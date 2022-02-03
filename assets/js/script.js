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

let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

let tabContent1 = document.getElementById("tab-content-1");
let tabContent2 = document.getElementById("tab-content-2");
let tabContent3 = document.getElementById("tab-content-3");

tab1.addEventListener("click", function () {
  tabContent2.style.display = "none";
  tabContent3.style.display = "none";
  tabContent1.style.display = "block";
  tab1.classList.add("active-tab");
  tab2.classList.remove("active-tab");
  tab3.classList.remove("active-tab");
});

tab2.addEventListener("click", function () {
  tabContent2.style.display = "block";
  tabContent1.style.display = "none";
  tabContent3.style.display = "none";
  tab2.classList.add("active-tab");
  tab1.classList.remove("active-tab");
  tab3.classList.remove("active-tab");
});

tab3.addEventListener("click", function () {
  tabContent3.style.display = "block";
  tabContent1.style.display = "none";
  tabContent2.style.display = "none";
  tab3.classList.add("active-tab");
  tab1.classList.remove("active-tab");
  tab2.classList.remove("active-tab");
});

fetch("http://griffinmart.com/api/resumes")
  .then(function (response) {
    // The API call was successful!
    console.log(response.json());

    return response.json();
  })
  .then(function (data) {
    // This is the JSON from our response
    console.log(data);
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });

let name = document.getElementById("fname");
let formData = new FormData();

formData.append("name", name);
fetch("/resumes", { method: "POST", body: formData });

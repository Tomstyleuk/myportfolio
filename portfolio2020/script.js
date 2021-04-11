(function (window, document, $) {
  $(function () {
    // "use strict";

    /*--------- Language change ---------*/
    const glot = new Glottologist();

    //loading JSON
    glot.import("lang.json").then(() => {
      glot.render();
    });

    const de = document.getElementById("de");
    const en = document.getElementById("en");

    de.addEventListener("click", e => {
      e.preventDefault();
      glot.render("de");
    });

    en.addEventListener("click", e => {
      e.preventDefault();
      glot.render("en");
    });


    window.addEventListener("load", function () {
      if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) {
        var script = $("<script>").attr({
          type: "text/javascript",
          autoClose: true,
          disableOnMobile: false,
          src:
            "https://cdn.jsdelivr.net/npm/mailtoui@1.0.3/dist/mailtoui-min.js"
        });
        $("body")[0].appendChild(script[0]);
      }

      if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) {
        var script = $("<script>").attr({
          type: "text/javascript",
          autoClose: true,
          disableOnMobile: false,
          src:
            "https://cdn.jsdelivr.net/npm/mailtoui@1.0.3/dist/mailtoui-min.js"
        });
        $("body")[0].appendChild(script[0]);
      }
    });


    $('a[href^="#"]').on("click", function () {
      const speed = 600;
      const href = $(this).attr("href");
      const target = $(href == "#" || href == "" ? "html" : href);
      const position = target.offset().top;
      $("body,html").animate({ scrollTop: position }, speed, "swing");
      return false;
    });

    function animation() {
      $(".fadeInUp").each(function () {
        const target = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > target - windowHeight) {
          $(this).css("opacity", "1");
          $(this).css("transform", "translateY(0)");
        }
      });
    }
    animation();
    $(window).scroll(function () {
      animation();
    });

    const EffectTime = 1100;
    const DelayTime = 100;
    $(".fadein").css({ opacity: 0 });

    $(window).on("scroll load", function () {
      const scMiddle = $(this).scrollTop() + $(this).height() / 2;
      const listPos = $(".txt01").offset().top;
      if (listPos < scMiddle) {
        $(".fadein").each(function (index) {
          $(this)
            .delay(DelayTime * index)
            .animate({ opacity: 1 }, EffectTime);
        });
      }
    });

    // $("article").flowtype({
    //   minimum: 375,
    //   maximum: 1024,
    //   minFont: 16,
    //   maxFont: 24
    // });

  });
})(window, document, jQuery);

const headImg = document.querySelector('#head_img')
const sideNav = document.querySelector('#vertical_nav')
const menu = document.querySelector('nav ul')
const introTop = document.querySelector('#top_intro')

const opacity = function (cl) {
  cl.style.opacity = '1'
}

const trans = function (el, sec) {
  el.style.transition = `all ${sec}s ease`
}

const typed3 = new Typed("#frontend", {
  strings: ["Hi! How are you today?", "Thank you for visiting!", "Please check out my portfolio", "Like what you see?", "Happy to hear from you =)"],
  typeSpeed: 50,
  backSpeed: 15,
  smartBackspace: true,
  contentType: "html",
  loop: false
})

window.addEventListener('load', function (e) {
  e.preventDefault()

  setTimeout(() => {
    headImg.style.clipPath = 'circle(122.0% at 16% 11%)'
    trans(headImg, 1.5)

    trans(menu, 8)
    opacity(menu)
    menu.style.display = 'flex'

    trans(sideNav, 3)
    opacity(sideNav)
    trans(introTop, 8)
    opacity(introTop, 15)
  }, 1500)

  if (window.innerWidth < '600') {
    setTimeout(() => {
      opacity(introTop, 4)
    }, 1200)

  }
})


let myElements = document.querySelectorAll(".work_inner_container");

myElements.forEach(function (myElement) {
  let mdskew = new mdSkew(myElement);
  mdskew.init();
});

let mdskew = new mdSkew(myElements, {
  min: 0,
  max: 4,
  speed: 10,
  setCSS: true,
  transition: 'transform .8s cubic-bezier(.215,.61,.355,1)',
  transformOrigin: '50% 50%'
});

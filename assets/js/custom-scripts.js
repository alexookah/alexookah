(function ($) {
  "use strict";

  $.fn.andSelf = function () {
    return this.addBack.apply(this, arguments);
  };

  /* Loader Code Start */
  $(window).on("load", function () {
    $(".section-loader").fadeOut("slow");

    var $container = $(".portfolioContainer");
    $container.isotope({
      filter: "*",
      animationOptions: {
        queue: true,
      },
    });

    $(".portfolio-nav li").click(function () {
      $(".portfolio-nav .current").removeClass("current");
      $(this).addClass("current");

      var selector = $(this).attr("data-filter");
      $container.isotope({
        filter: selector,
        animationOptions: {
          queue: true,
        },
      });
      return false;
    });

    $(".phonenumber").each(function (i) {
      const href = $(this).attr("href");
      $(this).removeAttr("href");
      const phone = href.replace("tel:+30", "+30 ");
      const clickToShow = "click to show";

      $(this).html($(this).html().replace(phone, clickToShow));
      $(this).one("click", function (e) {
        e.preventDefault();
        $(this).html($(this).html().replace(clickToShow, phone));
        $(this).attr("href", href);
      });
    });
  });
  /* Loader Code End */

  // var height = $('.mh-service-item').height();
  // if($(window).width()){
  //   $('.mh-service-item').css('height', height);
  //   $('.mh-service-item').css('height', height);
  // }

  $(window).on("load", function () {
    $("#header-slider #animation-slide").owlCarousel({
      autoHeight: true,
      items: 1,
      loop: true,
      autoplay: true,
      dots: false,
      nav: false,
      autoplayTimeout: 3000,
      navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>",
      ],
      animateIn: "zoomIn",
      animateOut: "fadeOutDown",
      autoplayHoverPause: false,
      touchDrag: true,
      mouseDrag: true,
    });
    $("#animation-slide").on("translate.owl.carousel", function () {
      $(this)
        .find(".owl-item .slide-text > *")
        .removeClass("fadeInUp animated")
        .css("opacity", "0");
      $(this)
        .find(".owl-item .slide-img")
        .removeClass("fadeInRight animated")
        .css("opacity", "0");
    });
    $("#animation-slide").on("translated.owl.carousel", function () {
      $(this)
        .find(".owl-item.active .slide-text > *")
        .addClass("fadeInUp animated")
        .css("opacity", "1");
      $(this)
        .find(".owl-item.active .slide-img")
        .addClass("fadeInRight animated")
        .css("opacity", "1");
    });
  });

  /*
  |====================
  | Mobile NAv trigger
  |=====================
  */

  var trigger = $(".navbar-toggler"),
    overlay = $(".overlay"),
    navc = $(".navbar-collapse"),
    active = false;

  $(".navbar-toggler, .navbar-nav li a, .overlay").on("click", function () {
    $(".navbar-toggler").toggleClass("active");
    //   $('#js-navbar-menu').toggleClass('active');
    //   $('.navbar-collapse').toggleClass('show');
    overlay.toggleClass("active");
    navc.toggleClass("active");
  });

  /*
  |=================
  | Onepage Nav
  |================
  */

  $("#mh-header").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
  });

  /*
  |=================
  | fancybox
  |================
  */

  $("[data-fancybox]").fancybox({});

  /*
  |===============
  | WOW ANIMATION
  |==================
  */
  // var wow = new WOW({
  //   mobile: false  // trigger animations on mobile devices (default is true)
  // });
  //wow.init();

  /*
  |=================
  | AOS
  |================
  */

  AOS.init({
    // Global settings:
    disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    once: false,
  });

  /*
  | ==========================
  | NAV FIXED ON SCROLL
  | ==========================
  */
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".nav-scroll").addClass("nav-strict");
    } else {
      $(".nav-scroll").removeClass("nav-strict");
    }
  });

  /*
  | ==========================
  | NAV FIXED ON WINDOWS RESIZE
  | ==========================
  */
  // $(window).resize(function () {
  //   var sWidth = $(window).width();
  //   if (sWidth > 991) {
  //     $('.navbar-collapse').removeClass('active');
  //     $('.navbar-toggler').removeClass('active');
  //     overlay.removeClass('active');
  //     navc.removeClass('active');
  //   }
  // });

  /*
  |=================
  | Progress bar
  |================
  */
  $(".determinate").each(function () {
    var width = $(this).text();
    $(this).css("width", width).empty().append('<i class="fas fa-circle"></i>');
  });

  /*
  |=================
  | Portfolio mixin
  |================
  */
  $("#portfolio-item").mixItUp();

  /*
  |=================
  | Client review
  |================
  */
  $("#mh-client-review").owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    smartSpeed: 450,
    stopOnHover: true,
    animateIn: "slideInRight",
    animateOut: "slideOutLeft",
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  });

  /*
  |=================
  | Project review slide
  |================
  */
  $(".mh-project-testimonial").owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 450,
    stopOnHover: true,
    animateIn: "slideInRight",
    animateOut: "slideOutLeft",
    autoplayHoverPause: true,
    pagination: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  });

  /*
  |=================
  | Single Project review
  |================
  */
  $("#single-project").owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 450,
    stopOnHover: true,
    animateIn: "slideInRight",
    animateOut: "slideOutLeft",
    autoplayHoverPause: true,
    pagination: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  });

  /*
  |=================
  | Project review slide
  |================
  */
  $(".mh-single-project-slide-by-side").owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: true,
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
    dots: false,
    autoplay: false,
    smartSpeed: 450,
    stopOnHover: true,
    animateIn: "slideInRight",
    animateOut: "slideOutLeft",
    autoplayHoverPause: true,
    pagination: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  });

  /*
  |=================
  | Single client review
  |================
  */
  $("#mh-single-client-review").owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    smartSpeed: 450,
    stopOnHover: true,
    animateIn: "slideInRight",
    animateOut: "slideOutLeft",
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  });

  /*
  |=================
  | Clint review slide
  |================
  */
  $("#mh-2-client-review").owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    smartSpeed: 450,
    stopOnHover: true,
    animateIn: "slideInRight",
    animateOut: "slideOutLeft",
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 2,
      },
    },
  });

  // Smooth Scroll
  $(function () {
    $("a[href*=\\#]:not([href=\\#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            600
          );
          return false;
        }
      }
    });
  });

  /*
  |=================
  | CONTACT FORM
  |=================
  */

  $("#contactForm")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
      } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
      }
    });

  function submitForm() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    $.ajax({
      type: "POST",
      url: "process.php",
      data: "name=" + name + "&email=" + email + "&message=" + message,
      success: function (text) {
        if (text == "success") {
          formSuccess();
        } else {
          formError();
          submitMSG(false, text);
        }
      },
    });
  }
  function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Sent!");
  }
  function formError() {
    $("#contactForm")
      .removeClass()
      .addClass("shake animated")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          $(this).removeClass();
        }
      );
  }
  function submitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h3 text-center fadeInUp animated text-success";
    } else {
      var msgClasses = "h3 text-center shake animated text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
  }


  $.getJSON("projects/data.json", function (data) {
    // console.log(data)

    // forEach Project in json
    $.each(data, function () {
      const currentProject = this.project;
      // console.log(currentProject);
      ///////    portofolio icons
      let html = '<div class="grid-item col-md-4 col-sm-6 col-xs-12 ' + this.categ + '">';
      html += "<figure>";
      html += '<img src="projects/' + this.project + "/" + this.frontImage + '">';
      html += '<figcaption class="fig-caption">';

      // icon
      if (this.hasOwnProperty("protected")) {
        html += '<i class="fas fa-lock"></i>';
      } else {
        html += '<i class="fas fa-search"></i>';
      }

      html += '<h5 class="title">' + this.title + "</h5>";
      html += '<span class="sub-title">' + this.subTitle + "<br>" + this.releaseDate + "</span>";

      // check for protected projects
      if (!this.hasOwnProperty("protected")) {
        html += '<a data-fancybox data-src="#' + currentProject + '" id="gallery-' + currentProject + '" data-touch="false"></a>';
      }

      html += "</figcaption>";
      html += "</figure >";
      html += "</div >";
      // console.log(html)
      $(".portfolioContainer").append(html);

      // if (this.hasOwnProperty('protected')) { continue }
      ///////    modal info
      let port = '<div class="mh-portfolio-modal" id="' + currentProject + '">';
      port += '<div class="container">';
      port += '<div class="row mh-portfolio-modal-inner">';

      if (this.type == "desktop") {
        port += '<div class="col-sm-12">';
      } else {
        port += '<div class="col-sm-5">';
      }

      port += "<h2>" + this.title + "</h2>";
      port += '<p class="mh-portfolio-date">' + this.subTitle + " - " + this.releaseDate + "</p>";
      port += this["description"];
      port += '<div class="mh-about-tag"> <ul>';

      // keywords
      $.each(this.keywords, function (k, keyword) {
        port += "<li><span>" + keyword + "</span></li>";
      });
      port += "</ul></div >";

      // Demo Links
      $.each(this.demoLinks, function (k, eachLink) {
        // console.log(k, link)
        port += '<p><a href="' + eachLink.link + '" target="_blank" class="btn btn-fill">';
        port += '<i class="' + eachLink.icon + ' demoLinks"></i>';
        port += eachLink.name;
        port += "</a></p>";
      });

      port += "</div >";
      if (this.type == "cover") {
        port += '<div class="col-sm-7 d-flex align-items-center">';
      } else if (this.type == "desktop") {
        port += '<div class="col-sm-12">';
      } else {
        port += '<div class="col-sm-7">';
      }
      port += '<div class="mh-portfolio-modal-img" style="text-align:center">';

      // <!-- The BlueImp Gallery as inline carousel -->
      // port += '<a class="my-screen-nav-button left-button">‹</a>'

      if (this.type == "mobile") {
        port += '<div class="marvel-device iphone-x">';
        port += '   <div class="notch">';
        port += '     <div class="camera"></div>';
        port += '     <div class="speaker"></div>';
        port += "   </div>";
        port += '   <div class="top-bar"></div>';
        port += '   <div class="sleep"></div>';
        port += '   <div class="bottom-bar"></div>';
        port += '   <div class="volume"></div>';
        port += '   <div class="overflow">';
        port += '     <div class="shadow shadow--tr"></div>';
        port += '     <div class="shadow shadow--tl"></div>';
        port += '     <div class="shadow shadow--br"></div>';
        port += '     <div class="shadow shadow--bl"></div>';
        port += "   </div>";
        // port += '<div class="inner-shadow"></div>'

        port += '   <div class="screen" style="background-color: black;">';
        // <!-- Content goes here -->
        port += '   <div id="blueimp-gallery-carousel-' + currentProject + '" class="blueimp-gallery blueimp-gallery-carousel gallery-mobile-style img-fluid">';
        port += '     <div class="slides"></div>';
        port += '     <h3 class="title"></h3>';
        port += '     <a class="prev">‹</a>';
        port += '     <a class="next">›</a>';
        port += '     <a class="fullscreen"></a>';
        port += '     <a class="play-pause"></a>';
        port += '     <ol class="indicator"></ol>';
        port += "   </div>";
        port += "</div>";
      } else if (this.type == "desktop") {
        port +=
          '<div id="blueimp-gallery-carousel-' + currentProject + '" class="blueimp-gallery blueimp-gallery-carousel gallery-desktop-style">';
        port += '  <div class="slides"></div>';
        port += '  <h3 class="title"></h3>';
        port += '  <a class="prev">‹</a>';
        port += '  <a class="next">›</a>';
        port += '  <a class="fullscreen"></a>';
        port += '  <a class="play-pause"></a>';
        port += '  <ol class="indicator"></ol>';
        port += "</div>";
      } else if (this.type == "cover") {
        port +=
          '<img class="img-fluid" src="projects/' + this.project + "/" + this.images[0] + '">';
      }

      port += "</div>";
      // port += '<a class="my-screen-nav-button right-button">›</a>'
      port += "</div>";
      port += "</div>";
      port += "</div>";
      port += "</div>";
      port += "</div>";

      $(".mh-portfolio").append(port);

      // portfolio images in slider
      if (this.type != "cover") {
        var carouselLinks = [];
        $.each(this.images, function (k, image) {
          carouselLinks.push({
            href: "projects/" + currentProject + "/" + image,
            thumbnail: "projects/" + currentProject + "/" + image,
          });
        });

        $("#gallery-" + currentProject).click(function () {
          setTimeout(function () {
            blueimp.Gallery(carouselLinks, {
              container: "#blueimp-gallery-carousel-" + currentProject,
              carousel: true,
            });
          }, 100);
        });
      }
    });
  });
})(jQuery);

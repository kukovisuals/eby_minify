(window.goBack = function (e) {
    var a = window.COREDomain,
      t = window.location.hash;
    return (
      window.history.go(-1),
      window.location.hash !== t ||
        ("string" == typeof document.referrer && "" !== document.referrer) ||
        window.setTimeout(function () {
          window.location.href = a;
        }, 1e3),
      e &&
        (e.preventDefault && e.preventDefault(),
        e.preventPropagation && e.preventPropagation()),
      !1
    );
  }),
    (window.ebyAjax = function (e, a, t) {
      var o = new XMLHttpRequest();
      (o.onreadystatechange = function () {
        if (o.readyState == XMLHttpRequest.DONE && 200 == o.status) {
          var e = o.responseText;
          t && t(e);
        }
      }),
        o.open(e, a, !0),
        o.send();
    }),
    (window.getAttributes = function () {
      var e = /attributes\[(.*?)\]/,
        a = /\[(.*?)\]/,
        t = document.querySelectorAll(['[name*="attributes"]'].join(",")),
        o = Array.prototype.slice.apply(t),
        r = window.filterValues(o),
        n = {},
        s = getUTMAttributes(),
        i = new URLSearchParams(decodeURIComponent(window.location.search));
      for (let t of i)
        if (e.test(t[0])) {
          var c = t[0].match(a)[0];
          (c = c.substring(1, c.length - 1)), (n[c] = i.get(t[0]));
        }
      return (
        r.forEach(function (t) {
          var o = t.getAttribute("name"),
            r = t.value;
          if (e.test(o)) {
            var s = o.match(a)[0];
            return (s = s.substring(1, s.length - 1)), (n[s] = r);
          }
          return (n[o] = r);
        }),
        s &&
          Object.keys(s).forEach(function (e) {
            n[e] = s[e];
          }),
        Object.keys(n).length ? { attributes: Object.assign({}, n) } : {}
      );
    }),
    (window.getUTMAttributes = function () {
      var e = /^_shopify_sa_p/,
        a = /^utm_/,
        t = /^_shopify_sa_t/,
        o = {},
        r = "",
        n = "";
      document.cookie
        .split(";")
        .map(function (e) {
          return e.trim();
        })
        .forEach(function (a) {
          e.test(a) && (r = a),
            t.test(a) && (n = decodeURIComponent(a.split("=")[1]));
        });
      var s = r.split("=")[1];
      if (
        (decodeURIComponent(s)
          .split("&")
          .forEach(function (e) {
            var t = e.split("=")[0],
              r = e.split("=")[1];
            if (a.test(t)) return (o[t] = r);
          }),
        Object.keys(o).length)
      )
        return (o.utm_timestamp = n), (o.utm_data_source = "shopify_cookie"), o;
    }),
    (window.filterValues = function (e) {
      return e.filter(function (e) {
        var a = "radio" === e.getAttribute("type") && e.checked,
          t = "checkbox" === e.getAttribute("type") && e.checked,
          o =
            "checkbox" !== e.getAttribute("type") &&
            "radio" !== e.getAttribute("type");
        return !!e.value && (o || a || t);
      });
    }),
    (window.vela = window.vela || {}),
    (vela.init = function () {
      vela.cacheSelectors(),
        vela.startTheme(),
        vela.drawersInit(),
        vela.swatchProduct(),
        vela.productThumbImage(),
        vela.accordion(),
        vela.floatHeader(),
        vela.menuMobile(),
        vela.productCountdown(),
        vela.quickview(),
        vela.goToTop(),
        vela.productLoadMore(),
        vela.initDropdowns(),
        window.location.href.indexOf("/account") >= 0 && vela.velaAccountPage(),
        "modal" == window.ajaxcart_type && ajaxCart.load();
      var e = 0;
      function a() {
        return !($(window).width() > 1024);
      }
      function t(e, a) {
        var t = a.hasClass("active");
        e.removeClass("active"),
          t ? a.removeClass("active") : a.addClass("active");
      }
      function o(e, a) {
        var t = a.hasClass("open");
        e.removeClass("open"), t ? a.removeClass("open") : a.addClass("open");
      }
      function r() {
          const desktopMenu = $(".eby-header .eby-header-nav");
          const sideNavigatorDesktop = $(".mobile-nav-desktop");
          const navigationAnimation = $(".nav-wrapperhrd22");
          const animationSelector = "scrollDown-anim22";
          const animationSelectorUp = "scrollUp-anim22";
          const mobileMenuIcon = $(".eby-mobile-nav");
          const inlineDskTitle = ".eby-nv-laptop-title";
          const transparentBkgr = "bkgrn-transparent-color-white";
          const whiteBkgr = "bkgrn-white-color-dark";
          const darkBackground = "motivator-bar__wrapper"
          const stickyMenuMobile = $('.sticky-page-menu-22')
          const mainMenuTitles = $('.nav-title-hs02 ');
          const hamburgerLinesDesktop = $('.laptop_only.nv-icn-opncls .btnMenuMobile.ebyicon-hamburger');
          const hamburgerLines = $('.eby-mobile-nav .btnMenuMobile.ebyicon-hamburger');
          const mobileJsDrawer = $('.eby-mobile-nav .jsDrawerOpenRight');
          const darkTheme = 'eby-dark-theme-22';
          const darkLogo = $(".activate-dark-logo");
          const lightLogo = $(".activate-white-logo");
          const lightTheme = 'eby-light-theme-22';
          const darkBorder = 'eby-border-dark-22';
          const lightBorder = 'eby-border-light-22';
          const desktopSubscribe = $('.right_text.desktop_only.ebyMicroBtn');
          const iconMenu = $('.right_text.sign_in_btn .eby-icon-menu-22');
          const desktopCart = $('.eby-right-icon-wrpper-22 .jsDrawerOpenRight');
          const desktopCartBorder = $('.eby-right-icon-wrpper-22 .ebyHeaderCtaWrapper');
          const svgSearch = $('#eby-search-svg');

          const checkMyRouteHome =  window.location.pathname === '/';
      
          const addClassNavigation = (element, selector) => (element.forEach( (e) => e.addClass(selector)));
          const removeClassNavigation = (element, selector) => (element.forEach( (e) => e.removeClass(selector))); 
          
          var c = $(".eby-header"),
              a = window.pageYOffset || document.documentElement.scrollTop;

          setTimeout(function () {

              const sensitiveRange = Math.abs(a - b) > 10
              //console.log(sensitiveRange,  Math.abs(a - b), a)
              if( a === 0 && !checkMyRouteHome){
                  removeClassNavigation([mobileMenuIcon, desktopMenu], transparentBkgr);
                  addClassNavigation([mobileMenuIcon, desktopMenu], whiteBkgr);
                  // svgSearch.removeClass('searcher-svg23-white');  
                  svgSearch.addClass('searcher-svg23-dark');
                  
              } else if( a <= 0 && checkMyRouteHome ){

                  darkLogo.removeClass('active')
                  lightLogo.addClass('active')
                  hamburgerLinesDesktop.removeClass(lightTheme)

                  // removeClassNavigation([desktopSubscribe, iconMenu, desktopCartBorder, mobileJsDrawer],darkBorder);
                  // removeClassNavigation([mobileMenuIcon, desktopMenu, stickyMenuMobile], darkBackground);
                  
                  mobileJsDrawer.addClass(lightBorder);
                  // addClassNavigation([mobileMenuIcon, desktopMenu, stickyMenuMobile, mainMenuTitles,desktopCart, mobileJsDrawer, hamburgerLinesDesktop, desktopSubscribe], transparentBkgr );
                  $(inlineDskTitle).css("color","#04081c");
                  $('.eby-border-light-22-icon').css("stroke", '#04081c');
                  // svgSearch.removeClass('searcher-svg23-dark');  
                  // svgSearch.addClass('searcher-svg23-white');
              } else if( (a > b) && sensitiveRange ){

                  //going down
                  addClassNavigation( [navigationAnimation], "scrollDown-anim22");
                  removeClassNavigation( [navigationAnimation], "scrollUp-anim22");
                  if(checkMyRouteHome){
                      lightLogo.removeClass('active')
                      darkLogo.addClass('active')
                      hamburgerLinesDesktop.removeClass(darkTheme)

                      removeClassNavigation([desktopMenu, stickyMenuMobile, mainMenuTitles, mobileMenuIcon], transparentBkgr);
                      addClassNavigation([desktopMenu, stickyMenuMobile, mobileMenuIcon], whiteBkgr );
                      $(inlineDskTitle).css("color","#04081c");

                      // svgSearch.removeClass('searcher-svg23-dark');  
                      // svgSearch.addClass('searcher-svg23-white');
                  } else {
                      removeClassNavigation([stickyMenuMobile], transparentBkgr);
                      addClassNavigation([stickyMenuMobile], whiteBkgr );
              
                      $(inlineDskTitle).css("color","#04081c");
                      // svgSearch.removeClass('searcher-svg23-white');  
                      svgSearch.addClass('searcher-svg23-dark');
                  }
              
                  $(sideNavigatorDesktop).css("top","20px");
              } else if( (a < b) && sensitiveRange ){
                      // going up 
                      removeClassNavigation( [navigationAnimation], "scrollDown-anim22");
                      addClassNavigation( [navigationAnimation], "scrollUp-anim22");

                      $(sideNavigatorDesktop).css("top","-32px");
                      if(checkMyRouteHome){
                          lightLogo.removeClass('active')
                          darkLogo.addClass('active')

                          //desktopSubscribe.addClass(darkBorder, lightTheme)
                          desktopCartBorder.removeClass(lightTheme)
                          mobileJsDrawer.removeClass(lightBorder);
                          removeClassNavigation([hamburgerLines,mobileJsDrawer], darkTheme)
                          removeClassNavigation([mobileMenuIcon, desktopMenu,mobileJsDrawer, desktopSubscribe, desktopCart, hamburgerLinesDesktop], transparentBkgr);
                          
                          $('.eby-border-light-22-icon').css("stroke", '#04081c')
                          
                          // hamburgerLinesDesktop.addClass(lightTheme);
                          mobileJsDrawer.addClass(darkBorder);
                          addClassNavigation([desktopSubscribe, iconMenu, desktopCartBorder], darkBorder);
                          addClassNavigation([mobileMenuIcon, desktopMenu], whiteBkgr );
                  
                          $(inlineDskTitle).css("color","#04081c");

                          // svgSearch.removeClass('searcher-svg23-white');  
                          svgSearch.addClass('searcher-svg23-dark');
                      } else {
                          removeClassNavigation([mobileMenuIcon, desktopMenu], transparentBkgr);
                          addClassNavigation([mobileMenuIcon, desktopMenu], whiteBkgr );
                  
                          $(inlineDskTitle).css("color","#04081c");
                          // svgSearch.removeClass('searcher-svg23-white');  
                          svgSearch.addClass('searcher-svg23-dark');
                      }
              }
              b = a <= 0 ? 1 : a;
          }, 10);
      }
      $(".mega-nav-container > a").click(function (e) {
        (a() || "/" === window.location.pathname) &&
          (e.preventDefault(),
          e.target.className.indexOf("mobileNavMenuDropdown") >= 0
            ? (o($(".mobileNavMenuDropdown.prime"), $(e.target)),
              t($(".mega-nav-container"), $(this).parent()))
            : (window.location.href = e.target.parentElement.href
                ? e.target.parentElement.href
                : e.target.href));
      }),
        $(".mega-nav-column > a.nav-column-header").click(function (e) {
          (a() || "/" === window.location.pathname) &&
            (e.preventDefault(),
            e.target.className.indexOf("mobileNavMenuDropdown") >= 0
              ? (o($(".mobileNavMenuDropdown.mini"), $(e.target)),
                t($(".mega-nav-column"), $(this).parent()))
              : (window.location.href = e.target.parentElement.href
                  ? e.target.parentElement.href
                  : e.target.href));
        }),
        $(window).resize(function () {
          a() ||
            "/" === window.location.pathname ||
            ($(".mega-nav-container").removeClass("active"),
            $(".mega-nav-column").removeClass("active"));
        }),
        jQuery("body").hasClass("template-index"),
        $(window).scroll(function () {
          $("body").hasClass("jsDrawerOpen") ||
            $("body").hasClass("menuMobileActive") ||
            r();
        }),
        $("body").hasClass("jsDrawerOpen") ||
          $("body").hasClass("menuMobileActive") ||
          r();
    }),
    (vela.cacheSelectors = function () {
      vela.cache = {
        $html: $("html"),
        $body: $("body"),
        $velaProductImage: $("#ProductPhotoImg"),
        $velaLoading: $("#loading"),
        $velaNewletterModal: $("#velaNewsletterModal"),
      };
    });
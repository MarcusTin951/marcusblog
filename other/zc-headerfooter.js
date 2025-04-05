function wWidth() {
    var a;
    a = $(window).outerWidth();
    return a
}
$(window).scroll(function() {
    if ($(window).scrollTop() >= 450) {
        $(".z-bottom-cta-menu").addClass("onscroll")
    } else {
        $(".z-bottom-cta-menu").removeClass("onscroll")
    }
});
$(document).ready(function() {
    if ($("#mini-panel-product_menu").length > 0 && window.location.pathname.indexOf("zoholics") < 0) {
        $("body").addClass("zph-sticky");
        if (productName == "home") {
            $("body").addClass("zph-sticky-home")
        }
        cta1Link = $(".zgh-signup").attr("href");
        cta1Text = (window.innerWidth < 400) ? Drupal.t("Sign up") : Drupal.t("Sign up for free");
        cta2Link = $gotoPage;
        cta2Text = ((window.innerWidth < 480 && currentUrlLang != "") || (window.innerWidth < 360 && currentUrlLang == "")) ? Drupal.t("Access") : (accessZoho + " " + productName);
        if (productName == "zohoorchestly") {
            cta2Text = Drupal.t("Access") + " orchestly"
        } else {
            if (productName == "identity-management") {
                cta2Text = Drupal.t("Access") + " identity manager plus"
            }
        }
        accessZoho + " " + productName;
        if ($("#blogin-text").length > 0) {
            cta1Text = $("#blogin-text").html()
        }
        if ($("#alogin-text").length > 0) {
            cta2Text = $("#alogin-text").html()
        }
        if ($("#blogin-link").length > 0) {
            cta1Link = $("#blogin-link").html()
        }
        if ($("#alogin-link").length > 0) {
            cta2Link = $("#alogin-link").html()
        }
        var a = "";
        if (typeof isMobileChatWidgetEnabled != "undefined") {
            if (isMobileChatWidgetEnabled == true) {
                a = "withCW"
            }
        }
        var d = '<div class="z-mobile-menu-v2"> <div class="z-bottom-cta-menu ' + a + '"><span class="mobile-menu-icon1"><span class="zhamburger"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></span> </span><a class="loggedout" href="' + cta1Link + '"><span>' + cta1Text + '</span></a> <a class="loggedin" href="' + cta2Link + '"><span>' + cta2Text + "</span></a></div></div>";
        if (window.location.href.indexOf("terms.html") < 0) {
            $(d).appendTo(".main-container-wrapper")
        }
        prdMenuMobile = $(".product-nav-links ul").clone();
        prdLink = $(".product-title a").attr("href");
        if (prdName != "Mobile Device Management") {
            if (productName != "home") {
                if ($(".product-title > a")[0].childNodes[0].nodeValue != null) {
                    prdName = $(".product-title > a")[0].childNodes[0].nodeValue
                }
            }
        }
        prdName = customvar.productName;
        loginLink = zPrdLoginLink;
        var c = Drupal.t("Search") + " zoho." + domainOne;
        if (currentUrlLang == "jp") {
            c = Drupal.t("Search")
        }
        var b = Drupal.t("Sign In");
        if (currentUrlLang != "") {
            b = Drupal.t("SIGN IN")
        }
        prdMenuMobileHtml = $(prdMenuMobile).html();
        if (prdMenuMobileHtml == "undefined") {}
        prdMenuMobileHtml = "";
        var d = '<div class="zmobile-menu-new"> <div class="zmobile-menu-new-inner"> <div class="zmobile-menu-search"> <div class="zmobile-menu-searchbox"> <form action="" id="zmobile-menu-searchaction"> <input type="text" class="zmobile-menu-searchinput" aria-label="Search for product overviews, FAQs, and more..." placeholder="' + c + '"> <button class="zmobile-menu-searchbtn" type="submit" value="Submit"><span></span></button> </form> </div> </div> <div class="zmobile-menu-link"> <div class="zmobile-menu-new-content"> <div class="zmobile-menu-prdlogo"><span><a class="prd_link" href="' + prdLink + '">' + prdName + "</a></span></div> <ul> " + prdMenuMobileHtml + ' </ul> <div class="zcommon-link-container"> <span class="zlogin-menu"><a href="https://accounts.' + Zdomain + "." + domainOne + "/signin?" + customvar.clang + "servicename=ZohoHome&signupurl=https://www." + ZUrlDomain + "." + domainOne + langsrc + 'signup.html">' + b + '</a></span> <span class="zallprd-menu"><a href="' + langsrc + '">' + Drupal.t("All Zoho Products") + "</a></span> </div> </div> </div> </div> </div>";
        $(d).appendTo(".z-mobile-menu-v2");
        $(".zlogin-menu").hide();
        if (global_getUrlParam("src") == "zc_mobile_device") {
            $(".zlogin-menu, #block-panels-mini-product-menu, .loggedout").hide()
        }
        var g = 0;
        var f = setInterval(function() {
            if (typeof getusername != "undefined") {
                clearInterval(f);
                if (typeof customvar.logged != "undefined") {
                    customvar.logged()
                }
            }
            if (g > 25) {
                clearInterval(f);
                if (typeof getusername == "undefined") {
                    if (typeof customvar.nonlogged != "undefined") {
                        customvar.nonlogged()
                    }
                } else {
                    if (typeof customvar.logged != "undefined") {
                        customvar.logged()
                    }
                }
            }
            g++
        }, 100);
        $(".zmobile-menu-new-content li").removeClass("leaf").removeClass("first").removeClass("selected").removeClass("expanded");
        $(".zmobile-menu-new-content li.featured-apps-part").remove();
        $(".zmobile-menu-new-content li.dropdown").addClass("zdropdown-container").removeClass("dropdown");
        $(".zdropdown-container > a").replaceWith(function() {
            return $("<span>" + $(this).html() + "</span>")
        });
        $(document).on("submit", "#zmobile-menu-searchaction", function(j) {
            j.preventDefault();
            var h = $(".zmobile-menu-searchinput").val().trim();
            var i;
            if (currentUrlLang == "") {
                i = window.location.origin + "/search-results.html"
            } else {
                i = window.location.origin + "/" + currentUrlLang + "/search-results.html"
            }
            if (h != "") {
                window.location = i + "?query=" + encodeURIComponent(h)
            }
        });
        $(document).on(selectEvents, ".mobile-menu-icon1", function() {
            var h = $(this);
            h.toggleClass("active");
            h.find(".zhamburger").toggleClass("active");
            if (h.find(".zhamburger").hasClass("active")) {
                $("body, html").addClass("zoverflow-mobile");
                $(".zmobile-menu-new-inner").addClass("zshow");
                $(".zmobile-menu-new").fadeIn(300);
                $(".z-mobile-menu-v2").addClass("moveup")
            } else {
                $("body, html").removeClass("zoverflow-mobile");
                $(".zmobile-menu-new-inner").removeClass("zshow");
                $(".zmobile-menu-new").fadeOut(300);
                $(".z-mobile-menu-v2").removeClass("moveup")
            }
        });
        var e = "click";
        if (/iPhone/i.test(navigator.userAgent)) {
            e = "touchstart"
        }
        $(document).on(e, ".zdropdown-container > a,.zdropdown-container > span", function(i) {
            i.preventDefault();
            var h = $(this);
            if (h.parent().hasClass("active")) {
                h.parent().removeClass("active");
                h.parent().find(".dropdown-menu").slideUp()
            } else {
                $(".z-mobile-menu-v2").find(".zdropdown-container").removeClass("active");
                $(".z-mobile-menu-v2").find(".dropdown-menu").slideUp();
                h.parent().addClass("active");
                h.parent().find(".dropdown-menu").slideDown()
            }
            return false
        });
        $(document).on(selectEvents, ".zmobile-menu-new", function(i) {
            var h = $(".zmobile-menu-new-inner");
            if (!h.is(i.target) && h.has(i.target).length === 0) {
                $("body, html").removeClass("zoverflow-mobile");
                $(".zmobile-menu-new-inner").removeClass("zshow");
                $(".zmobile-menu-new").fadeOut(300);
                $(".mobile-menu-icon1").removeClass("active");
                $(".z-mobile-menu-v2").find(".zhamburger").removeClass("active");
                $(".z-mobile-menu-v2").removeClass("moveup")
            }
        })
    }
});
$(window).on("load", function() {
    $(".zmobile-menu-new-content ul").html("");
    prdMenuMobile = $(".product-nav-links ul").clone();
    $(".zmobile-menu-new-content ul").html($(prdMenuMobile).html());
    $(".zmobile-menu-new-content li").removeClass("leaf").removeClass("first").removeClass("selected").removeClass("expanded");
    $(".zmobile-menu-new-content li.featured-apps-part").remove();
    $(".zmobile-menu-new-content li.dropdown").addClass("zdropdown-container").removeClass("dropdown");
    $(".zdropdown-container > a").replaceWith(function() {
        return $("<span>" + $(this).html() + "</span>")
    });
    if ($(".zmobile-menu-new-content ul li").length == 0) {
        $(".zmobile-menu-new-content ul").addClass("ulempty")
    }
    if (typeof isMobileChatWidgetEnabled != "undefined") {
        if (isMobileChatWidgetEnabled == true) {
            $(".z-bottom-cta-menu").addClass("withCW")
        }
    }
});
$(window).resize(function() {
    var a = wWidth();
    if (a > 767) {
        $(".zmobile-menu-new").removeAttr("style");
        $(".z-bottom-cta-menu .mobile-menu-icon1,.z-bottom-cta-menu .zhamburger").removeClass("active");
        $(".zmobile-menu-new-inner").removeClass("zshow");
        $(".z-mobile-menu-v2").removeClass("moveup");
        $("body").removeClass("zoverflow-mobile")
    }
});
function zGlobalHeader() {
    $("#mini-panel-product_menu .product-nav-links").before(zghLoc);
    var j;
    var t = 0;
    var o;
    if (currentUrlLang == "" || currentUrlLang == "in" || currentUrlLang == undefined) {
        j = "en";
        o = ""
    } else {
        j = currentUrlLang;
        o = "/" + currentUrlLang
    }
    if (domainOne == "com.cn") {
        j = "zh-hans"
    }
    var c = [];
    var e = [];
    var m = [];
    var l = 30;
    for (var v = 1; v <= l; v++) {
        c.push(v)
    }
    function p(x) {
        var i = "";
        if (prdName.toLowerCase() == "orchestly" && x.toLowerCase() != "orchestly" || customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
            i = "https://www.zoho." + domainOne + ""
        }
        if ((x == "LandingPage" || x == "ZeptoMail" || x == "TeamInbox" || x == "IT Management" || x == "Finance Plus" || x == "Marketing Plus" || x == "Checkout" || x == "ServiceDesk Plus" || x == "Mobile Device Management" || x == "Site24x7" || x == "Office Integrator" || j == "zh-hans" || x.toLowerCase() == "orchestly" || x.toLowerCase() == "payroll" || x.toLowerCase() == "contracts" || customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu")) {
            return i
        } else {
            if (domainOne == "com.cn" || ((x == "Subscriptions" || x == "Inventory" || x == "Expense" || x == "Finance Plus" || x == "Checkout" || x == "Invoice") && (j == "ar" || j == "vi" || j == "it"))) {
                return i
            } else {
                if ((x == "Books" || x == "Invoice") && (j == "id" || j == "th" || j == "nl" || j == "vi" || j == "it")) {
                    return i
                } else {
                    if ((j == "pt-br" || j == "nl" || j == "id" || j == "th" || j == "ar") && (x == "Subscriptions" || x == "Inventory" || x == "Expense")) {
                        return i
                    } else {
                        return i + o
                    }
                }
            }
        }
    }
    function d(I, y, x, F, A, G, B, C, J, D, z, H) {
        if (A == false && j == "en") {
            return
        } else {
            if (H == false && j != "en") {
                return
            } else {
                var i;
                var E = "";
                if (j == "de" || j == "fr" || j == "es-xl" || j == "pt-br" || j == "nl" || j == "id" || j == "th" || j == "vi" || j == "it" || j == "jp") {
                    if (j == "es-xl") {
                        E = "/es"
                    } else {
                        if (j == "pt-br") {
                            E = "/pt"
                        } else {
                            E = "/" + j
                        }
                    }
                }
                (y.indexOf("www.site24x7.com") > 0) ? (y = "https://www.site24x7." + domainOne + E + "/") : "";
                if (j != "" && j != "en") {
                    if (y.indexOf("dataprep") > 0) {
                        y = ("/dataprep")
                    }
                }
                if (j != "") {
                    if (y.indexOf("online-service-desk-software.html") > 0 || y.indexOf("mdm-cloud.html") > 0 || y.indexOf("checkout") > 0 || y.indexOf("financeplus") > 0 || y.indexOf("it-management") > 0 || j == "zh-hans") {
                        if (y.indexOf(langsrc) > -1) {
                            y = ("/" + y.split(langsrc)[1])
                        }
                    }
                }
                if (j == "pt-br") {
                    if (y.indexOf("expense") > 0 || y.indexOf("subscriptions") > 0 || y.indexOf("inventory") > 0) {
                        y = ("/" + y.split(langsrc)[1])
                    }
                } else {
                    if (j == "nl" || j == "ar") {
                        if (y.indexOf("expense") > 0 || y.indexOf("subscriptions") > 0 || y.indexOf("inventory") > 0 || y.indexOf("invoice") > 0) {
                            y = ("/" + y.split(langsrc)[1])
                        }
                    } else {
                        if (j == "id" || j == "th" || j == "vi" || j == "it") {
                            if (y.indexOf("books") > 0 || y.indexOf("expense") > 0 || y.indexOf("subscriptions") > 0 || y.indexOf("inventory") > 0 || y.indexOf("invoice") > 0) {
                                y = ("/" + y.split(langsrc)[1])
                            }
                        }
                    }
                }
                if (y.indexOf("marketplace") < 0) {
                    y = y + "?src=top-header&ireft=" + prdName + "-" + e[e.length - 1].substring(0, 2)
                } else {
                    if (domainOne != "com") {
                        y = y.split(".com").join("." + domainOne)
                    }
                }
                if (prdName.toLowerCase() == "orchestly" || customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
                    if (y.indexOf("https") < 0) {
                        y = "https://www.zoho." + domainOne + y
                    }
                }
                if (y.indexOf("www.orchestly.com/") > -1 && domainOne != "com" || customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
                    y = y.split(".com").join("." + domainOne)
                }
                if (D) {
                    if (J) {
                        if (F != "") {
                            if (C) {
                                i = '<div data-hidden="true" data-index="' + I + '" class="zgh-menuItem zgh-hidden zgh-b-' + x + '"><a target="_blank" href="' + y + '" class="zgh-i-' + x + '"><span>' + Drupal.t(F) + "</span><strong>" + z + "</strong><p>" + G + "</p><em>" + B + "</em></a></div>"
                            } else {
                                i = '<div data-index="' + I + '" class="zgh-menuItem zgh-b-' + x + '"><a target="_blank" href="' + y + '" class="zgh-i-' + x + '"><span>' + Drupal.t(F) + "</span><strong>" + z + "</strong><p>" + G + "</p><em>" + B + "</em></a></div>"
                            }
                        } else {
                            if (C) {
                                i = '<div data-hidden="true" data-index="' + I + '" class="zgh-menuItem zgh-hidden zgh-b-' + x + '"><a target="_blank" href="' + y + '" class="zgh-i-' + x + '"><strong>' + z + "</strong><p>" + G + "</p><em>" + B + "</em></a></div>"
                            } else {
                                i = '<div data-index="' + I + '" class="zgh-menuItem zgh-b-' + x + '"><a target="_blank" href="' + y + '" class="zgh-i-' + x + '"><strong>' + z + "</strong><p>" + G + "</p><em>" + B + "</em></a></div>"
                            }
                        }
                    } else {
                        if (F != "") {
                            if (C) {
                                i = '<div data-hidden="true" data-index="' + I + '" class="zgh-menuItem zgh-hidden zgh-b-' + x + '"><a href="' + y + '" class="zgh-i-' + x + '"><span>' + Drupal.t(F) + "</span><strong>" + z + "</strong><p>" + G + "</p><em>" + B + "</em></a></div>"
                            } else {
                                i = '<div data-index="' + I + '" class="zgh-menuItem zgh-b-' + x + '"><a href="' + y + '" class="zgh-i-' + x + '"><span>' + Drupal.t(F) + "</span><strong>" + z + "</strong><p>" + G + "</p><em>" + B + "</em></a></div>"
                            }
                        } else {
                            if (C) {
                                i = '<div data-hidden="true" data-index="' + I + '" class="zgh-menuItem zgh-hidden zgh-b-' + x + '"><a href="' + y + '" class="zgh-i-' + x + '"><strong>' + z + "</strong><p>" + G + "</p><em>" + B + "</em></a></div>"
                            } else {
                                i = '<div data-index="' + I + '" class="zgh-menuItem zgh-b-' + x + '"><a href="' + y + '" class="zgh-i-' + x + '"><strong>' + z + "</strong><p>" + G + "</p><em>" + B + "</em></a></div>"
                            }
                        }
                    }
                } else {
                    if (J) {
                        if (F != "") {
                            if (C) {
                                i = '<div data-hidden="true" data-index="' + I + '" class="zgh-menuItem zgh-hidden zgh-b-' + x + '"><a target="_blank" href="' + y + '" class="zgh-i-' + x + '"><span>' + Drupal.t(F) + "</span><p>" + G + "</p><em>" + B + "</em></a></div>"
                            } else {
                                i = '<div data-index="' + I + '" class="zgh-menuItem zgh-b-' + x + '"><a target="_blank" href="' + y + '" class="zgh-i-' + x + '"><span>' + Drupal.t(F) + "</span><p>" + G + "</p><em>" + B + "</em></a></div>"
                            }
                        } else {
                            if (C) {
                                i = '<div data-hidden="true" data-index="' + I + '" class="zgh-menuItem zgh-hidden zgh-b-' + x + '"><a target="_blank" href="' + y + '" class="zgh-i-' + x + '"><p>' + G + "</p><em>" + B + "</em></a></div>"
                            } else {
                                i = '<div data-index="' + I + '" class="zgh-menuItem zgh-b-' + x + '"><a target="_blank" href="' + y + '" class="zgh-i-' + x + '"><p>' + G + "</p><em>" + B + "</em></a></div>"
                            }
                        }
                    } else {
                        if (F != "") {
                            if (C) {
                                i = '<div data-hidden="true" data-index="' + I + '" class="zgh-menuItem zgh-hidden zgh-b-' + x + '"><a href="' + y + '" class="zgh-i-' + x + '"><span>' + Drupal.t(F) + "</span><p>" + G + "</p><em>" + B + "</em></a></div>"
                            } else {
                                i = '<div data-index="' + I + '" class="zgh-menuItem zgh-b-' + x + '"><a href="' + y + '" class="zgh-i-' + x + '"><span>' + Drupal.t(F) + "</span><p>" + G + "</p><em>" + B + "</em></a></div>"
                            }
                        } else {
                            if (C) {
                                i = '<div data-hidden="true" data-index="' + I + '" class="zgh-menuItem zgh-hidden zgh-b-' + x + '"><a href="' + y + '" class="zgh-i-' + x + '"><p>' + G + "</p><em>" + B + "</em></a></div>"
                            } else {
                                i = '<div data-index="' + I + '" class="zgh-menuItem zgh-b-' + x + '"><a href="' + y + '" class="zgh-i-' + x + '"><p>' + G + "</p><em>" + B + "</em></a></div>"
                            }
                        }
                    }
                }
                return i
            }
        }
    }
    var a = "";
    if (window.innerWidth > 400) {
        if (_preZ == window.location.host || ZUrlDomain == "localzoho" || domainOne == "com.cn" || _preZC == window.location.hostname) {
            a = "/sites/default/files/global-menu.json"
        } else {
            a = "https://www.zohowebstatic.com/sites/default/files/global-menu.json"
        }
        var q = ["People", "Mail", "Projects", "CRM", "Creator"];
        var k = true;
        if (currentUrlLang != "jp") {
            if (prdName != "") {
                var s = [];
                if (prdName == "home") {
                    $(".product-nav-links .menu .featured-apps-part .featured-pro").html("");
                    $(".product-nav-links .menu .featured-apps-part .featured-pro").prepend('<a class="zgh-i-crm" href="' + langsrc + 'crm/?src=product-header&ireft=home">CRM<span></span></a> <a class="zgh-i-mail" href="' + langsrc + 'mail/?src=product-header&ireft=home"> <span>Mail</span></a> <a class="zgh-i-creator" href="' + langsrc + 'creator/?src=product-header&ireft=home"><span>Creator</span></a> <a class="zgh-i-books" href="/books/?src=product-header&ireft=home"><span>Books</span></a>')
                }
                var g = 14;
                if (j != "en") {
                    g = 6
                }
                var b = [3, 5, 11, g];
                var w = [];
                $.getJSON(a, function(B) {
                    for (var I in B) {
                        for (var y in B[I].categoryProducts) {
                            var F = B[I].categoryProducts[y];
                            if (F.productName == "Zoho One" && prdName == "one") {
                                F.productName = "one"
                            } else {
                                if (F.productName == "Identity Management" && prdName == "Identity Manager Plus") {
                                    F.productName = "Identity Manager Plus"
                                } else {
                                    if (F.productName == "Log Management Cloud" && prdName == "Log360 Cloud") {
                                        F.productName = "Log360 Cloud"
                                    }
                                }
                            }
                            if (F.productName.toLowerCase().replace(/-|\s/g, "") == customvar.productName.toLowerCase().replace(/-|\s/g, "")) {
                                if (prdName == "one") {
                                    F.productName = "Zoho One"
                                } else {
                                    if (prdName == "Identity Manager Plus") {
                                        F.productName = "Identity Management"
                                    } else {
                                        if (prdName == "Log360 Cloud") {
                                            F.productName = "Log Management Cloud"
                                        }
                                    }
                                }
                                if (F.relatedProducts != undefined) {
                                    s.push(F.relatedProducts.split(","));
                                    s[0].unshift(F.productName)
                                }
                            }
                        }
                    }
                    if (s.length >= 1) {
                        for (var C = s[0].length - 1; C >= 0; C--) {
                            for (var I in B) {
                                for (var y in B[I].categoryProducts) {
                                    var K = s[0][C];
                                    var x = B[I].categoryProducts[y];
                                    if (domainOne != "com" && productName == "zohoorchestly" || domainOne != "com" && x.productName.toLowerCase() == "orchestly" || customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
                                        if (x.productUrl.indexOf(".com") > 0) {
                                            x.productUrl = x.productUrl.split(".com").join("." + domainOne)
                                        }
                                    }
                                    if (K.toLowerCase().replace(/-|\s/g, "") == x.productName.toLowerCase().replace(/-|\s/g, "")) {
                                        if (customvar.productName == "one" && K == "Zoho One") {
                                            x.productName = "one"
                                        } else {
                                            if (prdName == "Identity Manager Plus" && K == "Identity Management") {
                                                x.productName = "Identity Manager Plus"
                                            } else {
                                                if (prdName == "Log360 Cloud" && K == "Log Management Cloud") {
                                                    x.productName = "Log360 Cloud"
                                                }
                                            }
                                        }
                                        if (x.productName.toLowerCase().replace(/ /g, "") == customvar.productName.toLowerCase().replace(/-|\s/g, "")) {
                                            if (x.productName == "one" && customvar.productName == "one") {
                                                x.productName = "Zoho One"
                                            } else {
                                                if (x.productName == "Identity Manager Plus" && prdName == "Identity Manager Plus") {
                                                    x.productName = "Identity Management"
                                                } else {
                                                    if (x.productName == "Log360 Cloud" && prdName == "Log360 Cloud") {
                                                        x.productName = "Log Management Cloud"
                                                    }
                                                }
                                            }
                                            if (m.indexOf(x.productName) < 0) {}
                                        } else {
                                            if (m.indexOf(x.productName) < 0) {
                                                if (domainOne != "com.cn") {
                                                    if (t > s[0].length - s[0].length) {
                                                        $(".product-nav-links .menu .featured-apps-part .featured-pro").prepend('<a class="zgh-i-' + x.productName.toLowerCase().replace(/-|\s/g, "") + '" href="' + (p(x.productName) + x.productUrl) + "?src=product-header&ireft=" + prdName + '"><span>' + x.productName + "</span></a>")
                                                    }
                                                    t++;
                                                    if (typeof x.productDesc[0][j] === "undefined" || customvar.mydevice() != "Desktop") {
                                                        $(".zgh-nav > ul").prepend('<li><a href="' + (p(x.productName) + x.productUrl) + "?src=top-header&ireft=" + prdName + '">' + x.productName + "</a></li>")
                                                    } else {
                                                        var G = x.productName;
                                                        CheckProdDesc = "<p>" + x.productDesc[0][j] + "</p>";
                                                        if (x.productDesc[0][j] == "") {
                                                            CheckProdDesc = ""
                                                        }
                                                        productUrlVal = p(x.productName) + x.productUrl;
                                                        if (x.productUrl.indexOf("https:") != -1 || x.productUrl.indexOf("www.") != -1) {
                                                            productUrlVal = x.productUrl;
                                                            if (j != "en") {
                                                                productUrlVal = x.productUrl + j + "/"
                                                            }
                                                        }
                                                        $(".zgh-nav > ul").prepend('<li><a href="' + productUrlVal + "?src=top-header&ireft=" + prdName + '">' + G + "</a>" + CheckProdDesc + "</li>")
                                                    }
                                                } else {
                                                    if (k) {
                                                        $.each(q, function(i, L) {
                                                            $(".zgh-nav > ul").prepend('<li><a href="/' + L.toLowerCase() + "/?src=top-header&ireft=" + prdName + '">' + L + "</a></li>")
                                                        });
                                                        k = false
                                                    }
                                                }
                                            }
                                        }
                                        m.push(x.productName)
                                    }
                                }
                            }
                        }
                    }
                    for (var A = 1; A <= l; A++) {
                        for (var I in B) {
                            getMenuCatName = B[I].categoryName[0][j];
                            getMenuCatIndex = parseInt(I) + 1;
                            getMenuCatOrder = B[I].categoryOrder;
                            getMenuCatBundle = B[I].categoryBundleProducts;
                            getProVisCount = B[I].productVisibleCount;
                            getMenuCatProducts = B[I].categoryProducts;
                            var D = B[I].categoryName[0].en;
                            D = D.replace(/&+/g, "-").toLowerCase();
                            D = D.replace(/\s+/g, "").toLowerCase();
                            if (A == getMenuCatOrder) {
                                if (getMenuCatOrder == 1) {
                                    $(".zgh-products .zgh-megaMenuCat").append('<li class="active zgh-b-' + D + '" data-list="' + getMenuCatIndex + '" data-bundle="' + getMenuCatBundle + '"><span>' + getMenuCatName + "</span></li>");
                                    $(".zgh-products .zgh-megaMenuPro").append('<div class="active zgh-' + D + '" data-category="' + getMenuCatIndex + '"></div>')
                                } else {
                                    $(".zgh-products .zgh-megaMenuCat").append('<li class="zgh-b-' + D + '" data-list="' + getMenuCatIndex + '" data-bundle="' + getMenuCatBundle + '"><span>' + getMenuCatName + "</span></li>");
                                    $(".zgh-products .zgh-megaMenuPro").append('<div class="zgh-' + D + '" data-category="' + getMenuCatIndex + '"></div>')
                                }
                                e.push(D);
                                if (getProVisCount != "" || getProVisCount != 0) {
                                    var H = true;
                                    for (var C = 1; C <= l; C++) {
                                        for (var y in getMenuCatProducts) {
                                            var F = getMenuCatProducts[y];
                                            var J = F.productName;
                                            J = J.replace(/&+/g, "-").toLowerCase();
                                            J = J.replace(/\s+/g, "").toLowerCase();
                                            getProURL = "";
                                            setBlank = false;
                                            if (j == "en") {
                                                getProURL = F.productUrl;
                                                if (F.productUrl.indexOf("www.") > -1) {
                                                    setBlank = true
                                                }
                                            } else {
                                                if (F.productUrl.indexOf("www.") > -1) {
                                                    getProURL = F.productUrl;
                                                    setBlank = true
                                                } else {
                                                    getProURL = o + F.productUrl
                                                }
                                            }
                                            setPrdTagline = false;
                                            getPrdTagline = "";
                                            if (typeof F.productTagline != "undefined") {
                                                setPrdTagline = true;
                                                getPrdTagline = F.productTagline[0][j]
                                            }
                                            if (C == F.productOrder) {
                                                if (H) {
                                                    H = false;
                                                    $("div.zgh-" + D).append('<div class="zmenu-menuProBox"><div class="zmenu-menuProBox-1"></div><div class="zmenu-menuProBox-2"></div><div class="zmenu-menuProBox-3"></div><div class="zmenu-menuProBox-4"></div></div><div class="zmenu-moreBox"><span class="zmenu-moreBtn">' + Drupal.t("More products") + "</span></div>")
                                                }
                                                var z;
                                                if (index + 1 <= getProVisCount) {
                                                    z = false
                                                } else {
                                                    z = true
                                                }
                                                if (wW < 768) {
                                                    $("div.zgh-" + D).append(d(C, getProURL, J, F.productVersion, F.productVisible, F.productName, F.productDesc[0][j], z, setBlank, setPrdTagline, getPrdTagline, F.productVisibleOthers));
                                                    vendMobile = false
                                                } else {
                                                    if (wW > 767 && wW < 1200) {
                                                        split = (C - 1) % 3;
                                                        if (split == 0) {
                                                            $("div.zgh-" + D).find(".zmenu-menuProBox-1").append(d(C, getProURL, J, F.productVersion, F.productVisible, F.productName, F.productDesc[0][j], z, setBlank, setPrdTagline, getPrdTagline, F.productVisibleOthers))
                                                        } else {
                                                            if (split == 1) {
                                                                $("div.zgh-" + D).find(".zmenu-menuProBox-2").append(d(C, getProURL, J, F.productVersion, F.productVisible, F.productName, F.productDesc[0][j], z, setBlank, setPrdTagline, getPrdTagline, F.productVisibleOthers))
                                                            } else {
                                                                if (split == 2) {
                                                                    $("div.zgh-" + D).find(".zmenu-menuProBox-3").append(d(C, getProURL, J, F.productVersion, F.productVisible, F.productName, F.productDesc[0][j], z, setBlank, setPrdTagline, getPrdTagline, F.productVisibleOthers))
                                                                }
                                                            }
                                                        }
                                                        vendTab = false
                                                    } else {
                                                        split = (C - 1) % 4;
                                                        if (split == 0) {
                                                            $("div.zgh-" + D).find(".zmenu-menuProBox-1").append(d(C, getProURL, J, F.productVersion, F.productVisible, F.productName, F.productDesc[0][j], z, setBlank, setPrdTagline, getPrdTagline, F.productVisibleOthers))
                                                        } else {
                                                            if (split == 1) {
                                                                $("div.zgh-" + D).find(".zmenu-menuProBox-2").append(d(C, getProURL, J, F.productVersion, F.productVisible, F.productName, F.productDesc[0][j], z, setBlank, setPrdTagline, getPrdTagline, F.productVisibleOthers))
                                                            } else {
                                                                if (split == 2) {
                                                                    $("div.zgh-" + D).find(".zmenu-menuProBox-3").append(d(C, getProURL, J, F.productVersion, F.productVisible, F.productName, F.productDesc[0][j], z, setBlank, setPrdTagline, getPrdTagline, F.productVisibleOthers))
                                                                } else {
                                                                    if (split == 3) {
                                                                        $("div.zgh-" + D).find(".zmenu-menuProBox-4").append(d(C, getProURL, J, F.productVersion, F.productVisible, F.productName, F.productDesc[0][j], z, setBlank, setPrdTagline, getPrdTagline, F.productVisibleOthers))
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        vendDesk = false
                                                    }
                                                }
                                            }
                                        }
                                        setBlank = false;
                                        setPrdTagline = false
                                    }
                                    H = true
                                } else {
                                    for (var C = 1; C <= l; C++) {
                                        for (var y in getMenuCatProducts) {
                                            var F = getMenuCatProducts[y];
                                            var J = F.productName;
                                            J = J.replace(/&+/g, "-").toLowerCase();
                                            J = J.replace(/\s+/g, "").toLowerCase();
                                            getProURL = "";
                                            setBlank = false;
                                            if (j == "en") {
                                                getProURL = F.productUrl;
                                                if (F.productUrl.indexOf("www.") > -1) {
                                                    setBlank = true
                                                }
                                            } else {
                                                if ((F.productUrl.indexOf("www.") > -1) || (F.productUrl.indexOf("https://marketplace") > -1)) {
                                                    getProURL = F.productUrl;
                                                    if (F.productName.toLowerCase() == "bigin") {
                                                        getProURL = "https://www.bigin.com/" + j + "/"
                                                    }
                                                    setBlank = true
                                                } else {
                                                    getProURL = o + F.productUrl
                                                }
                                            }
                                            setPrdTagline = false;
                                            getPrdTagline = "";
                                            if (typeof F.productTagline != "undefined") {
                                                setPrdTagline = true;
                                                getPrdTagline = F.productTagline[0][j]
                                            }
                                            if (C == F.productOrder) {
                                                z = false;
                                                $("div.zgh-" + D).append(d(C, getProURL, J, F.productVersion, F.productVisible, F.productName, F.productDesc[0][j], z, setBlank, setPrdTagline, getPrdTagline, F.productVisibleOthers))
                                            }
                                        }
                                        setBlank = false;
                                        setPrdTagline = false
                                    }
                                }
                            }
                        }
                        $.each(b, function(L, i) {
                            $('.zgh-products .zgh-megaMenuCat li[data-list="' + i + '"]').addClass("zgh-catDivider")
                        });
                        if (A == l) {
                            f()
                        }
                        $(".other-lang .zgh-i-patchmanagerplus").parent().remove()
                    }
                    if ($(".zgh-products .zgh-b-extensions").length > 0) {
                        $(".zgh-products .zgh-b-extensions").before('<p class="marketplace-title">Do more with your Zoho products</p>')
                    }
                    $(".zgh-marketplace a").attr("target", "_blank");
                    if (wW > 1199) {
                        $("[data-bundle]").each(function() {
                            var i = $(this);
                            if (i.hasClass("active")) {
                                if (i.attr("data-bundle").length > 0) {
                                    w.push(i.data("bundle").split(","))
                                }
                            }
                        });
                        if (w.length > 0) {
                            $(".zgh-bundles > div").css("display", "none");
                            $.each(w[0], function(i, L) {
                                getBundleClass = L;
                                getBundleClass = getBundleClass.replace(/&+/g, "-").toLowerCase();
                                getBundleClass = getBundleClass.replace(/\s+/g, "").toLowerCase();
                                $(".zgh-b-" + getBundleClass).css("display", "block")
                            });
                            $(".zgh-bundles").addClass("active-visible");
                            w = []
                        } else {
                            $(".zgh-bundles").removeClass("active-visible");
                            $(".zgh-bundles > div").css("display", "")
                        }
                    }
                    var E = document.querySelectorAll(".zgh-nav > ul > li > p");
                    window.onmousemove = function(N) {
                        var L = (N.clientX + 0) + "px"
                          , O = (N.clientY + 17) + "px";
                        for (var M = 0; M < E.length; M++) {
                            if ($(E[M]).parent().is(":hover")) {
                                E[M].style.top = O;
                                E[M].style.left = L
                            } else {
                                E[M].style.top = "0";
                                E[M].style.left = "0"
                            }
                        }
                    }
                }).fail(function() {
                    throw {
                        name: "FileError",
                        message: "An error has occurred while fetching the json data"
                    }
                })
            }
        }
        function h(i) {
            this.name = "FileError";
            this.message = (i || "")
        }
        h.prototype = Error.prototype;
        $(document).on("click", ".zmenu-moreBtn", function() {
            var i = $(this);
            if (i.hasClass("active")) {
                i.closest("[data-category]").find(".zgh-hidden").attr("data-hidden", "true").slideUp();
                i.removeClass("active").text("More products")
            } else {
                i.hide();
                i.closest("[data-category]").find(".zgh-hidden").attr("data-hidden", "false").slideDown();
                i.addClass("active").text("Less products")
            }
        });
        $(document).on("click", ".zgh-search-icon", function() {
            $(".zgh-search-container").addClass("active");
            $(".zgh-search-field").focus().val("")
        });
        function r() {
            if ($(".zgh-search-container").hasClass("active")) {
                $(".zgh-search-container").removeClass("active");
                $(".zgh-search-field").blur().val("")
            }
        }
        $(document).on(selectEvents, ".zgh-search-clear,.zgh-search-overlay", function() {
            r()
        });
        $(document).on("click", ".zgh-search-btn", function() {
            $("#zgh-search-action").submit()
        });
        $(document).on("submit", "#zgh-search-action", function(y) {
            y.preventDefault();
            var i = $("#zgh-search-query").val().trim();
            var x;
            if (currentUrlLang == "") {
                x = window.location.origin + "/search-results.html"
            } else {
                x = window.location.origin + "/" + currentUrlLang + "/search-results.html"
            }
            if (i != "") {
                window.location = x + "?query=" + encodeURIComponent(i)
            }
        });
        $(document).keyup(function(i) {
            if ((i.keyCode === 27)) {
                r()
            }
        });
        $(window).scroll(function() {
            var i = $(this).scrollTop();
            if (i > 100) {
                r()
            }
        });
        $(document).on("mouseenter touchstart", ".zgh-localization", function() {
            var i = $(this);
            i.addClass("active")
        });
        $(document).on("mouseleave", ".zgh-localization", function() {
            var i = $(this);
            i.removeClass("active")
        });
        if (typeof detectedLangNew != "undefined") {
            var n = 0;
            var u = setInterval(function() {
                if (detectedLangNew.length > 0) {
                    clearInterval(u);
                    $(".zgh-localization").addClass("init")
                } else {
                    if (n > 50) {
                        clearInterval(u)
                    }
                }
                n++
            }, 1000)
        }
        function f() {
            $(".zgh-nav").addClass("active");
            $(".zgh-i-zohoone p").html("One");
            $(".zgh-i-orchestly").removeAttr("target");
            initGlobalHeaderResize()
        }
    }
    $(document).on(selectEvents, ".zgh-userAvatar", function() {
        var i = $(this);
        i.parent().toggleClass("active")
    })
}
function setDevice(b, a) {
    if (b < 768) {
        if (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $("body").attr("data-device", "mobile");
            $(document).on(selectEvents, '[data-device="mobile"]', function(c) {
                userAccOutClick(this, c);
                userLanOutClick(this, c)
            })
        } else {
            $("body").attr("data-device", "desktop");
            $(document).on(selectEvents, '[data-device="desktop"]', function(c) {
                userAccOutClick(this, c);
                userLanOutClick(this, c)
            })
        }
    } else {
        if (b > 767 && b < 1200) {
            if (/Android|webOS|iPad|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                $("body").attr("data-device", "tab");
                $(document).on(selectEvents, '[data-device="tab"]', function(c) {
                    megaMenuOutClick(this, c);
                    userAccOutClick(this, c);
                    userLanOutClick(this, c)
                })
            } else {
                $("body").attr("data-device", "desktop");
                $(document).on(selectEvents, '[data-device="desktop"]', function(c) {
                    megaMenuOutClick(this, c);
                    userAccOutClick(this, c);
                    userLanOutClick(this, c)
                })
            }
        } else {
            $("body").attr("data-device", "desktop");
            $(document).on(selectEvents, '[data-device="desktop"]', function(c) {
                megaMenuOutClick(this, c);
                userAccOutClick(this, c);
                userLanOutClick(this, c)
            })
        }
    }
}
megaMenuOutClick = function(c, b) {
    b.stopPropagation();
    var a = $(".zgh-megaMenu");
    if (!a.is(b.target) && a.has(b.target).length === 0) {
        a.removeClass("active");
        $(".zgh-megaMenuCat li").removeAttr("style")
    }
}
;
userAccOutClick = function(c, b) {
    b.stopPropagation();
    var a = $(".zgh-userPanel");
    if (!a.is(b.target) && a.has(b.target).length === 0) {
        a.removeClass("active")
    }
}
;
userLanOutClick = function(c, b) {
    b.stopPropagation();
    var a = $(".zgh-localization");
    if (!a.is(b.target) && a.has(b.target).length === 0) {
        a.removeClass("active")
    }
}
;
function headerMinHeight(b) {
    $(".zgh-products .zgh-megaMenuPro > div,.zgh-menuItem").css("display", "block");
    $(".zgh-menuItem a").css("height", "");
    hei = 0;
    idS = 1;
    idE = b;
    orId = [];
    var e = $(".zgh-megaMenuPro > div:not(.zgh-bundles):not(.zgh-marketplace)");
    e.each(function() {
        var g = $(this);
        if (g.find(".zmenu-moreBtn").length) {
            var a = g.find(".zgh-menuItem");
            a.each(function(h, i) {
                if (h + 1 >= idS && h + 1 <= idE) {
                    orId.push(h + 1);
                    if (g.find('[data-index="' + (h + 1) + '"] a').height() > hei) {
                        hei = g.find('[data-index="' + (h + 1) + '"] a').height()
                    }
                }
                if (orId.length == b) {
                    $.each(orId, function(j) {
                        g.find('[data-index="' + orId[j] + '"] a').height(hei)
                    });
                    orId.length = 0;
                    hei = 0;
                    idS = idE + 1;
                    idE = idE + b
                }
            });
            orId.length = 0;
            hei = 0;
            idS = 1;
            idE = b
        } else {
            var a = g.find(".zgh-menuItem");
            a.each(function(i, j) {
                var h = $(this);
                if (h.data("index") >= idS && h.data("index") <= idE) {
                    orId.push(h.data("index"));
                    if (h.find("a").height() > hei) {
                        hei = h.find("a").height()
                    }
                }
                if (orId.length == b) {
                    $.each(orId, function(k) {
                        g.find('[data-index="' + orId[k] + '"] a').height(hei)
                    });
                    orId.length = 0;
                    hei = 0;
                    idS = idE + 1;
                    idE = idE + b
                }
            });
            orId.length = 0;
            hei = 0;
            idS = 1;
            idE = b
        }
    });
    $(".zgh-products .zgh-megaMenuPro > div,.zgh-menuItem").removeAttr("style");
    var c = $(".zgh-hidden");
    c.each(function() {
        var a = $(this);
        if (a.data("hidden") == "false") {
            a.css("display", "block")
        } else {
            a.css("display", "none")
        }
    });
    $(".zgh-bundles .zgh-menuItem a,.zgh-marketplace .zgh-menuItem a").css("height", "");
    $(".zgh-products .zgh-megaMenuInner").css("height", "");
    var d = 0
      , f = $(".zgh-megaMenuPro > div");
    f.each(function() {
        var a = $(this);
        if (a.innerHeight() > d) {
            d = a.innerHeight()
        }
    })
}
function zGlobalHeaderResize(e, c) {
    var b = 0;
    var d = [];
    if (e < 768) {
        minHeiDes = true;
        minHeiTab = true;
        $(document).on(selectEvents, ".zgh-menu", function(g) {
            g.stopPropagation();
            var f = $(this);
            if (f.hasClass("active")) {
                f.removeClass("active");
                $(".zgh-nav").slideUp();
                $("body").removeClass("lock")
            } else {
                f.addClass("active");
                $(".zgh-nav").slideDown(400, function() {
                    $(".zgh-nav").css("overflow", "scroll")
                });
                $("body").addClass("lock")
            }
        });
        $(".zgh-products .zgh-megaMenuInner").css("height", "");
        $(".zgh-megaMenuCat li").removeAttr("style");
        $(document).off("mouseenter touchstart click", ".zgh-megaMenu > a");
        $(document).off("mouseleave", ".zgh-megaMenu");
        $(document).on(selectEvents, ".zgh-megaMenu > a", function(g) {
            g.stopPropagation();
            var f = $(this);
            if (f.parent().hasClass("active")) {
                f.next().slideUp();
                f.parent().removeClass("active")
            } else {
                $(".zgh-megaMenuBox").slideUp();
                $(".zgh-megaMenu").removeClass("active");
                f.next().slideDown();
                f.parent().addClass("active")
            }
        });
        $(document).off("click touchstart", "[data-list]");
        $(document).on(selectEvents, ".zgh-megaMenuCat > li > span", function(g) {
            g.stopPropagation();
            var f = $(this).parent();
            if (f.hasClass("active")) {
                f.find("[data-category]").slideUp().removeClass("active");
                f.removeClass("active");
                lastCatActive = f.data("list")
            } else {
                $(".zgh-megaMenuCat > li").removeClass("active");
                $("[data-category]").slideUp().removeClass("active");
                f.find("[data-category]").slideDown().addClass("active");
                f.addClass("active");
                lastCatActive = f.data("list")
            }
        });
        var a = $("[data-category]");
        a.each(function() {
            var f = $(this);
            if ($(".zgh-megaMenuPro > div").length) {
                f.appendTo('[data-list="' + f.data("category") + '"]')
            }
        });
        if (defCatActive) {
            $('[data-category="1"]').css("display", "block");
            defCatActive = false
        } else {
            $('[data-category="' + lastCatActive + '"]').css("display", "block")
        }
        $(".zgh-bundles").removeClass("active-visible");
        $(".zgh-bundles > div").css("display", "");
        $(".zgh-menuItem").css("overflow", "");
        $(".zgh-menuItem a").css("height", "");
        var a = $("[data-category]");
        a.each(function(f, h) {
            var g = $(this);
            if (vendMobile) {
                g.find(".zgh-menuItem").each(function(j, k) {
                    var i = $(this);
                    g.find('[data-index="' + (j + 1) + '"]').appendTo(g)
                })
            }
        });
        vendMobile = false;
        vendTab = true;
        vendDesk = true
    } else {
        if (e > 1199) {
            if ($(".zgh-b-bundles").hasClass("active")) {
                $(".zgh-b-bundles").removeClass("active");
                $(".zgh-bundles").removeClass("active");
                lastCatActive = 1
            }
        }
        $(".zgh-nav").removeAttr("style");
        $(".zgh-menu").removeClass("active");
        $(document).off(selectEvents, ".zgh-menu");
        $(".zgh-megaMenu").removeClass("active");
        $(".zgh-megaMenuBox").removeAttr("style");
        $(document).off(selectEvents, ".zgh-megaMenu > a");
        if (/Android|webOS|iPad|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $(document).off("mouseenter", ".zgh-megaMenu > a");
            $(document).off("mouseleave", ".zgh-megaMenu");
            $(document).off(selectEvents, ".zgh-megaMenu > a");
            $(document).on(selectEvents, ".zgh-megaMenu > a", function(g) {
                g.stopPropagation();
                var f = $(this);
                if (!f.parent().hasClass("active")) {
                    $(".zgh-megaMenu").removeClass("active");
                    f.parent().addClass("active");
                    $(".zgh-megaMenuCat li").removeAttr("style");
                    $(".zgh-megaMenuCat li").each(function() {
                        var h = $(this);
                        h.css({
                            "transition-delay": b + "ms",
                            "-webkit-transition-delay": b + "ms"
                        });
                        b = b + 120
                    });
                    b = 0
                } else {
                    f.parent().removeClass("active");
                    $(".zgh-megaMenuCat li").removeAttr("style")
                }
            })
        } else {
            $(document).off(selectEvents, ".zgh-megaMenu > a");
            $(document).on("mouseenter", ".zgh-megaMenu > a", function(g) {
                g.stopPropagation();
                var f = $(this);
                f.parent().addClass("active");
                $(".zgh-megaMenuCat li").removeAttr("style");
                $(".zgh-megaMenuCat li").each(function() {
                    var h = $(this);
                    h.css("transition-delay", b + "ms");
                    b = b + 120
                });
                b = 0
            });
            $(document).on("mouseleave", ".zgh-megaMenu", function(g) {
                g.stopPropagation();
                var f = $(this);
                f.removeClass("active");
                $(".zgh-megaMenuCat li").removeAttr("style")
            })
        }
        $('[data-list="' + lastCatActive + '"]').addClass("active");
        $(document).off(selectEvents, ".zgh-megaMenuCat > li > span");
        $(document).on("click touchstart", "[data-list]", function(g) {
            g.stopPropagation();
            var f = $(this);
            $("[data-list]").removeClass("active");
            $("[data-category]").removeClass("active").removeAttr("style");
            f.addClass("active");
            $("[data-category=" + f.attr("data-list") + "]").addClass("active");
            lastCatActive = f.attr("data-list");
            defCatActive = false;
            if (e > 1199) {
                if (f.hasClass("active")) {
                    if (f.attr("data-bundle").length > 0) {
                        d = [];
                        d.push(f.data("bundle").split(","))
                    }
                }
                if (d.length > 0) {
                    $(".zgh-bundles > div").css("display", "none");
                    $.each(d[0], function(h, i) {
                        getBundleClass = i;
                        getBundleClass = getBundleClass.replace(/&+/g, "-").toLowerCase();
                        getBundleClass = getBundleClass.replace(/\s+/g, "").toLowerCase();
                        $(".zgh-b-" + getBundleClass).css("display", "block")
                    });
                    $(".zgh-bundles").addClass("active-visible");
                    d = []
                } else {
                    $(".zgh-bundles").removeClass("active-visible");
                    $(".zgh-bundles > div").css("display", "")
                }
            }
        });
        $("[data-category]").removeAttr("style");
        $("[data-category]").each(function() {
            var f = $(this);
            if ($(".zgh-megaMenuCat > li > div").length) {
                f.appendTo(".zgh-megaMenuPro")
            }
        });
        $('[data-category="' + lastCatActive + '"]').addClass("active");
        $(".zgh-menuItem").css("overflow", "");
        if (e > 767 && e < 1200 && vendTab) {
            var a = $("[data-category]");
            a.each(function(f, h) {
                var g = $(this);
                g.find(".zgh-menuItem").each(function(l, j) {
                    var i = $(this);
                    var k = g.find('[data-index="' + (l + 1) + '"]');
                    split = l % 3;
                    if (split == 0) {
                        i.closest("[data-category]").find(".zmenu-menuProBox-1").append(k)
                    } else {
                        if (split == 1) {
                            i.closest("[data-category]").find(".zmenu-menuProBox-2").append(k)
                        } else {
                            if (split == 2) {
                                i.closest("[data-category]").find(".zmenu-menuProBox-3").append(k)
                            }
                        }
                    }
                });
                $(".zmenu-moreBtn").removeClass("active").text("More products");
                $(".zmenu-moreBtn").css("display", "inline-block")
            });
            vendTab = false;
            vendMobile = true;
            vendDesk = true
        } else {
            if (e > 1199 && vendDesk) {
                var a = $("[data-category]");
                a.each(function(f, h) {
                    var g = $(this);
                    g.find(".zgh-menuItem").each(function(l, j) {
                        var i = $(this);
                        var k = g.find('[data-index="' + (l + 1) + '"]');
                        split = l % 4;
                        if (split == 0) {
                            i.closest("[data-category]").find(".zmenu-menuProBox-1").append(k)
                        } else {
                            if (split == 1) {
                                i.closest("[data-category]").find(".zmenu-menuProBox-2").append(k)
                            } else {
                                if (split == 2) {
                                    i.closest("[data-category]").find(".zmenu-menuProBox-3").append(k)
                                } else {
                                    if (split == 3) {
                                        i.closest("[data-category]").find(".zmenu-menuProBox-4").append(k)
                                    }
                                }
                            }
                        }
                    });
                    $(".zmenu-moreBtn").removeClass("active").text("More products");
                    $(".zmenu-moreBtn").css("display", "inline-block")
                });
                vendDesk = false;
                vendMobile = true;
                vendTab = true
            }
        }
        if (e > 767 && e < 1200) {
            if (minHeiTab) {
                headerMinHeight(3);
                minHeiTab = false;
                minHeiDes = true
            }
        } else {
            if (e > 1199) {
                if (minHeiDes) {
                    headerMinHeight(4);
                    minHeiDes = false;
                    minHeiTab = true
                }
            }
        }
        if (e > 1199) {
            var a = $("[data-bundle]");
            a.each(function() {
                var f = $(this);
                if (f.hasClass("active")) {
                    if (f.attr("data-bundle").length > 0) {
                        d = [];
                        d.push(f.data("bundle").split(","))
                    }
                }
            });
            if (d.length > 0) {
                $(".zgh-bundles > div").css("display", "none");
                $.each(d[0], function(f, g) {
                    getBundleClass = g;
                    getBundleClass = getBundleClass.replace(/&+/g, "-").toLowerCase();
                    getBundleClass = getBundleClass.replace(/\s+/g, "").toLowerCase();
                    $(".zgh-b-" + getBundleClass).css("display", "block")
                });
                $(".zgh-bundles").addClass("active-visible");
                d = []
            } else {
                $(".zgh-bundles").removeClass("active-visible");
                $(".zgh-bundles > div").css("display", "")
            }
        }
    }
    $(".zgh-userPanel").removeClass("active")
}
function initGlobalHeaderResize() {
    var e = wWidth();
    var b = $(window).height();
    zGlobalHeaderResize(e, b);
    setDevice(e, b);
    var a = $(".zgh-menuItem");
    a.each(function() {
        var f = $(this);
        if (f.find("span").length) {
            offText = f.find("p").text().length;
            if (offText < 14) {
                if (e > 767 && e < 1025) {
                    if (currentUrlLang == "ar") {
                        f.find("span").css({
                            right: (offText * 8) + 86,
                            top: 30,
                            left: "inherit"
                        })
                    } else {
                        f.find("span").css({
                            left: (offText * 8) + 70,
                            top: 30
                        })
                    }
                } else {
                    if (e > 1024) {
                        if (currentUrlLang == "ar") {
                            if (f.is(":first-of-type")) {
                                f.find("span").css({
                                    right: (offText * 8) + 121,
                                    top: 30,
                                    left: "inherit"
                                })
                            } else {
                                f.find("span").css({
                                    right: (offText * 8) + 106,
                                    top: 30,
                                    left: "inherit"
                                })
                            }
                        } else {
                            if (f.is(":first-of-type")) {
                                f.find("span").css({
                                    left: (offText * 8) + 115,
                                    top: 30
                                })
                            } else {
                                f.find("span").css({
                                    left: (offText * 8) + 100,
                                    top: 30
                                })
                            }
                        }
                    }
                }
            }
        }
    });
    var d = wWidth()
      , c = $(window).height();
    $(window).resize(function() {
        var i = wWidth();
        var h = $(window).height();
        if (i != d || h != c) {
            var j = wWidth();
            var g = $(window).height();
            zGlobalHeaderResize(j, g);
            setDevice(j, g);
            d = i;
            c = h;
            var f = $(".zgh-menuItem");
            f.each(function() {
                var k = $(this);
                if (k.find("span").length) {
                    offText = k.find("p").text().length;
                    if (offText < 14) {
                        if (j > 767 && j < 1025) {
                            if (currentUrlLang == "ar") {
                                k.find("span").css({
                                    right: (offText * 8) + 86,
                                    top: 30,
                                    left: "inherit"
                                })
                            } else {
                                k.find("span").css({
                                    left: (offText * 8) + 70,
                                    top: 30
                                })
                            }
                        } else {
                            if (j > 1024) {
                                if (currentUrlLang == "ar") {
                                    if (k.is(":first-of-type")) {
                                        k.find("span").css({
                                            right: (offText * 8) + 121,
                                            top: 30,
                                            left: "inherit"
                                        })
                                    } else {
                                        k.find("span").css({
                                            right: (offText * 8) + 106,
                                            top: 30,
                                            left: "inherit"
                                        })
                                    }
                                } else {
                                    if (k.is(":first-of-type")) {
                                        k.find("span").css({
                                            left: (offText * 8) + 115,
                                            top: 30
                                        })
                                    } else {
                                        k.find("span").css({
                                            left: (offText * 8) + 100,
                                            top: 30
                                        })
                                    }
                                }
                            }
                        }
                    }
                }
            })
        }
    });
    $(window).trigger("resize");
    $(window).on("scroll", function() {
        var f = wWidth();
        $(".zgh-userPanel,.zgh-localization").removeClass("active");
        if (f <= 767 && $(".ztop-slide-mobile-menu").length > 0) {
            if ($(window).scrollTop() >= 450) {
                $(".ztop-slide-mobile-menu").addClass("onscroll")
            } else {
                $(".ztop-slide-mobile-menu").removeClass("onscroll")
            }
        }
    })
}
var vendMobile = true;
var vendTab = true;
var vendDesk = true;
var minHeiTab = true;
var minHeiDes = true;
var defCatActive = true;
var lastCatActive = 0;
var devOrientPor = true;
var devOrientLan = true;
$(document).ready(function() {
    zGlobalHeader()
});

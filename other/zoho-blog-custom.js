!function(d) {
    Drupal.behaviors.initColorbox = {
        attach: function(g, f) {
            if (d.isFunction(d.colorbox) && void 0 !== f.colorbox) {
                if (f.colorbox.mobiledetect && window.matchMedia) {
                    if (window.matchMedia("(max-device-width: " + f.colorbox.mobiledevicewidth + ")").matches) {
                        return
                    }
                }
                d(".colorbox", g).once("init-colorbox").colorbox(f.colorbox),
                d(g).bind("cbox_complete", function() {
                    Drupal.attachBehaviors("#cboxLoadedContent")
                })
            }
        }
    }
}(jQuery),
function(d) {
    Drupal.behaviors.initColorboxLoad = {
        attach: function(g, f) {
            d.isFunction(d.colorbox) && void 0 !== f.colorbox && (d.urlParams = function(q) {
                for (var p, j = {}, h = /\+/g, u = /([^&=]+)=?([^&]*)/g, l = function(e) {
                    return decodeURIComponent(e.replace(h, " "))
                }, s = q.split("?"); p = u.exec(s[1]); ) {
                    switch (p[1] = l(p[1]),
                    p[2] = l(p[2]),
                    p[2].toLowerCase()) {
                    case "true":
                    case "yes":
                        p[2] = !0;
                        break;
                    case "false":
                    case "no":
                        p[2] = !1
                    }
                    "width" == p[1] && (p[1] = "innerWidth"),
                    "height" == p[1] && (p[1] = "innerHeight"),
                    j[p[1]] = p[2]
                }
                return j
            }
            ,
            d(".colorbox-load", g).once("init-colorbox-load", function() {
                var h = d.urlParams(d(this).attr("href"));
                d(this).colorbox(d.extend({}, f.colorbox, h))
            }))
        }
    }
}(jQuery);
jQuery(document).ready(function() {
    jQuery("#loader").delay(3000).fadeOut("slow")
});
if (typeof CountryCode == "undefined") {
    CountryCode = "US";
    CountryName = "United States"
}
var allapps = "accounts,mdm,appcreator,crmplus,sign,crm,campaigns,contactmanager,forms,sites,salesiq,survey,social,motivator,developer,pagesense,salesinbox|books,invoice,subscriptions,expense,checkout|bugtracker,connect,docs,writer,show,mail,meeting,projects,showtime,vault,chat,wiki,calendar,workplace,cliq,sprints,sheet,notebook|assist,support,desk|people,recruit|creator,reports,events,officeapi,flow,backstage,marketplace,commerce,teamdrive,officeplatform,peopleplus,inventory,workerly,zohoorchestly,phonebridge,knit,analytics,patchmanagerplus,mail360,marketingautomation,workdrive,contacts,ziasearch,bookings,office,deluge,remoteaccessplus,creatorplus,wallet,docscanner,commerceplus,fsm,learn,identity-management,log360-cloud,ink,catalyst,analyticsplusplugin,apptics,bigin,annotator,teaminbox,lens,transmail,it-management,webinar,remotely,telephony,covid,partners,classes,toolkit,zohopos,backtowork,dataprep|";
var allProduct = ["home", "CRM", "Campaigns", "ContactManager", "Forms", "Sites", "SalesIQ", "Survey", "Social", "Assist", "Support", "BugTracker", "Connect", "Docs", "Mail", "Meeting", "Projects", "ShowTime", "Vault", "Chat", "Books", "Invoice", "Subscriptions", "Expense", "Checkout", "People", "Recruit", "Creator", "Reports", "Motivator", "Accounts", "AppCreator", "mdm", "Seminar", "crmplus", "wiki", "Desk", "Cliq", "Developer", "SalesInbox", "Sign", "Calendar", "WorkPlace", "Events", "officeapi", "Sprints", "pagesense", "flow", "show", "sheet", "writer", "notebook", "one", "partnerstore", "backstage", "marketplace", "Commerce", "analytics-plus", "teamdrive", "officeplatform", "peopleplus", "inventory", "workerly", "zohoorchestly", "phonebridge", "knit", "analytics", "patchmanagerplus", "mail360", "marketingautomation", "workdrive", "contacts", "ziasearch", "bookings", "office", "deluge", "remoteaccessplus", "dataprep", "creatorplus", "wallet", "docscanner", "commerceplus", "fsm", "learn", "identity-management", "log360-cloud", "ink", "catalyst", "analyticsplusplugin", "it-analytics", "zohoscanner", "apptics", "Bigin", "annotator", "teaminbox", "lens", "Transmail", "it-management", "webinar", "remotely", "telephony", "covid", "partners", "classes", "toolkit", "ZohoPOS", "backtowork", "zia"];
var allProductCRM = ["-", "CRM", "Campaigns", "-", "-", "-", "-", "Survey", "-", "Assist", "-", "BugTracker", "-", "Docs", "Mail", "Meeting", "Projects", "-", "-", "-", "Books", "Invoice", "Subscriptions", "Expense", "-", "People", "Recruit", "Creator", "Reports", "Motivator", "-", "AppCreator", "-", "-", "CRMPlus", "Wiki", "Desk", "-", "-", "-", "Sign", "-", "Workplace", "-", "-", "-", "PageSense", "Flow", "-", "-", "-", "-", "One", "-", "-", "-", "Commerce", "-", "TeamDrive", "-", "-", "Inventory", "Workerly", "Orchestly", "-", "-", "Analytics", "-", "-", "MarketingAutomation", "WorkDrive", "-", "-", "Bookings", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
var nameServices = [["ZohoHome", "ZohoCRM", "ZohoCampaigns", "ZohoContactManager", "ZohoForms", "ZohoSites", "LiveDesk", "ZohoSurvey", "ZohoSocial", "ZohoAssist", "ZohoSupport", "ZohoBugTracker", "ZohoPulse", "ZohoPC", "VirtualOffice", "ZohoMeeting", "ZohoProjects", "ZohoShowtime", "ZohoVault", "ZohoChat", "ZohoBooks", "ZohoInvoice", "ZohoSubscriptions", "ZohoExpense", "ZohoCheckout", "zohopeople", "ZohoRecruit", "ZohoCreator", "ZohoReports", "ZohoMotivator", "", "", "", "", "CRMPlus", "ZohoWiki", "ZohoSupport", "ZohoChat", "ZohoCRM", "SalesInbox", "ZohoSign", "ZohoCalendar", "VirtualOffice", "", "OfficeAPI", "ZohoSprints", "PageSense", "ZohoFlow", "ZohoShow", "ZohoSheet", "ZohoWriter", "NoteBook", "ZohoOne", "", "ZohoBackStage", "ZohomarketPlace", "ZohoCommerce", "", "TeamDrive", "OfficeAPI", "Peopleplus", "", "ZohoWorkerly", "Orchestly", "phonebridge", "zohostreamline", "ZohoReports", "PatchManagerPlusCloud", "mail360", "zohomarketinghub", "TeamDrive", "zohoContacts", "ZohoSearch", "ZohoBookings", "office", "deluge", "", "ZohoDataprep", "ZohoCreatorPlus", "wallet", "docscanner", "ZohoCommerce", "", "ZohoLearn", "IDMPOD", "logs360cloud", "ZohoInk", "", "", "", "", "", "ZohoBigin", "", "", "ZohoLens", "", "", "", "", "", "", "", "", ""]];
var oldUSDvalue = ["DZ", "AO", "AI", "AG", "AR", "AW", "BS", "BB", "BZ", "BJ", "BM", "BO", "BW", "BR", "BF", "BI", "CM", "CV", "KY", "CF", "TD", "CL", "CN", "CO", "KM", "CD", "CR", "CW", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "ET", "FK", "PF", "GA", "GM", "GH", "GD", "GU", "GT", "GN", "GW", "GY", "HT", "HN", "IQ", "IL", "JM", "JP", "JO", "KE", "LB", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "YT", "MX", "MS", "MA", "MZ", "NA", "KZ", "NI", "NE", "NG", "OM", "PS", "PA", "PY", "PE", "PN", "PR", "RE", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "ST", "SN", "SL", "SX", "SB", "SO", "ZA", "SS", "SR", "SJ", "SZ", "TZ", "TG", "TK", "TT", "TN", "TC", "UG", "UY", "VE", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW", "AX", "BQ", "BV", "GF", "TF", "GP", "MQ", "GS"];
var oldUSDprds = ["analytics", "assist", "backstage", "bookings", "bugtracker", "campaigns", "commerce", "connect", "creator", "creatorplus", "desk", "flow", "forms", "lens", "marketingautomation", "officeplatform", "one", "people", "peopleplus", "recruit", "sign", "sites", "social", "sprints", "survey", "vault", "workdrive", "workerly", "crm", "crmplus"];
var stateupdate = [];
var allProductlowerCase = [];
for (var i = 0; i < allProduct.length; i++) {
    allProductlowerCase[i] = allProduct[i].toLowerCase()
}
var haveAccount = Drupal.t("Have a Zoho Account?")
  , signuplogin = Drupal.t("SIGN IN");
var metaName = ["apple-itunes-app", "google-play-app"];
var ss = 0, myAccount = Drupal.t("My Account"), accessZoho, signOut = Drupal.t("Sign Out");
var appsIds = [];
var metaHas = false;
var android = location.href.match(/#android$/) || navigator.userAgent.match(/Android/i) != null;
var getDomain = document.domain;
var splitUrl = getDomain.split(".");
var domainOne = splitUrl.pop();
var Zdomain = splitUrl.pop();
var langsrc = "/";
var productName = "home";
var _zcopr = "zohocorp";
if (document.domain == "www.zoho.com.cn") {
    Zdomain = "zoho";
    domainOne = "com.cn"
}
if (Zdomain == _zcopr) {
    Zdomain = "zoho"
}
var zPrdSignupLinkText;
var zPrdSignupLink = "https://www.zoho.com/signup.html";
var zPrdLoginLink = "https://accounts.zoho.com/signin?servicename=ZohoHome&signupurl=https://www.zoho.com/signup.html";
var ZdomainName = "zoho";
var ZcheckDomain = "www.localzoho.com";
var _globalAccess = "";
var getusername;
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
var newFooter = "";
var currentUrlLang = "";
var _com = "com"
  , _eu = "eu";
var _lhref = window.location.href;
var _preZ = "prezoho.zoho.com";
var _preZC = "prezoho.zohocorp.com";
var _zcmsZC = "zcms.zohocorp.com";
var _lz = "localzoho";
var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
$ = jQuery.noConflict();
var onlycom = false;
var currencyCodeArray = ["USD", "OLDUSD", "EUR", "INR", "GBP", "BRL", "JPY", "AUD", "AUD", "SGD", "AED", "SAR", "MXN", "CNY", "ZAR", "NGN", "KES", "EGP", "CAD", "THB", "EURTR", "IDR"];
var currencySymbolArray = ["&#36;", "&#36;", "&#8364;", "&#8377;", "&#163;", "R&#36;", "&#165;", "A&#36;", "A&#36;", "S&#36;", "AED", "SAR", "Mex&#36;", "&#165;", "R", "&#8358;", "K", "E&#163;", "C&#36;", "&#3647;", "&#8364;", "Rp"];
var currencyCountryArray = ["ALL", "ALL", "EUlist", "IN", "GB", "BR", "JP", "AU", "NZ", "SG", "AE", "SA", "MX", "CN", "ZA", "NG", "KE", "EG", "CA", "TH", "TR", "ID"];
var _pathName = window.location.pathname;
var dcenabled = true;
var nondc = true;
if (Zdomain == "localzoho" || domainOne == "com.cn") {
    dcenabled = false;
    nondc = false
}
var id_yv_json = "";
var ipArr = ["172.24.125.24", "172.22.152.98", "172.24.105.146", "172.22.110.12"];
for (var i = 0; i < ipArr.length; i++) {
    if (_lhref.indexOf(ipArr[i]) > -1) {
        Zdomain = "zoho";
        domainOne = "com"
    }
}
var dcdomainOne = domainOne;
var dcVal = "0"
  , myimagebool = 1;
var currentYear = "2023";
var creativeLang = "";
var czonebusiness = Drupal.t("Business");
var czoneindividual = Drupal.t("Individual");
var _txtIwould = Drupal.t("I would like to receive marketing communication from Zoho and Zoho&rsquo;s regional partners regarding Zoho&rsquo;s products, services, and events.");
var selectEvents = (function() {
    if ("ontouchstart"in document.documentElement === true) {
        return "touchstart"
    } else {
        return "click"
    }
}
)();
var knowprd = typeof $("body").attr("data-prdname") != "undefined";
var customvar = {
    htmlencode: function(f) {
        var d = [];
        for (var e = f.length - 1; e >= 0; e--) {
            d.unshift(["&#", f[e].charCodeAt(), ";"].join(""))
        }
        return d.join("")
    },
    htmldecode: function(d) {
        return d.replace(/&#(\d+);/g, function(e, f) {
            return String.fromCharCode(f)
        })
    },
    termslink: function() {
        var e = "https://www.zoho.com/jp/terms.html";
        if ($(".footer-terms a").length > 0) {
            if (productName == "salesiq" || productName == "pagesense" || productName == "sites" || productName == "developer" || productName == "cliq" || productName == "commerce" || productName == "transmail" || productName == "zeptomail" || productName == "toolkit" || productName == "crm" || productName == "campaigns" || productName == "voice") {
                var d = $(".footer-terms a").attr("href").split("terms.html").join(productName + "/terms.html")
                  , e = d;
                $(".footer-terms a").attr("href", d)
            } else {
                if (productName == "creator") {
                    var d = "https://www.zoho.com/creator/terms.html"
                      , e = d;
                    $(".footer-terms a").attr("href", d)
                } else {
                    if (productName == "officeapi") {
                        var d = "https://officeapi.zoho.com/jsp/terms.jsp"
                          , e = d;
                        $(".footer-terms a").attr("href", d)
                    } else {
                        if (productName == "trainercentral") {
                            var d = "https://www.trainercentral.com/terms.html"
                              , e = d;
                            $(".footer-terms a").attr("href", d)
                        }
                    }
                }
            }
        }
        ($(".stermslink").length > 0) ? $(".stermslink").attr("href", e) : "";
        if (typeof useofterms != "undefined") {
            useofterms()
        }
    },
    lsoinfo: function(e) {
        var h = [];
        var f = 0
          , l = 0;
        if (localStorage.getItem("zglobal_Acookie_optOut") != null) {
            if (localStorage.getItem("zglobal_Acookie_optOut") == "-1" || localStorage.getItem("zglobal_Acookie_optOut") == "1" || localStorage.getItem("zglobal_Acookie_optOut") == "3") {
                f = 1
            }
        }
        if (f == 0) {
            if (localStorage.getItem("czonecreativeinfo") != "undefined" && localStorage.getItem("czonecreativeinfo") != null) {
                h = localStorage.getItem("czonecreativeinfo").split(",")
            }
            if (arguments.length > 1) {
                if (typeof arguments[1] == "string") {
                    if (arguments[1].indexOf("{") > -1 && arguments[1].indexOf("}") > 0) {
                        l = 1
                    }
                } else {
                    if (Array.isArray(arguments[1])) {
                        l = 2
                    }
                }
            }
            if (arguments.length > 1) {
                if (h.indexOf(arguments[0]) % 2 == 0) {
                    if (l == 1) {
                        h[h.indexOf(arguments[0]) + 1] = String(arguments[1]).split(",").join("-j-")
                    } else {
                        if (l == 2) {
                            h[h.indexOf(arguments[0]) + 1] = arguments[1].join("-a-")
                        } else {
                            h[h.indexOf(arguments[0]) + 1] = arguments[1]
                        }
                    }
                } else {
                    for (var g = 0; g < 2; g++) {
                        if (arguments.length > 1 && g == 1) {
                            if (l == 1) {
                                h.push(String(arguments[1]).split(",").join("-j-"))
                            } else {
                                if (l == 2) {
                                    h.push(arguments[1].join("-a-"))
                                } else {
                                    h.push(arguments[g])
                                }
                            }
                        } else {
                            h.push(arguments[g])
                        }
                    }
                }
                try {
                    localStorage.setItem("czonecreativeinfo", h)
                } catch (j) {}
            } else {
                if (arguments.length == 1) {
                    if (h.indexOf(arguments[0]) > -1) {
                        if (h.indexOf(arguments[0]) % 2 == 0) {
                            var d = h[h.indexOf(arguments[0]) + 1];
                            if (d.indexOf("-j-") > -1) {
                                d = d.split("-j-").join(",")
                            } else {
                                if (d.indexOf("-a-") > -1) {
                                    d = d.split("-a-")
                                }
                            }
                            return d
                        } else {
                            return ""
                        }
                    } else {
                        return ""
                    }
                }
            }
        } else {
            if (typeof lsonotset_callback != "undefined") {
                lsonotset_callback(e)
            }
            if (arguments.length == 1) {
                return ""
            }
        }
    },
    email: Drupal.t("Email"),
    eEmail: Drupal.t("Please enter your email"),
    password: Drupal.t("Password"),
    epassword: Drupal.t("Please enter your password"),
    fullName: Drupal.t("Full Name"),
    eFullName: Drupal.t("Please enter your full name"),
    companyName: Drupal.t("Company Name"),
    eCompanyName: Drupal.t("Please enter your company name"),
    phoneNumber: Drupal.t("Phone Number"),
    ePhoneNumber: Drupal.t("Please enter your phone number"),
    eValidPhoneNumber: Drupal.t("Please enter valid phone number"),
    mobileNumber: Drupal.t("Mobile Number"),
    eMobileNumber: Drupal.t("Please enter your mobile number"),
    eValidMobileNumber: Drupal.t("Please enter valid mobile number"),
    eReMobileNumber: Drupal.t("Please re-enter valid mobile number"),
    portalName: Drupal.t("Portal Name"),
    ePortalName: Drupal.t("Please enter your portal name"),
    eUserName: Drupal.t("Please enter your user name"),
    eFirstName: Drupal.t("Please enter your first name"),
    eLastName: Drupal.t("Please enter your last name"),
    vsignup: Drupal.t("Verify your sign-up"),
    enterotpmobile: Drupal.t("Enter the one-time password sent to your mobile number."),
    enterotpemail: Drupal.t("Enter the one-time password sent to your email address."),
    change: Drupal.t("Change Country"),
    changeme: Drupal.t("Change"),
    verify: Drupal.t("VERIFY"),
    verifying: Drupal.t("VERIFYING"),
    enterOtp: Drupal.t("Enter OTP"),
    resentotp: Drupal.t("Resend OTP"),
    basedon: Drupal.t("based on your IP"),
    basedonip: Drupal.t("It looks like you&lsquo;re in"),
    datawillb: Drupal.t("Your data will be stored in the"),
    datacenter: Drupal.t("data center"),
    outproduct: ["zohoorchestly", "trainercentral"],
    countrychanged: false,
    otpEle: '<span class="signupotpcontainer" style="display:none"> <div class="verifytitle">' + Drupal.t("Verify your sign-up") + '</div> <div class="verifyheader">' + Drupal.t("Enter the one-time password sent to your email address.") + '</div> <div class="otpmobile"> <span id="mobileotp"></span> <span class="change" onclick="gobacktosignuptemp()">' + Drupal.t("Change") + '</span> </div> <span class="za-otp-container" style="display: none;"> <input type="text" class="form-input" tabindex="1" name="otp" id="otpfield" placeholder="' + Drupal.t("Enter OTP") + '" disabled="disabled"> <span onclick="resendOTP()" class="resendotp">' + Drupal.t("Resend OTP") + '</span> </span> <span class="za-submitbtn-otp"> <input type="button" tabindex="1" class="signupbtn" value="' + Drupal.t("VERIFY") + '" onclick="validateOTP()" name="otpfield"> <div class="loadingImg"></div> </span> </span>',
    cachedWidth: window.innerWidth,
    pathname: window.location.pathname,
    host: window.location.hostname,
    isMobile: /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent),
    iphone: /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    ipad: navigator.userAgent.match(/iPad/i) != null,
    android: /Android/.test(navigator.userAgent) && !window.MSStream,
    host: window.location.hostname,
    numberOfCountries: "150",
    numberOfUsers: "100",
    numberOfUsersText: Drupal.t("hundred"),
    numberOfEmployees: "15",
    numberOfYears: "25",
    numberOfPartners: "2",
    numberOfApps: "55",
    numberOfCustomers: "700",
    numberOfDataCenters: "12",
    currentstate: "",
    optinArr: ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "GR", "IT", "LT", "MT", "NL", "PL", "RO", "SK", "SI", "ES", "IS", "NO", "CH", "CA", "XK"],
    optoutArr: ["EE", "FI", "FR", "HU", "IE", "LV", "LU", "PT", "SI", "SE", "GB", "ZA"],
    doubleoptinArr: ["DE", "AU", "TR"],
    servicename: "",
    domainArr: [["com", "in", "eu", "com.au", "jp"], [], ["zoho.com", "zoho.in", "zoho.eu", "zoho.com.au", "zoho.jp"]],
    pArr: ["accounts", "notebook", "mail", "analytics", "cliq", "creator", "meeting", "sheet", "show", "wiki", "writer", "people", "projects", "docs", "discussions", "invoice", "calendar", "zia search", "video", "contacts", "crm", "gadgets", "zoho store", "servicedesk plus", "recruit", "campaigns", "desk", "assist", "books", "sites", "zoho api", "zoho mobile", "bugtracker", "social", "contact manager", "task engine", "zoho mobile sync", "connect", "zohomailwatch", "survey", "salesiq", "forms", "vault", "logs", "zoho", "zoho mobile proxy", "jproxy", "subscriptions", "manage engine", "zoho home", "dbsearch", "mapsapi", "showtime", "site24x7", "alarmsone", "expense", "pdfgen", "motivator", "zohoappcreator", "transmail", "inventory", "deluge runtime", "zoho directory (zd)", "dlserver", "shortenurl", "ear", "iis", "maps-nomi", "mapstiles", "mobile device management", "plusloggerone", "crmplus", "salesinbox", "zmnotifications", "sheetapp", "zmindexing", "zohoplugin", "zohospotlight", "zmimageprocessing", "mi", "bugbounty", "zohoreceipts", "zohoquotes", "zoho payroll", "zohoparser", "soc", "zoho checkout", "zoho finance plus", "zoho backstage", "wms", "zmintegration", "zlabsml", "sign", "zoho one", "pagesense", "flow", "sprints", "zoho gst", "zohoasp", "nameserver", "zohocode", "hacksaw", "zoho marketplace", "zapps", "zohofinancerisk", "patch manager plus", "malware", "log360cloud", "zmmx", "startwith", "zmuploaddownload", "zoho commerce", "zohoarm", "zmparser", "zoho profile", "scrapy", "office integrator", "zohobills", "socialdata", "sastest", "cstore", "ziaplatform", "zlabsdl", "workdrive", "zmpop", "phonebridge", "orchestly", "zmsmtp", "zohotravel", "zmimap", "trends", "remote access", "zohostoreapi", "webanalytics", "zohodashboards", "zohomarketinghub", "zohoink", "zohoworkerly", "peopleplus", "zohomts", "bdaas admin", "cirrus", "zohofiles", "zoho presentation platform", "stratus", "socialanalytics", "ediscovery", "comply", "zmmigration", "bigin", "zohoediscovery", "zohocatalyst", "desktop central", "blockchain", "zmvaultsearch", "templates", "zohocloud", "zbsm", "zoho dataprep", "identity manager plus", "zohobookings", "zask", "zohocreatorplus", "zohopublish", "zoholearn", "mail360smtp", "mail360mx", "mail360indexing", "mail360notifications", "rarn", "murphy", "zohobetalens", "solution", "zmprotocols", "appsense", "mail360protocols", "apigateway", "zohovoice", "landingpage", "zohopos", "zmprocessors", "mailapps", "webstats", "mason", "connectcommunity", "remote access plus", "zmtask", "slate", "zohopilot", "marketingplus", "bluepencil", "zoho contracts", "routeiq", "zoholens", "zohoim", "teaminbox", "zohooffice", "mail360processors", "statusiq", "cloudspend", "aidev", "zohofsm", "zohoposapi", "remotely", "zmspamgateway", "zohoshifts", "crm", "thrive", "wmspserver", "wmspsbserver", "zohorepository", "wmsacs", "zohocircuit", "zohogc", "zohointegrations", "nocmonitor", "writerautomation", "label", "trainercentral", "zoho domains", "whiteboard", "feedback center", "zohosignals", "ziapipelines", "ulaa", "mtacentral", "zohoqueue", "zohotables", "zohoiot", "caas", "quartz", "timeservice", "kmslite", "screenplay", "researchstudio", "rtcplatform", "ziahub", "nimbus", "accio", "one", "workplace", "catalyst", "backstage", "commerce", "bookings", "marketingautomation", "lens", "voice", "zeptomail", "learn", "workerly", "backtowork", "shifts", "mobiledevicemanagerplus", "patchmanagerplus", "remoteaccessplus", "log360-cloud", "identitymanagerplus", "desktopcentral", "officeplatform", "dataprep", "contracts", "developer", "it-management", "identity-management"],
    pServiceNames: ["AaaServer", "NoteBook", "VirtualOffice", "ZohoReports", "ZohoChat", "ZohoCreator", "ZohoMeeting", "ZohoSheet", "ZohoShow", "ZohoWiki", "ZohoWriter", "zohopeople", "ZohoProjects", "ZohoPC", "ZohoDiscussions", "ZohoInvoice", "ZohoCalendar", "ZohoSearch", "ZohoVideo", "ZohoContacts", "ZohoCRM", "ZohoGadgets", "ZohoPayments", "SDPOnDemand", "ZohoRecruit", "ZohoCampaigns", "ZohoSupport", "ZohoAssist", "ZohoBooks", "ZohoSites", "ZohoAPI", "ZohoMobile", "ZohoBugTracker", "ZohoSocial", "ZohoContactManager", "TaskEngine", "MobileSync", "ZohoPulse", "ZohoMailWatch", "ZohoSurvey", "LiveDesk", "ZohoForms", "ZohoVault", "ZohoLogs", "Zoho", "ZohoMobileProxy", "JProxy", "ZohoSubscriptions", "ManageEngine", "ZohoHome", "ZohoDBSearch", "maps", "ZohoShowtime", "Site24x7", "AlarmsOne", "ZohoExpense", "PdfGen", "ZohoMotivator", "ZohoMCreator", "Transmail", "ZohoInventory", "DRE", "ZohoDirectory", "DLServer", "shortenurl", "EAR", "IIS", "mapsnomi", "mapstiles", "MDMOnDemand", "plusloggerone", "CRMPlus", "SalesInbox", "ZMNotifications", "sheetapp", "ZMIndexing", "ZohoPlugin", "ZohoSpotLight", "ZMImageProcessing", "MI", "BugBounty", "ZohoReceipts", "ZohoQuotes", "ZohoPayroll", "ZohoParser", "SOC", "ZohoCheckout", "ZohoFinancePlus", "zohobackstage", "WMS", "ZMIntegration", "ZLabsML", "ZohoSign", "ZohoOne", "PageSense", "ZohoFlow", "ZohoSprints", "ZohoTax", "ZohoASP", "NameServer", "ZohoCode", "HackSaw", "ZohoMarketplace", "ZApps", "ZohoFinanceRisk", "PatchManagerPlusCloud", "malware", "Logs360Cloud", "ZMMX", "Startwith", "ZMUploadDownload", "ZohoCommerce", "ZohoARM", "ZMParser", "ZohoProfile", "scrapy", "OfficeAPI", "ZohoBills", "SocialData", "SasTest", "cstore", "ZIAPlatform", "ZLabsdl", "TeamDrive", "ZMPOP", "PhoneBridge", "Orchestly", "ZMSMTP", "ZohoTravel", "ZMIMAP", "Trends", "ZohoRemoteAccess", "ZohoStoreAPI", "WebAnalytics", "ZohoDashboards", "ZohoMarketingHub", "ZohoInk", "ZohoWorkerly", "Peopleplus", "ZohoMTS", "BDaaSAdmin", "Cirrus", "ZohoFiles", "ZohoPresentationPlatform", "Stratus", "SocialAnalytics", "ZMVault", "Comply", "ZMMigration", "ZohoBigin", "ZohoEDiscovery", "ZOHOCATALYST", "DesktopCentralCloud", "Blockchain", "ZMVaultSearch", "Templates", "ZohoCloud", "ZBSM", "zohodataprep", "idmpod", "ZohoBookings", "ZAsk", "ZohoCreatorPlus", "ZohoPublish", "ZohoLearn", "Mail360SMTP", "Mail360MX", "Mail360Indexing", "Mail360Notifications", "ZohoRARN", "Murphy", "ZohoBetaLens", "Solution", "ZMProtocols", "AppSense", "Mail360Protocols", "APIGateway", "ZohoVoice", "landingpage", "ZohoPOS", "ZMProcessors", "MailApps", "WebStats", "Mason", "ConnectCommunity", "RemoteAccessPlusCloud", "ZMTASK", "Slate", "ZohoPilot", "MarketingPlus", "BluePencil", "contracts", "routeiq", "ZohoLens", "ZohoIM", "TeamInbox", "ZohoOffice", "Mail360Processors", "StatusPages", "CloudSpend", "AIDev", "ZohoFSM", "ZohoPOSAPI", "Remotely", "ZMSpamGateway", "ZohoShifts", "NewCRM", "Thrive", "wmspserver", "wmspsbserver", "ZohoRepository", "wmsacs", "ZohoCircuit", "ZohoGC", "ZohoIntegrations", "NocMon", "WriterAutomation", "Label", "TrainerCentral", "ZohoDomains", "Whiteboard", "FeedBackCenter", "ZohoSignals", "ZIAPipelines", "PrimeumWeb", "MTACentral", "ZohoQueue", "ZohoTables", "ZohoIOT", "CaaS", "Quartz", "TimeService", "KMSLite", "Screenplay", "Insights", "RTCPlatform", "ZiaHub", "Nimbus", "Accio", "ZohoOne", "VirtualOffice", "ZohoCatalyst", "ZohoBackstage", "ZohoCommerce", "ZohoBookings", "zohomarketinghub", "ZohoLens", "ZohoVoice", "transmail", "ZohoLearn", "ZohoWorkerly", "ZohoCreator", "ZohoShifts", "MDMOnDemand", "PatchManagerPlusCloud", "RemoteAccessPlusCloud", "logs360cloud", "IDMPOD", "DesktopCentralCloud", "OfficeAPI", "ZohoDataprep", "Contracts", "ZohoCRM", "alarmsone", "IDMPOD"],
    countries: [["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "CÃ´te d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "North Korea", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Helena", "Saint Kitts And Nevis", "Saint Lucia", "Saint Pierre And Miquelon", "Saint Vincent And The Grenadines", "Samoa", "San Marino", "Sao Tome And Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "The Democratic Republic Of Congo", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks And Caicos Islands", "Tuvalu", "U.S. Virgin Islands", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican", "Venezuela", "Vietnam", "Wallis And Futuna", "Yemen", "Zambia", "Zimbabwe", "Ã…land Islands"], ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BR", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CO", "KM", "CG", "CK", "CR", "HR", "CU", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GN", "GW", "GY", "HT", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IL", "IT", "JM", "JP", "JO", "KZ", "KE", "KI", "XK", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "AN", "NC", "NZ", "NI", "NE", "NG", "NU", "KP", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "SH", "KN", "LC", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SK", "SI", "SB", "SO", "ZA", "KR", "ES", "LK", "SD", "SR", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "CD", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "VI", "UG", "UA", "AE", "GB", "US", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "YE", "ZM", "ZW", "AX"], ["93", "355", "213", "1", "376", "244", "1", "1", "54", "374", "297", "61", "43", "994", "1", "973", "880", "1", "375", "32", "501", "229", "1", "975", "591", "387", "267", "55", "1", "673", "359", "226", "257", "855", "237", "1", "238", "1", "236", "235", "56", "86", "57", "269", "242", "682", "506", "385", "53", "357", "420", "225", "45", "253", "1", "1", "593", "20", "503", "240", "291", "372", "251", "500", "298", "679", "358", "33", "594", "689", "241", "220", "995", "49", "233", "350", "30", "299", "1", "590", "1", "502", "224", "245", "592", "509", "504", "852", "36", "354", "91", "62", "98", "964", "353", "972", "39", "1", "81", "962", "7", "254", "686", "383", "965", "996", "856", "371", "961", "266", "231", "218", "423", "370", "352", "853", "389", "261", "265", "60", "960", "223", "356", "692", "596", "222", "230", "52", "691", "373", "377", "976", "382", "1", "212", "258", "95", "264", "674", "977", "31", "599", "687", "64", "505", "227", "234", "683", "850", "1", "47", "968", "92", "680", "970", "507", "675", "595", "51", "63", "48", "351", "1", "974", "262", "40", "7", "250", "290", "1", "1", "508", "1", "685", "378", "239", "966", "221", "381", "248", "232", "65", "421", "386", "677", "252", "27", "82", "34", "94", "249", "597", "268", "46", "41", "963", "886", "992", "255", "66", "243", "670", "228", "690", "676", "1", "216", "90", "993", "1", "688", "1", "256", "380", "971", "44", "1", "598", "998", "678", "379", "58", "84", "681", "967", "260", "263", "672"]],
    countryEu: ["RS", "VA", "GB", "UA", "CH", "SE", "ES", "SI", "SK", "SM", "RO", "PT", "PL", "NO", "NL", "ME", "MC", "MD", "MT", "MK", "LU", "LT", "LI", "LV", "IT", "IM", "IE", "IS", "HU", "GR", "GI", "DE", "FR", "FI", "FO", "EE", "DK", "CZ", "CY", "HR", "BG", "BA", "BE", "BY", "AT", "AD", "AL", "AX", "GG", "JE", "XK", "SJ", "CS", "UK", "TR", "GE"],
    countryApac: ["AU", "BD", "BT", "IO", "BN", "KH", "CN", "FJ", "HK", "IN", "ID", "JP", "KP", "KR", "LA", "MO", "MY", "MV", "MN", "MM", "NP", "NZ", "PK", "PG", "PH", "SG", "LK", "TW", "TH", "TL", "VN"],
    lAmerica: ["BZ", "CR", "SV", "GT", "HN", "MX", "NI", "PA", "AR", "BO", "BR", "CL", "CO", "EC", "GY", "PY", "PE", "SR", "UY", "VE", "CU", "DO", "HT", "PR", "BL", "MF"],
    countryTranstasman: ["AU", "NZ"],
    meaList: ["TR", "IQ", "SA", "YE", "SY", "AE", "IL", "JO", "PS", "LB", "OM", "KW", "QA", "BH", "IR"],
    usstates: ["", "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", "Virginia", "Washington", "Washington, D.C", "West Virginia", "Wisconsin", "Wyoming"],
    cnavail: ["crm", "salesiq", "survey", "campaigns", "sites", "forms", "bookings", "bigin", "crmplus", "mail", "sprints", "notebook", "docs", "workdrive", "writer", "sheet", "show", "projects", "connect", "meeting", "vault", "showtime", "cliq", "wiki", "workplace", "creator", "analytics", "desk", "assist", "recruit", "people", "one"],
    instates: [Drupal.t("Select your state"), "Andaman and Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"],
    africaList: ["DZ", "AO", "BJ", "BW", "IO", "BF", "BI", "CV", "CM", "CF", "TD", "KM", "CG", "CD", "CI", "DJ", "EG", "GQ", "ER", "SZ", "ET", "TF", "GA", "GM", "GH", "GN", "GW", "KE", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "YT", "MA", "MZ", "NA", "NE", "NG", "RE", "RW", "SH", "ST", "SN", "SC", "SL", "SO", "ZA", "SS", "SD", "TZ", "TG", "TN", "UG", "EH", "ZM", "ZW"],
    middleEastList: ["CY", "BH", "IR", "IQ", "IL", "JO", "KW", "LB", "OM", "PS", "QA", "SA", "SY", "TR", "AE", "YE"],
    africaRegList: ["Algeria", "Benin", "Angle", "Burundi", "Botswana", "Canary Islands", "Burkina Faso", "Cameroon", "Comoros", "Eswantini", "Ceuta", "Cape Verde", "Central African Republic", "Djibouti", "Lesotho", "Egypt", "Cote d Ivoire", "Chad", "Eritrea", "Madagascar", "Libya", "The Gambia", "Democratic Republic of the Congo", "Ethiopia", "Namibia", "Madeira", "Ghana", "Equatorial Guinea", "French Southern Territories", "South Africa", "Melilla", "Guinea", "Gabon", "Kenya", "Morocco", "Guinea Bissau", "Sao Tome and principe", "Malawi", "Sudan", "Liberia", "Mauritius", "Tunisia", "Mali", "Mayotte", "Western Sahara", "Mauritania", "Mozambique", "Niger", "Reunion", "Nigeria", "Rwanda", "Saint Helena", "Seychelles", "Senegal", "Somalia", "Sierra Leone", "South Sudan", "Togo", "Tanzania", "Uganda", "Zambia", "Zimbabwe"],
    transCName: ((typeof CountryName != "undefined") ? CountryName : "United States"),
    stateadd: function() {
        this._val = "select your state";
        var e = "US" == CountryCode ? customvar.usstates : "IN" == CountryCode && customvar.instates;
        arguments.length > 0 && ("US" == arguments[0] || "United States" == arguments[0] ? e = customvar.usstates : "IN" != arguments[0] && "India" != arguments[0] || (e = customvar.instates));
        for (var d = 0; d < e.length; d++) {
            if (e.indexOf(customvar.instates[1] > -1) && d == 0) {
                this._val += '<option value="select your state">' + e[d] + "</option>"
            } else {
                this._val += '<option value="' + e[d].toLowerCase() + '">' + e[d] + "</option>"
            }
        }
        if (arguments.length > 0) {
            if (arguments[1] == "webform") {
                $(".globalstatecode").html(this._val)
            } else {
                $(".za-globalstate-signup").html(this._val)
            }
        }
        return this._val
    },
    countrypop: function(d) {
        this._data = "";
        this.arr = customvar.countries;
        for (var e = 0; e < customvar.countries[0].length; e++) {
            if (d == "dial") {
                this._data += '<option value="' + this.arr[1][e] + '" dialling_code="' + this.arr[2][e] + '">' + this.arr[0][e] + " (+" + this.arr[2][e] + ")</option>"
            } else {
                this._val = "0";
                (customvar.optinArr.indexOf(this.arr[1][e]) > -1) ? this._val = "2" : (customvar.optoutArr.indexOf(this.arr[1][e]) > -1) ? this._val = "2" : (customvar.doubleoptinArr.indexOf(this.arr[1][e]) > -1) ? this._val = "3" : "";
                this._data += '<option value="' + this.arr[1][e] + '" newsletter_mode="' + this._val + '">' + this.arr[0][e] + "</option>"
            }
        }
        if (typeof CountryCode != "undefined") {
            if ($(".globalcountrycode-signup").length > 0) {
                $(".globalcountrycode-signup").val(CountryCode)
            }
        }
        setTimeout(function() {
            if (typeof CountryCode != "undefined") {
                if ($(".globalcountrycode-signup").length > 0) {
                    $(".globalcountrycode-signup").val(CountryCode)
                }
            }
            var f = 0;
            var g = setInterval(function() {
                if (($(".dc-info").length > 0) && $(".za-state-container").length < 1) {
                    clearInterval(g);
                    if (stateupdate.indexOf(customvar.productName) > -1) {
                        $(".dc-info").after('<div class="za-state-container zhide-common"><span class="zdd-downarrow zdd-state"></span><select aria-label="Change the State" class="za-globalstate-signup" name="country_state">' + customvar.stateadd() + "</select></div>")
                    } else {
                        this._val = "";
                        for (var h = 0; h < customvar.usstates.length; h++) {
                            this._val += '<option value="' + customvar.usstates[h].toLowerCase() + '">' + customvar.usstates[h] + "</option>"
                        }
                        $(".dc-info").after('<div class="za-state-container za-country_state-container zhide-common"><span class="zdd-downarrow zdd-state"></span><select aria-label="Change the State" class="za-globalstate-signup" name="country_state">' + this._val + "</select></div>")
                    }
                    if (CountryCode == "US") {
                        $(".za-state-container").removeClass("zhide-common").addClass("zshow-common");
                        if (CountryCode == "US") {
                            $(".za-globalstate-signup option").eq(0).remove();
                            $(".za-globalstate-signup").val($(".za-globalstate-signup option").eq(0).val())
                        }
                    }
                    if (typeof RegionName != "undefined") {
                        if ($(".za-globalstate-signup").length > 0) {
                            if (CountryCode == "US") {
                                $(".za-globalstate-signup").val(RegionName.toLowerCase())
                            }
                            if ($(".za-globalstate-signup").val() == null) {
                                $(".za-globalstate-signup").val($(".za-globalstate-signup option").eq(0).val())
                            }
                            if (RegionName.toLowerCase() == "california") {
                                if ($(".zrlink").length > 0) {
                                    if (customvar.productName == "identity-management" || customvar.productName == "log360-cloud" || customvar.productName == "MobileDeviceManagement" || customvar.productName == "patchmanagerplus") {
                                        $(".zrlink").attr("href", "https://www.manageengine.com/us-ca/privacy.html")
                                    } else {
                                        $(".zrlink").attr("href", "https://www.zoho.com/us-ca/privacy.html")
                                    }
                                }
                            }
                        }
                    }
                }
                if (f > 50) {
                    clearInterval(g)
                }
                f++
            }, 1000)
        }, 100);
        return this._data
    },
    unique: function(e) {
        var d = [];
        $.each(e, function(f, g) {
            if ($.inArray(g, d) == -1) {
                d.push(g)
            }
        });
        return d
    },
    mydevice: function() {
        return navigator.userAgent.indexOf("Android") > -1 && navigator.userAgent.indexOf("Mobile") > -1 ? "Mobile - Android" : navigator.userAgent.indexOf("Android") > -1 && -1 === navigator.userAgent.indexOf("Mobile") ? "Tablet - Android" : navigator.userAgent.indexOf("iPad") > -1 ? "Tablet - iPad" : navigator.userAgent.indexOf("iPhone") > -1 ? "Mobile - iPhone" : /webOS|iPod|BlackBerry|IEMobile|MeeGo|Opera Mini/i.test(navigator.userAgent) ? "Mobile" : "Desktop"
    },
    productName: "home",
    absurl: window.location.origin + window.location.pathname,
    findproduct: function() {
        if (knowprd) {
            customvar.productName = $("body").attr("data-prdname").replace(/ /g, "");
            "zohogeneralpages" == customvar.productName ? customvar.productName = "home" : "orchestly" == customvar.productName ? customvar.productName = "zohoorchestly" : "itmanagement" == customvar.productName ? customvar.productName = "it-management" : "log360cloud" == customvar.productName ? customvar.productName = "log360-cloud" : "itanalytics" == customvar.productName ? customvar.productName = "it-analytics" : ""
        } else {
            if (customvar.host.indexOf("www.orchestly") > -1) {
                customvar.productName = "zohoorchestly"
            } else {
                if (_lhref.indexOf("mdm-cloud.html") > 0) {
                    customvar.productName = "MobileDeviceManagement"
                } else {
                    if (_lhref.indexOf("bigin." + domainOne) > 0) {
                        customvar.productName = "bigin"
                    } else {
                        if (window.location.href.indexOf("analytics-plus/plugin/") > 0) {
                            customvar.productName = "analyticsplusplugin"
                        } else {
                            var e = window.location.pathname.split("/")
                              , d = [];
                            for (var f = 0; f < e.length; f++) {
                                if (e[f] != "") {
                                    d.push(e[f])
                                }
                            }
                            a: for (var f = 0; f < d.length; f++) {
                                if (allProductlowerCase.indexOf(d[f]) > -1) {
                                    if (d[f + 1] == "crmplus") {
                                        customvar.productName = "crmplus"
                                    } else {
                                        customvar.productName = d[f]
                                    }
                                    break a
                                }
                            }
                        }
                    }
                }
            }
            (customvar.productName == "analytics-plus") ? (customvar.productName = "analyticsplus") : "";
            (customvar.productName == "") ? (customvar.productName = "home") : ""
        }
    },
    noteuinarr: [["identity-management", "log360-cloud", "it-management", "pilot", "qengine", "commandcenter", "thrive", "zakya", "eprotect", "start"], ["contactmanager", "identity-management", "log360-cloud", "it-management", "shifts", "voice", "pilot", "qengine", "developer", "commandcenter", "eprotect", "start"], ["contactmanager", "identity-management", "log360-cloud", "catalyst", "it-management", "voice", "pilot", "qengine", "commandcenter", "zakya", "thrive", "eprotect", "start"], ["shifts", "voice", "catalyst", "commandcenter", "zakya", "fsm", "thrive", "eprotect", "pilot", "qengine", "start"]],
    cnarr: [],
    czonestatetrack: function() {
        if (CountryCode == "US") {
            if (typeof RegionName != "undefined") {
                if ($(".signup-box .za-state-container").hasClass("zshow-common")) {
                    if ($(".signup-box .za-state-container .za-globalstate-signup").length > 0) {
                        try {
                            $zoho.salesiq.visitor.customaction('{"eventCategory":"state_change_dd","eventAction":"' + (RegionName.toLowerCase()) + "-" + $(".signup-box .za-state-container .za-globalstate-signup").val() + '","eventLabel":"' + (customvar.productName.toLowerCase()) + '"}')
                        } catch (d) {}
                    }
                }
            }
        }
    },
    dcreset: function() {
        if (typeof CountryCode != "undefined") {
            if (CountryCode == "IN") {
                dcdomainOne = "in";
                if (customvar.noteuinarr[1].indexOf(customvar.productName) > -1) {
                    dcdomainOne = domainOne;
                    onlycom = true
                }
            } else {
                if (CountryCode == "JP") {
                    dcdomainOne = "jp";
                    if (customvar.noteuinarr[3].indexOf(customvar.productName) > -1) {
                        dcdomainOne = domainOne;
                        onlycom = true
                    }
                } else {
                    if (CountryCode == "CN" && customvar.cnarr.indexOf(customvar.productName) > -1) {
                        dcdomainOne = domainOne
                    } else {
                        if (customvar.countryEu.indexOf(CountryCode) > -1) {
                            dcdomainOne = "eu";
                            if (customvar.noteuinarr[0].indexOf(customvar.productName) > -1) {
                                dcdomainOne = domainOne;
                                onlycom = true
                            }
                        } else {
                            if (customvar.countryTranstasman.indexOf(CountryCode) > -1) {
                                dcdomainOne = "com.au";
                                if (customvar.noteuinarr[2].indexOf(customvar.productName) > -1) {
                                    dcdomainOne = domainOne;
                                    onlycom = true
                                }
                            } else {
                                dcdomainOne = "com"
                            }
                        }
                    }
                }
            }
            if (Zdomain == "localzoho") {
                dcdomainOne = "com";
                onlycom = true
            }
        } else {
            console.log("CountryCode undefined")
        }
    },
    dcselected: function(d) {
        if (d == "US" || (d == "IN" && stateupdate.indexOf(customvar.productName) > -1)) {
            if ($(".za-globalstate-signup").length > 0) {
                if ($(".za-globalstate-signup option").eq(0).val() == "" || $(".za-globalstate-signup option").eq(0).val() == "select your state") {
                    if (d == "US") {
                        $(".za-globalstate-signup option").eq(0).remove()
                    }
                }
            }
            setTimeout(function() {
                if (typeof RegionName != "undefined") {
                    if ($(".za-globalstate-signup").length > 0) {
                        if (d == "US") {
                            $(".za-globalstate-signup").val(RegionName.toLowerCase())
                        }
                        if ($(".za-globalstate-signup").val() == null) {
                            $(".za-globalstate-signup").val($(".za-globalstate-signup option").eq(0).val())
                        }
                    }
                }
            }, 300)
        } else {
            if ($(".za-globalstate-signup").length > 0) {
                if ($(".za-globalstate-signup option").eq(0).val() != "") {
                    $(".za-globalstate-signup").prepend('<option value=""></option>')
                }
            }
            $(".za-state-container").removeClass("zshow-common").addClass("zhide-common")
        }
        if (productName == "analytics") {
            if ($(".globalcountrycode").length > 0) {
                var g = [];
                for (var e = 0; e < $(".globalcountrycode").length; e++) {
                    g[e] = ($(".globalcountrycode").eq(e).val())
                }
                setTimeout(function() {
                    for (var h = 0; h < $(".globalcountrycode").length; h++) {
                        $(".globalcountrycode").eq(h).val(g[h])
                    }
                }, 500)
            }
            if ($(".globalstatecode").length > 0) {
                var f = [];
                for (var e = 0; e < $(".globalstatecode").length; e++) {
                    f[e] = ($(".globalstatecode").eq(e).val())
                }
                setTimeout(function() {
                    for (var h = 0; h < $(".globalstatecode").length; h++) {
                        $(".globalstatecode").eq(h).val(f[h])
                    }
                }, 500)
            }
        }
        if ($(".za-globalstate-signup").length > 0) {
            if ($(".zrlink").length > 0 && d == "US") {
                if ($(".za-globalstate-signup").val().toLowerCase() == "california") {
                    if (customvar.productName == "identity-management" || customvar.productName == "log360-cloud" || customvar.productName == "MobileDeviceManagement" || customvar.productName == "patchmanagerplus") {
                        $(".zrlink").attr("href", "https://www.manageengine.com/us-ca/privacy.html")
                    } else {
                        $(".zrlink").attr("href", "https://www.zoho.com/us-ca/privacy.html")
                    }
                } else {
                    if (customvar.productName == "identity-management" || customvar.productName == "log360-cloud" || customvar.productName == "MobileDeviceManagement" || customvar.productName == "patchmanagerplus") {
                        $(".zrlink").attr("href", "https://ondemand.manageengine.com/privacy.html")
                    } else {
                        $(".zrlink").attr("href", "https://www.zoho.com/privacy.html")
                    }
                }
            }
        }
        if ($("body").hasClass("zcstrip")) {
            $("body").removeClass("zcstrip")
        }
        (d == "IN") ? dcdomainOne = "in" : (d == "JP") ? dcdomainOne = "jp" : (countryEu.indexOf(d) > -1) ? dcdomainOne = "eu" : (customvar.countryTranstasman.indexOf(d) > -1) ? dcdomainOne = "com.au" : dcdomainOne = "com";
        if (customvar.noteuinarr[1].indexOf(customvar.productName) > -1 && dcdomainOne == "in") {
            dcdomainOne = "com";
            onlycom = true
        } else {
            if (customvar.noteuinarr[0].indexOf(customvar.productName) > -1 && dcdomainOne == "eu") {
                dcdomainOne = "com";
                onlycom = true
            } else {
                if (customvar.noteuinarr[2].indexOf(customvar.productName) > -1 && dcdomainOne == "com.au") {
                    dcdomainOne = "com";
                    onlycom = true
                } else {
                    if (customvar.noteuinarr[3].indexOf(customvar.productName) > -1 && dcdomainOne == "jp") {
                        dcdomainOne = "com";
                        onlycom = true
                    }
                }
            }
        }
        if (typeof customvar.cnarr != "undefined") {
            if (d == "CN" && customvar.cnarr.indexOf(customvar.productName) > -1) {
                dcdomainOne = "com.cn"
            }
        }
    },
    dctext: function() {
        var d = "US";
        (CountryCode == "IN") ? d = "India" : (CountryCode == "JP") ? d = "Japan" : (customvar.countryEu.indexOf(CountryCode) > -1) ? d = "EU" : (customvar.countryTranstasman.indexOf(CountryCode) > -1) ? d = "Australia" : d = "US";
        if (onlycom) {
            d = "US"
        }
        if (typeof dcenabled == "boolean") {
            if (!dcenabled) {
                (domainOne == "in") ? d = "India" : (domainOne == "jp") ? d = "Japan" : (domainOne == "eu") ? d = "EU" : (domainOne == "com.au") ? d = "Australia" : d = "US"
            }
        }
        return d
    },
    dccountry: function() {
        var e = "US"
          , d = customvar.alink.split("/register/script")[1];
        customvar.alink = "https://accounts." + Zdomain + "." + dcdomainOne + "/register/script" + d;
        if (customvar.outproduct.indexOf(customvar.productName) > -1) {
            customvar.alink = "https://accounts.zoho." + dcdomainOne + "/register/script" + d
        }
        (dcdomainOne == "in") ? e = "India" : (dcdomainOne == "jp") ? e = "Japan" : (dcdomainOne == "eu") ? e = "EU" : (dcdomainOne == "com.au") ? e = "Australia" : (dcdomainOne == "com.cn") ? e = "China" : e = "US";
        return e
    },
    getGlobalCookie: function(d) {
        try {
            for (var g = d + "=", j = decodeURIComponent(document.cookie).split(";"), h = 0; h < j.length; h++) {
                for (var f = j[h]; " " == f.charAt(0); ) {
                    f = f.substring(1)
                }
                if (0 == f.indexOf(g)) {
                    return f.substring(g.length, f.length)
                }
            }
            return ""
        } catch (d) {
            return ""
        }
    },
    removequots: function(d) {
        if (typeof d != "undefined") {
            if (d.split('"').length > 1) {
                return d.split('"')[1]
            } else {
                return d
            }
        } else {
            return ""
        }
    },
    expiryDateCheck: function(l, h) {
        var n = new Date()
          , t = Math.round(n.getDate())
          , e = Math.round(n.getMonth() + 1)
          , g = Math.round(n.getFullYear())
          , o = Math.round(l.split("/")[2])
          , u = Math.round(h.split("/")[2])
          , s = Math.round(l.split("/")[1])
          , j = Math.round(h.split("/")[1])
          , p = Math.round(l.split("/")[0])
          , f = Math.round(h.split("/")[0])
          , r = ((o <= g) && (u >= g))
          , d = ((u == g) ? ((o < g) ? true : ((s <= e) && (j >= e))) : true)
          , q = ((j == s) ? ((o < g) ? true : ((p <= t) && (f >= t))) : true);
        return ((r && d && q) ? true : false)
    },
    getddmmyyyy: function() {
        var e = new Date()
          , d = e.getDate() + "/" + (e.getMonth() + 1) + "/" + e.getFullYear();
        return d
    },
    nextddmmyyyy: function(f) {
        var e = new Date(new Date().getTime() + (f * 24 * 60 * 60 * 1000))
          , d = e.getDate() + "/" + (e.getMonth() + 1) + "/" + e.getFullYear();
        return d
    },
    dynamicLinks: function(f) {
        for (b in f) {
            for (c in f[b]) {
                var d = f[b][c];
                if (b == "href") {
                    if (c.indexOf(".zgh-login") > -1) {
                        if (d.indexOf("zoho.com") > 0) {
                            d = d.split("zoho.com").join("zoho." + dcdomainOne)
                        }
                    }
                }
                (d.indexOf("au.au") > 0) ? (d = d.split("au.au").join("au")) : "";
                (b == "href") ? $(c).attr("href", d) : (b == "html") ? $(c).html(d) : (b == "val") ? $(c).val(d) : "";
                if (b == "href") {
                    if (c.indexOf(".zgh-login") > -1) {
                        if ($(".login-text .login").length > 0) {
                            $(".login-text .login").attr("href", d)
                        }
                        if ($(".zlogin-menu a").length > 0) {
                            $(".zlogin-menu a").attr("href", d);
                            $(".zlogin-menu").show()
                        }
                    }
                    if ($(".z-mobile-menu-v2 .loggedout").length > 0) {
                        if (c.indexOf(".zgh-signup") > -1) {
                            var e = "?";
                            if (d.indexOf("?") > -1) {
                                e = "&"
                            }
                            $(".z-mobile-menu-v2 .loggedout").attr("href", d + e + "src=sticky")
                        }
                    }
                    if ($(".z-mobile-menu-v2 .loggedin").length > 0) {
                        if (typeof $gotoPage != "undefined") {
                            var g = ($("#alogin-link").length > 0) ? $("#alogin-link").html() : $gotoPage;
                            $(".z-mobile-menu-v2 .loggedin").attr("href", g);
                            if (productName == "survey") {
                                if (isMobile && customvar.iphone) {
                                    $(".z-mobile-menu-v2 .loggedin").attr("href", "https://itunes.apple.com/app/zoho-survey-survey-tool/id1348702782?ls=1&mt=8")
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    dcbasedimage: function() {
        if (myimagebool) {
            mybool = 0;
            if (dcdomainOne != "com") {
                if ($(".dc-image").length > 0) {
                    $(".dc-image").each(function() {
                        if (typeof $(this).attr("dc-source") != "undefined") {
                            var e = dcdomainOne;
                            (e == "com.au") ? (e = "au") : "";
                            if ($(this).attr("dc-source").split(",").indexOf(e) > -1) {
                                var f = $(this).attr("src").split($(this).attr("fname")).join($(this).attr("fname") + "-" + e);
                                $(this).attr("src", f);
                                if (typeof $(this).attr("srcset") != "undefined") {
                                    var d = $(this).attr("srcset").split($(this).attr("fname")).join($(this).attr("fname") + "-" + e);
                                    $(this).attr("srcset", d)
                                }
                            }
                        }
                    })
                }
            }
        }
    },
    langsrcremove: function() {
        $(".nonlang").each(function() {
            if (typeof currentUrlLang != "undefined") {
                if ($(this).attr("href").indexOf("/" + currentUrlLang + "/") > -1) {
                    var d = $(this).attr("href").split("/" + currentUrlLang + "/").join("/");
                    $(this).attr({
                        href: d,
                        target: "_blank"
                    })
                }
            }
        })
    },
    debouncer: function(d, e) {
        var f, e = e || 200;
        return function() {
            var h = this
              , g = arguments;
            clearTimeout(f);
            f = setTimeout(function() {
                d.apply(h, Array.prototype.slice.call(g))
            }, e)
        }
    },
    findMailToReplace: function(d) {
        if ($('a[href="mailto:' + d.global + '"]').length > 0 && typeof d[dcdomainOne] != "undefined") {
            $('a[href="mailto:' + d.global + '"]').html(d[dcdomainOne]);
            $('a[href="mailto:' + d.global + '"]').attr("href", "mailto:" + d[dcdomainOne])
        }
    },
    loadlangxml: function() {
        var f = new XMLHttpRequest()
          , e = (customvar.productName == "home") ? "" : (customvar.productName == "zohopartners") ? "partners/" : (customvar.productName + "/");
        f.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200 && customvar.productName != "peopleplus") {
                var g = "https://www." + Zdomain + ".com" + window.location.pathname;
                if (window.location.host.indexOf("bigin") > 0) {
                    g = "https://www.bigin.com" + window.location.pathname
                }
                if (g.indexOf("index") > 0 && g.indexOf("index1") < 0) {
                    g = g.split("index")[0]
                }
                if (this.responseText.split(g + "</loc>").length > 1) {
                    var h = [[], []]
                      , l = this.responseText.split(g + "</loc>")[1].split("</url>")[0];
                    l = l.split("<xhtml:link");
                    for (var j = 0; j < l.length; j++) {
                        if (typeof l[j].split('href="')[1] != "undefined") {
                            h[0].push(l[j].split('href="')[1].split('"')[0]);
                            if (l[j].split('hreflang="')[1].split('"')[0] == "es-419") {
                                h[1].push("es-xl")
                            } else {
                                if (l[j].split('hreflang="')[1].split('"')[0] == "en-au") {
                                    h[1].push("au")
                                } else {
                                    if (l[j].split('hreflang="')[1].split('"')[0] == "en-in") {} else {
                                        if (l[j].split('hreflang="')[1].split('"')[0] == "x-default") {
                                            h[1].push("en")
                                        } else {
                                            h[1].push(l[j].split('hreflang="')[1].split('"')[0])
                                        }
                                    }
                                }
                            }
                        }
                    }
                    detectedLangNew = h[1]
                }
            } else {
                if (typeof $("body").attr("data-lang-list") == "string") {
                    detectedLangNew = $("body").attr("data-lang-list").split(",")
                }
            }
        }
        ;
        f.overrideMimeType("text/xml");
        var d = "";
        if (customvar.productName == "mail" || customvar.productName == "zeptomail") {
            d = (window.location.pathname.split("/help/").length > 1) ? "help/" : ""
        }
        if (customvar.productName == "crmplus") {
            f.open("GET", window.location.origin + langsrc + "crm/" + e + d + "sitemap.xml", true)
        } else {
            if (customvar.outproduct.indexOf(customvar.productName) > -1) {
                if (window.location.origin.indexOf("orchestly") > 0 || window.location.origin.indexOf("trainercentral") > 0) {
                    f.open("GET", "https://www.zoho.com" + langsrc + e + d + "sitemap.xml", true)
                } else {
                    if (customvar.productName == "catalyst" || customvar.productName == "bigin" || window.location.host.indexOf("bigin") > 0) {
                        f.open("GET", window.location.origin + langsrc + "sitemap.xml", true)
                    } else {
                        f.open("GET", window.location.origin + langsrc + e + d + "sitemap.xml", true)
                    }
                }
            } else {
                if (customvar.productName == "catalyst") {
                    f.open("GET", window.location.origin + langsrc + "sitemap.xml", true)
                } else {
                    f.open("GET", window.location.origin + langsrc + e + d + "sitemap.xml", true)
                }
            }
        }
        f.send()
    },
    vimovid: function() {
        var g = $(".zcpopup-controller, .popup-controller");
        var d = document.createElement("script");
        d.src = "https://player.vimeo.com/api/player.js";
        var f = document.getElementsByTagName("script")[0];
        f.parentNode.insertBefore(d, f);
        for (var e = 0; e < g.length; e++) {
            forI = e;
            if (typeof g.eq(e).attr("data-video") != "undefined") {
                if (g.eq(e).attr("data-video").indexOf("vimeo") > -1) {
                    if (CountryCode == "ID") {
                        if (id_yv_json == "") {
                            $.getJSON("/sites/default/files/yv.json", function(h) {
                                id_yv_json = h;
                                $.each(id_yv_json, function(j, l) {
                                    if (g.eq(forI).attr("data-video").indexOf(l.v) > -1) {
                                        g.eq(forI).attr("data-video", "https://www.youtube-nocookie.com/embed/" + l.y).addClass("nonvimvideo")
                                    }
                                })
                            })
                        } else {
                            $.each(id_yv_json, function(h, j) {
                                if (g.eq(forI).attr("data-video").indexOf(j.v) > -1) {
                                    g.eq(forI).attr("data-video", "https://www.youtube-nocookie.com/embed/" + j.y).addClass("nonvimvideo")
                                }
                            })
                        }
                    }
                }
            }
            if (typeof g.eq(e).attr("data-video-url") != "undefined") {
                if (g.eq(e).attr("data-video-url").indexOf("vimeo") > -1) {
                    if (CountryCode == "ID") {
                        if (id_yv_json == "") {
                            $.getJSON("/sites/default/files/yv.json", function(h) {
                                id_yv_json = h;
                                $.each(id_yv_json, function(j, l) {
                                    if (g.eq(forI).attr("data-video-url").indexOf(l.v) > -1) {
                                        g.eq(forI).attr("data-video", "https://www.youtube-nocookie.com/embed/" + l.y).addClass("nonvimvideo")
                                    }
                                })
                            })
                        } else {
                            $.each(id_yv_json, function(h, j) {
                                if (g.eq(forI).attr("data-video-url").indexOf(j.v) > -1) {
                                    g.eq(forI).attr("data-video", "https://www.youtube-nocookie.com/embed/" + j.y).addClass("nonvimvideo")
                                }
                            })
                        }
                    }
                }
            }
        }
    },
    hidechat: function() {
        var d = jQuery(window).scrollTop()
    },
    refval: function() {
        return "ref_value=" + encodeURIComponent(customvar.czms() + "," + customvar.czmr() + "," + customvar.cuid() + "," + customvar.mydevice() + "," + _lhref)
    },
    userelem: ""
};
customvar.OTP_based = function() {
    if (dcdomainOne == "in") {
        return true
    } else {
        return false
    }
}
;
$(window).resize(customvar.debouncer(function(d) {}));
$(document).on("keyup", ".za-rmobile-container #rmobile", function() {
    var d = $(this).val();
    $("input[name=x_phone]").val(d);
    if ($('input[name="r_address/1.phone"]').length > 0) {
        $('input[name="r_address/1.phone"]').val(d)
    }
    if ($("#mobile").length > 0) {
        $("#mobile").val(d)
    }
});
var sbtntext = "";
function gobacktosignuptemp(d) {
    if ($("#otpfield").length > 0) {
        $("#otpfield").val("")
    }
    $(".signupcontainer").show();
    $(".signupotpcontainer").hide();
    $("#signupbtn").val(sbtntext);
    $("#signupbtn").removeClass("disabled-z-signup");
    if (typeof gobackcallback != "undefined") {
        gobackcallback()
    }
    $("#signupform").removeAttr("submitted")
}
function oncompletecallback() {
    if ($("#mobileotp").length > 0) {
        if ($("#mobileotp").html().indexOf("@") > 0) {
            $(".verifyheader").html(customvar.enterotpemail)
        } else {
            $(".verifyheader").html(customvar.enterotpmobile)
        }
    }
    if ($(".globalcountrycode-signup").length > 0) {
        $(".globalcountrycode-signup").val(CountryCode)
    }
}
if ($(".globalcountrycode-signup").length > 0) {
    $(".globalcountrycode-signup").val(CountryCode)
}
function accountscallback(d) {
    if (typeof CountryCode != "undefined") {
        if ($(".globalcountrycode-signup").length > 0) {
            $(".globalcountrycode-signup").val(CountryCode)
        }
    }
    sbtntext = d;
    if (dcdomainOne == "in") {
        if ($(".za-rmobile-container").length < 1) {
            $(".za-captcha-container").before('<div class="za-rmobile-container sgfrm rmobiledisabled"><div align="left" class="za-country_code-container "> <select class="za_country_code" id="country_code" onchange="changeCountrycode()" name="country_code">' + customvar.countrypop("dial") + '</select><input class="phone_countrycode" name="x_phone_countrycode" type="hidden" value="+91"><div class="ccodelabel" id="countryCodeDiv"><div class="ccodediv" id="ccodediv">+91</div></div><input id="rmobile" name="rmobile" placeholder="' + Drupal.t("Phone number") + '" spellcheck="false" type="text" /> </div></div><input type="hidden" name="x_phone" value="">' + (($('input[name="r_address/1.phone"]').length < 1 && customvar.productName == "vault") ? '<div class="zhide-common"><input id="mobile" name="r_address/1.phone" placeholder="" type="text"></div>' : ""))
        }
        if ($(".za-password-container").length < 1) {
            $(".za-rmobile-container").before('<div class="za-password-container sgfrm" style="display:none;"> <input class="sgnpaswrd" name="password" placeholder="' + Drupal.t("Password") + '" type="password"></div>')
        }
        $(".za_country_code").val("IN");
        $(".phone_countrycode").val("+91");
        $(".mobile-container").addClass("zhide-common")
    } else {
        $(".za-rmobile-container").hide();
        $(".mobile-container").removeClass("zhide-common")
    }
    if ($(".signupotpcontainer .signupbtn").length > 0) {
        $(".signupotpcontainer .signupbtn").val(customvar.verify)
    }
    $(".signupotpcontainer .signupbtn").off("click");
    $(".signupotpcontainer .signupbtn").on("click", function() {
        if ($(".signupotpcontainer .signupbtn").length > 0) {
            $(".signupotpcontainer .signupbtn").val(customvar.verifying + "...")
        }
    })
}
function invalidOtp() {}
function initiatedOtp() {}
function otpError() {
    var e = 0;
    var d = setInterval(function() {
        e++;
        if (e > 20 || $(".signupotpcontainer .signupbtn").val() == "VERIFY...") {
            if ($(".signupotpcontainer .signupbtn").length > 0) {
                $(".signupotpcontainer .signupbtn").val(customvar.verify)
            }
            clearInterval(d)
        }
    }, 100)
}
$(document).on("change", ".za-globalstate-signup", function() {
    customvar.currentstate = $(".za-globalstate-signup").val();
    if ($(".zrlink").length > 0 && $(".globalcountrycode-signup").val().toLowerCase() == "us") {
        if ($(".za-globalstate-signup").val().toLowerCase() == "california") {
            if (customvar.productName == "identity-management" || customvar.productName == "log360-cloud" || customvar.productName == "MobileDeviceManagement" || customvar.productName == "patchmanagerplus") {
                $(".zrlink").attr("href", "https://www.manageengine.com/us-ca/privacy.html")
            } else {
                $(".zrlink").attr("href", "https://www.zoho.com/us-ca/privacy.html")
            }
        } else {
            if (customvar.productName == "identity-management" || customvar.productName == "log360-cloud" || customvar.productName == "MobileDeviceManagement" || customvar.productName == "patchmanagerplus") {
                $(".zrlink").attr("href", "https://ondemand.manageengine.com/privacy.html")
            } else {
                $(".zrlink").attr("href", "https://www.zoho.com/privacy.html")
            }
        }
    }
});
customvar.hostName = "www.zoho.com";
if (_preZ == window.location.hostname || _preZC == window.location.hostname || _zcmsZC == window.location.hostname) {
    customvar.hostName = window.location.hostname
}
customvar.sHostName = "l";
(_preZ == window.location.hostname) ? customvar.sHostName = "p" : (_preZC == window.location.hostname) ? (customvar.sHostName = "pz") : (_zcmsZC == window.location.hostname) && (customvar.sHostName = "z");
customvar.browserversion = (function() {
    var e = navigator.userAgent, d, f = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(f[1])) {
        d = /\brv[ :]+(\d+)/g.exec(e) || [];
        return "IE " + (d[1] || "")
    }
    if (f[1] === "Chrome") {
        d = e.match(/\b(OPR|Edge)\/(\d+)/);
        if (d != null) {
            return d.slice(1).join(" ").replace("OPR", "Opera")
        }
    }
    f = f[2] ? [f[1], f[2]] : [navigator.appName, navigator.appVersion, "-?"];
    if ((d = e.match(/version\/(\d+)/i)) != null) {
        f.splice(1, 1, d[1])
    }
    return f.join(" ")
}
)();
customvar.getOS = navigator.sayswho = (function() {
    var h = window.navigator.userAgent
      , d = window.navigator.platform
      , j = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"]
      , e = ["Win32", "Win64", "Windows", "WinCE"]
      , f = ["iPhone", "iPad", "iPod"]
      , g = null;
    if (j.indexOf(d) !== -1) {
        g = "Mac"
    } else {
        if (f.indexOf(d) !== -1) {
            g = "iOS"
        } else {
            if (e.indexOf(d) !== -1) {
                g = "Windows"
            } else {
                if (/Android/.test(h)) {
                    g = "Android"
                } else {
                    if (!g && /Linux/.test(d)) {
                        g = "Linux"
                    }
                }
            }
        }
    }
    return g
}
)();
if (_preZ == window.location.hostname) {
    if ($(".login-text").length > 0) {
        $(".login-text").html(haveAccount + ' <a class="login" href="">' + signuplogin + "</a>")
    }
}
customvar.browser = customvar.browserversion.split(" ")[0].toLowerCase();
customvar.bversion = customvar.browserversion.split(" ")[1].toLowerCase();
customvar.myOs = customvar.getOS.toLowerCase();
$("body").addClass("zos-" + customvar.myOs);
$("body").addClass("zb-" + customvar.browser);
$("body").addClass("zbv-" + customvar.browser + "-" + customvar.bversion);
customvar.zmr = customvar.removequots(customvar.getGlobalCookie("ZohoMarkRef"));
customvar.zms = customvar.removequots(customvar.getGlobalCookie("ZohoMarkSrc"));
customvar.isEU = ((customvar.countryEu.indexOf(CountryCode) > -1) ? true : false);
customvar.isAPAC = ((customvar.countryApac.indexOf(CountryCode) > -1) ? true : false);
if (customvar.isAPAC) {
    $("body").addClass("ccode-apaccountries")
}
customvar.czmr = function() {
    return customvar.removequots(customvar.getGlobalCookie("ZohoMarkRef"))
}
;
customvar.czms = function() {
    return customvar.removequots(customvar.getGlobalCookie("ZohoMarkSrc"))
}
;
customvar.cuid = function() {
    return customvar.removequots(customvar.getGlobalCookie("cookie-uid"))
}
;
var countryEu = customvar.countryEu;
customvar.findproduct();
(window.location.host.indexOf("zoho.") < 0 || window.location.host.indexOf("catalyst") > -1 || window.location.host.indexOf("community") > -1) ? customvar.outproduct.push(customvar.productName) : "";
if (customvar.pathname.indexOf("creator/developers/signup.html") > 0) {
    customvar.noteuinarr[0].push("creator");
    customvar.noteuinarr[1].push("creator");
    customvar.noteuinarr[2].push("creator");
    customvar.noteuinarr[3].push("creator")
} else {
    if (window.location.host.indexOf("careerfront") > 0) {
        customvar.noteuinarr[0].push("recruit");
        customvar.noteuinarr[1].push("recruit");
        customvar.noteuinarr[2].push("recruit");
        customvar.noteuinarr[3].push("recruit")
    }
}
if (dcenabled) {
    customvar.dcreset()
}
if (customvar.productName == "trainercentral") {
    _txtIwould = Drupal.t("I would like to receive marketing communication from TrainerCentral and TrainerCentral&rsquo;s regional partners regarding TrainerCentral product, services, and events.")
}
if (customvar.cnarr.indexOf(customvar.productName) > -1) {
    customvar.domainArr[0].push("com.cn");
    customvar.domainArr[2].push("zoho.com.cn")
}
var detectedLangNew = "";
var loadxml = true;
if (typeof $("body").attr("site") != "undefined") {
    if ($("body").attr("site") == "zblogs" || $("body").attr("site") == "zohodblogs") {
        loadxml = false
    }
} else {
    if (window.location.host == "catalyst.zoho.eu" || window.location.pathname.indexOf("signup.html") > 0 || customvar.productName == "zakya" || customvar.productName == "zohocrm") {
        loadxml = false
    }
}
if (loadxml) {
    customvar.loadlangxml()
}
if (document.getElementsByClassName("header").length > 0) {
    document.getElementsByClassName("header")[0].innerHTML = ""
}
if (customvar.pathname.indexOf("crm/lp/") > 0) {
    $("body").addClass("crm-lp")
}
$("body").prepend('<div class="ztopstrip-container"></div>');
function tlscall() {
    var d = _lhref.indexOf("zgs=1") < 0;
    if (d) {
        $.getJSON("https://tlstest.zoho." + _com + "/api", function(e) {
            if (e.status != "200") {
                $(".ztopstrip-container").prepend('<div class="tls-infostrip"> <p>' + Drupal.t("Your browser is out of date and does not currently support TLS 1.2. For your security, please update your browser or operating system to the latest version to regain access to Zoho Services.") + '<a target="_blank" href="https://www.zoho.' + domainOne + '/general/blog/end-of-support-for-older-tls-versions-in-zoho.html">More information</a></p> <span class="zclosestrip tlsClose">X</span></div>');
                $(".zclosestrip.tlsClose").on("click", function() {
                    $(".tls-infostrip").remove()
                })
            }
        })
    }
}
if (getDomain == ZcheckDomain) {
    ZdomainName = "localzoho"
}
function global_getUrlParam(e) {
    var g = {}
      , d = "";
    var f = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(h, j, l) {
        g[j] = l;
        if (j == e) {
            d = l
        }
    });
    return d
}
customvar.textparam = (global_getUrlParam("creativetestparam") != "");
var excludeitarr = ["nila", "qntrl", "vanihq"];
if (!excludeitarr.includes(customvar.productName)) {
    if (_preZ == window.location.hostname) {
        $.getScript("https://" + _preZ + "/sites/default/files/cpn/dynamicemail.js")
    } else {
        $.getScript("https://www.zoho.com/sites/default/files/cpn/dynamicemail.js")
    }
}
(global_getUrlParam("hideglobalheader") != "") ? $("body").addClass("hideglobalheader") : "";
(global_getUrlParam("hideproductheader") != "") ? $("body").addClass("hideproductheader") : "";
(global_getUrlParam("hideglobalfooter") != "") ? $("body").addClass("hideglobalfooter") : "";
(global_getUrlParam("hideproductfooter") != "") ? $("body").addClass("hideproductfooter") : "";
(global_getUrlParam("hidebottomcta") != "") ? $("body").addClass("hidebottomcta") : "";
if (window.location.hostname == _preZ) {
    if (global_getUrlParam("autoDomain") != "") {
        domainOne = global_getUrlParam("autoDomain");
        console.log("autoDomain = " + global_getUrlParam("autoDomain"))
    }
}
function global_getUrlParam_sheet(d) {
    var g = "";
    g = window.location.search.substring(1);
    var f = g.split("&"), h, e;
    for (e = 0; e < f.length; e++) {
        h = f[e].split("=");
        if (h[0] === d) {
            return h[1] === undefined ? true : h[1]
        }
    }
    return ""
}
function encodeFun(d) {
    try {
        d = decodeURI(d)
    } catch (g) {
        d = d
    }
    if (d.indexOf("#") > -1) {
        var j = d.split("#").length
          , h = "";
        for (var f = 1; f < j; f++) {
            h += "#" + d.split("#")[f]
        }
        d = d.split("#")[0] + "" + encodeURI(h)
    }
    if (d.indexOf("?") > -1) {
        var j = d.split("?").length
          , h = "";
        for (var f = 1; f < j; f++) {
            h += "?" + d.split("?")[f]
        }
        d = d.split("?")[0] + "" + encodeURI(h)
    }
    return d
}
function domainCheck() {
    var g = document.domain.split("").splice(0, (document.domain.split("").length - 1)).join("");
    if (document.domain.split("")[document.domain.length - 1] == ".") {
        var d = window.location.href.split(getDomain)[0];
        var f = window.location.href.split(getDomain)[1];
        var e = d + "" + g + "" + f;
        window.location.href = encodeFun(e)
    }
}
function decodeHexString(d) {
    d = d.replace(/\\x([0-9A-Fa-f]{2})/g, function() {
        return String.fromCharCode(parseInt(arguments[1], 16))
    });
    d = d.replace(/\\u([\d\w]{4})/gi, function() {
        return String.fromCharCode(parseInt(arguments[1], 16))
    });
    return d
}
domainCheck();
var langArr = ["en", "es-xl", "pt-br", "de", "fr", "nl", "jp", "ar", "id", "th", "vi", "it", "zh-hans", "fr-ca", "hi", "he"];
var onlylocal = ["ko", "ru", "tr"];
var usedLanArr = ["fr", "de", "pt-br", "es-xl", "nl"];
var locallang = ["en-in", "en-apac"];
var lancountry = {
    en: "English",
    fr: "FranÃ§ais",
    de: "Deutsch",
    "es-xl": "EspaÃ±ol",
    "pt-br": "PortuguÃªs (Brasil)",
    jp: "æ—¥æœ¬èªž",
    nl: "Nederlands",
    "zh-hans": "ç®€ä½“ä¸­æ–‡",
    id: "Bahasa Indonesia",
    th: "à¸ à¸²à¸©à¸²à¹„à¸—à¸¢",
    ar: "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
    vi: "Tiáº¿ng Viá»‡t",
    ko: "í•œêµ­ì–´",
    it: "Italiano",
    ru: "Ð ÑƒÑÑÐºÐ¸Ð¹",
    tr: "TÃ¼rkÃ§e",
    he: "×¢×‘×¨×™×ª",
    "fr-ca": "English",
    "en-apac": "English",
    "en-in": "English"
};
var bannertext = {
    en: "Hello ::: Now you can navigate",
    fr: "Bonjour ::: Vous pouvez maintenant naviguer en",
    de: "Wechseln ::: Diese Seite ist auch auf Deutsch verfÃ¼gbar",
    "es-xl": "Hola ::: Â¡Ahora puede navegar en",
    "pt-br": "OlÃ¡ ::: Agora vocÃª pode navegar em",
    jp: "ç§»å‹•ã™ã‚‹ ::: æ—¥æœ¬èªžã®å…¬å¼ã‚µã‚¤ãƒˆã‚’ã”åˆ©ç”¨ã„ãŸã ã‘ã¾ã™ã€‚",
    nl: "Klik hier ::: Navigeer nu in het",
    "zh-hans": "Hello ::: Now you can navigate",
    id: "Hello ::: Sekarang Anda bisa berselancar dalam",
    th: "à¸ªà¸§à¸±à¸ªà¸”à¸µ ::: à¸•à¸­à¸™à¸™à¸µà¹‰à¸„à¸¸à¸“à¸ªà¸²à¸¡à¸²à¸£à¸–à¸”à¸¹à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹€à¸›à¹‡à¸™à¸ à¸²à¸©à¸²à¹„à¸—à¸¢à¹„à¸”à¹‰à¹à¸¥à¹‰à¸§",
    ar: "ÙŠÙ…ÙƒÙ†ÙƒÙ… Ø§Ù„Ø¢Ù† Ø§Ù„ØªØµÙØ­ Ø¨Ø§Ù„Ù„ØºØ© ::: Ù…Ø±Ø­Ø¨Ø§Ù‹",
    vi: "Xin ChÃ o ::: BÃ¢y giá» báº¡n cÃ³ thá»ƒ xem trang nÃ y báº±ng",
    ko: "Hello ::: Now you can navigate",
    it: "Ciao ::: Ora puoi navigare",
    ru: "Hello ::: Now you can navigate",
    tr: "Hello ::: Now you can navigate",
    he: "Hello ::: Now you can navigate",
    "fr-ca": "Hello ::: Now you can navigate",
    "en-apac": "Hello ::: Now you can navigate",
    "en-in": "Hello ::: Now you can navigate"
};
for (var i = 0; i < onlylocal.length; i++) {
    langArr.push(onlylocal[i])
}
if (_lhref.indexOf("en-apac/newsletter.html") > 0) {
    langArr.push("en-apac")
}
var footer_ebable = true;
function findeLanguage() {
    var d = "";
    langArr.forEach(function(e) {
        if (window.location.href.split("/").indexOf(e) > -1) {
            d = e
        }
    });
    currentUrlLang = d;
    creativeLang = usedLanArr.indexOf(currentUrlLang) > -1;
    (currentUrlLang != "") ? (langsrc = "/" + currentUrlLang + "/") : "";
    if (d == "es-xl") {
        d = "es"
    } else {
        if (d == "pt-br") {
            d = "pt"
        } else {
            if (d == "jp") {
                d = "ja"
            } else {
                if (d == "zh-hans") {
                    d = "zh";
                    domainOne = "com.cn"
                } else {
                    if (d == "he") {
                        d = "iw"
                    }
                }
            }
        }
    }
    (d == "in") ? (d = "",
    currentUrlLang = "") : "";
    (d == "id") ? (d = "in") : "";
    return d
}
var localredirectionval = "0";
var currentLang = findeLanguage();
if (currentUrlLang == "jp" && customvar.productName == "desk") {
    if ($(".zcpopup-controller").length > 0) {
        customvar.vimovid()
    }
} else {
    if (customvar.productName != "crm") {
        customvar.vimovid()
    }
}
customvar.transCName = customvar.transCName.split("_").join(" ");
if (customvar.transCName == "Viet Nam") {
    customvar.transCName = "Vietnam"
}
var _conval = customvar.transCName.toLocaleLowerCase().split(" ").join("");
if (_conval.indexOf("unitedstates") > -1 || _conval.indexOf("unitedkingdom") > -1 || _conval.indexOf("unitedarabemirate") > -1 || _conval.indexOf("bahamas") > -1 || _conval.indexOf("caymanislands") > -1 || _conval.indexOf("centralafricanrepublic") > -1 || _conval.indexOf("channelislands") > -1 || _conval.indexOf("czechrepublic") > -1 || _conval.indexOf("dominicanrepublic") > -1 || _conval.indexOf("falklandislands") > -1 || _conval.indexOf("ivorycoast") > -1 || _conval.indexOf("leewardislands") > -1 || _conval.indexOf("maldives") > -1 || _conval.indexOf("marshall") > -1 || _conval.indexOf("netherlands") > -1 || _conval.indexOf("philippines") > -1 || _conval.indexOf("solomonislands") > -1 || _conval.indexOf("turksandcaicosislands") > -1 || _conval.indexOf("virginislands") > -1) {
    customvar.basedonip = Drupal.t("It looks like you&lsquo;re in the")
}
if ((window.location.host == "www.zoho.com") || window.location.host == "prewww.zoho.com" || window.location.host == _preZ) {
    if (window.location.href.indexOf("zredirect=f") > 0) {
        customvar.lsoinfo("latinNavigate", "1")
    }
    if (currentUrlLang == "es-xl" || (currentUrlLang == "fr" && CountryCode == "FR") || (currentUrlLang == "nl" && CountryCode == "NL") || ((CountryCode == "SA" || CountryCode == "EG") && currentUrlLang == "ar") || (currentUrlLang == "pt-br" && CountryCode == "BR") || (currentUrlLang == "id" && CountryCode == "ID")) {
        if (customvar.lAmerica.indexOf(CountryCode) > -1 || (currentUrlLang == "nl" && CountryCode == "NL") || (currentUrlLang == "pt-br" && CountryCode == "BR") || (currentUrlLang == "fr" && CountryCode == "FR") || ((CountryCode == "SA" || CountryCode == "EG") && currentUrlLang == "ar") || (currentUrlLang == "id" && CountryCode == "ID")) {
            if (customvar.lsoinfo("latinNavigate") == "") {
                var mlang = window.location.href.split("/" + currentUrlLang + "/").join("/");
                $(".ztopstrip-container").css("display", "block");
                $(".ztopstrip-container").append('<div class="lbanner" style="display:block"> <span class="langTxt">' + Drupal.t("Hello! Do you want to navigate in English?") + '</span><span class="langClose">X</span> </div>');
                localredirectionval = "1";
                $(".lbanner .langTxt").on("click", function() {
                    var d = "?";
                    if (mlang.indexOf("?") > -1) {
                        d = "&"
                    }
                    customvar.lsoinfo("latinNavigate", "1");
                    if (mlang.indexOf("#") > 0) {
                        mlang = mlang.split("#")[0]
                    }
                    window.location = mlang + d + "zredirect=f&lb=" + currentUrlLang + "&zsrc=bheader"
                });
                $(".lbanner .langClose").on("click", function() {
                    try {
                        $zoho.salesiq.visitor.customaction('{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}')
                    } catch (d) {}
                    $(".lbanner").remove();
                    customvar.lsoinfo("latinNavigate", "1")
                })
            }
        }
    }
}
customvar.clang = (currentUrlLang == "") ? "" : ("service_language=" + currentLang + "&");
customvar.newsignupArr = ["teaminbox", "recruit", "campaigns", "sites", "commerce", "desk", "pagesense", "people", "sign", "voice", "forms", "pilot", "dataprep", "learn", "crm", "crmplus", "bigin", "cliq", "directory", "creator", "calendar", "peopleplus", "contracts", "marketingautomation", "connect", "shifts", "marketingplus", "survey", "ziasearch", "backtowork", "backstage", "assist", "workerly", "projects", "one", "developer", "catalyst", "social", "lens", "vault", "sprints", "salesinbox", "commandcenter", "remotely", "salesiq", "bookings", "analytics", "sheet", "bugtracker", "workdrive", "trainercentral", "flow", "remoteaccessplus", "notebook", "patchmanagerplus", "mobiledevicemanagerplus", "MobileDeviceManagement", "desktopcentral", "zakya", "home", "meeting", "mail", "zeptomail"];
customvar.oldsignupArr = [];
customvar.alink = "https://accounts." + Zdomain + "." + dcdomainOne + "/register/script?temp_redirect=true&" + customvar.clang + "load_country=false&";
if (customvar.outproduct.indexOf(customvar.productName) > -1) {
    customvar.alink = "https://accounts.zoho." + dcdomainOne + "/register/script?temp_redirect=true&" + customvar.clang + "load_country=false&"
}
var _txtBySubmit = Drupal.t("By submitting this form, you agree to the processing of personal data according to our") + ' <a href="' + langsrc + 'privacy.html" class="privacylink" target="_blank">' + Drupal.t("Privacy Policy") + ".</a>";
var predomain = window.location.hostname == _preZ || window.location.hostname == _preZC || Zdomain == _lz;
if (currentLang == "ar") {
    var arCount = 0;
    for (var i = 0; i < $("link").length; i++) {
        if ($("link").eq(i).attr("href") != "undefined") {
            if ($("link").eq(i).attr("href").indexOf("/css/ar.css") > 0) {
                arCount++
            }
        }
    }
    setTimeout(function() {
        if (arCount == 0) {
            var d = document.createElement("link");
            d.rel = "stylesheet";
            d.type = "text/css";
            if (predomain) {
                d.href = "/sites/all/themes/zoho/css/ar.css"
            } else {
                d.href = "https://www.zohowebstatic.com/sites/all/themes/zoho/css/ar.css"
            }
            document.getElementsByTagName("head")[0].appendChild(d)
        }
    }, 100)
}
function getGlobalCookie(d) {
    return customvar.getGlobalCookie(d)
}
var doc = $(document);
var wW = $(window).width();
var prdName = customvar.productName;
(prdName == "one") ? (prdName = "zohoone") : "";
(prdName == "officeplatform") ? (prdName = "officeintegrator") : "";
(prdName == "zohoorchestly") ? (prdName = "orchestly") : "";
(_lhref.indexOf("mdm-cloud.html") > 0) ? (prdName = "MobileDeviceManagement") : "";
(_lhref.indexOf("online-service-desk-software.html") > 0) ? (prdName = "ServiceDesk Plus") : "";
var _zclang = langsrc;
(customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu" || domainOne == "com.cn") ? (_zclang = "https://www.zoho." + domainOne + "/") : "";
var zghBrand = ' <div class="zgh-brand"><span class="zgh-menu"><span class="hamburger-box"><span></span><span></span><span></span><span></span><span></span><span></span></span></span><a href="' + _zclang + '">Zoho.com</a></div>';
var zghNav;
if (prdName == "home") {
    var _suportlink = "https://help.zoho.com/portal/home";
    if (currentUrlLang == "jp") {
        _suportlink = "https://support.zoho.com/portal/jpzoho/home"
    }
    zghNav = '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' + Drupal.t("Products") + '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li><li><a href="https://www.zoho.com/customers.html">' + Drupal.t("Customers") + '</a></li><li><a href="' + _suportlink + '" target="_blank">' + Drupal.t("Support") + '</a></li><li><a href="https://www.zoho.com' + langsrc + 'aboutus.html">' + Drupal.t("About Us") + "</a></li></ul></div>";
    if (_lhref.indexOf("index-new") > 0) {
        zghNav = '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' + Drupal.t("Products") + '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li><li class="zgh-megaMenu zgh-solutions"> <a href="javascript:;">Solutions</a> <div class="zgh-megaMenuBox"> <div class="zgh-megaMenuInner"> <ul class="zgh-megaMenuCat"> <li><span>By Size</span> <ul> <li> <a href="javascript:;">Small</a> </li> <li> <a href="javascript:;">Medium</a> </li> <li> <a href="javascript:;">Enterprise</a> </li> </ul> </li> <li><span>By Role</span> <ul> <li> <a href="javascript:;">Sales</a> </li> <li> <a href="javascript:;">Marketing</a> </li> <li> <a href="javascript:;">Finance</a> </li> <li> <a href="javascript:;">Teams/Collaboration</a> </li> <li> <a href="javascript:;">IT</a> </li> <li> <a href="javascript:;">HR</a> </li> </ul> </li> <li><span>By Industry</span> <ul> <li> <a href="javascript:;">Education</a> </li> <li> <a href="javascript:;">Manufacturing</a> </li> <li> <a href="javascript:;">Non-profits</a> </li> <li> <a href="javascript:;">Logistics</a> </li> <li> <a href="javascript:;">Retail</a> </li> </ul> </li> </ul> </div> </div> </li><li><a href="customers.html">' + Drupal.t("Customers") + '</a></li><li><a href="https://help.zoho.com/portal/home" target="_blank">' + Drupal.t("Support") + '</a></li><li><a href="' + langsrc + 'aboutus.html">' + Drupal.t("About Us") + "</a></li></ul></div>"
    }
} else {
    zghNav = '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' + Drupal.t("All Products") + '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li></ul></div>'
}
var _val = "English";
(currentUrlLang != "") ? (_val = lancountry[currentUrlLang]) : "";
var zghSearch = ' <div class="zgh-search"> <span class="zgh-search-icon"></span> <div class="zgh-search-container"> <div class="zgh-search-wrap"> <div class="zgh-search-box"> <form action="" id="zgh-search-action" name=""> <input class="zgh-search-field" aria-label="Search for product overviews, FAQs, and more..." id="zgh-search-query" autocomplete="off" name="query" placeholder="' + Drupal.t("Search for product overviews, FAQs, and more...") + '" type="text"><input class="zgh-search-btn" type="button"> <span class="zgh-search-clear"></span></form></div></div><div class="zgh-search-overlay"></div></div></div>';
var zghLoc = '<div class="zgh-localization"><span class="zgh-localSelect">' + _val + '</span><div class="zgh-localBox"><ul></ul></div></div>';
var getstart = Drupal.t("Get Started");
if (customvar.productName == "crm") {
    getstart = Drupal.t("Sign Up For Free")
}
var zghAcc = '<div class="zgh-accounts"><a href="https://accounts.' + Zdomain + "." + dcdomainOne + "/signin?" + customvar.clang + "servicename=ZohoHome&signupurl=https://www." + Zdomain + "." + domainOne + langsrc + 'signup.html" class="zgh-login">' + Drupal.t("SIGN IN") + '</a><a href="https://www.' + Zdomain + "." + domainOne + langsrc + 'signup.html" class="zgh-signup">' + getstart + "</a></div>";
if ($(".login-text .login").length > 0) {
    $(".login-text .login").html(Drupal.t("SIGN IN"))
}
var zghUtil;
if ((window.location.host == "www." + _lz + "." + _com + "" || window.location.host == _preZ || window.location.host == "www.zoho." + _com + "" || window.location.host == "www.zoho." + _eu + "" || window.location.host == "www.zoho.in" || window.location.host == _preZC || window.location.host == "zoho." + _zcopr + ".com" || window.location.host == _zcmsZC) || window.location.host.indexOf("trainercentral") > 0) {
    zghUtil = '<div class="zgh-utilities">' + zghSearch + zghLoc + zghAcc + "</div>"
} else {
    zghUtil = '<div class="zgh-utilities">' + zghLoc + zghAcc + "</div>"
}
var zghBlock = '<div class="zgh-headerWrap">' + zghBrand + zghNav + zghUtil + "</div>";
$("#header .header").html("");
$("#mini-panel-product_menu .product-nav-links").before(zghAcc);
$(".product-header-top .product-nav-links").before(zghAcc);
$("#header .header").append(zghBlock);
$(".zgh-accounts .zgh-login, .login-text .login").css("display", "inline-block");
if (customvar.meaList.indexOf(CountryCode) > -1) {
    $("body").addClass("region-mea")
}
if (customvar.africaRegList.indexOf(customvar.countries[0][customvar.countries[1].indexOf(CountryCode)]) > -1) {
    $("body").addClass("region-africa")
}
jQuery(document).ready(function() {
    $(".cookie-policy").css("display", "inline-block");
    function e() {
        if (typeof CountryCode != "undefined" && typeof RegionName != "undefined") {
            if (CountryCode == "US" && RegionName.toLowerCase() == "california") {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
    if (global_getUrlParam("nocookie") != "True") {
        if ($.inArray(CountryCode, countryEu) !== -1 || CountryCode == "BR" || e() || CountryCode == "JP" || (customvar.absurl.indexOf("cookie-policy") != -1)) {
            if (window.location.host == _preZ) {
                $("head").append('<link rel="stylesheet" href="https://' + _preZ + '/sites/all/themes/zoho/css/cookiepolicy.css" type="text/css" /><script src="https://' + _preZ + '/sites/all/themes/zoho/scripts/cookiepolicy.js"><\/script>')
            } else {
                $("head").append('<link rel="stylesheet" href="https://www.zohowebstatic.com/sites/all/themes/zoho/css/cookiepolicy.css" type="text/css" /><script src="https://www.zohowebstatic.com/sites/all/themes/zoho/scripts/cookiepolicy.js"><\/script>')
            }
        }
    }
    if (_preZ == window.location.hostname) {
        $.getScript("https://" + _preZ + "/sites/all/themes/zoho/scripts/precheck.js")
    }
    if ($(".product-nav-links-new").length > 0) {
        if (_preZ == window.location.hostname) {
            $.getScript("https://" + _preZ + "/sites/all/themes/zoho/scripts/prod_menu.js")
        } else {
            if (_preZC == window.location.hostname) {
                $.getScript("https://" + _preZC + "/sites/all/themes/zoho/scripts/prod_menu.js")
            } else {
                $.getScript("https://www.zoho.com/sites/all/themes/zoho/scripts/prod_menu.js")
            }
        }
    }
    if (!$("body").hasClass("domain-" + domainOne)) {
        var h = document.getElementsByTagName("body")[0];
        if (domainOne == "com.cn") {
            h.classList.add("domain-com")
        } else {
            h.classList.add("domain-" + domainOne)
        }
    }
    jQuery(".zoho-child-wrapper").toggle();
    jQuery("#back-top").hide();
    jQuery(".service-links ul,.partners-info,.node-type-product-help .dropBox,.featured-news .views-row .hidden-news").toggle();
    jQuery(".service-links").click(function() {
        jQuery(".service-links ul").slideToggle("slow")
    });
    jQuery(".zoho-parent-toggle").click(function() {
        if (!(/\/reports\/help\//.test(document.URL)) && !(/\/developer\/help\//.test(document.URL))) {
            jQuery(this).parent().find(".zoho-child-wrapper").slideToggle();
            if (jQuery(this).parent().hasClass("open")) {
                jQuery(this).parent().removeClass("open")
            } else {
                jQuery(this).parent().siblings().removeClass("open");
                jQuery(this).parent().siblings().find(".zoho-child-wrapper").slideUp("slow");
                jQuery(this).parent().addClass("open")
            }
        }
    });
    jQuery(".featured-news .views-row").click(function() {
        jQuery(this).find(".hidden-news").slideToggle("slow")
    });
    jQuery(".node-type-product-help #faq h4").click(function() {
        var p = jQuery(this).attr("class");
        if (p) {
            jQuery(this).next("div").slideToggle("slow");
            jQuery(this).removeClass(p)
        } else {
            if (jQuery(this).siblings().hasClass("open")) {
                if (jQuery(this).siblings(".open .hidden-news, .open + .ans.dropBox").is(":visible")) {
                    jQuery(this).addClass("open");
                    jQuery(this).next("div").slideToggle("slow")
                } else {
                    var q = jQuery(this).addClass("open").siblings().removeClass("open");
                    jQuery(".open .hidden-news, .open + .ans.dropBox").slideToggle("slow")
                }
            } else {
                var q = jQuery(this).addClass("open").siblings().removeClass("open");
                jQuery(".open .hidden-news, .open + .ans.dropBox").slideToggle("slow")
            }
        }
    });
    jQuery(".footer-wrapper a").each(function() {
        if (jQuery(this).hasClass("zoho-and")) {
            jQuery(this).parent().addClass("zoho-and-wrapper")
        }
    });
    jQuery(".zoho-child-wrapper li a").each(function() {
        if (/\/people\/help\//.test(document.URL)) {
            jQuery(".zoho-parent-toggle").remove()
        }
        if (/\/people\/help\//.test(document.URL) || jQuery(this).hasClass("active")) {
            jQuery(this).parent().parent().parent().addClass("open")
        }
    });
    jQuery(".zoho-child-wrapper").each(function() {
        if (/\/people\/help\//.test(document.URL) || jQuery(this).parent().hasClass("open")) {
            jQuery(this).css("display", "block")
        }
    });
    jQuery(".countries .names").click(function() {
        var p = jQuery(this).text();
        jQuery("." + p).show()
    });
    jQuery(".close").click(function() {
        var p = jQuery(this).attr("class").split(" ")[1].split("-")[0];
        jQuery("." + p).hide()
    });
    jQuery(".info").click(function() {
        var p = jQuery(this).attr("class").split("_")[2];
        jQuery(".expand_view_" + p).slideToggle("slow")
    });
    jQuery(".testimonial_addons").each(function() {
        jQuery(this).parent().parent().parent().addClass("testimonial-wrapper")
    });
    jQuery(".dynamic-width:contains('True')").addClass("tick");
    jQuery(".dynamic-width:contains('TRUE')").addClass("tick");
    jQuery(".dynamic-width:contains('False')").addClass("cross");
    jQuery(".dynamic-width:contains('FALSE')").addClass("cross");
    jQuery(".pricing-row-wrapper").each(function(q) {
        jQuery(this).children(":first").removeClass("dynamic-width");
        var r = jQuery(this).find(".dynamic-width").length;
        var p = 70 / r;
        jQuery(this).find(".dynamic-width").css("width", p + "%")
    });
    var o = 0;
    jQuery(".pricing-blocks .view-pricing .views-row").each(function(p, r) {
        var q = jQuery(this).outerWidth();
        o = o + q
    });
    jQuery(".pricing-blocks .view-pricing .view-content").css("width", o + "px");
    var n = jQuery(".universal-color-user .field-content").text();
    var d = jQuery(".universal-color-theme .field-item").text();
    var l = jQuery(".universal-color-quicktabs").text();
    var f = jQuery(".universal-button-color .field-item").text();
    jQuery(".universal-color-user-1,.cell-empty-row,.pricing-faq .views-field-body a,.view-resourses-listing-page .views-field-nothing .learn-more a").css("color", f);
    jQuery(".dynamic-width a,.plan-bottom-wrapper a").css("background-color", f);
    jQuery(".products-theme").css("background-color", d);
    jQuery(".quicktabs-wrapper li.active").css("border-right-color", l);
    jQuery(".getstarted-box a,.views-row.testimonial-wrapper .benefit-testimonial-wrapper,#footer-banner-image .get-started a").css("background-color", f);
    jQuery(".header-menu-2 li a.active").css("border-bottom-color", f);
    jQuery(".plan-wrapper[data-highlight='1'] .plan-top-wrapper").css("border-top-color", f);
    jQuery("a[href='#top']").click(function() {
        jQuery("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false
    });
    var j = jQuery("#block-panels-mini-products-header-dropdown-menu").innerHeight();
    jQuery(".look-down").click(function() {
        jQuery("body").animate({
            scrollTop: jQuery(".catagory-mobapps-part").offset().top - j + 55
        }, 1000)
    });
    jQuery(".explore").click(function() {
        jQuery("body").animate({
            scrollTop: jQuery(".zoho-timeline").offset().top - j + 55
        }, 1000)
    });
    var g = jQuery("#block-panels-mini-home-page-sliding-header").innerHeight();
    jQuery(".zoho-home-page .scroll-down .scrolldown-arrow").click(function() {
        jQuery("body").animate({
            scrollTop: jQuery(".pane-home-page-view-panel-pane-1").offset().top - g + 55
        }, 1000)
    });
    jQuery(".view-home-page-view").each(function() {
        var p = 0;
        jQuery(".view-grouping:nth-child(1),.view-grouping:nth-child(2),.view-grouping:nth-child(3)").each(function() {
            if (jQuery(this).height() > p) {
                p = jQuery(this).height()
            }
        });
        jQuery(".view-grouping:nth-child(1),.view-grouping:nth-child(2),.view-grouping:nth-child(3)").height(p)
    });
    jQuery(".view-home-page-view").each(function() {
        var p = 0;
        jQuery(".view-grouping:nth-child(4),.view-grouping:nth-child(5),.view-grouping:nth-child(6)").each(function() {
            if (jQuery(this).height() > p) {
                p = jQuery(this).height()
            }
        });
        jQuery(".view-grouping:nth-child(4),.view-grouping:nth-child(5),.view-grouping:nth-child(6)").height(p)
    });
    jQuery(".pricing-view-content-wrapper .pricing-row-wrapper").each(function() {
        var p = 0;
        jQuery(this).children(".dynamic-width").each(function() {
            if (jQuery(this).height() > p) {
                p = jQuery(this).height()
            }
        });
        jQuery(this).children(".dynamic-width").height(p)
    })
});
function showhide(e, d) {
    var f = document.getElementById(e);
    if (f.style.display == "none") {
        f.style.display = "block";
        document.getElementById(d).innerHTML = '<span class="up">Up</span>'
    } else {
        f.style.display = "none";
        document.getElementById(d).innerHTML = '<span class="down">Down</span>'
    }
}
function expcollps(g, d) {
    var f = (d) ? jQuery(g) : jQuery(g).parent().prev();
    var e = (d) ? jQuery(g).next() : jQuery(g).parent();
    if (d) {
        jQuery(".ldjs_cnt").slideUp(700, function() {
            jQuery(".ldjs_readmr").css("visibility", "visible")
        });
        e.slideDown(700, function() {
            f.css("visibility", "hidden")
        })
    } else {
        e.slideUp(700, function() {
            f.animate({
                opacity: 1
            }, 700).css("visibility", "visible")
        })
    }
}
function setSlidingMenuMobile() {
    if (langsrc == "/") {
        if ($("body").hasClass("node-type-features") || $("body").hasClass("node-type-product-success-stories") || $("body").hasClass("node-type-zoho-one-applications")) {
            var e = JSON.parse(mobileSMjson);
            var d = '<div class="ztop-slide-mobile-menu"><div class="ztop-smm-inner">';
            var f = 0;
            $.each(e, function(g, h) {
                f++;
                d = d + '<a href="' + langsrc + h + '">' + Drupal.t(g) + "</a>"
            });
            d = d + "</div></div>";
            $(d).appendTo($(".main-container-wrapper"));
            if (f == 2) {
                $(".ztop-smm-inner").addClass("z2menu")
            }
        }
    }
}
var hidelogin = 0;
(function(d) {
    d(document).ready(function(av) {
        if (window.location.host == _preZ) {
            var o = "MozAppearance"in document.documentElement.style;
            if (o) {
                var ax = indexedDB.open("inPrivate");
                ax.onerror = function() {}
            }
        }
        var u = document.createElement("script");
        var G = _lhref.indexOf("zgs=1") < 0;
        setTimeout(function() {
            d(".zrlink").length > 0 && "de" == currentUrlLang && "Datenschutzrichtlinie" == d(".zrlink").html() && d(".zrlink").after("<span> zu</span>");
            if (currentUrlLang == "jp") {
                if (d(".czone-dc form").length > 0) {
                    if (d(".za-tos-container .sign_agree").length > 0) {
                        d(".za-tos-container .sign_agree").html('<span id="signup-termservice" class="unchecked"></span><a class="stermslink" href="https://www.zoho.com/jp/crm/terms.html" target="_blank" rel="noopener">ã‚µãƒ¼ãƒ“ã‚¹è¦ç´„</a>ãŠã‚ˆã³<a href="https://www.zoho.co.jp/privacy/" target="_blank" class="zrlink" rel="noopener">ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼ãƒãƒªã‚·ãƒ¼</a>ã«åŒæ„ã—ã¾ã™ã€‚<input class="za-tos" id="tos" name="tos" value="true" onclick="toggleTosField()" type="checkbox">')
                    }
                }
            }
        }, 500);
        if (G) {
            if (dcenabled && nondc) {
                var D = 0;
                var j = 0;
                for (var at = 0; at < customvar.domainArr[0].length; at++) {
                    var u = document.createElement("script");
                    u.className = "infoload";
                    u.src = "https://accounts." + ZdomainName + "." + customvar.domainArr[0][at] + "/u/info";
                    document.getElementsByTagName("head")[0].appendChild(u);
                    d(u).on("load", function() {
                        D++;
                        if (typeof zohouser.DC_INFO != "undefined") {
                            (zohouser.DC_INFO == "cn") ? customvar.domainArr[1].push("com.cn") : (zohouser.DC_INFO == "au") ? customvar.domainArr[1].push("com.au") : customvar.domainArr[1].push(zohouser.DC_INFO);
                            if (zohouser.DC_INFO == "in" && customvar.noteuinarr[1].indexOf(customvar.productName) > -1) {
                                hidelogin = 1
                            } else {
                                if (zohouser.DC_INFO == "eu" && customvar.noteuinarr[0].indexOf(customvar.productName) > -1) {
                                    hidelogin = 1
                                } else {
                                    if ((zohouser.DC_INFO == "au" && customvar.noteuinarr[2].indexOf(customvar.productName) > -1) || (zohouser.DC_INFO == "jp" && customvar.noteuinarr[3].indexOf(customvar.productName) > -1)) {
                                        hidelogin = 1
                                    }
                                }
                            }
                            if (customvar.domainArr[0].length == d(".infoload").length) {
                                d("script.infoload").remove();
                                if (customvar.domainArr[1][0] == "us") {
                                    dcdomainOne = "com"
                                } else {
                                    dcdomainOne = customvar.domainArr[1][0]
                                }
                                var e = document.createElement("script");
                                e.className = "infoload";
                                e.src = "https://accounts." + ZdomainName + "." + dcdomainOne + "/u/info";
                                document.getElementsByTagName("head")[0].appendChild(e);
                                e.onload = R;
                                x(productName)
                            }
                        }
                        if (D == d(".infoload").length && customvar.domainArr[1].length == 0) {
                            if (typeof CountryCode != "undefined") {
                                if (CountryCode == "IN") {
                                    dcdomainOne = "in";
                                    if (customvar.noteuinarr[1].indexOf(customvar.productName) > -1) {
                                        dcdomainOne = "com";
                                        onlycom = true
                                    }
                                } else {
                                    if (customvar.countryEu.indexOf(CountryCode) > -1) {
                                        dcdomainOne = "eu";
                                        if (customvar.noteuinarr[0].indexOf(customvar.productName) > -1) {
                                            dcdomainOne = "com";
                                            onlycom = true
                                        }
                                    } else {
                                        if (customvar.countryTranstasman.indexOf(CountryCode) > -1) {
                                            dcdomainOne = "com.au";
                                            if (customvar.noteuinarr[2].indexOf(customvar.productName) > -1) {
                                                dcdomainOne = "com";
                                                onlycom = true
                                            }
                                        } else {
                                            if (CountryCode == "JP") {
                                                dcdomainOne = "jp";
                                                if (customvar.noteuinarr[3].indexOf(customvar.productName) > -1) {
                                                    dcdomainOne = "com";
                                                    onlycom = true
                                                }
                                            } else {
                                                dcdomainOne = "com"
                                            }
                                        }
                                    }
                                }
                                if (d(".czone-dc form").length > 0) {
                                    if (window.location.href.indexOf("desk/index1.html") > 0) {
                                        if (typeof handleDomain != "undefined") {
                                            handleDomain()
                                        }
                                    } else {
                                        if (typeof z_add_account_script != "undefined") {
                                            z_add_account_script()
                                        } else {
                                            if (typeof z_set_account_src != "undefined") {
                                                z_set_account_src()
                                            }
                                        }
                                    }
                                }
                            }
                            R()
                        }
                    });
                    d(u).on("error", function() {
                        j++;
                        console.log("accounts failed");
                        R()
                    })
                }
            } else {
                if (window.location.hostname != "www.zohohelp.com") {
                    u.src = "https://accounts." + ZdomainName + "." + domainOne + "/u/info";
                    if (window.location.host == "www.zoho.com.cn") {
                        u.src = "https://accounts." + ZdomainName + "." + domainOne + "/u/info"
                    } else {
                        if (currentUrlLang == "zh-hans") {
                            u.src = "https://accounts." + ZdomainName + ".com/u/info"
                        }
                    }
                    document.getElementsByTagName("head")[0].appendChild(u);
                    d(u).on("error", function() {
                        console.log("accounts failed");
                        R()
                    })
                }
            }
        }
        var ac = "";
        var K = "";
        var an = "";
        var ah = "";
        var aA = "/privacy.html ";
        var ao = "";
        var E = "/policy.html ";
        var Q = "";
        var ab = "//www.facebook.com/zoho";
        var ar = "//twitter.com/zoho";
        var W = "<a class='on-in' href='https://www.linkedin.com/company/38373' target='_blank' class='linkedin' title='LinkedIn'>'+Drupal.t('Linkedin')+'</a>";
        var t = ["/es/", "/fr/", "/it/"];
        var ae = "";
        var w = "/jp/gdpr.html";
        var ad = "";
        var z = 0;
        var ag = "/contactus.html";
        var T = "";
        if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
            T = "https://www.zoho.com"
        }
        if (currentUrlLang == "jp") {
            K = "//www.zoho.com";
            an = "//www.zoho.com/jp";
            ah = "ofservice";
            aA = "//www.zoho.com/jp/PrivacyPolicy.html";
            ao = "policy";
            E = "https://www.zoho.com/jp/policy.html";
            Q = "<li><a href='//www.zoho.com/jp/refund.html'>&#12458;&#12531;&#12521;&#12452;&#12531;&#27770;&#28168;&#24460;&#12398;&#12461;&#12515;&#12531;&#12475;&#12523;&#12395;&#12388;&#12356;&#12390;</a></li>";
            ab = "//www.facebook.com/zohoJapan";
            ar = "//twitter.com/jpzoho";
            W = "";
            ag = "https://www.zoho.com/jp/contactus.html"
        } else {
            if (currentUrlLang == "de") {
                Q = '<li><a href="' + T + langsrc + 'impressum.html">Impressum</a></li>'
            }
        }
        if (dcenabled && nondc) {} else {
            u.onload = R
        }
        var n = d("#emailfield").val();
        if (n == "" || n == null) {
            d("#emailfield").parent().removeClass("added-placeholder")
        } else {
            d("#emailfield").parent().addClass("added-placeholder")
        }
        getWidth = 0;
        $gotoPage = "";
        productName = "";
        breaks = false;
        productName = customvar.productName;
        addString = "'" + productName + "'";
        x(productName);
        for (var at = 0; at < t.length; at++) {
            if (window.location.href.indexOf(t[at]) > -1) {
                var az = window.location.pathname.split("/");
                if (az[2] == (t[at].slice(1, -1))) {
                    var ae = t[at];
                    ae = ae.slice(1);
                    ad = "/" + ae.slice(0, -1)
                } else {
                    var ac = t[at];
                    var ac = ac.slice(0, -1)
                }
            }
        }
        var q = '<ul><li><a href="' + an + '/">' + Drupal.t("Zoho Home") + '</a></li><li><a href="' + ag + '">' + Drupal.t("Contact Us") + '</a></li><li><a href="' + an + "/security" + ao + '.html">' + Drupal.t("Security") + '</a></li><li><a href="/compliance.html">' + Drupal.t("Compliance") + '</a></li><li><a href="' + an + '/ipr-complaints.html">' + Drupal.t("IPR Complaints") + '</a></li><li><a href="' + E + '">' + Drupal.t("Anti-spam Policy") + '</a></li><li class="footer-terms"><a href="' + an + "/terms" + ah + '.html">' + Drupal.t("Terms of Service") + '</a></li><li><a href="' + aA + '">' + Drupal.t("Privacy Policy") + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html">' + Drupal.t("Cookie Policy") + '</a></li><li class="gdprc"><a href="' + w + '" class="gdprc">' + Drupal.t("GDPR Compliance") + '</a></li><li><a href="/abuse-policy/">' + Drupal.t("Abuse Policy") + "</a></li>" + Q + "</ul><p>&copy; " + currentYear + ", " + Drupal.t("Zoho Corporation Pvt. Ltd. All Rights Reserved.") + "</p>";
        var Z = "";
        if (currentUrlLang == "jp") {
            Z = '<ul class=ZPprivacy> <li><a href="' + an + '/">' + Drupal.t("Zoho Home") + '</a></li><li><a href="' + ag + '">' + Drupal.t("Contact Us") + '</a></li><li><a href="' + an + ac + ad + "/security" + ao + '.html">' + Drupal.t("Security") + '</a></li><li><a href="/compliance.html">' + Drupal.t("Compliance") + '</a></li> <li><a href="' + an + ac + ad + '/ipr-complaints.html">' + Drupal.t("IPR Complaints") + '</a></li><li><a href="' + ac + ad + E + '"> ' + Drupal.t("Anti-spam Policy") + '</a></li><li class="footer-terms"><a href="' + an + ac + ad + "/terms" + ah + '.html">' + Drupal.t("Terms of Service") + '</a></li><li><a href="' + ac + ad + aA + '">' + Drupal.t("Privacy Policy") + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com/privacy/cookie-policy.html">' + Drupal.t("Cookie Policy") + '</a></li><li><a href="' + w + '" class="gdprc">' + Drupal.t("GDPR Compliance") + '</a></li><li><a href="https://www.zoho.com/sitemap-index.xml">' + Drupal.t("Sitemap") + "</a></li>" + Q + "</ul><p>&copy; " + currentYear + ", " + Drupal.t("Zoho Corporation Pvt. Ltd. All Rights Reserved.") + "</p>"
        } else {
            var ay = langsrc + "security.html";
            if (productName == "mail") {
                ay = langsrc + "mail/secure-email-hosting.html"
            }
            var T = "";
            if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
                T = "https://www.zoho.com"
            }
            Z = '<ul class=ZPprivacy> <li><a href="' + T + langsrc + '">' + Drupal.t("Zoho Home") + '</a></li><li><a href="' + T + langsrc + 'contactus.html">' + Drupal.t("Contact Us") + '</a></li><li><a href="' + T + ay + '">' + Drupal.t("Security") + '</a></li> <li><a href="' + T + langsrc + 'compliance.html">' + Drupal.t("Compliance") + '</a></li><li><a href="' + T + langsrc + 'ipr-complaints.html">' + Drupal.t("IPR Complaints") + '</a></li><li><a href="' + T + langsrc + 'policy.html"> ' + Drupal.t("Anti-spam Policy") + '</a></li><li class="footer-terms"><a href="' + T + langsrc + 'terms.html">' + Drupal.t("Terms of Service") + '</a></li><li><a href="' + T + langsrc + 'privacy.html">' + Drupal.t("Privacy Policy") + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html">' + Drupal.t("Cookie Policy") + '</a></li><li><a href="' + T + '/gdpr.html" class="gdprc">' + Drupal.t("GDPR Compliance") + '</a></li><li><a href="' + T + '/abuse-policy/">' + Drupal.t("Abuse Policy") + '</a></li><li><a href="https://www.zoho.com/sitemap-index.xml">' + Drupal.t("Sitemap") + "</a></li>" + Q + "</ul><p>&copy; " + currentYear + ", " + Drupal.t("Zoho Corporation Pvt. Ltd. All Rights Reserved.") + "</p>";
            if (window.location.hostname.indexOf(".cn") > 0 || currentUrlLang == "zh-hans") {
                Z = '<ul class=ZPprivacy><li> <a href="https://www.zoho.com.cn/">' + Drupal.t("Zoho Home") + '</a> </li> <li><a href="https://www.zoho.com.cn/aboutus.html">' + Drupal.t("Aboutus") + '</a></li> <li><a href="https://www.zoho.com.cn/contactus.html">' + Drupal.t("Contact Us") + '</a></li> <li> <a href="https://www.zoho.com.cn/security.html" rel="nofollow">' + Drupal.t("Security") + '</a> </li> <li> <a href="https://www.zoho.com.cn/ipr-complaints.html" rel="nofollow">' + Drupal.t("IPR Complaints") + '</a> </li> <li> <a href="https://www.zoho.com.cn/policy.html" rel="nofollow">' + Drupal.t("Anti-spam Policy") + '</a> </li> <li> <a href="https://www.zoho.com.cn/terms.html" rel="nofollow">' + Drupal.t("Terms of Service") + '</a> </li> <li> <a href="https://www.zoho.com.cn/privacy.html" rel="nofollow">' + Drupal.t("Privacy Policy") + '</a> </li><li><a href="https://www.zoho.com/sitemap-index.xml">' + Drupal.t("Sitemap") + "</a></li></ul><p>&copy; " + currentYear + ", " + Drupal.t("Zoho Corporation Pvt. Ltd. All Rights Reserved.") + "</p><p>&#21271;&#20140;&#24066;&#28023;&#28096;&#21306;&#21518;&#23663;&#36335;28&#21495;KPHZ&#22269;&#38469;&#25216;&#26415;&#36716;&#31227;&#20013;&#24515;&#19977;&#23618; 400-660-8680 &#20140;ICP&#22791;15015257&#21495; &#20140;ICP&#35777;150718&#21495;</p>"
            }
        }
        var O = '<div class="ZF-support"><div class="ZF-container"><div class="ZF-contact"><ul><li><a href="mailto:support@zoho.com">support@zoho.com</a></li><li><div class="ZF-dlsel"><div class="zdc-container"><span class="zdc-text">Select DC</span><div class="zdc-container-inner"><ul><li><a href="https://www.zoho.in/">IN DC</a></li><li><a href="https://www.zoho.com/">US DC</a></li><li><a href="https://www.zoho.eu/">EU DC</a></li></ul></div></div></div></li></ul></div></div></div>' + Z;
        newFooter = Z;
        au();
        function aw() {
            if (getGlobalCookie("_z_identity") == "true" || getGlobalCookie("_z_identity") == "_z_identity") {
                if (!d("body").hasClass("body-umain")) {
                    d("body").addClass("body-umain")
                }
                if (d("body").find("main")) {
                    d(".main").addClass("umain");
                    d(document).trigger("umain-trigger")
                }
                if (d("body").find(".main-container-wrapper")) {
                    d(".main-container-wrapper").addClass("umain")
                }
            }
        }
        if (langArr.indexOf(currentUrlLang) > -1) {
            if (d(".common-footer").length > -1) {
                if (!d(".common-footer").hasClass("common-links")) {
                    d(".common-footer").addClass("common-links")
                } else {
                    if (!d(".common-footer").hasClass("common-links-js")) {
                        d(".common-footer").addClass("common-links-js")
                    }
                }
            }
        }
        if (langArr.indexOf(currentUrlLang) > -1) {
            if (productName == "notebook" || productName == "writer" || productName == "salesinbox") {
                if (typeof d("body").attr("data-lang-list") != "string") {
                    d("body").attr("data-lang-list", "en,es-xl,pt-br,de,fr")
                }
            }
        }
        function v() {
            d(".czonefooter").hide();
            d(".czonefooter").eq(0).show();
            if (typeof customvar.supportId != "undefined") {
                d(".ZF-contact ul li a").eq(0).html(customvar.supportId());
                d(".ZF-contact ul li a").eq(0).attr("href", "mailto:" + customvar.supportId())
            }
            var aC = "";
            if ((window.location.host == "www." + _lz + "." + _com + "" || window.location.host == _preZ || window.location.host == "www.zoho." + _com + "" || window.location.host == "www.zoho." + _eu + "" || window.location.host == "www.zoho.in" || window.location.host == _preZC || window.location.host == "zoho." + _zcopr + ".com" || window.location.host == _zcmsZC) || window.location.host.indexOf("trainercentral") > 0) {
                aC = '<div class="footer-search"> <form id="footer-search-action"> <input class="footer-search-input" aria-label="Search for product overviews, FAQs, and more..." autocomplete="off" placeholder="' + Drupal.t("Search for product overviews, FAQs, and more...") + '" type="text"> <button class="footer-search-btn" aria-label="footer-search-btn" type="submit" value="Submit"><span></span></button> </form></div>';
                if (window.innerWidth <= 767) {
                    d(".footer-search-input").attr("placeholder", Drupal.t("Search") + " zoho." + domainOne)
                } else {
                    d(".footer-search-input").attr("placeholder", Drupal.t("Search for product overviews, FAQs, and more..."))
                }
            }
            if (d(".common-links-js .footer-search").length < 1) {
                d(".ZPprivacy").before(aC)
            }
            if (currentUrlLang != "") {
                d(".gdprc").attr("target", "_blank")
            }
            d(document).ready(function() {
                d(document).on("submit", "#footer-search-action", function(aF) {
                    aF.preventDefault();
                    var aD = d(".footer-search-input").val().trim();
                    var aE;
                    if (currentUrlLang == "") {
                        aE = window.location.origin + "/search-results.html"
                    } else {
                        aE = window.location.origin + "/" + currentUrlLang + "/search-results.html"
                    }
                    if (aD != "") {
                        window.location = aE + "?query=" + encodeURIComponent(aD)
                    }
                })
            });
            if (d(".footer-links-wrap .product-links").hasClass("four-column")) {
                d(".footer-sec-wrap.two-column").addClass("fourColList")
            }
            var aB = 0;
            var e = setInterval(function() {
                if (detectedLangNew != "" || !loadxml) {
                    languageredirect();
                    clearInterval(e)
                } else {
                    if (aB > 50) {
                        languageredirect();
                        clearInterval(e)
                    }
                }
                aB++
            }, 500)
        }
        if ((window.location.pathname.split("/")[1] == "contacts" || d("body").hasClass("og-context-node-17848") || d("body>div").eq(0).hasClass("wpblog") || window.location.href.indexOf("/one/") > 0 || (window.location.pathname == "/events.html" && window.location.host.indexOf("catalyst") < 0)) && !d("body").hasClass("node-tnid-48314") || window.location.pathname == "/mdm-cloud.html") {
            var X = 0;
            function g() {
                var e = setTimeout(function() {
                    if (d(".common-links").length > 0) {
                        (d(".common-links").html() == "") ? d(".common-links").html(Z) : "";
                        if (window.location.href.indexOf("/one/") > 0) {
                            d(".common-links-js").html(O);
                            d(".common-links-js, .common-links").addClass("czonefooter")
                        }
                        v();
                        clearInterval(e)
                    } else {
                        X++;
                        if (X < 10) {
                            g()
                        } else {
                            v()
                        }
                    }
                }, 500)
            }
            g()
        } else {
            var C = 0;
            var f = setInterval(function() {
                C++;
                if (d(".common-links-js").length > 0 || C > 20 || d(".zgf-common-links").length || window.location.host.indexOf("bigin") > 0) {
                    d(".common-links-js").html(Z);
                    if (footer_ebable) {
                        d(".common-links-js").html(O);
                        d(".common-links-js, .common-links").addClass("czonefooter");
                        if (_lhref.indexOf("search-results.html") < 0) {
                            var e = d(".czonefooter").clone();
                            if (d(".footer-sec-wrap").length > 0) {
                                d(".czonefooter").remove();
                                d(".footer-sec-wrap").after(e)
                            }
                        }
                    }
                    v();
                    customvar.termslink();
                    clearInterval(f)
                }
            }, 500);
            var y = d(".header .menu").children();
            d(y[at]).addClass("selected")
        }
        d(".product-header-top").html(d("#mini-panel-product_menu").html());
        d(".product-header-top .menu-icon-help-header > a").addClass("logo").html("ZOHO");
        if (domainOne == "in") {
            d(".zcomtctmanager").hide();
            if (d(".zp-apps.zp-contactmanager").length > 0) {
                d(".zp-apps.zp-contactmanager").remove()
            }
        }
        var am = document.domain;
        if (am == "www.zoho.eu") {
            d(".business-proc .no-border").remove();
            d('.business-proc a[href="/appcreator/"]').parent().remove()
        }
        d(window).scroll(function() {
            d(".zlang-container-inner").hide();
            if (d(".zlang-container").children(".zlang-container-inner").length > 0) {
                d(".zlang-container").children(".zlang-container-inner").removeClass("show").addClass("hide")
            }
            ai()
        });
        ai();
        var M = false;
        var l = false;
        d(".menu-icon").click(function() {
            if (window.innerWidth <= 550) {
                d(".product-menu").hide()
            }
            if (l == false) {
                l = true;
                d(".mask-holder").removeClass("hide");
                setTimeout(function() {
                    d(".mobile-menu").css({
                        left: "0%"
                    });
                    var e = parseInt(window.innerHeight) - parseInt(d(".header").height());
                    d(".mobile-menu").css({
                        height: e + "px"
                    })
                }, 100);
                setTimeout(function() {
                    d("html,body").css({
                        overflow: "hidden"
                    })
                }, 0)
            } else {
                al()
            }
        });
        d(".mask-holder").click(function(aB) {
            if (aB.delegateTarget.className == aB.target.className) {
                al()
            }
        });
        U();
        var Y = d(".product-nav-links .menu").css("display");
        d(".userinfo-container").css({
            display: "block"
        });
        d("body").on("touchstart click", function(aC) {
            var aB = d(".zlang-container");
            if (!aB.is(aC.target) && aB.has(aC.target).length === 0) {
                d(".zlang-container").children(".zlang-container-inner").removeClass("show").addClass("hide");
                d(".zlang-container-inner").hide()
            }
        });
        d("body").click(function(aE) {
            var aC = true;
            if (productName == "mail" && d(".signup-box form").css("display") == "none") {
                aC = false
            } else {
                if (_lhref.indexOf("/creator/apps/") > 0 || d(aE.target).hasClass("scrollstop")) {
                    aC = false
                }
            }
            var aB = ""
              , aD = ""
              , aF = "";
            (aE.target.parentNode.parentNode != null) ? (aF = aE.target.parentNode.parentNode.className) : "";
            (aE.target.parentNode.className != null) ? (aD = aE.target.parentNode.className) : "";
            (aE.target.className != null) ? (aB = aE.target.className) : "";
            if (window.location.href.indexOf("crm/what-is-crm.html") < 0 && aC) {
                if (aB == "signup" || aD == "get-started" || (d(aE.target).hasClass("act-btn") && d(aE.target).hasClass("cta-btn") && !d(aE.target).hasClass("zwp-pricing-link")) || d(aE.target).hasClass("zgh-signup")) {
                    if (window.innerWidth > 991) {
                        if (d(".signup-box .sgfrm").length != 0 && d(".zp-home-right").css("display") != "none" && typeof getusername == "undefined") {
                            aE.preventDefault();
                            U()
                        }
                    }
                }
            }
            if (aE.target.className == "menu") {} else {
                if (aE.target.className == "mobile-menu-icon") {
                    if (d(".product-nav-links .menu").css("display") == "none") {
                        M = false
                    } else {
                        M = true
                    }
                    d(".product-nav-links .menu").css({
                        height: window.innerHeight - d("#mini-panel-product_menu").outerHeight()
                    });
                    if (M == false) {
                        d(".zgh-accounts .zgh-signup").fadeOut(100);
                        d(".menu").slideDown(300);
                        d("body").css({
                            overflow: "hidden"
                        });
                        d(".product-nav-links .menu").css({
                            overflow: "scroll"
                        })
                    } else {
                        if (!d(".main-container-wrapper").hasClass("umain")) {
                            d(".zgh-accounts .zgh-signup").fadeIn(100)
                        }
                        d(".product-nav-links .menu").slideUp(300);
                        d("body").css({
                            overflow: "auto"
                        })
                    }
                } else {
                    if (M == true) {
                        d(".product-nav-links .menu").slideUp(300);
                        d("html,body").css({
                            overflow: "auto"
                        })
                    }
                }
            }
            if (aF == "userinfo-details") {
                d(".userinfo-details").addClass("zoho-expand");
                if (getWidth > 285) {
                    d(".userinfo-details.zoho-expand").css({
                        width: getWidth + 10,
                        height: "135px"
                    })
                }
            } else {
                d(".userinfo-details").removeClass("zoho-expand");
                if (getWidth > 285) {
                    d(".userinfo-details").css({
                        width: "35px",
                        height: "35px"
                    });
                    d(".product-header-top .userinfo-details, .product-header-top .userinfo-container").css({
                        height: "43px"
                    })
                }
            }
        });
        d(document).on("keydown", function(aB) {
            keys = aB.which;
            if (keys == 27) {
                d(".userinfo-details").removeClass("zoho-expand")
            }
        });
        jQuery(".get-started a,.posibilities-bot").click(function(aB) {
            if (window.innerWidth > 767) {
                aB.preventDefault();
                U()
            }
        });
        anchorN = d("a");
        aa = [];
        for (at = 0; at < anchorN.length; at++) {
            aa[at] = d(anchorN[at]).attr("href");
            if (aa[at] == "javascript:void(0);") {
                d(anchorN[at]).css({
                    cursor: "text"
                })
            }
        }
        window.onscroll = function() {
            var e = jQuery(window).height();
            var aC = jQuery(window).scrollTop();
            var aB = jQuery(".footer-wrapper");
            if (typeof aB !== "undefined") {
                var aD = aB.position();
                if (aD && aD.top && (e + aC) > aD.top) {
                    jQuery(".service-links").css("position", "absolute")
                } else {
                    jQuery(".service-links").css("position", "fixed")
                }
            }
            if (jQuery(this).scrollTop() > 200) {
                jQuery("#back-top").fadeIn();
                jQuery("#back-top a").css("position", "fixed")
            } else {
                jQuery("#back-top").fadeOut()
            }
        }
        ;
        var ap;
        var I;
        var J;
        var p = true;
        var L = 200;
        d(".dropdown-mask").css({
            height: "200px"
        });
        d(".header .menu >  li").hover(function(aC) {
            $this = d(this);
            var aB = aC.clientX;
            ap = setTimeout(function() {
                var e = aC.clientX;
                if (d(".dropdown-mask").hasClass("showmaskCheck")) {
                    L = 0;
                    if (aB == e) {
                        I = $this.children()[1];
                        d(I).addClass("addMe");
                        d(".catagory-dropdown.addMe").children().addClass("showMe")
                    }
                }
            }, L)
        }, function() {
            clearTimeout(ap);
            d(I).removeClass("addMe");
            d(".catagory-dropdown").children().removeClass("showMe")
        });
        d(".header .menu").hover(function() {
            if (d(".dropdown-mask").hasClass("showmaskCheck")) {
                L = 0
            } else {
                L = 200
            }
            J = setTimeout(function() {
                d(".dropdown-mask").addClass("showmask")
            }, 100);
            d(".dropdown-mask").addClass("showmaskCheck")
        }, function() {
            clearTimeout(J);
            d(".dropdown-mask").removeClass("showmaskCheck");
            d(".dropdown-mask").removeClass("showmask");
            L = 200
        });
        function al() {
            l = false;
            d(".mobile-menu").css({
                left: "-100%"
            });
            setTimeout(function() {
                d(".mask-holder").addClass("hide")
            }, 100);
            setTimeout(function() {
                d("html,body").css({
                    overflow: "auto"
                })
            }, 400)
        }
        function ai(e) {
            d(".userinfo-details").removeClass("zoho-expand");
            if (e > 285) {
                d(".userinfo-details").css({
                    width: 35,
                    height: 35
                });
                d(".product-header-top .userinfo-details, .product-header-top .userinfo-container").css({
                    height: "43px"
                })
            }
            if (d(window).scrollTop() > 200) {
                d(".product-header-top").removeClass("slide");
                d(".product-header-top").css({
                    overflow: "visible"
                })
            } else {
                d(".product-header-top").addClass("slide");
                d(".product-header-top").css({
                    overflow: "hidden"
                })
            }
        }
        function N() {
            setInt = setTimeout(function() {
                count += 1;
                if (count <= 1) {
                    d(".banner-part").css({
                        left: 0 - (d(bannerCh[count]).offset().left)
                    });
                    d(zSlide[count]).addClass("Zselect").siblings().removeClass("Zselect");
                    N()
                } else {
                    d(".banner-part").css({
                        left: 0
                    });
                    count = 0;
                    d(zSlide[count]).addClass("Zselect").siblings().removeClass("Zselect");
                    N()
                }
            }, speed)
        }
        d(window).resize(function() {
            if (d(".footer-search-input").length > 0) {
                if (window.innerWidth <= 767) {
                    d(".footer-search-input").attr("placeholder", Drupal.t("Search") + " zoho." + domainOne)
                } else {
                    d(".footer-search-input").attr("placeholder", Drupal.t("Search for product overviews, FAQs, and more..."))
                }
            }
            au();
            aj();
            if (d(window).outerWidth() <= 767) {
                if (!d(".mobile-menu-icon .hamburger-box").hasClass("active")) {
                    d(".product-nav-links .menu").css({
                        height: window.innerHeight - d("#mini-panel-product_menu").outerHeight(),
                        display: "none"
                    })
                }
                d("#mini-panel-product_menu .goto-link").hide();
                d(".product-nav-links .menu .featured-apps-part").css("display", "block");
                d("#mini-panel-product_menu .zlang-container").show();
                if (d("#mini-panel-product_menu .zlang-container").length < 1 && d(".header .zlang-container").length != 0) {
                    var e = '<div class="zlang-container">' + d(".header .zlang-container").html() + "</div>";
                    d("#mini-panel-product_menu .menu-icon-help-header").after(e);
                    d(".overMe, .zlang-container").on("mouseover", function() {
                        d(this).children(".zlang-container-inner").show()
                    });
                    d(".overMe, .zlang-container").on("mouseout", function() {
                        d(this).children(".zlang-container-inner").hide()
                    });
                    d(".zlang-container").on("click", function() {
                        d(this).children(".zlang-container-inner").show()
                    })
                }
            } else {
                d(".product-nav-links .menu").css({
                    height: "auto",
                    top: "auto",
                    display: "block"
                });
                d(".product-header-inner .userinfo-container,.product-header-inner .goto-link").remove();
                d(".product-nav-links .menu .featured-apps-part").css("display", "none");
                d("#mini-panel-product_menu .zlang-container").remove()
            }
        });
        function P() {
            if (d(".node-type-product-help .panel-region-sidebar-first").length) {
                d('<div id="helpMenuIconCont"><span id="help-menu">Menu</span></div>').insertBefore(".panel-region-content.crm-help-content");
                r();
                d(window).resize(function(aB) {
                    r();
                    aj()
                });
                d("#help-menu").click(function() {
                    d(".node-type-product-help .panel-region-sidebar-first").toggleClass("slide-in");
                    d(".node-type-product-help #help-menu").toggleClass("slide-in-menu");
                    setTimeout(function() {
                        d("body").toggleClass("overflowHidden")
                    }, 500)
                })
            }
            var e = d("#benefits ul").children().length;
            if (e == 5) {
                d("#benefits").addClass("mid-align")
            } else {
                if (e == 4) {
                    d("#benefits").addClass("two-column-box")
                }
            }
        }
        function r() {
            d(".node-type-product-help .panel-region-sidebar-first").is(":visible");
            if (window.innerWidth <= 1000) {
                d(".node-type-product-help .panel-region-sidebar-first").css({
                    height: window.innerHeight - d(".panel-region-sidebar-first").offset().top
                })
            }
        }
        function ak() {
            var e = "/" + productName;
            if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
                e = ""
            }
            var aB = "";
            (productName == "crmplus") ? (e = "/crm" + e) : (e = e);
            (currentLang != "") ? (aB = "/" + currentUrlLang) : (aB = aB);
            (currentLang != "") ? (e = "/" + currentUrlLang + e) : (e = e);
            d(".signup-form .z-product a, .z-signup-page-wrap .signup-form a span").attr("href", e + "/");
            if (window.location.href.indexOf("agencies-signup.html") > -1) {
                d(".signup-form .z-product a").attr("href", aB + "/social/agencies.html")
            }
            if (typeof customvar.prdlogolink != "undefined") {
                d(".signup-form .z-product a, .z-signup-page-wrap .signup-form a span").attr("href", customvar.prdlogolink)
            }
        }
        function aj() {
            if (window.innerWidth < 768) {
                d(".mobile-menu-icon").css({
                    display: "block"
                });
                if (!d(".mobile-menu-icon .hamburger-box").hasClass("active")) {
                    d("#header .menu").css({
                        display: "none"
                    })
                }
            } else {
                d(".mobile-menu-icon").css({
                    display: "none"
                });
                d("#header .menu").css({
                    display: "block"
                })
            }
            if (window.innerWidth > 1140) {
                d(".header .menu").css({
                    display: "block"
                })
            } else {
                d(".header .menu").css({
                    display: "none"
                })
            }
        }
        function V() {
            if (jQuery("body").hasClass("og-context-node-3434")) {
                if (jQuery("body").hasClass("node-type-product-help")) {
                    jQuery(".menu-panel .zoho-parent-wrapper .hasChild ").each(function(aB, aD) {
                        if (aB == 0) {
                            var aC = jQuery(this).find(".zoho-child-wrapper li a").eq(1).text();
                            if (aC == "Onboarding") {
                                jQuery(this).find(".zoho-child-wrapper li a").eq(1).hide()
                            }
                        }
                        if (aB == 6) {
                            var e = jQuery(this).find(".zoho-child-wrapper li a").eq(0).text();
                            if (e == "Reports") {
                                jQuery(this).find(".zoho-child-wrapper li a").eq(0).hide()
                            }
                        }
                    })
                }
            }
        }
        function B() {
            var e = jQuery("body").hasClass("og-context-node-96");
            if (e) {
                var aB = window.location.pathname.split("/");
                if (aB.length == 3) {
                    jQuery(".bottom-promo .ct-action-btn").attr("href", "/crm/lp/signup.html?plan=enterprise?src=" + aB[2] + "")
                } else {
                    if (aB.length > 3) {
                        jQuery(".bottom-promo .ct-action-btn").attr("href", "/crm/lp/signup.html?plan=enterprise?src=" + aB[2] + "/" + aB[3] + "")
                    }
                }
            }
        }
        function A() {
            var e = jQuery("#mini-panel-product_menu .product-title a").text();
            if (e == "DRE") {
                jQuery("#mini-panel-product_menu .menu-icon-help-header a,#mini-panel-product_menu .product-title a").attr("href", "https://www.zoho.com/")
            }
            if (e == "CRM Plus") {
                var aC = window.location.pathname.split("/");
                for (var aB = 0; aB < aC.length; aB++) {
                    if (aC[1] != "crm") {
                        lang = aC[1];
                        url = "/" + lang + "/crm/crmplus/";
                        jQuery("#mini-panel-product_menu .menu-icon-help-header a,#mini-panel-product_menu .product-title a").attr("href", url);
                        jQuery(".product-header-top .menu-icon-help-header a,.product-header-top .product-title a").attr("href", url)
                    } else {
                        if (aC[1] == "crm" && aC[2] == "crmplus") {
                            jQuery("#mini-panel-product_menu .menu-icon-help-header a,#mini-panel-product_menu .product-title a").attr("href", langsrc + "crm/crmplus/");
                            jQuery(".product-header-top .menu-icon-help-header a,.product-header-top .product-title a").attr("href", langsrc + "crm/crmplus/")
                        }
                    }
                }
            } else {
                if (e == "Writer") {
                    jQuery("#mini-panel-product_menu .menu-icon-help-header a,#mini-panel-product_menu .product-title a").attr("href", langsrc + "writer/");
                    jQuery(".product-header-top .menu-icon-help-header a,.product-header-top .product-title a").attr("href", langsrc + "writer/")
                }
            }
        }
        function aq() {
            var e = jQuery("body").hasClass("og-context-node-8078");
            if (e) {
                jQuery(".only-common .common-links ul li:nth-child(6) a").attr("href", "/sites/terms.html");
                jQuery(".only-common .common-links ul li:nth-child(6) a").text("Terms of Use")
            }
        }
        function S() {
            var e = zohouser.DISPLAY_NAME;
            if (e) {
                d(".header").addClass("uheader");
                if (!d("body").hasClass("body-umain")) {
                    d("body").addClass("body-umain")
                }
                if (d("body").find(".main")) {
                    d(".main").addClass("umain");
                    d(document).trigger("umain-trigger")
                }
                if (d("body").find(".main-container-wrapper")) {
                    d(".main-container-wrapper").addClass("umain")
                }
                if (dcenabled) {
                    if (!d(".umain").hasClass("zNewDcSetup")) {
                        d(".umain").addClass("zNewDcSetup")
                    }
                }
                getusername = decodeHexString(zohouser.DISPLAY_NAME)
            }
        }
        function U() {
            if (window.location.href.indexOf("social/hootsuite-alternative.html") < 0 && !d(".signup-box").hasClass("nofocus")) {
                getAllField = d(".signup-box .sgfrm input");
                if (getAllField.length != 0) {
                    d(".signup-box form").eq(0).css({
                        opacity: "0"
                    });
                    setTimeout(function() {
                        d(".signup-box form").eq(0).animate({
                            opacity: "1"
                        })
                    }, 1000);
                    if (d(".signup-box").hasClass("buttomsignup")) {
                        d("html, body").animate({
                            scrollTop: (d(".signup-box form").offset().top - 300)
                        }, 1000, function() {
                            setTimeout(function() {
                                d(".focusin").removeClass("focusin")
                            }, 500)
                        })
                    } else {
                        d("html, body").animate({
                            scrollTop: 0
                        }, 1000, function() {
                            setTimeout(function() {
                                d(".focusin").removeClass("focusin")
                            }, 500)
                        })
                    }
                    setTimeout(function() {
                        var e = d(".signup-box .sgfrm").eq(0).find("input");
                        (e.length > 1) ? e.eq(1).addClass("focusin").focus() : e.eq(0).addClass("focusin").focus()
                    }, 2000)
                }
            }
        }
        function H() {
            var e = '<div class="mobile-menu-signup"><a href="' + zPrdSignupLink + '?src=mtry-hbm">' + zPrdSignupLinkText + '</a><a href="' + zPrdLoginLink + '">SIGN IN</a> <div class="mobile-menu-moreprd"><a href="https://www.zoho.' + domainOne + "/products.html?ref=m-" + productName + '">All Zoho Products</a></div></div>';
            d(".product-nav-links .menu .featured-apps-part").html(e)
        }
        function au() {
            var aH;
            if (!getusername) {
                var aB = nameServices[0][allProductlowerCase.indexOf(productName)];
                if (typeof aB != "undefined" && typeof aB != "") {
                    var aE = "";
                    (currentLang != "") ? (aE = "service_language=" + currentLang + "&") : (aE = "");
                    aH = '<a class="user-icon" href="https://accounts.zoho.com/login?' + aE + "servicename=" + aB + '">User Icon</a>';
                    _globalAccess = aH
                }
            }
            if (d(".product-nav-links .menu .featured-apps-part").length < 1) {
                var aF = Drupal.t("Related Products");
                if (productName == "home") {
                    aF = Drupal.t("Our Products")
                }
                var aC = '<li class="featured-apps-part"><div class="mobile-menu-moreprd moreprd-nonloggedin"><a href="' + langsrc + '">' + Drupal.t("All Zoho Products") + "</a></div></li>";
                d(".product-nav-links .menu").append(aC)
            }
            if (window.outerWidth <= 767) {
                if (z == 0) {
                    z = 1;
                    d(".ptmenu").addClass("sticky");
                    d(".product-nav-links .menu").css({
                        height: window.innerHeight - d("#mini-panel-product_menu").outerHeight()
                    })
                }
            }
            var e = d(".product-header-top .menu").children();
            d(e[1]).addClass("selected");
            var aD = d(".view-content");
            var aG = d("body").find(aD);
            if ((aG.length) > 0) {
                var aG = d(aD).children();
                if (aG.length > 3) {
                    aD.addClass("plane-four-column")
                }
            }
        }
        function R() {
            if ((window.innerWidth > 992) && (window.innerHeight < 800)) {
                if (d(".testimonial-content").length > 0) {
                    var e = d(".testimonial-content").innerHeight();
                    d(".testimonial-content").css("margin-top", ((window.innerHeight - 20) - e) / 2)
                }
            }
            if (typeof zohouser != "undefined") {
                getusername = zohouser.DISPLAY_NAME;
                S()
            }
            if (getusername) {
                d(".signing .signup, .signing .signin, .signup-box").hide();
                if (d(".zh-access").length > 0 && d("body").hasClass("node-type-zoho-home")) {
                    d(".zh-access").attr("href", "https://home." + Zdomain + "." + dcdomainOne + "/home")
                }
            }
            if (!getusername) {
                if (d(".loggedin-userinfo").length > 0) {
                    d(".loggedin-userinfo").hide()
                }
                if (window.location.href.indexOf("pricing-comparison.html") > 0 || window.location.href.indexOf("pricing.html") > 0) {
                    d(".signing .signup").hide()
                } else {
                    d(".signing .signup").show()
                }
                if (window.innerWidth > 991) {
                    d(".signup-box").show()
                }
                d(".signing .signin").show();
                d(".try-now").addClass("signupbtn-hide").removeClass("signupbtn-show");
                var aD = "/" + productName + "/";
                var aG = Drupal.t("Sign Up Now");
                var aV = ["meeting", "workplace", "assist", "salesiq"];
                var aM = ["signup.html?version=freetrial&service=meeting&src=topbar-try", "pricing.html", "signup.html?version=freetrial", "signup.html?source=Website.Header"];
                if (aV.indexOf(productName) > -1) {
                    aD += aM[aV.indexOf(productName)];
                    if (productName == "mail" || productName == "workplace") {
                        aG = Drupal.t("Get Started")
                    } else {
                        if (productName == "docs") {
                            aG = Drupal.t("Get Started Now")
                        }
                    }
                } else {
                    aD += "signup.html"
                }
                if (productName == "writer") {
                    aG = Drupal.t("Get Started Now")
                }
                var aC = ["show", "writer", "crmplus", "appcreator", "crm"];
                aS = "";
                (currentLang != "") ? (aS = "/" + currentUrlLang) : (aS = aS);
                var aR = aS + aD;
                var aT = aS + "/" + productName;
                var aB = aG;
                if (aC.indexOf(productName) < 0) {
                    var aT = aS + "/" + productName + "/login.html";
                    (productName == "home") ? (aR = (aR.split("/home")[0] + aR.split("/home")[1])) : "";
                    (productName == "mail") ? (aR = langsrc + "mail/zohomail-pricing.html") : ""
                }
                if (aC.indexOf(productName) > -1) {
                    if (productName == "crmplus") {
                        if ((window.location.host) != "www.zoho.com.cn") {
                            aR = langsrc + "crm/crmplus/signup.html";
                            aT = "crm/crmplus/login.html";
                            aB = Drupal.t("Sign Up")
                        }
                    } else {
                        if (productName == "crm") {
                            var aE = window.location.pathname;
                            aR = langsrc + "crm/signup.html";
                            aT = "/crm/lp/login.html";
                            if (aE != "/crm/index.html" && aE != "/crm/zohocrm-pricing.html" && aE != "/crm/comparison.html") {
                                aB = Drupal.t("Get Started")
                            } else {
                                aB = Drupal.t("Sign Up Now")
                            }
                        } else {
                            if (productName == "show") {
                                aR = "https://docs.zoho." + domainOne + "/" + productName + "/signup";
                                aT = "https://docs.zoho." + domainOne + "/" + productName + "/signup?signin=true";
                                aB = Drupal.t("Get Started Now")
                            }
                        }
                    }
                }
                d(".header .signing .signin").css({
                    opacity: 1
                });
                if (window.innerWidth <= 767) {
                    d(".user-icon").css({
                        display: "block"
                    })
                }
            }
            if (getusername) {
                if (d(".act-btn.cta-btn").length > 0) {
                    d(".act-btn.cta-btn").attr("href", "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne)
                }
                if (typeof customvar.logged != "undefined") {
                    customvar.logged()
                }
                if (!d("body").hasClass("zb-firefox")) {
                    if (global_getUrlParam("zsrc") != "") {
                        if (global_getUrlParam("zsrc").indexOf("fromproduct-remove") > -1) {
                            window.location = "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne
                        }
                    }
                }
                if (d(".loggedin-userinfo").length > 0) {
                    if (productName == "assist") {
                        var aS = document.location.href;
                        if (aS.indexOf("?") != -1) {
                            var aU = aS.split("?")[1];
                            var aJ = aU.split("&");
                            $gotoPage = "https://assist.zoho." + dcdomainOne + "/login/redirect-page.jsp?" + aU
                        } else {
                            $gotoPage = "https://assist.zoho." + dcdomainOne + "/login/redirect-page.jsp"
                        }
                    }
                    d(".loggedin-userinfo").show();
                    d(".signup-form h3,.signup-box,.login-text").hide();
                    if (d(".access-apps").length < 1) {
                        if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
                            $gotoPage = $gotoPage + "/blueprints?marketing_source=" + customvar.czms() + "&referral=" + customvar.czmr() + "&newlogin=true"
                        }
                        d(".loggedin-userinfo").append(" <h2 class='username'>" + Drupal.t("Welcome") + " <span>" + customvar.htmlencode(getusername) + "!</span></h2> <a class='access-apps' href=" + $gotoPage + "></a>");
                        d(".loggedin-userinfo .access-apps").html(accessZoho + " " + k2);
                        if (_lhref.indexOf("signup.html") > 0 && currentUrlLang == "jp") {
                            d(".loggedin-userinfo .access-apps").html(accessZoho)
                        }
                    }
                    if (productName == "zohoorchestly") {
                        var aP = Drupal.t("Access") + " orchestly";
                        d(".loggedin-userinfo .access-apps").html(aP)
                    } else {
                        if (productName == "it-management") {
                            var aP = Drupal.t("Access") + " It-Management";
                            d(".loggedin-userinfo .access-apps").html(aP)
                        } else {
                            if (productName == "remoteaccessplus") {
                                var aP = Drupal.t("Access") + " remoteaccessplus";
                                d(".zgh-userAccess a").html(aP)
                            }
                        }
                    }
                }
                if (!hidelogin) {
                    d(".getstartedbox .signup-btn.mobile-btn, .zp-home-left .act-btn.cta-btn, .content-wrap .act-btn.cta-btn, .non-temp .act-btn.cta-btn, .bot-cta-con .act-btn.cta-btn, .getstartedbox .signup-btn.mobile-btn").css("display", "inline-block");
                    d(".node-type-zoho-home .zh-access, .act-btn.cta-btn").css({
                        opacity: "1",
                        visibility: "visible"
                    })
                }
                var aI = window.location.href;
                if ((customvar.pServiceNames[customvar.pArr.indexOf(customvar.productName)] != null && customvar.pServiceNames[customvar.pArr.indexOf(customvar.productName)] != "undefined")) {
                    customvar.servicename = "&servicename=" + customvar.pServiceNames[customvar.pArr.indexOf(customvar.productName)]
                } else {}
                var aH = "https://accounts." + Zdomain + "." + dcdomainOne + "/logout?serviceurl=" + encodeURI(aI) + customvar.servicename;
                var aQ = "https://accounts." + Zdomain + "." + dcdomainOne + "/u/h#home";
                if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
                    aH = "https://accounts.zoho." + dcdomainOne + "/logout?serviceurl=" + encodeURI(aI) + customvar.servicename;
                    aQ = "https://accounts.zoho." + dcdomainOne + "/u/h#home"
                }
                var aF = '<div class="zgh-user-box"> <div class="zgh-userPanel"> <img src=' + $userAvator + " alt=" + customvar.htmlencode(getusername) + ' class="zgh-userAvatar"> <div class="zgh-userLink"> <ul> <li class="zgh-userImage"> <img src=' + $userAvator + " alt=" + customvar.htmlencode(getusername) + '> </li><li class="zgh-userName">' + customvar.htmlencode(getusername) + '</li><li class="zgh-userAccess"> <a href=' + $gotoPage + '></a> </li><li class="zgh-userAccount"> <a href=' + aQ + ">" + myAccount + '</a> </li><li class="zgh-userLogout"><a href="' + aH + '">' + signOut + "</a> </li></ul> </div></div></div>";
                d(".signing .goto-link").hide();
                customvar.userelem = aF;
                d(".zgh-accounts").html(aF);
                if (k2 == "crm") {
                    k2 = "CRM"
                } else {
                    if (k2 == "crmplus") {
                        k2 = "CRM plus"
                    }
                }
                d(".zgh-userAccess a").html(accessZoho + " " + k2);
                if (productName == "zohoorchestly") {
                    var aP = Drupal.t("Access") + " orchestly";
                    d(".zgh-userAccess a").html(aP)
                } else {
                    if (productName == "it-management") {
                        var aP = Drupal.t("Access") + " It-Management";
                        d(".zgh-userAccess a").html(aP)
                    } else {
                        if (productName == "remoteaccessplus") {
                            var aP = Drupal.t("Access") + " remoteaccessplus";
                            d(".zgh-userAccess a").html(aP)
                        }
                    }
                }
                if (hidelogin) {
                    var aK = customvar.dccountry();
                    var aL = ((productName == "remoteaccessplus") ? "remote access plus" : productName);
                    aL = ((aL.indexOf("zoho") > -1) ? aL : ("zoho " + aL));
                    d(".act-btn.cta-btn, .zgh-userAccess, .access-apps, .trynow-plan, .zfeatures-btn .zcta, a.logged-out, a.logged-in").hide();
                    d("body").prepend('<div class="zDCnotif-container"><p><span>' + Drupal.t("Sorry") + "<span>,<strong> " + aL + " </strong>" + Drupal.t("is not available in") + " <strong>" + aK.toUpperCase() + "</strong>" + Drupal.t(" data center.") + "</p></div>");
                    var aN = 0;
                    var aO = setInterval(function() {
                        if (d(".z-bottom-cta-menu").length > 0) {
                            clearInterval(aO);
                            d(".z-bottom-cta-menu").addClass("z-disabled");
                            d(".loggedin").html("Not available")
                        }
                        if (aN > 20) {
                            clearInterval(aO)
                        }
                        aN++
                    }, 100)
                }
                dropRight()
            } else {
                tlscall();
                d("body").addClass("non-umain");
                if (typeof customvar.nonlogged != "undefined") {
                    customvar.nonlogged()
                }
                if (typeof customeCallWatchBtn != "undefined") {
                    customeCallWatchBtn()
                }
                d(".product-header-top .zgh-accounts .zgh-signup, .zgh-accounts .zgh-login").css("display", "inline-block");
                d(".act-btn.cta-btn, .node-type-zoho-home .zh-signup").css({
                    opacity: "1",
                    visibility: "visible"
                });
                d(".product-header-top .zgh-accounts .zgh-login").css("display", "none");
                if (productName != "commerceplus") {
                    if (!d("body").hasClass("node-type-zp-home") && !d("body").hasClass("node-type-zp-home-2-0")) {
                        d(".zgh-signup").css("display", "inline-block")
                    }
                }
            }
            d('a[href*="mailto:abuse@zoho.com"]').html("abuse@" + _zcopr + ".com").attr("href", "mailto:abuse@zoho.com");
            if (dcdomainOne == "eu") {
                d('a[href*="mailto:abuse@zoho.com"]').html("abuse@eu." + _zcopr + ".com").attr("href", "mailto:abuse@zoho.com");
                d('a[href*="mailto:postmaster@zoho.com"]').html("postmaster@eu." + _zcopr + ".com").attr("href", "mailto:postmaster@zoho.com")
            }
            customvar.dcbasedimage();
            ak()
        }
        function x(aB) {
            m = window.location.href;
            m = m.replace("http://www.", "");
            m = m.replace("https://www.", "");
            m = m.replace("http://", "");
            m = m.replace("https://", "");
            k = m.split(".com");
            if (k[1] != null) {
                findEs = k[1].split("/");
                if (aB == "crm" && findEs.indexOf("es") > -1) {
                    accessZoho = "Accesar Zoho ";
                    myAccount = "Mi Cuenta";
                    signOut = "Salir"
                } else {
                    accessZoho = Drupal.t("Access Zoho");
                    myAccount = Drupal.t("My Account");
                    signOut = Drupal.t("Sign Out")
                }
            }
            if (k.length > 1) {
                k = k[0];
                k2 = aB
            } else {
                k2 = ""
            }
            var e = ["crm", "projects", "bugtracker", "people", "assist", "survey", "sites", "social", "meeting", "vault", "recruit", "creator", "contactmanager", "motivator", "crmplus", "appcreator", "reports", "wiki", "show", "writer", "desk", "cliq", "developer", "salesinbox", "officeapi", "sprints", "officeplatform", "phonebridge", "ziasearch", "identity-management", "log360-cloud", "it-management"];
            var aC = ["https://crm." + Zdomain + "." + dcdomainOne + "/crm/ShowHomePage.do", "https://projects.zoho." + dcdomainOne + "/portals.do", "https://bugtracker.zoho." + dcdomainOne + "/portals.do", "https://people.zoho." + dcdomainOne + "/people", "https://assist.zoho." + dcdomainOne + "/assist", "https://survey.zoho." + dcdomainOne + "/home.do", "https://sites.zoho." + dcdomainOne + "/index", "https://social." + Zdomain + "." + dcdomainOne + "/Home.do", "https://meeting.zoho." + dcdomainOne + "/jsp/service-check.jsp?service=meeting", "https://vault.zoho." + dcdomainOne + "/online/main", "https://recruit.zoho." + dcdomainOne + "/recruit/ShowHomePage.do", "https://creator.zoho." + dcdomainOne + "/home", "https://cm.zoho." + dcdomainOne + "/index.do", "https://motivator.zoho." + dcdomainOne + "/login", "https://crmplus.zoho." + dcdomainOne + "/", "https://appcreator.zoho." + dcdomainOne + "", "https://reports.zoho." + dcdomainOne + "", "https://wiki.zoho." + dcdomainOne + "", "https://show.zoho." + dcdomainOne + "/presentations", "https://writer.zoho." + dcdomainOne + "/", "https://desk.zoho." + dcdomainOne + "/", "https://cliq.zoho." + dcdomainOne + "/index.do", "https://developer.zoho." + dcdomainOne + "/", "https://crm.zoho." + dcdomainOne + "/crm/tab/SalesInbox", "https://officeapi.zoho." + dcdomainOne + "", "https://sprints.zoho." + dcdomainOne + "/team.do", "https://officeintegrator.zoho." + dcdomainOne + "", "https://phonebridge.zoho." + dcdomainOne + "/phonebridge/register", "https://search." + Zdomain + "." + dcdomainOne + "/", "https://identitymanager.manageengine.com/", "https://log360-cloud.manageengine.com/", "https://alarmsone.manageengine.com/"];
            $userAvator = "https://contacts.zoho.com/file?t=user&fs=thumb";
            (e.indexOf(k2) > -1) ? $gotoPage = aC[e.indexOf(k2)] : $gotoPage = "https://" + k2 + ".zoho." + dcdomainOne;
            if (aB == "connect" && window.location.href.indexOf("/jp/connect/cybozu-live-alternative.html") > 0) {
                $gotoPage = "https://connect." + Zdomain + "." + dcdomainOne
            }
            if (aB == "patchmanagerplus") {
                $gotoPage = "https://patch.manageengine." + dcdomainOne
            } else {
                if (aB == "zohoorchestly") {
                    $gotoPage = "https://orchestly.zoho." + dcdomainOne
                } else {
                    if (aB == "assist" && global_getUrlParam("src") != "") {
                        $gotoPage = "https://assist." + Zdomain + "." + dcdomainOne + "/assist-cross-registration?version=freetrial&src=" + global_getUrlParam("src")
                    }
                }
            }
            if (_lhref.indexOf("sheet/whats-new/zohosheet5.html") > 0 || _lhref.indexOf("sheet/data-cleaning.html") > 0 || _lhref.indexOf("sheet/custom-function.html") > 0 || _lhref.indexOf("sheet/zia.html") > 0) {
                $gotoPage = "https://sheet." + Zdomain + "." + dcdomainOne + "/enablesheet5"
            }
        }
        function h() {
            setTimeout(function() {
                if (d(".signup-box").length > 0) {
                    for (var e = 0; e < d(".sgfrm input").length; e++) {
                        if (d(".sgfrm input").eq(e).val() != "undefined" && d(".signup-box").css("display") == "block") {
                            if (d(".sgfrm input").eq(e).val() != "") {
                                if (d(".sgfrm input").eq(e).prev().hasClass("placeholder")) {
                                    d(".sgfrm input").eq(e).parent().addClass("added-placeholder")
                                }
                            }
                        }
                    }
                }
            }, 500)
        }
        d(document).on("blur", "input", function() {
            var e = d(this).val();
            if (e == "" || e == null) {
                d(this).parent().removeClass("added-placeholder")
            } else {
                d(this).parent().addClass("added-placeholder")
            }
        }).on("focus", "input", function() {
            var e = d(this).val();
            if (e == "" || e == null) {
                d(this).parent().removeClass("").addClass("added-placeholder")
            } else {
                d(this).parent().addClass("added-placeholder")
            }
        }).on("change", "input", function() {
            h()
        });
        P();
        A();
        aq();
        B();
        V();
        aj();
        checkIpAppend();
        d(".navbar-toggle").click(function(aB) {
            aB.stopPropagation();
            d(".header-menu-2 ul.menu").slideToggle()
        });
        if (d("#zohoiam").length > 0) {
            var F = d("#zohoiam").attr("src").split(".zoho.").join("." + ZdomainName + ".");
            d("#zohoiam").attr("src", F)
        }
        setTimeout(function() {
            jQuery(".animation-wrap > div").each(function(aB) {
                var e = jQuery(this);
                setTimeout(function() {
                    e.addClass("animated")
                }, (aB + 1) * 100)
            })
        }, 100);
        var s = jQuery(".features-list").children();
        var af = [];
        for (var at = 0; at < s.length; at++) {
            af[at] = jQuery(s[at]).offset().top - window.innerHeight + jQuery(".features-list li").innerHeight()
        }
        jQuery(window).scroll(function() {
            var e = jQuery(window).scrollTop();
            for (var aB = 0; aB < s.length; aB++) {
                if (e > af[aB]) {
                    if (aB % 2 == 1) {
                        jQuery(s[aB]).addClass("from-right")
                    } else {
                        jQuery(s[aB]).addClass("from-left")
                    }
                }
            }
            if (e > af[s.length - 1] + 150) {
                jQuery(".bottom-signup,.download-features a").css({
                    opacity: 1
                })
            }
            jQuery(".product-header.sub-header").css({
                top: -76
            })
        });
        var M = false;
        var Y = jQuery(".product-menu").css("display");
        jQuery("body").click(function(aB) {
            if (aB.target.className == "product-menu") {} else {
                if (aB.target.className == "sub-menu-icon") {
                    if (M == false) {
                        M = true;
                        jQuery(".product-menu").slideDown(300)
                    } else {
                        M = false;
                        jQuery(".product-menu").slideUp(300)
                    }
                } else {
                    if (M == true) {
                        M = false;
                        jQuery(".product-menu").slideUp(300);
                        jQuery("html,body").css({
                            overflow: "auto"
                        })
                    }
                }
            }
        });
        jQuery(".product-menu li").click(function(aD) {
            var aC = jQuery(this).attr("class");
            var aE = aC.split("-");
            if (aE[0] == "crmplus") {
                aD.preventDefault();
                var aB = jQuery("section[data=" + aE[1] + "]").offset().top;
                jQuery("html, body").animate({
                    scrollTop: aB - jQuery(".sub-header").innerHeight()
                }, 1000, "easeInOutQuad")
            }
        });
        jQuery(".bottom-signup,.signing .signup").click(function(aB) {
            if (productName == "crm") {
                return
            }
            aB.preventDefault();
            jQuery("html, body").animate({
                scrollTop: 0
            }, 1000, "easeInOutQuad");
            setTimeout(function() {
                jQuery(".signup-box div:first-child input").focus()
            }, 1000)
        })
    })
}
)(jQuery);
(function(d) {
    d.fn.visible = function(o) {
        var j = d(this)
          , g = d(window)
          , h = g.scrollTop() - 200
          , l = h + (g.height() + 300)
          , p = (j.length > 0) ? (j.offset().top) + 250 : 0
          , n = p + j.height()
          , f = o === true ? n : p
          , e = o === true ? p : n;
        return ((e <= l) && (f >= h))
    }
}
)(jQuery);
(function(e) {
    function d() {
        if ($(window).outerWidth() > 767) {
            e(".content-wrap:not(.animated)").each(function() {
                var g = e(this)
                  , f = (g.attr("data-delay")) ? g.attr("data-delay") : 0;
                setTimeout(function() {
                    if (g.visible(true)) {
                        g.addClass(g.attr("data-animation"));
                        g.addClass("animated")
                    }
                }, f)
            })
        }
        e(".content-wrap:not(.bottom-animated)").each(function() {
            var l = e(this)
              , j = e(window)
              , f = j.scrollTop()
              , h = l.offset().top
              , g = j.height();
            if (f > (h - g)) {
                l.addClass("bottom-animated")
            }
        });
        e(".content-wrap:not(.top-animated)").each(function() {
            var l = e(this)
              , j = e(window)
              , f = j.scrollTop()
              , h = l.offset().top
              , g = j.height();
            if (f > h) {
                l.addClass("top-animated")
            }
        });
        e(".content-wrap:not(.middle-animated)").each(function() {
            var l = e(this)
              , j = e(window)
              , f = j.scrollTop()
              , h = l.offset().top
              , g = j.height();
            if (f > (h - (g / 2))) {
                l.addClass("middle-animated")
            }
        })
    }
    e(document).ready(function() {
        d()
    });
    e(window).resize(function() {
        d()
    });
    e(window).scroll(function() {
        d()
    })
}
)(jQuery);
function zohoGASignupEvent() {}
function zohoFedClickEvent() {}
function zcTrackClick() {}
jQuery(document).ready(function() {
    if (CountryCode == "CN" && $("body").hasClass("i18n-en")) {
        if (customvar.cnavail.indexOf(productName) > -1) {
            if (window.location.pathname.endsWith(productName + "/") || window.location.pathname.endsWith(productName + "/index.html") || window.location.href.endsWith("CN")) {
                $('<div class="cn-zpromotion"><div class="cn-zpromotion-wrap"><p><span class="zone">&#22914;&#38656;&#20351;&#29992;&#20013;&#22269;&#24403;&#22320;&#26381;&#21153;&#22120;&#65292;&#35831;&#35775;&#38382; </span><a class="zmore" href="https://www.zoho.com.cn/' + productName + '" target="blank" rel="noopener">zoho.com.cn/' + productName + '</a></p></div><span class="cn-zpromoclose">x</span></div>').insertBefore("#mini-panel-product_menu")
            }
        }
        if ($(window).outerWidth() < 768) {
            $(".zcrm-home-banner-sec").addClass("cn-banner")
        }
        $(".cn-zpromoclose").click(function() {
            $(".cn-zpromotion").slideUp();
            $(".zcrm-home-banner-sec").removeClass("cn-banner")
        })
    }
    if ((window.location.host) == "www.zoho.com.cn") {
        var h = '<div class="common-footer"><ul><li><a href="https://www.zoho.com.cn/">Zoho&#39318;&#39029;</a></li><li><a href="https://www.zoho.com.cn/contactus.html">&#32852;&#31995;&#25105;&#20204;</a></li><li><a href="https://www.zoho.com.cn/aboutus.html">Zoho&#21382;&#21490;</a></li><li><a href="https://www.zoho.com.cn/press.html">&#20135;&#21697;&#36164;&#35759;</a></li><li><a href="https://www.zoho.com.cn/articles.html">&#21457;&#24067;&#35266;&#28857;</a></li><li><a href="https://www.zoho.com.cn/partners.html" rel="nofollow">&#20195;&#29702;&#21512;&#20316;</a></li><li><a href="https://www.zoho.com.cn/security.html"rel="nofollow">&#23433;&#20840;&#20445;&#38556;</a></li><li><a href="https://www.zoho.com.cn/ipr-complaints.html" rel="nofollow">&#30693;&#35782;&#20135;&#26435;&#30003;&#35785;</a></li><li><a href="https://www.zoho.com.cn/policy.html" rel="nofollow">&#21453;&#22403;&#22334;&#37038;&#20214;&#25919;&#31574;</a></li><li><a href="https://www.zoho.com.cn/terms.html" rel="nofollow">&#26381;&#21153;&#26465;&#27454;</a></li><li><a href="https://www.zoho.com.cn/privacy.html" rel="nofollow">&#38544;&#31169;&#25919;&#31574;</a></li></ul><p>Â© ' + currentYear + ', Zoho Corporation.&#20445;&#30041;&#25152;&#26377;&#26435;&#21033;.</p><p>&#21271;&#20140;&#24066;&#28023;&#28096;&#21306;&#30693;&#26149;&#36335;6&#21495;&#38182;&#31179;&#22269;&#38469;&#22823;&#21414;B&#24231;13&#23618;  400-660-8680</p><p>&#20140;ICP&#22791;15015257&#21495;&nbsp;&nbsp;&#20140;ICP&#35777;150718&#21495;</p><p>&#21451;&#24773;&#38142;&#25509;&#65306;QQ1610576843&nbsp;&nbsp; <a href="https://www.bangongyi.com" target="_blank">&#24494;&#20449;&#21150;&#20844;</a> &nbsp;&nbsp;<a href="https://www.fangcloud.com/" target="_blank">&#20159;&#26041;&#20113;</a></p><div class="china-social"> <a class=on-weibo target="_blank" href="https://weibo.com/zohochina" rel="nofollow"></a><!--&#24494;&#20449;--><a class="on-vchat1"> </a><a class="on-vchat2"> </a><!--&#24494;&#20449;&#32467;&#26463;--></div><div class="footer-zohologo"> <a href="https://www.zoho.com.cn/"><img src="images/zoho.png" alt="&#20225;&#19994;&#20113;&#26381;&#21153;" title="&#20113;&#26381;&#21153;"></a> </div></div>';
        $(".sales-marketing .app-box:nth-child(2)").css("display", "none");
        $(".sales-marketing .app-box:nth-child(4)").css("display", "none");
        $(".sales-marketing .app-box:nth-child(6)").css("display", "none");
        $(".sales-marketing .app-box:nth-child(8)").css("display", "none");
        $(".sales-marketing .app-box:nth-child(9)").css("display", "none");
        $(".sales-marketing .app-box:nth-child(10)").css("display", "none");
        $(".email-collab .app-box:nth-child(4)").css("display", "none");
        $(".email-collab .app-box:nth-child(5)").css("display", "none");
        $(".email-collab .app-box:nth-child(6)").css("display", "none");
        $(".email-collab .app-box:nth-child(7)").css("display", "none");
        $(".email-collab .app-box:nth-child(8)").css("display", "none");
        $(".help-desk .app-box:nth-child(2)").css("display", "none");
        $(".help-desk .app-box:nth-child(3)").css("display", "none");
        $(".help-desk .app-box:nth-child(4)").css("display", "none");
        $(".finance").css("display", "none");
        $(".business-proc .app-box:nth-child(3)").css("display", "none");
        $(".business-proc .app-box:nth-child(4)").css("display", "none");
        $(".common-links").html(h);
        var g = ["crm", "crmplus", "campaigns", "survey", "salesiq", "mail", "notebook", "docs", "projects", "chat", "desk", "recruit", "people", "creator", "reports"];
        var f = window.location.href.split("/");
        for (var e = 0; e < f.length; e++) {
            for (var d = 0; d < g.length; d++) {
                if (g[d] == f[e]) {
                    $(".menu-icon-help-header a ,.product-title a").attr("href", "/" + f[e] + "/");
                    $(".signing").html('<a class="signup" href="/' + g[d] + '/signup.html">' + Drupal.t("Sign Up") + '</a> <a class="signin" href="/' + g[d] + '/login.html">' + Drupal.t("SIGN IN") + "</a>")
                }
            }
        }
    }
});
$(window).on("load", function() {
    var j = $(".zcpopup-controller, .popup-controller");
    for (var h = 0; h < j.length; h++) {
        if (typeof j.eq(h).attr("data-video") != "undefined") {
            if (j.eq(h).attr("data-video").indexOf("vimeo") > -1) {
                j.eq(h).addClass("vimvideo").removeClass("zcpopup-controller").removeClass("popup-controller")
            }
        }
    }
    if (currentUrlLang != "") {
        var n = $(".add-lang");
        for (var h = 0; h < n.length; h++) {
            if (n.eq(h).hasClass("nonlang")) {} else {
                if (typeof n.eq(h).attr("href") != "undefined") {
                    if (n.eq(h).attr("href").indexOf("/") == 0) {
                        var f = n.eq(h).attr("href");
                        n.eq(h).attr("href", "/" + currentUrlLang + f)
                    }
                }
            }
        }
    }
    var l = ["crm", "crmplus", "bigin", "marketingplus", "zakya", "canvas"];
    if (l.indexOf(customvar.productName) < 0) {
        if (predomain) {
            $.getScript("/sites/all/themes/zoho/scripts/crmwebforms.js")
        } else {
            $.getScript("https://www.zohowebstatic.com/sites/all/themes/zoho/scripts/crmwebforms.js")
        }
    }
    if ($("#ref_value").length < 1) {
        if ($(".signup-box form").length > 0) {
            var e = customvar.czmr();
            var g = _lhref;
            if (customvar.czmr().indexOf(".html") > 0 && global_getUrlParam("ismobilesignup") != "") {
                e = customvar.czmr().split(".html")[0] + ".html"
            }
            if (g.indexOf(".html") > 0 && global_getUrlParam("ismobilesignup") != "") {
                g = customvar.absurl
            }
            g = (g.length > 300) ? g.substring(0, 300) : g;
            $(".signup-box form").append('<input id="ref_value" name="ref_value" type="hidden" value="' + customvar.czms() + "," + e + "," + customvar.cuid() + "," + customvar.mydevice() + "," + g + '">')
        }
    }
    var d = $("body a");
    for (var h = 0; h < d.length; h++) {
        if (d.eq(h).attr("href") != "undefined" && d.eq(h).attr("href") != null && d.eq(h).attr("href") != "" && d.eq(h).attr("data-noneedopener") != "") {
            if (typeof d.eq(h).attr("target") != "undefined") {
                if (d.eq(h).attr("target") == "_blank" && d.eq(h).attr("rel") == "") {
                    d.eq(h).attr("rel", "noopener")
                }
            }
            if (d.eq(h).attr("href").indexOf("forums.zoho.com") > -1) {
                d.eq(h).attr("href", d.eq(h).attr("href").split("forums.zoho.com").join("help.zoho.com/portal/en/community"))
            }
            if (currentUrlLang != "") {
                if (d.eq(h).attr("href").indexOf("/security.html") > 0 || d.eq(h).attr("href").indexOf("/privacy.html") > 0 || d.eq(h).attr("href").indexOf("/cookie-policy.html") > 0 || d.eq(h).attr("href").indexOf("/ipr-complaints.html") > 0 || d.eq(h).attr("href").indexOf("/compliance.html") > 0 || d.eq(h).attr("href").indexOf("/policy.html") > 0 || d.eq(h).attr("href").indexOf("/terms.html") > 0) {
                    if (currentUrlLang == "de" && (d.eq(h).attr("href").indexOf("/terms.html") > 0 || d.eq(h).attr("href").indexOf("/security.html") > 0 || d.eq(h).attr("href").indexOf("/privacy.html") > 0 || d.eq(h).attr("href").indexOf("/privacy/cookie-policy.html") > 0)) {} else {
                        if (currentUrlLang == "pt-br" && (d.eq(h).attr("href").indexOf("/security.html") > 0 || d.eq(h).attr("href").indexOf("/privacy.html") > 0 || d.eq(h).attr("href").indexOf("/privacy/cookie-policy.html") > 0 || d.eq(h).attr("href").indexOf("/compliance.html") > 0)) {} else {
                            if (currentUrlLang != "jp") {
                                d.eq(h).attr("href", d.eq(h).attr("href").split("/" + currentUrlLang + "/").join("/"));
                                d.eq(h).attr({
                                    target: "_blank"
                                })
                            }
                        }
                    }
                }
            }
        }
    }
    $(".copy-right-year").html(currentYear);
    if (domainOne == "eu") {
        $(".vi-linkedin, .vi-office365").hide()
    }
    if ((window.location.host) == "www.zoho.com.cn") {
        $("a[href*='.com']").attr("href", function(p, o) {
            return o.replace("zoho.com/", "zoho.com.cn/")
        })
    }
});
function zSignupPrevent() {
    var d = document.getElementsByClassName("disabled-z-signup").length;
    if (0 < d) {
        return false
    }
}
jQuery(document).on("click", ".hide-links-btn", function() {
    jQuery(".quick-connect-links").animate({
        left: 225
    }, "1000");
    jQuery(".quick-connect-links-wrap .show-links-btn").show();
    jQuery(".quick-connect-links-wrap .show-links-btn").animate({
        right: 0
    }, "1500")
});
jQuery(document).on("click", ".show-links-btn", function() {
    jQuery(".quick-connect-links").show();
    jQuery(".quick-connect-links").animate({
        left: 0
    }, "1000");
    jQuery(".quick-connect-links-wrap .show-links-btn").show("slow");
    jQuery(".quick-connect-links-wrap .show-links-btn").animate({
        right: -45
    }, "1200")
});
jQuery(window).on("load", function() {
    jQuery(".quick-connect-links-wrap .show-links-btn").show()
});
$(window).on("load", function() {
    var f = $(window).width();
    if (window.innerWidth < 480 || isMobile) {
        if ($(".footer-sec-wrap .product-links ul.contact-zoho").length <= 0) {
            var h = "";
            if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
                h = "https://www.zoho.com"
            }
            var e = '<ul class="contact-zoho" > <li><a href="' + h + langsrc + '">' + Drupal.t("Zoho Home") + "</a></li><li><a href=" + h + langsrc + "contactus.html>" + Drupal.t("Contact Us") + "</a></li></ul>";
            var n = (currentUrlLang == "de") ? '<li><a href="' + h + langsrc + 'impressum.html">Impressum</a></li>' : "";
            var l = '<ul class="security-policy" > <li><a href=' + h + langsrc + "security.html>" + Drupal.t("Security") + '</a></li> <li><a href="' + langsrc + 'compliance.html">' + Drupal.t("Compliance") + "</a></li><li><a href=" + h + langsrc + "ipr-complaints.html>" + Drupal.t("IPR Complaints") + "</a></li><li><a href=" + h + langsrc + "policy.html> " + Drupal.t("Anti-spam Policy") + '</a></li><li class="footer-terms"><a href=' + h + langsrc + "terms.html>" + Drupal.t("Terms of Service") + "</a></li><li><a href=" + h + langsrc + "privacy.html>" + Drupal.t("Privacy Policy") + '</a></li><li class="cookie-policy"><a href="' + h + langsrc + 'privacy/cookie-policy.html">' + Drupal.t("Cookie Policy") + '</a></li><li class="gdprc"><a href="' + h + '/gdpr.html">' + Drupal.t("GDPR Compliance") + '</a></li><li><a href="' + h + '/abuse-policy/">' + Drupal.t("Abuse Policy") + "</a></li>" + n + "</ul>";
            if ($(".footer-links-wrap .product-links").hasClass("one-column")) {
                $(".footer-links-wrap .one-column div").eq(0).prepend("<h4>Quick Links</h4>")
            }
            var d = "<div><h4>" + Drupal.t("Contact Us") + "</h4>" + e + "</div>";
            d += "<div><h4>" + Drupal.t("Security and Privacy") + "</h4>" + l + "</div>";
            if ($(".footer-sec-wrap .product-links").length == 0) {
                $("<div class='product-links'></div>").appendTo(".footer-links-wrap")
            }
            $(".footer-sec-wrap .product-links").append(d)
        }
        customvar.termslink();
        $(".footer-sec-wrap .product-links ul.contact-zoho").parent("div").css({
            display: "none"
        });
        $(".footer-sec-wrap .product-links ul.security-policy").parent("div").css({
            display: "none"
        });
        $(document).on("click", ".footer-sec-wrap .product-links h4", function(o) {
            if (window.innerWidth < 480) {
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                    $(this).next("ul").slideUp()
                } else {
                    $(".footer-sec-wrap .product-links ul").slideUp();
                    $(".footer-sec-wrap .product-links h4").removeClass("active");
                    $(this).addClass("active");
                    $(this).next("ul").slideDown()
                }
            }
        });
        function g() {
            if (window.innerWidth < 480) {
                $(".footer-sec-wrap .product-links ul").slideUp();
                $(".footer-sec-wrap .product-links h4").removeClass("active");
                $(".footer-sec-wrap .product-links ul.contact-zoho").parent("div").css({
                    display: "block"
                });
                $(".footer-sec-wrap .product-links ul.security-policy").parent("div").css({
                    display: "block"
                });
                if (productName == "reports" || productName == "analytics") {
                    $(".lang-support").prev().hide();
                    $(".lang-support").hide()
                }
            } else {
                $(".footer-sec-wrap .product-links ul").slideDown();
                $(".footer-sec-wrap .product-links ul ul").slideUp();
                $(".footer-sec-wrap .product-links h4").removeClass("active");
                $(".footer-sec-wrap .product-links ul.contact-zoho").parent("div").css({
                    display: "none"
                });
                $(".footer-sec-wrap .product-links ul.security-policy").parent("div").css({
                    display: "none"
                });
                if (productName == "reports" || productName == "analytics") {
                    $(".lang-support").show();
                    $(".lang-support").prev().show()
                }
            }
        }
        $(window).resize(function() {
            if ($(this).width() != f) {
                f = $(this).width();
                g()
            }
        });
        g()
    }
    if ($("body").hasClass("og-context-node-20384") || $("body").hasClass("og-context-node-17577")) {
        if (langArr.indexOf(currentUrlLang) > -1) {
            var j = "<div class='region region-footer'><section id='block-zoho-navigation-links-product-pages-footer-links'><div class='footer-sec-wrap'><div class='content-wrap'><div class='footer-links-wrap'><div class='common-links common-links-js'><ul><li><a href='" + langsrc + "'>" + Drupal.t("Zoho Home") + "</a></li><li><a href=" + langsrc + "contactus.html>" + Drupal.t("Contact Us") + "</a></li><li><a href=" + langsrc + "security.html>" + Drupal.t("Security") + "</a></li> <li><a href=" + langsrc + "ipr-complaints.html>" + Drupal.t("IPR Complaints") + "</a></li><li><a href=" + langsrc + "policy.html>" + Drupal.t("Anti-spam Policy") + "</a></li><li><a href=" + langsrc + "terms.html>" + Drupal.t("Terms of Service") + "</a></li><li><a href=" + langsrc + "privacy.html>" + Drupal.t("Privacy Policy") + "</a></li></ul><p>&copy; " + currentYear + ", " + Drupal.t("Zoho Corporation Pvt. Ltd. All Rights Reserved.") + "</p></div></div></div></section></div>";
            jQuery(".footer-wrapper footer").append(j);
            jQuery(".common-links:before").css("background", "none")
        }
    }
});
var scriptCheck = 0;
var countryCodeArr = countryEu;
function checkIpAppend() {
    for (var d = 0; d < $("script").length; d++) {
        if ($("script").eq(d).attr("src") == "https://www.zoho.com/js/ipcallback.js") {
            scriptCheck++
        }
    }
    if (scriptCheck == 0) {
        EuRedirection()
    }
}
function ipLoaded() {
    clearInterval(ipIntervalTime);
    EuRedirection()
}
function langStrip() {
    var d = CountryCode.toLowerCase();
    (CountryCode.toLowerCase() == "br" || CountryCode.toLowerCase() == "pt") ? (d = "pt-br") : "";
    (CountryCode.toLowerCase() == "vn") ? (d = "vi") : "";
    (CountryCode.toLowerCase() == "sa") ? (d = "ar") : "";
    (CountryCode.toLowerCase() == "ja") ? (d = "jp") : "";
    var n = ["ES", "AR", "BO", "CL", "CO", "EC", "GF", "PY", "PE", "SR", "UY", "VE", "MX"];
    (n.indexOf(CountryCode) > -1) ? (d = "es-xl") : "";
    var j = document.getElementsByTagName("body")[0].getAttribute("data-lang-list");
    if (customvar.lAmerica.indexOf(CountryCode) < 0) {
        if (CountryCode != "FR" && CountryCode != "BR") {
            if (CountryCode != "EG" || currentUrlLang != "ar") {
                if (CountryCode != "SA" || currentUrlLang != "ar") {
                    if (CountryCode != "NL" || currentUrlLang != "nl") {
                        if ((j != null && j != "undefined") || detectedLangNew != "") {
                            if (detectedLangNew == "") {
                                detectedLangNew = document.getElementsByTagName("body")[0].getAttribute("data-lang-list").split(",")
                            }
                            var l = [];
                            for (var f = 0; f < detectedLangNew.length; f++) {
                                if (langArr.indexOf(detectedLangNew[f]) > -1) {
                                    var e = langArr[langArr.indexOf(detectedLangNew[f])];
                                    if (e != "en" && e != "jp") {
                                        l.push(langArr[langArr.indexOf(detectedLangNew[f])])
                                    }
                                }
                            }
                            var h = localStorage.getItem("zloaded") == "1";
                            try {} catch (g) {
                                h = true
                            }
                            if ((l.indexOf(d) > -1 || d == "ae" || d == "sa") && window.location.pathname.split("/")[1] != d && !h) {
                                if (d != "ar" && typeof bannertext[d] != "undefined") {
                                    if (window.location.pathname.indexOf("/in/") < 0) {
                                        if (d == "de") {
                                            $(".ztopstrip-container").append('<div class="langstrip"><span class="langTxt">' + bannertext[d].split(" ::: ")[1] + '!</span><span class="langBtn">' + bannertext[d].split(" ::: ")[0] + '</span><span class="langClose">X</span></div>')
                                        } else {
                                            $(".ztopstrip-container").append('<div class="langstrip"><span class="langTxt">' + bannertext[d].split(" ::: ")[1] + " " + lancountry[d] + '!</span><span class="langBtn">' + bannertext[d].split(" ::: ")[0] + '</span><span class="langClose">X</span></div>')
                                        }
                                        $(".langstrip").css("display", "block");
                                        $(".ztopstrip-container").css("display", "block");
                                        $(".langstrip .langClose").on("click", function() {
                                            try {
                                                $zoho.salesiq.visitor.customaction('{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}')
                                            } catch (p) {}
                                            try {
                                                localStorage.setItem("zloaded", "1")
                                            } catch (o) {
                                                console.log("catch")
                                            }
                                            $(".langstrip").remove()
                                        });
                                        $(".langstrip .langBtn").on("click", function() {
                                            var q = window.location.href;
                                            if (d == "ae" || d == "sa") {
                                                d = "ar"
                                            }
                                            if (currentUrlLang == "") {
                                                q = q.split(window.location.host).join(window.location.host + "/" + d)
                                            } else {
                                                q = q.split("/" + currentUrlLang + "/").join("/" + d + "/")
                                            }
                                            var o = "?";
                                            if (q.indexOf("?") > -1) {
                                                o = "&"
                                            }
                                            window.location = encodeURI(q + o + "lb=" + d);
                                            try {
                                                localStorage.setItem("zloaded", "1")
                                            } catch (p) {}
                                        })
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
var _transtxt = Drupal.t('We\'ve updated our cookie policy. You can find the latest policy <a class="clickere" href="" target="_blank">' + Drupal.t("here") + "</a>.");
function coockieStrip() {
    if (window.location.host == _preZ) {
        if ((global_getUrlParam("ismobilesignup") == "" || productName != "campaigns") && (global_getUrlParam("ismobilesignup") == "" || _lhref.indexOf("privacy.html") < 0)) {
            if ($(".cookiestrip").length < 1) {
                var e = localStorage.getItem("coockiechecked") == "1";
                var p = "otherlangcookie";
                if (countryEu.indexOf(CountryCode) > -1 || domainOne == "eu" || CountryCode == "GB" || CountryCode == "BR") {
                    p = ""
                }
                if (!e) {
                    if (currentUrlLang != "jp") {
                        var l = (window.location.host == "catalyst.zoho.eu") ? ("https://www.zoho.com/privacy/cookie-policy.html") : (langsrc + "privacy/cookie-policy.html");
                        var d = Drupal.t('We\'ve updated our cookie policy. You can find the latest policy <a class="clickere" href="' + l + '" target="_blank">' + Drupal.t("here") + "</a>.");
                        if (p == "") {
                            $("body").prepend('<div class="cookiestrip ' + p + '"><div><span class="cookieTxt">' + d + '</span><a class="cookieManage" href="' + l + '" target="_blank">' + Drupal.t("View & Manage Cookies") + '</a><span class="cookieClose">' + Drupal.t("I Understand") + "</span></div></div>")
                        } else {
                            $("body").prepend('<div class="cookiestrip ' + p + '"><div><span class="cookieTxt">' + d + "</span></div></div>")
                        }
                    } else {
                        var d = Drupal.t("We use cookies to help us understand and serve you better. Take a look at our ") + '<a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html" target="_blank">' + Drupal.t("Cookie Policy") + ".</a>";
                        $("body").prepend('<div class="cookiestrip ' + p + '"><div><span class="cookieTxt">' + d + '</span><a class="cookieManage" href="' + langsrc + 'privacy/cookie-policy.html?src=manage" target="_blank">' + Drupal.t("Manage") + '</a><span class="cookieClose">' + Drupal.t("OK") + "</span></div></div>")
                    }
                    $("body").addClass("zcstrip");
                    $(".cookieClose, .clickere").on("click", function() {
                        try {
                            localStorage.setItem("coockiechecked", "1")
                        } catch (g) {}
                        $("body").removeClass("zcstrip");
                        $(".cookiestrip").remove()
                    })
                }
            }
        }
    } else {
        if ((global_getUrlParam("ismobilesignup") == "" || productName != "campaigns") && (global_getUrlParam("ismobilesignup") == "" || _lhref.indexOf("privacy.html") < 0)) {
            if ($(".cookiestrip").length < 1) {
                var n = localStorage.getItem("coockiechecked") == "1";
                if (!n) {
                    if (currentUrlLang == "") {
                        var f = Drupal.t("We use cookies to help us understand and serve you better.");
                        var o = (window.location.host == "catalyst.zoho.eu") ? ("https://www.zoho.com/privacy/cookie-policy.html") : (langsrc + "privacy/cookie-policy.html");
                        $("body").prepend('<div class="cookiestrip"><div><span class="cookieTxt">' + f + '</span><a class="cookieManage" href="' + o + '" target="_blank">' + Drupal.t("View & Manage Cookies") + '</a><span class="cookieClose">' + Drupal.t("I Understand") + "</span></div></div>")
                    } else {
                        var f = Drupal.t("We use cookies to help us understand and serve you better. Take a look at our ") + '<a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html" target="_blank">' + Drupal.t("Cookie Policy") + ".</a>";
                        $("body").prepend('<div class="cookiestrip"><div><span class="cookieTxt">' + f + '</span><a class="cookieManage" href="' + langsrc + 'privacy/cookie-policy.html?src=manage" target="_blank">' + Drupal.t("Manage") + '</a><span class="cookieClose">' + Drupal.t("OK") + "</span></div></div>")
                    }
                    $("body").addClass("zcstrip");
                    $(".cookieClose").on("click", function() {
                        try {
                            localStorage.setItem("coockiechecked", "1")
                        } catch (g) {}
                        $("body").removeClass("zcstrip");
                        $(".cookiestrip").remove()
                    })
                }
            }
        }
    }
}
function EuRedirection() {
    if (typeof CountryCode != "undefined") {
        if (countryEu.indexOf(CountryCode) > -1) {
            if (!$("body").hasClass("ccode-eucountries")) {
                var d = document.getElementsByTagName("body")[0];
                d.classList.add("ccode-eucountries")
            }
        }
    }
    if ((currentUrlLang != "" && currentUrlLang != "en") || domainOne == "com.cn") {
        if (!$("body").hasClass("other-lang")) {
            var d = document.getElementsByTagName("body")[0];
            d.classList.add("other-lang")
        }
        if (!$("body").hasClass("lang-" + currentUrlLang)) {
            var d = document.getElementsByTagName("body")[0];
            if (domainOne == "com.cn") {
                d.classList.add("lang-zh-hans")
            } else {
                d.classList.add("lang-" + currentUrlLang)
            }
        }
    } else {
        if (!$("body").hasClass("lang-en")) {
            var d = document.getElementsByTagName("body")[0];
            d.classList.add("lang-en")
        }
    }
}
function testimonialHeight() {
    var d, e;
    d = 0;
    $(".z-testimonial-head").removeAttr("style");
    $(".z-testimonial-head").find("h4").each(function() {
        e = $(this).innerHeight();
        if (e > d) {
            d = e
        }
    });
    $(".z-testimonial-head").height(d);
    $(".z-testimonial-head").find("h4").removeAttr("style");
    $(".z-testimonial-head").removeClass("active");
    $(".z-testimonial-head").find("h4").each(function() {
        $(this).height($(this).innerHeight())
    });
    $(".z-testimonial-head").addClass("active")
}
if ($(".z-testimonial-item").length > 1) {
    testimonialHeight()
}
function languageredirect() {
    if (customvar.cnavail.indexOf(productName) > -1 || $("body").hasClass("node-type-zoho-home") || $("body").hasClass("node-type-zoho-home-3-0")) {
        if ($("body").hasClass("node-type-zp-features-home") || window.location.pathname.endsWith(productName + "/") || window.location.pathname.endsWith(productName + "/index.html") || window.location.pathname.indexOf("/pricing.html") > 0 || window.location.pathname.indexOf("comparison") > 0 || $("body").hasClass("node-type-zoho-home") || $("body").hasClass("node-type-zoho-home-3-0")) {
            if (detectedLangNew.indexOf("zh-hans") < 0 && detectedLangNew != "") {
                if (productName != "officeplatform") {
                    detectedLangNew.push("zh-hans")
                }
            }
        }
    }
    if (window.location.hostname.indexOf(".cn") > 0 || currentUrlLang == "zh-hans") {} else {
        if (typeof CountryCode != "undefined") {
            if (domainOne != "in") {
                langStrip()
            }
        }
        if (domainOne != "in") {
            if (typeof $("body").attr("data-lang-list") == "string" || detectedLangNew != "") {
                if (detectedLangNew == "") {
                    detectedLangNew = $("body").attr("data-lang-list").split(",")
                }
                var f = [];
                for (var j = 0; j < langArr.length; j++) {
                    if (detectedLangNew.indexOf(langArr[j]) > -1) {
                        f.push(langArr[j])
                    }
                }
                for (var j = 0; j < locallang.length; j++) {
                    langArr.push(locallang[j])
                }
                if (domainOne == "com") {
                    (detectedLangNew.indexOf("ja") > -1) ? f.push("jp") : ""
                }
                var g = "com"
                  , l = "eu";
                var o = true;
                if (f.length == 1 && f[0] == currentUrlLang) {
                    o = false
                }
                if (f.length == 1 && f[0] == "en") {
                    o = false
                }
                if (f.length > 0 && o) {
                    var h = "English";
                    (currentUrlLang != "") ? (h = lancountry[currentUrlLang]) : "";
                    if (f.indexOf(window.location.pathname.split("/")[1]) < 0) {
                        (f.indexOf("en") > -1) ? f.splice(f.indexOf("en"), 1) : ""
                    } else {
                        f.splice(f.indexOf(window.location.pathname.split("/")[1]), 1)
                    }
                    var e = '<div class="zlang-container"><span class="zlang-text">' + h + '</span><div class="zlang-container-inner" style="display: none;"><ul></ul></div></div>';
                    if ($(".ZF-dlsel").length) {
                        $(".ZF-dlsel").append(e)
                    } else {
                        $(".common-links").append(e)
                    }
                    $(".header .signing").after(e);
                    if (typeof CountryCode != "undefined") {
                        if (countryEu.indexOf(CountryCode) > -1) {
                            $(".zlang-container").addClass("lang-domain-show")
                        }
                    }
                    $(".zgh-localBox ul").html("");
                    if (f.length == 1) {
                        $(".zgh-localBox, .zlang-container-inner").addClass("localBox-single")
                    }
                    for (var j = 0; j < f.length; j++) {
                        if (langArr.indexOf(f[j]) > -1 || (f[j] == "en" && langArr.indexOf(f[j]) < 0) || (f[j] == ".com" && langArr.indexOf(f[j]) < 0) || (f[j] == ".eu" && langArr.indexOf(f[j]) < 0)) {
                            var p = "English";
                            if (langArr.indexOf(f[j]) > -1) {
                                p = lancountry[f[j]]
                            }
                            var d = "";
                            if (f[j] == ".com") {
                                p = "zoho." + g;
                                d = 'class="lang-domain"'
                            } else {
                                if (f[j] == ".eu") {
                                    p = "zoho." + l;
                                    d = 'class="lang-domain"'
                                }
                            }
                            if (p == "zoho." + l || p == "zoho." + g) {
                                d = 'class="lang-domain"'
                            }
                            var n = (f[j] == "zh-hans") ? 'target="_blank"' : "";
                            if (onlylocal.indexOf(f[j]) > -1) {
                                if (window.location.host == _preZ || window.location.host == _zcmsZC) {
                                    if (f[j] == "ar") {
                                        if (($("body").hasClass("node-type-zoho-home") || window.location.href.indexOf("/crm/") > 0 || window.location.href.indexOf("/crmplus/") > 0 || window.location.href.indexOf("/one/") > 0 || window.location.href.indexOf("/people/") > 0 || window.location.href.indexOf("/workplace/") > 0 || window.location.href.indexOf("/mail/") > 0) && (window.location.host == (_preZ) || window.location.host == _zcmsZC)) {
                                            $(".zlang-container-inner ul, .zgh-localBox ul").append("<li " + d + "><a " + n + ' data-lang="' + f[j] + '" href="' + movelocation(f[j]) + '">' + p + "</a></li>")
                                        }
                                    } else {
                                        $(".zlang-container-inner ul, .zgh-localBox ul").append("<li " + d + "><a " + n + ' data-lang="' + f[j] + '" href="' + movelocation(f[j]) + '">' + p + "</a></li>")
                                    }
                                }
                            } else {
                                if ($(".latam-other-lang").length > 0) {
                                    if (j == 0) {
                                        $(".latam-other-lang").append('<div class="zgh-localization"><span class="zgh-localSelect">' + h + '</span> <div class="zgh-localBox"> <ul> </ul> </div> </div>')
                                    }
                                }
                                $(".zlang-container-inner ul, .zgh-localBox ul").append("<li " + d + "><a " + n + ' data-lang="' + f[j] + '" href="' + movelocation(f[j]) + '">' + p + "</a></li>")
                            }
                        }
                    }
                    if ($("body").hasClass("node-type-zoho-home")) {
                        $(".zgh-localization").addClass("init")
                    }
                    $(".zlang-text").show();
                    $(".zlang-container").on("click", function(q) {
                        if (!$(this).children(".zlang-container-inner").hasClass("show")) {
                            $(this).children(".zlang-container-inner").removeClass("hide").addClass("show");
                            $(this).children(".zlang-container-inner").show()
                        } else {
                            $(this).children(".zlang-container-inner").removeClass("show").addClass("hide");
                            $(this).children(".zlang-container-inner").hide()
                        }
                    })
                } else {
                    detectedLangNew = []
                }
            }
        }
        if ($(".ZF-contact .zlang-container").length == 0) {
            $(".ZF-contact ul li").eq(1).hide()
        }
    }
}
$(document).on("mouseover", ".overMe, .zlang-container", function() {
    $(this).children(".zlang-container-inner").show()
});
$(document).on("mouseout", ".overMe, .zlang-container", function() {
    $(this).children(".zlang-container-inner").hide()
});
function movelocation(e) {
    var h = window.location.href;
    var g = "";
    if (e == ".com") {
        var f = "?rdc";
        if (window.location.href.indexOf("?rdc") > -1) {
            f = ""
        }
        g = encodeFun(window.location.origin.split("eu").join("com") + window.location.href.split(window.location.origin)[1] + f)
    } else {
        if (e == ".eu") {
            g = encodeFun(window.location.origin.split("com").join("eu") + window.location.href.split(window.location.origin)[1]);
            if (g.indexOf("?rdc") > 0) {
                g = encodeURI(g.split("?rdc").join(""))
            }
        } else {
            if (langArr.indexOf(window.location.pathname.split("/")[1]) > -1) {
                h = "/" + window.location.href.split("/" + langArr[langArr.indexOf(window.location.pathname.split("/")[1])] + "/")[1]
            } else {
                h = h.split(window.location.host)[1]
            }
            (e == "en") ? (g = encodeFun(window.location.href.split(window.location.pathname)[0] + h)) : (e == "zh-hans") ? (g = "https://www.zoho.com.cn" + h) : (g = encodeFun(window.location.href.split(window.location.pathname)[0] + "/" + e + "" + h));
            if (g.indexOf("?rdc") > 0) {
                g = encodeURI(g.split("?rdc").join(""))
            }
        }
    }
    if (g.indexOf("#") > 0) {
        g = g.split("#")[0]
    }
    if (g.indexOf("zredirect=f") < 0) {
        var d = "?";
        if (g.indexOf("?") > -1) {
            d = "&"
        }
        g = g + d + "zredirect=f&zsrc=langdropdown"
    }
    if (g.indexOf("/in/") > -1) {
        g = g.split("/in/").join("/")
    }
    if (g.indexOf("/au/") > -1) {
        g = g.split("/au/").join("/")
    }
    if (e == "en") {
        g = g + "&lb=" + currentUrlLang
    }
    return encodeURI(g)
}
$(document).ready(function(f) {
    $(".header .logo, .header-part .logo").attr("href", langsrc);
    if (productName == "zohoorchestly" || productName == "bigin" || window.location.host.indexOf("bigin") > 0 || customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
        $(".header .logo, .header-part .logo").attr("href", "https://www.zoho." + domainOne + langsrc)
    }
    function d() {
        if (langArr.indexOf(currentUrlLang) > -1) {
            var V = $("body a");
            for (var ab = 0; ab < V.length; ab++) {
                if (V.eq(ab).attr("href") != "undefined" && V.eq(ab).attr("href") != null && V.eq(ab).attr("href") != "") {
                    var H = (V.eq(ab).attr("href").split("/").indexOf("help") < 0);
                    var M = (V.eq(ab).attr("href").split("/").indexOf("newhelp") < 0);
                    var ad = (V.eq(ab).attr("href").indexOf("/userguide/") < 0);
                    var W = (V.eq(ab).attr("href").indexOf("/resources/") < 0);
                    var A = (V.eq(ab).attr("href").indexOf("/resources.html") < 0);
                    var af = (V.eq(ab).attr("href").indexOf("blog") < 0);
                    var F = window.location.href != "https://www.zoho.com/assist/lp/demo-registration.html?src=pricing-faq";
                    var s = (V.eq(ab).attr("href").indexOf(".pdf") < 0);
                    var D = (V.eq(ab).attr("href").indexOf(".exe") < 0);
                    var Y = (V.eq(ab).attr("href").indexOf("/get-support-plugin.html") < 0);
                    var U = (V.eq(ab).attr("href").indexOf("/demo-registration.html") < 0);
                    var R = (V.eq(ab).attr("href").indexOf("/extension/zoho-assist.xpi") < 0);
                    var j = (V.eq(ab).attr("href").indexOf("/books/") < 0);
                    var ah = (V.eq(ab).attr("href").indexOf("/expense/") < 0);
                    var h = (V.eq(ab).attr("href").indexOf("/invoice/") < 0);
                    var J = (V.eq(ab).attr("href").indexOf("/subscriptions/") < 0);
                    var Q = (V.eq(ab).attr("href").indexOf("/inventory/") < 0);
                    var B = (V.eq(ab).attr("href").indexOf("/checkout/") < 0);
                    var L = (V.eq(ab).attr("href").indexOf("/gst/") < 0);
                    var C = (V.eq(ab).attr("href").indexOf("recruit/referrals.html") < 0);
                    var aj = (V.eq(ab).attr("href").indexOf(".deb") < 0);
                    var ae = (V.eq(ab).attr("href").indexOf("https://www.zoho.com/campaigns/contact-us.html") < 0);
                    var u = (V.eq(ab).attr("href").indexOf("https://www.zoho.com/survey/education-discount.html") < 0);
                    var G = (V.eq(ab).attr("href").indexOf("https://www.zoho.com/developer/signup.html") < 0);
                    var ai = (V.eq(ab).attr("href").indexOf("reports/onpremise/eula.html") < 0);
                    var E = (V.eq(ab).attr("href").indexOf("reports/onpremise/get-quote.html") < 0);
                    var ac = (V.eq(ab).attr("href").indexOf("cliq/developers/terms.html") < 0);
                    var g = (V.eq(ab).attr("href").indexOf("/developer/") < 0);
                    var n = (V.eq(ab).attr("href").indexOf("/creator/request-quote.html") < 0);
                    var w = (V.eq(ab).attr("href").indexOf("/sprints/contact.html") < 0);
                    var o = (V.eq(ab).attr("href").indexOf("/backstage/contact.html") < 0);
                    var r = (V.eq(ab).attr("href").indexOf("https://www.zoho.com/teamdrive/contact.html") < 0);
                    var y = (V.eq(ab).attr("href").indexOf("https://www.zoho.com/workdrive/contact.html") < 0);
                    var P = (V.eq(ab).attr("href").indexOf("webinars.html") < 0);
                    var ag = (V.eq(ab).attr("href").indexOf("analytics/onpremise/get-quote.html") < 0);
                    var p = (V.eq(ab).attr("href").indexOf("/workdrive/contact.html") < 0);
                    var T = true;
                    if (domainOne == "com.cn") {
                        T = false
                    }
                    if (productName == "crm" && (currentUrlLang == "fr" || currentUrlLang == "de" || currentUrlLang == "pt-br" || currentUrlLang == "es-xl")) {
                        H = true;
                        W = true;
                        g = true
                    }
                    var q = (V.eq(ab).attr("href").indexOf(".zip") < 0);
                    var z = (V.eq(ab).attr("href").indexOf("become-a-partner") < 0);
                    var K = (V.eq(ab).attr("href").indexOf("creator/developers/find-a-developer.html") < 0);
                    var N = (V.eq(ab).attr("href").indexOf("campaigns/email-marketing-demo.html") < 0);
                    var I = (V.eq(ab).attr("href").indexOf("marketingautomation/marketing-automation-demo.html") < 0);
                    var v = (V.eq(ab).attr("href").indexOf("sign/legal-guide.html") < 0);
                    var S = (V.eq(ab).attr("href").indexOf("marketingautomation/request-quote.html") < 0);
                    var Z = (V.eq(ab).attr("href").indexOf(".rpm") < 0);
                    var t = (V.eq(ab).attr("href").indexOf("schedule-your-instagram-posts-on-zoho-social.html") < 0);
                    var O = (V.eq(ab).attr("href").indexOf("people/request-quote.html") < 0);
                    var X = (V.eq(ab).attr("href").indexOf("forms/integrations/zoho-campaigns.html") < 0);
                    var e = (!V.eq(ab).hasClass("nonlang"));
                    $(".nonlang").each(function() {
                        $(this).attr({
                            target: "_blank"
                        })
                    });
                    var x = true;
                    if (typeof $("body").attr("site") != "undefined") {
                        if ($("body").attr("site") == "zblogs" || $("body").attr("site") == "zohodblogs") {
                            x = false
                        }
                    }
                    if (H && M && ad && W && A && af && F && s && D && Y && U && R && j && ah && h && J && Q && B && L && C && aj && ae && u && G && ai && E && ac && g && n && w && o && r && P && ag && p && y && T && q && z && K && N && I && v && S && Z && t && O && e && X && x) {
                        if (V.eq(ab).attr("href").split("/")[1] == productName) {
                            var l = encodeURI("/" + currentUrlLang + V.eq(ab).attr("href"));
                            V.eq(ab).attr("href", l)
                        } else {
                            if (V.eq(ab).attr("href").split("/")[2] == "www.zoho.com") {
                                if ((allProductlowerCase.indexOf(V.eq(ab).attr("href").split("/")[3]) > -1)) {
                                    var l = encodeURI("https://www.zoho.com/" + currentUrlLang + V.eq(ab).attr("href").split("www.zoho.com")[1]);
                                    V.eq(ab).attr("href", l)
                                }
                            } else {
                                if (V.eq(ab).attr("href").split("/")[2] == "www.zoho.com") {
                                    if (allProductlowerCase.indexOf(V.eq(ab).attr("href").split("/")[3]) > -1) {
                                        var l = encodeURI("https://www.zoho.com/" + currentUrlLang + V.eq(ab).attr("href").split("www.zoho.com")[1]);
                                        V.eq(ab).attr("href", l)
                                    }
                                } else {
                                    if (window.location.pathname == "/gdpr.html" || window.location.pathname == "/privacy.html" || window.location.pathname == "/terms.html" || window.location.pathname == "/policy.html" || window.location.pathname == "/ipr-complaints.html" || window.location.pathname == "/security.html") {
                                        var l = encodeURI("https://www.zoho.com/" + currentUrlLang + V.eq(ab).attr("href").split("www.zoho.com")[1]);
                                        V.eq(ab).attr("href", l)
                                    } else {
                                        if (V.eq(ab).attr("href") == "/privacy.html" || V.eq(ab).attr("href") == "/security.html") {
                                            var l = encodeURI("/" + currentUrlLang + V.eq(ab).attr("href"));
                                            V.eq(ab).attr("href", l)
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (V.eq(ab).attr("href").indexOf("help/") > -1 || V.eq(ab).attr("href").indexOf("blog") > -1) {
                        if (currentUrlLang != "jp") {
                            V.eq(ab).attr("target", "_blank")
                        }
                        if (V.eq(ab).attr("href").split("/" + currentUrlLang + "/") > -1) {
                            var l = encodeURI(V.eq(ab).attr("href").split.split("/" + currentUrlLang + "/").join("/"));
                            V.eq(ab).attr("href", l)
                        }
                    }
                }
            }
        }
    }
    d()
});
var intervalCount = 0;
function CheckelEment() {
    var d = setTimeout(function() {
        if ($(".zgdprform-countrylist-container").length > 0) {
            var e = document.createElement("script");
            e.type = "text/javascript";
            if (window.location.host == _preZ) {
                e.src = "https://" + _preZ + "/sites/all/themes/zoho/scripts/gdpr-compliance.js"
            } else {
                e.src = "https://www.zoho.com/sites/all/themes/zoho/scripts/gdpr-compliance.js"
            }
            document.getElementsByTagName("head")[0].appendChild(e);
            clearInterval(d)
        } else {
            intervalCount++;
            if (intervalCount < 50) {
                CheckelEment()
            }
        }
    }, 500)
}
var intervalSignupCount = 0;
$(document).on("focus", ".globalcountrycode-signup", function() {
    $(".za-country-container").addClass("added-placeholder")
});
$(document).on("blur", ".globalcountrycode-signup", function() {
    $(".za-country-container").removeClass("added-placeholder")
});
function CheckelEmentSignup() {
    var d = setTimeout(function() {
        if ($(".signup-box form").length > 0) {
            if ($(".za-captcha-container").length > 0) {
                if ($(".za-country-container").length < 1) {
                    $(".za-captcha-container").after('<div class="za-country-container za-country-container-arrow"> <select class="form-input countryCnt za-country-select globalcountrycode-signup" name="country" id="country" placeholder="Select Country" aria-invalid="false"></select> </div>')
                }
                if ($(".za-newsletter-container").length > 0) {
                    $(".za-newsletter-container").html('<label for="newsletter" class="news-signup sign_agree"> <input tabindex="1" class="za-newsletter" type="checkbox" id="newsletter" name="newsletter" value="true" onclick="toggleNewsletterField()"> <span class="icon-medium" id="signup-newsletter"></span> <span>' + _txtIwould + "</span> </label>");
                    $(".za-newsletter-container").css("display", "none");
                    if (window.location.href.indexOf("mdm-cloud.html") > 0 && window.location.host == _preZ) {
                        $(".za-newsletter-container").addClass("zshow");
                        $(".icon-medium").addClass("checked")
                    }
                }
            }
            if ($(".za-country-container").length > 0) {
                if ($(".za-country-container .placeholder").length < 1) {
                    $(".za-country-container").prepend('<span class="placeholder">' + Drupal.t("Country/Region") + "</span>")
                }
            }
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.src = "https://www.zoho.com/sites/all/themes/zoho/scripts/gdpr-compliance-signup.js";
            if (window.location.host == _preZ) {
                e.src = "https://" + _preZ + "/sites/all/themes/zoho/scripts/gdpr-compliance-signup.js"
            }
            document.getElementsByTagName("head")[0].appendChild(e);
            clearInterval(d)
        } else {
            intervalSignupCount++;
            if (intervalSignupCount < 500) {
                CheckelEmentSignup()
            }
        }
    }, 1)
}
$(document).ready(function() {
    if (typeof CheckelEment == "function") {
        CheckelEment()
    }
    if (typeof CheckelEmentSignup == "function") {
        CheckelEmentSignup()
    }
});
$(document).on("click", ".umain .cta-btn.logged-in, .userinfo-details .userinfo-access", function(d) {
    if ($(this).attr("href").indexOf("_ga")) {
        d.preventDefault();
        window.location = $(this).attr("href").split("?_ga")[0]
    }
});
function dropEqualHei() {
    var e = $(window).width();
    if (e > 767) {
        $(".dropdown ul").css({
            height: "",
            width: ""
        });
        var d = $(".dropdown");
        d.each(function() {
            var l = $(this);
            var j = 0
              , f = l.find(".sub-dropdown");
            f.each(function() {
                var p = $(this);
                p.find("> li > a").each(function() {
                    var q = $(this);
                    if (q.innerWidth() > j) {
                        j = q.innerWidth()
                    }
                })
            });
            f.css({
                width: j
            });
            var h = 0
              , n = l.find(".dropdown-menu");
            n.each(function() {
                var p = $(this);
                var q = 0;
                p.find("> li > a").each(function() {
                    var r = $(this);
                    if (r.innerWidth() > q) {
                        q = r.innerWidth()
                    }
                });
                p.css({
                    width: q
                });
                h = $(this).outerHeight()
            });
            var o = 0
              , g = l.find("ul");
            g.each(function() {
                var p = $(this);
                if (p.height() > o) {
                    o = p.height()
                }
            });
            l.find("ul").not(".dropdown-menu").css({
                "min-height": h
            })
        })
    } else {
        $(".dropdown ul").css({
            height: "",
            width: ""
        })
    }
    dropRight()
}
function dropRight() {
    var d = $(window).width();
    if (d > 767) {
        var f = $(".dropdown-menu")
          , e = $(".sub-dropdown");
        f.each(function() {
            var h = $(this);
            var g = (d - (h.offset().left + h.outerWidth()));
            if (g < 20) {
                h.closest(".dropdown").addClass("dropdown-right")
            }
        });
        e.each(function() {
            var h = $(this);
            var g = (d - (h.offset().left + h.outerWidth()));
            if (g < 20) {
                h.closest(".dropdown").addClass("subdropdown-right")
            }
        })
    }
}
function productMenuEvents() {
    var e = $(window).outerWidth();
    if (e > 767) {
        $(".dropdown,.hamburger-box").removeClass("active");
        $(".dropdown-menu").removeAttr("style");
        $(document).off("touchstart click", ".dropdown > a,.dropdown > span");
        if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
            var f = (function() {
                if ("ontouchstart"in document.documentElement === true) {
                    return "touchstart"
                } else {
                    return "click"
                }
            }
            )();
            $(document).on("click", ".dropdown > span,.dropdown > a", function(h) {
                h.stopPropagation();
                var g = $(this);
                if (!g.parent().hasClass("active")) {
                    $(".dropdown,.dropdown-menu li,.sub-dropdown").removeClass("active");
                    $(".sub-dropdown li").removeAttr("style");
                    g.parent().addClass("active");
                    dropRight()
                } else {
                    $(".dropdown,.dropdown-menu li,.sub-dropdown").removeClass("active");
                    $(".sub-dropdown li").removeAttr("style")
                }
                return false
            })
        } else {
            $(document).on("mouseenter", ".dropdown", function(h) {
                dropEqualHei();
                h.stopPropagation();
                var g = $(this);
                g.addClass("active");
                dropRight()
            });
            $(document).on("mouseleave", ".dropdown", function(h) {
                h.stopPropagation();
                var g = $(this);
                g.removeClass("active");
                $(".dropdown-menu li,.sub-dropdown").removeClass("active");
                $(".sub-dropdown li").removeAttr("style")
            })
        }
        var d = 0;
        $(document).on("mouseenter touchstart", ".dropdown-menu > li", function(h) {
            h.stopPropagation();
            var g = $(this);
            $(".dropdown-menu li,.sub-dropdown").removeClass("active");
            $(".sub-dropdown li").removeAttr("style");
            g.addClass("active");
            g.find(".sub-dropdown").addClass("active");
            g.find(".sub-dropdown li").each(function() {
                var j = $(this);
                j.css("transition-delay", d + "ms");
                d = d + 100
            });
            d = 0
        });
        $("body").on(f, function(h) {
            var g = $(".dropdown");
            if (!g.is(h.target) && g.has(h.target).length === 0) {
                $(".dropdown,.dropdown-menu li,.sub-dropdown").removeClass("active");
                $(".sub-dropdown li").removeAttr("style")
            }
        })
    } else {
        $(document).off("mouseenter", ".dropdown");
        $(document).off("mouseleave", ".dropdown");
        $(document).off("mouseenter touchstart", ".dropdown-menu > li");
        $(".dropdown,.hamburger-box").removeClass("active");
        $(".dropdown-menu,.sub-dropdown").removeAttr("style")
    }
}
$(document).ready(function() {
    $(".mobile-menu-icon").on("click", function() {
        var d = $(this);
        if (d.find(".hamburger-box").hasClass("active")) {
            d.find(".hamburger-box").removeClass("active");
            $(".dropdown").removeClass("active");
            $(".dropdown-menu").removeAttr("style")
        } else {
            d.find(".hamburger-box").addClass("active")
        }
        if ($(this).attr("data-click") == "zhb-click-track") {
            window.pagesense = window.pagesense || [];
            window.pagesense.push(["trackEvent", "menu-click"])
        }
    });
    $(".mobile-menu-icon").append('<span class="hamburger-box"><span></span><span></span><span></span><span></span><span></span><span></span></span>');
    productMenuEvents()
});
var mobileWidth = $(window).innerWidth();
$(window).on("resize", function() {
    dropEqualHei();
    if ($(window).innerWidth() != mobileWidth) {
        productMenuEvents();
        mobileWidth = $(window).innerWidth()
    }
});
$(window).on("load", function() {
    dropEqualHei();
    dropRight()
});
function checkIE() {
    if (navigator.appName == "Microsoft Internet Explorer" || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
        $("body").addClass("IE")
    }
}
var vidDataUrl = "";
$(document).on("click", ".vimvideo", function(f) {
    if (!$(this).hasClass("play-video")) {
        $(".zvim-model").remove();
        $("body").prepend('<div class="zvim-model"><a href="javascript:;" class="zvim-video-close"><svg class="icon-close-new" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M8.001 9.416l6.437 6.437a.497.497 0 0 0 .713-.001l.7-.7a.503.503 0 0 0 .002-.714L9.416 8.001l6.437-6.436a.497.497 0 0 0-.001-.713l-.7-.7a.503.503 0 0 0-.714-.002L8.001 6.587 1.565.15a.497.497 0 0 0-.713.001l-.7.7a.503.503 0 0 0-.002.714L6.587 8 .15 14.438a.497.497 0 0 0 .001.713l.7.7a.503.503 0 0 0 .714.002L8 9.416z"></path></svg></a><div class="zc-video-modalInner"><div class="zc-video-container"><div class="zc-video-box zvim-zc-video-box"></div></div></div></div>');
        $(".zvim-model").show();
        $(".zvim-model").fadeIn();
        var g = $(this).data("video");
        vidDataUrl = "";
        if (typeof $(this).data("shareurl") != "undefined") {
            vidDataUrl = $(this).data("shareurl").split("embed/")[1]
        }
        var d = ((g.indexOf("?") > 0) ? "&" : "?") + ((g.indexOf("autopause=1") > 0) ? "" : "autopause=1&") + ((g.indexOf("dnt=1") > 0) ? "" : "dnt=1&") + ((g.indexOf("autoplay=1") > 0) ? "" : "autoplay=1") + '"width="3840"height="2160"frameborder="0"allow="autoplay;fullscreen;picture-in-picture"allowfullscreentitle="1-video.mp4';
        $(".zvim-zc-video-box").append('<iframe src="' + g + d + '" class="zc-video-iframe"></iframe><div class="zvim-share-icon"><div class="zvim-share-button" title="Share"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159.35 197.17" class="share-icon"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M152.53,118.26a6.81,6.81,0,0,0-6.81,6.82v40.51a18,18,0,0,1-17.94,17.94H31.58a18,18,0,0,1-17.95-17.94V69.39A18,18,0,0,1,31.58,51.45h94.85L97.64,80.63a6.81,6.81,0,0,0,4.85,11.6,6.75,6.75,0,0,0,4.85-2l40.8-41.34a6.81,6.81,0,0,0-.26-9.82L107.09,1.78a6.82,6.82,0,0,0-9.2,10.07l28.44,26H31.58A31.62,31.62,0,0,0,0,69.39v96.2a31.62,31.62,0,0,0,31.58,31.58h96.2a31.61,31.61,0,0,0,31.57-31.58V125.08A6.82,6.82,0,0,0,152.53,118.26Z" fill="#fff"></path></g></g></svg> </svg></div></div><div class="zvim-popup-share-overlay-wrapper"><div class="zvim-overlay-bg"></div><div class="zvim-popup-share-overlay-cell"> <section class="zvim-popup-share-section"><ul class="zvim-share-list"><li class="zvim-share-list-item"> <a class="zvim-share-twitter" href="https://twitter.com/intent/tweet?url=https://youtube.com/watch?v=' + vidDataUrl + '" rel="noopener" target="_blank" role="button"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs></defs><path fill="#1da1f2" d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path></svg> </a></li><li class="zvim-share-list-item"> <a class="zvim-share-facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://youtube.com/watch?v=' + vidDataUrl + '" rel="noopener" target="_blank" role="button"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><path fill="#0a66c2" d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"></path></svg> </a></li><li class="zvim-share-list-item"> <a class="zvim-share-linkedin" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A//youtu.be/' + vidDataUrl + '" target="_blank" rel="noopener" role="button"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><path fill="#1877f2" d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909C5.763 1.291 4.472 0 2.882 0z"></path></svg> </a></li></ul> </section></div><div class="zvim-share-close"> <svg class="icon-close-new" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M8.001 9.416l6.437 6.437a.497.497 0 0 0 .713-.001l.7-.7a.503.503 0 0 0 .002-.714L9.416 8.001l6.437-6.436a.497.497 0 0 0-.001-.713l-.7-.7a.503.503 0 0 0-.714-.002L8.001 6.587 1.565.15a.497.497 0 0 0-.713.001l-.7.7a.503.503 0 0 0-.002.714L6.587 8 .15 14.438a.497.497 0 0 0 .001.713l.7.7a.503.503 0 0 0 .714.002L8 9.416z"></path></svg> </button></div>');
        if (vidDataUrl == "") {
            $(".zvim-share-icon").addClass("hidden")
        }
    }
});
$(document).on("click", ".zvim-model, .zvim-zc-video-box, .zvim-share-button, .zvim-share-close, .zvim-share-list-item", function(f) {
    f.stopPropagation();
    if ($(this).attr("class") == "zvim-model") {
        $(".zvim-model").remove()
    } else {
        if ($(this).attr("class") == "zvim-share-button") {
            $(".zvim-popup-share-overlay-wrapper").addClass("active");
            $(".zvim-share-icon").addClass("hidden")
        } else {
            if ($(this).attr("class") == "zvim-share-close") {
                $(".zvim-popup-share-overlay-wrapper").removeClass("active");
                $(".zvim-share-icon").removeClass("hidden")
            } else {
                if ($(this).attr("class") == "zvim-share-list-item") {
                    var d = $(this).find("a").attr("href");
                    window.open(d + vidDataUrl, "Share Zoho", "height=500,width=800,resizable=1")
                }
            }
        }
    }
});
$(document).on("click", ".nonvimvideo", function(f) {
    f.stopPropagation();
    if (typeof $(this).attr("data-iframe") != "undefined" || typeof $(this).attr("data-video") != "undefined") {
        $("body").prepend('<div class="zc-video-modal"><a href="javascript:;" class="zc-video-close"></a><div class="zc-video-modalInner"><div class="zc-video-container"><div class="zc-video-box"><div id="muteYouTubeVideoPlayer" class="zc-video-iframe"></div></div></div></div></div>');
        var d = (typeof $(this).attr("data-video") != "undefined") ? $(this).attr("data-video") : $(this).attr("data-iframe");
        $(".zc-video-modal").fadeIn();
        $(".zc-video-box").append('<iframe src="' + d + '" frameborder="0" allowfullscreen="" class="zc-video-iframe"></iframe>');
        $(".zc-video-modal").addClass("zc-iframe-box");
        $("body").addClass("zclock")
    }
});
function nonvimvidClose() {
    $(".zc-video-modal").remove();
    $("body").removeClass("zclock");
    $(".zc-video-iframe").remove();
    $(".zc-video-modal").removeClass("click-out zc-iframe-box zc-media-box")
}
$(document).on("click", ".zc-video-close", function() {
    nonvimvidClose()
});
$(document).on("click", ".click-out", function() {
    nonvimvidClose()
});
$(document).keyup(function(d) {
    if (d.keyCode == 27) {
        $(".zvim-model").remove();
        $("body").removeClass("vimactive");
        if ($(".zc-video-modal").length > 0) {
            nonvimvidClose()
        }
    }
});
$(document).keyup(function(d) {
    if (d.keyCode == 27) {
        $(".vim-model, .zvim-model").remove()
    }
});
function onYouTubeIframeAPIReady() {
    var d = 0;
    $(document).off("click", ".zcpopup-controller, .popup-controller");
    $(document).on("click", ".zcpopup-controller, .popup-controller", function(j) {
        if ($(this).hasClass("vimvideo")) {
            return false
        }
        j.stopPropagation();
        $(".aavideo").removeClass("fistplay");
        $(this).addClass("fistplay");
        if (typeof $(this).attr("data-iframe") != "undefined" || ($(this).parent().hasClass("zwatch-cta") && productName == "showtime") || _lhref.indexOf("customers-v9.html") > 0) {
            $("body").prepend('<div class="zc-video-modal"><a href="javascript:;" class="zc-video-close"></a><div class="zc-video-modalInner"><div class="zc-video-container"><div class="zc-video-box"><div id="muteYouTubeVideoPlayer" class="zc-video-iframe"></div></div></div></div></div>');
            var g, q = "";
            if (typeof $(this).attr("data-video") != "undefined") {
                g = $(this).attr("data-video")
            } else {
                g = $(this).attr("data-iframe")
            }
            $(".zc-video-modal").fadeIn();
            if (_lhref.indexOf("customers-v9.html") > 0) {
                var o = $(this).attr("data-video").split("embed/")[1];
                p = new YT.Player("muteYouTubeVideoPlayer",{
                    videoId: o,
                    width: 560,
                    height: 316,
                    host: "https://www.youtube-nocookie.com",
                    playerVars: {
                        autoplay: 0,
                        controls: 1,
                        showinfo: 0,
                        modestbranding: 1,
                        loop: 1,
                        fs: 0,
                        cc_load_policy: 0,
                        iv_load_policy: 3,
                        autohide: 0,
                        valume: 100
                    },
                    events: {
                        onReady: function(r) {
                            r.target.playVideo()
                        }
                    }
                })
            } else {
                $(".zc-video-box .zc-video-iframe").remove();
                $(".zc-video-box").append('<iframe src="' + g + '" frameborder="0" allowfullscreen="" class="zc-video-iframe"></iframe>')
            }
            $(".zc-video-modal").addClass("zc-iframe-box");
            $("body").addClass("zclock");
            function f() {
                $(".zc-video-modal").remove();
                $("body").removeClass("zclock");
                $(".zc-video-iframe").remove();
                $(".zc-video-modal").removeClass("click-out zc-iframe-box zc-media-box")
            }
            $(document).on("click", ".zc-video-close", function() {
                f()
            });
            $(document).on("click", ".click-out", function() {
                f()
            });
            $(document).keyup(function(r) {
                if (r.keyCode === 27) {
                    f()
                }
            })
        } else {}
        if (_lhref.indexOf("customers-v9.html") < 0 && d == 0) {
            var p = []
              , h = 0
              , l = 0
              , n = 0;
            $(".zcpopup-controller, .popup-controller").each(function(e) {
                if (typeof $(this).attr("data-video") != "undefined") {
                    if ($(this).attr("data-video").indexOf("www.youtube.com") > 0 || $(this).attr("data-video").indexOf("www.youtube-nocookie.com") > 0) {
                        $(this).attr("setindex", e);
                        if ($(this).hasClass("fistplay")) {
                            n = e
                        }
                        $(this).addClass("aavideo");
                        $("body").prepend('<div class="zc-video-modal setindex-' + e + '"><a href="javascript:;" class="zc-video-close"></a><div class="zc-video-modalInner"><div class="zc-video-container"><div class="zc-video-box"><div id="muteYouTubeVideoPlayer-' + e + '" class="zc-video-iframe"></div></div></div></div></div>');
                        var r = $(this).attr("data-video").split("embed/")[1];
                        p[e] = e;
                        p[e] = new YT.Player("muteYouTubeVideoPlayer-" + e,{
                            videoId: r,
                            host: "https://www.youtube-nocookie.com",
                            width: 560,
                            height: 316,
                            playerVars: {
                                autoplay: 0,
                                controls: 1,
                                showinfo: 0,
                                modestbranding: 1,
                                loop: 1,
                                fs: 0,
                                cc_load_policy: 0,
                                iv_load_policy: 3,
                                autohide: 0,
                                valume: 100
                            },
                            events: {
                                onReady: function(s) {
                                    if ($(s.target.h).attr("id") == ("muteYouTubeVideoPlayer-" + n)) {
                                        s.target.playVideo()
                                    }
                                }
                            }
                        });
                        if (l == 0) {
                            setTimeout(function() {
                                $("body").addClass("zclock");
                                $(".zc-video-modal.setindex-" + n).show();
                                h = n
                            }, 300)
                        }
                        if (l == 0) {
                            l = 1;
                            $(document).on("click", ".aavideo", function(s) {
                                s.stopPropagation();
                                var t = $(this).attr("setindex");
                                h = t;
                                if (typeof p[t].playVideo != "undefined") {
                                    p[t].playVideo();
                                    setTimeout(function() {
                                        $(".zc-video-modal").hide();
                                        $("body").addClass("zclock");
                                        $(".zc-video-modal.setindex-" + t + "").show();
                                        clickiedme = 1
                                    }, 200)
                                }
                            });
                            $(document).on("click", ".zc-video-modal", function(s) {
                                s.stopPropagation();
                                p[h].seekTo(0);
                                p[h].pauseVideo();
                                $("body").removeClass("zclock");
                                $(".zc-video-modal").hide()
                            });
                            $(document).keyup(function(s) {
                                s.stopPropagation();
                                if (s.keyCode === 27) {
                                    p[h].seekTo(0);
                                    p[h].pauseVideo();
                                    $("body").removeClass("zclock");
                                    $(".zc-video-modal").hide()
                                }
                            })
                        }
                    }
                }
            })
        }
    })
}
if (currentUrlLang == "jp" && customvar.productName == "desk") {
    if ($(".zcpopup-controller").length > 0) {
        var vs = document.createElement("script");
        vs.type = "text/javascript";
        vs.src = "https://www.youtube.com/iframe_api";
        $("body").append(vs)
    }
} else {
    var vs = document.createElement("script");
    vs.type = "text/javascript";
    vs.src = "https://www.youtube.com/iframe_api";
    $("body").append(vs)
}
$(window).scroll(function() {});
$(window).resize(customvar.debouncer(function(d) {}));
$(window).on("load", function() {
    if ($(".zc-video-modal").length == 0) {
        if (window.location.host != _preZ) {}
    }
});
$(document).ready(function(d) {
    checkIE();
    if (window.location.host != _preZ) {}
});
if (!$("body").hasClass("node-type-zoho-home") && !$("body").hasClass("node-type-zoho-home-3-0")) {
    var excludeitarr = ["nila", "qntrl", "vanihq"];
    if (!excludeitarr.includes(customvar.productName)) {
        var zchf = document.createElement("script");
        if (predomain) {
            if (_lhref.indexOf("/mail/deployment/") > 0) {
                zchf.src = "/sites/all/themes/zoho/scripts/zc-headerfooter-test.js"
            } else {
                zchf.src = "/sites/all/themes/zoho/scripts/zc-headerfooter.js"
            }
        } else {
            zchf.src = "https://www.zohowebstatic.com/sites/all/themes/zoho/scripts/zc-headerfooter.js"
        }
        document.getElementsByTagName("head")[0].appendChild(zchf)
    }
}
if ($(".zoholics-global-container").length > 0) {
    var zoholics_global = document.createElement("script");
    if (predomain) {
        zoholics_global.src = "/sites/all/themes/zoho/scripts/zoholics-banner.js"
    } else {
        zoholics_global.src = "https://www.zohowebstatic.com/sites/all/themes/zoho/scripts/zoholics-banner.js"
    }
    document.getElementsByTagName("head")[0].appendChild(zoholics_global)
}
if ($(".zpricegroup-common").length > 0 || $(".zpricegroup-common-sl").length > 0) {
    var zcprice = document.createElement("script");
    if (predomain) {
        zcprice.src = "/sites/all/themes/zoho/scripts/zc-pricing.js"
    } else {
        zcprice.src = "https://www.zohowebstatic.com/sites/all/themes/zoho/scripts/zc-pricing.js"
    }
    document.getElementsByTagName("head")[0].appendChild(zcprice)
}
var zcScrExist = false;
function zcPriInit(f) {
    if (!document.getElementById("zc-script-pricing")) {
        var d = document.createElement("script");
        if (getDomain == _preZ || getDomain == _preZC || getDomain == _zcmsZC) {
            d.src = "/sites/all/themes/zoho/scripts/zc-dynamic-pricing.js"
        } else {
            d.src = "https://www.zohowebstatic.com/sites/all/themes/zoho/scripts/zc-dynamic-pricing.js"
        }
        d.setAttribute("id", "zc-script-pricing");
        d.addEventListener("load", f);
        document.getElementsByTagName("head")[0].appendChild(d)
    } else {
        if (typeof zpSetPricingInfo !== "undefined" || typeof zpSetPricingInfo === "function") {
            f()
        } else {
            var e = setInterval(function() {
                if (typeof zpSetPricingInfo !== "undefined" || typeof zpSetPricingInfo === "function") {
                    clearInterval(e);
                    f()
                }
            }, 100)
        }
    }
}
if (currentUrlLang == "nl" || currentUrlLang == "fr" || currentUrlLang == "de") {
    var transjs = document.createElement("script");
    if (predomain) {
        transjs.src = "/sites/all/themes/zoho/scripts/transfeedback.js"
    } else {
        transjs.src = "https://www.zohowebstatic.com/sites/all/themes/zoho/scripts/transfeedback.js"
    }
    document.getElementsByTagName("head")[0].appendChild(transjs);
    var transcss = document.createElement("link");
    transcss.rel = "stylesheet";
    transcss.type = "text/css";
    if (predomain) {
        transcss.href = "/sites/all/themes/zoho/css/transfeedback.css"
    } else {
        transcss.href = "https://www.zohowebstatic.com/sites/all/themes/zoho/css/transfeedback.css"
    }
    document.getElementsByTagName("head")[0].appendChild(transcss)
}
customvar.singlescroll = false;
customvar.sscount = 0;
customvar.maxcount = 5;
if (window.location.hostname == _preZ) {
    $("body").on("mousewheel DOMMouseScroll", function(d) {
        if ($("body").attr("scrolled") != "1" && customvar.singlescroll) {
            if (typeof d.originalEvent.detail == "number" && d.originalEvent.detail !== 0) {
                if (d.originalEvent.detail > 0) {
                    customvar.sscount++
                } else {
                    if (d.originalEvent.detail < 0) {
                        customvar.sscount--
                    }
                }
            } else {
                if (typeof d.originalEvent.wheelDelta == "number") {
                    if (d.originalEvent.wheelDelta < 0) {
                        customvar.sscount++
                    } else {
                        if (d.originalEvent.wheelDelta > 0) {
                            customvar.sscount--
                        }
                    }
                }
            }
            (customvar.sscount < 0) ? customvar.sscount = 0 : "";
            (customvar.sscount > customvar.maxcount) ? customvar.sscount = customvar.maxcount : "";
            $("body").attr("scrolled", "1");
            setTimeout(function() {
                $("body").attr("scrolled", "0")
            }, 2000)
        }
    })
}
$(document).on("click", ".zaccordion h4", function() {
    if (!$(this).hasClass("zin")) {
        $(".zaccordion ul").slideUp()
    }
    if ($(this).hasClass("zin")) {
        $(".zaccordion .zin").next("ul").slideUp()
    }
    $(this).siblings("ul").slideDown()
});
var fromSearch = global_getUrlParam("zgs");
jQuery(document).ready(function() {
    if (fromSearch != "" && fromSearch == 1 && $("body").hasClass("node-type-just-html")) {
        $("a[href]").attr({
            target: "_blank",
            rel: "noopener"
        });
        var d = $("#block-system-main").clone();
        $("body").html(d)
    }
});
function getLazSrc(j, h, g, e, f, d) {
    if (typeof j.attr("data-screen") !== typeof undefined && j.attr("data-screen") !== false) {
        var l = j.attr("data-screen").split(",");
        if (l.length == 1) {
            if (h >= l[0]) {
                if (g == 1) {
                    setLazImgSrc(j, 1, e, f, d)
                } else {
                    if (g == 2) {
                        setLazVidSrc(j, d, 1)
                    } else {
                        setLazImgSrc(j, 0, e, f, d)
                    }
                }
            }
        } else {
            if (h >= l[0] && h <= l[1]) {
                if (g == 1) {
                    setLazImgSrc(j, 1, e, f, d)
                } else {
                    if (g == 2) {
                        setLazVidSrc(j, d, 1)
                    } else {
                        setLazImgSrc(j, 0, e, f, d)
                    }
                }
            }
        }
    } else {
        if (g == 1) {
            setLazImgSrc(j, 1, e, f, d)
        } else {
            if (g == 2) {
                setLazVidSrc(j, d, 1)
            } else {
                setLazImgSrc(j, 0, e, f, d)
            }
        }
    }
}
function setLazImgSrc(h, g, e, f, d) {
    if (g == 1) {
        e.each(function() {
            var j = $(this);
            if (typeof j.attr("data-srcset") !== typeof undefined && j.attr("data-srcset") !== false) {
                j.attr("srcset", j.attr("data-srcset"));
                j.removeAttr("data-srcset")
            }
        })
    }
    if (typeof f !== typeof undefined && f !== false) {
        h.attr("srcset", f);
        h.removeAttr("data-srcset")
    }
    if (typeof d !== typeof undefined && d !== false) {
        h.attr("src", d);
        h.removeAttr("data-src");
        h.addClass("data-loaded")
    }
}
function setLazVidSrc(f, d, e) {
    if (typeof d !== typeof undefined && d !== false) {
        if (e == 1) {
            f.attr("poster", d)
        } else {
            f.attr("src", d)
        }
        f.removeAttr("data-src");
        f.addClass("data-loaded")
    }
}
function imgLazy(g, d, f, h) {
    var e = $("[data-lazy]");
    e.each(function(o) {
        var p = $(this);
        objIsHid = p.attr("data-lazy");
        thatObjOff = p.offset().top;
        if (thatObjOff >= 1 || objIsHid == "true") {
            if ((h == 1 && thatObjOff <= (f.height() * 2)) || (h == 0 && d + (f.height() * 2) >= thatObjOff)) {
                if (!p.hasClass("data-loaded")) {
                    var l = p.closest("picture").find("source");
                    var n = p.attr("data-srcset");
                    var j = p.attr("data-src");
                    if (p.parent().is("picture")) {
                        getLazSrc(p, g, 1, l, n, j)
                    } else {
                        if (p.is("img")) {
                            getLazSrc(p, g, 0, l, n, j)
                        } else {
                            if (p.is("video")) {
                                getLazSrc(p, g, 2, l, n, j)
                            } else {
                                if (p.is("iframe")) {
                                    setLazVidSrc(p, j, 0)
                                } else {
                                    if (typeof j !== typeof undefined && j !== false) {
                                        p.css("background-image", "url(" + j + ")");
                                        p.removeAttr("data-src");
                                        p.addClass("data-loaded")
                                    } else {
                                        p.addClass("data-loaded")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
}
wD = $(window);
$(document).ready(function() {
    wW = wD.outerWidth();
    imgLazy(wW, 0, wD, 1)
});
wD.resize(function() {
    wW = wD.outerWidth();
    wS = wD.scrollTop();
    imgLazy(wW, wS, wD, 0)
});
wD.scroll(function() {
    wW = wD.outerWidth();
    wS = wD.scrollTop();
    imgLazy(wW, wS, wD, 0)
});
if (currentUrlLang == "" || currentUrlLang == "jp") {
    if (customvar.browser == "ie" || customvar.browser == "IE") {
        var supportText = Drupal.t("This browser is no longer supported and some functionality may not work. Switch to another browser for the best Zoho experience.");
        $("body").append('<div class="br-ns-overlay"></div><div class="br-ns-outer"><div class="br-ns-contianer"><p>' + supportText + '</p><span class="br-ns-close"></span></div></div><div class="br-ns-fixed"><div class="br-ns-contianer"><p>' + supportText + '</p><span class="br-ns-close"></span></div></div>');
        $(".br-ns-overlay, .br-ns-close").on("click", function() {
            $(".br-ns-overlay, .br-ns-outer").hide()
        })
    }
}
var defColLineCount = 10;
if (getDomain != "www.zoho.com" && getDomain != "www.zoho.com.cn") {
    if (window.location.search.indexOf("hrLines") > 0) {
        $(document).keydown(function(d) {
            var f = $(".zwe-hrLine-box");
            if (d.keyCode == 27) {
                if (f.is(":visible")) {
                    f.css("display", "none")
                } else {
                    f.css("display", "grid")
                }
            }
        });
        $("head").append('<style type="text/css">.zwe-hrLine-box{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;background:rgb(0,0,0,.4);z-index:9999;display:grid;pointer-events:none}.zwe-hrLine-inner{counter-reset:counter 0;display:grid}.zwe-hrLine-box span{display:grid;align-content:end;position:relative;border-style:solid;border-color:#fff;border-width:1px 1px 0 1px}.zwe-hrLine-box span:last-child{border-bottom-width:1px}.zwe-hrLine-box span:after{counter-increment:counter 1;content:counter(counter);display:inline-block;font-size:10px;font-family:var(--primaryfont-bold);color:#fff;position:absolute;left:-1px;bottom:-8px;background:#000;width:25px;height:15px;padding:0 0 0 2px;z-index:99}.zwe-hrLine-box span:first-child:before{content:"0";position:absolute;left:-1px;top:-8px;font-size:10px;font-family:var(--primaryfont-bold);color:#fff;background:#000;width:25px;height:15px;padding:0 0 0 2px;z-index:99}.zwe-hrLine-inner .zwe-hrLine-bottom,.zwe-hrLine-inner .zwe-hrLine-middle,.zwe-hrLine-inner .zwe-hrLine-static,.zwe-hrLine-inner .zwe-hrLine-top{position:absolute;right:0;min-height:1px;border-bottom:1px solid #fff;width:100%}.zwe-hrLine-inner .zwe-hrLine-bottom:before,.zwe-hrLine-inner .zwe-hrLine-middle:before,.zwe-hrLine-inner .zwe-hrLine-static:before,.zwe-hrLine-inner .zwe-hrLine-top:before{display:inline-block;font-size:10px;font-family:var(--primaryfont-bold);color:#fff;position:absolute;top:-6px;right:0;background:#000;height:15px;padding:0 0 0 2px;z-index:99}.zwe-hrLine-inner .zwe-hrLine-top:before{content:"Top";width:22px}.zwe-hrLine-inner .zwe-hrLine-middle:before{content:"Middle";width:38px}.zwe-hrLine-inner .zwe-hrLine-bottom:before{content:"Bottom";width:40px}.zwe-hrLine-inner .zwe-hrLine-static:before{content:"Position";width:43px;left:0;right:inherit;padding:0 0 0 2px}</style>');
        $("body").append('<div class="zwe-hrLine-box"><div class="zwe-hrLine-inner"></div></div>');
        colLineCount = window.location.search.slice(9);
        if (colLineCount.split("/").length == 2) {
            if (colLineCount.split("/")[1] == "top" || colLineCount.split("/")[1] == "bottom") {
                $(".zwe-hrLine-inner").append('<div class="zwe-hrLine-static"></div>')
            }
        } else {
            if (colLineCount >= 1 && colLineCount <= 100) {
                for (a = 1; a <= colLineCount; a++) {
                    $(".zwe-hrLine-inner").append("<span></span>")
                }
            }
        }
        $(".zwe-hrLine-inner").append('<div class="zwe-hrLine-top"></div><div class="zwe-hrLine-middle"></div><div class="zwe-hrLine-bottom"></div>')
    }
}
function zScrollOnPos(d, e) {
    if (d.is("video")) {
        if (!d.hasClass("zwe-op")) {
            if (typeof e !== typeof undefined && e !== false) {
                setTimeout(function() {
                    d.addClass("zwe-v-delay");
                    d.get(0).muted = true;
                    d.get(0).play()
                }, e)
            } else {
                d.get(0).muted = true;
                d.get(0).play()
            }
        }
    }
    d.addClass("zwe-op")
}
function zElmOnScroll(l, e, o, q) {
    if (getDomain != "www.zoho.com" && getDomain != "www.zoho.com.cn") {
        if (window.location.search.indexOf("hrLines") > 0) {
            colLineCount = window.location.search.slice(9);
            $(".zwe-hrLine-inner .zwe-hrLine-top").css("top", e / 3 / 2 * 1);
            $(".zwe-hrLine-inner .zwe-hrLine-middle").css("top", e / 3 / 2 * 3);
            $(".zwe-hrLine-inner .zwe-hrLine-bottom").css("top", e / 3 / 2 * 5);
            if (colLineCount.split("/").length == 2) {
                if (colLineCount.split("/")[1] == "top") {
                    $(".zwe-hrLine-inner .zwe-hrLine-static").css("top", Number(colLineCount.split("/")[0]))
                } else {
                    if (colLineCount.split("/")[1] == "bottom") {
                        $(".zwe-hrLine-inner .zwe-hrLine-static").css("top", e - Number(colLineCount.split("/")[0]))
                    }
                }
            }
        }
    }
    if (zAnimElm.length) {
        var j = o + e;
        for (a = 0; a < zAnimElm.length; a++) {
            var h = $(zAnimElm[a])
              , p = h.attr("data-onscroll")
              , d = h.attr("data-delay")
              , g = h.height()
              , f = h.offset().top
              , n = f + g;
            if (f >= 1) {
                if ((q == 1 && n >= o - 50 && f <= j + 50) || (q == 0 && n >= o - 150 && f <= j + 50)) {
                    if (q == 1 || (q == 0 && o + (e / 3 / 2 * 1) >= f)) {
                        h.addClass("zwe-ot")
                    }
                    if (q == 1 || (q == 0 && o + (e / 3 / 2 * 3) >= f)) {
                        h.addClass("zwe-om")
                    }
                    if (q == 1 || (q == 0 && o + (e / 3 / 2 * 5) >= f)) {
                        h.addClass("zwe-ob")
                    }
                    if (p != "") {
                        if (p.length <= 2 && p <= defColLineCount) {
                            if ((q == 1) || (q == 0 && o + (e / defColLineCount * p) >= f)) {
                                zScrollOnPos(h, d)
                            }
                        } else {
                            if (p.length >= 3 && (p.endsWith("top") || p.endsWith("bottom"))) {
                                zElmOffset = Number(p.split("/")[0]);
                                zElmOffsetPostion = p.split("/")[1];
                                if (zElmOffsetPostion == "top") {
                                    if ((q == 1) || (q == 0 && (o + zElmOffset >= f))) {
                                        zScrollOnPos(h, d)
                                    }
                                } else {
                                    if ((q == 1) || (q == 0 && (j - zElmOffset >= f))) {
                                        zScrollOnPos(h, d)
                                    }
                                }
                            } else {
                                if (p.length >= 3 && !p.startsWith("{") && !p.endsWith("}") && !p.endsWith("top") && !p.endsWith("bottom")) {
                                    zElmOffsetRow = Number(p.split("/")[0]);
                                    zElmOffsetTotalRow = Number(p.split("/")[1]);
                                    if ((q == 1) || (q == 0 && o + (e / zElmOffsetTotalRow * zElmOffsetRow) >= f)) {
                                        zScrollOnPos(h, d)
                                    }
                                } else {
                                    if (p.startsWith("{") && p.endsWith("}")) {
                                        p = p.split("{").join("").split("}").join("");
                                        for (b = 0; b < p.split(",").length; b++) {
                                            zElmOffsetRes = p.split(",")[b].split(":")[0];
                                            zElmOffsetRow = p.split(",")[b].split(":")[1];
                                            if (zElmOffsetRow.split("/").length == 2) {
                                                zElmOffsetRows = Number(zElmOffsetRow.split("/")[0]);
                                                zElmOffsetTotalRows = zElmOffsetRow.split("/")[1];
                                                if (zElmOffsetRes.split("-").length == 1) {
                                                    if (zElmOffsetTotalRows == "top" || zElmOffsetTotalRows == "bottom") {
                                                        if (zElmOffsetTotalRows == "top") {
                                                            if ((l >= zElmOffsetRes.split("-")[0]) && (q == 1 || (q == 0 && (o + zElmOffsetRows >= f)))) {
                                                                zScrollOnPos(h, d)
                                                            }
                                                        } else {
                                                            if ((l >= zElmOffsetRes.split("-")[0]) && (q == 1 || (q == 0 && (j - zElmOffsetRows >= f)))) {
                                                                zScrollOnPos(h, d)
                                                            }
                                                        }
                                                    } else {
                                                        if ((l >= zElmOffsetRes.split("-")[0]) && (q == 1 || (q == 0 && o + (e / Number(zElmOffsetTotalRows) * zElmOffsetRows) >= f))) {
                                                            zScrollOnPos(h, d)
                                                        }
                                                    }
                                                } else {
                                                    if (zElmOffsetTotalRows == "top" || zElmOffsetTotalRows == "bottom") {
                                                        if (zElmOffsetTotalRows == "top") {
                                                            if ((l >= zElmOffsetRes.split("-")[0] && l <= zElmOffsetRes.split("-")[1]) && (q == 1 || (q == 0 && (o + zElmOffsetRows >= f)))) {
                                                                zScrollOnPos(h, d)
                                                            }
                                                        } else {
                                                            if ((l >= zElmOffsetRes.split("-")[0] && l <= zElmOffsetRes.split("-")[1]) && (q == 1 || (q == 0 && (j - zElmOffsetRows >= f)))) {
                                                                zScrollOnPos(h, d)
                                                            }
                                                        }
                                                    } else {
                                                        if ((l >= zElmOffsetRes.split("-")[0] && l <= zElmOffsetRes.split("-")[1]) && (q == 1 || (q == 0 && o + (e / Number(zElmOffsetTotalRows) * zElmOffsetRows) >= f))) {
                                                            zScrollOnPos(h, d)
                                                        }
                                                    }
                                                }
                                            } else {
                                                if (zElmOffsetRes.split("-").length == 1) {
                                                    if ((l >= zElmOffsetRes.split("-")[0]) && (q == 1 || (q == 0 && o + (e / defColLineCount * zElmOffsetRow) >= f))) {
                                                        zScrollOnPos(h, d)
                                                    }
                                                } else {
                                                    if ((l >= zElmOffsetRes.split("-")[0] && l <= zElmOffsetRes.split("-")[1]) && (q == 1 || (q == 0 && o + (e / defColLineCount * zElmOffsetRow) >= f))) {
                                                        zScrollOnPos(h, d)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
var zAnimElm = $("[data-onscroll]");
zElScW = $(window);
$(document).ready(function() {
    zElScwW = zElScW.outerWidth();
    zElScwH = zElScW.outerHeight();
    zElScwS = zElScW.scrollTop();
    zElmOnScroll(zElScwW, zElScwH, zElScwS, 1)
});
zElScW.resize(function() {
    zElScwW = zElScW.outerWidth();
    zElScwH = zElScW.outerHeight();
    zElScwS = zElScW.scrollTop();
    zElmOnScroll(zElScwW, zElScwH, zElScwS, 0)
});
zElScW.scroll(function() {
    zElScwW = zElScW.outerWidth();
    zElScwH = zElScW.outerHeight();
    zElScwS = zElScW.scrollTop();
    zElmOnScroll(zElScwW, zElScwH, zElScwS, 0)
});
function zElmOnTrigger() {
    zElScwW = zElScW.outerWidth();
    zElScwH = zElScW.outerHeight();
    zElScwS = zElScW.scrollTop();
    zElmOnScroll(zElScwW, zElScwH, zElScwS, 0)
}
;
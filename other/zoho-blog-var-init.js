var _lhref = window.location.href;
Currentdate = new Date();
Currentdate.setTime(Currentdate.getTime() + (180 * 24 * 60 * 60 * 1000));
var checkurl = (_lhref.indexOf("'") > -1 || _lhref.indexOf("<") > -1 || _lhref.indexOf(">") > -1 || _lhref.indexOf('"') > -1);
if (checkurl) {
    window.location = _lhref.replace(/'/g, "%27").replace(/"/g, "%22").replace(/</g, "%3C").replace(/>/g, "%3E")
}
(function() {
    var d = ["en", "es-xl", "pt-br", "de", "fr", "nl", "jp", "ar", "id", "th"];
    var c = "";
    function b() {
        var e = "";
        d.forEach(function(f) {
            if (window.location.href.split("/").indexOf(f) > -1) {
                e = f
            }
        });
        c = e
    }
    b();
    if (c != "") {
        var a = setInterval(function() {
            if (document.getElementsByTagName("body").length > 0) {
                var e = document.getElementsByTagName("body")[0];
                e.classList.add("other-lang");
                clearInterval(a)
            }
        }, 10)
    }
}
)();
var RegionName, IPAddress;
var CountryName = "United States";
var CountryCode = "US";
function ipcallbk_getUrlParam(b) {
    var d = {}
      , a = "";
    var c = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(e, f, g) {
        d[f] = g;
        if (f == b) {
            a = g
        }
    });
    return a
}
if (ipcallbk_getUrlParam("ismobilesignup") != "") {
    var intr = setInterval(function() {
        if (document.getElementsByTagName("body").length > 0) {
            var a = document.getElementsByTagName("body")[0];
            a.classList.add("ismobileapp");
            clearInterval(intr)
        }
    }, 10)
}
var ipIntervalTime;
var checkIPcookie = false;
function ipcallbk_getCookie(d) {
    var b = d + "=";
    var f = decodeURIComponent(document.cookie);
    var a = f.split(";");
    for (var e = 0; e < a.length; e++) {
        var g = a[e];
        while (g.charAt(0) == " ") {
            g = g.substring(1)
        }
        if (g.indexOf(b) == 0) {
            return g.substring(b.length, g.length)
        }
    }
    return ""
}
function afterIPloadded() {
    if (ipcallbk_getUrlParam("autoCC") != "") {
        var b = ipcallbk_getUrlParam("autoCC");
        if (b.length == 2) {
            CountryCode = b;
            CountryName = b;
            IPAddress = "1.2.3.4"
        }
    }
    var a = setInterval(function() {
        if (document.getElementsByTagName("body").length > 0) {
            var c = document.getElementsByTagName("body")[0];
            c.classList.add("ccode-" + CountryCode.toLowerCase());
            clearInterval(a)
        }
    }, 10);
    ipIntervalTime = setInterval(function() {
        if (typeof EuRedirection != "undefined") {
            ipLoaded()
        }
    }, 100)
}
function ipCallBack(a) {
    if (checkIPcookie == false) {
        checkIPcookie = true;
        CountryCode = a.COUNTRY_CODE;
        CountryName = a.COUNTRY_NAME;
        RegionName = a.REGION.replace("_", " ");
        if (typeof a.IP_ADDRESS != "undefined") {
            IPAddress = a.IP_ADDRESS
        }
        afterIPloadded()
    }
}
if (ipcallbk_getCookie("zip") != "") {
    checkIPcookie = true;
    zip_split = ipcallbk_getCookie("zip").split("|");
    CountryName = zip_split[2];
    RegionName = zip_split[3].replace("_", " ");
    CountryCode = zip_split[1];
    IPAddress = zip_split[0];
    afterIPloadded()
} else {
    afterIPloadded()
}
var euCountries = ["RS", "VA", "GB", "UA", "CH", "SE", "ES", "SI", "SK", "SM", "RO", "PT", "PL", "NO", "NL", "ME", "MC", "MD", "MT", "MK", "LU", "LT", "LI", "LV", "IT", "IM", "IE", "IS", "HU", "GR", "GI", "DE", "FR", "FI", "FO", "EE", "DK", "CZ", "CY", "HR", "BG", "BA", "BE", "BY", "AT", "AD", "AL", "AX", "GG", "JE", "XK", "SJ", "CS", "UK", "TR", "GE"];
function californiaCheck() {
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
var lso_zglobal_Acookie_optOut = localStorage.getItem("zglobal_Acookie_optOut");
if (lso_zglobal_Acookie_optOut == null || lso_zglobal_Acookie_optOut == "-1" || lso_zglobal_Acookie_optOut == "-2") {
    if (euCountries.indexOf(CountryCode) > -1) {
        localStorage.setItem("zglobal_Acookie_optOut", -1)
    } else {
        if (californiaCheck() || CountryCode == "JP" || CountryCode == "BR") {
            localStorage.setItem("zglobal_Acookie_optOut", -2)
        } else {
            localStorage.removeItem("zglobal_Acookie_optOut")
        }
    }
} else {
    if (lso_zglobal_Acookie_optOut == "true") {
        localStorage.setItem("zglobal_Acookie_optOut", 2)
    } else {
        if (lso_zglobal_Acookie_optOut == "false") {
            localStorage.setItem("zglobal_Acookie_optOut", 0)
        }
    }
}
;
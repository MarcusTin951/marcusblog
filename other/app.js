var $EventManager = window.$EventManager || {};
$EventManager.verifyEventLayer = function() {
    window.siq_layer = window.siq_layer || []
}
,
$EventManager.isEventExists = function() {
    return this.verifyEventLayer(),
    0 < window.siq_layer.length
}
,
$EventManager.fetchEvents = function() {
    this.verifyEventLayer();
    var t = window.siq_layer;
    return window.siq_layer = [],
    t
}
,
$EventManager.notifyClicked = function() {
    $UTSConnector.util.net.trackEvent({
        opr: "action",
        type: "1"
    })
}
,
$EventManager.notifyTriggered = function() {
    $UTSConnector.util.net.trackEvent({
        opr: "action",
        type: "7"
    })
}
,
$EventManager.infoUpdate = function(t, n, e, o, a) {
    var i = t ? {
        opr: "updateguessinfo"
    } : {
        opr: "updateinfo"
    };
    n && (i.name = n),
    e && (i.email = e),
    o && (i.phone = o),
    a && (i.cinfo = a),
    $UTSConnector.util.net.trackEvent(i)
}
,
$EventManager.notifyNavigation = function(t, n, e) {
    var o = {
        opr: "nav"
    }
      , a = {};
    t && (a.cpage = t),
    n && (a.ptitle = n),
    e && (a.referer = e),
    o.navdata = a,
    $UTSConnector.util.net.trackEvent(o)
}
,
$EventManager.updateStatus = function(t) {
    $UTSConnector.util.net.trackEvent({
        opr: "status",
        status: t
    })
}
,
$EventManager.notifyCustomAction = function(t, n) {
    var e = {};
    e.field = t,
    e.value = n || {};
    var o = {}
      , a = $UTSConnector.util.net.getNavigationObj(window, void 0);
    o.cpage = a.current_page,
    o.ptitle = a.page_title,
    o.lsid = o.lsid,
    $UTSConnector.util.net.trackEvent({
        opr: "customaction",
        action: e,
        navdata: o
    })
}
;
try {
    var $zoho = window.$zoho || {};
    $zoho.salesiq = $zoho.salesiq || {},
    $zoho.salesiq.visitor = $zoho.salesiq.visitor || {},
    $zoho.salesiq.tracking = $zoho.salesiq.tracking || {},
    $zoho.salesiq.utsvalues = $zoho.salesiq.utsvalues || {},
    $zoho.salesiq.visitor.customaction = $zoho.salesiq.visitor.customaction || function(t, n) {
        $EventManager.notifyCustomAction(t, n)
    }
    ,
    $zoho.salesiq.tracking.domain = $zoho.salesiq.tracking.domain || function(t) {
        var n = window.location.hostname;
        t && -1 !== n.indexOf(t, n.length - t.length) && ($zoho.salesiq.utsvalues.trackingdomain = t)
    }
    ,
    $zoho.salesiq.tracking.eqaulHosts = $zoho.salesiq.tracking.eqaulHosts || function(t) {
        if (!t)
            return $zoho.salesiq.utsvalues.equalhosts;
        var n = t.split(",");
        $zoho.salesiq.utsvalues.equalhosts || ($zoho.salesiq.utsvalues.equalhosts = []);
        for (var e = 0; e < n.length; e++) {
            var o = n[e].trim();
            $zoho.salesiq.utsvalues.equalhosts.push(o)
        }
        return $zoho.salesiq.utsvalues.equalhosts
    }
} catch (t) {}
var $DBUtil = {
    backupStore: {},
    storeInCookie: function(e) {
        var t = e.value
          , i = e.ttl
          , o = e.key
          , r = new Date;
        i = i || 864e5,
        r.setTime(r.getTime() + i);
        var n = o + "= " + t + ";expires= " + r.toGMTString();
        n += ";path=/";
        try {
            var a = e.domain;
            n += a ? ";domain=" + a : ""
        } catch (e) {
            $UTSConnector && $UTSConnector.util.net.doLog("exception while setting cookie - " + e)
        }
        document.cookie = n
    },
    getFromCookie: function(e) {
        var t = e.key;
        t += "=";
        var i = document.cookie.indexOf(t)
          , o = "";
        return -1 !== i && -1 !== (o = document.cookie.substr(i + t.length)).indexOf(";") && (o = o.substring(0, o.indexOf(";"))),
        o
    },
    removeCookie: function(e) {
        e.ttl = -1e3,
        e.value = "",
        this.storeInCookie(e)
    },
    isStorageAvailable: function(t) {
        try {
            var e = window[t.type];
            return !!e && (e.setItem("quota_test", "1"),
            e.removeItem("quota_test"),
            !0)
        } catch (e) {
            $UTSConnector && $UTSConnector.util.net.doLog("exception while checking " + t.type + " availability - " + e)
        }
        return !1
    },
    getFromStorage: function(e) {
        if (!this.isStorageAvailable(e))
            return this.backupStore[e.key];
        var t = e.key
          , i = window[e.type]
          , o = $JSONUtil.parseToJSON(i.utsdb || "{}")
          , r = o[t];
        return r ? r.ttl && r.ttl + r.time < (new Date).getTime() ? (delete o[t],
        i.utsdb = $JSONUtil.stringify(o),
        null) : "sessionStorage" == e.type ? o[t] : r[t] : null
    },
    storeInStorage: function(e) {
        if (!this.isStorageAvailable(e))
            return this.backupStore[e.key] = e.value,
            !1;
        var t = e.key
          , i = window[e.type]
          , o = $JSONUtil.parseToJSON(i.utsdb || "{}");
        if ("sessionStorage" == e.type)
            o[t] = e.value;
        else {
            var r = {};
            r[t] = e.value;
            var n = e.ttl;
            n && (r.ttl = n,
            r.time = (new Date).getTime()),
            o[t] = r
        }
        return i.utsdb = $JSONUtil.stringify(o),
        !0
    },
    removeFromStorage: function(e) {
        if (!this.isStorageAvailable(e))
            return delete this.backupStore[e.key],
            !1;
        var t = e.key
          , i = window[e.type]
          , o = $JSONUtil.parseToJSON(i.utsdb || "{}");
        return delete o[t],
        i.utsdb = $JSONUtil.stringify(o),
        !0
    }
};
var $ZSIQDOMUtil = {
    addEvent: function(t, n, a) {
        t.attachEvent ? t.attachEvent("on" + n, a) : t.addEventListener(n, a, !0)
    }
};
var $JSONUtil = window.$JSONUtil || function() {}
;
$JSONUtil.stringify = function(t) {
    try {
        return Object.toJSON ? Object.toJSON(t) : JSON.stringify(t)
    } catch (t) {}
}
,
$JSONUtil.parseToJSON = function(r) {
    try {
        if ("object" == typeof r)
            return r;
        r = JSON.parse(r)
    } catch (t) {
        r = $.parseJSON(r)
    }
    return r
}
;
!function(n) {
    var i = function(n, i) {
        this.init(n, i)
    }
      , o = i.prototype;
    o.init = function(n, i) {
        this.cur_con_type = i;
        var o = n.ConnectionManager.CON_ID;
        i == o.WS ? this.cur_con_obj = new WebSocketObj : i == o.CORS && (this.cur_con_obj = new CORSObj),
        this.bind_timer && this.disableAutoBind(),
        this.bind_timer = null
    }
    ,
    o.onOpen = function(n, i) {
        return this.cur_con_obj.onOpen(n)
    }
    ,
    o.onMessage = function(n, i) {
        return this.cur_con_obj.onMessage(n)
    }
    ,
    o.sendMessage = function(n, i, o) {
        return this.cur_con_obj.sendMessage(n, i, o)
    }
    ,
    o.onBind = function(n) {
        return this.cur_con_obj.onBind(n)
    }
    ,
    o.onClose = function(n, i) {
        return this.cur_con_obj.onClose(n)
    }
    ,
    o.onError = function(n, i) {
        return this.cur_con_obj.onError(n, i)
    }
    ,
    o.connect = function(n) {
        var i = n.ConnectionManager;
        if (i.checkSupport(i.getCurrentConnectionType())) {
            var o = i.getEndpointURL(n)
              , t = i.getQueryParam(n);
            this.cur_con_obj.connect(n, o, t)
        } else
            i.doFallback()
    }
    ,
    o.disable = function(n, i) {
        return this.cur_con_obj.disable(n, i)
    }
    ,
    o.reconnect = function(n, i) {
        this.cur_con_obj.disable(n, i),
        n.ConnectionManager.connect()
    }
    ,
    o.enableAutoBind = function(n, i) {
        var o = i || 3e4;
        this.disableAutoBind(n),
        this.bind_timer = setInterval(function() {
            n.ConnectionManager.doPing(n)
        }, o)
    }
    ,
    o.disableAutoBind = function(n) {
        clearInterval(this.bind_timer)
    }
    ,
    o.doPing = function(n) {
        return this.cur_con_obj.doPing(n)
    }
    ,
    o.getConnectionUniqueID = function() {
        this.cur_con_obj.getConnectionUniqueID()
    }
    ,
    o.setInitialised = function() {
        this.cur_con_obj.setInitialised()
    }
    ,
    o.setUninitialised = function() {
        this.cur_con_obj.setUninitialised()
    }
    ,
    o.isInitialised = function() {
        return this.cur_con_obj.isInitialised()
    }
    ,
    n.Connection = i
}(window);
!function(n) {
    var i = function() {
        this.init()
    }
      , t = i.prototype;
    t.init = function() {
        this.STATUS = {
            ENABLE: 1,
            DISABLE: 0
        },
        this.CON_ID = {
            WS: "ws",
            CORS: "cors"
        },
        this.connection_type = [this.CON_ID.WS, this.CON_ID.CORS],
        this.setAvailablityMap(),
        this.cur_con_type = 0,
        this.cur_con_obj = null,
        this.enable_log = !1
    }
    ,
    t.setAvailablityMap = function() {
        if (this.availability_map = {},
        "WebSocket"in window && void 0 !== window.WebSocket || "MozWebSocket"in window) {
            var n = (t = navigator.userAgent,
            e = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+[^\s|\$]+)/i) || [],
            /trident/i.test(e[1]) ? "IE " + ((i = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === e[1] && null != (i = t.match(/\b(OPR|Edge)\/(\d+)/)) ? i.slice(1).join(" ").replace("OPR", "Opera") : (e = e[2] ? [e[1], e[2]] : [navigator.appName, navigator.appVersion, "-?"],
            null != (i = t.match(/[v|V]ersion\/(\d+[^\s|\$]+)/i)) && e.splice(1, 1, i[1]),
            e.join(" ")));
            this.availability_map[this.CON_ID.WS] = /ios 10.1/i.test(n) ? this.STATUS.DISABLE : this.STATUS.ENABLE,
            navigator.userAgent.match(/Lumia.*/) && (this.availability_map[this.CON_ID.WS] = this.STATUS.DISABLE),
            "undefined" != typeof WebSocket && !1 in WebSocket.prototype && (this.availability_map[this.CON_ID.WS] = this.STATUS.DISABLE)
        } else
            this.availability_map[this.CON_ID.WS] = this.STATUS.DISABLE;
        var i, t, e;
        this.availability_map[this.CON_ID.CORS] = "withCredentials"in new XMLHttpRequest || window.XDomainRequest ? this.STATUS.ENABLE : this.STATUS.DISABLE
    }
    ,
    t.enableLogging = function() {
        this.enable_log = !0
    }
    ,
    t.disableLogging = function() {
        this.enable_log = !1
    }
    ,
    t.isLogEnabled = function() {
        return this.enable_log
    }
    ,
    t.setInitialised = function() {
        this.cur_con_obj.setInitialised()
    }
    ,
    t.setUninitialised = function() {
        this.cur_con_obj.setUninitialised()
    }
    ,
    t.isInitialised = function() {
        return this.cur_con_obj.isInitialised()
    }
    ,
    t.getCurrentConnectionType = function() {
        return this.connection_type[this.cur_con_type]
    }
    ,
    t.connect = function() {
        this.cur_con_obj ? this.cur_con_obj.init({
            ConnectionManager: this
        }, this.getCurrentConnectionType()) : this.cur_con_obj = new Connection({
            ConnectionManager: this
        },this.getCurrentConnectionType()),
        this.cur_con_obj.connect({
            ConnectionManager: this
        })
    }
    ,
    t.disable = function(n) {
        this.cur_con_obj.disable({
            ConnectionManager: this
        }, n)
    }
    ,
    t.terminate = function(n) {
        this.cur_con_obj.disable({
            ConnectionManager: this
        }, n)
    }
    ,
    t.reconnect = function() {
        this.cur_con_obj.reconnect({
            ConnectionManager: this
        }, 0)
    }
    ,
    t.enableAutoBind = function(n) {
        this.cur_con_obj.enableAutoBind({
            ConnectionManager: this
        }, n)
    }
    ,
    t.disableAutoBind = function(n) {
        this.cur_con_obj.disableAutoBind({
            ConnectionManager: this
        }, n)
    }
    ,
    t.doPing = function(n) {
        this.cur_con_obj.doPing({
            ConnectionManager: this
        })
    }
    ,
    t.checkSupport = function(n) {
        return this.availability_map[n] == this.STATUS.ENABLE
    }
    ,
    t.getAvailableConnectionType = function() {
        var n = {};
        for (var i in this.connection_type)
            n[this.connection_type[i]] = i;
        return n
    }
    ,
    t.isConnectionTypeAvailable = function() {
        for (var n in this.getAvailableConnectionType())
            if (n)
                return !0;
        return !1
    }
    ,
    t.getConnectionUniqueID = function() {
        return this.cur_con_obj.getConnectionUniqueID()
    }
    ,
    t.sendMessage = function(n, i, t) {
        return this.cur_con_obj.sendMessage(n, i, t)
    }
    ,
    t.connectionEstablishFail = function(n) {
        this.isLogEnabled() && console.log("default_implementation called")
    }
    ,
    t.getEndpointURL = function(n) {
        this.isLogEnabled() && console.log("default_implementation called")
    }
    ,
    t.getQueryParam = function(n) {
        this.isLogEnabled() && console.log("default_implementation called")
    }
    ,
    t.getBindURLForCORS = function(n) {}
    ,
    t.getBindParamFORCORS = function(n) {}
    ,
    t.onOpen = function(n, i) {}
    ,
    t.onMessage = function(n, i) {}
    ,
    t.onClose = function(n, i) {}
    ,
    t.onError = function(n, i) {}
    ,
    t.overrideConnectionOrder = function() {}
    ,
    t.onBind = function(n, i) {
        return this.cur_con_obj.onBind(n, i)
    }
    ,
    t.doFallback = function(n) {
        this.cur_con_type++,
        this.cur_con_type >= this.connection_type.length && (this.cur_con_type = 0),
        this.connect()
    }
    ,
    n.ConnectionManager = i
}(window);
!function(n) {
    var e = function() {
        this.connection_id = null,
        this.setUninitialised(),
        this.reqobjs = []
    }
      , t = e.prototype;
    t.onOpen = function(n, e) {}
    ,
    t.onMessage = function(n, e) {}
    ,
    t.sendMessage = function(n, e, t) {
        var i, o, a, s, r, c;
        this._WEBSOCK;
        i = function(n, e, t) {
            t.sendReq(n, n.ConnectionManager.getBindURLForCORS(n), n.ConnectionManager.getBindParamFORCORS(n) + "&data=" + encodeURIComponent(e))
        }
        ,
        o = 1e3,
        a = this,
        s = n,
        r = e,
        !(c = t) || c && s.ConnectionManager.isInitialised() ? i(s, r, a) : c && setTimeout(function() {
            s.ConnectionManager.sendMessage(s, r, c)
        }, o)
    }
    ,
    t.onBind = function(n) {}
    ,
    t.onClose = function(n, e) {}
    ,
    t.onError = function(n, e) {}
    ,
    t.ajax = function(n) {
        var e = new XMLHttpRequest
          , t = n.type || "GET"
          , i = n.async || !0
          , o = n.onSuccess || function() {}
          , a = n.onFailure || function() {}
          , s = n.url
          , r = n.options || {};
        return "withCredentials"in e ? (e.open(t, s, i),
        e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"),
        (r.ajaxreq = e).onreadystatechange = function() {
            4 === e.readyState && (200 === e.status ? o(r) : a(r))
        }
        ) : "undefined" != typeof XDomainRequest && ((e = new XDomainRequest).open("GET", s),
        (r.ajaxreq = e).onprogress = function() {}
        ,
        e.ontimeout = function() {}
        ,
        e.onload = function() {
            o(r)
        }
        ,
        e.onerror = function() {
            a(r)
        }
        ),
        setTimeout(function() {
            e.send(n.qp)
        }, 0),
        e
    }
    ,
    t.sendReq = function(n, e, t) {
        this.connection_id = (new Date).getTime(),
        this.last_event_time = this.connection_id;
        var i = {
            url: e,
            qp: t,
            type: "POST",
            onSuccess: function(n) {
                n.evtstarttime;
                var e = n.ajaxreq.responseText
                  , t = n.framework_obj
                  , i = t.ConnectionManager;
                i.onOpen(t),
                i.onMessage(t, {
                    data: e
                })
            },
            onFailure: function(n) {
                n.that.reqobjs[0] && n.that.reqobjs[0].abort();
                var e = n.framework_obj
                  , t = e.ConnectionManager;
                t.onError(e, n),
                t.onClose(e, n)
            },
            options: {
                that: this,
                evtstarttime: this.last_event_time,
                framework_obj: n
            }
        }
          , o = this.ajax(i);
        this.reqobjs[0] = this.reqobjs[1],
        this.reqobjs[1] = o
    }
    ,
    t.connect = function(n, e, t) {
        this.sendReq(n, e, t)
    }
    ,
    t.disable = function(n, e) {
        n.ConnectionManager.disableAutoBind(n)
    }
    ,
    t.doPing = function(n) {
        var e = n.ConnectionManager
          , t = e.getBindURLForCORS(n)
          , i = e.getBindParamFORCORS(n);
        this.sendReq(n, t, i)
    }
    ,
    t.getConnectionUniqueID = function() {
        return this.connection_id
    }
    ,
    t.setInitialised = function() {
        this.initialized = !0
    }
    ,
    t.setUninitialised = function() {
        this.initialized = !1
    }
    ,
    t.isInitialised = function() {
        return this.initialized
    }
    ,
    n.CORSObj = e
}(window);
!function(n) {
    var i = function() {
        this.connection_id = null,
        this._WEBSOCK = {},
        this.readystate = {
            CONNECTING: 0,
            OPEN: 1,
            CLOSING: 2,
            CLOSED: 3
        },
        this.setUninitialised()
    }
      , o = i.prototype;
    o.onOpen = function(n, i) {}
    ,
    o.onMessage = function(n, i) {}
    ,
    o.sendMessage = function(n, i, o) {
        var e, t, s, a, r, c;
        this._WEBSOCK;
        e = function(n, i, o) {
            o.send(i)
        }
        ,
        t = 1e3,
        a = n,
        r = i,
        c = o,
        (s = this)._WEBSOCK.readyState === s.readystate.OPEN && (!c || c && a.ConnectionManager.isInitialised()) ? e(a, r, s._WEBSOCK) : c && setTimeout(function() {
            a.ConnectionManager.sendMessage(a, r, c)
        }, t)
    }
    ,
    o.onBind = function(n) {}
    ,
    o.onClose = function(n, i) {}
    ,
    o.onError = function(n, i) {}
    ,
    o.connect = function(i, n, o) {
        var e, t = n;
        o && (t += "?" + o);
        try {
            "WebSocket"in window && void 0 !== window.WebSocket ? e = new WebSocket(t) : "MozWebSocket"in window && (e = new MozWebSocket(t))
        } catch (n) {
            return void i.ConnectionManager.connectionEstablishFail(i)
        }
        e.id = this.connection_id = (new Date).getTime(),
        e.framework_obj = i,
        e.onopen = function(n) {
            this.framework_obj.ConnectionManager.onOpen(this.framework_obj, n)
        }
        ,
        e.onclose = function(n) {
            this.id === this.framework_obj.ConnectionManager.getConnectionUniqueID() && this.framework_obj.ConnectionManager.onClose(this.framework_obj, n)
        }
        ,
        e.onerror = function(n) {
            this.framework_obj.ConnectionManager.onError(this.framework_obj, n)
        }
        ,
        e.onmessage = function(n) {
            this.framework_obj.ConnectionManager.onMessage(this.framework_obj, n)
        }
        ,
        this._WEBSOCK = e
    }
    ,
    o.disable = function(n, i) {
        n.ConnectionManager.disableAutoBind(n),
        this._WEBSOCK.close()
    }
    ,
    o.doPing = function(n) {
        n.ConnectionManager.onBind(n),
        this._WEBSOCK.readyState === this.readystate.OPEN && this.sendMessage(n, "-")
    }
    ,
    o.setInitialised = function() {
        this.initialized = !0
    }
    ,
    o.setUninitialised = function() {
        this.initialized = !1
    }
    ,
    o.isInitialised = function() {
        return this.initialized
    }
    ,
    o.getConnectionUniqueID = function() {
        return this.connection_id
    }
    ,
    n.WebSocketObj = i
}(window);
!function(e) {
    if (!e.$History) {
        var l = {
            is_init: !1,
            state: [],
            init: function() {
                var e = l.getAvailableStoreType();
                if (!e)
                    return !1;
                l.is_init = !0,
                e.key = "hstate";
                var t = $UTSConnector.screenname ? $UTSConnector.util.db.getScreennameBasedKey("hstate") : ""
                  , r = null;
                if (t && (e.key = t,
                r = $DBUtil.getFromStorage(e)),
                r || (e.key = $UTSConnector.util.db.getWidgetBasedKey("hstate"),
                r = $DBUtil.getFromStorage(e)),
                r)
                    for (var n in r) {
                        var a = r[n]
                          , i = {}
                          , o = ["referer", "cpage", "title", "tracked"];
                        for (var s in o)
                            a[o[s]] && (i[o[s]] = a[o[s]]);
                        l.push(i)
                    }
                return !0
            },
            getAvailableStoreType: function() {
                var e = {
                    type: "localStorage"
                };
                return $DBUtil.isStorageAvailable(e) ? e : (e.type = "sessionStorage",
                $DBUtil.isStorageAvailable(e) ? e : null)
            },
            scheduleTimer: function() {
                var e = l.getAvailableStoreType();
                if (!e)
                    return !0;
                e.key = "hstate",
                e.value = l.state,
                e.ttl = 864e5;
                var t = $UTSConnector.screenname ? $UTSConnector.util.db.getScreennameBasedKey("hstate") : "";
                t && (e.key = t,
                $DBUtil.storeInStorage(e)),
                e.key = $UTSConnector.util.db.getWidgetBasedKey("hstate"),
                $DBUtil.storeInStorage(e)
            },
            push: function(e) {
                if (!e || !e.cpage)
                    return !1;
                var t = l.getRecent();
                if (t && t.cpage == e.cpage)
                    return !1;
                var r = {}
                  , n = ["referer", "cpage", "title", "tracked"];
                for (var a in n)
                    e[n[a]] && (r[n[a]] = e[n[a]]);
                return l.state.push(r),
                l.scheduleTimer(),
                !0
            },
            getList: function() {
                return l.state
            },
            getRecent: function() {
                return 0 == l.state.length ? null : l.state[l.state.length - 1]
            },
            getByIndex: function(e) {
                return l.state.length <= e ? null : l.state[e]
            },
            removeFirstByURL: function(e) {
                var t = l.getByIndex(0);
                return !(!t || !e || t.cpage != e) && (l.state.splice(0, 1),
                l.scheduleTimer(),
                !0)
            },
            getFirstUntracked: function() {
                for (var e = 0; e < l.state.length; e++) {
                    var t = l.state[e];
                    if (t && !t.tracked)
                        return t.index = e,
                        t
                }
                return null
            }
        };
        e.$History = l
    }
}(window);
!function(e) {
    if (!e.$UTSConnector) {
        var N = {
            init: function() {
                this.is_tracking_enabled = !1,
                this.widget_code = null,
                this.enable_log = !1,
                this.screenname = null,
                this.force_https = !1,
                this.uts_sid = null,
                this.siq_id = null,
                this.setup = null,
                this.cookie_max_age = 63072e6,
                this.nonce = null
            },
            getSIQID: function() {
                return this.siq_id
            },
            getUTSSID: function() {
                var e = this.util.db.getFromStorage({
                    type: "sessionStorage",
                    key: "uts_sid"
                });
                return e || this.uts_sid
            },
            setUTSSID: function(e) {
                this.util.db.storeInStorage({
                    type: "sessionStorage",
                    key: "uts_sid",
                    value: e
                }),
                this.uts_sid = e
            },
            removeUTSSID: function() {
                this.util.db.removeFromStorage({
                    type: "sessionStorage",
                    key: "uts_sid"
                }),
                this.uts_sid = null
            },
            isLogsEnabled: function() {
                return this.enable_log
            },
            disableLogging: function() {
                this.enable_log = !1
            },
            enableLogging: function() {
                this.enable_log = !0
            },
            getWidgetCode: function() {
                return this.widget_code
            },
            setWidgetCode: function(e) {
                this.widget_code = e
            },
            getScreenname: function() {
                return this.screenname
            },
            setScreenname: function(e) {
                this.screenname = e
            },
            isForceSecure: function() {
                return this.force_https
            },
            disableForceSecure: function() {
                this.force_https = !1
            },
            enableForceSecure: function() {
                this.force_https = !0
            },
            isTrackingAllowed: function() {
                return this.is_tracking_enabled
            },
            disableTracking: function() {
                this.is_tracking_enabled = !1
            },
            enableTracking: function() {
                this.is_tracking_enabled = !0
            }
        }
          , n = N.util = {};
        n.isArray = function(e) {
            var t = Array.isArray
              , n = Object.prototype.toString.call(e);
            return t && t(e) || "[object Array]" === n || "[object Array Iterator]" === n
        }
        ;
        var i = n.db = {};
        i.storeInCookie = function(e) {
            e.domain = this.getDomain();
            var t = e.key
              , n = N.screenname ? this.getScreennameBasedKey(t) : "";
            e.key = n || this.getWidgetBasedKey(t),
            $DBUtil.storeInCookie(e)
        }
        ,
        i.getFromCookie = function(e) {
            var t = e.key
              , n = N.screenname ? this.getScreennameBasedKey(t) : "";
            if (n) {
                e.key = n;
                var i = $DBUtil.getFromCookie(e);
                if (i)
                    return i
            }
            return e.key = this.getWidgetBasedKey(t),
            $DBUtil.getFromCookie(e)
        }
        ,
        i.removeCookie = function(e) {
            $DBUtil.removeCookie(e)
        }
        ,
        i.getWidgetBasedKey = function(e) {
            return N.widget_code + "_" + e
        }
        ,
        i.getScreennameBasedKey = function(e) {
            return N.screenname + "-" + e
        }
        ,
        i.isStorageAvailable = function(e) {
            return $DBUtil.isStorageAvailable(e)
        }
        ,
        i.getFromStorage = function(e) {
            var t = e.key
              , n = N.screenname ? this.getScreennameBasedKey(t) : "";
            if (n) {
                e.key = n;
                var i = $DBUtil.getFromStorage(e);
                if (i)
                    return i
            }
            return e.key = this.getWidgetBasedKey(t),
            $DBUtil.getFromStorage(e)
        }
        ,
        i.storeInStorage = function(e) {
            var t = e.key
              , n = N.screenname ? this.getScreennameBasedKey(t) : "";
            return n && (e.key = n,
            $DBUtil.storeInStorage(e)),
            e.key = this.getWidgetBasedKey(t),
            $DBUtil.storeInStorage(e)
        }
        ,
        i.removeFromStorage = function(e) {
            var t = e.key
              , n = N.screenname ? this.getScreennameBasedKey(t) : "";
            return n && (e.key = n,
            $DBUtil.removeFromStorage(e)),
            e.key = this.getWidgetBasedKey(t),
            $DBUtil.removeFromStorage(e)
        }
        ,
        i.getDomain = function() {
            try {
                var e = $zoho.salesiq.utsvalues.trackingdomain;
                return e || (e = location.hostname.toString().replace(/^w{3}\./, ""),
                /^[a-zA-Z0-9-\.]+$/.test(e) || (e = "")),
                e || ""
            } catch (e) {}
        }
        ,
        i.getValidatedTTL = function(e) {
            return e > N.cookie_max_age ? N.cookie_max_age : e
        }
        ,
        i.reupdateCookieTTL = function() {
            var e = N
              , t = (e.util.net,
            e.util.db)
              , n = t.getFromCookie({
                key: "_zldp"
            }) || t.getFromStorage({
                type: "localStorage",
                key: "_zldp"
            });
            n && t.storeInCookie({
                key: "_zldp",
                value: n,
                ttl: t.getValidatedTTL(63072e6)
            });
            var i = t.getFromCookie({
                key: "_uuid"
            }) || t.getFromStorage({
                type: "localStorage",
                key: "_uuid"
            });
            i && t.storeInCookie({
                key: "_uuid",
                value: i,
                ttl: t.getValidatedTTL(63072e6)
            })
        }
        ;
        var o = n.net = {
            is_tracked: !1,
            connection_obj: null,
            urlparams: {},
            monitor_timer: null,
            disabled_by_server: !1,
            cfc: 0,
            lpt: 0,
            moninterval: 5e3,
            cur_status: 3
        };
        o.status_list = {},
        o.status_list.CONNECTING = 1,
        o.status_list.CONNECTED = 2,
        o.status_list.NOT_CONNECTED = 3,
        o.pageUnloadHandler = function() {
            var e = N.util.net;
            if (e.getVTSServer()) {
                var t = e.getURLScheme(window, !1) + e.getVTSServer() + "/watch?version=v2&widget_code=" + N.getWidgetCode() + "&" + e.getParamMap(!0) + "&is_tracked=" + (e.is_tracked ? 1 : 0) + "&beacon=1&eventtime=" + (new Date).getTime();
                -1 == t.indexOf("cdnuts=") && (t += "&cdnuts=1"),
                -1 == t.indexOf("x-e=") && (t += "&x-e=siq"),
                -1 == t.indexOf("x-s=") && (t += "&x-s=siq");
                var n = !1
                  , i = window.navigator;
                i && i.sendBeacon && (n = i.sendBeacon(t)),
                !1 === n && (new Image(1,1).src = t)
            }
        }
        ,
        o.connect = function() {
            try {
                $ZSIQDOMUtil.addEvent(window, "pagehide", N.util.net.pageUnloadHandler)
            } catch (e) {}
            this.disabled_by_server = !1,
            this.cur_status = this.status_list.CONNECTING;
            var e = this.connection_obj = new ConnectionManager;
            e.isConnectionTypeAvailable() ? (e.onOpen = function(e, t) {
                N.util.net.doLog("on open handler")
            }
            ,
            e.onMessage = function(e, t) {
                N.util.net.onMessage(e, t)
            }
            ,
            e.onClose = function(e, t) {
                var n = N.util.net
                  , i = e.ConnectionManager;
                i.getCurrentConnectionType() == i.CON_ID.WS && (n.cur_status != n.status_list.CONNECTED && n.cfc++,
                n.cur_status = n.status_list.NOT_CONNECTED,
                e.ConnectionManager.setUninitialised(),
                t && t.code && "1006" == t.code && setTimeout(n.connection_obj.reconnect, 0))
            }
            ,
            e.connectionEstablishFail = e.onError = function(e, t) {
                var n = N.util.net
                  , i = e.ConnectionManager;
                i.getCurrentConnectionType() == i.CON_ID.WS && (n.cur_status = n.status_list.NOT_CONNECTED,
                e.ConnectionManager.setUninitialised())
            }
            ,
            e.getEndpointURL = function(e, t) {
                var n = N.util.net
                  , i = e.ConnectionManager
                  , o = i.getCurrentConnectionType();
                return n.cur_status = n.status_list.CONNECTING,
                0 == n.lpt && n.connAlive(),
                i.setUninitialised(),
                o == i.CON_ID.WS ? n.getURLScheme(window, !0) + n.getVTSServer() + "/watchws" : o == i.CON_ID.CORS ? n.getURLScheme(window, !1) + n.getVTSServer() + "/watch" : void 0
            }
            ,
            e.getQueryParam = function(e, t) {
                var n = N.util.net.getParamMap()
                  , i = "";
                n["x-e"] || (i += "x-e=siq&"),
                n["x-s"] || (i += "x-s=siq&");
                var o = []
                  , r = !1;
                for (var a in n)
                    n.hasOwnProperty(a) && (o.push(a + "=" + encodeURIComponent(n[a])),
                    r = !0);
                return r && (i += o.join("&")),
                "version=v2&widget_code=" + N.getWidgetCode() + "&" + i
            }
            ,
            e.getBindURLForCORS = function(e, t) {
                var n = N.util.net;
                return n.getURLScheme(window, !1) + n.getVTSServer() + "/bind"
            }
            ,
            e.getBindParamFORCORS = function(e, t) {
                return "sid=" + encodeURIComponent(N.getUTSSID()) + "&cdnuts=1&eventtime=" + (new Date).getTime()
            }
            ,
            e.connect(),
            clearInterval(this.monitor_timer),
            this.monitor_timer = setInterval(function() {
                N.util.net.monitorConnection()
            }, N.util.net.moninterval)) : this.doLog("no connection are available to make connected")
        }
        ,
        o.doLog = function(e) {
            N.isLogsEnabled() && console.log(e)
        }
        ,
        o.monitorConnection = function(e) {
            var t = N.util.net;
            0 != t.lpt && new Date - t.lpt > 4 * t.moninterval && (t.connection_obj.setUninitialised(),
            t.cur_status = t.status_list.NOT_CONNECTED);
            var n = N.getSIQID();
            n || (n = N.util.db.getFromStorage({
                type: "localStorage",
                key: "_siqid"
            })) && (n = decodeURIComponent(n));
            if (t.updateSIQIDinDOM(n),
            t.disabled_by_server)
                t.doLog("disabled_by_server_monitor");
            else {
                if (6 < t.cfc) {
                    if (t.cfc % 2 == 0)
                        return;
                    if (20 < t.cfc)
                        return void t.doLog("more that 20 connections are tried. Please check!!!")
                }
                if (0 != t.lpt && new Date - t.lpt > 4 * t.moninterval || !t.connection_obj.isInitialised() && t.cur_status != t.status_list.CONNECTING || e) {
                    var i = t.connection_obj
                      , o = i.getCurrentConnectionType();
                    if (o == i.CON_ID.CORS && e || e && o == i.CON_ID.WS && t.cur_status != t.status_list.CONNECTING || !e)
                        return void ("hidden" != N.$TabStatus.cur_st ? (i.reconnect(),
                        t.connAlive()) : t.doLog("not reconnecting due to tab status"))
                }
                try {
                    $EventManager.isEventExists() && t.trackEvent({
                        opr: "custom",
                        qdata: $EventManager.fetchEvents()
                    })
                } catch (e) {}
                if (t.cur_status != t.status_list.CONNECTED && t.cur_status != t.status_list.CONNECTING)
                    e || t.connection_obj.doFallback();
                else if (t.connection_obj.isInitialised()) {
                    var r = t.getEventFromSession();
                    for (var a in r)
                        r.hasOwnProperty(a) && t.trackEvent($JSONUtil.parseToJSON(r[a]));
                    t.removeEventFromSession()
                }
            }
        }
        ,
        o.onMessage = function(e, t) {
            var n = N.util.net
              , i = e.ConnectionManager;
            n.connAlive();
            var o = t.data;
            if ("//1//" === o)
                return n.connAlive(),
                void i.setInitialised();
            if ("" !== o) {
                if ("," === o)
                    return n.connAlive(),
                    void i.reconnect(0);
                o = $JSONUtil.parseToJSON(o),
                n.handleMessage(e, o)
            }
        }
        ,
        o.handleMessage = function(e, t) {
            if (N.util.isArray(t))
                for (var n in t)
                    this.handleUTSMessage(e, t[n]);
            else
                this.handleUTSMessage(e, t)
        }
        ,
        o.checkHistory = function() {
            var e = $History.getFirstUntracked();
            e && ($EventManager.notifyNavigation(e.cpage, e.title, e.referer),
            N.util.db.storeInStorage({
                type: "localStorage",
                key: "ss_cpage",
                value: e.cpage
            }))
        }
        ,
        o.handleUTSMessage = function(e, t) {
            var n = t.o
              , i = t.d
              , o = N
              , r = o.util.db
              , a = o.util.net
              , s = e.ConnectionManager
              , c = "localStorage";
            switch (n) {
            case 5:
                i.screenname && i.embedname && i.soid && (o.setUTSSID(i.uts_sid),
                r.storeInStorage({
                    type: c,
                    key: "screenname",
                    value: i.screenname
                }),
                r.storeInStorage({
                    type: c,
                    key: "embedname",
                    value: i.embedname
                }),
                r.storeInStorage({
                    type: c,
                    key: "soid",
                    value: i.soid
                }),
                o.setScreenname(i.screenname)),
                "undefined" != typeof $ZSIQUTS && "function" == typeof $ZSIQUTS.updateTrackingLive && $ZSIQUTS.updateTrackingLive();
                var d = a.getParamMap();
                d.widget_code = o.getWidgetCode(),
                i.uts_sid && (d.uts_sid = i.uts_sid),
                s.sendMessage(e, $JSONUtil.stringify({
                    opr: "register_visitor",
                    data: d
                }), !1),
                s.getCurrentConnectionType() == s.CON_ID.WS && s.enableAutoBind(1e4),
                a.connAlive();
                break;
            case 6:
                var l = i.updated_uts_sid
                  , u = i.uvid
                  , g = i.zldp
                  , m = i.siq_id;
                r.storeInCookie({
                    key: "_zldt",
                    value: u
                }),
                r.storeInCookie({
                    key: "_zldp",
                    value: g,
                    ttl: r.getValidatedTTL(63072e6)
                }),
                r.storeInStorage({
                    type: c,
                    key: "_zldt",
                    value: u
                }),
                r.storeInStorage({
                    type: c,
                    key: "_zldp",
                    value: g
                }),
                r.storeInStorage({
                    type: c,
                    key: "_siqid",
                    value: encodeURIComponent(m)
                }),
                o.siq_id = m,
                a.updateSIQIDinDOM(m);
                try {
                    a.callIfLoaded("$UTSHandler", "setUVID", u, 0)
                } catch (e) {}
                o.setUTSSID(l),
                s.sendMessage(e, $JSONUtil.stringify({
                    opr: "track_visitor",
                    data: {
                        widget_code: o.getWidgetCode(),
                        uts_sid: o.getUTSSID(),
                        uvid: u
                    }
                }), !1);
                break;
            case 7:
                s.enableAutoBind(1e4),
                s.setInitialised(),
                a.cur_status = a.status_list.CONNECTED,
                r.storeInCookie({
                    key: "_uuid",
                    value: i.uuid,
                    ttl: r.getValidatedTTL(63072e6)
                }),
                r.storeInStorage({
                    type: c,
                    key: "_uuid",
                    value: i.uuid
                });
                try {
                    a.callIfLoaded("$UTSHandler", "setUUID", i.uuid, 0)
                } catch (e) {}
                a.cfc = 0,
                a.is_tracked = !0,
                a.callIfLoaded("$ZSIQUTSAction", "handle", i.triggers, 0),
                (v = r.getFromStorage({
                    type: c,
                    key: "ss_cpage"
                })) && $History.removeFirstByURL(v),
                a.checkHistory(),
                a.monitorConnection(),
                a.callIfLoaded("$ZSIQUTSAction", "handleInfo", i, 0),
                a.callIfLoaded("$ZSIQUTS", "identifyByCampaign", i, 0);
                break;
            case 100:
                a.callIfLoaded("$UTSHandler", "handleTrackChat", i, 0);
                break;
            case 101:
                a.callIfLoaded("$ZSIQUTS", "handleCustomAction", i, 0);
                break;
            case 102:
                a.callIfLoaded("$ZSIQUTSAction", "handle", i.triggers, 0);
                break;
            case -1:
                i && i.issidclear && o.removeUTSSID();
                var p = i && i.duration || "";
                s.disable(p),
                a.disabled_by_server = !0,
                a.cur_status = a.status_list.NOT_CONNECTED,
                p && setTimeout(function() {
                    N.util.net.disabled_by_server = !1
                }, 60 * parseInt(p) * 1e3),
                a.doLog("connection disaled by server");
                break;
            case 3:
                var v;
                (v = r.getFromStorage({
                    type: c,
                    key: "ss_cpage"
                })) && $History.removeFirstByURL(v),
                a.checkHistory();
                break;
            case 9:
                s.doPing();
                break;
            case 10:
                s.enableAutoBind(1e4),
                s.setInitialised(),
                a.cur_status = a.status_list.CONNECTED,
                a.cfc = 0,
                a.is_tracked = !0,
                a.checkHistory(),
                a.monitorConnection();
                break;
            case 11:
                a.callIfLoaded("$ZSIQUTSAction", "handleInfo", i, 0)
            }
        }
        ,
        o.callIfLoaded = function(e, t, n, i) {
            try {
                return void window[e][t](n)
            } catch (e) {}
            i += 1e3,
            setTimeout(function() {
                N.util.net.callIfLoaded(e, t, n, i)
            }, i)
        }
        ,
        o.terminate = function() {
            this.disabled_by_server = !0,
            this.connection_obj.terminate()
        }
        ,
        o.trackEvent = function(e) {
            try {
                e && !e.event_time && (e.event_time = "" + (new Date).getTime())
            } catch (e) {}
            this.connection_obj.isInitialised() ? this.connection_obj.sendMessage({
                ConnectionManager: this.connection_obj
            }, $JSONUtil.stringify(e), !0) : this.storeEventInSession(e)
        }
        ,
        o.storeEventInSession = function(e) {
            var t = N.util.db
              , n = this.getEventFromSession();
            n.push($JSONUtil.stringify(e)),
            t.storeInStorage({
                type: "sessionStorage",
                key: "queued_event",
                value: $JSONUtil.stringify(n)
            })
        }
        ,
        o.getEventFromSession = function() {
            var e = N.util.db.getFromStorage({
                type: "sessionStorage",
                key: "queued_event"
            });
            return e = e ? $JSONUtil.parseToJSON(e) : []
        }
        ,
        o.removeEventFromSession = function() {
            N.util.db.removeFromStorage({
                type: "sessionStorage",
                key: "queued_event"
            })
        }
        ,
        o.updateSIQIDinDOM = function(e) {
            var t, n;
            try {
                t = $UTSHandler.getSIQID()
            } catch (e) {}
            if (!t) {
                if (!e)
                    return;
                try {
                    t = e,
                    $UTSHandler.setSIQID(e)
                } catch (e) {
                    return
                }
            }
            try {
                n = $UTSHandler.getEqualDomains()
            } catch (e) {}
            if (n)
                for (var i, o, r = document.getElementsByTagName("a"), a = 0, s = r.length; a < s; a++) {
                    var c = r[a];
                    if (!c.getAttribute("is_siq_parsed")) {
                        c.setAttribute("is_siq_parsed", "1");
                        var d = c.getAttribute("href");
                        if (d) {
                            var l = (i = d,
                            o = void 0,
                            (o = document.createElement("a")).href = i,
                            o)
                              , u = l.host;
                            if (u && document.location.host != u) {
                                for (var g = !1, m = 0; m < n.length; m++)
                                    if (u.endsWith(n[m])) {
                                        g = !0;
                                        break
                                    }
                                if (g) {
                                    var p = l.href.split("?")[0];
                                    p = p.split("#")[0];
                                    var v = l.search
                                      , S = l.hash
                                      , h = N.util.net.parseQueryString(v);
                                    h.siq_id = t;
                                    var f = "";
                                    for (var y in h)
                                        h.hasOwnProperty(y) && (f && (f += "&"),
                                        f += y + "=" + encodeURIComponent(h[y]));
                                    p += (v = f) ? "?" + v + S : S,
                                    c.setAttribute("href", p)
                                }
                            }
                        }
                    }
                }
        }
        ,
        o.getNavigationObj = function(e, t) {
            void 0 === t && (t = $History.getFirstUntracked());
            var n = "";
            try {
                var i = $ZSIQUtil.getIframe();
                i && i.$Support && i.$Support.isblinking && (n = i.$Support.documenttitle)
            } catch (e) {}
            window.$ZSIQUtil && $ZSIQUtil.istitleblinking && $ZSIQUtil.documenttitle && (n = $ZSIQUtil.documenttitle);
            var o = e ? e.document : null
              , r = "current_page"
              , a = "page_title"
              , s = "referer"
              , c = N
              , d = c.util.db
              , l = "localStorage";
            if (o && o.location && o.location.protocol) {
                if (-1 == e.location.protocol.indexOf("http") && e.parent && e.parent != e)
                    return c.util.net.getNavigationObj(e.parent, t);
                var u, g;
                (u = {})[r] = o.location.href.substring(0, 3072),
                u[a] = n || o.title.substring(0, 3072),
                u[s] = o.referrer.substring(0, 3072);
                try {
                    u.lsid = $ZSIQWidget.getWidgetObject().lsid
                } catch (e) {}
                return (g = d.getFromStorage({
                    type: l,
                    key: "h_cpage"
                })) && g == u[r] || (d.storeInStorage({
                    type: l,
                    key: "h_cpage",
                    value: u[r]
                }),
                $History.push({
                    referer: u[s],
                    cpage: u[r],
                    title: u[a],
                    lsid: u.lsid
                })),
                t && (u[r] = t.cpage,
                t.title && (u[a] = t.title),
                t.referer && (u[s] = t.referer),
                t.lsid && (u.lsid = t.lsid)),
                d.storeInStorage({
                    type: l,
                    key: "ss_cpage",
                    value: u[r]
                }),
                u
            }
            (u = {})[r] = document.location.href.substring(0, 3072),
            u[a] = n || document.title.substring(0, 3072),
            u[s] = document.referrer.substring(0, 3072);
            try {
                u.lsid = $ZSIQWidget.getWidgetObject().lsid
            } catch (e) {}
            return (g = d.getFromStorage({
                type: l,
                key: "h_cpage"
            })) && g == u[r] || (d.storeInStorage({
                type: l,
                key: "h_cpage",
                value: u[r]
            }),
            $History.push({
                referer: u[s],
                cpage: u[r],
                title: u[a],
                lsid: u.lsid
            })),
            t && (u[r] = t.cpage,
            t.title && (u[a] = t.title),
            t.referer && (u[s] = t.referer),
            t.lsid && (u.lsid = t.lsid)),
            d.storeInStorage({
                type: l,
                key: "ss_cpage",
                value: u[r]
            }),
            u
        }
        ,
        o.parseQueryString = function(e) {
            var t = {};
            if (!e || !e.trim())
                return t;
            for (var n = (e = e.replace(/^\?/g, "")).split("&"), i = [], o = function(e) {
                return decodeURIComponent((e + "").replace(/\+/g, "%20"))
            }, r = 0; r < n.length; r++)
                t[o((i = n[r].split("="))[0])] = o(i[1]);
            return t
        }
        ,
        o.getParamMap = function(e) {
            var n = []
              , i = {}
              , t = N
              , o = t.util.db
              , r = t.util.net;
            function a(e, t) {
                t && (n.push(e + "=" + encodeURIComponent(s(t))),
                i[e] = s(t))
            }
            function s(e) {
                return e ? e.replace(/^\s+|\s+$/gm, "") : e
            }
            var c = {}
              , d = N.util.net.getNavigationObj(window, void 0)
              , l = d.current_page
              , u = d.page_title;
            try {
                var g = {};
                l = g.url || l,
                u = g.title || u
            } catch (e) {}
            var m = r.getURLParameterByName("mc_cid")
              , p = r.getURLParameterByName("mc_eid");
            if (null == m && null == p) {
                var v = o.getFromCookie({
                    key: "mailchimp"
                });
                if (v) {
                    var S = $JSONUtil.parseToJSON(v);
                    c.name = S.name,
                    c.email = S.email
                }
            }
            var h = "sessionStorage"
              , f = "localStorage"
              , y = {
                "x-e": o.getFromStorage({
                    type: f,
                    key: "embedname"
                }),
                "x-s": o.getFromStorage({
                    type: f,
                    key: "screenname"
                }),
                cpage: l,
                uts_sid: t.getUTSSID(),
                ptitle: u,
                zldp: o.getFromCookie({
                    key: "_zldp"
                }) || o.getFromStorage({
                    type: f,
                    key: "_zldp"
                }),
                uvid: o.getFromCookie({
                    key: "_zldt"
                }) || o.getFromStorage({
                    type: f,
                    key: "_zldt"
                }),
                name: c.name,
                email: c.email ? c.email.toLowerCase() : "",
                phone: c.phone,
                localtime: function(e) {
                    try {
                        return (new Date).toTimeString().split(" ").slice(1).join(" ")
                    } catch (e) {}
                    return ""
                }(),
                gmttime: function() {
                    try {
                        return (new Date).toTimeString().split(" ").slice(1, 2)[0]
                    } catch (e) {}
                    return ""
                }(),
                docref: document.referrer.substring(0, 3072),
                resolution: "screen"in window && void 0 !== screen.width && void 0 !== screen.height ? screen.width + "x" + screen.height : ""
            };
            try {
                var _ = window.location.search;
                if (_) {
                    var b = r.parseQueryString(_);
                    b.siq_id && (y.siq_id = b.siq_id)
                }
            } catch (e) {}
            try {
                var k = "con_id";
                o.getFromStorage({
                    type: h,
                    key: k
                }) || o.storeInStorage({
                    type: h,
                    key: k,
                    value: (new Date).getTime()
                });
                var I = o.getFromStorage({
                    type: h,
                    key: k
                });
                "[object Object]" === Object.prototype.toString.call(I) && (o.storeInStorage({
                    type: h,
                    key: k,
                    value: (new Date).getTime()
                }),
                I = o.getFromStorage({
                    type: h,
                    key: k
                })),
                y.con_id = "" + I
            } catch (e) {}
            y.referer = null;
            var C = "siq_isdirect"
              , T = "siq_ref";
            o.getFromStorage({
                type: h,
                key: C
            }) || (o.getFromStorage({
                type: h,
                key: T
            }) ? y.referer = o.getFromStorage({
                type: h,
                key: T
            }) : d.referer ? (o.storeInStorage({
                type: h,
                key: T,
                value: d.referer
            }),
            y.referer = d.referer) : o.storeInStorage({
                type: h,
                key: C,
                value: !0
            }));
            try {
                y.isgdpr = "" + r.getGDPRStatus()
            } catch (e) {}
            for (var w in y)
                y.hasOwnProperty(w) && a(w, y[w]);
            if (r.is_tracked && a("recon", "true"),
            c.info) {
                var U = c.info;
                "object" == typeof U && (U = $JSONUtil.stringify(U)),
                a("cinfo", U)
            }
            return a("cdnuts", "1"),
            a("eventtime", "" + (new Date).getTime()),
            e ? n.join("&") : i
        }
        ,
        o.getURLParameterByName = function(e) {
            if (this.urlparams[e])
                return this.urlparams[e];
            for (var t = {}, n = window.location.search, i = (n = n.replace(/^\?/g, "")).split("&"), o = [], r = 0; r < i.length; r++)
                t[(o = i[r].split("="))[0]] = o[1];
            return t[e]
        }
        ,
        o.getURLScheme = function(e, t) {
            if (N.isForceSecure())
                return t ? "wss://" : "https://";
            var n = t ? "ws" : "http";
            return !e && e.location ? n + "://" : e.location.protocol ? -1 == e.location.protocol.indexOf("http") && e.parent ? N.util.net.getURLScheme(e.parent, t) : -1 != e.location.protocol.indexOf("https") ? n + "s://" : n + "://" : N.util.net.getURLScheme(e.parent, t)
        }
        ,
        o.getVTSServer = function(e, t) {
            return "cn" == N.setup ? (N.enableForceSecure(),
            "vts.zohopublic.com.cn") : "local" == N.setup ? "vts.localzohopublic.com" : "eu" == N.setup ? "vts.zohopublic.eu" : "vts.zohopublic.com"
        }
        ,
        o.getSIQServer = function() {
            return "cn" == N.setup ? "https://salesiq.zoho.com.cn/widget" : "local" == N.setup ? "https://salesiq.localzoho.com/widget" : "eu" == N.setup ? "https://salesiq.zoho.eu/widget" : "https://salesiq.zoho.com/widget"
        }
        ,
        o.connAlive = function() {
            N.util.net.lpt = new Date
        }
        ,
        o.getGDPRStatus = function() {
            var e = $ZSIQChat
              , t = $ZSIQUtil
              , n = e.getWidgetData()
              , i = t.formWidgetObject(n.widgetobj)
              , o = n.embedobj;
            return t.checkGDPRBannerStatus(2, i.screenname, o) || t.getGDPRPendingStatus(n, o, i.screenname)
        }
        ,
        o.injectWidgetCode = function(e, n, i) {
            setTimeout(function(e, n, i) {
                var o = window.$zoho || {};
                o.salesiq = o.salesiq || {},
                o.salesiq.widgetcode = N.getWidgetCode(),
                o.salesiq.values = o.salesiq.values || {},
                o.salesiq.ready = o.salesiq.ready || function() {}
                ,
                n && (o.salesiq.mode = "async");
                var r = document;
                s = r.createElement("script"),
                s.type = "text/javascript",
                s.id = "zsiqscript",
                s.defer = !0,
                i && (o.salesiq.nonce = i,
                s.nonce = i),
                s.src = N.util.net.getSIQServer(),
                t = r.getElementsByTagName("script")[0],
                t.parentNode.insertBefore(s, t),
                window.$zoho = o
            }, 0, e, n, i)
        }
        ;
        for (var r = {}, a = document.getElementById("siquts"), c = a.src, d = a.nonce, l = (c = (c = c.split("?")[1]).replace(/^\?/g, "")).split("&"), u = [], g = 0; g < l.length; g++)
            r[(u = l[g].split("="))[0]] = u[1];
        var m = {
            cur_st: "visible",
            is_init: !1
        };
        m.hidden_prop,
        m.init = function() {
            m.is_init || (m.is_init = !0,
            m.hidden_prop = "hidden",
            m.hidden_prop in document ? document.addEventListener("visibilitychange", m.onchange) : (m.hidden_prop = "mozHidden")in document ? document.addEventListener("mozvisibilitychange", m.onchange) : (m.hidden_prop = "webkitHidden")in document ? document.addEventListener("webkitvisibilitychange", m.onchange) : (m.hidden_prop = "msHidden")in document ? document.addEventListener("msvisibilitychange", m.onchange) : "onfocusin"in document ? document.onfocusin = document.onfocusout = m.onchange : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = m.onchange,
            void 0 !== document[m.hidden_prop] && m.onchange({
                type: document[m.hidden_prop] ? "blur" : "focus"
            }))
        }
        ,
        m.onchange = function(e) {
            var t = "visible"
              , n = {
                focus: t,
                focusin: t,
                pageshow: t,
                blur: t,
                focusout: t,
                pagehide: "hidden"
            };
            (e = e || window.event).type in n ? N.$TabStatus.cur_st = n[e.type] : N.$TabStatus.cur_st = document.hidden ? "hidden" : "visible"
        }
        ,
        (e.$UTSConnector = N).init(),
        N.setWidgetCode(r.widgetcode),
        N.setup = r.dc,
        N.nonce = d,
        e.$History.init();
        if (N.disable_write = r.disablewrite,
        N.mode = r.mode,
        !r.disableconnect)
            $zoho.salesiq.utsvalues.equalhosts ? setTimeout(function(e, t, n, i) {
                e.connect(),
                e.injectWidgetCode(t, n, i)
            }, 5e3, o, N.disable_write, N.mode, N.nonce) : (o.connect(),
            o.injectWidgetCode(N.disable_write, N.mode, N.nonce));
        (N.$TabStatus = m).init()
    }
}(window);

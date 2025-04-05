!function(e) {
    var t = {};
    function i(n) {
        if (t[n])
            return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, i),
        r.l = !0,
        r.exports
    }
    i.m = e,
    i.c = t,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                i.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "",
    i(i.s = 8)
}([function(e, t) {}
, function(e, t) {}
, function(e, t) {}
, function(e, t) {}
, function(e, t) {}
, function(e, t) {}
, function(e, t) {}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    i.r(t);
    var n, r = new (function() {
        function e() {
            this.initializeDefaultVaribles()
        }
        return e.prototype.initializeDefaultVaribles = function() {
            this.split_experiences = {},
            this.abtest_experiences = {},
            this.original_experience = {},
            this.personalizationExperiments = {},
            this.audiences = [],
            this.selectedAudiences = [],
            this.splitExperiencesSelected = [],
            this.abTestExperiencesSelected = [],
            this.experiencesApplied = []
        }
        ,
        e
    }()), o = {
        PERSONALIZATION_BUCKET: "zabPZBucket",
        AUDIENCE_EXPERIENCE_MAPPING: "audience_experience_mapping",
        PERSONALIZATION_COOKIE: "zPersonalization",
        EXPERIMENT_KEY: "e",
        VARIATION_KEY: "v",
        EXPERIMENT_VARIATION_MAPPING: "e_v_m",
        EXPERIMENT_AUDIENCE_MAPPING: "e_a_m",
        SELECTED_AUDIENCES: "s_a"
    }, a = (i(0),
    {
        USER_INFORMATION_STORAGE: "z_user_info",
        USER_ACTIVITY: "user_activity",
        USER_ATTRIBUTE: "user_attribute",
        ZPS_EXPERIMENTS_LOADED: "zpsExperimentsLoaded",
        ZPS_PERSONALIZATION_EXPERIMENTS_LOADED: "zpsPersonalizationExperimentsLoaded",
        USER_CUSTOM_ATTRIBUTES: "user_custom_attributes",
        EVENT_CUSTOM_ATTRIBUTES: "event_custom_attributes",
        SCRIPT_LOADER_ID: "zoho-pagesense-script-loader",
        GCLID: "gclid",
        AUDIENCE_MATCHING_FAILURE_COOKIE_VALUE: "#",
        USER_EXCLUDED_ABTEST_COOKIE_VALUE: "-",
        REFFERER_URL: "rv",
        FULL_REFFERER_URL: "frv",
        FULL_CURRENT_URL: "fcv",
        CURRENT_URL: "cv",
        URL_PARAMETERS: "up",
        TRAFFIC_VALUE: "tv",
        VISIT_ID: "d",
        FULL_VISIT_ID: "visitId",
        FULL_VISITOR_ID: "visitorId",
        LAST_REFFERER_URL: "lrv",
        LAST_FULL_REFFERER_URL: "lfrv",
        LAST_FULL_CURRENT_URL: "lfcv",
        LAST_CURRENT_URL: "lcv",
        LAST_URL_PARAMETERS: "lup",
        LAST_TRAFFIC_VALUE: "ltv",
        LAST_VISIT_ID: "ld",
        REQUEST_SENT_TIME: "rst",
        HIT_TYPE: "ht",
        LAST_HIT_TYPE: "lht",
        LAST_IS_ENTRANCE_FLAG: "lisef",
        IS_ENTRANCE_FLAG: "isef",
        IS_NEW_VISITOR: "n",
        OFFSET: "offset",
        IS_INTERACTION_HIT: "iht",
        LAST_IS_INTERACTION_HIT: "liht",
        IS_ENTRANCE_FLAG_COOKIE: "zft_isef",
        IS_FIRST_REQUEST_COOKIE: "zft_ifr",
        IS_FIRST_REQUEST: "ifr",
        LAST_IS_FIRST_REQUEST: "lifr",
        LAST_GOAL_LINK_NAME: "lgln",
        SESSION_DETAILS_COOKIE: "zft-sdc",
        LANDING_PAGE: "lp",
        LANDING_PAGE_REFERRER: "lpr",
        SOURCE: "src",
        MEDIUM: "mdm",
        CHANNEL: "chn",
        UTM_SOURCE: "utm_src",
        UTM_MEDIUM: "utm_mdm",
        UTM_CAMPAIGN: "utm_cmp",
        UTM_TERM: "utm_trm",
        UTM_CONTENT: "utm_cnt",
        LAST_UTM_SOURCE: "lutm_src",
        LAST_UTM_MEDIUM: "lutm_mdm",
        LAST_UTM_CAMPAIGN: "lutm_cmp",
        LAST_UTM_TERM: "lutm_trm",
        LAST_UTM_CONTENT: "lutm_cnt",
        DOCUMENT_TITLE: "dtte",
        LAST_DOCUMENT_TITLE: "ldtte",
        FIRST_SOURCE: "fsrc",
        FIRST_MEDIUM: "fmdm",
        FIRST_CHANNEL: "fchn",
        LAST_SOURCE: "lsrc",
        LAST_MEDIUM: "lmdm",
        LAST_CHANNEL: "lchn",
        DAY_IN_MILLIS: 864e5,
        REQUEST_URL_MAX_LENGTH: 6e3,
        COOKIE_ONE_YEAR_EXPIRY_DAYS: 365,
        SOCIAL_MEDIUM: ["social", "social-network", "social-media", "sm", "social network", "social media"],
        PAID_MEDIUM: ["cpc", "ppc", "paidsearch", "paid"],
        OTHER_ADVERTISING_MEDIUM: ["cpv", "cpa", "cpp", "content-text"],
        DISPLAY_MEDIUM: ["display", "cpm", "banner"],
        PAID_SOURCES: ["google ads", "bing ads"],
        ORGANIC_SOURCES: ["360.cn", "alice", "alltheweb", "altavista", "aol", "ask", "auone", "avg", "babylon", "baidu", "biglobe", "bing", "centrum.cz", "comcast", "conduit", "cnn", "daum", "duckduckgo", "ecosia", "ekolay", "eniro", "globo", "go.mail.ru", "google", "goo.ne", "haosou.com", "incredimail", "kvasir", "bing", "lycos", "mamma", "msn", "mynet", "najdi", "naver", "netscape", "onet", "ozu", "rakuten", "rambler", "search-results", "search.smt.docomo", "sesam", "seznam", "so.com", "sogou", "startsiden", "szukacz", "terra", "tut.by", "ukr", "virgilio", "voila", "wirtulana polska", "yahoo", "yandex", "yam"],
        SOCIAL_SOURCES: ["facebook", "twitter", "linkedin", "youtube", "quora", "instagram", "pinterest", "reddit", "tumblr"],
        EXPERIMENT_TYPE: {
            "A/B": 1,
            SPLIT: 2
        },
        SCRIPT_NOT_INITIALIZED: "script_not_initialized",
        GET_VISITOR_ID_AND_VISIT_ID: "getVisitorIdAndVisitId",
        VISITOR_AND_VISIT_ID: "visitor_and_visit_id",
        ID: "id",
        MESSAGE: "message",
        IS_MIGRATED_MA_PORTAL: "is_migrated_ma_portal",
        MA_COOKIE: "zc_cu"
    }), s = new (function() {
        function e() {
            this.initializeDefaultVaribles()
        }
        return e.prototype.initializeDefaultVaribles = function() {
            this.temperature = null,
            this.customAttributesRequestStartTime = null,
            this.weatherDetailsRequestStartTime = null,
            this.disableCustomScriptExecution = !1
        }
        ,
        e.prototype.setDisableCustomScriptExecution = function(e) {
            this.disableCustomScriptExecution = e
        }
        ,
        e.prototype.getDisableCustomScriptExecution = function() {
            return this.disableCustomScriptExecution
        }
        ,
        e
    }()), c = {
        NUMBER_OF_SESSIONS: "NO_OF_SESSIONS",
        AFTER_X_SECONDS_OF_INACTIVITY: "AFTER_X_SECONDS_OF_INACTIVITY",
        NEW_SESSION_STARTS: "NEW_SESSION_STARTS",
        TIME_SPENT_ON_PAGE: "TIME_SPENT_ON_PAGE",
        TRIGGERS_DATA_COOKIE_NAME: "zps-tgr-dts",
        ON_PAGE_LOADS: "ON_PAGE_LOADS",
        PERCENTAGE_PAGE_SCROLL: "PERCENTAGE_PAGE_SCROLL",
        CUSTOM_EVENT: "CUSTOM_EVENT",
        EXIT_INTENT: "EXIT_INTENT",
        PAGES_IN_SESSION: "PAGES_IN_SESSION",
        EXPERIMENT_KEY: "experiment_key",
        ELEMENT_CLICK: "ELEMENT_CLICK",
        TIME_SPENT_IN_A_SESSION: "TIME_SPENT_IN_A_SESSION",
        CUSTOM_ATTRIBUTE: "CUSTOM_ATTRIBUTE",
        TRIGGERS_COOKIE_INDEX: {
            NUMBER_OF_SESSIONS: 0,
            NEW_SESSION_STARTS: 1,
            PAGES_IN_SESSION: 2,
            SESSION_START_TIME: 3
        },
        TRIGGERS_DATA_COOKIE_VALUE: "sc=1-expAppOnNewSession=[]-pc=0-sesst=" + (new Date).getTime(),
        OPERATOR: {
            EQUALS: 1,
            NOT_EQUALS: 2,
            CONTAINS: 3,
            DOESNOT_CONTAINS: 4,
            LESSTHAN: 11,
            MORETHAN: 12,
            BETWEEN: 13,
            ACHIEVED: 15,
            NOT_ACHIEVED: 16,
            FIRST_ACTIVITY_EQUALS: 18,
            FIRST_ACTIVITY_NOT_EQUALS: 19,
            FIRST_ACTIVITY_CONTAINS: 20,
            FIRST_ACTIVITY_NOT_CONTAINS: 21,
            FIRST_ACTIVITY_GREATER_THAN: 22,
            FIRST_ACTIVITY_LESSER_THAN: 23,
            LAST_ACTIVITY_EQUALS: 24,
            LAST_ACTIVITY_NOT_EQUALS: 25,
            LAST_ACTIVITY_CONTAINS: 26,
            LAST_ACTIVITY_NOT_CONTAINS: 27,
            LAST_ACTIVITY_GREATER_THAN: 28,
            LAST_ACTIVITY_LESSER_THAN: 29
        },
        EXPERIMENTS: {
            SESSION_RECORDING: 8,
            POPUPS: 11,
            POLLS: 9
        },
        CONDITION_TYPE: {
            AND: 1,
            OR: 2
        }
    }, u = {
        ERROR: 1,
        INFO: 2
    }, p = "tracking_script_info", l = "tracking_script_error", d = "/pslog.gif", f = {
        ERROR: 3,
        WARN: 4,
        INFO: 6
    }, g = "ZABLOG", m = (i(1),
    {
        "portal_name": "fzloyco9",
        "audience": {
            "all": {
                "experiment": ["QplcEuu"],
                "audience_condition": {},
                "audience_name": "All Visitors"
            },
            "browser-audience": {
                "experiment": ["gOEp2wa"],
                "audience_condition": {
                    "condition_type": 1,
                    "conditions": [{
                        "condition_type": 1,
                        "conditions": [{
                            "values": ["CHROME"],
                            "type": "browser",
                            "operator": 1
                        }]
                    }]
                },
                "audience_name": "Browser audience"
            },
            "uae-audience-only": {
                "experiment": ["8DYmSsf"],
                "audience_condition": {
                    "condition_type": 1,
                    "conditions": [{
                        "condition_type": 1,
                        "conditions": [{
                            "values": ["United Arab Emirates"],
                            "type": "location",
                            "operator": 1
                        }]
                    }]
                },
                "audience_name": "UAE Audience only"
            },
            "us-audience-only": {
                "experiment": ["6xixBPi"],
                "audience_condition": {
                    "condition_type": 1,
                    "conditions": [{
                        "condition_type": 1,
                        "conditions": [{
                            "values": ["United States"],
                            "type": "location",
                            "operator": 1
                        }, {
                            "values": ["new"],
                            "type": "visitor_type",
                            "operator": 1
                        }]
                    }]
                },
                "audience_name": "US New Visitors Only"
            },
            "uk-audience-only": {
                "experiment": ["A69CPzA"],
                "audience_condition": {
                    "condition_type": 1,
                    "conditions": [{
                        "condition_type": 1,
                        "conditions": [{
                            "values": ["United Kingdom"],
                            "type": "location",
                            "operator": 1
                        }]
                    }]
                },
                "audience_name": "UK Audience Only"
            },
            "indian-audience-only": {
                "experiment": ["Gsi5aFk"],
                "audience_condition": {
                    "condition_type": 1,
                    "conditions": [{
                        "condition_type": 1,
                        "conditions": [{
                            "values": ["India"],
                            "type": "location",
                            "operator": 1
                        }]
                    }]
                },
                "audience_name": "Indian Audience Only"
            },
            "australia-audience-only": {
                "experiment": ["UphGeCP"],
                "audience_condition": {
                    "condition_type": 1,
                    "conditions": [{
                        "condition_type": 1,
                        "conditions": [{
                            "values": ["Australia"],
                            "type": "location",
                            "operator": 1
                        }]
                    }]
                },
                "audience_name": "Australia Audience only"
            }
        },
        "is_migrated_ma_portal": false,
        "goal": {
            "request-demo-trainer-central": {
                "is_project_level": false,
                "goal_type": 6,
                "goal_name": "Request Demo - Trainer Central",
                "custom_event_name": "zexpenserequestdemo",
                "display_name": "Request Demo - Trainer Central",
                "status": 1
            },
            "zoho-trident-windows-download-cta-2": {
                "is_project_level": true,
                "goal_type": 2,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/trident/"
                }],
                "goal_name": "Zoho Trident - Windows download CTA",
                "exclude_urls": [],
                "display_name": "Zoho Trident - Windows download CTA",
                "url": [{
                    "match_type": "1",
                    "value": "https://downloads.zohocdn.com/trident/windows/Trident.appinstaller"
                }],
                "status": 1
            },
            "signup-44": {
                "is_project_level": false,
                "goal_type": 6,
                "goal_name": "Signup",
                "custom_event_name": "signup",
                "display_name": "Signup",
                "status": 1
            },
            "zoho-desk-in-app-announcement-webinar-reg-": {
                "is_project_level": true,
                "goal_type": 2,
                "goal_url": [{
                    "match_type": 3,
                    "value": "https://crmplus.zoho.com/*/index.do/cxapp/agent/zohocorp/zoho-desk/requests/list/all-cases"
                }, {
                    "match_type": 3,
                    "value": "https://desk.zoho.com/agent/*/product-management/requests/list/all-cases"
                }],
                "goal_name": "Zoho Desk - In app Announcement Webinar reg.",
                "exclude_urls": [],
                "display_name": "Zoho Desk - In app Announcement Webinar reg.",
                "url": [{
                    "match_type": "1",
                    "value": "https://www.zoho.com/desk/customer-webinar.html"
                }],
                "status": 1
            },
            "zoho-desk-local-zoho-country": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 3,
                    "value": "https://desk.zoho.*/agent?action=CreatePortal"
                }],
                "goal_name": "Zoho Desk - Signup Country update",
                "custom_event_name": "countryUpdated",
                "exclude_urls": [],
                "display_name": "Zoho Desk - Signup Country update",
                "status": 1
            },
            "zoho-pos-re-additional": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 5,
                    "value": "/mfa-modules/index.html#/mfa/login"
                }, {
                    "match_type": 5,
                    "value": "/angular-modules/index.html#/personalise/setup"
                }, {
                    "match_type": 5,
                    "value": "/angular-modules/index.html#/switch-edition/"
                }],
                "goal_name": "Zoho POS RE - Additional",
                "custom_event_name": "Additional Event",
                "exclude_urls": [],
                "display_name": "Zoho POS RE - Additional",
                "status": 1
            },
            "zoho-inventory-turnover-ratio-calculator": {
                "is_project_level": true,
                "goal_type": 4,
                "goal_url": [{
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/inventory/inventory-turnover-ratio/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/inventory/inventory-turnover-ratio/"
                }],
                "goal_name": "Zoho Inventory - Turnover ratio calculator",
                "element_css_selector": "#toratio-calc-button",
                "exclude_urls": [],
                "display_name": "Zoho Inventory - Turnover ratio calculator",
                "status": 1
            },
            "zoho-workdrive-mac-download-clicked": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/workdrive/truesync.html"
                }],
                "goal_name": "Zoho WorkDrive - Mac Download Clicked",
                "custom_event_name": "zwdmacosdownload",
                "exclude_urls": [],
                "display_name": "Zoho WorkDrive - Mac Download Clicked",
                "status": 1
            },
            "zoho-voice-home-page-sign-up-now": {
                "is_project_level": true,
                "goal_type": 4,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/voice/"
                }],
                "goal_name": "Zoho Voice - Home page - Sign Up Now",
                "element_css_selector": ".float_btn",
                "exclude_urls": [],
                "display_name": "Zoho Voice - Home page - Sign Up Now",
                "status": 1
            },
            "linkedin": {
                "is_project_level": false,
                "goal_type": 4,
                "goal_name": "linkedin",
                "element_css_selector": "[title='Linkedin']",
                "display_name": "linkedin",
                "status": 1
            },
            "zoho-desk-in-app-explore-now-local-zoho": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 6,
                    "value": "https://desk.localzoho.com/agent/"
                }],
                "goal_name": "Zoho Desk - In App Explore NOW - Local Zoho",
                "custom_event_name": "zdeskinappexplorenow",
                "exclude_urls": [],
                "display_name": "Zoho Desk - In App Explore NOW - Local Zoho",
                "status": 1
            },
            "sign-up-goal-2": {
                "is_project_level": false,
                "goal_type": 6,
                "goal_name": "Sign Up Goal",
                "custom_event_name": "signup",
                "display_name": "Sign Up Goal",
                "status": 1
            },
            "zoho-inventory-sku-generator-add-and-retain": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/inventory/sku-generator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/inventory/sku-generator/"
                }],
                "goal_name": "Zoho Inventory - SKU Generator Add and Retain",
                "custom_event_name": "zinventoryskugeneratoraddretain",
                "exclude_urls": [],
                "display_name": "Zoho Inventory - SKU Generator Add and Retain",
                "status": 1
            },
            "zoho-inventory-eoq-calculator": {
                "is_project_level": true,
                "goal_type": 4,
                "goal_url": [{
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/inventory/economic-order-quantity/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/inventory/economic-order-quantity/"
                }],
                "goal_name": "Zoho Inventory - EOQ Calculator",
                "element_css_selector": "#eoq-calc-button",
                "exclude_urls": [],
                "display_name": "Zoho Inventory - EOQ Calculator",
                "status": 1
            },
            "zoho-desk-in-app-whats-new-page": {
                "is_project_level": true,
                "goal_type": 2,
                "goal_url": [{
                    "match_type": 3,
                    "value": "https://crmplus.zoho.com/*/index.do/cxapp/agent/zohocorp/zoho-desk/requests/list/all-cases"
                }, {
                    "match_type": 3,
                    "value": "https://desk.zoho.com/agent/*/product-management/requests/list/all-cases"
                }],
                "goal_name": "Zoho Desk - In app Whats New page",
                "exclude_urls": [],
                "display_name": "Zoho Desk - In app Whats New page",
                "url": [{
                    "match_type": "1",
                    "value": "https://www.zoho.com/desk/whatsnew.html"
                }],
                "status": 1
            },
            "zoho-inventory-sku-generator": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/inventory/sku-generator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/inventory/sku-generator/"
                }],
                "goal_name": "Zoho Inventory - SKU Generator ADD",
                "custom_event_name": "zinventoryskugeneratoradd",
                "exclude_urls": [],
                "display_name": "Zoho Inventory - SKU Generator ADD",
                "status": 1
            },
            "jan-2025-test-now-1896503000000013037": {
                "is_project_level": true,
                "goal_type": 8,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://landingpage.zoho.com"
                }],
                "time_threshold": 5,
                "goal_name": "Jan 2025 test now_1896503000000013037",
                "exclude_urls": [],
                "display_name": "Jan 2025 test now_1896503000000013037",
                "status": 1
            },
            "zoho-desk-local-zoho-language": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 3,
                    "value": "https://desk.zoho.*/agent?action=CreatePortal"
                }],
                "goal_name": "Zoho Desk - Signup Language update",
                "custom_event_name": "languageUpdated",
                "exclude_urls": [],
                "display_name": "Zoho Desk - Signup Language update",
                "status": 1
            },
            "business-solution-pricing": {
                "is_project_level": false,
                "goal_type": 4,
                "goal_name": "Business solution pricing",
                "element_css_selector": ".show-slide-form",
                "display_name": "Business solution pricing",
                "status": 1
            },
            "test-zoho-jan-2025-1896503000000011025": {
                "is_project_level": true,
                "goal_type": 8,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://landingpage.zoho.com"
                }],
                "time_threshold": 5,
                "goal_name": "Test Zoho Jan 2025_1896503000000011025",
                "exclude_urls": [],
                "display_name": "Test Zoho Jan 2025_1896503000000011025",
                "status": 1
            },
            "zoho-workdrive-windows-download-clicked": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/workdrive/truesync.html"
                }],
                "goal_name": "Zoho WorkDrive - Windows Download Clicked",
                "custom_event_name": "zwdwindowsdownload",
                "exclude_urls": [],
                "display_name": "Zoho WorkDrive - Windows Download Clicked",
                "status": 1
            },
            "zoho-healthcare-get-in-touch-cta": {
                "is_project_level": true,
                "goal_type": 4,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-in/r/healthcare/"
                }],
                "goal_name": "Zoho Healthcare - Get in touch CTA",
                "element_css_selector": ".cta .act-btn,.footer-section .act-btn,.leaf a",
                "exclude_urls": [],
                "display_name": "Zoho Healthcare - Get in touch CTA",
                "status": 1
            },
            "custom-signup-event-3": {
                "is_project_level": false,
                "goal_type": 6,
                "goal_name": "Custom Signup event",
                "custom_event_name": "signup",
                "display_name": "Custom Signup event",
                "status": 1
            },
            "zoho-pos-re-inventory": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 5,
                    "value": "/angular-modules/index.html#/"
                }, {
                    "match_type": 5,
                    "value": "/com.gofrugal.raymedi.webpos.inventory.Inventory/Inventory.html?"
                }, {
                    "match_type": 5,
                    "value": "com.gofrugal.raymedi.webpos.noninventory.Noninventory/Noninventory.html"
                }],
                "goal_name": "Zoho POS RE - Inventory",
                "custom_event_name": "Inventory Event",
                "exclude_urls": [],
                "display_name": "Zoho POS RE - Inventory",
                "status": 1
            },
            "zoho-test-click": {
                "is_project_level": true,
                "goal_type": 4,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/"
                }],
                "goal_name": "Zoho Test Click",
                "element_css_selector": ".zwc-content-left .zh-sign",
                "exclude_urls": [],
                "display_name": "Zoho Test Click",
                "status": 1
            },
            "zoho-trident-mac-download-cta-2": {
                "is_project_level": true,
                "goal_type": 2,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/trident/"
                }],
                "goal_name": "Zoho Trident - Mac download CTA",
                "exclude_urls": [],
                "display_name": "Zoho Trident - Mac download CTA",
                "url": [{
                    "match_type": "1",
                    "value": "https://downloads.zohocdn.com/trident/mac/apple/Trident.dmg"
                }],
                "status": 1
            },
            "zoho-campaigns-trial-plan-form-redirection": {
                "is_project_level": true,
                "goal_type": 2,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/"
                }],
                "goal_name": "Zoho Campaigns   Trial Plan Form redirection",
                "exclude_urls": [],
                "display_name": "Zoho Campaigns   Trial Plan Form redirection",
                "url": [{
                    "match_type": "1",
                    "value": "https://www.zoho.com/jp/campaigns/signup.html?src=campaigns-index"
                }],
                "status": 1
            },
            "signup-57": {
                "is_project_level": false,
                "goal_type": 6,
                "goal_name": "Signup",
                "custom_event_name": "signup",
                "display_name": "Signup",
                "status": 1
            },
            "zoho-pos-re-purchase-event": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 5,
                    "value": "/angular-modules/index.html"
                }, {
                    "match_type": 5,
                    "value": "/com.gofrugal.raymedi.webpos.inward.Inward/Inward.html?"
                }, {
                    "match_type": 5,
                    "value": "com.gofrugal.raymedi.webpos.outward.Outward/Outward.html?"
                }],
                "goal_name": "Zoho POS RE - Purchase",
                "custom_event_name": "Purchase Event",
                "exclude_urls": [],
                "display_name": "Zoho POS RE - Purchase",
                "status": 1
            },
            "zoho-creator-admission-management": {
                "is_project_level": true,
                "goal_type": 4,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/apps/admissions-and-enrollment-management-software.html"
                }],
                "goal_name": "Zoho Creator-Admission Management",
                "element_css_selector": ".added-placeholder [type]",
                "exclude_urls": [],
                "display_name": "Zoho Creator-Admission Management",
                "status": 1
            },
            "zoho-desk-local-zoho-timezone": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 3,
                    "value": "https://desk.zoho.*/agent?action=CreatePortal"
                }],
                "goal_name": "Zoho Desk - Signup Timezone update",
                "custom_event_name": "timeZoneUpdated",
                "exclude_urls": [],
                "display_name": "Zoho Desk - Signup Timezone update",
                "status": 1
            },
            "zoho-pos-re-tools": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 5,
                    "value": "/angular-modules/index.html#/"
                }],
                "goal_name": "Zoho POS RE - Tools",
                "custom_event_name": "Tools Event",
                "exclude_urls": [],
                "display_name": "Zoho POS RE - Tools",
                "status": 1
            },
            "google": {
                "is_project_level": false,
                "goal_type": 4,
                "goal_name": "google",
                "element_css_selector": "[title='Google']",
                "display_name": "google",
                "status": 1
            },
            "zoho-inventory-barcode-generator": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/inventory/free-barcode-generator/"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/inventory/free-barcode-generator/"
                }],
                "goal_name": "Zoho Inventory - Barcode Generator",
                "custom_event_name": "zinventorybarcode",
                "exclude_urls": [],
                "display_name": "Zoho Inventory - Barcode Generator",
                "status": 1
            },
            "zoho-inventory-download-barcode": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/inventory/free-barcode-generator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/inventory/free-barcode-generator/"
                }],
                "goal_name": "Zoho Inventory - Download Barcode",
                "custom_event_name": "zinventorydownloadbarcode",
                "exclude_urls": [],
                "display_name": "Zoho Inventory - Download Barcode",
                "status": 1
            },
            "begin-trial-sign-up": {
                "is_project_level": false,
                "goal_type": 6,
                "goal_name": "Begin trial sign up",
                "custom_event_name": "signup",
                "display_name": "Begin trial sign up",
                "status": 1
            },
            "test-goals": {
                "is_project_level": false,
                "goal_type": 5,
                "goal_name": "Test goals",
                "display_name": "Test goals",
                "status": 1
            },
            "zoho-pos-re-sales-event": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 5,
                    "value": "/com.gofrugal.raymedi.webpos.outward.Outward/Outward.html"
                }, {
                    "match_type": 5,
                    "value": "/angular-modules/index.html#/"
                }, {
                    "match_type": 5,
                    "value": "/com.gofrugal.raymedi.webpos.inward.Inward/Inward.html?"
                }],
                "goal_name": "Zoho POS RE - Sales",
                "custom_event_name": "Sales Event",
                "exclude_urls": [],
                "display_name": "Zoho POS RE - Sales",
                "status": 1
            },
            "zoho-trident-mac-intel-download-cta": {
                "is_project_level": true,
                "goal_type": 2,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/trident/"
                }],
                "goal_name": "Zoho Trident- Mac Intel download CTA",
                "exclude_urls": [],
                "display_name": "Zoho Trident- Mac Intel download CTA",
                "url": [{
                    "match_type": "1",
                    "value": "https://downloads.zohocdn.com/trident/mac/intel/Trident.dmg"
                }],
                "status": 1
            },
            "zoho-inventory-break-even-point-calculator": {
                "is_project_level": true,
                "goal_type": 4,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/inventory/break-even-point-calculator/"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/inventory/break-even-point-calculator/"
                }],
                "goal_name": "Zoho Inventory - Break even point Calculator",
                "element_css_selector": "#calc-btn",
                "exclude_urls": [],
                "display_name": "Zoho Inventory - Break even point Calculator",
                "status": 1
            },
            "zoho-pos-re-master-event": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 5,
                    "value": "/masters/index.html#/"
                }, {
                    "match_type": 5,
                    "value": "/angular-modules/index.html"
                }],
                "goal_name": "Zoho POS RE - Master",
                "custom_event_name": "Master Event",
                "exclude_urls": [],
                "display_name": "Zoho POS RE - Master",
                "status": 1
            },
            "zoho-sheets-download-button-for-windows": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://downloads.zohocdn.com/sheetapps/windows/internal/LandingPage.html"
                }],
                "goal_name": "Zoho Sheets - Download button for Windows",
                "custom_event_name": "zsheetswindowsdownload",
                "exclude_urls": [],
                "display_name": "Zoho Sheets - Download button for Windows",
                "status": 1
            },
            "zoho-workdrive-download-desktop-app": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/workdrive/desktop-sync.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/workdrive/truesync.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/workdrive/"
                }],
                "goal_name": "Zoho Workdrive - Download desktop app",
                "custom_event_name": "zwddownloaddeskapp",
                "exclude_urls": [],
                "display_name": "Zoho Workdrive - Download desktop app",
                "status": 1
            },
            "zoho-voice-contact-center-webpage-sign-up": {
                "is_project_level": true,
                "goal_type": 4,
                "goal_url": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/voice/contact-center.html"
                }],
                "goal_name": "Zoho Voice - Contact Center webpage - Sign up",
                "element_css_selector": ".float_btn",
                "exclude_urls": [],
                "display_name": "Zoho Voice - Contact Center webpage - Sign up",
                "status": 1
            },
            "zoho-desk-local-zoho-portalcreated": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 3,
                    "value": "https://desk.zoho.*/agent?action=CreatePortal"
                }],
                "goal_name": "Zoho Desk - Signup Portal creation",
                "custom_event_name": "portalCreated",
                "exclude_urls": [],
                "display_name": "Zoho Desk - Signup Portal creation",
                "status": 1
            },
            "zoho-inventory-reorder-calculator": {
                "is_project_level": true,
                "goal_type": 4,
                "goal_url": [{
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/inventory/reorder-point-calculator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/inventory/reorder-point-calculator/"
                }],
                "goal_name": "Zoho Inventory - Reorder Calculator",
                "element_css_selector": "#reorder-calc-btn",
                "exclude_urls": [],
                "display_name": "Zoho Inventory - Reorder Calculator",
                "status": 1
            },
            "zoho-pos-re-startup-wizard": {
                "is_project_level": true,
                "goal_type": 6,
                "goal_url": [{
                    "match_type": 5,
                    "value": "TruePOS/startupWizard/index.html#!/"
                }],
                "goal_name": "Zoho POS RE - Startup Wizard",
                "custom_event_name": "StartupWizard Event",
                "exclude_urls": [],
                "display_name": "Zoho POS RE - Startup Wizard",
                "status": 1
            }
        },
        "offset": 19800000,
        "url_group": {
            "zoho-contracts-signup-pages": {
                "include_urls": [{
                    "match_type": 2,
                    "value": "https://www.zoho.com/contracts/signup.html?plan=standard-trial&src=pricing"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/contracts/signup.html?plan=professional-trial&src=pricing"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/contracts/signup.html?plan=free&src=pricing"
                }],
                "exclude_urls": []
            },
            "zoho-creator-pages": {
                "include_urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/ar/creator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/de/creator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/es-xl/creator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fr/creator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/he/creator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/id/creator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/it/creator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/creator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/pt-br/creator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/nl/creator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/th/creator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/vi/creator/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com.cn/creator/"
                }],
                "exclude_urls": []
            },
            "ziot-pages": {
                "include_urls": [{
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/pricing.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/plan-comparison.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/request-demo.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/signup.html"
                }, {
                    "match_type": 2,
                    "value": "https://iot.zoho.com/platform/create-portal"
                }],
                "exclude_urls": []
            },
            "ziot-feature-pages": {
                "include_urls": [{
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/features/device-management.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/features/alarms-and-notifications.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/features/dashboard-and-widgets.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/features/analytics-and-reports.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/features/iot-controls.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/features/user-management.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/features/client-management.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/features/live-tracking-and-maps.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/features/integrations.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/features/data-security.html"
                }],
                "exclude_urls": []
            },
            "zoho-com-community": {
                "include_urls": [{
                    "match_type": 2,
                    "value": "https://community.zoho.com/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/customers.html?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/r/influence/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/partners/work-with-partner.html?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/startups/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/affiliate/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/humans-of-zoho/?src=ft"
                }],
                "exclude_urls": []
            },
            "apps-and-extensions": {
                "include_urls": [{
                    "match_type": 2,
                    "value": "https://www.zoho.com/mobile-apps.html?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/desktop-apps.html?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/developer/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/googleworkspace/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/microsoft365/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/apple-watch.html?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/r/integrations/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/r/browser-extensions/?src=ft"
                }],
                "exclude_urls": []
            },
            "zoho-com-learn": {
                "include_urls": [{
                    "match_type": 2,
                    "value": "https://www.zoho.com/spark/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/academy/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/blog/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://help.zoho.com/portal/en/kb/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/zia/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/the-long-game/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/newsletter.html?src=ft"
                }],
                "exclude_urls": []
            },
            "zoho-solo-landing-pages": {
                "include_urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/solo/features.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/solo/lp/samsung.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/solo/pricing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/solo/freelancers.html"
                }],
                "exclude_urls": []
            },
            "zoho-events-except-gallery-page": {
                "include_urls": [{
                    "match_type": 1,
                    "value": "https://events.zoho.com/ZoholicsEgypt2022#/?lang=en"
                }, {
                    "match_type": 1,
                    "value": "https://events.zoho.com/ZoholicsEgypt2022#/agenda?lang=en"
                }, {
                    "match_type": 1,
                    "value": "https://events.zoho.com/ZoholicsEgypt2022#/speakers?lang=en"
                }, {
                    "match_type": 1,
                    "value": "https://events.zoho.com/ZoholicsEgypt2022#/tickets?lang=en"
                }, {
                    "match_type": 1,
                    "value": "https://events.zoho.com/ZoholicsEgypt2022#/venue?lang=en"
                }, {
                    "match_type": 1,
                    "value": "https://events.zoho.com/ZoholicsEgypt2022#/gallery?lang=en"
                }],
                "exclude_urls": []
            },
            "zoho-workdrive-pages": {
                "include_urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/workdrive/lp/cloud-storage.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/workdrive/lp/dropbox-alternative.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/workdrive/lp/filesharing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/workdrive/lp/document-management-software.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/workdrive/lp/box-alternative.html"
                }],
                "exclude_urls": []
            },
            "zoho-japan-crmplus-pages": {
                "include_urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/lp/marketing-automation.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/lp/bi-tool.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/lp/survey.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/lp/customer-experience-management.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/lp/customer-engagement-tool.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/lp/project-management-tool.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/lp/sns-marketing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/lp/email-marketing.html"
                }],
                "exclude_urls": []
            },
            "zoho-bigin-small-business-express-blog": {
                "include_urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/small-business-express/10-CRM-best-practices-to-maximize-small-business-sales-in-2025.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/small-business-express/15-tips-for-small-business-success.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/small-business-express/education-crm-in-depth-guide.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/small-business-express/top-10-monday-crm-alternatives.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/small-business-express/easy-crm-for-small-businesses-comprehensive-guide.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/small-business-express/How-long-it-takes-to-implement-a-CRM.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/small-business-express/Churn-in-small-businesses-Causes-early-warnings-strategies-to-reduce-churn.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/small-business-express/small-business-express/time-for-sales-teams-to-migrate-from-spreadsheets-to-a-crm.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/small-business-express/benefits-of-switching-to-a-crm-tailored-for-small-businesses.html"
                }],
                "exclude_urls": []
            },
            "zoho-com-company": {
                "include_urls": [{
                    "match_type": 2,
                    "value": "https://www.zoho.com/aboutus.html?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/press.html?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/events.html??src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/inthenews.html?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/branding/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://www.zohoschools.com/?src=ft"
                }, {
                    "match_type": 2,
                    "value": "https://zohostatus.com/"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/careers/?src=ft"
                }],
                "exclude_urls": []
            },
            "zoho-landingpage-website": {
                "include_urls": [{
                    "match_type": 3,
                    "value": "https://www.zoho.*/landingpage*"
                }],
                "exclude_urls": []
            },
            "salesiq-variations-split-url": {
                "include_urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/salesiq/index1.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/salesiq/"
                }],
                "exclude_urls": []
            }
        },
        "is_full_tracking_enabled": true,
        "project_key": "a63a3daff87f4d33b6cffbe7a949ff5f",
        "privacy_value": 1,
        "trigger": {
            "scroll-and-time-spent": {
                "trigger_name": "Scroll 75",
                "trigger_condition": {
                    "condition_type": 1,
                    "conditions": [{
                        "condition_type": 1,
                        "conditions": [{
                            "type": "PERCENTAGE_PAGE_SCROLL",
                            "ui_type_id": 7,
                            "boundaryStartValue": "75",
                            "operator": 12
                        }]
                    }]
                }
            },
            "visitor-inactive-30-secs": {
                "trigger_name": "Visitor Inactive - 30 Secs",
                "trigger_condition": {
                    "condition_type": 1,
                    "conditions": [{
                        "condition_type": 1,
                        "conditions": [{
                            "type": "AFTER_X_SECONDS_OF_INACTIVITY",
                            "ui_type_id": 5,
                            "boundaryStartValue": "30",
                            "operator": 12
                        }]
                    }]
                }
            },
            "scroll-50": {
                "trigger_name": "Scroll 50",
                "trigger_condition": {
                    "condition_type": 1,
                    "conditions": [{
                        "condition_type": 1,
                        "conditions": [{
                            "type": "PERCENTAGE_PAGE_SCROLL",
                            "ui_type_id": 7,
                            "boundaryStartValue": "75",
                            "operator": 12
                        }]
                    }]
                }
            },
            "on-page-exit-intent-2": {
                "trigger_name": "On Page Exit Intent",
                "trigger_condition": {
                    "condition_type": 1,
                    "conditions": [{
                        "condition_type": 1,
                        "conditions": [{
                            "values": [],
                            "type": "EXIT_INTENT",
                            "operator": 1
                        }]
                    }]
                }
            },
            "on-time-delay-87": {
                "trigger_name": "On Time Delay",
                "trigger_condition": {
                    "condition_type": 1,
                    "conditions": [{
                        "condition_type": 1,
                        "conditions": [{
                            "type": "TIME_SPENT_ON_PAGE",
                            "boundaryStartValue": "20",
                            "operator": 12
                        }]
                    }]
                }
            },
            "on-time-delay-86": {
                "trigger_name": "On Time Delay",
                "trigger_condition": {
                    "condition_type": 1,
                    "conditions": [{
                        "condition_type": 1,
                        "conditions": [{
                            "type": "TIME_SPENT_ON_PAGE",
                            "boundaryStartValue": "15",
                            "operator": 12
                        }]
                    }]
                }
            }
        },
        "is_cross_origin_enabled": true,
        "script_included_warning": false,
        "is_landing_page": false,
        "experiment": {
            "aufr6r0": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://help.zoho.com/portal/en/community/zoho-crm"
                }],
                "name": "CRM   Help Doc Portal",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "aufr6r0",
                "status": 2
            },
            "sgDu08O": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/pricing.html"
                }],
                "name": "Zoho Bigin - Pricing Page Aug 2024",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "sgDu08O",
                "status": 2
            },
            "xx9rdLi": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/billing/solutions/saas/"
                }],
                "name": "Zblling - SaaS",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "xx9rdLi",
                "status": 2
            },
            "upIclcY": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/mail/how-to/create-business-email-address.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/mail/how-to/choose-a-professional-email-address.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/mail/how-to/create-email-alias.html"
                }],
                "name": "Zoho Mail - How-to: Business, Professional, Alias",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "upIclcY",
                "status": 2
            },
            "99T5uZY": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/whatsapp-for-customer-service.html"
                }],
                "name": "Zdesk - Whatsapp   O",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "99T5uZY",
                "status": 2
            },
            "0PM8mTD": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/practice/features/workpaper/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/practice/features/ledger/"
                }],
                "name": "Zoho Practice - Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "0PM8mTD",
                "status": 2
            },
            "YVO9C3z": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/lp/all-in-one-crm-ma.html"
                }],
                "name": "Zoho Japan CRMPlus - MA LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "YVO9C3z",
                "status": 2
            },
            "Ifw84cn": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-in/mail/zohomail-pricing.html"
                }],
                "name": "Zoho Mail Pricing (1)",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "Ifw84cn",
                "status": 2
            },
            "LrenEes": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/partners/system-integrators/?src=dd"
                }],
                "name": "Zoho Partners - System Integrators",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "LrenEes",
                "status": 2
            },
            "MDpjziD": {
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zoho Show - Homepage",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "MDpjziD",
                "session_duration": 7200,
                "status": 2
            },
            "IBIHerS": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/es-xl/one/pricing/"
                }],
                "name": "Zoho One pricing - Mexico",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "IBIHerS",
                "status": 2
            },
            "gmhIfYN": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/eprotect/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/eprotect/features.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/eprotect/email-security.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/eprotect/email-archiving.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/eprotect/why-choose-eprotect.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/eprotect/google-workspace.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/eprotect/microsoft-365.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/eprotect/pricing.html"
                }],
                "name": "Zoho - eprotect",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "gmhIfYN",
                "status": 2
            },
            "Be915Bl": {
                "name": "Zoho Payments - New Subscription Funnel",
                "type": 6,
                "steps": {
                    "8aa09ae07edf4091a2882864efaf1955": {
                        "step_order": 4,
                        "custom_step": "new_subscription_payment_submitted",
                        "key": "8aa09ae07edf4091a2882864efaf1955"
                    },
                    "f927f12834fc471dab17ec4cb06685a9": {
                        "step_order": 2,
                        "custom_step": "new_subscription_plan_selected",
                        "key": "f927f12834fc471dab17ec4cb06685a9"
                    },
                    "8de4823d5525463285c54abfa9c1db90": {
                        "step_order": 5,
                        "custom_step": "new_subscription_success",
                        "key": "8de4823d5525463285c54abfa9c1db90"
                    },
                    "00c20fbd74c24d269eeab20ac4ffeb5f": {
                        "step_order": 3,
                        "custom_step": "new_subscription_addons_selected",
                        "key": "00c20fbd74c24d269eeab20ac4ffeb5f"
                    },
                    "a940b7ec8ec247409f0e42495ed3cb27": {
                        "step_order": 1,
                        "custom_step": "new_subscription_page_landed",
                        "key": "a940b7ec8ec247409f0e42495ed3cb27"
                    }
                },
                "key": "Be915Bl",
                "session_time": 2592000000,
                "status": 2
            },
            "9IBjSvA": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/apps/restaurant-management-software.html"
                }],
                "name": "Zoho Creator-Gallery Apps-Restaurant Management",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "9IBjSvA",
                "status": 2
            },
            "vv0dfI5": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/webinars/1on1seminar-2.html"
                }],
                "name": "Zoho JP CRM - Webinars 1 on 1",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "vv0dfI5",
                "status": 2
            },
            "SKZ5Js8": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/es-mx/books/"
                }],
                "name": "Zoho Books - ES MX Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "SKZ5Js8",
                "status": 2
            },
            "WCIFvyy": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/qengine/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/qengine/features.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/qengine/pricing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/qengine/test-case-development.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/qengine/web-application-testing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/qengine/mobile-application-testing.html"
                }],
                "name": "Zoho QEngine - Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "WCIFvyy",
                "status": 2
            },
            "EotZfOk": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crm-for-everyone.html"
                }],
                "name": "Zoho CRM    Contact Us",
                "exclude_urls": [],
                "type": 7,
                "key": "EotZfOk",
                "forms": {
                    "custom_event_linkname": "signup",
                    "experiment_key": "EotZfOk",
                    "form_loaded": false,
                    "form_id": "",
                    "custom_event_name": "signup",
                    "form_selector": "",
                    "fields": [],
                    "form_name": "signupform"
                },
                "status": 2
            },
            "GbS3FzX": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/pipeline-management.html"
                }],
                "name": "Bigin-Pipeline page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "GbS3FzX",
                "status": 2
            },
            "gTUmEAb": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/zd-life-guard.html"
                }],
                "name": "Zdesk   Lifeguard   LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "gTUmEAb",
                "status": 2
            },
            "JhuJxKI": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crmplus/"
                }],
                "name": "Zoho CRMPlus - Homepage Latest",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "JhuJxKI",
                "status": 2
            },
            "CLvARrG": {
                "country_required": false,
                "urls": [{
                    "match_type": 8,
                    "value": "Partner with Zoho Desk"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zdesk - Partners   O",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "CLvARrG",
                "session_duration": 7200,
                "status": 2
            },
            "iBCXcgx": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/sheet/mobile-android.html?src=pd-menu"
                }],
                "name": "Zoho Sheet - Mobile Android Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "iBCXcgx",
                "status": 2
            },
            "sq0pOEQ": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/start/pricing.html"
                }],
                "name": "Zoho Start - Pricing page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "sq0pOEQ",
                "status": 2
            },
            "tGnL7S8": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/leadchain/"
                }],
                "name": "Zoho LeadChain - Homepage",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "tGnL7S8",
                "status": 2
            },
            "zuUern8": {
                "brand_flag": false,
                "thankyou_text": "Thank you for your feedback! ",
                "show_thankyou_button": true,
                "poll_questions": [{
                    "question_text": "Let us know if you did not find the template you were looking for!",
                    "sequence": 0,
                    "logics": {
                        "question_logic_type": 1
                    },
                    "question_type": 1,
                    "is_encrypted": false,
                    "randomise_flag": false,
                    "answers": [],
                    "is_mandatory": true,
                    "question_id": "10228000000696029"
                }],
                "trigger_type": 6,
                "response_type": 2,
                "thankyou_button_link": "",
                "last_button_label": "Submit",
                "language": "English",
                "thankyou_button_label": "Learn More",
                "type": 9,
                "include_urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/templates/"
                }],
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/templates/"
                }],
                "exclude_urls": [],
                "theme": 2,
                "key": "zuUern8",
                "thankyou_consent": "Your feedback and data related to your visits (device-specific, usage data, cookies, behavior and interactions) will be used to help us provide you with a personalized experience. Do you give us your consent to do so?",
                "audience": ["all"],
                "polls_ui_keys": {
                    "reply_button_label": "Reply",
                    "email_q_error_text": "Please enter a valid email address",
                    "smiley_q_labels": ["Hate", "Dislike", "Neutral", "Like", "Love"],
                    "long_q_placeholder": "Start typing here...",
                    "email_q_placeholder": "Enter your email ID",
                    "checkbox_q_desc_placeholder": "Tell us more...",
                    "powered_by": "Powered by ",
                    "last_button_label": "Submit",
                    "short_q_placeholder": "Start typing here...",
                    "next_button_label": "Next",
                    "radio_q_desc_placeholder": "Tell us more..."
                },
                "trigger_value": "scroll-50",
                "trigger": ["scroll-50"],
                "next_button_label": "Next",
                "question_option_colour": "#555555",
                "thankyou_type": 1,
                "reply_button_label": "Reply",
                "button_color": "#5f5f5f",
                "name": "Zoho Demo - Template Poll Page",
                "position": 2,
                "text_colour": "#EAEAEA",
                "bg_colour": "#2a2a2a",
                "special_filter": "{\"condition_type\":1,\"conditions\":[{\"condition_type\":1,\"conditions\":[{\"values\":[\"Desktop\"],\"type\":\"device\",\"operator\":1}]}]}",
                "status": 2
            },
            "SAiOjMI": {
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/flow/customers/"
                }],
                "name": "Zoho Flow - Customers Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "SAiOjMI",
                "status": 2
            },
            "lQTivSo": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketingplus/features.html"
                }],
                "name": "Zoho Marketing Plus - Features Hub Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "lQTivSo",
                "status": 2
            },
            "gBt96mB": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://static.zohocdn.com/crm/8230025/documentation/DotSDK/Modules.html"
                }],
                "name": "CRM-Modules Functions",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "gBt96mB",
                "status": 2
            },
            "cUR2vXy": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/billing/ach-payments-processing/"
                }],
                "name": "ZBilling - ACH Payments",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "cUR2vXy",
                "status": 2
            },
            "4ArWyfg": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/pt-br/writer/free-grammar-checker.html"
                }],
                "name": "Writer - PT-BR - Free Grammar checker",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "4ArWyfg",
                "status": 2
            },
            "CSSytQk": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-in/one/"
                }],
                "name": "Zoho One - EN IN",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "CSSytQk",
                "status": 2
            },
            "Sli2zyG": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/lp/buffer-alternative.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/lp/hootsuite-alternative.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/lp/sproutsocial-alternative.html"
                }],
                "name": "Zoho Social-LP Alternatives",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "Sli2zyG",
                "status": 2
            },
            "xPHPBWg": {
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/spend/corporate-travel-management/"
                }, {
                    "match_type": 6,
                    "value": "https://www.zoho.com/spend/expense-management/"
                }, {
                    "match_type": 6,
                    "value": "https://www.zoho.com/spend/corporate-cards/"
                }, {
                    "match_type": 6,
                    "value": "https://www.zoho.com/spend/procurement/"
                }, {
                    "match_type": 6,
                    "value": "https://www.zoho.com/spend/ap-automation/"
                }, {
                    "match_type": 6,
                    "value": "httpshttps://www.zoho.com/spend/payroll-management/"
                }],
                "name": "Zoho Spend - Feature Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "xPHPBWg",
                "status": 2
            },
            "gu1PuXk": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/billing/pricing/"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/billing/pricing/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/billing/pricing-comparison/"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/billing/pricing-comparison/"
                }],
                "name": "Zoho Billing - Pricing and Comparison pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "gu1PuXk",
                "status": 2
            },
            "milliuK": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/ea/crm-for-everyone.html"
                }],
                "name": "Zoho CRM- CRM for Everyone EA",
                "exclude_urls": [],
                "type": 7,
                "key": "milliuK",
                "forms": {
                    "experiment_key": "milliuK",
                    "form_conversion_url": [{
                        "match_type": 2,
                        "value": "https://www.zoho.com/crm/ea/crm-for-everyone.html?drlnk=request-access&sbmt=Success"
                    }],
                    "form_loaded": true,
                    "form_id": "WebForm4538240009358079244",
                    "form_selector": "#WebForm4538240009358079244",
                    "fields": [{
                        "field_id": "",
                        "form_field_key": "8d9dfc63c2db42d6af0c6c09e24db88a",
                        "field_name": "COBJCF17"
                    }, {
                        "field_id": "",
                        "form_field_key": "da7acf96d8024381a1e0e4e3ffd7633b",
                        "field_name": "COBJ43CF13"
                    }, {
                        "field_id": "",
                        "form_field_key": "29a7cac9cbc942ec8945cbb2beca109a",
                        "field_name": "COBJCF6"
                    }, {
                        "field_id": "COBJCF6",
                        "form_field_key": "2131499c8f2344e8b20715ca4b6ae1d4",
                        "field_name": "COBJCF6"
                    }, {
                        "field_id": "email",
                        "form_field_key": "c929b99530174e1a88b756040e50d2e5",
                        "field_name": "Email"
                    }, {
                        "field_id": "name",
                        "form_field_key": "ed3b7727b3034a78aa5965288d480690",
                        "field_name": "name"
                    }, {
                        "field_id": "",
                        "form_field_key": "1282318e449942e0a20491c6e95ba814",
                        "field_name": "captchapop"
                    }, {
                        "field_id": "",
                        "form_field_key": "b79ae174177d4a338e9501be5732ca6c",
                        "field_name": "returnURL"
                    }, {
                        "field_id": "",
                        "form_field_key": "8c3f919f7ce7458ca75e6fe5d4027ccc",
                        "field_name": "COBJ43CF7"
                    }, {
                        "field_id": "",
                        "form_field_key": "a1ca3b93add342889fde6519c90f2e4a",
                        "field_name": "actionType"
                    }, {
                        "field_id": "",
                        "form_field_key": "7865f4a19de14f70945bb48a691b244d",
                        "field_name": "xmIwtLD"
                    }, {
                        "field_id": "",
                        "form_field_key": "2c2050a9e9e34d079bc5905d0bec9508",
                        "field_name": "xnQsjsdp"
                    }],
                    "form_name": "WebForm4538240009358079244",
                    "domain_match": true
                },
                "status": 2
            },
            "pOFFkKW": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/enterprise/"
                }],
                "name": "Zoho For Enterprise",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "pOFFkKW",
                "status": 2
            },
            "iWDPkjn": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/sign/api/estamping.html"
                }],
                "name": "Zoho Sign - API Estamping page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "iWDPkjn",
                "status": 2
            },
            "567WgMe": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/developer/docs/client-script/overview.html"
                }],
                "name": "Zoho CRM - Client Script Overview",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "567WgMe",
                "status": 2
            },
            "Heh27bf": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/billing/logout/"
                }],
                "name": "Zoho Billing   Logout",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "Heh27bf",
                "status": 2
            },
            "C028w5k": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/agencies.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/remote-teams.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/personal-profiles.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/travel-agency.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/retail.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/ecommerce.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/banking.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/real-estate.html"
                }],
                "name": "Zoho Social- Solutions",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "C028w5k",
                "status": 2
            },
            "vA9Fe7X": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/work-with-powerpoint-files.html"
                }],
                "name": "Zoho Show - Work with PPT",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "vA9Fe7X",
                "status": 2
            },
            "d0ncdoA": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/free-email-marketing.html"
                }],
                "name": "Campaigns   Free Email Marketing",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "d0ncdoA",
                "status": 2
            },
            "OYvFQrC": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crmplus/pricing.html"
                }],
                "name": "Zoho CRMPlus - Pricing page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "OYvFQrC",
                "status": 2
            },
            "cv9FHT9": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com.cn/mail/zohomail-pricing.html"
                }],
                "name": "Zoho Mail pricing - China",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "cv9FHT9",
                "status": 2
            },
            "ccW6YbB": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/pricing-comparison.html"
                }],
                "name": "Zoho Desk - Pricing Comparison",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "ccW6YbB",
                "status": 2
            },
            "OEkB5dF": {
                "urls": [{
                    "match_type": 3,
                    "value": "https://www.zoho.*/backstage/*"
                }],
                "name": "Zoho Backstage - All pages  3",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "OEkB5dF",
                "status": 2
            },
            "iDlKWc0": {
                "country_required": false,
                "urls": [{
                    "match_type": 10,
                    "value": "ziot-pages"
                }, {
                    "match_type": 10,
                    "value": "ziot-feature-pages"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/iot/what-is-iot.html"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "ZIoT",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "iDlKWc0",
                "session_duration": 7200,
                "status": 2
            },
            "BnnJPgo": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/what-if.html"
                }],
                "name": "Zoho CRM - What If page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "BnnJPgo",
                "status": 2
            },
            "1s5xeUu": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/salesiq/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/social/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/survey/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/analytics/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/projects/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/desk/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/marketingautomation/"
                }],
                "name": "Zoho Japan - Point product home page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "1s5xeUu",
                "status": 2
            },
            "mMcCzsf": {
                "urls": [{
                    "match_type": 5,
                    "value": "https://catalyst.zoho.com/"
                }],
                "name": "Zoho Catalyst - All Pages NEW (1)",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "mMcCzsf",
                "status": 2
            },
            "nSYVtkE": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/fr/writer/"
                }],
                "name": "Writer - FR",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "nSYVtkE",
                "status": 2
            },
            "Mem0orB": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/sheet/excel-alternative.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/sheet/google-sheets-alternative.html"
                }],
                "name": "Zoho Sheet - Alternate pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "Mem0orB",
                "status": 2
            },
            "4S1uyjN": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/workplace/articles/content-calendar-types.html"
                }],
                "name": "Workplace   Content Calendar types",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "4S1uyjN",
                "status": 2
            },
            "0qhMty2": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/holiday-support-management.html"
                }],
                "name": "Zdesk - Holiday CSS   LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "0qhMty2",
                "status": 2
            },
            "U2Jr3NP": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/teaminbox/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/teaminbox/pricing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/zeptomail/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/zeptomail/pricing.html"
                }],
                "name": "Zoho TeamInbox- Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "U2Jr3NP",
                "status": 2
            },
            "7cotiLl": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/partners/"
                }],
                "name": "Zoho Partner - For Partner",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "7cotiLl",
                "status": 2
            },
            "davz2UQ": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-in/enterprise/"
                }],
                "name": "Zoho for Enterprise - Software Solutions",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "davz2UQ",
                "status": 2
            },
            "enWqIJN": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/billing/solutions/ott-and-video/"
                }],
                "name": "ZBilling - OTT and Media",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "enWqIJN",
                "status": 2
            },
            "49IJunS": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/welcome.html"
                }],
                "name": "Zoho Japan - CRM Welcome.html",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "49IJunS",
                "status": 2
            },
            "HVMx6vl": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://prezohoweb.zoho.com/creator/launchpad/"
                }],
                "name": "Zoho Creator Launchpad AI",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "HVMx6vl",
                "status": 2
            },
            "lSVf3Kq": {
                "brand_flag": true,
                "thankyou_text": "Thank you for your feedback! ",
                "show_thankyou_button": true,
                "poll_questions": [{
                    "question_text": "Did you find the information you were looking for on this page?",
                    "sequence": 0,
                    "logics": {
                        "question_logic_type": 4
                    },
                    "question_type": 4,
                    "is_encrypted": false,
                    "randomise_flag": false,
                    "answers": [{
                        "answer_text": "Yes, I did.",
                        "sequence": 0,
                        "is_comment_mandatory": false,
                        "comment_flag": false,
                        "answer_id": "10228000059468083",
                        "logic_mapping": {
                            "question_logic_type": 2
                        }
                    }, {
                        "answer_text": "No, I did not",
                        "sequence": 1,
                        "is_comment_mandatory": false,
                        "comment_flag": false,
                        "answer_id": "10228000059468085",
                        "logic_mapping": {
                            "question_logic_type": 3,
                            "linked_question_id": "10228000059468087"
                        }
                    }],
                    "is_mandatory": true,
                    "question_id": "10228000059468081"
                }, {
                    "question_text": "Can you please let us know what information you were unable to find?",
                    "sequence": 1,
                    "logics": {
                        "question_logic_type": 2
                    },
                    "question_type": 2,
                    "is_encrypted": false,
                    "randomise_flag": false,
                    "answers": [],
                    "is_mandatory": true,
                    "question_id": "10228000059468087"
                }],
                "trigger_type": 4,
                "response_type": 1,
                "thankyou_button_link": "",
                "last_button_label": "Submit",
                "language": "English",
                "thankyou_button_label": "Learn More",
                "type": 9,
                "include_urls": [{
                    "match_type": 1,
                    "value": "www.bigin.com/quick-start-guide.html"
                }],
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "www.bigin.com/quick-start-guide.html"
                }],
                "exclude_urls": [],
                "theme": 2,
                "key": "lSVf3Kq",
                "thankyou_consent": "Your feedback and data related to your visits (device-specific, usage data, cookies, behavior and interactions) will be used to help us provide you with a personalized experience. Do you give us your consent to do so?",
                "audience": ["all"],
                "polls_ui_keys": {
                    "reply_button_label": "Reply",
                    "email_q_error_text": "Please enter a valid email address",
                    "smiley_q_labels": ["Hate", "Dislike", "Neutral", "Like", "Love"],
                    "long_q_placeholder": "Start typing here...",
                    "email_q_placeholder": "Enter your email ID",
                    "checkbox_q_desc_placeholder": "Tell us more...",
                    "powered_by": "Powered by ",
                    "last_button_label": "Submit",
                    "short_q_placeholder": "Start typing here...",
                    "next_button_label": "Next",
                    "radio_q_desc_placeholder": "Tell us more..."
                },
                "trigger_value": "on-page-exit-intent-2",
                "trigger": ["on-page-exit-intent-2"],
                "next_button_label": "Next",
                "question_option_colour": "#3cab74",
                "thankyou_type": 1,
                "reply_button_label": "Reply",
                "button_color": "#48b07d",
                "name": "Zoho Bigin Quick start guide",
                "position": 1,
                "text_colour": "#EAEAEA",
                "bg_colour": "#0b9651",
                "special_filter": "{\"condition_type\":1,\"conditions\":[{\"condition_type\":1,\"conditions\":[{\"values\":[\"Desktop\",\"Tablet\",\"Mobile\"],\"type\":\"device\",\"operator\":1}]}]}",
                "status": 2
            },
            "QtWJMt8": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/invoice/create-send-estimates/"
                }],
                "name": "Invoice - Estimates  Global, US, UK, IN, AU, CA, SA",
                "activation_mode": 1,
                "exclude_urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/au/invoice/create-send-estimates/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/us/invoice/create-send-estimates/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/uk/invoice/create-send-estimates/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/invoice/create-send-estimates/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/ca/invoice/create-send-estimates/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/za/invoice/create-send-estimates/"
                }],
                "type": 5,
                "key": "QtWJMt8",
                "status": 2
            },
            "TCRQsr2": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/holiday-support-management.html__"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/holiday-support-management.html"
                }],
                "name": "Zoho Desk - Festival Landing page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "TCRQsr2",
                "status": 2
            },
            "nUKv4Aa": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/lp/real-estate-crm.html"
                }],
                "name": "Zoho CRM-Real Estate LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "nUKv4Aa",
                "status": 2
            },
            "zI2fTz7": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/pt-br/workplace/teste-gratis.html"
                }],
                "name": "Zoho Workplace - Teste Gratis Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "zI2fTz7",
                "status": 2
            },
            "Xh0ceiB": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/zendesk-alternative.html"
                }],
                "name": "Zoho Desk - Zendesk Alternative",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "Xh0ceiB",
                "status": 2
            },
            "1WPrVWB": {
                "heatmap": 2,
                "audience": ["all"],
                "goal": ["begin-trial-sign-up"],
                "redirect_params": true,
                "type": 2,
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/contracts/pricing.html"
                }],
                "permittedTrafic": 100,
                "variations": {
                    "DbtL": {
                        "allotedPercentage": 50,
                        "variation_css_changes": "",
                        "is_original": false,
                        "name": "Pricing 1",
                        "variation_changes": [""],
                        "url": "https://www.zoho.com/contracts/pricing1.html",
                        "key": "DbtL"
                    },
                    "k5qt": {
                        "allotedPercentage": 50,
                        "is_original": true,
                        "name": "Original",
                        "url": "https://www.zoho.com/contracts/pricing.html",
                        "key": "k5qt"
                    }
                },
                "name": "Contracts Pricing Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "integrations": {},
                "key": "1WPrVWB",
                "status": 2
            },
            "AR3JncK": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/ke/books/"
                }],
                "name": "Zoho Books KE",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "AR3JncK",
                "status": 2
            },
            "w1iFgpV": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/trident/features.html"
                }],
                "name": "Zoho Trident - Features page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "w1iFgpV",
                "status": 2
            },
            "coidZz9": {
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/lp/powerful-and-free-crm.html"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Bigin Powerful and Free CRM - Yelp",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "coidZz9",
                "session_duration": 7200,
                "status": 2
            },
            "rByLaIZ": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://harshavardhan31.blogspot.com/"
                }],
                "name": "Secondary script test",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "rByLaIZ",
                "status": 2
            },
            "a7WPkg0": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/whats-new/release-notes.html"
                }],
                "name": "Zoho CRM - What's new in Zoho CRM",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "a7WPkg0",
                "status": 2
            },
            "fDmvuSD": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/lp/purchase-order-procurement-management-software.html"
                }],
                "name": "Zoho Creator - procurement management page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "fDmvuSD",
                "status": 2
            },
            "qXIdSCm": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/ea/crm-for-everyone.html"
                }],
                "name": "Zoho CRM- CRM For Everyone - Early Access",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "qXIdSCm",
                "status": 2
            },
            "DoIuPeu": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/request-demo.html"
                }],
                "name": "Zoho Social-Demo",
                "exclude_urls": [],
                "type": 7,
                "key": "DoIuPeu",
                "forms": {
                    "experiment_key": "DoIuPeu",
                    "form_conversion_url": [{
                        "match_type": 6,
                        "value": "https://www.zoho.com/social/request-demo.html?submit=success"
                    }],
                    "form_loaded": false,
                    "form_id": "z_crmwebform",
                    "form_selector": "",
                    "fields": [],
                    "form_name": "",
                    "domain_match": false
                },
                "status": 2
            },
            "LgwgSe3": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/zia/agents/"
                }],
                "name": "Zia - AI Agent",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "LgwgSe3",
                "status": 2
            },
            "EeibG75": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/mail/lp/custom-domain-email.html"
                }],
                "name": "Zoho Mail - Custom domain page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "EeibG75",
                "status": 2
            },
            "W7zg0Yb": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/index1.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/apps/school-management-system-software.html"
                }],
                "name": "Zoho Creator - Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "W7zg0Yb",
                "status": 2
            },
            "ZnaWMbO": {
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/publish/"
                }],
                "name": "Zoho Publish - All pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "ZnaWMbO",
                "status": 2
            },
            "XsWTaxz": {
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/sheet/free-spreadsheet-templates/"
                }],
                "name": "Zoho Sheet - Free spreadsheet Templates",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "XsWTaxz",
                "status": 2
            },
            "h2JawbM": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/partners/crmplus-partnership-program.html"
                }],
                "name": "CRM plus partnership program",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "h2JawbM",
                "status": 2
            },
            "VJ02sUY": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/us/invoice/pricing/"
                }],
                "name": "Zoho Invoice   Pricing Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "VJ02sUY",
                "status": 2
            },
            "Kzo89or": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/low-code-jumpstart-app-development-service.html"
                }],
                "name": "Zoho Creator Jumpstart",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "Kzo89or",
                "status": 2
            },
            "u0wLFxo": {
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/social/"
                }],
                "name": "Zoho Social - Signup form",
                "exclude_urls": [],
                "type": 7,
                "key": "u0wLFxo",
                "forms": {
                    "custom_event_linkname": "signup",
                    "experiment_key": "u0wLFxo",
                    "form_loaded": false,
                    "form_id": "signupform",
                    "custom_event_name": "signup",
                    "form_selector": "",
                    "fields": [],
                    "form_name": ""
                },
                "status": 2
            },
            "lqWLowd": {
                "urls": [{
                    "match_type": 5,
                    "value": "https://www.zoho.com/learn/"
                }],
                "name": "Zoho Learn - All Pages New",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "lqWLowd",
                "status": 2
            },
            "LQiqgQe": {
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/iot/lp-2"
                }],
                "name": "ZIoT LPs",
                "activation_mode": 1,
                "exclude_urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/iot/lp"
                }],
                "type": 5,
                "key": "LQiqgQe",
                "status": 2
            },
            "XHWdGvk": {
                "name": "Writer - PT-BR - Sign Up form",
                "type": 6,
                "steps": {
                    "03a5e52cbdef4166aa9097b45d5ad99f": {
                        "step_order": 1,
                        "key": "03a5e52cbdef4166aa9097b45d5ad99f",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/pt-br/writer/"
                        }]
                    },
                    "6de2e8496fed45dd83d15fdbfc02821b": {
                        "step_order": 2,
                        "key": "6de2e8496fed45dd83d15fdbfc02821b",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/writer/signup.html"
                        }]
                    }
                },
                "key": "XHWdGvk",
                "session_time": 2592000000,
                "status": 2
            },
            "TF8ocDy": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/analytics/insightshq/choosing-the-right-data-visualization-type.html"
                }],
                "name": "Zoho Analytics insighthq Page 3",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "TF8ocDy",
                "status": 2
            },
            "WIfpeq0": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/analytics/embedded-analytics.html"
                }],
                "name": "Zoho Analytics - Embedded Analytics",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "WIfpeq0",
                "status": 2
            },
            "5v5zJ1r": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-uk/desk/software-zohodesk-articad-UK-2402-L-ADV-LNK-CAS.html"
                }],
                "name": "Zoho Desk - Ads Group",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "5v5zJ1r",
                "status": 2
            },
            "nRupj6x": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/voice/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/voice/request-demo.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/voice/contact-center.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/voice/pricing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/voice/features.html"
                }],
                "name": "Zoho Voice   Requests/contact/pricing/features",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "nRupj6x",
                "status": 2
            },
            "o3bKJxG": {
                "brand_flag": true,
                "thankyou_text": "Thank you for your feedback! ",
                "show_thankyou_button": true,
                "poll_questions": [{
                    "question_text": "Did you find the information you were looking for on this page?",
                    "sequence": 0,
                    "logics": {
                        "question_logic_type": 4
                    },
                    "question_type": 4,
                    "is_encrypted": false,
                    "randomise_flag": false,
                    "answers": [{
                        "answer_text": "Yes, I did.",
                        "sequence": 0,
                        "is_comment_mandatory": false,
                        "comment_flag": false,
                        "answer_id": "10228000059305029",
                        "logic_mapping": {
                            "question_logic_type": 2
                        }
                    }, {
                        "answer_text": "No, I did not",
                        "sequence": 1,
                        "is_comment_mandatory": false,
                        "comment_flag": false,
                        "answer_id": "10228000059305031",
                        "logic_mapping": {
                            "question_logic_type": 3,
                            "linked_question_id": "10228000059305033"
                        }
                    }],
                    "is_mandatory": true,
                    "question_id": "10228000059305027"
                }, {
                    "question_text": "Can you please let us know what information you were unable to find?",
                    "sequence": 1,
                    "logics": {
                        "question_logic_type": 2
                    },
                    "question_type": 2,
                    "is_encrypted": false,
                    "randomise_flag": false,
                    "answers": [],
                    "is_mandatory": true,
                    "question_id": "10228000059305033"
                }],
                "trigger_type": 2,
                "response_type": 1,
                "thankyou_button_link": "",
                "last_button_label": "Submit",
                "language": "English",
                "thankyou_button_label": "Learn More",
                "type": 9,
                "include_urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/pricing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/help/feature-availability.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/features/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/compare-zohocrm-editions.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/contact-us.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/webinars/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/powerful-and-free-crm.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/resources/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/templates/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/integrations/"
                }],
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/pricing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/help/feature-availability.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/features/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/compare-zohocrm-editions.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/contact-us.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/webinars/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/powerful-and-free-crm.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/resources/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/templates/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/integrations/"
                }],
                "exclude_urls": [],
                "theme": 2,
                "key": "o3bKJxG",
                "thankyou_consent": "Your feedback and data related to your visits (device-specific, usage data, cookies, behavior and interactions) will be used to help us provide you with a personalized experience. Do you give us your consent to do so?",
                "audience": ["all"],
                "polls_ui_keys": {
                    "reply_button_label": "Reply",
                    "email_q_error_text": "Please enter a valid email address",
                    "smiley_q_labels": ["Hate", "Dislike", "Neutral", "Like", "Love"],
                    "long_q_placeholder": "Start typing here...",
                    "email_q_placeholder": "Enter your email ID",
                    "checkbox_q_desc_placeholder": "Tell us more...",
                    "powered_by": "Powered by ",
                    "last_button_label": "Submit",
                    "short_q_placeholder": "Start typing here...",
                    "next_button_label": "Next",
                    "radio_q_desc_placeholder": "Tell us more..."
                },
                "trigger_value": "on-time-delay-87",
                "trigger": ["on-time-delay-87"],
                "next_button_label": "Next",
                "question_option_colour": "#3cab74",
                "thankyou_type": 1,
                "reply_button_label": "Reply",
                "button_color": "#48b07d",
                "name": "Zoho Bigin Pages",
                "position": 1,
                "text_colour": "#EAEAEA",
                "bg_colour": "#0b9651",
                "special_filter": "{\"condition_type\":1,\"conditions\":[{\"condition_type\":1,\"conditions\":[{\"values\":[\"Desktop\",\"Tablet\",\"Mobile\"],\"type\":\"device\",\"operator\":1}]}]}",
                "status": 2
            },
            "niO0UKk": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/apps/it-asset-tracker-management-software.html"
                }],
                "name": "Zoho Creator - Gallery Apps - IT Asset Management",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "niO0UKk",
                "status": 2
            },
            "N6l8JAX": {
                "name": "Writer- Free grammar checker - Sign Up Form",
                "type": 6,
                "steps": {
                    "b2e2f750183c481fa0b3f381950d3847": {
                        "step_order": 2,
                        "key": "b2e2f750183c481fa0b3f381950d3847",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/writer/signup.html"
                        }]
                    },
                    "a08a2dabf68c4b8fa8c2aa5a9e5e53a0": {
                        "step_order": 1,
                        "key": "a08a2dabf68c4b8fa8c2aa5a9e5e53a0",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/writer/free-grammar-checker.html"
                        }]
                    }
                },
                "key": "N6l8JAX",
                "session_time": 2592000000,
                "status": 2
            },
            "aQ9gVkr": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/ai-in-customer-service.html"
                }],
                "name": "Zoho desk - Zia   O",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "aQ9gVkr",
                "status": 2
            },
            "HaLssYv": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/cliq/contact-demo.html"
                }],
                "name": "Zoho Cliq - Contact Demo Form",
                "exclude_urls": [],
                "type": 7,
                "key": "HaLssYv",
                "forms": {
                    "custom_event_linkname": "cliqform",
                    "experiment_key": "HaLssYv",
                    "form_loaded": true,
                    "form_id": "form-hockey_v1",
                    "custom_event_name": "cliqform",
                    "form_selector": "#form-hockey_v1",
                    "fields": [{
                        "field_id": "hockey_v1-query",
                        "form_field_key": "d45f796d428d4da5931f419129c6234f",
                        "field_name": "query"
                    }],
                    "form_name": "form-hockey_v1"
                },
                "status": 2
            },
            "Y5QG7EM": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/help/"
                }],
                "name": "Zoho Creator - Help",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "Y5QG7EM",
                "status": 2
            },
            "QjwNBo3": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/the-bigin-story.html"
                }],
                "name": "Bigin's Story",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "QjwNBo3",
                "status": 2
            },
            "bhQDRuM": {
                "urls": [{
                    "match_type": 5,
                    "value": "https://docs.catalyst.zoho.com/"
                }],
                "name": "Zoho Catalyst - Docs Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "bhQDRuM",
                "status": 2
            },
            "4sQHZ3H": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/pt-br/"
                }],
                "name": "Bigin CRM   Português  Brasil",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "4sQHZ3H",
                "status": 2
            },
            "eBxx9r9": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/us/books/form-w9-generator/"
                }],
                "name": "Zoho Books",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "eBxx9r9",
                "status": 2
            },
            "umyiOyi": {
                "name": "Writer - FR- Free grammar checker - Sign Up form",
                "type": 6,
                "steps": {
                    "950e2b5e58bd42eba3e4e2f7dc97e5e1": {
                        "step_order": 1,
                        "key": "950e2b5e58bd42eba3e4e2f7dc97e5e1",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/fr/writer/free-grammar-checker.html"
                        }]
                    },
                    "5eb090cbbceb416691334c36004bda99": {
                        "step_order": 2,
                        "key": "5eb090cbbceb416691334c36004bda99",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/writer/signup.html"
                        }]
                    }
                },
                "key": "umyiOyi",
                "session_time": 2592000000,
                "status": 2
            },
            "b1xtney": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/lp/crm-for-financial-services.html"
                }],
                "name": "Bigin   Financial Services LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "b1xtney",
                "status": 2
            },
            "wzr3bax": {
                "urls": [{
                    "match_type": 1,
                    "value": "http://874761803.localtest.zohopages.com:8080/Test-Zoho-Jan-2025"
                }],
                "name": "Test Zoho Jan 2025_1896503000000011025",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "wzr3bax",
                "status": 2
            },
            "AFJpAXI": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/apps/pos-point-of-sale-software.html"
                }],
                "name": "Zoho Creator - Gallery Apps - Point Of Sale  POS",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "AFJpAXI",
                "status": 2
            },
            "9iYxxpK": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/lp/large-scale-distribution.html"
                }],
                "name": "Zoho Japan - Large scale distribution page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "9iYxxpK",
                "status": 2
            },
            "dHy3DXy": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/people/introducing-zohopeople-5.0.html"
                }],
                "name": "Zoho People 5.0",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "dHy3DXy",
                "status": 2
            },
            "sGWsIM8": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/analytics/embedded-analytics-features.html"
                }],
                "name": "Zoho Analytics - Features",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "sGWsIM8",
                "status": 2
            },
            "1iRfcLZ": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/switch-to-zoho-desk.html"
                }],
                "name": "Zoho Desk vs other help desk vendors",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "1iRfcLZ",
                "status": 2
            },
            "NAviFOE": {
                "urls": [{
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/invoice/free-invoice-generator.html"
                }],
                "name": "Zoho Invoice - Free Invoice Generator",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "NAviFOE",
                "status": 2
            },
            "yU2BDwi": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/workplace/pricing.html"
                }],
                "name": "Zoho Workplace   Pricing (1)",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "yU2BDwi",
                "status": 2
            },
            "rK3PZNX": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://toolkit.localzoho.com/"
                }],
                "name": "https://toolkit.localzoho.com/",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "rK3PZNX",
                "status": 2
            },
            "TDTIVlq": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/lp/custom-purchase-order-procurement-management-software.html"
                }],
                "name": "Zoho Creator - LP Custom purchase Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "TDTIVlq",
                "status": 2
            },
            "rp5stkx": {
                "name": "Writer - es-xl free grammar checker - Sign up form",
                "type": 6,
                "steps": {
                    "ba38d70840f649ecb78c5c1265ce4bb8": {
                        "step_order": 1,
                        "key": "ba38d70840f649ecb78c5c1265ce4bb8",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/es-xl/writer/free-grammar-checker.html"
                        }]
                    },
                    "9aaca2636f6941dba7b1efd2f05a35af": {
                        "step_order": 2,
                        "key": "9aaca2636f6941dba7b1efd2f05a35af",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/writer/signup.html"
                        }]
                    }
                },
                "key": "rp5stkx",
                "session_time": 2592000000,
                "status": 2
            },
            "PzvnetA": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/books/accountant/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/au/books/accountant/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/bh/books/accountant/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/ca/books/accountant/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/ke/books/accountant/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/kw/books/accountant/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/om/books/accountant/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/qa/books/accountant/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/sa/books/accountant/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/za/books/accountant/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/ae/books/accountant/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/uk/books/accountant/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/us/books/accountant/"
                }],
                "name": "Zoho Books   All DCs",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "PzvnetA",
                "status": 2
            },
            "FUaSqhp": {
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/trial-hub/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/trial-hub/zoho-crm-overview.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/trial-hub/zoho-crm-implementation.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/trial-hub/discover-zoho-crm.html"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zoho CRM - Hub Trial Pages",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "FUaSqhp",
                "session_duration": 7200,
                "status": 2
            },
            "IF5CvTv": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/assets.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/services-and-parts.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/zoho-fsm-mobile-app.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/service-reports.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/requests.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/estimates.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/agent-location-tracking.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/contact-management.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/company-management.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/customers.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/invoicing-and-payments.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/timesheets.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/webforms.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/notifications.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/whatsapp.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/emails.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/notes-and-attachments.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/customization.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/reports.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/security-and-privacy.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/automation.html"
                }],
                "name": "Zoho - FSM",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "IF5CvTv",
                "status": 2
            },
            "1LcckSl": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://zoho.com/desk/lp/customer-service-software.html"
                }],
                "name": "ZDesk - CSS New   LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "1LcckSl",
                "status": 2
            },
            "4rBdlS8": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/customers/"
                }],
                "name": "Zoho CRM   Customer Success",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "4rBdlS8",
                "status": 2
            },
            "bigllMP": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/lp/all-in-one-cxm-platform.html"
                }],
                "name": "Zoho Japan CRMPlus CXM lp",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "bigllMP",
                "status": 2
            },
            "2uEmVHo": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/sprints/scrum-software-for-agile-teams.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/sprints/"
                }],
                "name": "Zoho Sprints - Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "2uEmVHo",
                "status": 2
            },
            "gWIczfP": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/blog/"
                }],
                "name": "ZCampaigns - Marketing Blog",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "gWIczfP",
                "status": 2
            },
            "SY5v31y": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/financeplus/finance-workshop/"
                }],
                "name": "Zoho Finance Workshop 2024",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "SY5v31y",
                "status": 2
            },
            "UphGeCP": {
                "audience": ["australia-audience-only"],
                "trigger_type": 6,
                "trigger_value": "visitor-inactive-30-secs",
                "response_type": 1,
                "attributes_required": false,
                "trigger": ["visitor-inactive-30-secs"],
                "type": 11,
                "include_urls": [{
                    "match_type": 5,
                    "value": "https://www.bigin.com/"
                }],
                "country_required": true,
                "urls": [{
                    "match_type": 5,
                    "value": "https://www.bigin.com/"
                }],
                "name": "Zoho Bigin - Callback Popup - AU (1)",
                "exclude_urls": [{
                    "match_type": 5,
                    "value": "https://www.bigin.com/es-xl/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/pt-br/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/fr/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/nl/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/ar/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/id/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/th/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/vi/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/it/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/developer/docs/apis/v2/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/signup.html"
                }],
                "weather_required": false,
                "key": "UphGeCP",
                "special_filter": "{\"condition_type\":1,\"conditions\":[{\"condition_type\":1,\"conditions\":[{\"values\":[\"Desktop\",\"Tablet\"],\"type\":\"device\",\"operator\":1}]}]}",
                "status": 2
            },
            "gcHJCFS": {
                "name": "Workdrive Truesync   Landing Page.",
                "type": 6,
                "steps": {
                    "043aa237a3474e67843e7876b7d478f1": {
                        "step_order": 2,
                        "key": "043aa237a3474e67843e7876b7d478f1",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/workdrive/truesync.html"
                        }]
                    },
                    "b7cb340dfe7046a3a65c7e57e002f843": {
                        "step_order": 1,
                        "key": "b7cb340dfe7046a3a65c7e57e002f843",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/desktop-apps.html"
                        }]
                    }
                },
                "key": "gcHJCFS",
                "session_time": 2592000000,
                "status": 2
            },
            "KX6Tno0": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/lp/pharma-crm.html"
                }],
                "name": "Zoho CRM-Pharma LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "KX6Tno0",
                "status": 2
            },
            "HExR6Li": {
                "name": "Writer - PT-BR - Free grammar checker - Sign Up form",
                "type": 6,
                "steps": {
                    "68994b794c6b4dcab180554c81a8f035": {
                        "step_order": 1,
                        "key": "68994b794c6b4dcab180554c81a8f035",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/pt-br/writer/free-grammar-checker.html"
                        }]
                    },
                    "85d73f6020be4e0f8b8bea4329b2c957": {
                        "step_order": 2,
                        "key": "85d73f6020be4e0f8b8bea4329b2c957",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/writer/signup.html"
                        }]
                    }
                },
                "key": "HExR6Li",
                "session_time": 2592000000,
                "status": 2
            },
            "0zr73lL": {
                "heatmap": 3,
                "audience": ["all"],
                "goal": ["sign-up-goal-2"],
                "redirect_params": true,
                "type": 2,
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/vault/"
                }],
                "permittedTrafic": 100,
                "variations": {
                    "b63a4c4258c2440a9b27616838367222": {
                        "allotedPercentage": 50,
                        "is_original": true,
                        "name": "Original",
                        "url": "https://www.zoho.com/vault/",
                        "key": "b63a4c4258c2440a9b27616838367222"
                    },
                    "40caf9efcb1f4ae8bbaa23ad1e0c7c63": {
                        "allotedPercentage": 50,
                        "variation_css_changes": "",
                        "is_original": false,
                        "name": "Zoho Vault - Index",
                        "variation_changes": [""],
                        "url": "https://www.zoho.com/vault/index1.html",
                        "key": "40caf9efcb1f4ae8bbaa23ad1e0c7c63"
                    }
                },
                "name": "Zoho Vault- Password Manager New",
                "activation_mode": 1,
                "exclude_urls": [],
                "integrations": {},
                "key": "0zr73lL",
                "status": 2
            },
            "5G9kDMt": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://zoho.com/jp/crm/crmplus/intermediate-signup/salesiq.html"
                }, {
                    "match_type": 1,
                    "value": "https://zoho.com/jp/crm/crmplus/intermediate-signup/social.html"
                }, {
                    "match_type": 1,
                    "value": "https://zoho.com/jp/crm/crmplus/intermediate-signup/survey.html"
                }, {
                    "match_type": 1,
                    "value": "https://zoho.com/jp/crm/crmplus/intermediate-signup/analytics.html"
                }, {
                    "match_type": 1,
                    "value": "https://zoho.com/jp/crm/crmplus/intermediate-signup/projects.html"
                }, {
                    "match_type": 1,
                    "value": "https://zoho.com/jp/crm/crmplus/intermediate-signup/desk.html"
                }, {
                    "match_type": 1,
                    "value": "https://zoho.com/jp/crm/crmplus/intermediate-signup/marketingautomation.html"
                }],
                "name": "Zoho Japan CRMPlus - Intermediate page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "5G9kDMt",
                "status": 2
            },
            "0Dn6J5d": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/industry/plumbing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/industry/hvac.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/industry/electrical.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/industry/roofing.html"
                }],
                "name": "Zoho FSM - Industry Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "0Dn6J5d",
                "status": 2
            },
            "A69CPzA": {
                "audience": ["uk-audience-only"],
                "trigger_type": 6,
                "trigger_value": "visitor-inactive-30-secs",
                "response_type": 1,
                "attributes_required": false,
                "trigger": ["visitor-inactive-30-secs"],
                "type": 11,
                "include_urls": [{
                    "match_type": 5,
                    "value": "https://www.bigin.com/"
                }],
                "country_required": true,
                "urls": [{
                    "match_type": 5,
                    "value": "https://www.bigin.com/"
                }],
                "name": "Zoho Bigin - Callback Popup - UK (1)",
                "exclude_urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/developer/docs/apis/v2/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/signup.html"
                }],
                "weather_required": false,
                "key": "A69CPzA",
                "special_filter": "{\"condition_type\":1,\"conditions\":[{\"condition_type\":1,\"conditions\":[{\"values\":[\"Desktop\",\"Tablet\"],\"type\":\"device\",\"operator\":1}]}]}",
                "status": 2
            },
            "QGyX0lf": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/es-xl/one/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/es-xl/one/pricing/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/es-xl/r/jumpstart/"
                }],
                "name": "Zoho One - Mexico Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "QGyX0lf",
                "status": 2
            },
            "5PCCxw0": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/es-xl/writer/free-grammar-checker.html"
                }],
                "name": "Writer - Corrector gramatical gratuito",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "5PCCxw0",
                "status": 2
            },
            "47dochM": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/workplace/ "
                }],
                "name": "Workplace   Global",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "47dochM",
                "status": 2
            },
            "bbqlRJZ": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/new-customer-management.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/zero-free.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/task-management.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/sales-management.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/supplier-management.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/compare-cy.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/compare-sf.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/opportunity-management.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/hikaku-sfa.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/hikaku-mem.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/crm-software.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/sfa-tool.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/crm.html"
                }],
                "name": "Zoho Japan - CRM LP Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "bbqlRJZ",
                "status": 2
            },
            "yD2loY0": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/organization.html"
                }],
                "name": "Zoho Show - Organization Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "yD2loY0",
                "status": 2
            },
            "xHXeR0Z": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/survey/templates/education/education-demographics-survey-forms.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/survey/templates/human-resources/30-day-new-employee-satisfaction-survey-forms.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/survey/templates/marketing/customer-expectations-survey-forms.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/survey/templates/customer-satisfaction/new-product-feedback-survey.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/survey/templates/education/campus-facilities-feedback-survey-forms.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/survey/templates/marketing/target-market-analysis-survey-forms.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/survey/templates/customer-satisfaction/car-owner-feedback-survey.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/survey/templates/marketing/product-market-research-survey-forms.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/survey/templates/marketing/automobile-buyer-survey.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/survey/templates/health-care/facilities-in-hospital-survey-forms.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/survey/templates/customer-satisfaction/home-buyer-satisfaction-survey.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/survey/templates/human-resources/recruitment-satisfaction-survey.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/survey/templates/marketing/pre-post-test-survey.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/survey/templates/marketing/household-budget-survey-forms.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/survey/templates/marketing/brand-health-measurement-survey-forms.html"
                }],
                "name": "Zoho Survey - Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "xHXeR0Z",
                "status": 2
            },
            "RCOAISA": {
                "country_required": false,
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/flow/solutions/"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zoho Flow - Solutions",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "RCOAISA",
                "session_duration": 7200,
                "status": 2
            },
            "JtME2MV": {
                "name": "Zoho Contracts - Standard Signup",
                "type": 6,
                "steps": {
                    "463f1e90e5a343d094d6ff80b89bfa7d": {
                        "step_order": 3,
                        "key": "463f1e90e5a343d094d6ff80b89bfa7d",
                        "url": [{
                            "match_type": 2,
                            "value": "https://www.zoho.com/contracts/signup.html?plan=standard-trial&src=pricing"
                        }]
                    },
                    "f8517cdab1b545dbbb5139db55d096be": {
                        "step_order": 2,
                        "key": "f8517cdab1b545dbbb5139db55d096be",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/contracts/pricing.html"
                        }]
                    },
                    "f108482a8d38426b88fde2a771371e13": {
                        "step_order": 1,
                        "key": "f108482a8d38426b88fde2a771371e13",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/contracts/"
                        }]
                    },
                    "64137a9e7abd44fb852b23fca122b4df": {
                        "step_order": 4,
                        "custom_step": "signup",
                        "key": "64137a9e7abd44fb852b23fca122b4df"
                    }
                },
                "key": "JtME2MV",
                "session_time": 2592000000,
                "status": 2
            },
            "qS3OI16": {
                "urls": [{
                    "match_type": 10,
                    "value": "ziot-feature-pages"
                }],
                "name": "ZIoT Feature Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "qS3OI16",
                "status": 2
            },
            "L668uFU": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/zia.html"
                }],
                "name": "Zoho Desk   ZIA O - New",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "L668uFU",
                "status": 2
            },
            "mIrEDkj": {
                "urls": [{
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/expense/expense-management-software/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/expense/expense-management-software/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/expense/mileage-tracking-app/"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/expense/mileage-tracking-app/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/expense/corporate-travel-management/"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/expense/corporate-travel-management/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/expense/corporate-card-management/"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/expense/corporate-card-management/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/expense/pricing/"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/expense/pricing/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/expense/pricing-comparison/"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/expense/pricing-comparison/"
                }],
                "name": "Zoho Expense - Pillar Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "mIrEDkj",
                "status": 2
            },
            "pdmQaPr": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/workplace/community-meetups.html"
                }],
                "name": "Zoho - Workplace community",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "pdmQaPr",
                "status": 2
            },
            "SPO7Za9": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/r/samsung.html"
                }],
                "name": "Zoho Solo - Samsung LP Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "SPO7Za9",
                "status": 2
            },
            "RNeHjaR": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/spend/demo-request/"
                }],
                "name": "Zoho Spend",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "RNeHjaR",
                "status": 2
            },
            "3bFOLmh": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/lp/education-erp-school-management-software.html"
                }],
                "name": "Zoho Creator   ERP Education Management",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "3bFOLmh",
                "status": 2
            },
            "OHfSx2v": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/signup.html"
                }],
                "name": "Zoho Japan - CRMPLUS Signup page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "OHfSx2v",
                "status": 2
            },
            "3vkVvZ0": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/sites/website-builder.html"
                }],
                "name": "Zoho Sites- online website builder",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "3vkVvZ0",
                "status": 2
            },
            "feinBay": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/billing/usage-based-billing/"
                }],
                "name": "ZBilling - Usage - based billing",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "feinBay",
                "status": 2
            },
            "plvnoBt": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/partners/work-with-zoho-system-integrators.html"
                }],
                "name": "Zoho Partner - Zoho system integrators",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "plvnoBt",
                "status": 2
            },
            "g4b9o71": {
                "urls": [{
                    "match_type": 5,
                    "value": "/desk/signup.html"
                }],
                "name": "Zoho Desk - Signup form page",
                "exclude_urls": [],
                "type": 7,
                "key": "g4b9o71",
                "forms": {
                    "custom_event_linkname": "signup",
                    "experiment_key": "g4b9o71",
                    "form_loaded": false,
                    "form_id": "",
                    "custom_event_name": "signup",
                    "form_selector": "",
                    "fields": [],
                    "form_name": "signupform"
                },
                "status": 2
            },
            "uqBWAQM": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/knowledge-base-software.html"
                }],
                "name": "ZDesk - KB   LP_C",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "uqBWAQM",
                "status": 2
            },
            "ZaKsVRV": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/fr/writer/free-grammar-checker.html"
                }],
                "name": "Writer - FR - Free Grammar checker",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "ZaKsVRV",
                "status": 2
            },
            "Fjvr49e": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/industries/custom-erp-software.html"
                }],
                "name": "Zoho Creator - ERP Software",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "Fjvr49e",
                "status": 2
            },
            "AMGyDBR": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/pt-br/mail/lp-zohomailbr.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/pt-br/mail/typ-zohomailbr.html"
                }],
                "name": "Zoho Mail - PT Landing page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "AMGyDBR",
                "status": 2
            },
            "n8PLzYj": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/pricing.html"
                }],
                "name": "Zoho Social - Pricing",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "n8PLzYj",
                "status": 2
            },
            "7Ou9kxI": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/apps/vendor-management-software.html"
                }],
                "name": "Zoho Creator-Gallery Apps-Vendor Management",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "7Ou9kxI",
                "status": 2
            },
            "NPqrYeO": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/tables/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/tables/pricing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/tables/templates/social-media-calendar.html"
                }],
                "name": "Zoho Tables - Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "NPqrYeO",
                "status": 2
            },
            "gOEp2wa": {
                "heatmap": 3,
                "audience": ["browser-audience"],
                "goal": ["test-goals"],
                "redirect_params": true,
                "attributes_required": false,
                "type": 1,
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://harshavardhan31.blogspot.com/"
                }],
                "permittedTrafic": 100,
                "variations": {
                    "DnJe": {
                        "allotedPercentage": 50,
                        "is_original": false,
                        "name": "Variation 1",
                        "key": "DnJe"
                    },
                    "nwva": {
                        "allotedPercentage": 50,
                        "is_original": true,
                        "name": "Original",
                        "url": "https://harshavardhan31.blogspot.com/",
                        "key": "nwva"
                    }
                },
                "name": "Secondary script - Test",
                "activation_mode": 1,
                "exclude_urls": [],
                "integrations": {},
                "weather_required": false,
                "key": "gOEp2wa",
                "status": 2
            },
            "2DxvgVh": {
                "urls": [{
                    "match_type": 6,
                    "value": "https://demo.osdeployer.com/webclient#"
                }],
                "name": "ManageEngine - OS Deployer post login",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "2DxvgVh",
                "status": 2
            },
            "ZGOcPHW": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-in/one/index-new.html"
                }],
                "name": "Zoho One - EN IN Index New",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "ZGOcPHW",
                "status": 2
            },
            "I2VmMz4": {
                "urls": [{
                    "match_type": 5,
                    "value": "https://socialtoolkit.zoho.com/"
                }],
                "name": "Social_Toolkit",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "I2VmMz4",
                "status": 2
            },
            "eFpI3PG": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketingautomation/multi-channel-marketing/whatsapp-marketing.html"
                }],
                "name": "Zoho MA - WhatsApp Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "eFpI3PG",
                "status": 2
            },
            "ocAPkc5": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/pagesense/pricing.html"
                }],
                "name": "ZPS Pricing   O",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "ocAPkc5",
                "status": 2
            },
            "48SLzmi": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/small-medium-business.html"
                }],
                "name": "Zoho Show - SMB Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "48SLzmi",
                "status": 2
            },
            "eE60K0U": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/writer/"
                }],
                "name": "Writer - Home Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "eE60K0U",
                "status": 2
            },
            "6d2NCqg": {
                "country_required": false,
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/desk/zohodesk-zendesk-quiz.html"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "ZenQuiz   Sessions",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "6d2NCqg",
                "session_duration": 7200,
                "status": 2
            },
            "7o6w2Ta": {
                "urls": [{
                    "match_type": 2,
                    "value": "https://www.zoho.com/desk/live-chat-ticketing-software.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/desk/zia-answer-bot.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/desk/asap.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/desk/zoho-fsm-integration.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/desk/messaging.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/desk/zia.html"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/desk/chatgpt-desk.html"
                }],
                "name": "Zoho Desk - live - zia - asap - fsm - messaging - chatgpt",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "7o6w2Ta",
                "status": 2
            },
            "6p1kBTq": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/partners/event/ai-utlization.html"
                }],
                "name": "Zoho JP - Partners Event AI Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "6p1kBTq",
                "status": 2
            },
            "KaFFt2c": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/workplace/lp/google-workspace-alternative.html"
                }],
                "name": "Zoho Workplace - Google Alternative",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "KaFFt2c",
                "status": 2
            },
            "ZBTatAG": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/rpa/"
                }],
                "name": "Zoho RPA's homepage",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "ZBTatAG",
                "status": 2
            },
            "IFq1hlX": {
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://community.zoho.com/meetups/?zwc_product=desk&zwc_country=india"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "ZD - Customer Meet up 25 - Session Recording",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "IFq1hlX",
                "session_duration": 7200,
                "status": 2
            },
            "PMTPfSh": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crmplus/features.html"
                }],
                "name": "Zoho CRMPlus - Features Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "PMTPfSh",
                "status": 2
            },
            "sFxVdTd": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/billing/payment-gateways/"
                }],
                "name": "ZBilling - Payment Gateway",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "sFxVdTd",
                "status": 2
            },
            "f3S8lRE": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/videos/"
                }],
                "name": "Zoho Creator - Videos",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "f3S8lRE",
                "status": 2
            },
            "OGoHOtk": {
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/lp/custom-purchase-order-procurement-management-software.html"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zoho Creator - LP Custom page",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "OGoHOtk",
                "session_duration": 7200,
                "status": 2
            },
            "t5y5nIf": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/pagesense/lp/google-optimize-alternative.html"
                }],
                "name": "ZPS G Optimize Alt   LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "t5y5nIf",
                "status": 2
            },
            "3OAtCDN": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/pagesense/"
                }],
                "name": "ZPS Home Page   O",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "3OAtCDN",
                "status": 2
            },
            "6kXtwkc": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/writer/desktop-app.html"
                }],
                "name": "Zoho Writer - Desktop App",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "6kXtwkc",
                "status": 2
            },
            "JNrwtzy": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/salesiq/signup.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/social/signup.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/survey/signup.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/analytics/signup.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/projects/signup.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/desk/welcome.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/marketingautomation/signup.html"
                }],
                "name": "Zoho Japan - Point product sign up page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "JNrwtzy",
                "status": 2
            },
            "rNUj99a": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/thrive/affiliate-marketing-software.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/thrive/loyalty-program-software.html"
                }],
                "name": "Zoho Thrive - Affiliate Marketing, Loyalty Program",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "rNUj99a",
                "status": 2
            },
            "DQE0Ozt": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/lp/smooth.html"
                }],
                "name": "Zoho CRM - Landing Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "DQE0Ozt",
                "status": 2
            },
            "9bfiYiz": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/uk/inventory/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/ca/inventory/"
                }],
                "name": "Zoho Inventory   UK CA Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "9bfiYiz",
                "status": 2
            },
            "XoUw5DO": {
                "heatmap": 2,
                "audience": ["all"],
                "goal": ["request-demo-trainer-central", "signup-57"],
                "redirect_params": true,
                "type": 2,
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.trainercentral.com/lp/create-and-sell-online-courses.html"
                }],
                "permittedTrafic": 100,
                "variations": {
                    "ywzJ": {
                        "allotedPercentage": 50,
                        "variation_css_changes": "",
                        "is_original": false,
                        "name": "Without Pricing",
                        "variation_changes": [""],
                        "url": "http://trainercentral.com/lp/create-and-sell-training-programs.html",
                        "key": "ywzJ"
                    },
                    "YM3U": {
                        "allotedPercentage": 50,
                        "is_original": true,
                        "name": "Original",
                        "url": "https://www.trainercentral.com/lp/create-and-sell-online-courses.html",
                        "key": "YM3U"
                    }
                },
                "name": "Trainer Central - Create and sell Ad campaign",
                "activation_mode": 1,
                "exclude_urls": [],
                "integrations": {},
                "key": "XoUw5DO",
                "status": 2
            },
            "nMDrbni": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/embed/crm"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/embed/desk"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/embed/mail"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/embed/projects"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/embed/cliq"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/embed/recruit"
                }],
                "name": "Zoho MarketPlace - New App Embed Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "nMDrbni",
                "status": 2
            },
            "J2WeVCE": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/analytics/insightshq/5-best-ai-data-visualization-tools.html"
                }],
                "name": "Zoho Analytics insighthq Page 1",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "J2WeVCE",
                "status": 2
            },
            "lYSdG9m": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/writer/free-grammar-checker.html"
                }],
                "name": "Writer - Free grammar checker",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "lYSdG9m",
                "status": 2
            },
            "rryzJmR": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/aboutus.html"
                }],
                "name": "Zoho - About Us",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "rryzJmR",
                "status": 2
            },
            "rwyHRS6": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/invoice/accept-online-payments/"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/invoice/accept-online-payments/"
                }],
                "name": "Zoho Invoice - Accept Online Payments Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "rwyHRS6",
                "status": 2
            },
            "fF0fnJy": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/billing/subscription-billing-management/"
                }],
                "name": "ZBilling - Subscription Management",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "fF0fnJy",
                "status": 2
            },
            "8guEtAa": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/customer-interaction-management.html"
                }],
                "name": "Zdesk - CIM   O",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "8guEtAa",
                "status": 2
            },
            "Rsg43AB": {
                "name": "Zoho Desk - Portal Creation",
                "type": 6,
                "steps": {
                    "a6a46d7036b24c0dbbe7e214c45e5858": {
                        "step_order": 2,
                        "custom_step": "signup",
                        "key": "a6a46d7036b24c0dbbe7e214c45e5858"
                    },
                    "6c411597aa2d4baf9138abc519bec51d": {
                        "step_order": 1,
                        "key": "6c411597aa2d4baf9138abc519bec51d",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/desk/"
                        }]
                    },
                    "5ec130abdc904eddb786b4710f8f811c": {
                        "step_order": 4,
                        "custom_step": "zdeskportalcreated",
                        "key": "5ec130abdc904eddb786b4710f8f811c"
                    },
                    "b3039e70d4f14f3088712c1ffbb8d81e": {
                        "step_order": 3,
                        "key": "b3039e70d4f14f3088712c1ffbb8d81e",
                        "url": [{
                            "match_type": 3,
                            "value": "https://desk.zoho.*/agent?action=CreatePortal"
                        }]
                    }
                },
                "key": "Rsg43AB",
                "session_time": 2592000000,
                "status": 2
            },
            "af2ZC5q": {
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/flow/"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zoho Flow",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "af2ZC5q",
                "session_duration": 7200,
                "status": 2
            },
            "QPNVD1W": {
                "country_required": false,
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/zoholics/europe/"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zoholics - Europe  com eu (1)",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "QPNVD1W",
                "session_duration": 7200,
                "status": 2
            },
            "vdz9eDE": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/salesforce-contract-buyout.html"
                }],
                "name": "Zoho Desk -SF Service Cloud Buyout   LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "vdz9eDE",
                "status": 2
            },
            "brVrZYX": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/sfa/"
                }],
                "name": "Zoho Japan - SFA",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "brVrZYX",
                "status": 2
            },
            "2Pc9Ps1": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/lp/smooth.html "
                }],
                "name": "Zoho CRM-Smooth LP-Longform",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "2Pc9Ps1",
                "status": 2
            },
            "iQ7m6Rq": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/zohocrm-pricing.html"
                }],
                "name": "Zoho Japan - CRM Pricing Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "iQ7m6Rq",
                "status": 2
            },
            "mzOioc1": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/spend/"
                }],
                "name": "Zoho Spend   Home Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "mzOioc1",
                "status": 2
            },
            "8DYmSsf": {
                "audience": ["uae-audience-only"],
                "trigger_type": 6,
                "trigger_value": "visitor-inactive-30-secs",
                "response_type": 1,
                "attributes_required": false,
                "trigger": ["visitor-inactive-30-secs"],
                "type": 11,
                "include_urls": [{
                    "match_type": 5,
                    "value": "https://www.bigin.com/"
                }],
                "country_required": true,
                "urls": [{
                    "match_type": 5,
                    "value": "https://www.bigin.com/"
                }],
                "name": "Zoho Bigin - Callback Popup - UAE (1)",
                "exclude_urls": [{
                    "match_type": 5,
                    "value": "https://www.bigin.com/es-xl/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/pt-br/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/fr/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/nl/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/ar/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/id/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/th/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/vi/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/it/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/developer/docs/apis/v2/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/signup.html"
                }],
                "weather_required": false,
                "key": "8DYmSsf",
                "special_filter": "{\"condition_type\":1,\"conditions\":[{\"condition_type\":1,\"conditions\":[{\"values\":[\"Desktop\",\"Tablet\"],\"type\":\"device\",\"operator\":1}]}]}",
                "status": 2
            },
            "PeOomWD": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/"
                }],
                "name": "Zoho Japan - CRM",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "PeOomWD",
                "status": 2
            },
            "gANuPJN": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/effortless.html"
                }],
                "name": "Zoho Desk - LP Effortless page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "gANuPJN",
                "status": 2
            },
            "e0B9syb": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/partners/partner-signup.html"
                }],
                "name": "Zoho Consulting Partner Program   Sign-up Form",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "e0B9syb",
                "status": 2
            },
            "VMRTb2u": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/lp/crm-for-professional-services-firms.html"
                }],
                "name": "Bigin   Professional Services LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "VMRTb2u",
                "status": 2
            },
            "5CzNHco": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/home"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/crm#action=new"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/mail#action=new"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/desk#action=new"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/recruit#action=new"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/cliq#action=new"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/books#action=new"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/projects#action=new"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/bugtracker#action=new"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/customapps#action=new"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/app/verticals"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/gsearch?"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketplace/about.html"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/become-a-partner"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketplace/resources/customer.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketplace/resources/partner.html"
                }, {
                    "match_type": 1,
                    "value": "https://marketplace.zoho.com/newsroom"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketplace/help-guide/zoho-developer-console.html"
                }],
                "name": "Zoho MarketPlace - Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "5CzNHco",
                "status": 2
            },
            "1EDRLA3": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/bigin-roi-calculator.html"
                }],
                "name": "Bigin-ROI Calculator",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "1EDRLA3",
                "status": 2
            },
            "IIP49X5": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/features/"
                }],
                "name": "Zoho Bigin - Feature Page 2024",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "IIP49X5",
                "status": 2
            },
            "LkqBJEW": {
                "country_required": false,
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/iot/lp"
                }, {
                    "match_type": 6,
                    "value": "https://www.zoho.com/iot/lp-2"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "ZIoT LPs",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "LkqBJEW",
                "session_duration": 7200,
                "status": 2
            },
            "TXqTYgN": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/pricing.html"
                }],
                "name": "Zoho Desk - Pricing   Editions",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "TXqTYgN",
                "status": 2
            },
            "UEPaEBf": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/workplace/webinar/getting-the-best-out-of-zoho-workplace.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/mail/webinar/insider-tips-to-maximize-zoho-mail-experience.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/workplace/webinar/overcoming-hybrid-work-challenges-with-zoho-workplace.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/mail/webinar/insider-tips-to-maximize-zoho-mail-experience.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/mail/webinar/zoho-mail-tips-for-solopreneurs.html"
                }],
                "name": "Zoho Workplace - Webinar 1",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "UEPaEBf",
                "status": 2
            },
            "wkUYzhm": {
                "urls": [{
                    "match_type": 5,
                    "value": "https://www.zoho.com/marketingplus/"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/marketingplus/"
                }],
                "name": "Zoho Marketing Plus - Signup form Pages",
                "exclude_urls": [],
                "type": 7,
                "key": "wkUYzhm",
                "forms": {
                    "custom_event_linkname": "signup",
                    "experiment_key": "wkUYzhm",
                    "form_loaded": false,
                    "form_id": "",
                    "custom_event_name": "signup",
                    "form_selector": "",
                    "fields": [],
                    "form_name": "signupform"
                },
                "status": 2
            },
            "fftCkn1": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/toolkit/"
                }],
                "name": "Zoho Social Toolkit",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "fftCkn1",
                "status": 2
            },
            "ZOTaeqg": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/enterprise/zo-ai-webinarseries.html"
                }],
                "name": "AI form",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "ZOTaeqg",
                "status": 2
            },
            "WMClBWd": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/pt-br/writer/"
                }],
                "name": "Writer - PT-BR",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "WMClBWd",
                "status": 2
            },
            "6Mvugd0": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/enterprise/zo-ai-webinarseries.html?"
                }],
                "name": "US Enterprise - Zoho One AI",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "6Mvugd0",
                "status": 2
            },
            "r7M4WCY": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/lp/smooth-a.html"
                }],
                "name": "Zoho CRM-Smooth LP-Shortform-A",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "r7M4WCY",
                "status": 2
            },
            "jHhp4zQ": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/express/"
                }],
                "name": "Zoho Desk - Express",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "jHhp4zQ",
                "status": 2
            },
            "s7uMlOA": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/apps/custom-inventory-management-software.html"
                }],
                "name": "Zoho Creator-Gallery Apps-Custom Inventory Management",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "s7uMlOA",
                "status": 2
            },
            "2MZRvJM": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/meeting/video-conferencing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/meeting/online-meeting-transcription.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/meeting/online-whiteboard.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/meeting/virtual-meeting.html"
                }],
                "name": "Zoho Meeting - Virtual conferencing",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "2MZRvJM",
                "status": 2
            },
            "KDuGOEr": {
                "urls": [{
                    "match_type": 5,
                    "value": "https://www.bigin.com/"
                }],
                "name": "Zoho Bigin - Signup form Pages",
                "exclude_urls": [],
                "type": 7,
                "key": "KDuGOEr",
                "forms": {
                    "custom_event_linkname": "signup",
                    "experiment_key": "KDuGOEr",
                    "form_loaded": false,
                    "form_id": "",
                    "custom_event_name": "signup",
                    "form_selector": "",
                    "fields": [],
                    "form_name": "signupform"
                },
                "status": 2
            },
            "gh1HO1j": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/plan-comparison.html"
                }],
                "name": "Zoho Social - Plan Comparison",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "gh1HO1j",
                "status": 2
            },
            "MQCZ9SH": {
                "urls": [{
                    "match_type": 2,
                    "value": "https://www.zoho.com/mail/zohomail-pricing.html?src=lp"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/mail/request-quote.html?src=lp"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/mail/zohomail-pricing.html?src=lp1"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/mail/request-quote.html?src=lp1"
                }],
                "name": "Zoho Mail - Pricing and Quote pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "MQCZ9SH",
                "status": 2
            },
            "iv6tQnc": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/es-xl/mail/lp/business-email-hosting.html"
                }],
                "name": "Zoho - Business Email hosting",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "iv6tQnc",
                "status": 2
            },
            "kb0Jxhr": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/contact-us.html"
                }],
                "name": "Bigin CRM   Contact Us",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "kb0Jxhr",
                "status": 2
            },
            "GazWpxM": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/agency/contact-us.html"
                }],
                "name": "Zoho Social-Contactus",
                "exclude_urls": [],
                "type": 7,
                "key": "GazWpxM",
                "forms": {
                    "experiment_key": "GazWpxM",
                    "form_conversion_url": [{
                        "match_type": 6,
                        "value": "https://www.zoho.com/social/agency/contact-us.html?contact=submit"
                    }],
                    "form_loaded": true,
                    "form_id": "z_crmwebform",
                    "form_selector": "#z_crmwebform",
                    "fields": [{
                        "field_id": "zcf_zoho_service",
                        "form_field_key": "ea19ac0dcee040aea09e1bf89bcfb3d5",
                        "field_name": "CASECF9"
                    }, {
                        "field_id": "zcf_users",
                        "form_field_key": "2554c4221e8845c4b327b179767b319a",
                        "field_name": "CASECF2"
                    }, {
                        "field_id": "",
                        "form_field_key": "546e227881774e37a7633b51ecac91ed",
                        "field_name": "captchapop"
                    }, {
                        "field_id": "zcf_enterdigest",
                        "form_field_key": "a7704da06b284822a864d99fd2e7bd69",
                        "field_name": "enterdigest"
                    }, {
                        "field_id": "zcf_phone",
                        "form_field_key": "01161b3527c04893ac83eea68c139387",
                        "field_name": "Phone"
                    }, {
                        "field_id": "zcf_email",
                        "form_field_key": "0f4f6b51fd15420f953d3e8e32245a8b",
                        "field_name": "Email"
                    }, {
                        "field_id": "zcf_reported_by",
                        "form_field_key": "9939e97f9dcb42dfba906a2166b30148",
                        "field_name": "Reported By"
                    }],
                    "form_name": "WebToCases15842002572596447",
                    "domain_match": false
                },
                "status": 2
            },
            "eU0YqNt": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/case-studies/bigbasket-retail-erp-capex-procurement.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/case-studies/manufacturing-ozelia-custom-erp.html"
                }],
                "name": "Zoho Creator - Case study pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "eU0YqNt",
                "status": 2
            },
            "tBtVWQ9": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/invoice/create-send-estimates/"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/invoice/create-send-estimates/"
                }],
                "name": "Zoho Invoice - Create Send Estimates Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "tBtVWQ9",
                "status": 2
            },
            "1mvxNgs": {
                "urls": [{
                    "match_type": 10,
                    "value": "ziot-pages"
                }],
                "name": "ZIoT pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "1mvxNgs",
                "status": 2
            },
            "kdZl8Qa": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/whatsnew.html"
                }],
                "name": "Zoho Desk - WhatsNew",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "kdZl8Qa",
                "status": 2
            },
            "Gynw6aG": {
                "heatmap": 3,
                "audience": ["all"],
                "goal": ["custom-signup-event-3", "linkedin", "google"],
                "redirect_params": true,
                "type": 2,
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/lp/crm-for-festive-sales.html"
                }],
                "permittedTrafic": 100,
                "variations": {
                    "t7gK": {
                        "allotedPercentage": 50,
                        "variation_css_changes": "",
                        "is_original": false,
                        "name": "B page",
                        "variation_changes": [""],
                        "url": "https://www.bigin.com/lp/crm-for-festive-sales-a.html",
                        "key": "t7gK"
                    },
                    "sZjm": {
                        "allotedPercentage": 50,
                        "is_original": true,
                        "name": "Original",
                        "url": "https://www.bigin.com/lp/crm-for-festive-sales.html",
                        "key": "sZjm"
                    }
                },
                "name": "Bigin- CRM for Festive Sales",
                "activation_mode": 1,
                "exclude_urls": [],
                "integrations": {},
                "key": "Gynw6aG",
                "status": 2
            },
            "dj8dzlq": {
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/marketingautomation/"
                }],
                "name": "Zoho Marketing Automation - All Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "dj8dzlq",
                "status": 2
            },
            "q6z7W5m": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/billing/solutions/internet-of-things-iot/"
                }],
                "name": "ZBilling - IoT",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "q6z7W5m",
                "status": 2
            },
            "lnoNGhN": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/workplace/webinar/transforming-enterprise-workflows-with-zoho-workplace-and-zoho-projects.html"
                }],
                "name": "Zoho Workspace - Webinar Sign Up",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "lnoNGhN",
                "status": 2
            },
            "0BvhMPh": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/enterprise/zo-ai-webinarseries.html?"
                }],
                "name": "US Enterprise - Zoho One AI",
                "exclude_urls": [],
                "type": 7,
                "key": "0BvhMPh",
                "forms": {
                    "custom_event_linkname": "zohooneai",
                    "experiment_key": "0BvhMPh",
                    "form_loaded": false,
                    "form_id": "z_crmwebform_1",
                    "custom_event_name": "zohooneai",
                    "form_selector": "",
                    "fields": [],
                    "form_name": ""
                },
                "status": 2
            },
            "kyJpvNL": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/workplace/lp/collaboration-suite.html"
                }],
                "name": "Zoho Workplace - Enterprise Collaboration (1)",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "kyJpvNL",
                "status": 2
            },
            "xboztst": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/teaminbox/lp/multichannel-inboxes.html"
                }],
                "name": "Multichannel Inboxes   Zoho TeamInbox",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "xboztst",
                "status": 2
            },
            "e6fZtuE": {
                "urls": [{
                    "match_type": 3,
                    "value": "https://desk.zoho.*/agent?action=CreatePortal"
                }],
                "name": "Zoho Desk - App Create Portal Form",
                "exclude_urls": [],
                "type": 7,
                "key": "e6fZtuE",
                "forms": {
                    "custom_event_linkname": "zdeskportalcreated",
                    "experiment_key": "e6fZtuE",
                    "form_loaded": false,
                    "form_id": "portalCreationForm",
                    "custom_event_name": "zdeskportalcreated",
                    "form_selector": "",
                    "fields": [],
                    "form_name": ""
                },
                "status": 2
            },
            "nzUqL7v": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.vikra.com/en-in/seller/"
                }, {
                    "match_type": 1,
                    "value": "https://www.vikra.com/en-in/seller/pricing/"
                }, {
                    "match_type": 1,
                    "value": "https://www.vikra.com/en-in/seller/features/"
                }, {
                    "match_type": 1,
                    "value": "https://www.vikra.com/en-in/seller/contact-us/"
                }, {
                    "match_type": 1,
                    "value": "https://www.vikra.com/en-in/seller/signup/"
                }, {
                    "match_type": 1,
                    "value": "https://www.vikra.com/"
                }, {
                    "match_type": 1,
                    "value": "https://www.vikraseller.com/en-in/seller/"
                }, {
                    "match_type": 1,
                    "value": "https://www.vikraseller.com/en-in/seller/pricing/"
                }, {
                    "match_type": 1,
                    "value": "https://www.vikraseller.com/en-in/seller/features/"
                }, {
                    "match_type": 1,
                    "value": "https://www.vikraseller.com/en-in/seller/contact-us/"
                }, {
                    "match_type": 1,
                    "value": "https://www.vikraseller.com/en-in/seller/signup/"
                }],
                "name": "Vikra - Top pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "nzUqL7v",
                "status": 2
            },
            "hlOK5ZU": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/partners/work-with-partner.html?src=dd"
                }],
                "name": "Zoho Partner - Work with a Partner",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "hlOK5ZU",
                "status": 2
            },
            "M4qopOG": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://static.zohocdn.com/crm/8230025/documentation/ZDK-1.0-M2/ZDK.Page.html"
                }],
                "name": "CRM-Page Functions",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "M4qopOG",
                "status": 2
            },
            "3VjXg3s": {
                "urls": [{
                    "match_type": 10,
                    "value": "zoho-com-community"
                }],
                "name": "Zoho.com Community",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "3VjXg3s",
                "status": 2
            },
            "nSrBL0W": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/"
                }],
                "name": "Zoho Japan Campaigns -   Sign up form",
                "exclude_urls": [],
                "type": 7,
                "key": "nSrBL0W",
                "forms": {
                    "experiment_key": "nSrBL0W",
                    "form_conversion_url": [{
                        "match_type": 2,
                        "value": "https://campaigns.zoho.jp/campaigns/AccountSetUp.zc?termsChecked=on"
                    }],
                    "form_loaded": false,
                    "form_id": "signupform",
                    "form_selector": "",
                    "fields": [],
                    "form_name": "",
                    "domain_match": false
                },
                "status": 2
            },
            "JDeZGLW": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/"
                }],
                "name": "Zoho Campaigns   Email Delivery System",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "JDeZGLW",
                "status": 2
            },
            "1IoesOM": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/salesiq/logout.html"
                }],
                "name": "Zoho Salesiq - Logout Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "1IoesOM",
                "status": 2
            },
            "KHiPo6x": {
                "name": "Writer - FR - Sign Up form",
                "type": 6,
                "steps": {
                    "ac4c8a64d62e4511a726801d987ea5a1": {
                        "step_order": 1,
                        "key": "ac4c8a64d62e4511a726801d987ea5a1",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/fr/writer/"
                        }]
                    },
                    "d02ba7f93ef3485482e8bbd01c3b1758": {
                        "step_order": 2,
                        "key": "d02ba7f93ef3485482e8bbd01c3b1758",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/writer/signup.html"
                        }]
                    }
                },
                "key": "KHiPo6x",
                "session_time": 2592000000,
                "status": 2
            },
            "yoJWRRF": {
                "urls": [{
                    "match_type": 5,
                    "value": "https://www.zoho.com/contracts/"
                }],
                "name": "Zoho Contracts - All Pages New",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "yoJWRRF",
                "status": 2
            },
            "EmBe6t3": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/email-template-builder.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/lp/email-blast-software.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/what-is-email-marketing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/free-email-marketing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/pricing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/email-automation-strategies.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/marketing-automation/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/features.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/signup.html"
                }],
                "name": "Zoho Japan - Campaigns Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "EmBe6t3",
                "status": 2
            },
            "NKTWKbh": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/sheet/race-charts.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/sheet/control-spreadsheets.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/sheet/collaboration.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/sheet/analyze.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/sheet/publish.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/sheet/functions.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/sheet/extension-and-web-clipper.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/sheet/what-is-a-spreadsheet.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/sheet/data-from-picture.html"
                }],
                "name": "Zoho Sheet - Second level Features pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "NKTWKbh",
                "status": 2
            },
            "NFpsHZ4": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/templates/"
                }],
                "name": "Zoho Show - Templates page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "NFpsHZ4",
                "status": 2
            },
            "dFlHKoA": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/calendar/best-calendar-apps.html"
                }],
                "name": "Zoho Calendar - Best Calendar Apps page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "dFlHKoA",
                "status": 2
            },
            "AZhQE4s": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/apps/property-management.html"
                }],
                "name": "Zoho Creator-Gallery Apps-Property Management",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "AZhQE4s",
                "status": 2
            },
            "rR5qQS6": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketingplus/omnichannel-engagement.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketingplus/collateral-management.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketingplus/marketing-automation.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketingplus/campaign-management.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketingplus/unified-marketing-analytics.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketingplus/website-performance.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketingplus/budget-management.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketingplus/brand-management.html"
                }],
                "name": "Zoho Marketing Plus - Feature Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "rR5qQS6",
                "status": 2
            },
            "CYjUSdc": {
                "brand_flag": true,
                "thankyou_text": "Thank you for your feedback! ",
                "show_thankyou_button": true,
                "poll_questions": [{
                    "question_text": "How helpful was the information on this page?",
                    "sequence": 0,
                    "logics": {
                        "question_logic_type": 4
                    },
                    "question_type": 4,
                    "is_encrypted": false,
                    "randomise_flag": false,
                    "answers": [{
                        "answer_text": "Very helpful",
                        "sequence": 0,
                        "is_comment_mandatory": false,
                        "comment_flag": false,
                        "answer_id": "10228000041302045",
                        "logic_mapping": {
                            "question_logic_type": 3,
                            "linked_question_id": "10228000059468001"
                        }
                    }, {
                        "answer_text": "Somewhat helpful",
                        "sequence": 1,
                        "is_comment_mandatory": true,
                        "comment_flag": false,
                        "answer_id": "10228000041302047",
                        "logic_mapping": {
                            "question_logic_type": 3,
                            "linked_question_id": "10228000059468003"
                        }
                    }, {
                        "answer_text": "Not helpful",
                        "sequence": 2,
                        "is_comment_mandatory": false,
                        "comment_flag": false,
                        "answer_id": "10228000041302049",
                        "logic_mapping": {
                            "question_logic_type": 3,
                            "linked_question_id": "10228000059468003"
                        }
                    }],
                    "is_mandatory": true,
                    "question_id": "10228000041302043"
                }, {
                    "question_text": "We are glad you found the page helpful. What other information would you like to see on this page?",
                    "sequence": 1,
                    "logics": {
                        "question_logic_type": 2
                    },
                    "question_type": 2,
                    "is_encrypted": false,
                    "randomise_flag": false,
                    "answers": [],
                    "is_mandatory": false,
                    "question_id": "10228000059468001"
                }, {
                    "question_text": "How could we make our existing content more helpful?",
                    "sequence": 2,
                    "logics": {
                        "question_logic_type": 2
                    },
                    "question_type": 2,
                    "is_encrypted": false,
                    "randomise_flag": false,
                    "answers": [],
                    "is_mandatory": true,
                    "question_id": "10228000059468003"
                }],
                "trigger_type": 2,
                "response_type": 4,
                "thankyou_button_link": "",
                "last_button_label": "Submit",
                "language": "English",
                "thankyou_button_label": "Learn More",
                "type": 9,
                "include_urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/templates/real-estate.html"
                }],
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/templates/real-estate.html"
                }],
                "exclude_urls": [],
                "theme": 2,
                "key": "CYjUSdc",
                "thankyou_consent": "Your feedback and data related to your visits (device-specific, usage data, cookies, behavior and interactions) will be used to help us provide you with a personalized experience. Do you give us your consent to do so?",
                "audience": ["all"],
                "response_value": "5",
                "polls_ui_keys": {
                    "reply_button_label": "Reply",
                    "email_q_error_text": "Please enter a valid email address",
                    "smiley_q_labels": ["Hate", "Dislike", "Neutral", "Like", "Love"],
                    "long_q_placeholder": "Start typing here...",
                    "email_q_placeholder": "Enter your email ID",
                    "checkbox_q_desc_placeholder": "Tell us more...",
                    "powered_by": "Powered by ",
                    "last_button_label": "Submit",
                    "short_q_placeholder": "Start typing here...",
                    "next_button_label": "Next",
                    "radio_q_desc_placeholder": "Tell us more..."
                },
                "trigger_value": "on-time-delay-86",
                "trigger": ["on-time-delay-86"],
                "next_button_label": "Next",
                "question_option_colour": "#63c399",
                "thankyou_type": 1,
                "reply_button_label": "Reply",
                "button_color": "#6dc7a0",
                "name": "Bigin by Zoho CRM - Real estate poll",
                "position": 1,
                "text_colour": "#EAEAEA",
                "bg_colour": "#3cb480",
                "special_filter": "{\"condition_type\":1,\"conditions\":[{\"condition_type\":1,\"conditions\":[{\"values\":[\"Desktop\"],\"type\":\"device\",\"operator\":1}]}]}",
                "status": 2
            },
            "ndateYm": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/iot/"
                }],
                "name": "Zoho - IOT",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "ndateYm",
                "status": 2
            },
            "sdVoZEF": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/spreadsheets-crm.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/why-choose-bigin.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/lp/30-minute-promise.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/lp/crm-for-leadmanagement.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/copper-crm-alternative.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/lp/monday-alternative.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/goldmine-alternative.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/insightly-alternative.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/simple-small-business-crm.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/lp/pipedrive-alternative.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/lp/crm-for-contact-management.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/lp/hubspot-alternative.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/lp/first-crm-solution.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/lp/unlimited-business-growth.html"
                }],
                "name": "Zoho Bigin - Landing page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "sdVoZEF",
                "status": 2
            },
            "kLHKzWU": {
                "country_required": false,
                "urls": [{
                    "match_type": 3,
                    "value": "https://crmplus.zoho.com/*/index.do/cxapp/agent/zohocorp/zoho-desk/requests/list/all-cases"
                }, {
                    "match_type": 3,
                    "value": "https://desk.zoho.com/agent/*/qa-team/requests/list/ui-team-completed-work-items"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zoho Desk - In app Announcement Popup",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "kLHKzWU",
                "session_duration": 7200,
                "status": 2
            },
            "p94DUd1": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/partners/system-integrator-signup.html"
                }],
                "name": "Zoho Partners - System integrators - Sign up form",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "p94DUd1",
                "status": 2
            },
            "zay2J13": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/lp/marketing-automation.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/lp/cx-platform.html"
                }],
                "name": "Zoho Japan - CRM Plus LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "zay2J13",
                "status": 2
            },
            "Si4pOYP": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/lp/sf-contract-buyout.html"
                }],
                "name": "Zoho CRM-Contract buyout",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "Si4pOYP",
                "status": 2
            },
            "8duc0W8": {
                "urls": [{
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/inventory/pricing-comparison/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/inventory/pricing-comparison/"
                }],
                "name": "Zoho Inventory - Comparison Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "8duc0W8",
                "status": 2
            },
            "yCeTR2C": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/compare-hub.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/compare-es.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/compare-ms.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/lp/compare-cy.html"
                }],
                "name": "Zoho Japan - LP Compare Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "yCeTR2C",
                "status": 2
            },
            "tVwnlmG": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/projects/lp/roadshow-2024.html"
                }],
                "name": "Zoho Projects - LP Roadshow 2024 Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "tVwnlmG",
                "status": 2
            },
            "tdH2ptw": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/lp/social-media-management.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/lp/content-calendar.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/lp/agencies.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/lp/agencies.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/lp/social-media-analytics-tool.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/lp/social-media-publishing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/lp/social-media-scheduling.html"
                }],
                "name": "Zoho Social - Landing Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "tdH2ptw",
                "status": 2
            },
            "ujWMgW1": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/practice/signup/"
                }],
                "name": "Zoho Practice - Signup",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "ujWMgW1",
                "status": 2
            },
            "ugJi7Og": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/es-xl/writer/"
                }],
                "name": "Writer - ES-XL - Powerful Words Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "ugJi7Og",
                "status": 2
            },
            "Ye22MRO": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/"
                }],
                "name": "Zoho Creator - Homepage Latest",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "Ye22MRO",
                "status": 2
            },
            "JIwB7ML": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/rpa/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/rpa/pricing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/rpa/usecases/banking-loan-processing.html"
                }],
                "name": "Zoho - RPA launch",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "JIwB7ML",
                "status": 2
            },
            "a049cb161bd84342bc6fdca6177001b4": {
                "name": "Zoho Store - CRM New Subscription Funnel",
                "type": 6,
                "steps": {
                    "cb8b35de93fa4b7b8edadcaac437ccab": {
                        "step_order": 4,
                        "custom_step": "new_subscription_payment_submitted_2",
                        "key": "cb8b35de93fa4b7b8edadcaac437ccab"
                    },
                    "77a0a3276a9f4fd0a385f47f51883150": {
                        "step_order": 5,
                        "custom_step": "new_subscription_success_2",
                        "key": "77a0a3276a9f4fd0a385f47f51883150"
                    },
                    "b43587350ce444dea03e86489140df2d": {
                        "step_order": 3,
                        "custom_step": "new_subscription_addons_selected_2",
                        "key": "b43587350ce444dea03e86489140df2d"
                    },
                    "913a118cb41f470dab633f0f0c702718": {
                        "step_order": 1,
                        "custom_step": "new_subscription_page_landed_2",
                        "key": "913a118cb41f470dab633f0f0c702718"
                    },
                    "a873233ef3d948f3a71f398b5da91f08": {
                        "step_order": 2,
                        "custom_step": "new_subscription_plan_selected_2",
                        "key": "a873233ef3d948f3a71f398b5da91f08"
                    }
                },
                "key": "a049cb161bd84342bc6fdca6177001b4",
                "session_time": 2592000000,
                "status": 2
            },
            "kM9aDmo": {
                "audience": ["all"],
                "response_value": "10",
                "trigger_type": 4,
                "trigger_value": "on-page-exit-intent-2",
                "response_type": 3,
                "trigger": ["on-page-exit-intent-2"],
                "type": 11,
                "include_urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/commerce/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/commerce/ecommerce-platform/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/commerce/sell-online/zoho.com/commerce/sell-online/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/commerce/ecommerce-website-builder/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/commerce/build-an-online-store.html"
                }],
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/commerce/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/commerce/ecommerce-platform/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/commerce/sell-online/zoho.com/commerce/sell-online/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/commerce/ecommerce-website-builder/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/commerce/build-an-online-store.html"
                }],
                "name": "Zoho Commerce   Exit Page Pop Up",
                "exclude_urls": [],
                "key": "kM9aDmo",
                "special_filter": "{\"condition_type\":1,\"conditions\":[{\"condition_type\":1,\"conditions\":[{\"values\":[\"Desktop\",\"Tablet\",\"Mobile\"],\"type\":\"device\",\"operator\":1}]}]}",
                "status": 2
            },
            "Y7x7CVZ": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/apps/logistics-management-software.html"
                }],
                "name": "Zohp Creator-Gallery Apps-Logistics Management",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "Y7x7CVZ",
                "status": 2
            },
            "JgpvtSC": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/spend/pricing/"
                }],
                "name": "Zoho Spend   Pricing Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "JgpvtSC",
                "status": 2
            },
            "ADNhZhs": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/rural-revival/"
                }],
                "name": "Zoho - Rural Revival",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "ADNhZhs",
                "status": 2
            },
            "T08IeIj": {
                "name": "Writer - ES-XL - Sign Up form",
                "type": 6,
                "steps": {
                    "aaec1c67d491423ab234d46954ddd9bc": {
                        "step_order": 1,
                        "key": "aaec1c67d491423ab234d46954ddd9bc",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/es-xl/writer/"
                        }]
                    },
                    "8619ef598bd948378f6638053f0564af": {
                        "step_order": 2,
                        "key": "8619ef598bd948378f6638053f0564af",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/writer/signup.html"
                        }]
                    }
                },
                "key": "T08IeIj",
                "session_time": 2592000000,
                "status": 2
            },
            "pTeyrAm": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/apps/school-management-system-software.html"
                }],
                "name": "Zoho Creator-Gallery Apps-School Management",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "pTeyrAm",
                "status": 2
            },
            "ENtgutU": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/customer-service-ai.html"
                }],
                "name": "Zdesk   Ethical Ai   LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "ENtgutU",
                "status": 2
            },
            "XErqpVq": {
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/work-with-powerpoint-files.html"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zoho Show - Work with PPT",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "XErqpVq",
                "session_duration": 7200,
                "status": 2
            },
            "vzfK6X8": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/lp/powerful-and-free-crm.html"
                }],
                "name": "Zoho Bigin - Free CRM LP - Yelp",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "vzfK6X8",
                "status": 2
            },
            "2NdtJ6d": {
                "country_required": false,
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/flow/features/"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zoho Flow - Features",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "2NdtJ6d",
                "session_duration": 7200,
                "status": 2
            },
            "XSbR1iy": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-uk/crm/crmplus/integrated-apps-UK-2404-L-ADV-LNK-WAI.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-uk/crm/crmplus/manage-projects-UK-2401-L-ADV-LNK-MOP-L.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-uk/crm/crmplus/manage-projects-UK-2401-L-ADV-LNK-MOP-S.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-uk/crm/crmplus/performance-reports-UK-2401-L-ADV-LNK-MTB-L.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-uk/crm/crmplus/performance-reports-UK-2401-L-ADV-LNK-MTB-S.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-uk/crm/crmplus/keep-sales-on-track-UK-2401-L-ADV-LNK-MFI-L.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-uk/crm/crmplus/keep-sales-on-track-UK-2401-L-ADV-LNK-MFI-S.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-uk/crm/crmplus/integrated-crm-UK-2401-L-ADV-LNK-MIT-L.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-uk/crm/crmplus/integrated-crm-UK-2401-L-ADV-LNK-MIT-S.html"
                }],
                "name": "Zoho CRMPlus - UK Ads Group",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "XSbR1iy",
                "status": 2
            },
            "yD2tAXz": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/events/"
                }],
                "name": "Zoho Events",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "yD2tAXz",
                "status": 2
            },
            "CtZTX5n": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/shifts/shiftcentral/"
                }],
                "name": "Zoho Shifts - Shift Central Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "CtZTX5n",
                "status": 2
            },
            "1d8XsJg": {
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/pagesense/pricing.html"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "ZPS Pricing   O",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "1d8XsJg",
                "session_duration": 7200,
                "status": 2
            },
            "QXG7aOr": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/billing/recurring-billing/"
                }],
                "name": "ZBilling - Recurring Billing",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "QXG7aOr",
                "status": 2
            },
            "r48vrFU": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/signup.html"
                }],
                "name": "Zoho Bigin - Signup Page 2024",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "r48vrFU",
                "status": 2
            },
            "AGggvQd": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/academy/learning/excel/visualize-data/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/academy/learning/what-is-kpi/kpi-using-excel/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/academy/conceptual/spinselling/"
                }],
                "name": "Zoho Japan - Academy pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "AGggvQd",
                "status": 2
            },
            "DAUmRvP": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/serviceplus/"
                }],
                "name": "Zoho Service plus",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "DAUmRvP",
                "status": 2
            },
            "ZoR3k4O": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/practice/"
                }],
                "name": "Zoho Practice - Homepage",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "ZoR3k4O",
                "status": 2
            },
            "fTcWkif": {
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/launchpad/"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zoho Creator Launchpad",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "fTcWkif",
                "session_duration": 7200,
                "status": 2
            },
            "1DGZhBE": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/lp/construction-process-management-erp-software.html"
                }],
                "name": "Creator   Construction PM ERP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "1DGZhBE",
                "status": 2
            },
            "FyaOM90": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/zen-contract-buyout.html"
                }],
                "name": "ZDesk - ZenBuyout   LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "FyaOM90",
                "status": 2
            },
            "3FeHucp": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/iot/signup.html"
                }],
                "name": "ZIoT Signup (1)",
                "exclude_urls": [],
                "type": 7,
                "key": "3FeHucp",
                "forms": {
                    "experiment_key": "3FeHucp",
                    "form_conversion_url": [{
                        "match_type": 1,
                        "value": "https://iot.zoho.com/platform/create-portal"
                    }],
                    "form_loaded": false,
                    "form_id": "signupform",
                    "form_selector": "",
                    "fields": [],
                    "form_name": "signupform",
                    "domain_match": false
                },
                "status": 2
            },
            "nQkASUn": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/billing/business-branding/"
                }],
                "name": "ZBilling - Business branding",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "nQkASUn",
                "status": 2
            },
            "XMNRCX4": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/customers/?tab_fltr=testimonial&viewEle=all&&&"
                }],
                "name": "Zoho Bigin - Customers page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "XMNRCX4",
                "status": 2
            },
            "Mki96rq": {
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/people/introducing-zohopeople-5.0.html"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zoho People 5.0",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "Mki96rq",
                "session_duration": 7200,
                "status": 2
            },
            "igdbrFP": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/voice-of-the-customer.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/solutions/ma.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/solutions/survey.html"
                }],
                "name": "Zoho Japan - CRMPlus",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "igdbrFP",
                "status": 2
            },
            "X3MF9eH": {
                "urls": [{
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/inventory/signup"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/inventory/signup/"
                }],
                "name": "Zoho Inventory - Signup",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "X3MF9eH",
                "status": 2
            },
            "q8xhXKC": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/invoice/accept-online-payments/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/au/invoice/accept-online-payments/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/us/invoice/accept-online-payments/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/uk/invoice/accept-online-payments/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/invoice/accept-online-payments/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/ca/invoice/accept-online-payments/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/za/invoice/accept-online-payments/"
                }],
                "name": "Invoice - Accept Payments  Global, US, UK, IN, AU, CA, SA",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "q8xhXKC",
                "status": 2
            },
            "w8McDOd": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/rpa/usecases/healthcare-insurance-claim-processing.html"
                }],
                "name": "Zoho - RPA - Healthcare",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "w8McDOd",
                "status": 2
            },
            "qFbbTR7": {
                "urls": [{
                    "match_type": 10,
                    "value": "zoho-bigin-small-business-express-blog"
                }, {
                    "match_type": 6,
                    "value": "https://www.bigin.com/small-business-express/"
                }],
                "name": "Zoho Bigin - Small Business Express blog",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "qFbbTR7",
                "status": 2
            },
            "AFYF7GL": {
                "name": "Writer - Home page - Sign Up form",
                "type": 6,
                "steps": {
                    "6fe5774ffa844da6a66d7c371e126ee0": {
                        "step_order": 2,
                        "key": "6fe5774ffa844da6a66d7c371e126ee0",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/writer/signup.html"
                        }]
                    },
                    "653ca191882b48ea930e26be541b38d1": {
                        "step_order": 1,
                        "key": "653ca191882b48ea930e26be541b38d1",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/writer/"
                        }]
                    }
                },
                "key": "AFYF7GL",
                "session_time": 2592000000,
                "status": 2
            },
            "EJd4byu": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/free-email-marketing.html"
                }],
                "name": "Campaigns   Free trial form",
                "exclude_urls": [],
                "type": 7,
                "key": "EJd4byu",
                "forms": {
                    "experiment_key": "EJd4byu",
                    "form_conversion_url": [{
                        "match_type": 1,
                        "value": "https://www.zoho.com/campaigns/?zsrc=fromproduct"
                    }],
                    "form_loaded": false,
                    "form_id": "signupform",
                    "form_selector": "",
                    "fields": [],
                    "form_name": "",
                    "domain_match": true
                },
                "status": 2
            },
            "2qhGGZY": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/sites/agencies.html"
                }],
                "name": "Zoho Sites - agency page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "2qhGGZY",
                "status": 2
            },
            "fZ3yVbl": {
                "urls": [{
                    "match_type": 5,
                    "value": "kaizen"
                }],
                "name": "CRM   Kaizen",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "fZ3yVbl",
                "status": 2
            },
            "wFn4KKA": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/one/lp/360-view.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/one/lp/data-silos.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/one/lp/osforbiz.html"
                }],
                "name": "Zoho One - LP Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "wFn4KKA",
                "status": 2
            },
            "eX3OAod": {
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/jp/campaigns/blog"
                }],
                "name": "Zoho Campaign Blogs - Japan",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "eX3OAod",
                "status": 2
            },
            "0fOAJis": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/apps/e-procurement-automation-management-software.html"
                }],
                "name": "Zoho Creator-Gallery Apps-e-Procurement Automation Management",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "0fOAJis",
                "status": 2
            },
            "hTwWmCY": {
                "country_required": false,
                "urls": [{
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/invoice/free-invoice-generator.html"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zoho Invoice - Free Invoice Generator",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "hTwWmCY",
                "session_duration": 7200,
                "status": 2
            },
            "7Qbykcq": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/apps/supply-chain-management-software.html"
                }],
                "name": "Zoho Creator-Gallery Apps-Supply Chain Management",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "7Qbykcq",
                "status": 2
            },
            "V0s3KQh": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/mail/zohomail-pricing.html"
                }],
                "name": "Zoho Mail Pricing - ex IN (1)",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "V0s3KQh",
                "status": 2
            },
            "RgqQ1d0": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.vanihq.com/jamboard-alternative.html"
                }],
                "name": "Vani - Jamboard alternative page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "RgqQ1d0",
                "status": 2
            },
            "TQZNM8q": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/billing/solutions/membership-management/"
                }],
                "name": "Zbilling- Membership management",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "TQZNM8q",
                "status": 2
            },
            "99uGXSb": {
                "urls": [{
                    "match_type": 5,
                    "value": "https://www.zoho.com/crm/crm-for-everyone.html"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/crm/crmplus/"
                }],
                "name": "Zoho CRM Plus - Signup form Pages",
                "exclude_urls": [],
                "type": 7,
                "key": "99uGXSb",
                "forms": {
                    "custom_event_linkname": "signup",
                    "experiment_key": "99uGXSb",
                    "form_loaded": false,
                    "form_id": "",
                    "custom_event_name": "signup",
                    "form_selector": "",
                    "fields": [],
                    "form_name": "signupform"
                },
                "status": 2
            },
            "6aYRlQW": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/lp/bpa-business-process-automation-software.html"
                }],
                "name": "Zoho Creator - LP BPA Business process page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "6aYRlQW",
                "status": 2
            },
            "mFO42Hm": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/lp/field-service-management.html?src=featured-app-mail-oct24"
                }],
                "name": "Zoho FSM - Landing Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "mFO42Hm",
                "status": 2
            },
            "Gsi5aFk": {
                "audience": ["indian-audience-only"],
                "trigger_type": 6,
                "trigger_value": "visitor-inactive-30-secs",
                "response_type": 1,
                "attributes_required": false,
                "trigger": ["visitor-inactive-30-secs"],
                "type": 11,
                "include_urls": [{
                    "match_type": 6,
                    "value": "https://www.bigin.com/"
                }],
                "country_required": true,
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.bigin.com/"
                }],
                "name": "Zoho Bigin - Callback Popup - IN (1)",
                "exclude_urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/es-xl/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/pt-br/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/fr/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/nl/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/ar/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/id/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/th/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/vi/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/it/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/developer/docs/apis/v2/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/signup.html"
                }],
                "weather_required": false,
                "key": "Gsi5aFk",
                "special_filter": "{\"condition_type\":1,\"conditions\":[{\"condition_type\":1,\"conditions\":[{\"values\":[\"Desktop\",\"Tablet\"],\"type\":\"device\",\"operator\":1}]}]}",
                "status": 2
            },
            "si8iG07": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/pagesense/lp/heatmap.html"
                }],
                "name": "ZPS Heatmap   LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "si8iG07",
                "status": 2
            },
            "TimDUJh": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/iot/what-is-iot.html"
                }],
                "name": "Zoho IoT",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "TimDUJh",
                "status": 2
            },
            "sWYQv6K": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://demo.osdeployer.com/client#/demo"
                }],
                "name": "ManageEngine OS Deployer - Login",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "sWYQv6K",
                "status": 2
            },
            "qaTlZEl": {
                "urls": [{
                    "match_type": 10,
                    "value": "zoho-com-company"
                }],
                "name": "Zoho.com Company",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "qaTlZEl",
                "status": 2
            },
            "VO2MaYt": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/whats-new/release-notes.html"
                }],
                "name": "Zoho CRM - Improved features",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "VO2MaYt",
                "status": 2
            },
            "o81EwIb": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-uk/crm/legal-crm-baringslaw-UK-2401-L-ADV-LNK-CBL.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-uk/crm/software-zohocrm-ArtiCAD-UK-2402-L-ADV-LNK-CAS.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-uk/crm/zohocrm-vs-salesforce-UK-2402-L-ADV-LNK-NUR.html"
                }],
                "name": "Zoho CRM - UK Ads group",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "o81EwIb",
                "status": 2
            },
            "WG17pLH": {
                "urls": [{
                    "match_type": 10,
                    "value": "apps-and-extensions"
                }],
                "name": "Zoho.com Apps and Extensions",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "WG17pLH",
                "status": 2
            },
            "qKu27pT": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/sheet/mobile-ios.html?src=pd-menu"
                }],
                "name": "Zoho Sheet for iOS",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "qKu27pT",
                "status": 2
            },
            "dPNJ1Pw": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/ca/books/"
                }],
                "name": "Zoho Books CA",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "dPNJ1Pw",
                "status": 2
            },
            "lx7MqUF": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketingplus/pricing.html"
                }],
                "name": "Zoho Marketing Plus - Pricing Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "lx7MqUF",
                "status": 2
            },
            "B1j7yFF": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/sign/api/getting-started-with-zoho-sign-api.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/sign/api/how-tos.html"
                }],
                "name": "Zoho Sign - API Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "B1j7yFF",
                "status": 2
            },
            "KF7PVbd": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/request-demo.html"
                }],
                "name": "Zoho Bigin - Request Demo 2024",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "KF7PVbd",
                "status": 2
            },
            "0f1M5C6": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/bookings/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/bookings/features"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/bookings/pricing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/bookings/buyers-guide/why-zoho-bookings.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/bookings/buyers-guide/calendly-alternative.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/bookings/buyers-guide/calendly-vs-bookings.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/bookings/integrations/zoho-crm.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/bookings/integrations/zoho-desk.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/bookings/integrations/zoho-salesiq.html"
                }],
                "name": "Zoho Bookings - Pages New",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "0f1M5C6",
                "status": 2
            },
            "EvBSLyX": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/workplace/lp/migrate-from-m365.html"
                }],
                "name": "Zoho Workplace - Migrate from m365 page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "EvBSLyX",
                "status": 2
            },
            "IhpRwUj": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crmplus/omnichannel-engagement.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crmplus/team-collaboration.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crmplus/process-management.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crmplus/powerful-analytics.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crmplus/mobile.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crmplus/unified-administration.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crmplus/why-choose-zoho-crmplus.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crmplus/customer-experience/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crmplus/customer-experience-management.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crmplus/360-customer-view.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crmplus/sales-and-service.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crmplus/voice-of-the-customer.html"
                }],
                "name": "Zoho CRMPlus - Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "IhpRwUj",
                "status": 2
            },
            "zvucg8J": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/trial-hub/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/trial-hub/zoho-crm-overview.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/trial-hub/zoho-crm-implementation.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/trial-hub/discover-zoho-crm.html"
                }],
                "name": "Zoho CRM - Trial Hub Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "zvucg8J",
                "status": 2
            },
            "P9DJTJP": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/create-engaging-marketing-presentations.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/create-data-driven-financial-presentations.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/create-engaging-hr-presentations.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/create-engaging-project-presentations.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/create-powerful-educational-presentations.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/create-effective-sales-presentation.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/create-startup-presentations.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/create-healthcare-presentations.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/create-student-presentations.html"
                }],
                "name": "Zoho Show - Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "P9DJTJP",
                "status": 2
            },
            "feWWe8h": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/spend/demo-request/"
                }],
                "name": "Zoho Spend",
                "exclude_urls": [],
                "type": 7,
                "key": "feWWe8h",
                "forms": {
                    "experiment_key": "feWWe8h",
                    "form_conversion_url": [{
                        "match_type": 1,
                        "value": "https://www.zoho.com/spend/thank-you.html"
                    }],
                    "form_loaded": true,
                    "form_id": "",
                    "form_selector": "html > body > div.demo-request-page > div.request-form > form.demorequest-form",
                    "fields": [{
                        "field_id": "demo_message",
                        "form_field_key": "27e7702a57fa4caa9653b9d64f74e0d7",
                        "field_name": "Description"
                    }, {
                        "field_id": "demo_state",
                        "form_field_key": "0628570e13d44d2e94af94de79a5967b",
                        "field_name": "CASECF8"
                    }, {
                        "field_id": "demo_location",
                        "form_field_key": "4377b496698148819d80798eae6f1f55",
                        "field_name": "CASECF7"
                    }, {
                        "field_id": "demo_no_of_users",
                        "form_field_key": "b64d23a751ac45e498e95a4adc53d824",
                        "field_name": "CASECF13"
                    }, {
                        "field_id": "enterdigest",
                        "form_field_key": "f27b535410b945579fe67e0cd417b952",
                        "field_name": "enterdigest"
                    }, {
                        "field_id": "demo_phone",
                        "form_field_key": "eedf9a7e13714763b15c32e4d5768525",
                        "field_name": "Phone"
                    }, {
                        "field_id": "demo_email",
                        "form_field_key": "d8ea656330574b9fb8edfcb68f5de978",
                        "field_name": "Email"
                    }, {
                        "field_id": "demo_name",
                        "form_field_key": "35c1cac587354fa39f2596400f02e287",
                        "field_name": "Reported By"
                    }, {
                        "field_id": "",
                        "form_field_key": "e3840715a4794450b9d97df00662b8cc",
                        "field_name": "returnURL"
                    }, {
                        "field_id": "",
                        "form_field_key": "82366ec1ab43447fa60a1257381d5dc3",
                        "field_name": "actionType"
                    }, {
                        "field_id": "",
                        "form_field_key": "742afeb041c345da9472c2b3ea28f372",
                        "field_name": "xmIwtLD"
                    }, {
                        "field_id": "",
                        "form_field_key": "306a9ac730d7429c88e196714fe27864",
                        "field_name": "xnQsjsdp"
                    }],
                    "form_name": "WebToCases4538240000001565470",
                    "domain_match": true
                },
                "status": 2
            },
            "pcTcyQa": {
                "urls": [{
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/inventory/pricing/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/inventory/pricing/"
                }],
                "name": "Zoho Inventory - Pricing pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "pcTcyQa",
                "status": 2
            },
            "PTD7SkO": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/"
                }],
                "name": "Zoho Japan - Home Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "PTD7SkO",
                "status": 2
            },
            "zijdkm5": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/webinars/"
                }],
                "name": "Zoho Bigin - Webinar page 2024",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "zijdkm5",
                "status": 2
            },
            "IiTkoHP": {
                "urls": [{
                    "match_type": 1,
                    "value": "http://874761803.localtest.zohopages.com:8080/Jan-2025-test-now"
                }],
                "name": "Jan 2025 test now_1896503000000013037",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "IiTkoHP",
                "status": 2
            },
            "QRy16jp": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-in/desk/"
                }],
                "name": "Zdesk   IND Home page   O",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "QRy16jp",
                "status": 2
            },
            "HkNYtu9": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/solo/freelancers.html?autoCC=US"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/solo/sidehustlers/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/solo/entrepreneurs/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/solo/handyman/"
                }],
                "name": "Zoho Solo Persona LPs",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "HkNYtu9",
                "status": 2
            },
            "IbWWUcZ": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://catalyst-by-zoho.trainercentralsite.com/session/overcome-lead-scoring-challenges#/home?source=LinkedInAd"
                }],
                "name": "Zoho Catalyst - TC Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "IbWWUcZ",
                "status": 2
            },
            "xG4kHcF": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/flow/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/flow/features/build-custom-workflows.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/flow/features/on-prem-integrations.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/flow/features/triggers.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/flow/features/monitor-troubleshoot-workflows.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/flow/solutions/marketing-campaigns-automation-tool.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/flow/solutions/lead-management-automation.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/flow/solutions/project-task-management.html"
                }],
                "name": "Zoho Flow - Pages 1",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "xG4kHcF",
                "status": 2
            },
            "IbwEznb": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/pagesense/lp/interactive-heatmaps.html"
                }],
                "name": "PageSense - Heatmap",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "IbwEznb",
                "status": 2
            },
            "0qLHJSD": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/features.html"
                }],
                "name": "Zoho Show - Features",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "0qLHJSD",
                "status": 2
            },
            "UYqHb9K": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/mail/buy-domain.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/mail/enterprise-email.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/mail/godaddy-alternative.html"
                }],
                "name": "Zoho Mail - Buy Domain and Enterprise Email",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "UYqHb9K",
                "status": 2
            },
            "g2ZxLeu": {
                "urls": [{
                    "match_type": 5,
                    "value": "https://www.zoho.com/desk/"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/desk/"
                }],
                "name": "Zoho Desk - Signup form Pages",
                "exclude_urls": [{
                    "match_type": 1,
                    "value": "/desk/signup.html"
                }],
                "type": 7,
                "key": "g2ZxLeu",
                "forms": {
                    "custom_event_linkname": "signup",
                    "experiment_key": "g2ZxLeu",
                    "form_loaded": false,
                    "form_id": "",
                    "custom_event_name": "signup",
                    "form_selector": "",
                    "fields": [],
                    "form_name": "signupform"
                },
                "status": 2
            },
            "tMuqTH2": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/billing/solutions/consulting-services/"
                }],
                "name": "ZBilling - Consultation service",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "tMuqTH2",
                "status": 2
            },
            "aq8LT7D": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/rpa/guides/robotic-process-automation.html?src=hdd"
                }],
                "name": "Zoho - RPA",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "aq8LT7D",
                "status": 2
            },
            "r788OPK": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/marketingplus/"
                }],
                "name": "Zoho Marketing Plus - Home Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "r788OPK",
                "status": 2
            },
            "5HzNG0d": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/"
                }],
                "name": "Zoho Japan - Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "5HzNG0d",
                "status": 2
            },
            "FRIYIwB": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://marketplace.bigin.com/app/bigin#action=new"
                }],
                "name": "Zoho MarketPlace - Brand Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "FRIYIwB",
                "status": 2
            },
            "qWsZ1N5": {
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://hiredeveloper.dev/"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Session GP test",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "qWsZ1N5",
                "session_duration": 7200,
                "status": 2
            },
            "SgeGXU4": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/de/crm/crmplus/energiewirtschaft.html"
                }],
                "name": "Zoho CRMPlus - Energiewirtschaft",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "SgeGXU4",
                "status": 2
            },
            "uyrvdua": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/directory/features.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/directory/pricing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/directory/app-catalog.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/directory/"
                }],
                "name": "Zoho Directory - Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "uyrvdua",
                "status": 2
            },
            "NLPXSoZ": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/pt-br/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/pt-br/templates/"
                }],
                "name": "Bigin - PT BR",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "NLPXSoZ",
                "status": 2
            },
            "sjB3DNI": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/webinars.html?utm_source=social_mediaApril2025"
                }],
                "name": "Zoho FSM webinars social media",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "sjB3DNI",
                "status": 2
            },
            "K0DgJpY": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/accounts/oneauth/"
                }],
                "name": "Zoho OneAuth",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "K0DgJpY",
                "status": 2
            },
            "LDOqL10": {
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/pricing-comparison.html"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zoho Desk - Pricing Comparison",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "LDOqL10",
                "session_duration": 7200,
                "status": 2
            },
            "csNTy5M": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crm-for-everyone.html"
                }],
                "name": "Zoho CRM-CRM for Everyone",
                "exclude_urls": [],
                "type": 7,
                "key": "csNTy5M",
                "forms": {
                    "custom_event_linkname": "signup",
                    "experiment_key": "csNTy5M",
                    "form_loaded": false,
                    "form_id": "",
                    "custom_event_name": "signup",
                    "form_selector": "",
                    "fields": [],
                    "form_name": "signupform"
                },
                "status": 2
            },
            "mTBWUGZ": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/pt-br/mail/zohomail-pricing.html"
                }],
                "name": "Zoho Mail pricing page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "mTBWUGZ",
                "status": 2
            },
            "n2Fbwmw": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/contracts/lp/zc-wallet-credits.html"
                }],
                "name": "Zoho Contracts - Wallet Credit Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "n2Fbwmw",
                "status": 2
            },
            "c4OBtQu": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/"
                }],
                "name": "Zoho Desk - US DC form",
                "exclude_urls": [],
                "type": 7,
                "key": "c4OBtQu",
                "forms": {
                    "custom_event_linkname": "signup",
                    "experiment_key": "c4OBtQu",
                    "form_loaded": false,
                    "form_id": "",
                    "custom_event_name": "signup",
                    "form_selector": "",
                    "fields": [],
                    "form_name": "signupform"
                },
                "status": 2
            },
            "TaLPyT9": {
                "name": "Zoho Contracts - Professional Signup",
                "type": 6,
                "steps": {
                    "496c71dcd5f44018add4b9f2c309a7bc": {
                        "step_order": 4,
                        "custom_step": "signup",
                        "key": "496c71dcd5f44018add4b9f2c309a7bc"
                    },
                    "80d3d90a0c224e7983db50df3d30658f": {
                        "step_order": 3,
                        "key": "80d3d90a0c224e7983db50df3d30658f",
                        "url": [{
                            "match_type": 2,
                            "value": "https://www.zoho.com/contracts/signup.html?plan=professional-trial&src=pricing"
                        }]
                    },
                    "945f0cd4412c4df3b15ff4699da3efb7": {
                        "step_order": 1,
                        "key": "945f0cd4412c4df3b15ff4699da3efb7",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/contracts/"
                        }]
                    },
                    "c53394c88e68462cb575d68fcb792475": {
                        "step_order": 2,
                        "key": "c53394c88e68462cb575d68fcb792475",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/contracts/pricing.html"
                        }]
                    }
                },
                "key": "TaLPyT9",
                "session_time": 2592000000,
                "status": 2
            },
            "gOg6xwo": {
                "urls": [{
                    "match_type": 10,
                    "value": "zoho-solo-landing-pages"
                }],
                "name": "Zoho Solo Landing Pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "gOg6xwo",
                "status": 2
            },
            "3fN3E3e": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/zeptomail/lp/transactional-email-service.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/zeptomail/lp/transactional-email-service-1.html"
                }],
                "name": "Zepto Mail - Transactional email service",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "3fN3E3e",
                "status": 2
            },
            "evbc82C": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/projectsplus/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/projectsplus/pricing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/projectsplus/signup.html"
                }],
                "name": "Zoho Projects Plus",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "evbc82C",
                "status": 2
            },
            "AagDZ5k": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/ourstory.html"
                }],
                "name": "Zoho - Our Story",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "AagDZ5k",
                "status": 2
            },
            "NitU8jv": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/partners/reseller-partner-program.html"
                }],
                "name": "Bigin   Reseller partner program",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "NitU8jv",
                "status": 2
            },
            "fwPdxTU": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/developer/docs/client-script/creation.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/developer/docs/client-script/client-script-events.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/developer/docs/client-script/ide-components.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/developer/docs/client-script/static-resources.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/developer/docs/client-script/client-script-best-practices.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/developer/docs/client-script/client-script-insurance.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/developer/docs/client-script/client-script-manufacturing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/developer/docs/client-script/client-script-health-care.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/developer/docs/client-script/FAQs.html"
                }],
                "name": "Zoho CRM - DX Education - Client Script",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "fwPdxTU",
                "status": 2
            },
            "pTORwIb": {
                "urls": [{
                    "match_type": 5,
                    "value": "https://www.zoho.com/show/chronicles/"
                }],
                "name": "Zoho Show - Blog pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "pTORwIb",
                "status": 2
            },
            "Ug5Dx18": {
                "country_required": false,
                "urls": [{
                    "match_type": 3,
                    "value": "https://desk.zoho.com.*/agent?action=CreatePortal"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zoho Desk for Sign up Users",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "Ug5Dx18",
                "session_duration": 7200,
                "status": 2
            },
            "3X932is": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/lp/crm-for-festive-sales.html"
                }],
                "name": "Bigin - festive sale landing page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "3X932is",
                "status": 2
            },
            "N92jMdV": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/practice/customers/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/practice/help/home/"
                }, {
                    "match_type": 2,
                    "value": "https://www.zoho.com/practice/academy/?utm_source=web&utm_medium=header"
                }, {
                    "match_type": 1,
                    "value": "https://help.zoho.com/portal/en/community/zoho-practice"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/practice/contact-us/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/practice/signup/"
                }],
                "name": "Zoho Practice - customer stories/contact/signup",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "N92jMdV",
                "status": 2
            },
            "FSCbqe5": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/calendar"
                }],
                "name": "Zoho Calendar - Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "FSCbqe5",
                "status": 2
            },
            "kfu9qgf": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/analytics/insightshq/7-best-data-visualization-tools-for-understanding-your-data-better.html"
                }],
                "name": "Zoho Analytics insighthq Page 2",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "kfu9qgf",
                "status": 2
            },
            "PcoiaTJ": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/apps/quotation-management-software.html"
                }],
                "name": "Zoho Creator-Gallery Apps-Quotation Management",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "PcoiaTJ",
                "status": 2
            },
            "fO4HXwH": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/invoice/templates/"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/invoice/templates/"
                }],
                "name": "Zoho Invoice - Templates pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "fO4HXwH",
                "status": 2
            },
            "bMFKYY3": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/lp/everlasting-customer-relationships-in.html"
                }],
                "name": "Zoho CRM - Everlasting-India",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "bMFKYY3",
                "status": 2
            },
            "T42BzGt": {
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/lp/app-building.html"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Test - Zoho Creator - App building page",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "T42BzGt",
                "session_duration": 7200,
                "status": 2
            },
            "htcWFqP": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/rpa/usecases/manufacturing-bill-of-materials.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/rpa/usecases/manufacturing-inventory-management.html"
                }],
                "name": "Zoho - RPA Launch 2",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "htcWFqP",
                "status": 2
            },
            "Sawvooj": {
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/iot/solutions/"
                }],
                "is_iframe_tracking_disabled": true,
                "audience": ["all"],
                "permittedTrafic": 100,
                "name": "Zoho IoT Solutions",
                "exclude_urls": [],
                "mask_input_elements": false,
                "type": 8,
                "key": "Sawvooj",
                "session_duration": 7200,
                "status": 2
            },
            "iCLKyx9": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/solo/"
                }],
                "name": "Zoho Solo",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "iCLKyx9",
                "status": 2
            },
            "RD3fsSU": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/start/"
                }],
                "name": "Zoho Start - HomePage New",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "RD3fsSU",
                "status": 2
            },
            "z9MhGFJ": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/watch-demo.html"
                }],
                "name": "Bigin - watch demo page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "z9MhGFJ",
                "status": 2
            },
            "6a6u7zj": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-in/workplace/pricing.html"
                }],
                "name": "Zoho Workplace Pricing",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "6a6u7zj",
                "status": 2
            },
            "cOpiYE9": {
                "name": "US Enterprise - Zoho One AI",
                "type": 6,
                "steps": {
                    "0e77fdf674c64527ba5d6ef9b960df2e": {
                        "step_order": 3,
                        "custom_step": "zohooneai",
                        "key": "0e77fdf674c64527ba5d6ef9b960df2e"
                    },
                    "a83ec77d35cf4961b38c42958dd753a0": {
                        "step_order": 2,
                        "custom_step": "zohooneai funnel1",
                        "key": "a83ec77d35cf4961b38c42958dd753a0"
                    },
                    "ff2f8e29962c45d0b97f61e78c9d0388": {
                        "step_order": 1,
                        "key": "ff2f8e29962c45d0b97f61e78c9d0388",
                        "url": [{
                            "match_type": 1,
                            "value": "https://www.zoho.com/enterprise/zo-ai-webinarseries.html"
                        }]
                    }
                },
                "key": "cOpiYE9",
                "session_time": 2592000000,
                "status": 2
            },
            "wTF3t0X": {
                "urls": [{
                    "match_type": 5,
                    "value": "https://www.zoho.com/practice/features/"
                }, {
                    "match_type": 5,
                    "value": "https://www.zoho.com/in/practice/pricing/"
                }],
                "name": "Zoho Practice - Feature and pricing pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "wTF3t0X",
                "status": 2
            },
            "D9u8I05": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/whats-new/"
                }],
                "name": "Zoho Bigin - What's New 2024",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "D9u8I05",
                "status": 2
            },
            "vVlq7bt": {
                "audience": ["all"],
                "trigger_type": 6,
                "trigger_value": "scroll-and-time-spent",
                "response_type": 1,
                "trigger": ["scroll-and-time-spent"],
                "type": 11,
                "include_urls": [{
                    "match_type": 2,
                    "value": "https://www.zoho.com/survey/"
                }],
                "country_required": false,
                "urls": [{
                    "match_type": 2,
                    "value": "https://www.zoho.com/survey/"
                }],
                "name": "Zoho Survey - Pop Up",
                "exclude_urls": [],
                "key": "vVlq7bt",
                "special_filter": "{\"condition_type\":1,\"conditions\":[{\"condition_type\":1,\"conditions\":[{\"values\":[\"Desktop\"],\"type\":\"device\",\"operator\":1}]}]}",
                "status": 2
            },
            "oC55MKa": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/calendar/schedule-events.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/calendar/schedule-appointments.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/calendar/share-embed.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/calendar/subscribe-import-export.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/calendar/cross-platform-sync.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/calendar/team-calendar.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/calendar/mobile-apps.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/calendar/features.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/calendar/integration/meeting-tools.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/calendar/group-calendar.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/calendar/personal-calendar.html"
                }],
                "name": "Zoho Calendar - Other pages - Nov 30",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "oC55MKa",
                "status": 2
            },
            "9mBEm9h": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://community.zoho.com/meetups/?zwc_product=desk&zwc_country=india"
                }],
                "name": "ZD - Customer Meet up 25",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "9mBEm9h",
                "status": 2
            },
            "jWQJGZD": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/pricing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/notifications.html?src=pd-menu"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/developer-space.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/data-administration.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/scheduled-maintenance.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/whatsapp-integration.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/zoho-invoice-integration.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/bigin-integration.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/work-order-management.html"
                }],
                "name": "Zoho - FSM 2",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "jWQJGZD",
                "status": 2
            },
            "BbJog4H": {
                "heatmap": 2,
                "audience": ["all"],
                "goal": ["business-solution-pricing"],
                "redirect_params": true,
                "type": 1,
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/notebook/business-solution.html"
                }],
                "permittedTrafic": 100,
                "variations": {
                    "aMXv": {
                        "allotedPercentage": 50,
                        "variation_css_changes": "",
                        "is_original": false,
                        "name": "Variation 1",
                        "variation_changes": ["$pagesense.$(\".show-slide-form\").html(\"See pricing\");\n$pagesense.$(\".show-slide-form\").attr(\"href\",\"/notebook/business-pricing.html?src=business-solution\");\n$pagesense.$(\".show-slide-form\").replaceWith(\"<a href=\\\"/notebook/business-pricing.html?src=business-solution\\\" class=\\\"btn-pricing\\\">See pricing<\/a>\");\n"],
                        "key": "aMXv"
                    },
                    "ouiB": {
                        "allotedPercentage": 50,
                        "is_original": true,
                        "name": "Original",
                        "url": "https://www.zoho.com/notebook/business-solution.html",
                        "key": "ouiB"
                    }
                },
                "name": "Notebook Business Solution",
                "activation_mode": 1,
                "exclude_urls": [],
                "integrations": {},
                "key": "BbJog4H",
                "status": 2
            },
            "clP5GTs": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/invoice/create-send-invoices/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/au/invoice/create-send-invoices/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/us/invoice/create-send-invoices/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/uk/invoice/create-send-invoices/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/invoice/create-send-invoices/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/ca/invoice/create-send-invoices/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/za/invoice/create-send-invoices/"
                }],
                "name": "Invoice - Send invoice  Global, US, UK, IN, AU, CA, SA",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "clP5GTs",
                "status": 2
            },
            "is147Br": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/instant-messaging.html"
                }],
                "name": "Zoho Desk - IM LP_C",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "is147Br",
                "status": 2
            },
            "RydTgBA": {
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/iot/solutions/"
                }],
                "name": "Zoho IoT Solutions",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "RydTgBA",
                "status": 2
            },
            "IOHvQCT": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/win-with-zohodesk.html"
                }],
                "name": "Zdesk - Win with Zdesk   LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "IOHvQCT",
                "status": 2
            },
            "MubM0uY": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/campaigns/email-marketing-demo.html"
                }],
                "name": "Zoho Campaigns - Demo Campaigns",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "MubM0uY",
                "status": 2
            },
            "BzhzyCf": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/partners/find-partner-results.html?search=India&where=country"
                }],
                "name": "Locate Zoho Partner",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "BzhzyCf",
                "status": 2
            },
            "XI9jLDT": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/lp/everlasting-customer-relationships-in.html"
                }],
                "name": "Zoho Bigin - CRM India LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "XI9jLDT",
                "status": 2
            },
            "t7u9ZvP": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/campaigns/drip-marketing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/campaigns/marketing-automation/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/campaigns/marketing-automation/email-workflow.html"
                }],
                "name": "ZCAMP   Drip - MAFlow",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "t7u9ZvP",
                "status": 2
            },
            "Ou1VUN6": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/partners/consulting-partnership.html"
                }],
                "name": "Zoho Partner - Consulting partnership",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "Ou1VUN6",
                "status": 2
            },
            "rrfWROx": {
                "urls": [{
                    "match_type": 6,
                    "value": "https://www.zoho.com/zoholics/europe/"
                }],
                "name": "Zoholics - Europe  com eu (1)",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "rrfWROx",
                "status": 2
            },
            "HNVYjSQ": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/trident/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/trident/demo-video.html"
                }],
                "name": "Zoho Trident - Home",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "HNVYjSQ",
                "status": 2
            },
            "OoMvylf": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/freshdesk-contract-buyout.html"
                }],
                "name": "Zoho Desk - Freshdeskbuyout Landing page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "OoMvylf",
                "status": 2
            },
            "l48mCTn": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/todo/"
                }],
                "name": "Zoho ToDO - Header",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "l48mCTn",
                "status": 2
            },
            "y0fluWb": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/crmplus/lp/customer-experience-management.html"
                }],
                "name": "Zoho Japan - Cx experience Mgmt LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "y0fluWb",
                "status": 2
            },
            "rg3IFzR": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/"
                }],
                "name": "Zoho FSM - LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "rg3IFzR",
                "status": 2
            },
            "s73HVWw": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-uk/one/legal-zohoone-baringslaw-UK-2401-L-ADV-LNK-CBL.html"
                }],
                "name": "Zoho One - UK Ads Group",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "s73HVWw",
                "status": 2
            },
            "NcDJ1cj": {
                "urls": [{
                    "match_type": 10,
                    "value": "zoho-com-learn"
                }],
                "name": "Zoho.com Learn",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "NcDJ1cj",
                "status": 2
            },
            "hXAYrXl": {
                "urls": [{
                    "match_type": 5,
                    "value": "https://www.zoho.com/healthcare/digest/"
                }],
                "name": "Zoho HealthCare - Digest page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "hXAYrXl",
                "status": 2
            },
            "svle2Ql": {
                "urls": [{
                    "match_type": 6,
                    "value": "https://community.zoho.com/"
                }, {
                    "match_type": 1,
                    "value": "https://community.zoho.com/"
                }, {
                    "match_type": 1,
                    "value": "https://community.zoho.com/thanksgiving-superbud-2022/"
                }],
                "name": "Zoho Community - All pages",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "svle2Ql",
                "status": 2
            },
            "kOkSCAY": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/solo/"
                }],
                "name": "Zoho Solo - Homepage",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "kOkSCAY",
                "status": 2
            },
            "xyifL8j": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/billing/solutions/e-publishing/"
                }],
                "name": "Zbilling - ePublishling",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "xyifL8j",
                "status": 2
            },
            "s26o5ne": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/?utm_parameter=ZOHOBUZZFEB2025"
                }, {
                    "match_type": 1,
                    "value": "https://help.zoho.com/portal/en/kb/fsm/automation/articles/workflow-rules-and-actions-using-notes/?utm_parameter=ZOHOBUZZFEB2025"
                }],
                "name": "Zoho FSM  Buzz  Feb25",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "s26o5ne",
                "status": 2
            },
            "f5IAhuD": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/social-media-publishing.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/scheduling.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/social-media-monitoring-software.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/social-media-analytics.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/collaboration.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/inbox.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/zia-openai-integration.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/zohocrm-integration.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/zohodesk-integration.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/canva.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/mobile-app.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/zshare.html"
                }],
                "name": "Zoho Social - Features",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "f5IAhuD",
                "status": 2
            },
            "fHwEVDA": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/individuals.html"
                }],
                "name": "Zoho Show - Individuals Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "fHwEVDA",
                "status": 2
            },
            "3HTEJRm": {
                "urls": [{
                    "match_type": 5,
                    "value": "https://www.zoho.com/start/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/en-us/start/privacy.html"
                }],
                "name": "Zoho Start - Pages",
                "activation_mode": 1,
                "exclude_urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/start/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/start/pricing.html"
                }],
                "type": 5,
                "key": "3HTEJRm",
                "status": 2
            },
            "m3A3qsL": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://static.zohocdn.com/crm/8358866/documentation/ZDK-1.0-M2/ZDK.UI.html"
                }, {
                    "match_type": 1,
                    "value": "https://static.zohocdn.com/crm/8358866/documentation/ZDK-1.0-M2/ZDK.HTTP.html"
                }, {
                    "match_type": 1,
                    "value": "https://static.zohocdn.com/crm/8358936/documentation/ZDK-1.0-M2/ZDK.Client.html"
                }],
                "name": "CRM-Zdk client APIs",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "m3A3qsL",
                "status": 2
            },
            "OSCOICx": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/billing/solutions/e-learning/"
                }],
                "name": "ZBlling - eLearning",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "OSCOICx",
                "status": 2
            },
            "wQY6bDg": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/in/billing/solutions/non-profit/"
                }],
                "name": "ZBilling - Non Profit",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "wQY6bDg",
                "status": 2
            },
            "9saeWPG": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/zoho-flow-integration.html?utm_parameter=ZOHOBUZZMARCH2025"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/zapier-integration.html?utm_parameter=ZOHOBUZZMARCH2025"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/fsm/?utm_parameter=ZOHOBUZZMARCH2025"
                }],
                "name": "Zoho Buzz March 2025",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "9saeWPG",
                "status": 2
            },
            "vTz6HLn": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/pagesense/lp/abtest.html"
                }],
                "name": "ZPS A B testing   LP",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "vTz6HLn",
                "status": 2
            },
            "PcktRmY": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/request-callback.html"
                }],
                "name": "Zoho Bigin - Call back request page 2024",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "PcktRmY",
                "status": 2
            },
            "CzN8YI9": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/partners/event/genai-datadriven-dx.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/webinars/1on1seminar-4.html"
                }],
                "name": "Zoho Japan - Seminar",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "CzN8YI9",
                "status": 2
            },
            "6xixBPi": {
                "audience": ["us-audience-only"],
                "trigger_type": 6,
                "trigger_value": "visitor-inactive-30-secs",
                "response_type": 1,
                "attributes_required": false,
                "trigger": ["visitor-inactive-30-secs"],
                "type": 11,
                "include_urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/"
                }],
                "country_required": true,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/"
                }],
                "name": "Zoho Bigin - Callback Popup - US (1)",
                "exclude_urls": [{
                    "match_type": 5,
                    "value": "https://www.bigin.com/es-xl/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/pt-br/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/fr/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/nl/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/ar/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/id/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/th/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/vi/"
                }, {
                    "match_type": 5,
                    "value": "https://www.bigin.com/it/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/developer/docs/apis/v2/"
                }, {
                    "match_type": 1,
                    "value": "https://www.bigin.com/signup.html"
                }],
                "weather_required": false,
                "key": "6xixBPi",
                "special_filter": "{\"condition_type\":1,\"conditions\":[{\"condition_type\":1,\"conditions\":[{\"values\":[\"Desktop\",\"Tablet\"],\"type\":\"device\",\"operator\":1}]}]}",
                "status": 2
            },
            "C90lUXJ": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/connect/workplace-from-meta-alternative.html"
                }],
                "name": "Zoho Connect - Alternative Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "C90lUXJ",
                "status": 2
            },
            "gb9pGGl": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/procurement/?utm_source=E-Procurement&utm_medium=HeaderStrip&utm_campaign=Redirect"
                }],
                "name": "Zoho Creator-Gallery Apps-Procurement",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "gb9pGGl",
                "status": 2
            },
            "vc3lGzZ": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/iot/request-demo.html"
                }],
                "name": "ZIoT RequestDemo",
                "exclude_urls": [],
                "type": 7,
                "key": "vc3lGzZ",
                "forms": {
                    "custom_event_linkname": "ziotrequestdemo",
                    "experiment_key": "vc3lGzZ",
                    "form_loaded": false,
                    "form_id": "z_crmwebform_1",
                    "custom_event_name": "ziotrequestdemo",
                    "form_selector": "",
                    "fields": [],
                    "form_name": "WebToCases4538240007798078352"
                },
                "status": 2
            },
            "QKVBYan": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/social/request-callback.html"
                }],
                "name": "Zoho Social-Request Callback",
                "exclude_urls": [],
                "type": 7,
                "key": "QKVBYan",
                "forms": {
                    "experiment_key": "QKVBYan",
                    "form_conversion_url": [{
                        "match_type": 6,
                        "value": "https://www.zoho.com/social/request-callback.html?submit=success"
                    }],
                    "form_loaded": false,
                    "form_id": "z_crmwebform",
                    "form_selector": "",
                    "fields": [],
                    "form_name": "",
                    "domain_match": false
                },
                "status": 2
            },
            "gwHIMVT": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/freshdesk-alternative.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/best-zendesk-alternative.html"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/desk/lp/salesforce-desk-alternative.html"
                }],
                "name": "Zoho Desk - LP Alternatives",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "gwHIMVT",
                "status": 2
            },
            "LB8W7DG": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/show/pricing.html"
                }],
                "name": "Zoho Show - Pricing page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "LB8W7DG",
                "status": 2
            },
            "9oKuNln": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/crm/what-is-crm.html"
                }],
                "name": "Zoho Japan - What is CRM",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "9oKuNln",
                "status": 2
            },
            "PXwusaK": {
                "urls": [{
                    "match_type": 5,
                    "value": "https://www.zoho.com/crm/"
                }, {
                    "match_type": 3,
                    "value": "https://www.zoho.com/*/crm/"
                }],
                "name": "Zoho CRM - Signup form Pages Latest",
                "exclude_urls": [{
                    "match_type": 5,
                    "value": "https://www.zoho.com/crm/crmplus/"
                }, {
                    "match_type": 1,
                    "value": "https://www.zoho.com/crm/crm-for-everyone.html"
                }],
                "type": 7,
                "key": "PXwusaK",
                "forms": {
                    "custom_event_linkname": "signup",
                    "experiment_key": "PXwusaK",
                    "form_loaded": false,
                    "form_id": "",
                    "custom_event_name": "signup",
                    "form_selector": "",
                    "fields": [],
                    "form_name": "signupform"
                },
                "status": 2
            },
            "QplcEuu": {
                "heatmap": 3,
                "audience": ["all"],
                "goal": ["signup-44"],
                "redirect_params": true,
                "attributes_required": false,
                "type": 2,
                "country_required": false,
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/creator/"
                }],
                "permittedTrafic": 100,
                "variations": {
                    "3f03e8ba1f50455597ba626ede6d6aa8": {
                        "allotedPercentage": 50,
                        "variation_css_changes": "",
                        "is_original": false,
                        "name": "Index 1 page",
                        "variation_changes": [""],
                        "url": "https://www.zoho.com/creator/index1.html",
                        "key": "3f03e8ba1f50455597ba626ede6d6aa8"
                    },
                    "7461a2d175f94ee9b882ca7b99035008": {
                        "allotedPercentage": 50,
                        "is_original": true,
                        "name": "Original",
                        "url": "https://www.zoho.com/creator/",
                        "key": "7461a2d175f94ee9b882ca7b99035008"
                    }
                },
                "name": "Zoho Creator -  Homepage Test New",
                "activation_mode": 1,
                "exclude_urls": [],
                "integrations": {},
                "weather_required": false,
                "key": "QplcEuu",
                "status": 2
            },
            "PVl20CF": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.zoho.com/jp/campaigns/lp/list-management.html"
                }],
                "name": "Zoho Japan - Campaigns List Management Page",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "PVl20CF",
                "status": 2
            },
            "vm0UUV3": {
                "urls": [{
                    "match_type": 1,
                    "value": "https://www.bigin.com/pricing.html"
                }],
                "name": "Bigin Pricing Page - 12/11/24",
                "activation_mode": 1,
                "exclude_urls": [],
                "type": 5,
                "key": "vm0UUV3",
                "status": 2
            }
        },
        "project_linkname": "zoho-marketing",
        "webpush": {
            "display_opt_in": 1,
            "public_key": "BN3yvUssQ2DJE2IdlUsSJxJt-dLoGS6PyodflarC8gZtxDojL0-TMdqNdSurYvGksr-4nLd5t09cyQ2d2PCWTtU=",
            "mobile_opt_in": true,
            "child_offer_text": "Stay updated with our latest news and offers by subscribing to notifications.",
            "has_push_experiment": false,
            "has_triggered_goal": true,
            "display_opt_in_value": 5,
            "title": "Test",
            "message": "Testing",
            "disallow_button_text": "Don't Allow",
            "cdn": "https://cdn.pagesense.io/stage-script/",
            "is_webpush_enabled": false,
            "child_window_opt_in": true,
            "allow_button_text": "Allow",
            "child_text": "Click Allow to receive notifications",
            "domain": "pagesense.zoho.com",
            "child_subscribe_text": "Click here to Subscribe",
            "opt_in_type": 2,
            "collectserver": "pagesense-collect.zoho.com",
            "subdomain_name": "Zylker"
        },
        "is_secondary_script_needed": false,
        "project_js": "var retrievedObject = localStorage.getItem('it'); \nif(!retrievedObject) {\n   localStorage.setItem(\"it\",[0,1,2,3,4,5,6,7,8]);\n}\n\nvar retrievedObject = localStorage.getItem('it1');\nif(!retrievedObject) {\n   localStorage.setItem(\"it1\",[0,1,2,3,4,5,6,7]);\n}\n\nvar retrievedObject = localStorage.getItem('it2');\nif(!retrievedObject) {\n   localStorage.setItem(\"it2\",[0,1,2,3,4,5,6,7]);\n}\n\nvar retrievedObject = localStorage.getItem('business');\nif(!retrievedObject) {\n   localStorage.setItem(\"business\",[0,1,2,3,4,5,6,7]);\n}\n\nvar retrievedObject = localStorage.getItem('business1');\nif(!retrievedObject) {\n   localStorage.setItem(\"business1\",[0,1,2,3,4,5,6,7]);\n}\n\nvar retrievedObject = localStorage.getItem('business2');\nif(!retrievedObject) {\n   localStorage.setItem(\"business2\",[0,1,2,3,4,5,6]);\n}\n\n\ndocument.querySelector('#checkout_buyer_accepts_marketing').onclick = function(){\n    \n    if(!document.querySelector('#checkout_buyer_accepts_marketing').checked) {\n        window.pagesense = window.pagesense || [];\nwindow.pagesense.push(['trackEvent', 'checkbox']);\n    }\n\n\n}  ",
        "integrations": {},
        "events": ["zexpenserequestdemo", "Sign Up", "zohooneai funnel1", "zohooneai_funnel2", "zohooneai_funnel", "zohooneai", "StartupWizard Event", "Additional Event", "Tools Event", "Inventory Event", "Purchase Event", "Sales Event", "Master Event", "NULL", "cliqform", "ziotsignup", "ziotrequestdemo", "zdeskinappexplorenow", "zdeskportalcreated", "zsheetswindowsdownload", "zsalesiqdemosubmit", "zshiftsdemosubmit", "zexpensefeedbackclose", "zexpenseexcellent", "zexpensegood", "zexpenseokay", "zexpensefeedbacksubmit", "zexpensebad", "zebad", "zfsmaccessapp", "zfsmdownloadpdf", "zfsmsignupbottom", "zfsmsinguptop", "Deskflow_newportal", "portalCreated", "timeZoneUpdated", "countryUpdated", "languageUpdated", "zcfloatctaclick", "zfpseminarregister", "zbsdemoformsubmit", "zbsrequestdemoctaright", "jpcrminquiryformsubmit", "jpcrmwelcomeformsubmit", "jpcrmzwitchhomecta", "JPCRMZWITCHCTA", "backstagenewdemoform", "Request demo - Orange", "zinventoryskugeneratoraddretain", "zinventoryskugeneratoradd", "zinventorydownloadbarcode", "zinventorybarcode", "all set", "analyse", "business goals", "privacy", "code snippet", "codesnippet", "domain", "zpssdomain", "zohobooks-form submission", "zohobooks", "SalesIQ-Demoform", "Submit", "signupnew", "test", "zwdfreedemosignup", "migration_support", "buisness_details", "company_profile", "zshiftssignup", "zwritersignup", "zstartsignup", "zjcrmplussalesiqfreetrialcta", "zsurveydemosubmit", "zwdmacosdownload", "zwdwindowsdownload", "zsiqdemosignup", "zbsrequestdemo", "zpsdemosubmit", "zpsallset", "zpsanalyse", "zpsbusinessgoal", "zpsprivacy", "zpscodesnippet", "zpsdomain", "zhealthcaregetintouch", "popup_close", "popup", "CRMSignup", "zwddownloaddeskapp", "submitnewbusiness", "zeventssend", "zadesignupformsubmit", "zwdsalesformsubmit", "zwdcontactsales", "zonesignuplinkedin", "zonesignupgoogle", "backstagerequestdemo", "backstagehomerequestdemo", "backstagrequestdemo", "sheetofficeclick", "sheetfacebookclick", "sheetlinkedinclick", "sheetgoogleclick", "zenterprisedemosubmit", "signupvialinkedin", "signupviagoogle", "signupviafacebook", "signupviashow", "starttrial", "jumpsubmit", "submitclicked", "greportformsubmit", "readreportnow", "Successful Login", "Confirmation Page", "Business Information", "Basic information", "new_subscription_success_2", "new_subscription_payment_submitted_2", "new_subscription_addons_selected_2", "new_subscription_plan_selected_2", "new_subscription_page_landed_2", "signupwithlinkedIn", "signupwithgoogle", "signupwithfb", "new_subscription_success", "new_subscription_payment_submitted", "new_subscription_addons_selected", "new_subscription_plan_selected", "new_subscription_page_landed", "signup"],
        "megroups": {
            "7c55c6f97976417195483aefbcdc9091": [{
                "experiment_key": "nIXqIvz",
                "traffic": 50
            }, {
                "experiment_key": "uRuzOZJ",
                "traffic": 50
            }]
        }
    }), h = new (function() {
        function e() {
            window.ZAB = window.ZAB || {},
            window.ZAB.data = m
        }
        return e.prototype.getWebfontOrigin = function() {
            return {
                "trackingServerUrl": "pagesense-collect.zoho.com",
                "locationUrl": "https://locationapi.cdn.pagesense.io/location.js",
                "mhServerUrl": "https://ma.zoho.com/",
                "zohoWebAppCdnUrl": "https://static.zohocdn.com/pagesense/webapps/",
                "appServerUrl": "pagesense.zoho.com",
                "thirdPartyCdnUrl": "https://cdn.pagesense.io/stage-script/",
                "trackSessionRecordingServerUrl": "pagesense-sessionrecording-collect.zoho.com",
                "zohoCdnUrl": "https://static.zohocdn.com/pagesense/tracking/",
                "webfontOrigin": "https://webfonts.zoho.com/",
                "scriptCdnUrl": "https://cdn.pagesense.io/js/"
            }.webfontOrigin
        }
        ,
        e.prototype.getZohoCdnUrl = function() {
            return {
                "trackingServerUrl": "pagesense-collect.zoho.com",
                "locationUrl": "https://locationapi.cdn.pagesense.io/location.js",
                "mhServerUrl": "https://ma.zoho.com/",
                "zohoWebAppCdnUrl": "https://static.zohocdn.com/pagesense/webapps/",
                "appServerUrl": "pagesense.zoho.com",
                "thirdPartyCdnUrl": "https://cdn.pagesense.io/stage-script/",
                "trackSessionRecordingServerUrl": "pagesense-sessionrecording-collect.zoho.com",
                "zohoCdnUrl": "https://static.zohocdn.com/pagesense/tracking/",
                "webfontOrigin": "https://webfonts.zoho.com/",
                "scriptCdnUrl": "https://cdn.pagesense.io/js/"
            }.zohoCdnUrl
        }
        ,
        e.prototype.getZohoWebAppCdnUrl = function() {
            return {
                "trackingServerUrl": "pagesense-collect.zoho.com",
                "locationUrl": "https://locationapi.cdn.pagesense.io/location.js",
                "mhServerUrl": "https://ma.zoho.com/",
                "zohoWebAppCdnUrl": "https://static.zohocdn.com/pagesense/webapps/",
                "appServerUrl": "pagesense.zoho.com",
                "thirdPartyCdnUrl": "https://cdn.pagesense.io/stage-script/",
                "trackSessionRecordingServerUrl": "pagesense-sessionrecording-collect.zoho.com",
                "zohoCdnUrl": "https://static.zohocdn.com/pagesense/tracking/",
                "webfontOrigin": "https://webfonts.zoho.com/",
                "scriptCdnUrl": "https://cdn.pagesense.io/js/"
            }.zohoWebAppCdnUrl
        }
        ,
        e.prototype.getThirdPartyCdnUrl = function() {
            return {
                "trackingServerUrl": "pagesense-collect.zoho.com",
                "locationUrl": "https://locationapi.cdn.pagesense.io/location.js",
                "mhServerUrl": "https://ma.zoho.com/",
                "zohoWebAppCdnUrl": "https://static.zohocdn.com/pagesense/webapps/",
                "appServerUrl": "pagesense.zoho.com",
                "thirdPartyCdnUrl": "https://cdn.pagesense.io/stage-script/",
                "trackSessionRecordingServerUrl": "pagesense-sessionrecording-collect.zoho.com",
                "zohoCdnUrl": "https://static.zohocdn.com/pagesense/tracking/",
                "webfontOrigin": "https://webfonts.zoho.com/",
                "scriptCdnUrl": "https://cdn.pagesense.io/js/"
            }.thirdPartyCdnUrl
        }
        ,
        e.prototype.getTrackingServerUrl = function() {
            return {
                "trackingServerUrl": "pagesense-collect.zoho.com",
                "locationUrl": "https://locationapi.cdn.pagesense.io/location.js",
                "mhServerUrl": "https://ma.zoho.com/",
                "zohoWebAppCdnUrl": "https://static.zohocdn.com/pagesense/webapps/",
                "appServerUrl": "pagesense.zoho.com",
                "thirdPartyCdnUrl": "https://cdn.pagesense.io/stage-script/",
                "trackSessionRecordingServerUrl": "pagesense-sessionrecording-collect.zoho.com",
                "zohoCdnUrl": "https://static.zohocdn.com/pagesense/tracking/",
                "webfontOrigin": "https://webfonts.zoho.com/",
                "scriptCdnUrl": "https://cdn.pagesense.io/js/"
            }.trackingServerUrl
        }
        ,
        e.prototype.getSessionRecordingIframeTrackingServerUrl = function() {
            return {
                "trackingServerUrl": "pagesense-collect.zoho.com",
                "locationUrl": "https://locationapi.cdn.pagesense.io/location.js",
                "mhServerUrl": "https://ma.zoho.com/",
                "zohoWebAppCdnUrl": "https://static.zohocdn.com/pagesense/webapps/",
                "appServerUrl": "pagesense.zoho.com",
                "thirdPartyCdnUrl": "https://cdn.pagesense.io/stage-script/",
                "trackSessionRecordingServerUrl": "pagesense-sessionrecording-collect.zoho.com",
                "zohoCdnUrl": "https://static.zohocdn.com/pagesense/tracking/",
                "webfontOrigin": "https://webfonts.zoho.com/",
                "scriptCdnUrl": "https://cdn.pagesense.io/js/"
            }.trackSessionRecordingServerUrl
        }
        ,
        e.prototype.getAppServerUrl = function() {
            return {
                "trackingServerUrl": "pagesense-collect.zoho.com",
                "locationUrl": "https://locationapi.cdn.pagesense.io/location.js",
                "mhServerUrl": "https://ma.zoho.com/",
                "zohoWebAppCdnUrl": "https://static.zohocdn.com/pagesense/webapps/",
                "appServerUrl": "pagesense.zoho.com",
                "thirdPartyCdnUrl": "https://cdn.pagesense.io/stage-script/",
                "trackSessionRecordingServerUrl": "pagesense-sessionrecording-collect.zoho.com",
                "zohoCdnUrl": "https://static.zohocdn.com/pagesense/tracking/",
                "webfontOrigin": "https://webfonts.zoho.com/",
                "scriptCdnUrl": "https://cdn.pagesense.io/js/"
            }.appServerUrl
        }
        ,
        e.prototype.getLocationUrl = function() {
            return {
                "trackingServerUrl": "pagesense-collect.zoho.com",
                "locationUrl": "https://locationapi.cdn.pagesense.io/location.js",
                "mhServerUrl": "https://ma.zoho.com/",
                "zohoWebAppCdnUrl": "https://static.zohocdn.com/pagesense/webapps/",
                "appServerUrl": "pagesense.zoho.com",
                "thirdPartyCdnUrl": "https://cdn.pagesense.io/stage-script/",
                "trackSessionRecordingServerUrl": "pagesense-sessionrecording-collect.zoho.com",
                "zohoCdnUrl": "https://static.zohocdn.com/pagesense/tracking/",
                "webfontOrigin": "https://webfonts.zoho.com/",
                "scriptCdnUrl": "https://cdn.pagesense.io/js/"
            }.locationUrl
        }
        ,
        e.prototype.getTrackingDataObject = function() {
            return m
        }
        ,
        e.prototype.getMHServerURL = function() {
            return {
                "trackingServerUrl": "pagesense-collect.zoho.com",
                "locationUrl": "https://locationapi.cdn.pagesense.io/location.js",
                "mhServerUrl": "https://ma.zoho.com/",
                "zohoWebAppCdnUrl": "https://static.zohocdn.com/pagesense/webapps/",
                "appServerUrl": "pagesense.zoho.com",
                "thirdPartyCdnUrl": "https://cdn.pagesense.io/stage-script/",
                "trackSessionRecordingServerUrl": "pagesense-sessionrecording-collect.zoho.com",
                "zohoCdnUrl": "https://static.zohocdn.com/pagesense/tracking/",
                "webfontOrigin": "https://webfonts.zoho.com/",
                "scriptCdnUrl": "https://cdn.pagesense.io/js/"
            }.mhServerUrl
        }
        ,
        e.prototype.getScriptCdnUrl = function() {
            return {
                "trackingServerUrl": "pagesense-collect.zoho.com",
                "locationUrl": "https://locationapi.cdn.pagesense.io/location.js",
                "mhServerUrl": "https://ma.zoho.com/",
                "zohoWebAppCdnUrl": "https://static.zohocdn.com/pagesense/webapps/",
                "appServerUrl": "pagesense.zoho.com",
                "thirdPartyCdnUrl": "https://cdn.pagesense.io/stage-script/",
                "trackSessionRecordingServerUrl": "pagesense-sessionrecording-collect.zoho.com",
                "zohoCdnUrl": "https://static.zohocdn.com/pagesense/tracking/",
                "webfontOrigin": "https://webfonts.zoho.com/",
                "scriptCdnUrl": "https://cdn.pagesense.io/js/"
            }.scriptCdnUrl
        }
        ,
        e
    }()), v = "https://" + h.getTrackingServerUrl() + d, w = new (function() {
        function e() {}
        return e.prototype.getStackTrace = function(e) {
            return e.stack
        }
        ,
        e.prototype.error = function(e, t) {
            var i = this.getErrorData(e);
            window.ZAB.zab.generateUserAgentData();
            var n = {
                urd: window.ZAB.useragentrawdata,
                errd: i,
                prd: {
                    pn: window.ZAB.zab.getDataObj().portal_name
                },
                errmd: t || void 0
            };
            this.sendData(n, u.ERROR)
        }
        ,
        e.prototype.info = function(e) {
            e.lt = p,
            e.urd = window.ZAB.useragentrawdata;
            var t = {
                infrd: e
            };
            this.sendData(t, u.INFO)
        }
        ,
        e.prototype.getErrorData = function(e) {
            var t = {};
            return t.n = e.name,
            t.m = e.message,
            t.s = this.getStackTrace(e),
            t.lt = l,
            t
        }
        ,
        e.prototype.sendData = function(e, t) {
            var i;
            switch (t) {
            case 1:
            case 2:
                i = v + "?type=" + t
            }
            var n = !1;
            null != navigator.sendBeacon && (n = navigator.sendBeacon(i, JSON.stringify(e))),
            n || window.ZAB.zab.sendDataViaPostRequest(i, e, function() {})
        }
        ,
        e
    }()), A = new (function() {
        function e() {
            this.skipDefaultAntiFOOC = !1
        }
        return e.prototype.initialize = function(e, t) {
            this.skipDefaultAntiFOOC = !0,
            this.applyCustomAntiFOOC = e,
            this.revertCustomAntiFOOC = t
        }
        ,
        e
    }()), E = new (function() {
        function e() {
            this.getZABQueryKeyValue = function(e, t) {
                try {
                    return this.getQueryParameters(e.replace(/^.*\?/, ""))[t]
                } catch (e) {}
                return null
            }
        }
        return e.prototype.isLocationRequiredForSessionRecordingExperiments = function() {
            var e = !1
              , t = window.ZAB.zab.getDataObj();
            for (var i in t.experiment)
                t.experiment.hasOwnProperty(i) && t.experiment[i] && 8 === t.experiment[i].type && 2 === t.experiment[i].status && window.ZAB.zab.isExperimentURLMatches(t.experiment[i]) && t.experiment[i].country_required && (e = !0);
            return e
        }
        ,
        e.prototype.isLocationRequiredForExperiments = function() {
            var e = !1
              , t = window.ZAB.zab.getDataObj();
            for (var i in t.experiment)
                t.experiment.hasOwnProperty(i) && t.experiment[i] && 2 === t.experiment[i].status && window.ZAB.zab.isExperimentURLMatches(t.experiment[i]) && t.experiment[i].country_required && (e = !0);
            return e
        }
        ,
        e.prototype.getLocationDetails = function() {
            this.isLocationRequired = !0;
            var t = window.ZAB.zab.getServerUrlObject();
            this.geolocationStartTime = (new Date).getTime(),
            window.ZAB.zab.getDataFromServer(t.geolocationserverurl, this.geoLocationCallbackServer.bind(this));
            try {
                e.awsgeolocationStartTime = (new Date).getTime();
                var i = h.getLocationUrl();
                this.getResponseFromServer(i, this.geoLocationCallbackAWS.bind(this))
            } catch (e) {}
        }
        ,
        e.prototype.getResponseFromServer = function(e, t) {
            var i = new XMLHttpRequest;
            i.open("GET", e, !0);
            try {
                i.setRequestHeader("Content-Type", "text/plain"),
                i.onreadystatechange = function() {
                    4 == this.readyState && 200 == this.status && t(i)
                }
                ,
                i.send()
            } catch (e) {
                w.error(e)
            }
        }
        ,
        e.prototype.geoLocationCallbackServer = function(t) {
            this.geolocationCallback(t);
            var i = "Server Geolocation JSON received is " + t;
            i = i + " Time taken to complete geolocation server request is " + ((new Date).getTime() - e.awsgeolocationStartTime),
            window.ZAB.zab.generateUserAgentData();
            var n = {
                msg: i = i + " Visitid - " + window.ZAB.useragentrawdata.d
            };
            w.info(n)
        }
        ,
        e.prototype.geoLocationCallbackAWS = function(t) {
            var i = "AWS Geolocation JSON received is " + t.response;
            i = i + " Time taken to complete geolocation server request is " + ((new Date).getTime() - e.awsgeolocationStartTime),
            window.ZAB.zab.generateUserAgentData(),
            i = i + " Visitid - " + window.ZAB.useragentrawdata.d,
            this.geolocationCallback(t.response);
            var n = {
                msg: i = i + " Response header X-Amz-Cf-Id is " + t.getResponseHeader("X-Amz-Cf-Id")
            };
            w.info(n)
        }
        ,
        e.prototype.getCustomAttributeDetails = function() {
            var e = this
              , t = window.ZAB.zab.getAppServerDomain()
              , i = window.ZAB.zab.getDataObj();
            s.customAttributesRequestStartTime = (new Date).getTime();
            var n = t + "/pagesense/api/v1/getUserInformation?f=" + window.ZAB.zab.getUserId() + "&a=" + i.portal_name;
            window.ZAB.zab.getDataFromServer(n, function(t) {
                e.saveCustomAttributeDataInLocalStorage(t)
            })
        }
        ,
        e.prototype.getWeatherDetails = function() {
            var e = this
              , t = window.ZAB.zab.getAppServerDomain();
            s.weatherDetailsRequestStartTime = (new Date).getTime();
            var i = t + "/pagesense/api/v1/getWeatherInfo";
            window.ZAB.zab.getDataFromServer(i, function(t) {
                e.saveWeatherInfo(t)
            })
        }
        ,
        e.prototype.geolocationCallback = function(e) {
            if (e) {
                var t = (e = JSON.parse(e)).COUNTRY_NAME.toLowerCase();
                t = t.charAt(0).toUpperCase() + t.slice(1);
                var i = e.REGION.toLowerCase();
                i = i.charAt(0).toUpperCase() + i.slice(1);
                var n = e.CITY.toLowerCase();
                n = n.charAt(0).toUpperCase() + n.slice(1),
                t && "unknown" !== t.toLowerCase() && (window.ZAB.countryName = t.replace(/\s/g, "").toLowerCase(),
                window.ZAB.state = i.replace(/\s/g, "").toLowerCase(),
                window.ZAB.city = n.replace(/\s/g, "").toLowerCase())
            }
        }
        ,
        e.prototype.isLocationReceived = function() {
            return !(!window.ZAB.countryName && (new Date).getTime() <= this.geolocationStartTime + 500)
        }
        ,
        e.prototype.getLocalStorageCustomAttributeInfo = function() {
            try {
                var e, t = this.getProjectKey();
                return this.exists(t) && (e = localStorage.getItem(a.USER_INFORMATION_STORAGE + t)),
                this.exists(e)
            } catch (e) {}
        }
        ,
        e.prototype.isCustomAttributeReceived = function() {
            try {
                var e = this.getProjectKey()
                  , t = localStorage.getItem(a.USER_INFORMATION_STORAGE + e);
                if (!this.exists(t) && (new Date).getTime() <= s.customAttributesRequestStartTime + 500)
                    return !1
            } catch (e) {}
            return !0
        }
        ,
        e.prototype.isWeatherReceived = function() {
            try {
                if (!this.exists(s.temperature) && (new Date).getTime() <= s.weatherDetailsRequestStartTime + 500)
                    return !1
            } catch (e) {}
            return !0
        }
        ,
        e.prototype.gotoVariation = function(e, t) {
            if (this.exists(e) && !e.is_original && this.exists(e.url)) {
                var i = window.ZAB.current_url
                  , n = {
                    match_type: 2,
                    value: e.url
                };
                if (!window.ZAB.zab.isURLSMatch(i, n))
                    if (t.redirect_params) {
                        var r = e.url.match(/^(?:([^:\/?\#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)(?:\?([^\#]*))?(?:\#(.*))?/)[4] || ""
                          , o = window.location.search;
                        this.exists(r) ? (o = o.substring(1),
                        this.exists(o) ? window.location.href = e.url + "&" + o : window.location.href = e.url) : window.location.href = e.url + o
                    } else
                        window.location.href = e.url
            }
        }
        ,
        e.prototype.isUnsafeEvalAllowed = function() {
            try {
                return new Function("return true")()
            } catch (e) {
                return !1
            }
        }
        ,
        e.prototype.setGlobalJsCss = function(e) {
            if (window.pagesense && !window._zps.api("getDisableCustomScriptExecution") && (this.exists(e.global_css) && this.addCssChangesStyle(e.global_css),
            this.exists(e.global_js))) {
                var t = e.global_js;
                try {
                    if (this.isUnsafeEvalAllowed())
                        new Function(t).call(window.optimize);
                    else
                        this.applyJsChangesWithInlineScript(t)
                } catch (e) {}
            }
        }
        ,
        e.prototype.applyVariationChanges = function(e) {
            var t = this;
            window._zps.api("getDisableCustomScriptExecution") || window.optimize.$(document).ready(function() {
                if (t.exists(e.variation_css_changes) && t.addCssChangesStyle(e.variation_css_changes),
                t.exists(e) && t.exists(e.variation_changes)) {
                    var i, n = e.variation_changes, r = t.isUnsafeEvalAllowed();
                    for (i = 0; i < n.length; i++)
                        try {
                            if (r)
                                new Function(n[i]).call(window.optimize);
                            else
                                t.applyJsChangesWithInlineScript(n[i])
                        } catch (e) {}
                }
            })
        }
        ,
        e.prototype.addCssChangesStyle = function(e) {
            var t = document.createElement("style");
            t.type = "text/css",
            t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e));
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(t, i)
        }
        ,
        e.prototype.exists = function(e) {
            return null != e && "" !== e && (e.constructor != Object || 0 != Object.keys(e).length)
        }
        ,
        e.prototype.cleanUpPageScreen = function() {
            if (A.skipDefaultAntiFOOC)
                this.exists(A.revertCustomAntiFOOC) && A.revertCustomAntiFOOC();
            else {
                var e = document.getElementById("zps-page-screen");
                e && e.remove()
            }
        }
        ,
        e.prototype.setPageVisibility = function() {
            if (A.skipDefaultAntiFOOC)
                window.ZAB.zab.exists(A.applyCustomAntiFOOC) && A.applyCustomAntiFOOC();
            else {
                this.cleanUpPageScreen();
                var e = document.createElement("style");
                e.innerText = "body{background:transparent !important; opacity:0  !important; visibility: hidden  !important;} html{ opacity:0  !important; visibility: hidden  !important; }",
                e.setAttribute("id", "zps-page-screen"),
                document.head.prepend(e)
            }
            window.optimize.hidePage = !0
        }
        ,
        e.prototype.showPage = function() {
            this.cleanUpPageScreen(),
            window.optimize.hidePage = !1
        }
        ,
        e.prototype.handleUserActivity = function(e, t) {
            var i, n = this.getProjectKey();
            this.exists(n) && (i = localStorage.getItem(a.USER_INFORMATION_STORAGE + n)),
            (i = i ? JSON.parse(i) : {})[a.USER_ACTIVITY] = i[a.USER_ACTIVITY] ? i[a.USER_ACTIVITY] : [];
            var r = {};
            for (var o in t)
                if (t.hasOwnProperty(o))
                    switch (o) {
                    case "product_id":
                    case "product_name":
                    case "product_type":
                    case "product_handle":
                    case "product_url":
                    case "quick_look_url":
                    case "category_id":
                    case "category_name":
                    case "status":
                    case "description":
                    case "variant":
                    case "out_of_stock":
                    case "label_price":
                    case "selling_price":
                    case "starting_price":
                    case "ending_price":
                    case "tags":
                        r[o] = t[o];
                        break;
                    default:
                        var s = {};
                        s.ln = o,
                        s.v = t[o],
                        r[a.EVENT_CUSTOM_ATTRIBUTES] = r[a.EVENT_CUSTOM_ATTRIBUTES] ? r[a.EVENT_CUSTOM_ATTRIBUTES] : [],
                        Array.isArray(r[a.EVENT_CUSTOM_ATTRIBUTES]) && r[a.EVENT_CUSTOM_ATTRIBUTES].push(s)
                    }
            r.event_name = e;
            var c = i[a.USER_ACTIVITY];
            Array.isArray(c) && c.push(r);
            n = this.getProjectKey();
            this.exists(n) && localStorage.setItem(a.USER_INFORMATION_STORAGE + n, JSON.stringify(i))
        }
        ,
        e.prototype.handleUserAttributes = function(e) {
            try {
                var t, i = this.getProjectKey();
                this.exists(i) && (t = localStorage.getItem(a.USER_INFORMATION_STORAGE + i)),
                (t = t ? JSON.parse(t) : {})[a.USER_ATTRIBUTE] = t[a.USER_ATTRIBUTE] ? t[a.USER_ATTRIBUTE] : {};
                var n = e.ln
                  , r = e.v;
                switch (n) {
                case "ps_firstname":
                case "ps_lastname":
                case "ps_user_id":
                case "ps_email":
                case "ps_phone":
                case "ps_gender":
                case "ps_company":
                case "ps_push_opt_in":
                case "ps_email_opt_in":
                case "ps_sms_opt_in":
                case "ps_dob":
                    t[a.USER_ATTRIBUTE][n] = r;
                    break;
                default:
                    t[a.USER_ATTRIBUTE][a.USER_CUSTOM_ATTRIBUTES] = t[a.USER_ATTRIBUTE][a.USER_CUSTOM_ATTRIBUTES] ? t[a.USER_ATTRIBUTE][a.USER_CUSTOM_ATTRIBUTES] : [];
                    var o = t[a.USER_ATTRIBUTE][a.USER_CUSTOM_ATTRIBUTES];
                    Array.isArray(o) && o.push(e)
                }
                i = this.getProjectKey();
                this.exists(i) && localStorage.setItem(a.USER_INFORMATION_STORAGE + i, JSON.stringify(t))
            } catch (e) {}
        }
        ,
        e.prototype.getUserActivityValue = function(e, t, i) {
            try {
                var n, r = this.getProjectKey();
                if (this.exists(r) && (n = localStorage.getItem(a.USER_INFORMATION_STORAGE + r)),
                !n)
                    return t === c.OPERATOR.NOT_ACHIEVED || null;
                var o = (n = JSON.parse(n))[a.USER_ACTIVITY] ? n[a.USER_ACTIVITY] : null;
                if (!o)
                    return t === c.OPERATOR.NOT_ACHIEVED || null;
                var s, u = [], p = e.split(".");
                if (Array.isArray(o))
                    for (var l = 0; l < o.length; l++) {
                        s = null;
                        var d = o[l];
                        if (1 === p.length) {
                            if (d.event_name.toString().toLowerCase() === p[0].toString().toLowerCase()) {
                                s = p[0],
                                u.push(s.toString().toLowerCase());
                                continue
                            }
                        } else
                            2 === p.length && d.event_name.toString().toLowerCase() === p[0].toString().toLowerCase() && (s = this.getActivityValueByName(p[1], d),
                            this.exists(s) && u.push(s.toString().toLowerCase()))
                    }
                return this.validateActivities(t, u, i)
            } catch (e) {}
        }
        ,
        e.prototype.validateActivities = function(e, t, i) {
            var n;
            if (e === c.OPERATOR.EQUALS)
                return n = i[0],
                t.indexOf(n.toString().toLowerCase()) >= 0;
            if (e === c.OPERATOR.NOT_EQUALS)
                return n = i[0],
                t.indexOf(n.toString().toLowerCase()) < 0;
            if (e === c.OPERATOR.CONTAINS) {
                var r = !1;
                n = i[0];
                for (var o = 0; o < t.length; o++)
                    if (t[o].indexOf(n.toString().toLowerCase()) >= 0)
                        return r = !0;
                return r
            }
            if (e === c.OPERATOR.DOESNOT_CONTAINS) {
                r = !0;
                n = i[0];
                for (o = 0; o < t.length; o++)
                    if (t[o].indexOf(n.toString().toLowerCase()) >= 0)
                        return r = !1;
                return r
            }
            if (e === c.OPERATOR.ACHIEVED)
                return t.length > 0;
            if (e === c.OPERATOR.NOT_ACHIEVED)
                return !(t.length > 0);
            if (e === c.OPERATOR.LESSTHAN) {
                r = !1;
                n = i[0];
                for (o = 0; o < t.length; o++)
                    if (Number(t[o]) < Number(n))
                        return r = !0;
                return r
            }
            if (e === c.OPERATOR.MORETHAN) {
                r = !1;
                n = i[0];
                for (o = 0; o < t.length; o++)
                    if (Number(t[o]) > Number(n))
                        return r = !0;
                return r
            }
            if (e === c.OPERATOR.FIRST_ACTIVITY_EQUALS) {
                r = !1;
                if (t.length > 0)
                    n = i[0],
                    (a = t[0]) && n.toString().toLowerCase() === a.toString().toLowerCase() && (r = !0);
                return r
            }
            if (e === c.OPERATOR.FIRST_ACTIVITY_NOT_EQUALS) {
                r = !1;
                if (t.length > 0)
                    return n = i[0],
                    (a = t[0]) && n.toString().toLowerCase() !== a.toString().toLowerCase() && (r = !0),
                    r
            } else {
                if (e === c.OPERATOR.FIRST_ACTIVITY_CONTAINS) {
                    r = !1;
                    if (t.length > 0)
                        n = i[0],
                        (a = t[0]) && a.toString().toLowerCase().indexOf(n.toString().toLowerCase()) >= 0 && (r = !0);
                    return r
                }
                if (e === c.OPERATOR.FIRST_ACTIVITY_NOT_CONTAINS) {
                    r = !1;
                    if (t.length > 0)
                        n = i[0],
                        (a = t[0]) && a.toString().toLowerCase().indexOf(n.toString().toLowerCase()) < 0 && (r = !0);
                    return r
                }
                if (e === c.OPERATOR.FIRST_ACTIVITY_GREATER_THAN) {
                    r = !1;
                    if (t.length > 0)
                        n = i[0],
                        (a = t[0]) && Number(a) > Number(n) && (r = !0);
                    return r
                }
                if (e === c.OPERATOR.FIRST_ACTIVITY_LESSER_THAN) {
                    var a;
                    r = !1;
                    if (t.length > 0)
                        n = i[0],
                        (a = t[0]) && Number(a) < Number(n) && (r = !0);
                    return r
                }
                if (e === c.OPERATOR.LAST_ACTIVITY_EQUALS) {
                    r = !1;
                    if ((s = t.length) > 0)
                        n = i[0],
                        (u = t[s - 1]) && n.toString().toLowerCase() === u.toString().toLowerCase() && (r = !0);
                    return r
                }
                if (e === c.OPERATOR.LAST_ACTIVITY_NOT_EQUALS) {
                    r = !1;
                    if (n = i[0],
                    (s = t.length) > 0)
                        (u = t[s - 1]) && n.toString().toLowerCase() !== u.toString().toLowerCase() && (r = !0);
                    return r
                }
                if (e === c.OPERATOR.LAST_ACTIVITY_CONTAINS) {
                    r = !1;
                    if (n = i[0],
                    (s = t.length) > 0)
                        (u = t[s - 1]) && u.toString().toLowerCase().indexOf(n.toString().toLowerCase()) >= 0 && (r = !0);
                    return r
                }
                if (e === c.OPERATOR.LAST_ACTIVITY_NOT_CONTAINS) {
                    r = !1;
                    if (n = i[0],
                    (s = t.length) > 0)
                        (u = t[s - 1]) && u.toString().toLowerCase().indexOf(n.toString().toLowerCase()) < 0 && (r = !0);
                    return r
                }
                if (e === c.OPERATOR.LAST_ACTIVITY_GREATER_THAN) {
                    r = !1;
                    if (n = i[0],
                    (s = t.length) > 0)
                        (u = t[s - 1]) && Number(u) > Number(n) && (r = !0);
                    return r
                }
                if (e === c.OPERATOR.LAST_ACTIVITY_LESSER_THAN) {
                    var s, u;
                    r = !1;
                    if (n = i[0],
                    (s = t.length) > 0)
                        (u = t[s - 1]) && Number(u) < Number(n) && (r = !0);
                    return r
                }
            }
        }
        ,
        e.prototype.getActivityValueByName = function(e, t) {
            switch (e) {
            case "product_id":
            case "product_name":
            case "product_type":
            case "product_handle":
            case "product_url":
            case "quick_look_url":
            case "category_id":
            case "category_name":
            case "status":
            case "description":
            case "variant":
            case "out_of_stock":
            case "label_price":
            case "selling_price":
            case "starting_price":
            case "ending_price":
            case "tags":
                var i = t[e] ? t[e] : null;
                if (this.exists(i))
                    return i;
                break;
            default:
                var n = t[a.EVENT_CUSTOM_ATTRIBUTES] ? t[a.EVENT_CUSTOM_ATTRIBUTES] : null;
                if (n && Array.isArray(n))
                    for (var r = 0; r < n.length; r++) {
                        if ((t = n[r]).ln === e)
                            return t.v
                    }
            }
        }
        ,
        e.prototype.getUserAttributeValue = function(e) {
            try {
                var t, i = this.getProjectKey();
                if (this.exists(i) && (t = localStorage.getItem(a.USER_INFORMATION_STORAGE + i)),
                !t)
                    return null;
                var n = (t = JSON.parse(t))[a.USER_ATTRIBUTE] ? t[a.USER_ATTRIBUTE] : null;
                if (!n)
                    return null;
                switch (e) {
                case "ps_firstname":
                case "ps_lastname":
                case "ps_user_id":
                case "ps_email":
                case "ps_phone":
                case "ps_gender":
                case "ps_company":
                case "ps_push_opt_in":
                case "ps_email_opt_in":
                case "ps_sms_opt_in":
                case "ps_dob":
                    return r = n[e] ? n[e] : null;
                default:
                    var r = null
                      , o = n[a.USER_CUSTOM_ATTRIBUTES] ? n[a.USER_CUSTOM_ATTRIBUTES] : null;
                    if (o && Array.isArray(o))
                        for (var s = 0; s < o.length; s++) {
                            var c = o[s];
                            if (c.ln === e)
                                return c.v
                        }
                    return r
                }
            } catch (e) {}
        }
        ,
        e.prototype.saveCustomAttributeDataInLocalStorage = function(e) {
            try {
                var t = JSON.parse(e);
                if (!this.exists(t))
                    return;
                var i, n = this.getProjectKey();
                this.exists(n) && (i = localStorage.getItem(a.USER_INFORMATION_STORAGE + n)),
                this.exists(i) || (i = {});
                var r = t.activity;
                this.exists(r) && (i[a.USER_ACTIVITY] = r);
                var o = t.user_info;
                if (this.exists(o) && (i[a.USER_ATTRIBUTE] = o),
                Object.keys(i).length > 0) {
                    n = this.getProjectKey();
                    this.exists(n) && localStorage.setItem(a.USER_INFORMATION_STORAGE + n, JSON.stringify(i))
                }
            } catch (e) {}
        }
        ,
        e.prototype.getProjectKey = function() {
            try {
                var e = window.ZAB.zab.getDataObj();
                return this.exists(e) && this.exists(e.project_key) ? e.project_key : null
            } catch (e) {}
        }
        ,
        e.prototype.deleteExistingUserInfo = function() {
            try {
                var e, t = window.ZAB.zab.getDataObj();
                if (!this.exists(t) || !this.exists(t.project_key))
                    return;
                e = t.project_key,
                localStorage.removeItem(a.USER_INFORMATION_STORAGE + e)
            } catch (e) {}
        }
        ,
        e.prototype.saveWeatherInfo = function(e) {
            var t = JSON.parse(e);
            this.exists(t) && (s.temperature = t)
        }
        ,
        e.prototype.getUnique = function(e) {
            for (var t = [], i = 0; i < e.length; i++)
                -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t
        }
        ,
        e.prototype.checkEndsWith = function(e, t) {
            return -1 != e.lastIndexOf(t) && e.lastIndexOf(t) === e.length - t.length
        }
        ,
        e.prototype.checkStartsWith = function(e, t) {
            return 0 === e.indexOf(t)
        }
        ,
        e.prototype.getQueryParameters = function(e) {
            var t, i, n, r = e.split("&"), o = {};
            function a(e) {
                return decodeURIComponent(e || "").replace(/\+/g, " ")
            }
            for (var s = 0; s < r.length; s++)
                i = a((t = r[s].split("="))[0]),
                n = a(t[1]),
                o[i] = n;
            return o
        }
        ,
        e.prototype.addNonce = function(e) {
            try {
                var t = document.querySelector("script[nonce]").nonce;
                t && e.setAttribute("nonce", t)
            } catch (e) {}
            return e
        }
        ,
        e.prototype.parseURL = function(e) {
            var t, i, n;
            return i = (t = e.match(/^(?:([^:\/?\#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)(?:\?([^\#]*))?(?:\#(.*))?/))[1] || "",
            n = t[2] || "",
            {
                path: t[3] || "",
                protocol: i,
                domain: n,
                query: t[4] || "",
                fragment: t[5] || ""
            }
        }
        ,
        e.prototype.isLoadedInsideIframe = function() {
            return window.self !== window.top
        }
        ,
        e.prototype.isZohoCookieBarAvailable = function() {
            return window._ZohoCookieBar
        }
        ,
        e.prototype.isTrackingDisabled = function() {
            return Boolean(window.lpageportal || window.skip_privacy_check)
        }
        ,
        e.prototype.isZohoFormsDomain = function() {
            return "forms.zohopublic" === document.domain.split(".").splice(0, 2).join(".")
        }
        ,
        e.prototype.applyProjectJSChanges = function() {
            if (!window._zps.api("getDisableCustomScriptExecution")) {
                var e = window.ZAB.zab.getDataObj().project_js;
                try {
                    if (this.exists(e))
                        if (this.isUnsafeEvalAllowed())
                            new Function(e).call(window.optimize);
                        else
                            this.applyJsChangesWithInlineScript(e)
                } catch (e) {
                    w.error(e)
                }
            }
        }
        ,
        e.prototype.applyJsChangesWithInlineScript = function(e) {
            if (!window._zps.api("getDisableCustomScriptExecution")) {
                window.$pagesense.$(window).on("error.ps", function(e) {
                    window._zps.api("logError", [e.error]),
                    window.$pagesense.$(window).off("error.ps")
                });
                var t = document.createElement("script");
                t.innerHTML = this.jsChangeWithErrorHandler(e),
                t.classList.add("ps-js-changes-script"),
                document.head.appendChild(t)
            }
        }
        ,
        e.prototype.jsChangeWithErrorHandler = function(e) {
            if (!window._zps.api("getDisableCustomScriptExecution"))
                return "\n        try {\n            " + e + "\n        } catch (err) {\n            window._zps.api(\"logError\", [err])\n        } finally {\n            window.$pagesense.$(window).off('error.ps')\n        }\n        "
        }
        ,
        e.prototype.triggerExperimentsLoadedEvent = function() {
            var e = new CustomEvent(a.ZPS_PERSONALIZATION_EXPERIMENTS_LOADED);
            window.document.dispatchEvent(e)
        }
        ,
        e
    }()), y = new (function() {
        function e() {}
        return e.prototype.setPersonalizationData = function(e) {
            this.personalizationData = e
        }
        ,
        e.prototype.getPersonalizationData = function() {
            return this.personalizationData
        }
        ,
        e
    }()), S = new (function() {
        function e() {}
        return e.prototype.getPersonalizationBucket = function() {
            return window.ZAB.cookieHandler.checkCookieExists(o.PERSONALIZATION_BUCKET) ? window.ZAB.cookieHandler.getCookieValue(o.PERSONALIZATION_BUCKET) : null
        }
        ,
        e.prototype.filterAudiences = function(e) {
            for (var t = [], i = 0; i < e.length; i++)
                window.ZAB.zab.isAudienceMatching([e[i]]) && t.push(e[i]);
            return t
        }
        ,
        e.prototype.selectRandomVariation = function(e) {
            for (var t = 0, i = 100 * Math.random(), n = 100 / e.length, r = 0; r < e.length; r++) {
                if (i > t && i <= t + n)
                    return e[r];
                t += n
            }
        }
        ,
        e.prototype.bucketSelectedExperiences = function(e) {
            for (var t = [], i = [], n = 0; n < e.length; n++)
                -1 !== Object.keys(r.split_experiences).indexOf(e[n]) ? t.push(e[n]) : i.push(e[n]);
            r.abTestExperiencesSelected = i,
            r.splitExperiencesSelected = t
        }
        ,
        e.prototype.getVisitorInfoForServer = function(e) {
            var t = {};
            return window.ZAB.useragentrawdata || window.ZAB.zab.generateUserAgentData(),
            t.urd = window.ZAB.useragentrawdata,
            t.vrd = this.getVisitorInfo(e),
            t
        }
        ,
        e.prototype.getVisitorInfo = function(e) {
            var t = {};
            return t.a = window.ZAB.portal,
            t.n = !window.ZAB.returning,
            t[o.EXPERIMENT_VARIATION_MAPPING] = this.getEVMObject(e),
            t[o.EXPERIMENT_AUDIENCE_MAPPING] = this.getEAMObject(),
            [t]
        }
        ,
        e.prototype.getEAMObject = function() {
            var e = [];
            return Object.keys(r.personalizationExperiments).forEach(function(t) {
                for (var i = {}, n = r.personalizationExperiments[t].audience, a = [], s = 0; s < n.length; s++)
                    -1 !== r.selectedAudiences.indexOf(n[s]) && a.push(n[s]);
                i[o.EXPERIMENT_KEY] = t,
                i[o.SELECTED_AUDIENCES] = a,
                e.push(i)
            }),
            e
        }
        ,
        e.prototype.getExperimentExperienceObject = function(e) {
            for (var t = {}, i = 0; i < e.length; i++) {
                var n = this.getExperimentKeyFromVariationKey(e[i]);
                t[n] = t[n] ? t[n] : [],
                t[n].push(e[i])
            }
            return t
        }
        ,
        e.prototype.getEVMObject = function(e) {
            var t = this.getExperimentExperienceObject(e)
              , i = [];
            return Object.keys(t).forEach(function(e) {
                var n = {};
                n[o.EXPERIMENT_KEY] = e,
                n[o.VARIATION_KEY] = t[e],
                i.push(n)
            }),
            i
        }
        ,
        e.prototype.getExperimentKeyFromVariationKey = function(e) {
            var t;
            for (var i in r.personalizationExperiments)
                if (r.personalizationExperiments.hasOwnProperty(i)) {
                    var n = r.personalizationExperiments[i];
                    if (n.original_experience[e] || n.abtest_experiences[e] || n.split_experiences[e]) {
                        t = i;
                        break
                    }
                }
            return t
        }
        ,
        e.prototype.sendVisitorInformation = function(e) {
            var t = this.getVisitorInfoForServer(e);
            window.ZAB.zab.sendDataToServer(15, t)
        }
        ,
        e.prototype.getExperimentVariationObjectForGoals = function(e) {
            for (var t = e.gln, i = this.getExperimentsMatchedGoals(t), n = this.getExperimentExperienceObject(r.experiencesApplied), a = [], s = 0; s < i.length; s++)
                if (-1 !== Object.keys(n).indexOf(i[s])) {
                    var c = {};
                    c[o.EXPERIMENT_KEY] = i[s],
                    c[o.VARIATION_KEY] = n[i[s]],
                    a.push(c)
                }
            return a
        }
        ,
        e.prototype.getExperimentAudienceObjectForGoals = function(e) {
            for (var t = this.getExperimentsMatchedGoals(e.gln), i = this.getEAMObject(), n = [], r = 0; r < t.length; r++)
                for (var a = 0; a < i.length; a++) {
                    var s = i[a];
                    if (s[o.EXPERIMENT_KEY] === t[r]) {
                        n.push(s);
                        break
                    }
                }
            return n
        }
        ,
        e.prototype.getExperimentsMatchedGoals = function(e) {
            var t = [];
            for (var i in r.personalizationExperiments) {
                if (r.personalizationExperiments.hasOwnProperty(i))
                    -1 !== r.personalizationExperiments[i].goal.indexOf(e) && t.push(i)
            }
            return t
        }
        ,
        e.prototype.addPersonalizationInfoToHeatMapData = function() {
            var e = this.getExperimentExperienceObject(r.experiencesApplied)
              , t = [];
            if (E.exists(e) && Object.keys(e).forEach(function(i) {
                for (var n = e[i], r = 0; r < n.length; r++) {
                    var o = n[r]
                      , a = {}
                      , s = i;
                    a.a = window.ZAB.portal,
                    a.n = !window.ZAB.returning,
                    a.b = s,
                    a.c = o,
                    a.ipo = !0,
                    t.push(a)
                }
            }),
            y.getPersonalizationData()) {
                var i = y.getPersonalizationData()
                  , n = {
                    a: window.ZAB.portal,
                    b: i.experimentKey,
                    c: i.experienceKey,
                    n: i.isReturningVisitor,
                    ipo: !0
                };
                t.push(n)
            }
            return t
        }
        ,
        e
    }()), _ = function() {
        function e() {}
        return e.prototype.getExperiencesFromSelectedAudiences = function() {
            var e = r.selectedAudiences
              , t = r.personalizationExperiments
              , i = [];
            return Object.keys(t).forEach(function(n) {
                var r = t[n];
                if (r.hasOwnProperty(o.AUDIENCE_EXPERIENCE_MAPPING)) {
                    var a = r[o.AUDIENCE_EXPERIENCE_MAPPING];
                    Object.keys(a).forEach(function(t) {
                        -1 !== e.indexOf(t) && (i = i.concat(a[t]))
                    })
                }
            }),
            E.getUnique(i)
        }
        ,
        e
    }(), T = (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (e[i] = t[i])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function i() {
            this.constructor = e
        }
        n(e, t),
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype,
        new i)
    }
    ), b = new (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return T(t, e),
        t.prototype.applyRandomSplitVariation = function() {
            var e, t = S.getPersonalizationBucket();
            if (t && -1 !== r.splitExperiencesSelected.indexOf(t))
                e = r.split_experiences[t];
            else {
                var i = S.selectRandomVariation(r.splitExperiencesSelected);
                window.ZAB.cookieHandler.setCookie(o.PERSONALIZATION_BUCKET, i, 1),
                e = r.split_experiences[i]
            }
            this.iframeCheckForCookie(e)
        }
        ,
        t.prototype.iframeCheckForCookie = function(e) {
            var t = this;
            if (this.isIframeRequired(e) && !window.ZAB.isIframeLoaded())
                setTimeout(function() {
                    t.iframeCheckForCookie(e)
                }, 20);
            else {
                this.setVisitorInformationAsCookie(e);
                var i = S.getExperimentKeyFromVariationKey(e.key)
                  , n = r.personalizationExperiments[i];
                E.gotoVariation(e, n)
            }
        }
        ,
        t.prototype.isIframeRequired = function(e) {
            var t = window.ZAB.zab.parseURL(window.ZAB.current_url)
              , i = window.ZAB.zab.parseURL(e.url);
            return !window.ZAB.zab.isHostMatch(t.domain, i.domain)
        }
        ,
        t.prototype.setVisitorInformationAsCookie = function(e) {
            var t;
            if (r.experiencesApplied = r.experiencesApplied.concat([e.key]),
            t = S.getVisitorInfo([e.key]),
            this.isIframeRequired(e)) {
                var i = {};
                i.key = "zps" + window.ZAB.zab.trimURL(e.url),
                i.value = JSON.stringify(t),
                window.ZAB.zab.iframeCommunication(1, i)
            } else
                window.ZAB.cookieHandler.setCookie(o.PERSONALIZATION_COOKIE, JSON.stringify(t), 1)
        }
        ,
        t
    }(_)), I = function() {
        var e = function(t, i) {
            return (e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var i in t)
                    t.hasOwnProperty(i) && (e[i] = t[i])
            }
            )(t, i)
        };
        return function(t, i) {
            function n() {
                this.constructor = t
            }
            e(t, i),
            t.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype,
            new n)
        }
    }(), x = new (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return I(t, e),
        t.prototype.applyABVariations = function() {
            for (var e = r.abTestExperiencesSelected, t = 0; t < e.length; t++) {
                var i = r.abtest_experiences[e[t]];
                E.applyVariationChanges(i)
            }
        }
        ,
        t.prototype.applyABTestGlobalJsCSS = function() {
            for (var e in r.personalizationExperiments)
                if (r.personalizationExperiments.hasOwnProperty(e)) {
                    var t = r.personalizationExperiments[e];
                    E.setGlobalJsCss(t)
                }
        }
        ,
        t
    }(_)), O = (i(2),
    function() {
        var e = function(t, i) {
            return (e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var i in t)
                    t.hasOwnProperty(i) && (e[i] = t[i])
            }
            )(t, i)
        };
        return function(t, i) {
            function n() {
                this.constructor = t
            }
            e(t, i),
            t.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype,
            new n)
        }
    }()), k = new (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return O(t, e),
        t.prototype.startPersonalizationExperiment = function(e) {
            r.initializeDefaultVaribles(),
            this.isSPA = e,
            this.dataObject = window.ZAB.zab.getDataObj();
            var t = this.findPersonalizationExperimentsFromDataObject(this.dataObject);
            window.ZAB.zab.exists(t) && (r.personalizationExperiments = t),
            r.personalizationExperiments && Object.keys(r.personalizationExperiments).length && (this.isSPA || E.setPageVisibility(),
            window.ZAB.loadHeatmapScript(),
            this.isDataRequiredFromServer() ? this.getDetailsFromServer() : this.startApplyingPersonalization())
        }
        ,
        t.prototype.findPersonalizationExperimentsFromDataObject = function(e) {
            if (e && e.experiment) {
                var t = {}
                  , i = [];
                for (var n in e.experiment)
                    e.experiment.hasOwnProperty(n) && e.experiment[n] && 10 === e.experiment[n].type && 2 === e.experiment[n].status && window.ZAB.zab.isExperimentURLMatches(e.experiment[n]) && (i = this.concatenateAudiences(i, e.experiment[n]),
                    this.bucketExperiences(e.experiment[n]),
                    t[n] = e.experiment[n],
                    e.experiment[n].country_required && (this.isLocationRequired = !0),
                    e.experiment[n].attributes_required && (this.isCustomAttributeRequired = !0),
                    e.experiment[n].weather_required && (this.isWeatherRequired = !0));
                return r.audiences = E.getUnique(i),
                t
            }
        }
        ,
        t.prototype.concatenateAudiences = function(e, t) {
            return e = e.concat(t.audience)
        }
        ,
        t.prototype.bucketExperiences = function(e) {
            e.split_experiences && (r.split_experiences = Object.assign(r.split_experiences, e.split_experiences)),
            e.abtest_experiences && (r.abtest_experiences = Object.assign(r.abtest_experiences, e.abtest_experiences)),
            e.original_experience && (r.original_experience = Object.assign(r.original_experience, e.original_experience))
        }
        ,
        t.prototype.startApplyingPersonalization = function() {
            r.selectedAudiences = S.filterAudiences(r.audiences);
            var e = this.getExperiencesFromSelectedAudiences();
            S.bucketSelectedExperiences(e),
            r.splitExperiencesSelected.length ? (b.applyRandomSplitVariation(),
            window.$pagesense.$(document).ready(function() {
                E.showPage()
            })) : r.abTestExperiencesSelected.length && (r.experiencesApplied = r.experiencesApplied.concat(r.abTestExperiencesSelected),
            S.sendVisitorInformation(r.abTestExperiencesSelected)),
            this.applyABVariationsAndGlobalVariations(),
            this.sendOriginalExperienceDetails()
        }
        ,
        t.prototype.applyABVariationsAndGlobalVariations = function() {
            r.splitExperiencesSelected.length || window.$pagesense.$(document).ready(function() {
                try {
                    for (var e in r.personalizationExperiments)
                        if (r.personalizationExperiments.hasOwnProperty(e)) {
                            var t = r.personalizationExperiments[e];
                            E.setGlobalJsCss(t)
                        }
                    r.abTestExperiencesSelected.length && x.applyABVariations(),
                    E.triggerExperimentsLoadedEvent()
                } catch (e) {}
                setTimeout(function() {
                    E.showPage()
                }, 0)
            })
        }
        ,
        t.prototype.sendOriginalExperienceDetails = function() {
            r.splitExperiencesSelected.length || r.abTestExperiencesSelected.length || (r.experiencesApplied = r.experiencesApplied.concat(Object.keys(r.original_experience)),
            S.sendVisitorInformation(Object.keys(r.original_experience)),
            E.triggerExperimentsLoadedEvent())
        }
        ,
        t.prototype.getDetailsFromServer = function() {
            var e = !1;
            this.isLocationRequired && !window.ZAB.countryName && (E.getLocationDetails(),
            e = !0),
            this.isCustomAttributeRequired && !E.getLocalStorageCustomAttributeInfo() && (E.getCustomAttributeDetails(),
            e = !0),
            this.isWeatherRequired && !E.exists(s.temperature) && (E.getWeatherDetails(),
            e = !0),
            this.startTimer(e)
        }
        ,
        t.prototype.startTimer = function(e) {
            var t = this;
            e ? (window.optimize.hidePage = !0,
            this.timeOut = window.setTimeout(function() {
                (e = !(!t.isLocationRequired || E.isLocationReceived())) || (e = !(!t.isCustomAttributeRequired || E.isCustomAttributeReceived())),
                e || (e = !(!t.isWeatherRequired || E.isWeatherReceived())),
                t.startTimer(e)
            }, 20)) : (window.optimize.hidePage = !1,
            window.clearTimeout(this.timeOut),
            this.startApplyingPersonalization())
        }
        ,
        t.prototype.isDataRequiredFromServer = function() {
            return !!(this.isLocationRequired || this.isCustomAttributeRequired || this.isWeatherRequired)
        }
        ,
        t
    }(_)), C = (i(3),
    i(4),
    new (function() {
        function e() {
            this.pushUuid = null,
            this.sentTime = null,
            this.esDocId = null,
            this.webpushScriptLoaded = !1,
            this.pushstylesurl = ""
        }
        return e.prototype.getPushUuid = function() {
            return this.pushUuid
        }
        ,
        e.prototype.setPushUuid = function(e) {
            this.pushUuid = e
        }
        ,
        e.prototype.getSentTime = function() {
            return this.sentTime
        }
        ,
        e.prototype.setSentTime = function(e) {
            this.sentTime = e
        }
        ,
        e.prototype.getESDocId = function() {
            return this.esDocId
        }
        ,
        e.prototype.setESDocId = function(e) {
            this.esDocId = e
        }
        ,
        e.prototype.loadPushNotifyScript = function(e) {
            var t = this;
            if (!this.webpushScriptLoaded) {
                var i = document.createElement("script");
                (i = E.addNonce(i)).async = !0,
                i.src = e.pushnotifyscripturl;
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(i, n),
                i.onload = function(e) {
                    t.webpushScriptLoaded = !0
                }
            }
        }
        ,
        e.prototype.bootPushNotification = function(e) {
            if (window.ZAB.data.webpush) {
                this.pushstylesurl = e.pushstylesurl;
                var t = window.ZAB.data.webpush.opt_in_type;
                if (window.ZAB.data.webpush.is_webpush_enabled)
                    switch (t) {
                    case 1:
                        this.handleNotificationClickConversion(),
                        this.loadPushNotifyScript(e);
                        break;
                    case 2:
                    case 3:
                        this.appendPushConversionFrame(e),
                        this.loadPushNotifyScript(e)
                    }
            }
        }
        ,
        e.prototype.generatePushConversionFrameUrl = function(e, t) {
            var i = e.split("//");
            return e.indexOf("csez.zohocorpin") > -1 ? i[0] + "//" + i[1] : i[0] + "//" + t + "." + i[1]
        }
        ,
        e.prototype.appendPushConversionFrame = function(e) {
            if (!document.querySelector("#zps-push-conversion-frame")) {
                var t = document.createElement("IFRAME");
                t.setAttribute("src", e.pushconversionframeurl),
                t.style.display = "none",
                t.setAttribute("id", "zps-push-conversion-frame"),
                document.body.append(t)
            }
        }
        ,
        e.prototype.removePushConversionFrame = function() {
            window.$pagesense.$("#zps-push-conversion-frame").remove()
        }
        ,
        e.prototype.handleNotificationClickConversion = function() {
            "serviceWorker"in navigator && "caches"in window && this.retrievePushConversionData()
        }
        ,
        e.prototype.retrievePushConversionData = function() {
            var e = this;
            window.caches.open("zps-push").then(function(e) {
                return e.keys().then(function(e) {
                    return e.filter(function(e) {
                        return e.url.indexOf("zps-push-data.json") > -1
                    })
                })
            }).then(function(t) {
                t && Array.isArray(t) && t.length && e.extractPushDataAndCleanup(t[0].url)
            })
        }
        ,
        e.prototype.extractPushDataAndCleanup = function(e) {
            var t = new URL(e)
              , i = t.searchParams.get("push_uuid")
              , n = Number(t.searchParams.get("sent_time"))
              , r = t.searchParams.get("es_doc_id");
            this.clearPushDataFromCache(),
            this.setPushUuid(i),
            this.setSentTime(n),
            this.setESDocId(r)
        }
        ,
        e.prototype.clearPushDataFromCache = function() {
            window.caches.delete("zps-push")
        }
        ,
        e
    }())), R = new (function() {
        function e() {}
        return e.prototype.checkCookiesAndSendToServer = function() {
            var e = window.ZAB.cookieHandler;
            if (e.checkCookieExists(o.PERSONALIZATION_COOKIE)) {
                var t = JSON.parse(e.getCookieValue(o.PERSONALIZATION_COOKIE));
                return e.deleteCookie(o.PERSONALIZATION_COOKIE),
                this.sendPersonalizationDataToServer(t),
                void E.triggerExperimentsLoadedEvent()
            }
            document.getElementById("zabFrame") && this.checkIframeCookie()
        }
        ,
        e.prototype.checkIframeCookie = function() {
            var e = this;
            if (window.ZAB.isIframeLoaded()) {
                var t = {
                    key: "zps" + window.ZAB.zab.trimURL(window.ZAB.current_url),
                    callback: function(t) {
                        e.sendPersonalizationDataToServer(t)
                    }
                };
                window.ZAB.zab.iframeCommunication(2, t)
            } else
                setTimeout(function() {
                    e.checkIframeCookie()
                }, 20)
        }
        ,
        e.prototype.sendPersonalizationDataToServer = function(e) {
            if (window.ZAB.zab.exists(e)) {
                window.ZAB.loadHeatmapScript(),
                this.setExperimentObjectInPersonalizationVariables(e);
                var t = this.generateDataForServer(e);
                window.ZAB.zab.sendDataToServer(15, t)
            }
        }
        ,
        e.prototype.generateDataForServer = function(e) {
            var t = {};
            return t.vrd = e,
            window.ZAB.useragentrawdata || window.ZAB.zab.generateUserAgentData(),
            t.urd = window.ZAB.useragentrawdata,
            t
        }
        ,
        e.prototype.setExperimentObjectInPersonalizationVariables = function(e) {
            var t = e[0];
            if (t[o.EXPERIMENT_VARIATION_MAPPING]) {
                var i = t[o.EXPERIMENT_VARIATION_MAPPING]
                  , n = t[o.EXPERIMENT_AUDIENCE_MAPPING]
                  , a = i[0][o.EXPERIMENT_KEY]
                  , s = window.ZAB.zab.getDataObj();
                if (s && s.experiment && s.experiment[a]) {
                    r.personalizationExperiments[a] = s.experiment[a];
                    var c = r.experiencesApplied.concat(i[0][o.VARIATION_KEY]);
                    window.ZAB.zab.exists(c) && (r.experiencesApplied = E.getUnique(c));
                    var u = r.selectedAudiences.concat(n[0][o.SELECTED_AUDIENCES]);
                    window.ZAB.zab.exists(u) && (r.selectedAudiences = E.getUnique(u))
                }
            }
        }
        ,
        e
    }()), B = function() {
        function e() {}
        return e.prototype.getSamesiteSecureString = function() {
            return e._samesiteSecureString
        }
        ,
        e.setSamesiteSecureString = function(t) {
            e._samesiteSecureString = t
        }
        ,
        e.initialize = function() {
            (new e).shouldAddSameSiteSecure() ? e.setSamesiteSecureString(";samesite=none;secure") : e.setSamesiteSecureString("")
        }
        ,
        e.prototype.shouldAddSameSiteSecure = function() {
            var e = !1;
            try {
                window.location.protocol.indexOf("https") > -1 && this.shouldEnableSameSiteNone(navigator.userAgent) && (e = !0)
            } catch (e) {}
            return e
        }
        ,
        e.prototype.shouldEnableSameSiteNone = function(e) {
            return !this.isSameSiteNoneIncompatible(e)
        }
        ,
        e.prototype.isSameSiteNoneIncompatible = function(e) {
            return this.hasWebKitBug(e) || this.dropssameSiteCookies(e)
        }
        ,
        e.prototype.hasWebKitBug = function(e) {
            return this.checkIosVersion(12, e) || this.checkMacosxVersion(10, 14, e) && (this.checkSafari(e) || this.checkMacEmbeddedBrowser(e))
        }
        ,
        e.prototype.dropssameSiteCookies = function(e) {
            return this.checkUcBrowser(e) ? !this.checkUcBrowserVersionAtLeast(12, 13, 2, e) : this.checkChromiumBased(e, 51, 66)
        }
        ,
        e.prototype.checkIosVersion = function(e, t) {
            var i = /\(iP.+; CPU .*OS (\d+)[_\d]*.*\) AppleWebKit\//.exec(t);
            try {
                return i[1] == e
            } catch (e) {
                return !1
            }
        }
        ,
        e.prototype.checkMacosxVersion = function(e, t, i) {
            var n = /\(Macintosh;.*Mac OS X (\d+)_(\d+)[_\d]*.*\) AppleWebKit\//.exec(i);
            try {
                return n[1] == e && n[2] == t
            } catch (e) {
                return !1
            }
        }
        ,
        e.prototype.checkSafari = function(e) {
            return e.match("Version/.* Safari/") && !this.checkChromiumBased(e, 51, 66)
        }
        ,
        e.prototype.checkMacEmbeddedBrowser = function(e) {
            return e.match("^Mozilla/[.d]+ (Macintosh;.*Mac OS X [_d]+) AppleWebKit/[.d]+ (KHTML, like Gecko)$")
        }
        ,
        e.prototype.checkChromiumBased = function(e, t, i) {
            var n = "Chrom(e|ium)";
            if (e.match(n)) {
                var r = (n = /Chrom[^ \/]+\/(\d+)[\.\d]* /).exec(e);
                try {
                    var o = r[1];
                    return o >= t && o <= i
                } catch (e) {
                    return !1
                }
            }
        }
        ,
        e.prototype.checkUcBrowser = function(e) {
            return e.match("UCBrowser/")
        }
        ,
        e.prototype.checkUcBrowserVersionAtLeast = function(e, t, i, n) {
            var r = /UCBrowser\/(\d+)\.(\d+)\.(\d+)[\.\d]* /.exec(n);
            try {
                var o = r[1]
                  , a = r[2]
                  , s = r[3];
                return o != e ? o > e : a != t ? a > t : s >= i
            } catch (e) {
                return !1
            }
        }
        ,
        e
    }(), N = new B;
    B.initialize();
    var L = new (function() {
        function e() {}
        return e.prototype.setCookie = function(e, t, i) {
            var n = "";
            if (i) {
                var r = new Date;
                r.setTime(i),
                n = ";expires=" + r.toUTCString()
            }
            var o = E.parseURL(document.URL).domain.replace(/^www\./, "");
            document.cookie = e + "=" + encodeURIComponent(t) + n + ";path=/;domain=." + o + N.getSamesiteSecureString()
        }
        ,
        e.prototype.setCookieWithExpiryInDays = function(e, t, i) {
            var n = (new Date).getTime() + 24 * i * 60 * 60 * 1e3;
            this.setCookie(e, t, n)
        }
        ,
        e.prototype.checkCookieExists = function(e) {
            return "" != this.getCookieValue(e)
        }
        ,
        e.prototype.getCookieValue = function(e) {
            for (var t = e + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
                for (var r = i[n]; " " == r.charAt(0); )
                    r = r.substring(1);
                if (0 == r.indexOf(t))
                    return decodeURIComponent(r.substring(t.length, r.length))
            }
            return ""
        }
        ,
        e.prototype.setSubDomainCookie = function(e, t, i) {
            var n = "";
            if (i) {
                var r = new Date(i);
                r.setTime(i),
                n = ";expires=" + r.toUTCString()
            }
            var o = this.getTLDFromUrl() || location.hostname;
            document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + ";domain=." + o + n + ";path=/" + window._zps.api("getSamesiteSecureString"),
            window.ZAB.cookieHandler.getCookieValue(encodeURIComponent(e)) !== t && (document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + n + ";path=/" + window._zps.api("getSamesiteSecureString"))
        }
        ,
        e.prototype.generateUniqueId = function(e) {
            return (new Date).getTime() + e + Math.random()
        }
        ,
        e.prototype.deleteCookie = function(e) {
            var t = this.getTLDFromUrl() || location.hostname;
            document.cookie = encodeURIComponent(e) + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",
            document.cookie = encodeURIComponent(e) + "=;domain=." + t + ";Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",
            document.cookie = encodeURIComponent(e) + "=;domain=www." + t + ";Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        }
        ,
        e.prototype.getTLDFromUrl = function() {
            for (var e = 0, t = document.domain, i = t.split("."), n = "zpssr" + (new Date).getTime(); e < i.length - 1 && -1 === document.cookie.indexOf(n + "=" + n); )
                t = i.slice(-1 - ++e).join("."),
                document.cookie = n + "=" + n + ";domain=" + t + window._zps.api("getSamesiteSecureString");
            return document.cookie = n + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + t + window._zps.api("getSamesiteSecureString"),
            t
        }
        ,
        e
    }());
    window.ZAB = window.ZAB || {},
    window.ZAB.cookieHandlerUtil = L;
    var U = new (function() {
        function e() {
            this.initializeTriggers()
        }
        return e.prototype.initializeTriggers = function() {
            this.numberOfSessions = null
        }
        ,
        e.prototype.resetTriggers = function() {
            this.initializeTriggers()
        }
        ,
        e.prototype.bootStrapTrigger = function() {
            this.numberOfSessions = this.getCurrentSessionNumber(),
            Q.kickStart()
        }
        ,
        e.prototype.getCurrentSessionNumber = function() {
            var e = 1
              , t = X.getTriggersSessionDataFromCookie(c.TRIGGERS_COOKIE_INDEX.NUMBER_OF_SESSIONS, c.NUMBER_OF_SESSIONS, null);
            return t && (e = t),
            e
        }
        ,
        e
    }())
      , D = new (function() {
        function e() {}
        return e.prototype.getValuesOfTriggerType = function(e) {
            var t = []
              , i = window.ZAB.data.trigger;
            for (var n in i)
                if (i.hasOwnProperty(n)) {
                    var r = i[n].trigger_condition.conditions;
                    t = t.concat(this.loopOuterTriggerConditions(r, e))
                }
            return t
        }
        ,
        e.prototype.loopOuterTriggerConditions = function(e, t) {
            for (var i = [], n = 0; n < e.length; n++) {
                var r = e[n].conditions;
                i = i.concat(this.loopInnerTriggerConditions(r, t))
            }
            return i
        }
        ,
        e.prototype.loopInnerTriggerConditions = function(e, t) {
            for (var i = [], n = 0; n < e.length; n++) {
                var r = e[n];
                if (r.type === t)
                    switch (r.operator) {
                    case c.OPERATOR.EQUALS:
                    case c.OPERATOR.NOT_EQUALS:
                    case c.OPERATOR.CONTAINS:
                    case c.OPERATOR.DOESNOT_CONTAINS:
                        i = i.concat(r.values);
                        break;
                    case c.OPERATOR.LESSTHAN:
                        i.push(r.boundaryEndValue);
                        break;
                    case c.OPERATOR.MORETHAN:
                        i.push(r.boundaryStartValue);
                        break;
                    case c.OPERATOR.BETWEEN:
                        i.push(r.boundaryStartValue),
                        i.push(r.boundaryEndValue)
                    }
            }
            return i
        }
        ,
        e.prototype.addExperimentKeyToAppliedExperimentsCookie = function(e) {
            var t = {};
            t[c.EXPERIMENT_KEY] = e,
            X.setTriggersSessionDataInCookie(c.TRIGGERS_COOKIE_INDEX.NEW_SESSION_STARTS, c.NEW_SESSION_STARTS, t)
        }
        ,
        e
    }())
      , Z = new (function() {
        function e() {
            this.initializeTriggers()
        }
        return e.prototype.initializeTriggers = function() {
            this.startTime = (new Date).getTime(),
            this.clearTimers(),
            this.timeOutsIntervals = {}
        }
        ,
        e.prototype.resetTriggers = function() {
            this.initializeTriggers()
        }
        ,
        e.prototype.clearTimers = function() {
            if (this.timeOutsIntervals)
                for (var e in this.timeOutsIntervals)
                    this.timeOutsIntervals.hasOwnProperty(e) && clearTimeout(this.timeOutsIntervals[e])
        }
        ,
        e.prototype.bootStrapTrigger = function() {
            var e = D.getValuesOfTriggerType(c.TIME_SPENT_ON_PAGE)
              , t = E.getUnique(e);
            this.startTimers(t),
            Q.kickStart()
        }
        ,
        e.prototype.startTimers = function(e) {
            for (var t = 0; t < e.length; t++) {
                var i = Number(e[t])
                  , n = setTimeout(function() {
                    Q.kickStart()
                }, 1e3 * i);
                this.timeOutsIntervals[i] = n
            }
        }
        ,
        e.prototype.getTimeSpentOnPage = function() {
            return (new Date).getTime() - this.startTime
        }
        ,
        e
    }())
      , P = new (function() {
        function e() {
            this.scrollHandlerBind = this.scrollHandler.bind(this),
            this.initializeTriggers()
        }
        return e.prototype.initializeTriggers = function() {
            this.configuredInactivityTimes = [],
            this.inactivitiesAchieved = {},
            this.timer = 0,
            this.interval && clearInterval(this.interval)
        }
        ,
        e.prototype.resetTriggers = function() {
            this.initializeTriggers()
        }
        ,
        e.prototype.bootStrapTrigger = function() {
            this.removeEventListeners(),
            this.addEventListeners();
            var e = D.getValuesOfTriggerType(c.AFTER_X_SECONDS_OF_INACTIVITY)
              , t = E.getUnique(e);
            this.configuredInactivityTimes = t,
            this.initializeInactivitiesAchieved(),
            this.startInterval()
        }
        ,
        e.prototype.initializeInactivitiesAchieved = function() {
            for (var e = 0; e < this.configuredInactivityTimes.length; e++)
                this.inactivitiesAchieved[this.configuredInactivityTimes[e]] = !1
        }
        ,
        e.prototype.validateInactivities = function(e) {
            for (var t = !1, i = 0; i < this.configuredInactivityTimes.length; i++) {
                if (e >= 1e3 * this.configuredInactivityTimes[i] && !1 === this.inactivitiesAchieved[this.configuredInactivityTimes[i]])
                    t = !0,
                    this.inactivitiesAchieved[this.configuredInactivityTimes[i]] = !0,
                    -1 === Object.values(this.inactivitiesAchieved).indexOf(!1) && clearInterval(this.interval)
            }
            t && Q.kickStart()
        }
        ,
        e.prototype.startInterval = function() {
            var e = this;
            this.interval = setInterval(function() {
                e.timer += 1,
                e.validateInactivities(100 * e.timer)
            }, 100)
        }
        ,
        e.prototype.resetInterval = function() {
            this.timer = 0
        }
        ,
        e.prototype.removeEventListeners = function() {
            window.$pagesense.$(document).off("mousedown.ps_tgr mousemove.ps_tgr keyup.ps_tgr"),
            window.removeEventListener("scroll", this.scrollHandlerBind, !0)
        }
        ,
        e.prototype.scrollHandler = function() {
            this.resetInterval()
        }
        ,
        e.prototype.addEventListeners = function() {
            var e = this;
            window.$pagesense.$(document).on("mousedown.ps_tgr", function() {
                e.resetInterval()
            }),
            window.$pagesense.$(document).on("mousemove.ps_tgr", function() {
                e.resetInterval()
            }),
            window.$pagesense.$(document).on("keyup.ps_tgr", function() {
                e.resetInterval()
            }),
            window.addEventListener("scroll", this.scrollHandlerBind, !0)
        }
        ,
        e.prototype.isInActivityAchieved = function(e) {
            return !!this.inactivitiesAchieved[e]
        }
        ,
        e
    }())
      , M = new (function() {
        function e() {}
        return e.prototype.bootStrapTrigger = function() {
            Q.kickStart()
        }
        ,
        e.prototype.isNewSessionForThisExperiment = function(e) {
            var t = !1
              , i = {};
            i[c.EXPERIMENT_KEY] = e;
            var n = X.getTriggersSessionDataFromCookie(c.TRIGGERS_COOKIE_INDEX.NEW_SESSION_STARTS, c.NEW_SESSION_STARTS, i);
            return n && (t = n),
            t
        }
        ,
        e
    }())
      , z = new (function() {
        function e() {}
        return e.prototype.addEventListener = function(e, t, i) {
            t += ".zps";
            window.$pagesense.$(e).on(t, function() {
                try {
                    i.apply(this, arguments)
                } catch (e) {
                    w.error(e)
                }
            })
        }
        ,
        e.prototype.removeEventListener = function(e, t) {
            t += ".zps";
            try {
                window.$pagesense.$(e).off(t)
            } catch (e) {
                w.error(e)
            }
        }
        ,
        e
    }())
      , F = new (function() {
        function e() {
            this.initializeTriggers()
        }
        return e.prototype.initializeTriggers = function() {
            this.onPageLoad = !1
        }
        ,
        e.prototype.resetTriggers = function() {
            this.initializeTriggers()
        }
        ,
        e.prototype.bootStrapTrigger = function() {
            var e = this;
            -1 !== ["complete"].indexOf(document.readyState) ? this.onPageLoad = !0 : z.addEventListener(window, "load", function() {
                e.updateOnPageLoad()
            }),
            this.onPageLoad && Q.kickStart()
        }
        ,
        e.prototype.updateOnPageLoad = function() {
            this.onPageLoad = !0,
            Q.kickStart()
        }
        ,
        e
    }())
      , V = new (function() {
        function e() {
            this.scrollHandlerBind = this.scrollHandler.bind(this),
            this.resetTriggers()
        }
        return e.prototype.initializeTriggers = function() {
            this.configuredScrollPercentages = [],
            this.scrollsAchieved = {}
        }
        ,
        e.prototype.resetTriggers = function() {
            this.initializeTriggers()
        }
        ,
        e.prototype.bootStrapTrigger = function() {
            this.removeEventListeners(),
            this.addEventListeners();
            var e = D.getValuesOfTriggerType(c.PERCENTAGE_PAGE_SCROLL)
              , t = E.getUnique(e);
            this.configuredScrollPercentages = t,
            this.initializeScrollsAchieved()
        }
        ,
        e.prototype.initializeScrollsAchieved = function() {
            for (var e = 0; e < this.configuredScrollPercentages.length; e++)
                this.scrollsAchieved[this.configuredScrollPercentages[e]] = !1
        }
        ,
        e.prototype.calculateScrollPercentage = function() {
            for (var e = !1, t = window.$pagesense.$(window).scrollTop() / (window.$pagesense.$(document).height() - window.$pagesense.$(window).height()), i = Math.round(100 * t), n = 0; n < this.configuredScrollPercentages.length; n++)
                i > this.configuredScrollPercentages[n] && (this.scrollsAchieved[this.configuredScrollPercentages[n]] = !0,
                e = !0);
            e && Q.kickStart()
        }
        ,
        e.prototype.scrollHandler = function() {
            this.calculateScrollPercentage()
        }
        ,
        e.prototype.removeEventListeners = function() {
            window.removeEventListener("scroll", this.scrollHandlerBind, !0)
        }
        ,
        e.prototype.addEventListeners = function() {
            window.addEventListener("scroll", this.scrollHandlerBind, !0)
        }
        ,
        e.prototype.isScrollPercentageAchieved = function(e) {
            return !!this.scrollsAchieved[e]
        }
        ,
        e
    }())
      , G = new (function() {
        function e() {
            this.initializeTriggers()
        }
        return e.prototype.initializeTriggers = function() {
            this.exitIntentAchieved = !1
        }
        ,
        e.prototype.resetTriggers = function() {
            this.initializeTriggers()
        }
        ,
        e.prototype.bootStrapTrigger = function() {
            this.initializeListeners()
        }
        ,
        e.prototype.changeExitIntentFlag = function() {
            this.exitIntentAchieved = !0,
            this.removeExitIntentListeners(),
            Q.kickStart()
        }
        ,
        e.prototype.removeExitIntentListeners = function() {
            window.$pagesense.$(document).off("mouseleave.ps_tgr")
        }
        ,
        e.prototype.initializeListeners = function() {
            var e = this;
            this.removeExitIntentListeners(),
            window.$pagesense.$(document).on("mouseleave.ps_tgr", function() {
                e.changeExitIntentFlag()
            })
        }
        ,
        e
    }())
      , j = new (function() {
        function e() {
            this.initializeTriggers()
        }
        return e.prototype.initializeTriggers = function() {
            this.pagesInSession = null
        }
        ,
        e.prototype.resetTriggers = function() {
            this.initializeTriggers()
        }
        ,
        e.prototype.bootStrapTrigger = function() {
            this.pagesInSession = this.getPagesInSession(),
            Q.kickStart()
        }
        ,
        e.prototype.getPagesInSession = function() {
            var e = 1
              , t = X.getTriggersSessionDataFromCookie(c.TRIGGERS_COOKIE_INDEX.PAGES_IN_SESSION, c.PAGES_IN_SESSION, null);
            return t && (e = t),
            e
        }
        ,
        e
    }())
      , q = new (function() {
        function e() {
            this.initializeTriggers()
        }
        return e.prototype.initializeTriggers = function() {
            this.configuredCustomEvents = [],
            this.customEventsAchieved = {}
        }
        ,
        e.prototype.resetTriggers = function() {
            this.initializeTriggers()
        }
        ,
        e.prototype.bootStrapTrigger = function() {
            var e = D.getValuesOfTriggerType(c.CUSTOM_EVENT)
              , t = E.getUnique(e);
            this.configuredCustomEvents = t,
            this.initializeCustomEventsAchieved()
        }
        ,
        e.prototype.initializeCustomEventsAchieved = function() {
            for (var e = 0; e < this.configuredCustomEvents.length; e++)
                this.customEventsAchieved[this.configuredCustomEvents[e]] = !1
        }
        ,
        e.prototype.handleCustomEventTrigger = function(e) {
            -1 !== this.configuredCustomEvents.indexOf(e) && (this.customEventsAchieved[e] = !0,
            Q.kickStart())
        }
        ,
        e.prototype.validateCustomEvent = function(e) {
            for (var t = !1, i = 0; i < e.length; i++)
                if (this.customEventsAchieved[e[i]]) {
                    t = !0;
                    break
                }
            return t
        }
        ,
        e
    }())
      , H = new (function() {
        function e() {
            this.initializeTriggers()
        }
        return e.prototype.initializeTriggers = function() {
            this.configuredElementSelectors = [],
            this.elementClicksAchieved = {}
        }
        ,
        e.prototype.resetTriggers = function() {
            this.initializeTriggers()
        }
        ,
        e.prototype.bootStrapTrigger = function() {
            var e = D.getValuesOfTriggerType(c.ELEMENT_CLICK)
              , t = E.getUnique(e);
            this.configuredElementSelectors = t,
            this.initializeElementClicksAchieved(),
            this.removeClickEventListeners(),
            this.addClickEventListeners()
        }
        ,
        e.prototype.removeClickEventListeners = function() {
            window.$pagesense.$(document).off("mousedown.ps_tgr_ele_click")
        }
        ,
        e.prototype.initializeElementClicksAchieved = function() {
            for (var e = 0; e < this.configuredElementSelectors.length; e++)
                this.elementClicksAchieved[this.configuredElementSelectors[e]] = !1
        }
        ,
        e.prototype.addClickEventListeners = function() {
            for (var e = this, t = function() {
                var t = i.configuredElementSelectors[n];
                window.$pagesense.$(document).on("mousedown.ps_tgr_ele_click", t, function() {
                    e.updateElementClicksAchieved(t)
                })
            }, i = this, n = 0; n < this.configuredElementSelectors.length; n++)
                t()
        }
        ,
        e.prototype.updateElementClicksAchieved = function(e) {
            this.elementClicksAchieved[e] = !0,
            Q.kickStart()
        }
        ,
        e.prototype.validateElementClick = function(e) {
            for (var t = !1, i = 0; i < e.length; i++)
                if (this.elementClicksAchieved[e[i]]) {
                    t = !0;
                    break
                }
            return t
        }
        ,
        e
    }())
      , K = new (function() {
        function e() {
            this.initializeTriggers()
        }
        return e.prototype.initializeTriggers = function() {
            this.sessionStartTime = null,
            this.clearTimers(),
            this.timeOutsIntervals = {}
        }
        ,
        e.prototype.clearTimers = function() {
            if (this.timeOutsIntervals)
                for (var e in this.timeOutsIntervals)
                    this.timeOutsIntervals.hasOwnProperty(e) && clearTimeout(this.timeOutsIntervals[e])
        }
        ,
        e.prototype.resetTriggers = function() {
            this.initializeTriggers()
        }
        ,
        e.prototype.bootStrapTrigger = function() {
            this.sessionStartTime = this.getSessionStartTime();
            var e = D.getValuesOfTriggerType(c.TIME_SPENT_IN_A_SESSION)
              , t = E.getUnique(e);
            this.startTimers(t),
            Q.kickStart()
        }
        ,
        e.prototype.startTimers = function(e) {
            for (var t = 0; t < e.length; t++) {
                var i = Number(e[t])
                  , n = ((new Date).getTime() - this.sessionStartTime) / 1e3;
                if (i > n) {
                    var r = setTimeout(function() {
                        Q.kickStart()
                    }, 1e3 * (i - n));
                    this.timeOutsIntervals[i] = r
                }
            }
        }
        ,
        e.prototype.getSessionStartTime = function() {
            var e = (new Date).getTime()
              , t = X.getTriggersSessionDataFromCookie(c.TRIGGERS_COOKIE_INDEX.SESSION_START_TIME, c.TIME_SPENT_IN_A_SESSION, null);
            return t && (e = t),
            e
        }
        ,
        e.prototype.getTimeSpentInSession = function() {
            return (new Date).getTime() - this.sessionStartTime
        }
        ,
        e
    }())
      , Y = new (function() {
        function e() {}
        return e.prototype.bootStrapTrigger = function() {
            Q.kickStart()
        }
        ,
        e.prototype.handleCustomAttributesTrigger = function() {
            Q.kickStart()
        }
        ,
        e
    }())
      , $ = new (function() {
        function e() {
            this.initializeData()
        }
        return e.prototype.initializeData = function() {
            this.achievedTriggers = {},
            this.resetTriggers()
        }
        ,
        e.prototype.resetTriggers = function() {
            U.resetTriggers(),
            Z.resetTriggers(),
            P.resetTriggers(),
            F.resetTriggers(),
            V.resetTriggers(),
            G.resetTriggers(),
            j.resetTriggers(),
            q.resetTriggers(),
            H.resetTriggers(),
            K.resetTriggers()
        }
        ,
        e.prototype.bootStrapTriggers = function(e) {
            this.initializeData(),
            Q.resetData(),
            this.initializeSessionTriggersCookie(),
            this.initializeListeners();
            var t = this.getUniqueTriggersSelectedForThatPage(e)
              , i = this.getUniqueTriggerAttributeTypesUsed(t, e);
            this.bootStrapTriggerTypes(i)
        }
        ,
        e.prototype.initializeListeners = function() {
            this.removeEventListeners(),
            this.addEventListeners()
        }
        ,
        e.prototype.addEventListeners = function() {
            window.$pagesense.$(window).on("ps-experiment-triggered", function(e) {
                Q.onExperimentApplied(e)
            })
        }
        ,
        e.prototype.removeEventListeners = function() {
            window.$pagesense.$(window).off("ps-experiment-triggered")
        }
        ,
        e.prototype.initializeSessionTriggersCookie = function() {
            window.ZAB.cookieHandler.getCookieValue(ee.getSessionCookieKey()) || X.initializeTriggerDetailsCookie()
        }
        ,
        e.prototype.bootStrapTriggerTypes = function(e) {
            for (var t = 0; t < e.length; t++)
                switch (e[t]) {
                case c.NUMBER_OF_SESSIONS:
                    U.bootStrapTrigger();
                    break;
                case c.TIME_SPENT_ON_PAGE:
                    Z.bootStrapTrigger();
                    break;
                case c.AFTER_X_SECONDS_OF_INACTIVITY:
                    P.bootStrapTrigger();
                    break;
                case c.NEW_SESSION_STARTS:
                    M.bootStrapTrigger();
                    break;
                case c.ON_PAGE_LOADS:
                    F.bootStrapTrigger();
                    break;
                case c.PERCENTAGE_PAGE_SCROLL:
                    V.bootStrapTrigger();
                    break;
                case c.EXIT_INTENT:
                    G.bootStrapTrigger();
                    break;
                case c.PAGES_IN_SESSION:
                    j.bootStrapTrigger();
                    break;
                case c.CUSTOM_EVENT:
                    q.bootStrapTrigger();
                    break;
                case c.ELEMENT_CLICK:
                    H.bootStrapTrigger();
                    break;
                case c.TIME_SPENT_IN_A_SESSION:
                    K.bootStrapTrigger();
                    break;
                case c.CUSTOM_ATTRIBUTE:
                    Y.bootStrapTrigger()
                }
        }
        ,
        e.prototype.getUniqueTriggerAttributeTypesUsed = function(e, t) {
            for (var i = [], n = 0; n < e.length; n++)
                for (var r = e[n], o = t.trigger[r].trigger_condition.conditions, a = 0; a < o.length; a++)
                    for (var s = o[a].conditions, c = 0; c < s.length; c++) {
                        var u = s[c];
                        i.push(u.type)
                    }
            return i = E.getUnique(i)
        }
        ,
        e.prototype.getUniqueTriggersSelectedForThatPage = function(e) {
            var t = [];
            for (var i in e.experiment)
                if (e.experiment.hasOwnProperty(i) && 2 === e.experiment[i].status && window.ZAB.zab.isExperimentURLMatches(e.experiment[i])) {
                    var n = e.experiment[i].trigger;
                    if (!n)
                        continue;
                    t = t.concat(n)
                }
            return t = E.getUnique(t)
        }
        ,
        e
    }())
      , J = new (function() {
        function e() {
            this.experimentKey = null
        }
        return e.prototype.validateTriggerObj = function(e, t) {
            return this.experimentKey = t,
            this.validateOuterConditions(e)
        }
        ,
        e.prototype.validateOuterConditions = function(e) {
            for (var t = e.trigger_condition.conditions, i = e.trigger_condition.condition_type, n = 0; n < t.length; n++) {
                var r = this.validateInnerConditions(t[n]);
                if (i === c.CONDITION_TYPE.AND && !1 === r)
                    return !1;
                if (i === c.CONDITION_TYPE.OR && !0 === r)
                    return !0
            }
            return i === c.CONDITION_TYPE.AND || i !== c.CONDITION_TYPE.OR && void 0
        }
        ,
        e.prototype.validateInnerConditions = function(e) {
            for (var t = e.conditions, i = e.condition_type, n = 0; n < t.length; n++) {
                var r = t[n]
                  , o = this.validateConditionObj(r);
                if (i === c.CONDITION_TYPE.AND && !1 === o)
                    return !1;
                if (i === c.CONDITION_TYPE.OR && !0 === o)
                    return !0
            }
            return i === c.CONDITION_TYPE.AND || i !== c.CONDITION_TYPE.OR && void 0
        }
        ,
        e.prototype.validateConditionObj = function(e) {
            var t = !1;
            switch (e.type) {
            case c.NUMBER_OF_SESSIONS:
                var i = U.numberOfSessions
                  , n = e.boundaryStartValue
                  , r = e.boundaryEndValue;
                t = this.compare(i, e, null, n, r);
                break;
            case c.TIME_SPENT_ON_PAGE:
                var o = Z.getTimeSpentOnPage();
                n = (n = e.boundaryStartValue) ? 1e3 * n : null,
                r = (r = e.boundaryEndValue) ? 1e3 * r : null,
                t = this.compare(o, e, null, n, r);
                break;
            case c.AFTER_X_SECONDS_OF_INACTIVITY:
                n = e.boundaryStartValue;
                t = P.isInActivityAchieved(n);
                break;
            case c.NEW_SESSION_STARTS:
                t = M.isNewSessionForThisExperiment(this.experimentKey);
                break;
            case c.ON_PAGE_LOADS:
                t = F.onPageLoad;
                break;
            case c.PERCENTAGE_PAGE_SCROLL:
                n = e.boundaryStartValue;
                t = V.isScrollPercentageAchieved(n);
                break;
            case c.EXIT_INTENT:
                t = G.exitIntentAchieved;
                break;
            case c.PAGES_IN_SESSION:
                var a = j.pagesInSession
                  , s = e.values;
                n = e.boundaryStartValue,
                r = e.boundaryEndValue;
                t = this.compare(a, e, s, n, r);
                break;
            case c.CUSTOM_EVENT:
                s = e.values;
                t = q.validateCustomEvent(s);
                break;
            case c.ELEMENT_CLICK:
                s = e.values;
                t = H.validateElementClick(s);
                break;
            case c.TIME_SPENT_IN_A_SESSION:
                var u = K.getTimeSpentInSession();
                n = (n = e.boundaryStartValue) ? 1e3 * n : null,
                r = (r = e.boundaryEndValue) ? 1e3 * r : null,
                t = this.compare(u, e, null, n, r);
                break;
            case c.CUSTOM_ATTRIBUTE:
                var p = e.attribute_name
                  , l = e.operator
                  , d = e.values;
                l !== c.OPERATOR.LESSTHAN && l !== c.OPERATOR.FIRST_ACTIVITY_LESSER_THAN && l !== c.OPERATOR.LAST_ACTIVITY_LESSER_THAN || (d = [e.boundaryEndValue]),
                l !== c.OPERATOR.MORETHAN && l !== c.OPERATOR.FIRST_ACTIVITY_GREATER_THAN && l !== c.OPERATOR.LAST_ACTIVITY_GREATER_THAN || (d = [e.boundaryStartValue]),
                t = !!(t = E.getUserActivityValue(p, l, d))
            }
            return t
        }
        ,
        e.prototype.compare = function(e, t, i, n, r) {
            var o = !1
              , a = t.operator;
            return a === c.OPERATOR.EQUALS ? o = this.equals(e, i) : a === c.OPERATOR.NOT_EQUALS ? o = this.notequals(e, i) : a === c.OPERATOR.CONTAINS ? o = this.contains(e, i) : a === c.OPERATOR.DOESNOT_CONTAINS ? o = this.notcontains(e, i) : a === c.OPERATOR.LESSTHAN ? o = this.lessthan(e, r) : a === c.OPERATOR.MORETHAN ? o = this.morethan(e, n) : a === c.OPERATOR.BETWEEN && (o = this.between(e, n, r)),
            o
        }
        ,
        e.prototype.equals = function(e, t) {
            for (var i = t.length; i--; )
                if (t[i].toString().toLowerCase() === e.toString().toLowerCase())
                    return !0;
            return !1
        }
        ,
        e.prototype.notequals = function(e, t) {
            for (var i = t.length; i--; )
                if (t[i].toString().toLowerCase() === e.toString().toLowerCase())
                    return !1;
            return !0
        }
        ,
        e.prototype.contains = function(e, t) {
            for (var i = t.length; i--; )
                if (e.toString().toLowerCase().indexOf(t[i].toString().toLowerCase()) > -1)
                    return !0;
            return !1
        }
        ,
        e.prototype.notcontains = function(e, t) {
            for (var i = t.length; i--; )
                if (-1 === e.toString().toLowerCase().indexOf(t[i].toString().toLowerCase()))
                    return !0;
            return !1
        }
        ,
        e.prototype.lessthan = function(e, t) {
            return e < Number(t)
        }
        ,
        e.prototype.morethan = function(e, t) {
            return e > Number(t)
        }
        ,
        e.prototype.between = function(e, t, i) {
            return e >= t && e <= i
        }
        ,
        e
    }())
      , W = new (function() {
        function e() {
            this.customTriggersBuffer = []
        }
        return e.prototype.getCustomTriggersArray = function() {
            return this.customTriggersBuffer
        }
        ,
        e.prototype.pushToCustomTriggersArray = function(e) {
            this.customTriggersBuffer.push(e),
            window.dispatchEvent(new CustomEvent("zps-trigger-achieved",{
                detail: e
            }))
        }
        ,
        e.prototype.checkIfTriggerIsAlreadyAccomplished = function(e) {
            var t = this.checkIfBufferIsContainingExperimentKey(e);
            return !!t && (window.dispatchEvent(new CustomEvent("ps-experiment-triggered",{
                detail: t
            })),
            !0)
        }
        ,
        e.prototype.checkIfBufferIsContainingExperimentKey = function(e) {
            return this.getCustomTriggersArray().find(function(t) {
                return t.experimentKey === e
            })
        }
        ,
        e
    }())
      , Q = new (function() {
        function e() {
            this.initializeData()
        }
        return e.prototype.initializeData = function() {
            this.experimentsApplied = []
        }
        ,
        e.prototype.resetData = function() {
            this.initializeData()
        }
        ,
        e.prototype.kickStart = function() {
            var e = window.ZAB.data;
            for (var t in e.experiment)
                if (e.experiment.hasOwnProperty(t)) {
                    var i = e.experiment[t].trigger;
                    if (!i || 2 !== e.experiment[t].status || !window.ZAB.zab.isExperimentURLMatches(e.experiment[t]))
                        continue;
                    this.validateTriggerConditions(i, e, t)
                }
        }
        ,
        e.prototype.validateTriggerConditions = function(e, t, i) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n]
                  , o = t.trigger[r];
                if (J.validateTriggerObj(o, i) && ($.achievedTriggers[r] = !0,
                -1 === this.experimentsApplied.indexOf(i))) {
                    var a = t.experiment[i].type;
                    this.pushDataToCustomTriggerArray(a, i)
                }
            }
        }
        ,
        e.prototype.pushDataToCustomTriggerArray = function(e, t) {
            switch (e) {
            case c.EXPERIMENTS.POPUPS:
                if (window.ZAB.popup_experiment)
                    if (window.ZAB.popup_experiment.key === t)
                        W.checkIfBufferIsContainingExperimentKey(t) || W.pushToCustomTriggersArray({
                            experimentKey: t
                        });
                break;
            case c.EXPERIMENTS.POLLS:
                if (window.ZAB.pollsandfeedbackexperiment)
                    if (window.ZAB.pollsandfeedbackexperiment.key === t)
                        W.checkIfBufferIsContainingExperimentKey(t) || W.pushToCustomTriggersArray({
                            experimentKey: t
                        })
            }
        }
        ,
        e.prototype.onExperimentApplied = function(e) {
            var t = e.detail.experimentKey;
            this.addExperimentKeyIntoAppliedList(t),
            D.addExperimentKeyToAppliedExperimentsCookie(t)
        }
        ,
        e.prototype.addExperimentKeyIntoAppliedList = function(e) {
            -1 === this.experimentsApplied.indexOf(e) && this.experimentsApplied.push(e)
        }
        ,
        e.prototype.checkTriggerAchieved = function(e) {
            var t = !1;
            if (e && e.length > 0)
                for (var i = 0; i < e.length; i++)
                    Object.keys($.achievedTriggers).indexOf(e[i]) >= 0 && (t = !0);
            return t
        }
        ,
        e
    }())
      , X = new (function() {
        function e() {}
        return e.prototype.getAcquisitionData = function() {
            var e = document.URL
              , t = window.ZAB.zab.getZABQueryKeyValue(e, "utm_source")
              , i = window.ZAB.zab.getZABQueryKeyValue(e, "utm_medium")
              , n = window.ZAB.zab.getZABQueryKeyValue(e, "utm_campaign")
              , r = window.ZAB.zab.getZABQueryKeyValue(e, "utm_term")
              , o = window.ZAB.zab.getZABQueryKeyValue(e, "utm_content");
            if (t && i)
                this.source = t,
                this.medium = i,
                "email" === this.medium ? this.channel = "email" : "affiliate" === this.medium ? this.channel = "affilates" : "organic" === this.medium ? this.channel = "organic search" : a.OTHER_ADVERTISING_MEDIUM.indexOf(this.medium) >= 0 ? this.channel = "other advertising" : a.SOCIAL_MEDIUM.indexOf(this.medium) >= 0 ? this.channel = "social" : "referral" === this.medium ? this.channel = "referral" : a.PAID_MEDIUM.indexOf(this.medium) >= 0 ? this.channel = "paid search" : a.DISPLAY_MEDIUM.indexOf(this.medium) >= 0 ? this.channel = "display" : this.channel = "(other)";
            else if (t && !i)
                this.source = t,
                this.medium = "(not set)",
                this.channel = "(other)";
            else {
                var s = this.getSource();
                this.source = s;
                var c = this.getMedium(s);
                this.medium = c;
                var u = this.getChannel(s, c);
                this.channel = u
            }
            var p = {};
            return p.source = this.source,
            p.medium = this.medium,
            p.channel = this.channel,
            p.utm_source = t,
            p.utm_medium = i,
            p.utm_campaign = n,
            p.utm_term = r,
            p.utm_content = o,
            p
        }
        ,
        e.prototype.getChannel = function(e, t) {
            var i = "";
            return "direct" === e ? i = "direct" : "organic" === t ? i = "organic search" : a.SOCIAL_MEDIUM.indexOf(t) >= 0 ? i = "social" : "referral" === t ? i = "referral" : a.PAID_MEDIUM.indexOf(t) >= 0 && (i = "paid search"),
            i
        }
        ,
        e.prototype.getSource = function() {
            var e = document.URL
              , t = document.referrer
              , i = window.ZAB.zab.parseURL(e)
              , n = window.ZAB.zab.parseURL(t)
              , r = this.getPaidCampaignSource(i);
            if (r)
                return r;
            if (!t || n.domain === i.domain)
                return "direct";
            var o = this.getSearchEngineSource(n);
            return o || this.getReferralSource(n)
        }
        ,
        e.prototype.getMedium = function(e) {
            var t = "";
            return "direct" === e ? t = "(none)" : a.PAID_SOURCES.indexOf(e) >= 0 ? ("google ads" === e ? this.source = "google" : "bing ads" === e && (this.source = "bing"),
            t = "cpc") : t = a.ORGANIC_SOURCES.indexOf(e) >= 0 ? "organic" : a.SOCIAL_SOURCES.indexOf(e) >= 0 ? "social" : "referral",
            t
        }
        ,
        e.prototype.getPaidCampaignSource = function(e) {
            var t = window.ZAB.zab.getQueryParameters(e.query.toLowerCase())
              , i = "";
            return t.gclid ? i = "google ads" : t.msclkid && (i = "bing ads"),
            i
        }
        ,
        e.prototype.getSearchEngineSource = function(e) {
            var t = ""
              , i = e.domain;
            switch (!0) {
            case "360.cn" === i.toLowerCase():
                t = "360.cn";
                break;
            case i.toLowerCase().indexOf(".alice.com") >= 0 || i.toLowerCase().indexOf("aliceadsl.fr") >= 0:
                t = "alice";
                break;
            case i.toLowerCase().indexOf(".alltheweb.com") >= 0:
                t = "alltheweb";
                break;
            case i.toLowerCase().indexOf(".altavista.com") >= 0:
                t = "altavista";
                break;
            case i.toLowerCase().indexOf(".aol.com") >= 0:
                t = "aol";
                break;
            case i.toLowerCase().indexOf(".ask.com") >= 0:
                t = "ask";
                break;
            case i.toLowerCase().indexOf("search.auone.jp") >= 0:
                t = "auone";
                break;
            case i.toLowerCase().indexOf("isearch.avg.com") >= 0:
                t = "avg";
                break;
            case i.toLowerCase().indexOf("search.babylon.com") >= 0:
                t = "babylon";
                break;
            case i.toLowerCase().indexOf("baidu.com") >= 0:
                t = "baidu";
                break;
            case i.toLowerCase().indexOf("biglobe.ne.jp") >= 0:
                t = "biglobe";
                break;
            case i.toLowerCase().indexOf(".bing.com") >= 0:
                t = "bing";
                break;
            case i.toLowerCase().indexOf("search.centrum.cz") >= 0:
                t = "centrum.cz";
                break;
            case i.toLowerCase().indexOf("search.comcast.net") >= 0:
                t = "comcast";
                break;
            case i.toLowerCase().indexOf("search.conduit.com") >= 0:
                t = "conduit";
                break;
            case i.toLowerCase().indexOf(".cnn.com") >= 0:
                t = "cnn";
                break;
            case i.toLowerCase().indexOf(".daum.net") >= 0:
                t = "daum";
                break;
            case i.toLowerCase().indexOf("duckduckgo.com") >= 0:
                t = "duckduckgo";
                break;
            case i.toLowerCase().indexOf("ecosia.org") >= 0:
                t = "ecosia";
                break;
            case i.toLowerCase().indexOf("ekolay.net") >= 0:
                t = "ekolay";
                break;
            case i.toLowerCase().indexOf(".eniro.se") >= 0:
                t = "eniro";
                break;
            case i.toLowerCase().indexOf(".globo.com") >= 0:
                t = "globo";
                break;
            case i.toLowerCase().indexOf("go.mail.ru") >= 0:
                t = "go.mail.ru";
                break;
            case i.toLowerCase().indexOf("google.") >= 0:
                t = "google";
                break;
            case i.toLowerCase().indexOf("goo.ne.jp") >= 0:
                t = "goo.ne";
                break;
            case i.toLowerCase().indexOf("www.haosou.com") >= 0:
                t = "haosou.com";
                break;
            case i.toLowerCase().indexOf("search.incredimail.com") >= 0:
                t = "incredimail";
                break;
            case i.toLowerCase().indexOf(".kvasir.no") >= 0:
                t = "kvasir";
                break;
            case i.toLowerCase().indexOf(".lycos.com") >= 0 || i.toLowerCase().indexOf("search.lycos.") >= 0:
                t = "lycos";
                break;
            case i.toLowerCase().indexOf(".mamma.com") >= 0:
                t = "mamma";
                break;
            case i.toLowerCase().indexOf(".msn.com") >= 0:
                t = "msn";
                break;
            case i.toLowerCase().indexOf(".mynet.com") >= 0:
                t = "mynet";
                break;
            case "najdi.si" === i.toLowerCase():
                t = "najdi";
                break;
            case i.toLowerCase().indexOf(".naver.com") >= 0:
                t = "naver";
                break;
            case i.toLowerCase().indexOf("search.netscape.com") >= 0:
                t = "netscape";
                break;
            case i.toLowerCase().indexOf("szukaj.onet.pl") >= 0:
                t = "onet";
                break;
            case i.toLowerCase().indexOf(".ozu.es") >= 0:
                t = "ozu";
                break;
            case i.toLowerCase().indexOf("rakuten.co.jp") >= 0:
                t = "rakuten";
                break;
            case i.toLowerCase().indexOf("rambler.ru") >= 0:
                t = "rambler";
                break;
            case i.toLowerCase().indexOf("search-results.com") >= 0:
                t = "search-results";
                break;
            case i.toLowerCase().indexOf("search.smt.docomo.ne.jp") >= 0:
                t = "search.smt.docomo";
                break;
            case i.toLowerCase().indexOf("sesam.no") >= 0:
                t = "sesam";
                break;
            case i.toLowerCase().indexOf(".seznam.cz") >= 0:
                t = "seznam";
                break;
            case i.toLowerCase().indexOf(".so.com") >= 0:
                t = "so.com";
                break;
            case i.toLowerCase().indexOf(".sogou.com") >= 0:
                t = "sogou";
                break;
            case i.toLowerCase().indexOf(".startsiden.no") >= 0:
                t = "startsiden";
                break;
            case i.toLowerCase().indexOf(".szukacz.pl") >= 0:
                t = "szukacz";
                break;
            case i.toLowerCase().indexOf("buscador.terra.com.br") >= 0:
                t = "terra";
                break;
            case i.toLowerCase().indexOf("search.tut.by") >= 0:
                t = "tut.by";
                break;
            case i.toLowerCase().indexOf("search.ukr.net") >= 0:
                t = "ukr";
                break;
            case i.toLowerCase().indexOf("search.virgilio.it") >= 0:
                t = "virgilio";
                break;
            case i.toLowerCase().indexOf(".voila.fr") >= 0:
                t = "voila";
                break;
            case i.toLowerCase().indexOf(".wp.pl") >= 0:
                t = "wirtulana polska";
                break;
            case i.toLowerCase().indexOf("yahoo.") >= 0:
                t = "yahoo";
                break;
            case i.toLowerCase().indexOf("yandex.") >= 0:
                t = "yandex";
                break;
            case i.toLowerCase().indexOf(".yam.com") >= 0:
                t = "yam"
            }
            return t
        }
        ,
        e.prototype.getReferralSource = function(e) {
            var t = e.domain
              , i = "";
            switch (!0) {
            case t.toLowerCase().indexOf("facebook.com") >= 0:
                i = "facebook";
                break;
            case "t.co" === t.toLowerCase() || t.toLowerCase().indexOf("twitter.com") >= 0:
                i = "twitter";
                break;
            case t.toLowerCase().indexOf("linkedin.com") >= 0:
                i = "linkedin";
                break;
            case t.toLowerCase().indexOf("youtube.") >= 0:
                i = "youtube";
                break;
            case t.toLowerCase().indexOf("quora.com") >= 0:
                i = "quora";
                break;
            case t.toLowerCase().indexOf("instagram.") >= 0:
                i = "instagram";
                break;
            case t.toLowerCase().indexOf("pinterest.com") >= 0:
                i = "pinterest";
                break;
            case t.toLowerCase().indexOf("reddit.com") >= 0:
                i = "reddit";
                break;
            case t.toLowerCase().indexOf("tumblr.com") >= 0:
                i = "tumblr";
                break;
            default:
                i = t
            }
            return i
        }
        ,
        e.prototype.deleteSessionCookieIfCampaignSourceChanges = function() {
            var e = ee.getSessionCookieKey()
              , t = window.ZAB.cookieHandler.getCookieValue(e)
              , i = document.referrer
              , n = window.ZAB.zab.parseURL(document.URL)
              , r = window.ZAB.zab.parseURL(i);
            if (t && "direct" !== this.source && r.domain !== n.domain) {
                var o = window.ZAB.cookieHandler.getCookieValue(a.SESSION_DETAILS_COOKIE);
                ee.getFlagDetailsFromCookie(o, "source") != this.source && (window.ZAB.cookieHandler.deleteCookie(ee.getSessionCookieKey()),
                window.ZAB.cookieHandler.deleteCookieFromTLD(ee.getSessionCookieKey()))
            }
        }
        ,
        e.prototype.setTriggersSessionDataInCookie = function(e, t, i) {
            var n = window.ZAB.cookieHandler.getCookieValue(c.TRIGGERS_DATA_COOKIE_NAME);
            if (n) {
                var r = (n = n.split("-"))[e];
                switch (r = r.split("="),
                t) {
                case c.NUMBER_OF_SESSIONS:
                    var o = Number(r[1]);
                    o += 1,
                    r[1] = o;
                    break;
                case c.NEW_SESSION_STARTS:
                    var a = i[c.EXPERIMENT_KEY]
                      , s = JSON.parse(r[1]);
                    -1 === s.indexOf(a) && (s.push(a),
                    r[1] = JSON.stringify(s));
                    break;
                case c.PAGES_IN_SESSION:
                    var u = Number(r[1]);
                    u += 1,
                    r[1] = u
                }
                r = r.join("="),
                n[e] = r,
                n = n.join("-");
                p = this.getExpiryTimeFromVisitorCookie();
                window.ZAB.cookieHandler.deleteCookie(c.TRIGGERS_DATA_COOKIE_NAME),
                window.ZAB.cookieHandler.deleteCookieFromTLD(c.TRIGGERS_DATA_COOKIE_NAME),
                L.setSubDomainCookie(c.TRIGGERS_DATA_COOKIE_NAME, n, p)
            } else {
                var p = this.getExpiryTimeFromVisitorCookie();
                L.setSubDomainCookie(c.TRIGGERS_DATA_COOKIE_NAME, c.TRIGGERS_DATA_COOKIE_VALUE, p)
            }
        }
        ,
        e.prototype.getTriggersSessionDataFromCookie = function(e, t, i) {
            var n = null
              , r = window.ZAB.cookieHandler.getCookieValue(c.TRIGGERS_DATA_COOKIE_NAME);
            if (!r) {
                var o = this.getExpiryTimeFromVisitorCookie();
                L.setSubDomainCookie(c.TRIGGERS_DATA_COOKIE_NAME, c.TRIGGERS_DATA_COOKIE_VALUE, o)
            }
            var a = (r = (r = window.ZAB.cookieHandler.getCookieValue(c.TRIGGERS_DATA_COOKIE_NAME)).split("-"))[e];
            switch (a = a.split("="),
            t) {
            case c.NUMBER_OF_SESSIONS:
            case c.PAGES_IN_SESSION:
            case c.TIME_SPENT_IN_A_SESSION:
                n = Number(a[1]);
                break;
            case c.NEW_SESSION_STARTS:
                var s = i[c.EXPERIMENT_KEY];
                n = -1 === JSON.parse(a[1]).indexOf(s)
            }
            return n
        }
        ,
        e.prototype.initializeTriggerDetailsCookie = function() {
            var e = window.ZAB.cookieHandler.getCookieValue(c.TRIGGERS_DATA_COOKIE_NAME);
            if (e) {
                e = e.split("-");
                for (var t = 0; t < e.length; t++) {
                    var i = e[t];
                    switch ((i = i.split("="))[0]) {
                    case "expAppOnNewSession":
                        Q.experimentsApplied && Q.experimentsApplied.length > 0 ? i[1] = JSON.stringify(Q.experimentsApplied) : i[1] = "[]";
                        break;
                    case "pc":
                        i[1] = 0;
                        break;
                    case "sesst":
                        i[1] = (new Date).getTime()
                    }
                    i = i.join("="),
                    e[t] = i
                }
                e = e.join("-");
                var n = this.getExpiryTimeFromVisitorCookie();
                window.ZAB.cookieHandler.deleteCookie(c.TRIGGERS_DATA_COOKIE_NAME),
                window.ZAB.cookieHandler.deleteCookieFromTLD(c.TRIGGERS_DATA_COOKIE_NAME),
                L.setSubDomainCookie(c.TRIGGERS_DATA_COOKIE_NAME, e, n)
            }
        }
        ,
        e.prototype.getExpiryTimeFromVisitorCookie = function() {
            var e = (new Date).getTime()
              , t = window.ZAB.cookieHandler.getCookieValue("zabUserId");
            return t && (t = t.split("zabu0"),
            e = Number(t[0])),
            e + 31536e6
        }
        ,
        e
    }())
      , ee = new (function() {
        function e() {}
        return e.prototype.getSessionIdFromSessionCookie = function() {
            var e = this.getSessionCookieKey()
              , t = window.ZAB.cookieHandler.getCookieValue(e);
            return t ? this.updateSessionCookie(t) : (t = this.generateSessionCookie(),
            X.setTriggersSessionDataInCookie(c.TRIGGERS_COOKIE_INDEX.NUMBER_OF_SESSIONS, c.NUMBER_OF_SESSIONS, null),
            X.initializeTriggerDetailsCookie(),
            this.initializeDataOnSessionStarts(),
            window.ZAB.cookieHandler.deleteCookie(a.SESSION_DETAILS_COOKIE),
            window.ZAB.cookieHandler.deleteCookieFromTLD(a.SESSION_DETAILS_COOKIE),
            this.setInitialSessionDetailsCookie()),
            t
        }
        ,
        e.prototype.generateInitialSessionDetailsCookie = function() {
            return "isef=false-isfr=false-source=null"
        }
        ,
        e.prototype.setInitialSessionDetailsCookie = function() {
            var e = this.generateInitialSessionDetailsCookie();
            L.setSubDomainCookie(a.SESSION_DETAILS_COOKIE, e, this.getEndTimeOfTheDayInUsersTimeZone())
        }
        ,
        e.prototype.initializeDataOnSessionStarts = function() {
            this.initializeLocalStorage(),
            this.initializePageViewHitsStorage()
        }
        ,
        e.prototype.getSessionCookieKey = function() {
            return "zsc" + E.getProjectKey()
        }
        ,
        e.prototype.getSessionExpiryTime = function() {
            var e = (new Date).getTime() + 18e5
              , t = this.getEndTimeOfTheDayInUsersTimeZone();
            return e > t && (e = t),
            e
        }
        ,
        e.prototype.getEndTimeOfTheDayInUsersTimeZone = function() {
            var e = (new Date).getUTCFullYear()
              , t = (new Date).getUTCMonth()
              , i = (new Date).getUTCDate()
              , n = Date.UTC(e, t, i, 0, 0, 0, 0)
              , r = n - this.dataObject.offset
              , o = r + a.DAY_IN_MILLIS - 1;
            return r > (new Date).getTime() && (o = (r = n - a.DAY_IN_MILLIS - this.dataObject.offset) + a.DAY_IN_MILLIS - 1),
            o < (new Date).getTime() && (o = (r = n + a.DAY_IN_MILLIS - this.dataObject.offset) + a.DAY_IN_MILLIS - 1),
            o
        }
        ,
        e.prototype.generateSessionCookie = function() {
            var e = this.getSessionCookieKey()
              , t = window.ZAB.zab.generateUniqueId("zsc")
              , i = this.getSessionExpiryTime();
            return L.setSubDomainCookie(e, t, i),
            t
        }
        ,
        e.prototype.updateSessionCookie = function(e) {
            var t = this.getSessionCookieKey()
              , i = e
              , n = this.getSessionExpiryTime();
            L.setSubDomainCookie(t, i, n)
        }
        ,
        e.prototype.updateLocalStorageData = function(e, t) {
            try {
                var i = {}
                  , n = e.urd;
                i[a.FIRST_SOURCE] = n[a.FIRST_SOURCE],
                i[a.FIRST_MEDIUM] = n[a.FIRST_MEDIUM],
                i[a.FIRST_CHANNEL] = n[a.FIRST_CHANNEL],
                i[a.IS_NEW_VISITOR] = n[a.IS_NEW_VISITOR],
                i[a.LANDING_PAGE] = n[a.LANDING_PAGE],
                i[a.LANDING_PAGE_REFERRER] = n[a.LANDING_PAGE_REFERRER],
                i[a.LAST_IS_INTERACTION_HIT] = n[a.IS_INTERACTION_HIT],
                i[a.LAST_TRAFFIC_VALUE] = n[a.TRAFFIC_VALUE],
                i[a.LAST_FULL_REFFERER_URL] = n[a.FULL_REFFERER_URL],
                i[a.LAST_FULL_CURRENT_URL] = n[a.FULL_CURRENT_URL],
                i[a.LAST_CURRENT_URL] = n[a.CURRENT_URL],
                i[a.LAST_REFFERER_URL] = n[a.REFFERER_URL],
                i[a.LAST_URL_PARAMETERS] = n[a.URL_PARAMETERS],
                i[a.LAST_VISIT_ID] = n[a.VISIT_ID],
                i[a.LAST_HIT_TYPE] = n[a.HIT_TYPE],
                i[a.LAST_IS_ENTRANCE_FLAG] = n[a.IS_ENTRANCE_FLAG],
                i[a.LAST_SOURCE] = n[a.SOURCE],
                i[a.LAST_MEDIUM] = n[a.MEDIUM],
                i[a.LAST_CHANNEL] = n[a.CHANNEL],
                i[a.LAST_UTM_SOURCE] = n[a.UTM_SOURCE],
                i[a.LAST_UTM_MEDIUM] = n[a.UTM_MEDIUM],
                i[a.LAST_UTM_CAMPAIGN] = n[a.UTM_CAMPAIGN],
                i[a.LAST_UTM_TERM] = n[a.UTM_TERM],
                i[a.LAST_UTM_CONTENT] = n[a.UTM_CONTENT],
                i[a.LAST_DOCUMENT_TITLE] = n[a.DOCUMENT_TITLE],
                i[a.LAST_IS_FIRST_REQUEST] = n[a.IS_FIRST_REQUEST],
                i[a.REQUEST_SENT_TIME] = (new Date).getTime(),
                t && t.customDataType && "goal" === t.customDataType && (i[a.LAST_GOAL_LINK_NAME] = t.goal_link_name);
                var r = window.localStorage
                  , o = JSON.parse(r.getItem("zps-ft-details"));
                o[E.getProjectKey()] = i,
                localStorage.setItem("zps-ft-details", JSON.stringify(o))
            } catch (e) {
                w.error(e)
            }
        }
        ,
        e.prototype.updatePageViewDetailsInLocalStorage = function(e) {
            try {
                var t = {}
                  , i = e.urd;
                t[a.LAST_IS_INTERACTION_HIT] = i[a.IS_INTERACTION_HIT],
                t[a.LAST_IS_FIRST_REQUEST] = i[a.IS_FIRST_REQUEST],
                t[a.LAST_IS_ENTRANCE_FLAG] = i[a.IS_ENTRANCE_FLAG],
                t[a.LAST_TRAFFIC_VALUE] = i[a.TRAFFIC_VALUE],
                t[a.LAST_FULL_REFFERER_URL] = i[a.FULL_REFFERER_URL],
                t[a.LAST_FULL_CURRENT_URL] = i[a.FULL_CURRENT_URL],
                t[a.LAST_CURRENT_URL] = i[a.CURRENT_URL],
                t[a.LAST_REFFERER_URL] = i[a.REFFERER_URL],
                t[a.LAST_URL_PARAMETERS] = i[a.URL_PARAMETERS],
                t[a.LAST_VISIT_ID] = i[a.VISIT_ID],
                t[a.LAST_SOURCE] = i[a.SOURCE],
                t[a.LAST_MEDIUM] = i[a.MEDIUM],
                t[a.LAST_CHANNEL] = i[a.CHANNEL],
                t[a.LAST_UTM_SOURCE] = i[a.UTM_SOURCE],
                t[a.LAST_UTM_MEDIUM] = i[a.UTM_MEDIUM],
                t[a.LAST_UTM_CAMPAIGN] = i[a.UTM_CAMPAIGN],
                t[a.LAST_UTM_TERM] = i[a.UTM_TERM],
                t[a.LAST_UTM_CONTENT] = i[a.UTM_CONTENT],
                t[a.LAST_DOCUMENT_TITLE] = i[a.DOCUMENT_TITLE],
                t[a.REQUEST_SENT_TIME] = (new Date).getTime();
                var n = window.localStorage
                  , r = JSON.parse(n.getItem("zps-ft-pghitType-details"));
                r[E.getProjectKey()] = t,
                localStorage.setItem("zps-ft-pghitType-details", JSON.stringify(r))
            } catch (e) {
                w.error(e)
            }
        }
        ,
        e.prototype.setIsInteractionHit = function(e, t) {
            "goal" === t && e && !1 === e.grd[0].iht ? this.isInteractionHit = !1 : this.isInteractionHit = !0
        }
        ,
        e.prototype.addFullTrackingDataToRawData = function(e, t) {
            return this.sendFullTrackingData(e, t),
            e
        }
        ,
        e.prototype.sendFullTrackingData = function(e, t) {
            try {
                this.hitType = t,
                this.setIsInteractionHit(e, t);
                var i = this.cookFoodForFullTracking()
                  , n = {};
                "pageview" === this.hitType ? (X.setTriggersSessionDataInCookie(c.TRIGGERS_COOKIE_INDEX.PAGES_IN_SESSION, c.PAGES_IN_SESSION, null),
                window.ZAB.zab.sendDataToServer(21, i),
                this.updatePageViewDetailsInLocalStorage(i)) : (e.urd = i.urd,
                "goal" === t && (e.grd.p = E.getProjectKey(),
                n.customDataType = "goal",
                n.goal_link_name = e.grd[0].gln)),
                this.isInteractionHit && this.updateLocalStorageData(i, n)
            } catch (e) {
                w.error(e)
            }
        }
        ,
        e.prototype.getInitialDataForLocalStorage = function() {
            var e;
            return (e = {})[a.IS_NEW_VISITOR] = !window.ZAB.returning,
            e[a.LANDING_PAGE] = window.ZAB.useragentrawdata.cv,
            e[a.LANDING_PAGE_REFERRER] = window.ZAB.useragentrawdata.rv,
            e[a.FIRST_SOURCE] = this.acquisitionData.source,
            e[a.FIRST_MEDIUM] = this.acquisitionData.medium,
            e[a.FIRST_CHANNEL] = this.acquisitionData.channel,
            e
        }
        ,
        e.prototype.initializePageViewHitsStorage = function() {
            try {
                var e, t = window.localStorage.getItem("zps-ft-pghitType-details"), i = E.getProjectKey();
                (e = t ? JSON.parse(t) : {})[i] = {},
                localStorage.setItem("zps-ft-pghitType-details", JSON.stringify(e))
            } catch (e) {
                w.error(e)
            }
        }
        ,
        e.prototype.initializeLocalStorage = function() {
            try {
                var e, t = window.localStorage.getItem("zps-ft-details"), i = E.getProjectKey();
                t ? (e = JSON.parse(t))[i] = this.getInitialDataForLocalStorage() : (e = {})[i] = this.getInitialDataForLocalStorage(),
                localStorage.setItem("zps-ft-details", JSON.stringify(e))
            } catch (e) {
                w.error(e)
            }
        }
        ,
        e.prototype.getDataFromLocalStorage = function(e) {
            try {
                var t = window.localStorage.getItem(e);
                if (t) {
                    t = JSON.parse(t);
                    var i = E.getProjectKey();
                    if (t[i])
                        return t[i]
                }
            } catch (e) {
                w.error(e)
            }
        }
        ,
        e.prototype.calculateSessionDuration = function(e) {
            var t = (new Date).getTime()
              , i = (new Date).getTime();
            return e && (t = Number(e.split("zsc")[0])),
            i - t
        }
        ,
        e.prototype.calculateTimeSpent = function() {
            try {
                var e = window.localStorage.getItem("zps-ft-details");
                if (e) {
                    e = JSON.parse(e);
                    var t = E.getProjectKey();
                    if (e[t]) {
                        var i = e[t];
                        return (new Date).getTime() - i[a.REQUEST_SENT_TIME]
                    }
                }
            } catch (e) {
                w.error(e)
            }
        }
        ,
        e.prototype.getPortalRawData = function() {
            return {
                a: this.dataObject.portal_name,
                p: E.getProjectKey()
            }
        }
        ,
        e.prototype.getFlagDetailsFromCookie = function(e, t) {
            var i = "isEntrance" !== t && "isFirstRequest" !== t && null;
            if (e) {
                var n = e.split("-");
                if ("isEntrance" === t && n && n[0])
                    i = "true" === n[0].split("=")[1];
                else if ("isFirstRequest" === t && n && n[1]) {
                    i = "true" === n[1].split("=")[1]
                } else if ("source" === t && n && n[2]) {
                    i = n[2].split("=")[1]
                }
            }
            return i
        }
        ,
        e.prototype.setSessionDetailsCookie = function(e, t) {
            if (e) {
                var i = e.split("-");
                "isEntrance" === t && i[0] && i[1] && i[2] ? (e = "isef=true-" + i[1] + "-" + i[2],
                L.setSubDomainCookie(a.SESSION_DETAILS_COOKIE, e, this.getEndTimeOfTheDayInUsersTimeZone())) : "isFirstRequest" === t && i[0] && i[1] && i[2] ? (e = i[0] + "-isfr=true-" + i[2],
                L.setSubDomainCookie(a.SESSION_DETAILS_COOKIE, e, this.getEndTimeOfTheDayInUsersTimeZone())) : "source" === t && i[0] && i[1] && i[2] && (e = i[0] + "-" + i[1] + "-source=" + this.acquisitionData.source,
                L.setSubDomainCookie(a.SESSION_DETAILS_COOKIE, e, this.getEndTimeOfTheDayInUsersTimeZone()))
            } else
                this.setInitialSessionDetailsCookie()
        }
        ,
        e.prototype.checkAndSetIsEntranceCookie = function() {
            var e = window.ZAB.cookieHandler.getCookieValue(a.SESSION_DETAILS_COOKIE);
            this.getFlagDetailsFromCookie(e, "isEntrance") || "pageview" !== this.hitType ? this.isEntrance = !1 : (this.isEntrance = !0,
            this.setSessionDetailsCookie(e, "isEntrance"))
        }
        ,
        e.prototype.checkAndSetIsFirstRequestCookie = function() {
            var e = window.ZAB.cookieHandler.getCookieValue(a.SESSION_DETAILS_COOKIE);
            !this.getFlagDetailsFromCookie(e, "isFirstRequest") && this.isInteractionHit ? (this.isFirstRequest = !0,
            this.setSessionDetailsCookie(e, "isFirstRequest")) : this.isFirstRequest = !1
        }
        ,
        e.prototype.checkAndSetSource = function() {
            var e = window.ZAB.cookieHandler.getCookieValue(a.SESSION_DETAILS_COOKIE)
              , t = this.getFlagDetailsFromCookie(e, "source");
            t && "null" === t && this.setSessionDetailsCookie(e, "source")
        }
        ,
        e.prototype.setFlagsRequiredForFullTracking = function() {
            this.checkAndSetIsEntranceCookie(),
            this.checkAndSetIsFirstRequestCookie(),
            this.checkAndSetSource()
        }
        ,
        e.prototype.checkLocalStorageDataExists = function() {
            var e = !0;
            try {
                var t = window.localStorage
                  , i = t.getItem("zps-ft-details")
                  , n = t.getItem("zps-ft-pghitType-details");
                if (i && n) {
                    i = JSON.parse(i),
                    n = JSON.parse(n);
                    var r = E.getProjectKey();
                    (i && !i[r] || n && !n[r]) && (e = !1)
                } else
                    e = !1
            } catch (t) {
                e = !1
            }
            return e
        }
        ,
        e.prototype.cookFoodForFullTracking = function() {
            var e = {};
            this.dataObject = window.ZAB.zab.getDataObj(),
            window.ZAB.zab.generateUserAgentData();
            var t = X.getAcquisitionData();
            this.acquisitionData = t;
            var i = JSON.parse(JSON.stringify(window.ZAB.useragentrawdata));
            X.deleteSessionCookieIfCampaignSourceChanges(),
            this.getSessionId() && !this.checkLocalStorageDataExists() && (window.ZAB.cookieHandler.deleteCookie(this.getSessionCookieKey()),
            window.ZAB.cookieHandler.deleteCookieFromTLD(this.getSessionCookieKey()));
            var n = this.getSessionIdFromSessionCookie();
            i.sid = n,
            this.setFlagsRequiredForFullTracking();
            var r = this.getPortalRawData();
            this.isInteractionHit && (this.isFirstRequest ? i.ts = 0 : i.ts = this.calculateTimeSpent());
            var o = this.getDataFromLocalStorage("zps-ft-details");
            if (Object.assign(i, o),
            "pageview" === this.hitType && !this.isEntrance) {
                var s = this.getDataFromLocalStorage("zps-ft-pghitType-details");
                i.extpg = s,
                i.extpg.ts = (new Date).getTime() - i.extpg[a.REQUEST_SENT_TIME]
            }
            return i[a.IS_FIRST_REQUEST] = this.isFirstRequest,
            i[a.IS_ENTRANCE_FLAG] = this.isEntrance,
            i[a.HIT_TYPE] = this.hitType,
            i[a.IS_INTERACTION_HIT] = this.isInteractionHit,
            i[a.SOURCE] = t.source,
            i[a.MEDIUM] = t.medium,
            i[a.CHANNEL] = t.channel,
            i[a.UTM_SOURCE] = t.utm_source,
            i[a.UTM_MEDIUM] = t.utm_medium,
            i[a.UTM_CAMPAIGN] = t.utm_campaign,
            i[a.UTM_TERM] = t.utm_term,
            i[a.UTM_CONTENT] = t.utm_content,
            i[a.DOCUMENT_TITLE] = window.document.title ? window.document.title : "(not set)",
            e.vrd = [r],
            e.urd = i,
            e
        }
        ,
        e.prototype.getSessionId = function() {
            var e = this.getSessionCookieKey();
            return window.ZAB.cookieHandler.getCookieValue(e)
        }
        ,
        e.prototype.getFirstSource = function() {
            try {
                var e = window.localStorage.getItem("zps-ft-details")
                  , t = E.getProjectKey();
                return JSON.parse(e)[t][a.FIRST_SOURCE]
            } catch (e) {
                w.error(e)
            }
            return X.getAcquisitionData().source
        }
        ,
        e.prototype.getFirstChannel = function() {
            try {
                var e = window.localStorage.getItem("zps-ft-details")
                  , t = E.getProjectKey();
                return JSON.parse(e)[t][a.FIRST_CHANNEL]
            } catch (e) {
                w.error(e)
            }
            return X.getAcquisitionData().channel
        }
        ,
        e
    }())
      , te = {
        uid: "zabUserId",
        vid: "zabVisitId",
        bucket: "zabBucket",
        qabucket: "zabQABucket",
        split: "zabSplit",
        heatmapbucket: "zabHMBucket",
        achievedGoals: "zabAchGoal",
        pollsBucket: "zpsPollsBucket",
        popupBucket: "zpsPopupBucket",
        botScore: "zabBotScore"
    }
      , ie = {
        REVENUE_GOAL_TYPE: 7,
        PAGE_VISIT_GOAL_TYPE: 1,
        CUSTOM_EVENT_GOAL_TYPE: 6
    }
      , ne = new (function() {
        function e() {}
        return e.prototype.isVariationBucketedForExp = function(e) {
            var t = !1
              , i = window.ZAB.zab.getBucketInfo();
            if (E.exists(i) && i.hasOwnProperty(e)) {
                var n = i[e];
                n != a.USER_EXCLUDED_ABTEST_COOKIE_VALUE && n != a.AUDIENCE_MATCHING_FAILURE_COOKIE_VALUE && (t = !0)
            }
            return t
        }
        ,
        e.prototype.isUserIncluded = function(e) {
            return 100 * Math.random() <= e.permittedTrafic
        }
        ,
        e.prototype.abortUser = function(e) {
            var t = {};
            L.checkCookieExists(te.bucket) && (t = JSON.parse(L.getCookieValue(te))),
            t[e.key] = a.USER_EXCLUDED_ABTEST_COOKIE_VALUE,
            L.setCookieWithExpiryInDays(te.bucket, JSON.stringify(t), a.COOKIE_ONE_YEAR_EXPIRY_DAYS)
        }
        ,
        e.prototype.abortAudienceFailedUserTemporarily = function(e) {
            var t = {};
            L.checkCookieExists(te.bucket) && (t = JSON.parse(L.getCookieValue(te.bucket))),
            this.isVariationBucketedForExp(e.key) || (t[e.key] = a.AUDIENCE_MATCHING_FAILURE_COOKIE_VALUE),
            L.setCookieWithExpiryInDays(te.bucket, JSON.stringify(t), a.COOKIE_ONE_YEAR_EXPIRY_DAYS)
        }
        ,
        e.prototype.getRevenueGoalLinkNameForExperiment = function(e) {
            for (var t = 0, i = window.ZAB.data.experiment[e].goal; t < i.length; t++) {
                var n = i[t];
                if (window.ZAB.data.goal[n].goal_type === ie.REVENUE_GOAL_TYPE)
                    return n
            }
        }
        ,
        e.prototype.generateGoalRawDataForABSplit = function(e, t, i) {
            var n = {
                a: window.ZAB.zab.getDataObj().portal_name,
                b: e,
                c: t,
                gln: i,
                n: !window.ZAB.returningForExp[e]
            }
              , r = [];
            r.push(n);
            var o = window.ZAB.zab.generateUserAgentData();
            return o.e = window.ZAB.zab.getUAID(),
            {
                grd: r,
                urd: o
            }
        }
        ,
        e
    }())
      , re = function() {
        function e(e, t) {
            this.numberOfRetries = e,
            this.intervalInMillis = t,
            this.counter = 0
        }
        return e.prototype.stop = function() {
            this.intervalId && window.clearInterval(this.intervalId)
        }
        ,
        e.prototype.start = function(e) {
            var t = this;
            this.intervalId = window.setInterval(function() {
                t.counter > t.numberOfRetries && t.stop();
                try {
                    e()
                } catch (e) {}
                t.counter++
            }, this.intervalInMillis)
        }
        ,
        e
    }()
      , oe = function() {
        function e() {
            try {
                var e = window.ZAB.zab.getDataObj();
                this.intercom_app_id = e.integrations.INTERCOM,
                this.goals_map = e.goal,
                this.project_key = e.project_key,
                this.portal = e.portal_name,
                window.ZAB.returning = window.ZAB.zab.isReturningVisitor(),
                this.user_id = window.ZAB.zab.getUserId()
            } catch (e) {}
        }
        return e.prototype.observer = function() {
            var e = this
              , t = new re(5,1e3);
            t.start(function() {
                window.intercomSettings && e.intercom_app_id === window.intercomSettings.app_id && (window.addEventListener("project_goal", function(t) {
                    e.sendGoal(t)
                }),
                t.stop())
            })
        }
        ,
        e.prototype.sendGoal = function(e) {
            var t = new re(5,1e3)
              , i = e.detail
              , n = this.goals_map[i].goal_name;
            try {
                t.start(function() {
                    window.Intercom && (window.Intercom("trackEvent", n),
                    t.stop())
                })
            } catch (e) {}
        }
        ,
        e.prototype.sendIntercomIdentityData = function(e, t) {
            var i = {}
              , n = {};
            n.f = this.user_id,
            n.ty = "2",
            n.inty = "7",
            n.a = this.portal,
            n.p = this.project_key,
            n.em = t,
            n.inid = e,
            i.ird = n,
            i.urd = {};
            var r = {};
            r.id = e,
            r.email = t;
            var o = "inter_" + this.project_key + "_" + this.user_id
              , a = window.ZAB.cookieHandler.getCookieValue(o);
            if (a) {
                var s = JSON.parse(a);
                (!s.email || t && s.email !== t || e && s.id !== e) && (window.ZAB.zab.sendDataToServer(10, i),
                window.ZAB.cookieHandler.setCookie(o, JSON.stringify(r), 1))
            } else
                window.ZAB.zab.sendDataToServer(10, i),
                window.ZAB.cookieHandler.setCookie(o, JSON.stringify(r), 1)
        }
        ,
        e.prototype.intercomIdentify = function() {
            var e = this
              , t = new re(5,1e3);
            t.start(function() {
                if (window.Intercom && window.intercomSettings && e.intercom_app_id === window.intercomSettings.app_id) {
                    var i = window.intercomSettings.user_id ? window.intercomSettings.user_id : window.Intercom("getVisitorId")
                      , n = window.intercomSettings.email;
                    (n || i) && (e.sendIntercomIdentityData(i, n),
                    t.stop())
                }
            })
        }
        ,
        e
    }()
      , ae = "megroups"
      , se = "experiment_key"
      , ce = "traffic"
      , ue = "-"
      , pe = "zabme"
      , le = new (function() {
        function e() {}
        return e.prototype.setmegroups = function() {
            this.megroups = window.ZAB.data[ae]
        }
        ,
        e.prototype.getmegroups = function() {
            return this.megroups
        }
        ,
        e.prototype.selectRandomExperimentFromMEGroup = function(e) {
            this.setmegroups();
            var t = this.getmegroups();
            for (var i in t) {
                var n = this.selectExperimentFromMutualGroup(i);
                e = this.handleExperimentSelectOfMutualGroup(i, n, e)
            }
            return e
        }
        ,
        e.prototype.selectExperimentFromMutualGroup = function(e) {
            var t;
            if (this.checkIFMutualExclusionGroupMapped(e)) {
                var i = this.getMutualExclusionCookie()[e];
                i != ue && (t = i)
            } else {
                var n = this.getmegroups()[e]
                  , r = Math.floor(1e3 * Math.random()) + 1;
                r = r % 100 + 1;
                for (var o = 0, a = 0; a < n.length; a++) {
                    var s = n[a]
                      , c = s[ce];
                    if (0 != c) {
                        if (r <= c + o) {
                            t = s[se];
                            break
                        }
                        o += c
                    }
                }
            }
            return t
        }
        ,
        e.prototype.getMutualExclusionCookie = function() {
            return window.ZAB.cookieHandler.checkCookieExists(pe) ? JSON.parse(window.ZAB.cookieHandler.getCookieValue(pe)) : null
        }
        ,
        e.prototype.checkIFMutualExclusionGroupMapped = function(e) {
            var t = this.getMutualExclusionCookie();
            return !(!window.ZAB.zab.exists(t) || !t.hasOwnProperty(e))
        }
        ,
        e.prototype.handleExperimentSelectOfMutualGroup = function(e, t, i) {
            var n = this.getMutualExclusionCookie();
            window.ZAB.zab.exists(n) || (n = {});
            for (var r = this.getmegroups()[e], o = 0; o < r.length; o++) {
                var a = r[o][se];
                a === t ? n[e] = t : i.hasOwnProperty(a) && delete i[a]
            }
            return window.ZAB.zab.exists(t) || (n[e] = ue),
            window.ZAB.cookieHandler.setCookie(pe, JSON.stringify(n)),
            i
        }
        ,
        e
    }())
      , de = function() {
        function e() {
            try {
                var e = window.ZAB.zab.getDataObj();
                this.salesiq_screenname = e.integrations.SALESIQ,
                this.goals_map = e.goal,
                this.project_key = e.project_key,
                this.portal = e.portal_name,
                this.user_id = window.ZAB.zab.getUserId()
            } catch (e) {}
        }
        return e.prototype.sendGoal = function(e) {
            var t = e.detail
              , i = this.goals_map[t].goal_name
              , n = new re(5,1e3);
            n.start(function() {
                window.$zoho && window.$zoho.salesiq && window.$zoho.salesiq.ready && (window.$zoho.salesiq.visitor.customaction(i),
                n.stop())
            })
        }
        ,
        e.prototype.observer = function() {
            var e = this
              , t = new re(5,1e3);
            t.start(function() {
                window.$zoho && e.checkScreenInfo(e.salesiq_screenname) && (window.addEventListener("project_goal", function(t) {
                    e.sendGoal(t)
                }),
                t.stop())
            })
        }
        ,
        e.prototype.sendSalesIq = function(e, t) {
            var i = {}
              , n = {};
            n.f = window.ZAB.zab.getUserId(),
            n.ty = "2",
            n.inty = "8",
            n.a = this.portal,
            n.p = this.project_key,
            n.em = t,
            n.inid = e,
            i.ird = n,
            i.urd = {};
            var r = {};
            r.id = e;
            var o = "sales_" + this.project_key + "_" + this.user_id
              , a = window.ZAB.cookieHandler.getCookieValue(o);
            if (a) {
                var s = JSON.parse(a);
                e && s.id !== e && (window.ZAB.zab.sendDataToServer(10, i),
                window.ZAB.cookieHandler.setCookie(o, JSON.stringify(r), 1))
            } else
                window.ZAB.zab.sendDataToServer(10, i),
                window.ZAB.cookieHandler.setCookie(o, JSON.stringify(r), 1)
        }
        ,
        e.prototype.checkScreenInfo = function(e) {
            try {
                if (e === window._SIQ_VTS_CONF.portal_unique_name)
                    return !0
            } catch (e) {}
            try {
                if (e === window.$ZSIQChat.getWidgetData().embedobj.screenname)
                    return !0
            } catch (e) {}
            return !1
        }
        ,
        e.prototype.salesiqIdentify = function() {
            var e = this;
            try {
                var t = new re(5,1e3);
                t.start(function() {
                    if (window.$zoho && e.checkScreenInfo(e.salesiq_screenname)) {
                        var i = window.$zoho.salesiq.visitor.uniqueid();
                        i && (e.sendSalesIq(i, null),
                        t.stop())
                    }
                })
            } catch (e) {}
        }
        ,
        e
    }();
    function fe(e) {
        return (fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    /*!
 * UAParser.js v1.0.40
 * Copyright © 2012-2024 Faisal Salman <f@faisalman.com>
 * MIT License */
    var ge = function() {
        var e = "model"
          , t = "name"
          , i = "type"
          , n = "vendor"
          , r = "version"
          , o = "mobile"
          , a = "tablet"
          , s = "smarttv"
          , c = function(e) {
            for (var t = {}, i = 0; i < e.length; i++)
                t[e[i].toUpperCase()] = e[i];
            return t
        }
          , u = function(e, t) {
            return "string" === fe(e) && -1 !== p(t).indexOf(p(e))
        }
          , p = function(e) {
            return e.toLowerCase()
        }
          , l = function(e, t) {
            if ("string" === fe(e))
                return e = e.replace(/^\s\s*/, ""),
                "undefined" === fe(t) ? e : e.substring(0, 500)
        }
          , d = function(e, t) {
            for (var i, n, r, o, a, s, c = 0; c < t.length && !a; ) {
                var u = t[c]
                  , p = t[c + 1];
                for (i = n = 0; i < u.length && !a && u[i]; )
                    if (a = u[i++].exec(e))
                        for (r = 0; r < p.length; r++)
                            s = a[++n],
                            "object" === fe(o = p[r]) && o.length > 0 ? 2 === o.length ? "function" == fe(o[1]) ? this[o[0]] = o[1].call(this, s) : this[o[0]] = o[1] : 3 === o.length ? "function" !== fe(o[1]) || o[1].exec && o[1].test ? this[o[0]] = s ? s.replace(o[1], o[2]) : void 0 : this[o[0]] = s ? o[1].call(this, s, o[2]) : void 0 : 4 === o.length && (this[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : void 0) : this[o] = s || void 0;
                c += 2
            }
        }
          , f = function(e, t) {
            for (var i in t)
                if ("object" === fe(t[i]) && t[i].length > 0) {
                    for (var n = 0; n < t[i].length; n++)
                        if (u(t[i][n], e))
                            return "?" === i ? void 0 : i
                } else if (u(t[i], e))
                    return "?" === i ? void 0 : i;
            return t.hasOwnProperty("*") ? t["*"] : e
        }
          , g = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2000: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
        }
          , m = {
            browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [r, [t, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [r, [t, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [t, r], [/opios[\/ ]+([\w\.]+)/i], [r, [t, "Opera Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [r, [t, "Opera GX"]], [/\bopr\/([\w\.]+)/i], [r, [t, "Opera"]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [r, [t, "Baidu"]], [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i], [r, [t, "Maxthon"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [t, r], [/quark(?:pc)?\/([-\w\.]+)/i], [r, [t, "Quark"]], [/\bddg\/([\w\.]+)/i], [r, [t, "DuckDuckGo"]], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [r, [t, "UCBrowser"]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [r, [t, "WeChat"]], [/konqueror\/([\w\.]+)/i], [r, [t, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [r, [t, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [r, [t, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [r, [t, "Smart Lenovo Browser"]], [/(avast|avg)\/([\w\.]+)/i], [[t, /(.+)/, "$1 Secure Browser"], r], [/\bfocus\/([\w\.]+)/i], [r, [t, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [r, [t, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [r, [t, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [r, [t, "Dolphin"]], [/coast\/([\w\.]+)/i], [r, [t, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [r, [t, "MIUI Browser"]], [/fxios\/([\w\.-]+)/i], [r, [t, "Firefox"]], [/\bqihoobrowser\/?([\w\.]*)/i], [r, [t, "360"]], [/\b(qq)\/([\w\.]+)/i], [[t, /(.+)/, "$1Browser"], r], [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i], [[t, /(.+)/, "$1 Browser"], r], [/samsungbrowser\/([\w\.]+)/i], [r, [t, "Samsung Internet"]], [/metasr[\/ ]?([\d\.]+)/i], [r, [t, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[t, "Sogou Mobile"], r], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i], [t, r], [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i], [t], [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i], [r, t], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[t, "Facebook"], r], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [t, r], [/\bgsa\/([\w\.]+) .*safari\//i], [r, [t, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [r, [t, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [r, [t, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[t, "Chrome WebView"], r], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [r, [t, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [t, r], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [r, [t, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [r, t], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [t, [r, f, {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
            }]], [/(webkit|khtml)\/([\w\.]+)/i], [t, r], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[t, "Netscape"], r], [/(wolvic|librewolf)\/([\w\.]+)/i], [t, r], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [r, [t, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [t, [r, /_/g, "."]], [/(cobalt)\/([\w\.]+)/i], [t, [r, /master.|lts./, ""]]],
            cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", p]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [["architecture", "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [["architecture", "armhf"]], [/windows (ce|mobile); ppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [["architecture", /ower/, "", p]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [["architecture", p]]],
            device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [e, [n, "Samsung"], [i, a]], [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i], [e, [n, "Samsung"], [i, o]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [e, [n, "Apple"], [i, o]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [e, [n, "Apple"], [i, a]], [/(macintosh);/i], [e, [n, "Apple"]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [e, [n, "Sharp"], [i, o]], [/(?:honor)([-\w ]+)[;\)]/i], [e, [n, "Honor"], [i, o]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [e, [n, "Huawei"], [i, a]], [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [e, [n, "Huawei"], [i, o]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i], [[e, /_/g, " "], [n, "Xiaomi"], [i, o]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[e, /_/g, " "], [n, "Xiaomi"], [i, a]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [e, [n, "OPPO"], [i, o]], [/\b(opd2\d{3}a?) bui/i], [e, [n, "OPPO"], [i, a]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [e, [n, "Vivo"], [i, o]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [e, [n, "Realme"], [i, o]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [e, [n, "Motorola"], [i, o]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [e, [n, "Motorola"], [i, a]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [e, [n, "LG"], [i, a]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [e, [n, "LG"], [i, o]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [e, [n, "Lenovo"], [i, a]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[e, /_/g, " "], [n, "Nokia"], [i, o]], [/(pixel c)\b/i], [e, [n, "Google"], [i, a]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [e, [n, "Google"], [i, o]], [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [e, [n, "Sony"], [i, o]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[e, "Xperia Tablet"], [n, "Sony"], [i, a]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [e, [n, "OnePlus"], [i, o]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [e, [n, "Amazon"], [i, a]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[e, /(.+)/g, "Fire Phone $1"], [n, "Amazon"], [i, o]], [/(playbook);[-\w\),; ]+(rim)/i], [e, n, [i, a]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [e, [n, "BlackBerry"], [i, o]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [e, [n, "ASUS"], [i, a]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [e, [n, "ASUS"], [i, o]], [/(nexus 9)/i], [e, [n, "HTC"], [i, a]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [n, [e, /_/g, " "], [i, o]], [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i], [e, [n, "TCL"], [i, a]], [/(itel) ((\w+))/i], [[n, p], e, [i, f, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
            }]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [e, [n, "Acer"], [i, a]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [e, [n, "Meizu"], [i, o]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [e, [n, "Ulefone"], [i, o]], [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i], [e, [n, "Energizer"], [i, o]], [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i], [e, [n, "Cat"], [i, o]], [/((?:new )?andromax[\w- ]+)(?: bui|\))/i], [e, [n, "Smartfren"], [i, o]], [/droid.+; (a(?:015|06[35]|142p?))/i], [e, [n, "Nothing"], [i, o]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [n, e, [i, o]], [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [n, e, [i, a]], [/(surface duo)/i], [e, [n, "Microsoft"], [i, a]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [e, [n, "Fairphone"], [i, o]], [/(u304aa)/i], [e, [n, "AT&T"], [i, o]], [/\bsie-(\w*)/i], [e, [n, "Siemens"], [i, o]], [/\b(rct\w+) b/i], [e, [n, "RCA"], [i, a]], [/\b(venue[\d ]{2,7}) b/i], [e, [n, "Dell"], [i, a]], [/\b(q(?:mv|ta)\w+) b/i], [e, [n, "Verizon"], [i, a]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [e, [n, "Barnes & Noble"], [i, a]], [/\b(tm\d{3}\w+) b/i], [e, [n, "NuVision"], [i, a]], [/\b(k88) b/i], [e, [n, "ZTE"], [i, a]], [/\b(nx\d{3}j) b/i], [e, [n, "ZTE"], [i, o]], [/\b(gen\d{3}) b.+49h/i], [e, [n, "Swiss"], [i, o]], [/\b(zur\d{3}) b/i], [e, [n, "Swiss"], [i, a]], [/\b((zeki)?tb.*\b) b/i], [e, [n, "Zeki"], [i, a]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[n, "Dragon Touch"], e, [i, a]], [/\b(ns-?\w{0,9}) b/i], [e, [n, "Insignia"], [i, a]], [/\b((nxa|next)-?\w{0,9}) b/i], [e, [n, "NextBook"], [i, a]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[n, "Voice"], e, [i, o]], [/\b(lvtel\-)?(v1[12]) b/i], [[n, "LvTel"], e, [i, o]], [/\b(ph-1) /i], [e, [n, "Essential"], [i, o]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [e, [n, "Envizen"], [i, a]], [/\b(trio[-\w\. ]+) b/i], [e, [n, "MachSpeed"], [i, a]], [/\btu_(1491) b/i], [e, [n, "Rotor"], [i, a]], [/(shield[\w ]+) b/i], [e, [n, "Nvidia"], [i, a]], [/(sprint) (\w+)/i], [n, e, [i, o]], [/(kin\.[onetw]{3})/i], [[e, /\./g, " "], [n, "Microsoft"], [i, o]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [e, [n, "Zebra"], [i, a]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [e, [n, "Zebra"], [i, o]], [/smart-tv.+(samsung)/i], [n, [i, s]], [/hbbtv.+maple;(\d+)/i], [[e, /^/, "SmartTV"], [n, "Samsung"], [i, s]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[n, "LG"], [i, s]], [/(apple) ?tv/i], [n, [e, "Apple TV"], [i, s]], [/crkey/i], [[e, "Chromecast"], [n, "Google"], [i, s]], [/droid.+aft(\w+)( bui|\))/i], [e, [n, "Amazon"], [i, s]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [e, [n, "Sharp"], [i, s]], [/(bravia[\w ]+)( bui|\))/i], [e, [n, "Sony"], [i, s]], [/(mitv-\w{5}) bui/i], [e, [n, "Xiaomi"], [i, s]], [/Hbbtv.*(technisat) (.*);/i], [n, e, [i, s]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[n, l], [e, l], [i, s]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[i, s]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [n, e, [i, "console"]], [/droid.+; (shield) bui/i], [e, [n, "Nvidia"], [i, "console"]], [/(playstation [345portablevi]+)/i], [e, [n, "Sony"], [i, "console"]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [e, [n, "Microsoft"], [i, "console"]], [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i], [e, [n, "Samsung"], [i, "wearable"]], [/((pebble))app/i], [n, e, [i, "wearable"]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [e, [n, "Apple"], [i, "wearable"]], [/droid.+; (glass) \d/i], [e, [n, "Google"], [i, "wearable"]], [/droid.+; (wt63?0{2,3})\)/i], [e, [n, "Zebra"], [i, "wearable"]], [/droid.+; (glass) \d/i], [e, [n, "Google"], [i, "wearable"]], [/(pico) (4|neo3(?: link|pro)?)/i], [n, e, [i, "wearable"]], [/; (quest( \d| pro)?)/i], [e, [n, "Facebook"], [i, "wearable"]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [n, [i, "embedded"]], [/(aeobc)\b/i], [e, [n, "Amazon"], [i, "embedded"]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [e, [i, o]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [e, [i, a]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[i, a]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[i, o]], [/(android[-\w\. ]{0,9});.+buil/i], [e, [n, "Generic"]]],
            engine: [[/windows.+ edge\/([\w\.]+)/i], [r, [t, "EdgeHTML"]], [/(arkweb)\/([\w\.]+)/i], [t, r], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [r, [t, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [t, r], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [r, t]],
            os: [[/microsoft (windows) (vista|xp)/i], [t, r], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [t, [r, f, g]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[r, f, g], [t, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[r, /_/g, "."], [t, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[t, "Mac OS"], [r, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [r, t], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [t, r], [/\(bb(10);/i], [r, [t, "BlackBerry"]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [r, [t, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [r, [t, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [r, [t, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [r, [t, "watchOS"]], [/crkey\/([\d\.]+)/i], [r, [t, "Chromecast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[t, "Chromium OS"], r], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [t, r], [/(sunos) ?([\w\.\d]*)/i], [[t, "Solaris"], r], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [t, r]]
        }
          , h = function e(t, i) {
            if ("object" === fe(t) && (i = t,
            t = void 0),
            !(this instanceof e))
                return new e(t,i).getResult();
            var n = "undefined" !== ("undefined" == typeof window ? "undefined" : fe(window)) && window.navigator ? window.navigator : void 0
              , r = t || (n && n.userAgent ? n.userAgent : "")
              , s = n && n.userAgentData ? n.userAgentData : void 0
              , c = i ? function(e, t) {
                var i = {};
                for (var n in e)
                    t[n] && t[n].length % 2 == 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
                return i
            }(m, i) : m
              , u = n && n.userAgent == r;
            return this.getBrowser = function() {
                var e, t = {
                    name: void 0,
                    version: void 0
                };
                return d.call(t, r, c.browser),
                t.major = "string" === fe(e = t.version) ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0,
                u && n && n.brave && "function" == fe(n.brave.isBrave) && (t.name = "Brave"),
                t
            }
            ,
            this.getCPU = function() {
                var e = {
                    architecture: void 0
                };
                return d.call(e, r, c.cpu),
                e
            }
            ,
            this.getDevice = function() {
                var e = {
                    vendor: void 0,
                    model: void 0,
                    type: void 0
                };
                return d.call(e, r, c.device),
                u && !e.type && s && s.mobile && (e.type = o),
                u && "Macintosh" == e.model && n && "undefined" !== fe(n.standalone) && n.maxTouchPoints && n.maxTouchPoints > 2 && (e.model = "iPad",
                e.type = a),
                e
            }
            ,
            this.getEngine = function() {
                var e = {
                    name: void 0,
                    version: void 0
                };
                return d.call(e, r, c.engine),
                e
            }
            ,
            this.getOS = function() {
                var e = {
                    name: void 0,
                    version: void 0
                };
                return d.call(e, r, c.os),
                u && !e.name && s && s.platform && "Unknown" != s.platform && (e.name = s.platform.replace(/chrome os/i, "Chromium OS").replace(/macos/i, "Mac OS")),
                e
            }
            ,
            this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }
            ,
            this.getUA = function() {
                return r
            }
            ,
            this.setUA = function(e) {
                return r = "string" === fe(e) && e.length > 500 ? l(e, 500) : e,
                this
            }
            ,
            this.setUA(r),
            this
        };
        return h.VERSION = "1.0.40",
        h.BROWSER = c([t, r, "major"]),
        h.CPU = c(["architecture"]),
        h.DEVICE = c([e, n, i, "console", o, s, a, "wearable", "embedded"]),
        h.ENGINE = h.OS = c([t, r]),
        h
    }()
      , me = (i(5),
    i(6),
    new (function() {
        function e() {}
        return e.prototype.setABTestData = function(e) {
            this.abTestData = e
        }
        ,
        e.prototype.getABTestData = function() {
            return this.abTestData
        }
        ,
        e
    }()))
      , he = new (function() {
        function e() {}
        return e.prototype.getABTestRawData = function() {
            var e = [];
            for (var t in window.ZAB.experiment) {
                if (window.ZAB.experiment.hasOwnProperty(t))
                    if (2 === window.ZAB.experiment[t].heatmap) {
                        var i = window.ZAB.variation[t].key
                          , n = window.ZAB.returningForExp[t]
                          , r = {
                            a: window.ZAB.portal,
                            b: t,
                            c: i,
                            n: !n
                        };
                        e.push(r)
                    }
            }
            if (me.getABTestData()) {
                var o = me.getABTestData()
                  , a = {
                    a: window.ZAB.portal,
                    b: o.experimentKey,
                    c: o.variationKey,
                    n: o.isReturningVisitor
                };
                e.push(a)
            }
            return e
        }
        ,
        e.prototype.getABTestExperimentsData = function() {
            var e = [];
            if (window.ZAB && window.ZAB.zab)
                for (var t in window.ZAB.zab.generateUserAgentData(),
                window.ZAB.experiment)
                    if (window.ZAB.experiment.hasOwnProperty(t)) {
                        var i = window.ZAB.experiment[t]
                          , n = window.ZAB.variation[t].key
                          , r = i.variations[n]
                          , o = {
                            experiment_name: i.name,
                            variation_name: r.name,
                            visitor_id: window.ZAB.useragentrawdata.f
                        };
                        e.push(o)
                    }
            return e
        }
        ,
        e.prototype.getRunningABExperiments = function() {
            var e = [];
            if (window.ZAB && window.ZAB.zab)
                for (var t in window.ZAB.zab.generateUserAgentData(),
                window.ZAB.experiment)
                    if (window.ZAB.experiment.hasOwnProperty(t)) {
                        var i = window.ZAB.experiment[t];
                        if (1 === i.type && 2 === i.status && window.ZAB.variation && window.ZAB.variation[t]) {
                            var n = window.ZAB.variation[t].key
                              , r = i.variations[n]
                              , o = {
                                experiment_name: i.name,
                                variation_name: r.name,
                                visitor_id: window.ZAB.useragentrawdata.f
                            };
                            e.push(o)
                        }
                    }
            return e
        }
        ,
        e.prototype.getRunningSplitExperiments = function() {
            var e = [];
            if (window.ZAB && window.ZAB.zab)
                for (var t in window.ZAB.zab.generateUserAgentData(),
                window.ZAB.experiment)
                    if (window.ZAB.experiment.hasOwnProperty(t)) {
                        var i = window.ZAB.experiment[t];
                        if (2 === i.type && 2 === i.status && window.ZAB.variation && window.ZAB.variation[t]) {
                            var n = window.ZAB.variation[t].key
                              , r = i.variations[n]
                              , o = {
                                experiment_name: i.name,
                                variation_name: r.name,
                                visitor_id: window.ZAB.useragentrawdata.f
                            };
                            e.push(o)
                        }
                    }
            return e
        }
        ,
        e.prototype.getBucketedAB = function() {
            var e = [];
            if (window.ZAB && window.ZAB.zab) {
                window.ZAB.zab.generateUserAgentData();
                var t = window.ZAB.zab.getBucketInfo();
                if (window.ZAB.zab.exists(t)) {
                    var i = window.ZAB.data;
                    for (var n in t)
                        if (i.experiment.hasOwnProperty(n)) {
                            var r = i.experiment[n]
                              , o = t[n];
                            if (r.variations.hasOwnProperty(o)) {
                                var a = r.variations[o]
                                  , s = {
                                    experiment_name: r.name,
                                    variation_name: a.name,
                                    visitor_id: window.ZAB.useragentrawdata.f
                                };
                                e.push(s)
                            }
                        }
                }
            }
            return e
        }
        ,
        e.prototype.getBucketedSplit = function() {
            var e = [];
            if (window.ZAB && window.ZAB.zab) {
                window.ZAB.zab.generateUserAgentData();
                var t = window.ZAB.zab.getBucketInfo();
                if (window.ZAB.zab.exists(t)) {
                    var i = window.ZAB.data;
                    for (var n in t)
                        if (i.experiment.hasOwnProperty(n)) {
                            var r = i.experiment[n];
                            if (2 == r.type) {
                                var o = t[n];
                                if (r.variations.hasOwnProperty(o)) {
                                    var a = r.variations[o]
                                      , s = {
                                        experiment_name: r.name,
                                        variation_name: a.name,
                                        visitor_id: window.ZAB.useragentrawdata.f
                                    };
                                    e.push(s)
                                }
                            }
                        }
                }
            }
            return e
        }
        ,
        e
    }())
      , ve = new (function() {
        function e() {}
        return e.prototype.makeMHAPICall = function(e, t, i) {
            var n = this.generateRequestBody(e)
              , r = h.getMHServerURL() + "hub/api/v1/popup/" + t + "/execute";
            this.getDataFromServer(r, n, function(e) {
                if (e) {
                    var n = JSON.parse(e);
                    if (n.popup) {
                        var r = n.popup;
                        if (r && r.result) {
                            var o = r.result;
                            i(o, t)
                        }
                    }
                }
            })
        }
        ,
        e.prototype.getDataFromServer = function(e, t, i) {
            var n = new XMLHttpRequest;
            n.open("PUT", e, !0);
            try {
                if (n)
                    return n.setRequestHeader("Content-Type", "text/plain"),
                    n.onreadystatechange = function() {
                        4 == this.readyState && 200 == this.status && i(n.response)
                    }
                    ,
                    void n.send(JSON.stringify(t))
            } catch (e) {}
        }
        ,
        e.prototype.generateRequestBody = function(e) {
            window.ZAB.zab.generateUserAgentData();
            var t = JSON.parse(JSON.stringify(window.ZAB.useragentrawdata));
            t.a = window.ZAB.data.portal_name;
            var i = "new";
            return window.ZAB.returning && (i = "returning"),
            t.visitor_type = i,
            t.js_variable = this.generateJSVariableJSON(),
            t.criteria = e,
            t
        }
        ,
        e.prototype.generateJSVariableJSON = function() {}
        ,
        e
    }())
      , we = new (function() {
        function e() {
            this.mhExperimentsUnderEvaluation = [],
            this.experimentMhResponseMapping = {}
        }
        return e.prototype.setServerURLs = function(e) {
            this.serverURLs = e
        }
        ,
        e.prototype.getServerURLs = function() {
            return this.serverURLs
        }
        ,
        e.prototype.setZabCookies = function(e) {
            this.zabCookies = e
        }
        ,
        e.prototype.getZabCookies = function() {
            return this.zabCookies
        }
        ,
        e.prototype.startPopupExperiment = function(e) {
            var t = e.serverURLs
              , i = e.zabCookies;
            if (!window.ZAB.zab.getZABQueryKeyValue(window.location.href, "ps_editor")) {
                this.mhExperimentsUnderEvaluation = [],
                this.experimentMhResponseMapping = {},
                we.setServerURLs(t),
                we.setZabCookies(i);
                var n = this.findPopupExperiment();
                window.ZAB.zab.exists(n) && (window.ZAB.popup_experiment = n,
                this.setPopupVisitorInfo(n.key, this.getZabCookies()),
                this.loadPopupScript(this.getServerURLs()))
            }
        }
        ,
        e.prototype.handlePopupInitiationBasedOnCustomEvent = function(e) {
            var t = window.ZAB.popup_experiment;
            if (t && t.trigger_value === e) {
                var i = new CustomEvent("popupCustomEventTrigger");
                document.dispatchEvent(i)
            }
        }
        ,
        e.prototype.mhPopupCriteriaCallbackFn = function(e, t) {
            try {
                this.doesCallbackBelongToFirstItemInQueue(t) ? (this.mhPopupExperimentStart(e, t),
                this.mhExperimentsUnderEvaluation.shift(),
                this.handleNextItemAsPerQueueOrder(t)) : this.experimentMhResponseMapping[t] = e
            } catch (e) {}
        }
        ,
        e.prototype.mhPopupExperimentStart = function(e, t) {
            window.ZAB.zab.exists(window.ZAB.popup_experiment) || e && (window.ZAB.popup_experiment = window.ZAB.data.experiment[t],
            this.setPopupVisitorInfo(t, this.getZabCookies()),
            Q.kickStart(),
            this.loadPopupScript(this.getServerURLs()))
        }
        ,
        e.prototype.handleNextItemAsPerQueueOrder = function(e) {
            if (this.mhExperimentsUnderEvaluation.length > 0 && this.experimentMhResponseMapping.hasOwnProperty(this.mhExperimentsUnderEvaluation[0])) {
                var t = this.experimentMhResponseMapping[this.mhExperimentsUnderEvaluation[0]];
                this.mhPopupCriteriaCallbackFn(t, e)
            }
        }
        ,
        e.prototype.doesCallbackBelongToFirstItemInQueue = function(e) {
            return this.mhExperimentsUnderEvaluation.length > 0 && this.mhExperimentsUnderEvaluation[0] == e
        }
        ,
        e.prototype.findPopupExperiment = function() {
            var e = window.ZAB.zab
              , t = window.ZAB.data;
            if (e.generateUserAgentData(),
            t && t.experiment) {
                var i = e.getPopupBucketInfo();
                if (e.exists(i)) {
                    var n = this.computeAndFindPopupBasedOnMeta(i);
                    if (e.exists(n))
                        return n
                }
                for (var r in t.experiment) {
                    n = this.computeAndFindPopupBasedOnMeta(r);
                    if (e.exists(n))
                        return n
                }
                return {}
            }
        }
        ,
        e.prototype.computeAndFindPopupBasedOnMeta = function(e) {
            var t = window.ZAB.zab
              , i = window.ZAB.data;
            if (i.experiment.hasOwnProperty(e) && i.experiment[e] && 11 === i.experiment[e].type && 2 === i.experiment[e].status && t.isExperimentURLMatches(i.experiment[e])) {
                var n = i.experiment[e].special_filter ? JSON.parse(i.experiment[e].special_filter) : null;
                if (i.experiment[e].hasOwnProperty("is_mh_criteria") && i.experiment[e].is_mh_criteria) {
                    if (i.experiment[e].audience && i.experiment[e].audience.length && t.isAudienceMatching(i.experiment[e].audience, null, n)) {
                        var r = i.experiment[e].audience
                          , o = i.audience[r].audience_condition;
                        this.mhExperimentsUnderEvaluation.push(e),
                        ve.makeMHAPICall(o, e, this.mhPopupCriteriaCallbackFn.bind(this))
                    }
                } else if (i.experiment[e].audience && i.experiment[e].audience.length && t.isAudienceMatching(i.experiment[e].audience, null, n) && t.isAudienceMatching(i.experiment[e].audience, null))
                    return i.experiment[e]
            }
        }
        ,
        e.prototype.loadPopupScript = function(e) {
            if (!window.ZAB.popup_script_loaded) {
                var t = document.createElement("script");
                (t = E.addNonce(t)).async = !0,
                t.src = e.popup_script_url;
                var i = document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(t, i),
                t.onload = function() {
                    window.ZAB.popup_script_loaded = !0
                }
            }
        }
        ,
        e.prototype.setPopupVisitorInfo = function(e, t) {
            window.ZAB.cookieHandler.setCookie(t.popupBucket, e, 1)
        }
        ,
        e
    }())
      , Ae = new (function() {
        function e() {}
        return e.prototype.loadReportValidityPolyfill = function() {
            HTMLFormElement.prototype.reportValidity || (HTMLFormElement.prototype.reportValidity = function() {
                if (this.checkValidity())
                    return !0;
                var e = document.createElement("button");
                return this.appendChild(e),
                e.click(),
                this.removeChild(e),
                !1
            }
            ),
            HTMLInputElement.prototype.reportValidity || (HTMLInputElement.prototype.reportValidity = function() {
                if (this.checkValidity())
                    return !0;
                var e;
                this.form || ((e = document.createElement("form")).style.display = "inline",
                this.before(e),
                e.append(this));
                var t = Array.from(this.form.elements).filter(function(e) {
                    return e !== this && !!e.checkValidity && !e.disabled
                }, this);
                return t.forEach(function(e) {
                    e.disabled = !0
                }),
                this.form.reportValidity(),
                t.forEach(function(e) {
                    e.disabled = !1
                }),
                e && (e.before(this),
                e.remove()),
                this.focus(),
                this.selectionStart = 0,
                !1
            }
            ),
            HTMLTextAreaElement.prototype.reportValidity || (HTMLTextAreaElement.prototype.reportValidity = function() {
                if (this.checkValidity())
                    return !0;
                var e;
                this.form || ((e = document.createElement("form")).style.display = "inline",
                this.before(e),
                e.append(this));
                var t = Array.from(this.form.elements).filter(function(e) {
                    return e !== this && !!e.checkValidity && !e.disabled
                }, this);
                return t.forEach(function(e) {
                    e.disabled = !0
                }),
                this.form.reportValidity(),
                t.forEach(function(e) {
                    e.disabled = !1
                }),
                e && (e.before(this),
                e.remove()),
                this.focus(),
                this.selectionStart = 0,
                !1
            }
            )
        }
        ,
        e
    }())
      , Ee = new (function() {
        function e() {}
        return e.prototype.performCustomEventPolyfill = function() {
            if ("function" == typeof window.CustomEvent)
                return !1;
            var e = function(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var i = document.createEvent("CustomEvent");
                return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                i
            };
            e.prototype = window.Event.prototype,
            window.CustomEvent = e
        }
        ,
        e
    }())
      , ye = new (function() {
        function e() {}
        return e.prototype.loadPolyfills = function() {
            Ae.loadReportValidityPolyfill(),
            Ee.performCustomEventPolyfill()
        }
        ,
        e
    }())
      , Se = new (function() {
        function e() {}
        return e.prototype.handlePollInitiationBasedOnCustomEvent = function(e) {
            var t = window.ZAB.pollsandfeedbackexperiment;
            if (t && t.trigger_value === e) {
                var i = new CustomEvent("pollCustomEventTrigger");
                document.dispatchEvent(i)
            }
        }
        ,
        e
    }())
      , _e = function() {
        return (_e = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++)
                for (var r in t = arguments[i])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ).apply(this, arguments)
    }
      , Te = new (function() {
        function e() {
            this.activitiesArray = []
        }
        return e.prototype.handleActivityObject = function(e, t) {
            var i = this.activitiesArray.find(function(t) {
                return t.ev === e
            });
            i ? i.ea = this.shallowMergeObjects(i.ea, t) : this.activitiesArray.push({
                ev: e,
                ea: t
            })
        }
        ,
        e.prototype.getActivityObject = function() {
            return this.activitiesArray
        }
        ,
        e.prototype.shallowMergeObjects = function(e, t) {
            return _e({}, e, t)
        }
        ,
        e
    }())
      , be = new (function() {
        function e() {}
        return e.prototype.getAllABExperiments = function() {
            return he.getBucketedAB()
        }
        ,
        e.prototype.getRunningABExperiments = function() {
            return he.getRunningABExperiments()
        }
        ,
        e.prototype.getRunningSplitExperiments = function() {
            return he.getRunningSplitExperiments()
        }
        ,
        e.prototype.getAllSplitExperiments = function() {
            return he.getBucketedSplit()
        }
        ,
        e.prototype.registerCustomAntiFOOC = function(e, t) {
            A.initialize(e, t)
        }
        ,
        e.prototype.getVisitorIdAndVisitId = function() {
            var e, t, i;
            if (window.ZAB && window.ZAB.zab) {
                window.ZAB.zab.generateUserAgentData();
                var n = window.ZAB.useragentrawdata.f
                  , r = window.ZAB.useragentrawdata.d;
                return (e = {})[a.MESSAGE] = ((t = {})[a.FULL_VISITOR_ID] = n,
                t[a.FULL_VISIT_ID] = r,
                t),
                e
            }
            return (i = {})[a.MESSAGE] = a.SCRIPT_NOT_INITIALIZED,
            i
        }
        ,
        e
    }())
      , Ie = (i(7),
    new (function() {
        function e() {}
        return e.prototype.sendMHIdentiferInfo = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var i = {}
              , n = {};
            n.f = window.ZAB.zab.getUserId(),
            n.id = e[0],
            n.a = window.ZAB.data.portal_name,
            n.p = window.ZAB.data.project_key,
            n.is_ma = !0,
            n.n = !window.ZAB.returning,
            i.ird = n,
            i.urd = window.ZAB.useragentrawdata,
            window.ZAB.zab.sendDataToServer(10, i)
        }
        ,
        e
    }()))
      , xe = new (function() {
        function e() {}
        return e.prototype.getABTestRawData = function() {
            return he.getABTestRawData()
        }
        ,
        e.prototype.logError = function(e, t) {
            return w.error(e, t)
        }
        ,
        e.prototype.logInfo = function(e) {
            return w.info(e)
        }
        ,
        e.prototype.getCurrentUrl = function() {
            return window.ZAB.current_url
        }
        ,
        e.prototype.getPopupExperiment = function() {
            return window.ZAB.popup_experiment
        }
        ,
        e.prototype.getCookieValue = function(e) {
            return window.ZAB.cookieHandler.getCookieValue(e)
        }
        ,
        e.prototype.checkCookieExists = function(e) {
            return window.ZAB.cookieHandler.checkCookieExists(e)
        }
        ,
        e.prototype.getPortalName = function() {
            return window.ZAB.data.portal_name
        }
        ,
        e.prototype.getVisitorReturning = function() {
            return window.ZAB.returning
        }
        ,
        e.prototype.getPagesenseObject = function() {
            return window.$pagesense
        }
        ,
        e.prototype.getServerUrl = function() {
            return window.ZAB.zab.getServerUrl()
        }
        ,
        e.prototype.getDataObj = function() {
            return window.ZAB.zab.getDataObj()
        }
        ,
        e.prototype.getDataFromServer = function(e, t) {
            return window.ZAB.zab.getDataFromServer(e, t)
        }
        ,
        e.prototype.sendDataToServer = function(e, t) {
            return window.ZAB.zab.sendDataToServer(e, t)
        }
        ,
        e.prototype.getUserAgentRawData = function() {
            return window.ZAB.zab.generateUserAgentData()
        }
        ,
        e.prototype.parseUrl = function(e) {
            return window.ZAB.zab.parseURL(e)
        }
        ,
        e.prototype.getPushStylesUrl = function() {
            return C.pushstylesurl
        }
        ,
        e.prototype.getPageActivityData = function() {
            return Te.getActivityObject()
        }
        ,
        e.prototype.getWebfontOrigin = function() {
            return h.getWebfontOrigin()
        }
        ,
        e.prototype.getZohoCdnUrl = function() {
            return h.getZohoCdnUrl()
        }
        ,
        e.prototype.getZohoWebAppCdnUrl = function() {
            return h.getZohoWebAppCdnUrl()
        }
        ,
        e.prototype.getSamesiteSecureString = function() {
            return N.getSamesiteSecureString()
        }
        ,
        e.prototype.setABTestData = function(e) {
            me.setABTestData(e)
        }
        ,
        e.prototype.getABTestData = function() {
            return me.getABTestData()
        }
        ,
        e.prototype.setPersonalizationData = function(e) {
            y.setPersonalizationData(e)
        }
        ,
        e.prototype.getPersonalizationData = function() {
            return y.getPersonalizationData()
        }
        ,
        e.prototype.checkIfACustomTriggerIsAlreadyAccomplished = function(e) {
            return W.checkIfTriggerIsAlreadyAccomplished(e)
        }
        ,
        e.prototype.setMHIdentifierInfo = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            Ie.sendMHIdentiferInfo.apply(Ie, e)
        }
        ,
        e.prototype.setCookie = function(e, t, i) {
            return L.setCookie(e, t, i)
        }
        ,
        e.prototype.deleteCookie = function(e) {
            return L.deleteCookie(e)
        }
        ,
        e.prototype.setDisableCustomScriptExecution = function(e) {
            s.setDisableCustomScriptExecution(e)
        }
        ,
        e.prototype.getDisableCustomScriptExecution = function() {
            return s.getDisableCustomScriptExecution()
        }
        ,
        e
    }())
      , Oe = new (function() {
        function e() {}
        return e.prototype.api = function(e, t) {
            try {
                return xe[e].apply(this, t)
            } catch (e) {
                w.error(e, {
                    ctx: "Private API"
                })
            }
        }
        ,
        e
    }())
      , ke = {
        ACCEPT: 2,
        DENY: 3
    }
      , Ce = {
        NO_NOTIFICATION: 1,
        NOTIFY_WITHOUT_OPT_OUT: 2,
        NOTIFY_WITH_OPT_OUT: 3
    }
      , Re = {
        "--zcb-primary-color": "#2b8a16",
        "--zcb-secondary-color": "#757575",
        "--zcb-border-color": "#757575",
        "--zcb-text-color": "#4b4b4a",
        "--zcb-button-primary-hover-color": "#2b8a16",
        "--zcb-button-secondary-hover-color": "#757575",
        "--zcb-button-secondary-hover-border-color": "#757575",
        "--zcb-button-secondary-text-color": "#fff",
        "--zcb-table-header-color": "#eef4f8",
        "--zcb-font-family": "Roboto,sans-serif",
        "--zcb-cookie-bar-shadow": "0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)",
        "--zcb-popup-backdrop-color": "rgba(0,0,0,.1)",
        "--zcb-popup-shadow": "0 0 5px #eee",
        "--zcb-light-background-color": "#f5f5f5"
    }
      , Be = {
        "--zcb-primary-color": "#0f9f4f",
        "--zcb-secondary-color": "#757575",
        "--zcb-border-color": "#757575",
        "--zcb-text-color": "#fff",
        "--zcb-button-primary-hover-color": "#0f9f4f",
        "--zcb-button-secondary-hover-color": "#757575",
        "--zcb-button-secondary-hover-border-color": "#757575",
        "--zcb-button-secondary-text-color": "#fff",
        "--zcb-table-header-color": "#eef4f8",
        "--zcb-font-family": "Roboto,sans-serif",
        "--zcb-cookie-bar-shadow": "0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)",
        "--zcb-popup-backdrop-color": "rgba(0,0,0,.1)",
        "--zcb-popup-shadow": "0 0 5px #eee",
        "--zcb-light-background-color": "rgba(0,0,0,.75)"
    }
      , Ne = 1
      , Le = 2
      , Ue = 2
      , De = 31536e6
      , Ze = h.getTrackingDataObject()
      , Pe = new (function() {
        function e() {}
        return e.prototype.checkPrivacyConsent = function() {
            var e = Ze.privacy_value;
            if (E.isZohoCookieBarAvailable())
                window.ZAB.privacyscript_loaded = !0,
                E.isTrackingDisabled() || this.addListener(Le);
            else {
                var t = Ze.project_key;
                if (L.checkCookieExists("zpc" + t)) {
                    var i = L.getCookieValue("zpc" + t);
                    i && 3 !== Number(i) && window.ZAB.startTracking()
                } else
                    e === Ce.NO_NOTIFICATION ? window.ZAB.startTracking() : e === Ce.NOTIFY_WITHOUT_OPT_OUT ? (this.loadPrivacyScript(e),
                    window.ZAB.startTracking()) : e === Ce.NOTIFY_WITH_OPT_OUT && this.loadPrivacyScript(e)
            }
        }
        ,
        e.prototype.loadPrivacyScript = function(e) {
            var t = this
              , i = E.isLoadedInsideIframe() && E.isZohoFormsDomain();
            if (!window.ZAB.privacyscript_loaded && !i) {
                var n = document.getElementsByTagName("head")[0]
                  , r = document.createElement("script");
                r.type = "text/javascript",
                r.src = "https://static.zohocdn.com/zcookiebar/v1.3.1/zcookiebar.js",
                n.appendChild(r),
                r.addEventListener("load", this.handleScriptLoadEvent.bind(this, e)),
                this.addListener(Ne),
                r.onerror = function() {
                    window.removeEventListener("acceptConsent", t.gotItClickListener),
                    window.removeEventListener("declineConsent", t.donotTrackClickListener)
                }
            }
        }
        ,
        e.prototype.handleScriptLoadEvent = function(e) {
            window.ZAB.privacyscript_loaded = !0;
            var t = this.getBannerData(e);
            E.isZohoCookieBarAvailable() && window._ZohoCookieBar.set_config(t)
        }
        ,
        e.prototype.getBannerData = function(e) {
            var t = Ze.privacy_banner_content
              , i = {
                cp_text: t.msg + " ${policy_message}",
                policy_msg: "${policy}",
                accept_btn_text: t.successBtnText,
                position: Ue
            };
            return e === Ce.NOTIFY_WITH_OPT_OUT && (i.decline_btn_text = t.failureBtnText,
            i.f_decline_btn = !0,
            i.after_decline_msg = !1),
            "light" === t.theme && (i.zc_theme = Re),
            "dark" === t.theme && (i.zc_theme = Be),
            t.linkEnabled ? (i.cp_url_label = t.linkText,
            i.cp_url = t.linkAddress) : i.f_privacy_btn = !1,
            i
        }
        ,
        e.prototype.gotItClickListener = function() {
            var e = (new Date).getTime() + De;
            window.ZAB.cookieHandlerUtil.setCookie("zpc" + window.ZAB.data.project_key, ke.ACCEPT, e),
            window.ZAB.data.privacy_value === Ce.NOTIFY_WITH_OPT_OUT && window.ZAB.startTracking()
        }
        ,
        e.prototype.donotTrackClickListener = function() {
            var e = (new Date).getTime() + De;
            window.ZAB.cookieHandlerUtil.setCookie("zpc" + window.ZAB.data.project_key, ke.DENY, e),
            window.$pagesense.$(window).trigger("onclickDoNotTrack")
        }
        ,
        e.prototype.gotItClickListenerForIntegratedProject = function() {
            window.ZAB.startTracking()
        }
        ,
        e.prototype.donotTrackClickListenerForIntegratedProject = function() {
            window.$pagesense.$(window).trigger("onclickDoNotTrack")
        }
        ,
        e.prototype.addListener = function(e) {
            e === Ne ? (window.removeEventListener("acceptConsent", this.gotItClickListener),
            window.addEventListener("acceptConsent", this.gotItClickListener),
            window.removeEventListener("declineConsent", this.donotTrackClickListener),
            window.addEventListener("declineConsent", this.donotTrackClickListener)) : e === Le && (window.removeEventListener("acceptConsent", this.gotItClickListenerForIntegratedProject),
            window.addEventListener("acceptConsent", this.gotItClickListenerForIntegratedProject),
            window.removeEventListener("declineConsent", this.donotTrackClickListenerForIntegratedProject),
            window.addEventListener("declineConsent", this.donotTrackClickListenerForIntegratedProject))
        }
        ,
        e
    }())
      , Me = new (function() {
        function e() {}
        return e.prototype.verifyScript = function(e) {
            var t = this.checkIfValidSnippetPresent(e.script, e.alt_script_url);
            t ? this.buildVerifySnippetStatusElement(!0, e.success) : this.buildVerifySnippetStatusElement(!1, e.failure),
            window.opener.postMessage({
                success: t
            }, "*")
        }
        ,
        e.prototype.checkIfValidSnippetPresent = function(e, t) {
            for (var i = !1, n = document.getElementsByTagName("script"), r = 0; r < n.length; r++) {
                var o = n[r].src;
                if (o === e || o === t) {
                    i = !0;
                    break
                }
            }
            return i
        }
        ,
        e.prototype.buildVerifySnippetStatusElement = function(e, t) {
            this.removeVerifySnippetStatusElement();
            var i = this.evaluateVerifySnippetElementHtml(e)
              , n = document.createElement("div");
            n.setAttribute("id", "z-ps-wrapper"),
            n.innerHTML = i,
            n.querySelector("#zps_successmsg").innerText = t,
            document.body.append(n),
            this.attachListeneresForVerifySnippetStatusElement(),
            setTimeout(function() {
                document.getElementById("z-ps-notification").style.transform = "scale(1)"
            }, 100)
        }
        ,
        e.prototype.removeVerifySnippetStatusElement = function() {
            document.getElementById("z-ps-wrapper") && document.body.removeChild(document.getElementById("z-ps-wrapper"))
        }
        ,
        e.prototype.evaluateVerifySnippetElementHtml = function(e) {
            return '\n            <div id="z-ps-notification" style="position: fixed; z-index: 2147483647; left: 1em; bottom: 1em; transform: scale(0.5); transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 2.55); background: rgba(0, 0, 0, 0.7); color: rgb(255, 255, 255); width: auto; max-width:700px; height:75px;">\n                <div style="position: absolute; right: 5px; font-size: 14px; color: white; cursor: pointer; z-index: 2;" id="z-ps-close-notification">x</div>\n                    <div style="position: relative; color: rgb(255, 255, 255); font-weight: 300; font-size: 16px; text-align: center; z-index: 1;display: flex;align-items: center;justify-content: space-around; height:100%;">\n            \n                    \x3c!--success--\x3e\n                    <div style="display:' + (e ? "flex" : "none") + ';flex :none; width:75px; background:green; align-self:center;height:100%;align-items:center;">\n                        <svg viewBox="0 0 24 24" id="check" xmlns="http"+"://www.w3.org/2000/svg" style="height:20px;width:20px;margin:auto;stroke:#fff;fill:#fff;">\n                            <path d="M8.8 19.6L1.2 12c-.3-.3-.3-.8 0-1.1l1-1c.3-.3.8-.3 1 0L9 15.7c.1.2.5.2.6 0L20.9 4.4c.2-.3.7-.3 1 0l1 1c.3.3.3.7 0 1L9.8 19.6c-.2.3-.7.3-1 0z"></path>\n                        </svg>\n                    </div>\n                 \n                    \x3c!--Valid snippet not present--\x3e\n                    <div style="display:' + (e ? "none" : "flex") + ';flex :none; width:75px; background:red; align-self:center;height:100%;align-items:center;">\n                        <div style="font-size:20px;transform:scale(1.5,1);margin:auto;">x</div>\n                    </div>\n                    <div style="flex:1 1 auto; padding:10px; text-align:left;">\n                        <span id="zps_successmsg">\n                    </div>\n\n                </div>\n            </div>\n        '
        }
        ,
        e.prototype.attachListeneresForVerifySnippetStatusElement = function() {
            var e = this
              , t = document.getElementById("z-ps-close-notification");
            z.removeEventListener(t, "click"),
            z.addEventListener(t, "click", function() {
                e.removeVerifySnippetStatusElement()
            })
        }
        ,
        e
    }())
      , ze = 3
      , Fe = new (function() {
        function e() {
            this.dynamicVariationURL = null
        }
        return e.prototype.getDynamicVariationURL = function() {
            return this.dynamicVariationURL
        }
        ,
        e.prototype.isIframeRequiredForVariation = function(e, t) {
            if (e.is_original)
                return !1;
            var i;
            if (this.isDynamicMatchingConfigured(e.url)) {
                var n = this.evaluateRedirectParamsForVariationUrl(t, e.url);
                n = this.evaluateDynamicPatternMatchingForVariationUrl(t, n),
                this.dynamicVariationURL = n,
                i = E.parseURL(n)
            } else
                i = E.parseURL(e.url);
            var r = E.parseURL(window.ZAB.current_url).domain.replace(/^www\./, "")
              , o = i.domain.replace(/^www\./, "");
            return !(o.indexOf(r) > -1 || r.indexOf(o) > -1)
        }
        ,
        e.prototype.redirectToSplitVaritaion = function(e, t, i) {
            if (E.exists(t) && !t.is_original && E.exists(t.url))
                if (this.isCurrentUrlAndVariationUrlSame(t.url))
                    i && i();
                else {
                    var n = this.evaluateRedirectParamsForVariationUrl(e, t.url);
                    this.isDynamicMatchingConfigured(n) && (n = this.dynamicVariationURL),
                    window.ZAB.experiment = {},
                    window.ZAB.variation = {},
                    window.ZAB.redirectingURL = !0,
                    w.info({
                        msg: "Redirect To Split Varitaion : " + (t && t.key) + " Experiment : " + e + " RedirectUrl : " + n
                    }),
                    window.location.href = n
                }
            else
                i && i()
        }
        ,
        e.prototype.isCurrentUrlAndVariationUrlSame = function(e) {
            var t = window.ZAB.current_url
              , i = {
                match_type: 2,
                value: e
            };
            return !!window.ZAB.zab.isURLSMatch(t, i)
        }
        ,
        e.prototype.evaluateRedirectParamsForVariationUrl = function(e, t) {
            if (this.isRedirectParamsEnabled(e)) {
                var i = window.location.search
                  , n = E.parseURL(t).query;
                E.exists(n) ? (i = i.substring(1),
                E.exists(i) && (t = t + "&" + i)) : t += i
            }
            return t
        }
        ,
        e.prototype.isRedirectParamsEnabled = function(e) {
            return window.ZAB.experiment[e].redirect_params
        }
        ,
        e.prototype.isDynamicMatchingConfigured = function(e) {
            return e.indexOf("{") > -1
        }
        ,
        e.prototype.evaluateDynamicPatternMatchingForVariationUrl = function(e, t) {
            var i = t;
            if (this.isDynamicMatchingConfigured(t))
                for (var n = this.evaluateMatchingSubGroupsOfOriginalUrl(e), r = /{[^}]+}/gm, o = void 0; null !== (o = r.exec(t)); )
                    o.index === r.lastIndex && r.lastIndex++,
                    o.forEach(function(e, t) {
                        var r = e.substring(e.lastIndexOf("e") + 1, e.lastIndexOf("}"));
                        e += "}",
                        i = i.replace(e, n[r])
                    });
            return i
        }
        ,
        e.prototype.getVariationUrlForDynamicPattern = function(e, t) {
            var i = t;
            if (this.isDynamicMatchingConfigured(t))
                for (var n = this.evaluateMatchingSubGroupsOfVariationUrl(e), r = /{[^}]+}/gm, o = void 0; null !== (o = r.exec(t)); )
                    o.index === r.lastIndex && r.lastIndex++,
                    o.forEach(function(e, t) {
                        var r = e.substring(e.lastIndexOf("e") + 1, e.lastIndexOf("}"));
                        e += "}",
                        i = i.replace(e, n[r])
                    });
            return i
        }
        ,
        e.prototype.evaluateMatchingSubGroupsOfOriginalUrl = function(e) {
            var t = window.ZAB.zab.isExperimentURLMatches(window.ZAB.experiment[e])
              , i = this.cleanUpOriginalPattern(t.value);
            i = i.replace(new RegExp("\\*","g"), "(.*)");
            var n = new RegExp(i,"i");
            return window.ZAB.current_url.match(n)
        }
        ,
        e.prototype.evaluateMatchingSubGroupsOfVariationUrl = function(e) {
            var t = window.ZAB.data.experiment[e].variations
              , i = window.ZAB.current_url;
            for (var n in t)
                if (t.hasOwnProperty(n)) {
                    var r = t[n];
                    if (!1 === r.is_original) {
                        var o = r.url
                          , a = {
                            value: o = o.replace(/\{\{variable\d+\}\}/g, "*"),
                            match_type: ze
                        };
                        if (window.ZAB.zab.isURLSMatch(i, a)) {
                            var s = this.cleanUpOriginalPattern(o);
                            s = s.replace(new RegExp("\\*","g"), "(.*)");
                            var c = new RegExp(s,"i");
                            return window.ZAB.current_url.match(c)
                        }
                    }
                }
        }
        ,
        e.prototype.cleanUpOriginalPattern = function(e) {
            return e = e.replace(/([.+?^=!:${}()|\[\]\/\\])/g, "\\$1"),
            E.checkStartsWith(e, "*") || (e = "^" + e),
            E.checkEndsWith(e, "*") || (e += "$"),
            e
        }
        ,
        e
    }())
      , Ve = new (function() {
        function e() {
            this.conditionalActivationExperimentsToEvaluate = []
        }
        return e.prototype.getConditionalActivationExperimentToEvaluate = function() {
            return this.conditionalActivationExperimentsToEvaluate
        }
        ,
        e.prototype.setConditionalActivationExperimentToEvaluate = function(e) {
            this.conditionalActivationExperimentsToEvaluate = e
        }
        ,
        e.prototype.addExperimentToEvaluateArray = function(e) {
            this.conditionalActivationExperimentsToEvaluate.push(e)
        }
        ,
        e.prototype.checkExpConditionSatisfied = function(e) {
            var t = !1;
            try {
                t = new Function("return " + e.activation_condition)()
            } catch (e) {}
            return t
        }
        ,
        e.prototype.cleanUpPageScreen = function() {
            if (A.skipDefaultAntiFOOC)
                E.exists(A.revertCustomAntiFOOC) && A.revertCustomAntiFOOC();
            else {
                var e = document.getElementById("zps-page-screen");
                e && e.remove()
            }
        }
        ,
        e.prototype.applyCssChanges = function(e) {
            var t = document.createElement("style");
            t.innerText = e,
            document.head.appendChild(t)
        }
        ,
        e
    }())
      , Ge = new (function() {
        function e() {}
        return e.prototype.shallSendElementClickGoal = function(e, t) {
            try {
                for (var i = this.getConfiguredSelectorsFromGoalObject(t), n = 0, r = i; n < r.length; n++) {
                    var o = r[n];
                    if (this.isElementClicked(o, e))
                        return !0
                }
            } catch (e) {}
            return !1
        }
        ,
        e.prototype.getConfiguredSelectorsFromGoalObject = function(e) {
            return e.element_css_selector.split(",")
        }
        ,
        e.prototype.isElementClicked = function(e, t) {
            for (var i = 0, n = document.querySelectorAll(e); i < n.length; i++) {
                var r = n[i];
                if (t === r || this.isDescendantOf(r, t))
                    return !0
            }
        }
        ,
        e.prototype.isDescendantOf = function(e, t) {
            for (var i = t.parentNode; null != i; ) {
                if (i === e)
                    return !0;
                i = i.parentNode
            }
            return !1
        }
        ,
        e
    }())
      , je = new (function() {
        function e() {
            this.isConsoleLoggingEnabled = !1
        }
        return e.prototype.setIsConsoleLoggingEnabled = function(e) {
            this.isConsoleLoggingEnabled = e
        }
        ,
        e.prototype.log = function(e, t) {
            if ("undefined" != typeof Storage && this.isConsoleLoggingEnabled) {
                var i = localStorage.getItem(g)
                  , n = (i = i || "") + "[" + e + "] --- " + t + "\t\n";
                localStorage.setItem(g, n)
            }
        }
        ,
        e.prototype.error = function(e) {
            this.log(f.ERROR, e)
        }
        ,
        e.prototype.warn = function(e) {
            this.log(f.WARN, e)
        }
        ,
        e.prototype.info = function(e) {
            this.log(f.INFO, e)
        }
        ,
        e
    }())
      , qe = new (function() {
        function e() {
            this.experimentsData = null,
            this.personalizationData = null
        }
        return e.prototype.attachEventListener = function() {
            var e = this;
            z.removeEventListener(document, a.ZPS_EXPERIMENTS_LOADED),
            z.removeEventListener(document, a.ZPS_PERSONALIZATION_EXPERIMENTS_LOADED),
            z.addEventListener(document, a.ZPS_EXPERIMENTS_LOADED, function() {
                e.onExperimentsLoaded()
            }),
            z.addEventListener(document, a.ZPS_PERSONALIZATION_EXPERIMENTS_LOADED, function() {
                e.onPersonalizationExperimentsLoaded()
            })
        }
        ,
        e.prototype.initData = function() {
            this.experimentsData = null
        }
        ,
        e.prototype.onExperimentsLoaded = function() {
            var e = window.ZAB.experiment
              , t = window.ZAB.variation;
            if (window.amplitude && window.amplitude.identify && e && t) {
                var i = new window.amplitude.Identify;
                for (var n in e) {
                    var r = null;
                    switch (e[n].type) {
                    case a.EXPERIMENT_TYPE["A/B"]:
                        r = "(A/B)";
                        break;
                    case a.EXPERIMENT_TYPE.SPLIT:
                        r = "(SPLIT)"
                    }
                    if (e.hasOwnProperty(n)) {
                        if (this.experimentsData = this.experimentsData ? this.experimentsData : {},
                        this.experimentsData.hasOwnProperty(n))
                            continue;
                        this.experimentsData[n] = t[n].key,
                        null != (e[n].integrations.Amplitude ? e[n].integrations.Amplitude.experiment_project_integration_id : null) && i.set(e[n].name + r, t[n].name + r)
                    }
                }
                window.amplitude.identify(i),
                window.amplitude.track("PageSense")
            }
        }
        ,
        e.prototype.onPersonalizationExperimentsLoaded = function() {
            var e = this;
            if (window.amplitude && window.amplitude.identify && r.experiencesApplied.length) {
                var t = new window.amplitude.Identify
                  , i = S.getExperimentExperienceObject(r.experiencesApplied)
                  , n = "(PERSONALIZATION)";
                Object.keys(i).forEach(function(r) {
                    if (e.personalizationData = e.personalizationData ? e.personalizationData : {},
                    !e.personalizationData.hasOwnProperty(r)) {
                        for (var o = window.ZAB.data.experiment[r].name + n, a = window.ZAB.data.experiment[r], s = i[r], c = [], u = 0; u < s.length; u++) {
                            var p = s[u]
                              , l = null;
                            a.split_experiences && a.split_experiences[p] ? l = a.split_experiences[p].name + n : a.abtest_experiences && a.abtest_experiences[p] ? l = a.abtest_experiences[p].name + n : a.original_experience && a.original_experience[p] && (l = a.original_experience[p].name + n),
                            c.push(l)
                        }
                        e.personalizationData[r] = c,
                        null != (window.ZAB.data.experiment[r].integrations.Amplitude ? window.ZAB.data.experiment[r].integrations.Amplitude.experiment_project_integration_id : null) && t.set(o, c)
                    }
                }),
                window.amplitude.identify(t),
                window.amplitude.track("PageSense")
            }
        }
        ,
        e
    }())
      , He = new (function() {
        function e() {
            this.isQAMode = !1
        }
        return e.prototype.setIsQAMode = function(e) {
            this.isQAMode = e
        }
        ,
        e.prototype.getIsQAMode = function() {
            return this.isQAMode
        }
        ,
        e.prototype.getDataForQAMode = function() {
            var e = document.createElement("iframe")
              , t = window.ZAB.zab.getServerUrlObject();
            e.src = "https://" + t.qamodeurl,
            e.id = "zabqamode",
            e.height = "0",
            e.setAttribute("style", "display:none");
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(e, i),
            e.onload = function() {
                var t = He.constructQAFrameMessage();
                e.contentWindow.postMessage(t, "*")
            }
        }
        ,
        e.prototype.constructQAFrameMessage = function() {
            var e = window.ZAB.zab.getDataObj()
              , t = {
                id: "qa-mode"
            };
            t.url = window.location.href,
            t.portal = e.portal_name,
            t.project_key = e.project_key;
            var i = E.getZABQueryKeyValue(window.location.href, "ps_token");
            return E.exists(i) && (t.ps_token = i),
            t
        }
        ,
        e.prototype.publishMouseCoordinates = function() {
            z.addEventListener(document, "mousemove", function(e) {
                window.PubSub.publish("mouse-coordinates", [e.clientX, e.clientY])
            })
        }
        ,
        e
    }())
      , Ke = new (function() {
        function e() {
            this.isScriptLoaded = !1
        }
        return e.prototype.loadScript = function() {
            if (!document.querySelector("#visitorCountScript")) {
                var e = document.createElement("script");
                e.type = "text/javascript",
                e.id = "visitorCountScript",
                e.src = h.getScriptCdnUrl() + window.ZAB.data.portal_name + "/" + window.ZAB.data.project_key + "_visitor_count.js",
                e.async = !0;
                var t = this;
                e.onload = function() {
                    t.isScriptLoaded = !0
                }
                ,
                window.$pagesense.$("head").append(e),
                this.scriptStartedTime = (new Date).getTime(),
                this.visitorCountScript = e
            }
        }
        ,
        e.prototype.callback = function(e, t) {
            var i = this;
            if (void 0 === t && (t = 1e3),
            !window.ZAB.data.visitor_count && this.visitorCountScript && this.scriptStartedTime)
                var n = this.scriptStartedTime + t
                  , r = setInterval(function() {
                    var t = (new Date).getTime();
                    i.isScriptLoaded ? (clearInterval(r),
                    e()) : t >= n && (clearInterval(r),
                    e())
                }, 50);
            else
                e()
        }
        ,
        e.prototype.getNextVariation = function(e) {
            var t, i = window.ZAB.visitorData && window.ZAB.visitorData.experiments && window.ZAB.visitorData.experiments[e.key], n = 0;
            if (i && i.variations) {
                var r = i.variations;
                n = Object.keys(r).reduce(function(e, t) {
                    return e + parseInt(r[t].unique_count)
                }, 0),
                t = (window.ZAB.visitorData.time - i.actual_start_time) / 36e5
            }
            if (n > 0) {
                var o = {}
                  , a = 0;
                for (var s in e.variations) {
                    var c = e.variations[s];
                    if (r[c.key] && r[c.key].unique_count)
                        var u = n / t * (t + 1) * (c.allotedPercentage / 100) - parseInt(r[c.key].unique_count);
                    else
                        u = n / t * (t + 1) * (c.allotedPercentage / 100);
                    0 == c.allotedPercentage ? o[c.key] = u = 0 : o[c.key] = u = Math.max(u, 1),
                    a += u
                }
                for (var s in o)
                    o[s] = o[s] / a * 100;
                window.ZAB.adjustedProbabilities = o;
                var p = 100 * Math.random()
                  , l = 0;
                for (var s in e.variations) {
                    if (p < (l += o[(c = e.variations[s]).key]))
                        return w.info({
                            msg: "Adjusted Random Method Selected Variation : " + s + " Experiment : " + (e && e.key)
                        }),
                        c
                }
            } else {
                p = 100 * Math.random(),
                l = 0;
                for (var s in e.variations) {
                    if (p < (l += (c = e.variations[s]).allotedPercentage))
                        return w.info({
                            msg: "Random Method Selected Variation : " + s + " Experiment : " + (e && e.key)
                        }),
                        c
                }
            }
        }
        ,
        e.prototype.isDataUpdated = function() {
            return window.ZAB.data.visitor_count ? window.ZAB.data.visitor_count.time + 36e5 > (new Date).getTime() : !!window.ZAB.visitorData && window.ZAB.visitorData.time + 36e5 > (new Date).getTime()
        }
        ,
        e
    }());
    function Ye(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }
    function $e(e) {
        return ($e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function Je(e) {
        var t = E.getZABQueryKeyValue(window.location.href, a.GCLID);
        if (t)
            try {
                w.info({
                    gclid: t
                })
            } catch (e) {}
        !function(e, t, i, n) {
            var r = h.getTrackingServerUrl()
              , c = h.getSessionRecordingIframeTrackingServerUrl()
              , u = h.getAppServerUrl()
              , p = new Date
              , l = 0;
            e.ZAB = e.ZAB || {},
            ZAB.current_url = t.URL,
            e.pagesense = e.pagesense || [],
            e.optimize = {},
            e.$pagesense.UAParser = ge,
            e.ZAB.pcdonottrack = !1,
            e.ZAB.redirectingURL = !1,
            e.ZAB.goalsAchieved = [];
            var d, f, g = !1, m = !1, v = !1, y = !1, _ = !1, T = !1, b = !1, I = !1, x = !1, O = !1, B = !1, L = null, U = null, D = null, Z = [], P = {}, M = [], F = !1, V = !1, G = {}, j = {}, H = 0, K = 0, J = 0, W = !1, Q = 0, X = null, te = E.isUnsafeEvalAllowed(), re = [];
            if (optimize.$ = n,
            e.opener && t.referrer.indexOf(r) > -1 && !rt)
                return d = "https://" + r + "/pagesense/initializer/variationPreviewer.js",
                f = t.createElement("script"),
                (f = E.addNonce(f)).type = "text/javascript",
                f.src = d,
                void e.$pagesense.$("head").append(f);
            var ae, se = h.getTrackingDataObject();
            function ce(t) {
                if (et.exists(t)) {
                    var i = {}
                      , n = {};
                    n.f = et.getUserId(),
                    n.id = t,
                    n.a = se.portal_name,
                    n.p = se.project_key,
                    n.n = !e.ZAB.returning,
                    i.ird = n,
                    e.ZAB.zab.generateUserAgentData(),
                    i.urd = e.ZAB.useragentrawdata,
                    et.sendDataToServer(10, i)
                }
            }
            function ue(e) {
                if (e) {
                    try {
                        var t = "IP Server JSON received is " + e;
                        t = t + " Time taken to complete geolocation server request is " + ((new Date).getTime() - ZAB.geolocation_starttime),
                        et.generateUserAgentData();
                        var i = {
                            msg: t = t + " Visitid - " + ZAB.useragentrawdata.d
                        };
                        w.info(i),
                        e = JSON.parse(e)
                    } catch (e) {}
                    var n = e.COUNTRY_NAME.toLowerCase();
                    n = n.charAt(0).toUpperCase() + n.slice(1);
                    var r = e.REGION.toLowerCase();
                    r = r.charAt(0).toUpperCase() + r.slice(1);
                    var o = e.CITY.toLowerCase();
                    o = o.charAt(0).toUpperCase() + o.slice(1),
                    ZAB.countryName = n.replace(/\s/g, "").toLowerCase(),
                    ZAB.state = r.replace(/\s/g, "").toLowerCase(),
                    ZAB.city = o.replace(/\s/g, "").toLowerCase()
                }
            }
            function pe() {
                if (m)
                    fe();
                else if (A.skipDefaultAntiFOOC)
                    et.exists(A.applyCustomAntiFOOC) && A.applyCustomAntiFOOC();
                else {
                    Ve.cleanUpPageScreen();
                    var e = t.createElement("style");
                    e.innerText = "body{background:transparent !important; opacity:0  !important; visibility: hidden  !important;} html{ opacity:0  !important; visibility: hidden  !important; }",
                    e.setAttribute("id", "zps-page-screen"),
                    t.head.prepend(e)
                }
            }
            function fe() {
                null != optimize.iframetimeout || null != optimize.locationtimeout || optimize.hidePage || Ve.cleanUpPageScreen()
            }
            function me() {
                return !!g
            }
            function ve(t) {
                var i = t.variations;
                if (et.exists(i))
                    if (Ke.isDataUpdated())
                        try {
                            return Ke.getNextVariation(t)
                        } catch (i) {
                            return i.message = "(Adjusted Random Method Selected Variation Failed)" + i.message,
                            w.error(i),
                            e.ZAB.visitorData = null,
                            ve(t)
                        }
                    else {
                        var n, r = 0, o = Math.floor(1e3 * Math.random()) + 1, a = [];
                        for (var s in i)
                            i.hasOwnProperty(s) && a.push(s);
                        a.sort();
                        for (var c = 0; c < a.length; c++) {
                            var u = a[c];
                            if (n = i[u].allotedPercentage,
                            0 != (n *= 10)) {
                                if (o <= r + n) {
                                    try {
                                        w.info({
                                            msg: "Random Method Selected Variation : " + u + " Experiment : " + (ZAB.experiment && Object.keys(ZAB.experiment).length && Object.keys(ZAB.experiment)[0])
                                        })
                                    } catch (e) {}
                                    return i[u]
                                }
                                r += n
                            }
                        }
                    }
            }
            function Ae(e, t) {
                var i = et.getBucketInfo();
                (i = 0 == et.exists(i) ? {} : i)[e] = t,
                ut.setCookie(ze.bucket, JSON.stringify(i), 1)
            }
            function Ee(e) {
                var t = [3, 4, 5]
                  , i = et.getGoalsByType(t);
                et.trackEventGoals(e, i),
                i = et.getGoalsByTypeFromJson(t),
                et.trackStandAloneGoals(e, i)
            }
            function _e(e) {
                var t = et.getGoalsByType([2, 3, 4, 5]);
                et.trackEventGoals(e, t),
                et.trackStandAloneGoals(e, t)
            }
            function be(n) {
                var r = !0
                  , o = et.getGoalsByTypeFromJson([2]);
                if (et.exists(o)) {
                    if (n && n.target) {
                        var a = n.target.getAttribute("href");
                        (null === a || 0 === a.indexOf("#") && 0 != a.indexOf("#/")) && (r = !1)
                    }
                    var s, c;
                    for (c in 1 != n.which && (r = !1),
                    null != i.sendBeacon && (r = !1),
                    et.generateUserAgentData(),
                    "IE" === ZAB.useragentrawdata.bv && (r = !1),
                    r && n.preventDefault(),
                    o) {
                        var u = o[c];
                        if (o.hasOwnProperty(c))
                            for (s = 0; s < u.url.length; s++)
                                if (et.isURLSMatch(this.href, u.url[s])) {
                                    u.is_project_level ? Z.indexOf(c) > -1 && et.sendStandAloneGoalInfo(c) : et.sendGoalInfo(c);
                                    break
                                }
                    }
                    y && (r = !1),
                    r && n && n.target && "function" == typeof n.target.click && ("tablet" === ZAB.useragentrawdata.dv || "mobile" === ZAB.useragentrawdata.dv ? e.$pagesense.$(t).off("touchend", "a", be) : e.$pagesense.$(t).off("mousedown", "a", be),
                    B = !1,
                    n.target.click(),
                    "tablet" === ZAB.useragentrawdata.dv || "mobile" === ZAB.useragentrawdata.dv ? e.$pagesense.$(t).on("touchend", "a", be) : e.$pagesense.$(t).on("mousedown", "a", be),
                    B = !0)
                }
            }
            function Ie() {
                z.removeEventListener(t, "submit"),
                z.removeEventListener(t, "click"),
                z.removeEventListener(t, "touchend"),
                z.addEventListener(t, "submit", _e),
                e.ZAB.zab.generateUserAgentData(),
                "tablet" === ZAB.useragentrawdata.dv || "mobile" === ZAB.useragentrawdata.dv ? z.addEventListener(t, "touchend", Ee) : z.addEventListener(t, "click", Ee)
            }
            function xe() {
                try {
                    e.clearTimeout(optimize.changetimeout),
                    e.clearTimeout(optimize.cleanuptimeout)
                } catch (e) {
                    w.error(e)
                }
            }
            function Oe() {
                U || (U = new MutationObserver(function(e) {
                    e.forEach(function(e) {
                        ZAB.mutationRecordArray.push(e),
                        U && (U.disconnect(),
                        U = null)
                    })
                }
                )).observe(t.body, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0
                })
            }
            function ke() {
                D || (D = new MutationObserver(function(e) {
                    e.forEach(function(e) {
                        ZAB.qaVariationArray.push(e)
                    }),
                    D.disconnect(),
                    D = null
                }
                )).observe(t.body, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0
                })
            }
            function Ce() {
                !L && (L = new MutationObserver(function(e) {
                    Re(),
                    L.disconnect(),
                    L = null
                }
                ),
                et.exists(ZAB.changesToHandle) && ZAB.changesToHandle.length > 0) && L.observe(t.body, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0
                })
            }
            function Re() {
                if (et.exists(ZAB.changesToHandle)) {
                    for (var e = 0; e < ZAB.changesToHandle.length; )
                        try {
                            Oe(),
                            te ? new Function(ZAB.changesToHandle[e]).call(optimize) : E.applyJsChangesWithInlineScript(ZAB.changesToHandle[e]),
                            ZAB.changesToHandle.splice(e, 1)
                        } catch (t) {
                            e++,
                            w.error(t)
                        }
                    Ce()
                }
            }
            function Be() {
                Re(),
                ZAB.changesToHandle.length > 0 && (optimize.changetimeout = e.setTimeout(Be, 50),
                optimize.cleanuptimeout = e.setTimeout(xe, 500))
            }
            function Ne(e) {
                return "\n                var styleElement = document.createElement('style');\n                styleElement.type = 'text/css';\n                styleElement.id = 'zps-".concat(e, "-style'; \n                document.body.append(styleElement);\n            ")
            }
            function Le(t) {
                if (!e._zps.api("getDisableCustomScriptExecution") && (et.exists(t.variation_css_changes) && Ve.applyCssChanges(t.variation_css_changes),
                et.exists(t) && et.exists(t.variation_changes))) {
                    je.info("Variation changes being applied ...");
                    var i, n = t.variation_changes;
                    for (i = 0; i < n.length; i++)
                        try {
                            Oe(),
                            y && ke(),
                            te ? new Function(Ne(t.key) + n[i]).call(optimize) : E.applyJsChangesWithInlineScript(Ne(t.key) + n[i])
                        } catch (e) {
                            ZAB.changesToHandle.push(Ne(t.key) + n[i]),
                            w.error(e)
                        }
                    I = !1,
                    ZAB.changesToHandle.length > 0 && !optimize.changetimeout && (optimize.changetimeout = e.setTimeout(Be, 50))
                }
            }
            function Ue(t) {
                if (ZAB.variation) {
                    if (et.toChangeURL(t)) {
                        var i = null
                          , n = null;
                        for (var r in t) {
                            var o = t[r]
                              , a = o.type;
                            if (n = ZAB.variation[o.key],
                            2 === a && !1 === n.is_original) {
                                i = o;
                                break
                            }
                        }
                        if (null === i)
                            return;
                        return new Promise(function(t, r) {
                            !function t(i, n, r) {
                                if (Fe.isIframeRequiredForVariation(n, i.key) && !me()) {
                                    if (H > 5) {
                                        H = 0,
                                        _ = !1,
                                        b = !0;
                                        try {
                                            ZAB.experiment = {},
                                            ZAB.variation = {},
                                            e.clearTimeout(optimize.iframetimeout)
                                        } catch (e) {
                                            optimize.iframetimeout = void 0
                                        }
                                        return optimize.iframetimeout = void 0,
                                        fe(),
                                        void r()
                                    }
                                    return H++,
                                    optimize.iframetimeout = e.setTimeout(function() {
                                        t(i, n, r)
                                    }, 20),
                                    void (_ = !0)
                                }
                                try {
                                    e.clearTimeout(optimize.iframetimeout),
                                    _ = !1
                                } catch (e) {
                                    w.error(e)
                                }
                                if (je.info("Selected Variation - VAR_KEY : " + ZAB.variation[i.key].key + " ; VAR INFO : " + JSON.stringify(ZAB.variation[i.key])),
                                Fe.isIframeRequiredForVariation(n, i.key))
                                    et.sendVisitorInfoToIframe(i, n);
                                else {
                                    var o = i.key
                                      , a = {};
                                    a[o] = n.key,
                                    a.returning = ZAB.returningForExp[o],
                                    et.generateUserAgentData(),
                                    a.source = ZAB.useragentrawdata.tv,
                                    ut.setCookieInTLD(ze.split, JSON.stringify(a), 1)
                                }
                                Fe.redirectToSplitVaritaion(i.key, n, r)
                            }(i, n, t)
                        }
                        )
                    }
                    I = !0,
                    et.sendVisitorInformation(t, ZAB.variation)
                }
            }
            function De(e) {
                var t = et.getBucketInfo();
                if (et.exists(t)) {
                    var i = t[e];
                    if (i === a.AUDIENCE_MATCHING_FAILURE_COOKIE_VALUE) {
                        var n = ve(se.experiment[e]);
                        return Ae(e, n.key),
                        n
                    }
                    return je.info("Variation Selected  : " + ZAB.experiment[e].variations[i]),
                    ZAB.experiment[e].variations[i]
                }
            }
            function Ze(t) {
                if (e.pagesense && !e._zps.api("getDisableCustomScriptExecution") && (et.exists(t.global_css) && Ve.applyCssChanges(t.global_css),
                et.exists(t.global_js))) {
                    var i = t.global_js;
                    try {
                        Oe(),
                        y && ke(),
                        te ? new Function(Ne(t.key) + i).call(optimize) : E.applyJsChangesWithInlineScript(Ne(t.key) + i)
                    } catch (e) {
                        w.error(e),
                        je.info("Error while applying global js")
                    }
                }
            }
            function Pe(t) {
                if (F && !function() {
                    if (!ZAB.countryName) {
                        if ((new Date).getTime() <= ZAB.geolocation_starttime + 3e3)
                            return !1;
                        try {
                            var e = "Portal is " + ZAB.portal + " Experiment config is " + outerArray + " and  Timeout for geolocaiton ";
                            et.generateUserAgentData();
                            var t = {
                                msg: e = e + " User agent is " + JSON.stringify(ZAB.useragentrawdata)
                            };
                            w.info(t)
                        } catch (e) {}
                        return !0
                    }
                    return !0
                }()) {
                    if (Q > 25) {
                        Q = 0,
                        _ = !1,
                        b = !0;
                        try {
                            ZAB.experiment = {},
                            ZAB.variation = {},
                            e.clearTimeout(optimize.locationtimeout)
                        } catch (e) {
                            optimize.locationtimeout = void 0
                        }
                        return optimize.locationtimeout = void 0,
                        void fe()
                    }
                    return Q++,
                    optimize.locationtimeout = e.setTimeout(function() {
                        Pe(t)
                    }, 20),
                    void (_ = !0)
                }
                Ke.callback(function() {
                    var i;
                    try {
                        for (var n in optimize.locationtimeout = void 0,
                        e.clearTimeout(optimize.locationtimeout),
                        t)
                            if (t.hasOwnProperty(n)) {
                                var r = t[n];
                                if (X = n,
                                r.audience && r.audience.length > 0 && !et.isAudienceMatching(r.audience)) {
                                    je.info("AUDIENCE MATCHING FAILED"),
                                    ne.abortAudienceFailedUserTemporarily(r),
                                    delete ZAB.experiment[n];
                                    continue
                                }
                                X = null
                            }
                        V = !0,
                        _ = !1,
                        i = function(e) {
                            if (et.exists(e)) {
                                if (!et.iscookieEnabled())
                                    return je.warn("Cookie storage needs to be enabled"),
                                    void je.error("Cookie storage not enabled");
                                for (var t in et.exists(ZAB.variation) || (ZAB.variation = {}),
                                e)
                                    if (ZAB.returningForExp[t]) {
                                        var i = De(t);
                                        ZAB.variation[t] = i
                                    } else
                                        (i = ve(e[t])) && (je.info("Variation Selected - VAR_KEY : " + i.key),
                                        ZAB.variation[t] = i,
                                        Ae(t, i.key));
                                return Ue(e)
                            }
                        }(ZAB.experiment)
                    } catch (e) {
                        je.info("Error in executing experiment : " + e),
                        w.error(e),
                        _ = !1,
                        ZAB.variation = null,
                        b = !0
                    } finally {
                        i && i.then ? i.then(function() {
                            !b && (_ || ZAB.variation && (et.toChangeURL(t) || I)) ? x && et.exists(ZAB.experiment) && et.exists(ZAB.variation) && (Ot(),
                            Dt.onPageRefreshABSpecific()) : (m = !0,
                            fe())
                        }) : !b && (_ || ZAB.variation && (et.toChangeURL(t) || I)) ? x && et.exists(ZAB.experiment) && et.exists(ZAB.variation) && (Ot(),
                        Dt.onPageRefreshABSpecific()) : (m = !0,
                        fe())
                    }
                })
            }
            e.ZAB.data = se,
            e.ZAB.visitorData = e.ZAB.data && e.ZAB.data.visitor_count,
            e.ZAB.data.is_secondary_script_needed && ((ae = t.createElement("script")).src = h.getScriptCdnUrl() + e.ZAB.data.portal_name + "/" + e.ZAB.data.project_key + "_secondary.js",
            ae.onload = function() {
                Object.assign(e.ZAB.data.experiment, e.remainingExperiments.remaining_experiments),
                Object.assign(e.ZAB.data.audience, e.remainingExperiments.remaining_experiments_audience),
                Object.assign(e.ZAB.data.trigger, e.remainingExperiments.remaining_experiments_trigger),
                Object.assign(e.ZAB.data.goal, e.remainingExperiments.remaining_goal)
            }
            ,
            e.$pagesense.$("head").append(ae)),
            e.ZAB.IdentifyApi = ce,
            ZAB.mutationRecordArray = [],
            ZAB.qaVariationArray = [];
            var ze = {
                uid: "zabUserId",
                vid: "zabVisitId",
                bucket: "zabBucket",
                qabucket: "zabQABucket",
                split: "zabSplit",
                heatmapbucket: "zabHMBucket",
                achievedGoals: "zabAchGoal",
                pollsBucket: "zpsPollsBucket",
                popupBucket: "zpsPopupBucket",
                botScore: "zabBotScore"
            }
              , Je = h.getThirdPartyCdnUrl()
              , We = h.getZohoCdnUrl()
              , Qe = {
                rawdataurl: "/psimg.gif",
                heatmapscripturl: "".concat(We, "heatmapscript-ee77722975_.js"),
                funnelscripturl: "".concat(We, "funnel-analysis-7a2b432c91_.js"),
                geolocationurl: "https://iplocation.zoho.com/getipinfo",
                geolocationserverurl: "https://" + h.getAppServerUrl() + "/pagesense/api/getipinfo",
                sessionscripturl: "".concat(We, "sessionrecording-4862c51d39_.js"),
                framepageurl: "".concat(Je, "framePageNew-7c74117f6a_.html"),
                formanalyticsscripturl: "".concat(We, "formanalytics-86c4c2fab5_.js"),
                qamodeurl: u + "/js/qamode.html",
                qatoolsurl: u + "/pagesense/qatools/",
                pubsuburl: u + "/js/pubsub-06611bbc94_.js",
                pollsandfeedbackscripturl: "".concat(We, "poll-40c4fd53fc_.js"),
                pushnotifyscripturl: "".concat(We, "pushnotify-e0d8aea460_.js"),
                pushstylesurl: "".concat(We, "push-styles-1985883fb1_.css"),
                pushconversionframeurl: "".concat(C.generatePushConversionFrameUrl(Je, se.webpush.subdomain_name), "push-conversion-frame-1d0e531e9a_.html"),
                popup_script_url: "".concat(We, "popup-tracker-94fba27a55_.js"),
                aws_geolocation_url: "https://d3nwqly5qz5aye.cloudfront.net/location.js",
                getFullURL: function(e) {
                    return Qe.addProtocol(r) + e
                },
                getSessionIframeTrackingURL: function(e) {
                    return Qe.addProtocol(c) + e
                },
                addProtocol: function(e) {
                    return "https://" + e
                }
            }
              , Xe = {
                getBrowserUA: function() {
                    return i.userAgent.indexOf("Site24x7") > -1 && dt(!1),
                    i.userAgent
                },
                getBrowserAppName: function() {
                    return i.appName
                },
                getBrowserAppVersion: function() {
                    return i.appVersion
                },
                getScreenResolution: function() {
                    return (e.screen && e.screen.width && "number" == typeof e.screen.width ? e.screen.width : 0) + "x" + (e.screen && e.screen.height && "number" == typeof e.screen.height ? e.screen.height : 0)
                },
                getVisitorBrowserDetails: function(e) {
                    return et.exists(e) && et.exists(e.getBrowser()) && e.getBrowser().name || "Others"
                },
                getBrowserLang: function() {
                    var e = i.language
                      , t = e.indexOf(";");
                    return e = e.substring(0, -1 != t ? t : e.length)
                },
                getLangDisplayName: function(e) {
                    var t = {
                        "en-US": "ENGLISH(UNITED STATES)",
                        en: "ENGLISH",
                        de: "GERMAN",
                        fr: "FRENCH"
                    };
                    return t[e]
                },
                deviceValue: function(e) {
                    return et.exists(e) && et.exists(e.getDevice()) && e.getDevice().type || "desktop"
                },
                mobileDeviceValue: function(e) {
                    return et.exists(e) && et.exists(e.getDevice()) && e.getDevice().vendor || "UNKNOWN"
                },
                getHostName: function(e) {
                    var i = t.createElement("a");
                    return i.href = e,
                    i.hostname
                },
                isRefSocial: function(e) {
                    if (!et.exists(e))
                        return !1;
                    for (var t = ["facebook.com", "messenger.com", "plus.google.com", "plus.url.google.com", "t.co", "twitter.com", "instagram.com", "linkedin.com", "pinterest.com", "vk.com"], i = 0; i < t.length; i++)
                        if (e.domain.toLowerCase() === t[i])
                            return !0;
                    return !1
                },
                isRefCampaign: function(e) {
                    if (!et.exists(e))
                        return !1;
                    for (var t = et.parseURL(e), i = ["utm_campaign", "utm_source", "gclid", "otm_source"], n = et.getQueryParameters(t.query.toLowerCase()), r = 0; r < i.length; r++) {
                        var o = i[r];
                        if (et.exists(n[o]))
                            return !0
                    }
                    return !1
                },
                isRefSearchEngine: function(e) {
                    if (!et.exists(e))
                        return !1;
                    for (var t = ["www.google.", "r.search.yahoo.com", "bing.com", "search.aol.com", "aolsearch.com", "ask.com", "lycos.com", "about.com", "baidu.com", "yandex.", "search.seznam.cz", "nova.rambler.ru", "arama.mynet.com", "kvasir.no", "search.yam.com", "szukaj.wp.pl", "search.daum.net", "search.naver.com"], i = 0; i < t.length; i++)
                        if (e.domain.toLowerCase().indexOf(t[i]) > -1)
                            return !0;
                    return !1
                },
                getTrafficSource: function(e) {
                    if (Xe.isRefCampaign(t.URL))
                        return "CAMPAIGN";
                    if (!et.exists(e))
                        return "DIRECT";
                    var i = et.parseURL(e);
                    return Xe.isRefSocial(i) ? "SOCIAL" : Xe.isRefSearchEngine(i) ? "SEARCH" : "REFERRAL"
                },
                getVisitorOSDetails: function(e) {
                    return et.exists(e) && et.exists(e.getOS()) && e.getOS().name || "UNKNOWN"
                },
                generateQueryUAArray: function(e) {
                    if (-1 === e.indexOf("?"))
                        return [];
                    var t = []
                      , i = et.parseURL(e)
                      , n = et.getQueryParameters(i.query);
                    for (var r in n)
                        n.hasOwnProperty(r) && t.push({
                            pn: r,
                            pv: n[r]
                        });
                    return t
                }
            }
              , et = {
                isExperimentURLMatches: function(e) {
                    if (et.exists(e) && et.exists(e.urls)) {
                        var t = !1
                          , i = e.urls
                          , n = ZAB.current_url;
                        je.info("Experiment Url Check - EXP_KEY : " + e.key + " ; URL INFO : " + JSON.stringify(e.urls));
                        for (var r = 0; r < i.length; r++)
                            if (et.isURLSMatch(n, i[r])) {
                                t = i[r];
                                break
                            }
                        if (!et.exists(e.exclude_urls))
                            return t;
                        var o = e.exclude_urls;
                        for (je.info("Experiment Excluded Urls Check - EXP_KEY : " + e.key + " ; URL INFO : " + JSON.stringify(o)),
                        r = 0; r < o.length; r++)
                            if (et.isURLSMatch(n, o[r])) {
                                t = !1;
                                break
                            }
                        return t
                    }
                },
                isIntegrationExperimentExists: function(i) {
                    if (et.exists(i) && et.exists(i.urls)) {
                        for (var n, r = !1, o = i.urls, a = e.ZAB.current_url, s = 0; s < o.length; s++)
                            if ("pagesense-integration" === o[s].value) {
                                var c = (n = i,
                                et.exists(n.forms.form_id) ? 'form[id="' + n.forms.form_id + '"]' : et.exists(n.forms.form_name) ? 'form[name="' + n.forms.form_name + '"]' : n.forms.form_selector)
                                  , u = t.querySelector(c);
                                if (et.exists(u)) {
                                    r = !0;
                                    break
                                }
                            }
                        if (!et.exists(i.exclude_urls))
                            return r;
                        var p = i.exclude_urls;
                        for (je.info("Experiment Excluded Urls Check - EXP_KEY : " + i.key + " ; URL INFO : " + JSON.stringify(p)),
                        s = 0; s < p.length; s++)
                            if (et.isURLSMatch(a, p[s])) {
                                r = !1;
                                break
                            }
                        return r
                    }
                },
                isprojectgoalQualifies: function(e) {
                    if (et.exists(e) && et.exists(e.goal_url)) {
                        for (var t = !1, i = e.goal_url, n = ZAB.current_url, r = 0; r < i.length; r++)
                            if (et.isURLSMatch(n, i[r])) {
                                t = !0;
                                break
                            }
                        if (!et.exists(e.exclude_urls))
                            return t;
                        var o = e.exclude_urls;
                        for (r = 0; r < o.length; r++)
                            if (et.isURLSMatch(n, o[r])) {
                                t = !1;
                                break
                            }
                        return t
                    }
                },
                findFunnelExperiment: function() {
                    if (se && se.experiment) {
                        var e = {};
                        for (var t in se.experiment)
                            se.experiment.hasOwnProperty(t) && se.experiment[t] && 6 === se.experiment[t].type && 2 === se.experiment[t].status && (e[t] = se.experiment[t]);
                        return e
                    }
                },
                findFormAnalyticsExperiment: function() {
                    if (se && se.experiment) {
                        var e = {};
                        for (var t in se.experiment)
                            se.experiment.hasOwnProperty(t) && se.experiment[t] && 7 === se.experiment[t].type && 2 === se.experiment[t].status && (et.isExperimentURLMatches(se.experiment[t]) || et.isIntegrationExperimentExists(se.experiment[t])) && (e[t] = se.experiment[t]);
                        return e
                    }
                },
                findPollsAndFeedbackExperiment: function() {
                    if (et.generateUserAgentData(),
                    se && se.experiment) {
                        var e = et.getPollsBucketInfo();
                        if (et.exists(e) && se.experiment.hasOwnProperty(e) && se.experiment[e] && 9 === se.experiment[e].type && 2 === se.experiment[e].status && et.isExperimentURLMatches(se.experiment[e])) {
                            var t = se.experiment[e].special_filter ? JSON.parse(se.experiment[e].special_filter) : null;
                            if (et.isAudienceMatching(se.experiment[e].audience, null, t) && se.experiment[e].audience && se.experiment[e].audience.length > 0 && et.isAudienceMatching(se.experiment[e].audience, null))
                                return se.experiment[e]
                        }
                        for (var e in se.experiment)
                            if (se.experiment.hasOwnProperty(e) && se.experiment[e] && 9 === se.experiment[e].type && 2 === se.experiment[e].status && et.isExperimentURLMatches(se.experiment[e])) {
                                var i = se.experiment[e].special_filter ? JSON.parse(se.experiment[e].special_filter) : null;
                                if (et.isAudienceMatching(se.experiment[e].audience, null, i) && se.experiment[e].audience && se.experiment[e].audience.length > 0 && et.isAudienceMatching(se.experiment[e].audience, null))
                                    return se.experiment[e]
                            }
                        return {}
                    }
                },
                findHeatmapExperiment: function() {
                    if (se && se.experiment) {
                        var e = et.getHeatmapBucketInfo();
                        if (et.exists(e) && se.experiment[e] && 5 === se.experiment[e].type && 2 === se.experiment[e].status && et.isExperimentURLMatches(se.experiment[e]))
                            return se.experiment[e];
                        for (var e in se.experiment)
                            if (se.experiment.hasOwnProperty(e) && se.experiment[e] && 5 === se.experiment[e].type && 2 === se.experiment[e].status && et.isExperimentURLMatches(se.experiment[e]))
                                return se.experiment[e]
                    }
                },
                generateUserAgentData: function() {
                    return et.exists(ZAB.useragentrawdata) || (ZAB.useragentrawdata = et.getUserAgentRawData()),
                    ZAB.useragentrawdata
                },
                isHostMatch: function(e, t) {
                    return e === t || e.replace(/^www./, "") === t.replace(/^www./, "") || void 0
                },
                isPushHostMatch: function(e, t) {
                    return e.indexOf(t) > -1
                },
                getExperimentsByType: function(e) {
                    if (et.exists(e)) {
                        var t = {};
                        for (var i in ZAB.data.experiment) {
                            var n = ZAB.data.experiment[i];
                            e.indexOf(n.type) > -1 && (t[n.key] = n)
                        }
                        return t
                    }
                },
                getGoalsByType: function(e) {
                    if (et.exists(e)) {
                        var t = {};
                        for (var i in ZAB.experiment)
                            for (var n = ZAB.experiment[i].goal, r = 0; r < n.length; r++) {
                                var o = n[r];
                                se.goal && se.goal.hasOwnProperty(o) && e.indexOf(se.goal[o].goal_type) > -1 && (t[o] = se.goal[o])
                            }
                        return t
                    }
                },
                getGoalsByTypeFromJson: function(e) {
                    if (et.exists(e)) {
                        var t = {}
                          , i = se.goal;
                        for (var n in i)
                            if (i.hasOwnProperty(n)) {
                                var r = i[n];
                                e.indexOf(r.goal_type) > -1 && (t[n] = r)
                            }
                        return t
                    }
                },
                sendVisitorInfoToIframe: function(e, t) {
                    var i = e.key
                      , n = {};
                    n[i] = t.key,
                    n.returning = ZAB.returningForExp[i],
                    et.generateUserAgentData(),
                    n.source = ZAB.useragentrawdata.tv;
                    var r, o = {};
                    Fe.isDynamicMatchingConfigured(t.url) ? (r = Fe.getDynamicVariationURL(),
                    r = et.trimURL(r)) : r = et.trimURL(t.url),
                    r.indexOf("?") > 0 && (r = r.split("?")[0]),
                    o.key = r,
                    o.value = JSON.stringify(n),
                    et.iframeCommunication(1, o)
                },
                pageVisitCheck: function() {
                    var e = et.getGoalsByTypeFromJson([1]);
                    if (et.exists(e)) {
                        var t, i = ZAB.current_url;
                        for (var n in e)
                            try {
                                e.hasOwnProperty(n) && (t = e[n],
                                et.isURLSMatch(i, t.url[0]) && (je.info("Page Visit Goal Match - GOAL LINKNAME : " + n + " ; GOAL INFO : " + JSON.stringify(t)),
                                t.is_project_level ? e.hasOwnProperty(n) && et.sendStandAloneGoalInfo(n, 0) : et.sendGoalInfo(n)))
                            } catch (e) {
                                w.error(e)
                            }
                    }
                },
                iscookieEnabled: function() {
                    return i.cookieEnabled
                },
                executeRedirectedExp: function(e, t) {
                    var i = e.key
                      , n = {};
                    n[i] = e;
                    var r = {};
                    r[i] = t,
                    kt(n, r),
                    xt(),
                    et.sendVisitorInformation(n, r),
                    2 === e.heatmap && mt(),
                    m = !0
                },
                exists: function(e) {
                    return null != e && "" !== e && (e.constructor != Object || 0 != Object.keys(e).length)
                },
                equalsIgnoreCase: function(e, t) {
                    return !(!et.exists(e) || !et.exists(t) || e.toLowerCase() !== t.toLowerCase())
                },
                encodeParam: function(e) {
                    return encodeURIComponent(e)
                },
                findSessionRecordingExperiment: function() {
                    if (se && se.experiment) {
                        var t, i = {};
                        for (var n in se.experiment)
                            se.experiment.hasOwnProperty(n) && se.experiment[n] && 8 === se.experiment[n].type && 2 === se.experiment[n].status && et.isExperimentURLMatches(se.experiment[n]) && (t = n,
                            e.ZAB.cookieHandler.getCookieValue("zsr" + t) ? i[n] = se.experiment[n] : se.experiment[n].audience && se.experiment[n].audience.length > 0 && et.isAudienceMatching(se.experiment[n].audience) && (i[n] = se.experiment[n]));
                        return i
                    }
                },
                getUserAgentRawData: function() {
                    var i = {}
                      , n = Xe.getBrowserUA()
                      , r = new e.$pagesense.UAParser(n);
                    i.bv = Xe.getVisitorBrowserDetails(r),
                    i.lv = Xe.getBrowserLang(),
                    i.ldn = Xe.getLangDisplayName(i.language_value),
                    i.ov = Xe.getVisitorOSDetails(r),
                    i.dv = Xe.deviceValue(r),
                    i.mdv = Xe.mobileDeviceValue(r);
                    var o = t.referrer.toString();
                    i.rv = et.trimURL(o),
                    i.frv = o,
                    i.fcv = t.URL;
                    var s = e.location.origin + e.location.pathname + e.location.hash;
                    if (i.cv = et.trimURL(s),
                    i.up = Xe.generateQueryUAArray(t.URL),
                    i.tv = Xe.getTrafficSource(o),
                    i.srv = Xe.getScreenResolution(),
                    i.f = et.getUserId(),
                    i.d = et.getVisitId(),
                    e.ZAB.data[a.IS_MIGRATED_MA_PORTAL]) {
                        var c = e.ZAB.cookieHandler.getCookieValue(a.MA_COOKIE);
                        c && (i.zc_cu = c)
                    }
                    return i
                },
                generateUniqueId: function(e) {
                    return (new Date).getTime() + e + Math.random()
                },
                generateNewVisitId: function() {
                    var e = et.generateUniqueId("zabv");
                    return new Date,
                    e
                },
                getVisitId: function() {
                    return et.generateNewVisitId()
                },
                generateNewUAID: function() {
                    return et.generateUniqueId("zuaid")
                },
                getUAID: function() {
                    return et.generateNewUAID()
                },
                generateNewUserId: function() {
                    var e = et.generateUniqueId("zabu")
                      , i = new Date;
                    return i.setFullYear(i.getFullYear() + 1),
                    t.cookie = ze.uid + "=" + e + "; expires=" + i.toUTCString() + ";path=/" + N.getSamesiteSecureString(),
                    E.deleteExistingUserInfo(),
                    e
                },
                getUserId: function() {
                    var e = t.cookie.match(ze.uid + "=([^;]*)");
                    return e ? e[1] : et.generateNewUserId()
                },
                isReturningVisitor: function() {
                    var e = t.cookie.match(ze.uid + "=([^;]*)");
                    return !!e && (je.info("Returning Visitor -- USER_ID : " + e),
                    !0)
                },
                isReturningVisitorForExp: function(e) {
                    var t = et.getBucketInfo();
                    return !(!et.exists(e) || !et.exists(t)) && t.hasOwnProperty(e.key)
                },
                isReturningVisitorForHeatmapExp: function(e) {
                    var t = et.getHeatmapBucketInfo();
                    return !(!et.exists(e) || !et.exists(t)) && e.key == t
                },
                getBucketInfo: function() {
                    return y ? ut.checkCookieExists(ze.qabucket) ? JSON.parse(ut.getCookieValue(ze.qabucket)) : null : ut.checkCookieExists(ze.bucket) ? JSON.parse(ut.getCookieValue(ze.bucket)) : null
                },
                getPollsBucketInfo: function() {
                    return ut.checkCookieExists(ze.pollsBucket) ? ut.getCookieValue(ze.pollsBucket) : null
                },
                getPopupBucketInfo: function() {
                    return ut.checkCookieExists(ze.popupBucket) ? ut.getCookieValue(ze.popupBucket) : null
                },
                getHeatmapBucketInfo: function() {
                    return ut.checkCookieExists(ze.heatmapbucket) ? ut.getCookieValue(ze.heatmapbucket) : null
                },
                parseURL: function(e) {
                    var t, i, n;
                    return i = (t = e.match(/^(?:([^:\/?\#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)(?:\?([^\#]*))?(?:\#(.*))?/))[1] || "",
                    n = t[2] || "",
                    {
                        path: t[3] || "",
                        protocol: i,
                        domain: n,
                        query: t[4] || "",
                        fragment: t[5] || ""
                    }
                },
                trimURL: function(e) {
                    return e && "/" === e.charAt(e.length - 1) ? e.substring(0, e.length - 1) : e
                },
                toChangeURL: function(e) {
                    for (var t in e) {
                        var i = e[t]
                          , n = ZAB.variation[t];
                        if (2 === i.type && n && !1 === n.is_original)
                            return !0
                    }
                    return !1
                },
                getAppServerDomain: function() {
                    return Qe.addProtocol(u)
                },
                getServerUrl: function() {
                    return Qe.addProtocol(r)
                },
                getDataObj: function() {
                    return se
                },
                getServerUrlObject: function() {
                    return Qe
                }
            };
            function tt(e, t, i, n) {
                if (et.exists(t)) {
                    var r = {
                        a: se.portal_name,
                        b: n,
                        gln: i,
                        pi: !0
                    };
                    et.exists(e) && (r.r = e);
                    var o = {
                        grd: [r],
                        urd: {
                            d: t,
                            e: et.getUAID()
                        }
                    };
                    et.sendDataToServer(2, o)
                }
            }
            function it(t) {
                for (var i in se.experiment)
                    se.experiment[i].forms && et.exists(e.ZAB.processFormCustomEvents) && (se.experiment[i].forms.custom_event_linkname !== t && !et.equalsIgnoreCase(se.experiment[i].forms.custom_event_name, t) || 2 !== se.experiment[i].status || (nt(i),
                    e.ZAB.processFormCustomEvents && e.ZAB.processFormCustomEvents(i)))
            }
            function nt(e) {
                var t = ut.getCookieValue("zfa" + e);
                if (et.exists(t)) {
                    var i = JSON.parse(t);
                    et.sendDataToServer(6, i),
                    ut.deleteCookie("zfa" + e)
                }
            }
            et.standAlonegoalInfo = {
                generateStandAloneGoalInfo: function(e, t) {
                    if (et.exists(ZAB.returning)) {
                        var i = 0;
                        p && (i = new Date - p + l),
                        i = parseInt(i / 1e3),
                        t && (i = t);
                        var n = {
                            a: se.portal_name,
                            p: se.project_key,
                            gln: e,
                            ts: i,
                            n: !ZAB.returning,
                            g_s: se.goal[e].status,
                            ipl: se.goal[e].is_project_level
                        };
                        n[o.EXPERIMENT_VARIATION_MAPPING] = S.getExperimentVariationObjectForGoals(n),
                        n[o.EXPERIMENT_AUDIENCE_MAPPING] = S.getExperimentAudienceObjectForGoals(n);
                        var r = C.getPushUuid()
                          , a = C.getSentTime()
                          , s = C.getESDocId()
                          , c = ZAB.data.webpush.has_triggered_goal;
                        r && (n.p_id = r,
                        n.s_t = a,
                        n.es_doc_id = s);
                        var u = [];
                        u.push(n),
                        et.generateUserAgentData();
                        var d = JSON.parse(JSON.stringify(ZAB.useragentrawdata));
                        return d.e = et.getUAID(),
                        0 === n[o.EXPERIMENT_VARIATION_MAPPING].length && 2 === n.g_s && null == r && 0 == c ? null : {
                            grd: u,
                            urd: d
                        }
                    }
                }
            },
            et.sendGoalInfo = function(e, t) {
                if (et.exists(e)) {
                    var i = ZAB.data
                      , n = i.goal[e]
                      , r = null
                      , o = null;
                    for (var a in i.experiment)
                        if (i.experiment.hasOwnProperty(a)) {
                            var s = i.experiment[a];
                            if ((1 == s.type || 2 == s.type) && s.hasOwnProperty("goal") && s.goal.indexOf(e) > -1 && (2 == s.status || y)) {
                                o = a;
                                break
                            }
                        }
                    if (null !== o) {
                        if (n.goal_type === ie.PAGE_VISIT_GOAL_TYPE || n.goal_type === ie.CUSTOM_EVENT_GOAL_TYPE || n.goal_type === ie.REVENUE_GOAL_TYPE)
                            !function(e, t) {
                                var n = localStorage.getItem("zab_g_" + o);
                                if (et.exists(n) && ("prebodigital" === ZAB.data.portal_name && w.info({
                                    msg: "inside getGoalInfoFromIframe with localstorage" + n
                                }),
                                (a = JSON.parse(n)).hasOwnProperty("grd")))
                                    return a.grd[0].gln = e,
                                    et.exists(t) && (a.grd[0].r = t),
                                    void et.sendDataToServer(2, a);
                                var r = "g_" + o;
                                y && (r = "qag_" + o);
                                var a = ut.getCookieValue("zab_" + r);
                                if (et.exists(a)) {
                                    var s = {
                                        a: i.portal_name,
                                        b: o,
                                        gln: e,
                                        pi: !0
                                    };
                                    et.exists(t) && (s.r = t);
                                    var c = {
                                        grd: [s],
                                        urd: {
                                            d: a,
                                            e: et.getUAID()
                                        }
                                    };
                                    et.sendDataToServer(2, c)
                                } else {
                                    var u = {
                                        key: r,
                                        callback: tt.bind(this, t),
                                        goalLN: e,
                                        expLN: o
                                    };
                                    et.iframeCommunication(8, u)
                                }
                            }(e, t);
                        else
                            try {
                                if (et.exists(ZAB.variation) && ZAB.variation.hasOwnProperty(o)) {
                                    var c = ZAB.variation[o].key;
                                    r = ne.generateGoalRawDataForABSplit(o, c, e)
                                }
                            } catch (e) {
                                w.error(e)
                            }
                        et.exists(r) && et.sendDataToServer(2, r)
                    }
                }
            }
            ,
            et.sendStandAloneGoalInfo = function(t, i) {
                var n;
                n = i ? et.standAlonegoalInfo.generateStandAloneGoalInfo(t, i) : et.standAlonegoalInfo.generateStandAloneGoalInfo(t),
                e.dispatchEvent(new CustomEvent("project_goal",{
                    detail: t
                })),
                et.exists(n) && et.sendDataToServer(2, n)
            }
            ,
            et.sendVisitorInformation = function(e, t, i) {
                function n(e) {
                    if (i)
                        return !1;
                    for (var t = ZAB.data, n = e.goal, r = 0; r < n.length; r++) {
                        var o = n[r];
                        if (t.goal[o] && t.goal[o].goal_type === ie.PAGE_VISIT_GOAL_TYPE || t.goal[o].goal_type === ie.CUSTOM_EVENT_GOAL_TYPE || t.goal[o].goal_type === ie.REVENUE_GOAL_TYPE)
                            return !0
                    }
                    return !1
                }
                var r = function() {
                    var r = function() {
                        if (e && t && et.exists(ZAB.returningForExp)) {
                            var r = [];
                            for (var o in e) {
                                var a = e[o]
                                  , s = {
                                    a: se.portal_name,
                                    b: o,
                                    c: t[o].key,
                                    h: 2 === a.heatmap,
                                    n: !ZAB.returningForExp[o],
                                    rr: n(a)
                                };
                                i && (s.ts = i),
                                r.push(s)
                            }
                            return r
                        }
                    }();
                    if (et.exists(r))
                        return et.generateUserAgentData(),
                        {
                            vrd: r,
                            urd: ZAB.useragentrawdata
                        }
                }();
                et.exists(r) && et.sendDataToServer(1, r)
            }
            ,
            et.sendEventInformation = function(t, i) {
                var n = function() {
                    var e = function() {
                        if (et.exists(ZAB.returning)) {
                            var e = {
                                a: se.portal_name,
                                p: se.project_key,
                                n: !ZAB.returning
                            };
                            return i && (e.ts = i),
                            t && (e.gln = t),
                            e
                        }
                    }();
                    if (et.exists(e)) {
                        var n = [];
                        return n.push(e),
                        et.generateUserAgentData(),
                        {
                            vrd: n,
                            urd: ZAB.useragentrawdata
                        }
                    }
                }()
                  , r = se.goal[t];
                if (!i) {
                    var o = !!r.is_virtual_goal;
                    n.vrd[0].i_v_g = o
                }
                e.ZAB.zab.exists(r.status) && 2 != r.status && et.exists(n) && et.sendDataToServer(1, n)
            }
            ,
            et.sendEventRawData = function(e, t) {
                var i = {
                    a: se.portal_name,
                    p: se.project_key,
                    f: et.getUserId(),
                    ev: e,
                    ea: t
                };
                et.generateUserAgentData();
                var n = {
                    erd: i,
                    urd: ZAB.useragentrawdata
                };
                et.exists(n) && et.sendDataToServer(14, n)
            }
            ,
            et.sendUserInformation = function() {
                var e = {
                    a: se.portal_name,
                    p: se.project_key,
                    ui: re,
                    f: et.getUserId()
                };
                if (et.exists(e)) {
                    var t = {
                        user: e
                    };
                    et.sendDataToServer(16, t)
                }
                re = []
            }
            ,
            et.sendHeatmapVisitorInformation = function() {
                var e = function() {
                    var e = function() {
                        if (ZAB.heatmapexp && ZAB.heatmapexp.key)
                            return {
                                a: se.portal_name,
                                b: ZAB.heatmapexp.key,
                                c: "original",
                                n: !ZAB.heatmapexp.returning
                            }
                    }();
                    if (et.exists(e)) {
                        var t = [];
                        return t.push(e),
                        et.generateUserAgentData(),
                        {
                            vrd: t,
                            urd: ZAB.useragentrawdata
                        }
                    }
                }();
                et.exists(e) && et.sendDataToServer(1, e)
            }
            ,
            et.trackEventGoals = function(t, i, n) {
                var r, o = 4, a = 5, s = 6, c = t instanceof Object ? e.event ? e.event.srcElement : t.target : null;
                for (var u in i)
                    if (i.hasOwnProperty(u)) {
                        r = !1;
                        var p = i[u];
                        if (p.is_project_level)
                            continue;
                        switch (je.info("Track Event Goals - GOAL LINKNAME : " + u + " ; TYPE : " + p.goal_type),
                        p.goal_type) {
                        case o:
                            r = Ge.shallSendElementClickGoal(c, p);
                            break;
                        case a:
                            et.exists(ZAB.sentengagement) || (ZAB.sentengagement = []),
                            ZAB.sentengagement.indexOf(u) > -1 ? r = !1 : (ZAB.sentengagement.push(u),
                            r = !0);
                            break;
                        case s:
                            et.equalsIgnoreCase(p.custom_event_name, n) && (r = !0)
                        }
                        1 == r && et.sendGoalInfo(u)
                    }
            }
            ,
            et.trackStandAloneGoals = function(t, i, n) {
                var r, o = 4, a = 6, s = t instanceof Object ? e.event ? e.event.srcElement : t.target : null, c = !1;
                for (var u in i)
                    if (i.hasOwnProperty(u)) {
                        r = !1;
                        var p = i[u];
                        if (!p.is_project_level)
                            continue;
                        switch (p.goal_type) {
                        case o:
                            Z.indexOf(u) > -1 && (r = Ge.shallSendElementClickGoal(s, p));
                            break;
                        case a:
                            try {
                                -1 == Z.indexOf(u) && et.isprojectgoalQualifies(p) && (et.sendEventInformation(u),
                                Z.push(u))
                            } catch (t) {
                                w.error(t)
                            }
                            Z.indexOf(u) > -1 && et.equalsIgnoreCase(p.custom_event_name, n) && (r = !0,
                            c = !0)
                        }
                        if (1 == r) {
                            var l = et.standAlonegoalInfo.generateStandAloneGoalInfo(u);
                            if (e.dispatchEvent(new CustomEvent("project_goal",{
                                detail: u
                            })),
                            et.exists(l)) {
                                if (!0 === c) {
                                    var d = new CustomEvent("goalsAchived",{
                                        detail: u
                                    });
                                    ZAB && !ZAB.sessionRecordingScriptExecutionStarted && ZAB.goalsAchieved.push(u),
                                    e.dispatchEvent(d)
                                }
                                et.sendDataToServer(2, l)
                            }
                        }
                    }
            }
            ;
            var ot = null;
            function at() {
                me() ? (J = 0,
                W = !1,
                e.clearTimeout(ot),
                st()) : J > 5 ? (J = 0,
                W = !1,
                e.clearTimeout(ot),
                ot = null) : (J++,
                ot = e.setTimeout(function() {
                    at()
                }, 20),
                W = !0)
            }
            function st() {
                if (!y)
                    for (var e in se.experiment)
                        if (se.experiment[e].forms) {
                            var t = !1
                              , i = ZAB.current_url;
                            if (se.experiment[e].forms.form_conversion_url)
                                for (var n = 0; n < se.experiment[e].forms.form_conversion_url.length; n++)
                                    if (et.isURLSMatch(i, se.experiment[e].forms.form_conversion_url[n])) {
                                        t = !0;
                                        break
                                    }
                            if (t)
                                if (0 == se.experiment[e].forms.domain_match && se.is_cross_origin_enabled)
                                    if (me()) {
                                        var r = {
                                            key: se.experiment[e].key,
                                            callback: ct
                                        };
                                        et.iframeCommunication(2, r)
                                    } else
                                        W || at();
                                else {
                                    var o = ut.getCookieValue("zfa" + se.experiment[e].key);
                                    if (ut.deleteCookie("zfa" + se.experiment[e].key),
                                    o) {
                                        var a = JSON.parse(o);
                                        et.sendDataToServer(6, a)
                                    }
                                }
                        }
            }
            function ct(e) {
                et.exists(e) && ZAB.zab.sendDataToServer(6, e)
            }
            et.findExperiment = function() {
                var e = {};
                if (!se || !se.experiment)
                    return e;
                je.info("Checking the bucket for returning visitor");
                var t = [1, 2]
                  , i = et.getBucketInfo();
                for (var r in i)
                    if (i.hasOwnProperty(r) && "-" != i[r] && se.experiment.hasOwnProperty(r) && t.indexOf(se.experiment[r].type) > -1 && et.isExperimentURLMatches(se.experiment[r])) {
                        if (3 == se.experiment[r].activation_mode) {
                            Ve.checkExpConditionSatisfied(se.experiment[r]) ? e[r] = se.experiment[r] : Ve.addExperimentToEvaluateArray(se.experiment[r]);
                            continue
                        }
                        ZAB.manualactivation || 2 != se.experiment[r].activation_mode ? e[r] = se.experiment[r] : je.info("Manual Exp on this page")
                    }
                if (n.extend(e, function(e) {
                    var t = et.getBucketInfo()
                      , i = {};
                    for (var n in se.experiment)
                        if (se.experiment.hasOwnProperty(n)) {
                            if (et.exists(t) && t.hasOwnProperty(n))
                                continue;
                            if (e.indexOf(se.experiment[n].type) > -1 && 2 === se.experiment[n].status && et.isExperimentURLMatches(se.experiment[n])) {
                                if (3 == se.experiment[n].activation_mode && !Ve.checkExpConditionSatisfied(se.experiment[n])) {
                                    Ve.addExperimentToEvaluateArray(se.experiment[n]);
                                    continue
                                }
                                (!ZAB.manualactivation && 2 != se.experiment[n].activation_mode || ZAB.manualactivation && 2 == se.experiment[n].activation_mode) && (i[n] = se.experiment[n])
                            }
                        }
                    return i
                }(t)),
                et.exists(e))
                    return e = le.selectRandomExperimentFromMEGroup(e);
                je.info("THERE ARE NO ABTEST OR SPLITURL EXP MATCHING THIS PAGE'S URL")
            }
            ,
            et.isURLSMatch = function(t, i) {
                if (et.exists(t) && et.exists(i)) {
                    var n = 1
                      , r = 2
                      , o = 3
                      , a = 4
                      , s = 5
                      , c = 6
                      , u = 7
                      , p = 8
                      , l = 10
                      , d = !1;
                    switch (parseInt(i.match_type)) {
                    case n:
                        d = h("//" + t.replace(/^(https?:\/\/www\.|https?:\/\/|www.|\/\/)?/, ""), "//" + i.value.replace(/^(https?:\/\/www\.|https?:\/\/|www.|\/\/)?/, ""));
                        break;
                    case r:
                        d = function(e, t) {
                            var i = et.parseURL(et.trimURL(f(e)))
                              , n = et.parseURL(et.trimURL(f(t)));
                            if (h(e, t) && i.query === n.query && i.fragment === n.fragment)
                                return !0
                        }("//" + t.replace(/^(https?:\/\/www\.|https?:\/\/|www.|\/\/)?/, ""), "//" + i.value.replace(/^(https?:\/\/www\.|https?:\/\/|www.|\/\/)?/, ""));
                        break;
                    case o:
                        d = function(e, t) {
                            try {
                                t = m(t = g(t), "\\*", "*"),
                                E.checkStartsWith(t, "*") || (t = "^" + t),
                                E.checkEndsWith(t, "*") || (t += "$");
                                var i = function(e) {
                                    return e = m(e, "*", ".*"),
                                    new RegExp(e,"i")
                                }(t);
                                if (-1 != e.indexOf("?")) {
                                    var n = e.split("?")
                                      , r = n[1]
                                      , o = n[0]
                                      , a = E.checkEndsWith(o, "/") ? o.substring(0, o.length - 1) : o;
                                    return v(e, i) || v(o, i) || v(a, i) || v(a + "?" + r, i)
                                }
                                return v(e, i)
                            } catch (e) {
                                return w.error(e),
                                !1
                            }
                        }(t, i.value);
                        break;
                    case a:
                        d = v(t, i.value);
                        break;
                    case s:
                        d = function(e, t) {
                            var i = f(e);
                            if (t = f(t),
                            i.indexOf(t) > -1)
                                return !0
                        }(t, i.value);
                        break;
                    case c:
                        d = function(e, t) {
                            var i = f(e);
                            if (t = f(t),
                            0 === i.indexOf(t))
                                return !0
                        }(et.trimURL(t.replace(/^(https?:\/\/www\.|https?:\/\/|www.|\/\/)?/, "")), et.trimURL(i.value.replace(/^(https?:\/\/www\.|https?:\/\/|www.|\/\/)?/, "")));
                        break;
                    case u:
                        d = function(e, t) {
                            var i = f(e);
                            if (t = f(t),
                            E.checkEndsWith(i, t))
                                return !0
                        }(et.trimURL(t.replace(/^(https?:\/\/www\.|https?:\/\/|www.|\/\/)?/, "")), et.trimURL(i.value.replace(/^(https?:\/\/www\.|https?:\/\/|www.|\/\/)?/, "")));
                        break;
                    case p:
                        d = function(e, t) {
                            var i = et.parseURL(f(e))
                              , n = et.parseURL(f(t));
                            return et.isHostMatch(i.domain, n.domain)
                        }("//" + t.replace(/^(https?:\/\/www\.|https?:\/\/|www.|\/\/)?/, ""), "//" + i.value.replace(/^(https?:\/\/www\.|https?:\/\/|www.|\/\/)?/, ""));
                        break;
                    case l:
                        d = function(t, i) {
                            var n = !1;
                            if (!e.ZAB.data.url_group || !e.ZAB.data.url_group[t])
                                return n;
                            for (var r = e.ZAB.data.url_group[t], o = r.include_urls, a = i, s = 0; s < o.length; s++)
                                if (et.isURLSMatch(a, o[s])) {
                                    n = o[s];
                                    break
                                }
                            if (!et.exists(r.exclude_urls))
                                return n;
                            var c = r.exclude_urls;
                            for (s = 0; s < c.length; s++)
                                if (et.isURLSMatch(a, c[s])) {
                                    n = !1;
                                    break
                                }
                            return n
                        }(i.value, t)
                    }
                    return je.info("URL Match Check - Target URL : " + t + "; Match Obj : " + JSON.stringify(i) + "; Success : " + d),
                    d
                }
                function f(e) {
                    return (e || "").toLowerCase()
                }
                function g(e) {
                    return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
                }
                function m(e, t, i) {
                    return e.replace(new RegExp(g(t),"g"), i)
                }
                function h(e, t) {
                    var i = et.parseURL(f(e))
                      , n = et.parseURL(f(t));
                    return et.isHostMatch(i.domain, n.domain) && et.trimURL(i.path) === et.trimURL(n.path)
                }
                function v(e, t) {
                    if (!(t instanceof RegExp)) {
                        var i = t.lastIndexOf("/");
                        try {
                            t = new RegExp(t.slice(1, i),t.slice(i + 1))
                        } catch (e) {
                            return !1
                        }
                    }
                    if (t.test(e))
                        return !0
                }
            }
            ,
            et.isAudienceMatching = function(i, n, r) {
                var o = {
                    BROWSER: "browser",
                    OS: "os",
                    DEVICE_TYPE: "device_type",
                    DEVICE: "device",
                    VISITOR: "visitor_type",
                    LOCATION: "location",
                    LANGUAGE: "language",
                    CURRENT_URL: "current_url",
                    CURRENTURL: "currenturl",
                    COOKIE: "cookie_value",
                    REFERRELURL: "referral_url",
                    QUERYPARAMETER: "query_parameter",
                    TRAFFIC: "traffic",
                    HOURDAY: "hour_of_the_day",
                    DAYWEEK: "day_of_week",
                    JSVARIABLE: "js_variable",
                    CUSTOMDIMENSION: "custom_dimension",
                    ADWORDSCAMPAIGN: "adwords_campaign",
                    ADWORDSGROUP: "adwords_group",
                    ADCAMPAIGN: "ad_campaign",
                    ORGANICSEARCH: "organic_search",
                    PAIDSEARCH: "paid_search",
                    SOURCE: "source",
                    USER_ATTRIBUTE: "user",
                    USER_ACTIVITY: "activity",
                    WEATHER: "weather"
                };
                function a(e) {
                    for (var t = [], i = e.condition_type, n = e.conditions.length, r = 0; r < n; r++)
                        t[r] = c(e.conditions[r]);
                    return w.info({
                        msg: "Outer Aud Condition (1-AND;2-OR) - TYPE : " + i + " VALUES : " + JSON.stringify(t) + " Experiment key : " + Object.keys(ZAB.experiment)
                    }),
                    u(t, i)
                }
                function c(e) {
                    for (var t = e.condition_type, i = [], r = e.conditions, o = 0; o < r.length; o++) {
                        var a;
                        if (a = et.exists(n) ? h(r[o]) : p(r[o]),
                        1 == t) {
                            if (!1 === a)
                                return !1
                        } else if (!0 === a)
                            return !0;
                        i[o] = a,
                        je.info("  AUDIENCE TYPE :" + r[o].type + " OPERATOR : " + r[o].operator + " VALUES : " + JSON.stringify(r[o].values) + " RESULT : " + i[o])
                    }
                    return je.info("  Inner Aud Condition (1-AND;2-OR) - TYPE : " + t + " VALUES : " + JSON.stringify(i)),
                    u(i, t)
                }
                function u(e, t) {
                    return 1 == t ? !(e.indexOf(!1) > -1) : e.indexOf(!0) > -1
                }
                function p(i) {
                    var n = i.type
                      , r = i.operator
                      , a = i.values;
                    switch (n) {
                    case o.BROWSER:
                        return y(r, a, ZAB.useragentrawdata.bv);
                    case o.OS:
                        return y(r, a, ZAB.useragentrawdata.ov);
                    case o.DEVICE:
                    case o.DEVICE_TYPE:
                        return y(r, a, ZAB.useragentrawdata.dv);
                    case o.VISITOR:
                        var c = ZAB.returning;
                        return et.exists(X) && a.indexOf("new") > -1 && ne.isVariationBucketedForExp(X) && (c = !1),
                        y(r, a, c = c ? "returning" : "new");
                    case o.COUNTRY:
                        return y(r, a, ZAB.countryName);
                    case o.LOCATION:
                        return A(a, r, ZAB.countryName, ZAB.state, ZAB.city);
                    case o.LANGUAGE:
                        return y(r, a, ZAB.useragentrawdata.lv);
                    case o.CURRENT_URL:
                    case o.CURRENTURL:
                        return y(r, a, ZAB.useragentrawdata.cv);
                    case o.REFERRELURL:
                        return y(r, a, ZAB.useragentrawdata.rv);
                    case o.QUERYPARAMETER:
                        for (var u = e.location.href, p = i.attribute_name, m = a.length; m--; )
                            a[m] = decodeURIComponent(a[m].replaceAll("+", " "));
                        return S(r, p, a, u);
                    case o.TRAFFIC:
                        return y(r, a, ZAB.useragentrawdata.tv);
                    case o.HOURDAY:
                        return y(r, a, (new Date).getHours());
                    case o.DAYWEEK:
                        var h = (new Date).getDay();
                        return y(r, a, h = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"][h]);
                    case o.JSVARIABLE:
                        var v = i.attribute_name;
                        return b(r, a, e[v]);
                    case o.ADWORDSCAMPAIGN:
                        return _(r, a, u = e.location.href);
                    case o.ADWORDSGROUP:
                        return T(r, a, u = e.location.href);
                    case o.ADCAMPAIGN:
                        return y(r, a, et.getZABQueryKeyValue(e.location.href, "utm_campaign"));
                    case o.ORGANICSEARCH:
                        return function(e, t) {
                            for (var i = ["www.google.", "r.search.yahoo.com", "bing.com", "search.aol.com", "aolsearch.com", "ask.com", "lycos.com", "about.com", "baidu.com", "yandex.", "search.seznam.cz", "nova.rambler.ru", "arama.mynet.com", "kvasir.no", "search.yam.com", "szukaj.wp.pl", "search.daum.net", "search.naver.com"], n = 0; n < i.length; n++)
                                if (1 == e) {
                                    if (t.contains(i[n]))
                                        return !0
                                } else if (2 == e && t.notcontains(i[n]))
                                    return !0;
                            return !1
                        }(r, u = t.referrer.toString());
                    case o.PAIDSEARCH:
                        return function(e, t) {
                            for (var i = ["utm_campaign", "utm_source", "gclid", "otm_source"], n = 0; n < i.length; n++) {
                                var r = et.getZABQueryKeyValue(t, i[n]);
                                if (1 == e) {
                                    if (et.exists(r))
                                        return !0
                                } else if (2 == e && !et.exists(r))
                                    return !0
                            }
                            return !1
                        }(r, u = e.location.href);
                    case o.SOURCE:
                        return function(i, n) {
                            for (var r = !1, o = 0; o < n.length; o++) {
                                var a = n[o];
                                switch (a) {
                                case "direct visitors":
                                    var s = ZAB.useragentrawdata.rv;
                                    "" == s && (r = !0);
                                    break;
                                case "social traffic":
                                    for (var s = ZAB.useragentrawdata.rv, c = ["facebook.com", "messenger.com", "plus.google.com", "plus.url.google.com", "t.co", "twitter.com", "instagram.com", "linkedin.com", "pinterest.com", "vk.com"], u = 0; u < c.length; u++)
                                        if (s.indexOf(c[u]) > -1) {
                                            r = !0;
                                            break
                                        }
                                    break;
                                case "organic search":
                                    for (var s = t.referrer.toString(), p = ["www.google.", "r.search.yahoo.com", "bing.com", "search.aol.com", "aolsearch.com", "ask.com", "lycos.com", "about.com", "baidu.com", "yandex.", "search.seznam.cz", "nova.rambler.ru", "arama.mynet.com", "kvasir.no", "search.yam.com", "szukaj.wp.pl", "search.daum.net", "search.naver.com"], u = 0; u < p.length; u++)
                                        if (s.indexOf(p[u]) > -1) {
                                            r = !0;
                                            break
                                        }
                                    break;
                                case "referral traffic":
                                    var s = t.referrer.toString();
                                    et.exists(s) && (r = !0);
                                    break;
                                case "paid search":
                                    for (var s = e.location.href, l = ["utm_campaign", "utm_source", "gclid", "otm_source"], u = 0; u < l.length; u++) {
                                        var d = et.getZABQueryKeyValue(s, l[u]);
                                        if (null != d) {
                                            r = !0;
                                            break
                                        }
                                    }
                                }
                            }
                            return 2 == i && (r = !r),
                            r
                        }(r, a);
                    case o.USER_ATTRIBUTE:
                        return function(t, i, n) {
                            var r = E.getUserAttributeValue(i);
                            return !!e.ZAB.zab.exists(r) && (1 === t ? l(r, n) : 2 === t ? d(r, n) : 3 === t ? f(r, n) : 4 === t ? g(r, n) : void 0)
                        }(r, p = i.attribute_name, a);
                    case o.USER_ACTIVITY:
                        return function(e, t, i) {
                            return E.getUserActivityValue(t, e, i)
                        }(r, p = i.attribute_name, a);
                    case o.WEATHER:
                        return function(e) {
                            var t, i, n, r, o = s.temperature, a = e.operator;
                            return !!et.exists(o) && ("celsius" === (r = e.boundUnitKey) ? t = Number(o.temp) - 273.15 : "fahrenheit" === r && (t = 1.8 * Number(o.temp) - 459.67),
                            11 === a ? (i = e.boundaryEndValue,
                            t < Number(i)) : 12 === a ? (n = e.boundaryStartValue,
                            t > Number(n)) : 13 === a ? (n = e.boundaryStartValue,
                            i = e.boundaryEndValue,
                            t >= n && t <= i) : void 0)
                        }(i)
                    }
                }
                function l(e, t) {
                    for (var i = t.length; i--; )
                        if (t[i].toString().toLowerCase() === e.toString().toLowerCase())
                            return !0;
                    return !1
                }
                function d(e, t) {
                    for (var i = t.length; i--; )
                        if (t[i].toString().toLowerCase() === e.toString().toLowerCase())
                            return !1;
                    return !0
                }
                function f(e, t) {
                    for (var i = t.length; i--; )
                        if (e.toString().toLowerCase().indexOf(t[i].toString().toLowerCase()) > -1)
                            return !0;
                    return !1
                }
                function g(e, t) {
                    for (var i = t.length; i--; )
                        if (-1 === e.toString().toLowerCase().indexOf(t[i].toString().toLowerCase()))
                            return !0;
                    return !1
                }
                function m(e, t, i) {
                    for (var n = 0; n < e.length; n++)
                        for (var r = e[n], o = r.values, a = r.operator, s = 0; s < o.length; s++) {
                            var c = y(t, i, o[s].toLowerCase());
                            if (1 == a) {
                                if (c)
                                    return !0
                            } else if (2 == a && !c)
                                return !0
                        }
                    return !1
                }
                function h(e) {
                    var t = e.type
                      , i = e.operator
                      , r = e.values;
                    switch (t) {
                    case o.BROWSER:
                        return !n.hasOwnProperty(o.BROWSER) || m(n[o.BROWSER], i, r);
                    case o.OS:
                        return !n.hasOwnProperty(o.OS) || m(n[o.OS], i, r);
                    case o.DEVICE:
                        return !n.hasOwnProperty(o.DEVICE) || m(n[o.DEVICE], i, r);
                    case o.VISITOR:
                        return !n.hasOwnProperty(o.VISITOR) || m(n[o.VISITOR], i, r);
                    case o.COUNTRY:
                        return !n.hasOwnProperty(o.COUNTRY) || m(n[o.COUNTRY], i, r);
                    case o.LOCATION:
                        if (!n.hasOwnProperty(o.LOCATION))
                            return !0;
                        for (var a = n[o.LOCATION], s = 0; s < a.length; s++)
                            for (var c = a[s], u = c.values, p = c.operator, l = 0; l < u.length; l++) {
                                var d = u[l].toLowerCase().split(",");
                                if (1 == d.length ? E = A(r, i, d[0], null, null) : 2 == d.length ? E = A(r, i, d[1], d[0], null) : 3 == d.length && (E = A(r, i, d[2], d[1], d[0])),
                                1 == p) {
                                    if (E)
                                        return !0
                                } else if (2 == p && !E)
                                    return !0
                            }
                        break;
                    case o.LANGUAGE:
                        return !n.hasOwnProperty(o.LANGUAGE) || m(n[o.LANGUAGE], i, r);
                    case o.REFERRELURL:
                        return !n.hasOwnProperty(o.REFERRELURL) || m(n[o.REFERRELURL], i, r);
                    case o.QUERYPARAMETER:
                        if (!n.hasOwnProperty(o.QUERYPARAMETER))
                            return !0;
                        var f = e.attribute_name
                          , g = n[o.QUERYPARAMETER];
                        for (s = 0; s < g.length; s++) {
                            var h = g[s]
                              , v = h.attribute_name
                              , w = h.values
                              , E = (p = h.operator,
                            S(i, f, r, "https://www.a.b?" + v + "=" + w[0]));
                            if (1 == p) {
                                if (E)
                                    return !0
                            } else if (2 == p && !E)
                                return !0
                        }
                        break;
                    case o.TRAFFIC:
                        return !n.hasOwnProperty(o.TRAFFIC) || m(n[o.TRAFFIC], i, r);
                    case o.HOURDAY:
                        return !n.hasOwnProperty(o.HOURDAY) || m(n[o.HOURDAY], i, r);
                    case o.DAYWEEK:
                        return !n.hasOwnProperty(o.DAYWEEK) || m(n[o.DAYWEEK], i, r);
                    case o.JSVARIABLE:
                        if (!n.hasOwnProperty(o.JSVARIABLE))
                            return !0;
                        var y = n[o.JSVARIABLE]
                          , x = !1
                          , O = e.attribute_name;
                        for (s = 0; s < y.length; s++) {
                            var k = y[s];
                            if ((v = k.attribute_name) === O)
                                if (x = !0,
                                E = b(i, r, w = k.values),
                                1 == p) {
                                    if (E)
                                        return !0
                                } else if (2 == p && !E)
                                    return !0
                        }
                        if (!1 === x)
                            return !0;
                        break;
                    case o.ADWORDSCAMPAIGN:
                        if (!n.hasOwnProperty(o.ADWORDSCAMPAIGN))
                            return !0;
                        var C = n[o.ADWORDSCAMPAIGN];
                        for (s = 0; s < C.length; s++)
                            for (u = (N = C[s]).values,
                            p = N.operator,
                            l = 0; l < u.length; l++)
                                if (E = _(i, r, "https://www.a.b?ps_ca=" + u[l]),
                                1 == p) {
                                    if (E)
                                        return !0
                                } else if (2 == p && !E)
                                    return !0;
                        break;
                    case o.ADWORDSGROUP:
                        if (!n.hasOwnProperty(o.ADWORDSGROUP))
                            return !0;
                        var R = n[o.ADWORDSGROUP];
                        for (s = 0; s < R.length; s++)
                            for (u = (N = R[s]).values,
                            p = N.operator,
                            l = 0; l < u.length; l++)
                                if (E = T(i, r, "https://www.a.b?ps_adg=" + u[l]),
                                1 == p) {
                                    if (E)
                                        return !0
                                } else if (2 == p && !E)
                                    return !0;
                        break;
                    case o.SOURCE:
                        if (!n.hasOwnProperty(o.SOURCE))
                            return !0;
                        var B = n[o.SOURCE];
                        for (s = 0; s < B.length; s++) {
                            var N;
                            for (u = (N = B[s]).values,
                            p = N.operator,
                            l = 0; l < u.length; l++) {
                                var L;
                                switch (u[l]) {
                                case "direct visitors":
                                    L = "";
                                    break;
                                case "social traffic":
                                    L = "facebook.com";
                                    break;
                                case "organic search":
                                    L = "bing.com";
                                    break;
                                case "referral traffic":
                                    L = "x";
                                    break;
                                case "paid search":
                                    L = "https://www.a.b?gclid=1"
                                }
                                if (E = I(i, r, L),
                                1 == p) {
                                    if (E)
                                        return !0
                                } else if (2 == p && !E)
                                    return !0
                            }
                        }
                    }
                    return !1
                }
                function v(e) {
                    return e.replace(/\s/g, "").toLowerCase()
                }
                function A(e, t, i, n, r) {
                    "unitedstatesofamerica" === i && (i = "unitedstates");
                    for (var o = !1, a = 0; a < e.length; a++) {
                        var s = e[a].split(",");
                        if (1 === s.length && i === v(s[0])) {
                            o = !0,
                            w.info({
                                msg: "Country received is " + i + " Country in exp config is " + v(s[0])
                            });
                            break
                        }
                        if (2 === s.length && n === v(s[0]) && i === v(s[1])) {
                            o = !0,
                            w.info({
                                msg: "State received is " + n + " State in exp config is " + v(s[0]) + " Country received is " + i + " Country in exp config is " + v(s[1])
                            });
                            break
                        }
                        if (3 === s.length && r === v(s[0]) && n === v(s[1]) && i === v(s[2])) {
                            o = !0,
                            w.info({
                                msg: "City received is " + r + " City in exp config is " + v(s[0]) + " State received is " + n + " State in exp config is " + v(s[1]) + " Country received is " + i + " Country in exp config is " + v(s[2])
                            });
                            break
                        }
                    }
                    2 === t && (o = !o);
                    try {
                        var c = "Portal is " + ZAB.portal + " Experiment config is " + e + " IP received is City , State, Nation -" + r + "," + n + "," + i;
                        et.generateUserAgentData();
                        var u = {
                            msg: c = c + " User agent is " + JSON.stringify(ZAB.useragentrawdata)
                        };
                        w.info(u)
                    } catch (e) {}
                    return o
                }
                function y(e, t, i) {
                    return 1 == e ? l(i, t) : 2 == e ? d(i, t) : 3 == e ? f(i, t) : 4 == e ? g(i, t) : void 0
                }
                function S(e, t, i, n) {
                    var r = et.getQueryParameters(n.replace(/^.*\?/, ""))
                      , o = r[t];
                    return void 0 === o && (o = ""),
                    1 == e ? l(o, i) : 2 == e ? d(o, i) : 5 == e ? !(!r.hasOwnProperty(t) || "" != o) : 6 == e ? "" != o : void 0
                }
                function _(e, t, i) {
                    var n = et.getZABQueryKeyValue(i, "ps_ca");
                    return 1 == e ? l(n, t) : 2 == e ? d(n, t) : 14 == e ? null != n : void 0
                }
                function T(e, t, i) {
                    var n = et.getZABQueryKeyValue(i, "ps_adg");
                    return 1 == e ? l(n, t) : 2 == e ? d(n, t) : 14 == e ? null != n : void 0
                }
                function b(e, t, i) {
                    return 1 == e ? !!et.exists(i) && l(i, t) : 2 == e ? !!et.exists(i) && d(i, t) : 5 == e ? "" == i : 6 == e ? "" != i : 7 == e ? "undefined" == i : void 0
                }
                function I(e, t, i) {
                    var n = !1;
                    if (t.indexOf("direct visitors") > -1 && "" == i && (n = !0),
                    t.indexOf("social traffic") > -1)
                        for (var r = ["facebook.com", "messenger.com", "plus.google.com", "plus.url.google.com", "t.co", "twitter.com", "instagram.com", "linkedin.com", "pinterest.com", "vk.com"], o = 0; o < r.length; o++)
                            if (i.indexOf(r[o]) > -1) {
                                n = !0;
                                break
                            }
                    if (t.indexOf("organic search") > -1) {
                        var a = ["www.google.", "r.search.yahoo.com", "bing.com", "search.aol.com", "aolsearch.com", "ask.com", "lycos.com", "about.com", "baidu.com", "yandex.", "search.seznam.cz", "nova.rambler.ru", "arama.mynet.com", "kvasir.no", "search.yam.com", "szukaj.wp.pl", "search.daum.net", "search.naver.com"];
                        for (o = 0; o < a.length; o++)
                            if (i.indexOf(a[o]) > -1) {
                                n = !0;
                                break
                            }
                    }
                    if (t.indexOf("paid search") > -1) {
                        var s = ["utm_campaign", "utm_source", "gclid", "otm_source"];
                        for (o = 0; o < s.length; o++)
                            if (null != et.getZABQueryKeyValue(i, s[o])) {
                                n = !0;
                                break
                            }
                    }
                    return t.indexOf("referral traffic") > -1 && et.exists(i) && (n = !0),
                    2 == e && (n = !n),
                    n
                }
                if (!et.exists(i) || 0 === i.length)
                    return !0;
                if (et.exists(n)) {
                    var x = i[0]
                      , O = ZAB.data.audience[x];
                    return 0 == Object.keys(O.audience_condition).length || a(O.audience_condition)
                }
                if (et.exists(r))
                    return a(r);
                et.generateUserAgentData();
                for (var k = 0; k < i.length; k++) {
                    x = i[k];
                    var C = ZAB.data.audience[x];
                    if (je.info("Audience Match Check - AUDIENCE KEY : " + i[k] + " ; INFO : " + JSON.stringify(C)),
                    0 == Object.keys(C.audience_condition).length || C && a(C.audience_condition))
                        return je.info("AUDIENCE MATCH SUCCESSFUL"),
                        !0
                }
                return !1
            }
            ,
            et.sendDataViaPostRequest = function(t, i, n) {
                function r(e, t) {
                    var i = function(e, t) {
                        var i = new XMLHttpRequest;
                        return "withCredentials"in i ? i.open(e, t, !0) : "undefined" != typeof XDomainRequest ? (i = new XDomainRequest).open(e, t) : i = null,
                        i
                    }("POST", e);
                    try {
                        if (i)
                            return i.setRequestHeader("Content-Type", "text/plain"),
                            i.onreadystatechange = function() {
                                n && "function" == typeof n && (4 == this.readyState && 200 == this.status ? n(!0) : n(!1))
                            }
                            ,
                            void i.send(JSON.stringify(t))
                    } catch (e) {
                        w.error(e)
                    }
                }
                e.ZAB.isBot ? w.info({
                    msg: "!!! Bot Detected, sendDataViaPostRequest method skipped"
                }) : t && i && (v || (ZAB.returning,
                r(t, i)))
            }
            ,
            et.getDataFromServer = function(t, i) {
                function n(e) {
                    var t = function(e, t) {
                        var i = new XMLHttpRequest;
                        return "withCredentials"in i ? i.open(e, t, !0) : "undefined" != typeof XDomainRequest ? (i = new XDomainRequest).open(e, t) : i = null,
                        i
                    }("GET", e);
                    try {
                        if (t)
                            return t.setRequestHeader("Content-Type", "text/plain"),
                            t.onreadystatechange = function() {
                                4 == this.readyState && 200 == this.status && i(t.response)
                            }
                            ,
                            void t.send()
                    } catch (e) {
                        w.error(e)
                    }
                }
                e.ZAB.isBot ? w.info({
                    msg: "!!! Bot Detected, getDataFromServer method skipped"
                }) : t && (ZAB.returning,
                n(t))
            }
            ,
            et.sendDataToServer = function() {
                if (e.ZAB.isBot)
                    w.info({
                        msg: "!!! Bot Detected, sendDataToServer method skipped"
                    });
                else {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    ZAB.returning,
                    o.apply(this, n)
                }
                function o(t, n, r) {
                    var o = 1
                      , s = 2
                      , c = 3
                      , u = 4
                      , p = 5
                      , l = 6
                      , d = 7
                      , f = 8
                      , g = 9
                      , m = 10
                      , h = 11
                      , A = 12
                      , E = 13
                      , y = 14
                      , S = 15
                      , _ = 16
                      , b = 17
                      , I = 19
                      , x = 20
                      , O = 21;
                    if (He.getIsQAMode())
                        try {
                            t <= 4 && PubSub.publish("qa-events", [n])
                        } catch (e) {}
                    else if (et.exists(t) && et.exists(n) && !v) {
                        T = !0;
                        var k = !1
                          , C = !1;
                        switch (t) {
                        case s:
                            var R, B = !1;
                            n.grd[0].pi && (R = n.urd.d,
                            B = !0),
                            e.ZAB.data.is_full_tracking_enabled && n.grd[0].ipl && n.grd[0].g_s && 1 === n.grd[0].g_s && (n = ee.addFullTrackingDataToRawData(n, "goal")),
                            B && (n.urd.cd = R),
                            k = !0;
                            break;
                        case o:
                        case _:
                        case y:
                            k = !0;
                            break;
                        case c:
                        case u:
                            k = !0;
                            break;
                        case p:
                        case S:
                            k = !0;
                            break;
                        case d:
                        case f:
                            if (e.ZAB.pcdonottrack)
                                return;
                            return D = (D = (D = (D = Qe.getFullURL(Qe.rawdataurl)) + "?type=" + t) + "&domainname=" + ZAB.data.portal_name) + "&sessionId=" + n.srrd[0].f,
                            void this.sendDataViaPostRequest(D, n, r);
                        case A:
                            if (e.ZAB.pcdonottrack)
                                return;
                            return D = (D = (D = (D = Qe.getSessionIframeTrackingURL(Qe.rawdataurl)) + "?type=" + t) + "&domainname=" + ZAB.data.portal_name) + "&sessionId=" + n.srrd[0].f,
                            void this.sendDataViaPostRequest(D, n, r);
                        case l:
                            D = (D = (D = Qe.getFullURL(Qe.rawdataurl)) + "?type=" + t) + "&domainname=" + ZAB.data.portal_name;
                            var N = !1;
                            if (null != i.sendBeacon && (N = i.sendBeacon(D, JSON.stringify(n))),
                            !N && (this.sendDataViaPostRequest(D, n, function(e) {
                                e && (C = !0)
                            }),
                            n.forms[0].pageHideEvent))
                                for (var L = (new Date).getTime(); (new Date).getTime() - L < 1e3 && !1 === C; )
                                    ;
                            return;
                        case m:
                            (U = JSON.parse(JSON.stringify(n.urd))).sid = ee.getSessionId(),
                            U.fsrc = ee.getFirstSource(),
                            U.fchn = ee.getFirstChannel(),
                            n.urd = U,
                            k = !0;
                            break;
                        case g:
                            k = !0;
                            break;
                        case b:
                        case h:
                        case E:
                        case O:
                            k = !0;
                            break;
                        case I:
                            var U;
                            (U = JSON.parse(JSON.stringify(n.urd))).sid = ee.getSessionId(),
                            U.fsrc = ee.getFirstSource(),
                            U.fchn = ee.getFirstChannel(),
                            n.urd = U,
                            k = !0;
                            break;
                        case x:
                            k = !0
                        }
                        if (k) {
                            var D;
                            if ((D = (D = (D = (D = Qe.getFullURL(Qe.rawdataurl)) + "?raw=" + encodeURIComponent(JSON.stringify(n))) + "&type=" + t) + "&domainname=" + ZAB.data.portal_name).length > a.REQUEST_URL_MAX_LENGTH)
                                return D = (D = (D = Qe.getFullURL(Qe.rawdataurl)) + "?type=" + t) + "&domainname=" + ZAB.data.portal_name,
                                void this.sendDataViaPostRequest(D, n, null);
                            var Z = !1
                              , P = !1;
                            e.ZAB.zab.generateUserAgentData();
                            var M = ZAB.useragentrawdata;
                            if ("iOS" !== M.ov || "tablet" !== M.dv && "mobile" !== M.dv || (P = !0),
                            !P && null != i.sendBeacon)
                                try {
                                    Z = i.sendBeacon(D),
                                    T = !1
                                } catch (e) {
                                    w.error(e)
                                }
                            !1 === Z && (new Image(1,1).src = D,
                            setTimeout(function() {
                                T = !1
                            }, 1e3))
                        }
                    }
                }
            }
            ;
            var ut = {
                setCookie: function(e, i, n) {
                    var r = "";
                    n && ((o = new Date).setTime(o.getTime() + 365 * n * 24 * 60 * 60 * 1e3),
                    r = ";expires=" + o.toUTCString());
                    var o, a = et.parseURL(ZAB.current_url).domain.replace(/^www\./, "");
                    y && ((o = new Date).setTime(o.getTime() + 30 * n * 60 * 1e3),
                    r = ";expires=" + o.toUTCString()),
                    t.cookie = e + "=" + encodeURIComponent(i) + r + ";path=/;domain=." + a + N.getSamesiteSecureString()
                },
                setCookieInTLD: function(e, i, n) {
                    var r = "";
                    n && ((o = new Date).setTime(o.getTime() + 365 * n * 24 * 60 * 60 * 1e3),
                    r = ";expires=" + o.toUTCString());
                    var o, a = this.getTLDFromURL();
                    y && ((o = new Date).setTime(o.getTime() + 30 * n * 60 * 1e3),
                    r = ";expires=" + o.toUTCString()),
                    t.cookie = e + "=" + encodeURIComponent(i) + r + ";path=/;domain=." + a + N.getSamesiteSecureString()
                },
                getTLDFromURL: function() {
                    for (var i = 0, n = t.domain, r = n.split("."), o = "zpssr" + (new Date).getTime(); i < r.length - 1 && -1 === t.cookie.indexOf(o + "=" + o); )
                        n = r.slice(-1 - ++i).join("."),
                        t.cookie = o + "=" + o + ";domain=" + n + e._zps.api("getSamesiteSecureString");
                    return t.cookie = o + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + n + e._zps.api("getSamesiteSecureString"),
                    n
                },
                deleteCookie: function(e) {
                    var i = et.parseURL(ZAB.current_url).domain.replace(/^www\./, "");
                    t.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=." + i
                },
                deleteCookieFromTLD: function(e) {
                    var i = this.getTLDFromURL();
                    t.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=." + i
                },
                getCookieValue: function(e) {
                    for (var i = e + "=", n = t.cookie.split(";"), r = 0; r < n.length; r++) {
                        for (var o = n[r]; " " == o.charAt(0); )
                            o = o.substring(1);
                        if (0 == o.indexOf(i))
                            return decodeURIComponent(o.substring(i.length, o.length))
                    }
                    return ""
                },
                checkCookieExists: function(e) {
                    return "" != ut.getCookieValue(e)
                }
            }
              , pt = {
                tpCookieCallback: function(e) {
                    if (et.exists(e)) {
                        var t, i, n;
                        for (t in "prebodigital" === ZAB.data.portal_name && w.info({
                            msg: "inside tpCookieCallback with cookie" + e
                        }),
                        e)
                            if (e.hasOwnProperty(t) && et.exists(se.experiment) && se.experiment.hasOwnProperty(t) && (i = se.experiment[t],
                            n = e[t],
                            i && i.variations && i.variations.hasOwnProperty(n))) {
                                et.exists(ZAB.experiment) || (ZAB.experiment = {}),
                                et.exists(ZAB.variation) || (ZAB.variation = {});
                                var r = i.variations[n];
                                ZAB.experiment[t] = i,
                                ZAB.variation[t] = r,
                                Ze(i);
                                break
                            }
                        if (et.exists(ZAB.returningForExp) || (ZAB.returningForExp = {}),
                        et.exists(e.returning) && (ZAB.returningForExp[t] = e.returning),
                        et.exists(e.source)) {
                            et.generateUserAgentData();
                            var o = ZAB.useragentrawdata;
                            o.tv = e.source,
                            ZAB.useragentrawdata = o
                        }
                        "prebodigital" === ZAB.data.portal_name && (w.info({
                            msg: "inside tpCookieCallback and Experiment - " + ZAB.experiment + "and Variation - " + ZAB.variation
                        }),
                        w.info({
                            msg: "inside tpCookieCallback and Experiment - " + Object.keys(ZAB.experiment) + " and Variation - " + Object.keys(ZAB.variation)
                        })),
                        et.exists(i) && et.exists(ZAB.variation[t]) && et.executeRedirectedExp(i, ZAB.variation[t])
                    }
                },
                processQAModeData: function(i) {
                    PubSub.subscribe("iframe-pubsub-ready", function() {
                        if (He.publishMouseCoordinates(),
                        !0 === i.data.valid) {
                            var n = i.data.qa;
                            ZAB.data = n,
                            n.currentdomain = u,
                            ZAB.current_url.indexOf("qa_mode_device_view=true") > -1 ? t.getElementById("zab-qamode").style.display = "none" : t.getElementById("zab-qamode").style.display = "block",
                            o()
                        } else {
                            var r;
                            i.data.hasOwnProperty("invalidtoken") && i.data.invalidtoken ? (PubSub.publish("qa-invalid-token"),
                            (r = t.getElementById("zab-qamode")).parentNode.removeChild(r)) : (PubSub.publish("qa-invalid-login"),
                            (r = t.getElementById("zab-qamode")).parentNode.removeChild(r))
                        }
                        function o(t) {
                            Ct();
                            var i, n, r, o = [], a = [], s = ZAB.data;
                            for (var c in s.currentdomain = u,
                            ZAB.current_url = ZAB.current_url.replace("?qa_mode=true", ""),
                            ZAB.current_url = ZAB.current_url.replace("&qa_mode_device_view=true", ""),
                            s.experiment) {
                                var p = s.experiment[c];
                                et.isExperimentURLMatches(p) ? (!et.exists(t) || et.isAudienceMatching(p.audience, t)) && (o.push(c),
                                a.push(p.name)) : delete s.experiment[c]
                            }
                            void 0 === t ? PubSub.publish("qa-all-ab", [s]) : PubSub.publish("qa-selected-exp", [a]),
                            PubSub.publish("qa-client-page-href", [e.location.href]),
                            ZAB.experiment = {},
                            ZAB.variation = {},
                            ZAB.returningForExp = {};
                            for (var l = 0; l < o.length; l++) {
                                var d = o[l]
                                  , f = ZAB.data.experiment[d];
                                ZAB.experiment[d] = f;
                                var g = Object.keys(f.variations)[0]
                                  , m = f.variations[g];
                                ZAB.variation[d] = m,
                                ZAB.returningForExp[d] = !1,
                                Ze(f),
                                2 === f.heatmap && mt(),
                                i = d,
                                n = g,
                                r = void 0,
                                r = et.getBucketInfo(),
                                (r = 0 == et.exists(r) ? {} : r)[i] = n,
                                ut.setCookie(ze.qabucket, JSON.stringify(r), 1)
                            }
                            et.sendVisitorInformation(ZAB.experiment, ZAB.variation),
                            Dt.onPageRefreshEvent()
                        }
                        PubSub.subscribe("qa-audience-set", o),
                        PubSub.subscribe("qa-variation-set", function(e) {
                            for (Ht in Ct(),
                            e)
                                Le(e[Ht])
                        }),
                        PubSub.subscribe("set-iframe-pointerevents", function(e) {
                            t.getElementById("zab-qamode").style.pointerEvents = e ? "auto" : "none"
                        })
                    })
                },
                receiver: function(i) {
                    var n = et.parseURL(i.origin);
                    if ("object" == $e(i.data))
                        if ("verifyScript" == i.data.id)
                            Me.verifyScript(i.data);
                        else {
                            if ("qamode" == i.data.id && et.isHostMatch(n.domain, u)) {
                                var r = t.createElement("iframe");
                                if (r.src = "https://" + Qe.qatoolsurl,
                                r.id = "zab-qamode",
                                r.setAttribute("style", "position:fixed;top:0px;left:0px;height:100%;width:100%;z-index:2147483647;border:none;display:none"),
                                t.body.appendChild(r),
                                void 0 === e.PubSub) {
                                    var o = t.createElement("script");
                                    (o = E.addNonce(o)).src = "https://" + Qe.pubsuburl;
                                    var s = t.getElementsByTagName("script")[0];
                                    s.parentNode.insertBefore(o, s),
                                    o.customdata = i,
                                    o.onload = function() {
                                        pt.processQAModeData(this.customdata)
                                    }
                                } else
                                    pt.processQAModeData(i);
                                return
                            }
                            if (i.data.id === a.GET_VISITOR_ID_AND_VISIT_ID) {
                                var c = e.zps.getVisitorIdAndVisitId();
                                if (c.id = a.VISITOR_AND_VISIT_ID,
                                i.data.iframesrc) {
                                    var p = et.parseURL(i.data.iframesrc);
                                    if (et.isHostMatch(n.domain, p.domain)) {
                                        var l = i.data.iframesrc;
                                        t.querySelector('iframe[src="' + l + '"]').contentWindow.postMessage(c, "*")
                                    }
                                } else
                                    e.postMessage(c, "*");
                                return
                            }
                        }
                    var d = i.data
                      , f = et.parseURL(Qe.framepageurl);
                    (et.isHostMatch(n.domain, f.domain) || et.isPushHostMatch(n.domain, f.domain)) && "object" == $e(d) && (0 === d.type && d.is_cross_origin_enabled && !g && (je.info("Iframe Script Loaded - TIME ::: " + ((new Date).getTime() - ZAB.iframe_starttime)),
                    g = !0,
                    et.processCustomEvents()),
                    2 == d.type && ("prebodigital" === ZAB.data.portal_name && w.info({
                        msg: "inside receiver callback"
                    }),
                    P.hasOwnProperty(d.callback) && (null != G[d.callback] ? (P[d.callback](d.value, G[d.callback], j[d.callback]),
                    delete G[d.callback],
                    delete j[d.callback]) : P[d.callback](d.value),
                    delete P[d.callback])),
                    5 != d.type && 9 != d.type && 12 != d.type || P.hasOwnProperty(d.callback) && (P[d.callback](d.value, d.revenue),
                    delete P[d.callback]),
                    13 == d.type && (C.setPushUuid(d.push_uuid),
                    C.setSentTime(Number(d.sent_time)),
                    C.setESDocId(d.es_doc_id),
                    C.removePushConversionFrame()))
                }
            };
            function lt(t, i) {
                var n = "trackEvent"
                  , r = "optInForPushNotification"
                  , o = "trackGoal"
                  , a = "trackRevenue"
                  , s = "activate"
                  , c = "setTracking"
                  , u = "show"
                  , p = "identifyUser"
                  , l = "trackActivity"
                  , d = "trackUser"
                  , f = "tagRecording"
                  , g = "disableCustomScriptExecution"
                  , m = t[0];
                if (i)
                    m === g ? (R = t[1]) && e._zps.api("setDisableCustomScriptExecution", [R]) : m === c && dt(t[1]);
                else
                    switch (m) {
                    case r:
                        ZAB.data.webpush.has_push_experiment && e.postMessage({
                            permission: !1,
                            id: "zps-notification-permission",
                            type: "script-template"
                        }, "*");
                        break;
                    case n:
                    case o:
                        var h = et.getGoalsByTypeFromJson([6]);
                        ZAB.data.is_cross_origin_enabled && !me() ? (et.customQueue = et.customQueue || [],
                        et.customQueue.push(t)) : et.trackEventGoals("trackGoal", h, t[1]),
                        et.trackStandAloneGoals("trackGoal", h, t[1]),
                        e.ZAB.funnel_queue = e.ZAB.funnel_queue || [];
                        var v = (new Date).getTime();
                        e.ZAB.funnel_queue.push({
                            time: v,
                            step_name: t[1]
                        }),
                        it(t[1]),
                        q.handleCustomEventTrigger(t[1]),
                        Se.handlePollInitiationBasedOnCustomEvent(t[1]),
                        we.handlePopupInitiationBasedOnCustomEvent(t[1]);
                        break;
                    case a:
                        e.ZAB.revenue_queue = e.ZAB.revenue_queue || [],
                        v = (new Date).getTime(),
                        e.ZAB.revenue_queue.push({
                            time: v,
                            exp_key: t[1],
                            revenue_amount: t[2]
                        }),
                        x && Tt();
                        break;
                    case s:
                        if (!et.exists(ZAB.manualactivation) || !1 === ZAB.manualactivation) {
                            ZAB.manualactivation = !0;
                            var w = {};
                            for (var A in ZAB.data.experiment)
                                if (ZAB.data.experiment.hasOwnProperty(A)) {
                                    var y = ZAB.data.experiment[A];
                                    [1, 2].indexOf(y.type) > -1 && 2 === y.status && 2 == y.activation_mode && (w[A] = y)
                                }
                            et.exists(w) && Ut(w)
                        }
                        break;
                    case c:
                        dt(t[1]);
                        break;
                    case u:
                        var S = t[1];
                        S && S.show && "function" == typeof S.show && S.show();
                        break;
                    case p:
                        ce(t[1]);
                        break;
                    case f:
                        e.ZAB.tag_recording_queue = e.ZAB.tag_recording_queue || [],
                        v = (new Date).getTime(),
                        et.exists(t[1]) && e.ZAB.tag_recording_queue.push(t[1]);
                        break;
                    case l:
                        var _ = t[1]
                          , T = t[2]
                          , b = [];
                        for (var I in T)
                            if (T.hasOwnProperty(I)) {
                                var O = {};
                                O.ln = I,
                                O.v = T[I],
                                b.push(O)
                            }
                        E.handleUserActivity(_, T),
                        et.sendEventRawData(_, b),
                        Y.handleCustomAttributesTrigger(),
                        Te.handleActivityObject(_, T);
                        break;
                    case d:
                        var k = t[1];
                        for (var I in k)
                            if (k.hasOwnProperty(I)) {
                                var C = {};
                                C.ln = I,
                                C.v = k[I],
                                re.push(C),
                                E.handleUserAttributes(C)
                            }
                        et.sendUserInformation();
                        break;
                    case g:
                        var R;
                        (R = t[1]) && e._zps.api("setDisableCustomScriptExecution", [R])
                    }
            }
            function dt(e) {
                v = !e
            }
            function ft(t) {
                if (e.pagesense && e.pagesense.constructor == Array) {
                    for (var i = 0; i < e.pagesense.length; i++)
                        try {
                            lt(e.pagesense[i], t)
                        } catch (e) {
                            w.error(e)
                        }
                    t || e.pagesense.splice(0, e.pagesense.length)
                }
                return e.pagesense
            }
            function gt(i, n, r) {
                if (!e[r]) {
                    je.info(n + " Loading ....");
                    var o = t.createElement("script");
                    (o = E.addNonce(o)).async = !0,
                    o.src = i;
                    var a = t.getElementsByTagName("script")[0];
                    a.parentNode.insertBefore(o, a),
                    o.onload = function() {
                        if (je.info(n + " Loaded"),
                        "ZAB.sessionscript_loaded" === r) {
                            var t = "SessionRecording script fetching completed for portal " + e.ZAB.data.portal_name;
                            w.info({
                                msg: t
                            })
                        }
                        e[r] = !0
                    }
                }
            }
            function mt() {
                gt(Qe.heatmapscripturl, "Heatmap Script", "ZAB.loadHeatmapScript")
            }
            function ht() {
                var t = "SessionRecording script fetching initiated for portal " + e.ZAB.data.portal_name;
                w.info({
                    msg: t
                }),
                gt(Qe.sessionscripturl, "Session Script", "ZAB.sessionscript_loaded")
            }
            function vt() {
                y || (E.isLocationRequiredForSessionRecordingExperiments() && !e.ZAB.countryName ? (E.getLocationDetails(),
                function t(i, n) {
                    if (i)
                        var n = e.setTimeout(function() {
                            i = !E.isLocationReceived(),
                            t(i, n)
                        }, 20);
                    else
                        e.clearTimeout(n),
                        wt()
                }(!0)) : wt())
            }
            function wt() {
                var e = et.findSessionRecordingExperiment();
                et.exists(e) && (ZAB.session_experiment = e,
                ht())
            }
            function At() {
                if (!y) {
                    var e, t, i = et.findPollsAndFeedbackExperiment();
                    if (et.exists(i)) {
                        ZAB.pollsandfeedbackexperiment = i,
                        e = i.key,
                        t = e,
                        ut.setCookie(ze.pollsBucket, t, 1);
                        var n = {
                            questions: i,
                            currentQuestion: 0,
                            pollStartedFlag: !1
                        };
                        ZAB.pollsMainJSON = n,
                        gt(Qe.pollsandfeedbackscripturl, "Polls and feedback script", "ZAB.pollsandfeedbackscript_loaded")
                    }
                }
            }
            function Et(e) {
                if (e) {
                    if (et.exists(ZAB.experiment))
                        for (var t in ZAB.experiment)
                            if (1 === ZAB.experiment[t].type && !ZAB.variation[t].is_original)
                                return;
                    var i, n;
                    ZAB.heatmapexp = e,
                    ZAB.heatmapexp.returning = ZAB.returning,
                    i = e.key,
                    n = i,
                    ut.setCookie(ze.heatmapbucket, n, 1),
                    et.sendHeatmapVisitorInformation(),
                    mt()
                }
            }
            function yt(t, i, n) {
                var r, o, a = i, s = n;
                this.pause = function() {
                    e.clearTimeout(r),
                    (a -= new Date - o) < 0 && M.splice(M.indexOf(s), 1)
                }
                ,
                this.resume = function() {
                    o = new Date,
                    e.clearTimeout(r),
                    a > 0 && (r = e.setTimeout(t, a))
                }
                ,
                this.resume()
            }
            function St(t, i) {
                return function() {
                    var n = new CustomEvent("goalsAchived",{
                        detail: t
                    });
                    ZAB && !ZAB.sessionRecordingScriptExecutionStarted && ZAB.goalsAchieved.push(t),
                    e.dispatchEvent(n),
                    e.ZAB.zab.sendStandAloneGoalInfo(t, i)
                }
            }
            function _t(t) {
                return function() {
                    e.ZAB.zab.sendGoalInfo(t)
                }
            }
            function Tt() {
                if (e.ZAB.revenue_queue && e.ZAB.revenue_queue.constructor == Array) {
                    var t = e.ZAB.revenue_queue;
                    e.ZAB.revenue_queue = [];
                    for (var i = 0; i < t.length; i++)
                        try {
                            var n = t[i]
                              , r = n.exp_key
                              , o = n.revenue_amount
                              , a = ne.getRevenueGoalLinkNameForExperiment(r);
                            et.sendGoalInfo(a, o)
                        } catch (e) {
                            w.error(e)
                        }
                }
            }
            function bt() {
                if (p) {
                    var e = new Date;
                    l = e - p + l
                }
                O && et.sendVisitorInformation(ZAB.experiment, ZAB.variation, parseInt(l / 1e3));
                for (var t = 0; t < Z.length; t++)
                    et.sendEventInformation(Z[t], parseInt(l / 1e3));
                if (1 == T)
                    for (var i = +new Date; +new Date - i < 500; )
                        ;
            }
            function It() {
                try {
                    x = !0,
                    ZAB.experiment && V && (Ot(),
                    fe()),
                    e.ZAB.data.is_full_tracking_enabled && ee.sendFullTrackingData(null, "pageview"),
                    function() {
                        if (!y) {
                            if (!et.iscookieEnabled())
                                return je.warn("Cookie storage needs to be enabled for Funnel Analysis"),
                                void je.error("Cookie storage not enabled for Funnel Analysis");
                            var e = et.findFunnelExperiment();
                            et.exists(e) && (ZAB.funnel_experiment = e,
                            gt(Qe.funnelscripturl, "Funnel Script", "ZAB.funnelscript_loaded"))
                        }
                    }(),
                    e.opener && e.opener.postMessage({
                        id: "scriptLoaded"
                    }, "*"),
                    e.top !== e.self && e.parent && e.parent.postMessage({
                        id: "scriptLoadedInChildFrame",
                        href: location.href
                    }, "*"),
                    st(),
                    function() {
                        if (!y) {
                            var e = et.findFormAnalyticsExperiment();
                            ZAB.formanalyticsexperiment = e,
                            et.exists(e) && gt(Qe.formanalyticsscripturl, "Form Analytics Script", "ZAB.formanalyticsscript_loaded")
                        }
                    }(),
                    C.bootPushNotification(Qe)
                } catch (e) {
                    fe(),
                    w.error(e)
                }
            }
            function xt() {
                if (et.exists(ZAB.experiment)) {
                    e.ZAB.experimentsLoaded = !0;
                    var t = new CustomEvent("zpsExperimentsLoaded");
                    e.document.dispatchEvent(t)
                }
            }
            function Ot() {
                if (!e._zps.api("getDisableCustomScriptExecution")) {
                    try {
                        if (!0 === I) {
                            for (var t in ZAB.changesToHandle = [],
                            ZAB.experiment) {
                                var i = ZAB.experiment[t];
                                1 === i.type && Le(ZAB.variation[t]),
                                Ze(i)
                            }
                            xt()
                        }
                    } catch (e) {
                        je.info("Error while applying A/B Test js"),
                        w.error(e)
                    }
                    fe()
                }
            }
            function kt(e, t) {
                try {
                    if (!et.exists(e) && !et.exists(t))
                        return;
                    for (var i in e) {
                        for (var n = e[i].goal, r = null, o = t[i], a = 0; a < n.length; a++) {
                            var s = n[a];
                            if (se.goal[s].goal_type === ie.PAGE_VISIT_GOAL_TYPE || se.goal[s].goal_type === ie.CUSTOM_EVENT_GOAL_TYPE || se.goal[s].goal_type == ie.REVENUE_GOAL_TYPE) {
                                r = ZAB.useragentrawdata.d;
                                break
                            }
                        }
                        if (null != r) {
                            var c = ne.generateGoalRawDataForABSplit(i, o.key, null);
                            localStorage.setItem("zab_g_" + i, JSON.stringify(c));
                            var u = {
                                key: "g_" + i,
                                value: r
                            };
                            y ? (u.key = "qag_" + i,
                            et.iframeCommunication(7, u)) : et.iframeCommunication(1, u),
                            ut.setCookie("zab_" + u.key, r)
                        }
                    }
                } catch (e) {
                    w.error(e)
                }
            }
            function Ct() {
                for (var e = ZAB.qaVariationArray.length - 1; e >= 0; e--) {
                    var t = ZAB.qaVariationArray[e];
                    switch (t.type) {
                    case "attributes":
                        Rt(t);
                        break;
                    case "characterData":
                        break;
                    case "childList":
                        Bt(t)
                    }
                    ZAB.qaVariationArray.pop()
                }
            }
            function Rt(e) {
                e.target.setAttribute(e.attributeName, e.oldValue)
            }
            function Bt(e) {
                for (var t = e.addedNodes.length - 1; t >= 0; t--)
                    e.addedNodes[t].remove();
                for (t = e.removedNodes.length - 1; t >= 0; t--)
                    e.target.insertBefore(e.removedNodes[t], e.nextSibling)
            }
            function Nt() {
                ZAB.experiment = null,
                ZAB.session_experiment = null,
                ZAB.variation = null,
                ZAB.heatmapexp = null,
                ZAB.useragentrawdata = ZAB.zab.getUserAgentRawData(),
                ZAB.changesToHandle = [],
                ZAB.sentengagement = [],
                ZAB.returningForExp = {},
                I = !1,
                ZAB.current_url = t.URL,
                ZAB.goalsAchieved = [],
                qe.initData()
            }
            function Lt() {
                !function() {
                    for (var e = ZAB.mutationRecordArray.length - 1; e >= 0; e--) {
                        var t = ZAB.mutationRecordArray[e];
                        switch (t.type) {
                        case "attributes":
                            Rt(t);
                            break;
                        case "characterData":
                            break;
                        case "childList":
                            Bt(t)
                        }
                        ZAB.mutationRecordArray.pop()
                    }
                }(),
                Nt();
                var t = Pt();
                ZAB.experiment = t,
                et.exists(ZAB.experiment) && Pe(ZAB.experiment),
                k.startPersonalizationExperiment(!0),
                e.setTimeout(function() {
                    var t;
                    It(),
                    Dt.onPageRefreshEvent(),
                    t = new CustomEvent("rebootexperiments"),
                    e.document.dispatchEvent(t),
                    ZAB.manualactivation = !1
                }, 500)
            }
            function Ut(t) {
                for (var i in et.exists(t) && (t = Zt(t)),
                t)
                    ZAB.experiment[i] = t[i];
                ZAB.experiment && Pe(t),
                e.setTimeout(function() {
                    Dt.onPageRefreshABSpecific()
                }, 500)
            }
            et.iframeCommunication = function(i, n) {
                if (et.exists(i) && et.exists(n) && (ZAB.data.is_cross_origin_enabled || y)) {
                    var r = {
                        SET: 1,
                        GET: 2,
                        SEND: 3,
                        GETONLY: 6,
                        SETONLY: 7,
                        GETGOALTEMPLATE: 8,
                        SETSESSIONCOOKIES: 9,
                        SETDATAINLOCALSTORAGE: 10,
                        DELETESESSIONCOOKIES: 11,
                        ISTPCOOKIEENABLED: 12
                    };
                    switch (je.info("Iframe Communication - Type : " + i + " Data Sent : " + JSON.stringify(n)),
                    i) {
                    case r.SET:
                        !function(e, i) {
                            if (et.exists(e) && et.exists(i)) {
                                var n = t.getElementById("zabFrame")
                                  , o = {
                                    cks: {}
                                };
                                o.cks[e] = i,
                                o.type = r.SET;
                                var a = o;
                                n.contentWindow.postMessage(a, "*")
                            }
                        }(n.key, n.value);
                        break;
                    case r.GET:
                        !function(e, i) {
                            if (et.exists(e) && et.exists(i)) {
                                var n = t.getElementById("zabFrame")
                                  , o = {
                                    cks: {}
                                };
                                o.cks.key = e;
                                var a = (new Date).getTime() + "" + Math.random();
                                o.cks.callback = a,
                                P[a] = i,
                                o.type = r.GET;
                                var s = o;
                                n.contentWindow.postMessage(s, "*")
                            }
                        }(n.key, n.callback);
                        break;
                    case r.SEND:
                        !function(e) {
                            if (et.exists(e.url) && et.exists(e.value)) {
                                var i = t.getElementById("zabFrame")
                                  , n = {};
                                n._data = e,
                                n.type = r.SEND;
                                var o = n;
                                i.contentWindow.postMessage(o, "*")
                            }
                        }(n);
                        break;
                    case r.GETONLY:
                        !function(e, i) {
                            if (et.exists(e) && et.exists(i)) {
                                var n = t.getElementById("zabFrame")
                                  , o = {
                                    cks: {}
                                };
                                o.cks.key = e;
                                var a = (new Date).getTime() + "" + Math.random();
                                o.cks.callback = a,
                                P[a] = i,
                                o.type = r.GETONLY;
                                var s = o;
                                n.contentWindow.postMessage(s, "*")
                            }
                        }(n.key, n.callback);
                        break;
                    case r.SETONLY:
                        !function(e, i) {
                            if (et.exists(e) && et.exists(i)) {
                                var n = t.getElementById("zabFrame")
                                  , o = {
                                    cks: {}
                                };
                                o.cks[e] = i,
                                o.type = r.SETONLY;
                                var a = o;
                                n.contentWindow.postMessage(a, "*")
                            }
                        }(n.key, n.value, n.callback);
                        break;
                    case r.GETGOALTEMPLATE:
                        !function(e, i, n, o) {
                            if (et.exists(e) && et.exists(i)) {
                                "prebodigital" === ZAB.data.portal_name && w.info({
                                    msg: "inside getGoalTemplate with key" + e + "goalLn" + n + "expLN" + o
                                });
                                var a = t.getElementById("zabFrame")
                                  , s = {
                                    cks: {}
                                };
                                s.cks.key = e;
                                var c = (new Date).getTime() + "" + Math.random();
                                s.cks.callback = c,
                                P[c] = i,
                                G[c] = n,
                                j[c] = o,
                                s.type = r.GETONLY;
                                var u = s;
                                a.contentWindow.postMessage(u, "*")
                            }
                        }(n.key, n.callback, n.goalLN, n.expLN);
                        break;
                    case r.SETSESSIONCOOKIES:
                        !function(i, n) {
                            if (et.exists(i) && et.exists(n) && !e.ZAB.pcdonottrack) {
                                var o = t.getElementById("zabFrame")
                                  , a = {};
                                a.exp = i;
                                var s = Qe.getFullURL(Qe.rawdataurl);
                                s += "?type=8",
                                a.url = s;
                                var c = (new Date).getTime() + "" + Math.random();
                                a.callback = c,
                                P[c] = n,
                                a.type = r.SETSESSIONCOOKIES;
                                var u = a;
                                o.contentWindow.postMessage(u, "*")
                            }
                        }(n.exp, n.callback);
                        break;
                    case r.SETDATAINLOCALSTORAGE:
                        !function(i) {
                            if (et.exists(i) && !e.ZAB.pcdonottrack) {
                                var n = t.getElementById("zabFrame")
                                  , o = {};
                                o.type = r.SETDATAINLOCALSTORAGE,
                                o.data = i,
                                n.contentWindow.postMessage(o, "*")
                            }
                        }(n);
                        break;
                    case r.DELETESESSIONCOOKIES:
                        !function(i) {
                            if (et.exists(i) && !e.ZAB.pcdonottrack) {
                                var n = t.getElementById("zabFrame")
                                  , o = {};
                                o.type = r.DELETESESSIONCOOKIES,
                                o.data = i,
                                n.contentWindow.postMessage(o, "*")
                            }
                        }(n);
                        break;
                    case r.ISTPCOOKIEENABLED:
                        !function(e) {
                            if (et.exists(e)) {
                                var i = t.getElementById("zabFrame")
                                  , n = {
                                    cks: {}
                                }
                                  , o = (new Date).getTime() + "" + Math.random();
                                n.cks.callback = o,
                                P[o] = e,
                                n.type = r.ISTPCOOKIEENABLED;
                                var a = n;
                                i.contentWindow.postMessage(a, "*")
                            }
                        }(n.callback)
                    }
                }
            }
            ,
            et.removeOptimizeQueryKey = function(e) {
                var t = "";
                if (et.exists(et.getZABQueryKeyValue(e, "opt_log"))) {
                    var i = e.indexOf("opt_log")
                      , n = e.indexOf("#");
                    t = -1 === n ? "" : e.substr(n),
                    e = e.substr(0, i - 1)
                }
                return e + t
            }
            ,
            et.getQueryParameters = function(e) {
                var t, i, n, r = e.split("&"), o = {};
                function a(e) {
                    return decodeURIComponent(e || "").replaceAll("+", " ")
                }
                for (var s = 0; s < r.length; s++)
                    i = a((t = r[s].split("="))[0]),
                    n = a(t[1]),
                    o[i] = n;
                return o
            }
            ,
            et.getZABQueryKeyValue = function(e, t) {
                var i = "";
                try {
                    var n = new URL(e);
                    i = et.getQueryParameters(n.search.substring(1))[t]
                } catch (e) {}
                return i
            }
            ,
            ZAB.GAIntegFunc = function() {
                for (var e in ZAB.experiment)
                    try {
                        var t = ZAB.experiment[e]
                          , i = t.name
                          , n = ZAB.variation[e].name
                          , r = t.integrations["Google Analytics"].experiment_project_integration_id;
                        null != r && gtag("event", "dimension", {
                            zoho: i + " (" + r + ") : " + n
                        })
                    } catch (e) {
                        w.error(e)
                    }
            }
            ,
            ZAB.GAGTMIntegFunc = function() {
                for (var t in ZAB.experiment)
                    if (ZAB.experiment.hasOwnProperty(t))
                        try {
                            var i = ZAB.experiment[t]
                              , n = i.name
                              , r = ZAB.variation[t].name;
                            null != (i.integrations["Google Analytics"] ? i.integrations["Google Analytics"].experiment_project_integration_id : null) && e.dataLayer && !i.gaDataSent && (e.dataLayer.push({
                                PageSenseExperimentName: n,
                                PageSenseVariationName: r,
                                event: "zohoPageSenseEvent"
                            }),
                            i.gaDataSent = !0)
                        } catch (e) {}
            }
            ,
            ZAB.getABTestExperimentsData = function() {
                return he.getABTestExperimentsData()
            }
            ,
            ZAB.KMIntegFunc = function() {
                for (var e in ZAB.experiment) {
                    var t = ZAB.experiment[e]
                      , i = (t.name,
                    ZAB.variation[e].name);
                    t.integrations.Kissmetrics && _kmq.push(["set", {
                        experimentName: i
                    }])
                }
            }
            ,
            ZAB.MXIntegFunc = function(e) {
                for (var t in ZAB.experiment) {
                    var i = ZAB.experiment[t]
                      , n = i.name
                      , r = ZAB.variation[t].name;
                    if (i.integrations.Mixpanel) {
                        var o = {};
                        o[n] = r,
                        e && mixpanel[e] && mixpanel[e].track ? mixpanel[e].track("Pagesense", o) : mixpanel.track("Pagesense", o)
                    }
                }
            }
            ,
            et.processTask = lt,
            pagesense.push = function(e) {
                et.processTask(e, !1)
            }
            ,
            e.ZAB.loadHeatmapScript = mt,
            ZAB.loadSessionScript = ht,
            et.processCustomEvents = function() {
                if (!(null == et.customQueue || et.customQueue.length <= 0))
                    for (var e = 0; e < et.customQueue.length; e++)
                        lt(et.customQueue.shift(), !1)
            }
            ;
            var Dt = {
                lastlocation: e.location.href,
                hashhandler: function() {
                    try {
                        Lt()
                    } catch (e) {
                        w.error(e)
                    }
                },
                onPageRefreshEvent: function() {
                    try {
                        Dt.onPageRefreshGeneric(),
                        Dt.onPageRefreshABSpecific(),
                        e.pagesense = e.pagesense ? ft(!1) : []
                    } catch (e) {
                        w.error(e)
                    }
                },
                onPageRefreshABSpecific: function() {
                    try {
                        if (et.exists(ZAB.experiment) && !et.exists(ZAB.variation))
                            return;
                        kt(ZAB.experiment, ZAB.variation),
                        function i() {
                            if (!y)
                                if (e.ZAB.data.is_cross_origin_enabled && !me() && ++K <= 5)
                                    e.setTimeout(function() {
                                        i()
                                    }, 20);
                                else if (!ut.checkCookieExists(ze.split) || e.ZAB.redirectingURL) {
                                    var n = t.getElementById("zabFrame")
                                      , r = ZAB.current_url;
                                    if (ZAB.current_url.indexOf("?") > 0 && (r = ZAB.current_url.split("?")[0]),
                                    n) {
                                        var o = {
                                            key: et.trimURL(r),
                                            callback: pt.tpCookieCallback
                                        };
                                        et.iframeCommunication(2, o)
                                    }
                                } else {
                                    var a = JSON.parse(ut.getCookieValue(ze.split))
                                      , s = Object.keys(a)[0]
                                      , c = Object.values(a)[0];
                                    if (et.exists(ZAB.data.experiment) && ZAB.data.experiment.hasOwnProperty(s) && (qt = ZAB.data.experiment[s]) && qt.variations && qt.variations.hasOwnProperty(c)) {
                                        var u = (jt = qt.variations[c]).url
                                          , p = ZAB.current_url;
                                        p.indexOf("?") > 0 && (p = p.split("?")[0]),
                                        Fe.isDynamicMatchingConfigured(u) && (u = Fe.getVariationUrlForDynamicPattern(s, u)),
                                        u.indexOf("?") > 0 && (u = u.split("?")[0]),
                                        0 === p.indexOf(u) && ut.deleteCookieFromTLD(ze.split)
                                    }
                                    pt.tpCookieCallback(a)
                                }
                        }(),
                        Tt(),
                        function() {
                            "prebodigital" === ZAB.data.portal_name && (w.info({
                                msg: "processTimeSpentTask - Experiment - " + ZAB.experiment + "and Variation - " + ZAB.variation
                            }),
                            w.info({
                                msg: "processTimeSpentTask - Experiment - " + Object.keys(ZAB.experiment) + " and Variation - " + Object.keys(ZAB.variation)
                            }));
                            var t = et.getGoalsByTypeFromJson([8]);
                            for (var i in t) {
                                var n = se.goal[i]
                                  , r = n.time_threshold
                                  , o = new Date
                                  , a = parseInt((o - p) / 1e3);
                                if (a < r) {
                                    var s = r - a;
                                    s *= 1e3,
                                    n.is_project_level ? Z.indexOf(i) > -1 && function(e, t, i) {
                                        e = new yt(St(e, t),i,e),
                                        M.push(e)
                                    }(i, r, s) : (function(e, t) {
                                        e = new yt(_t(e),t,e),
                                        M.push(e)
                                    }(i, s),
                                    O = !0)
                                } else if (n.is_project_level) {
                                    if (Z.indexOf(i) > -1) {
                                        var c = new CustomEvent("goalsAchived",{
                                            detail: i
                                        });
                                        ZAB && !ZAB.sessionRecordingScriptExecutionStarted && ZAB.goalsAchieved.push(i),
                                        e.dispatchEvent(c),
                                        et.sendStandAloneGoalInfo(i, r)
                                    }
                                } else
                                    O = !0,
                                    et.sendGoalInfo(i)
                            }
                        }(),
                        et.pageVisitCheck()
                    } catch (e) {
                        w.error(e)
                    }
                },
                executeOnPageRefreshGenereicAfterLocationReceived: function() {
                    try {
                        R.checkCookiesAndSendToServer(),
                        function() {
                            if (!y) {
                                var t = se.goal;
                                for (var i in t)
                                    if (t.hasOwnProperty(i)) {
                                        var n = t[i];
                                        n.is_project_level && (6 === n.goal_type && "*" === n.goal_url ? (et.sendEventInformation(i),
                                        Z.push(i)) : et.isprojectgoalQualifies(n) && (et.sendEventInformation(i),
                                        Z.push(i)))
                                    }
                                e.ZAB.projectgoals = Z
                            }
                        }(),
                        Ie(),
                        function() {
                            if (!y) {
                                ZAB.heatmapexp = null;
                                var e = et.findHeatmapExperiment();
                                e && Et(e)
                            }
                        }(),
                        ye.loadPolyfills(),
                        vt(),
                        At(),
                        y || we.startPopupExperiment({
                            serverURLs: Qe,
                            zabCookies: ze
                        }),
                        B || (e.ZAB.zab.generateUserAgentData(),
                        "tablet" === ZAB.useragentrawdata.dv || "mobile" === ZAB.useragentrawdata.dv ? e.$pagesense.$(t).on("touchend", "a", be) : e.$pagesense.$(t).on("mousedown", "a", be),
                        B = !0),
                        Ce(),
                        Kt.intercomIdentify(),
                        Yt.salesiqIdentify(),
                        $.bootStrapTriggers(se)
                    } catch (e) {
                        w.error(e)
                    }
                },
                onPageRefreshGeneric: function() {
                    try {
                        if (E.isLocationRequired && !E.isLocationReceived())
                            var t = e.setTimeout(function() {
                                Dt.onPageRefreshGeneric(t)
                            }, 20);
                        else
                            e.clearTimeout(t),
                            Dt.executeOnPageRefreshGenereicAfterLocationReceived()
                    } catch (e) {
                        w.error(e)
                    }
                },
                historyHandle: function() {
                    ZAB.current_url = t.URL,
                    et.historyEvent = t.createEvent("Event"),
                    et.historyEvent.initEvent("urlchange", !0, !0),
                    function(i) {
                        if (i && i.pushState && "function" == typeof i.pushState) {
                            var n = function() {
                                Dt.lastlocation != e.location.href && (Dt.lastlocation = e.location.href,
                                t.dispatchEvent(e.ZAB.zab.historyEvent),
                                e.setTimeout(function() {
                                    Dt.hashhandler()
                                }, 100))
                            }
                              , r = i.pushState;
                            i.pushState = function(e) {
                                r.apply(i, arguments),
                                n()
                            }
                            ;
                            var o = i.replaceState;
                            i.replaceState = function(e) {
                                o.apply(i, arguments),
                                n()
                            }
                            ,
                            e.$pagesense.$(e).off("popstate.ps"),
                            e.$pagesense.$(e).on("popstate.ps", n)
                        }
                    }(e.history)
                }
            };
            function Zt(e) {
                var t = {};
                if (et.exists(e))
                    for (var i in e) {
                        var r = e[i];
                        if (3 !== r.status) {
                            var o = et.isReturningVisitorForExp(r);
                            if (void 0 === ZAB.returningForExp && (ZAB.returningForExp = {}),
                            !o && !ne.isUserIncluded(r)) {
                                ne.abortUser(r);
                                continue
                            }
                            ZAB.returningForExp[i] = o,
                            2 === r.heatmap && mt(),
                            r.country_required && !ZAB.countryName && (F = !0,
                            ZAB.geolocation_starttime = (new Date).getTime(),
                            et.getDataFromServer(Qe.geolocationserverurl, ue)),
                            n.extend(t, Ye({}, i, r))
                        }
                    }
                return t
            }
            function Pt() {
                ZAB.current_url = et.removeOptimizeQueryKey(t.URL),
                je.info("Current URL : " + ZAB.current_url);
                var i = et.findExperiment();
                return Ve.getConditionalActivationExperimentToEvaluate().length > 0 && (optimize.conditionpoll = e.setInterval(function() {
                    Ve.getConditionalActivationExperimentToEvaluate().length > 0 || e.clearInterval(optimize.conditionpoll);
                    for (var t = {}, i = [], n = Ve.getConditionalActivationExperimentToEvaluate(), r = 0; r < n.length; r++) {
                        var o = n[r];
                        1 == Ve.checkExpConditionSatisfied(o) ? t[o.key] = o : i.push(o)
                    }
                    Ve.setConditionalActivationExperimentToEvaluate(i),
                    et.exists(t) && Ut(t)
                }, 50)),
                i = Zt(i)
            }
            e.ZAB.isIframeLoaded = me,
            e.ZAB.cookieHandler = ut,
            e.ZAB.zab = et,
            (ZAB.current_url.indexOf("qa_mode=true") > -1 || ZAB.current_url.indexOf("ps_token=") > -1) && (dt(!1),
            Nt(),
            y = !0,
            He.setIsQAMode(!0),
            He.getDataForQAMode());
            var Mt = et.getZABQueryKeyValue(e.location.href, "ps_verifyscript")
              , zt = et.getZABQueryKeyValue(e.location.href, "ps_expkey")
              , Ft = et.getZABQueryKeyValue(e.location.href, "ps_varkey")
              , Vt = et.getZABQueryKeyValue(e.location.href, "ps_thumbnail")
              , Gt = et.getZABQueryKeyValue(e.location.href, "opt_log");
            if (je.setIsConsoleLoggingEnabled(Gt),
            Mt && dt(!1),
            zt || Ft || Vt) {
                zt = decodeURIComponent(zt),
                Ft = decodeURIComponent(Ft),
                dt(!1);
                var jt, qt = se.experiment[zt];
                if (qt && (jt = qt.variations[Ft],
                Ze(qt)),
                !qt || !jt)
                    return;
                if (2 === qt.type)
                    Fe.redirectToSplitVaritaion(qt.key, jt);
                else if (jt.variation_changes && jt.variation_changes.length > 0 || jt.variation_css_changes) {
                    var Ht = qt.key;
                    pe(),
                    I = !0,
                    ZAB.variation.expkey = jt,
                    x && It()
                }
            } else {
                var Kt = new oe
                  , Yt = new de;
                if (Kt.observer(),
                Yt.observer(),
                E.isLocationRequiredForExperiments() && E.getLocationDetails(),
                se.is_cross_origin_enabled) {
                    je.info("Iframe Script Loading ...."),
                    ZAB.iframe_starttime = (new Date).getTime();
                    var $t = t.createElement("iframe");
                    $t.id = "zabFrame",
                    $t.height = "0",
                    $t.style = "display:none",
                    $t.onload = function() {
                        g || (je.info("Iframe Script Loaded - TIME : " + ((new Date).getTime() - ZAB.iframe_starttime)),
                        g = !0,
                        et.processCustomEvents())
                    }
                    ,
                    $t.src = Qe.framepageurl,
                    (t.head || t.getElementsByTagName("head")[0]).appendChild($t)
                }
                if (e.pagesense = e.pagesense ? ft(!0) : [],
                function() {
                    Dt.historyHandle(),
                    e.addEventListener("message", function(e) {
                        try {
                            pt.receiver(e)
                        } catch (e) {
                            w.error(e)
                        }
                    }, !1),
                    e.$pagesense.$(t).ready(function() {
                        try {
                            Ke.callback(function() {
                                It(),
                                -1 !== ["complete"].indexOf(t.readyState) ? Dt.onPageRefreshEvent() : z.addEventListener(e, "load", Dt.onPageRefreshEvent)
                            })
                        } catch (e) {
                            w.error(e)
                        }
                    }),
                    z.addEventListener(e, "pagehide", bt);
                    var i = "hidden";
                    function n(t) {
                        var n = "visible"
                          , r = "hidden"
                          , o = {
                            focus: n,
                            focusin: n,
                            blur: r,
                            focusout: r
                        };
                        if ((t = t || e.event).type in o)
                            var a = o[t.type];
                        else
                            a = this[i] ? "hidden" : "visible";
                        "visible" == a ? function() {
                            p = new Date;
                            for (var e = 0; e < M.length; e++)
                                M[e].resume()
                        }() : function() {
                            var e = new Date;
                            0 != p && (l = e - p + l),
                            p = 0;
                            for (var t = 0; t < M.length; t++)
                                M[t].pause()
                        }()
                    }
                    i in t ? z.addEventListener(t, "visibilitychange", n) : (i = "mozHidden")in t ? z.addEventListener(t, "mozvisibilitychange", n) : (i = "webkitHidden")in t ? z.addEventListener(t, "webkitvisibilitychange", n) : (i = "msHidden")in t ? z.addEventListener(t, "msvisibilitychange", n) : "onfocusin"in t ? t.onfocusin = t.onfocusout = n : e.onfocus = e.onblur = n,
                    void 0 !== t[i] && n({
                        type: t[i] ? "blur" : "focus"
                    }),
                    qe.attachEventListener()
                }(),
                E.applyProjectJSChanges(),
                et.exists(ZAB.experiment))
                    fe();
                else if (y || et.exists(ZAB.returning) || (ZAB.returning = et.isReturningVisitor()),
                et.getUserId(),
                ZAB.portal = se.portal_name,
                !y) {
                    var Jt = Pt();
                    ZAB.experiment = Jt,
                    et.exists(ZAB.experiment) && (pe(),
                    Pe(ZAB.experiment))
                }
                y || (k.startPersonalizationExperiment(!1),
                e.ZAB.addPersonalizationInfoToHeatMapData = S.addPersonalizationInfoToHeatMapData.bind(S))
            }
        }(window, document, navigator, e)
    }
    try {
        var We = function() {
            ye.loadPolyfills(),
            Je(window.localZepto)
        };
        if (window.zps) {
            var Qe = "Duplicate script installed in url:" + window.location.href + " for portal:" + window.ZAB.data.portal_name + " for project:" + window.ZAB.data.project_key;
            w.info({
                msg: Qe
            })
        } else {
            window.zps = be,
            window._zps = Oe,
            window.ZAB = window.ZAB || {},
            window.ZAB.startTracking = We;
            var Xe = "Script file loaded successfully in url:" + window.location.href + " for portal:" + window.ZAB.data.portal_name + " for project:" + window.ZAB.data.project_key;
            if (w.info({
                msg: Xe
            }),
            function() {
                /*! Zepto 1.2.0 (generated with Zepto Builder) - zepto event ajax ie selector detect - zeptojs.com/license */
                var e, t, i = null;
                void 0 !== window.Zepto && (i = window.Zepto),
                e = window,
                t = function() {
                    var t, i, n, r, o, a, s = [], c = s.concat, u = s.filter, p = s.slice, l = e.document, d = {}, f = {}, g = {
                        "column-count": 1,
                        columns: 1,
                        "font-weight": 1,
                        "line-height": 1,
                        opacity: 1,
                        "z-index": 1,
                        zoom: 1
                    }, m = /^\s*<(\w+|!)[^>]*>/, h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, w = /^(?:body|html)$/i, A = /([A-Z])/g, E = ["val", "css", "html", "text", "data", "width", "height", "offset"], y = l.createElement("table"), S = l.createElement("tr"), _ = {
                        tr: l.createElement("tbody"),
                        tbody: y,
                        thead: y,
                        tfoot: y,
                        td: S,
                        th: S,
                        "*": l.createElement("div")
                    }, T = /^[\w-]*$/, b = {}, I = b.toString, x = {}, O = l.createElement("div"), k = {
                        tabindex: "tabIndex",
                        readonly: "readOnly",
                        for: "htmlFor",
                        class: "className",
                        maxlength: "maxLength",
                        cellspacing: "cellSpacing",
                        cellpadding: "cellPadding",
                        rowspan: "rowSpan",
                        colspan: "colSpan",
                        usemap: "useMap",
                        frameborder: "frameBorder",
                        contenteditable: "contentEditable"
                    }, C = Array.isArray || function(e) {
                        return e instanceof Array
                    }
                    ;
                    function R(e) {
                        return null == e ? String(e) : b[I.call(e)] || "object"
                    }
                    function B(e) {
                        return "function" == R(e)
                    }
                    function N(e) {
                        return null != e && e == e.window
                    }
                    function L(e) {
                        return null != e && e.nodeType == e.DOCUMENT_NODE
                    }
                    function U(e) {
                        return "object" == R(e)
                    }
                    function D(e) {
                        return U(e) && !N(e) && Object.getPrototypeOf(e) == Object.prototype
                    }
                    function Z(e) {
                        var t = !!e && "length"in e && e.length
                          , i = n.type(e);
                        return "function" != i && !N(e) && ("array" == i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                    }
                    function P(e) {
                        return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
                    }
                    function M(e) {
                        return e in f ? f[e] : f[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
                    }
                    function z(e, t) {
                        return "number" != typeof t || g[P(e)] ? t : t + "px"
                    }
                    function F(e) {
                        return "children"in e ? p.call(e.children) : n.map(e.childNodes, function(e) {
                            if (1 == e.nodeType)
                                return e
                        })
                    }
                    function V(e, t) {
                        var i, n = e ? e.length : 0;
                        for (i = 0; i < n; i++)
                            this[i] = e[i];
                        this.length = n,
                        this.selector = t || ""
                    }
                    function G(e, t) {
                        return null == t ? n(e) : n(e).filter(t)
                    }
                    function j(e, t, i, n) {
                        return B(t) ? t.call(e, i, n) : t
                    }
                    function q(e, t, i) {
                        null == i ? e.removeAttribute(t) : e.setAttribute(t, i)
                    }
                    function H(e, i) {
                        var n = e.className || ""
                          , r = n && n.baseVal !== t;
                        if (i === t)
                            return r ? n.baseVal : n;
                        r ? n.baseVal = i : e.className = i
                    }
                    function K(e) {
                        try {
                            return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? n.parseJSON(e) : e) : e
                        } catch (t) {
                            return e
                        }
                    }
                    return x.matches = function(e, t) {
                        if (!t || !e || 1 !== e.nodeType)
                            return !1;
                        var i = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
                        if (i)
                            return i.call(e, t);
                        var n, r = e.parentNode, o = !r;
                        return o && (r = O).appendChild(e),
                        n = ~x.qsa(r, t).indexOf(e),
                        o && O.removeChild(e),
                        n
                    }
                    ,
                    o = function(e) {
                        return e.replace(/-+(.)?/g, function(e, t) {
                            return t ? t.toUpperCase() : ""
                        })
                    }
                    ,
                    a = function(e) {
                        return u.call(e, function(t, i) {
                            return e.indexOf(t) == i
                        })
                    }
                    ,
                    x.fragment = function(e, i, r) {
                        var o, a, s;
                        return h.test(e) && (o = n(l.createElement(RegExp.$1))),
                        o || (e.replace && (e = e.replace(v, "<$1></$2>")),
                        i === t && (i = m.test(e) && RegExp.$1),
                        i in _ || (i = "*"),
                        (s = _[i]).innerHTML = "" + e,
                        o = n.each(p.call(s.childNodes), function() {
                            s.removeChild(this)
                        })),
                        D(r) && (a = n(o),
                        n.each(r, function(e, t) {
                            E.indexOf(e) > -1 ? a[e](t) : a.attr(e, t)
                        })),
                        o
                    }
                    ,
                    x.Z = function(e, t) {
                        return new V(e,t)
                    }
                    ,
                    x.isZ = function(e) {
                        return e instanceof x.Z
                    }
                    ,
                    x.init = function(e, i) {
                        var r, o;
                        if (!e)
                            return x.Z();
                        if ("string" == typeof e)
                            if ("<" == (e = e.trim())[0] && m.test(e))
                                r = x.fragment(e, RegExp.$1, i),
                                e = null;
                            else {
                                if (i !== t)
                                    return n(i).find(e);
                                r = x.qsa(l, e)
                            }
                        else {
                            if (B(e))
                                return n(l).ready(e);
                            if (x.isZ(e))
                                return e;
                            if (C(e))
                                o = e,
                                r = u.call(o, function(e) {
                                    return null != e
                                });
                            else if (U(e))
                                r = [e],
                                e = null;
                            else if (m.test(e))
                                r = x.fragment(e.trim(), RegExp.$1, i),
                                e = null;
                            else {
                                if (i !== t)
                                    return n(i).find(e);
                                r = x.qsa(l, e)
                            }
                        }
                        return x.Z(r, e)
                    }
                    ,
                    (n = function(e, t) {
                        return x.init(e, t)
                    }
                    ).extend = function(e) {
                        var n, r = p.call(arguments, 1);
                        return "boolean" == typeof e && (n = e,
                        e = r.shift()),
                        r.forEach(function(r) {
                            !function e(n, r, o) {
                                for (i in r)
                                    o && (D(r[i]) || C(r[i])) ? (D(r[i]) && !D(n[i]) && (n[i] = {}),
                                    C(r[i]) && !C(n[i]) && (n[i] = []),
                                    e(n[i], r[i], o)) : r[i] !== t && (n[i] = r[i])
                            }(e, r, n)
                        }),
                        e
                    }
                    ,
                    x.qsa = function(e, t) {
                        var i, n = "#" == t[0], r = !n && "." == t[0], o = n || r ? t.slice(1) : t, a = T.test(o);
                        return e.getElementById && a && n ? (i = e.getElementById(o)) ? [i] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : p.call(a && !n && e.getElementsByClassName ? r ? e.getElementsByClassName(o) : e.getElementsByTagName(t) : e.querySelectorAll(t))
                    }
                    ,
                    n.contains = l.documentElement.contains ? function(e, t) {
                        return e !== t && e.contains(t)
                    }
                    : function(e, t) {
                        for (; t && (t = t.parentNode); )
                            if (t === e)
                                return !0;
                        return !1
                    }
                    ,
                    n.type = R,
                    n.isFunction = B,
                    n.isWindow = N,
                    n.isArray = C,
                    n.isPlainObject = D,
                    n.isEmptyObject = function(e) {
                        var t;
                        for (t in e)
                            return !1;
                        return !0
                    }
                    ,
                    n.isNumeric = function(e) {
                        var t = Number(e)
                          , i = $e(e);
                        return null != e && "boolean" != i && ("string" != i || e.length) && !isNaN(t) && isFinite(t) || !1
                    }
                    ,
                    n.inArray = function(e, t, i) {
                        return s.indexOf.call(t, e, i)
                    }
                    ,
                    n.camelCase = o,
                    n.trim = function(e) {
                        return null == e ? "" : String.prototype.trim.call(e)
                    }
                    ,
                    n.uuid = 0,
                    n.support = {},
                    n.expr = {},
                    n.noop = function() {}
                    ,
                    n.map = function(e, t) {
                        var i, r, o, a, s = [];
                        if (Z(e))
                            for (r = 0; r < e.length; r++)
                                null != (i = t(e[r], r)) && s.push(i);
                        else
                            for (o in e)
                                null != (i = t(e[o], o)) && s.push(i);
                        return (a = s).length > 0 ? n.fn.concat.apply([], a) : a
                    }
                    ,
                    n.each = function(e, t) {
                        var i, n;
                        if (Z(e)) {
                            for (i = 0; i < e.length; i++)
                                if (!1 === t.call(e[i], i, e[i]))
                                    return e
                        } else
                            for (n in e)
                                if (!1 === t.call(e[n], n, e[n]))
                                    return e;
                        return e
                    }
                    ,
                    n.grep = function(e, t) {
                        return u.call(e, t)
                    }
                    ,
                    e.JSON && (n.parseJSON = JSON.parse),
                    n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                        b["[object " + t + "]"] = t.toLowerCase()
                    }),
                    n.fn = {
                        constructor: x.Z,
                        length: 0,
                        forEach: s.forEach,
                        reduce: s.reduce,
                        push: s.push,
                        sort: s.sort,
                        splice: s.splice,
                        indexOf: s.indexOf,
                        concat: function() {
                            var e, t, i = [];
                            for (e = 0; e < arguments.length; e++)
                                t = arguments[e],
                                i[e] = x.isZ(t) ? t.toArray() : t;
                            return c.apply(x.isZ(this) ? this.toArray() : this, i)
                        },
                        map: function(e) {
                            return n(n.map(this, function(t, i) {
                                return e.call(t, i, t)
                            }))
                        },
                        slice: function() {
                            return n(p.apply(this, arguments))
                        },
                        ready: function(t) {
                            if ("complete" === l.readyState || "loading" !== l.readyState && !l.documentElement.doScroll)
                                setTimeout(function() {
                                    t(n)
                                }, 0);
                            else {
                                var i = function i() {
                                    l.removeEventListener("DOMContentLoaded", i, !1),
                                    e.removeEventListener("load", i, !1),
                                    t(n)
                                };
                                l.addEventListener("DOMContentLoaded", i, !1),
                                e.addEventListener("load", i, !1)
                            }
                            return this
                        },
                        get: function(e) {
                            return e === t ? p.call(this) : this[e >= 0 ? e : e + this.length]
                        },
                        toArray: function() {
                            return this.get()
                        },
                        size: function() {
                            return this.length
                        },
                        remove: function() {
                            return this.each(function() {
                                null != this.parentNode && this.parentNode.removeChild(this)
                            })
                        },
                        each: function(e) {
                            var t, i;
                            if (Z(this)) {
                                for (t = 0; t < this.length; t++)
                                    if (!1 === e.call(this[t], t, this[t]))
                                        return this
                            } else
                                for (i in this)
                                    if (!1 === e.call(this[i], i, this[i]))
                                        return this;
                            return this
                        },
                        filter: function(e) {
                            return B(e) ? this.not(this.not(e)) : n(u.call(this, function(t) {
                                return x.matches(t, e)
                            }))
                        },
                        add: function(e, t) {
                            return n(a(this.concat(n(e, t))))
                        },
                        is: function(e) {
                            return "string" == typeof e ? this.length > 0 && x.matches(this[0], e) : e && this.selector == e.selector
                        },
                        not: function(e) {
                            var i = [];
                            if (B(e) && e.call !== t)
                                this.each(function(t) {
                                    e.call(this, t) || i.push(this)
                                });
                            else {
                                var r = "string" == typeof e ? this.filter(e) : Z(e) && B(e.item) ? p.call(e) : n(e);
                                this.forEach(function(e) {
                                    r.indexOf(e) < 0 && i.push(e)
                                })
                            }
                            return n(i)
                        },
                        has: function(e) {
                            return this.filter(function() {
                                return U(e) ? n.contains(this, e) : n(this).find(e).size()
                            })
                        },
                        eq: function(e) {
                            return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
                        },
                        first: function() {
                            var e = this[0];
                            return e && !U(e) ? e : n(e)
                        },
                        last: function() {
                            var e = this[this.length - 1];
                            return e && !U(e) ? e : n(e)
                        },
                        find: function(e) {
                            var t = this;
                            return e ? "object" == $e(e) ? n(e).filter(function() {
                                var e = this;
                                return s.some.call(t, function(t) {
                                    return n.contains(t, e)
                                })
                            }) : 1 == this.length ? n(x.qsa(this[0], e)) : this.map(function() {
                                return x.qsa(this, e)
                            }) : n()
                        },
                        closest: function(e, t) {
                            var i = []
                              , r = "object" == $e(e) && n(e);
                            return this.each(function(n, o) {
                                for (; o && !(r ? r.indexOf(o) >= 0 : x.matches(o, e)); )
                                    o = o !== t && !L(o) && o.parentNode;
                                o && i.indexOf(o) < 0 && i.push(o)
                            }),
                            n(i)
                        },
                        parents: function(e) {
                            for (var t = [], i = this; i.length > 0; )
                                i = n.map(i, function(e) {
                                    if ((e = e.parentNode) && !L(e) && t.indexOf(e) < 0)
                                        return t.push(e),
                                        e
                                });
                            return G(t, e)
                        },
                        parent: function(e) {
                            return G(a(this.pluck("parentNode")), e)
                        },
                        children: function(e) {
                            return G(this.map(function() {
                                return F(this)
                            }), e)
                        },
                        contents: function() {
                            return this.map(function() {
                                return this.contentDocument || p.call(this.childNodes)
                            })
                        },
                        siblings: function(e) {
                            return G(this.map(function(e, t) {
                                return u.call(F(t.parentNode), function(e) {
                                    return e !== t
                                })
                            }), e)
                        },
                        empty: function() {
                            return this.each(function() {
                                this.innerHTML = ""
                            })
                        },
                        pluck: function(e) {
                            return n.map(this, function(t) {
                                return t[e]
                            })
                        },
                        show: function() {
                            return this.each(function() {
                                var e, t, i;
                                "none" == this.style.display && (this.style.display = ""),
                                "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (e = this.nodeName,
                                d[e] || (t = l.createElement(e),
                                l.body.appendChild(t),
                                i = getComputedStyle(t, "").getPropertyValue("display"),
                                t.parentNode.removeChild(t),
                                "none" == i && (i = "block"),
                                d[e] = i),
                                d[e]))
                            })
                        },
                        replaceWith: function(e) {
                            return this.before(e).remove()
                        },
                        wrap: function(e) {
                            var t = B(e);
                            if (this[0] && !t)
                                var i = n(e).get(0)
                                  , r = i.parentNode || this.length > 1;
                            return this.each(function(o) {
                                n(this).wrapAll(t ? e.call(this, o) : r ? i.cloneNode(!0) : i)
                            })
                        },
                        wrapAll: function(e) {
                            if (this[0]) {
                                var t;
                                for (n(this[0]).before(e = n(e)); (t = e.children()).length; )
                                    e = t.first();
                                n(e).append(this)
                            }
                            return this
                        },
                        wrapInner: function(e) {
                            var t = B(e);
                            return this.each(function(i) {
                                var r = n(this)
                                  , o = r.contents()
                                  , a = t ? e.call(this, i) : e;
                                o.length ? o.wrapAll(a) : r.append(a)
                            })
                        },
                        unwrap: function() {
                            return this.parent().each(function() {
                                n(this).replaceWith(n(this).children())
                            }),
                            this
                        },
                        clone: function() {
                            return this.map(function() {
                                return this.cloneNode(!0)
                            })
                        },
                        hide: function() {
                            return this.css("display", "none")
                        },
                        toggle: function(e) {
                            return this.each(function() {
                                var i = n(this);
                                (e === t ? "none" == i.css("display") : e) ? i.show() : i.hide()
                            })
                        },
                        prev: function(e) {
                            return n(this.pluck("previousElementSibling")).filter(e || "*")
                        },
                        next: function(e) {
                            return n(this.pluck("nextElementSibling")).filter(e || "*")
                        },
                        html: function(e) {
                            return 0 in arguments ? this.each(function(t) {
                                var i = this.innerHTML;
                                n(this).empty().append(j(this, e, t, i))
                            }) : 0 in this ? this[0].innerHTML : null
                        },
                        text: function(e) {
                            return 0 in arguments ? this.each(function(t) {
                                var i = j(this, e, t, this.textContent);
                                this.textContent = null == i ? "" : "" + i
                            }) : 0 in this ? this.pluck("textContent").join("") : null
                        },
                        attr: function(e, n) {
                            var r;
                            return "string" != typeof e || 1 in arguments ? this.each(function(t) {
                                if (1 === this.nodeType)
                                    if (U(e))
                                        for (i in e)
                                            q(this, i, e[i]);
                                    else
                                        q(this, e, j(this, n, t, this.getAttribute(e)))
                            }) : 0 in this && 1 == this[0].nodeType && null != (r = this[0].getAttribute(e)) ? r : t
                        },
                        removeAttr: function(e) {
                            return this.each(function() {
                                1 === this.nodeType && e.split(" ").forEach(function(e) {
                                    q(this, e)
                                }, this)
                            })
                        },
                        prop: function(e, t) {
                            return "string" != typeof (e = k[e] || e) || 1 in arguments ? this.each(function(n) {
                                if (U(e))
                                    for (i in e)
                                        this[k[i] || i] = e[i];
                                else
                                    this[e] = j(this, t, n, this[e])
                            }) : this[0] && this[0][e]
                        },
                        removeProp: function(e) {
                            return e = k[e] || e,
                            this.each(function() {
                                delete this[e]
                            })
                        },
                        data: function(e, i) {
                            var n = "data-" + e.replace(A, "-$1").toLowerCase()
                              , r = 1 in arguments ? this.attr(n, i) : this.attr(n);
                            return null !== r ? K(r) : t
                        },
                        val: function(e) {
                            return 0 in arguments ? (null == e && (e = ""),
                            this.each(function(t) {
                                this.value = j(this, e, t, this.value)
                            })) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function() {
                                return this.selected
                            }).pluck("value") : this[0].value)
                        },
                        offset: function(t) {
                            if (t)
                                return this.each(function(e) {
                                    var i = n(this)
                                      , r = j(this, t, e, i.offset())
                                      , o = i.offsetParent().offset()
                                      , a = {
                                        top: r.top - o.top,
                                        left: r.left - o.left
                                    };
                                    "static" == i.css("position") && (a.position = "relative"),
                                    i.css(a)
                                });
                            if (!this.length)
                                return null;
                            if (l.documentElement !== this[0] && !n.contains(l.documentElement, this[0]))
                                return {
                                    top: 0,
                                    left: 0
                                };
                            var i = this[0].getBoundingClientRect();
                            return {
                                left: i.left + e.pageXOffset,
                                top: i.top + e.pageYOffset,
                                width: Math.round(i.width),
                                height: Math.round(i.height)
                            }
                        },
                        css: function(e, t) {
                            if (arguments.length < 2) {
                                var r = this[0];
                                if ("string" == typeof e) {
                                    if (!r)
                                        return;
                                    return r.style[o(e)] || getComputedStyle(r, "").getPropertyValue(e)
                                }
                                if (C(e)) {
                                    if (!r)
                                        return;
                                    var a = {}
                                      , s = getComputedStyle(r, "");
                                    return n.each(e, function(e, t) {
                                        a[t] = r.style[o(t)] || s.getPropertyValue(t)
                                    }),
                                    a
                                }
                            }
                            var c = "";
                            if ("string" == R(e))
                                t || 0 === t ? c = P(e) + ":" + z(e, t) : this.each(function() {
                                    this.style.removeProperty(P(e))
                                });
                            else
                                for (i in e)
                                    e[i] || 0 === e[i] ? c += P(i) + ":" + z(i, e[i]) + ";" : this.each(function() {
                                        this.style.removeProperty(P(i))
                                    });
                            return this.each(function() {
                                this.style.cssText += ";" + c
                            })
                        },
                        index: function(e) {
                            return e ? this.indexOf(n(e)[0]) : this.parent().children().indexOf(this[0])
                        },
                        hasClass: function(e) {
                            return !!e && s.some.call(this, function(e) {
                                return this.test(H(e))
                            }, M(e))
                        },
                        addClass: function(e) {
                            return e ? this.each(function(t) {
                                if ("className"in this) {
                                    r = [];
                                    var i = H(this);
                                    j(this, e, t, i).split(/\s+/g).forEach(function(e) {
                                        n(this).hasClass(e) || r.push(e)
                                    }, this),
                                    r.length && H(this, i + (i ? " " : "") + r.join(" "))
                                }
                            }) : this
                        },
                        removeClass: function(e) {
                            return this.each(function(i) {
                                if ("className"in this) {
                                    if (e === t)
                                        return H(this, "");
                                    r = H(this),
                                    j(this, e, i, r).split(/\s+/g).forEach(function(e) {
                                        r = r.replace(M(e), " ")
                                    }),
                                    H(this, r.trim())
                                }
                            })
                        },
                        toggleClass: function(e, i) {
                            return e ? this.each(function(r) {
                                var o = n(this);
                                j(this, e, r, H(this)).split(/\s+/g).forEach(function(e) {
                                    (i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e)
                                })
                            }) : this
                        },
                        scrollTop: function(e) {
                            if (this.length) {
                                var i = "scrollTop"in this[0];
                                return e === t ? i ? this[0].scrollTop : this[0].pageYOffset : this.each(i ? function() {
                                    this.scrollTop = e
                                }
                                : function() {
                                    this.scrollTo(this.scrollX, e)
                                }
                                )
                            }
                        },
                        scrollLeft: function(e) {
                            if (this.length) {
                                var i = "scrollLeft"in this[0];
                                return e === t ? i ? this[0].scrollLeft : this[0].pageXOffset : this.each(i ? function() {
                                    this.scrollLeft = e
                                }
                                : function() {
                                    this.scrollTo(e, this.scrollY)
                                }
                                )
                            }
                        },
                        position: function() {
                            if (this.length) {
                                var e = this[0]
                                  , t = this.offsetParent()
                                  , i = this.offset()
                                  , r = w.test(t[0].nodeName) ? {
                                    top: 0,
                                    left: 0
                                } : t.offset();
                                return i.top -= parseFloat(n(e).css("margin-top")) || 0,
                                i.left -= parseFloat(n(e).css("margin-left")) || 0,
                                r.top += parseFloat(n(t[0]).css("border-top-width")) || 0,
                                r.left += parseFloat(n(t[0]).css("border-left-width")) || 0,
                                {
                                    top: i.top - r.top,
                                    left: i.left - r.left
                                }
                            }
                        },
                        offsetParent: function() {
                            return this.map(function() {
                                for (var e = this.offsetParent || l.body; e && !w.test(e.nodeName) && "static" == n(e).css("position"); )
                                    e = e.offsetParent;
                                return e
                            })
                        }
                    },
                    n.fn.detach = n.fn.remove,
                    ["width", "height"].forEach(function(e) {
                        var i = e.replace(/./, function(e) {
                            return e[0].toUpperCase()
                        });
                        n.fn[e] = function(r) {
                            var o, a = this[0];
                            return r === t ? N(a) ? a["inner" + i] : L(a) ? a.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function(t) {
                                (a = n(this)).css(e, j(this, r, t, a[e]()))
                            })
                        }
                    }),
                    ["after", "prepend", "before", "append"].forEach(function(i, r) {
                        var o = r % 2;
                        n.fn[i] = function() {
                            var i, a, s = n.map(arguments, function(e) {
                                var r = [];
                                return "array" == (i = R(e)) ? (e.forEach(function(e) {
                                    return e.nodeType !== t ? r.push(e) : n.zepto.isZ(e) ? r = r.concat(e.get()) : void (r = r.concat(x.fragment(e)))
                                }),
                                r) : "object" == i || null == e ? e : x.fragment(e)
                            }), c = this.length > 1;
                            return s.length < 1 ? this : this.each(function(t, i) {
                                a = o ? i : i.parentNode,
                                i = 0 == r ? i.nextSibling : 1 == r ? i.firstChild : 2 == r ? i : null;
                                var u = n.contains(l.documentElement, a);
                                s.forEach(function(t) {
                                    if (c)
                                        t = t.cloneNode(!0);
                                    else if (!a)
                                        return n(t).remove();
                                    a.insertBefore(t, i),
                                    u && function e(t, i) {
                                        i(t);
                                        for (var n = 0, r = t.childNodes.length; n < r; n++)
                                            e(t.childNodes[n], i)
                                    }(t, function(t) {
                                        if (!(null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
                                            var i = t.ownerDocument ? t.ownerDocument.defaultView : e;
                                            i.eval.call(i, t.innerHTML)
                                        }
                                    })
                                })
                            })
                        }
                        ,
                        n.fn[o ? i + "To" : "insert" + (r ? "Before" : "After")] = function(e) {
                            return n(e)[i](this),
                            this
                        }
                    }),
                    x.Z.prototype = V.prototype = n.fn,
                    x.uniq = a,
                    x.deserializeValue = K,
                    n.zepto = x,
                    n
                }(),
                e.Zepto = t,
                function(t) {
                    var i, n = 1, r = Array.prototype.slice, o = t.isFunction, a = function(e) {
                        return "string" == typeof e
                    }, s = {}, c = {}, u = "onfocusin"in e, p = {
                        focus: "focusin",
                        blur: "focusout"
                    }, l = {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    };
                    function d(e) {
                        return e._zid || (e._zid = n++)
                    }
                    function f(e, t, i, n) {
                        if ((t = g(t)).ns)
                            var r = (o = t.ns,
                            new RegExp("(?:^| )" + o.replace(" ", " .* ?") + "(?: |$)"));
                        var o;
                        return (s[d(e)] || []).filter(function(e) {
                            return e && (!t.e || e.e == t.e) && (!t.ns || r.test(e.ns)) && (!i || d(e.fn) === d(i)) && (!n || e.sel == n)
                        })
                    }
                    function g(e) {
                        var t = ("" + e).split(".");
                        return {
                            e: t[0],
                            ns: t.slice(1).sort().join(" ")
                        }
                    }
                    function m(e, t) {
                        return e.del && !u && e.e in p || !!t
                    }
                    function h(e) {
                        return l[e] || u && p[e] || e
                    }
                    function v(e, n, r, o, a, c, u) {
                        var p = d(e)
                          , f = s[p] || (s[p] = []);
                        n.split(/\s/).forEach(function(n) {
                            if ("ready" == n)
                                return t(document).ready(r);
                            var s = g(n);
                            s.fn = r,
                            s.sel = a,
                            s.e in l && (r = function(e) {
                                var i = e.relatedTarget;
                                if (!i || i !== this && !t.contains(this, i))
                                    return s.fn.apply(this, arguments)
                            }
                            ),
                            s.del = c;
                            var p = c || r;
                            s.proxy = function(t) {
                                if (!(t = _(t)).isImmediatePropagationStopped()) {
                                    t.data = o;
                                    var n = p.apply(e, t._args == i ? [t] : [t].concat(t._args));
                                    return !1 === n && (t.preventDefault(),
                                    t.stopPropagation()),
                                    n
                                }
                            }
                            ,
                            s.i = f.length,
                            f.push(s),
                            "addEventListener"in e && e.addEventListener(h(s.e), s.proxy, m(s, u))
                        })
                    }
                    function w(e, t, i, n, r) {
                        var o = d(e);
                        (t || "").split(/\s/).forEach(function(t) {
                            f(e, t, i, n).forEach(function(t) {
                                delete s[o][t.i],
                                "removeEventListener"in e && e.removeEventListener(h(t.e), t.proxy, m(t, r))
                            })
                        })
                    }
                    c.click = c.mousedown = c.mouseup = c.mousemove = "MouseEvents",
                    t.event = {
                        add: v,
                        remove: w
                    },
                    t.proxy = function(e, i) {
                        var n = 2 in arguments && r.call(arguments, 2);
                        if (o(e)) {
                            var s = function() {
                                return e.apply(i, n ? n.concat(r.call(arguments)) : arguments)
                            };
                            return s._zid = d(e),
                            s
                        }
                        if (a(i))
                            return n ? (n.unshift(e[i], e),
                            t.proxy.apply(null, n)) : t.proxy(e[i], e);
                        throw new TypeError("expected function")
                    }
                    ,
                    t.fn.bind = function(e, t, i) {
                        return this.on(e, t, i)
                    }
                    ,
                    t.fn.unbind = function(e, t) {
                        return this.off(e, t)
                    }
                    ,
                    t.fn.one = function(e, t, i, n) {
                        return this.on(e, t, i, n, 1)
                    }
                    ;
                    var A = function() {
                        return !0
                    }
                      , E = function() {
                        return !1
                    }
                      , y = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/
                      , S = {
                        preventDefault: "isDefaultPrevented",
                        stopImmediatePropagation: "isImmediatePropagationStopped",
                        stopPropagation: "isPropagationStopped"
                    };
                    function _(e, n) {
                        if (n || !e.isDefaultPrevented) {
                            n || (n = e),
                            t.each(S, function(t, i) {
                                var r = n[t];
                                e[t] = function() {
                                    return this[i] = A,
                                    r && r.apply(n, arguments)
                                }
                                ,
                                e[i] = E
                            });
                            try {
                                e.timeStamp || (e.timeStamp = Date.now())
                            } catch (e) {}
                            (n.defaultPrevented !== i ? n.defaultPrevented : "returnValue"in n ? !1 === n.returnValue : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = A)
                        }
                        return e
                    }
                    function T(e) {
                        var t, n = {
                            originalEvent: e
                        };
                        for (t in e)
                            y.test(t) || e[t] === i || (n[t] = e[t]);
                        return _(n, e)
                    }
                    t.fn.delegate = function(e, t, i) {
                        return this.on(t, e, i)
                    }
                    ,
                    t.fn.undelegate = function(e, t, i) {
                        return this.off(t, e, i)
                    }
                    ,
                    t.fn.live = function(e, i) {
                        return t(document.body).delegate(this.selector, e, i),
                        this
                    }
                    ,
                    t.fn.die = function(e, i) {
                        return t(document.body).undelegate(this.selector, e, i),
                        this
                    }
                    ,
                    t.fn.on = function(e, n, s, c, u) {
                        var p, l, d = this;
                        return e && !a(e) ? (t.each(e, function(e, t) {
                            d.on(e, n, s, t, u)
                        }),
                        d) : (a(n) || o(c) || !1 === c || (c = s,
                        s = n,
                        n = i),
                        c !== i && !1 !== s || (c = s,
                        s = i),
                        !1 === c && (c = E),
                        d.each(function(i, o) {
                            u && (p = function(e) {
                                return w(o, e.type, c),
                                c.apply(this, arguments)
                            }
                            ),
                            n && (l = function(e) {
                                var i, a = t(e.target).closest(n, o).get(0);
                                if (a && a !== o)
                                    return i = t.extend(T(e), {
                                        currentTarget: a,
                                        liveFired: o
                                    }),
                                    (p || c).apply(a, [i].concat(r.call(arguments, 1)))
                            }
                            ),
                            v(o, e, c, s, n, l || p)
                        }))
                    }
                    ,
                    t.fn.off = function(e, n, r) {
                        var s = this;
                        return e && !a(e) ? (t.each(e, function(e, t) {
                            s.off(e, n, t)
                        }),
                        s) : (a(n) || o(r) || !1 === r || (r = n,
                        n = i),
                        !1 === r && (r = E),
                        s.each(function() {
                            w(this, e, r, n)
                        }))
                    }
                    ,
                    t.fn.trigger = function(e, i) {
                        return (e = a(e) || t.isPlainObject(e) ? t.Event(e) : _(e))._args = i,
                        this.each(function() {
                            e.type in p && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent"in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, i)
                        })
                    }
                    ,
                    t.fn.triggerHandler = function(e, i) {
                        var n, r;
                        return this.each(function(o, s) {
                            (n = T(a(e) ? t.Event(e) : e))._args = i,
                            n.target = s,
                            t.each(f(s, e.type || e), function(e, t) {
                                if (r = t.proxy(n),
                                n.isImmediatePropagationStopped())
                                    return !1
                            })
                        }),
                        r
                    }
                    ,
                    "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
                        t.fn[e] = function(t) {
                            return 0 in arguments ? this.bind(e, t) : this.trigger(e)
                        }
                    }),
                    t.Event = function(e, t) {
                        a(e) || (e = (t = e).type);
                        var i = document.createEvent(c[e] || "Events")
                          , n = !0;
                        if (t)
                            for (var r in t)
                                "bubbles" == r ? n = !!t[r] : i[r] = t[r];
                        return i.initEvent(e, n, !0),
                        _(i)
                    }
                }(t),
                function(e) {
                    var t = {}
                      , i = e.fn.data
                      , n = e.camelCase
                      , r = e.expando = "Zepto" + +new Date
                      , o = [];
                    function a(i, a, s) {
                        var c = i[r] || (i[r] = ++e.uuid)
                          , u = t[c] || (t[c] = function(t) {
                            var i = {};
                            return e.each(t.attributes || o, function(t, r) {
                                0 == r.name.indexOf("data-") && (i[n(r.name.replace("data-", ""))] = e.zepto.deserializeValue(r.value))
                            }),
                            i
                        }(i));
                        return void 0 !== a && (u[n(a)] = s),
                        u
                    }
                    e.fn.data = function(o, s) {
                        return void 0 === s ? e.isPlainObject(o) ? this.each(function(t, i) {
                            e.each(o, function(e, t) {
                                a(i, e, t)
                            })
                        }) : 0 in this ? function(o, s) {
                            var c = o[r]
                              , u = c && t[c];
                            if (void 0 === s)
                                return u || a(o);
                            if (u) {
                                if (s in u)
                                    return u[s];
                                var p = n(s);
                                if (p in u)
                                    return u[p]
                            }
                            return i.call(e(o), s)
                        }(this[0], o) : void 0 : this.each(function() {
                            a(this, o, s)
                        })
                    }
                    ,
                    e.data = function(t, i, n) {
                        return e(t).data(i, n)
                    }
                    ,
                    e.hasData = function(i) {
                        var n = i[r]
                          , o = n && t[n];
                        return !!o && !e.isEmptyObject(o)
                    }
                    ,
                    e.fn.removeData = function(i) {
                        return "string" == typeof i && (i = i.split(/\s+/)),
                        this.each(function() {
                            var o = this[r]
                              , a = o && t[o];
                            a && e.each(i || a, function(e) {
                                delete a[i ? n(this) : e]
                            })
                        })
                    }
                    ,
                    ["remove", "empty"].forEach(function(t) {
                        var i = e.fn[t];
                        e.fn[t] = function() {
                            var e = this.find("*");
                            return "remove" === t && (e = e.add(this)),
                            e.removeData(),
                            i.call(this)
                        }
                    })
                }(t);
                var n = window.Zepto;
                window.Zepto = i,
                window.localZepto = n,
                window.$pagesense = {
                    $: n
                }
            }(),
            ZAB.data) {
                var et = !1;
                for (var tt in ZAB.data.experiment) {
                    var it = ZAB.data.experiment[tt];
                    if ([1, 2].indexOf(it.type) > -1) {
                        et = !0;
                        break
                    }
                }
                !window.ZAB.data.visitor_count && et && Ke.loadScript()
            }
            var nt = E.getZABQueryKeyValue(window.location.href, "ps_editor")
              , rt = E.getZABQueryKeyValue(window.location.href, "ps_verifyscript");
            nt ? function(e, t) {
                if (!document.querySelectorAll("#" + t).length) {
                    var i = document.createElement("script");
                    (i = E.addNonce(i)).type = "text/javascript",
                    i.id = t,
                    i.src = e,
                    window.$pagesense.$("head").append(i)
                }
            }("https://" + h.getTrackingServerUrl() + "/pagesense/initializer/scriptLoader.js", a.SCRIPT_LOADER_ID) : rt || window.location.search.indexOf("qa_mode=true") > -1 ? We() : Pe.checkPrivacyConsent()
        }
    } catch (e) {
        w.error(e)
    }
    var ot = function() {
        return function() {}
    }();
    t.default = new ot
}
]);

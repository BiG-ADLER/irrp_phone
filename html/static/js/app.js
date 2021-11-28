webpackJsonp([0], [, , , , , , function (t, e, n) {
    function s(t) {
        n(193)
    }
    var a = n(0)(n(110), n(269), s, "data-v-3a8bc553", null);
    t.exports = a.exports
}, function (t, e, n) {
    "use strict";
    var s = n(52),
        a = n.n(s),
        o = n(12),
        i = n(234),
        r = n.n(i),
        c = n(9);
    e.a = {
        CreateModal: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new a.a(function (e, n) {
                var s = new(o.a.extend(r.a))({
                    el: document.createElement("div"),
                    propsData: t
                });
                document.querySelector("#app").appendChild(s.$el), s.$on("select", function (t) {
                    e(t), s.$el.parentNode.removeChild(s.$el), s.$destroy()
                }), s.$on("cancel", function () {
                    e({
                        title: "cancel"
                    }), s.$el.parentNode.removeChild(s.$el), s.$destroy()
                })
            })
        },
        CreateTextModal: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return c.a.getReponseText(t)
        }
    }
}, , function (t, e, n) {
    "use strict";
    var s = n(1),
        a = n.n(s),
        o = n(30),
        i = n.n(o),
        r = n(4),
        c = n.n(r),
        u = n(22),
        l = n.n(u),
        p = n(3),
        h = n.n(p),
        f = n(53),
        d = n.n(f),
        m = n(54),
        v = n.n(m),
        g = n(19),
        _ = n.n(g),
        b = n(18),
        w = n(79),
        C = n(12),
        k = n(27),
        y = (n.n(k), n(295)),
        S = n.n(y),
        T = _()(S.a),
        E = !1,
        A = function () {
            function t() {
                var e = this;
                d()(this, t), window.addEventListener("message", function (t) {
                    var n = t.data.event;
                    void 0 !== n && "function" == typeof e["on" + n] ? e["on" + n](t.data) : void 0 !== t.data.show && b.a.commit("SET_PHONE_VISIBILITY", t.data.show)
                }), this.config = null, this.voiceRTC = null, this.soundList = {}
            }
            return v()(t, [{
                key: "post",
                value: function () {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e, n) {
                        var s, a;
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return s = void 0 === n ? "{}" : l()(n), t.next = 3, window.jQuery.post("https://irrp_phone/" + e, s);
                            case 3:
                                return a = t.sent, t.abrupt("return", JSON.parse(a));
                            case 5:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "log",
                value: function () {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t() {
                        for (var e = arguments.length, n = Array(e), s = 0; s < e; s++) n[s] = arguments[s];
                        var a;
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("log", n));
                            case 4:
                                return t.abrupt("return", (a = console).log.apply(a, n));
                            case 5:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "convertEmoji",
                value: function (t) {
                    var e = !0,
                        n = !1,
                        s = void 0;
                    try {
                        for (var a, o = i()(T); !(e = (a = o.next()).done); e = !0) {
                            var r = a.value;
                            t = t.replace(new RegExp(":" + r + ":", "g"), S.a[r])
                        }
                    } catch (t) {
                        n = !0, s = t
                    } finally {
                        try {
                            !e && o.return && o.return()
                        } finally {
                            if (n) throw s
                        }
                    }
                    return t
                }
            }, {
                key: "sendGenericError",
                value: function (t) {
                    this.log("Sending Error: " + t), C.a.notify({
                        title: "Error",
                        message: t,
                        backgroundColor: "#e0245e80"
                    })
                }
            }, {
                key: "sendMessage",
                value: function () {
                    function t(t, n, s) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e, n, s) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("sendMessage", {
                                    phoneNumber: e,
                                    message: n,
                                    gpsData: s
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "deleteMessage",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("deleteMessage", {
                                    id: e
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "deleteMessagesNumber",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("deleteMessageNumber", {
                                    number: e
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "deleteAllMessages",
                value: function () {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t() {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("deleteAllMessage"));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "setMessageRead",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("setReadMessageNumber", {
                                    number: e
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "updateContact",
                value: function () {
                    function t(t, n, s) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e, n, s) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("updateContact", {
                                    id: e,
                                    display: n,
                                    phoneNumber: s
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "addContact",
                value: function () {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e, n) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("addContact", {
                                    display: e,
                                    phoneNumber: n
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "deleteContact",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("deleteContact", {
                                    id: e
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "unblockNumber",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("unblockNumber", e));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "blockNumber",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("blockNumber", e));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "appelsDeleteHistorique",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("appelsDeleteHistorique", {
                                    numero: e
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "appelsDeleteAllHistorique",
                value: function () {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t() {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("appelsDeleteAllHistorique"));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "closePhone",
                value: function () {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t() {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("closePhone"));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "setUseMouse",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("useMouse", e));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "setGPS",
                value: function () {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e, n) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("setGPS", {
                                    x: e,
                                    y: n
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "takePhoto",
                value: function () {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t() {
                        var e;
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return b.a.commit("SET_TEMPO_HIDE", !0), t.next = 3, this.post("takePhoto", {
                                    url: this.config.fileUploadService_Url,
                                    field: this.config.fileUploadService_Field
                                });
                            case 3:
                                return e = t.sent, b.a.commit("SET_TEMPO_HIDE", !1), t.abrupt("return", e);
                            case 6:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "getReponseText",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("reponseText", e || {}));
                            case 4:
                                return t.abrupt("return", {
                                    text: window.prompt()
                                });
                            case 5:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "faketakePhoto",
                value: function () {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t() {
                        var e;
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return b.a.commit("SET_TEMPO_HIDE", !0), t.next = 3, this.post("faketakePhoto");
                            case 3:
                                return e = t.sent, t.abrupt("return", e);
                            case 5:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "callEvent",
                value: function () {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e, n) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("callEvent", {
                                    eventName: e,
                                    data: n
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "deleteALL",
                value: function () {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t() {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return localStorage.clear(), b.a.dispatch("tchatReset"), b.a.dispatch("notesReset"), b.a.dispatch("resetPhone"), b.a.dispatch("resetMessage"), b.a.dispatch("resetContact"), b.a.dispatch("resetBourse"), b.a.dispatch("resetAppels"), t.abrupt("return", this.post("deleteALL"));
                            case 9:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "getConfig",
                value: function () {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t() {
                        var e;
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (null !== this.config) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 3, window.jQuery.get("/html/static/config/config.json");
                            case 3:
                                e = t.sent, this.config = JSON.parse(e), !0 === this.config.useWebRTCVocal && (this.voiceRTC = new w.a(this.config.RTCConfig), E = !0), this.notififyUseRTC(this.config.useWebRTCVocal);
                            case 7:
                                return t.abrupt("return", this.config);
                            case 8:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "onsetEnableApp",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                b.a.dispatch("setEnableApp", e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "setIgnoreFocus",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                this.post("setIgnoreFocus", {
                                    ignoreFocus: e
                                });
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "tchatGetMessagesChannel",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                this.post("tchat_getChannel", {
                                    channel: e
                                });
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "tchatSendMessage",
                value: function () {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e, n) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                this.post("tchat_addMessage", {
                                    channel: e,
                                    message: n
                                });
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "notesGetMessagesChannel",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                window.localStorage.setItem("irrp_notas_locales", e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "notesSendMessage",
                value: function () {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e, n) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                this.post("notes_addMessage", {
                                    channel: e,
                                    message: n
                                });
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "onupdateMyPhoneNumber",
                value: function (t) {
                    b.a.commit("SET_MY_PHONE_NUMBER", t.myPhoneNumber)
                }
            }, {
                key: "onupdateMessages",
                value: function (t) {
                    b.a.commit("SET_MESSAGES", t.messages)
                }
            }, {
                key: "onnewMessage",
                value: function (t) {
                    b.a.commit("ADD_MESSAGE", t.message)
                }
            }, {
                key: "onupdateContacts",
                value: function (t) {
                    b.a.commit("SET_CONTACTS", t.contacts)
                }
            }, {
                key: "onupdateBlockList",
                value: function (t) {
                    b.a.commit("SET_BLOCKLIST", t.list)
                }
            }, {
                key: "onhistoriqueCall",
                value: function (t) {
                    b.a.commit("SET_APPELS_HISTORIQUE", t.historique)
                }
            }, {
                key: "onupdateBankbalance",
                value: function (t) {
                    b.a.commit("SET_BANK_AMONT", t.banking)
                }
            }, {
                key: "onupdateBourse",
                value: function (t) {
                    b.a.commit("SET_BOURSE_INFO", t.bourse)
                }
            }, {
                key: "startCall",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        var n, s, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = e.replace("#", ""), !(n.length > 11)) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return", this.log("Err: This number is invalid"));
                            case 3:
                                if (!0 !== E) {
                                    t.next = 10;
                                    break
                                }
                                return t.next = 6, this.voiceRTC.prepareCall();
                            case 6:
                                return s = t.sent, t.abrupt("return", this.post("startCall", {
                                    numero: e,
                                    rtcOffer: s,
                                    extraData: a
                                }));
                            case 10:
                                return t.abrupt("return", this.post("startCall", {
                                    numero: e,
                                    extraData: a
                                }));
                            case 11:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "acceptCall",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        var n;
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!0 !== E) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 3, this.voiceRTC.acceptCall(e);
                            case 3:
                                return n = t.sent, t.abrupt("return", this.post("acceptCall", {
                                    infoCall: e,
                                    rtcAnswer: n
                                }));
                            case 7:
                                return t.abrupt("return", this.post("acceptCall", {
                                    infoCall: e
                                }));
                            case 8:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "rejectCall",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("rejectCall", {
                                    infoCall: e
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "notififyUseRTC",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = h()(c.a.mark(function t(e) {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.post("notififyUseRTC", e));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "onwaitingCall",
                value: function (t) {
                    b.a.commit("SET_APPELS_INFO_IF_EMPTY", a()({}, t.infoCall, {
                        initiator: t.initiator
                    }))
                }
            }, {
                key: "onshowNotificaiton",
                value: function (t) {
                    C.a.notify(t)
                }
            }, {
                key: "onupdateWeather",
                value: function (t) {
                    b.a.commit("UPDATE_WEATHER", t.weather)
                }
            }, {
                key: "onacceptCall",
                value: function (t) {
                    var e = this;
                    !0 === E && (!0 === t.initiator && this.voiceRTC.onReceiveAnswer(t.infoCall.rtcAnswer), this.voiceRTC.addEventListener("onCandidate", function (n) {
                        e.post("onCandidates", {
                            id: t.infoCall.id,
                            candidates: n
                        })
                    })), b.a.commit("SET_APPELS_INFO_IS_ACCEPTS", !0)
                }
            }, {
                key: "oncandidatesAvailable",
                value: function (t) {
                    this.voiceRTC.addIceCandidates(t.candidates)
                }
            }, {
                key: "onrejectCall",
                value: function (t) {
                    null !== this.voiceRTC && this.voiceRTC.close(), b.a.commit("SET_APPELS_INFO", null)
                }
            }, {
                key: "ontchat_receive",
                value: function (t) {
                    b.a.dispatch("tchatAddMessage", t)
                }
            }, {
                key: "ontchat_channel",
                value: function (t) {
                    b.a.commit("TCHAT_SET_MESSAGES", t)
                }
            }, {
                key: "onnotes_receive",
                value: function (t) {
                    b.a.dispatch("notesAddMessage", t)
                }
            }, {
                key: "onnotes_channel",
                value: function (t) {
                    b.a.commit("NOTES_SET_MESSAGES", t)
                }
            }, {
                key: "onautoStartCall",
                value: function (t) {
                    this.startCall(t.number, t.extraData)
                }
            }, {
                key: "onautoAcceptCall",
                value: function (t) {
                    b.a.commit("SET_APPELS_INFO", t.infoCall), this.acceptCall(t.infoCall)
                }
            }, {
                key: "twitter_login",
                value: function (t, e) {
                    this.post("twitter_login", {
                        username: t,
                        password: e
                    })
                }
            }, {
                key: "twitter_changePassword",
                value: function (t, e, n) {
                    this.post("twitter_changePassword", {
                        username: t,
                        password: e,
                        newPassword: n
                    })
                }
            }, {
                key: "twitter_createAccount",
                value: function (t, e, n) {
                    this.post("twitter_createAccount", {
                        username: t,
                        password: e,
                        avatarUrl: n
                    })
                }
            }, {
                key: "twitter_postTweet",
                value: function (t, e, n) {
                    this.post("twitter_postTweet", {
                        username: t,
                        password: e,
                        message: n
                    })
                }
            }, {
                key: "twitter_postTweetImg",
                value: function (t, e, n) {
                    this.post("twitter_postTweetImg", {
                        username: t,
                        password: e,
                        message: n
                    })
                }
            }, {
                key: "twitter_toggleLikeTweet",
                value: function (t, e, n) {
                    this.post("twitter_toggleLikeTweet", {
                        username: t,
                        password: e,
                        tweetId: n
                    })
                }
            }, {
                key: "twitter_setAvatar",
                value: function (t, e, n) {
                    this.post("twitter_setAvatarUrl", {
                        username: t,
                        password: e,
                        avatarUrl: n
                    })
                }
            }, {
                key: "twitter_getTweets",
                value: function (t, e) {
                    this.post("twitter_getTweets", {
                        username: t,
                        password: e
                    })
                }
            }, {
                key: "twitter_getFavoriteTweets",
                value: function (t, e) {
                    this.post("twitter_getFavoriteTweets", {
                        username: t,
                        password: e
                    })
                }
            }, {
                key: "ontwitter_tweets",
                value: function (t) {
                    b.a.commit("SET_TWEETS", t)
                }
            }, {
                key: "ontwitter_favoritetweets",
                value: function (t) {
                    b.a.commit("SET_FAVORITE_TWEETS", t)
                }
            }, {
                key: "ontwitter_newTweet",
                value: function (t) {
                    b.a.dispatch("addTweet", t.tweet)
                }
            }, {
                key: "ontwitter_setAccount",
                value: function (t) {
                    b.a.dispatch("setAccount", t)
                }
            }, {
                key: "ontwitter_updateTweetLikes",
                value: function (t) {
                    b.a.commit("UPDATE_TWEET_LIKE", t)
                }
            }, {
                key: "ontwitter_setTweetLikes",
                value: function (t) {
                    b.a.commit("UPDATE_TWEET_ISLIKE", t)
                }
            }, {
                key: "ontwitter_showError",
                value: function (t) {
                    C.a.notify({
                        title: b.a.getters.IntlString(t.title, ""),
                        message: b.a.getters.IntlString(t.message),
                        icon: "twitter",
                        backgroundColor: "#e0245e80"
                    })
                }
            }, {
                key: "ontwitter_showSuccess",
                value: function (t) {
                    C.a.notify({
                        title: b.a.getters.IntlString(t.title, ""),
                        message: b.a.getters.IntlString(t.message),
                        icon: "twitter"
                    })
                }
            }, {
                key: "onplaySound",
                value: function (t) {
                    var e = t.sound,
                        n = t.volume,
                        s = void 0 === n ? 1 : n,
                        a = "/html/static/sound/" + e;
                    if (e) {
                        void 0 !== this.soundList[e] && this.onstopSound({
                            sound: e
                        });
                        var o = this.onstopSound;
                        this.soundList[e] = new k.Howl({
                            src: a,
                            volume: s,
                            loop: !1,
                            onend: function () {
                                o({
                                    sound: e
                                })
                            }
                        }), this.soundList[e].play()
                    }
                }
            }, {
                key: "onsetSoundVolume",
                value: function (t) {
                    var e = t.sound,
                        n = t.volume,
                        s = void 0 === n ? 1 : n;
                    void 0 !== this.soundList[e] && (this.soundList[e].volume = s)
                }
            }, {
                key: "onstopSound",
                value: function (t) {
                    var e = t.sound;
                    this && void 0 !== this.soundList[e] && (this.soundList[e].pause(), delete this.soundList[e])
                }
            }]), t
        }(),
        P = new A;
    e.a = P
}, , , , , , , , , function (t, e, n) {
    "use strict";
    var s = n(12),
        a = n(2),
        o = n(87),
        i = n(84),
        r = n(85),
        c = n(81),
        u = n(82),
        l = n(86),
        p = n(83),
        h = n(88),
        f = n(89);
    s.a.use(a.c), e.a = new a.c.Store({
        modules: {
            phone: o.a,
            contacts: i.a,
            messages: r.a,
            appels: c.a,
            bank: u.a,
            bourse: p.a,
            notes: l.a,
            tchat: h.a,
            twitter: f.a
        },
        strict: !0
    })
}, , , function (t, e, n) {
    function s(t) {
        n(214)
    }
    var a = n(0)(n(105), n(290), s, "data-v-def349b2", null);
    t.exports = a.exports
}, , , , , , , function (t, e, n) {
    function s(t) {
        n(187)
    }
    var a = n(0)(n(104), n(263), s, "data-v-2804e189", null);
    t.exports = a.exports
}, , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    var s = n(12);
    e.a = new s.a
}, function (t, e, n) {
    "use strict";
    function s(t) {
        var e = t.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
        return null !== e ? {
            red: parseInt(e[1], 10),
            green: parseInt(e[2], 10),
            blue: parseInt(e[3], 10)
        } : (e = t.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/), null !== e ? {
            red: parseInt(e[1], 16),
            green: parseInt(e[2], 16),
            blue: parseInt(e[3], 16)
        } : void 0)
    }
    function a(t, e) {
        return t.reduce(function (t, n) {
            return (t[n[e]] = t[n[e]] || []).push(n), t
        }, {})
    }
    function o(t) {
        if (0 === t.length || "#" === t[0]) return "#D32F2F";
        var e = t.split("").reduce(function (t, e) {
            return (t << 5) - t + e.charCodeAt(0) | 0
        }, 0);
        return r.a.getters.colors[Math.abs(e) % r.a.getters.colors.length]
    }
    function i(t) {
        var e = s(t);
        return void 0 === e ? "#000000" : .299 * e.red + .587 * e.green + .114 * e.blue > 186 ? "rgba(0, 0, 0, 0.87)" : "#FFFFFF"
    }
    e.a = a, e.b = o, e.c = i;
    var r = n(18)
}, , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    function s(t) {
        n(179)
    }
    var a = n(0)(n(97), n(255), s, "data-v-0570365f", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(184)
    }
    var a = n(0)(n(106), n(260), s, "data-v-1c547768", null);
    t.exports = a.exports
}, function (t, e, n) {
    "use strict";
    var s = n(129),
        a = n.n(s),
        o = n(12),
        i = n(222),
        r = n.n(i),
        c = n(49),
        u = {
            install: function (t) {
                if (!this.installed) {
                    this.installed = !0, o.a.component("Notification", r.a);
                    var e = function (t) {
                        c.a.$emit("add", t)
                    };
                    o.a.notify = e, a()(o.a.prototype, {
                        $notify: {
                            get: function () {
                                return o.a.notify
                            }
                        }
                    })
                }
            }
        };
    e.a = u
}, function (t, e, n) {
    "use strict";
    function s(t, e) {
        if ("just now" === t) return e;
        var n = Math.round(t);
        return Array.isArray(e) ? n > 1 ? e[1].replace(/%s/, n) : e[0].replace(/%s/, n) : e.replace(/%s/, n)
    }
    function a(t) {
        return new Date(t).toLocaleString()
    }
    function o(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e.name,
            o = void 0 === n ? "timeago" : n,
            i = e.locale,
            m = e.locales,
            v = void 0 === m ? d : m;
        if (!v || 0 === r()(v).length) throw new TypeError("Expected locales to have at least one locale.");
        var g = {
            props: {
                since: {
                    required: !0
                },
                locale: String,
                maxTime: Number,
                autoUpdate: Number,
                format: Function
            },
            data: function () {
                return {
                    now: (new Date).getTime()
                }
            },
            computed: {
                currentLocale: function () {
                    if (t.prototype.$timeago) {
                        var e = g.locales[g.locale];
                        if (e) return e
                    }
                    return v.en_US
                },
                sinceTime: function () {
                    return new Date(this.since).getTime()
                },
                timeForTitle: function () {
                    var t = this.now / 1e3 - this.sinceTime / 1e3;
                    return this.maxTime && t > this.maxTime ? null : this.format ? this.format(this.sinceTime) : a(this.sinceTime)
                },
                timeago: function () {
                    var t = this.now / 1e3 - this.sinceTime / 1e3;
                    return this.maxTime && t > this.maxTime ? (clearInterval(this.interval), this.format ? this.format(this.sinceTime) : a(this.sinceTime)) : t <= 5 ? s("just now", this.currentLocale[0]) : t < c ? s(t, this.currentLocale[1]) : t < u ? s(t / c, this.currentLocale[2]) : t < l ? s(t / u, this.currentLocale[3]) : t < p ? s(t / l, this.currentLocale[4]) : t < h ? s(t / p, this.currentLocale[5]) : t < f ? s(t / h, this.currentLocale[6]) : s(t / f, this.currentLocale[7])
                }
            },
            mounted: function () {
                this.autoUpdate && this.update()
            },
            render: function (t) {
                return t("time", {
                    attrs: {
                        datetime: new Date(this.since),
                        title: this.timeForTitle
                    }
                }, this.timeago)
            },
            watch: {
                autoUpdate: function (t) {
                    this.stopUpdate(), t && this.update()
                }
            },
            methods: {
                update: function () {
                    var t = this,
                        e = 1e3 * this.autoUpdate;
                    this.interval = setInterval(function () {
                        t.now = (new Date).getTime()
                    }, e)
                },
                stopUpdate: function () {
                    clearInterval(this.interval), this.interval = null
                }
            },
            beforeDestroy: function () {
                this.stopUpdate()
            }
        };
        g.locale = "en_US", g.locales = {}, t.prototype.$timeago = {
            setCurrentLocale: function (t) {
                g.locale = t
            },
            addLocale: function (t, e) {
                g.locales[t] = e
            }
        }, t.component(o, g)
    }
    e.a = o;
    var i = n(19),
        r = n.n(i),
        c = 60,
        u = 60 * c,
        l = 24 * u,
        p = 7 * l,
        h = 30 * l,
        f = 365 * l,
        d = {
            en_US: ["Just Now", ["%s second ago", "%s seconds ago"],
                ["%s minute", "%s minutes ago"],
                ["%s hour ago", "%s hours ago"],
                ["%s day ago", "%s days ago"],
                ["%s week ago", "%s weeks ago"],
                ["%s month ago", "%s months ago"],
                ["%s year ago", "%s years ago"]
            ]
        }
}, function (t, e, n) {
    "use strict";
    var s = {
        inserted: function (t) {
            t.focus()
        }
    };
    e.a = s
}, function (t, e, n) {
    "use strict";
    var s = n(12),
        a = n(293),
        o = n(233),
        i = n.n(o),
        r = n(73),
        c = n.n(r),
        u = n(243),
        l = n.n(u),
        p = n(244),
        h = n.n(p),
        f = n(242),
        d = n.n(f),
        m = n(247),
        v = n.n(m),
        g = n(246),
        _ = n.n(g),
        b = n(245),
        w = n.n(b),
        C = n(224),
        k = n.n(C),
        y = n(225),
        S = n.n(y),
        T = n(72),
        E = n.n(T),
        A = n(240),
        P = n.n(A),
        I = n(238),
        x = n.n(I),
        $ = n(239),
        N = n.n($),
        M = n(235),
        U = n.n(M),
        L = n(236),
        O = n.n(L),
        R = n(252),
        D = n.n(R),
        B = n(251),
        H = n.n(B),
        F = n(248),
        V = n.n(F),
        G = n(229),
        q = n.n(G),
        W = n(230),
        j = n.n(W),
        z = n(237),
        K = n.n(z),
        Z = n(231),
        Y = n.n(Z),
        Q = n(223),
        J = n.n(Q);
    s.a.use(a.a), e.a = new a.a({
        routes: [{
            path: "/",
            name: "home",
            component: i.a
        }, {
            path: "/menu",
            name: "menu",
            component: c.a
        }, {
            path: "/contacts",
            name: "contacts",
            component: l.a
        }, {
            path: "/contacts/share/:id",
            name: "contactsShare",
            component: h.a
        }, {
            path: "/contact/:id/:number?",
            name: "contacts.view",
            component: d.a
        }, {
            path: "/messages",
            name: "messages",
            component: v.a
        }, {
            path: "/messages/select",
            name: "messages.selectcontact",
            component: w.a
        }, {
            path: "/messages/:number/:display",
            name: "messages.view",
            component: _.a
        }, {
            path: "/bourse",
            name: "bourse",
            component: j.a
        }, {
            path: "/bank",
            name: "bank",
            component: q.a
        }, {
            path: "/calculator",
            name: "calculator",
            component: Y.a
        }, {
            path: "/photo",
            name: "photo",
            component: K.a
        }, {
            path: "/paramtre",
            name: "parametre",
            component: V.a
        }, {
            path: "/appels",
            name: "appels",
            component: k.a
        }, {
            path: "/appelsactive",
            name: "appels.active",
            component: S.a
        }, {
            path: "/appelsNumber",
            name: "appels.number",
            component: E.a
        }, {
            path: "/tchatsplash",
            name: "tchat",
            component: P.a
        }, {
            path: "/tchat",
            name: "tchat.channel",
            component: x.a
        }, {
            path: "/tchat/:channel",
            name: "tchat.channel.show",
            component: N.a
        }, {
            path: "/notes",
            name: "notes",
            component: U.a
        }, {
            path: "/notes/:channel",
            name: "notes.channel.show",
            component: O.a
        }, {
            path: "/twitter/splash",
            name: "twitter.splash",
            component: D.a
        }, {
            path: "/twitter/view",
            name: "twitter.screen",
            component: H.a
        }, {
            path: "/9gag",
            name: "9gag",
            component: J.a
        }, {
            path: "*",
            redirect: "/"
        }]
    })
}, function (t, e, n) {
    function s(t) {
        n(207)
    }
    var a = n(0)(n(90), n(283), s, null, null);
    t.exports = a.exports
}, function (t, e, n) {
    "use strict";
    var s = n(30),
        a = n.n(s),
        o = n(22),
        i = n.n(o),
        r = n(4),
        c = n.n(r),
        u = n(3),
        l = n.n(u),
        p = n(53),
        h = n.n(p),
        f = n(54),
        d = n.n(f),
        m = {
            video: !1,
            audio: !0
        },
        v = function () {
            function t(e) {
                h()(this, t), this.myPeerConnection = null, this.candidates = [], this.listener = {}, this.myCandidates = [], this.audio = new Audio, this.offer = null, this.answer = null, this.initiator = null, this.RTCConfig = e
            }
            return d()(t, [{
                key: "init",
                value: function () {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = l()(c.a.mark(function t() {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, this.close();
                            case 2:
                                return this.myPeerConnection = new RTCPeerConnection(this.RTCConfig), t.next = 5, navigator.mediaDevices.getUserMedia(m);
                            case 5:
                                this.stream = t.sent;
                            case 6:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "newConnection",
                value: function () {
                    this.close(), this.candidates = [], this.myCandidates = [], this.listener = {}, this.offer = null, this.answer = null, this.initiator = null, this.myPeerConnection = new RTCPeerConnection(this.RTCConfig), this.myPeerConnection.onaddstream = this.onaddstream.bind(this)
                }
            }, {
                key: "close",
                value: function () {
                    null !== this.myPeerConnection && this.myPeerConnection.close(), this.myPeerConnection = null
                }
            }, {
                key: "prepareCall",
                value: function () {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = l()(c.a.mark(function t() {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, this.init();
                            case 2:
                                return this.newConnection(), this.initiator = !0, this.myPeerConnection.addStream(this.stream), this.myPeerConnection.onicecandidate = this.onicecandidate.bind(this), t.next = 8, this.myPeerConnection.createOffer();
                            case 8:
                                return this.offer = t.sent, this.myPeerConnection.setLocalDescription(this.offer), t.abrupt("return", btoa(i()(this.offer)));
                            case 11:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "acceptCall",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(c.a.mark(function t(e) {
                        var n;
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = JSON.parse(atob(e.rtcOffer)), this.newConnection(), this.initiator = !1, t.next = 5, navigator.mediaDevices.getUserMedia(m);
                            case 5:
                                return this.stream = t.sent, this.myPeerConnection.onicecandidate = this.onicecandidate.bind(this), this.myPeerConnection.addStream(this.stream), this.offer = new RTCSessionDescription(n), this.myPeerConnection.setRemoteDescription(this.offer), t.next = 12, this.myPeerConnection.createAnswer();
                            case 12:
                                return this.answer = t.sent, this.myPeerConnection.setLocalDescription(this.answer), t.abrupt("return", btoa(i()(this.answer)));
                            case 15:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "onReceiveAnswer",
                value: function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(c.a.mark(function t(e) {
                        var n;
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                n = JSON.parse(atob(e)), this.answer = new RTCSessionDescription(n), this.myPeerConnection.setRemoteDescription(this.answer);
                            case 3:
                            case "end":
                                return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "onicecandidate",
                value: function (t) {
                    if (void 0 !== t.candidate && (this.myCandidates.push(t.candidate), void 0 !== this.listener.onCandidate)) {
                        var e = this.getAvailableCandidates(),
                            n = !0,
                            s = !1,
                            o = void 0;
                        try {
                            for (var i, r = a()(this.listener.onCandidate); !(n = (i = r.next()).done); n = !0) {
                                (0, i.value)(e)
                            }
                        } catch (t) {
                            s = !0, o = t
                        } finally {
                            try {
                                !n && r.return && r.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                    }
                }
            }, {
                key: "getAvailableCandidates",
                value: function () {
                    var t = btoa(i()(this.myCandidates));
                    return this.myCandidates = [], t
                }
            }, {
                key: "addIceCandidates",
                value: function (t) {
                    var e = this;
                    if (null !== this.myPeerConnection) {
                        JSON.parse(atob(t)).forEach(function (t) {
                            null !== t && e.myPeerConnection.addIceCandidate(t)
                        })
                    }
                }
            }, {
                key: "addEventListener",
                value: function (t, e) {
                    "onCandidate" === t && (void 0 === this.listener[t] && (this.listener[t] = []), this.listener[t].push(e), e(this.getAvailableCandidates()))
                }
            }, {
                key: "onaddstream",
                value: function (t) {
                    this.audio.srcObject = t.stream, this.audio.play()
                }
            }]), t
        }();
    l()(c.a.mark(function t() {
        return c.a.wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
            case 0:
            case "end":
                return t.stop()
            }
        }, t, this)
    }))(), e.a = v
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(12),
        a = n(78),
        o = n.n(a),
        i = n(77),
        r = n(18),
        c = n(75),
        u = n(9),
        l = n(74),
        p = n(76);
    s.a.use(c.a), s.a.use(l.a), s.a.config.productionTip = !1, s.a.prototype.$bus = new s.a, s.a.prototype.$phoneAPI = u.a, window.VueTimeago = c.a, window.Vue = s.a, window.store = r.a, s.a.directive("autofocus", p.a), window.APP = new s.a({
        el: "#app",
        store: r.a,
        router: i.a,
        render: function (t) {
            return t(o.a)
        }
    })
}, function (t, e, n) {
    "use strict";
    var s = n(31),
        a = n.n(s),
        o = n(9),
        i = {
            appelsHistorique: [],
            appelsInfo: null
        },
        r = {
            appelsHistorique: function (t) {
                return t.appelsHistorique
            },
            appelsInfo: function (t) {
                return t.appelsInfo
            },
            appelsDisplayName: function (t, e) {
                if (null === t.appelsInfo) return "ERROR";
                if (!0 === t.appelsInfo.hidden && !0 !== e.isInitiatorCall) return e.IntlString("APP_PHONE_NUMBER_HIDDEN");
                var n = e.appelsDisplayNumber;
                return (e.contacts.find(function (t) {
                    return t.number === n
                }) || {}).display || e.IntlString("APP_PHONE_NUMBER_UNKNOWN")
            },
            appelsDisplayNumber: function (t, e) {
                return null === t.appelsInfo ? "ERROR" : !0 === e.isInitiatorCall ? t.appelsInfo.receiver_num : !0 === t.appelsInfo.hidden ? "###########" : t.appelsInfo.transmitter_num
            },
            isInitiatorCall: function (t, e) {
                return null !== t.appelsInfo && !0 === t.appelsInfo.initiator
            }
        },
        c = {
            startCall: function (t, e) {
                var n = (t.commit, e.numero);
                o.a.startCall(n)
            },
            acceptCall: function (t) {
                var e = t.state;
                o.a.acceptCall(e.appelsInfo)
            },
            rejectCall: function (t) {
                var e = t.state;
                o.a.rejectCall(e.appelsInfo)
            },
            ignoreCall: function (t) {
                (0, t.commit)("SET_APPELS_INFO", null)
            },
            onwaitingCall: function (t, e) {
                o.a.onwaitingCall(e)
            },
            appelsDeleteHistorique: function (t, e) {
                var n = t.commit,
                    s = t.state,
                    a = e.numero;
                o.a.appelsDeleteHistorique(a), n("SET_APPELS_HISTORIQUE", s.appelsHistorique.filter(function (t) {
                    return t.num !== a
                }))
            },
            appelsDeleteAllHistorique: function (t) {
                var e = t.commit;
                o.a.appelsDeleteAllHistorique(), e("SET_APPELS_HISTORIQUE", [])
            },
            resetAppels: function (t) {
                var e = t.commit;
                e("SET_APPELS_HISTORIQUE", []), e("SET_APPELS_INFO", null)
            }
        },
        u = {
            SET_APPELS_HISTORIQUE: function (t, e) {
                t.appelsHistorique = e
            },
            SET_APPELS_INFO_IF_EMPTY: function (t, e) {
                null === t.appelsInfo ? t.appelsInfo = e : e.id < 0 && (t.appelsInfo = e)
            },
            SET_APPELS_INFO: function (t, e) {
                t.appelsInfo = e
            },
            SET_APPELS_INFO_IS_ACCEPTS: function (t, e) {
                null !== t.appelsInfo && (t.appelsInfo = a()({}, t.appelsInfo, {
                    is_accepts: e
                }))
            }
        };
    e.a = {
        state: i,
        getters: r,
        actions: c,
        mutations: u
    }
}, function (t, e, n) {
    "use strict";
    var s = n(9),
        a = {
            bankAmont: "0"
        },
        o = {
            bankAmont: function (t) {
                return t.bankAmont
            }
        },
        i = {
            sendpara: function (t, e) {
                var n = (t.state, e.id),
                    a = e.amount,
                    o = n.toString().replace(/\D/g, ""),
                    i = a.toString().replace(/\D/g, "");
                s.a.callEvent("irrp_phone:transferMoney", {
                    id: o,
                    amount: i
                })
            }
        },
        r = {
            SET_BANK_AMONT: function (t, e) {
                t.bankAmont = e
            }
        };
    e.a = {
        state: a,
        getters: o,
        actions: i,
        mutations: r
    }
}, function (t, e, n) {
    "use strict";
    var s = {
            bourseInfo: []
        },
        a = {
            bourseInfo: function (t) {
                return t.bourseInfo
            }
        },
        o = {
            resetBourse: function (t) {
                (0, t.commit)("SET_BOURSE_INFO", [])
            }
        },
        i = {
            SET_BOURSE_INFO: function (t, e) {
                t.bourseInfo = e
            }
        };
    e.a = {
        state: s,
        getters: a,
        actions: o,
        mutations: i
    }
}, function (t, e, n) {
    "use strict";
    var s = n(11),
        a = n.n(s),
        o = n(9),
        i = {
            contacts: [],
            blocklist: [],
            defaultContacts: []
        },
        r = {
            contacts: function (t) {
                var e = t.contacts,
                    n = t.defaultContacts;
                return [].concat(a()(l(e)), a()(n))
            },
            blocklist: function (t) {
                return t.blocklist
            }
        },
        c = {
            updateContact: function (t, e) {
                var n = e.id,
                    s = e.display,
                    a = e.number;
                o.a.updateContact(n, s, a)
            },
            addContact: function (t, e) {
                var n = e.display,
                    s = e.number;
                o.a.addContact(n, s)
            },
            deleteContact: function (t, e) {
                var n = e.id;
                o.a.deleteContact(n)
            },
            resetContact: function (t) {
                (0, t.commit)("SET_CONTACTS", [])
            },
            blockNumber: function (t, e) {
                var n = e.phoneNumber;
                o.a.blockNumber(n)
            },
            unblockNumber: function (t, e) {
                var n = e.phoneNumber;
                o.a.unblockNumber(n)
            }
        },
        u = {
            SET_CONTACTS: function (t, e) {
                t.contacts = e.sort(function (t, e) {
                    return t.display.localeCompare(e.display)
                })
            },
            SET_BLOCKLIST: function (t, e) {
                var n = {};
                for (var s in e) {
                    var a;
                    ! function (e) {
                        a = t.contacts.filter(function (t) {
                            return t.number === e
                        })[0], n[a ? a.display : e] = e
                    }(s)
                }
                t.blocklist = n
            },
            SET_DEFAULT_CONTACTS: function (t, e) {
                t.defaultContacts = e
            }
        },
        l = function (t) {
            return t.forEach(function (e, n) {
                t[n].blocked = void 0 !== i.blocklist[e.display]
            }), t
        };
    e.a = {
        state: i,
        getters: r,
        actions: c,
        mutations: u
    }
}, function (t, e, n) {
    "use strict";
    var s = n(9),
        a = {
            messages: []
        },
        o = {
            messages: function (t) {
                return t.messages
            },
            nbMessagesUnread: function (t) {
                return t.messages.filter(function (t) {
                    return 1 !== t.isRead
                }).length
            }
        },
        i = {
            setMessages: function (t, e) {
                (0, t.commit)("SET_MESSAGES", e)
            },
            sendMessage: function (t, e) {
                var n = (t.commit, e.phoneNumber),
                    a = e.message,
                    o = e.gpsData;
                s.a.sendMessage(n, a, o)
            },
            deleteMessage: function (t, e) {
                var n = (t.commit, e.id);
                s.a.deleteMessage(n)
            },
            deleteMessagesNumber: function (t, e) {
                var n = t.commit,
                    a = t.state,
                    o = e.num;
                s.a.deleteMessagesNumber(o), n("SET_MESSAGES", a.messages.filter(function (t) {
                    return t.transmitter !== o
                }))
            },
            deleteAllMessages: function (t) {
                var e = t.commit;
                s.a.deleteAllMessages(), e("SET_MESSAGES", [])
            },
            setMessageRead: function (t, e) {
                var n = t.commit;
                s.a.setMessageRead(e), n("SET_MESSAGES_READ", {
                    num: e
                })
            },
            resetMessage: function (t) {
                (0, t.commit)("SET_MESSAGES", [])
            }
        },
        r = {
            SET_MESSAGES: function (t, e) {
                t.messages = e
            },
            ADD_MESSAGE: function (t, e) {
                t.messages.push(e)
            },
            SET_MESSAGES_READ: function (t, e) {
                for (var n = e.num, s = 0; s < t.messages.length; s += 1) t.messages[s].transmitter === n && 1 !== t.messages[s].isRead && (t.messages[s].isRead = 1)
            }
        };
    e.a = {
        state: a,
        getters: o,
        actions: i,
        mutations: r
    }
}, function (t, e, n) {
    "use strict";
    var s = n(31),
        a = (n.n(s), n(22)),
        o = n.n(a),
        i = n(9),
        r = n(27),
        c = (n.n(r), "irrp_notes_channels"),
        u = null,
        l = {
            channels: JSON.parse(localStorage[c] || null) || [],
            currentChannel: null,
            messagesChannel: []
        },
        p = {
            notesChannels: function (t) {
                return t.channels
            },
            notesCurrentChannel: function (t) {
                return t.currentChannel
            },
            notesMessages: function (t) {
                return t.messagesChannel
            }
        },
        h = {
            notesReset: function (t) {
                var e = t.commit;
                e("NOTES_SET_MESSAGES", {
                    messages: []
                }), e("NOTES_SET_CHANNEL", {
                    channel: null
                }), e("NOTES_REMOVES_ALL_CHANNELS")
            },
            notesSetChannel: function (t, e) {
                var n = t.state,
                    s = t.commit,
                    a = t.dispatch,
                    o = e.channel;
                n.currentChannel !== o && (s("NOTES_SET_MESSAGES", {
                    messages: []
                }), s("NOTES_SET_CHANNEL", {
                    channel: o
                }), a("notesGetMessagesChannel", {
                    channel: o
                }))
            },
            notesAddMessage: function (t, e) {
                var n = t.state,
                    s = t.commit,
                    a = t.getters,
                    o = e.message,
                    i = o.channel;
                void 0 !== n.channels.find(function (t) {
                    return t.channel === i
                }) && (null !== u && (u.pause(), u = null), u = new r.Howl({
                    src: "/html/static/sound/tchatNotification.ogg",
                    volume: a.volume
                }), u.play()), s("NOTES_ADD_MESSAGES", {
                    message: o
                })
            },
            notesAddChannel: function (t, e) {
                (0, t.commit)("NOTES_ADD_CHANNELS", {
                    channel: e.channel
                })
            },
            notesRemoveChannel: function (t, e) {
                (0, t.commit)("NOTES_REMOVES_CHANNELS", {
                    channel: e.channel
                })
            },
            notesGetMessagesChannel: function (t, e) {
                var n = (t.commit, e.channel);
                i.a.notesGetMessagesChannel(n)
            },
            notesSendMessage: function (t, e) {
                var n = e.channel,
                    s = e.message;
                i.a.notesSendMessage(n, s)
            }
        },
        f = {
            NOTES_SET_CHANNEL: function (t, e) {
                var n = e.channel;
                t.currentChannel = n
            },
            NOTES_ADD_CHANNELS: function (t, e) {
                var n = e.channel;
                t.channels.push({
                    channel: n
                }), localStorage[c] = o()(t.channels)
            },
            NOTES_REMOVES_CHANNELS: function (t, e) {
                var n = e.channel;
                t.channels = t.channels.filter(function (t) {
                    return t.channel !== n
                }), localStorage[c] = o()(t.channels)
            },
            NOTES_REMOVES_ALL_CHANNELS: function (t) {
                t.channels = [], localStorage[c] = o()(t.channels)
            },
            NOTES_ADD_MESSAGES: function (t, e) {
                var n = e.message;
                n.channel === t.currentChannel && t.messagesChannel.push(n)
            },
            NOTES_SET_MESSAGES: function (t, e) {
                var n = e.messages;
                t.messagesChannel = n
            }
        };
    e.a = {
        state: l,
        getters: p,
        actions: h,
        mutations: f
    }
}, function (t, e, n) {
    "use strict";
    var s = n(22),
        a = n.n(s),
        o = n(4),
        i = n.n(o),
        r = n(3),
        c = n.n(r),
        u = n(30),
        l = n.n(u),
        p = n(19),
        h = n.n(p),
        f = n(12),
        d = n(9),
        m = {
            show: !1,
            tempoHide: !1,
            myPhoneNumber: "###########",
            background: JSON.parse(window.localStorage.irrp_background || null),
            coque: JSON.parse(window.localStorage.irrp_coque || null),
            sonido: JSON.parse(window.localStorage.irrp_sonido || null),
            zoom: window.localStorage.irrp_zoom || "80%",
            volume: parseFloat(window.localStorage.irrp_volume) || .6,
            mouse: "true" === window.localStorage.irrp_mouse,
            lang: window.localStorage.irrp_language,
            config: {
                reseau: "Iranroleplay Phone",
                useFormatNumberFrance: !1,
                apps: [],
                themeColor: "#fff",
                colors: ["#000"],
                language: {}
            },
            weather: "CLEAR"
        };
    d.a.setUseMouse(m.mouse);
    var v = {
            show: function (t) {
                return t.show
            },
            tempoHide: function (t) {
                return t.tempoHide
            },
            myPhoneNumber: function (t) {
                return t.myPhoneNumber
            },
            volume: function (t) {
                return t.volume
            },
            enableTakePhoto: function (t) {
                return !0 === t.config.enableTakePhoto
            },
            background: function (t) {
                var e = t.background,
                    n = t.config;
                return null === e ? void 0 !== n.background_default ? n.background_default : {
                    label: "iPhone 12 wallpaper",
                    value: "12wallpaper.webp"
                } : e
            },
            backgroundLabel: function (t, e) {
                return e.background.label
            },
            backgroundURL: function (t, e) {
                return !0 === e.background.value.startsWith("https") ? e.background.value : "/html/static/img/background/" + e.background.value
            },
            coque: function (t) {
                var e = t.coque,
                    n = t.config;
                return null === e ? n && void 0 !== n.coque_default ? n.coque_default : {
                    label: "Iphone 12",
                    value: "iphone12.png"
                } : e
            },
            sonido: function (t) {
                var e = t.sonido,
                    n = t.config;
                return null === e ? n && void 0 !== n.sonido_default ? n.sonido_default : {
                    label: "Panters",
                    value: "ring.ogg"
                } : e
            },
            coqueLabel: function (t, e) {
                return e.coque.label
            },
            sonidoLabel: function (t, e) {
                return e.sonido.label
            },
            zoom: function (t) {
                return t.zoom
            },
            useMouse: function (t) {
                return t.mouse
            },
            config: function (t) {
                return t.config
            },
            warningMessageCount: function (t) {
                return t.config.warningMessageCount || 250
            },
            useFormatNumberFrance: function (t) {
                return t.config.useFormatNumberFrance
            },
            themeColor: function (t) {
                return t.config.themeColor
            },
            colors: function (t) {
                return t.config.colors
            },
            Apps: function (t, e) {
                var n = t.config,
                    s = t.lang;
                return n.apps.filter(function (t) {
                    return !1 !== t.enabled
                }).map(function (t) {
                    void 0 !== t.puceRef && (t.puce = e[t.puceRef]);
                    var n = s + "__name";
                    return t.intlName = t[n] || t.name, t
                })
            },
            AppsHome: function (t, e) {
                var n = t.config,
                    s = t.lang;
                return n.apps.filter(function (t) {
                    return !1 !== t.enabled && !0 === t.inHomePage
                }).map(function (t) {
                    void 0 !== t.puceRef && (t.puce = e[t.puceRef]);
                    var n = s + "__name";
                    return t.intlName = t[n] || t.name, t
                })
            },
            availableLanguages: function (t) {
                var e = t.config,
                    n = h()(e.language),
                    s = {},
                    a = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var r, c = l()(n); !(a = (r = c.next()).done); a = !0) {
                        var u = r.value;
                        s[e.language[u].NAME] = u
                    }
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        !a && c.return && c.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return s
            },
            IntlString: function (t) {
                var e = t.config,
                    n = t.lang;
                return n = n || e.defaultLanguage, void 0 === e.language[n] ? function (t) {
                    return t
                } : function (t, s) {
                    return e.language[n][t] || s || t
                }
            },
            weather: function (t) {
                var e = t.weather,
                    n = {
                        EXTRASUNNY: {
                            name: "Extra Sunny",
                            temperature: 35,
                            color: "hot",
                            icons: ["sun", "sunx"]
                        },
                        CLEAR: {
                            name: "Clear",
                            temperature: 25,
                            color: "breezy",
                            icons: ["cloud", "cloudx"]
                        },
                        NEUTRAL: {
                            name: "Neutral",
                            temperature: 20,
                            color: "breezy",
                            icons: ["cloud", "cloudx"]
                        },
                        SMOG: {
                            name: "Smog",
                            temperature: 16,
                            color: "stormy",
                            icons: ["cloud", "cloudx"]
                        },
                        FOGGY: {
                            name: "Foggy",
                            temperature: 18,
                            color: "stormy",
                            icons: ["sun", "sunx"]
                        },
                        OVERCAST: {
                            name: "Overcast",
                            temperature: 17,
                            color: "night",
                            icons: ["cloud", "cloudx"]
                        },
                        CLOUDS: {
                            name: "Clouds",
                            temperature: 12,
                            color: "cloudy",
                            icons: ["cloud", "cloudx"]
                        },
                        CLEARING: {
                            name: "Clearing",
                            temperature: 13,
                            color: "cloudy",
                            icons: ["rainingslow", "moon", "spot1", "spot2"]
                        },
                        RAIN: {
                            name: "Rain",
                            temperature: 10,
                            color: "cloudy",
                            icons: ["raining", "moon", "spot1", "spot2"]
                        },
                        THUNDER: {
                            name: "Thunder",
                            temperature: 7,
                            color: "stormy",
                            icons: ["raining", "cloudr"]
                        },
                        SNOW: {
                            name: "Snow",
                            temperature: -3,
                            color: "cloudy",
                            icons: ["snowing"]
                        },
                        BLIZZARD: {
                            name: "Blizzard",
                            temperature: 5,
                            color: "stormy",
                            icons: ["raining", "cloudr"]
                        },
                        SNOWLIGHT: {
                            name: "Snowlight",
                            temperature: 0,
                            color: "breezy",
                            icons: ["snowing"]
                        },
                        XMAS: {
                            name: "Snowing",
                            temperature: -5,
                            color: "breezy",
                            icons: ["snowing"]
                        },
                        HALLOWEEN: {
                            name: "Halloween",
                            temperature: 22,
                            color: "hot",
                            icons: ["rainingslow", "moon", "spot1", "spot2"]
                        }
                    };
                return n[e.toUpperCase()] || n.CLEAR
            }
        },
        g = {
            loadConfig: function (t) {
                var e = this,
                    n = t.commit,
                    s = t.state;
                return c()(i.a.mark(function t() {
                    var a, o, r, c, u, p, m, v, g;
                    return i.a.wrap(function (t) {
                        for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, d.a.getConfig();
                        case 2:
                            for (a = t.sent, o = h()(a.language), r = !0, c = !1, u = void 0, t.prev = 7, p = l()(o); !(r = (m = p.next()).done); r = !0) v = m.value, void 0 !== (g = a.language[v].TIMEAGO) && f.a.prototype.$timeago.addLocale(v, g);
                            t.next = 15;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(7), c = !0, u = t.t0;
                        case 15:
                            t.prev = 15, t.prev = 16, !r && p.return && p.return();
                        case 18:
                            if (t.prev = 18, !c) {
                                t.next = 21;
                                break
                            }
                            throw u;
                        case 21:
                            return t.finish(18);
                        case 22:
                            return t.finish(15);
                        case 23:
                            f.a.prototype.$timeago.setCurrentLocale(s.lang), void 0 !== a.defaultContacts && n("SET_DEFAULT_CONTACTS", a.defaultContacts), n("SET_CONFIG", a);
                        case 26:
                        case "end":
                            return t.stop()
                        }
                    }, t, e, [
                        [7, 11, 15, 23],
                        [16, , 18, 22]
                    ])
                }))()
            },
            setEnableApp: function (t, e) {
                var n = t.commit,
                    s = (t.state, e.appName),
                    a = e.enable;
                n("SET_APP_ENABLE", {
                    appName: s,
                    enable: void 0 === a || a
                })
            },
            setVisibility: function (t, e) {
                (0, t.commit)("SET_PHONE_VISIBILITY", e)
            },
            setZoon: function (t, e) {
                var n = t.commit;
                window.localStorage.irrp_zoom = e, n("SET_ZOOM", e)
            },
            setBackground: function (t, e) {
                var n = t.commit;
                window.localStorage.irrp_background = a()(e), n("SET_BACKGROUND", e)
            },
            setCoque: function (t, e) {
                var n = t.commit;
                window.localStorage.irrp_coque = a()(e), n("SET_COQUE", e)
            },
            setSonido: function (t, e) {
                var n = t.commit;
                window.localStorage.irrp_sonido = a()(e), n("SET_SONIDO", e)
            },
            setVolume: function (t, e) {
                var n = t.commit;
                window.localStorage.irrp_volume = e, n("SET_VOLUME", e)
            },
            setLanguage: function (t, e) {
                var n = t.commit;
                window.localStorage.irrp_language = e, f.a.prototype.$timeago.setCurrentLocale(e), n("SET_LANGUAGE", e)
            },
            setMouseSupport: function (t, e) {
                (0, t.commit)("SET_MOUSE_SUPPORT", e), window.localStorage.irrp_mouse = e, d.a.setUseMouse(e)
            },
            closePhone: function () {
                d.a.closePhone()
            },
            resetPhone: function (t) {
                var e = t.dispatch,
                    n = t.getters;
                e("setZoon", "85%"), e("setVolume", 1), e("setBackground", n.config.background_default), e("setCoque", n.config.coque_default), e("setSonido", n.config.sonido_default), e("setLanguage", n.config.defaultLanguage)
            }
        },
        _ = {
            SET_CONFIG: function (t, e) {
                t.config = e
            },
            SET_APP_ENABLE: function (t, e) {
                var n = e.appName,
                    s = e.enable,
                    a = t.config.apps.findIndex(function (t) {
                        return t.name === n
                    }); - 1 !== a && f.a.set(t.config.apps[a], "enabled", s)
            },
            SET_PHONE_VISIBILITY: function (t, e) {
                t.show = e, t.tempoHide = !1
            },
            SET_TEMPO_HIDE: function (t, e) {
                t.tempoHide = e
            },
            SET_MY_PHONE_NUMBER: function (t, e) {
                t.myPhoneNumber = e
            },
            SET_BACKGROUND: function (t, e) {
                t.background = e
            },
            SET_COQUE: function (t, e) {
                t.coque = e
            },
            SET_SONIDO: function (t, e) {
                t.sonido = e
            },
            SET_ZOOM: function (t, e) {
                t.zoom = e
            },
            SET_VOLUME: function (t, e) {
                t.volume = e
            },
            SET_LANGUAGE: function (t, e) {
                t.lang = e
            },
            SET_MOUSE_SUPPORT: function (t, e) {
                t.mouse = e
            },
            UPDATE_WEATHER: function (t, e) {
                t.weather = e
            }
        };
    e.a = {
        state: m,
        getters: v,
        actions: g,
        mutations: _
    }
}, function (t, e, n) {
    "use strict";
    var s = n(31),
        a = (n.n(s), n(22)),
        o = n.n(a),
        i = n(9),
        r = n(27),
        c = (n.n(r), "irrp_tchat_channels"),
        u = null,
        l = {
            channels: JSON.parse(localStorage[c] || null) || [],
            currentChannel: null,
            messagesChannel: []
        },
        p = {
            tchatChannels: function (t) {
                return t.channels
            },
            tchatCurrentChannel: function (t) {
                return t.currentChannel
            },
            tchatMessages: function (t) {
                return t.messagesChannel
            }
        },
        h = {
            tchatReset: function (t) {
                var e = t.commit;
                e("TCHAT_SET_MESSAGES", {
                    messages: []
                }), e("TCHAT_SET_CHANNEL", {
                    channel: null
                }), e("TCHAT_REMOVES_ALL_CHANNELS")
            },
            tchatSetChannel: function (t, e) {
                var n = t.state,
                    s = t.commit,
                    a = t.dispatch,
                    o = e.channel;
                n.currentChannel !== o && (s("TCHAT_SET_MESSAGES", {
                    messages: []
                }), s("TCHAT_SET_CHANNEL", {
                    channel: o
                }), a("tchatGetMessagesChannel", {
                    channel: o
                }))
            },
            tchatAddMessage: function (t, e) {
                var n = t.state,
                    s = t.commit,
                    a = t.getters,
                    o = e.message,
                    i = o.channel;
                void 0 !== n.channels.find(function (t) {
                    return t.channel === i
                }) && (null !== u && (u.pause(), u = null), u = new r.Howl({
                    src: "/html/static/sound/tchatNotification.ogg",
                    volume: a.volume
                }), u.play()), s("TCHAT_ADD_MESSAGES", {
                    message: o
                })
            },
            tchatAddChannel: function (t, e) {
                (0, t.commit)("TCHAT_ADD_CHANNELS", {
                    channel: e.channel
                })
            },
            tchatRemoveChannel: function (t, e) {
                (0, t.commit)("TCHAT_REMOVES_CHANNELS", {
                    channel: e.channel
                })
            },
            tchatGetMessagesChannel: function (t, e) {
                var n = (t.commit, e.channel);
                i.a.tchatGetMessagesChannel(n)
            },
            tchatSendMessage: function (t, e) {
                var n = e.channel,
                    s = e.message;
                i.a.tchatSendMessage(n, s)
            }
        },
        f = {
            TCHAT_SET_CHANNEL: function (t, e) {
                var n = e.channel;
                t.currentChannel = n
            },
            TCHAT_ADD_CHANNELS: function (t, e) {
                var n = e.channel;
                t.channels.push({
                    channel: n
                }), localStorage[c] = o()(t.channels)
            },
            TCHAT_REMOVES_CHANNELS: function (t, e) {
                var n = e.channel;
                t.channels = t.channels.filter(function (t) {
                    return t.channel !== n
                }), localStorage[c] = o()(t.channels)
            },
            TCHAT_REMOVES_ALL_CHANNELS: function (t) {
                t.channels = [], localStorage[c] = o()(t.channels)
            },
            TCHAT_ADD_MESSAGES: function (t, e) {
                var n = e.message;
                n.channel === t.currentChannel && t.messagesChannel.push(n)
            },
            TCHAT_SET_MESSAGES: function (t, e) {
                var n = e.messages;
                t.messagesChannel = n
            }
        };
    e.a = {
        state: l,
        getters: p,
        actions: h,
        mutations: f
    }
}, function (t, e, n) {
    "use strict";
    var s = n(11),
        a = n.n(s),
        o = n(9),
        i = n(12),
        r = {
            twitterUsername: localStorage.irrp_twitter_username,
            twitterPassword: localStorage.irrp_twitter_password,
            twitterAvatarUrl: localStorage.irrp_twitter_avatarUrl,
            twitterNotification: localStorage.irrp_twitter_notif ? parseInt(localStorage.irrp_twitter_notif) : 1,
            twitterNotificationSound: "false" !== localStorage.irrp_twitter_notif_sound,
            tweets: [],
            favoriteTweets: []
        },
        c = {
            twitterUsername: function (t) {
                return t.twitterUsername
            },
            twitterPassword: function (t) {
                return t.twitterPassword
            },
            twitterAvatarUrl: function (t) {
                return t.twitterAvatarUrl
            },
            twitterNotification: function (t) {
                return t.twitterNotification
            },
            twitterNotificationSound: function (t) {
                return t.twitterNotificationSound
            },
            tweets: function (t) {
                return t.tweets
            },
            favoriteTweets: function (t) {
                return t.favoriteTweets
            }
        },
        u = {
            twitterCreateNewAccount: function (t, e) {
                var n = e.username,
                    s = e.password,
                    a = e.avatarUrl;
                o.a.twitter_createAccount(n, s, a)
            },
            twitterLogin: function (t, e) {
                var n = (t.commit, e.username),
                    s = e.password;
                o.a.twitter_login(n, s)
            },
            twitterChangePassword: function (t, e) {
                var n = t.state;
                o.a.twitter_changePassword(n.twitterUsername, n.twitterPassword, e)
            },
            twitterLogout: function (t) {
                var e = t.commit;
                localStorage.removeItem("irrp_twitter_username"), localStorage.removeItem("irrp_twitter_password"), localStorage.removeItem("irrp_twitter_avatarUrl"), e("UPDATE_ACCOUNT", {
                    username: void 0,
                    password: void 0,
                    avatarUrl: void 0
                })
            },
            twitterSetAvatar: function (t, e) {
                var n = t.state,
                    s = e.avatarUrl;
                o.a.twitter_setAvatar(n.twitterUsername, n.twitterPassword, s)
            },
            twitterPostTweet: function (t, e) {
                var n = t.state,
                    s = (t.commit, e.message);
                /^https?:\/\/.*\.(png|jpg|jpeg|gif)$/.test(s) ? o.a.twitter_postTweetImg(n.twitterUsername, n.twitterPassword, s) : o.a.twitter_postTweet(n.twitterUsername, n.twitterPassword, o.a.convertEmoji(s))
            },
            twitterToogleLike: function (t, e) {
                var n = t.state,
                    s = e.tweetId;
                o.a.twitter_toggleLikeTweet(n.twitterUsername, n.twitterPassword, s)
            },
            setAccount: function (t, e) {
                var n = t.commit;
                localStorage.irrp_twitter_username = e.username, localStorage.irrp_twitter_password = e.password, localStorage.irrp_twitter_avatarUrl = e.avatarUrl, n("UPDATE_ACCOUNT", e)
            },
            addTweet: function (t, e) {
                var n = t.commit,
                    s = t.state,
                    a = 2 === s.twitterNotification;
                1 === s.twitterNotification && (a = e.message && -1 !== e.message.toLowerCase().indexOf(s.twitterUsername.toLowerCase())), !0 === a && i.a.notify({
                    message: e.message,
                    title: e.author + " :",
                    icon: "twitter",
                    sound: s.twitterNotificationSound ? "Twitter_Sound_Effect.ogg" : void 0
                }), n("ADD_TWEET", {
                    tweet: e
                })
            },
            fetchTweets: function (t) {
                var e = t.state;
                o.a.twitter_getTweets(e.twitterUsername, e.twitterPassword)
            },
            fetchFavoriteTweets: function (t) {
                var e = t.state;
                o.a.twitter_getFavoriteTweets(e.twitterUsername, e.twitterPassword)
            },
            setTwitterNotification: function (t, e) {
                var n = t.commit;
                localStorage.irrp_twitter_notif = e, n("SET_TWITTER_NOTIFICATION", {
                    notification: e
                })
            },
            setTwitterNotificationSound: function (t, e) {
                var n = t.commit;
                localStorage.irrp_twitter_notif_sound = e, n("SET_TWITTER_NOTIFICATION_SOUND", {
                    notificationSound: e
                })
            }
        },
        l = {
            SET_TWITTER_NOTIFICATION: function (t, e) {
                var n = e.notification;
                t.twitterNotification = n
            },
            SET_TWITTER_NOTIFICATION_SOUND: function (t, e) {
                var n = e.notificationSound;
                t.twitterNotificationSound = n
            },
            UPDATE_ACCOUNT: function (t, e) {
                var n = e.username,
                    s = e.password,
                    a = e.avatarUrl;
                t.twitterUsername = n, t.twitterPassword = s, t.twitterAvatarUrl = a
            },
            SET_TWEETS: function (t, e) {
                var n = e.tweets;
                t.tweets = n
            },
            SET_FAVORITE_TWEETS: function (t, e) {
                var n = e.tweets;
                t.favoriteTweets = n
            },
            ADD_TWEET: function (t, e) {
                var n = e.tweet;
                t.tweets = [n].concat(a()(t.tweets))
            },
            UPDATE_TWEET_LIKE: function (t, e) {
                var n = e.tweetId,
                    s = e.likes,
                    a = t.tweets.findIndex(function (t) {
                        return t.id === n
                    }); - 1 !== a && (t.tweets[a].likes = s);
                var o = t.favoriteTweets.findIndex(function (t) {
                    return t.id === n
                }); - 1 !== o && (t.favoriteTweets[o].likes = s)
            },
            UPDATE_TWEET_ISLIKE: function (t, e) {
                var n = e.tweetId,
                    s = e.isLikes,
                    a = t.tweets.findIndex(function (t) {
                        return t.id === n
                    }); - 1 !== a && i.a.set(t.tweets[a], "isLikes", s);
                var o = t.favoriteTweets.findIndex(function (t) {
                    return t.id === n
                }); - 1 !== o && i.a.set(t.favoriteTweets[o], "isLikes", s)
            }
        };
    e.a = {
        state: r,
        getters: c,
        actions: u,
        mutations: l
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = n.n(s),
        o = n(178),
        i = (n.n(o), n(177)),
        r = (n.n(i), n(2)),
        c = n(27);
    n.n(c);
    e.default = {
        name: "App",
        components: {},
        data: function () {
            return {
                soundCall: null
            }
        },
        methods: a()({}, n.i(r.a)(["loadConfig", "rejectCall", "ignoreCall"]), {
            closePhone: function () {
                this.$phoneAPI.closePhone()
            },
            endCall: function () {
                this.rejectCall(), this.ignoreCall()
            }
        }),
        computed: a()({}, n.i(r.b)(["show", "zoom", "coque", "sonido", "appelsInfo", "myPhoneNumber", "volume", "tempoHide"])),
        watch: {
            appelsInfo: function (t, e) {
                if (null !== this.appelsInfo && !0 !== this.appelsInfo.is_accepts) {
                    null !== this.soundCall && this.soundCall.pause();
                    var n = null;
                    if (!0 === this.appelsInfo.initiator && void 0 === this.appelsInfo.cancelType) n = "/html/static/sound/phonebeep.mp3", this.soundCall = new c.Howl({
                        src: n,
                        volume: this.volume,
                        loop: !0,
                        onend: function () {}
                    });
                    else if (void 0 !== this.appelsInfo.cancelType) {
                        var s = void 0,
                            a = this.endCall;
                        switch (this.appelsInfo.cancelType) {
                        case 1:
                            s = "off.mp3";
                            break;
                        case 2:
                            s = "notinnetwork.mp3";
                            break;
                        case 3:
                            s = "busy.mp3";
                            break;
                        case 4:
                            s = "notreachable.mp3";
                            break;
                        default:
                            s = "phonebeep.mp3"
                        }
                        n = "/html/static/sound/" + s, this.soundCall = new c.Howl({
                            src: n,
                            volume: this.volume,
                            loop: !1,
                            onend: function () {
                                setTimeout(a, 500)
                            }
                        })
                    } else n = "/html/static/sound/" + this.sonido.value, this.soundCall = new c.Howl({
                        src: n,
                        volume: this.volume,
                        loop: !0,
                        onend: function () {}
                    });
                    this.soundCall.play()
                } else null !== this.soundCall && (this.soundCall.pause(), this.soundCall = null);
                if (null === t && null !== e) return void this.$router.push({
                    name: "home"
                });
                null !== t && this.$router.push({
                    name: "appels.active"
                })
            },
            show: function () {
                null !== this.appelsInfo ? this.$router.push({
                    name: "appels.active"
                }) : this.$router.push({
                    name: "home"
                }), !1 === this.show && null !== this.appelsInfo && this.rejectCall()
            }
        },
        mounted: function () {
            var t = this;
            this.loadConfig(), window.addEventListener("message", function (e) {
                void 0 !== e.data.keyUp && t.$bus.$emit("keyUp" + e.data.keyUp)
            }), window.addEventListener("keyup", function (e) {
                -1 !== ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Backspace", "Enter", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "+", "-", "/", "*"].indexOf(e.key) && t.$bus.$emit("keyUp" + e.key), "Escape" === e.key && t.$phoneAPI.closePhone()
            })
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(4),
        a = n.n(s),
        o = n(1),
        i = n.n(o),
        r = n(3),
        c = n.n(r),
        u = n(49),
        l = n(27);
    n.n(l);
    e.default = {
        data: function () {
            return {
                currentId: 0,
                list: []
            }
        },
        mounted: function () {
            u.a.$on("add", this.addItem)
        },
        methods: {
            isImage: function (t) {
                return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png)/g.test(t)
            },
            addItem: function () {
                var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return c()(a.a.mark(function n() {
                    var s, o, r;
                    return a.a.wrap(function (n) {
                        for (;;) switch (n.prev = n.next) {
                        case 0:
                            s = i()({}, e, {
                                id: t.currentId++,
                                duration: parseInt(e.duration) || 3e3
                            }), t.list.push(s), window.setTimeout(function () {
                                t.destroy(s.id)
                            }, s.duration), e.sound = e.sound ? e.sound : "notification.mp3", null !== e.sound && void 0 !== e.sound && (o = "/html/static/sound/" + e.sound, console.log(e.volume ? e.volume : t.$store.getters.volume), r = new l.Howl({
                                src: o,
                                volume: e.volume ? e.volume : t.$store.getters.volume,
                                onend: function () {
                                    r.src = null
                                }
                            }), r.play());
                        case 5:
                        case "end":
                            return n.stop()
                        }
                    }, n, t)
                }))()
            },
            style: function (t) {
                return {
                    backgroundColor: t.backgroundColor
                }
            },
            destroy: function (t) {
                this.list = this.list.filter(function (e) {
                    return e.id !== t
                })
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(4),
        a = n.n(s),
        o = n(11),
        i = n.n(o),
        r = n(3),
        c = n.n(r),
        u = n(6),
        l = n.n(u);
    e.default = {
        components: {
            PhoneTitle: l.a
        },
        data: function () {
            return {
                nextCursor: "c=10",
                currentSelectPost: 0,
                posts: []
            }
        },
        computed: {
            currentPost: function () {
                if (this.posts && this.posts.length > this.currentSelectPost) return this.posts[this.currentSelectPost];
                this.loadItems()
            }
        },
        methods: {
            loadItems: function () {
                var t = this;
                return c()(a.a.mark(function e() {
                    var n, s, o, r;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            return s = "https://9gag.com/v1/group-posts/group/default/type/hot?" + t.nextCursor, e.next = 3, fetch(s);
                        case 3:
                            return o = e.sent, e.next = 6, o.json();
                        case 6:
                            r = e.sent, (n = t.posts).push.apply(n, i()(r.data.posts)), t.nextCursor = r.data.nextCursor;
                        case 9:
                        case "end":
                            return e.stop()
                        }
                    }, e, t)
                }))()
            },
            previewPost: function () {
                var t = this;
                if (0 === this.currentSelectPost) return 0;
                this.currentSelectPost -= 1, setTimeout(function () {
                    void 0 !== t.$refs.video && (t.$refs.video.volume = .15)
                }, 200)
            },
            nextPost: function () {
                var t = this;
                this.currentSelectPost += 1, setTimeout(function () {
                    void 0 !== t.$refs.video && (t.$refs.video.volume = .15)
                }, 200)
            },
            onClick: function (t) {
                t.offsetX < 200 ? this.previewPost() : this.nextPost()
            },
            quit: function () {
                this.$router.push({
                    name: "home"
                })
            }
        },
        created: function () {
            this.$bus.$on("keyUpArrowLeft", this.previewPost), this.$bus.$on("keyUpArrowRight", this.nextPost), this.$bus.$on("keyUpBackspace", this.quit)
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowLeft", this.previewPost), this.$bus.$off("keyUpArrowRight", this.nextPost), this.$bus.$off("keyUpBackspace", this.quit)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = n.n(s),
        o = n(2),
        i = n(6),
        r = n.n(i),
        c = n(227),
        u = n.n(c),
        l = n(226),
        p = n.n(l),
        h = n(228),
        f = n.n(h),
        d = n(72),
        m = n.n(d);
    e.default = {
        components: {
            PhoneTitle: r.a
        },
        data: function () {
            return {
                currentMenuIndex: 1,
                title: "Keypad",
                ignoreControls: !1
            }
        },
        computed: a()({}, n.i(o.b)(["IntlString", "useMouse", "themeColor"]), {
            subMenu: function () {
                return [{
                    Comp: u.a,
                    name: this.IntlString("APP_PHONE_MENU_FAVORITES"),
                    icon: "star"
                }, {
                    Comp: m.a,
                    name: "Keypad",
                    icon: "th"
                }, {
                    Comp: f.a,
                    name: this.IntlString("APP_PHONE_MENU_RECENTS"),
                    icon: "clock"
                }, {
                    Comp: p.a,
                    name: this.IntlString("APP_PHONE_MENU_CONTACTS"),
                    icon: "user"
                }]
            }
        }),
        methods: {
            getColorItem: function (t) {
                return this.currentMenuIndex === t ? {
                    color: "#017aff"
                } : {}
            },
            swapMenu: function (t) {
                this.currentMenuIndex = t, this.updateTitle(t)
            },
            onLeft: function () {
                1 === this.currentMenuIndex && !1 !== this.ignoreControls || (this.currentMenuIndex = Math.max(this.currentMenuIndex - 1, 0), this.updateTitle(this.currentMenuIndex))
            },
            onRight: function () {
                1 === this.currentMenuIndex && !1 !== this.ignoreControls || (this.currentMenuIndex = Math.min(this.currentMenuIndex + 1, this.subMenu.length - 1), this.updateTitle(this.currentMenuIndex))
            },
            backToMenus: function () {
                this.ignoreControls = !1
            },
            onBackspace: function () {
                !0 !== this.ignoreControls && this.$router.push({
                    name: "home",
                    params: {
                        ignoreBack: !0
                    }
                })
            },
            onEnter: function () {
                1 === this.currentMenuIndex && !0 !== this.ignoreControls && (this.ignoreControls = !0)
            },
            updateTitle: function (t) {
                switch (t) {
                case 0:
                    this.title = "Favorites";
                    break;
                case 1:
                    this.title = "Keypad";
                    break;
                case 2:
                    this.title = "Recents";
                    break;
                case 3:
                    this.title = "Contacts";
                    break;
                default:
                    this.title = "Phone"
                }
            }
        },
        created: function () {
            this.useMouse || (this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.onBackspace)
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpBackspace", this.onBackspace), this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpEnter", this.onEnter)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = n.n(s),
        o = n(2),
        i = n(28),
        r = n.n(i);
    e.default = {
        components: {
            InfoBare: r.a
        },
        data: function () {
            return {
                time: -1,
                intervalNum: void 0,
                select: -1,
                status: 0
            }
        },
        methods: a()({}, n.i(o.a)(["acceptCall", "rejectCall", "ignoreCall", "onwaitingCall"]), {
            smData: function (t) {
                console.log(t), this.onwaitingCall(t)
            },
            onBackspace: function () {
                1 === this.status ? this.onRejectCall() : this.onIgnoreCall()
            },
            onEnter: function () {
                0 === this.status && (0 === this.select ? this.onRejectCall() : this.onAcceptCall())
            },
            raccrocher: function () {
                this.onRejectCall()
            },
            deccrocher: function () {
                0 === this.status && this.onAcceptCall()
            },
            onLeft: function () {
                0 === this.status && (this.select = 0)
            },
            onRight: function () {
                0 === this.status && (this.select = 1)
            },
            updateTime: function () {
                this.time += 1
            },
            onRejectCall: function () {
                this.rejectCall(), this.$phoneAPI.setIgnoreFocus(!1)
            },
            onAcceptCall: function () {
                this.acceptCall(), this.$phoneAPI.setIgnoreFocus(!0)
            },
            onIgnoreCall: function () {
                this.ignoreCall(), this.$phoneAPI.setIgnoreFocus(!1), this.$router.push({
                    name: "home"
                })
            },
            startTimer: function () {
                void 0 === this.intervalNum && (this.time = 0, this.intervalNum = setInterval(this.updateTime, 1e3))
            }
        }),
        watch: {
            appelsInfo: function () {
                null !== this.appelsInfo && (!0 === this.appelsInfo.is_accepts ? (this.status = 1, this.$phoneAPI.setIgnoreFocus(!0), this.startTimer()) : this.appelsInfo.id < 0 ? (this.status = 1, this.startTimer()) : this.onIgnoreCall())
            }
        },
        computed: a()({}, n.i(o.b)(["IntlString", "backgroundURL", "useMouse", "appelsInfo", "appelsDisplayName", "appelsDisplayNumber", "myPhoneNumber"]), {
            timeDisplay: function () {
                if (this.time < 0) return "calling...";
                var t = Math.floor(this.time / 60),
                    e = this.time % 60;
                return t < 10 && (t = "0" + t), e < 10 && (e = "0" + e), t + ":" + e
            }
        }),
        mounted: function () {
            null !== this.appelsInfo && !0 === this.appelsInfo.initiator && (this.status = 1, this.$phoneAPI.setIgnoreFocus(!0))
        },
        created: function () {
            this.useMouse || (this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight)), this.$bus.$on("keyUpBackspace", this.onBackspace)
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpBackspace", this.onBackspace), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight), void 0 !== this.intervalNum && window.clearInterval(this.intervalNum), this.$phoneAPI.setIgnoreFocus(!1)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = n.n(s),
        o = n(2),
        i = n(21),
        r = n.n(i);
    e.default = {
        name: "Contacts",
        components: {
            List: r.a
        },
        data: function () {
            return {}
        },
        methods: a()({}, n.i(o.a)(["startCall"]), {
            onSelect: function (t) {
                void 0 !== t && (!0 === t.custom ? this.$router.push({
                    name: "appels.number"
                }) : this.startCall({
                    numero: t.number
                }))
            }
        }),
        computed: a()({}, n.i(o.b)(["IntlString", "contacts"]), {
            contactsList: function () {
                return this.contacts.filter(function (t) {
                    return !isNaN(parseInt(t.number))
                })
            }
        }),
        created: function () {},
        beforeDestroy: function () {}
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(11),
        a = n.n(s),
        o = n(1),
        i = n.n(o),
        r = n(2),
        c = n(21),
        u = n.n(c),
        l = n(7);
    e.default = {
        name: "Favoris",
        components: {
            List: u.a
        },
        data: function () {
            return {
                ignoreControls: !1
            }
        },
        computed: i()({}, n.i(r.b)(["IntlString", "config"]), {
            callList: function () {
                return this.config.serviceCall || []
            }
        }),
        methods: {
            onSelect: function (t) {
                var e = this;
                !0 !== this.ignoreControls && (this.ignoreControls = !0, l.a.CreateModal({
                    choix: [].concat(a()(t.subMenu), [{
                        action: "cancel",
                        title: this.IntlString("CANCEL"),
                        icons: "fa-undo"
                    }])
                }).then(function (t) {
                    switch (e.ignoreControls = !1, t.action) {
                    case "cancel":
                        return;
                    case "call":
                        return e.$phoneAPI.callEvent(t.eventName, t.type);
                    case "sendMessage":
                        e.$router.push({
                            name: "messages.view",
                            params: {
                                number: t.type.number
                            }
                        })
                    }
                }))
            }
        },
        created: function () {},
        beforeDestroy: function () {}
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = n.n(s),
        o = n(2),
        i = n(6),
        r = n.n(i);
    e.default = {
        components: {
            PhoneTitle: r.a
        },
        data: function () {
            return {
                numero: "",
                keyInfo: [{
                    primary: "1",
                    secondary: ""
                }, {
                    primary: "2",
                    secondary: "abc"
                }, {
                    primary: "3",
                    secondary: "def"
                }, {
                    primary: "4",
                    secondary: "ghi"
                }, {
                    primary: "5",
                    secondary: "jkl"
                }, {
                    primary: "6",
                    secondary: "mmo"
                }, {
                    primary: "7",
                    secondary: "pqrs"
                }, {
                    primary: "8",
                    secondary: "tuv"
                }, {
                    primary: "9",
                    secondary: "wxyz"
                }, {
                    primary: "*",
                    secondary: "",
                    isNotNumber: !0
                }, {
                    primary: "0",
                    secondary: "+"
                }, {
                    primary: "#",
                    secondary: "",
                    isNotNumber: !0
                }],
                keySelect: -1
            }
        },
        props: {
            ignoreControls: {
                type: Boolean
            }
        },
        methods: a()({}, n.i(o.a)(["startCall"]), {
            onLeft: function () {
                !0 === this.ignoreControls && (this.keySelect = Math.max(this.keySelect - 1, 0))
            },
            onRight: function () {
                !0 === this.ignoreControls && (this.keySelect = Math.min(this.keySelect + 1, 11))
            },
            onDown: function () {
                !0 === this.ignoreControls && (this.keySelect = Math.min(this.keySelect + 3, 12))
            },
            onUp: function () {
                this.keySelect > 2 && (12 === this.keySelect ? this.keySelect = 10 : this.keySelect = this.keySelect - 3)
            },
            onEnter: function () {
                !0 === this.ignoreControls ? 12 === this.keySelect ? this.numero.length > 0 && this.startCall({
                    numero: this.numero
                }) : !0 === this.ignoreControls && (this.numero += this.keyInfo[this.keySelect].primary) : this.keySelect = 0
            },
            onBackspace: function () {
                if (!0 === this.ignoreControls && 0 === this.numero.length) return this.keySelect = -1, void this.$emit("back", !0);
                0 !== this.numero.length && (this.numero = this.numero.slice(0, -1))
            },
            deleteNumber: function () {
                0 !== this.numero.length && (this.numero = this.numero.slice(0, -1))
            },
            onPressKey: function (t) {
                this.numero.length > 11 || (this.numero = this.numero + t.primary)
            },
            onPressCall: function () {
                this.startCall({
                    numero: this.numero
                })
            },
            quit: function () {
                history.back()
            }
        }),
        computed: a()({}, n.i(o.b)(["IntlString", "useMouse", "useFormatNumberFrance"]), {
            numeroFormat: function () {
                if (this.numero = this.numero.slice(0, 11), !0 === this.useFormatNumberFrance) return this.numero;
                var t = this.numero.startsWith("#") ? 5 : 4;
                return this.numero.length > t ? this.numero.length < t + 4 ? this.numero.slice(0, t) + "-" + this.numero.slice(t) : this.numero.slice(0, t) + "-" + this.numero.slice(t, 3 + t) + "-" + this.numero.slice(t + 3, t + 7) : this.numero
            }
        }),
        created: function () {
            this.useMouse ? this.keySelect = -1 : (this.$bus.$on("keyUpBackspace", this.onBackspace), this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter))
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpBackspace", this.onBackspace), this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(4),
        a = n.n(s),
        o = n(11),
        i = n.n(o),
        r = n(3),
        c = n.n(r),
        u = n(1),
        l = n.n(u),
        p = n(2),
        h = n(50),
        f = n(7);
    e.default = {
        name: "Recents",
        components: {},
        data: function () {
            return {
                ignoreControls: !1,
                selectIndex: 0
            }
        },
        methods: l()({}, n.i(p.a)(["startCall", "blockNumber", "unblockNumber", "appelsDeleteHistorique", "appelsDeleteAllHistorique"]), {
            getContact: function (t) {
                return this.contacts.find(function (e) {
                    return e.number === t
                })
            },
            scrollIntoViewIfNeeded: function () {
                var t = this;
                this.$nextTick(function () {
                    t.$el.querySelector(".active").scrollIntoViewIfNeeded()
                })
            },
            onUp: function () {
                !0 !== this.ignoreControls && (this.selectIndex = Math.max(0, this.selectIndex - 1), this.scrollIntoViewIfNeeded())
            },
            onDown: function () {
                !0 !== this.ignoreControls && (this.selectIndex = Math.min(this.historique.length - 1, this.selectIndex + 1), this.scrollIntoViewIfNeeded())
            },
            selectItem: function (t) {
                var e = this;
                return c()(a.a.mark(function n() {
                    var s, o, r, c, u;
                    return a.a.wrap(function (n) {
                        for (;;) switch (n.prev = n.next) {
                        case 0:
                            return s = t.num, o = !1 === s.startsWith("#"), r = !(e.getContact(t.num) && e.getContact(t.num).blocked) && void 0 === e.blocklist[t.num], e.ignoreControls = !0, c = [{
                                id: 1,
                                title: e.IntlString("APP_PHONE_DELETE"),
                                icons: "fa-trash",
                                color: "orange"
                            }, {
                                id: 2,
                                title: e.IntlString("APP_PHONE_DELETE_ALL"),
                                icons: "fa-trash",
                                color: "red"
                            }, {
                                id: 3,
                                title: e.IntlString("APP_PHONE_CANCEL"),
                                icons: "fa-undo"
                            }], !0 === o && parseInt(s) && (c = [{
                                id: 5,
                                title: r ? e.IntlString("APP_PHONE_BLOCK") : e.IntlString("APP_PHONE_UNBLOCK"),
                                icons: "fa-ban"
                            }].concat(i()(c))), !0 === o && void 0 === e.contacts.find(function (t) {
                                return t.number === s
                            }) && (c = [{
                                id: 4,
                                title: e.IntlString("APP_PHONE_ADD"),
                                icons: "fa-plus"
                            }].concat(i()(c))), !0 === o && parseInt(s) && (c = [{
                                id: 6,
                                title: e.IntlString("APP_MESSAGE_SMS"),
                                icons: "fa-comment"
                            }].concat(i()(c)), c = [{
                                id: 0,
                                title: e.IntlString("APP_PHONE_CALL"),
                                icons: "fa-phone"
                            }].concat(i()(c))), n.next = 10, f.a.CreateModal({
                                choix: c
                            });
                        case 10:
                            u = n.sent, e.ignoreControls = !1, n.t0 = u.id, n.next = 0 === n.t0 ? 15 : 1 === n.t0 ? 17 : 2 === n.t0 ? 19 : 4 === n.t0 ? 21 : 5 === n.t0 ? 23 : 6 === n.t0 ? 25 : 27;
                            break;
                        case 15:
                            return e.startCall({
                                numero: s
                            }), n.abrupt("break", 27);
                        case 17:
                            return e.appelsDeleteHistorique({
                                numero: s
                            }), n.abrupt("break", 27);
                        case 19:
                            return e.appelsDeleteAllHistorique(), n.abrupt("break", 27);
                        case 21:
                            return e.save(s), n.abrupt("break", 27);
                        case 23:
                            return r ? e.blockNumber({
                                phoneNumber: s
                            }) : e.unblockNumber({
                                phoneNumber: s
                            }), n.abrupt("break", 27);
                        case 25:
                            return e.$router.push({
                                name: "messages.view",
                                params: {
                                    number: s,
                                    display: e.getContact(s) ? e.getContact(s).display : s
                                }
                            }), n.abrupt("break", 27);
                        case 27:
                        case "end":
                            return n.stop()
                        }
                    }, n, e)
                }))()
            },
            onEnter: function () {
                var t = this;
                return c()(a.a.mark(function e() {
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!0 !== t.ignoreControls) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            t.selectItem(t.historique[t.selectIndex]);
                        case 3:
                        case "end":
                            return e.stop()
                        }
                    }, e, t)
                }))()
            },
            save: function (t) {
                -1 !== this.id && this.$router.push({
                    name: "contacts.view",
                    params: {
                        id: 0,
                        number: t
                    }
                })
            },
            stylePuce: function (t) {
                return t = t || {}, void 0 !== t.icon ? {
                    backgroundImage: "url(" + t.icon + ")",
                    backgroundSize: "cover",
                    color: "rgba(0,0,0,0)"
                } : {
                    color: t.color || this.color,
                    background: "linear-gradient(0deg, #858a94, #a2a8b5)",
                    borderRadius: "50%"
                }
            }
        }),
        computed: l()({}, n.i(p.b)(["IntlString", "useMouse", "appelsHistorique", "contacts", "blocklist"]), {
            historique: function () {
                var t = n.i(h.a)(this.appelsHistorique, "num"),
                    e = [];
                for (var s in t) {
                    var a = t[s],
                        o = a.map(function (t) {
                            return t.date = new Date(t.time), t
                        }).sort(function (t, e) {
                            return e.date - t.date
                        }).slice(0, 6),
                        i = this.getContact(s) || {
                            letter: "#"
                        };
                    e.push({
                        num: s,
                        display: i.display || s,
                        lastCall: o,
                        letter: i.letter || i.display[0],
                        backgroundColor: i.backgroundColor || n.i(h.b)(s),
                        icon: i.icon
                    })
                }
                return e.sort(function (t, e) {
                    return e.lastCall[0].time - t.lastCall[0].time
                }), e
            }
        }),
        created: function () {
            this.useMouse ? this.selectIndex = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter))
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = n.n(s),
        o = n(2),
        i = n(6),
        r = n.n(i);
    e.default = {
        components: {
            PhoneTitle: r.a
        },
        data: function () {
            return {
                id: "",
                paratutar: "",
                currentSelect: this.useMouse ? -1 : 0
            }
        },
        methods: a()({}, n.i(o.a)(["sendpara"]), {
            setText: function (t, e) {
                var n = this;
                this.$phoneAPI.getReponseText({
                    title: "id" === t ? "Enter Cardnumber (ID)" : "Enter amount"
                }).then(function (e) {
                    n[t] = parseInt(e.text) ? parseInt(e.text) : ""
                }), this.currentSelect = e
            },
            scrollIntoViewIfNeeded: function () {
                this.$nextTick(function () {
                    document.querySelector("focus").scrollIntoViewIfNeeded()
                })
            },
            onBackspace: function () {
                this.$router.push({
                    name: "home",
                    params: {
                        ignoreBack: !0
                    }
                })
            },
            iptal: function () {
                this.$router.go(-1)
            },
            paragonder: function () {
                var t = this.paratutar.toString().trim(),
                    e = this.id.toString().trim();
                "" !== parseFloat(t) && "" !== parseFloat(e) && (this.paratutar = "", this.id = "", this.sendpara({
                    id: e,
                    amount: t
                }))
            },
            onUp: function () {
                this.currentSelect - 1 >= 0 && (this.currentSelect = this.currentSelect - 1), this.$refs["form" + this.currentSelect].focus()
            },
            onDown: function () {
                this.currentSelect + 1 <= 3 && (this.currentSelect = this.currentSelect + 1), this.$refs["form" + this.currentSelect].focus()
            },
            onEnter: function () {
                var t = this;
                !0 !== this.ignoreControls && (2 === this.currentSelect ? this.paragonder() : 0 === this.currentSelect ? this.$phoneAPI.getReponseText({
                    title: "Enter Cardnumber (id)"
                }).then(function (e) {
                    t.id = ("" + e.text).trim()
                }) : 1 === this.currentSelect ? this.$phoneAPI.getReponseText({
                    title: "Enter Amount"
                }).then(function (e) {
                    t.paratutar = ("" + e.text).trim()
                }) : 3 === this.currentSelect && this.iptal())
            }
        }),
        computed: a()({}, n.i(o.b)(["bankAmont", "IntlString", "useMouse"]), {
            bankAmontFormat: function () {
                return Intl.NumberFormat().format(this.bankAmont)
            }
        }),
        created: function () {
            this.display = this.$route.params.display, this.useMouse || (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp)), this.$bus.$on("keyUpBackspace", this.onBackspace), this.$bus.$on("keyUpEnter", this.onEnter)
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBackspace)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = n.n(s),
        o = n(2),
        i = n(6),
        r = n.n(i);
    e.default = {
        components: {
            PhoneTitle: r.a
        },
        data: function () {
            return {
                currentSelect: 0
            }
        },
        computed: a()({}, n.i(o.b)(["IntlString", "useMouse", "bourseInfo"])),
        methods: {
            scrollIntoViewIfNeeded: function () {
                var t = this;
                this.$nextTick(function () {
                    t.$el.querySelector(".select").scrollIntoViewIfNeeded()
                })
            },
            colorBourse: function (t) {
                return 0 === t.difference ? "#1565c0" : t.difference < 0 ? "#c62828" : "#2e7d32"
            },
            classInfo: function (t) {
                return 0 === t.difference ? ["fa-arrow-right", "iblue"] : t.difference < 0 ? ["fa-arrow-up", "ired"] : ["fa-arrow-down", "igreen"]
            },
            onBackspace: function () {
                this.$router.push({
                    name: "home",
                    params: {
                        ignoreBack: !0
                    }
                })
            },
            onUp: function () {
                this.currentSelect = 0 === this.currentSelect ? 0 : this.currentSelect - 1, this.scrollIntoViewIfNeeded()
            },
            onDown: function () {
                this.currentSelect = this.currentSelect === this.bourseInfo.length - 1 ? this.currentSelect : this.currentSelect + 1, this.scrollIntoViewIfNeeded()
            }
        },
        created: function () {
            this.useMouse || (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp)), this.$bus.$on("keyUpBackspace", this.onBackspace)
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpBackspace", this.onBackspace)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(51),
        a = n.n(s),
        o = n(1),
        i = n.n(o),
        r = n(6),
        c = n.n(r),
        u = n(2);
    e.default = {
        components: {
            PhoneTitle: c.a
        },
        data: function () {
            return {
                itsNotReallyUsingMouse: !1,
                percentageSet: !1,
                calculator: null,
                calculatorDisplay: null,
                calculatorKeys: null,
                calculatorClearAll: null,
                calculatorClear: null,
                valueX: null,
                operator: null,
                valueZ: null,
                previousKeyType: null,
                previousKeyValue: null
            }
        },
        computed: i()({}, n.i(u.b)(["useMouse"])),
        created: function () {
            this.$bus.$on("keyUpBackspace", this.onBack), window.addEventListener("keydown", this.onKey), this.useMouse || (this.itsNotReallyUsingMouse = !0, this.setMouseSupport(!0))
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpBackspace", this.onBack), window.removeEventListener("keydown", this.onKey), !0 === this.itsNotReallyUsingMouse && this.setMouseSupport(!1)
        },
        mounted: function () {
            this.calculator = document.querySelector(".js-calculator"), this.calculatorDisplay = document.querySelector(".js-calculator").querySelector(".js-calculator__value"), this.calculatorKeys = document.querySelector(".js-calculator").querySelector(".js-calculator__body"), this.calculatorClearAll = document.querySelector(".js-calculator").querySelector(".js-calculator__clearall"), this.calculatorClear = document.querySelector(".js-calculator").querySelector(".js-calculator__clear")
        },
        methods: i()({}, n.i(u.a)(["setMouseSupport"]), {
            onBack: function () {
                !0 === this.useMouse && "BODY" !== document.activeElement.tagName || this.onQuit()
            },
            onQuit: function () {
                this.$router.push({
                    name: "home",
                    params: {
                        ignoreBack: !0
                    }
                })
            },
            onKey: function (t) {
                var e = this,
                    n = t.key,
                    s = {
                        Enter: function () {
                            e.calculator.querySelector('[data-action="calculate"]').click()
                        },
                        Escape: function () {
                            e.calculator.querySelector('[data-action="clear"]').click(), e.calculator.querySelector('[data-action="clearAll"]').click()
                        },
                        "*": function () {
                            e.calculator.querySelector('[data-action="multiply"]').click()
                        },
                        "-": function () {
                            e.calculator.querySelector('[data-action="subtract"]').click()
                        },
                        "+": function () {
                            e.calculator.querySelector('[data-action="add"]').click()
                        },
                        "/": function () {
                            e.calculator.querySelector('[data-action="divide"]').click()
                        },
                        ".": function () {
                            e.calculator.querySelector('[data-action="decimal"]').click()
                        }
                    },
                    a = s[n];
                a ? a() : this.calculatorKeys.querySelector('[data-value="' + n + '"]') && this.calculatorKeys.querySelector('[data-value="' + n + '"]').click()
            },
            calculate: function (t, e, n) {
                this.percentageSet && (n *= t, this.percentageSet = !1);
                var s = parseFloat(t),
                    a = parseFloat(n),
                    o = null;
                switch (e) {
                case "add":
                    o = s + a;
                    break;
                case "subtract":
                    o = s - a;
                    break;
                case "multiply":
                    o = s * a;
                    break;
                case "divide":
                    o = s / a
                }
                return o
            },
            invert: function (t) {
                return -parseFloat(t)
            },
            clicked: function (t) {
                if (t.target.matches("button") || t.target.parentNode.matches("button")) {
                    var e = t.target.parentNode.matches("button") ? t.target.parentNode : t.target,
                        n = e.dataset.type ? e.dataset.type : null,
                        s = e.dataset.action ? e.dataset.action : null,
                        o = e.dataset.value ? e.dataset.value : null,
                        i = this.calculatorDisplay.textContent;
                    if (a()(e.parentNode.children).forEach(function (t) {
                            return t.classList.remove("is-selected")
                        }), "clearAll" === s || "clear" === s ? ("clearAll" === s ? (this.valueX = null, this.operator = null, this.valueZ = null, this.previousKeyType = null, this.previousKeyValue = null) : (this.calculatorClearAll.hidden = !1, this.calculatorClear.hidden = !0), this.calculatorDisplay.textContent = "0") : (this.calculatorClearAll.hidden = !0, this.calculatorClear.hidden = !1), "invert" === s && (this.calculatorDisplay.textContent = this.invert(i)), "percentage" === s && (this.calculatorDisplay.textContent = parseFloat(i) / 100, this.percentageSet = !0), "operator" === n) {
                        if (e.classList.add("is-selected"), null !== this.valueX && this.operator && "operator" !== this.previousKeyType && "function" !== this.previousKeyType && !isNaN(parseFloat(this.previousKeyValue))) {
                            var r = this.calculate(this.valueX, this.operator, i);
                            this.calculatorDisplay.textContent = r, this.valueX = r
                        } else this.valueX = i;
                        this.operator = s
                    }
                    if ("decimal" === s && (i.includes(".") ? ("operator" === this.previousKeyType || "function" === this.previousKeyType && "calculate" === this.previousKeyValue) && (this.calculatorDisplay.textContent = "0.") : this.calculatorDisplay.textContent = i + "."), "calculate" === s) {
                        var c = i;
                        null !== this.valueX && ("function" === this.previousKeyType && "calculate" === this.previousKeyValue && (this.valueX = c, c = this.valueZ), this.calculatorDisplay.textContent = this.calculate(this.valueX, this.operator, c)), this.valueZ = c
                    }
                    s || ("0" === this.displayValue || "operator" === this.previousKeyType || "function" === this.previousKeyType && "calculate" === this.previousKeyValue ? this.calculatorDisplay.textContent = o : this.calculatorDisplay.textContent = parseFloat(i + o)), this.previousKeyType = n, this.previousKeyValue = s || o
                }
            }
        })
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        data: function () {
            return {
                time: "",
                myInterval: 0
            }
        },
        methods: {
            updateTime: function () {
                var t = new Date,
                    e = Number(t.toLocaleString([], {
                        hour12: !1,
                        hour: "2-digit",
                        timeZone: "Asia/Tehran"
                    })),
                    n = Number(t.toLocaleString([], {
                        hour12: !1,
                        minute: "2-digit",
                        timeZone: "Asia/Tehran"
                    })),
                    s = Number(t.toLocaleString([], {
                        hour12: !1,
                        second: "2-digit",
                        timeZone: "Asia/Tehran"
                    })),
                    a = 3600 * e,
                    o = 60 * n,
                    i = a + o + s,
                    r = Math.floor(i / 21600),
                    c = i - 21600 * r,
                    u = 86400 * c / 21600,
                    l = Math.floor(u / 3600),
                    p = Math.floor(u % 3600 / 60),
                    h = p > 9 ? p : "0" + p,
                    f = l > 9 ? l : "0" + l,
                    d = f + ":" + h;
                this.time = d
            }
        },
        created: function () {
            this.updateTime(), this.myInterval = setInterval(this.updateTime, 1e3)
        },
        beforeDestroy: function () {
            clearInterval(this.myInterval)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = n.n(s),
        o = n(2),
        i = n(28),
        r = n.n(i),
        c = n(73),
        u = n.n(c),
        l = n(18);
    e.default = {
        components: {
            InfoBare: r.a,
            Menu: u.a
        },
        data: function () {
            return {
                currentSelect: this.useMouse ? -1 : 0
            }
        },
        computed: a()({}, n.i(o.b)(["IntlString", "useMouse", "nbMessagesUnread", "backgroundURL", "messages", "Apps", "warningMessageCount"])),
        methods: a()({}, n.i(o.a)(["closePhone", "setMessages"]), {
            onLeft: function () {
                this.currentSelect = this.currentSelect - 1 < 0 ? this.currentSelect : this.currentSelect - 1
            },
            onRight: function () {
                this.currentSelect = this.currentSelect + 1 >= this.Apps.length ? this.currentSelect : this.currentSelect + 1
            },
            onUp: function () {
                var t = this.Apps.filter(function (t) {
                    return !0 === t.inHomePage
                }).length;
                this.currentSelect = this.currentSelect + t < this.Apps.length ? this.currentSelect + t : this.currentSelect
            },
            onDown: function () {
                var t = this.Apps.filter(function (t) {
                    return !0 === t.inHomePage
                }).length;
                this.currentSelect = this.currentSelect - t >= 0 ? this.currentSelect - t : this.currentSelect
            },
            openApp: function (t) {
                try {
                    this.$router.push({
                        name: t.routeName
                    })
                } catch (t) {
                    console.log("catched", t)
                }
            },
            onEnter: function () {
                this.openApp(this.Apps[this.currentSelect] || {
                    routeName: "menu"
                })
            },
            onBack: function () {
                this.$route.params.ignoreBack || this.closePhone(), this.$route.params.ignoreBack = !1
            }
        }),
        created: function () {
            this.$route.params && this.$route.params.makeVisible && l.a.commit("SET_TEMPO_HIDE", !1)
        },
        mounted: function () {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter), this.currentSelect = 0), this.$bus.$on("keyUpBackspace", this.onBack)
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        a = n(232),
        o = n.n(a);
    e.default = {
        data: function () {
            return {
                btcolor: "#fff" === this.color || "#000" === this.color ? this.color : "#000"
            }
        },
        computed: n.i(s.b)(["config"]),
        components: {
            CurrentTime: o.a
        },
        props: {
            color: {
                type: String,
                default: "#000"
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = n.n(s),
        o = n(6),
        i = n.n(o),
        r = n(28),
        c = n.n(r),
        u = n(2);
    e.default = {
        name: "List",
        components: {
            PhoneTitle: i.a,
            InfoBare: c.a
        },
        data: function () {
            return {
                currentSelect: 0,
                search: "",
                items: [],
                busy: !1
            }
        },
        props: {
            title: {
                type: String,
                default: "Title"
            },
            showHeader: {
                type: Boolean,
                default: !0
            },
            showInfoBare: {
                type: Boolean,
                default: !0
            },
            list: {
                type: Array,
                required: !0
            },
            color: {
                type: String,
                default: "#FFFFFF"
            },
            backgroundColor: {
                type: String,
                default: "#4CAF50"
            },
            keyDispay: {
                type: String,
                default: "display"
            },
            disable: {
                type: Boolean,
                default: !1
            },
            titleBackgroundColor: {
                type: String,
                default: "#FFFFFF"
            },
            time: {
                type: Number,
                default: 0
            },
            background: {
                type: String,
                default: "linear-gradient(0deg, #858a94, #a2a8b5)"
            }
        },
        watch: {
            list: function () {
                this.currentSelect = 0, this.search = "", this.items = this.list, this.filteredList()
            }
        },
        computed: a()({}, n.i(u.b)(["useMouse"])),
        methods: {
            filteredList: function () {
                var t = this,
                    e = this.search;
                this.items = this.list.filter(function (t) {
                    return t.display.toLowerCase().includes(e.toLowerCase())
                }), "" === this.search && setTimeout(function () {
                    t.$refs.search.blur(), t.currentSelect = 0
                }, 10)
            },
            styleTitle: function () {
                return {
                    color: this.color,
                    backgroundColor: this.backgroundColor
                }
            },
            stylePuce: function (t) {
                return t = t || {}, void 0 !== t.icon ? {
                    backgroundImage: "url(" + t.icon + ")",
                    backgroundSize: "cover",
                    color: "rgba(0,0,0,0)"
                } : {
                    color: t.color || this.color,
                    backgroundColor: t.backgroundColor || this.backgroundColor,
                    background: t.background || this.background,
                    borderRadius: "50%"
                }
            },
            scrollIntoViewIfNeeded: function () {
                this.$nextTick(function () {
                    document.querySelector(".select").scrollIntoViewIfNeeded()
                })
            },
            selectText: function () {
                var t = this;
                this.$phoneAPI.getReponseText({
                    title: "Search for " + this.title
                }).then(function (e) {
                    t.search = ("" + e.text).trim(), t.filteredList()
                })
            },
            onUp: function () {
                var t = this;
                !0 !== this.disable && (this.currentSelect < 1 ? (this.currentSelect = -1, this.useMouse || this.$phoneAPI.getReponseText({
                    title: "Search for " + this.title
                }).then(function (e) {
                    t.search = ("" + e.text).trim(), t.filteredList()
                }), this.$refs.search.focus()) : (this.currentSelect = 0 === this.currentSelect ? this.items.length - 1 : this.currentSelect - 1, this.scrollIntoViewIfNeeded()))
            },
            onDown: function () {
                !0 !== this.disable && (this.currentSelect < 0 ? (this.currentSelect = 0, this.$refs.search.blur()) : (this.currentSelect = this.currentSelect === this.items.length - 1 ? 0 : this.currentSelect + 1, this.scrollIntoViewIfNeeded()))
            },
            selectItem: function (t) {
                this.$emit("select", t)
            },
            optionItem: function (t) {
                this.$emit("option", t)
            },
            back: function () {
                !0 !== this.disable && !1 === this.busy && this.$emit("back")
            },
            onRight: function () {
                !0 !== this.disable && this.$emit("option", this.items[this.currentSelect])
            },
            onEnter: function () {
                !0 !== this.disable && this.$emit("select", this.items[this.currentSelect])
            }
        },
        created: function () {
            this.items = this.list, this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.back))
        },
        beforeDestroy: function () {
            this.items = this.list, this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.back)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = n.n(s),
        o = n(2),
        i = n(28),
        r = n.n(i),
        c = n(241),
        u = n.n(c);
    e.default = {
        data: function () {
            return {
                date: {
                    month: (new Date).toLocaleString("en-US", {
                        timeZone: "Asia/Tehran",
                        month: "long"
                    }),
                    date: (new Date).getDate(),
                    dayOfWeek: (new Date).toLocaleString("en-US", {
                        timeZone: "Asia/Tehran",
                        weekday: "long"
                    })
                }
            }
        },
        components: {
            InfoBare: r.a,
            Weather: u.a
        },
        props: {
            currentSelect: {
                type: Number,
                required: !0
            }
        },
        computed: a()({}, n.i(o.b)(["bankAmont", "nbMessagesUnread", "backgroundURL", "Apps", "useMouse"]), {
            bankAmontFormat: function () {
                return Intl.NumberFormat().format(this.bankAmont)
            }
        }),
        methods: a()({}, n.i(o.b)(["closePhone"]), {
            openApp: function (t) {
                this.$emit("openApp", t)
            }
        })
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = n.n(s),
        o = n(18),
        i = n(2);
    e.default = {
        name: "Modal",
        store: o.a,
        data: function () {
            return {
                currentSelect: 0
            }
        },
        props: {
            choix: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        computed: a()({}, n.i(i.b)(["useMouse"])),
        methods: {
            scrollIntoViewIfNeeded: function () {
                this.$nextTick(function () {
                    document.querySelector(".modal-choix.select").scrollIntoViewIfNeeded()
                })
            },
            onUp: function () {
                this.currentSelect = 0 === this.currentSelect ? 0 : this.currentSelect - 1, this.scrollIntoViewIfNeeded()
            },
            onDown: function () {
                this.currentSelect = this.currentSelect === this.choix.length - 1 ? this.currentSelect : this.currentSelect + 1, this.scrollIntoViewIfNeeded()
            },
            selectItem: function (t) {
                this.$emit("select", t)
            },
            onEnter: function () {
                this.$emit("select", this.choix[this.currentSelect])
            },
            cancel: function () {
                this.$emit("cancel")
            }
        },
        created: function () {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.cancel)
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.cancel)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(4),
        a = n.n(s),
        o = n(3),
        i = n.n(o),
        r = n(1),
        c = n.n(r),
        u = n(2),
        l = n(7),
        p = n(6),
        h = n.n(p);
    e.default = {
        components: {
            PhoneTitle: h.a
        },
        data: function () {
            return {
                currentSelect: 0,
                ignoreControls: !1
            }
        },
        watch: {
            list: function () {
                this.currentSelect = 0
            }
        },
        computed: c()({}, n.i(u.b)(["IntlString", "useMouse", "notesChannels", "Apps"])),
        methods: c()({}, n.i(u.a)(["notesAddChannel", "notesRemoveChannel"]), {
            scrollIntoViewIfNeeded: function () {
                var t = this;
                this.$nextTick(function () {
                    var e = t.$el.querySelector(".select");
                    null !== e && e.scrollIntoViewIfNeeded()
                })
            },
            onUp: function () {
                !0 !== this.ignoreControls && (this.currentSelect = 0 === this.currentSelect ? 0 : this.currentSelect - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function () {
                !0 !== this.ignoreControls && (this.currentSelect = this.currentSelect === this.notesChannels.length - 1 ? this.currentSelect : this.currentSelect + 1, this.scrollIntoViewIfNeeded())
            },
            onRight: function () {
                var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return i()(a.a.mark(function n() {
                    var s, o;
                    return a.a.wrap(function (n) {
                        for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (!0 !== t.ignoreControls) {
                                n.next = 2;
                                break
                            }
                            return n.abrupt("return");
                        case 2:
                            return null !== e && (t.currentSelect = e), t.ignoreControls = !0, s = [{
                                id: 1,
                                title: t.IntlString("APP_DARKTCHAT_NEW_NOTE"),
                                icons: "fa-plus",
                                color: "dodgerblue"
                            }, {
                                id: 2,
                                title: t.IntlString("APP_DARKTCHAT_DELETE_NOTE"),
                                icons: "fa-minus",
                                color: "tomato"
                            }, {
                                id: 3,
                                title: t.IntlString("APP_DARKTCHAT_CANCEL"),
                                icons: "fa-undo"
                            }], 0 === t.notesChannels.length && s.splice(1, 1), n.next = 8, l.a.CreateModal({
                                choix: s
                            });
                        case 8:
                            o = n.sent, t.ignoreControls = !1, n.t0 = o.id, n.next = 1 === n.t0 ? 13 : 2 === n.t0 ? 15 : (n.t0, 17);
                            break;
                        case 13:
                            return t.addChannelOption(), n.abrupt("break", 17);
                        case 15:
                            return t.removeChannelOption(), n.abrupt("break", 17);
                        case 17:
                        case "end":
                            return n.stop()
                        }
                    }, n, t)
                }))()
            },
            onEnter: function () {
                var t = this;
                return i()(a.a.mark(function e() {
                    var n, s;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!0 !== t.ignoreControls) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            if (0 !== t.notesChannels.length) {
                                e.next = 12;
                                break
                            }
                            return t.ignoreControls = !0, n = [{
                                id: 1,
                                title: t.IntlString("APP_DARKTCHAT_NEW_CHANNEL"),
                                icons: "fa-plus",
                                color: "green"
                            }, {
                                id: 3,
                                title: t.IntlString("APP_DARKTCHAT_CANCEL"),
                                icons: "fa-undo"
                            }], e.next = 7, l.a.CreateModal({
                                choix: n
                            });
                        case 7:
                            s = e.sent, t.ignoreControls = !1, 1 === s.id && t.addChannelOption(), e.next = 12;
                            break;
                        case 12:
                        case "end":
                            return e.stop()
                        }
                    }, e, t)
                }))()
            },
            showChannel: function (t) {
                this.$router.push({
                    name: "notes.channel.show",
                    params: {
                        channel: t
                    }
                })
            },
            onBack: function () {
                !0 !== this.ignoreControls && this.$router.push({
                    name: "home",
                    params: {
                        ignoreBack: !0
                    }
                })
            },
            addChannelOption: function () {
                var t = this;
                return i()(a.a.mark(function e() {
                    var n, s;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, l.a.CreateTextModal({
                                limit: 280,
                                title: t.IntlString("APP_DARKTCHAT_NEW_CHANNEL")
                            });
                        case 3:
                            n = e.sent, s = (n || {}).text || "", s.length > 0 && (t.currentSelect = 0, t.notesAddChannel({
                                channel: s
                            })), e.next = 11;
                            break;
                        case 9:
                            e.prev = 9, e.t0 = e.catch(0);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                    }, e, t, [
                        [0, 9]
                    ])
                }))()
            },
            removeChannelOption: function () {
                var t = this;
                return i()(a.a.mark(function e() {
                    var n;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            n = t.notesChannels[t.currentSelect].channel, t.currentSelect = 0, t.notesRemoveChannel({
                                channel: n
                            });
                        case 3:
                        case "end":
                            return e.stop()
                        }
                    }, e, t)
                }))()
            }
        }),
        created: function () {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.onBack)
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(4),
        a = n.n(s),
        o = n(3),
        i = n.n(o),
        r = n(1),
        c = n.n(r),
        u = n(2),
        l = n(6),
        p = n.n(l);
    e.default = {
        components: {
            PhoneTitle: p.a
        },
        data: function () {
            return {
                message: "",
                channel: "",
                currentSelect: 0
            }
        },
        computed: c()({}, n.i(u.b)(["notesMessages", "notesCurrentChannel", "useMouse"]), {
            channelName: function () {
                return "# " + this.channel
            }
        }),
        watch: {
            notesMessages: function () {
                var t = this.$refs.elementsDiv;
                t.scrollTop = t.scrollHeight
            }
        },
        methods: c()({
            setChannel: function (t) {
                this.channel = t, this.notesSetChannel({
                    channel: t
                })
            }
        }, n.i(u.a)(["notesSetChannel", "notesSendMessage"]), {
            scrollIntoViewIfNeeded: function () {
                var t = this;
                this.$nextTick(function () {
                    var e = t.$el.querySelector(".select");
                    null !== e && e.scrollIntoViewIfNeeded()
                })
            },
            onUp: function () {
                var t = this.$refs.elementsDiv;
                t.scrollTop = t.scrollTop - 120
            },
            onDown: function () {
                var t = this.$refs.elementsDiv;
                t.scrollTop = t.scrollTop + 120
            },
            onEnter: function () {
                var t = this;
                return i()(a.a.mark(function e() {
                    var n, s;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, t.$phoneAPI.getReponseText({
                                title: "Enter note text..."
                            });
                        case 2:
                            n = e.sent, void 0 !== n && void 0 !== n.text && (s = n.text.trim(), 0 !== s.length && t.notesSendMessage({
                                channel: t.channel,
                                message: s
                            }));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                    }, e, t)
                }))()
            },
            sendMessage: function () {
                var t = this.message.trim();
                0 !== t.length && (this.notesSendMessage({
                    channel: this.channel,
                    message: t
                }), this.message = "")
            },
            onBack: function () {
                !0 === this.useMouse && "BODY" !== document.activeElement.tagName || this.onQuit()
            },
            onQuit: function () {
                this.$router.push({
                    name: "notes"
                })
            },
            formatTime: function (t) {
                return new Date(t).toLocaleTimeString()
            }
        }),
        created: function () {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.onBack), this.setChannel(this.$route.params.channel)
        },
        mounted: function () {
            window.c = this.$refs.elementsDiv;
            var t = this.$refs.elementsDiv;
            t.scrollTop = t.scrollHeight
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = n.n(s),
        o = n(2),
        i = n(28),
        r = n.n(i);
    e.default = {
        components: {
            InfoBare: r.a
        },
        computed: a()({}, n.i(o.b)(["themeColor"]), {
            style: function () {
                return {
                    backgroundColor: this.backgroundColor || this.themeColor,
                    color: this.color || "#538bff"
                }
            }
        }),
        methods: {
            back: function () {
                this.$emit("back")
            }
        },
        props: {
            title: {
                type: String,
                required: !0
            },
            showInfoBare: {
                type: Boolean,
                default: !0
            },
            backgroundColor: {
                type: String
            },
            color: {
                type: String
            },
            fontSize: {
                type: String
            },
            align: {
                type: String
            },
            textColor: {
                type: String
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(4),
        a = n.n(s),
        o = n(3),
        i = n.n(o),
        r = n(9),
        c = n(18);
    e.default = {
        created: function () {
            var t = this;
            return i()(a.a.mark(function e() {
                return a.a.wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (c.a.alreadyTakingPhoto) {
                            e.next = 6;
                            break
                        }
                        return c.a.alreadyTakingPhoto = !0, e.next = 4, r.a.faketakePhoto();
                    case 4:
                        e.next = 8;
                        break;
                    case 6:
                        c.a.alreadyTakingPhoto = !1, t.$router.push({
                            name: "home",
                            params: {
                                makeVisible: !0
                            }
                        });
                    case 8:
                    case "end":
                        return e.stop()
                    }
                }, e, t)
            }))()
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(4),
        a = n.n(s),
        o = n(3),
        i = n.n(o),
        r = n(1),
        c = n.n(r),
        u = n(2),
        l = n(7),
        p = n(6),
        h = n.n(p);
    e.default = {
        components: {
            PhoneTitle: h.a
        },
        data: function () {
            return {
                currentSelect: 0,
                ignoreControls: !1
            }
        },
        watch: {
            list: function () {
                this.currentSelect = 0
            }
        },
        computed: c()({}, n.i(u.b)(["IntlString", "useMouse", "tchatChannels", "Apps"])),
        methods: c()({}, n.i(u.a)(["tchatAddChannel", "tchatRemoveChannel"]), {
            scrollIntoViewIfNeeded: function () {
                var t = this;
                this.$nextTick(function () {
                    var e = t.$el.querySelector(".select");
                    null !== e && e.scrollIntoViewIfNeeded()
                })
            },
            onUp: function () {
                !0 !== this.ignoreControls && (this.currentSelect = 0 === this.currentSelect ? 0 : this.currentSelect - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function () {
                !0 !== this.ignoreControls && (this.currentSelect = this.currentSelect === this.tchatChannels.length - 1 ? this.currentSelect : this.currentSelect + 1, this.scrollIntoViewIfNeeded())
            },
            onRight: function () {
                var t = this;
                return i()(a.a.mark(function e() {
                    var n, s;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!0 !== t.ignoreControls) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return t.ignoreControls = !0, n = [{
                                id: 1,
                                title: t.IntlString("APP_DARKTCHAT_NEW_CHANNEL"),
                                icons: "fa-plus",
                                color: "green"
                            }, {
                                id: 2,
                                title: t.IntlString("APP_DARKTCHAT_DELETE_CHANNEL"),
                                icons: "fa-minus",
                                color: "red"
                            }, {
                                id: 3,
                                title: t.IntlString("APP_DARKTCHAT_CANCEL"),
                                icons: "fa-undo"
                            }], 0 === t.tchatChannels.length && n.splice(1, 1), e.next = 7, l.a.CreateModal({
                                choix: n
                            });
                        case 7:
                            s = e.sent, t.ignoreControls = !1, e.t0 = s.id, e.next = 1 === e.t0 ? 12 : 2 === e.t0 ? 14 : (e.t0, 16);
                            break;
                        case 12:
                            return t.addChannelOption(), e.abrupt("break", 16);
                        case 14:
                            return t.removeChannelOption(), e.abrupt("break", 16);
                        case 16:
                        case "end":
                            return e.stop()
                        }
                    }, e, t)
                }))()
            },
            onEnter: function () {
                var t = this;
                return i()(a.a.mark(function e() {
                    var n, s, o;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!0 !== t.ignoreControls) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            if (0 !== t.tchatChannels.length) {
                                e.next = 12;
                                break
                            }
                            return t.ignoreControls = !0, n = [{
                                id: 1,
                                title: t.IntlString("APP_DARKTCHAT_NEW_CHANNEL"),
                                icons: "fa-plus",
                                color: "green"
                            }, {
                                id: 3,
                                title: t.IntlString("APP_DARKTCHAT_CANCEL"),
                                icons: "fa-undo"
                            }], e.next = 7, l.a.CreateModal({
                                choix: n
                            });
                        case 7:
                            s = e.sent, t.ignoreControls = !1, 1 === s.id && t.addChannelOption(), e.next = 14;
                            break;
                        case 12:
                            o = t.tchatChannels[t.currentSelect].channel, t.showChannel(o);
                        case 14:
                        case "end":
                            return e.stop()
                        }
                    }, e, t)
                }))()
            },
            showChannel: function (t) {
                this.$router.push({
                    name: "tchat.channel.show",
                    params: {
                        channel: t
                    }
                })
            },
            onBack: function () {
                !0 !== this.ignoreControls && this.$router.push({
                    name: "home",
                    params: {
                        ignoreBack: !0
                    }
                })
            },
            addChannelOption: function () {
                var t = this;
                return i()(a.a.mark(function e() {
                    var n, s;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, l.a.CreateTextModal({
                                limit: 20,
                                title: t.IntlString("APP_DARKTCHAT_NEW_CHANNEL")
                            });
                        case 3:
                            n = e.sent, s = (n || {}).text || "", s = s.toLowerCase().replace(/[^a-z]/g, ""), s.length > 0 && (t.currentSelect = 0, t.tchatAddChannel({
                                channel: s
                            })), e.next = 11;
                            break;
                        case 9:
                            e.prev = 9, e.t0 = e.catch(0);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                    }, e, t, [
                        [0, 9]
                    ])
                }))()
            },
            removeChannelOption: function () {
                var t = this;
                return i()(a.a.mark(function e() {
                    var n;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            n = t.tchatChannels[t.currentSelect].channel, t.currentSelect = 0, t.tchatRemoveChannel({
                                channel: n
                            });
                        case 3:
                        case "end":
                            return e.stop()
                        }
                    }, e, t)
                }))()
            }
        }),
        created: function () {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.onBack))
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(4),
        a = n.n(s),
        o = n(3),
        i = n.n(o),
        r = n(1),
        c = n.n(r),
        u = n(2),
        l = n(6),
        p = n.n(l);
    e.default = {
        components: {
            PhoneTitle: p.a
        },
        data: function () {
            return {
                message: "",
                channel: "",
                currentSelect: 0
            }
        },
        computed: c()({}, n.i(u.b)(["tchatMessages", "tchatCurrentChannel", "useMouse"]), {
            channelName: function () {
                return "# " + this.channel
            }
        }),
        watch: {
            tchatMessages: function () {
                var t = this.$refs.elementsDiv;
                t.scrollTop = t.scrollHeight
            }
        },
        methods: c()({
            setChannel: function (t) {
                this.channel = t, this.tchatSetChannel({
                    channel: t
                })
            }
        }, n.i(u.a)(["tchatSetChannel", "tchatSendMessage"]), {
            scrollIntoViewIfNeeded: function () {
                var t = this;
                this.$nextTick(function () {
                    var e = t.$el.querySelector(".select");
                    null !== e && e.scrollIntoViewIfNeeded()
                })
            },
            onUp: function () {
                var t = this.$refs.elementsDiv;
                t.scrollTop = t.scrollTop - 120
            },
            onDown: function () {
                var t = this.$refs.elementsDiv;
                t.scrollTop = t.scrollTop + 120
            },
            onEnter: function () {
                var t = this;
                return i()(a.a.mark(function e() {
                    var n, s;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, t.$phoneAPI.getReponseText({
                                title: "Enter chat message..."
                            });
                        case 2:
                            n = e.sent, void 0 !== n && void 0 !== n.text && (s = n.text.trim(), 0 !== s.length && t.tchatSendMessage({
                                channel: t.channel,
                                message: s
                            }));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                    }, e, t)
                }))()
            },
            sendMessage: function () {
                var t = this.message.trim();
                0 !== t.length && (this.tchatSendMessage({
                    channel: this.channel,
                    message: t
                }), this.message = "")
            },
            onBack: function () {
                !0 === this.useMouse && "BODY" !== document.activeElement.tagName || this.onQuit()
            },
            onQuit: function () {
                this.$router.push({
                    name: "tchat.channel"
                })
            },
            formatTime: function (t) {
                return new Date(t).toLocaleTimeString()
            }
        }),
        created: function () {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.onBack), this.setChannel(this.$route.params.channel)
        },
        mounted: function () {
            window.c = this.$refs.elementsDiv;
            var t = this.$refs.elementsDiv;
            t.scrollTop = t.scrollHeight
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        created: function () {
            var t = this;
            setTimeout(function () {
                t.$router.push({
                    name: "tchat.channel"
                })
            }, 700)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = n.n(s),
        o = n(2);
    e.default = {
        data: function () {
            return {}
        },
        components: {},
        computed: a()({}, n.i(o.b)(["weather"])),
        methods: {},
        created: function () {}
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(30),
        a = n.n(s),
        o = n(1),
        i = n.n(o),
        r = n(2),
        c = n(6),
        u = n.n(c),
        l = n(7);
    e.default = {
        components: {
            PhoneTitle: u.a
        },
        data: function () {
            return {
                id: -1,
                currentSelect: 0,
                ignoreControls: !1,
                contact: {
                    display: "",
                    number: "",
                    id: -1
                }
            }
        },
        computed: i()({}, n.i(r.b)(["IntlString", "contacts", "useMouse"])),
        methods: i()({}, n.i(r.a)(["updateContact", "addContact"]), {
            enterText: function (t) {
                var e = this;
                this.$phoneAPI.getReponseText({
                    text: this.contact[t],
                    title: "display" === t ? "Enter contact name:" : "Enter contact number"
                }).then(function (n) {
                    e.contact[t] = n.text
                })
            },
            onUp: function () {
                if (!0 !== this.ignoreControls) {
                    var t = document.querySelector(".group.select");
                    if (null !== t.previousElementSibling) {
                        document.querySelectorAll(".group").forEach(function (t) {
                            t.classList.remove("select")
                        }), t.previousElementSibling.classList.add("select");
                        var e = t.previousElementSibling.querySelector("input");
                        null !== e && e.focus()
                    }
                }
            },
            onDown: function () {
                if (!0 !== this.ignoreControls) {
                    var t = document.querySelector(".group.select");
                    if (null !== t.nextElementSibling) {
                        document.querySelectorAll(".group").forEach(function (t) {
                            t.classList.remove("select")
                        }), t.nextElementSibling.classList.add("select");
                        var e = t.nextElementSibling.querySelector("input");
                        null !== e && e.focus()
                    }
                }
            },
            onEnter: function () {
                var t = this;
                if (!0 !== this.ignoreControls) {
                    var e = document.querySelector(".group.select");
                    if ("text" === e.dataset.type) {
                        var n = {
                            limit: parseInt(e.dataset.maxlength) || 64,
                            text: this.contact[e.dataset.model] || "",
                            title: "display" === e.dataset.model ? "Enter contact name:" : "Enter contact number"
                        };
                        this.$phoneAPI.getReponseText(n).then(function (n) {
                            t.contact[e.dataset.model] = n.text
                        })
                    }
                    e.dataset.action && this[e.dataset.action] && this[e.dataset.action]()
                }
            },
            save: function () {
                if (-1 === this.id || 0 === this.id) {
                    if (!this.contact.number || "" === this.contact.number.trim() || !this.contact.display || "" === this.contact.display.trim()) return;
                    var t = !0,
                        e = !1,
                        n = void 0;
                    try {
                        for (var s, o = a()(this.contacts); !(t = (s = o.next()).done); t = !0) {
                            var i = s.value;
                            if (i.number === this.contact.number) return this.$phoneAPI.sendGenericError("Cannot add contact. This number is already added as " + i.display)
                        }
                    } catch (t) {
                        e = !0, n = t
                    } finally {
                        try {
                            !t && o.return && o.return()
                        } finally {
                            if (e) throw n
                        }
                    }
                    this.addContact({
                        display: this.contact.display,
                        number: this.contact.number
                    }), history.back()
                } else {
                    if (!this.contact.number || "" === this.contact.number.trim() || !this.contact.display || "" === this.contact.display.trim()) return;
                    var r = !0,
                        c = !1,
                        u = void 0;
                    try {
                        for (var l, p = a()(this.contacts); !(r = (l = p.next()).done); r = !0) {
                            var h = l.value;
                            if (h.number === this.contact.number && h.display === this.contact.display) return this.$phoneAPI.sendGenericError("Cannot save contact. This number is already added as " + h.display)
                        }
                    } catch (t) {
                        c = !0, u = t
                    } finally {
                        try {
                            !r && p.return && p.return()
                        } finally {
                            if (c) throw u
                        }
                    }
                    this.updateContact({
                        id: this.id,
                        display: this.contact.display,
                        number: this.contact.number
                    }), history.back()
                }
            },
            cancel: function () {
                !0 !== this.ignoreControls && (!0 === this.useMouse && "BODY" !== document.activeElement.tagName || history.back())
            },
            forceCancel: function () {
                history.back()
            },
            deleteC: function () {
                var t = this; - 1 !== this.id ? (this.ignoreControls = !0, l.a.CreateModal({
                    choix: [{
                        action: "cancel",
                        title: this.IntlString("CANCEL"),
                        icons: "fa-undo"
                    }, {
                        action: "delete",
                        title: this.IntlString("APP_PHONE_DELETE"),
                        icons: "fa-trash",
                        color: "red"
                    }]
                }).then(function (e) {
                    t.ignoreControls = !1, "delete" === e.action && (t.$phoneAPI.deleteContact(t.id), history.back())
                })) : history.back()
            }
        }),
        created: function () {
            var t = this;
            if (this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.cancel)), this.id = parseInt(this.$route.params.id), this.contact.display = this.IntlString("APP_CONTACT_NEW"), this.contact.number = this.$route.params.number, -1 !== this.id) {
                var e = this.contacts.find(function (e) {
                    return e.id === t.id
                });
                void 0 !== e && (this.contact = {
                    id: e.id,
                    display: e.display,
                    number: e.number
                })
            }
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.cancel)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(11),
        a = n.n(s),
        o = n(1),
        i = n.n(o),
        r = n(2),
        c = n(21),
        u = n.n(c),
        l = n(7);
    e.default = {
        components: {
            List: u.a
        },
        data: function () {
            return {
                disableList: !1
            }
        },
        computed: i()({}, n.i(r.b)(["IntlString", "contacts", "useMouse"]), {
            lcontacts: function () {
                return [{
                    display: this.IntlString("APP_CONTACT_NEW"),
                    letter: "+",
                    num: "",
                    id: -1
                }].concat(a()(this.contacts.filter(function (t) {
                    return !isNaN(parseInt(t.number))
                }).map(function (t) {
                    return t.backgroundColor = "#2c3e50", t
                })))
            }
        }),
        methods: i()({}, n.i(r.a)(["startCall", "blockNumber", "unblockNumber"]), {
            onSelect: function (t) {
                -1 === t.id ? this.$router.push({
                    name: "contacts.view",
                    params: {
                        id: t.id
                    }
                }) : this.$router.push({
                    name: "messages.view",
                    params: {
                        number: t.number,
                        display: t.display
                    }
                })
            },
            onOption: function (t) {
                var e = this; - 1 !== t.id && void 0 !== t.id && (this.disableList = !0, l.a.CreateModal({
                    choix: [{
                        id: 0,
                        title: this.IntlString("APP_PHONE_CALL"),
                        icons: "fa-phone",
                        color: "black"
                    }, {
                        id: 1,
                        title: this.IntlString("APP_CONTACT_EDIT"),
                        icons: "fa-edit",
                        color: "orange"
                    }, {
                        id: 2,
                        title: "Share Contact",
                        icons: "fa-share",
                        color: "orange"
                    }, {
                        id: 3,
                        title: t.blocked ? this.IntlString("APP_PHONE_UNBLOCK") : this.IntlString("APP_PHONE_BLOCK"),
                        icons: "fa-ban",
                        color: "orange"
                    }, {
                        id: 4,
                        title: this.IntlString("CANCEL"),
                        icons: "fa-undo"
                    }]
                }).then(function (n) {
                    0 === n.id ? e.startCall({
                        numero: t.number
                    }) : 1 === n.id ? e.$router.push({
                        path: "contact/" + t.id
                    }) : 2 === n.id ? e.$router.push({
                        path: "contacts/share/" + t.id
                    }) : 3 === n.id && (t.blocked ? e.unblockNumber({
                        phoneNumber: t.number
                    }) : e.blockNumber({
                        phoneNumber: t.number
                    })), e.disableList = !1
                }))
            },
            back: function () {
                !0 !== this.disableList && this.$router.push({
                    name: "home",
                    params: {
                        ignoreBack: !0
                    }
                })
            }
        }),
        created: function () {
            this.$bus.$on("keyUpBackspace", this.back)
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpBackspace", this.back)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(19),
        a = n.n(s),
        o = n(1),
        i = n.n(o),
        r = n(2),
        c = n(21),
        u = n.n(c);
    e.default = {
        components: {
            List: u.a
        },
        data: function () {
            return {
                disableList: !1,
                sharedContact: {}
            }
        },
        methods: i()({}, n.i(r.a)(["sendMessage"]), {
            isSMSImage: function (t) {
                return /^https?:\/\/.*\.(png|jpg|jpeg|gif|webp)/.test(t)
            },
            isSMSGps: function (t) {
                return /(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)/.test(t)
            },
            isContactShare: function (t) {
                return t.includes("Contact: ") && t.includes("From #")
            },
            formatMessage: function (t) {
                return this.isSMSImage(t) ? '<i class="fa fa-camera"></i> Photo' : this.isSMSGps(t) ? '<i class="fa fa-location-arrow"></i> Location' : this.isContactShare(t) ? '<i class="fa fa-user"></i> Contact' : t
            },
            onSelect: function (t) {
                var e = "From #" + this.sharedContact.number + " : Contact: " + this.sharedContact.display;
                this.sendMessage({
                    phoneNumber: t.contact.number,
                    message: e
                }), this.$router.push({
                    name: "messages.view",
                    params: t
                })
            },
            back: function () {
                !0 !== this.disableList && this.$router.push({
                    name: "contacts"
                })
            }
        }),
        computed: i()({}, n.i(r.b)(["IntlString", "useMouse", "contacts", "blocklist", "messages", "config"]), {
            messagesData: function () {
                var t = this,
                    e = this.messages,
                    n = this.contacts,
                    s = e.reduce(function (e, s) {
                        if (void 0 === e[s.transmitter]) {
                            var a = {
                                    noRead: 0,
                                    lastMessage: 0,
                                    display: s.transmitter
                                },
                                o = n.find(function (t) {
                                    return t.number === s.transmitter
                                });
                            a.unknowContact = void 0 === o, a.contact = o, void 0 !== o ? (a.display = o.display, a.background = "linear-gradient(0deg, #858a94, #a2a8b5)", a.letter = o.letter, a.icon = o.icon) : a.background = "linear-gradient(0deg, #858a94, #a2a8b5)", e[s.transmitter] = a
                        }
                        return 0 === s.isRead && (e[s.transmitter].noRead += 1), s.time >= e[s.transmitter].lastMessage && (e[s.transmitter].lastMessage = s.time, e[s.transmitter].keyDesc = t.formatMessage(s.message)), e
                    }, {}),
                    o = [],
                    i = this.config.defaultContacts;
                return a()(s).forEach(function (t) {
                    "Bank" === t || "DeepWeb" === t || i.find(function (e) {
                        return e.number === t
                    }) || o.push({
                        display: s[t].display,
                        puce: s[t].noRead ? " " : s[t].noRead,
                        number: t,
                        lastMessage: s[t].lastMessage,
                        keyDesc: s[t].keyDesc,
                        background: s[t].background,
                        icon: s[t].icon,
                        letter: s[t].letter,
                        unknowContact: s[t].unknowContact,
                        time: s[t].lastMessage,
                        contact: s[t].contact
                    })
                }), o.sort(function (t, e) {
                    return e.lastMessage - t.lastMessage
                }), o
            }
        }),
        created: function () {
            var t = this;
            if (this.sharedContact.id = parseInt(this.$route.params.id), -1 !== this.sharedContact.id) {
                var e = this.contacts.find(function (e) {
                    return e.id === t.sharedContact.id
                });
                void 0 !== e && (this.sharedContact = {
                    id: e.id,
                    display: e.display,
                    number: e.number
                })
            }
            this.$bus.$on("keyUpBackspace", this.back)
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpBackspace", this.back)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(11),
        a = n.n(s),
        o = n(1),
        i = n.n(o),
        r = n(21),
        c = n.n(r),
        u = n(2),
        l = n(7);
    e.default = {
        components: {
            List: c.a
        },
        data: function () {
            return {}
        },
        computed: i()({}, n.i(u.b)(["IntlString", "contacts", "useMouse"]), {
            lcontacts: function () {
                return [{
                    display: this.IntlString("APP_MESSAGE_CONTRACT_ENTER_NUMBER"),
                    letter: "+",
                    backgroundColor: "orange",
                    num: -1
                }].concat(a()(this.contacts.filter(function (t) {
                    return parseInt(t.number)
                })))
            }
        }),
        methods: {
            onSelect: function (t) {
                var e = this; - 1 === t.num ? l.a.CreateTextModal({
                    title: this.IntlString("APP_PHONE_ENTER_NUMBER"),
                    limit: 11
                }).then(function (t) {
                    var n = t.text.trim();
                    "" !== n && e.$router.push({
                        name: "messages.view",
                        params: {
                            number: n,
                            display: n
                        }
                    })
                }) : this.$router.push({
                    name: "messages.view",
                    params: t
                })
            },
            back: function () {
                history.back()
            }
        },
        created: function () {
            this.$bus.$on("keyUpBackspace", this.back)
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpBackspace", this.back)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(4),
        a = n.n(s),
        o = n(11),
        i = n.n(o),
        r = n(3),
        c = n.n(r),
        u = n(1),
        l = n.n(u),
        p = n(2),
        h = n(50),
        f = n(6),
        d = n.n(f),
        m = n(7);
    e.default = {
        data: function () {
            return {
                ignoreControls: !1,
                selectMessage: -1,
                display: "",
                phoneNumber: "",
                imgZoom: void 0,
                message: ""
            }
        },
        components: {
            PhoneTitle: d.a
        },
        methods: l()({}, n.i(p.a)(["setMessageRead", "sendMessage", "deleteMessage", "startCall"]), {
            sendText: function () {
                var t = this;
                this.$phoneAPI.getReponseText({
                    title: "Enter text message..."
                }).then(function (e) {
                    var n = e.text.trim();
                    "" !== n && t.sendMessage({
                        phoneNumber: t.phoneNumber,
                        message: n
                    })
                })
            },
            resetScroll: function () {
                var t = this;
                this.$nextTick(function () {
                    var e = document.querySelector("#sms_list");
                    e.scrollTop = e.scrollHeight, t.selectMessage = -1
                })
            },
            eligable: function () {
                return "Bank" !== this.phoneNumber && "DeepWeb" !== this.phoneNumber
            },
            scrollIntoViewIfNeeded: function () {
                var t = this;
                this.$nextTick(function () {
                    var e = t.$el.querySelector(".select");
                    null !== e && e.scrollIntoViewIfNeeded()
                })
            },
            quit: function () {
                this.$router.push({
                    path: "/messages"
                })
            },
            onUp: function () {
                !0 !== this.ignoreControls && (-1 === this.selectMessage ? this.selectMessage = this.messagesList.length - 1 : this.selectMessage = 0 === this.selectMessage ? 0 : this.selectMessage - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function () {
                !0 !== this.ignoreControls && (-1 === this.selectMessage ? this.selectMessage = this.messagesList.length - 1 : this.selectMessage = this.selectMessage === this.messagesList.length - 1 ? this.selectMessage : this.selectMessage + 1, this.scrollIntoViewIfNeeded())
            },
            onEnter: function () {
                var t = this;
                if (!0 !== this.ignoreControls)
                    if (-1 !== this.selectMessage) this.onActionMessage(this.messagesList[this.selectMessage]);
                    else {
                        if (!this.eligable()) return;
                        this.$phoneAPI.getReponseText({
                            title: "Enter text message..."
                        }).then(function (e) {
                            var n = e.text.trim();
                            "" !== n && t.sendMessage({
                                phoneNumber: t.phoneNumber,
                                message: n
                            })
                        })
                    }
            },
            send: function () {
                if (this.eligable()) {
                    var t = this.message.trim();
                    "" !== t && (this.message = "", this.sendMessage({
                        phoneNumber: this.phoneNumber,
                        message: t
                    }))
                }
            },
            wrapFromNumber: function (t) {
                return t.message.replace(/From #([0-9]+) : /g, "")
            },
            isSMSImage: function (t) {
                return /https?:\/\/.*\.(png|jpg|jpeg|gif|webp)/.test(t.message)
            },
            isSMSContact: function (t) {
                return t.message.includes("Contact: ") && t.message.includes("From #")
            },
            isSMSGps: function (t) {
                return /(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)/.test(t.message)
            },
            hasNumber: function (t) {
                return /#([0-9]+)/.test(t.message)
            },
            onActionMessage: function (t) {
                var e = this;
                return c()(a.a.mark(function n() {
                    var s, o, r, c, u, l, p;
                    return a.a.wrap(function (n) {
                        for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.prev = 0, s = /(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)/.test(t.message), o = /#([0-9]+)/.test(t.message), r = e.isSMSImage(t), c = [{
                                id: -1,
                                title: e.IntlString("CANCEL"),
                                icons: "fa-undo"
                            }], !0 === e.eligable() && (c = [{
                                id: "delete",
                                title: e.IntlString("APP_MESSAGE_DELETE"),
                                icons: "fa-trash"
                            }].concat(i()(c))), !0 === s && (c = [{
                                id: "gps",
                                title: e.IntlString("APP_MESSAGE_SET_GPS"),
                                icons: "fa-location-arrow"
                            }].concat(i()(c))), !0 === o && (u = t.message.match(/#([0-9-]*)/)[1], c = [{
                                id: "num",
                                title: e.IntlString("APP_MESSAGE_MESS_NUMBER") + " " + u,
                                number: u,
                                icons: "fa-info"
                            }].concat(i()(c))), !0 === r && (c = [{
                                id: "zoom",
                                title: e.IntlString("APP_MESSAGE_ZOOM_IMG"),
                                icons: "fa-search"
                            }].concat(i()(c))), e.ignoreControls = !0, n.next = 12, m.a.CreateModal({
                                choix: c
                            });
                        case 12:
                            l = n.sent, "delete" === l.id ? e.deleteMessage({
                                id: t.id
                            }) : "gps" === l.id ? (p = t.message.match(/(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)/), e.$phoneAPI.setGPS(p[1], p[3])) : "num" === l.id ? e.$nextTick(function () {
                                e.onSelectPhoneNumber(l.number)
                            }) : "zoom" === l.id && (e.imgZoom = t.message), n.next = 18;
                            break;
                        case 16:
                            n.prev = 16, n.t0 = n.catch(0);
                        case 18:
                            return n.prev = 18, e.ignoreControls = !1, e.selectMessage = -1, n.finish(18);
                        case 22:
                        case "end":
                            return n.stop()
                        }
                    }, n, e, [
                        [0, 16, 18, 22]
                    ])
                }))()
            },
            onSelectPhoneNumber: function (t) {
                var e = this;
                return c()(a.a.mark(function n() {
                    var s, o, i;
                    return a.a.wrap(function (n) {
                        for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.prev = 0, e.ignoreControls = !0, s = [{
                                id: "sms",
                                title: e.IntlString("APP_MESSAGE_MESS_SMS"),
                                icons: "fa-comment"
                            }, {
                                id: "call",
                                title: e.IntlString("APP_MESSAGE_MESS_CALL"),
                                icons: "fa-phone"
                            }], s.push({
                                id: "copy",
                                title: e.IntlString("APP_MESSAGE_MESS_COPY"),
                                icons: "fa-copy"
                            }), s.push({
                                id: -1,
                                title: e.IntlString("CANCEL"),
                                icons: "fa-undo"
                            }), n.next = 7, m.a.CreateModal({
                                choix: s
                            });
                        case 7:
                            if (o = n.sent, "sms" !== o.id) {
                                n.next = 13;
                                break
                            }
                            e.phoneNumber = t, e.display = void 0, n.next = 31;
                            break;
                        case 13:
                            if ("call" !== o.id) {
                                n.next = 17;
                                break
                            }
                            e.startCall({
                                numero: t
                            }), n.next = 31;
                            break;
                        case 17:
                            if ("copy" !== o.id) {
                                n.next = 31;
                                break
                            }
                            return n.prev = 18, i = e.$refs.copyTextarea, i.value = t, i.style.height = "20px", i.focus(), i.select(), n.next = 26, document.execCommand("copy");
                        case 26:
                            i.style.height = "0", n.next = 31;
                            break;
                        case 29:
                            n.prev = 29, n.t0 = n.catch(18);
                        case 31:
                            n.next = 35;
                            break;
                        case 33:
                            n.prev = 33, n.t1 = n.catch(0);
                        case 35:
                            return n.prev = 35, e.ignoreControls = !1, e.selectMessage = -1, n.finish(35);
                        case 39:
                        case "end":
                            return n.stop()
                        }
                    }, n, e, [
                        [0, 33, 35, 39],
                        [18, 29]
                    ])
                }))()
            },
            onBackspace: function () {
                if (void 0 !== this.imgZoom) return void(this.imgZoom = void 0);
                !0 !== this.ignoreControls && (!0 === this.useMouse && "BODY" !== document.activeElement.tagName || (-1 !== this.selectMessage ? this.selectMessage = -1 : this.quit()))
            },
            showOptions: function () {
                var t = this;
                return c()(a.a.mark(function e() {
                    var n, s, o, i, r;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (t.eligable()) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return e.prev = 2, t.ignoreControls = !0, n = [{
                                id: 1,
                                title: t.IntlString("APP_MESSAGE_SEND_GPS"),
                                icons: "fa-location-arrow"
                            }], t.enableTakePhoto && n.push({
                                id: 2,
                                title: t.IntlString("APP_MESSAGE_SEND_PHOTO"),
                                icons: "fa-camera"
                            }), parseInt(t.phoneNumber) && n.push({
                                id: 4,
                                title: t.IntlString("APP_PHONE_CALL"),
                                icons: "fa-phone"
                            }), n.push({
                                id: -1,
                                title: t.IntlString("CANCEL"),
                                icons: "fa-undo"
                            }), e.next = 10, m.a.CreateModal({
                                choix: n
                            });
                        case 10:
                            if (s = e.sent, 1 === s.id && t.sendMessage({
                                    phoneNumber: t.phoneNumber,
                                    message: "%pos%"
                                }), 2 !== s.id) {
                                e.next = 18;
                                break
                            }
                            return e.next = 15, t.$phoneAPI.takePhoto();
                        case 15:
                            o = e.sent, i = o.url, null !== i && void 0 !== i && (t.$router.push({
                                name: "messages.view",
                                params: {
                                    number: t.phoneNumber,
                                    display: t.display
                                }
                            }), t.sendMessage({
                                phoneNumber: t.phoneNumber,
                                message: i
                            }));
                        case 18:
                            if (3 !== s.id) {
                                e.next = 23;
                                break
                            }
                            return e.next = 21, m.a.CreateModal({
                                choix: [{
                                    id: 6e4,
                                    title: t.IntlString("APP_MESSAGE_SEND_GPS_REALTIME_TIME_1")
                                }, {
                                    id: 3e5,
                                    title: t.IntlString("APP_MESSAGE_SEND_GPS_REALTIME_TIME_2")
                                }, {
                                    id: 6e5,
                                    title: t.IntlString("APP_MESSAGE_SEND_GPS_REALTIME_TIME_3")
                                }]
                            });
                        case 21:
                            r = e.sent, r.id > 0 && t.sendMessage({
                                phoneNumber: t.phoneNumber,
                                message: "%posrealtime%",
                                gpsData: {
                                    time: r.id || 1e4
                                }
                            });
                        case 23:
                            4 === s.id && t.startCall({
                                numero: t.phoneNumber
                            }), t.ignoreControls = !1, e.next = 29;
                            break;
                        case 27:
                            e.prev = 27, e.t0 = e.catch(2);
                        case 29:
                            return e.prev = 29, t.ignoreControls = !1, e.finish(29);
                        case 32:
                        case "end":
                            return e.stop()
                        }
                    }, e, t, [
                        [2, 27, 29, 32]
                    ])
                }))()
            },
            onRight: function () {
                !0 !== this.ignoreControls && -1 === this.selectMessage && this.showOptions()
            }
        }),
        computed: l()({}, n.i(p.b)(["IntlString", "messages", "contacts", "useMouse", "enableTakePhoto", "tempoHide"]), {
            messagesList: function () {
                var t = this;
                return this.messages.filter(function (e) {
                    return e.transmitter === t.phoneNumber
                }).sort(function (t, e) {
                    return t.time - e.time
                })
            },
            displayContact: function () {
                var t = this;
                if (void 0 !== this.display) return "" + this.display;
                var e = this.contacts.find(function (e) {
                    return e.number === t.phoneNumber
                });
                return void 0 !== e ? e.display : this.phoneNumber
            },
            color: function () {
                return n.i(h.b)(this.phoneNumber)
            },
            colorSmsOwner: function () {
                return [{
                    backgroundColor: this.color,
                    color: n.i(h.c)(this.color)
                }, {}]
            }
        }),
        watch: {
            messagesList: function () {
                this.setMessageRead(this.phoneNumber), this.resetScroll()
            }
        },
        created: function () {
            this.display = this.$route.params.display, this.phoneNumber = this.$route.params.number, this.useMouse || (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpArrowRight", this.onRight)), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.onBackspace)
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpBackspace", this.onBackspace)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(19),
        a = n.n(s),
        o = n(1),
        i = n.n(o),
        r = n(2),
        c = n(7),
        u = n(21),
        l = n.n(u);
    e.default = {
        components: {
            List: l.a
        },
        data: function () {
            return {
                disableList: !1
            }
        },
        methods: i()({}, n.i(r.a)(["deleteMessagesNumber", "blockNumber", "unblockNumber", "deleteAllMessages", "startCall"]), {
            isSMSImage: function (t) {
                return /^https?:\/\/.*\.(png|jpg|jpeg|gif|webp)/.test(t)
            },
            isSMSGps: function (t) {
                return /(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)/.test(t)
            },
            isContactShare: function (t) {
                return t.includes("Contact: ") && t.includes("From #")
            },
            wrapFromNumber: function (t) {
                return t.replace(/From #([0-9]+) : /g, "")
            },
            formatMessage: function (t) {
                return this.isSMSImage(t) ? '<i class="fa fa-camera"></i> Photo' : this.isSMSGps(t) ? '<i class="fa fa-location-arrow"></i> Location' : this.isContactShare(t) ? '<i class="fa fa-user"></i> Contact' : this.wrapFromNumber(t)
            },
            onSelect: function (t) {
                -1 === t.id ? this.$router.push({
                    name: "messages.selectcontact"
                }) : this.$router.push({
                    name: "messages.view",
                    params: t
                })
            },
            onOption: function (t) {
                var e = this;
                if (void 0 !== t.number) {
                    this.disableList = !0;
                    var n = !(t.contact && t.contact.blocked) && void 0 === this.blocklist[t.number];
                    c.a.CreateModal({
                        choix: [].concat(parseInt(t.number) ? [{
                            id: 4,
                            title: this.IntlString("APP_PHONE_CALL"),
                            icons: "fa-phone"
                        }] : []).concat(t.unknowContact ? [{
                            id: 7,
                            title: this.IntlString("APP_MESSAGE_SAVE_CONTACT"),
                            icons: "fa-plus"
                        }] : []).concat(parseInt(t.number) ? [{
                            id: 8,
                            title: n ? this.IntlString("APP_PHONE_BLOCK") : this.IntlString("APP_PHONE_UNBLOCK"),
                            icons: "fa-ban"
                        }] : []).concat([{
                            id: 1,
                            title: this.IntlString("APP_MESSAGE_ERASE_CONVERSATION"),
                            icons: "fa-trash",
                            color: "orange"
                        }, {
                            id: 2,
                            title: this.IntlString("APP_MESSAGE_ERASE_ALL_CONVERSATIONS"),
                            icons: "fa-trash",
                            color: "red"
                        }]).concat([{
                            id: 3,
                            title: this.IntlString("CANCEL"),
                            icons: "fa-undo"
                        }])
                    }).then(function (s) {
                        1 === s.id ? e.deleteMessagesNumber({
                            num: t.number
                        }) : 2 === s.id ? e.deleteAllMessages() : 4 === s.id ? e.startCall({
                            numero: t.number
                        }) : 5 === s.id ? e.startCall({
                            numero: "#" + t.number
                        }) : 6 === s.id ? e.$router.push({
                            name: "messages.view",
                            params: t
                        }) : 7 === s.id ? e.$router.push({
                            name: "contacts.view",
                            params: {
                                id: 0,
                                number: t.number
                            }
                        }) : 8 === s.id && (n ? e.blockNumber({
                            phoneNumber: t.number
                        }) : e.unblockNumber({
                            phoneNumber: t.number
                        })), e.disableList = !1
                    })
                }
            },
            back: function () {
                !0 !== this.disableList && this.$router.push({
                    name: "home",
                    params: {
                        ignoreBack: !0
                    }
                })
            }
        }),
        computed: i()({}, n.i(r.b)(["IntlString", "useMouse", "contacts", "blocklist", "messages"]), {
            messagesData: function () {
                var t = this,
                    e = this.messages,
                    n = this.contacts,
                    s = e.reduce(function (e, s) {
                        if (void 0 === e[s.transmitter]) {
                            var a = {
                                    noRead: 0,
                                    lastMessage: 0,
                                    display: s.transmitter
                                },
                                o = n.find(function (t) {
                                    return t.number === s.transmitter
                                });
                            a.unknowContact = void 0 === o, a.contact = o, void 0 !== o ? (a.display = o.display, a.background = "linear-gradient(0deg, #858a94, #a2a8b5)", a.letter = o.letter, a.icon = o.icon) : a.background = "linear-gradient(0deg, #858a94, #a2a8b5)", e[s.transmitter] = a
                        }
                        return 0 === s.isRead && (e[s.transmitter].noRead += 1), s.time >= e[s.transmitter].lastMessage && (e[s.transmitter].lastMessage = s.time, e[s.transmitter].keyDesc = t.formatMessage(s.message)), e
                    }, {}),
                    o = [];
                return a()(s).forEach(function (t) {
                    o.push({
                        display: s[t].display,
                        puce: s[t].noRead ? " " : s[t].noRead,
                        number: t,
                        lastMessage: s[t].lastMessage,
                        keyDesc: s[t].keyDesc,
                        background: s[t].background,
                        icon: s[t].icon,
                        letter: s[t].letter,
                        unknowContact: s[t].unknowContact,
                        time: s[t].lastMessage,
                        contact: s[t].contact
                    })
                }), o.sort(function (t, e) {
                    return e.lastMessage - t.lastMessage
                }), [this.newMessageOption].concat(o)
            },
            newMessageOption: function () {
                return {
                    background: "#2542",
                    display: this.IntlString("APP_MESSAGE_NEW_MESSAGE"),
                    letter: "+",
                    id: -1
                }
            }
        }),
        created: function () {
            this.$bus.$on("keyUpBackspace", this.back)
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpBackspace", this.back)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(4),
        a = n.n(s),
        o = n(3),
        i = n.n(o),
        r = n(19),
        c = n.n(r),
        u = n(1),
        l = n.n(u),
        p = n(2),
        h = n(6),
        f = n.n(h),
        d = n(7);
    e.default = {
        components: {
            PhoneTitle: f.a
        },
        data: function () {
            return {
                ignoreControls: !1,
                currentSelect: 0,
                tryingRingtone: !1
            }
        },
        computed: l()({}, n.i(p.b)(["IntlString", "useMouse", "myPhoneNumber", "backgroundLabel", "coqueLabel", "sonidoLabel", "zoom", "config", "volume", "availableLanguages", "blocklist", "contacts"]), {
            paramList: function () {
                var t = this.IntlString("CANCEL"),
                    e = this.IntlString("APP_CONFIG_RESET_CONFIRM"),
                    n = {},
                    s = {};
                return n[t] = "cancel", s[e] = "accept", [{
                    icons: "fa-broadcast-tower",
                    color: "#4fd162",
                    title: this.IntlString("APP_CONFIG_MY_MUNBER"),
                    value: this.myPhoneNumber
                }, {
                    icons: "fa-user-slash",
                    color: "#ff3a30",
                    title: this.IntlString("APP_CONFIG_BLOCKLIST"),
                    value: "Click to unblock",
                    onValid: "onUnblockNumber",
                    values: this.blocklist
                }, {
                    icons: "far fa-atom",
                    color: "#30a9da",
                    title: this.IntlString("APP_CONFIG_WALLPAPER"),
                    value: this.backgroundLabel,
                    onValid: "onChangeBackground",
                    values: this.config.background
                }, {
                    icons: "fa-mobile",
                    color: "#006ff7",
                    title: this.IntlString("APP_CONFIG_CASE"),
                    value: this.coqueLabel,
                    onValid: "onChangeCoque",
                    values: this.config.coque
                }, {
                    icons: "fa-bell",
                    color: "#f08a00",
                    title: this.IntlString("APP_CONFIG_SOUND"),
                    value: this.sonidoLabel,
                    onValid: "onChangeSonido",
                    values: this.config.sonido
                }, {
                    icons: "fa-search",
                    color: "#8e8e93",
                    title: this.IntlString("APP_CONFIG_ZOOM"),
                    value: this.zoom,
                    onValid: "setZoom",
                    onLeft: this.ajustZoom(-1),
                    onRight: this.ajustZoom(1),
                    values: {
                        "110 %": "110%",
                        "100 %": "100%",
                        "90 %": "90%",
                        "85 %": "85%",
                        "80 %": "80%",
                        "70 %": "70%",
                        "60 %": "60%",
                        "50 %": "50%",
                        "40 %": "40%",
                        "20 %": "20%"
                    }
                }, {
                    icons: "fa-volume-up",
                    color: "#ff2c55",
                    title: this.IntlString("APP_CONFIG_VOLUME"),
                    value: this.valumeDisplay,
                    onValid: "setPhoneVolume",
                    onLeft: this.ajustVolume(-.01),
                    onRight: this.ajustVolume(.01),
                    values: {
                        "100 %": 1,
                        "80 %": .8,
                        "60 %": .6,
                        "40 %": .4,
                        "20 %": .2,
                        "0 %": 0
                    }
                }, {
                    icons: "fa-globe-americas",
                    color: "#5854d6",
                    title: this.IntlString("APP_CONFIG_LANGUAGE"),
                    onValid: "onChangeLanguages",
                    values: l()({}, this.availableLanguages, n)
                }, {
                    icons: "fa-mouse-pointer",
                    title: this.IntlString("APP_CONFIG_MOUSE_SUPPORT"),
                    color: "#3e3e3e",
                    onValid: "onChangeMouseSupport",
                    values: l()({
                        Yes: !0,
                        No: !1
                    }, n)
                }, {
                    icons: "fa-exclamation-triangle",
                    color: "#cd0000",
                    title: this.IntlString("APP_CONFIG_RESET"),
                    onValid: "resetPhone",
                    values: l()({}, s, n)
                }]
            },
            valumeDisplay: function () {
                return Math.floor(100 * this.volume) + " %"
            }
        }),
        methods: l()({}, n.i(p.a)(["getIntlString", "setZoon", "setBackground", "setCoque", "setSonido", "setVolume", "setLanguage", "unblockNumber", "setMouseSupport"]), {
            scrollIntoViewIfNeeded: function () {
                this.$nextTick(function () {
                    document.querySelector(".select").scrollIntoViewIfNeeded()
                })
            },
            onBackspace: function () {
                !0 !== this.ignoreControls && (this.tryingRingtone && this.$phoneAPI.onstopSound({
                    sound: this.tryingRingtone
                }), this.$router.push({
                    name: "home",
                    params: {
                        ignoreBack: !0
                    }
                }))
            },
            onUp: function () {
                !0 !== this.ignoreControls && (this.currentSelect = 0 === this.currentSelect ? 0 : this.currentSelect - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function () {
                !0 !== this.ignoreControls && (this.currentSelect = this.currentSelect === this.paramList.length - 1 ? this.currentSelect : this.currentSelect + 1, this.scrollIntoViewIfNeeded())
            },
            onRight: function () {
                if (!0 !== this.ignoreControls) {
                    var t = this.paramList[this.currentSelect];
                    void 0 !== t.onRight && t.onRight(t)
                }
            },
            onLeft: function () {
                if (!0 !== this.ignoreControls) {
                    var t = this.paramList[this.currentSelect];
                    void 0 !== t.onLeft && t.onLeft(t)
                }
            },
            actionItem: function (t) {
                var e = this;
                if (void 0 !== t.values) {
                    this.ignoreControls = !0;
                    var n = c()(t.values).map(function (e) {
                        return {
                            title: e,
                            value: t.values[e],
                            picto: t.values[e]
                        }
                    });
                    d.a.CreateModal({
                        choix: n
                    }).then(function (n) {
                        e.ignoreControls = !1, "cancel" !== n.title && e[t.onValid](t, n)
                    })
                }
            },
            onPressItem: function (t) {
                this.actionItem(this.paramList[t])
            },
            onEnter: function () {
                !0 !== this.ignoreControls && this.actionItem(this.paramList[this.currentSelect])
            },
            onChangeBackground: function (t, e) {
                var n = this;
                return i()(a.a.mark(function t() {
                    var s;
                    return a.a.wrap(function (t) {
                        for (;;) switch (t.prev = t.next) {
                        case 0:
                            s = e.value, "URL" === s ? (n.ignoreControls = !0, d.a.CreateTextModal({
                                text: "https://i.imgur.com/"
                            }).then(function (t) {
                                "" !== t.text && void 0 !== t.text && null !== t.text && "https://i.imgur.com/" !== t.text && n.setBackground({
                                    label: "Custom",
                                    value: t.text
                                })
                            }).finally(function () {
                                n.ignoreControls = !1
                            })) : n.setBackground({
                                label: e.title,
                                value: e.value
                            });
                        case 2:
                        case "end":
                            return t.stop()
                        }
                    }, t, n)
                }))()
            },
            onChangeCoque: function (t, e) {
                this.setCoque({
                    label: e.title,
                    value: e.value
                })
            },
            onUnblockNumber: function (t, e) {
                "cancel" !== e.value && this.unblockNumber({
                    phoneNumber: e.value
                })
            },
            onChangeSonido: function (t, e) {
                this.setSonido({
                    label: e.title,
                    value: e.value
                }), this.tryingRingtone && (this.$phoneAPI.onstopSound({
                    sound: this.tryingRingtone
                }), this.tryingRingtone = !1), this.$phoneAPI.onshowNotificaiton({
                    title: "Trying on ringtone",
                    message: e.value,
                    icon: "phone"
                }), this.$phoneAPI.onplaySound({
                    sound: e.value,
                    volume: this.volume
                }), this.tryingRingtone = e.value
            },
            setZoom: function (t, e) {
                this.setZoon(e.value)
            },
            ajustZoom: function (t) {
                var e = this;
                return function () {
                    var n = Math.max(10, (parseInt(e.zoom) || 100) + t);
                    e.setZoon(n + "%")
                }
            },
            setPhoneVolume: function (t, e) {
                this.setVolume(e.value)
            },
            ajustVolume: function (t) {
                var e = this;
                return function () {
                    var n = Math.max(0, Math.min(1, parseFloat(e.volume) + t));
                    e.setVolume(n)
                }
            },
            onChangeLanguages: function (t, e) {
                "cancel" !== e.value && this.setLanguage(e.value)
            },
            onChangeMouseSupport: function (t, e) {
                var n = this;
                return i()(a.a.mark(function t() {
                    return a.a.wrap(function (t) {
                        for (;;) switch (t.prev = t.next) {
                        case 0:
                            if ("cancel" === e.value) {
                                t.next = 4;
                                break
                            }
                            return t.next = 3, n.setMouseSupport(e.value);
                        case 3:
                            n.onBackspace();
                        case 4:
                        case "end":
                            return t.stop()
                        }
                    }, t, n)
                }))()
            },
            resetPhone: function (t, e) {
                var n = this;
                if ("cancel" !== e.value) {
                    this.ignoreControls = !0;
                    var s = this.IntlString("CANCEL"),
                        a = [{
                            title: s,
                            icons: "fa fa-undo"
                        }, {
                            title: "Are you sure?",
                            icons: "fa fa-trash",
                            color: "red",
                            reset: !0
                        }];
                    d.a.CreateModal({
                        choix: a
                    }).then(function (t) {
                        n.ignoreControls = !1, !0 === t.reset && n.$phoneAPI.deleteALL()
                    })
                }
            }
        }),
        created: function () {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp)), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.onBackspace)
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBackspace)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(4),
        a = n.n(s),
        o = n(3),
        i = n.n(o),
        r = n(1),
        c = n.n(r),
        u = n(131),
        l = n.n(u),
        p = n(2),
        h = n(7),
        f = l()({
            MENU: 0,
            NEW_ACCOUNT: 1,
            LOGIN: 2,
            ACCOUNT: 3,
            NOTIFICATION: 4
        });
    e.default = {
        components: {},
        data: function () {
            return {
                STATES: f,
                state: f.MENU,
                localAccount: {
                    username: "",
                    password: "",
                    passwordConfirm: "",
                    avatarUrl: "/html/static/img/twitter/default_profile.png"
                },
                notification: 0,
                notificationSound: !1
            }
        },
        computed: c()({}, n.i(p.b)(["IntlString", "useMouse", "twitterUsername", "twitterPassword", "twitterAvatarUrl", "twitterNotification", "twitterNotificationSound"]), {
            isLogin: function () {
                return void 0 !== this.twitterUsername && "" !== this.twitterUsername
            },
            validAccount: function () {
                return this.localAccount.username.length >= 4 && this.localAccount.password.length >= 6 && this.localAccount.password === this.localAccount.passwordConfirm
            }
        }),
        methods: c()({}, n.i(p.a)(["twitterLogin", "twitterChangePassword", "twitterLogout", "twitterSetAvatar", "twitterCreateNewAccount", "setTwitterNotification", "setTwitterNotificationSound"]), {
            onUp: function () {
                if (!0 !== this.ignoreControls) {
                    var t = document.querySelector(".group.select");
                    if (null === t) return t = document.querySelector(".group"), void t.classList.add("select");
                    for (; null !== t.previousElementSibling && !t.previousElementSibling.classList.contains("group");) t = t.previousElementSibling;
                    if (null !== t.previousElementSibling) {
                        document.querySelectorAll(".group").forEach(function (t) {
                            t.classList.remove("select")
                        }), t.previousElementSibling.classList.add("select");
                        var e = t.previousElementSibling.querySelector("input");
                        null !== e && e.focus()
                    }
                }
            },
            onDown: function () {
                if (!0 !== this.ignoreControls) {
                    var t = document.querySelector(".group.select");
                    if (null === t) return t = document.querySelector(".group"), void t.classList.add("select");
                    for (; null !== t.nextElementSibling && !t.nextElementSibling.classList.contains("group");) t = t.nextElementSibling;
                    if (null !== t.nextElementSibling) {
                        document.querySelectorAll(".group").forEach(function (t) {
                            t.classList.remove("select")
                        }), t.nextElementSibling.classList.add("select");
                        var e = t.nextElementSibling.querySelector("input");
                        null !== e && e.focus()
                    }
                }
            },
            onEnter: function () {
                if (!0 !== this.ignoreControls) {
                    var t = document.querySelector(".group.select");
                    if (null !== t && null !== t.dataset) {
                        if ("text" === t.dataset.type) {
                            var e = t.querySelector("input"),
                                n = {
                                    limit: parseInt(t.dataset.maxlength) || 64,
                                    text: t.dataset.defaultValue || "",
                                    title: "Enter " + t.dataset.model
                                };
                            this.$phoneAPI.getReponseText(n).then(function (t) {
                                e.value = t.text, e.dispatchEvent(new window.Event("change"))
                            })
                        }
                        "button" === t.dataset.type && t.click()
                    }
                }
            },
            onBack: function () {
                this.state !== this.STATES.MENU ? this.state = this.STATES.MENU : this.$bus.$emit("twitterHome")
            },
            setLocalAccount: function (t, e) {
                this.localAccount[e] = t.target.value
            },
            setLocalAccountAvartarTake: function (t) {
                var e = this;
                return i()(a.a.mark(function t() {
                    var n, s;
                    return a.a.wrap(function (t) {
                        for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, e.$phoneAPI.takePhoto();
                        case 3:
                            n = t.sent, s = n.url, null !== s && void 0 !== s && (e.localAccount.avatarUrl = s), t.next = 10;
                            break;
                        case 8:
                            t.prev = 8, t.t0 = t.catch(0);
                        case 10:
                        case "end":
                            return t.stop()
                        }
                    }, t, e, [
                        [0, 8]
                    ])
                }))()
            },
            setLocalAccountAvartar: function (t) {
                var e = this;
                return i()(a.a.mark(function t() {
                    var n;
                    return a.a.wrap(function (t) {
                        for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, h.a.CreateTextModal({
                                text: e.twitterAvatarUrl || "https://i.imgur.com/"
                            });
                        case 3:
                            n = t.sent, e.localAccount.avatarUrl = n.text, t.next = 9;
                            break;
                        case 7:
                            t.prev = 7, t.t0 = t.catch(0);
                        case 9:
                        case "end":
                            return t.stop()
                        }
                    }, t, e, [
                        [0, 7]
                    ])
                }))()
            },
            onPressChangeAvartartake: function () {
                var t = this;
                return i()(a.a.mark(function e() {
                    var n, s;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, t.$phoneAPI.takePhoto();
                        case 3:
                            n = e.sent, s = n.url, null !== s && void 0 !== s && t.twitterSetAvatar({
                                avatarUrl: s
                            }), e.next = 10;
                            break;
                        case 8:
                            e.prev = 8, e.t0 = e.catch(0);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                    }, e, t, [
                        [0, 8]
                    ])
                }))()
            },
            onPressChangeAvartar: function () {
                var t = this;
                return i()(a.a.mark(function e() {
                    var n;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, h.a.CreateTextModal({
                                text: t.twitterAvatarUrl || "https://i.imgur.com/"
                            });
                        case 3:
                            n = e.sent, t.twitterSetAvatar({
                                avatarUrl: n.text
                            }), e.next = 9;
                            break;
                        case 7:
                            e.prev = 7, e.t0 = e.catch(0);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                    }, e, t, [
                        [0, 7]
                    ])
                }))()
            },
            login: function () {
                this.twitterLogin({
                    username: this.localAccount.username,
                    password: this.localAccount.password
                }), this.state = f.MENU
            },
            logout: function () {
                this.twitterLogout()
            },
            createAccount: function () {
                !0 === this.validAccount && (this.twitterCreateNewAccount(this.localAccount), this.localAccount = {
                    username: "",
                    password: "",
                    passwordConfirm: "",
                    avatarUrl: null
                }, this.state = this.STATES.MENU)
            },
            cancel: function () {
                this.state = f.MENU
            },
            setNotification: function (t) {
                this.setTwitterNotification(t)
            },
            setNotificationSound: function (t) {
                this.setTwitterNotificationSound(t)
            },
            changePassword: function (t) {
                var e = this;
                return i()(a.a.mark(function t() {
                    var n, s;
                    return a.a.wrap(function (t) {
                        for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, h.a.CreateTextModal({
                                limit: 30
                            });
                        case 3:
                            if (n = t.sent, "" !== n.text) {
                                t.next = 6;
                                break
                            }
                            return t.abrupt("return");
                        case 6:
                            return t.next = 8, h.a.CreateTextModal({
                                limit: 30
                            });
                        case 8:
                            if (s = t.sent, "" !== s.text) {
                                t.next = 11;
                                break
                            }
                            return t.abrupt("return");
                        case 11:
                            if (s.text === n.text) {
                                t.next = 16;
                                break
                            }
                            return e.$notify({
                                title: e.IntlString("APP_TWITTER_NAME"),
                                message: e.IntlString("APP_TWITTER_NOTIF_NEW_PASSWORD_MISS_MATCH"),
                                icon: "twitter",
                                backgroundColor: "#e0245e80"
                            }), t.abrupt("return");
                        case 16:
                            if (!(s.text.length < 6)) {
                                t.next = 19;
                                break
                            }
                            return e.$notify({
                                title: e.IntlString("APP_TWITTER_NAME"),
                                message: e.IntlString("APP_TWITTER_NOTIF_NEW_PASSWORD_LENGTH_ERROR"),
                                icon: "twitter",
                                backgroundColor: "#e0245e80"
                            }), t.abrupt("return");
                        case 19:
                            e.twitterChangePassword(s.text), t.next = 25;
                            break;
                        case 22:
                            t.prev = 22, t.t0 = t.catch(0), console.error(t.t0);
                        case 25:
                        case "end":
                            return t.stop()
                        }
                    }, t, e, [
                        [0, 22]
                    ])
                }))()
            }
        }),
        created: function () {
            this.useMouse || (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.onBack))
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(4),
        a = n.n(s),
        o = n(3),
        i = n.n(o),
        r = n(1),
        c = n.n(r),
        u = n(2);
    e.default = {
        components: {},
        data: function () {
            return {
                message: "",
                messageSent: !1,
                ignoreControls: !1,
                selectedOption: "textarea",
                options: ["textarea", "tweet_send", "tweet_photo"]
            }
        },
        computed: c()({}, n.i(u.b)(["IntlString", "useMouse", "enableTakePhoto"])),
        watch: {
            selectedOption: function (t) {
                if ("textarea" === t) return void this.$refs.textareaRef.focus();
                this.$refs.textareaRef.blur()
            }
        },
        methods: c()({}, n.i(u.a)(["twitterPostTweet"]), {
            postphoto: function () {
                var t = this;
                return i()(a.a.mark(function e() {
                    var n, s;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, t.$phoneAPI.takePhoto();
                        case 2:
                            if (n = e.sent, null === (s = n.url) || void 0 === s) {
                                e.next = 7;
                                break
                            }
                            return e.next = 7, t.twitterPostTweet({
                                message: s
                            });
                        case 7:
                        case "end":
                            return e.stop()
                        }
                    }, e, t)
                }))()
            },
            onEnter: function () {
                var t = this;
                return i()(a.a.mark(function e() {
                    var n, s;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0, "textarea" !== t.selectedOption) {
                                e.next = 8;
                                break
                            }
                            return e.next = 4, t.$phoneAPI.getReponseText({
                                title: "Enter post..."
                            });
                        case 4:
                            return n = e.sent, s = n ? n.text.trim() : "", t.message = s, e.abrupt("return");
                        case 8:
                            if ("tweet_send" !== t.selectedOption) {
                                e.next = 11;
                                break
                            }
                            return t.tweeter(), e.abrupt("return");
                        case 11:
                            if ("tweet_photo" !== t.selectedOption) {
                                e.next = 14;
                                break
                            }
                            return t.postphoto(), e.abrupt("return");
                        case 14:
                            e.next = 18;
                            break;
                        case 16:
                            e.prev = 16, e.t0 = e.catch(0);
                        case 18:
                        case "end":
                            return e.stop()
                        }
                    }, e, t, [
                        [0, 16]
                    ])
                }))()
            },
            tweeter: function () {
                var t = this;
                return i()(a.a.mark(function e() {
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if ("" !== t.message) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", t.$phoneAPI.sendGenericError("Unable to Post! You cannot send a blank tweet"));
                        case 2:
                            if (!(t.message.length > 140)) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return", t.$phoneAPI.sendGenericError("Unable to Post! Your tweet is too long!"));
                        case 4:
                            return e.next = 6, t.twitterPostTweet({
                                message: t.message
                            });
                        case 6:
                            t.message = "", t.messageSent = !0, setTimeout(function () {
                                t.messageSent = !1
                            }, 4e3);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                    }, e, t)
                }))()
            },
            getCurrentOptionIdx: function () {
                var t = this;
                return this.options.findIndex(function (e) {
                    return e === t.selectedOption
                })
            },
            nextOption: function () {
                var t = this.getCurrentOptionIdx();
                if (t + 1 === this.options.length) return void(this.selectedOption = this.options[0]);
                this.selectedOption = this.options[t + 1]
            },
            prevOption: function () {
                var t = this.getCurrentOptionIdx();
                if (t - 1 < 0) return void(this.selectedOption = this.options[this.options.length - 1]);
                this.selectedOption = this.options[t - 1]
            },
            onBack: function () {
                !0 === this.useMouse && "BODY" !== document.activeElement.tagName || this.$bus.$emit("twitterHome")
            },
            onUp: function () {
                !0 !== this.ignoreControls && this.prevOption()
            },
            onDown: function () {
                !0 !== this.ignoreControls && this.nextOption()
            }
        }),
        created: function () {
            this.useMouse || (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.onBack)
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = n.n(s),
        o = n(6),
        i = n.n(o),
        r = n(254),
        c = n.n(r),
        u = n(250),
        l = n.n(u),
        p = n(249),
        h = n.n(p),
        f = n(253),
        d = n.n(f),
        m = n(2);
    e.default = {
        components: {
            PhoneTitle: i.a
        },
        data: function () {
            return {
                currentScreenIndex: 0
            }
        },
        computed: a()({}, n.i(m.b)(["IntlString", "useMouse"]), {
            screen: function () {
                return [{
                    title: this.IntlString("APP_TWITTER_VIEW_TWITTER"),
                    component: c.a,
                    icon: "fa-home"
                }, {
                    title: this.IntlString("APP_TWITTER_VIEW_TOP_TWEETS"),
                    component: d.a,
                    icon: "fa-heart"
                }, {
                    title: this.IntlString("APP_TWITTER_VIEW_TWEETER"),
                    component: l.a,
                    icon: "fa-comment"
                }, {
                    title: this.IntlString("APP_TWITTER_VIEW_SETTING"),
                    component: h.a,
                    icon: "fa-cog"
                }]
            },
            currentScreen: function () {
                return this.screen[this.currentScreenIndex]
            }
        }),
        watch: {},
        methods: {
            onLeft: function () {
                this.currentScreenIndex = Math.max(0, this.currentScreenIndex - 1)
            },
            onRight: function () {
                this.currentScreenIndex = Math.min(this.screen.length - 1, this.currentScreenIndex + 1)
            },
            home: function () {
                this.currentScreenIndex = 0
            },
            openMenu: function (t) {
                this.currentScreenIndex = t
            },
            quit: function () {
                0 === this.currentScreenIndex ? this.$router.push({
                    name: "home",
                    params: {
                        ignoreBack: !0
                    }
                }) : this.currentScreenIndex = 0
            }
        },
        created: function () {
            this.useMouse || (this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight)), this.$bus.$on("twitterHome", this.home)
        },
        mounted: function () {},
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("twitterHome", this.home)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        created: function () {
            var t = this;
            setTimeout(function () {
                t.$router.push({
                    name: "twitter.screen"
                })
            }, 500)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(4),
        a = n.n(s),
        o = n(11),
        i = n.n(o),
        r = n(3),
        c = n.n(r),
        u = n(1),
        l = n.n(u),
        p = n(2),
        h = n(71),
        f = n.n(h),
        d = n(7);
    e.default = {
        components: {},
        data: function () {
            return {
                selectMessage: -1,
                ignoreControls: !1,
                imgZoom: void 0
            }
        },
        computed: l()({}, n.i(p.b)(["favoriteTweets", "IntlString", "useMouse"]), {
            tweets: function () {
                return this.favoriteTweets
            }
        }),
        watch: {},
        methods: l()({}, n.i(p.a)(["twitterLogin", "twitterPostTweet", "twitterToogleLike", "fetchFavoriteTweets"]), {
            showOption: function () {
                var t = this;
                return c()(a.a.mark(function e() {
                    var n, s, o;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t.ignoreControls = !0, n = t.tweets[t.selectMessage], s = [{
                                id: 1,
                                title: "Like / Unlike",
                                icons: "fa-heart",
                                color: "red"
                            }, {
                                id: 2,
                                title: t.IntlString("APP_TWITTER_VIEW_REPLY"),
                                icons: "fa-reply"
                            }, {
                                id: -1,
                                title: t.IntlString("CANCEL"),
                                icons: "fa-undo"
                            }], t.isImage(n.message) && (s = [].concat(i()(s), [{
                                id: 3,
                                title: t.IntlString("APP_MESSAGE_ZOOM_IMG"),
                                icons: "fa-search"
                            }])), e.next = 6, d.a.CreateModal({
                                choix: s
                            });
                        case 6:
                            o = e.sent, t.ignoreControls = !1, e.t0 = o.id, e.next = 1 === e.t0 ? 11 : 2 === e.t0 ? 13 : 3 === e.t0 ? 15 : 17;
                            break;
                        case 11:
                            return t.twitterToogleLike({
                                tweetId: n.id
                            }), e.abrupt("break", 17);
                        case 13:
                            return t.reply(n), e.abrupt("break", 17);
                        case 15:
                            return t.imgZoom = n.message, e.abrupt("break", 17);
                        case 17:
                        case "end":
                            return e.stop()
                        }
                    }, e, t)
                }))()
            },
            isImage: function (t) {
                return /^https?:\/\/.*\.(png|jpg|jpeg|gif)/.test(t)
            },
            reply: function (t) {
                var e = this;
                return c()(a.a.mark(function n() {
                    var s, o, i;
                    return a.a.wrap(function (n) {
                        for (;;) switch (n.prev = n.next) {
                        case 0:
                            return s = t.author, n.prev = 1, e.ignoreControls = !0, n.next = 5, d.a.CreateTextModal({
                                title: "Reply",
                                text: "@" + s + " "
                            });
                        case 5:
                            o = n.sent, void 0 !== o && void 0 !== o.text && (i = o.text.trim(), 0 !== i.length && e.twitterPostTweet({
                                message: i
                            })), n.next = 11;
                            break;
                        case 9:
                            n.prev = 9, n.t0 = n.catch(1);
                        case 11:
                            return n.prev = 11, e.ignoreControls = !1, n.finish(11);
                        case 14:
                        case "end":
                            return n.stop()
                        }
                    }, n, e, [
                        [1, 9, 11, 14]
                    ])
                }))()
            },
            resetScroll: function () {
                var t = this;
                this.$nextTick(function () {
                    var e = document.querySelector("#tweets");
                    e.scrollTop = e.scrollHeight, t.selectMessage = -1
                })
            },
            scrollIntoViewIfNeeded: function () {
                var t = this;
                this.$nextTick(function () {
                    var e = t.$el.querySelector(".select");
                    null !== e && e.scrollIntoViewIfNeeded()
                })
            },
            onUp: function () {
                !0 !== this.ignoreControls && (-1 === this.selectMessage ? this.selectMessage = 0 : this.selectMessage = 0 === this.selectMessage ? 0 : this.selectMessage - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function () {
                !0 !== this.ignoreControls && (-1 === this.selectMessage ? this.selectMessage = 0 : this.selectMessage = this.selectMessage === this.tweets.length - 1 ? this.selectMessage : this.selectMessage + 1, this.scrollIntoViewIfNeeded())
            },
            onEnter: function () {
                var t = this;
                return c()(a.a.mark(function e() {
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!0 !== t.ignoreControls) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            -1 === t.selectMessage ? t.newTweet() : t.showOption();
                        case 3:
                        case "end":
                            return e.stop()
                        }
                    }, e, t)
                }))()
            },
            onBack: function () {
                if (void 0 !== this.imgZoom) return void(this.imgZoom = void 0);
                !0 !== this.ignoreControls && (-1 !== this.selectMessage ? this.selectMessage = -1 : this.$bus.$emit("twitterHome"))
            },
            formatTime: function (t) {
                return f()(t).format("HH:mm A on DD/MM")
            }
        }),
        created: function () {
            this.useMouse || (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.onBack)
        },
        mounted: function () {
            this.fetchFavoriteTweets()
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(4),
        a = n.n(s),
        o = n(11),
        i = n.n(o),
        r = n(3),
        c = n.n(r),
        u = n(1),
        l = n.n(u),
        p = n(2),
        h = n(71),
        f = n.n(h),
        d = n(7);
    e.default = {
        components: {},
        data: function () {
            return {
                selectMessage: -1,
                ignoreControls: !1,
                imgZoom: void 0
            }
        },
        computed: l()({}, n.i(p.b)(["tweets", "IntlString", "useMouse"])),
        watch: {},
        methods: l()({}, n.i(p.a)(["twitterLogin", "twitterPostTweet", "twitterToogleLike", "fetchTweets"]), {
            showOption: function () {
                var t = this;
                return c()(a.a.mark(function e() {
                    var n, s, o;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t.ignoreControls = !0, n = t.tweets[t.selectMessage], s = [{
                                id: 1,
                                title: "Like / Unlike",
                                icons: "fa-heart",
                                color: "red"
                            }, {
                                id: 2,
                                title: t.IntlString("APP_TWITTER_VIEW_REPLY"),
                                icons: "fa-reply"
                            }, {
                                id: -1,
                                title: t.IntlString("CANCEL"),
                                icons: "fa-undo"
                            }], t.isImage(n.message) && (s = [].concat(i()(s), [{
                                id: 3,
                                title: t.IntlString("APP_MESSAGE_ZOOM_IMG"),
                                icons: "fa-search"
                            }])), e.next = 6, d.a.CreateModal({
                                choix: s
                            });
                        case 6:
                            o = e.sent, t.ignoreControls = !1, e.t0 = o.id, e.next = 1 === e.t0 ? 11 : 2 === e.t0 ? 13 : 3 === e.t0 ? 15 : 17;
                            break;
                        case 11:
                            return t.twitterToogleLike({
                                tweetId: n.id
                            }), e.abrupt("break", 17);
                        case 13:
                            return t.reply(n), e.abrupt("break", 17);
                        case 15:
                            return t.imgZoom = n.message, e.abrupt("break", 17);
                        case 17:
                        case "end":
                            return e.stop()
                        }
                    }, e, t)
                }))()
            },
            isImage: function (t) {
                return /^https?:\/\/.*\.(png|jpg|jpeg|gif)/.test(t)
            },
            reply: function (t) {
                var e = this;
                return c()(a.a.mark(function n() {
                    var s, o, i;
                    return a.a.wrap(function (n) {
                        for (;;) switch (n.prev = n.next) {
                        case 0:
                            return s = t.author, n.prev = 1, e.ignoreControls = !0, n.next = 5, d.a.CreateTextModal({
                                title: e.IntlString("APP_TWITTER_VIEW_REPLY") || "Reply",
                                text: ""
                            });
                        case 5:
                            o = n.sent, void 0 !== o && void 0 !== o.text && (i = o.text.trim(), 0 !== i.length && e.twitterPostTweet({
                                message: "@" + s + " " + i
                            })), n.next = 11;
                            break;
                        case 9:
                            n.prev = 9, n.t0 = n.catch(1);
                        case 11:
                            return n.prev = 11, e.ignoreControls = !1, n.finish(11);
                        case 14:
                        case "end":
                            return n.stop()
                        }
                    }, n, e, [
                        [1, 9, 11, 14]
                    ])
                }))()
            },
            resetScroll: function () {
                var t = this;
                this.$nextTick(function () {
                    var e = document.querySelector("#tweets");
                    e.scrollTop = e.scrollHeight, t.selectMessage = -1
                })
            },
            scrollIntoViewIfNeeded: function () {
                var t = this;
                this.$nextTick(function () {
                    var e = t.$el.querySelector(".select");
                    null !== e && e.scrollIntoViewIfNeeded()
                })
            },
            onUp: function () {
                !0 !== this.ignoreControls && (-1 === this.selectMessage ? this.selectMessage = 0 : this.selectMessage = 0 === this.selectMessage ? 0 : this.selectMessage - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function () {
                !0 !== this.ignoreControls && (-1 === this.selectMessage ? this.selectMessage = 0 : this.selectMessage = this.selectMessage === this.tweets.length - 1 ? this.selectMessage : this.selectMessage + 1, this.scrollIntoViewIfNeeded())
            },
            onEnter: function () {
                var t = this;
                return c()(a.a.mark(function e() {
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!0 !== t.ignoreControls) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            -1 === t.selectMessage ? t.newTweet() : t.showOption();
                        case 3:
                        case "end":
                            return e.stop()
                        }
                    }, e, t)
                }))()
            },
            onBack: function () {
                if (void 0 !== this.imgZoom) return void(this.imgZoom = void 0);
                !0 !== this.ignoreControls && (-1 !== this.selectMessage ? this.selectMessage = -1 : this.$router.push({
                    name: "home",
                    params: {
                        ignoreBack: !0
                    }
                }))
            },
            formatTime: function (t) {
                return f()(t).format("HH:mm A on DD/MM")
            }
        }),
        created: function () {
            this.useMouse || (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.onBack)
        },
        mounted: function () {
            this.fetchTweets()
        },
        beforeDestroy: function () {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, , , , , , function (t, e, n) {
    function s(t) {
        n(201)
    }
    var a = n(0)(n(91), n(277), s, "data-v-64f456c2", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(202)
    }
    var a = n(0)(n(92), n(278), s, "data-v-6a46c302", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(186)
    }
    var a = n(0)(n(93), n(262), s, "data-v-26ec6c14", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(211)
    }
    var a = n(0)(n(94), n(287), s, "data-v-d2b698c8", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(209)
    }
    var a = n(0)(n(95), n(285), s, "data-v-9104422e", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(181)
    }
    var a = n(0)(n(96), n(257), s, "data-v-0c8c5d42", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(180)
    }
    var a = n(0)(n(98), n(256), s, "data-v-07b6e6d2", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(208)
    }
    var a = n(0)(n(99), n(284), s, "data-v-821f15d4", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(199)
    }
    var a = n(0)(n(100), n(275), s, "data-v-5d567654", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(216)
    }
    var a = n(0)(n(101), n(292), s, null, null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(215)
    }
    var a = n(0)(n(102), n(291), s, "data-v-e5131126", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(185)
    }
    var a = n(0)(n(103), n(261), s, "data-v-235696e8", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(204)
    }
    var a = n(0)(n(107), n(280), s, "data-v-6cc9c1b2", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(188)
    }
    var a = n(0)(n(108), n(264), s, "data-v-2cbc2b79", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(190)
    }
    var a = n(0)(n(109), n(266), s, "data-v-2f4ae706", null);
    t.exports = a.exports
}, function (t, e, n) {
    var s = n(0)(n(111), null, null, null, null);
    t.exports = s.exports
}, function (t, e, n) {
    function s(t) {
        n(192)
    }
    var a = n(0)(n(112), n(268), s, "data-v-3967a7e3", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(183)
    }
    var a = n(0)(n(113), n(259), s, "data-v-15f3ee32", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(200)
    }
    var a = n(0)(n(114), n(276), s, "data-v-5fdffa03", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(206)
    }
    var a = n(0)(n(115), n(282), s, null, null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(189)
    }
    var a = n(0)(n(116), n(265), s, "data-v-2e18afa6", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(191)
    }
    var a = n(0)(n(117), n(267), s, "data-v-392cfe96", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(203)
    }
    var a = n(0)(n(118), n(279), s, "data-v-6ab6c4ce", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(194)
    }
    var a = n(0)(n(119), n(270), s, "data-v-3bd73f1c", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(212)
    }
    var a = n(0)(n(120), n(288), s, "data-v-d7a21294", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(195)
    }
    var a = n(0)(n(121), n(271), s, "data-v-48096518", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(213)
    }
    var a = n(0)(n(122), n(289), s, "data-v-d8a29754", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(197)
    }
    var a = n(0)(n(123), n(273), s, "data-v-4f9e50c2", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(205)
    }
    var a = n(0)(n(124), n(281), s, "data-v-7163c2ba", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(210)
    }
    var a = n(0)(n(125), n(286), s, "data-v-bbe95f2c", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(182)
    }
    var a = n(0)(n(126), n(258), s, "data-v-0ff47592", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(198)
    }
    var a = n(0)(n(127), n(274), s, "data-v-5d20189a", null);
    t.exports = a.exports
}, function (t, e, n) {
    function s(t) {
        n(196)
    }
    var a = n(0)(n(128), n(272), s, "data-v-48f6b0ba", null);
    t.exports = a.exports
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("div", {
                staticClass: "content"
            }, [n("div", {
                staticClass: "number"
            }, [t._v("\n     " + t._s(t.numeroFormat) + "\n     "), n("span", {
                staticClass: "deleteNumber",
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.deleteNumber.apply(null, arguments)
                    }
                }
            }, [t._v("x")])]), t._v(" "), n("div", {
                staticClass: "keyboard"
            }, t._l(t.keyInfo, function (e, s) {
                return n("div", {
                    key: e.primary,
                    staticClass: "key",
                    class: {
                        "key-select": s === t.keySelect, keySpe: !0 === e.isNotNumber
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.onPressKey(e)
                        }
                    }
                }, [n("span", {
                    staticClass: "key-primary",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.onPressKey(e)
                        }
                    }
                }, [t._v(t._s(e.primary))]), t._v(" "), n("span", {
                    staticClass: "key-secondary",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.onPressKey(e)
                        }
                    }
                }, [t._v(t._s(e.secondary))])])
            }), 0), t._v(" "), n("div", {
                staticClass: "call"
            }, [n("div", {
                staticClass: "call-btn",
                class: {
                    active: 12 === t.keySelect
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.onPressCall.apply(null, arguments)
                    }
                }
            }, [n("svg", {
                attrs: {
                    viewBox: "0 0 24 24"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.onPressCall.apply(null, arguments)
                    }
                }
            }, [n("g", {
                attrs: {
                    transform: "rotate(0, 12, 12)"
                }
            }, [n("path", {
                attrs: {
                    d: "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                }
            })])])])])])])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("div", {
                staticClass: "elements"
            }, t._l(t.historique, function (e, s) {
                return n("div", {
                    key: s,
                    staticClass: "element",
                    class: {
                        active: t.selectIndex === s
                    },
                    style: 0 === e.lastCall[e.lastCall.length - 1].accepts ? "color: #ff0000;" : "",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [n("div", {
                    staticClass: "elem-histo-pico",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [1 === e.lastCall[e.lastCall.length - 1].accepts && 1 === e.lastCall[e.lastCall.length - 1].incoming ? n("svg", {
                    attrs: {
                        viewBox: "0 0 24 24",
                        fill: "#878787"
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"
                    }
                })]) : 1 === e.lastCall[e.lastCall.length - 1].accepts && 0 === e.lastCall[e.lastCall.length - 1].incoming ? n("svg", {
                    attrs: {
                        viewBox: "0 0 24 24",
                        fill: "#878787"
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M20,5.41L18.59,4L7,15.59V9H5v10h10v-2H8.41L20,5.41z"
                    }
                })]) : 0 === e.lastCall[e.lastCall.length - 1].accepts && 1 === e.lastCall[e.lastCall.length - 1].incoming ? n("svg", {
                    attrs: {
                        viewBox: "0 0 24 24",
                        fill: "#ff0000"
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M3,8.41l9,9l7-7V15h2V7h-8v2h4.59L12,14.59L4.41,7L3,8.41z"
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                })]) : 0 === e.lastCall[e.lastCall.length - 1].accepts && 0 === e.lastCall[e.lastCall.length - 1].incoming ? n("svg", {
                    attrs: {
                        viewBox: "0 0 24 24",
                        fill: "#ff0000"
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M19.59,7L12,14.59L6.41,9H11V7H3v8h2v-4.59l7,7l9-9L19.59,7z"
                    }
                })]) : t._e()]), t._v(" "), n("div", {
                    staticClass: "elem-pic",
                    style: t.stylePuce(e),
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [t._v(t._s(e.letter))]), t._v(" "), n("div", {
                    staticClass: "elem-content",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [n("div", {
                    staticClass: "elem-content-p",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [t._v(t._s(e.display))]), t._v(" "), n("div", {
                    staticClass: "elem-content-s",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [e.num == e.display ? n("span", [t._v("United States, Los Santos")]) : e.num == e.display || parseInt(e.num) ? n("span", [t._v("Mobile")]) : n("span", [t._v("Office")]), t._v(" "), 0 !== e.lastCall.length ? n("div", {
                    staticClass: "lastCall"
                }, [n("timeago", {
                    attrs: {
                        since: e.lastCall[0].date,
                        "auto-update": 20
                    }
                })], 1) : t._e()])]), t._v(" "), n("div", {
                    staticClass: "elem-icon",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [n("i", {
                    staticClass: "fa fa-info",
                    staticStyle: {
                        padding: ".2rem .4rem",
                        border: ".15rem solid",
                        "border-radius": "50%",
                        "font-size": "10px",
                        color: "#017aff"
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                })])])
            }), 0)])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [n("list", {
                attrs: {
                    list: t.callList,
                    showHeader: !1,
                    title: "Favorites",
                    disable: t.ignoreControls
                },
                on: {
                    select: t.onSelect
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement;
            t._self._c;
            return t._m(0)
        },
        staticRenderFns: [function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "splash"
            }, [n("img", {
                attrs: {
                    src: "/html/static/img/twitter/bird.png"
                }
            })])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.channelName,
                    backgroundColor: "#2b2a2a"
                },
                on: {
                    back: t.onQuit
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content"
            }, [n("div", {
                ref: "elementsDiv",
                staticClass: "elements"
            }, t._l(t.tchatMessages, function (e) {
                return n("div", {
                    key: e.id,
                    staticClass: "element"
                }, [n("div", {
                    staticClass: "time"
                }, [t._v(t._s(t.formatTime(e.time)))]), t._v(" "), n("div", {
                    staticClass: "message"
                }, [t._v("\n            " + t._s(e.message) + "\n          ")])])
            }), 0), t._v(" "), n("div", {
                staticClass: "tchat_write"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.message,
                    expression: "message"
                }],
                attrs: {
                    type: "text",
                    placeholder: "..."
                },
                domProps: {
                    value: t.message
                },
                on: {
                    keyup: function (e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.sendMessage.apply(null, arguments))
                    },
                    input: function (e) {
                        e.target.composing || (t.message = e.target.value)
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "tchat_send",
                on: {
                    click: t.sendMessage
                }
            }, [t._v(">")])])])], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "menu"
            }, [n("div", {
                style: {
                    background: "url(" + t.backgroundURL + ")"
                }
            }), t._v(" "), n("div", {
                staticClass: "menu_content"
            }, [n("div", {
                staticClass: "widgets"
            }, [n("div", {
                staticClass: "calendar"
            }, [n("div", {
                staticClass: "header"
            }, [t._v("\n            " + t._s(t.date.month) + "\n          ")]), t._v(" "), n("span", {
                staticClass: "date"
            }, [t._v(t._s(t.date.date))]), t._v(" "), n("span", {
                staticClass: "day"
            }, [t._v(t._s(t.date.dayOfWeek))])]), t._v(" "), n("Weather")], 1), t._v(" "), n("div", {
                staticClass: "menu_buttons"
            }, t._l(t.Apps, function (e, s) {
                return e.inHomePage ? t._e() : n("button", {
                    key: e.name,
                    staticClass: "app_btn",
                    class: {
                        select: s === t.currentSelect
                    },
                    style: {
                        background: e.color,
                        backgroundImage: "url(" + e.icons + ")",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat"
                    },
                    attrs: {
                        id: s
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.openApp(e)
                        }
                    }
                }, [n("span", {
                    staticClass: "app_btn_name",
                    style: {
                        visibility: e.menuTitle
                    }
                }, [t._v("\n            " + t._s(e.intlName) + "\n          ")]), t._v(" "), void 0 !== e.puce && 0 !== e.puce ? n("span", {
                    staticClass: "puce"
                }, [t._v(t._s(e.puce))]) : t._e()])
            }), 0)])])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "home",
                style: {
                    background: "url(" + t.backgroundURL + ")"
                }
            }, [n("InfoBare", {
                attrs: {
                    color: "#fff"
                }
            }), t._v(" "), n("Menu", {
                attrs: {
                    currentSelect: t.currentSelect
                },
                on: {
                    openApp: t.openApp
                }
            }), t._v(" "), n("div", {
                staticClass: "home_buttons_holder"
            }, [n("div", {
                staticClass: "home_buttons"
            }, t._l(t.Apps, function (e, s) {
                return e.inHomePage ? n("button", {
                    key: e.name,
                    staticClass: "app_btn",
                    class: {
                        select: s === t.currentSelect
                    },
                    style: {
                        background: e.color,
                        backgroundImage: "url(" + e.icons + ")",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat"
                    },
                    on: {
                        click: function (n) {
                            return t.openApp(e)
                        }
                    }
                }, [void 0 !== e.puce && 0 !== e.puce ? n("span", {
                    staticClass: "puce"
                }, [t._v(t._s(e.puce))]) : t._e()]) : t._e()
            }), 0)])], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.title
                },
                on: {
                    back: t.onBackspace
                }
            }), t._v(" "), n("div", {
                staticClass: "content"
            }, [n(t.subMenu[t.currentMenuIndex].Comp, {
                tag: "component",
                attrs: {
                    ignoreControls: t.ignoreControls
                },
                on: {
                    back: t.backToMenus,
                    title: t.updateTitle
                }
            })], 1), t._v(" "), n("div", {
                staticClass: "subMenu"
            }, t._l(t.subMenu, function (e, s) {
                return n("div", {
                    key: s,
                    staticClass: "subMenu-elem",
                    style: t.getColorItem(s),
                    on: {
                        click: function (e) {
                            return t.swapMenu(s)
                        }
                    }
                }, [n("i", {
                    staticClass: "subMenu-icon fa",
                    class: ["fa-" + e.icon],
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.swapMenu(s)
                        }
                    }
                }), t._v(" "), n("span", {
                    staticClass: "subMenu-name",
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.swapMenu(s)
                        }
                    }
                }, [t._v(t._s(e.name))])])
            }), 0)], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_infoBare barre-header",
                style: {
                    color: "#fff" === t.color || "#000" === t.color ? t.color : "#000"
                }
            }, [n("i", {
                staticClass: "fa fa-battery-full battery-indicator",
                style: {
                    "--btcolor": t.btcolor
                }
            }), t._v(" "), n("small", {
                staticClass: "network-indicator"
            }, [t._v("5G")]), t._v(" "), n("span", {
                staticClass: "time"
            }, [n("current-time")], 1), t._v(" "), n("i", {
                staticClass: "fa fa-signal"
            })])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app",
                staticStyle: {
                    width: "100%",
                    height: "742px",
                    color: "white"
                }
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.IntlString("APP_NOTES"),
                    color: "#f8d344"
                },
                on: {
                    back: t.onBack
                }
            }), t._v(" "), n("div", {
                staticClass: "elements",
                staticStyle: {
                    backgroundColor: "white"
                },
                on: {
                    contextmenu: function (e) {
                        return e.preventDefault(), t.addChannelOption.apply(null, arguments)
                    }
                }
            }, [n("div", t._l(t.notesChannels, function (e, s) {
                return n("div", {
                    key: e.channel,
                    staticClass: "elem-title",
                    class: {
                        select: s === t.currentSelect
                    },
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.onRight(s)
                        }
                    }
                }, [n("h3", {
                    staticStyle: {
                        "margin-left": "7px",
                        "font-size": "16px",
                        "font-weight": "400"
                    }
                }, [t._v(" " + t._s(e.channel))])])
            }), 0)])], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.contact.display
                },
                on: {
                    back: t.forceCancel
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content content inputText",
                staticStyle: {
                    padding: "0 10px"
                }
            }, [n("div", {
                staticClass: "group select",
                attrs: {
                    "data-type": "text",
                    "data-model": "display",
                    "data-maxlength": "64"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.contact.display,
                    expression: "contact.display"
                }, {
                    name: "autofocus",
                    rawName: "v-autofocus"
                }],
                staticClass: "inputText",
                staticStyle: {
                    "margin-bottom": "50px"
                },
                attrs: {
                    type: "text",
                    maxlength: "64"
                },
                domProps: {
                    value: t.contact.display
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.enterText("display")
                    },
                    keydown: function (t) {
                        t.preventDefault()
                    },
                    input: function (e) {
                        e.target.composing || t.$set(t.contact, "display", e.target.value)
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v(t._s(t.IntlString("APP_CONTACT_LABEL_NAME")))])]), t._v(" "), n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "text",
                    "data-model": "number",
                    "data-maxlength": "11"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.contact.number,
                    expression: "contact.number"
                }],
                staticClass: "inputText",
                staticStyle: {
                    "margin-bottom": "50px"
                },
                attrs: {
                    type: "text",
                    oninput: "this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\\..*)\\./g, '$1');",
                    maxlength: "11"
                },
                domProps: {
                    value: t.contact.number
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.enterText("number")
                    },
                    keydown: function (t) {
                        t.preventDefault()
                    },
                    input: function (e) {
                        e.target.composing || t.$set(t.contact, "number", e.target.value)
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v(t._s(t.IntlString("APP_CONTACT_LABEL_NUMBER")))])]), t._v(" "), -1 === this.id ? n("div", {
                staticClass: "group ",
                attrs: {
                    "data-type": "button",
                    "data-action": "save"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.save.apply(null, arguments)
                    }
                }
            }, [n("button", {
                staticClass: "btn btn-green",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.save.apply(null, arguments)
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-check"
            }), t._v(" " + t._s(t.IntlString("APP_CONTACT_SAVE")))])]) : t._e(), t._v(" "), -1 !== this.id ? n("div", {
                staticClass: "group ",
                attrs: {
                    "data-type": "button",
                    "data-action": "save"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.save.apply(null, arguments)
                    }
                }
            }, [n("button", {
                staticClass: "btn btn-green",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.save.apply(null, arguments)
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-sync"
            }), t._v(" Update")])]) : t._e(), t._v(" "), -1 !== this.id ? n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button",
                    "data-action": "deleteC"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.deleteC.apply(null, arguments)
                    }
                }
            }, [n("button", {
                staticClass: "btn btn-red",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.deleteC.apply(null, arguments)
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-trash"
            }), t._v(" " + t._s(t.IntlString("APP_CONTACT_DELETE")) + " ")])]) : t._e(), t._v(" "), n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button",
                    "data-action": "cancel"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.forceCancel.apply(null, arguments)
                    }
                }
            }, [n("button", {
                staticClass: "btn btn-orange",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.forceCancel.apply(null, arguments)
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-undo"
            }), t._v(" " + t._s(t.IntlString("APP_CONTACT_CANCEL")))])])])], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app",
                staticStyle: {
                    width: "3234px",
                    height: "742px",
                    background: "white"
                }
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.channelName,
                    color: "#f8d344"
                },
                on: {
                    back: t.onQuit
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content"
            }, [n("div", {
                ref: "elementsDiv",
                staticClass: "elements"
            }, t._l(t.notesMessages, function (e) {
                return n("div", {
                    key: e.id,
                    staticClass: "element"
                }, [n("div", {
                    staticClass: "time"
                }, [t._v(t._s(t.formatTime(e.time)))]), t._v(" "), n("div", {
                    staticClass: "message"
                }, [t._v("\n            " + t._s(e.message) + "\n          ")])])
            }), 0), t._v(" "), n("div", {
                staticClass: "notes_write"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.message,
                    expression: "message"
                }],
                attrs: {
                    type: "text",
                    placeholder: "Send a message to this note"
                },
                domProps: {
                    value: t.message
                },
                on: {
                    keyup: function (e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.sendMessage.apply(null, arguments))
                    },
                    input: function (e) {
                        e.target.composing || (t.message = e.target.value)
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "notes_send",
                on: {
                    click: t.sendMessage
                }
            }, [t._v(">")])])])], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "contact"
            }, [n("list", {
                attrs: {
                    list: t.lcontacts,
                    disable: t.disableList,
                    title: t.IntlString("APP_CONTACT_TITLE")
                },
                on: {
                    back: t.back,
                    select: t.onSelect,
                    option: t.onOption
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.IntlString("APP_DARKTCHAT_TITLE"),
                    backgroundColor: "#2b2a2a"
                },
                on: {
                    back: t.onBack
                }
            }), t._v(" "), n("div", {
                staticClass: "elements",
                on: {
                    contextmenu: function (e) {
                        return e.preventDefault(), t.addChannelOption.apply(null, arguments)
                    }
                }
            }, t._l(t.tchatChannels, function (e, s) {
                return n("div", {
                    key: e.channel,
                    staticClass: "element",
                    class: {
                        select: s === t.currentSelect
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.showChannel(e.channel)
                        }
                    }
                }, [n("div", {
                    staticClass: "elem-title",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.showChannel(e.channel)
                        }
                    }
                }, [n("span", {
                    staticClass: "diese"
                }, [t._v("#")]), t._v(" " + t._s(e.channel))])])
            }), 0)], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_title_content",
                class: {
                    hasInfoBare: t.showInfoBare
                },
                style: t.style
            }, [t.showInfoBare ? n("InfoBare", {
                attrs: {
                    color: t.color
                }
            }) : t._e(), t._v(" "), n("div", {
                staticClass: "phone_title",
                style: {
                    backgroundColor: this.style.backgroundColor
                }
            }, [n("button", {
                staticClass: "btn-back",
                style: {
                    color: this.style.color
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.back.apply(null, arguments)
                    }
                }
            }, [n("i", {
                staticClass: "fas fa-chevron-left",
                staticStyle: {
                    "font-size": "22px",
                    "margin-top": "10px"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.back.apply(null, arguments)
                    }
                }
            })]), t._v(" "), n("span", {
                staticStyle: {
                    width: "73%",
                    display: "inline-block"
                },
                style: {
                    "font-size": this.fontSize,
                    "text-align": this.align,
                    color: this.textColor
                },
                domProps: {
                    innerHTML: t._s(t.title)
                }
            })])], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "contact"
            }, [n("list", {
                attrs: {
                    list: t.lcontacts,
                    title: t.IntlString("APP_MESSAGE_CONTACT_TITLE")
                },
                on: {
                    select: t.onSelect,
                    back: t.back
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "screen"
            }, [n("list", {
                attrs: {
                    list: t.messagesData,
                    disable: t.disableList,
                    title: t.IntlString("APP_MESSAGE_TITLE")
                },
                on: {
                    back: t.back,
                    select: t.onSelect,
                    option: t.onOption
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_content"
            }, [void 0 !== t.imgZoom ? n("div", {
                staticClass: "img-fullscreen",
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.imgZoom = void 0
                    }
                }
            }, [n("img", {
                attrs: {
                    src: t.imgZoom
                }
            })]) : t._e(), t._v(" "), n("div", {
                ref: "elementsDiv",
                staticClass: "tweets-wrapper"
            }, t._l(t.tweets, function (e, s) {
                return n("div", {
                    key: e.id,
                    staticClass: "tweet",
                    class: {
                        select: s === t.selectMessage
                    }
                }, [n("div", {
                    staticClass: "tweet-img"
                }, [n("img", {
                    staticStyle: {
                        "max-width": "48px",
                        "max-height": "48px"
                    },
                    attrs: {
                        src: e.authorIcon || "html/static/img/twitter/default_profile.png"
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "tweet-content"
                }, [n("div", {
                    staticClass: "tweet-head"
                }, [n("div", {
                    staticClass: "tweet-head-author"
                }, [t._v(t._s(e.author))]), t._v(" "), n("div", {
                    staticClass: "tweet-head-time"
                }, [t._v(t._s(t.formatTime(e.time)))])]), t._v(" "), n("div", {
                    staticClass: "tweet-message"
                }, [t.isImage(e.message) ? n("img", {
                    staticClass: "tweet-attachement-img",
                    attrs: {
                        src: e.message
                    },
                    on: {
                        click: function (n) {
                            n.stopPropagation(), t.imgZoom = e.message
                        }
                    }
                }) : [t._v(t._s(e.message))]], 2), t._v(" "), n("div", {
                    staticClass: "tweet-like"
                }, [n("div", {
                    staticClass: "item svgreply",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.reply(e)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.reply(e)
                        }
                    }
                }, [n("path", {
                    attrs: {
                        fill: "none",
                        d: "M0 0h24v24H0V0z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
                    }
                })])]), t._v(" "), n("div", {
                    staticClass: "item"
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }
                }), n("path", {
                    attrs: {
                        d: "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"
                    }
                })])]), t._v(" "), e.isLikes ? n("div", {
                    staticClass: "item svgdislike",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }
                }), n("path", {
                    attrs: {
                        d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    }
                })]), t._v(" "), n("span", {
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [t._v(t._s(e.likes))])]) : n("div", {
                    staticClass: "svglike",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }
                }), n("path", {
                    attrs: {
                        d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                    }
                })]), t._v(" "), n("span", {
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [t._v(t._s(e.likes))])]), t._v(" "), n("div", {
                    staticClass: "item"
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        fill: "none",
                        d: "M0 0h24v24H0V0z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"
                    }
                })])])])])])
            }), 0)])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_content content inputText"
            }, [t.state === t.STATES.MENU ? [t.isLogin ? t._e() : [n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.state = t.STATES.LOGIN
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-blue",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_ACCOUNT_LOGIN")
                },
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.state = t.STATES.LOGIN
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.state = t.STATES.NOTIFICATION
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-blue",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_NOTIFICATION")
                },
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.state = t.STATES.NOTIFICATION
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "group bottom",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.state = t.STATES.NEW_ACCOUNT
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-red",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_ACCOUNT_NEW")
                },
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.state = t.STATES.NEW_ACCOUNT
                    }
                }
            })])], t._v(" "), t.isLogin ? [n("img", {
                staticStyle: {
                    "align-self": "center"
                },
                attrs: {
                    src: t.twitterAvatarUrl,
                    height: "128",
                    width: "128"
                }
            }), t._v(" "), n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.state = t.STATES.ACCOUNT
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-blue",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_ACCOUNT_PARAM")
                },
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.state = t.STATES.ACCOUNT
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.state = t.STATES.NOTIFICATION
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-blue",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_NOTIFICATION")
                },
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.state = t.STATES.NOTIFICATION
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "group bottom",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.logout.apply(null, arguments)
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-red",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_ACCOUNT_LOGOUT")
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.logout.apply(null, arguments)
                    }
                }
            })])] : t._e()] : t.state === t.STATES.LOGIN ? [n("div", {
                staticClass: "group inputText",
                attrs: {
                    "data-type": "text",
                    "data-maxlength": "64",
                    "data-defaultValue": t.localAccount.username
                }
            }, [n("input", {
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.localAccount.username
                },
                on: {
                    change: function (e) {
                        return t.setLocalAccount(e, "username")
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v(t._s(t.IntlString("APP_TWITTER_ACCOUNT_USERNAME")))])]), t._v(" "), n("div", {
                staticClass: "group inputText",
                attrs: {
                    "data-type": "text",
                    "data-model": "password",
                    "data-maxlength": "30"
                }
            }, [n("input", {
                attrs: {
                    autocomplete: "new-password",
                    type: "password"
                },
                domProps: {
                    value: t.localAccount.password
                },
                on: {
                    change: function (e) {
                        return t.setLocalAccount(e, "password")
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v(t._s(t.IntlString("APP_TWITTER_ACCOUNT_PASSWORD")))])]), t._v(" "), n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.login.apply(null, arguments)
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-blue",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_ACCOUNT_LOGIN")
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.login.apply(null, arguments)
                    }
                }
            })])] : t.state === t.STATES.NOTIFICATION ? [n("div", {
                staticClass: "groupCheckBoxTitle"
            }, [n("label", [t._v(t._s(t.IntlString("APP_TWITTER_NOTIFICATION_WHEN")))])]), t._v(" "), n("label", {
                staticClass: "group checkbox",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotification(2)
                    }
                }
            }, [n("input", {
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: 2 === t.twitterNotification
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotification(2)
                    }
                }
            }), t._v("\n      " + t._s(t.IntlString("APP_TWITTER_NOTIFICATION_ALL")) + "\n    ")]), t._v(" "), n("label", {
                staticClass: "group checkbox",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotification(1)
                    }
                }
            }, [n("input", {
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: 1 === t.twitterNotification
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotification(1)
                    }
                }
            }), t._v("\n      " + t._s(t.IntlString("APP_TWITTER_NOTIFICATION_MENTION")) + "\n    ")]), t._v(" "), n("label", {
                staticClass: "group checkbox",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotification(0)
                    }
                }
            }, [n("input", {
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: 0 === t.twitterNotification
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotification(0)
                    }
                }
            }), t._v("\n      " + t._s(t.IntlString("APP_TWITTER_NOTIFICATION_NEVER")) + "\n    ")]), t._v(" "), n("div", {
                staticClass: "groupCheckBoxTitle"
            }, [n("label", [t._v(t._s(t.IntlString("APP_TWITTER_NOTIFICATION_SOUND")))])]), t._v(" "), n("label", {
                staticClass: "group checkbox",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotificationSound(!0)
                    }
                }
            }, [n("input", {
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: t.twitterNotificationSound
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotificationSound(!0)
                    }
                }
            }), t._v("\n      " + t._s(t.IntlString("APP_TWITTER_NOTIFICATION_SOUND_YES")) + "\n    ")]), t._v(" "), n("label", {
                staticClass: "group checkbox",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotificationSound(!1)
                    }
                }
            }, [n("input", {
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: !t.twitterNotificationSound
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotificationSound(!1)
                    }
                }
            }), t._v("\n      " + t._s(t.IntlString("APP_TWITTER_NOTIFICATION_SOUND_NO")) + "\n    ")])] : t.state === t.STATES.ACCOUNT ? [n("img", {
                staticStyle: {
                    "align-self": "center"
                },
                attrs: {
                    src: t.twitterAvatarUrl,
                    height: "128",
                    width: "128"
                }
            }), t._v(" "), n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.onPressChangeAvartar.apply(null, arguments)
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-blue",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_ACCOUNT_AVATAR")
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.onPressChangeAvartar.apply(null, arguments)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.onPressChangeAvartartake.apply(null, arguments)
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-blue",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_ACCOUNT_AVATAR_TAKE")
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.onPressChangeAvartartake.apply(null, arguments)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.changePassword.apply(null, arguments)
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-red",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_ACCOUNT_CHANGE_PASSWORD")
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.changePassword.apply(null, arguments)
                    }
                }
            })])] : t.state === t.STATES.NEW_ACCOUNT ? [t._m(0), t._v(" "), n("div", {
                staticClass: "group inputText",
                attrs: {
                    "data-type": "text",
                    "data-maxlength": "64",
                    "data-defaultValue": ""
                }
            }, [n("input", {
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.localAccount.username
                },
                on: {
                    change: function (e) {
                        return t.setLocalAccount(e, "username")
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v(t._s(t.IntlString("APP_TWITTER_NEW_ACCOUNT_USERNAME")))])]), t._v(" "), n("div", {
                staticClass: "group inputText",
                attrs: {
                    "data-type": "text",
                    "data-model": "password",
                    "data-maxlength": "30"
                }
            }, [n("input", {
                attrs: {
                    autocomplete: "new-password",
                    type: "password"
                },
                domProps: {
                    value: t.localAccount.password
                },
                on: {
                    change: function (e) {
                        return t.setLocalAccount(e, "password")
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v(t._s(t.IntlString("APP_TWITTER_NEW_ACCOUNT_PASSWORD")))])]), t._v(" "), n("div", {
                staticClass: "group inputText",
                attrs: {
                    "data-type": "text",
                    "data-model": "password",
                    "data-maxlength": "30"
                }
            }, [n("input", {
                attrs: {
                    autocomplete: "new-password",
                    type: "password"
                },
                domProps: {
                    value: t.localAccount.passwordConfirm
                },
                on: {
                    change: function (e) {
                        return t.setLocalAccount(e, "passwordConfirm")
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v(t._s(t.IntlString("APP_TWITTER_NEW_ACCOUNT_PASSWORD_CONFIRM")))])]), t._v(" "), n("div", {
                staticClass: "group",
                staticStyle: {
                    "margin-right": "7px"
                },
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.createAccount.apply(null, arguments)
                    }
                }
            }, [n("input", {
                staticClass: "btn",
                class: t.validAccount ? "btn-blue" : "btn-gray",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWIITER_ACCOUNT_CREATE")
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.createAccount.apply(null, arguments)
                    }
                }
            })])] : t._e()], 2)
        },
        staticRenderFns: [function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "group img",
                staticStyle: {
                    "margin-left": "auto",
                    "margin-right": "auto"
                },
                attrs: {
                    "data-type": "button"
                }
            }, [n("img", {
                staticStyle: {
                    "margin-bottom": "10px"
                },
                attrs: {
                    src: "/html/static/img/twitter/bird.png"
                }
            })])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_content"
            }, [void 0 !== t.imgZoom ? n("div", {
                staticClass: "img-fullscreen",
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.imgZoom = void 0
                    }
                }
            }, [n("img", {
                attrs: {
                    src: t.imgZoom
                }
            })]) : t._e(), t._v(" "), n("div", {
                ref: "elementsDiv",
                staticClass: "tweets-wrapper"
            }, t._l(t.tweets, function (e, s) {
                return n("div", {
                    key: e.id,
                    staticClass: "tweet",
                    class: {
                        select: s === t.selectMessage
                    }
                }, [n("div", {
                    staticClass: "tweet-img"
                }, [n("img", {
                    staticStyle: {
                        "max-width": "48px",
                        "max-height": "48px"
                    },
                    attrs: {
                        src: e.authorIcon || "html/static/img/twitter/default_profile.png"
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "tweet-content"
                }, [n("div", {
                    staticClass: "tweet-head"
                }, [n("div", {
                    staticClass: "tweet-head-author"
                }, [t._v(t._s(e.author))]), t._v(" "), n("div", {
                    staticClass: "tweet-head-time"
                }, [t._v(t._s(t.formatTime(e.time)))])]), t._v(" "), n("div", {
                    staticClass: "tweet-message"
                }, [t.isImage(e.message) ? n("img", {
                    staticClass: "tweet-attachement-img",
                    attrs: {
                        src: e.message
                    },
                    on: {
                        click: function (n) {
                            n.stopPropagation(), t.imgZoom = e.message
                        }
                    }
                }) : [t._v(t._s(e.message))]], 2), t._v(" "), n("div", {
                    staticClass: "tweet-like"
                }, [n("div", {
                    staticClass: "item svgreply",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.reply(e)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.reply(e)
                        }
                    }
                }, [n("path", {
                    attrs: {
                        fill: "none",
                        d: "M0 0h24v24H0V0z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
                    }
                })])]), t._v(" "), n("div", {
                    staticClass: "item"
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }
                }), n("path", {
                    attrs: {
                        d: "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"
                    }
                })])]), t._v(" "), e.isLikes ? n("div", {
                    staticClass: "item svgdislike",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }
                }), n("path", {
                    attrs: {
                        d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    }
                })]), t._v(" "), n("span", {
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [t._v(t._s(e.likes))])]) : n("div", {
                    staticClass: "svglike",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }
                }), n("path", {
                    attrs: {
                        d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                    }
                })]), t._v(" "), n("span", {
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [t._v(t._s(e.likes))])]), t._v(" "), n("div", {
                    staticClass: "item"
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        fill: "none",
                        d: "M0 0h24v24H0V0z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"
                    }
                })])])])])])
            }), 0)])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.IntlString("APP_BOURSE_TITLE")
                },
                on: {
                    back: t.onBackspace
                }
            }), t._v(" "), n("div", {
                staticClass: "elements"
            }, t._l(t.bourseInfo, function (e, s) {
                return n("div", {
                    key: s,
                    staticClass: "element",
                    class: {
                        select: s === t.currentSelect
                    }
                }, [n("div", {
                    staticClass: "elem-evo"
                }, [n("i", {
                    staticClass: "fa",
                    class: t.classInfo(e)
                })]), t._v(" "), n("div", {
                    staticClass: "elem-libelle"
                }, [t._v(t._s(e.libelle))]), t._v(" "), n("div", {
                    staticClass: "elem-price",
                    style: {
                        color: t.colorBourse(e)
                    }
                }, [t._v(t._s(e.price) + " $ ")]), t._v(" "), n("div", {
                    staticClass: "elem-difference",
                    style: {
                        color: t.colorBourse(e)
                    }
                }, [e.difference > 0 ? n("span", [t._v("+")]) : t._e(), t._v(t._s(e.difference))])])
            }), 0)], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement;
            t._self._c;
            return t._m(0)
        },
        staticRenderFns: [function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "splash"
            }, [n("img", {
                attrs: {
                    src: "/html/static/img/app_tchat/splashtchat.png",
                    alt: ""
                }
            })])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "notifications"
            }, t._l(t.list, function (e) {
                return n("div", {
                    key: e.id,
                    staticClass: "notification",
                    style: t.style(e)
                }, [n("div", {
                    staticClass: "title"
                }, [e.icon ? n("i", {
                    class: "fa fa-" + e.icon
                }) : t._e(), t._v(" " + t._s(e.title) + "\n    ")]), t._v(" "), !0 === t.isImage(e.message) ? n("div", {
                    staticClass: "message"
                }, [n("img", {
                    staticClass: "img-msg",
                    attrs: {
                        src: e.message
                    }
                })]) : n("div", {
                    staticClass: "message"
                }, [t._v(t._s(e.message))])])
            }), 0)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: "9 GAG (" + t.currentSelectPost + ")",
                    backgroundColor: "#000"
                },
                on: {
                    back: t.quit
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content",
                on: {
                    click: t.onClick
                }
            }, [void 0 !== t.currentPost ? n("div", {
                staticClass: "post"
            }, [n("h1", {
                staticClass: "post-title"
            }, [t._v(t._s(t.currentPost.title))]), t._v(" "), n("div", {
                staticClass: "post-content"
            }, [void 0 !== t.currentPost.images.image460svwm ? n("video", {
                ref: "video",
                staticClass: "post-video",
                attrs: {
                    autoplay: "",
                    loop: "",
                    src: t.currentPost.images.image460svwm.url
                }
            }) : n("img", {
                staticClass: "post-image",
                attrs: {
                    src: t.currentPost.images.image460.url,
                    alt: ""
                }
            })])]) : n("div", {
                staticClass: "loading"
            }, [n("div", [t._v("CHARGEMENT")])])])], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "screen"
            }, [n("list", {
                attrs: {
                    list: t.messagesData,
                    disable: t.disableList,
                    title: "Conversations"
                },
                on: {
                    back: t.back,
                    select: t.onSelect
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("transition", {
                attrs: {
                    name: "modal"
                }
            }, [n("div", {
                staticClass: "modal-mask",
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.cancel.apply(null, arguments)
                    }
                }
            }, [n("div", {
                staticClass: "modal-container"
            }, t._l(t.choix, function (e, s) {
                return n("div", {
                    key: s,
                    staticClass: "modal-choix",
                    class: {
                        select: s === t.currentSelect
                    },
                    style: {
                        color: "#333"
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [n("i", {
                    staticClass: "fas",
                    class: e.icons,
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }), t._v(t._s(e.title) + "\r\n            ")])
            }), 0)])])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_content"
            }, [n("div", {
                staticClass: "tweet_write"
            }, [n("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: t.message,
                    expression: "message",
                    modifiers: {
                        trim: !0
                    }
                }, {
                    name: "autofocus",
                    rawName: "v-autofocus"
                }],
                ref: "textareaRef",
                class: {
                    highlight: "textarea" === t.selectedOption, "textarea-input": !0
                },
                attrs: {
                    placeholder: t.IntlString("APP_TWITTER_PLACEHOLDER_MESSAGE")
                },
                domProps: {
                    value: t.message
                },
                on: {
                    input: function (e) {
                        e.target.composing || (t.message = e.target.value.trim())
                    },
                    blur: function (e) {
                        return t.$forceUpdate()
                    }
                }
            }), t._v(" "), n("span", {
                class: {
                    highlight: "tweet_send" === t.selectedOption, tweet_send: !0
                },
                on: {
                    click: t.tweeter
                }
            }, [t._v("\n        " + t._s(t.messageSent ? t.IntlString("APP_TWITTER_BUTTON_ACTION_TWEETER_SENT") : t.IntlString("APP_TWITTER_BUTTON_ACTION_TWEETER")) + "\n      ")]), t._v(" "), n("span", {
                class: {
                    highlight: "tweet_photo" === t.selectedOption, tweet_photo: !0
                },
                on: {
                    click: t.postphoto
                }
            }, [t._v("\n          " + t._s(t.IntlString("APP_TWITTER_BUTTON_PHOTO_TWEETER")) + "\n      ")])])])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "weather"
            }, [n("div", {
                class: this.weather.color
            }, [n("span", {
                staticClass: "temperature"
            }, [t._v(t._s(this.weather.temperature) + "°")]), t._v(" "), n("span", {
                staticClass: "text"
            }, [t._v("\n          " + t._s(this.weather.name) + "\n          "), this.weather.icons.includes("rainingslow") ? n("small", [n("br"), t._v(" It's barely raining")]) : t._e(), t._v(" "), this.weather.icons.includes("raining") ? n("small", [n("br"), t._v(" It's raining outside, take an umbrella")]) : t._e(), t._v(" "), this.weather.icons.includes("snowing") ? n("small", [n("br"), t._v(" It's snowing and cold, wear a jacket")]) : t._e()]), t._v(" "), n("div", {
                staticClass: "icons"
            }, t._l(this.weather.icons, function (e, s) {
                return n("span", {
                    key: s,
                    class: e
                }, [e.includes("ing") ? n("ul", t._l(6, function (t) {
                    return n("li")
                }), 0) : t._e()])
            }), 0)])])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticStyle: {
                    height: "100vh",
                    width: "100vw"
                }
            }, [n("notification"), t._v(" "), !0 === t.show && !1 === this.tempoHide ? n("div", {
                style: {
                    zoom: t.zoom
                },
                on: {
                    contextmenu: function (t) {
                        t.stopPropagation()
                    }
                }
            }, [n("div", {
                staticClass: "phone_wrapper"
            }, [t.coque ? n("div", {
                staticClass: "phone_coque",
                style: {
                    backgroundImage: "url(/html/static/img/coque/" + t.coque.value + ")"
                }
            }) : t._e(), t._v(" "), n("div", {
                staticClass: "phone_screen",
                attrs: {
                    id: "app"
                }
            }, [n("router-view")], 1)])]) : t._e()], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "screen"
            }, [n("PhoneTitle", {
                attrs: {
                    title: "MazeBank",
                    color: "#000",
                    backgroundColor: "#fff"
                },
                on: {
                    back: t.onBackspace
                }
            }), t._v(" "), n("div", {
                staticClass: "elements"
            }, [n("img", {
                staticClass: "logo_maze",
                attrs: {
                    src: "/html/static/img/app_bank/mazebank.png"
                }
            }), t._v(" "), n("div", {
                staticClass: "num-tarj"
            }, [n("span", {
                staticClass: "moneyTitle"
            }, [t._v(t._s(t.IntlString("APP_BANK_TITLE_BALANCE")))]), t._v(" "), n("span", {
                staticClass: "moneyTitle"
            }, [t._v(": $" + t._s(t.bankAmontFormat))])]), t._v(" "), n("div", {
                staticClass: "hr"
            }), t._v(" "), n("div", {
                staticClass: "element"
            }, [n("div", {
                staticClass: "element-content"
            }), t._v(" "), n("div", {
                ref: "form",
                staticClass: "element-content"
            }, [n("input", {
                directives: [{
                    name: "autofocus",
                    rawName: "v-autofocus"
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: t.id,
                    expression: "id"
                }],
                ref: "form0",
                staticClass: "paragonder",
                class: {
                    select: 0 === t.currentSelect
                },
                staticStyle: {
                    "border-radius": "23px",
                    "font-size": "16px"
                },
                attrs: {
                    placeholder: "Card Number (ID)"
                },
                domProps: {
                    value: t.id
                },
                on: {
                    keydown: function (t) {
                        t.preventDefault()
                    },
                    click: function (e) {
                        return e.stopPropagation(), t.setText("id", 0)
                    },
                    input: function (e) {
                        e.target.composing || (t.id = e.target.value)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "element-content"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.paratutar,
                    expression: "paratutar"
                }],
                ref: "form1",
                staticClass: "paragonder",
                class: {
                    select: 1 === t.currentSelect
                },
                staticStyle: {
                    "border-radius": "23px",
                    "font-size": "16px"
                },
                attrs: {
                    placeholder: "$ Amount"
                },
                domProps: {
                    value: t.paratutar
                },
                on: {
                    keydown: function (t) {
                        t.preventDefault()
                    },
                    click: function (e) {
                        return e.stopPropagation(), t.setText("paratutar", 1)
                    },
                    input: function (e) {
                        e.target.composing || (t.paratutar = e.target.value)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "element-content",
                staticStyle: {
                    "margin-top": "30px"
                }
            }, [n("button", {
                ref: "form2",
                staticClass: "buton-transfer",
                class: {
                    select: 2 === t.currentSelect
                },
                attrs: {
                    id: "gonder"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.paragonder.apply(null, arguments)
                    }
                }
            }, [t._v(t._s(t.IntlString("APP_BANK_BUTTON_TRANSFER")))]), n("br"), t._v(" "), n("button", {
                ref: "form3",
                staticClass: "buton-cancel",
                class: {
                    select: 3 === t.currentSelect
                },
                attrs: {
                    id: "iptal"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.iptal.apply(null, arguments)
                    }
                }
            }, [t._v(t._s(t.IntlString("APP_BANK_BUTTON_CANCEL")))])])])])], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [n("list", {
                attrs: {
                    list: t.contactsList,
                    showHeader: !1,
                    title: "Contacts"
                },
                on: {
                    select: t.onSelect
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.currentScreen.title,
                    backgroundColor: "#1da1f2"
                },
                on: {
                    back: t.quit
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content"
            }, [n(t.currentScreen.component, {
                tag: "component"
            })], 1), t._v(" "), n("div", {
                staticClass: "twitter_menu"
            }, t._l(t.screen, function (e, s) {
                return n("div", {
                    key: s,
                    staticClass: "twitter_menu-item",
                    class: {
                        select: s === t.currentScreenIndex
                    },
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.openMenu(s)
                        }
                    }
                }, [n("i", {
                    staticClass: "fa",
                    class: e.icon,
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.openMenu(s)
                        }
                    }
                })])
            }), 0)], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("div", {
                staticClass: "backblur",
                style: {
                    background: "url(" + t.backgroundURL + ")"
                }
            }), t._v(" "), n("InfoBare", {
                attrs: {
                    color: "#fff"
                }
            }), t._v(" "), "Unknown" === t.appelsDisplayName ? n("div", {
                staticClass: "num"
            }, [t._v(t._s(t.appelsDisplayNumber))]) : t._e(), t._v(" "), "Unknown" !== t.appelsDisplayName ? n("div", {
                staticClass: "contactName"
            }, [t._v(t._s(t.appelsDisplayName))]) : t._e(), t._v(" "), n("div", {
                staticClass: "time-display"
            }, [t._v(t._s(t.timeDisplay))]), t._v(" "), t._m(0), t._v(" "), (t.useMouse && t.status, t._e()), t._v(" "), n("div", {
                staticClass: "actionbox"
            }, [n("div", {
                staticClass: "action raccrocher",
                class: {
                    disableTrue: 0 === t.status && 0 !== t.select
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.raccrocher.apply(null, arguments)
                    }
                }
            }, [n("svg", {
                attrs: {
                    viewBox: "0 0 24 24"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.raccrocher.apply(null, arguments)
                    }
                }
            }, [n("g", {
                attrs: {
                    transform: "rotate(135, 12, 12)"
                }
            }, [n("path", {
                attrs: {
                    d: "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                }
            })])])]), t._v(" "), 0 === t.status ? n("div", {
                staticClass: "action deccrocher",
                class: {
                    disableFalse: 0 === t.status && 1 !== t.select
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.deccrocher.apply(null, arguments)
                    }
                }
            }, [n("svg", {
                attrs: {
                    viewBox: "0 0 24 24"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.deccrocher.apply(null, arguments)
                    }
                }
            }, [n("g", {
                attrs: {
                    transform: "rotate(0, 12, 12)"
                }
            }, [n("path", {
                attrs: {
                    d: "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                }
            })])])]) : t._e()])], 1)
        },
        staticRenderFns: [function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "grids"
            }, [n("div", {
                staticClass: "buttons"
            }, [n("i", {
                staticClass: "fa fa-microphone-slash"
            }), n("span", [t._v("mute")])]), t._v(" "), n("div", {
                staticClass: "buttons"
            }, [n("i", {
                staticClass: "fa fa-th"
            }), n("span", [t._v("keypad")])]), t._v(" "), n("div", {
                staticClass: "buttons"
            }, [n("i", {
                staticClass: "fa fa-volume-up"
            }), n("span", [t._v("audio")])]), t._v(" "), n("div", {
                staticClass: "buttons"
            }, [n("i", {
                staticClass: "fa fa-plus"
            }), n("span", [t._v("add call")])]), t._v(" "), n("div", {
                staticClass: "buttons"
            }, [n("i", {
                staticClass: "fa fa-video disabled"
            }), n("span", [t._v("video")])]), t._v(" "), n("div", {
                staticClass: "buttons"
            }, [n("i", {
                staticClass: "fa fa-user-circle"
            }), n("span", [t._v("contacts")])])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app messages"
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.displayContact,
                    align: "center",
                    fontSize: "20px",
                    textColor: "#000"
                },
                on: {
                    back: t.quit
                }
            }), t._v(" "), void 0 !== t.imgZoom ? n("div", {
                staticClass: "img-fullscreen",
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.imgZoom = void 0
                    }
                }
            }, [n("img", {
                attrs: {
                    src: t.imgZoom
                }
            })]) : t._e(), t._v(" "), n("textarea", {
                ref: "copyTextarea",
                staticClass: "copyTextarea"
            }), t._v(" "), n("div", {
                attrs: {
                    id: "sms_list"
                },
                on: {
                    contextmenu: function (e) {
                        return e.preventDefault(), t.showOptions.apply(null, arguments)
                    }
                }
            }, t._l(t.messagesList, function (e, s) {
                return n("div", {
                    key: e.id,
                    staticClass: "sms",
                    class: {
                        select: s === t.selectMessage
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.onActionMessage(e)
                        }
                    }
                }, [n("span", {
                    staticClass: "sms_message",
                    class: {
                        sms_other: 0 === e.owner, sms_me: 0 !== e.owner, multimedia_sms: t.isSMSImage(e)
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.onActionMessage(e)
                        }
                    }
                }, [t.isSMSImage(e) ? n("img", {
                    staticClass: "sms-img",
                    attrs: {
                        src: t.wrapFromNumber(e)
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.onActionMessage(e)
                        }
                    }
                }) : t.isSMSGps(e) ? n("span", {
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.onActionMessage(e)
                        }
                    }
                }, [n("i", {
                    staticClass: "fas fa-location-arrow"
                }), t._v(" Location\n              ")]) : t.isSMSContact(e) ? n("span", {
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.onActionMessage(e)
                        }
                    }
                }, [n("i", {
                    staticClass: "fas fa-user"
                }), t._v(" " + t._s(t.wrapFromNumber(e).replace("Contact: ", "")) + "\n              ")]) : n("span", {
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.onActionMessage(e)
                        }
                    }
                }, [t._v("\n                " + t._s(t.wrapFromNumber(e)) + "\n              ")]), t._v(" "), n("span", {
                    staticStyle: {
                        display: "block",
                        "padding-top": "5px"
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.onActionMessage(e)
                        }
                    }
                }, [n("timeago", {
                    staticClass: "sms_time",
                    attrs: {
                        since: e.time,
                        "auto-update": 20
                    }
                })], 1)])])
            }), 0), t._v(" "), n("div", {
                class: {
                    disabled: !this.eligable()
                },
                attrs: {
                    id: "sms_write"
                },
                on: {
                    contextmenu: function (e) {
                        return e.preventDefault(), t.showOptions.apply(null, arguments)
                    }
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.message,
                    expression: "message"
                }, {
                    name: "autofocus",
                    rawName: "v-autofocus"
                }],
                attrs: {
                    disabled: !this.eligable(),
                    type: "text",
                    placeholder: t.IntlString("APP_MESSAGE_PLACEHOLDER_ENTER_MESSAGE")
                },
                domProps: {
                    value: t.message
                },
                on: {
                    keydown: function (t) {
                        t.preventDefault()
                    },
                    click: function (e) {
                        return e.stopPropagation(), t.sendText.apply(null, arguments)
                    },
                    keyup: function (e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.send.apply(null, arguments))
                    },
                    input: function (e) {
                        e.target.composing || (t.message = e.target.value)
                    }
                }
            }), t._v(" "), n("div", {
                staticClass: "sms_send",
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.send.apply(null, arguments)
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-arrow-up"
            })])])], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.IntlString("APP_CONFIG_TITLE")
                },
                on: {
                    back: t.onBackspace
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content elements"
            }, t._l(t.paramList, function (e, s) {
                return n("div", {
                    key: s,
                    staticClass: "element",
                    class: {
                        select: s === t.currentSelect
                    },
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.onPressItem(s)
                        }
                    }
                }, [n("i", {
                    staticClass: "fa icon",
                    class: e.icons,
                    style: {
                        "--bgColor": e.color || "#8e8e93"
                    },
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.onPressItem(s)
                        }
                    }
                }), t._v(" "), n("div", {
                    staticClass: "element-content",
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.onPressItem(s)
                        }
                    }
                }, [n("span", {
                    staticClass: "element-title",
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.onPressItem(s)
                        }
                    }
                }, [t._v(t._s(e.title))]), t._v(" "), e.value ? n("span", {
                    staticClass: "element-value",
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.onPressItem(s)
                        }
                    }
                }, [t._v(t._s(e.value))]) : t._e(), t._v(" "), n("i", {
                    staticClass: "fa fa-chevron-right small"
                })])])
            }), 0)], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [t.showHeader ? n("PhoneTitle", {
                attrs: {
                    title: t.title,
                    showInfoBare: t.showInfoBare
                },
                on: {
                    back: t.back
                }
            }) : t._e(), t._v(" "), n("div", {
                staticClass: "search-holder"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.search,
                    expression: "search"
                }],
                ref: "search",
                staticClass: "search-element",
                attrs: {
                    type: "text",
                    placeholder: "Search " + this.title + "..."
                },
                domProps: {
                    value: t.search
                },
                on: {
                    keydown: function (t) {
                        t.preventDefault()
                    },
                    keyup: t.filteredList,
                    focus: function (e) {
                        t.busy = !0
                    },
                    blur: function (e) {
                        t.busy = !1
                    },
                    click: function (e) {
                        return e.stopPropagation(), t.selectText.apply(null, arguments)
                    },
                    input: function (e) {
                        e.target.composing || (t.search = e.target.value)
                    }
                }
            }), t._v(" "), n("i", {
                staticClass: "fa fa-search"
            })]), t._v(" "), n("div", {
                staticClass: "phone_content elements"
            }, t._l(t.items, function (e, s) {
                return n("div", {
                    key: s,
                    staticClass: "element",
                    class: {
                        select: s === t.currentSelect
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        },
                        contextmenu: function (n) {
                            return n.preventDefault(), t.optionItem(e)
                        }
                    }
                }, [n("div", {
                    staticClass: "elem-pic",
                    style: t.stylePuce(e),
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [t._v("\n            " + t._s(e.letter || e[t.keyDispay][0]) + "\n          ")]), t._v(" "), void 0 !== e.puce && 0 !== e.puce ? n("div", {
                    staticClass: "elem-puce",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [t._v(t._s(e.puce))]) : t._e(), t._v(" "), void 0 === e.keyDesc || "" === e.keyDesc ? n("div", {
                    staticClass: "elem-title",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [t._v(t._s(e[t.keyDispay]))]) : t._e(), t._v(" "), void 0 !== e.keyDesc && "" !== e.keyDesc ? n("div", {
                    staticClass: "elem-title-has-desc",
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [t._v(t._s(e[t.keyDispay]))]) : t._e(), t._v(" "), void 0 !== e.keyDesc && "" !== e.keyDesc ? n("div", {
                    staticClass: "elem-description",
                    domProps: {
                        innerHTML: t._s(e.keyDesc)
                    },
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [t._v(t._s(e.keyDesc))]) : t._e(), t._v(" "), e.time ? n("span", {
                    staticClass: "elem-time"
                }, [n("timeago", {
                    attrs: {
                        since: e.time,
                        "auto-update": 20
                    }
                })], 1) : t._e()])
            }), 0)], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement;
            return (t._self._c || e)("span", [t._v(t._s(t.time))])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app",
                staticStyle: {
                    width: "3234px",
                    height: "742px",
                    background: "white"
                }
            }, [n("PhoneTitle", {
                attrs: {
                    title: "Calculator",
                    color: "#fff",
                    backgroundColor: "#000"
                },
                on: {
                    back: t.onQuit
                }
            }), t._v(" "), n("div", {
                staticClass: "c-calculator js-calculator"
            }, [t._m(0), t._v(" "), n("div", {
                staticClass: "c-calculator__body js-calculator__body"
            }, [n("button", {
                staticClass: "c-calculator__button c-calculator__button--function js-calculator__clearall",
                attrs: {
                    "data-type": "function",
                    "data-action": "clearAll"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [n("abbr", {
                attrs: {
                    title: "All Clear"
                }
            }, [t._v(" AC ")])]), t._v(" "), n("button", {
                staticClass: "c-calculator__button c-calculator__button--function js-calculator__clear",
                attrs: {
                    "data-type": "function",
                    "data-action": "clear",
                    hidden: ""
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [n("abbr", {
                attrs: {
                    title: "Clear"
                }
            }, [t._v(" C ")])]), t._v(" "), n("button", {
                staticClass: "c-calculator__button c-calculator__button--function",
                attrs: {
                    "data-type": "function",
                    "data-action": "invert"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        ±\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button c-calculator__button--function",
                attrs: {
                    "data-type": "function",
                    "data-action": "percentage"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        %\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button c-calculator__button--operator",
                attrs: {
                    "data-type": "operator",
                    "data-action": "divide"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        ÷\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button",
                attrs: {
                    "data-type": "value",
                    "data-value": "7"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        7\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button",
                attrs: {
                    "data-type": "value",
                    "data-value": "8"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        8\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button",
                attrs: {
                    "data-type": "value",
                    "data-value": "9"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        9\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button c-calculator__button--operator",
                attrs: {
                    "data-type": "operator",
                    "data-action": "multiply"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        ×\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button",
                attrs: {
                    "data-type": "value",
                    "data-value": "4"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        4\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button",
                attrs: {
                    "data-type": "value",
                    "data-value": "5"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        5\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button",
                attrs: {
                    "data-type": "value",
                    "data-value": "6"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        6\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button c-calculator__button--operator",
                attrs: {
                    "data-type": "operator",
                    "data-action": "subtract"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        −\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button",
                attrs: {
                    "data-type": "value",
                    "data-value": "1"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        1\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button",
                attrs: {
                    "data-type": "value",
                    "data-value": "2"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        2\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button",
                attrs: {
                    "data-type": "value",
                    "data-value": "3"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        3\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button c-calculator__button--operator",
                attrs: {
                    "data-type": "operator",
                    "data-action": "add"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        +\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button c-calculator__button--double",
                attrs: {
                    "data-type": "value",
                    "data-value": "0"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        0\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button",
                attrs: {
                    "data-type": "function",
                    "data-action": "decimal"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        .\r\n      ")]), t._v(" "), n("button", {
                staticClass: "c-calculator__button c-calculator__button--operator",
                attrs: {
                    "data-type": "function",
                    "data-action": "calculate"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.clicked.apply(null, arguments)
                    }
                }
            }, [t._v("\r\n        =\r\n      ")])])])], 1)
        },
        staticRenderFns: [function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "c-calculator__header"
            }, [n("div", {
                staticClass: "c-calculator__value js-calculator__value"
            }, [t._v("0")])])
        }]
    }
}, , , function (t, e) {
    t.exports = {
        100: "💯",
        1234: "🔢",
        grinning: "😀",
        grimacing: "😬",
        grin: "😁",
        joy: "😂",
        rofl: "🤣",
        partying: "🥳",
        smiley: "😃",
        smile: "😄",
        sweat_smile: "😅",
        laughing: "😆",
        innocent: "😇",
        wink: "😉",
        blush: "😊",
        slightly_smiling_face: "🙂",
        upside_down_face: "🙃",
        relaxed: "☺️",
        yum: "😋",
        relieved: "😌",
        heart_eyes: "😍",
        smiling_face_with_three_hearts: "🥰",
        kissing_heart: "😘",
        kissing: "😗",
        kissing_smiling_eyes: "😙",
        kissing_closed_eyes: "😚",
        stuck_out_tongue_winking_eye: "😜",
        zany: "🤪",
        raised_eyebrow: "🤨",
        monocle: "🧐",
        stuck_out_tongue_closed_eyes: "😝",
        stuck_out_tongue: "😛",
        money_mouth_face: "🤑",
        nerd_face: "🤓",
        sunglasses: "😎",
        star_struck: "🤩",
        clown_face: "🤡",
        cowboy_hat_face: "🤠",
        hugs: "🤗",
        smirk: "😏",
        no_mouth: "😶",
        neutral_face: "😐",
        expressionless: "😑",
        unamused: "😒",
        roll_eyes: "🙄",
        thinking: "🤔",
        lying_face: "🤥",
        hand_over_mouth: "🤭",
        shushing: "🤫",
        symbols_over_mouth: "🤬",
        exploding_head: "🤯",
        flushed: "😳",
        disappointed: "😞",
        worried: "😟",
        angry: "😠",
        rage: "😡",
        pensive: "😔",
        confused: "😕",
        slightly_frowning_face: "🙁",
        frowning_face: "☹",
        persevere: "😣",
        confounded: "😖",
        tired_face: "😫",
        weary: "😩",
        pleading: "🥺",
        triumph: "😤",
        open_mouth: "😮",
        scream: "😱",
        fearful: "😨",
        cold_sweat: "😰",
        hushed: "😯",
        frowning: "😦",
        anguished: "😧",
        cry: "😢",
        disappointed_relieved: "😥",
        drooling_face: "🤤",
        sleepy: "😪",
        sweat: "😓",
        hot: "🥵",
        cold: "🥶",
        sob: "😭",
        dizzy_face: "😵",
        astonished: "😲",
        zipper_mouth_face: "🤐",
        nauseated_face: "🤢",
        sneezing_face: "🤧",
        vomiting: "🤮",
        mask: "😷",
        face_with_thermometer: "🤒",
        face_with_head_bandage: "🤕",
        woozy: "🥴",
        sleeping: "😴",
        zzz: "💤",
        poop: "💩",
        smiling_imp: "😈",
        imp: "👿",
        japanese_ogre: "👹",
        japanese_goblin: "👺",
        skull: "💀",
        ghost: "👻",
        alien: "👽",
        robot: "🤖",
        smiley_cat: "😺",
        smile_cat: "😸",
        joy_cat: "😹",
        heart_eyes_cat: "😻",
        smirk_cat: "😼",
        kissing_cat: "😽",
        scream_cat: "🙀",
        crying_cat_face: "😿",
        pouting_cat: "😾",
        palms_up: "🤲",
        raised_hands: "🙌",
        clap: "👏",
        wave: "👋",
        call_me_hand: "🤙",
        "\\+1": "👍",
        "-1": "👎",
        facepunch: "👊",
        fist: "✊",
        fist_left: "🤛",
        fist_right: "🤜",
        v: "✌",
        ok_hand: "👌",
        raised_hand: "✋",
        raised_back_of_hand: "🤚",
        open_hands: "👐",
        muscle: "💪",
        pray: "🙏",
        foot: "🦶",
        leg: "🦵",
        handshake: "🤝",
        point_up: "☝",
        point_up_2: "👆",
        point_down: "👇",
        point_left: "👈",
        point_right: "👉",
        fu: "🖕",
        raised_hand_with_fingers_splayed: "🖐",
        love_you: "🤟",
        metal: "🤘",
        crossed_fingers: "🤞",
        vulcan_salute: "🖖",
        writing_hand: "✍",
        selfie: "🤳",
        nail_care: "💅",
        lips: "👄",
        tooth: "🦷",
        tongue: "👅",
        ear: "👂",
        nose: "👃",
        eye: "👁",
        eyes: "👀",
        brain: "🧠",
        bust_in_silhouette: "👤",
        busts_in_silhouette: "👥",
        speaking_head: "🗣",
        baby: "👶",
        child: "🧒",
        boy: "👦",
        girl: "👧",
        adult: "🧑",
        man: "👨",
        woman: "👩",
        blonde_woman: "👱‍♀️",
        blonde_man: "👱",
        bearded_person: "🧔",
        older_adult: "🧓",
        older_man: "👴",
        older_woman: "👵",
        man_with_gua_pi_mao: "👲",
        woman_with_headscarf: "🧕",
        woman_with_turban: "👳‍♀️",
        man_with_turban: "👳",
        policewoman: "👮‍♀️",
        policeman: "👮",
        construction_worker_woman: "👷‍♀️",
        construction_worker_man: "👷",
        guardswoman: "💂‍♀️",
        guardsman: "💂",
        female_detective: "🕵️‍♀️",
        male_detective: "🕵",
        woman_health_worker: "👩‍⚕️",
        man_health_worker: "👨‍⚕️",
        woman_farmer: "👩‍🌾",
        man_farmer: "👨‍🌾",
        woman_cook: "👩‍🍳",
        man_cook: "👨‍🍳",
        woman_student: "👩‍🎓",
        man_student: "👨‍🎓",
        woman_singer: "👩‍🎤",
        man_singer: "👨‍🎤",
        woman_teacher: "👩‍🏫",
        man_teacher: "👨‍🏫",
        woman_factory_worker: "👩‍🏭",
        man_factory_worker: "👨‍🏭",
        woman_technologist: "👩‍💻",
        man_technologist: "👨‍💻",
        woman_office_worker: "👩‍💼",
        man_office_worker: "👨‍💼"
    }
}], [80]);
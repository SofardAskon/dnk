!(function () {
  var e = {
      1045: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return s;
          },
        });
        const s = 1023;
      },
      4559: function (e, t, n) {
        e.exports = n(9335);
      },
      1786: function (e, t, n) {
        "use strict";
        var s = n(8266),
          i = n(5608),
          r = n(159),
          o = n(9568),
          a = n(3943),
          l = n(8201),
          c = n(1745),
          d = n(7979);
        e.exports = function (e) {
          return new Promise(function (t, n) {
            var u = e.data,
              p = e.headers,
              h = e.responseType;
            s.isFormData(u) && delete p["Content-Type"];
            var f = new XMLHttpRequest();
            if (e.auth) {
              var m = e.auth.username || "",
                g = e.auth.password
                  ? unescape(encodeURIComponent(e.auth.password))
                  : "";
              p.Authorization = "Basic " + btoa(m + ":" + g);
            }
            var v = a(e.baseURL, e.url);
            function w() {
              if (f) {
                var s =
                    "getAllResponseHeaders" in f
                      ? l(f.getAllResponseHeaders())
                      : null,
                  r = {
                    data:
                      h && "text" !== h && "json" !== h
                        ? f.response
                        : f.responseText,
                    status: f.status,
                    statusText: f.statusText,
                    headers: s,
                    config: e,
                    request: f,
                  };
                i(t, n, r), (f = null);
              }
            }
            if (
              (f.open(
                e.method.toUpperCase(),
                o(v, e.params, e.paramsSerializer),
                !0
              ),
              (f.timeout = e.timeout),
              "onloadend" in f
                ? (f.onloadend = w)
                : (f.onreadystatechange = function () {
                    f &&
                      4 === f.readyState &&
                      (0 !== f.status ||
                        (f.responseURL &&
                          0 === f.responseURL.indexOf("file:"))) &&
                      setTimeout(w);
                  }),
              (f.onabort = function () {
                f &&
                  (n(d("Request aborted", e, "ECONNABORTED", f)), (f = null));
              }),
              (f.onerror = function () {
                n(d("Network Error", e, null, f)), (f = null);
              }),
              (f.ontimeout = function () {
                var t = "timeout of " + e.timeout + "ms exceeded";
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  n(
                    d(
                      t,
                      e,
                      e.transitional && e.transitional.clarifyTimeoutError
                        ? "ETIMEDOUT"
                        : "ECONNABORTED",
                      f
                    )
                  ),
                  (f = null);
              }),
              s.isStandardBrowserEnv())
            ) {
              var y =
                (e.withCredentials || c(v)) && e.xsrfCookieName
                  ? r.read(e.xsrfCookieName)
                  : void 0;
              y && (p[e.xsrfHeaderName] = y);
            }
            "setRequestHeader" in f &&
              s.forEach(p, function (e, t) {
                void 0 === u && "content-type" === t.toLowerCase()
                  ? delete p[t]
                  : f.setRequestHeader(t, e);
              }),
              s.isUndefined(e.withCredentials) ||
                (f.withCredentials = !!e.withCredentials),
              h && "json" !== h && (f.responseType = e.responseType),
              "function" == typeof e.onDownloadProgress &&
                f.addEventListener("progress", e.onDownloadProgress),
              "function" == typeof e.onUploadProgress &&
                f.upload &&
                f.upload.addEventListener("progress", e.onUploadProgress),
              e.cancelToken &&
                e.cancelToken.promise.then(function (e) {
                  f && (f.abort(), n(e), (f = null));
                }),
              u || (u = null),
              f.send(u);
          });
        };
      },
      9335: function (e, t, n) {
        "use strict";
        var s = n(8266),
          i = n(4345),
          r = n(7929),
          o = n(650);
        function a(e) {
          var t = new r(e),
            n = i(r.prototype.request, t);
          return s.extend(n, r.prototype, t), s.extend(n, t), n;
        }
        var l = a(n(9046));
        (l.Axios = r),
          (l.create = function (e) {
            return a(o(l.defaults, e));
          }),
          (l.Cancel = n(9760)),
          (l.CancelToken = n(7510)),
          (l.isCancel = n(8825)),
          (l.all = function (e) {
            return Promise.all(e);
          }),
          (l.spread = n(4346)),
          (l.isAxiosError = n(3276)),
          (e.exports = l),
          (e.exports.default = l);
      },
      9760: function (e) {
        "use strict";
        function t(e) {
          this.message = e;
        }
        (t.prototype.toString = function () {
          return "Cancel" + (this.message ? ": " + this.message : "");
        }),
          (t.prototype.__CANCEL__ = !0),
          (e.exports = t);
      },
      7510: function (e, t, n) {
        "use strict";
        var s = n(9760);
        function i(e) {
          if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
          var t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          var n = this;
          e(function (e) {
            n.reason || ((n.reason = new s(e)), t(n.reason));
          });
        }
        (i.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (i.source = function () {
            var e;
            return {
              token: new i(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }),
          (e.exports = i);
      },
      8825: function (e) {
        "use strict";
        e.exports = function (e) {
          return !(!e || !e.__CANCEL__);
        };
      },
      7929: function (e, t, n) {
        "use strict";
        var s = n(8266),
          i = n(9568),
          r = n(6252),
          o = n(6029),
          a = n(650),
          l = n(123),
          c = l.validators;
        function d(e) {
          (this.defaults = e),
            (this.interceptors = { request: new r(), response: new r() });
        }
        (d.prototype.request = function (e) {
          "string" == typeof e
            ? ((e = arguments[1] || {}).url = arguments[0])
            : (e = e || {}),
            (e = a(this.defaults, e)).method
              ? (e.method = e.method.toLowerCase())
              : this.defaults.method
              ? (e.method = this.defaults.method.toLowerCase())
              : (e.method = "get");
          var t = e.transitional;
          void 0 !== t &&
            l.assertOptions(
              t,
              {
                silentJSONParsing: c.transitional(c.boolean, "1.0.0"),
                forcedJSONParsing: c.transitional(c.boolean, "1.0.0"),
                clarifyTimeoutError: c.transitional(c.boolean, "1.0.0"),
              },
              !1
            );
          var n = [],
            s = !0;
          this.interceptors.request.forEach(function (t) {
            ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
              ((s = s && t.synchronous), n.unshift(t.fulfilled, t.rejected));
          });
          var i,
            r = [];
          if (
            (this.interceptors.response.forEach(function (e) {
              r.push(e.fulfilled, e.rejected);
            }),
            !s)
          ) {
            var d = [o, void 0];
            for (
              Array.prototype.unshift.apply(d, n),
                d = d.concat(r),
                i = Promise.resolve(e);
              d.length;

            )
              i = i.then(d.shift(), d.shift());
            return i;
          }
          for (var u = e; n.length; ) {
            var p = n.shift(),
              h = n.shift();
            try {
              u = p(u);
            } catch (e) {
              h(e);
              break;
            }
          }
          try {
            i = o(u);
          } catch (e) {
            return Promise.reject(e);
          }
          for (; r.length; ) i = i.then(r.shift(), r.shift());
          return i;
        }),
          (d.prototype.getUri = function (e) {
            return (
              (e = a(this.defaults, e)),
              i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            );
          }),
          s.forEach(["delete", "get", "head", "options"], function (e) {
            d.prototype[e] = function (t, n) {
              return this.request(
                a(n || {}, { method: e, url: t, data: (n || {}).data })
              );
            };
          }),
          s.forEach(["post", "put", "patch"], function (e) {
            d.prototype[e] = function (t, n, s) {
              return this.request(a(s || {}, { method: e, url: t, data: n }));
            };
          }),
          (e.exports = d);
      },
      6252: function (e, t, n) {
        "use strict";
        var s = n(8266);
        function i() {
          this.handlers = [];
        }
        (i.prototype.use = function (e, t, n) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!n && n.synchronous,
              runWhen: n ? n.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }),
          (i.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null);
          }),
          (i.prototype.forEach = function (e) {
            s.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }),
          (e.exports = i);
      },
      3943: function (e, t, n) {
        "use strict";
        var s = n(406),
          i = n(5027);
        e.exports = function (e, t) {
          return e && !s(t) ? i(e, t) : t;
        };
      },
      7979: function (e, t, n) {
        "use strict";
        var s = n(2050);
        e.exports = function (e, t, n, i, r) {
          var o = new Error(e);
          return s(o, t, n, i, r);
        };
      },
      6029: function (e, t, n) {
        "use strict";
        var s = n(8266),
          i = n(2661),
          r = n(8825),
          o = n(9046);
        function a(e) {
          e.cancelToken && e.cancelToken.throwIfRequested();
        }
        e.exports = function (e) {
          return (
            a(e),
            (e.headers = e.headers || {}),
            (e.data = i.call(e, e.data, e.headers, e.transformRequest)),
            (e.headers = s.merge(
              e.headers.common || {},
              e.headers[e.method] || {},
              e.headers
            )),
            s.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              function (t) {
                delete e.headers[t];
              }
            ),
            (e.adapter || o.adapter)(e).then(
              function (t) {
                return (
                  a(e),
                  (t.data = i.call(e, t.data, t.headers, e.transformResponse)),
                  t
                );
              },
              function (t) {
                return (
                  r(t) ||
                    (a(e),
                    t &&
                      t.response &&
                      (t.response.data = i.call(
                        e,
                        t.response.data,
                        t.response.headers,
                        e.transformResponse
                      ))),
                  Promise.reject(t)
                );
              }
            )
          );
        };
      },
      2050: function (e) {
        "use strict";
        e.exports = function (e, t, n, s, i) {
          return (
            (e.config = t),
            n && (e.code = n),
            (e.request = s),
            (e.response = i),
            (e.isAxiosError = !0),
            (e.toJSON = function () {
              return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code,
              };
            }),
            e
          );
        };
      },
      650: function (e, t, n) {
        "use strict";
        var s = n(8266);
        e.exports = function (e, t) {
          t = t || {};
          var n = {},
            i = ["url", "method", "data"],
            r = ["headers", "auth", "proxy", "params"],
            o = [
              "baseURL",
              "transformRequest",
              "transformResponse",
              "paramsSerializer",
              "timeout",
              "timeoutMessage",
              "withCredentials",
              "adapter",
              "responseType",
              "xsrfCookieName",
              "xsrfHeaderName",
              "onUploadProgress",
              "onDownloadProgress",
              "decompress",
              "maxContentLength",
              "maxBodyLength",
              "maxRedirects",
              "transport",
              "httpAgent",
              "httpsAgent",
              "cancelToken",
              "socketPath",
              "responseEncoding",
            ],
            a = ["validateStatus"];
          function l(e, t) {
            return s.isPlainObject(e) && s.isPlainObject(t)
              ? s.merge(e, t)
              : s.isPlainObject(t)
              ? s.merge({}, t)
              : s.isArray(t)
              ? t.slice()
              : t;
          }
          function c(i) {
            s.isUndefined(t[i])
              ? s.isUndefined(e[i]) || (n[i] = l(void 0, e[i]))
              : (n[i] = l(e[i], t[i]));
          }
          s.forEach(i, function (e) {
            s.isUndefined(t[e]) || (n[e] = l(void 0, t[e]));
          }),
            s.forEach(r, c),
            s.forEach(o, function (i) {
              s.isUndefined(t[i])
                ? s.isUndefined(e[i]) || (n[i] = l(void 0, e[i]))
                : (n[i] = l(void 0, t[i]));
            }),
            s.forEach(a, function (s) {
              s in t
                ? (n[s] = l(e[s], t[s]))
                : s in e && (n[s] = l(void 0, e[s]));
            });
          var d = i.concat(r).concat(o).concat(a),
            u = Object.keys(e)
              .concat(Object.keys(t))
              .filter(function (e) {
                return -1 === d.indexOf(e);
              });
          return s.forEach(u, c), n;
        };
      },
      5608: function (e, t, n) {
        "use strict";
        var s = n(7979);
        e.exports = function (e, t, n) {
          var i = n.config.validateStatus;
          n.status && i && !i(n.status)
            ? t(
                s(
                  "Request failed with status code " + n.status,
                  n.config,
                  null,
                  n.request,
                  n
                )
              )
            : e(n);
        };
      },
      2661: function (e, t, n) {
        "use strict";
        var s = n(8266),
          i = n(9046);
        e.exports = function (e, t, n) {
          var r = this || i;
          return (
            s.forEach(n, function (n) {
              e = n.call(r, e, t);
            }),
            e
          );
        };
      },
      9046: function (e, t, n) {
        "use strict";
        var s = n(8266),
          i = n(1490),
          r = n(2050),
          o = { "Content-Type": "application/x-www-form-urlencoded" };
        function a(e, t) {
          !s.isUndefined(e) &&
            s.isUndefined(e["Content-Type"]) &&
            (e["Content-Type"] = t);
        }
        var l,
          c = {
            transitional: {
              silentJSONParsing: !0,
              forcedJSONParsing: !0,
              clarifyTimeoutError: !1,
            },
            adapter:
              (("undefined" != typeof XMLHttpRequest ||
                ("undefined" != typeof process &&
                  "[object process]" ===
                    Object.prototype.toString.call(process))) &&
                (l = n(1786)),
              l),
            transformRequest: [
              function (e, t) {
                return (
                  i(t, "Accept"),
                  i(t, "Content-Type"),
                  s.isFormData(e) ||
                  s.isArrayBuffer(e) ||
                  s.isBuffer(e) ||
                  s.isStream(e) ||
                  s.isFile(e) ||
                  s.isBlob(e)
                    ? e
                    : s.isArrayBufferView(e)
                    ? e.buffer
                    : s.isURLSearchParams(e)
                    ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                      e.toString())
                    : s.isObject(e) ||
                      (t && "application/json" === t["Content-Type"])
                    ? (a(t, "application/json"),
                      (function (e, t, n) {
                        if (s.isString(e))
                          try {
                            return (t || JSON.parse)(e), s.trim(e);
                          } catch (e) {
                            if ("SyntaxError" !== e.name) throw e;
                          }
                        return (n || JSON.stringify)(e);
                      })(e))
                    : e
                );
              },
            ],
            transformResponse: [
              function (e) {
                var t = this.transitional,
                  n = t && t.silentJSONParsing,
                  i = t && t.forcedJSONParsing,
                  o = !n && "json" === this.responseType;
                if (o || (i && s.isString(e) && e.length))
                  try {
                    return JSON.parse(e);
                  } catch (e) {
                    if (o) {
                      if ("SyntaxError" === e.name)
                        throw r(e, this, "E_JSON_PARSE");
                      throw e;
                    }
                  }
                return e;
              },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function (e) {
              return e >= 200 && e < 300;
            },
          };
        (c.headers = {
          common: { Accept: "application/json, text/plain, */*" },
        }),
          s.forEach(["delete", "get", "head"], function (e) {
            c.headers[e] = {};
          }),
          s.forEach(["post", "put", "patch"], function (e) {
            c.headers[e] = s.merge(o);
          }),
          (e.exports = c);
      },
      4345: function (e) {
        "use strict";
        e.exports = function (e, t) {
          return function () {
            for (var n = new Array(arguments.length), s = 0; s < n.length; s++)
              n[s] = arguments[s];
            return e.apply(t, n);
          };
        };
      },
      9568: function (e, t, n) {
        "use strict";
        var s = n(8266);
        function i(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        e.exports = function (e, t, n) {
          if (!t) return e;
          var r;
          if (n) r = n(t);
          else if (s.isURLSearchParams(t)) r = t.toString();
          else {
            var o = [];
            s.forEach(t, function (e, t) {
              null != e &&
                (s.isArray(e) ? (t += "[]") : (e = [e]),
                s.forEach(e, function (e) {
                  s.isDate(e)
                    ? (e = e.toISOString())
                    : s.isObject(e) && (e = JSON.stringify(e)),
                    o.push(i(t) + "=" + i(e));
                }));
            }),
              (r = o.join("&"));
          }
          if (r) {
            var a = e.indexOf("#");
            -1 !== a && (e = e.slice(0, a)),
              (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
          }
          return e;
        };
      },
      5027: function (e) {
        "use strict";
        e.exports = function (e, t) {
          return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
      },
      159: function (e, t, n) {
        "use strict";
        var s = n(8266);
        e.exports = s.isStandardBrowserEnv()
          ? {
              write: function (e, t, n, i, r, o) {
                var a = [];
                a.push(e + "=" + encodeURIComponent(t)),
                  s.isNumber(n) &&
                    a.push("expires=" + new Date(n).toGMTString()),
                  s.isString(i) && a.push("path=" + i),
                  s.isString(r) && a.push("domain=" + r),
                  !0 === o && a.push("secure"),
                  (document.cookie = a.join("; "));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
      },
      406: function (e) {
        "use strict";
        e.exports = function (e) {
          return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
      },
      3276: function (e) {
        "use strict";
        e.exports = function (e) {
          return "object" == typeof e && !0 === e.isAxiosError;
        };
      },
      1745: function (e, t, n) {
        "use strict";
        var s = n(8266);
        e.exports = s.isStandardBrowserEnv()
          ? (function () {
              var e,
                t = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");
              function i(e) {
                var s = e;
                return (
                  t && (n.setAttribute("href", s), (s = n.href)),
                  n.setAttribute("href", s),
                  {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname:
                      "/" === n.pathname.charAt(0)
                        ? n.pathname
                        : "/" + n.pathname,
                  }
                );
              }
              return (
                (e = i(window.location.href)),
                function (t) {
                  var n = s.isString(t) ? i(t) : t;
                  return n.protocol === e.protocol && n.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      },
      1490: function (e, t, n) {
        "use strict";
        var s = n(8266);
        e.exports = function (e, t) {
          s.forEach(e, function (n, s) {
            s !== t &&
              s.toUpperCase() === t.toUpperCase() &&
              ((e[t] = n), delete e[s]);
          });
        };
      },
      8201: function (e, t, n) {
        "use strict";
        var s = n(8266),
          i = [
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ];
        e.exports = function (e) {
          var t,
            n,
            r,
            o = {};
          return e
            ? (s.forEach(e.split("\n"), function (e) {
                if (
                  ((r = e.indexOf(":")),
                  (t = s.trim(e.substr(0, r)).toLowerCase()),
                  (n = s.trim(e.substr(r + 1))),
                  t)
                ) {
                  if (o[t] && i.indexOf(t) >= 0) return;
                  o[t] =
                    "set-cookie" === t
                      ? (o[t] ? o[t] : []).concat([n])
                      : o[t]
                      ? o[t] + ", " + n
                      : n;
                }
              }),
              o)
            : o;
        };
      },
      4346: function (e) {
        "use strict";
        e.exports = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        };
      },
      123: function (e, t, n) {
        "use strict";
        var s = n(8593),
          i = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          function (e, t) {
            i[e] = function (n) {
              return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
            };
          }
        );
        var r = {},
          o = s.version.split(".");
        function a(e, t) {
          for (
            var n = t ? t.split(".") : o, s = e.split("."), i = 0;
            i < 3;
            i++
          ) {
            if (n[i] > s[i]) return !0;
            if (n[i] < s[i]) return !1;
          }
          return !1;
        }
        (i.transitional = function (e, t, n) {
          var i = t && a(t);
          function o(e, t) {
            return (
              "[Axios v" +
              s.version +
              "] Transitional option '" +
              e +
              "'" +
              t +
              (n ? ". " + n : "")
            );
          }
          return function (n, s, a) {
            if (!1 === e) throw new Error(o(s, " has been removed in " + t));
            return (
              i &&
                !r[s] &&
                ((r[s] = !0),
                console.warn(
                  o(
                    s,
                    " has been deprecated since v" +
                      t +
                      " and will be removed in the near future"
                  )
                )),
              !e || e(n, s, a)
            );
          };
        }),
          (e.exports = {
            isOlderVersion: a,
            assertOptions: function (e, t, n) {
              if ("object" != typeof e)
                throw new TypeError("options must be an object");
              for (var s = Object.keys(e), i = s.length; i-- > 0; ) {
                var r = s[i],
                  o = t[r];
                if (o) {
                  var a = e[r],
                    l = void 0 === a || o(a, r, e);
                  if (!0 !== l)
                    throw new TypeError("option " + r + " must be " + l);
                } else if (!0 !== n) throw Error("Unknown option " + r);
              }
            },
            validators: i,
          });
      },
      8266: function (e, t, n) {
        "use strict";
        var s = n(4345),
          i = Object.prototype.toString;
        function r(e) {
          return "[object Array]" === i.call(e);
        }
        function o(e) {
          return void 0 === e;
        }
        function a(e) {
          return null !== e && "object" == typeof e;
        }
        function l(e) {
          if ("[object Object]" !== i.call(e)) return !1;
          var t = Object.getPrototypeOf(e);
          return null === t || t === Object.prototype;
        }
        function c(e) {
          return "[object Function]" === i.call(e);
        }
        function d(e, t) {
          if (null != e)
            if (("object" != typeof e && (e = [e]), r(e)))
              for (var n = 0, s = e.length; n < s; n++)
                t.call(null, e[n], n, e);
            else
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) &&
                  t.call(null, e[i], i, e);
        }
        e.exports = {
          isArray: r,
          isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === i.call(e);
          },
          isBuffer: function (e) {
            return (
              null !== e &&
              !o(e) &&
              null !== e.constructor &&
              !o(e.constructor) &&
              "function" == typeof e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData;
          },
          isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && e.buffer instanceof ArrayBuffer;
          },
          isString: function (e) {
            return "string" == typeof e;
          },
          isNumber: function (e) {
            return "number" == typeof e;
          },
          isObject: a,
          isPlainObject: l,
          isUndefined: o,
          isDate: function (e) {
            return "[object Date]" === i.call(e);
          },
          isFile: function (e) {
            return "[object File]" === i.call(e);
          },
          isBlob: function (e) {
            return "[object Blob]" === i.call(e);
          },
          isFunction: c,
          isStream: function (e) {
            return a(e) && c(e.pipe);
          },
          isURLSearchParams: function (e) {
            return (
              "undefined" != typeof URLSearchParams &&
              e instanceof URLSearchParams
            );
          },
          isStandardBrowserEnv: function () {
            return (
              ("undefined" == typeof navigator ||
                ("ReactNative" !== navigator.product &&
                  "NativeScript" !== navigator.product &&
                  "NS" !== navigator.product)) &&
              "undefined" != typeof window &&
              "undefined" != typeof document
            );
          },
          forEach: d,
          merge: function e() {
            var t = {};
            function n(n, s) {
              l(t[s]) && l(n)
                ? (t[s] = e(t[s], n))
                : l(n)
                ? (t[s] = e({}, n))
                : r(n)
                ? (t[s] = n.slice())
                : (t[s] = n);
            }
            for (var s = 0, i = arguments.length; s < i; s++)
              d(arguments[s], n);
            return t;
          },
          extend: function (e, t, n) {
            return (
              d(t, function (t, i) {
                e[i] = n && "function" == typeof t ? s(t, n) : t;
              }),
              e
            );
          },
          trim: function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
        };
      },
      5190: function (e, t, n) {
        "use strict";
        n.d(t, {
          q: function () {
            return i;
          },
        });
        var s = n(1045);
        function i(e) {
          "complete" === document.readyState
            ? requestAnimationFrame(() => {
                !(function (e) {
                  const t = document.querySelector("body");
                  let n = 0,
                    i = window.innerHeight,
                    o = window.innerWidth,
                    a = [],
                    l = [],
                    c = "down",
                    d = "down",
                    u = 0,
                    p = !0,
                    h = !1,
                    f = 0,
                    m = !1,
                    g = 0,
                    v = 0,
                    w = [],
                    y = 0,
                    b = !1;
                  const C = 0.3,
                    S = 0.1,
                    x = "animation__screen",
                    E = "animation__screen--change-background",
                    T = "animation__text-x-scroll",
                    L = Array.from(e.querySelectorAll(`.${x}`));
                  let $ = document.querySelector(
                    ".animation__scroll-handler-wrapper"
                  );
                  const k = document.querySelector(".header__logo"),
                    M = document.querySelector(".header"),
                    _ = e.querySelector(".portfolio__chart-mask"),
                    A = Array.from(
                      e.querySelectorAll(".animation__texting-item")
                    ).map((e) => ({
                      $selector: e,
                      text: e.innerText,
                      textLength: e.innerText.length,
                      state: !1,
                    })),
                    P = Array.from(
                      e.querySelectorAll(".animation__img-parallax")
                    );
                  A.forEach((e) => {
                    const { $selector: t } = e;
                    (t.style.height = `${t.getBoundingClientRect().height}px`),
                      (t.style.width = `${t.getBoundingClientRect().width}px`),
                      (t.innerText = "");
                  });
                  const O = Array.from(
                    e.querySelectorAll(".animation__counter")
                  ).map((e) => ({
                    $selector: e,
                    count: e.dataset.animationCounter,
                    state: !1,
                  }));
                  let B,
                    I,
                    q = {};
                  function N() {
                    z(),
                      (B = new V()),
                      (I = new Y()),
                      window.innerWidth > s.Z
                        ? (window.requestAnimationFrame(j), B.init())
                        : e.dispatchEvent(new Event("init"));
                  }
                  function z() {
                    window.addEventListener("resize", F),
                      e.addEventListener("init", () => {
                        const n = e.querySelector(".intro__video-item");
                        if (n) {
                          const i = document.querySelector(".loader"),
                            r = e.querySelector(".intro__name"),
                            o = (n.duration, 800);
                          t.classList.add("init"),
                            n.pause(),
                            (n.currentTime = 0),
                            e.classList.add("animation--preshow"),
                            (e.style.transition = `all ${o}ms`);
                          let a = setInterval(() => {
                            let t = new WebKitCSSMatrix(
                                window.getComputedStyle(e).transform
                              ),
                              l = 1;
                            if (
                              (window.innerWidth > s.Z && (l = 1.4), t.a === l)
                            )
                              if (
                                (i.classList.add("loader--hide"),
                                e.classList.add("animation--show"),
                                M.classList.add("header--show"),
                                n.classList.add("intro__video-item--show"),
                                setTimeout(() => {
                                  n.play(),
                                    setTimeout(() => {
                                      r.classList.add("intro__name--show");
                                    }, 3030);
                                }, o),
                                clearInterval(a),
                                window.innerWidth > s.Z)
                              ) {
                                const e = window.location.hash;
                                let t = "";
                                "" !== e && ((t = e.split("#")[1]), D(t));
                              } else
                                setTimeout(() => {
                                  I.toggleEffects();
                                }, 1e3);
                          }, 5);
                        } else if (
                          document
                            .querySelector("body")
                            .classList.contains("body-case")
                        ) {
                          const n = document.querySelector(".loader"),
                            i = 800;
                          t.classList.add("init"),
                            e.classList.add("animation--preshow"),
                            (e.style.transition = `all ${i}ms`);
                          let r = setInterval(() => {
                            let t = new WebKitCSSMatrix(
                                window.getComputedStyle(e).transform
                              ),
                              i = 1;
                            if (
                              (window.innerWidth > s.Z && (i = 1.4), t.a === i)
                            )
                              if (
                                (n.classList.add("loader--hide"),
                                e.classList.add("animation--show"),
                                M.classList.add("header--show"),
                                clearInterval(r),
                                window.innerWidth > s.Z)
                              ) {
                                const e = window.location.hash;
                                let t = "";
                                "" !== e && ((t = e.split("#")[1]), D(t));
                              } else
                                setTimeout(() => {
                                  I.toggleEffects();
                                }, 1e3);
                          }, 5);
                        }
                      }),
                      window.innerWidth > s.Z
                        ? (e.addEventListener("scroll-menu", (e) => {
                            D(e.detail.dataLink);
                          }),
                          window.addEventListener("wheel", (e) => {
                            H(e) ? G(e) : R(e.deltaY);
                          }),
                          window.addEventListener("touchstart", (e) => {
                            (h = !0), (f = e.touches[0].screenY);
                          }),
                          window.addEventListener("touchend", () => {
                            h = !1;
                          }),
                          window.addEventListener("touchmove", (e) => {
                            if (h) {
                              R(5 * (f - e.touches[0].screenY)),
                                (f = e.touches[0].screenY);
                            }
                          }),
                          window.addEventListener("keydown", (e) => {
                            ("Space" !== e.code && "PageDown" !== e.code) ||
                              R(i),
                              "PageUp" === e.code && R(-i),
                              "Home" === e.code && R(-(y + i)),
                              "End" === e.code && R(n),
                              "ArrowDown" === e.code && R(0.1 * i),
                              "ArrowUp" === e.code && R(-0.1 * i);
                          }),
                          $.addEventListener("mousedown", (e) => {
                            (m = !0), (g = e.clientY);
                          }),
                          window.addEventListener("mouseup", () => {
                            m = !1;
                          }),
                          window.addEventListener("mousemove", (e) => {
                            let t = !0;
                            if (
                              ((e.clientY > i || e.clientY < 0) && (t = !1),
                              (e.clientX > o || e.clientX < 0) && (t = !1),
                              t || (m = !1),
                              m)
                            ) {
                              e.preventDefault(),
                                R(((e.clientY - g) / (v / 100)) * (n / 100)),
                                (g = e.clientY);
                            }
                          }))
                        : window.addEventListener("scroll", (e) => {
                            I.toggleEffects();
                          });
                  }
                  function D(e) {
                    w =
                      y / C + (q[e] - y) / C + 1 >= n / C
                        ? [n / C]
                        : [(q[e] - y) / C + 1];
                  }
                  function j() {
                    w.length > 0 && (G({ deltaY: w[0] }), w.shift()),
                      window.requestAnimationFrame(j);
                  }
                  function R(e) {
                    let t = e / C,
                      n = t,
                      s = 1;
                    w.length > 0 &&
                      ((n = w.reduce(function (e, t) {
                        return e + t;
                      })),
                      (t += n),
                      (w = []));
                    let i = t;
                    function r() {
                      let e = 0;
                      w.length > 0 &&
                        (e = w.reduce(function (e, t) {
                          return e + t;
                        }));
                      let n = 0.08 * i;
                      (i -= n),
                        i + e < t * s &&
                          w.length < 100 &&
                          n > 0.5 &&
                          (w.push(n * s), r());
                    }
                    i < 0 && (s = -1), (i *= s), r();
                  }
                  function F() {
                    let e = 0;
                    for (let t = 0; t < L.length; t++) {
                      const n = L[t];
                      let s,
                        r = n.getBoundingClientRect().height,
                        o = 0;
                      if (
                        ((s = t > 0 ? a[t - 1].bottom : 0),
                        n.querySelector(`.${T}`))
                      ) {
                        const e = n.querySelector(`.${T}`);
                        o = new WebKitCSSMatrix(
                          window.getComputedStyle(e).transform
                        ).m41;
                        const t = s + o;
                        (r += o),
                          l.push({
                            top: s,
                            bottom: t,
                            scrollHeight: o,
                            $slideText: e,
                          });
                      }
                      let c = s + r,
                        d = !1,
                        u = 0,
                        p = 0;
                      n.classList.contains(E) &&
                        ((d = !0), (p = i * (1 - S)), (u = s - p)),
                        a.push({
                          height: r,
                          top: s,
                          bottom: c,
                          changeBackground: d,
                          changeBackgroundTop: u,
                          changeBackgroundHeight: p,
                          slideTextScrollHeight: o,
                          changeBackgroundState: !1,
                        }),
                        n.id && (q[n.id] = e),
                        (e += r);
                    }
                    (n = e - i),
                      (v = i - $.getBoundingClientRect().height),
                      W();
                  }
                  function H(e) {
                    let t = !1,
                      n = e.wheelDeltaY;
                    return (
                      n && n < 0 && (n *= -1),
                      n && n === -3 * e.deltaY && (t = !0),
                      (0 === n || n % 120 > 0 || b % 120 > 0) && (t = !0),
                      (b = n),
                      t
                    );
                  }
                  function G(e) {
                    if (((y += e.deltaY * C), y > n))
                      return (
                        (y = n), void (p || (B.changePosition(y), (p = !0)))
                      );
                    if (y < 0)
                      return (
                        (y = 0), void (p || (B.changePosition(y), (p = !0)))
                      );
                    p = !1;
                    const t = y;
                    u > t ? (c = "up") : u < t && (c = "down"),
                      d !== c && (w = []),
                      (u = t),
                      (d = c),
                      B.changePosition(t),
                      I.toggleEffects(),
                      ($.style.transform = `translateY(${
                        (v / 100) * (t / (n / 100))
                      }px)`);
                  }
                  function W() {}
                  function V() {
                    function t() {
                      F(),
                        L.forEach((e, t) => {
                          e.style.transform =
                            t > 0
                              ? `matrix(1.00,0.00,0.00,1.00,0,${i})`
                              : "matrix(1.00,0.00,0.00,1.00,0,-.1)";
                        }),
                        e.dispatchEvent(new Event("init"));
                    }
                    function n(e) {
                      for (let t = 0; t < L.length; t++) {
                        const n = L[t],
                          { top: s } = a[t],
                          { bottom: r } = a[t],
                          { height: o } = a[t],
                          { slideTextScrollHeight: d } = a[t],
                          { changeBackground: u } = a[t],
                          { changeBackgroundTop: p } = a[t],
                          { changeBackgroundHeight: h } = a[t];
                        e + i >= s && e <= r
                          ? e <= p + h && u
                            ? (e > p &&
                                ("down" === c
                                  ? a[t].changeBackgroundState ||
                                    (R(h), (a[t].changeBackgroundState = !0))
                                  : (a[t].changeBackgroundState = !1)),
                              (n.style.transform = `matrix(1, 0, 0, 1, 0, ${
                                s - e
                              })`))
                            : e <= s && !u
                            ? (n.style.transform = `matrix(1, 0, 0, 1, 0, ${
                                s - e
                              })`)
                            : e > s + d
                            ? (n.style.transform = `matrix(1, 0, 0, 1, 0, ${
                                s - e + d
                              })`)
                            : ((n.style.transform = "matrix(1, 0, 0, 1, 0, 0)"),
                              l.forEach((t) => {
                                const { top: n } = t,
                                  { bottom: s } = t,
                                  { $slideText: i } = t,
                                  { scrollHeight: r } = t;
                                if (e > n && e <= s) {
                                  let t = (e - n) / (r / 100);
                                  i.style.transform = `matrix(1.00,0.00,0.00,1.00,${
                                    r - (r / 100) * t
                                  },0)`;
                                } else
                                  i.style.transform =
                                    e < n
                                      ? `matrix(1.00,0.00,0.00,1.00,${r},0)`
                                      : "matrix(1.00,0.00,0.00,1.00,0,0)";
                              }))
                          : (n.style.transform =
                              e + i < s
                                ? `matrix(1, 0, 0, 1, 0, ${i})`
                                : u
                                ? `matrix(1, 0, 0, 1, 0, -${o - d + h})`
                                : `matrix(1, 0, 0, 1, 0, -${o - d})`);
                      }
                    }
                    (this.init = t), (this.changePosition = n);
                  }
                  function Y() {
                    const t = "animation__block",
                      n = "animation__title",
                      s = "animation__title-wrapper",
                      o = "animation__text",
                      a = "animation__text-wrapper",
                      l = Array.from(e.querySelectorAll(`.${n}`)),
                      d = Array.from(e.querySelectorAll(`.${o}`)),
                      u = "animation__block--ready-title",
                      p = "animation__block--not-ready-slide-text",
                      h = "animation__title--active",
                      f = "animation__title-wrapper--active",
                      m = "animation__text--active",
                      g = "animation__text-wrapper--active",
                      v =
                        (e.querySelector(".portfolio__desc"),
                        e.querySelector(".portfolio__desc-item--1"),
                        e.querySelector(".portfolio__chart")),
                      w =
                        (e.querySelectorAll(".we-are__owners-item"),
                        e.querySelectorAll(".clients__item--main"));
                    function y() {
                      for (let e = 0; e < l.length; e++) {
                        const n = l[e],
                          i = n.closest(`.${t}`),
                          r = n.getBoundingClientRect().top;
                        let o = 1;
                        "up" === c && (o = 1),
                          r <= window.innerHeight * o &&
                          !i.classList.contains(p)
                            ? (i.classList.add(u),
                              n.classList.add(h),
                              n.closest(`.${s}`).classList.add(f))
                            : r > window.innerHeight * o &&
                              (n.classList.remove(h),
                              n.closest(`.${s}`).classList.remove(f),
                              0 ===
                                Array.from(i.querySelectorAll(`.${h}`))
                                  .length && i.classList.remove(u));
                      }
                    }
                    function b() {
                      for (let e = 0; e < d.length; e++) {
                        const n = d[e],
                          s = n.closest(`.${t}`),
                          i = n.getBoundingClientRect().top;
                        let r = 1;
                        "up" === c && (r = 1),
                          i <= window.innerHeight * r
                            ? s.classList.contains(u) &&
                              !s.classList.contains(p)
                              ? (n.classList.add(m),
                                n.closest(`.${a}`).classList.add(g))
                              : (n.classList.remove(m),
                                n.closest(`.${a}`).classList.remove(g))
                            : i > window.innerHeight * r &&
                              (n.classList.remove(m),
                              n.closest(`.${a}`).classList.remove(g));
                      }
                    }
                    function C() {
                      const e = (window.innerHeight / 3) * 2,
                        t =
                          v.getBoundingClientRect().top -
                          i +
                          v.getBoundingClientRect().height / 2,
                        n = (-1 * t) / (e / 100);
                      _.style.transform =
                        t < 0 && -1 * t < e
                          ? `translateX(${n}%)`
                          : t > 0
                          ? "translateX(0%)"
                          : "translateX(100%)";
                    }
                    function S() {
                      const e = [
                        k.getBoundingClientRect().left,
                        k.getBoundingClientRect().top,
                      ];
                      Array.from(document.elementsFromPoint(...e)).forEach(
                        (e) => {
                          if (e.classList.contains("animation__screen")) {
                            let t = window.getComputedStyle(e).backgroundColor,
                              n = t
                                .match(
                                  /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/
                                )
                                .slice(1),
                              s = r(n[0], n[1], n[2]),
                              i = n[3];
                            (i && 0 !== parseFloat(i)) ||
                              isNaN(parseFloat(i)) ||
                              ((t = window.getComputedStyle(
                                document.querySelector("html")
                              ).backgroundColor),
                              (n = t
                                .match(
                                  /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/
                                )
                                .slice(1)),
                              (s = r(n[0], n[1], n[2]))),
                              s > 90
                                ? M.classList.add("header--black")
                                : M.classList.remove("header--black");
                          }
                        }
                      );
                    }
                    function x() {
                      P.forEach((e) => {
                        const t =
                            window.innerHeight +
                            e.getBoundingClientRect().height,
                          n = e.querySelector(".animation__img-parallax-item"),
                          s = e.getBoundingClientRect().top - i,
                          r =
                            e.getBoundingClientRect().height -
                            n.getBoundingClientRect().height,
                          o = (-1 * s) / (t / 100);
                        n.style.transform =
                          o < 0
                            ? "translateY(0)"
                            : o > 0 && o < 100
                            ? `translateY(${(r / 100) * o}px)`
                            : `translateY(-${r}px)`;
                      });
                    }
                    function E() {
                      w.forEach((e) => {
                        const t = (window.innerHeight / 3) * 2,
                          n = e.getBoundingClientRect().top - i,
                          s = (-1 * n) / (t / 100);
                        e.style.transform =
                          n < 0 && -1 * n < t
                            ? s < 10
                              ? "scale(0.1)"
                              : `scale(${s / 100})`
                            : n > 0
                            ? "scale(0.1)"
                            : "scale(1)";
                      });
                    }
                    function T() {
                      A.forEach((e, t) => {
                        const { $selector: n } = e,
                          { text: s } = e,
                          { textLength: r } = e,
                          { state: o } = e,
                          a = n.getBoundingClientRect().top - i;
                        a > 0
                          ? n.classList.remove(".testimonial__item--texting")
                          : a < 0 && a > -i
                          ? o ||
                            ($(n, s, r),
                            (A[t].state = !0),
                            n.classList.remove("testimonial__item--texting"))
                          : n.classList.remove("testimonial__item--texting");
                      });
                    }
                    function L() {
                      O.forEach((e, t) => {
                        const { $selector: n } = e,
                          { count: s } = e,
                          { state: r } = e,
                          o = n.getBoundingClientRect().top - i;
                        o > 0
                          ? ((n.innerText = "0%"), (O[t].state = !1))
                          : o < 0 && o > -i
                          ? r || (B(n, s), (O[t].state = !0))
                          : (n.innerText = `${s}%`);
                      });
                    }
                    function $(e, t, n) {
                      let s = 0;
                      function i() {
                        var r, o;
                        (e.innerText = t.slice(0, s)),
                          s++,
                          s % 2 == 0
                            ? e.classList.add("testimonial__item--texting")
                            : e.classList.remove("testimonial__item--texting"),
                          s < n
                            ? setTimeout(() => {
                                i();
                              }, ((r = 30), (o = 80), (r = Math.ceil(r)), (o = Math.floor(o)), Math.floor(Math.random() * (o - r)) + r))
                            : e.classList.remove("testimonial__item--texting");
                      }
                      i();
                    }
                    function B(e, t) {
                      let n = 1,
                        s = 10;
                      function i() {
                        (e.innerText = `${n}%`),
                          n++,
                          n <= t &&
                            setTimeout(() => {
                              i();
                            }, s);
                      }
                      i();
                    }
                    function I() {
                      y(), b(), _ && C(), x(), E(), T(), L(), S();
                    }
                    this.toggleEffects = I;
                  }
                  N();
                })(e);
              })
            : setTimeout(() => {
                i(e);
              }, 5);
        }
        function r(e, t, n) {
          (e /= 255), (t /= 255), (n /= 255);
          let s = Math.min(e, t, n),
            i = 0;
          return (
            (i = (Math.max(e, t, n) + s) / 2), (i = +(100 * i).toFixed(1)), i
          );
        }
      },
      6788: function () {},
      6698: function () {
        document.querySelector(".case-intro");
      },
      4270: function () {
        Array.from(document.querySelectorAll(".char-hover")).forEach((e) => {
          e.querySelectorAll(".char-hover__item").forEach((e) => {
            const t = e.innerHTML.trim();
            e.innerHTML = "";
            let n = document.createElement("div");
            n.classList.add("char-hover__item-inner");
            let s = document.createElement("div");
            s.classList.add("char-hover__item-inner-hover");
            for (let e = 0; e < t.length; e++) {
              let s = t[e],
                i = document.createElement("div");
              i.classList.add("char-hover__item-inner-char"),
                (i.innerText = s),
                " " === s &&
                  ((i.innerText = "вЂ‰"),
                  i.classList.add("char-hover__item-inner-char--empty")),
                (i.style.cssText = "--char-index:" + (t.length - e)),
                n.insertAdjacentElement("beforeend", i);
            }
            for (let e = 0; e < t.length; e++) {
              let n = t[e],
                i = document.createElement("div");
              i.classList.add("char-hover__item-inner-char-hover"),
                (i.innerText = n),
                " " === n &&
                  ((i.innerText = "вЂ‰"),
                  i.classList.add("char-hover__item-inner-char-hover--empty")),
                (i.style.cssText = "--char-index:" + (t.length - e)),
                s.insertAdjacentElement("beforeend", i);
            }
            e.insertAdjacentElement("beforeend", n),
              e.insertAdjacentElement("beforeend", s);
          });
        });
      },
      994: function () {},
      8395: function () {
        function e(e, t) {
          return (
            (e = Math.ceil(e)),
            (t = Math.floor(t)),
            Math.floor(Math.random() * (t - e)) + e
          );
        }
        Array.from(document.querySelectorAll(".flashlight")).forEach((t) => {
          !(function (t) {
            const n = parseFloat(t.dataset.flashlightSize),
              s = 1e3 * parseInt(window.getComputedStyle(t).transitionDuration);
            function i() {
              (t.style.clipPath = `circle(${n}vw at ${e(
                0,
                t.getBoundingClientRect().width
              )}px ${e(0, t.getBoundingClientRect().height / 3)}px)`),
                setTimeout(i, s);
            }
            i();
          })(t);
        });
      },
      9722: function () {},
      2362: function (e, t, n) {
        "use strict";
        function s(e) {
          if ("" !== e.id) return e.id;
          {
            let s =
              "id_" +
              ((t = 1e3),
              (n = 1e4),
              (t = Math.ceil(t)),
              (n = Math.floor(n)),
              Math.floor(Math.random() * (n - t)) + t);
            return (e.id = s), s;
          }
          var t, n;
        }
        class i {
          constructor(e) {
            (this.formClass = e && e.formClass ? e.formClass : "form-check"),
              (this.$form =
                e && e.$form
                  ? e.$form
                  : document.getElementsByClassName(this.formClass)[0]),
              (this.formFieldClass =
                e && e.formClass ? e.formClass : "form-check__field"),
              (this.$formFields =
                e && e.$formFields
                  ? e.$formFields
                  : this.$form.getElementsByClassName(this.formFieldClass)),
              (this.errorWrapperClass =
                e && e.errorWrapperClass
                  ? e.errorWrapperClass
                  : "form-check__error"),
              (this.errorShowClass =
                e && e.errorShowClass
                  ? e.errorShowClass
                  : "form-check__error--show"),
              (this.inputFocusClass =
                e && e.inputFocusClass
                  ? e.inputFocusClass
                  : "form-check__field--focus"),
              (this.buttonClass =
                e && e.buttonClass ? e.buttonClass : "form-check__button"),
              (this.$buttons =
                e && e.$buttons
                  ? e.$buttons
                  : this.$form.getElementsByClassName(this.buttonClass)),
              (this.buttonDisabledClass =
                e && e.buttonDisabledClass
                  ? e.buttonDisabledClass
                  : "form-check__button--disabled"),
              (this.rulesList = new Map([
                [
                  "input-empty",
                  {
                    checkEvents: ["change", "input"],
                    errorMessage: "Required field",
                    functionCheck: this.validateInputEmpty.bind(this),
                  },
                ],
                [
                  "min-count-symbol",
                  {
                    checkEvents: ["change", "input"],
                    errorMessage: "РњРёРЅРёРјСѓРј СЃРёРјРІРѕР»РѕРІ: ",
                    functionCheck: this.validateMinCountSymbols.bind(this),
                  },
                ],
                [
                  "phone-with-mask",
                  {
                    checkEvents: ["change", "input"],
                    errorMessage: "РќРµРєРѕСЂСЂРµРєС‚РЅС‹Р№ С‚РµР»РµС„РѕРЅ",
                    functionCheck: this.validatePhoneWithMak.bind(this),
                  },
                ],
                [
                  "count-symbol",
                  {
                    checkEvents: ["change", "input"],
                    errorMessage: "РќРµРѕР±С…РѕРґРёРјРѕ СЃРёРјРІРѕР»РѕРІ: ",
                    functionCheck: this.validateCountSymbols.bind(this),
                  },
                ],
                [
                  "select-empty",
                  {
                    checkEvents: ["change"],
                    errorMessage: "Р’С‹Р±РµСЂРёС‚Рµ Р·РЅР°С‡РµРЅРёРµ",
                    functionCheck: this.validateSelect.bind(this),
                  },
                ],
              ]));
          }
          init() {
            (this.fieldsArray = null),
              (this.fieldsArray = this.createFieldsArray()),
              (this.fieldListeners = []),
              (this.buttonListeners = []),
              (this.focusinInputListeners = []),
              (this.focusoutInputListeners = []),
              this.handleAllListeners(!0),
              this.createErrorWrappers(),
              this.validationForm(!1);
          }
          createFieldsArray() {
            let e = [];
            for (let t of this.$formFields) {
              let n,
                s = t.dataset.elem,
                i = t.dataset.rule.split(", ");
              n = "self-dispatch" !== s ? t.querySelector(s) : t;
              let r = { elem: s, rules: i, $elem: n, $field: t };
              e.push(r);
            }
            return e;
          }
          validationForm(e) {
            let t = [];
            for (let n of this.fieldsArray) {
              let s = this.validateField(n, e);
              !1 !== s && t.push(s);
            }
            if (t.length > 0)
              for (let e of this.$buttons)
                e.classList.add(this.buttonDisabledClass);
            else
              for (let e of this.$buttons)
                e.classList.remove(this.buttonDisabledClass);
          }
          validateField(e, t) {
            let n = [];
            for (let t of e.rules) {
              let s = this.rulesList.get(t).errorMessage,
                i = this.rulesList.get(t).functionCheck(e.$field, e.$elem, s);
              i.validate || n.push(i);
            }
            return n.length > 0
              ? (n.sort((e, t) => (e.priority < t.priority ? 1 : -1)),
                (n = n[0]),
                (e.$error.textContent = n.message),
                t && e.$field.classList.add(this.errorShowClass),
                n)
              : (e.$field.classList.remove(this.errorShowClass), !1);
          }
          createErrorWrappers() {
            for (let e of this.fieldsArray) {
              let t = `<div class="${this.errorWrapperClass}"></div>`;
              e.$field.getElementsByClassName(this.errorWrapperClass).length >
                0 && e.$field.insertAdjacentHTML("beforeEnd", t),
                e.$field.insertAdjacentHTML("beforeEnd", t),
                (e.$error = e.$field.getElementsByClassName(
                  this.errorWrapperClass
                )[0]);
            }
          }
          removeErrorWrappers() {
            for (let e of this.fieldsArray) {
              e.$field.classList.remove(this.errorShowClass),
                e.$field
                  .getElementsByClassName(this.errorWrapperClass)[0]
                  .remove();
            }
          }
          handleAllListeners(e) {
            let t = 0,
              n = 0;
            for (let s of this.fieldsArray) {
              for (let n of s.rules) {
                let i = this.rulesList.get(n).checkEvents;
                this.fieldListeners.push(this.addFieldEvent.bind(this, s));
                for (let n of i)
                  e
                    ? s.$elem.addEventListener(n, this.fieldListeners[t])
                    : s.$elem.removeEventListener(n, this.fieldListeners[t]);
                t++;
              }
              "input" === s.elem || "textarea" === s.elem
                ? (this.focusinInputListeners.push(
                    this.addInputFocusinEvent.bind(this, s)
                  ),
                  this.focusoutInputListeners.push(
                    this.addInputFocusoutEvent.bind(this, s)
                  ),
                  e
                    ? (s.$elem.addEventListener(
                        "focusin",
                        this.focusinInputListeners[n]
                      ),
                      s.$elem.addEventListener(
                        "focusout",
                        this.focusoutInputListeners[n]
                      ))
                    : (s.$elem.removeEventListener(
                        "focusin",
                        this.focusinInputListeners[n]
                      ),
                      s.$elem.removeEventListener(
                        "focusout",
                        this.focusoutInputListeners[n]
                      )))
                : (this.focusinInputListeners.push(""),
                  this.focusoutInputListeners.push("")),
                n++;
            }
            if ((this.buttonListeners.push(this.addButtonEvent.bind(this)), e))
              for (let e of this.$buttons)
                e.addEventListener("click", this.buttonListeners[0]);
            else
              for (let e of this.$buttons)
                e.removeEventListener("click", this.buttonListeners[0]);
          }
          addFieldEvent(e) {
            this.validateField(e, !0), this.validationForm(!1);
          }
          addInputFocusinEvent(e) {
            e.$field.classList.add(this.inputFocusClass);
          }
          addInputFocusoutEvent(e) {
            e.$field.classList.remove(this.inputFocusClass);
          }
          addButtonEvent(e) {
            this.validationForm(!0);
            for (let t of this.$buttons)
              t.classList.contains(this.buttonDisabledClass) &&
                e.preventDefault();
          }
          validateInputEmpty(e, t, n) {
            return { validate: "" !== t.value, message: n, priority: 100 };
          }
          validateMinCountSymbols(e, t, n) {
            let s = t.value,
              i = parseInt(e.dataset.minCountSymbol);
            return { validate: s.length >= i, message: n + i, priority: 200 };
          }
          validateCountSymbols(e, t, n) {
            let s = t.value,
              i = parseInt(e.dataset.countSymbol);
            return { validate: s.length === i, message: n + i, priority: 200 };
          }
          validatePhoneWithMak(e, t, n) {
            return { validate: t.value.length > 15, message: n, priority: 200 };
          }
          validateSelect(e, t, n) {
            let s = t.value;
            return {
              validate: "default" !== s && "" !== s,
              message: n,
              priority: 200,
            };
          }
          refresh() {
            this.handleAllListeners(!1),
              this.removeErrorWrappers(),
              this.init();
          }
        }
        let r = Array.from(document.querySelectorAll(".form-check"));
        if (((window.formsArray = new Map()), r.length > 0))
          for (let e = 0; e < r.length; e++) {
            let t = r[e],
              n = s(t);
            window.formsArray.set(n, new i({ $form: t })),
              window.formsArray.get(n).init();
          }
      },
      8044: function (e, t, n) {
        const s = n(4559);
        Array.from(document.querySelectorAll(".have-a-task")).forEach((e) => {
          !(function (e) {
            const t = e.querySelector(".have-a-task__form-button"),
              n = e.querySelector(".form-check").id,
              i = e.querySelector('[data-form-name="name"]'),
              r = e.querySelector('[data-form-name="phone"]'),
              o = e.querySelector('[data-form-name="mail"]'),
              a = e.querySelector('[data-form-name="message"]');
            t.addEventListener("click", () => {
              if (t.classList.contains("form-check__button--disabled")) return;
              let e = {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                },
                l = new URLSearchParams();
              const c = `Name: ${i.value}\n\n`,
                d = `Phone: ${r.value}\n\n`,
                u = `Mail: ${o.value}\n\n`,
                p = `Message: ${a.value}\n\n`;
              l.append("lead", c + d + u + p),
                (i.value = ""),
                (r.value = ""),
                (o.value = ""),
                (a.value = ""),
                i.dispatchEvent(new Event("input")),
                r.dispatchEvent(new Event("input")),
                o.dispatchEvent(new Event("input")),
                a.dispatchEvent(new Event("input")),
                modals.open("modal-thank-you"),
                window.formsArray.get(n).refresh(),
                s
                  .post("/send.php", l, e)
                  .then((e) => {})
                  .catch((e) => {});
            });
          })(e);
        });
      },
      9202: function () {},
      8787: function () {},
      1599: function () {
        const e = document.querySelector(".lets-discuss__text-carousel");
        e &&
          (function (e) {
            e.querySelector(".lets-discuss__text-carousel-wrapper");
            const t = Array.from(
              e.querySelectorAll(".lets-discuss__text-carousel-item")
            );
            let n = t[0].getBoundingClientRect().height,
              s = t[0].getBoundingClientRect().width;
            (e.style.height = n + "px"), (e.style.width = s + "px");
            const i = 3e3;
            let r = 0;
            const o = "lets-discuss__text-carousel-item--active";
            t.forEach((e) => {
              e.style.position = "absolute";
            }),
              window.addEventListener("resize", () => {
                (n = t[0].getBoundingClientRect().height),
                  (s = t[0].getBoundingClientRect().width),
                  (e.style.height = n + "px"),
                  (e.style.width = s + "px");
              }),
              setInterval(() => {
                r > t.length - 1 && (r = 0),
                  t.forEach((e) => {
                    e.classList.remove(o);
                  }),
                  t[r].classList.add(o),
                  r++;
              }, i);
          })(e);
      },
      1313: function () {
        function e(e, t) {
          return (
            (e = Math.ceil(e)),
            (t = Math.floor(t)),
            Math.floor(Math.random() * (t - e)) + e
          );
        }
        document.querySelectorAll(".light").forEach((t) => {
          !(function (t) {
            const n = window.innerWidth / 2,
              s = window.innerHeight / 2,
              i = 1e3 * parseInt(window.getComputedStyle(t).transitionDuration);
            function r() {
              (t.style.transform = `translate(${e(-n, n)}px, ${e(-s, s)}px)`),
                setTimeout(r, i);
            }
            r();
          })(t);
        });
      },
      5070: function () {},
      3441: function (e, t, n) {
        "use strict";
        var s = n(5190);
        const i = n(4559),
          r = document.querySelector(".loader"),
          o = document.querySelector(".animation");
        function a() {
          (0, s.q)(o);
        }
        r
          ? document.querySelector("body").classList.contains("body-case")
            ? (function () {
                const e = document.querySelector(".loader__progress"),
                  t = document.querySelector(".loader__line-progress"),
                  n = Array.from(
                    document.querySelectorAll("[data-loader-img]")
                  ).length,
                  s = setInterval(() => {
                    let i = window.loadState.length;
                    if (i < n) {
                      let s = parseInt(i / (n / 100));
                      (e.innerText = `${s}%`),
                        (t.style.transform = `scaleX(0${s / 100})`);
                    } else a(), clearInterval(s);
                  }, 50);
              })()
            : (function () {
                const e = document.querySelector(".intro__video-item"),
                  t = document.querySelector(".loader__progress"),
                  n = document.querySelector(".loader__line-progress");
                function s() {
                  i.get("/assets/video/intro-video.mp4", {
                    headers: { Accept: "video/mp4;charset=UTF-8" },
                    responseType: "blob",
                    onDownloadProgress: (e) => {
                      let s = parseInt(e.loaded / (e.total / 100));
                      (t.innerText = ""),
                        (t.innerText = `${s}%`),
                        (n.style.transform = `scaleX(0${s / 100})`);
                    },
                  }).then((t) => {
                    const n = (window.URL || window.webkitURL).createObjectURL(
                      new Blob([t.data], { type: "video/mp4" })
                    );
                    e.setAttribute("src", n), a();
                  });
                }
                s();
              })()
          : a();
      },
      8966: function () {
        const e = document.querySelector(".magnet");
        e &&
          (function (e) {
            const t = e.querySelector(".magnet__canvas"),
              n = document.querySelector(".intro__about-button-icon");
            let s,
              i,
              r = t.getContext("2d"),
              o = { x: 81.5, y: 55, r: 9, shiftX: 6, shiftY: 4 },
              a = {},
              l = 0,
              c = 0,
              d = 0,
              u = 0,
              p = 0,
              h = [],
              f = [],
              m = 0,
              g = 0,
              v = 0,
              w = 0,
              y = !0;
            function b() {
              T(), C(), L();
            }
            function C() {
              window.addEventListener("mousemove", (e) => {
                let n = e.clientX,
                  s = e.clientY,
                  i = t.getBoundingClientRect().top,
                  r = t.getBoundingClientRect().bottom,
                  o = t.getBoundingClientRect().left,
                  a = t.getBoundingClientRect().right;
                if (n < o || n > a || s < i || s > r) return void (y || E());
                y = !1;
                let l = ((n - o - c) / u) * -1,
                  h = ((s - i - d) / p) * 2;
                l < -200 || l > 200 || h < -100 || h > 100
                  ? y || E()
                  : (S(l), x(h));
              });
            }
            function S(e) {
              let t = (a.shiftX / 100) * e,
                n = t - m;
              h.push(n), (m = t);
            }
            function x(e) {
              let t = (a.shiftY / 100) * e,
                n = t - g;
              f.push(n), (g = t);
            }
            function E() {
              let e = 3,
                t = 1,
                s = 1;
              function i() {
                let n = g / (a.shiftY / 100);
                1 === t
                  ? n - e > 0
                    ? (x(n - e), i())
                    : x(0)
                  : n + e < 0
                  ? (x(n + e), i())
                  : x(0);
              }
              function r() {
                let t = m / (a.shiftX / 100);
                1 === s
                  ? t - e > 0
                    ? (S(t - e), r())
                    : S(0)
                  : t + e < 0
                  ? (S(t + e), r())
                  : S(0);
              }
              g < 0 && (t = -1),
                m < 0 && (s = -1),
                i(),
                r(),
                (n.style.transform = "none"),
                (y = !0);
            }
            function T() {
              (s = t.getBoundingClientRect().width),
                (i = t.getBoundingClientRect().height),
                (t.width = s),
                (t.height = i),
                (a.x = o.x * (s / 100)),
                (a.y = o.y * (i / 100)),
                (a.r = o.r * (s / 100)),
                (a.shiftX = o.shiftX * (s / 100)),
                (a.shiftY = o.shiftY * (s / 100)),
                (l = (100 - 2 * (100 - o.x)) * (s / 100)),
                (c = a.x),
                (d = i / 2),
                (u = l / 100),
                (p = i / 100);
            }
            function L() {
              let { x: e } = a,
                { y: s } = a,
                { r: i } = a,
                o = (i / 100) * 55.2334,
                l = 0.2,
                c = 7;
              if (
                (r.clearRect(0, 0, t.width, t.height),
                r.beginPath(),
                (r.fillStyle = "#768f94"),
                h.length > 0)
              ) {
                let e = $(h);
                h = [];
                for (let t = 0; t < c; t++) h.push(e / c);
                (v += h[0]), h.shift();
              }
              if (f.length > 0) {
                let e = $(f);
                f = [];
                for (let t = 0; t < c; t++) f.push(e / c);
                (w += f[0]), f.shift();
              }
              let d = v * l * -1,
                u = w * l,
                p = m > 0 ? m : -m,
                y = g > 0 ? g : -g,
                b = -1;
              g < 0 && (b = 1),
                (n.style.transform = `translate(${d}px, ${u}px) rotate(${
                  Math.atan(y / p) * (180 / Math.PI) * b
                }deg)`);
              let C = [e + d, s - i + u],
                S = [e + o + d, s - i + u],
                x = [e + i + d, s - o + u],
                E = [e + i + d, s + u],
                T = [e + i + d, s + o + u],
                k = [e + o + d, s + i + u],
                M = [e + d, s + i + u],
                _ = [e - o + d, s + i + u],
                A = [e - i - v, s + o + w],
                P = [e - i - v, s + w],
                O = [e - i - v, s - o + w],
                B = [e - o + d, s - i + u];
              r.moveTo(...C),
                r.bezierCurveTo(...S, ...x, ...E),
                r.bezierCurveTo(...T, ...k, ...M),
                r.bezierCurveTo(..._, ...A, ...P),
                r.bezierCurveTo(...O, ...B, ...C),
                r.fill(),
                requestAnimationFrame(L);
            }
            function $(e) {
              return e.reduce((e, t) => e + t, 0);
            }
            b();
          })(e);
      },
      7093: function (e, t, n) {
        "use strict";
        var s = n(1045);
        const i = document.querySelector(".menu");
        i &&
          (function (e) {
            const t = e.querySelectorAll("[data-menu-redirect]"),
              n = window.location.href.split("#")[0],
              i = window.location.href.substring(
                window.location.origin.length,
                n.length
              );
            let r = !0;
            i.length > 1 && (r = !1);
            t.forEach((e) => {
              const t = e.dataset.menuRedirect;
              r && window.innerWidth > s.Z
                ? e.addEventListener("click", () => {
                    document
                      .querySelector(".animation")
                      .dispatchEvent(
                        new CustomEvent("scroll-menu", {
                          detail: { dataLink: t },
                        })
                      );
                  })
                : e.addEventListener("click", () => {
                    window.location.href = `/#${t}`;
                  });
            });
          })(i);
      },
      6574: function () {
        window.modals = new (class {
          constructor(e) {
            (this.transitionDuration = 500),
              (this.modalClass = "modal"),
              (this.modalOpenClass = "modal--open"),
              (this.modalShowClass = "modal--show"),
              (this.modalCloseCurrentClass = "modal--close-current"),
              this.init();
          }
          init() {
            this.setup();
          }
          setup() {
            (this.$modals = Array.from(
              document.getElementsByClassName(this.modalClass)
            )),
              this.modalClass,
              this.$modals,
              (this.modalsArray = new Map()),
              this.$modals.forEach((e) => {
                let t = "data-modal-close";
                e.classList.contains(this.modalCloseCurrentClass) &&
                  (t = "data-modal-close-current"),
                  (this.transitionDuration =
                    1e3 *
                    parseFloat(
                      window.getComputedStyle(
                        e.querySelector(`.${this.modalClass}__background`)
                      ).transitionDuration
                    )),
                  this.modalsArray.set(e.id, e);
              }),
              (this.$openButtons =
                document.querySelectorAll("[data-modal-open]")),
              (this.$closeButtons =
                document.querySelectorAll("[data-modal-close]")),
              (this.$closeCurrentButtons = document.querySelectorAll(
                "[data-modal-close-current]"
              )),
              (this.clickOpenHandler = this.clickOpenHandler.bind(this)),
              (this.clickCloseHandler = this.clickCloseHandler.bind(this)),
              (this.clickCloseCurrentHandler =
                this.clickCloseCurrentHandler.bind(this)),
              this.$openButtons.forEach((e) => {
                e.addEventListener("click", this.clickOpenHandler);
              }),
              this.$closeButtons.forEach((e) => {
                e.addEventListener("click", this.clickCloseHandler);
              }),
              this.$closeCurrentButtons.forEach((e) => {
                e.addEventListener("click", this.clickCloseCurrentHandler);
              });
          }
          clickOpenHandler(e) {
            e.target.dataset.modalOpen
              ? this.open(e.target.dataset.modalOpen)
              : this.open(
                  e.target.closest("[data-modal-open]").dataset.modalOpen
                );
          }
          clickCloseHandler() {
            this.close();
          }
          clickCloseCurrentHandler(e) {
            this.closeCurrent(e.target.closest(`.${this.modalClass}`));
          }
          open(e) {
            document.querySelector("html").classList.add("open-modal"),
              this.modalsArray,
              this.modalOpenClass,
              this.modalsArray.get(e).classList.add(this.modalOpenClass),
              setTimeout(() => {
                if (
                  (this.modalsArray.get(e).classList.add(this.modalShowClass),
                  this.modalsArray
                    .get(e)
                    .querySelector(".modal__youtube-wrapper"))
                ) {
                  const t = document.importNode(
                    this.modalsArray
                      .get(e)
                      .querySelector(".modal__youtube-template").content,
                    !0
                  );
                  this.modalsArray
                    .get(e)
                    .querySelector(".modal__youtube")
                    .appendChild(t);
                }
              }, this.transitionDuration);
          }
          closeCurrent(e) {
            e.classList.remove(this.modalShowClass),
              e.querySelector(".modal__youtube-wrapper") &&
                (e.querySelector(".modal__youtube").innerHTML = ""),
              setTimeout(() => {
                e.classList.remove(this.modalOpenClass);
              }, this.transitionDuration),
              e.dispatchEvent(new Event("close", { bubbles: !0 }));
          }
          close() {
            this.$modals.forEach((e) => {
              this.closeCurrent(e);
            }),
              document.querySelector("html").classList.remove("open-modal");
          }
        })();
      },
      1551: function () {
        const e = document.querySelector(".not-found__bottom");
        e &&
          e.addEventListener("click", () => {
            window.location.href = "/#portfolio";
          });
      },
      7561: function () {},
      1833: function (e, t, n) {
        "use strict";
        let s = Array.from(document.querySelectorAll(".placeholder"));
        if (s.length > 0) for (let e of s) i(e);
        function i(e) {
          let t,
            n,
            s = "placeholder--not-empty",
            i = "placeholder--empty",
            r = e.querySelector(".placeholder__input");
          function o() {
            (t = r.closest(".placeholder")),
              (n = t.querySelector(".placeholder__item")),
              r.value.length > 0
                ? (t.classList.add(s), t.classList.remove(i))
                : (t.classList.remove(s), t.classList.add(i));
          }
          r.addEventListener("input", o), r.addEventListener("change", o), o();
        }
      },
      9408: function (e, t, n) {
        "use strict";
        function s(e) {
          return (
            null !== e &&
            "object" == typeof e &&
            "constructor" in e &&
            e.constructor === Object
          );
        }
        function i(e = {}, t = {}) {
          Object.keys(t).forEach((n) => {
            void 0 === e[n]
              ? (e[n] = t[n])
              : s(t[n]) &&
                s(e[n]) &&
                Object.keys(t[n]).length > 0 &&
                i(e[n], t[n]);
          });
        }
        const r = {
          body: {},
          addEventListener() {},
          removeEventListener() {},
          activeElement: { blur() {}, nodeName: "" },
          querySelector: () => null,
          querySelectorAll: () => [],
          getElementById: () => null,
          createEvent: () => ({ initEvent() {} }),
          createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => [],
          }),
          createElementNS: () => ({}),
          importNode: () => null,
          location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: "",
          },
        };
        function o() {
          const e = "undefined" != typeof document ? document : {};
          return i(e, r), e;
        }
        const a = {
          document: r,
          navigator: { userAgent: "" },
          location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: "",
          },
          history: { replaceState() {}, pushState() {}, go() {}, back() {} },
          CustomEvent: function () {
            return this;
          },
          addEventListener() {},
          removeEventListener() {},
          getComputedStyle: () => ({ getPropertyValue: () => "" }),
          Image() {},
          Date() {},
          screen: {},
          setTimeout() {},
          clearTimeout() {},
          matchMedia: () => ({}),
          requestAnimationFrame: (e) =>
            "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
          cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
          },
        };
        function l() {
          const e = "undefined" != typeof window ? window : {};
          return i(e, a), e;
        }
        class c extends Array {
          constructor(e) {
            "number" == typeof e
              ? super(e)
              : (super(...(e || [])),
                (function (e) {
                  const t = e.__proto__;
                  Object.defineProperty(e, "__proto__", {
                    get: () => t,
                    set(e) {
                      t.__proto__ = e;
                    },
                  });
                })(this));
          }
        }
        function d(e = []) {
          const t = [];
          return (
            e.forEach((e) => {
              Array.isArray(e) ? t.push(...d(e)) : t.push(e);
            }),
            t
          );
        }
        function u(e, t) {
          return Array.prototype.filter.call(e, t);
        }
        function p(e, t) {
          const n = l(),
            s = o();
          let i = [];
          if (!t && e instanceof c) return e;
          if (!e) return new c(i);
          if ("string" == typeof e) {
            const n = e.trim();
            if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
              let e = "div";
              0 === n.indexOf("<li") && (e = "ul"),
                0 === n.indexOf("<tr") && (e = "tbody"),
                (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) ||
                  (e = "tr"),
                0 === n.indexOf("<tbody") && (e = "table"),
                0 === n.indexOf("<option") && (e = "select");
              const t = s.createElement(e);
              t.innerHTML = n;
              for (let e = 0; e < t.childNodes.length; e += 1)
                i.push(t.childNodes[e]);
            } else
              i = (function (e, t) {
                if ("string" != typeof e) return [e];
                const n = [],
                  s = t.querySelectorAll(e);
                for (let e = 0; e < s.length; e += 1) n.push(s[e]);
                return n;
              })(e.trim(), t || s);
          } else if (e.nodeType || e === n || e === s) i.push(e);
          else if (Array.isArray(e)) {
            if (e instanceof c) return e;
            i = e;
          }
          return new c(
            (function (e) {
              const t = [];
              for (let n = 0; n < e.length; n += 1)
                -1 === t.indexOf(e[n]) && t.push(e[n]);
              return t;
            })(i)
          );
        }
        p.fn = c.prototype;
        const h = "resize scroll".split(" ");
        function f(e) {
          return function (...t) {
            if (void 0 === t[0]) {
              for (let t = 0; t < this.length; t += 1)
                h.indexOf(e) < 0 &&
                  (e in this[t] ? this[t][e]() : p(this[t]).trigger(e));
              return this;
            }
            return this.on(e, ...t);
          };
        }
        f("click"),
          f("blur"),
          f("focus"),
          f("focusin"),
          f("focusout"),
          f("keyup"),
          f("keydown"),
          f("keypress"),
          f("submit"),
          f("change"),
          f("mousedown"),
          f("mousemove"),
          f("mouseup"),
          f("mouseenter"),
          f("mouseleave"),
          f("mouseout"),
          f("mouseover"),
          f("touchstart"),
          f("touchend"),
          f("touchmove"),
          f("resize"),
          f("scroll");
        const m = {
          addClass: function (...e) {
            const t = d(e.map((e) => e.split(" ")));
            return (
              this.forEach((e) => {
                e.classList.add(...t);
              }),
              this
            );
          },
          removeClass: function (...e) {
            const t = d(e.map((e) => e.split(" ")));
            return (
              this.forEach((e) => {
                e.classList.remove(...t);
              }),
              this
            );
          },
          hasClass: function (...e) {
            const t = d(e.map((e) => e.split(" ")));
            return (
              u(
                this,
                (e) => t.filter((t) => e.classList.contains(t)).length > 0
              ).length > 0
            );
          },
          toggleClass: function (...e) {
            const t = d(e.map((e) => e.split(" ")));
            this.forEach((e) => {
              t.forEach((t) => {
                e.classList.toggle(t);
              });
            });
          },
          attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e)
              return this[0] ? this[0].getAttribute(e) : void 0;
            for (let n = 0; n < this.length; n += 1)
              if (2 === arguments.length) this[n].setAttribute(e, t);
              else
                for (const t in e)
                  (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
            return this;
          },
          removeAttr: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
          },
          transform: function (e) {
            for (let t = 0; t < this.length; t += 1)
              this[t].style.transform = e;
            return this;
          },
          transition: function (e) {
            for (let t = 0; t < this.length; t += 1)
              this[t].style.transitionDuration =
                "string" != typeof e ? `${e}ms` : e;
            return this;
          },
          on: function (...e) {
            let [t, n, s, i] = e;
            function r(e) {
              const t = e.target;
              if (!t) return;
              const i = e.target.dom7EventData || [];
              if ((i.indexOf(e) < 0 && i.unshift(e), p(t).is(n))) s.apply(t, i);
              else {
                const e = p(t).parents();
                for (let t = 0; t < e.length; t += 1)
                  p(e[t]).is(n) && s.apply(e[t], i);
              }
            }
            function o(e) {
              const t = (e && e.target && e.target.dom7EventData) || [];
              t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
            }
            "function" == typeof e[1] && (([t, s, i] = e), (n = void 0)),
              i || (i = !1);
            const a = t.split(" ");
            let l;
            for (let e = 0; e < this.length; e += 1) {
              const t = this[e];
              if (n)
                for (l = 0; l < a.length; l += 1) {
                  const e = a[l];
                  t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                    t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                    t.dom7LiveListeners[e].push({
                      listener: s,
                      proxyListener: r,
                    }),
                    t.addEventListener(e, r, i);
                }
              else
                for (l = 0; l < a.length; l += 1) {
                  const e = a[l];
                  t.dom7Listeners || (t.dom7Listeners = {}),
                    t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                    t.dom7Listeners[e].push({ listener: s, proxyListener: o }),
                    t.addEventListener(e, o, i);
                }
            }
            return this;
          },
          off: function (...e) {
            let [t, n, s, i] = e;
            "function" == typeof e[1] && (([t, s, i] = e), (n = void 0)),
              i || (i = !1);
            const r = t.split(" ");
            for (let e = 0; e < r.length; e += 1) {
              const t = r[e];
              for (let e = 0; e < this.length; e += 1) {
                const r = this[e];
                let o;
                if (
                  (!n && r.dom7Listeners
                    ? (o = r.dom7Listeners[t])
                    : n && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
                  o && o.length)
                )
                  for (let e = o.length - 1; e >= 0; e -= 1) {
                    const n = o[e];
                    (s && n.listener === s) ||
                    (s &&
                      n.listener &&
                      n.listener.dom7proxy &&
                      n.listener.dom7proxy === s)
                      ? (r.removeEventListener(t, n.proxyListener, i),
                        o.splice(e, 1))
                      : s ||
                        (r.removeEventListener(t, n.proxyListener, i),
                        o.splice(e, 1));
                  }
              }
            }
            return this;
          },
          trigger: function (...e) {
            const t = l(),
              n = e[0].split(" "),
              s = e[1];
            for (let i = 0; i < n.length; i += 1) {
              const r = n[i];
              for (let n = 0; n < this.length; n += 1) {
                const i = this[n];
                if (t.CustomEvent) {
                  const n = new t.CustomEvent(r, {
                    detail: s,
                    bubbles: !0,
                    cancelable: !0,
                  });
                  (i.dom7EventData = e.filter((e, t) => t > 0)),
                    i.dispatchEvent(n),
                    (i.dom7EventData = []),
                    delete i.dom7EventData;
                }
              }
            }
            return this;
          },
          transitionEnd: function (e) {
            const t = this;
            return (
              e &&
                t.on("transitionend", function n(s) {
                  s.target === this &&
                    (e.call(this, s), t.off("transitionend", n));
                }),
              this
            );
          },
          outerWidth: function (e) {
            if (this.length > 0) {
              if (e) {
                const e = this.styles();
                return (
                  this[0].offsetWidth +
                  parseFloat(e.getPropertyValue("margin-right")) +
                  parseFloat(e.getPropertyValue("margin-left"))
                );
              }
              return this[0].offsetWidth;
            }
            return null;
          },
          outerHeight: function (e) {
            if (this.length > 0) {
              if (e) {
                const e = this.styles();
                return (
                  this[0].offsetHeight +
                  parseFloat(e.getPropertyValue("margin-top")) +
                  parseFloat(e.getPropertyValue("margin-bottom"))
                );
              }
              return this[0].offsetHeight;
            }
            return null;
          },
          styles: function () {
            const e = l();
            return this[0] ? e.getComputedStyle(this[0], null) : {};
          },
          offset: function () {
            if (this.length > 0) {
              const e = l(),
                t = o(),
                n = this[0],
                s = n.getBoundingClientRect(),
                i = t.body,
                r = n.clientTop || i.clientTop || 0,
                a = n.clientLeft || i.clientLeft || 0,
                c = n === e ? e.scrollY : n.scrollTop,
                d = n === e ? e.scrollX : n.scrollLeft;
              return { top: s.top + c - r, left: s.left + d - a };
            }
            return null;
          },
          css: function (e, t) {
            const n = l();
            let s;
            if (1 === arguments.length) {
              if ("string" != typeof e) {
                for (s = 0; s < this.length; s += 1)
                  for (const t in e) this[s].style[t] = e[t];
                return this;
              }
              if (this[0])
                return n.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
              for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
              return this;
            }
            return this;
          },
          each: function (e) {
            return e
              ? (this.forEach((t, n) => {
                  e.apply(t, [t, n]);
                }),
                this)
              : this;
          },
          html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
          },
          text: function (e) {
            if (void 0 === e)
              return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
          },
          is: function (e) {
            const t = l(),
              n = o(),
              s = this[0];
            let i, r;
            if (!s || void 0 === e) return !1;
            if ("string" == typeof e) {
              if (s.matches) return s.matches(e);
              if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
              if (s.msMatchesSelector) return s.msMatchesSelector(e);
              for (i = p(e), r = 0; r < i.length; r += 1)
                if (i[r] === s) return !0;
              return !1;
            }
            if (e === n) return s === n;
            if (e === t) return s === t;
            if (e.nodeType || e instanceof c) {
              for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
                if (i[r] === s) return !0;
              return !1;
            }
            return !1;
          },
          index: function () {
            let e,
              t = this[0];
            if (t) {
              for (e = 0; null !== (t = t.previousSibling); )
                1 === t.nodeType && (e += 1);
              return e;
            }
          },
          eq: function (e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return p([]);
            if (e < 0) {
              const n = t + e;
              return p(n < 0 ? [] : [this[n]]);
            }
            return p([this[e]]);
          },
          append: function (...e) {
            let t;
            const n = o();
            for (let s = 0; s < e.length; s += 1) {
              t = e[s];
              for (let e = 0; e < this.length; e += 1)
                if ("string" == typeof t) {
                  const s = n.createElement("div");
                  for (s.innerHTML = t; s.firstChild; )
                    this[e].appendChild(s.firstChild);
                } else if (t instanceof c)
                  for (let n = 0; n < t.length; n += 1)
                    this[e].appendChild(t[n]);
                else this[e].appendChild(t);
            }
            return this;
          },
          prepend: function (e) {
            const t = o();
            let n, s;
            for (n = 0; n < this.length; n += 1)
              if ("string" == typeof e) {
                const i = t.createElement("div");
                for (
                  i.innerHTML = e, s = i.childNodes.length - 1;
                  s >= 0;
                  s -= 1
                )
                  this[n].insertBefore(i.childNodes[s], this[n].childNodes[0]);
              } else if (e instanceof c)
                for (s = 0; s < e.length; s += 1)
                  this[n].insertBefore(e[s], this[n].childNodes[0]);
              else this[n].insertBefore(e, this[n].childNodes[0]);
            return this;
          },
          next: function (e) {
            return this.length > 0
              ? e
                ? this[0].nextElementSibling &&
                  p(this[0].nextElementSibling).is(e)
                  ? p([this[0].nextElementSibling])
                  : p([])
                : this[0].nextElementSibling
                ? p([this[0].nextElementSibling])
                : p([])
              : p([]);
          },
          nextAll: function (e) {
            const t = [];
            let n = this[0];
            if (!n) return p([]);
            for (; n.nextElementSibling; ) {
              const s = n.nextElementSibling;
              e ? p(s).is(e) && t.push(s) : t.push(s), (n = s);
            }
            return p(t);
          },
          prev: function (e) {
            if (this.length > 0) {
              const t = this[0];
              return e
                ? t.previousElementSibling && p(t.previousElementSibling).is(e)
                  ? p([t.previousElementSibling])
                  : p([])
                : t.previousElementSibling
                ? p([t.previousElementSibling])
                : p([]);
            }
            return p([]);
          },
          prevAll: function (e) {
            const t = [];
            let n = this[0];
            if (!n) return p([]);
            for (; n.previousElementSibling; ) {
              const s = n.previousElementSibling;
              e ? p(s).is(e) && t.push(s) : t.push(s), (n = s);
            }
            return p(t);
          },
          parent: function (e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1)
              null !== this[n].parentNode &&
                (e
                  ? p(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                  : t.push(this[n].parentNode));
            return p(t);
          },
          parents: function (e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
              let s = this[n].parentNode;
              for (; s; )
                e ? p(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
            }
            return p(t);
          },
          closest: function (e) {
            let t = this;
            return void 0 === e
              ? p([])
              : (t.is(e) || (t = t.parents(e).eq(0)), t);
          },
          find: function (e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
              const s = this[n].querySelectorAll(e);
              for (let e = 0; e < s.length; e += 1) t.push(s[e]);
            }
            return p(t);
          },
          children: function (e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
              const s = this[n].children;
              for (let n = 0; n < s.length; n += 1)
                (e && !p(s[n]).is(e)) || t.push(s[n]);
            }
            return p(t);
          },
          filter: function (e) {
            return p(u(this, e));
          },
          remove: function () {
            for (let e = 0; e < this.length; e += 1)
              this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
          },
        };
        Object.keys(m).forEach((e) => {
          Object.defineProperty(p.fn, e, { value: m[e], writable: !0 });
        });
        var g = p;
        function v(e, t) {
          return void 0 === t && (t = 0), setTimeout(e, t);
        }
        function w() {
          return Date.now();
        }
        function y(e, t) {
          void 0 === t && (t = "x");
          const n = l();
          let s, i, r;
          const o = (function (e) {
            const t = l();
            let n;
            return (
              t.getComputedStyle && (n = t.getComputedStyle(e, null)),
              !n && e.currentStyle && (n = e.currentStyle),
              n || (n = e.style),
              n
            );
          })(e);
          return (
            n.WebKitCSSMatrix
              ? ((i = o.transform || o.webkitTransform),
                i.split(",").length > 6 &&
                  (i = i
                    .split(", ")
                    .map((e) => e.replace(",", "."))
                    .join(", ")),
                (r = new n.WebKitCSSMatrix("none" === i ? "" : i)))
              : ((r =
                  o.MozTransform ||
                  o.OTransform ||
                  o.MsTransform ||
                  o.msTransform ||
                  o.transform ||
                  o
                    .getPropertyValue("transform")
                    .replace("translate(", "matrix(1, 0, 0, 1,")),
                (s = r.toString().split(","))),
            "x" === t &&
              (i = n.WebKitCSSMatrix
                ? r.m41
                : 16 === s.length
                ? parseFloat(s[12])
                : parseFloat(s[4])),
            "y" === t &&
              (i = n.WebKitCSSMatrix
                ? r.m42
                : 16 === s.length
                ? parseFloat(s[13])
                : parseFloat(s[5])),
            i || 0
          );
        }
        function b(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            e.constructor &&
            "Object" === Object.prototype.toString.call(e).slice(8, -1)
          );
        }
        function C(e) {
          return "undefined" != typeof window && void 0 !== window.HTMLElement
            ? e instanceof HTMLElement
            : e && (1 === e.nodeType || 11 === e.nodeType);
        }
        function S() {
          const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"];
          for (let n = 1; n < arguments.length; n += 1) {
            const s = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            if (null != s && !C(s)) {
              const n = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
              for (let t = 0, i = n.length; t < i; t += 1) {
                const i = n[t],
                  r = Object.getOwnPropertyDescriptor(s, i);
                void 0 !== r &&
                  r.enumerable &&
                  (b(e[i]) && b(s[i])
                    ? s[i].__swiper__
                      ? (e[i] = s[i])
                      : S(e[i], s[i])
                    : !b(e[i]) && b(s[i])
                    ? ((e[i] = {}),
                      s[i].__swiper__ ? (e[i] = s[i]) : S(e[i], s[i]))
                    : (e[i] = s[i]));
              }
            }
          }
          return e;
        }
        function x(e, t, n) {
          e.style.setProperty(t, n);
        }
        function E(e) {
          let { swiper: t, targetPosition: n, side: s } = e;
          const i = l(),
            r = -t.translate;
          let o,
            a = null;
          const c = t.params.speed;
          (t.wrapperEl.style.scrollSnapType = "none"),
            i.cancelAnimationFrame(t.cssModeFrameID);
          const d = n > r ? "next" : "prev",
            u = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
            p = () => {
              (o = new Date().getTime()), null === a && (a = o);
              const e = Math.max(Math.min((o - a) / c, 1), 0),
                l = 0.5 - Math.cos(e * Math.PI) / 2;
              let d = r + l * (n - r);
              if (
                (u(d, n) && (d = n), t.wrapperEl.scrollTo({ [s]: d }), u(d, n))
              )
                return (
                  (t.wrapperEl.style.overflow = "hidden"),
                  (t.wrapperEl.style.scrollSnapType = ""),
                  setTimeout(() => {
                    (t.wrapperEl.style.overflow = ""),
                      t.wrapperEl.scrollTo({ [s]: d });
                  }),
                  void i.cancelAnimationFrame(t.cssModeFrameID)
                );
              t.cssModeFrameID = i.requestAnimationFrame(p);
            };
          p();
        }
        let T, L, $;
        function k() {
          return (
            T ||
              (T = (function () {
                const e = l(),
                  t = o();
                return {
                  smoothScroll:
                    t.documentElement &&
                    "scrollBehavior" in t.documentElement.style,
                  touch: !!(
                    "ontouchstart" in e ||
                    (e.DocumentTouch && t instanceof e.DocumentTouch)
                  ),
                  passiveListener: (function () {
                    let t = !1;
                    try {
                      const n = Object.defineProperty({}, "passive", {
                        get() {
                          t = !0;
                        },
                      });
                      e.addEventListener("testPassiveListener", null, n);
                    } catch (e) {}
                    return t;
                  })(),
                  gestures: "ongesturestart" in e,
                };
              })()),
            T
          );
        }
        function M(e) {
          return (
            void 0 === e && (e = {}),
            L ||
              (L = (function (e) {
                let { userAgent: t } = void 0 === e ? {} : e;
                const n = k(),
                  s = l(),
                  i = s.navigator.platform,
                  r = t || s.navigator.userAgent,
                  o = { ios: !1, android: !1 },
                  a = s.screen.width,
                  c = s.screen.height,
                  d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
                let u = r.match(/(iPad).*OS\s([\d_]+)/);
                const p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                  h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                  f = "Win32" === i;
                let m = "MacIntel" === i;
                return (
                  !u &&
                    m &&
                    n.touch &&
                    [
                      "1024x1366",
                      "1366x1024",
                      "834x1194",
                      "1194x834",
                      "834x1112",
                      "1112x834",
                      "768x1024",
                      "1024x768",
                      "820x1180",
                      "1180x820",
                      "810x1080",
                      "1080x810",
                    ].indexOf(`${a}x${c}`) >= 0 &&
                    ((u = r.match(/(Version)\/([\d.]+)/)),
                    u || (u = [0, 1, "13_0_0"]),
                    (m = !1)),
                  d && !f && ((o.os = "android"), (o.android = !0)),
                  (u || h || p) && ((o.os = "ios"), (o.ios = !0)),
                  o
                );
              })(e)),
            L
          );
        }
        function _() {
          return (
            $ ||
              ($ = (function () {
                const e = l();
                return {
                  isSafari: (function () {
                    const t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      t.indexOf("chrome") < 0 &&
                      t.indexOf("android") < 0
                    );
                  })(),
                  isWebView:
                    /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                };
              })()),
            $
          );
        }
        var A = {
          on(e, t, n) {
            const s = this;
            if ("function" != typeof t) return s;
            const i = n ? "unshift" : "push";
            return (
              e.split(" ").forEach((e) => {
                s.eventsListeners[e] || (s.eventsListeners[e] = []),
                  s.eventsListeners[e][i](t);
              }),
              s
            );
          },
          once(e, t, n) {
            const s = this;
            if ("function" != typeof t) return s;
            function i() {
              s.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
              for (
                var n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              t.apply(s, r);
            }
            return (i.__emitterProxy = t), s.on(e, i, n);
          },
          onAny(e, t) {
            const n = this;
            if ("function" != typeof e) return n;
            const s = t ? "unshift" : "push";
            return (
              n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[s](e),
              n
            );
          },
          offAny(e) {
            const t = this;
            if (!t.eventsAnyListeners) return t;
            const n = t.eventsAnyListeners.indexOf(e);
            return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
          },
          off(e, t) {
            const n = this;
            return n.eventsListeners
              ? (e.split(" ").forEach((e) => {
                  void 0 === t
                    ? (n.eventsListeners[e] = [])
                    : n.eventsListeners[e] &&
                      n.eventsListeners[e].forEach((s, i) => {
                        (s === t ||
                          (s.__emitterProxy && s.__emitterProxy === t)) &&
                          n.eventsListeners[e].splice(i, 1);
                      });
                }),
                n)
              : n;
          },
          emit() {
            const e = this;
            if (!e.eventsListeners) return e;
            let t, n, s;
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
              r[o] = arguments[o];
            "string" == typeof r[0] || Array.isArray(r[0])
              ? ((t = r[0]), (n = r.slice(1, r.length)), (s = e))
              : ((t = r[0].events), (n = r[0].data), (s = r[0].context || e)),
              n.unshift(s);
            return (
              (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
                e.eventsAnyListeners &&
                  e.eventsAnyListeners.length &&
                  e.eventsAnyListeners.forEach((e) => {
                    e.apply(s, [t, ...n]);
                  }),
                  e.eventsListeners &&
                    e.eventsListeners[t] &&
                    e.eventsListeners[t].forEach((e) => {
                      e.apply(s, n);
                    });
              }),
              e
            );
          },
        };
        var P = {
          updateSize: function () {
            const e = this;
            let t, n;
            const s = e.$el;
            (t =
              void 0 !== e.params.width && null !== e.params.width
                ? e.params.width
                : s[0].clientWidth),
              (n =
                void 0 !== e.params.height && null !== e.params.height
                  ? e.params.height
                  : s[0].clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === n && e.isVertical()) ||
                ((t =
                  t -
                  parseInt(s.css("padding-left") || 0, 10) -
                  parseInt(s.css("padding-right") || 0, 10)),
                (n =
                  n -
                  parseInt(s.css("padding-top") || 0, 10) -
                  parseInt(s.css("padding-bottom") || 0, 10)),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(n) && (n = 0),
                Object.assign(e, {
                  width: t,
                  height: n,
                  size: e.isHorizontal() ? t : n,
                }));
          },
          updateSlides: function () {
            const e = this;
            function t(t) {
              return e.isHorizontal()
                ? t
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[t];
            }
            function n(e, n) {
              return parseFloat(e.getPropertyValue(t(n)) || 0);
            }
            const s = e.params,
              { $wrapperEl: i, size: r, rtlTranslate: o, wrongRTL: a } = e,
              l = e.virtual && s.virtual.enabled,
              c = l ? e.virtual.slides.length : e.slides.length,
              d = i.children(`.${e.params.slideClass}`),
              u = l ? e.virtual.slides.length : d.length;
            let p = [];
            const h = [],
              f = [];
            let m = s.slidesOffsetBefore;
            "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
            let g = s.slidesOffsetAfter;
            "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
            const v = e.snapGrid.length,
              w = e.slidesGrid.length;
            let y = s.spaceBetween,
              b = -m,
              C = 0,
              S = 0;
            if (void 0 === r) return;
            "string" == typeof y &&
              y.indexOf("%") >= 0 &&
              (y = (parseFloat(y.replace("%", "")) / 100) * r),
              (e.virtualSize = -y),
              o
                ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              s.centeredSlides &&
                s.cssMode &&
                (x(e.wrapperEl, "--swiper-centered-offset-before", ""),
                x(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const E = s.grid && s.grid.rows > 1 && e.grid;
            let T;
            E && e.grid.initSlides(u);
            const L =
              "auto" === s.slidesPerView &&
              s.breakpoints &&
              Object.keys(s.breakpoints).filter(
                (e) => void 0 !== s.breakpoints[e].slidesPerView
              ).length > 0;
            for (let i = 0; i < u; i += 1) {
              T = 0;
              const o = d.eq(i);
              if (
                (E && e.grid.updateSlide(i, o, u, t),
                "none" !== o.css("display"))
              ) {
                if ("auto" === s.slidesPerView) {
                  L && (d[i].style[t("width")] = "");
                  const r = getComputedStyle(o[0]),
                    a = o[0].style.transform,
                    l = o[0].style.webkitTransform;
                  if (
                    (a && (o[0].style.transform = "none"),
                    l && (o[0].style.webkitTransform = "none"),
                    s.roundLengths)
                  )
                    T = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                  else {
                    const e = n(r, "width"),
                      t = n(r, "padding-left"),
                      s = n(r, "padding-right"),
                      i = n(r, "margin-left"),
                      a = n(r, "margin-right"),
                      l = r.getPropertyValue("box-sizing");
                    if (l && "border-box" === l) T = e + i + a;
                    else {
                      const { clientWidth: n, offsetWidth: r } = o[0];
                      T = e + t + s + i + a + (r - n);
                    }
                  }
                  a && (o[0].style.transform = a),
                    l && (o[0].style.webkitTransform = l),
                    s.roundLengths && (T = Math.floor(T));
                } else
                  (T = (r - (s.slidesPerView - 1) * y) / s.slidesPerView),
                    s.roundLengths && (T = Math.floor(T)),
                    d[i] && (d[i].style[t("width")] = `${T}px`);
                d[i] && (d[i].swiperSlideSize = T),
                  f.push(T),
                  s.centeredSlides
                    ? ((b = b + T / 2 + C / 2 + y),
                      0 === C && 0 !== i && (b = b - r / 2 - y),
                      0 === i && (b = b - r / 2 - y),
                      Math.abs(b) < 0.001 && (b = 0),
                      s.roundLengths && (b = Math.floor(b)),
                      S % s.slidesPerGroup == 0 && p.push(b),
                      h.push(b))
                    : (s.roundLengths && (b = Math.floor(b)),
                      (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                        e.params.slidesPerGroup ==
                        0 && p.push(b),
                      h.push(b),
                      (b = b + T + y)),
                  (e.virtualSize += T + y),
                  (C = T),
                  (S += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, r) + g),
              o &&
                a &&
                ("slide" === s.effect || "coverflow" === s.effect) &&
                i.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
              s.setWrapperSize &&
                i.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
              E && e.grid.updateWrapperSize(T, p, t),
              !s.centeredSlides)
            ) {
              const t = [];
              for (let n = 0; n < p.length; n += 1) {
                let i = p[n];
                s.roundLengths && (i = Math.floor(i)),
                  p[n] <= e.virtualSize - r && t.push(i);
              }
              (p = t),
                Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) >
                  1 && p.push(e.virtualSize - r);
            }
            if ((0 === p.length && (p = [0]), 0 !== s.spaceBetween)) {
              const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
              d.filter((e, t) => !s.cssMode || t !== d.length - 1).css({
                [n]: `${y}px`,
              });
            }
            if (s.centeredSlides && s.centeredSlidesBounds) {
              let e = 0;
              f.forEach((t) => {
                e += t + (s.spaceBetween ? s.spaceBetween : 0);
              }),
                (e -= s.spaceBetween);
              const t = e - r;
              p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
            }
            if (s.centerInsufficientSlides) {
              let e = 0;
              if (
                (f.forEach((t) => {
                  e += t + (s.spaceBetween ? s.spaceBetween : 0);
                }),
                (e -= s.spaceBetween),
                e < r)
              ) {
                const t = (r - e) / 2;
                p.forEach((e, n) => {
                  p[n] = e - t;
                }),
                  h.forEach((e, n) => {
                    h[n] = e + t;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: d,
                snapGrid: p,
                slidesGrid: h,
                slidesSizesGrid: f,
              }),
              s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
            ) {
              x(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
                x(
                  e.wrapperEl,
                  "--swiper-centered-offset-after",
                  e.size / 2 - f[f.length - 1] / 2 + "px"
                );
              const t = -e.snapGrid[0],
                n = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map((e) => e + t)),
                (e.slidesGrid = e.slidesGrid.map((e) => e + n));
            }
            if (
              (u !== c && e.emit("slidesLengthChange"),
              p.length !== v &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              h.length !== w && e.emit("slidesGridLengthChange"),
              s.watchSlidesProgress && e.updateSlidesOffset(),
              !(
                l ||
                s.cssMode ||
                ("slide" !== s.effect && "fade" !== s.effect)
              ))
            ) {
              const t = `${s.containerModifierClass}backface-hidden`,
                n = e.$el.hasClass(t);
              u <= s.maxBackfaceHiddenSlides
                ? n || e.$el.addClass(t)
                : n && e.$el.removeClass(t);
            }
          },
          updateAutoHeight: function (e) {
            const t = this,
              n = [],
              s = t.virtual && t.params.virtual.enabled;
            let i,
              r = 0;
            "number" == typeof e
              ? t.setTransition(e)
              : !0 === e && t.setTransition(t.params.speed);
            const o = (e) =>
              s
                ? t.slides.filter(
                    (t) =>
                      parseInt(
                        t.getAttribute("data-swiper-slide-index"),
                        10
                      ) === e
                  )[0]
                : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)
                t.visibleSlides.each((e) => {
                  n.push(e);
                });
              else
                for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                  const e = t.activeIndex + i;
                  if (e > t.slides.length && !s) break;
                  n.push(o(e));
                }
            else n.push(o(t.activeIndex));
            for (i = 0; i < n.length; i += 1)
              if (void 0 !== n[i]) {
                const e = n[i].offsetHeight;
                r = e > r ? e : r;
              }
            (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
          },
          updateSlidesOffset: function () {
            const e = this,
              t = e.slides;
            for (let n = 0; n < t.length; n += 1)
              t[n].swiperSlideOffset = e.isHorizontal()
                ? t[n].offsetLeft
                : t[n].offsetTop;
          },
          updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            const t = this,
              n = t.params,
              { slides: s, rtlTranslate: i, snapGrid: r } = t;
            if (0 === s.length) return;
            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
            let o = -e;
            i && (o = e),
              s.removeClass(n.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (let e = 0; e < s.length; e += 1) {
              const a = s[e];
              let l = a.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (l -= s[0].swiperSlideOffset);
              const c =
                  (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                  (a.swiperSlideSize + n.spaceBetween),
                d =
                  (o - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                  (a.swiperSlideSize + n.spaceBetween),
                u = -(o - l),
                p = u + t.slidesSizesGrid[e];
              ((u >= 0 && u < t.size - 1) ||
                (p > 1 && p <= t.size) ||
                (u <= 0 && p >= t.size)) &&
                (t.visibleSlides.push(a),
                t.visibleSlidesIndexes.push(e),
                s.eq(e).addClass(n.slideVisibleClass)),
                (a.progress = i ? -c : c),
                (a.originalProgress = i ? -d : d);
            }
            t.visibleSlides = g(t.visibleSlides);
          },
          updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
              const n = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * n) || 0;
            }
            const n = t.params,
              s = t.maxTranslate() - t.minTranslate();
            let { progress: i, isBeginning: r, isEnd: o } = t;
            const a = r,
              l = o;
            0 === s
              ? ((i = 0), (r = !0), (o = !0))
              : ((i = (e - t.minTranslate()) / s), (r = i <= 0), (o = i >= 1)),
              Object.assign(t, { progress: i, isBeginning: r, isEnd: o }),
              (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
                t.updateSlidesProgress(e),
              r && !a && t.emit("reachBeginning toEdge"),
              o && !l && t.emit("reachEnd toEdge"),
              ((a && !r) || (l && !o)) && t.emit("fromEdge"),
              t.emit("progress", i);
          },
          updateSlidesClasses: function () {
            const e = this,
              {
                slides: t,
                params: n,
                $wrapperEl: s,
                activeIndex: i,
                realIndex: r,
              } = e,
              o = e.virtual && n.virtual.enabled;
            let a;
            t.removeClass(
              `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
            ),
              (a = o
                ? e.$wrapperEl.find(
                    `.${n.slideClass}[data-swiper-slide-index="${i}"]`
                  )
                : t.eq(i)),
              a.addClass(n.slideActiveClass),
              n.loop &&
                (a.hasClass(n.slideDuplicateClass)
                  ? s
                      .children(
                        `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                      )
                      .addClass(n.slideDuplicateActiveClass)
                  : s
                      .children(
                        `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                      )
                      .addClass(n.slideDuplicateActiveClass));
            let l = a
              .nextAll(`.${n.slideClass}`)
              .eq(0)
              .addClass(n.slideNextClass);
            n.loop &&
              0 === l.length &&
              ((l = t.eq(0)), l.addClass(n.slideNextClass));
            let c = a
              .prevAll(`.${n.slideClass}`)
              .eq(0)
              .addClass(n.slidePrevClass);
            n.loop &&
              0 === c.length &&
              ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
              n.loop &&
                (l.hasClass(n.slideDuplicateClass)
                  ? s
                      .children(
                        `.${n.slideClass}:not(.${
                          n.slideDuplicateClass
                        })[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicateNextClass)
                  : s
                      .children(
                        `.${n.slideClass}.${
                          n.slideDuplicateClass
                        }[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicateNextClass),
                c.hasClass(n.slideDuplicateClass)
                  ? s
                      .children(
                        `.${n.slideClass}:not(.${
                          n.slideDuplicateClass
                        })[data-swiper-slide-index="${c.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicatePrevClass)
                  : s
                      .children(
                        `.${n.slideClass}.${
                          n.slideDuplicateClass
                        }[data-swiper-slide-index="${c.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicatePrevClass)),
              e.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            const t = this,
              n = t.rtlTranslate ? t.translate : -t.translate,
              {
                slidesGrid: s,
                snapGrid: i,
                params: r,
                activeIndex: o,
                realIndex: a,
                snapIndex: l,
              } = t;
            let c,
              d = e;
            if (void 0 === d) {
              for (let e = 0; e < s.length; e += 1)
                void 0 !== s[e + 1]
                  ? n >= s[e] && n < s[e + 1] - (s[e + 1] - s[e]) / 2
                    ? (d = e)
                    : n >= s[e] && n < s[e + 1] && (d = e + 1)
                  : n >= s[e] && (d = e);
              r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
            }
            if (i.indexOf(n) >= 0) c = i.indexOf(n);
            else {
              const e = Math.min(r.slidesPerGroupSkip, d);
              c = e + Math.floor((d - e) / r.slidesPerGroup);
            }
            if ((c >= i.length && (c = i.length - 1), d === o))
              return void (
                c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
              );
            const u = parseInt(
              t.slides.eq(d).attr("data-swiper-slide-index") || d,
              10
            );
            Object.assign(t, {
              snapIndex: c,
              realIndex: u,
              previousIndex: o,
              activeIndex: d,
            }),
              t.emit("activeIndexChange"),
              t.emit("snapIndexChange"),
              a !== u && t.emit("realIndexChange"),
              (t.initialized || t.params.runCallbacksOnInit) &&
                t.emit("slideChange");
          },
          updateClickedSlide: function (e) {
            const t = this,
              n = t.params,
              s = g(e).closest(`.${n.slideClass}`)[0];
            let i,
              r = !1;
            if (s)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === s) {
                  (r = !0), (i = e);
                  break;
                }
            if (!s || !r)
              return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = s),
              t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                    g(s).attr("data-swiper-slide-index"),
                    10
                  ))
                : (t.clickedIndex = i),
              n.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        };
        var O = {
          getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {
              params: t,
              rtlTranslate: n,
              translate: s,
              $wrapperEl: i,
            } = this;
            if (t.virtualTranslate) return n ? -s : s;
            if (t.cssMode) return s;
            let r = y(i[0], e);
            return n && (r = -r), r || 0;
          },
          setTranslate: function (e, t) {
            const n = this,
              {
                rtlTranslate: s,
                params: i,
                $wrapperEl: r,
                wrapperEl: o,
                progress: a,
              } = n;
            let l,
              c = 0,
              d = 0;
            n.isHorizontal() ? (c = s ? -e : e) : (d = e),
              i.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
              i.cssMode
                ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    n.isHorizontal() ? -c : -d)
                : i.virtualTranslate ||
                  r.transform(`translate3d(${c}px, ${d}px, 0px)`),
              (n.previousTranslate = n.translate),
              (n.translate = n.isHorizontal() ? c : d);
            const u = n.maxTranslate() - n.minTranslate();
            (l = 0 === u ? 0 : (e - n.minTranslate()) / u),
              l !== a && n.updateProgress(e),
              n.emit("setTranslate", n.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (e, t, n, s, i) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === n && (n = !0),
              void 0 === s && (s = !0);
            const r = this,
              { params: o, wrapperEl: a } = r;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            const l = r.minTranslate(),
              c = r.maxTranslate();
            let d;
            if (
              ((d = s && e > l ? l : s && e < c ? c : e),
              r.updateProgress(d),
              o.cssMode)
            ) {
              const e = r.isHorizontal();
              if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
              else {
                if (!r.support.smoothScroll)
                  return (
                    E({
                      swiper: r,
                      targetPosition: -d,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
              }
              return !0;
            }
            return (
              0 === t
                ? (r.setTransition(0),
                  r.setTranslate(d),
                  n &&
                    (r.emit("beforeTransitionStart", t, i),
                    r.emit("transitionEnd")))
                : (r.setTransition(t),
                  r.setTranslate(d),
                  n &&
                    (r.emit("beforeTransitionStart", t, i),
                    r.emit("transitionStart")),
                  r.animating ||
                    ((r.animating = !0),
                    r.onTranslateToWrapperTransitionEnd ||
                      (r.onTranslateToWrapperTransitionEnd = function (e) {
                        r &&
                          !r.destroyed &&
                          e.target === this &&
                          (r.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            r.onTranslateToWrapperTransitionEnd
                          ),
                          r.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            r.onTranslateToWrapperTransitionEnd
                          ),
                          (r.onTranslateToWrapperTransitionEnd = null),
                          delete r.onTranslateToWrapperTransitionEnd,
                          n && r.emit("transitionEnd"));
                      }),
                    r.$wrapperEl[0].addEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      r.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        };
        function B(e) {
          let { swiper: t, runCallbacks: n, direction: s, step: i } = e;
          const { activeIndex: r, previousIndex: o } = t;
          let a = s;
          if (
            (a || (a = r > o ? "next" : r < o ? "prev" : "reset"),
            t.emit(`transition${i}`),
            n && r !== o)
          ) {
            if ("reset" === a) return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`),
              "next" === a
                ? t.emit(`slideNextTransition${i}`)
                : t.emit(`slidePrevTransition${i}`);
          }
        }
        var I = {
          slideTo: function (e, t, n, s, i) {
            if (
              (void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === n && (n = !0),
              "number" != typeof e && "string" != typeof e)
            )
              throw new Error(
                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
              );
            if ("string" == typeof e) {
              const t = parseInt(e, 10);
              if (!isFinite(t))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                );
              e = t;
            }
            const r = this;
            let o = e;
            o < 0 && (o = 0);
            const {
              params: a,
              snapGrid: l,
              slidesGrid: c,
              previousIndex: d,
              activeIndex: u,
              rtlTranslate: p,
              wrapperEl: h,
              enabled: f,
            } = r;
            if (
              (r.animating && a.preventInteractionOnTransition) ||
              (!f && !s && !i)
            )
              return !1;
            const m = Math.min(r.params.slidesPerGroupSkip, o);
            let g = m + Math.floor((o - m) / r.params.slidesPerGroup);
            g >= l.length && (g = l.length - 1),
              (u || a.initialSlide || 0) === (d || 0) &&
                n &&
                r.emit("beforeSlideChangeStart");
            const v = -l[g];
            if ((r.updateProgress(v), a.normalizeSlideIndex))
              for (let e = 0; e < c.length; e += 1) {
                const t = -Math.floor(100 * v),
                  n = Math.floor(100 * c[e]),
                  s = Math.floor(100 * c[e + 1]);
                void 0 !== c[e + 1]
                  ? t >= n && t < s - (s - n) / 2
                    ? (o = e)
                    : t >= n && t < s && (o = e + 1)
                  : t >= n && (o = e);
              }
            if (r.initialized && o !== u) {
              if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
                return !1;
              if (
                !r.allowSlidePrev &&
                v > r.translate &&
                v > r.maxTranslate() &&
                (u || 0) !== o
              )
                return !1;
            }
            let w;
            if (
              ((w = o > u ? "next" : o < u ? "prev" : "reset"),
              (p && -v === r.translate) || (!p && v === r.translate))
            )
              return (
                r.updateActiveIndex(o),
                a.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== a.effect && r.setTranslate(v),
                "reset" !== w &&
                  (r.transitionStart(n, w), r.transitionEnd(n, w)),
                !1
              );
            if (a.cssMode) {
              const e = r.isHorizontal(),
                n = p ? v : -v;
              if (0 === t) {
                const t = r.virtual && r.params.virtual.enabled;
                t &&
                  ((r.wrapperEl.style.scrollSnapType = "none"),
                  (r._immediateVirtual = !0)),
                  (h[e ? "scrollLeft" : "scrollTop"] = n),
                  t &&
                    requestAnimationFrame(() => {
                      (r.wrapperEl.style.scrollSnapType = ""),
                        (r._swiperImmediateVirtual = !1);
                    });
              } else {
                if (!r.support.smoothScroll)
                  return (
                    E({
                      swiper: r,
                      targetPosition: n,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                h.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
              }
              return !0;
            }
            return (
              r.setTransition(t),
              r.setTranslate(v),
              r.updateActiveIndex(o),
              r.updateSlidesClasses(),
              r.emit("beforeTransitionStart", t, s),
              r.transitionStart(n, w),
              0 === t
                ? r.transitionEnd(n, w)
                : r.animating ||
                  ((r.animating = !0),
                  r.onSlideToWrapperTransitionEnd ||
                    (r.onSlideToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        (r.onSlideToWrapperTransitionEnd = null),
                        delete r.onSlideToWrapperTransitionEnd,
                        r.transitionEnd(n, w));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onSlideToWrapperTransitionEnd
                  )),
              !0
            );
          },
          slideToLoop: function (e, t, n, s) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === n && (n = !0);
            const i = this;
            let r = e;
            return (
              i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, n, s)
            );
          },
          slideNext: function (e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const s = this,
              { animating: i, enabled: r, params: o } = s;
            if (!r) return s;
            let a = o.slidesPerGroup;
            "auto" === o.slidesPerView &&
              1 === o.slidesPerGroup &&
              o.slidesPerGroupAuto &&
              (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
            const l = s.activeIndex < o.slidesPerGroupSkip ? 1 : a;
            if (o.loop) {
              if (i && o.loopPreventsSlide) return !1;
              s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
            }
            return o.rewind && s.isEnd
              ? s.slideTo(0, e, t, n)
              : s.slideTo(s.activeIndex + l, e, t, n);
          },
          slidePrev: function (e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const s = this,
              {
                params: i,
                animating: r,
                snapGrid: o,
                slidesGrid: a,
                rtlTranslate: l,
                enabled: c,
              } = s;
            if (!c) return s;
            if (i.loop) {
              if (r && i.loopPreventsSlide) return !1;
              s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
            }
            function d(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const u = d(l ? s.translate : -s.translate),
              p = o.map((e) => d(e));
            let h = o[p.indexOf(u) - 1];
            if (void 0 === h && i.cssMode) {
              let e;
              o.forEach((t, n) => {
                u >= t && (e = n);
              }),
                void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
            }
            let f = 0;
            if (
              (void 0 !== h &&
                ((f = a.indexOf(h)),
                f < 0 && (f = s.activeIndex - 1),
                "auto" === i.slidesPerView &&
                  1 === i.slidesPerGroup &&
                  i.slidesPerGroupAuto &&
                  ((f = f - s.slidesPerViewDynamic("previous", !0) + 1),
                  (f = Math.max(f, 0)))),
              i.rewind && s.isBeginning)
            ) {
              const i =
                s.params.virtual && s.params.virtual.enabled && s.virtual
                  ? s.virtual.slides.length - 1
                  : s.slides.length - 1;
              return s.slideTo(i, e, t, n);
            }
            return s.slideTo(f, e, t, n);
          },
          slideReset: function (e, t, n) {
            return (
              void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              this.slideTo(this.activeIndex, e, t, n)
            );
          },
          slideToClosest: function (e, t, n, s) {
            void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              void 0 === s && (s = 0.5);
            const i = this;
            let r = i.activeIndex;
            const o = Math.min(i.params.slidesPerGroupSkip, r),
              a = o + Math.floor((r - o) / i.params.slidesPerGroup),
              l = i.rtlTranslate ? i.translate : -i.translate;
            if (l >= i.snapGrid[a]) {
              const e = i.snapGrid[a];
              l - e > (i.snapGrid[a + 1] - e) * s &&
                (r += i.params.slidesPerGroup);
            } else {
              const e = i.snapGrid[a - 1];
              l - e <= (i.snapGrid[a] - e) * s &&
                (r -= i.params.slidesPerGroup);
            }
            return (
              (r = Math.max(r, 0)),
              (r = Math.min(r, i.slidesGrid.length - 1)),
              i.slideTo(r, e, t, n)
            );
          },
          slideToClickedSlide: function () {
            const e = this,
              { params: t, $wrapperEl: n } = e,
              s =
                "auto" === t.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : t.slidesPerView;
            let i,
              r = e.clickedIndex;
            if (t.loop) {
              if (e.animating) return;
              (i = parseInt(
                g(e.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
                t.centeredSlides
                  ? r < e.loopedSlides - s / 2 ||
                    r > e.slides.length - e.loopedSlides + s / 2
                    ? (e.loopFix(),
                      (r = n
                        .children(
                          `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      v(() => {
                        e.slideTo(r);
                      }))
                    : e.slideTo(r)
                  : r > e.slides.length - s
                  ? (e.loopFix(),
                    (r = n
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    v(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r);
            } else e.slideTo(r);
          },
        };
        var q = {
          loopCreate: function () {
            const e = this,
              t = o(),
              { params: n, $wrapperEl: s } = e,
              i = s.children().length > 0 ? g(s.children()[0].parentNode) : s;
            i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
            let r = i.children(`.${n.slideClass}`);
            if (n.loopFillGroupWithBlank) {
              const e = n.slidesPerGroup - (r.length % n.slidesPerGroup);
              if (e !== n.slidesPerGroup) {
                for (let s = 0; s < e; s += 1) {
                  const e = g(t.createElement("div")).addClass(
                    `${n.slideClass} ${n.slideBlankClass}`
                  );
                  i.append(e);
                }
                r = i.children(`.${n.slideClass}`);
              }
            }
            "auto" !== n.slidesPerView ||
              n.loopedSlides ||
              (n.loopedSlides = r.length),
              (e.loopedSlides = Math.ceil(
                parseFloat(n.loopedSlides || n.slidesPerView, 10)
              )),
              (e.loopedSlides += n.loopAdditionalSlides),
              e.loopedSlides > r.length && (e.loopedSlides = r.length);
            const a = [],
              l = [];
            r.each((t, n) => {
              const s = g(t);
              n < e.loopedSlides && l.push(t),
                n < r.length && n >= r.length - e.loopedSlides && a.push(t),
                s.attr("data-swiper-slide-index", n);
            });
            for (let e = 0; e < l.length; e += 1)
              i.append(g(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
            for (let e = a.length - 1; e >= 0; e -= 1)
              i.prepend(g(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
          },
          loopFix: function () {
            const e = this;
            e.emit("beforeLoopFix");
            const {
              activeIndex: t,
              slides: n,
              loopedSlides: s,
              allowSlidePrev: i,
              allowSlideNext: r,
              snapGrid: o,
              rtlTranslate: a,
            } = e;
            let l;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            const c = -o[t] - e.getTranslate();
            if (t < s) {
              (l = n.length - 3 * s + t), (l += s);
              e.slideTo(l, 0, !1, !0) &&
                0 !== c &&
                e.setTranslate((a ? -e.translate : e.translate) - c);
            } else if (t >= n.length - s) {
              (l = -n.length + t + s), (l += s);
              e.slideTo(l, 0, !1, !0) &&
                0 !== c &&
                e.setTranslate((a ? -e.translate : e.translate) - c);
            }
            (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
          },
          loopDestroy: function () {
            const { $wrapperEl: e, params: t, slides: n } = this;
            e
              .children(
                `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
              )
              .remove(),
              n.removeAttr("data-swiper-slide-index");
          },
        };
        function N(e) {
          const t = this,
            n = o(),
            s = l(),
            i = t.touchEventsData,
            { params: r, touches: a, enabled: c } = t;
          if (!c) return;
          if (t.animating && r.preventInteractionOnTransition) return;
          !t.animating && r.cssMode && r.loop && t.loopFix();
          let d = e;
          d.originalEvent && (d = d.originalEvent);
          let u = g(d.target);
          if (
            "wrapper" === r.touchEventsTarget &&
            !u.closest(t.wrapperEl).length
          )
            return;
          if (
            ((i.isTouchEvent = "touchstart" === d.type),
            !i.isTouchEvent && "which" in d && 3 === d.which)
          )
            return;
          if (!i.isTouchEvent && "button" in d && d.button > 0) return;
          if (i.isTouched && i.isMoved) return;
          !!r.noSwipingClass &&
            "" !== r.noSwipingClass &&
            d.target &&
            d.target.shadowRoot &&
            e.path &&
            e.path[0] &&
            (u = g(e.path[0]));
          const p = r.noSwipingSelector
              ? r.noSwipingSelector
              : `.${r.noSwipingClass}`,
            h = !(!d.target || !d.target.shadowRoot);
          if (
            r.noSwiping &&
            (h
              ? (function (e, t) {
                  return (
                    void 0 === t && (t = this),
                    (function t(n) {
                      return n && n !== o() && n !== l()
                        ? (n.assignedSlot && (n = n.assignedSlot),
                          n.closest(e) || t(n.getRootNode().host))
                        : null;
                    })(t)
                  );
                })(p, d.target)
              : u.closest(p)[0])
          )
            return void (t.allowClick = !0);
          if (r.swipeHandler && !u.closest(r.swipeHandler)[0]) return;
          (a.currentX =
            "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
            (a.currentY =
              "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
          const f = a.currentX,
            m = a.currentY,
            v = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
            y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
          if (v && (f <= y || f >= s.innerWidth - y)) {
            if ("prevent" !== v) return;
            e.preventDefault();
          }
          if (
            (Object.assign(i, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0,
            }),
            (a.startX = f),
            (a.startY = m),
            (i.touchStartTime = w()),
            (t.allowClick = !0),
            t.updateSize(),
            (t.swipeDirection = void 0),
            r.threshold > 0 && (i.allowThresholdMove = !1),
            "touchstart" !== d.type)
          ) {
            let e = !0;
            u.is(i.focusableElements) &&
              ((e = !1), "SELECT" === u[0].nodeName && (i.isTouched = !1)),
              n.activeElement &&
                g(n.activeElement).is(i.focusableElements) &&
                n.activeElement !== u[0] &&
                n.activeElement.blur();
            const s = e && t.allowTouchMove && r.touchStartPreventDefault;
            (!r.touchStartForcePreventDefault && !s) ||
              u[0].isContentEditable ||
              d.preventDefault();
          }
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !r.cssMode &&
            t.freeMode.onTouchStart(),
            t.emit("touchStart", d);
        }
        function z(e) {
          const t = o(),
            n = this,
            s = n.touchEventsData,
            { params: i, touches: r, rtlTranslate: a, enabled: l } = n;
          if (!l) return;
          let c = e;
          if ((c.originalEvent && (c = c.originalEvent), !s.isTouched))
            return void (
              s.startMoving &&
              s.isScrolling &&
              n.emit("touchMoveOpposite", c)
            );
          if (s.isTouchEvent && "touchmove" !== c.type) return;
          const d =
              "touchmove" === c.type &&
              c.targetTouches &&
              (c.targetTouches[0] || c.changedTouches[0]),
            u = "touchmove" === c.type ? d.pageX : c.pageX,
            p = "touchmove" === c.type ? d.pageY : c.pageY;
          if (c.preventedByNestedSwiper)
            return (r.startX = u), void (r.startY = p);
          if (!n.allowTouchMove)
            return (
              g(c.target).is(s.focusableElements) || (n.allowClick = !1),
              void (
                s.isTouched &&
                (Object.assign(r, {
                  startX: u,
                  startY: p,
                  currentX: u,
                  currentY: p,
                }),
                (s.touchStartTime = w()))
              )
            );
          if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
            if (n.isVertical()) {
              if (
                (p < r.startY && n.translate <= n.maxTranslate()) ||
                (p > r.startY && n.translate >= n.minTranslate())
              )
                return (s.isTouched = !1), void (s.isMoved = !1);
            } else if (
              (u < r.startX && n.translate <= n.maxTranslate()) ||
              (u > r.startX && n.translate >= n.minTranslate())
            )
              return;
          if (
            s.isTouchEvent &&
            t.activeElement &&
            c.target === t.activeElement &&
            g(c.target).is(s.focusableElements)
          )
            return (s.isMoved = !0), void (n.allowClick = !1);
          if (
            (s.allowTouchCallbacks && n.emit("touchMove", c),
            c.targetTouches && c.targetTouches.length > 1)
          )
            return;
          (r.currentX = u), (r.currentY = p);
          const h = r.currentX - r.startX,
            f = r.currentY - r.startY;
          if (
            n.params.threshold &&
            Math.sqrt(h ** 2 + f ** 2) < n.params.threshold
          )
            return;
          if (void 0 === s.isScrolling) {
            let e;
            (n.isHorizontal() && r.currentY === r.startY) ||
            (n.isVertical() && r.currentX === r.startX)
              ? (s.isScrolling = !1)
              : h * h + f * f >= 25 &&
                ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
                (s.isScrolling = n.isHorizontal()
                  ? e > i.touchAngle
                  : 90 - e > i.touchAngle));
          }
          if (
            (s.isScrolling && n.emit("touchMoveOpposite", c),
            void 0 === s.startMoving &&
              ((r.currentX === r.startX && r.currentY === r.startY) ||
                (s.startMoving = !0)),
            s.isScrolling)
          )
            return void (s.isTouched = !1);
          if (!s.startMoving) return;
          (n.allowClick = !1),
            !i.cssMode && c.cancelable && c.preventDefault(),
            i.touchMoveStopPropagation && !i.nested && c.stopPropagation(),
            s.isMoved ||
              (i.loop && !i.cssMode && n.loopFix(),
              (s.startTranslate = n.getTranslate()),
              n.setTransition(0),
              n.animating &&
                n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
              (s.allowMomentumBounce = !1),
              !i.grabCursor ||
                (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
                n.setGrabCursor(!0),
              n.emit("sliderFirstMove", c)),
            n.emit("sliderMove", c),
            (s.isMoved = !0);
          let m = n.isHorizontal() ? h : f;
          (r.diff = m),
            (m *= i.touchRatio),
            a && (m = -m),
            (n.swipeDirection = m > 0 ? "prev" : "next"),
            (s.currentTranslate = m + s.startTranslate);
          let v = !0,
            y = i.resistanceRatio;
          if (
            (i.touchReleaseOnEdges && (y = 0),
            m > 0 && s.currentTranslate > n.minTranslate()
              ? ((v = !1),
                i.resistance &&
                  (s.currentTranslate =
                    n.minTranslate() -
                    1 +
                    (-n.minTranslate() + s.startTranslate + m) ** y))
              : m < 0 &&
                s.currentTranslate < n.maxTranslate() &&
                ((v = !1),
                i.resistance &&
                  (s.currentTranslate =
                    n.maxTranslate() +
                    1 -
                    (n.maxTranslate() - s.startTranslate - m) ** y)),
            v && (c.preventedByNestedSwiper = !0),
            !n.allowSlideNext &&
              "next" === n.swipeDirection &&
              s.currentTranslate < s.startTranslate &&
              (s.currentTranslate = s.startTranslate),
            !n.allowSlidePrev &&
              "prev" === n.swipeDirection &&
              s.currentTranslate > s.startTranslate &&
              (s.currentTranslate = s.startTranslate),
            n.allowSlidePrev ||
              n.allowSlideNext ||
              (s.currentTranslate = s.startTranslate),
            i.threshold > 0)
          ) {
            if (!(Math.abs(m) > i.threshold || s.allowThresholdMove))
              return void (s.currentTranslate = s.startTranslate);
            if (!s.allowThresholdMove)
              return (
                (s.allowThresholdMove = !0),
                (r.startX = r.currentX),
                (r.startY = r.currentY),
                (s.currentTranslate = s.startTranslate),
                void (r.diff = n.isHorizontal()
                  ? r.currentX - r.startX
                  : r.currentY - r.startY)
              );
          }
          i.followFinger &&
            !i.cssMode &&
            (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
              i.watchSlidesProgress) &&
              (n.updateActiveIndex(), n.updateSlidesClasses()),
            n.params.freeMode &&
              i.freeMode.enabled &&
              n.freeMode &&
              n.freeMode.onTouchMove(),
            n.updateProgress(s.currentTranslate),
            n.setTranslate(s.currentTranslate));
        }
        function D(e) {
          const t = this,
            n = t.touchEventsData,
            {
              params: s,
              touches: i,
              rtlTranslate: r,
              slidesGrid: o,
              enabled: a,
            } = t;
          if (!a) return;
          let l = e;
          if (
            (l.originalEvent && (l = l.originalEvent),
            n.allowTouchCallbacks && t.emit("touchEnd", l),
            (n.allowTouchCallbacks = !1),
            !n.isTouched)
          )
            return (
              n.isMoved && s.grabCursor && t.setGrabCursor(!1),
              (n.isMoved = !1),
              void (n.startMoving = !1)
            );
          s.grabCursor &&
            n.isMoved &&
            n.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
          const c = w(),
            d = c - n.touchStartTime;
          if (t.allowClick) {
            const e = l.path || (l.composedPath && l.composedPath());
            t.updateClickedSlide((e && e[0]) || l.target),
              t.emit("tap click", l),
              d < 300 &&
                c - n.lastClickTime < 300 &&
                t.emit("doubleTap doubleClick", l);
          }
          if (
            ((n.lastClickTime = w()),
            v(() => {
              t.destroyed || (t.allowClick = !0);
            }),
            !n.isTouched ||
              !n.isMoved ||
              !t.swipeDirection ||
              0 === i.diff ||
              n.currentTranslate === n.startTranslate)
          )
            return (
              (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
            );
          let u;
          if (
            ((n.isTouched = !1),
            (n.isMoved = !1),
            (n.startMoving = !1),
            (u = s.followFinger
              ? r
                ? t.translate
                : -t.translate
              : -n.currentTranslate),
            s.cssMode)
          )
            return;
          if (t.params.freeMode && s.freeMode.enabled)
            return void t.freeMode.onTouchEnd({ currentPos: u });
          let p = 0,
            h = t.slidesSizesGrid[0];
          for (
            let e = 0;
            e < o.length;
            e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
          ) {
            const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            void 0 !== o[e + t]
              ? u >= o[e] && u < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
              : u >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
          }
          let f = null,
            m = null;
          s.rewind &&
            (t.isBeginning
              ? (m =
                  t.params.virtual && t.params.virtual.enabled && t.virtual
                    ? t.virtual.slides.length - 1
                    : t.slides.length - 1)
              : t.isEnd && (f = 0));
          const g = (u - o[p]) / h,
            y = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          if (d > s.longSwipesMs) {
            if (!s.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection &&
              (g >= s.longSwipesRatio
                ? t.slideTo(s.rewind && t.isEnd ? f : p + y)
                : t.slideTo(p)),
              "prev" === t.swipeDirection &&
                (g > 1 - s.longSwipesRatio
                  ? t.slideTo(p + y)
                  : null !== m && g < 0 && Math.abs(g) > s.longSwipesRatio
                  ? t.slideTo(m)
                  : t.slideTo(p));
          } else {
            if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation &&
            (l.target === t.navigation.nextEl ||
              l.target === t.navigation.prevEl)
              ? l.target === t.navigation.nextEl
                ? t.slideTo(p + y)
                : t.slideTo(p)
              : ("next" === t.swipeDirection &&
                  t.slideTo(null !== f ? f : p + y),
                "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
          }
        }
        function j() {
          const e = this,
            { params: t, el: n } = e;
          if (n && 0 === n.offsetWidth) return;
          t.breakpoints && e.setBreakpoint();
          const { allowSlideNext: s, allowSlidePrev: i, snapGrid: r } = e;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.isBeginning &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.run(),
            (e.allowSlidePrev = i),
            (e.allowSlideNext = s),
            e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
        }
        function R(e) {
          const t = this;
          t.enabled &&
            (t.allowClick ||
              (t.params.preventClicks && e.preventDefault(),
              t.params.preventClicksPropagation &&
                t.animating &&
                (e.stopPropagation(), e.stopImmediatePropagation())));
        }
        function F() {
          const e = this,
            { wrapperEl: t, rtlTranslate: n, enabled: s } = e;
          if (!s) return;
          let i;
          (e.previousTranslate = e.translate),
            e.isHorizontal()
              ? (e.translate = -t.scrollLeft)
              : (e.translate = -t.scrollTop),
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
          const r = e.maxTranslate() - e.minTranslate();
          (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
            i !== e.progress &&
              e.updateProgress(n ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
        }
        let H = !1;
        function G() {}
        const W = (e, t) => {
          const n = o(),
            {
              params: s,
              touchEvents: i,
              el: r,
              wrapperEl: a,
              device: l,
              support: c,
            } = e,
            d = !!s.nested,
            u = "on" === t ? "addEventListener" : "removeEventListener",
            p = t;
          if (c.touch) {
            const t = !(
              "touchstart" !== i.start ||
              !c.passiveListener ||
              !s.passiveListeners
            ) && { passive: !0, capture: !1 };
            r[u](i.start, e.onTouchStart, t),
              r[u](
                i.move,
                e.onTouchMove,
                c.passiveListener ? { passive: !1, capture: d } : d
              ),
              r[u](i.end, e.onTouchEnd, t),
              i.cancel && r[u](i.cancel, e.onTouchEnd, t);
          } else
            r[u](i.start, e.onTouchStart, !1),
              n[u](i.move, e.onTouchMove, d),
              n[u](i.end, e.onTouchEnd, !1);
          (s.preventClicks || s.preventClicksPropagation) &&
            r[u]("click", e.onClick, !0),
            s.cssMode && a[u]("scroll", e.onScroll),
            s.updateOnWindowResize
              ? e[p](
                  l.ios || l.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  j,
                  !0
                )
              : e[p]("observerUpdate", j, !0);
        };
        var V = {
          attachEvents: function () {
            const e = this,
              t = o(),
              { params: n, support: s } = e;
            (e.onTouchStart = N.bind(e)),
              (e.onTouchMove = z.bind(e)),
              (e.onTouchEnd = D.bind(e)),
              n.cssMode && (e.onScroll = F.bind(e)),
              (e.onClick = R.bind(e)),
              s.touch && !H && (t.addEventListener("touchstart", G), (H = !0)),
              W(e, "on");
          },
          detachEvents: function () {
            W(this, "off");
          },
        };
        const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var U = {
          setBreakpoint: function () {
            const e = this,
              {
                activeIndex: t,
                initialized: n,
                loopedSlides: s = 0,
                params: i,
                $el: r,
              } = e,
              o = i.breakpoints;
            if (!o || (o && 0 === Object.keys(o).length)) return;
            const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
            if (!a || e.currentBreakpoint === a) return;
            const l = (a in o ? o[a] : void 0) || e.originalParams,
              c = Y(e, i),
              d = Y(e, l),
              u = i.enabled;
            c && !d
              ? (r.removeClass(
                  `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !c &&
                d &&
                (r.addClass(`${i.containerModifierClass}grid`),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === i.grid.fill)) &&
                  r.addClass(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses());
            const p = l.direction && l.direction !== i.direction,
              h = i.loop && (l.slidesPerView !== i.slidesPerView || p);
            p && n && e.changeDirection(), S(e.params, l);
            const f = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              u && !f ? e.disable() : !u && f && e.enable(),
              (e.currentBreakpoint = a),
              e.emit("_beforeBreakpoint", l),
              h &&
                n &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - s + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", l);
          },
          getBreakpoint: function (e, t, n) {
            if (
              (void 0 === t && (t = "window"), !e || ("container" === t && !n))
            )
              return;
            let s = !1;
            const i = l(),
              r = "window" === t ? i.innerHeight : n.clientHeight,
              o = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < o.length; e += 1) {
              const { point: r, value: a } = o[e];
              "window" === t
                ? i.matchMedia(`(min-width: ${a}px)`).matches && (s = r)
                : a <= n.clientWidth && (s = r);
            }
            return s || "max";
          },
        };
        var X = {
          addClasses: function () {
            const e = this,
              {
                classNames: t,
                params: n,
                rtl: s,
                $el: i,
                device: r,
                support: o,
              } = e,
              a = (function (e, t) {
                const n = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((s) => {
                          e[s] && n.push(t + s);
                        })
                      : "string" == typeof e && n.push(t + e);
                  }),
                  n
                );
              })(
                [
                  "initialized",
                  n.direction,
                  { "pointer-events": !o.touch },
                  { "free-mode": e.params.freeMode && n.freeMode.enabled },
                  { autoheight: n.autoHeight },
                  { rtl: s },
                  { grid: n.grid && n.grid.rows > 1 },
                  {
                    "grid-column":
                      n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { "css-mode": n.cssMode },
                  { centered: n.cssMode && n.centeredSlides },
                ],
                n.containerModifierClass
              );
            t.push(...a),
              i.addClass([...t].join(" ")),
              e.emitContainerClasses();
          },
          removeClasses: function () {
            const { $el: e, classNames: t } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses();
          },
        };
        var J = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          enabled: !0,
          focusableElements:
            "input, select, option, textarea, button, video, label",
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          maxBackfaceHiddenSlides: 10,
          containerModifierClass: "swiper-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        };
        function K(e, t) {
          return function (n) {
            void 0 === n && (n = {});
            const s = Object.keys(n)[0],
              i = n[s];
            "object" == typeof i && null !== i
              ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
                  !0 === e[s] &&
                  (e[s] = { auto: !0 }),
                s in e && "enabled" in i
                  ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                    "object" != typeof e[s] ||
                      "enabled" in e[s] ||
                      (e[s].enabled = !0),
                    e[s] || (e[s] = { enabled: !1 }),
                    S(t, n))
                  : S(t, n))
              : S(t, n);
          };
        }
        const Z = {
            eventsEmitter: A,
            update: P,
            translate: O,
            transition: {
              setTransition: function (e, t) {
                const n = this;
                n.params.cssMode || n.$wrapperEl.transition(e),
                  n.emit("setTransition", e, t);
              },
              transitionStart: function (e, t) {
                void 0 === e && (e = !0);
                const n = this,
                  { params: s } = n;
                s.cssMode ||
                  (s.autoHeight && n.updateAutoHeight(),
                  B({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "Start",
                  }));
              },
              transitionEnd: function (e, t) {
                void 0 === e && (e = !0);
                const n = this,
                  { params: s } = n;
                (n.animating = !1),
                  s.cssMode ||
                    (n.setTransition(0),
                    B({
                      swiper: n,
                      runCallbacks: e,
                      direction: t,
                      step: "End",
                    }));
              },
            },
            slide: I,
            loop: q,
            grabCursor: {
              setGrabCursor: function (e) {
                const t = this;
                if (
                  t.support.touch ||
                  !t.params.simulateTouch ||
                  (t.params.watchOverflow && t.isLocked) ||
                  t.params.cssMode
                )
                  return;
                const n =
                  "container" === t.params.touchEventsTarget
                    ? t.el
                    : t.wrapperEl;
                (n.style.cursor = "move"),
                  (n.style.cursor = e ? "grabbing" : "grab");
              },
              unsetGrabCursor: function () {
                const e = this;
                e.support.touch ||
                  (e.params.watchOverflow && e.isLocked) ||
                  e.params.cssMode ||
                  (e[
                    "container" === e.params.touchEventsTarget
                      ? "el"
                      : "wrapperEl"
                  ].style.cursor = "");
              },
            },
            events: V,
            breakpoints: U,
            checkOverflow: {
              checkOverflow: function () {
                const e = this,
                  { isLocked: t, params: n } = e,
                  { slidesOffsetBefore: s } = n;
                if (s) {
                  const t = e.slides.length - 1,
                    n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                  e.isLocked = e.size > n;
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                  !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                  t && t !== e.isLocked && (e.isEnd = !1),
                  t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
              },
            },
            classes: X,
            images: {
              loadImage: function (e, t, n, s, i, r) {
                const o = l();
                let a;
                function c() {
                  r && r();
                }
                g(e).parent("picture")[0] || (e.complete && i)
                  ? c()
                  : t
                  ? ((a = new o.Image()),
                    (a.onload = c),
                    (a.onerror = c),
                    s && (a.sizes = s),
                    n && (a.srcset = n),
                    t && (a.src = t))
                  : c();
              },
              preloadImages: function () {
                const e = this;
                function t() {
                  null != e &&
                    e &&
                    !e.destroyed &&
                    (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length &&
                      (e.params.updateOnImagesReady && e.update(),
                      e.emit("imagesReady")));
                }
                e.imagesToLoad = e.$el.find("img");
                for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                  const s = e.imagesToLoad[n];
                  e.loadImage(
                    s,
                    s.currentSrc || s.getAttribute("src"),
                    s.srcset || s.getAttribute("srcset"),
                    s.sizes || s.getAttribute("sizes"),
                    !0,
                    t
                  );
                }
              },
            },
          },
          Q = {};
        class ee {
          constructor() {
            let e, t;
            for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
              s[i] = arguments[i];
            if (
              (1 === s.length &&
              s[0].constructor &&
              "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
                ? (t = s[0])
                : ([e, t] = s),
              t || (t = {}),
              (t = S({}, t)),
              e && !t.el && (t.el = e),
              t.el && g(t.el).length > 1)
            ) {
              const e = [];
              return (
                g(t.el).each((n) => {
                  const s = S({}, t, { el: n });
                  e.push(new ee(s));
                }),
                e
              );
            }
            const r = this;
            (r.__swiper__ = !0),
              (r.support = k()),
              (r.device = M({ userAgent: t.userAgent })),
              (r.browser = _()),
              (r.eventsListeners = {}),
              (r.eventsAnyListeners = []),
              (r.modules = [...r.__modules__]),
              t.modules &&
                Array.isArray(t.modules) &&
                r.modules.push(...t.modules);
            const o = {};
            r.modules.forEach((e) => {
              e({
                swiper: r,
                extendParams: K(t, o),
                on: r.on.bind(r),
                once: r.once.bind(r),
                off: r.off.bind(r),
                emit: r.emit.bind(r),
              });
            });
            const a = S({}, J, o);
            return (
              (r.params = S({}, a, Q, t)),
              (r.originalParams = S({}, r.params)),
              (r.passedParams = S({}, t)),
              r.params &&
                r.params.on &&
                Object.keys(r.params.on).forEach((e) => {
                  r.on(e, r.params.on[e]);
                }),
              r.params && r.params.onAny && r.onAny(r.params.onAny),
              (r.$ = g),
              Object.assign(r, {
                enabled: r.params.enabled,
                el: e,
                classNames: [],
                slides: g(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === r.params.direction,
                isVertical: () => "vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: (function () {
                  const e = [
                      "touchstart",
                      "touchmove",
                      "touchend",
                      "touchcancel",
                    ],
                    t = ["pointerdown", "pointermove", "pointerup"];
                  return (
                    (r.touchEventsTouch = {
                      start: e[0],
                      move: e[1],
                      end: e[2],
                      cancel: e[3],
                    }),
                    (r.touchEventsDesktop = {
                      start: t[0],
                      move: t[1],
                      end: t[2],
                    }),
                    r.support.touch || !r.params.simulateTouch
                      ? r.touchEventsTouch
                      : r.touchEventsDesktop
                  );
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: r.params.focusableElements,
                  lastClickTime: w(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              r.emit("_swiper"),
              r.params.init && r.init(),
              r
            );
          }
          enable() {
            const e = this;
            e.enabled ||
              ((e.enabled = !0),
              e.params.grabCursor && e.setGrabCursor(),
              e.emit("enable"));
          }
          disable() {
            const e = this;
            e.enabled &&
              ((e.enabled = !1),
              e.params.grabCursor && e.unsetGrabCursor(),
              e.emit("disable"));
          }
          setProgress(e, t) {
            const n = this;
            e = Math.min(Math.max(e, 0), 1);
            const s = n.minTranslate(),
              i = (n.maxTranslate() - s) * e + s;
            n.translateTo(i, void 0 === t ? 0 : t),
              n.updateActiveIndex(),
              n.updateSlidesClasses();
          }
          emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className
              .split(" ")
              .filter(
                (t) =>
                  0 === t.indexOf("swiper") ||
                  0 === t.indexOf(e.params.containerModifierClass)
              );
            e.emit("_containerClasses", t.join(" "));
          }
          getSlideClasses(e) {
            const t = this;
            return e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
          }
          emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((n) => {
              const s = e.getSlideClasses(n);
              t.push({ slideEl: n, classNames: s }),
                e.emit("_slideClass", n, s);
            }),
              e.emit("_slideClasses", t);
          }
          slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {
              params: n,
              slides: s,
              slidesGrid: i,
              slidesSizesGrid: r,
              size: o,
              activeIndex: a,
            } = this;
            let l = 1;
            if (n.centeredSlides) {
              let e,
                t = s[a].swiperSlideSize;
              for (let n = a + 1; n < s.length; n += 1)
                s[n] &&
                  !e &&
                  ((t += s[n].swiperSlideSize), (l += 1), t > o && (e = !0));
              for (let n = a - 1; n >= 0; n -= 1)
                s[n] &&
                  !e &&
                  ((t += s[n].swiperSlideSize), (l += 1), t > o && (e = !0));
            } else if ("current" === e)
              for (let e = a + 1; e < s.length; e += 1) {
                (t ? i[e] + r[e] - i[a] < o : i[e] - i[a] < o) && (l += 1);
              }
            else
              for (let e = a - 1; e >= 0; e -= 1) {
                i[a] - i[e] < o && (l += 1);
              }
            return l;
          }
          update() {
            const e = this;
            if (!e || e.destroyed) return;
            const { snapGrid: t, params: n } = e;
            function s() {
              const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
              e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            let i;
            n.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode && e.params.freeMode.enabled
                ? (s(), e.params.autoHeight && e.updateAutoHeight())
                : ((i =
                    ("auto" === e.params.slidesPerView ||
                      e.params.slidesPerView > 1) &&
                    e.isEnd &&
                    !e.params.centeredSlides
                      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                      : e.slideTo(e.activeIndex, 0, !1, !0)),
                  i || s()),
              n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit("update");
          }
          changeDirection(e, t) {
            void 0 === t && (t = !0);
            const n = this,
              s = n.params.direction;
            return (
              e || (e = "horizontal" === s ? "vertical" : "horizontal"),
              e === s ||
                ("horizontal" !== e && "vertical" !== e) ||
                (n.$el
                  .removeClass(`${n.params.containerModifierClass}${s}`)
                  .addClass(`${n.params.containerModifierClass}${e}`),
                n.emitContainerClasses(),
                (n.params.direction = e),
                n.slides.each((t) => {
                  "vertical" === e
                    ? (t.style.width = "")
                    : (t.style.height = "");
                }),
                n.emit("changeDirection"),
                t && n.update()),
              n
            );
          }
          mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const n = g(e || t.params.el);
            if (!(e = n[0])) return !1;
            e.swiper = t;
            const s = () =>
              `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let i = (() => {
              if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                const t = g(e.shadowRoot.querySelector(s()));
                return (t.children = (e) => n.children(e)), t;
              }
              return n.children(s());
            })();
            if (0 === i.length && t.params.createElements) {
              const e = o().createElement("div");
              (i = g(e)),
                (e.className = t.params.wrapperClass),
                n.append(e),
                n.children(`.${t.params.slideClass}`).each((e) => {
                  i.append(e);
                });
            }
            return (
              Object.assign(t, {
                $el: n,
                el: e,
                $wrapperEl: i,
                wrapperEl: i[0],
                mounted: !0,
                rtl:
                  "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
                rtlTranslate:
                  "horizontal" === t.params.direction &&
                  ("rtl" === e.dir.toLowerCase() ||
                    "rtl" === n.css("direction")),
                wrongRTL: "-webkit-box" === i.css("display"),
              }),
              !0
            );
          }
          init(e) {
            const t = this;
            if (t.initialized) return t;
            return (
              !1 === t.mount(e) ||
                (t.emit("beforeInit"),
                t.params.breakpoints && t.setBreakpoint(),
                t.addClasses(),
                t.params.loop && t.loopCreate(),
                t.updateSize(),
                t.updateSlides(),
                t.params.watchOverflow && t.checkOverflow(),
                t.params.grabCursor && t.enabled && t.setGrabCursor(),
                t.params.preloadImages && t.preloadImages(),
                t.params.loop
                  ? t.slideTo(
                      t.params.initialSlide + t.loopedSlides,
                      0,
                      t.params.runCallbacksOnInit,
                      !1,
                      !0
                    )
                  : t.slideTo(
                      t.params.initialSlide,
                      0,
                      t.params.runCallbacksOnInit,
                      !1,
                      !0
                    ),
                t.attachEvents(),
                (t.initialized = !0),
                t.emit("init"),
                t.emit("afterInit")),
              t
            );
          }
          destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const n = this,
              { params: s, $el: i, $wrapperEl: r, slides: o } = n;
            return (
              void 0 === n.params ||
                n.destroyed ||
                (n.emit("beforeDestroy"),
                (n.initialized = !1),
                n.detachEvents(),
                s.loop && n.loopDestroy(),
                t &&
                  (n.removeClasses(),
                  i.removeAttr("style"),
                  r.removeAttr("style"),
                  o &&
                    o.length &&
                    o
                      .removeClass(
                        [
                          s.slideVisibleClass,
                          s.slideActiveClass,
                          s.slideNextClass,
                          s.slidePrevClass,
                        ].join(" ")
                      )
                      .removeAttr("style")
                      .removeAttr("data-swiper-slide-index")),
                n.emit("destroy"),
                Object.keys(n.eventsListeners).forEach((e) => {
                  n.off(e);
                }),
                !1 !== e &&
                  ((n.$el[0].swiper = null),
                  (function (e) {
                    const t = e;
                    Object.keys(t).forEach((e) => {
                      try {
                        t[e] = null;
                      } catch (e) {}
                      try {
                        delete t[e];
                      } catch (e) {}
                    });
                  })(n)),
                (n.destroyed = !0)),
              null
            );
          }
          static extendDefaults(e) {
            S(Q, e);
          }
          static get extendedDefaults() {
            return Q;
          }
          static get defaults() {
            return J;
          }
          static installModule(e) {
            ee.prototype.__modules__ || (ee.prototype.__modules__ = []);
            const t = ee.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
          }
          static use(e) {
            return Array.isArray(e)
              ? (e.forEach((e) => ee.installModule(e)), ee)
              : (ee.installModule(e), ee);
          }
        }
        Object.keys(Z).forEach((e) => {
          Object.keys(Z[e]).forEach((t) => {
            ee.prototype[t] = Z[e][t];
          });
        }),
          ee.use([
            function (e) {
              let { swiper: t, on: n, emit: s } = e;
              const i = l();
              let r = null,
                o = null;
              const a = () => {
                  t &&
                    !t.destroyed &&
                    t.initialized &&
                    (s("beforeResize"), s("resize"));
                },
                c = () => {
                  t && !t.destroyed && t.initialized && s("orientationchange");
                };
              n("init", () => {
                t.params.resizeObserver && void 0 !== i.ResizeObserver
                  ? t &&
                    !t.destroyed &&
                    t.initialized &&
                    ((r = new ResizeObserver((e) => {
                      o = i.requestAnimationFrame(() => {
                        const { width: n, height: s } = t;
                        let i = n,
                          r = s;
                        e.forEach((e) => {
                          let {
                            contentBoxSize: n,
                            contentRect: s,
                            target: o,
                          } = e;
                          (o && o !== t.el) ||
                            ((i = s ? s.width : (n[0] || n).inlineSize),
                            (r = s ? s.height : (n[0] || n).blockSize));
                        }),
                          (i === n && r === s) || a();
                      });
                    })),
                    r.observe(t.el))
                  : (i.addEventListener("resize", a),
                    i.addEventListener("orientationchange", c));
              }),
                n("destroy", () => {
                  o && i.cancelAnimationFrame(o),
                    r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                    i.removeEventListener("resize", a),
                    i.removeEventListener("orientationchange", c);
                });
            },
            function (e) {
              let { swiper: t, extendParams: n, on: s, emit: i } = e;
              const r = [],
                o = l(),
                a = function (e, t) {
                  void 0 === t && (t = {});
                  const n = new (o.MutationObserver ||
                    o.WebkitMutationObserver)((e) => {
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const t = function () {
                      i("observerUpdate", e[0]);
                    };
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(t)
                      : o.setTimeout(t, 0);
                  });
                  n.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData:
                      void 0 === t.characterData || t.characterData,
                  }),
                    r.push(n);
                };
              n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
                s("init", () => {
                  if (t.params.observer) {
                    if (t.params.observeParents) {
                      const e = t.$el.parents();
                      for (let t = 0; t < e.length; t += 1) a(e[t]);
                    }
                    a(t.$el[0], { childList: t.params.observeSlideChildren }),
                      a(t.$wrapperEl[0], { attributes: !1 });
                  }
                }),
                s("destroy", () => {
                  r.forEach((e) => {
                    e.disconnect();
                  }),
                    r.splice(0, r.length);
                });
            },
          ]);
        var te = ee;
        function ne(e, t, n, s) {
          const i = o();
          return (
            e.params.createElements &&
              Object.keys(s).forEach((r) => {
                if (!n[r] && !0 === n.auto) {
                  let o = e.$el.children(`.${s[r]}`)[0];
                  o ||
                    ((o = i.createElement("div")),
                    (o.className = s[r]),
                    e.$el.append(o)),
                    (n[r] = o),
                    (t[r] = o);
                }
              }),
            n
          );
        }
        function se(e) {
          let { swiper: t, extendParams: n, on: s, emit: i } = e;
          function r(e) {
            let n;
            return (
              e &&
                ((n = g(e)),
                t.params.uniqueNavElements &&
                  "string" == typeof e &&
                  n.length > 1 &&
                  1 === t.$el.find(e).length &&
                  (n = t.$el.find(e))),
              n
            );
          }
          function o(e, n) {
            const s = t.params.navigation;
            e &&
              e.length > 0 &&
              (e[n ? "addClass" : "removeClass"](s.disabledClass),
              e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
              t.params.watchOverflow &&
                t.enabled &&
                e[t.isLocked ? "addClass" : "removeClass"](s.lockClass));
          }
          function a() {
            if (t.params.loop) return;
            const { $nextEl: e, $prevEl: n } = t.navigation;
            o(n, t.isBeginning && !t.params.rewind),
              o(e, t.isEnd && !t.params.rewind);
          }
          function l(e) {
            e.preventDefault(),
              (!t.isBeginning || t.params.loop || t.params.rewind) &&
                t.slidePrev();
          }
          function c(e) {
            e.preventDefault(),
              (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
          }
          function d() {
            const e = t.params.navigation;
            if (
              ((t.params.navigation = ne(
                t,
                t.originalParams.navigation,
                t.params.navigation,
                { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
              )),
              !e.nextEl && !e.prevEl)
            )
              return;
            const n = r(e.nextEl),
              s = r(e.prevEl);
            n && n.length > 0 && n.on("click", c),
              s && s.length > 0 && s.on("click", l),
              Object.assign(t.navigation, {
                $nextEl: n,
                nextEl: n && n[0],
                $prevEl: s,
                prevEl: s && s[0],
              }),
              t.enabled ||
                (n && n.addClass(e.lockClass), s && s.addClass(e.lockClass));
          }
          function u() {
            const { $nextEl: e, $prevEl: n } = t.navigation;
            e &&
              e.length &&
              (e.off("click", c),
              e.removeClass(t.params.navigation.disabledClass)),
              n &&
                n.length &&
                (n.off("click", l),
                n.removeClass(t.params.navigation.disabledClass));
          }
          n({
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
            },
          }),
            (t.navigation = {
              nextEl: null,
              $nextEl: null,
              prevEl: null,
              $prevEl: null,
            }),
            s("init", () => {
              d(), a();
            }),
            s("toEdge fromEdge lock unlock", () => {
              a();
            }),
            s("destroy", () => {
              u();
            }),
            s("enable disable", () => {
              const { $nextEl: e, $prevEl: n } = t.navigation;
              e &&
                e[t.enabled ? "removeClass" : "addClass"](
                  t.params.navigation.lockClass
                ),
                n &&
                  n[t.enabled ? "removeClass" : "addClass"](
                    t.params.navigation.lockClass
                  );
            }),
            s("click", (e, n) => {
              const { $nextEl: s, $prevEl: r } = t.navigation,
                o = n.target;
              if (
                t.params.navigation.hideOnClick &&
                !g(o).is(r) &&
                !g(o).is(s)
              ) {
                if (
                  t.pagination &&
                  t.params.pagination &&
                  t.params.pagination.clickable &&
                  (t.pagination.el === o || t.pagination.el.contains(o))
                )
                  return;
                let e;
                s
                  ? (e = s.hasClass(t.params.navigation.hiddenClass))
                  : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
                  i(!0 === e ? "navigationShow" : "navigationHide"),
                  s && s.toggleClass(t.params.navigation.hiddenClass),
                  r && r.toggleClass(t.params.navigation.hiddenClass);
              }
            }),
            Object.assign(t.navigation, { update: a, init: d, destroy: u });
        }
        function ie(e) {
          return (
            void 0 === e && (e = ""),
            `.${e
              .trim()
              .replace(/([\.:!\/])/g, "\\$1")
              .replace(/ /g, ".")}`
          );
        }
        function re(e) {
          let { swiper: t, extendParams: n, on: s, emit: i } = e;
          const r = "swiper-pagination";
          let o;
          n({
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: (e) => e,
              formatFractionTotal: (e) => e,
              bulletClass: `${r}-bullet`,
              bulletActiveClass: `${r}-bullet-active`,
              modifierClass: `${r}-`,
              currentClass: `${r}-current`,
              totalClass: `${r}-total`,
              hiddenClass: `${r}-hidden`,
              progressbarFillClass: `${r}-progressbar-fill`,
              progressbarOppositeClass: `${r}-progressbar-opposite`,
              clickableClass: `${r}-clickable`,
              lockClass: `${r}-lock`,
              horizontalClass: `${r}-horizontal`,
              verticalClass: `${r}-vertical`,
            },
          }),
            (t.pagination = { el: null, $el: null, bullets: [] });
          let a = 0;
          function l() {
            return (
              !t.params.pagination.el ||
              !t.pagination.el ||
              !t.pagination.$el ||
              0 === t.pagination.$el.length
            );
          }
          function c(e, n) {
            const { bulletActiveClass: s } = t.params.pagination;
            e[n]().addClass(`${s}-${n}`)[n]().addClass(`${s}-${n}-${n}`);
          }
          function d() {
            const e = t.rtl,
              n = t.params.pagination;
            if (l()) return;
            const s =
                t.virtual && t.params.virtual.enabled
                  ? t.virtual.slides.length
                  : t.slides.length,
              r = t.pagination.$el;
            let d;
            const u = t.params.loop
              ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
            if (
              (t.params.loop
                ? ((d = Math.ceil(
                    (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                  )),
                  d > s - 1 - 2 * t.loopedSlides &&
                    (d -= s - 2 * t.loopedSlides),
                  d > u - 1 && (d -= u),
                  d < 0 && "bullets" !== t.params.paginationType && (d = u + d))
                : (d =
                    void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
              "bullets" === n.type &&
                t.pagination.bullets &&
                t.pagination.bullets.length > 0)
            ) {
              const s = t.pagination.bullets;
              let i, l, u;
              if (
                (n.dynamicBullets &&
                  ((o = s
                    .eq(0)
                    [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  r.css(
                    t.isHorizontal() ? "width" : "height",
                    o * (n.dynamicMainBullets + 4) + "px"
                  ),
                  n.dynamicMainBullets > 1 &&
                    void 0 !== t.previousIndex &&
                    ((a += d - (t.previousIndex - t.loopedSlides || 0)),
                    a > n.dynamicMainBullets - 1
                      ? (a = n.dynamicMainBullets - 1)
                      : a < 0 && (a = 0)),
                  (i = Math.max(d - a, 0)),
                  (l = i + (Math.min(s.length, n.dynamicMainBullets) - 1)),
                  (u = (l + i) / 2)),
                s.removeClass(
                  ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                    .map((e) => `${n.bulletActiveClass}${e}`)
                    .join(" ")
                ),
                r.length > 1)
              )
                s.each((e) => {
                  const t = g(e),
                    s = t.index();
                  s === d && t.addClass(n.bulletActiveClass),
                    n.dynamicBullets &&
                      (s >= i &&
                        s <= l &&
                        t.addClass(`${n.bulletActiveClass}-main`),
                      s === i && c(t, "prev"),
                      s === l && c(t, "next"));
                });
              else {
                const e = s.eq(d),
                  r = e.index();
                if ((e.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                  const e = s.eq(i),
                    o = s.eq(l);
                  for (let e = i; e <= l; e += 1)
                    s.eq(e).addClass(`${n.bulletActiveClass}-main`);
                  if (t.params.loop)
                    if (r >= s.length) {
                      for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                        s.eq(s.length - e).addClass(
                          `${n.bulletActiveClass}-main`
                        );
                      s.eq(s.length - n.dynamicMainBullets - 1).addClass(
                        `${n.bulletActiveClass}-prev`
                      );
                    } else c(e, "prev"), c(o, "next");
                  else c(e, "prev"), c(o, "next");
                }
              }
              if (n.dynamicBullets) {
                const i = Math.min(s.length, n.dynamicMainBullets + 4),
                  r = (o * i - o) / 2 - u * o,
                  a = e ? "right" : "left";
                s.css(t.isHorizontal() ? a : "top", `${r}px`);
              }
            }
            if (
              ("fraction" === n.type &&
                (r
                  .find(ie(n.currentClass))
                  .text(n.formatFractionCurrent(d + 1)),
                r.find(ie(n.totalClass)).text(n.formatFractionTotal(u))),
              "progressbar" === n.type)
            ) {
              let e;
              e = n.progressbarOpposite
                ? t.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : t.isHorizontal()
                ? "horizontal"
                : "vertical";
              const s = (d + 1) / u;
              let i = 1,
                o = 1;
              "horizontal" === e ? (i = s) : (o = s),
                r
                  .find(ie(n.progressbarFillClass))
                  .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${o})`)
                  .transition(t.params.speed);
            }
            "custom" === n.type && n.renderCustom
              ? (r.html(n.renderCustom(t, d + 1, u)),
                i("paginationRender", r[0]))
              : i("paginationUpdate", r[0]),
              t.params.watchOverflow &&
                t.enabled &&
                r[t.isLocked ? "addClass" : "removeClass"](n.lockClass);
          }
          function u() {
            const e = t.params.pagination;
            if (l()) return;
            const n =
                t.virtual && t.params.virtual.enabled
                  ? t.virtual.slides.length
                  : t.slides.length,
              s = t.pagination.$el;
            let r = "";
            if ("bullets" === e.type) {
              let i = t.params.loop
                ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
                : t.snapGrid.length;
              t.params.freeMode &&
                t.params.freeMode.enabled &&
                !t.params.loop &&
                i > n &&
                (i = n);
              for (let n = 0; n < i; n += 1)
                e.renderBullet
                  ? (r += e.renderBullet.call(t, n, e.bulletClass))
                  : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
              s.html(r), (t.pagination.bullets = s.find(ie(e.bulletClass)));
            }
            "fraction" === e.type &&
              ((r = e.renderFraction
                ? e.renderFraction.call(t, e.currentClass, e.totalClass)
                : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
              s.html(r)),
              "progressbar" === e.type &&
                ((r = e.renderProgressbar
                  ? e.renderProgressbar.call(t, e.progressbarFillClass)
                  : `<span class="${e.progressbarFillClass}"></span>`),
                s.html(r)),
              "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
          }
          function p() {
            t.params.pagination = ne(
              t,
              t.originalParams.pagination,
              t.params.pagination,
              { el: "swiper-pagination" }
            );
            const e = t.params.pagination;
            if (!e.el) return;
            let n = g(e.el);
            0 !== n.length &&
              (t.params.uniqueNavElements &&
                "string" == typeof e.el &&
                n.length > 1 &&
                ((n = t.$el.find(e.el)),
                n.length > 1 &&
                  (n = n.filter((e) => g(e).parents(".swiper")[0] === t.el))),
              "bullets" === e.type &&
                e.clickable &&
                n.addClass(e.clickableClass),
              n.addClass(e.modifierClass + e.type),
              n.addClass(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              "bullets" === e.type &&
                e.dynamicBullets &&
                (n.addClass(`${e.modifierClass}${e.type}-dynamic`),
                (a = 0),
                e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
              "progressbar" === e.type &&
                e.progressbarOpposite &&
                n.addClass(e.progressbarOppositeClass),
              e.clickable &&
                n.on("click", ie(e.bulletClass), function (e) {
                  e.preventDefault();
                  let n = g(this).index() * t.params.slidesPerGroup;
                  t.params.loop && (n += t.loopedSlides), t.slideTo(n);
                }),
              Object.assign(t.pagination, { $el: n, el: n[0] }),
              t.enabled || n.addClass(e.lockClass));
          }
          function h() {
            const e = t.params.pagination;
            if (l()) return;
            const n = t.pagination.$el;
            n.removeClass(e.hiddenClass),
              n.removeClass(e.modifierClass + e.type),
              n.removeClass(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              t.pagination.bullets &&
                t.pagination.bullets.removeClass &&
                t.pagination.bullets.removeClass(e.bulletActiveClass),
              e.clickable && n.off("click", ie(e.bulletClass));
          }
          s("init", () => {
            p(), u(), d();
          }),
            s("activeIndexChange", () => {
              (t.params.loop || void 0 === t.snapIndex) && d();
            }),
            s("snapIndexChange", () => {
              t.params.loop || d();
            }),
            s("slidesLengthChange", () => {
              t.params.loop && (u(), d());
            }),
            s("snapGridLengthChange", () => {
              t.params.loop || (u(), d());
            }),
            s("destroy", () => {
              h();
            }),
            s("enable disable", () => {
              const { $el: e } = t.pagination;
              e &&
                e[t.enabled ? "removeClass" : "addClass"](
                  t.params.pagination.lockClass
                );
            }),
            s("lock unlock", () => {
              d();
            }),
            s("click", (e, n) => {
              const s = n.target,
                { $el: r } = t.pagination;
              if (
                t.params.pagination.el &&
                t.params.pagination.hideOnClick &&
                r.length > 0 &&
                !g(s).hasClass(t.params.pagination.bulletClass)
              ) {
                if (
                  t.navigation &&
                  ((t.navigation.nextEl && s === t.navigation.nextEl) ||
                    (t.navigation.prevEl && s === t.navigation.prevEl))
                )
                  return;
                const e = r.hasClass(t.params.pagination.hiddenClass);
                i(!0 === e ? "paginationShow" : "paginationHide"),
                  r.toggleClass(t.params.pagination.hiddenClass);
              }
            }),
            Object.assign(t.pagination, {
              render: u,
              update: d,
              init: p,
              destroy: h,
            });
        }
        var oe = n(1045);
        const ae = document.querySelector(".portfolio__slider");
        ae &&
          (function (e) {
            let t;
            t =
              window.innerWidth > oe.Z
                ? new te(".portfolio__slider .swiper--desktop", {
                    modules: [re, se],
                    slidesPerView: 5,
                    spaceBetween: 12,
                    loop: !0,
                    loopedSlides: 10,
                    centeredSlides: !0,
                    grabCursor: !0,
                    navigation: {
                      nextEl: ".portfolio__slider-nav-button--next",
                      prevEl: ".portfolio__slider-nav-button--prev",
                    },
                    pagination: {
                      el: ".swiper-pagination",
                      dynamicBullets: !0,
                      dynamicMainBullets: 3,
                    },
                  })
                : new te(".portfolio__slider .swiper--mobile", {
                    modules: [re],
                    slidesPerView: 3,
                    spaceBetween: 12,
                    loop: !0,
                    loopedSlides: 10,
                    centeredSlides: !0,
                    grabCursor: !0,
                    pagination: {
                      el: ".swiper-pagination",
                      dynamicBullets: !0,
                      dynamicMainBullets: 3,
                    },
                  });
          })();
      },
      7886: function () {},
      7958: function () {},
      8736: function () {},
      2063: function () {},
      3615: function () {
        Array.from(
          document.querySelectorAll(".user-experience__colors-item")
        ).forEach((e) => {
          !(function (e) {
            const t = window.getComputedStyle(e).backgroundColor;
            e.querySelector(".animation__title").innerText = `#${(function (e) {
              let t = (e = e.replace(/\s/g, "")).match(
                /^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i
              );
              if (t) {
                e = "";
                for (let n = 1; n <= 3; n++)
                  e += Math.round(
                    ("%" == t[n][t[n].length - 1] ? 2.55 : 1) * parseInt(t[n])
                  )
                    .toString(16)
                    .replace(/^(.)$/, "0$1");
              } else
                e = e.replace(
                  /^#?([\da-f])([\da-f])([\da-f])$/i,
                  "$1$1$2$2$3$3"
                );
              return e;
            })(t)}`;
          })(e);
        });
      },
      1367: function () {},
      2105: function () {},
      4543: function () {},
      8072: function () {},
      1488: function () {},
      9186: function () {},
      8405: function () {},
      5580: function () {},
      5480: function () {},
      6003: function () {},
      2648: function () {},
      4972: function () {},
      5445: function () {},
      7098: function () {},
      6089: function () {},
      1016: function () {},
      6027: function () {},
      5788: function () {},
      1279: function () {},
      458: function () {},
      9460: function () {},
      220: function () {},
      536: function () {},
      7495: function () {},
      9055: function () {},
      9127: function () {},
      1790: function () {},
      6481: function () {},
      7190: function () {},
      1958: function () {},
      6099: function () {},
      6885: function () {},
      6722: function () {},
      3103: function () {},
      8504: function () {},
      8593: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}'
        );
      },
    },
    t = {};
  function n(s) {
    var i = t[s];
    if (void 0 !== i) return i.exports;
    var r = (t[s] = { exports: {} });
    return e[s](r, r.exports, n), r.exports;
  }
  (n.d = function (e, t) {
    for (var s in t)
      n.o(t, s) &&
        !n.o(e, s) &&
        Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
  }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    n(1045),
    n(5190),
    n(6788),
    n(6698),
    n(4270),
    n(994),
    n(8395),
    n(9722),
    n(2362),
    n(8044),
    n(9202),
    n(8787),
    n(1599),
    n(1313),
    n(5070),
    n(3441),
    n(8966),
    n(7093),
    n(6574),
    n(1551),
    n(7561),
    n(1833),
    n(9408),
    n(7886),
    n(7958),
    n(8736),
    n(2063),
    n(3615),
    n(1367),
    n(2105),
    n(4543),
    n(8072),
    n(1488),
    n(9186),
    n(8405),
    n(5580),
    n(5480),
    n(6003),
    n(2648),
    n(4972),
    n(5445),
    n(7098),
    n(6089),
    n(1016),
    n(6027),
    n(5788),
    n(1279),
    n(458),
    n(9460),
    n(220),
    n(536),
    n(7495),
    n(9055),
    n(9127),
    n(1790),
    n(6481),
    n(7190),
    n(1958),
    n(6099),
    n(6885),
    n(6722),
    n(3103);
  n(8504);
})();
//# sourceMappingURL=main.3a4ad0fdbf14a3a9fd25.js.map

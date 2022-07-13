var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    __hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source))
      exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop) && (target[prop] = source[prop]);
  return target;
}, __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React, init_react = __esm({
  "node_modules/@remix-run/dev/dist/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// @remix-run/react/dist/_virtual/_rollupPluginBabelHelpers.js
var require_rollupPluginBabelHelpers = __commonJS({
  "@remix-run/react/dist/_virtual/_rollupPluginBabelHelpers.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    function _extends() {
      return _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source)
            Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
      }, _extends.apply(this, arguments);
    }
    exports.extends = _extends;
  }
});

// @remix-run/react/dist/errorBoundaries.js
var require_errorBoundaries = __commonJS({
  "@remix-run/react/dist/errorBoundaries.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var React4 = require("react");
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var React__default = /* @__PURE__ */ _interopDefaultLegacy(React4), RemixErrorBoundary = class extends React__default.default.Component {
      constructor(props) {
        super(props);
        this.state = {
          error: props.error || null,
          location: props.location
        };
      }
      static getDerivedStateFromError(error) {
        return {
          error
        };
      }
      static getDerivedStateFromProps(props, state) {
        return state.location !== props.location ? {
          error: props.error || null,
          location: props.location
        } : {
          error: props.error || state.error,
          location: state.location
        };
      }
      render() {
        return this.state.error ? /* @__PURE__ */ React__default.default.createElement(this.props.component, {
          error: this.state.error
        }) : this.props.children;
      }
    };
    function RemixRootDefaultErrorBoundary({
      error
    }) {
      return console.error(error), /* @__PURE__ */ React__default.default.createElement("html", {
        lang: "en"
      }, /* @__PURE__ */ React__default.default.createElement("head", null, /* @__PURE__ */ React__default.default.createElement("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ React__default.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,viewport-fit=cover"
      }), /* @__PURE__ */ React__default.default.createElement("title", null, "Application Error!")), /* @__PURE__ */ React__default.default.createElement("body", null, /* @__PURE__ */ React__default.default.createElement("main", {
        style: {
          fontFamily: "system-ui, sans-serif",
          padding: "2rem"
        }
      }, /* @__PURE__ */ React__default.default.createElement("h1", {
        style: {
          fontSize: "24px"
        }
      }, "Application Error"), /* @__PURE__ */ React__default.default.createElement("pre", {
        style: {
          padding: "2rem",
          background: "hsla(10, 50%, 50%, 0.1)",
          color: "red",
          overflow: "auto"
        }
      }, error.stack)), /* @__PURE__ */ React__default.default.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `
        }
      })));
    }
    var RemixCatchContext = /* @__PURE__ */ React__default.default.createContext(void 0);
    function useCatch() {
      return React4.useContext(RemixCatchContext);
    }
    function RemixCatchBoundary({
      catch: catchVal,
      component: Component,
      children
    }) {
      return catchVal ? /* @__PURE__ */ React__default.default.createElement(RemixCatchContext.Provider, {
        value: catchVal
      }, /* @__PURE__ */ React__default.default.createElement(Component, null)) : /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, children);
    }
    function RemixRootDefaultCatchBoundary() {
      let caught = useCatch();
      return /* @__PURE__ */ React__default.default.createElement("html", {
        lang: "en"
      }, /* @__PURE__ */ React__default.default.createElement("head", null, /* @__PURE__ */ React__default.default.createElement("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ React__default.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,viewport-fit=cover"
      }), /* @__PURE__ */ React__default.default.createElement("title", null, "Unhandled Thrown Response!")), /* @__PURE__ */ React__default.default.createElement("body", null, /* @__PURE__ */ React__default.default.createElement("h1", {
        style: {
          fontFamily: "system-ui, sans-serif",
          padding: "2rem"
        }
      }, caught.status, " ", caught.statusText), /* @__PURE__ */ React__default.default.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `
        }
      })));
    }
    exports.RemixCatchBoundary = RemixCatchBoundary;
    exports.RemixErrorBoundary = RemixErrorBoundary;
    exports.RemixRootDefaultCatchBoundary = RemixRootDefaultCatchBoundary;
    exports.RemixRootDefaultErrorBoundary = RemixRootDefaultErrorBoundary;
    exports.useCatch = useCatch;
  }
});

// @remix-run/react/dist/invariant.js
var require_invariant = __commonJS({
  "@remix-run/react/dist/invariant.js"(exports, module2) {
    "use strict";
    init_react();
    function invariant(value, message) {
      if (value === !1 || value === null || typeof value > "u")
        throw new Error(message);
    }
    module2.exports = invariant;
  }
});

// @remix-run/react/dist/routeModules.js
var require_routeModules = __commonJS({
  "@remix-run/react/dist/routeModules.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = /* @__PURE__ */ Object.create(null);
      return e && Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: !0,
            get: function() {
              return e[k];
            }
          });
        }
      }), n.default = e, Object.freeze(n);
    }
    async function loadRouteModule(route, routeModulesCache) {
      if (route.id in routeModulesCache)
        return routeModulesCache[route.id];
      try {
        let routeModule = await function(t) {
          return Promise.resolve().then(function() {
            return /* @__PURE__ */ _interopNamespace(require(t));
          });
        }(route.module);
        return routeModulesCache[route.id] = routeModule, routeModule;
      } catch {
        return window.location.reload(), new Promise(() => {
        });
      }
    }
    exports.loadRouteModule = loadRouteModule;
  }
});

// @remix-run/react/dist/links.js
var require_links = __commonJS({
  "@remix-run/react/dist/links.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var history = require("history"), routeModules = require_routeModules();
    function getLinksForMatches(matches, routeModules2, manifest) {
      let descriptors = matches.map((match) => {
        var _module$links;
        let module3 = routeModules2[match.route.id];
        return ((_module$links = module3.links) === null || _module$links === void 0 ? void 0 : _module$links.call(module3)) || [];
      }).flat(1), preloads = getCurrentPageModulePreloadHrefs(matches, manifest);
      return dedupe(descriptors, preloads);
    }
    async function prefetchStyleLinks(routeModule) {
      if (!routeModule.links)
        return;
      let descriptors = routeModule.links();
      if (!descriptors)
        return;
      let styleLinks = [];
      for (let descriptor of descriptors)
        !isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet" && styleLinks.push(__spreadProps(__spreadValues({}, descriptor), {
          rel: "preload",
          as: "style"
        }));
      let matchingLinks = styleLinks.filter((link) => !link.media || window.matchMedia(link.media).matches);
      await Promise.all(matchingLinks.map(prefetchStyleLink));
    }
    async function prefetchStyleLink(descriptor) {
      return new Promise((resolve) => {
        let link = document.createElement("link");
        Object.assign(link, descriptor);
        function removeLink() {
          document.head.contains(link) && document.head.removeChild(link);
        }
        link.onload = () => {
          removeLink(), resolve();
        }, link.onerror = () => {
          removeLink(), resolve();
        }, document.head.appendChild(link);
      });
    }
    function isPageLinkDescriptor(object) {
      return object != null && typeof object.page == "string";
    }
    function isHtmlLinkDescriptor(object) {
      return object == null ? !1 : object.href == null ? object.rel === "preload" && (typeof object.imageSrcSet == "string" || typeof object.imagesrcset == "string") && (typeof object.imageSizes == "string" || typeof object.imagesizes == "string") : typeof object.rel == "string" && typeof object.href == "string";
    }
    async function getStylesheetPrefetchLinks(matches, routeModules$1) {
      return (await Promise.all(matches.map(async (match) => {
        let mod = await routeModules.loadRouteModule(match.route, routeModules$1);
        return mod.links ? mod.links() : [];
      }))).flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map((link) => link.rel === "preload" ? __spreadProps(__spreadValues({}, link), {
        rel: "prefetch"
      }) : __spreadProps(__spreadValues({}, link), {
        rel: "prefetch",
        as: "style"
      }));
    }
    function getNewMatchesForLinks(page, nextMatches, currentMatches, location, mode) {
      let path = parsePathPatch(page), isNew = (match, index) => currentMatches[index] ? match.route.id !== currentMatches[index].route.id : !0, matchPathChanged = (match, index) => {
        var _currentMatches$index;
        return currentMatches[index].pathname !== match.pathname || ((_currentMatches$index = currentMatches[index].route.path) === null || _currentMatches$index === void 0 ? void 0 : _currentMatches$index.endsWith("*")) && currentMatches[index].params["*"] !== match.params["*"];
      };
      return mode === "data" && location.search !== path.search ? nextMatches.filter((match, index) => match.route.hasLoader ? isNew(match, index) || matchPathChanged(match, index) ? !0 : match.route.shouldReload ? match.route.shouldReload({
        params: match.params,
        prevUrl: new URL(location.pathname + location.search + location.hash, window.origin),
        url: new URL(page, window.origin)
      }) : !0 : !1) : nextMatches.filter((match, index) => (mode === "assets" || match.route.hasLoader) && (isNew(match, index) || matchPathChanged(match, index)));
    }
    function getDataLinkHrefs(page, matches, manifest) {
      let path = parsePathPatch(page);
      return dedupeHrefs(matches.filter((match) => manifest.routes[match.route.id].hasLoader).map((match) => {
        let {
          pathname,
          search
        } = path, searchParams = new URLSearchParams(search);
        return searchParams.set("_data", match.route.id), `${pathname}?${searchParams}`;
      }));
    }
    function getModuleLinkHrefs(matches, manifestPatch) {
      return dedupeHrefs(matches.map((match) => {
        let route = manifestPatch.routes[match.route.id], hrefs = [route.module];
        return route.imports && (hrefs = hrefs.concat(route.imports)), hrefs;
      }).flat(1));
    }
    function getCurrentPageModulePreloadHrefs(matches, manifest) {
      return dedupeHrefs(matches.map((match) => {
        let route = manifest.routes[match.route.id], hrefs = [route.module];
        return route.imports && (hrefs = hrefs.concat(route.imports)), hrefs;
      }).flat(1));
    }
    function dedupeHrefs(hrefs) {
      return [...new Set(hrefs)];
    }
    function dedupe(descriptors, preloads) {
      let set = /* @__PURE__ */ new Set(), preloadsSet = new Set(preloads);
      return descriptors.reduce((deduped, descriptor) => {
        if (!isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href))
          return deduped;
        let str = JSON.stringify(descriptor);
        return set.has(str) || (set.add(str), deduped.push(descriptor)), deduped;
      }, []);
    }
    function parsePathPatch(href) {
      let path = history.parsePath(href);
      return path.search === void 0 && (path.search = ""), path;
    }
    exports.dedupe = dedupe;
    exports.getDataLinkHrefs = getDataLinkHrefs;
    exports.getLinksForMatches = getLinksForMatches;
    exports.getModuleLinkHrefs = getModuleLinkHrefs;
    exports.getNewMatchesForLinks = getNewMatchesForLinks;
    exports.getStylesheetPrefetchLinks = getStylesheetPrefetchLinks;
    exports.isHtmlLinkDescriptor = isHtmlLinkDescriptor;
    exports.isPageLinkDescriptor = isPageLinkDescriptor;
    exports.prefetchStyleLinks = prefetchStyleLinks;
  }
});

// @remix-run/react/dist/markup.js
var require_markup = __commonJS({
  "@remix-run/react/dist/markup.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    function createHtml(html) {
      return {
        __html: html
      };
    }
    exports.createHtml = createHtml;
  }
});

// @remix-run/react/dist/data.js
var require_data = __commonJS({
  "@remix-run/react/dist/data.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var invariant = require_invariant();
    function isCatchResponse(response) {
      return response instanceof Response && response.headers.get("X-Remix-Catch") != null;
    }
    function isErrorResponse(response) {
      return response instanceof Response && response.headers.get("X-Remix-Error") != null;
    }
    function isRedirectResponse(response) {
      return response instanceof Response && response.headers.get("X-Remix-Redirect") != null;
    }
    async function fetchData(url, routeId, signal, submission) {
      url.searchParams.set("_data", routeId);
      let init = submission ? getActionInit(submission, signal) : {
        credentials: "same-origin",
        signal
      }, response = await fetch(url.href, init);
      if (isErrorResponse(response)) {
        let data = await response.json(), error = new Error(data.message);
        return error.stack = data.stack, error;
      }
      return response;
    }
    async function extractData(response) {
      let contentType = response.headers.get("Content-Type");
      return contentType && /\bapplication\/json\b/.test(contentType) ? response.json() : response.text();
    }
    function getActionInit(submission, signal) {
      let {
        encType,
        method,
        formData
      } = submission, headers, body = formData;
      if (encType === "application/x-www-form-urlencoded") {
        body = new URLSearchParams();
        for (let [key, value] of formData)
          invariant(typeof value == "string", 'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'), body.append(key, value);
        headers = {
          "Content-Type": encType
        };
      }
      return {
        method,
        body,
        signal,
        credentials: "same-origin",
        headers
      };
    }
    exports.extractData = extractData;
    exports.fetchData = fetchData;
    exports.isCatchResponse = isCatchResponse;
    exports.isErrorResponse = isErrorResponse;
    exports.isRedirectResponse = isRedirectResponse;
  }
});

// @remix-run/react/dist/routeMatching.js
var require_routeMatching = __commonJS({
  "@remix-run/react/dist/routeMatching.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var reactRouterDom = require("react-router-dom");
    function matchClientRoutes(routes2, location) {
      let matches = reactRouterDom.matchRoutes(routes2, location);
      return matches ? matches.map((match) => ({
        params: match.params,
        pathname: match.pathname,
        route: match.route
      })) : null;
    }
    exports.matchClientRoutes = matchClientRoutes;
  }
});

// @remix-run/react/dist/transition.js
var require_transition = __commonJS({
  "@remix-run/react/dist/transition.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var history = require("history"), routeMatching = require_routeMatching(), invariant = require_invariant(), CatchValue = class {
      constructor(status, statusText, data) {
        this.status = status, this.statusText = statusText, this.data = data;
      }
    };
    function isActionSubmission(submission) {
      return ["POST", "PUT", "PATCH", "DELETE"].includes(submission.method);
    }
    function isLoaderSubmission(submission) {
      return submission.method === "GET";
    }
    function isRedirectLocation(location) {
      return Boolean(location.state) && location.state.isRedirect;
    }
    function isLoaderRedirectLocation(location) {
      return isRedirectLocation(location) && location.state.type === "loader";
    }
    function isActionRedirectLocation(location) {
      return isRedirectLocation(location) && location.state.type === "action";
    }
    function isFetchActionRedirect(location) {
      return isRedirectLocation(location) && location.state.type === "fetchAction";
    }
    function isLoaderSubmissionRedirectLocation(location) {
      return isRedirectLocation(location) && location.state.type === "loaderSubmission";
    }
    var TransitionRedirect = class {
      constructor(location, setCookie) {
        this.setCookie = setCookie, this.location = typeof location == "string" ? location : location.pathname + location.search;
      }
    }, IDLE_TRANSITION = {
      state: "idle",
      submission: void 0,
      location: void 0,
      type: "idle"
    }, IDLE_FETCHER = {
      state: "idle",
      type: "init",
      data: void 0,
      submission: void 0
    };
    function createTransitionManager(init) {
      let {
        routes: routes2
      } = init, pendingNavigationController, fetchControllers = /* @__PURE__ */ new Map(), incrementingLoadId = 0, navigationLoadId = -1, fetchReloadIds = /* @__PURE__ */ new Map(), fetchRedirectIds = /* @__PURE__ */ new Set(), matches = routeMatching.matchClientRoutes(routes2, init.location);
      matches || (matches = [{
        params: {},
        pathname: "",
        route: routes2[0]
      }]);
      let state = {
        location: init.location,
        loaderData: init.loaderData || {},
        actionData: init.actionData,
        catch: init.catch,
        error: init.error,
        catchBoundaryId: init.catchBoundaryId || null,
        errorBoundaryId: init.errorBoundaryId || null,
        matches,
        nextMatches: void 0,
        transition: IDLE_TRANSITION,
        fetchers: /* @__PURE__ */ new Map()
      };
      function update(updates) {
        updates.transition && updates.transition === IDLE_TRANSITION && (pendingNavigationController = void 0), state = Object.assign({}, state, updates), init.onChange(state);
      }
      function getState() {
        return state;
      }
      function getFetcher(key) {
        return state.fetchers.get(key) || IDLE_FETCHER;
      }
      function setFetcher(key, fetcher) {
        state.fetchers.set(key, fetcher);
      }
      function deleteFetcher(key) {
        fetchControllers.has(key) && abortFetcher(key), fetchReloadIds.delete(key), fetchRedirectIds.delete(key), state.fetchers.delete(key);
      }
      async function send(event) {
        switch (event.type) {
          case "navigation": {
            let {
              action,
              location,
              submission
            } = event, matches2 = routeMatching.matchClientRoutes(routes2, location);
            matches2 ? !submission && isHashChangeOnly(location) ? await handleHashChange(location, matches2) : action === history.Action.Pop ? await handleLoad(location, matches2) : submission && isActionSubmission(submission) ? await handleActionSubmissionNavigation(location, submission, matches2) : submission && isLoaderSubmission(submission) ? await handleLoaderSubmissionNavigation(location, submission, matches2) : isActionRedirectLocation(location) ? await handleActionRedirect(location, matches2) : isLoaderSubmissionRedirectLocation(location) ? await handleLoaderSubmissionRedirect(location, matches2) : isLoaderRedirectLocation(location) ? await handleLoaderRedirect(location, matches2) : isFetchActionRedirect(location) ? await handleFetchActionRedirect(location, matches2) : await handleLoad(location, matches2) : (matches2 = [{
              params: {},
              pathname: "",
              route: routes2[0]
            }], await handleNotFoundNavigation(location, matches2)), navigationLoadId = -1;
            break;
          }
          case "fetcher": {
            let {
              key,
              submission,
              href
            } = event, matches2 = routeMatching.matchClientRoutes(routes2, href);
            invariant(matches2, "No matches found"), fetchControllers.has(key) && abortFetcher(key);
            let match = getFetcherRequestMatch(new URL(href, window.location.href), matches2);
            submission && isActionSubmission(submission) ? await handleActionFetchSubmission(key, submission, match) : submission && isLoaderSubmission(submission) ? await handleLoaderFetchSubmission(href, key, submission, match) : await handleLoaderFetch(href, key, match);
            break;
          }
          default:
            throw new Error(`Unknown data event type: ${event.type}`);
        }
      }
      function dispose() {
        abortNormalNavigation();
        for (let [, controller] of fetchControllers)
          controller.abort();
      }
      function isIndexRequestUrl(url) {
        for (let param of url.searchParams.getAll("index"))
          if (param === "")
            return !0;
        return !1;
      }
      function getFetcherRequestMatch(url, matches2) {
        let match = matches2.slice(-1)[0];
        return !isIndexRequestUrl(url) && match.route.index ? matches2.slice(-2)[0] : match;
      }
      async function handleActionFetchSubmission(key, submission, match) {
        let currentFetcher = state.fetchers.get(key), fetcher = {
          state: "submitting",
          type: "actionSubmission",
          submission,
          data: (currentFetcher == null ? void 0 : currentFetcher.data) || void 0
        };
        setFetcher(key, fetcher), update({
          fetchers: new Map(state.fetchers)
        });
        let controller = new AbortController();
        fetchControllers.set(key, controller);
        let result = await callAction(submission, match, controller.signal);
        if (controller.signal.aborted)
          return;
        if (isRedirectResult(result)) {
          let locationState = {
            isRedirect: !0,
            type: "fetchAction",
            setCookie: result.value.setCookie
          };
          fetchRedirectIds.add(key), init.onRedirect(result.value.location, locationState), setFetcher(key, {
            state: "loading",
            type: "actionRedirect",
            submission,
            data: void 0
          }), update({
            fetchers: new Map(state.fetchers)
          });
          return;
        }
        if (maybeBailOnError(match, key, result) || await maybeBailOnCatch(match, key, result))
          return;
        let loadFetcher = {
          state: "loading",
          type: "actionReload",
          data: result.value,
          submission
        };
        setFetcher(key, loadFetcher), update({
          fetchers: new Map(state.fetchers)
        });
        let maybeActionErrorResult = isErrorResult(result) ? result : void 0, maybeActionCatchResult = isCatchResult(result) ? result : void 0, loadId = ++incrementingLoadId;
        fetchReloadIds.set(key, loadId);
        let matchesToLoad = state.nextMatches || state.matches, results = await callLoaders(state, state.transition.location || state.location, matchesToLoad, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, match.route.id, loadFetcher);
        if (controller.signal.aborted)
          return;
        fetchReloadIds.delete(key), fetchControllers.delete(key);
        let redirect = findRedirect(results);
        if (redirect) {
          let locationState = {
            isRedirect: !0,
            type: "loader",
            setCookie: redirect.setCookie
          };
          init.onRedirect(redirect.location, locationState);
          return;
        }
        let [error, errorBoundaryId] = findErrorAndBoundaryId(results, state.matches, maybeActionErrorResult), [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, state.matches, maybeActionCatchResult) || [], doneFetcher = {
          state: "idle",
          type: "done",
          data: result.value,
          submission: void 0
        };
        setFetcher(key, doneFetcher);
        let abortedKeys = abortStaleFetchLoads(loadId);
        if (abortedKeys && markFetchersDone(abortedKeys), yeetStaleNavigationLoad(loadId)) {
          let {
            transition
          } = state;
          invariant(transition.state === "loading", "Expected loading transition"), update({
            location: transition.location,
            matches: state.nextMatches,
            error,
            errorBoundaryId,
            catch: catchVal,
            catchBoundaryId,
            loaderData: makeLoaderData(state, results, matchesToLoad),
            actionData: transition.type === "actionReload" ? state.actionData : void 0,
            transition: IDLE_TRANSITION,
            fetchers: new Map(state.fetchers)
          });
        } else
          update({
            fetchers: new Map(state.fetchers),
            error,
            errorBoundaryId,
            loaderData: makeLoaderData(state, results, matchesToLoad)
          });
      }
      function yeetStaleNavigationLoad(landedId) {
        return state.transition.state === "loading" && navigationLoadId < landedId ? (abortNormalNavigation(), !0) : !1;
      }
      function markFetchersDone(keys) {
        for (let key of keys) {
          let fetcher = getFetcher(key), doneFetcher = {
            state: "idle",
            type: "done",
            data: fetcher.data,
            submission: void 0
          };
          setFetcher(key, doneFetcher);
        }
      }
      function abortStaleFetchLoads(landedId) {
        let yeetedKeys = [];
        for (let [key, id] of fetchReloadIds)
          if (id < landedId) {
            let fetcher = state.fetchers.get(key);
            invariant(fetcher, `Expected fetcher: ${key}`), fetcher.state === "loading" && (abortFetcher(key), fetchReloadIds.delete(key), yeetedKeys.push(key));
          }
        return yeetedKeys.length ? yeetedKeys : !1;
      }
      async function handleLoaderFetchSubmission(href, key, submission, match) {
        let currentFetcher = state.fetchers.get(key), fetcher = {
          state: "submitting",
          type: "loaderSubmission",
          submission,
          data: (currentFetcher == null ? void 0 : currentFetcher.data) || void 0
        };
        setFetcher(key, fetcher), update({
          fetchers: new Map(state.fetchers)
        });
        let controller = new AbortController();
        fetchControllers.set(key, controller);
        let result = await callLoader(match, createUrl(href), controller.signal);
        if (fetchControllers.delete(key), controller.signal.aborted)
          return;
        if (isRedirectResult(result)) {
          let locationState = {
            isRedirect: !0,
            type: "loader",
            setCookie: result.value.setCookie
          };
          init.onRedirect(result.value.location, locationState);
          return;
        }
        if (maybeBailOnError(match, key, result) || await maybeBailOnCatch(match, key, result))
          return;
        let doneFetcher = {
          state: "idle",
          type: "done",
          data: result.value,
          submission: void 0
        };
        setFetcher(key, doneFetcher), update({
          fetchers: new Map(state.fetchers)
        });
      }
      async function handleLoaderFetch(href, key, match) {
        if (typeof AbortController > "u")
          throw new Error("handleLoaderFetch was called during the server render, but it shouldn't be. You are likely calling useFetcher.load() in the body of your component. Try moving it to a useEffect or a callback.");
        let currentFetcher = state.fetchers.get(key), fetcher = {
          state: "loading",
          type: "normalLoad",
          submission: void 0,
          data: (currentFetcher == null ? void 0 : currentFetcher.data) || void 0
        };
        setFetcher(key, fetcher), update({
          fetchers: new Map(state.fetchers)
        });
        let controller = new AbortController();
        fetchControllers.set(key, controller);
        let result = await callLoader(match, createUrl(href), controller.signal);
        if (controller.signal.aborted)
          return;
        if (fetchControllers.delete(key), isRedirectResult(result)) {
          let locationState = {
            isRedirect: !0,
            type: "loader",
            setCookie: result.value.setCookie
          };
          init.onRedirect(result.value.location, locationState);
          return;
        }
        if (maybeBailOnError(match, key, result) || await maybeBailOnCatch(match, key, result))
          return;
        let doneFetcher = {
          state: "idle",
          type: "done",
          data: result.value,
          submission: void 0
        };
        setFetcher(key, doneFetcher), update({
          fetchers: new Map(state.fetchers)
        });
      }
      async function maybeBailOnCatch(match, key, result) {
        if (isCatchResult(result)) {
          let catchBoundaryId = findNearestCatchBoundary(match, state.matches);
          return state.fetchers.delete(key), update({
            transition: IDLE_TRANSITION,
            fetchers: new Map(state.fetchers),
            catch: {
              data: result.value.data,
              status: result.value.status,
              statusText: result.value.statusText
            },
            catchBoundaryId
          }), !0;
        }
        return !1;
      }
      function maybeBailOnError(match, key, result) {
        if (isErrorResult(result)) {
          let errorBoundaryId = findNearestBoundary(match, state.matches);
          return state.fetchers.delete(key), update({
            fetchers: new Map(state.fetchers),
            error: result.value,
            errorBoundaryId
          }), !0;
        }
        return !1;
      }
      async function handleNotFoundNavigation(location, matches2) {
        abortNormalNavigation(), update({
          transition: {
            state: "loading",
            type: "normalLoad",
            submission: void 0,
            location
          },
          nextMatches: matches2
        }), await Promise.resolve();
        let catchBoundaryId = findNearestCatchBoundary(matches2[0], matches2);
        update({
          location,
          matches: matches2,
          catch: {
            data: null,
            status: 404,
            statusText: "Not Found"
          },
          catchBoundaryId,
          transition: IDLE_TRANSITION
        });
      }
      async function handleActionSubmissionNavigation(location, submission, matches2) {
        abortNormalNavigation(), update({
          transition: {
            state: "submitting",
            type: "actionSubmission",
            submission,
            location
          },
          nextMatches: matches2
        });
        let controller = new AbortController();
        pendingNavigationController = controller;
        let actionMatches = matches2;
        !isIndexRequestUrl(createUrl(submission.action)) && actionMatches[matches2.length - 1].route.index && (actionMatches = actionMatches.slice(0, -1));
        let leafMatch = actionMatches.slice(-1)[0], result = await callAction(submission, leafMatch, controller.signal);
        if (controller.signal.aborted)
          return;
        if (isRedirectResult(result)) {
          let locationState = {
            isRedirect: !0,
            type: "action",
            setCookie: result.value.setCookie
          };
          init.onRedirect(result.value.location, locationState);
          return;
        }
        let catchVal, catchBoundaryId;
        isCatchResult(result) && ([catchVal, catchBoundaryId] = await findCatchAndBoundaryId([result], actionMatches, result) || []), update({
          transition: {
            state: "loading",
            type: "actionReload",
            submission,
            location
          },
          actionData: {
            [leafMatch.route.id]: result.value
          }
        }), await loadPageData(location, matches2, submission, leafMatch.route.id, result, catchVal, catchBoundaryId);
      }
      async function handleLoaderSubmissionNavigation(location, submission, matches2) {
        abortNormalNavigation(), update({
          transition: {
            state: "submitting",
            type: "loaderSubmission",
            submission,
            location
          },
          nextMatches: matches2
        }), await loadPageData(location, matches2, submission);
      }
      async function handleHashChange(location, matches2) {
        abortNormalNavigation(), update({
          transition: {
            state: "loading",
            type: "normalLoad",
            submission: void 0,
            location
          },
          nextMatches: matches2
        }), await Promise.resolve(), update({
          location,
          matches: matches2,
          transition: IDLE_TRANSITION
        });
      }
      async function handleLoad(location, matches2) {
        abortNormalNavigation(), update({
          transition: {
            state: "loading",
            type: "normalLoad",
            submission: void 0,
            location
          },
          nextMatches: matches2
        }), await loadPageData(location, matches2);
      }
      async function handleLoaderRedirect(location, matches2) {
        abortNormalNavigation(), update({
          transition: {
            state: "loading",
            type: "normalRedirect",
            submission: void 0,
            location
          },
          nextMatches: matches2
        }), await loadPageData(location, matches2);
      }
      async function handleLoaderSubmissionRedirect(location, matches2) {
        abortNormalNavigation(), invariant(state.transition.type === "loaderSubmission", `Unexpected transition: ${JSON.stringify(state.transition)}`);
        let {
          submission
        } = state.transition;
        update({
          transition: {
            state: "loading",
            type: "loaderSubmissionRedirect",
            submission,
            location
          },
          nextMatches: matches2
        }), await loadPageData(location, matches2, submission);
      }
      async function handleFetchActionRedirect(location, matches2) {
        abortNormalNavigation(), update({
          transition: {
            state: "loading",
            type: "fetchActionRedirect",
            submission: void 0,
            location
          },
          nextMatches: matches2
        }), await loadPageData(location, matches2);
      }
      async function handleActionRedirect(location, matches2) {
        abortNormalNavigation(), invariant(state.transition.type === "actionSubmission" || state.transition.type === "actionReload" || state.transition.type === "actionRedirect", `Unexpected transition: ${JSON.stringify(state.transition)}`);
        let {
          submission
        } = state.transition;
        update({
          transition: {
            state: "loading",
            type: "actionRedirect",
            submission,
            location
          },
          nextMatches: matches2
        }), await loadPageData(location, matches2, submission);
      }
      function isHashChangeOnly(location) {
        return createHref(state.location) === createHref(location) && state.location.hash !== location.hash;
      }
      async function loadPageData(location, matches2, submission, submissionRouteId, actionResult, catchVal, catchBoundaryId) {
        let maybeActionErrorResult = actionResult && isErrorResult(actionResult) ? actionResult : void 0, maybeActionCatchResult = actionResult && isCatchResult(actionResult) ? actionResult : void 0, controller = new AbortController();
        pendingNavigationController = controller, navigationLoadId = ++incrementingLoadId;
        let results = await callLoaders(state, location, matches2, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, submissionRouteId, void 0, catchBoundaryId);
        if (controller.signal.aborted)
          return;
        let redirect = findRedirect(results);
        if (redirect) {
          if (state.transition.type === "actionReload" || isActionRedirectLocation(location)) {
            let locationState = {
              isRedirect: !0,
              type: "action",
              setCookie: redirect.setCookie
            };
            init.onRedirect(redirect.location, locationState);
          } else if (state.transition.type === "loaderSubmission") {
            let locationState = {
              isRedirect: !0,
              type: "loaderSubmission",
              setCookie: redirect.setCookie
            };
            init.onRedirect(redirect.location, locationState);
          } else {
            var _location$state;
            let locationState = {
              isRedirect: !0,
              type: "loader",
              setCookie: redirect.setCookie || ((_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.setCookie) === !0
            };
            init.onRedirect(redirect.location, locationState);
          }
          return;
        }
        let [error, errorBoundaryId] = findErrorAndBoundaryId(results, matches2, maybeActionErrorResult);
        [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, matches2, maybeActionErrorResult) || [catchVal, catchBoundaryId], markFetchRedirectsDone();
        let abortedIds = abortStaleFetchLoads(navigationLoadId);
        abortedIds && markFetchersDone(abortedIds), update({
          location,
          matches: matches2,
          error,
          errorBoundaryId,
          catch: catchVal,
          catchBoundaryId,
          loaderData: makeLoaderData(state, results, matches2),
          actionData: state.transition.type === "actionReload" ? state.actionData : void 0,
          transition: IDLE_TRANSITION,
          fetchers: abortedIds ? new Map(state.fetchers) : state.fetchers
        });
      }
      function abortNormalNavigation() {
        pendingNavigationController && pendingNavigationController.abort();
      }
      function abortFetcher(key) {
        let controller = fetchControllers.get(key);
        invariant(controller, `Expected fetch controller: ${key}`), controller.abort(), fetchControllers.delete(key);
      }
      function markFetchRedirectsDone() {
        let doneKeys = [];
        for (let key of fetchRedirectIds) {
          let fetcher = state.fetchers.get(key);
          invariant(fetcher, `Expected fetcher: ${key}`), fetcher.type === "actionRedirect" && (fetchRedirectIds.delete(key), doneKeys.push(key));
        }
        markFetchersDone(doneKeys);
      }
      return {
        send,
        getState,
        getFetcher,
        deleteFetcher,
        dispose,
        get _internalFetchControllers() {
          return fetchControllers;
        }
      };
    }
    async function callLoaders(state, location, matches, signal, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId) {
      let url = createUrl(createHref(location)), matchesToLoad = filterMatchesToLoad(state, location, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId);
      return Promise.all(matchesToLoad.map((match) => callLoader(match, url, signal)));
    }
    async function callLoader(match, url, signal) {
      invariant(match.route.loader, `Expected loader for ${match.route.id}`);
      try {
        let {
          params
        } = match, value = await match.route.loader({
          params,
          url,
          signal
        });
        return {
          match,
          value
        };
      } catch (error) {
        return {
          match,
          value: error
        };
      }
    }
    async function callAction(submission, match, signal) {
      try {
        let value = await match.route.action({
          url: createUrl(submission.action),
          params: match.params,
          submission,
          signal
        });
        return {
          match,
          value
        };
      } catch (error) {
        return {
          match,
          value: error
        };
      }
    }
    function filterMatchesToLoad(state, location, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId) {
      var _location$state2;
      if (catchBoundaryId || submissionRouteId && (actionCatchResult || actionErrorResult)) {
        let foundProblematicRoute = !1;
        matches = matches.filter((match) => foundProblematicRoute ? !1 : match.route.id === submissionRouteId || match.route.id === catchBoundaryId ? (foundProblematicRoute = !0, !1) : !0);
      }
      let isNew = (match, index) => state.matches[index] ? match.route.id !== state.matches[index].route.id : !0, matchPathChanged = (match, index) => {
        var _state$matches$index$;
        return state.matches[index].pathname !== match.pathname || ((_state$matches$index$ = state.matches[index].route.path) === null || _state$matches$index$ === void 0 ? void 0 : _state$matches$index$.endsWith("*")) && state.matches[index].params["*"] !== match.params["*"];
      }, url = createUrl(createHref(location)), filterByRouteProps = (match, index) => {
        if (!match.route.loader)
          return !1;
        if (isNew(match, index) || matchPathChanged(match, index))
          return !0;
        if (match.route.shouldReload) {
          let prevUrl = createUrl(createHref(state.location));
          return match.route.shouldReload({
            prevUrl,
            url,
            submission,
            params: match.params
          });
        }
        return !0;
      };
      return state.matches.length === 1 ? matches.filter((match) => !!match.route.loader) : (fetcher == null ? void 0 : fetcher.type) === "actionReload" || state.transition.type === "actionReload" || state.transition.type === "actionRedirect" || state.transition.type === "fetchActionRedirect" || createHref(url) === createHref(state.location) || url.searchParams.toString() !== state.location.search.substring(1) || (_location$state2 = location.state) !== null && _location$state2 !== void 0 && _location$state2.setCookie ? matches.filter(filterByRouteProps) : matches.filter((match, index, arr) => {
        var _location$state3;
        return (actionErrorResult || actionCatchResult) && arr.length - 1 === index ? !1 : match.route.loader && (isNew(match, index) || matchPathChanged(match, index) || ((_location$state3 = location.state) === null || _location$state3 === void 0 ? void 0 : _location$state3.setCookie));
      });
    }
    function isRedirectResult(result) {
      return result.value instanceof TransitionRedirect;
    }
    function createHref(location) {
      return location.pathname + location.search;
    }
    function findRedirect(results) {
      for (let result of results)
        if (isRedirectResult(result))
          return result.value;
      return null;
    }
    async function findCatchAndBoundaryId(results, matches, actionCatchResult) {
      let loaderCatchResult;
      for (let result of results)
        if (isCatchResult(result)) {
          loaderCatchResult = result;
          break;
        }
      let extractCatchData = async (res) => ({
        status: res.status,
        statusText: res.statusText,
        data: res.data
      });
      if (actionCatchResult && loaderCatchResult) {
        let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
        return [await extractCatchData(actionCatchResult.value), boundaryId];
      }
      if (loaderCatchResult) {
        let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
        return [await extractCatchData(loaderCatchResult.value), boundaryId];
      }
      return null;
    }
    function findErrorAndBoundaryId(results, matches, actionErrorResult) {
      let loaderErrorResult;
      for (let result of results)
        if (isErrorResult(result)) {
          loaderErrorResult = result;
          break;
        }
      if (actionErrorResult && loaderErrorResult) {
        let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
        return [actionErrorResult.value, boundaryId];
      }
      if (actionErrorResult) {
        let boundaryId = findNearestBoundary(actionErrorResult.match, matches);
        return [actionErrorResult.value, boundaryId];
      }
      if (loaderErrorResult) {
        let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
        return [loaderErrorResult.value, boundaryId];
      }
      return [void 0, void 0];
    }
    function findNearestCatchBoundary(matchWithError, matches) {
      let nearestBoundaryId = null;
      for (let match of matches)
        if (match.route.CatchBoundary && (nearestBoundaryId = match.route.id), match === matchWithError)
          break;
      return nearestBoundaryId;
    }
    function findNearestBoundary(matchWithError, matches) {
      let nearestBoundaryId = null;
      for (let match of matches)
        if (match.route.ErrorBoundary && (nearestBoundaryId = match.route.id), match === matchWithError)
          break;
      return nearestBoundaryId;
    }
    function makeLoaderData(state, results, matches) {
      let newData = {};
      for (let {
        match,
        value
      } of results)
        newData[match.route.id] = value;
      let loaderData = {};
      for (let {
        route
      } of matches) {
        let value = newData[route.id] !== void 0 ? newData[route.id] : state.loaderData[route.id];
        value !== void 0 && (loaderData[route.id] = value);
      }
      return loaderData;
    }
    function isCatchResult(result) {
      return result.value instanceof CatchValue;
    }
    function isErrorResult(result) {
      return result.value instanceof Error;
    }
    function createUrl(href) {
      return new URL(href, window.location.origin);
    }
    exports.CatchValue = CatchValue;
    exports.IDLE_FETCHER = IDLE_FETCHER;
    exports.IDLE_TRANSITION = IDLE_TRANSITION;
    exports.TransitionRedirect = TransitionRedirect;
    exports.createTransitionManager = createTransitionManager;
  }
});

// @remix-run/react/dist/routes.js
var require_routes = __commonJS({
  "@remix-run/react/dist/routes.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var React4 = require("react"), routeModules = require_routeModules(), data = require_data(), transition = require_transition(), links = require_links(), invariant = require_invariant();
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = /* @__PURE__ */ Object.create(null);
      return e && Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: !0,
            get: function() {
              return e[k];
            }
          });
        }
      }), n.default = e, Object.freeze(n);
    }
    var React__namespace = /* @__PURE__ */ _interopNamespace(React4);
    function createClientRoute(entryRoute, routeModulesCache, Component) {
      return {
        caseSensitive: !!entryRoute.caseSensitive,
        element: /* @__PURE__ */ React__namespace.createElement(Component, {
          id: entryRoute.id
        }),
        id: entryRoute.id,
        path: entryRoute.path,
        index: entryRoute.index,
        module: entryRoute.module,
        loader: createLoader(entryRoute, routeModulesCache),
        action: createAction(entryRoute, routeModulesCache),
        shouldReload: createShouldReload(entryRoute, routeModulesCache),
        ErrorBoundary: entryRoute.hasErrorBoundary,
        CatchBoundary: entryRoute.hasCatchBoundary,
        hasLoader: entryRoute.hasLoader
      };
    }
    function createClientRoutes(routeManifest, routeModulesCache, Component, parentId) {
      return Object.keys(routeManifest).filter((key) => routeManifest[key].parentId === parentId).map((key) => {
        let route = createClientRoute(routeManifest[key], routeModulesCache, Component), children = createClientRoutes(routeManifest, routeModulesCache, Component, route.id);
        return children.length > 0 && (route.children = children), route;
      });
    }
    function createShouldReload(route, routeModules2) {
      return (arg) => {
        let module3 = routeModules2[route.id];
        return invariant(module3, `Expected route module to be loaded for ${route.id}`), module3.unstable_shouldReload ? module3.unstable_shouldReload(arg) : !0;
      };
    }
    async function loadRouteModuleWithBlockingLinks(route, routeModules$1) {
      let routeModule = await routeModules.loadRouteModule(route, routeModules$1);
      return await links.prefetchStyleLinks(routeModule), routeModule;
    }
    function createLoader(route, routeModules2) {
      return async ({
        url,
        signal,
        submission
      }) => {
        if (route.hasLoader) {
          let [result] = await Promise.all([data.fetchData(url, route.id, signal, submission), loadRouteModuleWithBlockingLinks(route, routeModules2)]);
          if (result instanceof Error)
            throw result;
          let redirect = await checkRedirect(result);
          if (redirect)
            return redirect;
          if (data.isCatchResponse(result))
            throw new transition.CatchValue(result.status, result.statusText, await data.extractData(result));
          return data.extractData(result);
        } else
          await loadRouteModuleWithBlockingLinks(route, routeModules2);
      };
    }
    function createAction(route, routeModules2) {
      return async ({
        url,
        signal,
        submission
      }) => {
        route.hasAction || console.error(`Route "${route.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`);
        let result = await data.fetchData(url, route.id, signal, submission);
        if (result instanceof Error)
          throw result;
        let redirect = await checkRedirect(result);
        if (redirect)
          return redirect;
        if (await loadRouteModuleWithBlockingLinks(route, routeModules2), data.isCatchResponse(result))
          throw new transition.CatchValue(result.status, result.statusText, await data.extractData(result));
        return data.extractData(result);
      };
    }
    async function checkRedirect(response) {
      if (data.isRedirectResponse(response)) {
        let url = new URL(response.headers.get("X-Remix-Redirect"), window.location.origin);
        if (url.origin !== window.location.origin)
          await new Promise(() => {
            window.location.replace(url.href);
          });
        else
          return new transition.TransitionRedirect(url.pathname + url.search + url.hash, response.headers.get("X-Remix-Revalidate") !== null);
      }
      return null;
    }
    exports.createClientRoute = createClientRoute;
    exports.createClientRoutes = createClientRoutes;
  }
});

// @remix-run/react/dist/components.js
var require_components = __commonJS({
  "@remix-run/react/dist/components.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var _rollupPluginBabelHelpers = require_rollupPluginBabelHelpers(), React4 = require("react"), reactRouterDom = require("react-router-dom"), errorBoundaries = require_errorBoundaries(), invariant = require_invariant(), links = require_links(), markup = require_markup(), routes2 = require_routes(), routeMatching = require_routeMatching(), transition = require_transition();
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = /* @__PURE__ */ Object.create(null);
      return e && Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: !0,
            get: function() {
              return e[k];
            }
          });
        }
      }), n.default = e, Object.freeze(n);
    }
    var React__namespace = /* @__PURE__ */ _interopNamespace(React4), RemixEntryContext = /* @__PURE__ */ React__namespace.createContext(void 0);
    function useRemixEntryContext() {
      let context = React__namespace.useContext(RemixEntryContext);
      return invariant(context, "You must render this element inside a <Remix> element"), context;
    }
    function RemixEntry({
      context: entryContext,
      action,
      location: historyLocation,
      navigator: _navigator,
      static: staticProp = !1
    }) {
      let {
        manifest,
        routeData: documentLoaderData,
        actionData: documentActionData,
        routeModules,
        serverHandoffString,
        appState: entryComponentDidCatchEmulator
      } = entryContext, clientRoutes = React__namespace.useMemo(() => routes2.createClientRoutes(manifest.routes, routeModules, RemixRoute), [manifest, routeModules]), [clientState, setClientState] = React__namespace.useState(entryComponentDidCatchEmulator), [transitionManager] = React__namespace.useState(() => transition.createTransitionManager({
        routes: clientRoutes,
        actionData: documentActionData,
        loaderData: documentLoaderData,
        location: historyLocation,
        catch: entryComponentDidCatchEmulator.catch,
        catchBoundaryId: entryComponentDidCatchEmulator.catchBoundaryRouteId,
        onRedirect: _navigator.replace,
        onChange: (state) => {
          setClientState({
            catch: state.catch,
            error: state.error,
            catchBoundaryRouteId: state.catchBoundaryId,
            loaderBoundaryRouteId: state.errorBoundaryId,
            renderBoundaryRouteId: null,
            trackBoundaries: !1,
            trackCatchBoundaries: !1
          });
        }
      })), navigator = React__namespace.useMemo(() => {
        let push = (to, state) => transitionManager.getState().transition.state !== "idle" ? _navigator.replace(to, state) : _navigator.push(to, state);
        return __spreadProps(__spreadValues({}, _navigator), {
          push
        });
      }, [_navigator, transitionManager]), {
        location,
        matches,
        loaderData,
        actionData
      } = transitionManager.getState();
      React__namespace.useEffect(() => {
        let {
          location: location2
        } = transitionManager.getState();
        historyLocation !== location2 && transitionManager.send({
          type: "navigation",
          location: historyLocation,
          submission: consumeNextNavigationSubmission(),
          action
        });
      }, [transitionManager, historyLocation, action]);
      let ssrErrorBeforeRoutesRendered = clientState.error && clientState.renderBoundaryRouteId === null && clientState.loaderBoundaryRouteId === null ? deserializeError(clientState.error) : void 0, ssrCatchBeforeRoutesRendered = clientState.catch && clientState.catchBoundaryRouteId === null ? clientState.catch : void 0;
      return /* @__PURE__ */ React__namespace.createElement(RemixEntryContext.Provider, {
        value: {
          matches,
          manifest,
          appState: clientState,
          routeModules,
          serverHandoffString,
          clientRoutes,
          routeData: loaderData,
          actionData,
          transitionManager
        }
      }, /* @__PURE__ */ React__namespace.createElement(errorBoundaries.RemixErrorBoundary, {
        location,
        component: errorBoundaries.RemixRootDefaultErrorBoundary,
        error: ssrErrorBeforeRoutesRendered
      }, /* @__PURE__ */ React__namespace.createElement(errorBoundaries.RemixCatchBoundary, {
        location,
        component: errorBoundaries.RemixRootDefaultCatchBoundary,
        catch: ssrCatchBeforeRoutesRendered
      }, /* @__PURE__ */ React__namespace.createElement(reactRouterDom.Router, {
        navigationType: action,
        location,
        navigator,
        static: staticProp
      }, /* @__PURE__ */ React__namespace.createElement(Routes, null)))));
    }
    function deserializeError(data) {
      let error = new Error(data.message);
      return error.stack = data.stack, error;
    }
    function Routes() {
      let {
        clientRoutes
      } = useRemixEntryContext();
      return reactRouterDom.useRoutes(clientRoutes) || clientRoutes[0].element;
    }
    var RemixRouteContext = /* @__PURE__ */ React__namespace.createContext(void 0);
    function useRemixRouteContext() {
      let context = React__namespace.useContext(RemixRouteContext);
      return invariant(context, "You must render this element in a remix route element"), context;
    }
    function DefaultRouteComponent({
      id
    }) {
      throw new Error(`Route "${id}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`);
    }
    function RemixRoute({
      id
    }) {
      let location = reactRouterDom.useLocation(), {
        routeData,
        routeModules,
        appState
      } = useRemixEntryContext();
      invariant(routeData, `Cannot initialize 'routeData'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`), invariant(routeModules, `Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`);
      let data = routeData[id], {
        default: Component,
        CatchBoundary,
        ErrorBoundary
      } = routeModules[id], element = Component ? /* @__PURE__ */ React__namespace.createElement(Component, null) : /* @__PURE__ */ React__namespace.createElement(DefaultRouteComponent, {
        id
      }), context = {
        data,
        id
      };
      if (CatchBoundary) {
        let maybeServerCaught = appState.catch && appState.catchBoundaryRouteId === id ? appState.catch : void 0;
        appState.trackCatchBoundaries && (appState.catchBoundaryRouteId = id), context = maybeServerCaught ? {
          id,
          get data() {
            console.error("You cannot `useLoaderData` in a catch boundary.");
          }
        } : {
          id,
          data
        }, element = /* @__PURE__ */ React__namespace.createElement(errorBoundaries.RemixCatchBoundary, {
          location,
          component: CatchBoundary,
          catch: maybeServerCaught
        }, element);
      }
      if (ErrorBoundary) {
        let maybeServerRenderError = appState.error && (appState.renderBoundaryRouteId === id || appState.loaderBoundaryRouteId === id) ? deserializeError(appState.error) : void 0;
        appState.trackBoundaries && (appState.renderBoundaryRouteId = id), context = maybeServerRenderError ? {
          id,
          get data() {
            console.error("You cannot `useLoaderData` in an error boundary.");
          }
        } : {
          id,
          data
        }, element = /* @__PURE__ */ React__namespace.createElement(errorBoundaries.RemixErrorBoundary, {
          location,
          component: ErrorBoundary,
          error: maybeServerRenderError
        }, element);
      }
      return /* @__PURE__ */ React__namespace.createElement(RemixRouteContext.Provider, {
        value: context
      }, element);
    }
    function usePrefetchBehavior(prefetch, theirElementProps) {
      let [maybePrefetch, setMaybePrefetch] = React__namespace.useState(!1), [shouldPrefetch, setShouldPrefetch] = React__namespace.useState(!1), {
        onFocus,
        onBlur,
        onMouseEnter,
        onMouseLeave,
        onTouchStart
      } = theirElementProps;
      React__namespace.useEffect(() => {
        prefetch === "render" && setShouldPrefetch(!0);
      }, [prefetch]);
      let setIntent = () => {
        prefetch === "intent" && setMaybePrefetch(!0);
      }, cancelIntent = () => {
        prefetch === "intent" && (setMaybePrefetch(!1), setShouldPrefetch(!1));
      };
      return React__namespace.useEffect(() => {
        if (maybePrefetch) {
          let id = setTimeout(() => {
            setShouldPrefetch(!0);
          }, 100);
          return () => {
            clearTimeout(id);
          };
        }
      }, [maybePrefetch]), [shouldPrefetch, {
        onFocus: composeEventHandlers(onFocus, setIntent),
        onBlur: composeEventHandlers(onBlur, cancelIntent),
        onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
        onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
        onTouchStart: composeEventHandlers(onTouchStart, setIntent)
      }];
    }
    var NavLink = /* @__PURE__ */ React__namespace.forwardRef((_a, forwardedRef) => {
      var _b = _a, {
        to,
        prefetch = "none"
      } = _b, props = __objRest(_b, [
        "to",
        "prefetch"
      ]);
      let href = reactRouterDom.useHref(to), [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(reactRouterDom.NavLink, _rollupPluginBabelHelpers.extends({
        ref: forwardedRef,
        to
      }, props, prefetchHandlers)), shouldPrefetch ? /* @__PURE__ */ React__namespace.createElement(PrefetchPageLinks, {
        page: href
      }) : null);
    });
    NavLink.displayName = "NavLink";
    var Link8 = /* @__PURE__ */ React__namespace.forwardRef((_a, forwardedRef) => {
      var _b = _a, {
        to,
        prefetch = "none"
      } = _b, props = __objRest(_b, [
        "to",
        "prefetch"
      ]);
      let href = reactRouterDom.useHref(to), [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(reactRouterDom.Link, _rollupPluginBabelHelpers.extends({
        ref: forwardedRef,
        to
      }, props, prefetchHandlers)), shouldPrefetch ? /* @__PURE__ */ React__namespace.createElement(PrefetchPageLinks, {
        page: href
      }) : null);
    });
    Link8.displayName = "Link";
    function composeEventHandlers(theirHandler, ourHandler) {
      return (event) => {
        theirHandler && theirHandler(event), event.defaultPrevented || ourHandler(event);
      };
    }
    function Links2() {
      let {
        matches,
        routeModules,
        manifest
      } = useRemixEntryContext(), links$1 = React__namespace.useMemo(() => links.getLinksForMatches(matches, routeModules, manifest), [matches, routeModules, manifest]);
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, links$1.map((link) => {
        if (links.isPageLinkDescriptor(link))
          return /* @__PURE__ */ React__namespace.createElement(PrefetchPageLinks, _rollupPluginBabelHelpers.extends({
            key: link.page
          }, link));
        let imageSrcSet = null;
        return "useId" in React__namespace ? (link.imagesrcset && (link.imageSrcSet = imageSrcSet = link.imagesrcset, delete link.imagesrcset), link.imagesizes && (link.imageSizes = link.imagesizes, delete link.imagesizes)) : (link.imageSrcSet && (link.imagesrcset = imageSrcSet = link.imageSrcSet, delete link.imageSrcSet), link.imageSizes && (link.imagesizes = link.imageSizes, delete link.imageSizes)), /* @__PURE__ */ React__namespace.createElement("link", _rollupPluginBabelHelpers.extends({
          key: link.rel + (link.href || "") + (imageSrcSet || "")
        }, link));
      }));
    }
    function PrefetchPageLinks(_a) {
      var _b = _a, {
        page
      } = _b, dataLinkProps = __objRest(_b, [
        "page"
      ]);
      let {
        clientRoutes
      } = useRemixEntryContext(), matches = React__namespace.useMemo(() => routeMatching.matchClientRoutes(clientRoutes, page), [clientRoutes, page]);
      return matches ? /* @__PURE__ */ React__namespace.createElement(PrefetchPageLinksImpl, _rollupPluginBabelHelpers.extends({
        page,
        matches
      }, dataLinkProps)) : (console.warn(`Tried to prefetch ${page} but no routes matched.`), null);
    }
    function usePrefetchedStylesheets(matches) {
      let {
        routeModules
      } = useRemixEntryContext(), [styleLinks, setStyleLinks] = React__namespace.useState([]);
      return React__namespace.useEffect(() => {
        let interrupted = !1;
        return links.getStylesheetPrefetchLinks(matches, routeModules).then((links2) => {
          interrupted || setStyleLinks(links2);
        }), () => {
          interrupted = !0;
        };
      }, [matches, routeModules]), styleLinks;
    }
    function PrefetchPageLinksImpl(_a) {
      var _b = _a, {
        page,
        matches: nextMatches
      } = _b, linkProps = __objRest(_b, [
        "page",
        "matches"
      ]);
      let location = reactRouterDom.useLocation(), {
        matches,
        manifest
      } = useRemixEntryContext(), newMatchesForData = React__namespace.useMemo(() => links.getNewMatchesForLinks(page, nextMatches, matches, location, "data"), [page, nextMatches, matches, location]), newMatchesForAssets = React__namespace.useMemo(() => links.getNewMatchesForLinks(page, nextMatches, matches, location, "assets"), [page, nextMatches, matches, location]), dataHrefs = React__namespace.useMemo(() => links.getDataLinkHrefs(page, newMatchesForData, manifest), [newMatchesForData, page, manifest]), moduleHrefs = React__namespace.useMemo(() => links.getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]), styleLinks = usePrefetchedStylesheets(newMatchesForAssets);
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React__namespace.createElement("link", _rollupPluginBabelHelpers.extends({
        key: href,
        rel: "prefetch",
        as: "fetch",
        href
      }, linkProps))), moduleHrefs.map((href) => /* @__PURE__ */ React__namespace.createElement("link", _rollupPluginBabelHelpers.extends({
        key: href,
        rel: "modulepreload",
        href
      }, linkProps))), styleLinks.map((link) => /* @__PURE__ */ React__namespace.createElement("link", _rollupPluginBabelHelpers.extends({
        key: link.href
      }, link))));
    }
    function Meta2() {
      let {
        matches,
        routeData,
        routeModules
      } = useRemixEntryContext(), location = reactRouterDom.useLocation(), meta2 = {}, parentsData = {};
      for (let match of matches) {
        let routeId = match.route.id, data = routeData[routeId], params = match.params, routeModule = routeModules[routeId];
        if (routeModule.meta) {
          let routeMeta = typeof routeModule.meta == "function" ? routeModule.meta({
            data,
            parentsData,
            params,
            location
          }) : routeModule.meta;
          Object.assign(meta2, routeMeta);
        }
        parentsData[routeId] = data;
      }
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, Object.entries(meta2).map(([name, value]) => {
        if (!value)
          return null;
        if (["charset", "charSet"].includes(name))
          return /* @__PURE__ */ React__namespace.createElement("meta", {
            key: "charset",
            charSet: value
          });
        if (name === "title")
          return /* @__PURE__ */ React__namespace.createElement("title", {
            key: "title"
          }, value);
        let isOpenGraphTag = name.startsWith("og:");
        return [value].flat().map((content) => isOpenGraphTag ? /* @__PURE__ */ React__namespace.createElement("meta", {
          content,
          key: name + content,
          property: name
        }) : typeof content == "string" ? /* @__PURE__ */ React__namespace.createElement("meta", {
          content,
          name,
          key: name + content
        }) : /* @__PURE__ */ React__namespace.createElement("meta", _rollupPluginBabelHelpers.extends({
          key: name + JSON.stringify(content)
        }, content)));
      }));
    }
    var isHydrated = !1;
    function Scripts2(props) {
      let {
        manifest,
        matches,
        pendingLocation,
        clientRoutes,
        serverHandoffString
      } = useRemixEntryContext();
      React__namespace.useEffect(() => {
        isHydrated = !0;
      }, []);
      let initialScripts = React__namespace.useMemo(() => {
        let contextScript = serverHandoffString ? `window.__remixContext = ${serverHandoffString};` : "", routeModulesScript = `${matches.map((match, index) => `import * as route${index} from ${JSON.stringify(manifest.routes[match.route.id].module)};`).join(`
`)}
window.__remixRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};`;
        return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement("script", _rollupPluginBabelHelpers.extends({}, props, {
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: markup.createHtml(contextScript)
        })), /* @__PURE__ */ React__namespace.createElement("script", _rollupPluginBabelHelpers.extends({}, props, {
          src: manifest.url
        })), /* @__PURE__ */ React__namespace.createElement("script", _rollupPluginBabelHelpers.extends({}, props, {
          dangerouslySetInnerHTML: markup.createHtml(routeModulesScript),
          type: "module"
        })), /* @__PURE__ */ React__namespace.createElement("script", _rollupPluginBabelHelpers.extends({}, props, {
          src: manifest.entry.module,
          type: "module"
        })));
      }, []), nextMatches = React__namespace.useMemo(() => {
        if (pendingLocation) {
          let matches2 = routeMatching.matchClientRoutes(clientRoutes, pendingLocation);
          return invariant(matches2, `No routes match path "${pendingLocation.pathname}"`), matches2;
        }
        return [];
      }, [pendingLocation, clientRoutes]), routePreloads = matches.concat(nextMatches).map((match) => {
        let route = manifest.routes[match.route.id];
        return (route.imports || []).concat([route.module]);
      }).flat(1), preloads = manifest.entry.imports.concat(routePreloads);
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, dedupe(preloads).map((path) => /* @__PURE__ */ React__namespace.createElement("link", {
        key: path,
        rel: "modulepreload",
        href: path,
        crossOrigin: props.crossOrigin
      })), isHydrated ? null : initialScripts);
    }
    function dedupe(array) {
      return [...new Set(array)];
    }
    var Form2 = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => /* @__PURE__ */ React__namespace.createElement(FormImpl, _rollupPluginBabelHelpers.extends({}, props, {
      ref
    })));
    Form2.displayName = "Form";
    var FormImpl = /* @__PURE__ */ React__namespace.forwardRef((_a, forwardedRef) => {
      var _b = _a, {
        reloadDocument = !1,
        replace = !1,
        method = "get",
        action = ".",
        encType = "application/x-www-form-urlencoded",
        fetchKey,
        onSubmit
      } = _b, props = __objRest(_b, [
        "reloadDocument",
        "replace",
        "method",
        "action",
        "encType",
        "fetchKey",
        "onSubmit"
      ]);
      let submit = useSubmitImpl(fetchKey), formMethod = method.toLowerCase() === "get" ? "get" : "post", formAction = useFormAction(action);
      return /* @__PURE__ */ React__namespace.createElement("form", _rollupPluginBabelHelpers.extends({
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        encType,
        onSubmit: reloadDocument ? void 0 : (event) => {
          if (onSubmit && onSubmit(event), event.defaultPrevented)
            return;
          event.preventDefault();
          let submitter = event.nativeEvent.submitter;
          submit(submitter || event.currentTarget, {
            method,
            replace
          });
        }
      }, props));
    });
    FormImpl.displayName = "FormImpl";
    function useFormAction(action = ".", method = "get") {
      let {
        id
      } = useRemixRouteContext(), path = reactRouterDom.useResolvedPath(action), search = path.search, isIndexRoute = id.endsWith("/index");
      return action === "." && isIndexRoute && (search = search ? search.replace(/^\?/, "?index&") : "?index"), path.pathname + search;
    }
    function useSubmit() {
      return useSubmitImpl();
    }
    var defaultMethod = "get", defaultEncType = "application/x-www-form-urlencoded";
    function useSubmitImpl(key) {
      let navigate = reactRouterDom.useNavigate(), defaultAction = useFormAction(), {
        transitionManager
      } = useRemixEntryContext();
      return React__namespace.useCallback((target, options = {}) => {
        let method, action, encType, formData;
        if (isFormElement(target)) {
          let submissionTrigger = options.submissionTrigger;
          method = options.method || target.getAttribute("method") || defaultMethod, action = options.action || target.getAttribute("action") || defaultAction, encType = options.encType || target.getAttribute("enctype") || defaultEncType, formData = new FormData(target), submissionTrigger && submissionTrigger.name && formData.append(submissionTrigger.name, submissionTrigger.value);
        } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
          let form = target.form;
          if (form == null)
            throw new Error("Cannot submit a <button> without a <form>");
          method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod, action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction, encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType, formData = new FormData(form), target.name && formData.set(target.name, target.value);
        } else {
          if (isHtmlElement(target))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
          if (method = options.method || "get", action = options.action || defaultAction, encType = options.encType || "application/x-www-form-urlencoded", target instanceof FormData)
            formData = target;
          else if (formData = new FormData(), target instanceof URLSearchParams)
            for (let [name, value] of target)
              formData.append(name, value);
          else if (target != null)
            for (let name of Object.keys(target))
              formData.append(name, target[name]);
        }
        if (typeof document > "u")
          throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
        let {
          protocol,
          host
        } = window.location, url = new URL(action, `${protocol}//${host}`);
        if (method.toLowerCase() === "get")
          for (let [name, value] of formData)
            if (typeof value == "string")
              url.searchParams.append(name, value);
            else
              throw new Error("Cannot submit binary form data using GET");
        let submission = {
          formData,
          action: url.pathname + url.search,
          method: method.toUpperCase(),
          encType,
          key: Math.random().toString(36).substr(2, 8)
        };
        key ? transitionManager.send({
          type: "fetcher",
          href: submission.action,
          submission,
          key
        }) : (setNextNavigationSubmission(submission), navigate(url.pathname + url.search, {
          replace: options.replace
        }));
      }, [defaultAction, key, navigate, transitionManager]);
    }
    var nextNavigationSubmission;
    function setNextNavigationSubmission(submission) {
      nextNavigationSubmission = submission;
    }
    function consumeNextNavigationSubmission() {
      let submission = nextNavigationSubmission;
      return nextNavigationSubmission = void 0, submission;
    }
    function isHtmlElement(object) {
      return object != null && typeof object.tagName == "string";
    }
    function isButtonElement(object) {
      return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
    }
    function isFormElement(object) {
      return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
    }
    function isInputElement(object) {
      return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
    }
    function useBeforeUnload(callback) {
      React__namespace.useEffect(() => (window.addEventListener("beforeunload", callback), () => {
        window.removeEventListener("beforeunload", callback);
      }), [callback]);
    }
    function useMatches() {
      let {
        matches,
        routeData,
        routeModules
      } = useRemixEntryContext();
      return React__namespace.useMemo(() => matches.map((match) => {
        var _routeModules$match$r;
        let {
          pathname,
          params
        } = match;
        return {
          id: match.route.id,
          pathname,
          params,
          data: routeData[match.route.id],
          handle: (_routeModules$match$r = routeModules[match.route.id]) === null || _routeModules$match$r === void 0 ? void 0 : _routeModules$match$r.handle
        };
      }), [matches, routeData, routeModules]);
    }
    function useLoaderData() {
      return useRemixRouteContext().data;
    }
    function useActionData() {
      let {
        id: routeId
      } = useRemixRouteContext(), {
        transitionManager
      } = useRemixEntryContext(), {
        actionData
      } = transitionManager.getState();
      return actionData ? actionData[routeId] : void 0;
    }
    function useTransition() {
      let {
        transitionManager
      } = useRemixEntryContext();
      return transitionManager.getState().transition;
    }
    function createFetcherForm(fetchKey) {
      let FetcherForm = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => /* @__PURE__ */ React__namespace.createElement(FormImpl, _rollupPluginBabelHelpers.extends({}, props, {
        ref,
        fetchKey
      })));
      return FetcherForm.displayName = "fetcher.Form", FetcherForm;
    }
    var fetcherId = 0;
    function useFetcher() {
      let {
        transitionManager
      } = useRemixEntryContext(), [key] = React__namespace.useState(() => String(++fetcherId)), [Form3] = React__namespace.useState(() => createFetcherForm(key)), [load] = React__namespace.useState(() => (href) => {
        transitionManager.send({
          type: "fetcher",
          href,
          key
        });
      }), submit = useSubmitImpl(key), fetcher = transitionManager.getFetcher(key), fetcherWithComponents = React__namespace.useMemo(() => __spreadValues({
        Form: Form3,
        submit,
        load
      }, fetcher), [fetcher, Form3, submit, load]);
      return React__namespace.useEffect(() => () => transitionManager.deleteFetcher(key), [transitionManager, key]), fetcherWithComponents;
    }
    function useFetchers() {
      let {
        transitionManager
      } = useRemixEntryContext(), {
        fetchers
      } = transitionManager.getState();
      return [...fetchers.values()];
    }
    var LiveReload2 = function({
      port = Number(8002),
      nonce = void 0
    }) {
      let js = String.raw;
      return /* @__PURE__ */ React__namespace.createElement("script", {
        nonce,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
          __html: js`
                (() => {
                  let protocol = location.protocol === "https:" ? "wss:" : "ws:";
                  let host = location.hostname;
                  let socketPath = protocol + "//" + host + ":" + ${String(port)} + "/socket";

                  let ws = new WebSocket(socketPath);
                  ws.onmessage = (message) => {
                    let event = JSON.parse(message.data);
                    if (event.type === "LOG") {
                      console.log(event.message);
                    }
                    if (event.type === "RELOAD") {
                      console.log("💿 Reloading window ...");
                      window.location.reload();
                    }
                  };
                  ws.onerror = (error) => {
                    console.log("Remix dev asset server web socket error:");
                    console.error(error);
                  };
                })();
              `
        }
      });
    };
    exports.Form = Form2;
    exports.FormImpl = FormImpl;
    exports.Link = Link8;
    exports.Links = Links2;
    exports.LiveReload = LiveReload2;
    exports.Meta = Meta2;
    exports.NavLink = NavLink;
    exports.PrefetchPageLinks = PrefetchPageLinks;
    exports.RemixEntry = RemixEntry;
    exports.RemixEntryContext = RemixEntryContext;
    exports.RemixRoute = RemixRoute;
    exports.Scripts = Scripts2;
    exports.composeEventHandlers = composeEventHandlers;
    exports.useActionData = useActionData;
    exports.useBeforeUnload = useBeforeUnload;
    exports.useFetcher = useFetcher;
    exports.useFetchers = useFetchers;
    exports.useFormAction = useFormAction;
    exports.useLoaderData = useLoaderData;
    exports.useMatches = useMatches;
    exports.useSubmit = useSubmit;
    exports.useSubmitImpl = useSubmitImpl;
    exports.useTransition = useTransition;
  }
});

// @remix-run/react/dist/browser.js
var require_browser = __commonJS({
  "@remix-run/react/dist/browser.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var history = require("history"), React4 = require("react"), components = require_components();
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = /* @__PURE__ */ Object.create(null);
      return e && Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: !0,
            get: function() {
              return e[k];
            }
          });
        }
      }), n.default = e, Object.freeze(n);
    }
    var React__namespace = /* @__PURE__ */ _interopNamespace(React4);
    function RemixBrowser(_props) {
      let historyRef = React__namespace.useRef();
      historyRef.current == null && (historyRef.current = history.createBrowserHistory({
        window
      }));
      let history$1 = historyRef.current, [state, dispatch] = React__namespace.useReducer((_, update) => update, {
        action: history$1.action,
        location: history$1.location
      });
      React__namespace.useLayoutEffect(() => history$1.listen(dispatch), [history$1]);
      let entryContext = window.__remixContext;
      return entryContext.manifest = window.__remixManifest, entryContext.routeModules = window.__remixRouteModules, entryContext.appState.trackBoundaries = !1, entryContext.appState.trackCatchBoundaries = !1, /* @__PURE__ */ React__namespace.createElement(components.RemixEntry, {
        context: entryContext,
        action: state.action,
        location: state.location,
        navigator: history$1
      });
    }
    exports.RemixBrowser = RemixBrowser;
  }
});

// @remix-run/react/dist/scroll-restoration.js
var require_scroll_restoration = __commonJS({
  "@remix-run/react/dist/scroll-restoration.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var React4 = require("react"), reactRouterDom = require("react-router-dom"), components = require_components();
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = /* @__PURE__ */ Object.create(null);
      return e && Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: !0,
            get: function() {
              return e[k];
            }
          });
        }
      }), n.default = e, Object.freeze(n);
    }
    var React__namespace = /* @__PURE__ */ _interopNamespace(React4), STORAGE_KEY = "positions", positions = {};
    if (typeof document < "u") {
      let sessionPositions = sessionStorage.getItem(STORAGE_KEY);
      sessionPositions && (positions = JSON.parse(sessionPositions));
    }
    function ScrollRestoration2({
      nonce = void 0
    }) {
      useScrollRestoration(), React__namespace.useEffect(() => {
        window.history.scrollRestoration = "manual";
      }, []), components.useBeforeUnload(React__namespace.useCallback(() => {
        window.history.scrollRestoration = "auto";
      }, []));
      let restoreScroll = ((STORAGE_KEY2) => {
        if (!window.history.state || !window.history.state.key) {
          let key = Math.random().toString(32).slice(2);
          window.history.replaceState({
            key
          }, "");
        }
        try {
          let storedY = JSON.parse(sessionStorage.getItem(STORAGE_KEY2) || "{}")[window.history.state.key];
          typeof storedY == "number" && window.scrollTo(0, storedY);
        } catch (error) {
          console.error(error), sessionStorage.removeItem(STORAGE_KEY2);
        }
      }).toString();
      return /* @__PURE__ */ React__namespace.createElement("script", {
        nonce,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
          __html: `(${restoreScroll})(${JSON.stringify(STORAGE_KEY)})`
        }
      });
    }
    var hydrated = !1;
    function useScrollRestoration() {
      let location = reactRouterDom.useLocation(), transition = components.useTransition(), wasSubmissionRef = React__namespace.useRef(!1);
      React__namespace.useEffect(() => {
        transition.submission && (wasSubmissionRef.current = !0);
      }, [transition]), React__namespace.useEffect(() => {
        transition.location && (positions[location.key] = window.scrollY);
      }, [transition, location]), components.useBeforeUnload(React__namespace.useCallback(() => {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
      }, [])), typeof document < "u" && React__namespace.useLayoutEffect(() => {
        if (!hydrated) {
          hydrated = !0;
          return;
        }
        let y = positions[location.key];
        if (y != null) {
          window.scrollTo(0, y);
          return;
        }
        if (location.hash) {
          let el = document.getElementById(location.hash.slice(1));
          if (el) {
            el.scrollIntoView();
            return;
          }
        }
        if (wasSubmissionRef.current === !0) {
          wasSubmissionRef.current = !1;
          return;
        }
        window.scrollTo(0, 0);
      }, [location]), React__namespace.useEffect(() => {
        transition.submission && (wasSubmissionRef.current = !0);
      }, [transition]);
    }
    exports.ScrollRestoration = ScrollRestoration2;
  }
});

// @remix-run/react/dist/server.js
var require_server = __commonJS({
  "@remix-run/react/dist/server.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var history = require("history"), React4 = require("react"), components = require_components();
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = /* @__PURE__ */ Object.create(null);
      return e && Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: !0,
            get: function() {
              return e[k];
            }
          });
        }
      }), n.default = e, Object.freeze(n);
    }
    var React__namespace = /* @__PURE__ */ _interopNamespace(React4);
    function RemixServer2({
      context,
      url
    }) {
      typeof url == "string" && (url = new URL(url));
      let location = {
        pathname: url.pathname,
        search: url.search,
        hash: "",
        state: null,
        key: "default"
      }, staticNavigator = {
        createHref(to) {
          return typeof to == "string" ? to : history.createPath(to);
        },
        push(to) {
          throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
        },
        replace(to) {
          throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
        },
        go(delta) {
          throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
        },
        back() {
          throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.");
        },
        forward() {
          throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.");
        },
        block() {
          throw new Error("You cannot use navigator.block() on the server because it is a stateless environment.");
        }
      };
      return /* @__PURE__ */ React__namespace.createElement(components.RemixEntry, {
        context,
        action: history.Action.Pop,
        location,
        navigator: staticNavigator,
        static: !0
      });
    }
    exports.RemixServer = RemixServer2;
  }
});

// @remix-run/react/dist/index.js
var require_dist = __commonJS({
  "@remix-run/react/dist/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var browser = require_browser(), reactRouterDom = require("react-router-dom"), components = require_components(), errorBoundaries = require_errorBoundaries(), scrollRestoration = require_scroll_restoration(), server = require_server();
    exports.RemixBrowser = browser.RemixBrowser;
    Object.defineProperty(exports, "Outlet", {
      enumerable: !0,
      get: function() {
        return reactRouterDom.Outlet;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: !0,
      get: function() {
        return reactRouterDom.useHref;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: !0,
      get: function() {
        return reactRouterDom.useLocation;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: !0,
      get: function() {
        return reactRouterDom.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: !0,
      get: function() {
        return reactRouterDom.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: !0,
      get: function() {
        return reactRouterDom.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: !0,
      get: function() {
        return reactRouterDom.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: !0,
      get: function() {
        return reactRouterDom.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: !0,
      get: function() {
        return reactRouterDom.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: !0,
      get: function() {
        return reactRouterDom.useSearchParams;
      }
    });
    exports.Form = components.Form;
    exports.Link = components.Link;
    exports.Links = components.Links;
    exports.LiveReload = components.LiveReload;
    exports.Meta = components.Meta;
    exports.NavLink = components.NavLink;
    exports.PrefetchPageLinks = components.PrefetchPageLinks;
    exports.Scripts = components.Scripts;
    exports.useActionData = components.useActionData;
    exports.useBeforeUnload = components.useBeforeUnload;
    exports.useFetcher = components.useFetcher;
    exports.useFetchers = components.useFetchers;
    exports.useFormAction = components.useFormAction;
    exports.useLoaderData = components.useLoaderData;
    exports.useMatches = components.useMatches;
    exports.useSubmit = components.useSubmit;
    exports.useTransition = components.useTransition;
    exports.useCatch = errorBoundaries.useCatch;
    exports.ScrollRestoration = scrollRestoration.ScrollRestoration;
    exports.RemixServer = server.RemixServer;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_react2 = __toESM(require_dist()), import_server = require("react-dom/server");

// src/stitches.config.ts
init_react();
var import_react = require("@stitches/react"), {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  theme: {
    colors: {
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)",
      primary: "#993F98",
      primary400: "#AD65AD",
      secondary: "#3ec9c1",
      tertiary: "#757275",
      tertiary300: "#8B898B",
      tertiary100: "#C9C8C9",
      black1: "#000",
      grey1: "#eeedee"
    },
    fontSizes: {
      12: "calc(12rem / 16)",
      14: "calc(14rem / 16)",
      16: "calc(16rem / 16)",
      18: "calc(18rem / 16)",
      20: "calc(20rem / 16)",
      28: "calc(28rem / 16)",
      36: "calc(36rem / 16)"
    }
  },
  media: {
    tablet: "(min-width: 550px)",
    laptop: "(min-width: 1100px)",
    desktop: "(min-width: 1450px)"
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value })
  }
});

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react2.RemixServer, {
    context: remixContext,
    url: request.url
  })).replace(/<\/head>/, `<style>${getCssText()}</style></head>`);
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_react3 = __toESM(require_dist());
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
}), globalStyles = globalCss({
  ":root": {
    "@font-face": {
      "font-family": "Recursive",
      src: `url('/fonts/recursive-variable.woff2') format('woff2 supports variations'),
        url('/fonts/recursive-variable.woff2') format('woff2-variations')`,
      "font-weight": "300 1000",
      "font-display": "swap"
    }
  },
  ["html, body"]: {
    fontFamily: '"Roboto", "Gotham", "Recursive", san-serif'
  },
  body: {
    padding: "0",
    margin: "0",
    background: "hsl(0deg 0% 92%)"
  },
  "*": {
    boxSizing: "border-box"
  }
});
function App() {
  return globalStyles(), /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react3.Meta, null), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=optional",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement(import_react3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react3.Outlet, null), /* @__PURE__ */ React.createElement(import_react3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react3.Scripts, null), /* @__PURE__ */ React.createElement(import_react3.LiveReload, null)));
}

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/positioned-layout.tsx
var positioned_layout_exports = {};
__export(positioned_layout_exports, {
  default: () => Index
});
init_react();
var import_react4 = __toESM(require_dist());
function Index() {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Navigator, null, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "relative"
  }, "Relative"), /* @__PURE__ */ React.createElement("a", {
    href: "https://codesandbox.io/s/cranky-vaughan-tz96oc?file=/src/stacking.js",
    target: "_blank"
  }, "Absolute"), /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "fixed"
  }, "Fixed"), /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "modal"
  }, "Modal"), /* @__PURE__ */ React.createElement("a", {
    href: "https://codesandbox.io/s/cranky-vaughan-tz96oc?file=/src/stacking.js",
    target: "_blank"
  }, "Stacking context"), /* @__PURE__ */ React.createElement("a", {
    href: "https://codesandbox.io/s/cranky-vaughan-tz96oc?file=/src/overflow.js",
    target: "_blank"
  }, "Overflow")), /* @__PURE__ */ React.createElement(import_react4.Outlet, null));
}
var Wrapper = styled("div", {
  width: "100%",
  minHeight: "150vh",
  border: "1px solid $green500",
  background: "hsl(306deg 60% 76% / 0.15)",
  "& h1": {
    fontSize: "$28",
    textAlign: "center",
    margin: "0"
  },
  "& section": {
    border: "1px solid $purple500",
    padding: "40px",
    marginBottom: "20px"
  }
}), Navigator = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28"
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/positioned-layout/relative.tsx
var relative_exports = {};
__export(relative_exports, {
  default: () => Index2
});
init_react();
function Index2() {
  return /* @__PURE__ */ React.createElement(Wrapper2, null, /* @__PURE__ */ React.createElement(Section, null, "\u201Cmargin-left\u201D", /* @__PURE__ */ React.createElement("div", {
    className: "pink box with-margin"
  })), /* @__PURE__ */ React.createElement(Section, null, "\u201Cleft\u201D", /* @__PURE__ */ React.createElement("div", {
    className: "pink box with-position"
  })));
}
var Wrapper2 = styled("div", {
  display: "flex",
  margin: "40px",
  gap: "40px"
}), Section = styled("section", {
  padding: "20px 0 !important",
  flex: 1,
  background: "#EEE",
  borderRadius: "4px",
  fontSize: "0.875rem",
  textAlign: "center",
  lineHeight: 3,
  "& .with-position": {
    position: "relative",
    left: "40px"
  },
  "& .with-margin": {},
  "& .box ": {
    height: "48px",
    border: "4px solid"
  },
  "& .pink.box": {
    borderColor: "deeppink"
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/positioned-layout/fixed.tsx
var fixed_exports = {};
__export(fixed_exports, {
  default: () => Index3
});
init_react();
function Index3() {
  return /* @__PURE__ */ React.createElement(Wrapper3, null, /* @__PURE__ */ React.createElement(Button, null, "Hello"));
}
var Wrapper3 = styled("div", {
  marginTop: "100px",
  marginLeft: "150px",
  height: "900px",
  border: "solid"
}), Button = styled("div", {
  width: "75px",
  height: "75px",
  lineHeight: "44px",
  borderRadius: "50%",
  background: "hsl(345deg 100% 40%)",
  color: "white",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "500",
  border: "3px solid white",
  boxShadow: "2px 2px 20px hsl(248deg 80% 40% / 0.33)",
  cursor: "pointer",
  position: "fixed",
  right: 0,
  top: 50
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/positioned-layout/modal.tsx
var modal_exports = {};
__export(modal_exports, {
  default: () => Index4
});
init_react();
function Index4() {
  return /* @__PURE__ */ React.createElement(Wrapper4, null, /* @__PURE__ */ React.createElement(Modal, null, /* @__PURE__ */ React.createElement("div", {
    className: "modal-backdrop"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "modal"
  }, "Hellloooo ")));
}
var Wrapper4 = styled("div", {}), Modal = styled("div", {
  "& .modal-backdrop": {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "black",
    opacity: 0.5
  },
  "& .modal": {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "85%",
    height: "200px",
    margin: "auto",
    background: "white",
    padding: "16px",
    textAlign: "center"
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flex-layout.tsx
var flex_layout_exports = {};
__export(flex_layout_exports, {
  default: () => Index5
});
init_react();
function Index5() {
  return /* @__PURE__ */ React.createElement(Wrapper5, null, /* @__PURE__ */ React.createElement(Parent, null, /* @__PURE__ */ React.createElement("div", {
    className: "child"
  }, "Child"), /* @__PURE__ */ React.createElement("div", {
    className: "child"
  }, "Thisssssssssssssadasdas dasd asd asd asd asdasdas dasd asd asd sadsass is a child with longgggg text"), /* @__PURE__ */ React.createElement("div", {
    className: "child"
  }, "Child")));
}
var Wrapper5 = styled("div", {
  width: "100%",
  minHeight: "400px",
  background: "hsl(306deg 60% 76% / 0.15)"
}), Parent = styled("div", {
  display: "flex",
  backgroundColor: "$green500",
  "& .child": {
    backgroundColor: "#0074d9",
    padding: "20px",
    color: "white",
    border: "2px solid $red500",
    flexBasis: "100px",
    overflow: "scroll"
  },
  "& .child:nth-of-type(1)": {},
  "& .child:nth-of-type(2)": {},
  "& .child:nth-of-type(3)": {}
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout.tsx
var flow_layout_exports = {};
__export(flow_layout_exports, {
  default: () => Index6
});
init_react();
var import_react5 = __toESM(require_dist());
var import_react_router_dom = require("react-router-dom");
function Index6() {
  return /* @__PURE__ */ React.createElement(Wrapper6, null, /* @__PURE__ */ React.createElement(Navigator2, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: "width"
  }, "Width"), /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: "height"
  }, "Height")), /* @__PURE__ */ React.createElement(import_react5.Outlet, null));
}
var Wrapper6 = styled("div", {
  width: "100%",
  minHeight: "400px",
  background: "hsl(306deg 60% 76% / 0.15)",
  "& h1": {
    fontSize: "$28",
    textAlign: "center",
    margin: "0"
  },
  "& section": {
    border: "1px solid $purple500",
    padding: "40px",
    marginBottom: "20px"
  }
}), Navigator2 = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
  marginBottom: "30px"
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout/height.tsx
var height_exports = {};
__export(height_exports, {
  default: () => Index7
});
init_react();
var import_react6 = __toESM(require_dist());
var import_react_router_dom2 = require("react-router-dom");
function Index7() {
  return /* @__PURE__ */ React.createElement(Wrapper7, null, /* @__PURE__ */ React.createElement("h1", null, "height algorithm"), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(Navigator3, null, /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    to: "margin"
  }, "Margin Collapsing")), /* @__PURE__ */ React.createElement(import_react6.Outlet, null)));
}
var Wrapper7 = styled("div", {
  height: "100%",
  background: "hsl(148deg 60% 60% / 0.3)"
}), Navigator3 = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28"
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout/height/margin.tsx
var margin_exports = {};
__export(margin_exports, {
  default: () => Index8
});
init_react();
function Index8() {
  return /* @__PURE__ */ React.createElement(Wrapper8, null, /* @__PURE__ */ React.createElement("p", null, "Paragraph One"), /* @__PURE__ */ React.createElement("p", null, "Paragraph Too"), /* @__PURE__ */ React.createElement("p", {
    style: { margin: "16px" }
  }, "Paragraph Tree"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    style: { margin: "64px" }
  }, "Paragraph For")), /* @__PURE__ */ React.createElement("div", {
    style: { overflow: "auto" }
  }, /* @__PURE__ */ React.createElement("p", null, "Paragraph Fine")), /* @__PURE__ */ React.createElement("p", {
    style: { margin: "-16px" }
  }, "Paragraph Sick"), /* @__PURE__ */ React.createElement("p", {
    style: { margin: "16px" }
  }, "Paragraph Seven"));
}
var Wrapper8 = styled("div", {
  border: "1px solid $blue500",
  margin: "30px",
  "& p": {
    textAlign: "center",
    margin: "32px"
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout/width.tsx
var width_exports = {};
__export(width_exports, {
  default: () => Index9
});
init_react();
var import_react7 = __toESM(require_dist());
var import_react_router_dom3 = require("react-router-dom");
function Index9() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "width algorithm"), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(Navigator4, null, /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    to: "auto-vs-100"
  }, "100% vs auto"), /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    to: "fit"
  }, "Content width")), /* @__PURE__ */ React.createElement(import_react7.Outlet, null)));
}
var Navigator4 = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28"
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout/width/auto-vs-100.tsx
var auto_vs_100_exports = {};
__export(auto_vs_100_exports, {
  default: () => Index10
});
init_react();
function Index10() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper9, {
    className: "100%"
  }, "width: 100%"), /* @__PURE__ */ React.createElement(Wrapper9, {
    className: "auto"
  }, "width: auto"));
}
var Wrapper9 = styled("div", {
  width: "100%",
  height: "50px",
  border: "1px solid $blue500",
  margin: "20px 0px",
  textAlign: "center",
  fontSize: "$20",
  lineHeight: "50px",
  textTransform: "uppercase",
  "&.100%": {
    width: "100%"
  },
  "&.auto": {
    width: "auto"
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout/width/fit.tsx
var fit_exports = {};
__export(fit_exports, {
  default: () => Index11
});
init_react();
function Index11() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(H2, null, "Short"), /* @__PURE__ */ React.createElement(H2, null, "A mid-length heading, mid-length heading"), /* @__PURE__ */ React.createElement(H2, null, "The longest heading you've ever seen in your life, will it ever end,The longest heading you've ever seen in your life, will it ever end,"));
}
var H2 = styled("h2", {
  background: "$green500",
  letterSpacing: "1.5px"
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive.tsx
var responsive_exports = {};
__export(responsive_exports, {
  default: () => Index12
});
init_react();
var import_react_router_dom4 = require("react-router-dom"), import_react8 = __toESM(require_dist());
function Index12() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Navigator5, null, /* @__PURE__ */ React.createElement(import_react_router_dom4.Link, {
    to: "css-variable"
  }, "CSS Variables"), /* @__PURE__ */ React.createElement(import_react_router_dom4.Link, {
    to: "non-breakpoint"
  }, "Non Breakpoint"), /* @__PURE__ */ React.createElement(import_react_router_dom4.Link, {
    to: "typo"
  }, "typo")), /* @__PURE__ */ React.createElement(import_react8.Outlet, null));
}
var Navigator5 = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
  marginBottom: "30px"
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/non-breakpoint.tsx
var non_breakpoint_exports = {};
__export(non_breakpoint_exports, {
  default: () => non_breakpoint_default
});
init_react();
function non_breakpoint_default() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper10, null, /* @__PURE__ */ React.createElement("div", {
    className: "column"
  }, /* @__PURE__ */ React.createElement("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."), /* @__PURE__ */ React.createElement("p", null, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))), /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "Name"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    placeholder: "Email Address"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    value: "Subscribe"
  })));
}
var Wrapper10 = styled("main", {
  ".column": {
    width: "clamp(500px, 65%, 800px)",
    background: "white",
    borderRadius: "4px",
    padding: "24px",
    margin: "0 auto"
  }
}), Form = styled("form", {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  background: "white",
  border: "solid 1px $purple500",
  margin: "auto",
  padding: "100px 20px",
  input: {
    border: "none",
    background: "hsl(0 0% 93%)",
    borderRadius: ".25rem",
    padding: ".75rem 1rem"
  },
  'input[type="submit"]': {
    background: "hotpink",
    color: "white",
    boxShadow: "0 .75rem .5rem -.5rem hsl(0 50% 80%)"
  },
  "& > input": {
    flex: "1 1 10ch",
    margin: ".5rem"
  },
  '& > input[type="email"]': {
    flex: "3 1 30ch"
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/css-variable.tsx
var css_variable_exports = {};
__export(css_variable_exports, {
  default: () => Index13
});
init_react();
function Index13() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper11, null, /* @__PURE__ */ React.createElement(Article, null, "Card 1"), /* @__PURE__ */ React.createElement(Article, null, "Card 2"), /* @__PURE__ */ React.createElement(Article, null, "Card 3")), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Box, {
    style: { background: "var(--pink)" }
  }), /* @__PURE__ */ React.createElement(Box, {
    style: { background: "var(--pinkred)" }
  }), /* @__PURE__ */ React.createElement(Box, {
    style: { background: "var(--red)" }
  }), /* @__PURE__ */ React.createElement(Box, {
    style: { background: "var(--orange)" }
  }), /* @__PURE__ */ React.createElement(Box, {
    style: { background: "var(--yellow)" }
  }), /* @__PURE__ */ React.createElement(Box, {
    style: {
      background: `linear-gradient(
                            45deg,
                            var(--red),
                            var(--purple)
                        );`
    }
  })));
}
var Wrapper11 = styled("main", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "var(--spacing)",
  padding: "var(--spacing)",
  "--spacing": "8px",
  "@media (min-width: 768px)": {
    "--spacing": "32px"
  },
  "@media (min-width: 1024px)": {
    "--spacing": "64px"
  }
}), Article = styled("article", {
  background: "white",
  height: "200px",
  boxShadow: "0px 2px 16px hsla(0deg 0% 0% / 0.2)",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  maxWidth: "600px",
  borderRadius: "var(--spacing)",
  padding: "var(--spacing)"
}), Row = styled("div", {
  display: "flex",
  padding: "8px",
  gap: "8px",
  justifyContent: "center",
  "--red-hue": "0deg",
  "--intense": "100% 50%",
  "--red": `hsl(
    var(--red-hue) var(--intense)
  )`,
  "--orange": `hsl(
    calc(var(--red-hue) + 20deg)
    var(--intense)
  )`,
  "--yellow": `hsl(
    calc(var(--red-hue) + 40deg)
    var(--intense)
  )`,
  "--pinkred": `hsl(
    calc(var(--red-hue) - 20deg)
    var(--intense)
  )`,
  "--pink": `hsl(
    calc(var(--red-hue) - 40deg)
    var(--intense)
  )`,
  "--purple": `hsl(
    calc(var(--red-hue) - 80deg)
    var(--intense)
  )`
}), Box = styled("div", {
  width: "100px",
  height: "100px",
  borderRadius: "4px"
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/typo.tsx
var typo_exports = {};
__export(typo_exports, {
  default: () => Index14
});
init_react();
var import_react9 = __toESM(require_dist());
function Index14() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navigator6, null, /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "text-overflow"
  }, "text overflow"), /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "print-style"
  }, "print-style"), /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "masonry"
  }, "masonry"), /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "loading"
  }, "loading")), /* @__PURE__ */ React.createElement(Wrapper12, null, /* @__PURE__ */ React.createElement(import_react9.Outlet, null)));
}
var Navigator6 = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
  marginBottom: "30px"
}), Wrapper12 = styled("main", {
  border: "1px solid $purple500",
  maxWidth: "50%",
  margin: "auto"
}), Title = styled("h3", {
  textAlign: "center",
  color: "$purple500",
  fontSize: "$28",
  margin: 0
}), Text = styled("p", {
  variants: {
    break: {
      wrap: {
        overflowWrap: "break-word"
      },
      wrapWithHyphens: {
        overflowWrap: "break-word",
        hyphens: "auto"
      },
      ellipsis: {
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      ellipsisSingle: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      ellipsisMultiple: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 3
      }
    }
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/typo/text-overflow.tsx
var text_overflow_exports = {};
__export(text_overflow_exports, {
  default: () => Index15
});
init_react();
function Index15() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Title2, null, "No style"), /* @__PURE__ */ React.createElement(Text2, null, "This is a narrow column of text, with a very long word: antidisestablishmentarianism."), /* @__PURE__ */ React.createElement(Text2, null, "This is a narrow column of text, with a very long word: antidisestab", /* @__PURE__ */ React.createElement("span", {
    dangerouslySetInnerHTML: { __html: "&nbsp;" }
  }), "lishmentarianism."), /* @__PURE__ */ React.createElement(Text2, null, "This is a narrow column of text, with a very long word: antidisestab lishmentarianism."), /* @__PURE__ */ React.createElement(Text2, null, "This is a narrow column of text, with a very long word: antidisestab-lishmentarianism."), /* @__PURE__ */ React.createElement(Text2, null, "The same problem happens with URLs: https://spiritlabs.co/blog/why-frontend-developers-prefer-react"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Title2, null, "overflow-wrap: break-word"), /* @__PURE__ */ React.createElement(Text2, {
    break: "wrap"
  }, "This is a narrow column of text, with a very long word: antidisestablishmentarianism."), /* @__PURE__ */ React.createElement(Text2, {
    break: "wrapWithHyphens"
  }, "The same problem happens with URLs: https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Title2, null, "text-overflow: ellipsis"), /* @__PURE__ */ React.createElement(Text2, {
    break: "ellipsis"
  }, "This is a narrow column of text, with a very long word: antidisestablishmentarianism."), /* @__PURE__ */ React.createElement(Text2, {
    break: "ellipsis"
  }, "TheSameProblemHappensWithURLs:https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Title2, null, "Single line ellipsis"), /* @__PURE__ */ React.createElement(Text2, {
    break: "ellipsisSingle"
  }, "This is a narrow column of text, with a very long word: antidisestablishmentarianism."), /* @__PURE__ */ React.createElement(Text2, {
    break: "ellipsisSingle"
  }, "The same problem happens with URLs: https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Title2, null, "multiple line ellipsis"), /* @__PURE__ */ React.createElement(Text2, {
    break: "ellipsisMultiple"
  }, "This is a narrow column of text, with a very long word: antidisestablishmentarianism. This is a narrow column of text, with a very long word: antidisestablishmentarianism."), /* @__PURE__ */ React.createElement(Text2, {
    break: "ellipsisMultiple"
  }, "The same problem happens with URLs: https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact, The same problem happens with URLs: https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact"));
}
var Title2 = styled("h3", {
  textAlign: "center",
  color: "$purple500",
  fontSize: "$28",
  margin: 0
}), Text2 = styled("p", {
  variants: {
    break: {
      wrap: {
        overflowWrap: "break-word"
      },
      wrapWithHyphens: {
        overflowWrap: "break-word",
        hyphens: "auto"
      },
      ellipsis: {
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      ellipsisSingle: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      ellipsisMultiple: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 3
      }
    }
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/typo/print-style.tsx
var print_style_exports = {};
__export(print_style_exports, {
  default: () => Index16
});
init_react();
function Index16() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper13, null, /* @__PURE__ */ React.createElement(P, {
    borderClr: "blue"
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /* @__PURE__ */ React.createElement(P, {
    borderClr: "gray"
  }, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."), /* @__PURE__ */ React.createElement(P, {
    borderClr: "red"
  }, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."), /* @__PURE__ */ React.createElement(P, {
    borderClr: "purple"
  }, "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."), /* @__PURE__ */ React.createElement(P, {
    borderClr: "green"
  }, 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.')), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Book, null, /* @__PURE__ */ React.createElement("h2", null, "Chapter 1"), /* @__PURE__ */ React.createElement("p", null, "Outside the space-warp chamber, Rizal's great green sun had already set. Thick olive dusk eddied through the interplanetary transit center. I swore under my breath and slammed shut the warp-hatch switch."), /* @__PURE__ */ React.createElement("p", null, "Locking bars whispered back. The hatch revolved on its axis, slow as an asteroid eroding. I threw another quick glance at my chrono. It still read the same as before: six Earth hours more\u2026 six hours to ferret out the truth or be forever reconditioned."), /* @__PURE__ */ React.createElement("p", null, "\u2014Six hours, that is, if Controller Alfred Kruze didn't cut it shorter."), /* @__PURE__ */ React.createElement("p", null, "And if he did, Rizal might very well change status. Today, it was billed as the FedGov's outermost bastion against the Kel. Tomorrow, it could prove man's fatal flaw, the Achilles heel in our whole system of defenses."), /* @__PURE__ */ React.createElement("p", null, "In which case\u2014"), /* @__PURE__ */ React.createElement("p", null, "Involuntarily, I shivered."), /* @__PURE__ */ React.createElement("p", null, "\u201CAgent Traynor\u2014?\u201D"), /* @__PURE__ */ React.createElement("p", null, "The voice came from the shadows. A dull, phlegmatic, tranquilized, conditioned voice. I stopped short; turned fast. \u201CWho's asking?\u201D"), /* @__PURE__ */ React.createElement("p", null, "The man shrugged stolidly, not even picking up my tension. \u201CI'm a port rep, Agent Traynor. Port rep second, that is\u2014\u201D"), /* @__PURE__ */ React.createElement("p", null, "\u201CSo who told you to come out here? Who said you should meet me?\u201D"), /* @__PURE__ */ React.createElement("p", null, "\u201COh\u2026\u201D A pause. \u201CWell, you see, there's this sigman, Agent Traynor. Up in the Interworld Communications section. He had a regular 7-D clearance report that a FedGov Security investigation agent was warping in\u2014you have to file a 7-D on all warpings, you know, Agent Traynor, on account of restrictives. So\u2014well, the rep first was out to eat, so I just notified Rizal Security, just a routine report, and the unit controller there, an Agent Gaylord, he said for me to meet you, and\u2014\u201D"), /* @__PURE__ */ React.createElement("p", null, "I bit down hard and shifted my weight, both at once, wondering if a broken jaw would interfere with the work of a port rep second."), /* @__PURE__ */ React.createElement("p", null, "Only then, all at once, I caught the unmistakable whish of a grav-car sweeping in."), /* @__PURE__ */ React.createElement("p", null, "The lights hit us almost in the same instant. Two seconds later a man who said he was Agent Gaylord was jumping down and locking wrists with me in Rizal's traditional greeting."), /* @__PURE__ */ React.createElement("p", null, "Even that wrist-lock set my teeth on edge. It was too solid, too stolid, too thorough a job of conditioning."), /* @__PURE__ */ React.createElement("p", null, "Or was it maybe, just a trifle over-done?")));
}
var Wrapper13 = styled("div", {
  columns: "2",
  columnGap: "16px",
  padding: "16px"
}), P = styled("p", {
  border: "3px solid",
  variants: {
    borderClr: {
      purple: { borderColor: "$purple500" },
      red: { borderColor: "$red500" },
      green: { borderColor: "$green500" },
      blue: { borderColor: "$blue500" },
      gray: { borderColor: "$gray500" }
    }
  }
}), Book = styled("main", {
  width: "160%",
  transform: "translateX(-18%)",
  maxWidth: "64rem",
  margin: "32px auto",
  border: "2px solid hsl(35deg 10% 40%)",
  columnCount: 2,
  columnGap: "150px",
  padding: "50px",
  background: `linear-gradient(
    to right,
    hsl(35deg, 30%, 90%),
    hsl(35deg, 30%, 90%) 47%,
    hsl(35deg, 30%, 70%) 49.5%,
    hsl(35deg, 20%, 50%) 50%,
    hsl(35deg, 30%, 70%) 50.5%,
    hsl(35deg, 30%, 90%) 53%,
    hsl(35deg, 30%, 90%)
  )`
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/typo/loading.tsx
var loading_exports = {};
__export(loading_exports, {
  default: () => Index17
});
init_react();
function Index17() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Book2, null, /* @__PURE__ */ React.createElement("h2", null, "Chapter 1"), /* @__PURE__ */ React.createElement("p", null, "Outside the space-warp chamber, Rizal's great green sun had already set. Thick olive dusk eddied through the interplanetary transit center. I swore under my breath and slammed shut the warp-hatch switch."), /* @__PURE__ */ React.createElement("p", null, "Locking bars whispered back. The hatch revolved on its axis, slow as an asteroid eroding. I threw another quick glance at my chrono. It still read the same as before: six Earth hours more\u2026 six hours to ferret out the truth or be forever reconditioned."), /* @__PURE__ */ React.createElement("p", null, "\u2014Six hours, that is, if Controller Alfred Kruze didn't cut it shorter."), /* @__PURE__ */ React.createElement("p", null, "And if he did, Rizal might very well change status. Today, it was billed as the FedGov's outermost bastion against the Kel. Tomorrow, it could prove man's fatal flaw, the Achilles heel in our whole system of defenses."), /* @__PURE__ */ React.createElement("p", null, "In which case\u2014"), /* @__PURE__ */ React.createElement("p", null, "Involuntarily, I shivered."), /* @__PURE__ */ React.createElement("p", null, "\u201CAgent Traynor\u2014?\u201D"), /* @__PURE__ */ React.createElement("p", null, "The voice came from the shadows. A dull, phlegmatic, tranquilized, conditioned voice. I stopped short; turned fast. \u201CWho's asking?\u201D"), /* @__PURE__ */ React.createElement("p", null, "The man shrugged stolidly, not even picking up my tension. \u201CI'm a port rep, Agent Traynor. Port rep second, that is\u2014\u201D"), /* @__PURE__ */ React.createElement("p", null, "\u201CSo who told you to come out here? Who said you should meet me?\u201D"), /* @__PURE__ */ React.createElement("p", null, "\u201COh\u2026\u201D A pause. \u201CWell, you see, there's this sigman, Agent Traynor. Up in the Interworld Communications section. He had a regular 7-D clearance report that a FedGov Security investigation agent was warping in\u2014you have to file a 7-D on all warpings, you know, Agent Traynor, on account of restrictives. So\u2014well, the rep first was out to eat, so I just notified Rizal Security, just a routine report, and the unit controller there, an Agent Gaylord, he said for me to meet you, and\u2014\u201D"), /* @__PURE__ */ React.createElement("p", null, "I bit down hard and shifted my weight, both at once, wondering if a broken jaw would interfere with the work of a port rep second."), /* @__PURE__ */ React.createElement("p", null, "Only then, all at once, I caught the unmistakable whish of a grav-car sweeping in."), /* @__PURE__ */ React.createElement("p", null, "The lights hit us almost in the same instant. Two seconds later a man who said he was Agent Gaylord was jumping down and locking wrists with me in Rizal's traditional greeting."), /* @__PURE__ */ React.createElement("p", null, "Even that wrist-lock set my teeth on edge. It was too solid, too stolid, too thorough a job of conditioning."), /* @__PURE__ */ React.createElement("p", null, "Or was it maybe, just a trifle over-done?")), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Wrapper14, null, /* @__PURE__ */ React.createElement("p", {
    className: "f-300"
  }, "Home Page"), /* @__PURE__ */ React.createElement(TextWrapper, null, /* @__PURE__ */ React.createElement("p", {
    className: "f-400"
  }, "Home Page")), /* @__PURE__ */ React.createElement("p", {
    className: "f-500"
  }, "Home Page"), /* @__PURE__ */ React.createElement("p", {
    className: "f-600"
  }, "Home Page"), /* @__PURE__ */ React.createElement("p", {
    className: "f-700"
  }, "Home Page"), /* @__PURE__ */ React.createElement("p", {
    className: "f-800"
  }, "Home Page"), /* @__PURE__ */ React.createElement("i", {
    className: "f-300"
  }, "Home Page"), /* @__PURE__ */ React.createElement("i", {
    className: "f-400"
  }, "Home Page"), /* @__PURE__ */ React.createElement("i", {
    className: "f-500"
  }, "Home Page"), /* @__PURE__ */ React.createElement("i", {
    className: "f-600"
  }, "Home Page"), /* @__PURE__ */ React.createElement("i", {
    className: "f-700"
  }, "Home Page"), /* @__PURE__ */ React.createElement("i", {
    className: "f-800"
  }, "Home Page"), /* @__PURE__ */ React.createElement(BoldText, {
    className: "f-300"
  }, "Home Page"), /* @__PURE__ */ React.createElement(BoldText, {
    className: "f-400"
  }, "Home Page"), /* @__PURE__ */ React.createElement(BoldText, {
    className: "f-500"
  }, "Home Page"), /* @__PURE__ */ React.createElement(TextWrapper, null, /* @__PURE__ */ React.createElement(BoldText, {
    className: "f-600"
  }, "Home Page")), /* @__PURE__ */ React.createElement(BoldText, {
    className: "f-700"
  }, "Home Page"), /* @__PURE__ */ React.createElement(BoldText, {
    className: "f-800"
  }, "Home Page"), /* @__PURE__ */ React.createElement("hr", null)));
}
var Book2 = styled("main", {
  width: "160%",
  transform: "translateX(-18%)",
  maxWidth: "64rem",
  margin: "32px auto",
  border: "2px solid hsl(35deg 10% 40%)",
  columnCount: 2,
  columnGap: "150px",
  padding: "50px",
  background: `linear-gradient(
    to right,
    hsl(35deg, 30%, 90%),
    hsl(35deg, 30%, 90%) 47%,
    hsl(35deg, 30%, 70%) 49.5%,
    hsl(35deg, 20%, 50%) 50%,
    hsl(35deg, 30%, 70%) 50.5%,
    hsl(35deg, 30%, 90%) 53%,
    hsl(35deg, 30%, 90%)
  )`,
  p: {
    fontSize: "$20",
    "font-variation-settings": `"slnt" -10,
      "CASL" 0.8,
      "CRSV" 1;`
  }
}), TextWrapper = styled("div", {}), BoldText = styled("strong", {
  display: "block",
  [`${TextWrapper} &`]: {
    background: "$secondary"
  }
}), Wrapper14 = styled("div", {
  color: "$primary",
  fontSize: "$titleM",
  ".f-400": {
    fontWeight: "400",
    my: "$x4"
  },
  ".f-300": {
    fontWeight: "300"
  },
  ".f-500": {
    fontWeight: "500"
  },
  ".f-600": {
    fontWeight: "600"
  },
  ".f-700": {
    fontWeight: "700"
  },
  ".f-800": {
    fontWeight: "800"
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/typo/masonry.tsx
var masonry_exports = {};
__export(masonry_exports, {
  default: () => masonry_default
});
init_react();
function masonry_default() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-a.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-c.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-d.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-g.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-h.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-b.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-e.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-d.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-a.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-c.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-f.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-g.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-h.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-b.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-e.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-d.jpeg"
  })))));
}
var List = styled("ul", {
  "--gap": "16px",
  columnCount: "3",
  columnGap: "var(--gap)",
  padding: "var(--gap)",
  li: {
    boxSizing: "border-box",
    listStyleType: "none",
    "&:nth-child(3n+1)": { order: 1 },
    "&:nth-child(3n+2)": { order: 2 },
    "&:nth-child(3n)  ": { order: 3 }
  },
  img: {
    display: "block",
    width: "100%",
    marginBottom: "var(--gap)"
  },
  variants: {
    layout: {
      flex: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "600px",
        li: {
          width: "30%",
          "&:nth-child(3n+1)": { order: 1 },
          "&:nth-child(3n+2)": { order: 2 },
          "&:nth-child(3n)  ": { order: 3 }
        }
      }
    }
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/select.tsx
var select_exports = {};
__export(select_exports, {
  default: () => select_default
});
init_react();
var import_react11 = __toESM(require("react"));

// src/components/Icon.tsx
init_react();
var import_react10 = __toESM(require("react")), import_react_feather = require("react-feather"), icons = {
  search: import_react_feather.Search,
  "at-sign": import_react_feather.AtSign,
  "chevron-down": import_react_feather.ChevronDown
}, Icon = (_a) => {
  var _b = _a, { id, size, strokeWidth = 1 } = _b, delegated = __objRest(_b, ["id", "size", "strokeWidth"]);
  let Component = icons[id];
  if (!Component)
    throw new Error(`No icon found for ID: ${id}`);
  return /* @__PURE__ */ import_react10.default.createElement(Wrapper15, __spreadValues({
    style: {
      "--size": size + "px",
      "--stroke-width": strokeWidth + "px"
    }
  }, delegated), /* @__PURE__ */ import_react10.default.createElement(Component, {
    color: "currentColor",
    size
  }));
}, Wrapper15 = styled("div", {
  width: "var(--size)",
  height: "var(--size)",
  "& > svg": {
    display: "block",
    strokeWidth: "var(--stroke-width)"
  }
}), Icon_default = Icon;

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/select.tsx
var Select = () => {
  let [value, setValue] = (0, import_react11.useState)("volvo");
  return /* @__PURE__ */ import_react11.default.createElement(Wrapper16, null, /* @__PURE__ */ import_react11.default.createElement(NativeSelect, {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    }
  }, /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "volvo"
  }, "Volvo"), /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "saab"
  }, "Saab"), /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "mercedes"
  }, "Mercedes"), /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "audi"
  }, "Audi")), /* @__PURE__ */ import_react11.default.createElement(PresentationSelect, null, value || "...", /* @__PURE__ */ import_react11.default.createElement(IconWrapper, {
    style: { "--size": 24 + "px" }
  }, /* @__PURE__ */ import_react11.default.createElement(Icon_default, {
    id: "chevron-down",
    strokeWidth: 1,
    size: 24
  }))));
}, Wrapper16 = styled("div", {
  position: "relative",
  width: "max-content",
  transform: "translate(100px,100px)"
}), NativeSelect = styled("select", {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  opacity: "0"
}), PresentationSelect = styled("div", {
  color: "hsl(0deg 0% 40%)",
  backgroundColor: "hsl(0deg 0% 50% / 0.15)",
  fontSize: "1rem",
  padding: "12px 16px",
  paddingRight: "52px",
  borderRadius: "8px",
  [`${NativeSelect}:focus + &`]: {
    outline: "1px dotted #212121"
  },
  [`${NativeSelect}:hover + &`]: {
    color: "#000"
  }
}), IconWrapper = styled("div", {
  position: "absolute",
  top: "0",
  bottom: "0",
  right: "10px",
  margin: "auto",
  width: "var(--size)",
  height: "var(--size)",
  pointerEvents: "none"
}), select_default = Select;

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index18
});
init_react();
var import_react_router_dom5 = require("react-router-dom"), import_react12 = __toESM(require_dist());
function Index18() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Navigator7, null, /* @__PURE__ */ React.createElement(import_react_router_dom5.Link, {
    to: "flow-layout"
  }, "Flow Layout"), /* @__PURE__ */ React.createElement(import_react_router_dom5.Link, {
    to: "positioned-layout"
  }, "Position Layout"), /* @__PURE__ */ React.createElement(import_react_router_dom5.Link, {
    to: "flex-layout"
  }, "Flex Layout"), /* @__PURE__ */ React.createElement(import_react_router_dom5.Link, {
    to: "responsive"
  }, "responsive")), /* @__PURE__ */ React.createElement(import_react12.Outlet, null));
}
var Navigator7 = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
  marginBottom: "30px"
});

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { version: "644f6088", entry: { module: "/build/entry.client-DVPG2WCH.js", imports: ["/build/_shared/chunk-ULYXG37Y.js", "/build/_shared/chunk-DNEVBLEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DBVROBAE.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/flex-layout": { id: "routes/flex-layout", parentId: "root", path: "flex-layout", index: void 0, caseSensitive: void 0, module: "/build/routes/flex-layout-TLYB7U7W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/flow-layout": { id: "routes/flow-layout", parentId: "root", path: "flow-layout", index: void 0, caseSensitive: void 0, module: "/build/routes/flow-layout-WLG4N5DE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/flow-layout/height": { id: "routes/flow-layout/height", parentId: "routes/flow-layout", path: "height", index: void 0, caseSensitive: void 0, module: "/build/routes/flow-layout/height-KDGWPVW3.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/flow-layout/height/margin": { id: "routes/flow-layout/height/margin", parentId: "routes/flow-layout/height", path: "margin", index: void 0, caseSensitive: void 0, module: "/build/routes/flow-layout/height/margin-EXIVZPKB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/flow-layout/width": { id: "routes/flow-layout/width", parentId: "routes/flow-layout", path: "width", index: void 0, caseSensitive: void 0, module: "/build/routes/flow-layout/width-FZQO6COB.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/flow-layout/width/auto-vs-100": { id: "routes/flow-layout/width/auto-vs-100", parentId: "routes/flow-layout/width", path: "auto-vs-100", index: void 0, caseSensitive: void 0, module: "/build/routes/flow-layout/width/auto-vs-100-HYUEEETE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/flow-layout/width/fit": { id: "routes/flow-layout/width/fit", parentId: "routes/flow-layout/width", path: "fit", index: void 0, caseSensitive: void 0, module: "/build/routes/flow-layout/width/fit-O2MEFFHX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-GCTPGM36.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/positioned-layout": { id: "routes/positioned-layout", parentId: "root", path: "positioned-layout", index: void 0, caseSensitive: void 0, module: "/build/routes/positioned-layout-QPU344DG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/positioned-layout/fixed": { id: "routes/positioned-layout/fixed", parentId: "routes/positioned-layout", path: "fixed", index: void 0, caseSensitive: void 0, module: "/build/routes/positioned-layout/fixed-HAZXY5NF.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/positioned-layout/modal": { id: "routes/positioned-layout/modal", parentId: "routes/positioned-layout", path: "modal", index: void 0, caseSensitive: void 0, module: "/build/routes/positioned-layout/modal-UOP36WO7.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/positioned-layout/relative": { id: "routes/positioned-layout/relative", parentId: "routes/positioned-layout", path: "relative", index: void 0, caseSensitive: void 0, module: "/build/routes/positioned-layout/relative-VPF5BERZ.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive": { id: "routes/responsive", parentId: "root", path: "responsive", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive-74L3Q7TP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive/css-variable": { id: "routes/responsive/css-variable", parentId: "routes/responsive", path: "css-variable", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive/css-variable-CXIKLEW7.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive/non-breakpoint": { id: "routes/responsive/non-breakpoint", parentId: "routes/responsive", path: "non-breakpoint", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive/non-breakpoint-PXLO7YGQ.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive/typo": { id: "routes/responsive/typo", parentId: "routes/responsive", path: "typo", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive/typo-4PUBXQBY.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive/typo/loading": { id: "routes/responsive/typo/loading", parentId: "routes/responsive/typo", path: "loading", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive/typo/loading-JJE4CP56.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive/typo/masonry": { id: "routes/responsive/typo/masonry", parentId: "routes/responsive/typo", path: "masonry", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive/typo/masonry-IBNUDR3U.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive/typo/print-style": { id: "routes/responsive/typo/print-style", parentId: "routes/responsive/typo", path: "print-style", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive/typo/print-style-6Q6OEMJB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive/typo/text-overflow": { id: "routes/responsive/typo/text-overflow", parentId: "routes/responsive/typo", path: "text-overflow", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive/typo/text-overflow-G7ICPWBU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/select": { id: "routes/select", parentId: "root", path: "select", index: void 0, caseSensitive: void 0, module: "/build/routes/select-MAIERK3I.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-644F6088.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/positioned-layout": {
    id: "routes/positioned-layout",
    parentId: "root",
    path: "positioned-layout",
    index: void 0,
    caseSensitive: void 0,
    module: positioned_layout_exports
  },
  "routes/positioned-layout/relative": {
    id: "routes/positioned-layout/relative",
    parentId: "routes/positioned-layout",
    path: "relative",
    index: void 0,
    caseSensitive: void 0,
    module: relative_exports
  },
  "routes/positioned-layout/fixed": {
    id: "routes/positioned-layout/fixed",
    parentId: "routes/positioned-layout",
    path: "fixed",
    index: void 0,
    caseSensitive: void 0,
    module: fixed_exports
  },
  "routes/positioned-layout/modal": {
    id: "routes/positioned-layout/modal",
    parentId: "routes/positioned-layout",
    path: "modal",
    index: void 0,
    caseSensitive: void 0,
    module: modal_exports
  },
  "routes/flex-layout": {
    id: "routes/flex-layout",
    parentId: "root",
    path: "flex-layout",
    index: void 0,
    caseSensitive: void 0,
    module: flex_layout_exports
  },
  "routes/flow-layout": {
    id: "routes/flow-layout",
    parentId: "root",
    path: "flow-layout",
    index: void 0,
    caseSensitive: void 0,
    module: flow_layout_exports
  },
  "routes/flow-layout/height": {
    id: "routes/flow-layout/height",
    parentId: "routes/flow-layout",
    path: "height",
    index: void 0,
    caseSensitive: void 0,
    module: height_exports
  },
  "routes/flow-layout/height/margin": {
    id: "routes/flow-layout/height/margin",
    parentId: "routes/flow-layout/height",
    path: "margin",
    index: void 0,
    caseSensitive: void 0,
    module: margin_exports
  },
  "routes/flow-layout/width": {
    id: "routes/flow-layout/width",
    parentId: "routes/flow-layout",
    path: "width",
    index: void 0,
    caseSensitive: void 0,
    module: width_exports
  },
  "routes/flow-layout/width/auto-vs-100": {
    id: "routes/flow-layout/width/auto-vs-100",
    parentId: "routes/flow-layout/width",
    path: "auto-vs-100",
    index: void 0,
    caseSensitive: void 0,
    module: auto_vs_100_exports
  },
  "routes/flow-layout/width/fit": {
    id: "routes/flow-layout/width/fit",
    parentId: "routes/flow-layout/width",
    path: "fit",
    index: void 0,
    caseSensitive: void 0,
    module: fit_exports
  },
  "routes/responsive": {
    id: "routes/responsive",
    parentId: "root",
    path: "responsive",
    index: void 0,
    caseSensitive: void 0,
    module: responsive_exports
  },
  "routes/responsive/non-breakpoint": {
    id: "routes/responsive/non-breakpoint",
    parentId: "routes/responsive",
    path: "non-breakpoint",
    index: void 0,
    caseSensitive: void 0,
    module: non_breakpoint_exports
  },
  "routes/responsive/css-variable": {
    id: "routes/responsive/css-variable",
    parentId: "routes/responsive",
    path: "css-variable",
    index: void 0,
    caseSensitive: void 0,
    module: css_variable_exports
  },
  "routes/responsive/typo": {
    id: "routes/responsive/typo",
    parentId: "routes/responsive",
    path: "typo",
    index: void 0,
    caseSensitive: void 0,
    module: typo_exports
  },
  "routes/responsive/typo/text-overflow": {
    id: "routes/responsive/typo/text-overflow",
    parentId: "routes/responsive/typo",
    path: "text-overflow",
    index: void 0,
    caseSensitive: void 0,
    module: text_overflow_exports
  },
  "routes/responsive/typo/print-style": {
    id: "routes/responsive/typo/print-style",
    parentId: "routes/responsive/typo",
    path: "print-style",
    index: void 0,
    caseSensitive: void 0,
    module: print_style_exports
  },
  "routes/responsive/typo/loading": {
    id: "routes/responsive/typo/loading",
    parentId: "routes/responsive/typo",
    path: "loading",
    index: void 0,
    caseSensitive: void 0,
    module: loading_exports
  },
  "routes/responsive/typo/masonry": {
    id: "routes/responsive/typo/masonry",
    parentId: "routes/responsive/typo",
    path: "masonry",
    index: void 0,
    caseSensitive: void 0,
    module: masonry_exports
  },
  "routes/select": {
    id: "routes/select",
    parentId: "root",
    path: "select",
    index: void 0,
    caseSensitive: void 0,
    module: select_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/react v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map

var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/guven/Projects/my-remix-app/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/components/Sidebar/index.tsx
init_react();
var import_styles = require("@mui/material/styles");
var import_material = require("@mui/material");
var import_Drawer = __toESM(require("@mui/material/Drawer"));
var import_AppBar = __toESM(require("@mui/material/AppBar"));
var import_Menu = __toESM(require("@mui/icons-material/Menu"));
var import_react = require("react");
var import_icons_material = require("@mui/icons-material");
var import_remix2 = __toESM(require_remix());
var drawerWidth = 240;
var openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});
var closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});
var DrawerHeader = (0, import_styles.styled)("div")(({ theme }) => __spreadValues({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1)
}, theme.mixins.toolbar));
var AppBar = (0, import_styles.styled)(import_AppBar.default, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => __spreadValues({
  backgroundColor: "#CA511B",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
}, open && {
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  })
}));
var Drawer = (0, import_styles.styled)(import_Drawer.default, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => __spreadValues(__spreadValues({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box"
}, open && __spreadProps(__spreadValues({}, openedMixin(theme)), {
  "& .MuiDrawer-paper": openedMixin(theme)
})), !open && __spreadProps(__spreadValues({}, closedMixin(theme)), {
  "& .MuiDrawer-paper": closedMixin(theme)
})));
function Sidebar({ children }) {
  const theme = (0, import_styles.useTheme)();
  const [open, setOpen] = (0, import_react.useState)(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ React.createElement(import_material.Box, {
    sx: { display: "flex" }
  }, /* @__PURE__ */ React.createElement(import_material.CssBaseline, null), /* @__PURE__ */ React.createElement(AppBar, {
    position: "fixed",
    open,
    theme
  }, /* @__PURE__ */ React.createElement(import_material.Toolbar, null, /* @__PURE__ */ React.createElement(import_material.IconButton, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    edge: "start",
    sx: __spreadValues({
      marginRight: 5
    }, open && { display: "none" })
  }, /* @__PURE__ */ React.createElement(import_Menu.default, null)), /* @__PURE__ */ React.createElement(import_material.Typography, {
    variant: "h6",
    noWrap: true,
    component: "div"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, "Pandora")))), /* @__PURE__ */ React.createElement(Drawer, {
    variant: "permanent",
    open
  }, /* @__PURE__ */ React.createElement(DrawerHeader, null, /* @__PURE__ */ React.createElement(import_material.IconButton, {
    onClick: handleDrawerClose
  }, theme.direction === "rtl" ? /* @__PURE__ */ React.createElement(import_icons_material.ChevronRight, null) : /* @__PURE__ */ React.createElement(import_icons_material.ChevronLeft, null))), /* @__PURE__ */ React.createElement(import_material.Divider, null), /* @__PURE__ */ React.createElement(import_material.List, null, ["Meetups"].map((text) => /* @__PURE__ */ React.createElement(import_material.ListItemButton, {
    component: "a",
    key: text,
    sx: {
      minHeight: 48,
      justifyContent: open ? "initial" : "center",
      px: 2.5
    },
    href: text.toLowerCase()
  }, /* @__PURE__ */ React.createElement(import_material.ListItemIcon, {
    sx: {
      minWidth: 0,
      mr: open ? 1 : "auto",
      justifyContent: "center"
    }
  }, /* @__PURE__ */ React.createElement(import_icons_material.MeetingRoomSharp, null)), /* @__PURE__ */ React.createElement(import_material.ListItemText, {
    primary: text,
    sx: { opacity: open ? 1 : 0 }
  })))), /* @__PURE__ */ React.createElement(import_material.Divider, null), /* @__PURE__ */ React.createElement(import_material.List, null, ["Logout"].map((text, index) => /* @__PURE__ */ React.createElement(import_material.ListItemButton, {
    key: text,
    sx: {
      minHeight: 48,
      justifyContent: open ? "initial" : "center",
      px: 2.5
    }
  }, /* @__PURE__ */ React.createElement(import_material.ListItemIcon, {
    sx: {
      minWidth: 0,
      mr: open ? 3 : "auto",
      justifyContent: "center"
    }
  }), /* @__PURE__ */ React.createElement(import_material.ListItemText, {
    primary: text,
    sx: { opacity: open ? 1 : 0 }
  }))))), /* @__PURE__ */ React.createElement(import_material.Box, {
    component: "main",
    sx: { flexGrow: 1, p: 3 }
  }, /* @__PURE__ */ React.createElement(DrawerHeader, null), children));
}

// route:/Users/guven/Projects/my-remix-app/app/root.tsx
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null), /* @__PURE__ */ React.createElement("title", null, "Pandora")), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Sidebar, {
    children: /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)
  }), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:/Users/guven/Projects/my-remix-app/app/routes/meetups.tsx
var meetups_exports = {};
__export(meetups_exports, {
  default: () => Index
});
init_react();
var import_remix4 = __toESM(require_remix());
var import_material2 = require("@mui/material");
function Index() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_material2.Typography, {
    variant: "h4",
    mb: 4
  }, "Meetups"), /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/meetups/new"
  }, /* @__PURE__ */ React.createElement(import_material2.Button, null, "Create Meetup")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(import_remix4.Outlet, null));
}

// route:/Users/guven/Projects/my-remix-app/app/routes/meetups/index.tsx
var meetups_exports2 = {};
__export(meetups_exports2, {
  default: () => Meetups,
  loader: () => loader
});
init_react();
var import_remix5 = __toESM(require_remix());

// app/components/Meetup/index.tsx
init_react();
var import_styles2 = require("@mui/styles");
var import_material3 = require("@mui/material");
var Meetup = ({ meetup }) => {
  const classes = useStyles();
  const { name, desc, duration, date } = meetup;
  const past = new Date(date) < new Date();
  const meetupDate = new Date(date);
  const day = meetupDate.getDate();
  const month = meetupDate.toLocaleString("default", { month: "long" });
  return /* @__PURE__ */ React.createElement(import_material3.Card, {
    className: classes.meetup
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.meetupTime
  }, /* @__PURE__ */ React.createElement("div", {
    className: past ? classes.meetupCalenderPast : classes.meetupCalenderUpcoming
  }, /* @__PURE__ */ React.createElement(import_material3.Typography, {
    variant: "subtitle1"
  }, month), /* @__PURE__ */ React.createElement(import_material3.Typography, {
    className: classes.meetupDay
  }, day)), /* @__PURE__ */ React.createElement(import_material3.Typography, {
    variant: "subtitle2"
  }, duration, " dk")), /* @__PURE__ */ React.createElement("div", {
    className: classes.meetupInfo
  }, /* @__PURE__ */ React.createElement(import_material3.Typography, {
    className: classes.meetupName
  }, name), /* @__PURE__ */ React.createElement(import_material3.Typography, {
    className: classes.meetupSpeaker
  }, desc)));
};
var useStyles = (0, import_styles2.makeStyles)(() => {
  return {
    meetup: {
      display: "flex",
      flexDirection: "row",
      padding: "10px"
    },
    meetupCalenderUpcoming: {
      width: "90px",
      height: "90px",
      backgroundColor: "#f27a1a",
      color: "black",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },
    meetupCalenderPast: {
      width: "90px",
      height: "90px",
      backgroundColor: "#b5b5b5",
      color: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },
    meetupInfo: {
      display: "flex",
      flexDirection: "column",
      color: "#2C3E50",
      fontWeight: "bold"
    },
    meetupTime: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      marginRight: "10px",
      fontWeight: "bold"
    },
    meetupDay: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "80%",
      height: "55px",
      fontSize: "28px",
      backgroundColor: "white",
      color: "black"
    },
    meetupSpeaker: {
      color: "#666"
    },
    meetupName: {
      fontSize: "18px",
      color: "#4d8ee1"
    }
  };
});

// route:/Users/guven/Projects/my-remix-app/app/routes/meetups/index.tsx
var import_material4 = require("@mui/material");

// app/apis/meetup.ts
init_react();
var getMeetups = async () => {
  const response = await fetch(`https://apimocha.com/meetups/list`);
  const meetups = await response.json();
  return meetups;
};

// route:/Users/guven/Projects/my-remix-app/app/routes/meetups/index.tsx
var loader = async () => {
  const meetups = await getMeetups();
  console.log("i am running on server");
  return meetups;
};
function Meetups() {
  var _a, _b;
  const meetups = (0, import_remix5.useLoaderData)();
  console.log("i am running on client");
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_material4.Grid, {
    container: true,
    sx: { gap: "50px", width: "100%" },
    direction: "row",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_material4.Grid, {
    container: true,
    spacing: 2,
    direction: "row",
    maxWidth: "sm"
  }, /* @__PURE__ */ React.createElement(import_material4.Grid, {
    item: true,
    xs: 12,
    md: 12,
    lg: 12
  }, /* @__PURE__ */ React.createElement(import_material4.Typography, {
    variant: "h5"
  }, "Upcoming Meetups")), (_a = meetups == null ? void 0 : meetups.filter((meetup) => new Date(meetup == null ? void 0 : meetup.date).getTime() > new Date().getTime())) == null ? void 0 : _a.map((meetup) => /* @__PURE__ */ React.createElement(import_material4.Grid, {
    item: true,
    key: meetup.name,
    xs: 12,
    md: 6,
    sm: 6
  }, /* @__PURE__ */ React.createElement(Meetup, {
    meetup
  })))), /* @__PURE__ */ React.createElement(import_material4.Grid, {
    container: true,
    spacing: 2,
    direction: "row",
    maxWidth: "sm"
  }, /* @__PURE__ */ React.createElement(import_material4.Grid, {
    item: true,
    xs: 12,
    md: 12,
    lg: 12
  }, /* @__PURE__ */ React.createElement(import_material4.Typography, {
    variant: "h5"
  }, "Past Meetups")), (_b = meetups == null ? void 0 : meetups.filter((meetup) => new Date(meetup == null ? void 0 : meetup.date).getTime() < new Date().getTime())) == null ? void 0 : _b.map((meetup) => /* @__PURE__ */ React.createElement(import_material4.Grid, {
    item: true,
    key: meetup.name,
    xs: 12,
    md: 6,
    sm: 6
  }, /* @__PURE__ */ React.createElement(Meetup, {
    meetup
  }))))));
}

// route:/Users/guven/Projects/my-remix-app/app/routes/meetups/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action,
  default: () => NewMeetup
});
init_react();
var import_remix6 = __toESM(require_remix());
var action = async ({
  request
}) => {
  const form = await request.formData();
  console.log({ form });
  return (0, import_remix6.redirect)("/meetups");
};
function NewMeetup() {
  console.log("NewMeetup");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Add your meetup"), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Name: ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Duration: ", /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: "duration"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Description: ", /* @__PURE__ */ React.createElement("textarea", {
    type: "number",
    name: "desc"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Date: ", /* @__PURE__ */ React.createElement("input", {
    type: "datetime-local",
    name: "date"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Add"))));
}

// route:/Users/guven/Projects/my-remix-app/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
init_react();
function Index2() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Home"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "d4050233", "entry": { "module": "/build/entry.client-5X2YWEWK.js", "imports": ["/build/_shared/chunk-YJZK26PK.js", "/build/_shared/chunk-VICPA36P.js", "/build/_shared/chunk-325D37MS.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-Q4P7VTJD.js", "imports": ["/build/_shared/chunk-PD6JVUON.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-C3GKLPB6.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/meetups": { "id": "routes/meetups", "parentId": "root", "path": "meetups", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/meetups-BSOHBKBO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/meetups/index": { "id": "routes/meetups/index", "parentId": "routes/meetups", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/meetups/index-QFC3O6I7.js", "imports": ["/build/_shared/chunk-PD6JVUON.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/meetups/new": { "id": "routes/meetups/new", "parentId": "routes/meetups", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/meetups/new-WBXBWUJD.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-D4050233.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/meetups": {
    id: "routes/meetups",
    parentId: "root",
    path: "meetups",
    index: void 0,
    caseSensitive: void 0,
    module: meetups_exports
  },
  "routes/meetups/index": {
    id: "routes/meetups/index",
    parentId: "routes/meetups",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: meetups_exports2
  },
  "routes/meetups/new": {
    id: "routes/meetups/new",
    parentId: "routes/meetups",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public/build", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2d1dmVuL1Byb2plY3RzL215LXJlbWl4LWFwcC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2lkZWJhci9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2d1dmVuL1Byb2plY3RzL215LXJlbWl4LWFwcC9hcHAvcm91dGVzL21lZXR1cHMudHN4IiwgInJvdXRlOi9Vc2Vycy9ndXZlbi9Qcm9qZWN0cy9teS1yZW1peC1hcHAvYXBwL3JvdXRlcy9tZWV0dXBzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9NZWV0dXAvaW5kZXgudHN4IiwgIi4uL2FwcC9hcGlzL21lZXR1cC50cyIsICJyb3V0ZTovVXNlcnMvZ3V2ZW4vUHJvamVjdHMvbXktcmVtaXgtYXBwL2FwcC9yb3V0ZXMvbWVldHVwcy9uZXcudHN4IiwgInJvdXRlOi9Vc2Vycy9ndXZlbi9Qcm9qZWN0cy9teS1yZW1peC1hcHAvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHtjcmVhdGVSZXF1ZXN0SGFuZGxlcn0gZnJvbSBcIkByZW1peC1ydW4vZXhwcmVzc1wiO1xuXG5pbXBvcnQgKiBhcyBzZXJ2ZXJCdWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gICAgXCIvYnVpbGRcIixcbiAgICBleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7aW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIn0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHttYXhBZ2U6IFwiMWhcIn0pKTtcblxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcblxuYXBwLmFsbChcbiAgICBcIipcIixcbiAgICBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gICAgICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICAgICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gICAgfSlcbik7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvZ3V2ZW4vUHJvamVjdHMvbXktcmVtaXgtYXBwL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9ndXZlbi9Qcm9qZWN0cy9teS1yZW1peC1hcHAvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9ndXZlbi9Qcm9qZWN0cy9teS1yZW1peC1hcHAvYXBwL3JvdXRlcy9tZWV0dXBzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZ3V2ZW4vUHJvamVjdHMvbXktcmVtaXgtYXBwL2FwcC9yb3V0ZXMvbWVldHVwcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2d1dmVuL1Byb2plY3RzL215LXJlbWl4LWFwcC9hcHAvcm91dGVzL21lZXR1cHMvbmV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvZ3V2ZW4vUHJvamVjdHMvbXktcmVtaXgtYXBwL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9tZWV0dXBzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWV0dXBzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1lZXR1cHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL21lZXR1cHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZXR1cHMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9tZWV0dXBzXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVldHVwcy9uZXdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZXR1cHMvbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbWVldHVwc1wiLFxuICAgICAgcGF0aDogXCJuZXdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUge01ldGFGdW5jdGlvbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge0xpbmtzLCBMaXZlUmVsb2FkLCBNZXRhLCBPdXRsZXQsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uLH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwifi9jb21wb25lbnRzL1NpZGViYXJcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlOiBcIk5ldyBSZW1peCBBcHBcIn07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIi8+XG4gICAgICAgICAgICA8TWV0YS8+XG4gICAgICAgICAgICA8TGlua3MvPlxuICAgICAgICAgICAgPHRpdGxlPlBhbmRvcmE8L3RpdGxlPlxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICA8U2lkZWJhciBjaGlsZHJlbj17PE91dGxldC8+fS8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbi8+XG4gICAgICAgIDxTY3JpcHRzLz5cbiAgICAgICAgPExpdmVSZWxvYWQvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICAgIDwvaHRtbD5cbiAgICApO1xufVxuIiwgImltcG9ydCB7c3R5bGVkLCBUaGVtZSwgdXNlVGhlbWV9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCB7XG4gICAgQm94LFxuICAgIENzc0Jhc2VsaW5lLFxuICAgIERpdmlkZXIsXG4gICAgSWNvbkJ1dHRvbixcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtQnV0dG9uLFxuICAgIExpc3RJdGVtSWNvbixcbiAgICBMaXN0SXRlbVRleHQsXG4gICAgVG9vbGJhcixcbiAgICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xuXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q2hldnJvbkxlZnQsIENoZXZyb25SaWdodCwgTWVldGluZ1Jvb21TaGFycH0gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWxcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlbWl4XCI7XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xuXG5jb25zdCBvcGVuZWRNaXhpbiA9ICh0aGVtZTogVGhlbWUpID0+ICh7XG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXG4gICAgfSksXG4gICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbn0pO1xuXG5jb25zdCBjbG9zZWRNaXhpbiA9ICh0aGVtZTogVGhlbWUpID0+ICh7XG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxuICAgIH0pLFxuICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgd2lkdGg6IGBjYWxjKCR7dGhlbWUuc3BhY2luZyg3KX0gKyAxcHgpYCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICAgIHdpZHRoOiBgY2FsYygke3RoZW1lLnNwYWNpbmcoOCl9ICsgMXB4KWAsXG4gICAgfSxcbn0pO1xuXG5jb25zdCBEcmF3ZXJIZWFkZXIgPSBzdHlsZWQoJ2RpdicpKCh7dGhlbWV9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxuICAgIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXG59KSk7XG5cbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcbiAgICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcbn0pKCh7dGhlbWUsIG9wZW59OiB7IHRoZW1lOiBUaGVtZSwgb3BlbjogYm9vbGVhbiB9KSA9PiAoe1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjQ0E1MTFCXCIsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXG4gICAgfSksXG4gICAgLi4uKG9wZW4gJiYge1xuICAgICAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcbiAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XG4gICAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcbiAgICAgICAgfSksXG4gICAgfSksXG59KSk7XG5cbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHtzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJ30pKFxuLy8gQHRzLWlnbm9yZVxuICAgICh7dGhlbWUsIG9wZW59OiB7IHRoZW1lOiBUaGVtZSwgb3BlbjogYm9vbGVhbiB9KSA9PiAoe1xuICAgICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgLi4uKG9wZW4gJiYge1xuICAgICAgICAgICAgLi4ub3BlbmVkTWl4aW4odGhlbWUpLFxuICAgICAgICAgICAgJyYgLk11aURyYXdlci1wYXBlcic6IG9wZW5lZE1peGluKHRoZW1lKSxcbiAgICAgICAgfSksXG4gICAgICAgIC4uLighb3BlbiAmJiB7XG4gICAgICAgICAgICAuLi5jbG9zZWRNaXhpbih0aGVtZSksXG4gICAgICAgICAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzogY2xvc2VkTWl4aW4odGhlbWUpLFxuICAgICAgICB9KSxcbiAgICB9KSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoe2NoaWxkcmVufTogYW55KSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBzeD17e2Rpc3BsYXk6ICdmbGV4J319PlxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lLz5cbiAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiIG9wZW49e29wZW59IHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4ob3BlbiAmJiB7ZGlzcGxheTogJ25vbmUnfSksXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24vPlxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcCBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnLyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhbmRvcmFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17b3Blbn0+XG4gICAgICAgICAgICAgICAgPERyYXdlckhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyA8Q2hldnJvblJpZ2h0Lz4gOiA8Q2hldnJvbkxlZnQvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRHJhd2VySGVhZGVyPlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyLz5cbiAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAge1snTWVldHVwcyddLm1hcCgodGV4dDogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1wiYVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogb3BlbiA/ICdpbml0aWFsJyA6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweDogMi41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dGV4dC50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXI6IG9wZW4gPyAxIDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZXRpbmdSb29tU2hhcnAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gc3g9e3tvcGFjaXR5OiBvcGVuID8gMSA6IDB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIvPlxuICAgICAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgICAgICB7WydMb2dvdXQnXS5tYXAoKHRleHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiA0OCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IG9wZW4gPyAnaW5pdGlhbCcgOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHg6IDIuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXI6IG9wZW4gPyAzIDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IHN4PXt7b3BhY2l0eTogb3BlbiA/IDEgOiAwfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgICA8Qm94IGNvbXBvbmVudD1cIm1haW5cIiBzeD17e2ZsZXhHcm93OiAxLCBwOiAzfX0+XG4gICAgICAgICAgICAgICAgPERyYXdlckhlYWRlci8+XG5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn0iLCAiaW1wb3J0IHtMaW5rLCBPdXRsZXR9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHtCdXR0b24sIFR5cG9ncmFwaHl9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J2g0J30gbWI9ezR9Pk1lZXR1cHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8TGluayB0bz17Jy9tZWV0dXBzL25ldyd9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBNZWV0dXBcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8T3V0bGV0Lz5cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHtMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YX0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge01lZXR1cE1vZGVsfSBmcm9tIFwifi90eXBlc1wiO1xuaW1wb3J0IHtNZWV0dXB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTWVldHVwXCI7XG5pbXBvcnQge0dyaWQsIFR5cG9ncmFwaHl9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQge2dldE1lZXR1cHN9IGZyb20gXCJ+L2FwaXMvbWVldHVwXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1lZXR1cHM6IEFycmF5PE1lZXR1cE1vZGVsPiA9IGF3YWl0IGdldE1lZXR1cHMoKTtcbiAgICBjb25zb2xlLmxvZygnaSBhbSBydW5uaW5nIG9uIHNlcnZlcicpXG4gICAgXG4gICAgcmV0dXJuIG1lZXR1cHNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lZXR1cHMoKSB7XG4gICAgY29uc3QgbWVldHVwcyA9IHVzZUxvYWRlckRhdGEoKTtcbiAgICBjb25zb2xlLmxvZygnaSBhbSBydW5uaW5nIG9uIGNsaWVudCcpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3tnYXA6ICc1MHB4Jywgd2lkdGg6ICcxMDAlJ319IGRpcmVjdGlvbj17XCJyb3dcIn0gYWxpZ25JdGVtcz17J2ZsZXgtc3RhcnQnfT5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gZGlyZWN0aW9uPXtcInJvd1wifSBtYXhXaWR0aD17XCJzbVwifT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0gbGc9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9e1wiaDVcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBjb21pbmcgTWVldHVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZXR1cHM/LmZpbHRlcigobWVldHVwOiBNZWV0dXBNb2RlbCkgPT4gbmV3IERhdGUobWVldHVwPy5kYXRlKS5nZXRUaW1lKCkgPiBuZXcgRGF0ZSgpLmdldFRpbWUoKSk/Lm1hcCgobWVldHVwOiBNZWV0dXBNb2RlbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXttZWV0dXAubmFtZX0geHM9ezEyfSBtZD17Nn0gc209ezZ9PjxNZWV0dXAgbWVldHVwPXttZWV0dXB9Lz48L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBkaXJlY3Rpb249e1wicm93XCJ9IG1heFdpZHRoPXtcInNtXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfSBsZz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17XCJoNVwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXN0IE1lZXR1cHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWV0dXBzPy5maWx0ZXIoKG1lZXR1cDogTWVldHVwTW9kZWwpID0+IG5ldyBEYXRlKG1lZXR1cD8uZGF0ZSkuZ2V0VGltZSgpIDwgbmV3IERhdGUoKS5nZXRUaW1lKCkpPy5tYXAoKG1lZXR1cDogTWVldHVwTW9kZWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGtleT17bWVldHVwLm5hbWV9IHhzPXsxMn0gbWQ9ezZ9IHNtPXs2fT48TWVldHVwIG1lZXR1cD17bWVldHVwfS8+PC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG11aS9zdHlsZXNcIjtcbmltcG9ydCB7Q2FyZCwgVHlwb2dyYXBoeX0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuaW1wb3J0IHtNZWV0dXBQcm9wc30gZnJvbSBcIn4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IE1lZXR1cCA9ICh7bWVldHVwfTogTWVldHVwUHJvcHMpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3Qge25hbWUsIGRlc2MsIGR1cmF0aW9uLCBkYXRlfSA9IG1lZXR1cDtcbiAgICBjb25zdCBwYXN0ID0gbmV3IERhdGUoZGF0ZSkgPCBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG1lZXR1cERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBjb25zdCBkYXkgPSBtZWV0dXBEYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCBtb250aCA9IG1lZXR1cERhdGUudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7bW9udGg6ICdsb25nJ30pO1xuXG4gICAgcmV0dXJuICg8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMubWVldHVwfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWVldHVwVGltZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGFzdCA/IGNsYXNzZXMubWVldHVwQ2FsZW5kZXJQYXN0IDogY2xhc3Nlcy5tZWV0dXBDYWxlbmRlclVwY29taW5nfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PXtcInN1YnRpdGxlMVwifT57bW9udGh9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWV0dXBEYXl9PntkYXl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PXtcInN1YnRpdGxlMlwifT5cbiAgICAgICAgICAgICAgICB7ZHVyYXRpb259IGRrXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWV0dXBJbmZvfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWV0dXBOYW1lfT57bmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubWVldHVwU3BlYWtlcn0+e2Rlc2N9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L0NhcmQ+KTtcbn07XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBtZWV0dXA6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICB9LFxuICAgICAgICBtZWV0dXBDYWxlbmRlclVwY29taW5nOiB7XG4gICAgICAgICAgICB3aWR0aDogJzkwcHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnOTBweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjI3YTFhJyxcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgICAgICB9LFxuICAgICAgICBtZWV0dXBDYWxlbmRlclBhc3Q6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnOTBweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICc5MHB4JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNiNWI1YjUnLFxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gICAgICAgIH0sXG4gICAgICAgIG1lZXR1cEluZm86IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgY29sb3I6ICcjMkMzRTUwJyxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xuICAgICAgICB9LFxuICAgICAgICBtZWV0dXBUaW1lOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxuICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnXG4gICAgICAgIH0sXG4gICAgICAgIG1lZXR1cERheToge1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICB3aWR0aDogJzgwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICc1NXB4JyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjhweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWVldHVwU3BlYWtlcjoge1xuICAgICAgICAgICAgY29sb3I6ICcjNjY2JyxcbiAgICAgICAgfSxcbiAgICAgICAgbWVldHVwTmFtZToge1xuICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzRkOGVlMScsXG4gICAgICAgIH1cbiAgICB9XG59KTsiLCAiaW1wb3J0IHtNZWV0dXBNb2RlbH0gZnJvbSBcIn4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGdldE1lZXR1cHMgPSBhc3luYyAoKTogUHJvbWlzZTxNZWV0dXBNb2RlbFtdPiA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGltb2NoYS5jb20vbWVldHVwcy9saXN0YCk7XG4gICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gbWVldHVwcztcbn07IiwgImltcG9ydCB7QWN0aW9uRnVuY3Rpb24sIHJlZGlyZWN0fSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgICBjb25zb2xlLmxvZyh7Zm9ybX0pO1xuXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL21lZXR1cHNcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld01lZXR1cCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIk5ld01lZXR1cFwiKTtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPHA+QWRkIHlvdXIgbWVldHVwPC9wPlxuICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgTmFtZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIi8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIER1cmF0aW9uOiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJkdXJhdGlvblwiLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IDx0ZXh0YXJlYSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImRlc2NcIi8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIERhdGU6IDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBuYW1lPVwiZGF0ZVwiLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonZDQwNTAyMzMnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTVYMllXRVdLLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ZSlpLMjZQSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZJQ1BBMzZQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzI1RDM3TVMuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVE0UDdWVEpELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QRDZKVlVPTi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtQzNHS0xQQjYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWV0dXBzJzp7J2lkJzoncm91dGVzL21lZXR1cHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVldHVwcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWV0dXBzLUJTT0hCS0JPLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVldHVwcy9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWV0dXBzL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvbWVldHVwcycsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWV0dXBzL2luZGV4LVFGQzNPNkk3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QRDZKVlVPTi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWV0dXBzL25ldyc6eydpZCc6J3JvdXRlcy9tZWV0dXBzL25ldycsJ3BhcmVudElkJzoncm91dGVzL21lZXR1cHMnLCdwYXRoJzonbmV3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZXR1cHMvbmV3LVdCWEJXVUpELmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtRDQwNTAyMzMuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyx3QkFBd0I7QUFBQSxNQUNyRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRzFDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsVUFBVTtBQUFBLE1BQ3ZDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG9CQUFvQjtBQUFBLE1BQ2pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUN0T2xDO0FBQUEscUJBQW9CO0FBQ3BCLHlCQUF3QjtBQUN4QixvQkFBbUI7QUFDbkIsc0JBQW1DOzs7QUNIbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBK0I7QUFDL0IsbUJBQTRCO0FBR2IsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsUUFBTSxTQUFTLGtDQUNiLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUduRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDbEJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG9CQUEyRTs7O0FDRDNFO0FBQUEsb0JBQXNDO0FBQ3RDLHNCQVdPO0FBQ1Asb0JBQXNCO0FBQ3RCLG9CQUFzQjtBQUN0QixrQkFBcUI7QUFFckIsbUJBQXVCO0FBQ3ZCLDRCQUEwRDtBQUMxRCxvQkFBbUI7QUFFbkIsSUFBTSxjQUFjO0FBRXBCLElBQU0sY0FBYyxDQUFDLFVBQWtCO0FBQUEsRUFDbkMsT0FBTztBQUFBLEVBQ1AsWUFBWSxNQUFNLFlBQVksT0FBTyxTQUFTO0FBQUEsSUFDMUMsUUFBUSxNQUFNLFlBQVksT0FBTztBQUFBLElBQ2pDLFVBQVUsTUFBTSxZQUFZLFNBQVM7QUFBQTtBQUFBLEVBRXpDLFdBQVc7QUFBQTtBQUdmLElBQU0sY0FBYyxDQUFDLFVBQWtCO0FBQUEsRUFDbkMsWUFBWSxNQUFNLFlBQVksT0FBTyxTQUFTO0FBQUEsSUFDMUMsUUFBUSxNQUFNLFlBQVksT0FBTztBQUFBLElBQ2pDLFVBQVUsTUFBTSxZQUFZLFNBQVM7QUFBQTtBQUFBLEVBRXpDLFdBQVc7QUFBQSxFQUNYLE9BQU8sUUFBUSxNQUFNLFFBQVE7QUFBQSxHQUM1QixNQUFNLFlBQVksR0FBRyxRQUFRO0FBQUEsSUFDMUIsT0FBTyxRQUFRLE1BQU0sUUFBUTtBQUFBO0FBQUE7QUFJckMsSUFBTSxlQUFlLDBCQUFPLE9BQU8sQ0FBQyxFQUFDLFlBQVk7QUFBQSxFQUM3QyxTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixnQkFBZ0I7QUFBQSxFQUNoQixTQUFTLE1BQU0sUUFBUSxHQUFHO0FBQUEsR0FFdkIsTUFBTSxPQUFPO0FBR3BCLElBQU0sU0FBUywwQkFBTyx1QkFBVztBQUFBLEVBQzdCLG1CQUFtQixDQUFDLFNBQVMsU0FBUztBQUFBLEdBQ3ZDLENBQUMsRUFBQyxPQUFPLFdBQTRDO0FBQUEsRUFDcEQsaUJBQWlCO0FBQUEsRUFDakIsUUFBUSxNQUFNLE9BQU8sU0FBUztBQUFBLEVBQzlCLFlBQVksTUFBTSxZQUFZLE9BQU8sQ0FBQyxTQUFTLFdBQVc7QUFBQSxJQUN0RCxRQUFRLE1BQU0sWUFBWSxPQUFPO0FBQUEsSUFDakMsVUFBVSxNQUFNLFlBQVksU0FBUztBQUFBO0FBQUEsR0FFckMsUUFBUTtBQUFBLEVBQ1IsWUFBWTtBQUFBLEVBQ1osT0FBTyxlQUFlO0FBQUEsRUFDdEIsWUFBWSxNQUFNLFlBQVksT0FBTyxDQUFDLFNBQVMsV0FBVztBQUFBLElBQ3RELFFBQVEsTUFBTSxZQUFZLE9BQU87QUFBQSxJQUNqQyxVQUFVLE1BQU0sWUFBWSxTQUFTO0FBQUE7QUFBQTtBQUtqRCxJQUFNLFNBQVMsMEJBQU8sdUJBQVcsRUFBQyxtQkFBbUIsQ0FBQyxTQUFTLFNBQVMsVUFFcEUsQ0FBQyxFQUFDLE9BQU8sV0FBNEM7QUFBQSxFQUNqRCxPQUFPO0FBQUEsRUFDUCxZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsR0FDUCxRQUFRLGlDQUNMLFlBQVksU0FEUDtBQUFBLEVBRVIsc0JBQXNCLFlBQVk7QUFBQSxLQUVsQyxDQUFDLFFBQVEsaUNBQ04sWUFBWSxTQUROO0FBQUEsRUFFVCxzQkFBc0IsWUFBWTtBQUFBO0FBSy9CLGlCQUFpQixFQUFDLFlBQWdCO0FBQzdDLFFBQU0sUUFBUTtBQUNkLFFBQU0sQ0FBQyxNQUFNLFdBQVcsMkJBQVM7QUFFakMsUUFBTSxtQkFBbUIsTUFBTTtBQUMzQixZQUFRO0FBQUE7QUFHWixRQUFNLG9CQUFvQixNQUFNO0FBQzVCLFlBQVE7QUFBQTtBQUdaLFNBQ0ksb0NBQUMscUJBQUQ7QUFBQSxJQUFLLElBQUksRUFBQyxTQUFTO0FBQUEsS0FDZixvQ0FBQyw2QkFBRCxPQUNBLG9DQUFDLFFBQUQ7QUFBQSxJQUFRLFVBQVM7QUFBQSxJQUFRO0FBQUEsSUFBWTtBQUFBLEtBQ2pDLG9DQUFDLHlCQUFELE1BQ0ksb0NBQUMsNEJBQUQ7QUFBQSxJQUNJLE9BQU07QUFBQSxJQUNOLGNBQVc7QUFBQSxJQUNYLFNBQVM7QUFBQSxJQUNULE1BQUs7QUFBQSxJQUNMLElBQUk7QUFBQSxNQUNBLGFBQWE7QUFBQSxPQUNULFFBQVEsRUFBQyxTQUFTO0FBQUEsS0FHMUIsb0NBQUMscUJBQUQsUUFFSixvQ0FBQyw0QkFBRDtBQUFBLElBQVksU0FBUTtBQUFBLElBQUssUUFBTTtBQUFBLElBQUMsV0FBVTtBQUFBLEtBQ3RDLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFJO0FBQUEsS0FBSyxlQU0zQixvQ0FBQyxRQUFEO0FBQUEsSUFBUSxTQUFRO0FBQUEsSUFBWTtBQUFBLEtBQ3hCLG9DQUFDLGNBQUQsTUFDSSxvQ0FBQyw0QkFBRDtBQUFBLElBQVksU0FBUztBQUFBLEtBQ2hCLE1BQU0sY0FBYyxRQUFRLG9DQUFDLG9DQUFELFFBQWtCLG9DQUFDLG1DQUFELFNBR3ZELG9DQUFDLHlCQUFELE9BQ0Esb0NBQUMsc0JBQUQsTUFDSyxDQUFDLFdBQVcsSUFBSSxDQUFDLFNBQ2Qsb0NBQUMsZ0NBQUQ7QUFBQSxJQUNJLFdBQVc7QUFBQSxJQUNYLEtBQUs7QUFBQSxJQUNMLElBQUk7QUFBQSxNQUNBLFdBQVc7QUFBQSxNQUNYLGdCQUFnQixPQUFPLFlBQVk7QUFBQSxNQUNuQyxJQUFJO0FBQUE7QUFBQSxJQUVSLE1BQU0sS0FBSztBQUFBLEtBRVgsb0NBQUMsOEJBQUQ7QUFBQSxJQUNJLElBQUk7QUFBQSxNQUNBLFVBQVU7QUFBQSxNQUNWLElBQUksT0FBTyxJQUFJO0FBQUEsTUFDZixnQkFBZ0I7QUFBQTtBQUFBLEtBR3BCLG9DQUFDLHdDQUFELFFBRUosb0NBQUMsOEJBQUQ7QUFBQSxJQUFjLFNBQVM7QUFBQSxJQUFNLElBQUksRUFBQyxTQUFTLE9BQU8sSUFBSTtBQUFBLFNBSWxFLG9DQUFDLHlCQUFELE9BQ0Esb0NBQUMsc0JBQUQsTUFDSyxDQUFDLFVBQVUsSUFBSSxDQUFDLE1BQU0sVUFDbkIsb0NBQUMsZ0NBQUQ7QUFBQSxJQUNJLEtBQUs7QUFBQSxJQUNMLElBQUk7QUFBQSxNQUNBLFdBQVc7QUFBQSxNQUNYLGdCQUFnQixPQUFPLFlBQVk7QUFBQSxNQUNuQyxJQUFJO0FBQUE7QUFBQSxLQUdSLG9DQUFDLDhCQUFEO0FBQUEsSUFDSSxJQUFJO0FBQUEsTUFDQSxVQUFVO0FBQUEsTUFDVixJQUFJLE9BQU8sSUFBSTtBQUFBLE1BQ2YsZ0JBQWdCO0FBQUE7QUFBQSxNQUl4QixvQ0FBQyw4QkFBRDtBQUFBLElBQWMsU0FBUztBQUFBLElBQU0sSUFBSSxFQUFDLFNBQVMsT0FBTyxJQUFJO0FBQUEsVUFLdEUsb0NBQUMscUJBQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUFPLElBQUksRUFBQyxVQUFVLEdBQUcsR0FBRztBQUFBLEtBQ3ZDLG9DQUFDLGNBQUQsT0FFQztBQUFBOzs7QURyTFYsSUFBTSxPQUFxQixNQUFNO0FBQ3BDLFNBQU8sRUFBQyxPQUFPO0FBQUE7QUFHSixlQUFlO0FBQzFCLFNBQ0ksb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLEtBQ1gsb0NBQUMsUUFBRCxNQUNJLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFNBQVE7QUFBQSxNQUNkLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxJQUFXLFNBQVE7QUFBQSxNQUM5QixvQ0FBQyxvQkFBRCxPQUNBLG9DQUFDLHFCQUFELE9BQ0Esb0NBQUMsU0FBRCxNQUFPLGFBRVgsb0NBQUMsUUFBRCxNQUNBLG9DQUFDLFNBQUQ7QUFBQSxJQUFTLFVBQVUsb0NBQUMsc0JBQUQ7QUFBQSxNQUNuQixvQ0FBQyxpQ0FBRCxPQUNBLG9DQUFDLHVCQUFELE9BQ0Esb0NBQUMsMEJBQUQ7QUFBQTs7O0FFdEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBMkI7QUFDM0IsdUJBQWlDO0FBRWxCLGlCQUFpQjtBQUM1QixTQUNJLG9DQUFDLFFBQUQsTUFDSSxvQ0FBQyw2QkFBRDtBQUFBLElBQVksU0FBUztBQUFBLElBQU0sSUFBSTtBQUFBLEtBQUcsWUFDbEMsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUk7QUFBQSxLQUNOLG9DQUFDLHlCQUFELE1BQVEsbUJBSVosb0NBQUMsTUFBRCxPQUNBLG9DQUFDLHNCQUFEO0FBQUE7OztBQ2JaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUE0Qzs7O0FDQTVDO0FBQUEscUJBQXlCO0FBQ3pCLHVCQUErQjtBQUl4QixJQUFNLFNBQVMsQ0FBQyxFQUFDLGFBQXlCO0FBQzdDLFFBQU0sVUFBVTtBQUNoQixRQUFNLEVBQUMsTUFBTSxNQUFNLFVBQVUsU0FBUTtBQUNyQyxRQUFNLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSTtBQUNsQyxRQUFNLGFBQWEsSUFBSSxLQUFLO0FBQzVCLFFBQU0sTUFBTSxXQUFXO0FBQ3ZCLFFBQU0sUUFBUSxXQUFXLGVBQWUsV0FBVyxFQUFDLE9BQU87QUFFM0QsU0FBUSxvQ0FBQyx1QkFBRDtBQUFBLElBQU0sV0FBVyxRQUFRO0FBQUEsS0FDN0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVyxRQUFRO0FBQUEsS0FDcEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVyxPQUFPLFFBQVEscUJBQXFCLFFBQVE7QUFBQSxLQUN4RCxvQ0FBQyw2QkFBRDtBQUFBLElBQVksU0FBUztBQUFBLEtBQWMsUUFDbkMsb0NBQUMsNkJBQUQ7QUFBQSxJQUFZLFdBQVcsUUFBUTtBQUFBLEtBQVksT0FFL0Msb0NBQUMsNkJBQUQ7QUFBQSxJQUFZLFNBQVM7QUFBQSxLQUNoQixVQUFTLFNBR2xCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVcsUUFBUTtBQUFBLEtBQ3BCLG9DQUFDLDZCQUFEO0FBQUEsSUFBWSxXQUFXLFFBQVE7QUFBQSxLQUFhLE9BQzVDLG9DQUFDLDZCQUFEO0FBQUEsSUFBWSxXQUFXLFFBQVE7QUFBQSxLQUFnQjtBQUFBO0FBSTNELElBQU0sWUFBWSwrQkFBVyxNQUFNO0FBQy9CLFNBQU87QUFBQSxJQUNILFFBQVE7QUFBQSxNQUNKLFNBQVM7QUFBQSxNQUNULGVBQWU7QUFBQSxNQUNmLFNBQVM7QUFBQTtBQUFBLElBRWIsd0JBQXdCO0FBQUEsTUFDcEIsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsaUJBQWlCO0FBQUEsTUFDakIsT0FBTztBQUFBLE1BQ1AsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLE1BQ1QsZ0JBQWdCO0FBQUEsTUFDaEIsWUFBWTtBQUFBLE1BQ1osZUFBZTtBQUFBO0FBQUEsSUFFbkIsb0JBQW9CO0FBQUEsTUFDaEIsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsaUJBQWlCO0FBQUEsTUFDakIsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsZ0JBQWdCO0FBQUEsTUFDaEIsWUFBWTtBQUFBLE1BQ1osZUFBZTtBQUFBO0FBQUEsSUFFbkIsWUFBWTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsZUFBZTtBQUFBLE1BQ2YsT0FBTztBQUFBLE1BQ1AsWUFBWTtBQUFBO0FBQUEsSUFFaEIsWUFBWTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsZUFBZTtBQUFBLE1BQ2YsZ0JBQWdCO0FBQUEsTUFDaEIsWUFBWTtBQUFBLE1BQ1osT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBO0FBQUEsSUFFaEIsV0FBVztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsZ0JBQWdCO0FBQUEsTUFDaEIsWUFBWTtBQUFBLE1BQ1osT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsaUJBQWlCO0FBQUEsTUFDakIsT0FBTztBQUFBO0FBQUEsSUFFWCxlQUFlO0FBQUEsTUFDWCxPQUFPO0FBQUE7QUFBQSxJQUVYLFlBQVk7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQTtBQUFBO0FBQUE7OztBRHBGbkIsdUJBQStCOzs7QUVIL0I7QUFFTyxJQUFNLGFBQWEsWUFBb0M7QUFDMUQsUUFBTSxXQUFXLE1BQU0sTUFBTTtBQUM3QixRQUFNLFVBQVUsTUFBTSxTQUFTO0FBQy9CLFNBQU87QUFBQTs7O0FGQ0osSUFBTSxTQUF5QixZQUFZO0FBQzlDLFFBQU0sVUFBOEIsTUFBTTtBQUMxQyxVQUFRLElBQUk7QUFFWixTQUFPO0FBQUE7QUFHSSxtQkFBbUI7QUFibEM7QUFjSSxRQUFNLFVBQVU7QUFDaEIsVUFBUSxJQUFJO0FBQ1osU0FDSSxvQ0FBQyxRQUFELE1BQ0ksb0NBQUMsdUJBQUQ7QUFBQSxJQUFNLFdBQVM7QUFBQSxJQUFDLElBQUksRUFBQyxLQUFLLFFBQVEsT0FBTztBQUFBLElBQVMsV0FBVztBQUFBLElBQU8sWUFBWTtBQUFBLEtBQzVFLG9DQUFDLHVCQUFEO0FBQUEsSUFBTSxXQUFTO0FBQUEsSUFBQyxTQUFTO0FBQUEsSUFBRyxXQUFXO0FBQUEsSUFBTyxVQUFVO0FBQUEsS0FDcEQsb0NBQUMsdUJBQUQ7QUFBQSxJQUFNLE1BQUk7QUFBQSxJQUFDLElBQUk7QUFBQSxJQUFJLElBQUk7QUFBQSxJQUFJLElBQUk7QUFBQSxLQUMzQixvQ0FBQyw2QkFBRDtBQUFBLElBQVksU0FBUztBQUFBLEtBQU0sc0JBSzNCLHlDQUFTLE9BQU8sQ0FBQyxXQUF3QixJQUFJLEtBQUssaUNBQVEsTUFBTSxZQUFZLElBQUksT0FBTyxlQUF2RixtQkFBbUcsSUFBSSxDQUFDLFdBQ3BHLG9DQUFDLHVCQUFEO0FBQUEsSUFBTSxNQUFJO0FBQUEsSUFBQyxLQUFLLE9BQU87QUFBQSxJQUFNLElBQUk7QUFBQSxJQUFJLElBQUk7QUFBQSxJQUFHLElBQUk7QUFBQSxLQUFHLG9DQUFDLFFBQUQ7QUFBQSxJQUFRO0FBQUEsU0FJdkUsb0NBQUMsdUJBQUQ7QUFBQSxJQUFNLFdBQVM7QUFBQSxJQUFDLFNBQVM7QUFBQSxJQUFHLFdBQVc7QUFBQSxJQUFPLFVBQVU7QUFBQSxLQUNwRCxvQ0FBQyx1QkFBRDtBQUFBLElBQU0sTUFBSTtBQUFBLElBQUMsSUFBSTtBQUFBLElBQUksSUFBSTtBQUFBLElBQUksSUFBSTtBQUFBLEtBQzNCLG9DQUFDLDZCQUFEO0FBQUEsSUFBWSxTQUFTO0FBQUEsS0FBTSxrQkFLM0IseUNBQVMsT0FBTyxDQUFDLFdBQXdCLElBQUksS0FBSyxpQ0FBUSxNQUFNLFlBQVksSUFBSSxPQUFPLGVBQXZGLG1CQUFtRyxJQUFJLENBQUMsV0FDcEcsb0NBQUMsdUJBQUQ7QUFBQSxJQUFNLE1BQUk7QUFBQSxJQUFDLEtBQUssT0FBTztBQUFBLElBQU0sSUFBSTtBQUFBLElBQUksSUFBSTtBQUFBLElBQUcsSUFBSTtBQUFBLEtBQUcsb0NBQUMsUUFBRDtBQUFBLElBQVE7QUFBQTtBQUFBOzs7QUd2Q3ZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF1QztBQUVoQyxJQUFNLFNBQXlCLE9BQU87QUFBQSxFQUNJO0FBQUEsTUFDRTtBQUMvQyxRQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLFVBQVEsSUFBSSxFQUFDO0FBRWIsU0FBTyw0QkFBUztBQUFBO0FBR0wscUJBQXFCO0FBQ2hDLFVBQVEsSUFBSTtBQUNaLFNBQU8sb0NBQUMsT0FBRCxNQUNILG9DQUFDLEtBQUQsTUFBRyxvQkFDSCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsS0FDVCxvQ0FBQyxPQUFELE1BQ0ksb0NBQUMsU0FBRCxNQUFPLFVBQ0csb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQU8sTUFBSztBQUFBLFFBR3RDLG9DQUFDLE9BQUQsTUFDSSxvQ0FBQyxTQUFELE1BQU8sY0FDTyxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsUUFHNUMsb0NBQUMsT0FBRCxNQUNJLG9DQUFDLFNBQUQsTUFBTyxpQkFDVSxvQ0FBQyxZQUFEO0FBQUEsSUFBVSxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsUUFHbEQsb0NBQUMsT0FBRCxNQUNJLG9DQUFDLFNBQUQsTUFBTyxVQUNHLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFpQixNQUFLO0FBQUEsUUFHaEQsb0NBQUMsT0FBRCxNQUNJLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE1BQUs7QUFBQSxJQUFTLFdBQVU7QUFBQSxLQUFTO0FBQUE7OztBQ3JDekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFlLGtCQUFpQjtBQUM1QixTQUNJLG9DQUFDLE9BQUQsTUFDSSxvQ0FBQyxNQUFELE1BQUk7QUFBQTs7O0FDSGhCO0FBQUEsSUFBTywwQkFBUSxFQUFDLFdBQVUsWUFBVyxTQUFRLEVBQUMsVUFBUyxtQ0FBa0MsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMsdUNBQXFDLFVBQVMsRUFBQyxRQUFPLEVBQUMsTUFBSyxRQUFPLFlBQVcsUUFBVSxRQUFPLElBQUcsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsMkJBQTBCLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxnQkFBZSxFQUFDLE1BQUssZ0JBQWUsWUFBVyxRQUFPLFFBQU8sUUFBVSxTQUFRLE1BQUssaUJBQWdCLFFBQVUsVUFBUyxtQ0FBa0MsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sa0JBQWlCLEVBQUMsTUFBSyxrQkFBaUIsWUFBVyxRQUFPLFFBQU8sV0FBVSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxxQ0FBb0MsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sd0JBQXVCLEVBQUMsTUFBSyx3QkFBdUIsWUFBVyxrQkFBaUIsUUFBTyxRQUFVLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLDJDQUEwQyxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sc0JBQXFCLEVBQUMsTUFBSyxzQkFBcUIsWUFBVyxrQkFBaUIsUUFBTyxPQUFNLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHlDQUF3QyxXQUFVLFFBQVUsYUFBWSxNQUFLLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsV0FBUSxPQUFNOzs7QVZRbGxELElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixrQkFBa0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosd0JBQXdCO0FBQUEsSUFDcEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixzQkFBc0I7QUFBQSxJQUNsQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7OztBRHpDZCxJQUFNLE1BQU07QUFFWixJQUFJLElBQUk7QUFHUixJQUFJLFFBQVE7QUFHWixJQUFJLElBQ0EsVUFDQSx1QkFBUSxPQUFPLGdCQUFnQixFQUFDLFdBQVcsTUFBTSxRQUFRO0FBSzdELElBQUksSUFBSSx1QkFBUSxPQUFPLGdCQUFnQixFQUFDLFFBQVE7QUFFaEQsSUFBSSxJQUFJLDJCQUFPO0FBRWYsSUFBSSxJQUNBLEtBQ0EsMENBQXFCO0FBQUEsRUFDakIsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBO0FBSWQsSUFBTSxPQUFPLFFBQVEsSUFBSSxRQUFRO0FBRWpDLElBQUksT0FBTyxNQUFNLE1BQU07QUFDbkIsVUFBUSxJQUFJLG9DQUFvQztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=

// ==UserScript==
// @name         Unblock GoGuardian Blocked websites
// @namespace    https://raw.githubusercontent.com/Nimityx/userscripts/main/unblock-goguardian-blocked-websites.js
// @version      1
// @description  You have to download Iframe-allow(https://chrome.google.com/webstore/detail/iframe-allow/gifgpciglhhpmeefjdmlpboipkibhbjg) first to access most websites. Works for websites that use X-Frame-Options: allow or X-Frame-Options: deny.
// @author       Nimityx
// @match        http://blocked.com-default.ws/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var urlraw = window.location.href;
    var c = new URL(urlraw);
    var url = c.searchParams.get("url");
    document.documentElement.innerHTML='<!DOCTYPE HTML><html><head><title>Blocked</title></head><body><style>html,body{border:0;margin:0;padding:0;height:100%}iframe{border:0;margin:0;display:block}</style><iframe src="http://'+url+'" height=100% width=100%></iframe></body></html>';
})();

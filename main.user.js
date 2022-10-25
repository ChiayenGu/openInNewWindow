
// ==UserScript==
// @name         在新窗口打开谷歌学术搜索结果
// @namespace    在新窗口打开谷歌学术搜索结果
// @version      0.0.0
// @include      *
// @match        https://scholar.google.com/*
// @run-at       document-end
// ==/UserScript==
(function () {
    'use strict';

    const articalArea = document.querySelector("#gs_res_ccl_mid");
    const articalList = articalArea.querySelectorAll("h3 a[id]");
    for (const artical of articalList) {
      artical.target = "_blank";
    }

    // console.log('hello')

})();

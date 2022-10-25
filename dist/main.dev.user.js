
// ==UserScript==
// @name         demo-userscript Dev
// @namespace    demo-userscript
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kZXYudXNlci5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXJ0aWNhbEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dzX3Jlc19jY2xfbWlkXCIpXG5jb25zdCBhcnRpY2FsTGlzdCA9IGFydGljYWxBcmVhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMyBhW2lkXVwiKVxuXG5mb3IgKGNvbnN0IGFydGljYWwgb2YgYXJ0aWNhbExpc3QpIHtcbiAgICBhcnRpY2FsLnRhcmdldCA9IFwiX2JsYW5rXCJcbn1cblxuLy8gY29uc29sZS5sb2coJ2hlbGxvJykiXSwibmFtZXMiOlsiYXJ0aWNhbEFyZWEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcnRpY2FsTGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcnRpY2FsIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQSxNQUFNQSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFDN0QsTUFBTUMsV0FBVyxHQUFHSCxXQUFXLENBQUNJLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBRTVELEtBQUssTUFBTUMsT0FBTyxJQUFJRixXQUFXLEVBQUU7TUFDL0JFLE9BQU8sQ0FBQ0MsTUFBTSxHQUFHLFFBQVEsQ0FBQTtJQUM3QixDQUFBOztJQUVBOzs7Ozs7In0=

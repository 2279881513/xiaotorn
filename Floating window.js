// ==UserScript==
// @name         TORN Floating window
// @namespace
// @version      1.0
// @description  TORN Floating window
// @author       Your Name
// @match        https://www.torn.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.top === window.self) {
        var container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.left = '10px';
        container.style.top = '50%';
        container.style.transform = 'translateY(-50%)';
        container.style.zIndex = '9999';

        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.torn.com/factions.php';
        iframe.style.border = 'none';
        iframe.style.width = '300px';
        iframe.style.height = '400px';

        container.appendChild(iframe);

        document.body.appendChild(container);
    }
})();

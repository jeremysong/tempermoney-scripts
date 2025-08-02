// ==UserScript==
// @name         Hide Perplexity AI Discover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide the discovery sidebar on Perplexity AI
// @author       Jeremy Song
// @match        https://www.perplexity.ai/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to delete the discovery sidebar
    function deleteDiscoverySidebar() {
        const discoverElement = document.querySelector('a[data-testid="sidebar-discover"]');
        if (discoverElement) {
            discoverElement.remove();
            console.log('Perplexity AI discovery sidebar deleted');
        }
    }

    // Run immediately when the script loads
    deleteDiscoverySidebar();

    // Also run when the DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', deleteDiscoverySidebar);
    }

    // Use MutationObserver to handle dynamic content loading
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                deleteDiscoverySidebar();
            }
        });
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();

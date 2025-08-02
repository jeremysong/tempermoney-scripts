/*
 * Copyright 2025 Jeremy Song
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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

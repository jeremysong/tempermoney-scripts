# Tampermonkey Scripts Collection

A collection of useful Tampermonkey userscripts for enhancing web browsing experience.

## Scripts

### Hide Perplexity AI Discover (`hide-perplexity-ai-discover.user.js`)

**Purpose**: Removes the discovery sidebar from Perplexity AI to provide a cleaner interface.

**Features**:
- Completely deletes the discovery sidebar element from the DOM
- Works with dynamically loaded content
- Handles page navigation within the single-page application
- Runs automatically on all Perplexity AI pages

**Direct Installation** (Recommended):
1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension
2. Click this link to install directly: [Install Hide Perplexity AI Discover](https://raw.githubusercontent.com/jeremysong/tempermoney-scripts/main/hide-perplexity-ai-discover.user.js)
3. Tampermonkey will automatically detect the script and prompt you to install it
4. Click "Install" in the Tampermonkey dialog

**Manual Installation**:
1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension
2. Copy the contents of `hide-perplexity-ai-discover.user.js`
3. Open Tampermonkey dashboard → Create a new script
4. Paste the script content and save

**Target Sites**: `https://www.perplexity.ai/*`

## How Direct Installation Works

When you click on a `.user.js` file's raw GitHub URL, Tampermonkey automatically:
- Detects it's a userscript
- Shows an installation dialog
- Handles the installation process
- Enables automatic updates from the GitHub source

## General Usage

1. **Install Tampermonkey**: Available for Chrome, Firefox, Safari, and other browsers
2. **Click install links**: Use the direct installation links above
3. **Automatic execution**: Scripts will run automatically on matching websites
4. **Auto-updates**: Scripts will update automatically when changes are pushed to GitHub

## Contributing

Feel free to submit pull requests with new scripts or improvements to existing ones.

## License

Licensed under the Apache License, Version 2.0 (the "License");
you may not use these files except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

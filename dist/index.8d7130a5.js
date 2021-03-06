// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"45BXQ":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "4c104f4fb4a099c0c1e8f0f88d7130a5"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] ???? Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ??? Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          ???? ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3iimy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _sliderJs = require("./slider.js");
var _sliderJsDefault = parcelHelpers.interopDefault(_sliderJs);
var _homePageJs = require("./homePage.js");
var _homePageJsDefault = parcelHelpers.interopDefault(_homePageJs);
var _productsJs = require("./products.js");
var _productsJsDefault = parcelHelpers.interopDefault(_productsJs);
var _sideCartJs = require("./sideCart.js");
var _sideCartJsDefault = parcelHelpers.interopDefault(_sideCartJs);
var _formValidation = require("./formValidation");
var _formValidationDefault = parcelHelpers.interopDefault(_formValidation);
_homePageJsDefault.default();
_sliderJsDefault.default();
_productsJsDefault.default();
_sideCartJsDefault.default();
_formValidationDefault.default();

},{"./slider.js":"5sD79","@parcel/transformer-js/src/esmodule-helpers.js":"367CR","./products.js":"4Iw5E","./sideCart.js":"5yyET","./formValidation":"4jS5F","./homePage.js":"6mLAx"}],"5sD79":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slider() {
    let SliderContainer = document.querySelector('.section__slider');
    // Images Area Images
    let imagesAreaImages = document.querySelectorAll('.images-area img');
    // Images Area First Image
    let imagesAreaFirstImage = document.querySelector('.images-area .firstImage');
    // Previous And Next Buttons
    let previousBtn = document.querySelector('.previous-btn');
    let nextBtn = document.querySelector('.next-btn');
    // Pagination Area 
    let paginationArea = document.querySelector('.pagination-area');
    // Current Image Count
    let currentImageCount = 1;
    // Slider Controler Function
    let sliderController;
    // Create Pagination Spans Function
    let createPaginationSpans;
    // Every Click On Buttons
    if (SliderContainer) {
        previousBtn.addEventListener('click', previousImage);
        nextBtn.addEventListener('click', nextImage);
        // Previous Image Function
        function previousImage() {
            // If The currentImageCount Is 1
            if (currentImageCount === 1) return false;
            else {
                // Minus One From currentImageCount
                currentImageCount--;
                // Call Function sliderController();
                sliderController();
            }
        }
        // Next Image Function
        function nextImage() {
            // If The currentImageCount Is imagesAreaImages.length
            if (currentImageCount === imagesAreaImages.length) return false;
            else {
                // Plus One To currentImageCount
                currentImageCount++;
                // Call Function sliderController();
                sliderController();
            }
        }
        // Create Pagination Spans [Circls] Function
        (function createPaginationSpans1() {
            // Loop On All The Images Slider
            for(var i = 0; i < imagesAreaImages.length; i++){
                // Create Span 
                let paginationSpan = document.createElement('span');
                // Append The Span
                paginationArea.appendChild(paginationSpan);
            }
        })();
        // Slider Controler Function
        (sliderController = function() {
            // Get All The pagination Spans
            let paginationCircls = document.querySelectorAll('.pagination-area span');
            // Call Remore All Active Class Function
            removeAllActive(paginationCircls);
            // Call Remore Active Button Function
            activeButton();
            // The currentImageCount Minus One
            let currentImageMinusOne = currentImageCount - 1;
            // Set Active Class On Current Pagination
            paginationCircls[currentImageMinusOne].classList.add('active');
            // Move The images Area First Image
            imagesAreaFirstImage.style.marginLeft = `-${1170 * currentImageMinusOne}px`;
            console.log(1170 * currentImageMinusOne);
        })();
        if (window.innerWidth <= 540) (sliderController = function() {
            // Get All The pagination Spans
            let paginationCircls = document.querySelectorAll('.pagination-area span');
            // Call Remore All Active Class Function
            removeAllActive(paginationCircls);
            // Call Remore Active Button Function
            activeButton();
            // The currentImageCount Minus One
            let currentImageMinusOne = currentImageCount - 1;
            // Set Active Class On Current Pagination
            paginationCircls[currentImageMinusOne].classList.add('active');
            // Move The images Area First Image
            imagesAreaFirstImage.style.marginLeft = `-${415 * currentImageMinusOne}px`;
            console.log(415 * currentImageMinusOne);
        })();
        if (window.innerWidth <= 769) (sliderController = function() {
            // Get All The pagination Spans
            let paginationCircls = document.querySelectorAll('.pagination-area span');
            // Call Remore All Active Class Function
            removeAllActive(paginationCircls);
            // Call Remore Active Button Function
            activeButton();
            // The currentImageCount Minus One
            let currentImageMinusOne = currentImageCount - 1;
            // Set Active Class On Current Pagination
            paginationCircls[currentImageMinusOne].classList.add('active');
            // Move The images Area First Image
            imagesAreaFirstImage.style.marginLeft = `-${769 * currentImageMinusOne}px`;
            console.log(769 * currentImageMinusOne);
        })();
        // Remove All Active Class Function
        function removeAllActive(targetElement) {
            for(var i = 0; i < targetElement.length; i++)targetElement[i].classList.remove('active');
        }
        // Check Active Button Function
        function activeButton() {
            // If The Current Image Count Equle 1
            currentImageCount === 1 ? // Hide The Previous Button
            previousBtn.classList.add('disabled') : // Else: Show The Previous Button
            previousBtn.classList.remove('disabled');
            // If The Current Image Count Equle imagesAreaImages.length
            currentImageCount === imagesAreaImages.length ? // Hide The Next Button
            nextBtn.classList.add('disabled') : // Else: Show The Next Button
            nextBtn.classList.remove('disabled');
        }
        // Move Slider Image Every 3 Second 
        setInterval(()=>{
            // If The Current Image Count Not Equle imagesAreaImages.length
            if (currentImageCount != imagesAreaImages.length) {
                // Plus One
                currentImageCount++;
                // Call Function sliderController();
                sliderController();
            } else {
                // Make currentImageCount Equle 1
                currentImageCount = 1;
                // Call Function sliderController();
                sliderController();
            }
        }, 5000);
    }
}
exports.default = slider;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"367CR":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4Iw5E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addToCartJs = require("./addToCart.js");
var _addToCartJsDefault = parcelHelpers.interopDefault(_addToCartJs);
function products() {
    let productContainer = document.querySelector('.all-products');
    let categoryContainer = document.querySelector('.all-products__categories');
    let categoryContainerMobile = document.querySelector('.mobile-select');
    if (productContainer) {
        // Function for Call the All Products
        async function showProducts() {
            const allProductsContainer = document.querySelector('.all-products__container__product');
            try {
                await fetch('http://localhost:5000/products').then((response)=>response.json()
                ).then((data)=>obj = data
                ).then((obj)=>obj.map((product)=>{
                        // console.log(product);
                        const getAllProducts = `\n                        <div class="single-product" data-id="${product.category}">\n                            <h5>${product.name.substring(0, 20)}</h5>\n                            <img src="${product.imageURL}" alt="${product.name}">\n                            <p class="descriptions">${product.description.substring(0, 100)}</p>\n                            <div class="productBottom">\n                                <p>Rs <span class="price">${product.price}</span></p>\n                                <a href="#" class="btn-primary buyButton" onclick="return false;">Buy Now</a>\n                            </div>\n                        </div>\n                      `;
                        allProductsContainer.insertAdjacentHTML('beforeend', getAllProducts);
                    })
                );
            } catch (err) {
                console.log(err);
            }
            /* -- Imported function call here --*/ _addToCartJsDefault.default();
        }
        showProducts();
        // Function for Call the All Categories
        async function showCategories() {
            try {
                await fetch('http://localhost:5000/categories').then((response)=>response.json()
                ).then((data)=>data.map((category)=>{
                        // console.log(category);
                        const getAllCategories = `\n                        <li><a href="#" class="filter" data-id="${category.id}">${category.name}</a></li>\n                        `;
                        categoryContainer.insertAdjacentHTML('beforeend', getAllCategories);
                    })
                );
            } catch (err) {
                console.log(err);
            }
            // Function for Filter the Products
            let categoryClasses = document.querySelectorAll('.filter');
            let singleProduct = document.querySelectorAll('.single-product');
            function filter() {
                for(let i = 0; i < categoryClasses.length; i++)categoryClasses[i].addEventListener('click', (e)=>{
                    e.preventDefault();
                    const filter1 = e.target.dataset.id;
                    //console.log(filter);
                    singleProduct.forEach((product)=>{
                        // console.log(typeof product)
                        // for (const singleItem in product) {
                        //     console.log(`${product[singleItem]}`);
                        // }
                        if (filter1 === 'all') product.style.display = 'block';
                        else if (product.getAttribute('data-id') == filter1) product.style.display = 'block';
                        else product.style.display = 'none';
                    });
                });
            }
            filter();
        }
        showCategories();
        // Show categories for mobile device
        if (window.innerWidth <= 540) {
            async function showCategoriesMobile() {
                try {
                    await fetch('http://localhost:5000/categories').then((response)=>response.json()
                    ).then((data)=>data.map((category)=>{
                            // console.log(category);
                            const getAllCategories = `\n                            <option value="${category.id}" data-id="${category.id}" class="filter">${category.name}</option>\n                            `;
                            categoryContainerMobile.insertAdjacentHTML('beforeend', getAllCategories);
                        })
                    );
                } catch (err) {
                    console.log(err);
                }
                // Function for Filter the Products
                let categoryClasses = document.getElementById('mobile-select');
                let singleProduct = document.querySelectorAll('.single-product');
                function filter() {
                    categoryClasses.addEventListener('change', (e)=>{
                        let strUser = categoryClasses.value;
                        singleProduct.forEach((product)=>{
                            // console.log(typeof product)
                            // for (const singleItem in product) {
                            //     console.log(`${product[singleItem]}`);
                            // }
                            if (strUser === 'all') product.style.display = 'block';
                            else if (product.getAttribute('data-id') == strUser) product.style.display = 'block';
                            else product.style.display = 'none';
                        });
                    });
                }
                filter();
            }
            showCategoriesMobile();
        }
    } else _addToCartJsDefault.default();
}
exports.default = products;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR","./addToCart.js":"2TZIh"}],"2TZIh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function addToCart() {
    const sideCart = document.querySelector('.side-cart');
    if (sideCart) {
        let buyButton = document.querySelectorAll('.buyButton');
        let emptyCart = document.querySelector('.emptyCart');
        let path = window.location.pathname;
        let page = path.split("/").pop();
        if (page == 'products.html') var products = obj;
        // Add to Cart
        for(let cartBtn = 0; cartBtn < buyButton.length; cartBtn++)buyButton[cartBtn].addEventListener('click', function() {
            emptyCart.style.display = 'none';
            cartNumbers(products[cartBtn]);
            totalCost(products[cartBtn]);
            displayCart();
        });
        function onLoadCartNumbers() {
            let productNumbers = localStorage.getItem('cartNumbers');
            if (productNumbers) document.querySelector('.total_items_InCart').textContent = productNumbers;
        }
        function cartNumbers(product, action) {
            let productNumbers = localStorage.getItem('cartNumbers');
            productNumbers = parseInt(productNumbers);
            let cartItems = localStorage.getItem('productsInCart');
            cartItems = JSON.parse(cartItems);
            if (action) {
                localStorage.setItem("cartNumbers", productNumbers - 1);
                document.querySelector('.total_items_InCart').textContent = productNumbers - 1;
                console.log("action running");
            } else if (productNumbers) {
                localStorage.setItem('cartNumbers', productNumbers + 1);
                document.querySelector('.total_items_InCart').textContent = productNumbers + 1;
            } else {
                localStorage.setItem('cartNumbers', 1);
                document.querySelector('.total_items_InCart').textContent = 1;
            }
            setItems(product);
            displayCart();
        }
        function setItems(product) {
            let cartItems = localStorage.getItem('productsInCart');
            cartItems = JSON.parse(cartItems);
            if (cartItems != null) {
                if (cartItems[product.id] == undefined) {
                    product.inCart = 0;
                    cartItems = {
                        ...cartItems,
                        [product.id]: product
                    };
                }
                cartItems[product.id].inCart += 1;
            } else {
                product.inCart = 1;
                cartItems = {
                    [product.id]: product
                };
            }
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        }
        function totalCost(product, action) {
            let cartCost = localStorage.getItem('totalCost');
            if (action) {
                cartCost = parseInt(cartCost);
                localStorage.setItem("totalCost", cartCost - product.price);
            } else if (cartCost != null) {
                cartCost = parseInt(cartCost);
                localStorage.setItem('totalCost', cartCost + product.price);
            } else localStorage.setItem('totalCost', product.price);
        }
        function displayCart() {
            let cartItems = localStorage.getItem('productsInCart');
            cartItems = JSON.parse(cartItems);
            let productContainer = document.querySelector('.side-cart__products__container');
            let cartCost = localStorage.getItem('totalCost');
            if (cartItems && productContainer) {
                productContainer.innerHTML = '';
                Object.values(cartItems).map((item)=>{
                    productContainer.innerHTML += `\n                        <div class="side-cart__products">\n                        <div class="side-cart__products__product">\n                            <img src="${item.imageURL}" alt="${item.name}">\n                            <div class="side-cart__products__product__info">\n                                <h5 class="product_name" data-uqid="${item.id}">${item.name.substring(0, 20)}</h5>\n                                <div class="quantity">\n                                    <button class="minus-item decrease">-</button>\n                                    <span class="itemInCart">${item.inCart}</span>\n                                    <button class="minus-item increase">+</button>\n                                    <span class="multiplay">X</span>\n                                     <span class="side-cart__products__product__info__price">Rs.<span>${item.price}</span></span>\n                                </div>\n                            </div>\n                            <div class="side-cart__products__product__totalPrice">Rs.<span class="totalPriceItem">${item.inCart * item.price}</span></div>\n                        </div>\n                    </div>\n                        `;
                });
                productContainer.innerHTML += `\n                    <div class="side-cart__checkout">\n                        <p>Promo code can be applied on payment page</p>\n                        <button class="side-cart__checkout__button">Proceed to Checkout <span class="side-cart__checkout__totalPrice">Rs. <span>${cartCost}</span><i class="fas fa-chevron-right"></i>\n                        </button>\n                    </div>\n                    `;
                manageQuantity();
            }
        }
        function manageQuantity() {
            let decreaseButtons = document.querySelectorAll('.decrease');
            let increaseButtons = document.querySelectorAll('.increase');
            let currentQuantity = 0;
            let currentProduct = '';
            let cartItems = localStorage.getItem('productsInCart');
            cartItems = JSON.parse(cartItems);
            for(let i = 0; i < increaseButtons.length; i++){
                decreaseButtons[i].addEventListener('click', ()=>{
                    console.log(cartItems);
                    currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
                    console.log(currentQuantity);
                    currentProduct = increaseButtons[i].parentElement.parentElement.firstChild.nextSibling.dataset.uqid;
                    console.log(typeof currentProduct);
                    if (cartItems[currentProduct].inCart > 1) {
                        cartItems[currentProduct].inCart -= 1;
                        cartNumbers(cartItems[currentProduct], "decrease");
                        totalCost(cartItems[currentProduct], "decrease");
                        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                        displayCart();
                    }
                });
                increaseButtons[i].addEventListener('click', ()=>{
                    console.log(cartItems);
                    currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
                    console.log(currentQuantity);
                    currentProduct = increaseButtons[i].parentElement.parentElement.firstChild.nextSibling.dataset.uqid;
                    console.log(currentProduct);
                    cartItems[currentProduct].inCart += 1;
                    cartNumbers(cartItems[currentProduct]);
                    totalCost(cartItems[currentProduct]);
                    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                    displayCart();
                });
            }
        }
        displayCart();
        onLoadCartNumbers();
    }
}
exports.default = addToCart;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"5yyET":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function sideCart() {
    const body = document.querySelector('body');
    const cartIcon = document.querySelector('.cart');
    const cartCloseButton = document.querySelector('.side-cart__topbar__close');
    const sideCart1 = document.querySelector('.side-cart');
    if (sideCart1) {
        cartIcon.addEventListener('click', function() {
            sideCart1.classList.add('cart-active');
            body.classList.add('overflow-hidden');
        });
        cartCloseButton.addEventListener('click', function() {
            sideCart1.classList.remove('cart-active');
            body.classList.remove('overflow-hidden');
        });
    } else console.log('Cart Not Found');
}
exports.default = sideCart;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"4jS5F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function formValidation() {
    const ifFormRegister = document.querySelector('.register_form');
    const form = document.querySelector('.loginForm');
    const firstName = document.querySelector('.firstName');
    const lastName = document.querySelector('.lastName');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const password2 = document.querySelector('.password2');
    const btn = document.querySelector('.btn');
    // Show input error message
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'input-field error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }
    // Show success outline
    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'input-field success';
    }
    // Check email is valid
    function isValidEmail(email1) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email1).toLowerCase());
    }
    // Check passwords match
    function checkPasswordsMatch(input1, input2) {
        if (input1.value !== input2.value) showError(input2, 'Passwords do not match');
    }
    if (form) btn.addEventListener('click', function(e) {
        e.preventDefault();
        if (email.value == '') showError(email, 'Email is required');
        else if (!isValidEmail(email.value)) showError(email, 'Email is not valid');
        else showSuccess(email);
        if (password.value == '') showError(password, 'Password is required');
        else showSuccess(password);
    });
    if (ifFormRegister) btn.addEventListener('click', function(e) {
        e.preventDefault();
        if (firstName.value == '') showError(firstName, 'First Name is required');
        else showSuccess(firstName);
        if (lastName.value == '') showError(lastName, 'Last Name is required');
        else showSuccess(lastName);
        if (email.value == '') showError(email, 'Email is required');
        else if (!isValidEmail(email.value)) showError(email, 'Email is not valid');
        else showSuccess(email);
        if (password.value == '') showError(password, 'Password is required');
        else showSuccess(password);
        if (password2.value == '') showError(password2, 'Confirm password is required');
        else if (password.value === password2.value) showError(password2, 'Password not matched');
        else showSuccess(password2);
        checkPasswordsMatch(password, password2);
    });
}
exports.default = formValidation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"6mLAx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function homePage() {
    const homepage = document.querySelector('.homepage');
    if (homepage) {
        async function homePageSections() {
            const categorySection = document.querySelector('.section__slider');
            try {
                await fetch('http://localhost:5000/categories').then((response)=>response.json()
                ).then((data)=>obj = data
                ).then((obj)=>obj.map((productsCategories)=>{
                        const getProductsCategories = `\n                        <div class="section__main">\n                        <div class="col-left">\n                            <img src="${productsCategories.imageUrl}" alt="Fruits">\n                        </div>\n                        <div class="col-right">\n                            <h4>${productsCategories.name}</h4>\n                            <p>${productsCategories.description}</p>\n                            <a href="./pages/products.html" class="btn-primary">Explore ${productsCategories.name}</a>\n                        </div>\n                        </div>\n                        `;
                        categorySection.insertAdjacentHTML('afterend', getProductsCategories);
                    })
                );
            } catch (error) {
                console.log(error);
            }
        }
        homePageSections();
    }
}
exports.default = homePage;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}]},["45BXQ","3iimy"], "3iimy", "parcelRequire921e")

//# sourceMappingURL=index.8d7130a5.js.map

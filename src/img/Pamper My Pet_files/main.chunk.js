(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./img/Shopping-dog.jpg */ "./src/img/Shopping-dog.jpg"));

// Module
exports.push([module.i, "\n.App {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.App h1 {\n  color:#0384DF;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-size: auto;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: #333333;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n\n.featurenotify {\n  max-width: 50%;\n  object-fit: cover;\n  border: 6px solid #920f00;\n}\n\n.thumb {\n  object-fit: cover;\n  height: 150px;\n  width: 150px;\n}\n\n.currstatus {\n  object-fit: cover;\n  height: 300px;\n  width: 250px;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n}\n\n/*\n.navbar {\n  overflow: hidden;\n  background-color: #333;\n}\n\n.navbar a {\n  float: left;\n  font-size: 16px;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n.subnav {\n  float: left;\n  overflow: hidden;\n}\n\n.subnav .subnavbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0;\n}\n\n.navbar a:hover, .subnav:hover .subnavbtn {\n  background-color: red;\n}\n\n.subnav-content {\n  display: none;\n  position: absolute;\n  left: 0;\n  background-color: red;\n  width: 100%;\n  z-index: 1;\n}\n\n.subnav-content a {\n  float: left;\n  color: white;\n  text-decoration: none;\n}\n\n.subnav-content a:hover {\n  background-color: #eee;\n  color: black;\n}\n\n.subnav:hover .subnav-content {\n  display: block;\n}\n*/\n\n\n.btn-outline-info, .btn-outline-dark {\n  position: absolute;\n  left: 0;\n  margin: 2rem;\n  width: 17rem;\n}\n\n\n.label {\n  color: #000;\n  margin-left: 1rem;\n  padding: 0.5rem;\n  font-weight: 500;\n  font-size: 1.3rem;\n\n}\n\n.heading {\ncolor:#0384DF;\ntext-transform: uppercase;\n\n-webkit-backface-visibility: hidden;\n\n        backface-visibility: hidden;\nmargin-bottom: 2rem;\ndisplay: block;\nfont-size: 2rem;\nfont-weight: 400;\nletter-spacing: .5rem;\nanimation-name: moveInLeft;\nanimation-duration: 1.5s;\nanimation-timing-function: ease-out;\ntext-align: center;\n}\n\n@keyframes moveInLeft{\n    0%{\n        opacity: 0;\n        transform: translate(-10rem);\n    }\n    80%{\n        transform: translate(2rem);\n    }\n    100%{\n        opacity: 1;\n        transform: translate(0);\n    }\n}\n.item-container{\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* grid-template-rows: 1fr 1fr; */\n  grid-gap: 2rem;\n}\n\n.item1{\n  grid-row: 1 / 4;\n  grid-column: 1 / 2;\n\n\n}\n.item2{\n  grid-row: 2 / 3;\n  grid-column: 2 / 4;\n}\n.item3{\n  grid-row: 1 / 2;\n  margin-top: 2rem;\n  grid-column: 1 / 3;\n}\n\n.item-image{\n  width: 500px;\n  height: 500px;\n  margin-left: 4rem;\n  margin-top: 5rem;\n\n}\n\n.product-option{\n  width: 10rem;\n}\n\n.newProd-container {\n  position: relative;\n  width: 100%;\n  /* height: 100%; */\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* grid-template-rows: 1fr 1fr; */\n  grid-gap: 2rem;\n}\n\n.checkout {\n  padding: 1em;\n\n}\n.checkout h1 {\n  text-align: center;\n  color: #333333;\n}\n.checkout table, #no-item {\n  font-size: 20px;\n  color: #0384DF;\n}\n\n.checkout th, td, #no-item {\n  text-align: center;\n  padding: 1em;\n}\n\n#total {\n  text-align: left;\n}\n\n#pay {\n  margin: 1em;\n  margin-left: 50px;\n  padding: 10px;\n\n}\n\n.editform h1 {\n  text-align: center;\n  color: #0384DF;\n}\n.editform form {\n  text-align: center;\n  font-size: 20px;\n  color: #333333;\n  margin: 1em;\n}\n\n.editform label {\n  text-align: left;\n  padding: 1em;\n  font-weight: bold;\n}\n\n.App-header button, .alter {\n  color: white;\n  margin-top: 27px;\n  background-color: #0384DF;\n}\n\n.App-header button:hover, .alter:hover {\n  background-color: #FE585C;\n}\n\n.App-header h1 {\n  color: #0384DF;\n}\n\n.favicon {\n  border-radius: 5px;\n}\n.favicon:hover {\n  background-color: silver;\n}\n\n.example {\n  text-align: center;\n  margin: 1em;\n}\n\n.example h1 {\n  color: #0384DF;\n}\n\n.checkout p {\n  font-size: 20px;\n}\n\n.checkout button:hover {\n  background-color: #333333;\n  color: silver;\n  transition: 0.5s all;\n}\n\n.checkout button {\n  padding: 10px;\n  width: 100px;\n}\n\n/* another version of nav bar\n\n#main_nav ul {\n  background: white;\n  float: left;\n  -webkit-transition: .5s;\n  transition: .5s;\n}\n\n#main_nav li {\n  float: left;\n  position: relative;\n  width: 150px;\n  list-style: none;\n  -webkit-transition: .5s;\n  transition: .5s;\n}\n\n#main_nav > ul > li > a, h1 {\n  text-transform: uppercase;\n}\n\n#main_nav a {\n  display: block;\n  text-decoration: none;\n  padding: 5px 15px;\n  color: #000;\n}\n\n#main_nav ul ul {\n  position: absolute;\n  left: 0;\n  top: 100%;\n  visibility: hidden;\n  opacity: 0;\n}\n\n#main_nav ul ul ul {\n  left: 100%;\n  top: 0;\n}\n\n#main_nav li:hover, #main_nav li:hover li {\n  background: #ddd;\n}\n\n#main_nav li li:hover, #main_nav li li:hover li {\n  background: #bbb;\n}\n\n#main_nav li li li:hover {\n  background: #999;\n}\n\n#main_nav li:hover > ul {\n  visibility: visible;\n  opacity: 1;\n}\n\n end nav bar */\n\n .third-level-menu\n {\n     position: absolute;\n     top: 0;\n     right: -150px;\n     width: 150px;\n     list-style: none;\n     padding: 0;\n     margin: 0;\n     display: none;\n }\n\n .third-level-menu > li\n {\n     height: 30px;\n     background: #999999;\n }\n .third-level-menu > li:hover { background: #CCCCCC; }\n\n .second-level-menu\n {\n     position: absolute;\n     top: 30px;\n     left: 0;\n     width: 150px;\n     list-style: none;\n     padding: 0;\n     margin: 0;\n     display: none;\n }\n\n .second-level-menu > li\n {\n     position: relative;\n     height: 30px;\n     background: #999999;\n }\n .second-level-menu > li:hover { background: #CCCCCC; }\n\n .top-level-menu\n {\n     list-style: none;\n     padding: 0;\n     margin: 0;\n }\n\n .top-level-menu > li\n {\n     position: relative;\n     float: left;\n     height: 30px;\n     width: 150px;\n     background: #999999;\n }\n .top-level-menu > li:hover { background: #CCCCCC; }\n\n .top-level-menu li:hover > ul\n {\n     /* On hover, display the next level's menu */\n     display: inline;\n }\n\n .top-level-menu-cat > li\n {\n     position: relative;\n     float: left;\n     height: 30px;\n     width: 150px;\n     background: #999999;\n }\n .top-level-menu-cat > li:hover { background: #CCCCCC; }\n\n .top-level-menu-cat li:hover > ul\n {\n     /* On hover, display the next level's menu */\n     display: inline;\n }\n\n /* Menu Link Styles */\n\n .top-level-menu a /* Apply to all links inside the multi-level menu */\n {\n     font: bold 20px Arial, Helvetica, sans-serif;\n     color: #FFFFFF;\n     text-decoration: none;\n     padding: 0 0 0 10px;\n\n     /* Make the link cover the entire list item-container */\n     display: block;\n     line-height: 30px;\n }\n\n .top-level-menu a:hover { color: #000000; }\n\n\n .top-level-menu-cat a /* Apply to all links inside the multi-level menu */\n {\n     font: bold 20px Arial, Helvetica, sans-serif;\n     color: #FFFFFF;\n     text-decoration: none;\n     padding: 0 0 0 10px;\n\n     /* Make the link cover the entire list item-container */\n     display: block;\n     line-height: 30px;\n }\n\n .top-level-menu-cat a:hover { color: #000000; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Products */ "./src/components/Products.js");
/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Item */ "./src/components/Item.js");
/* harmony import */ var _components_Checkout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Checkout.js */ "./src/components/Checkout.js");
/* harmony import */ var _components_Login_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Login.js */ "./src/components/Login.js");
/* harmony import */ var _components_Logout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Logout.js */ "./src/components/Logout.js");
/* harmony import */ var _components_SignUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SignUp */ "./src/components/SignUp.js");
/* harmony import */ var _components_Order_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Order.js */ "./src/components/Order.js");
/* harmony import */ var _components_Payment_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Payment.js */ "./src/components/Payment.js");
/* harmony import */ var _components_NewProducts_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/NewProducts.js */ "./src/components/NewProducts.js");
/* harmony import */ var _components_EditProduct_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/EditProduct.js */ "./src/components/EditProduct.js");
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/Routes.js";













const Routes = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/",
  component: _components_Home__WEBPACK_IMPORTED_MODULE_2__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/signup",
  component: _components_SignUp__WEBPACK_IMPORTED_MODULE_8__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/products",
  component: _components_Products__WEBPACK_IMPORTED_MODULE_3__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/products/:pet/:category",
  component: _components_Products__WEBPACK_IMPORTED_MODULE_3__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/product/:id",
  component: _components_Item__WEBPACK_IMPORTED_MODULE_4__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/checkout",
  component: _components_Checkout_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/logout",
  component: _components_Logout_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/login",
  component: _components_Login_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/home",
  component: _components_Home__WEBPACK_IMPORTED_MODULE_2__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/orders",
  component: _components_Order_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/newproducts",
  component: _components_NewProducts_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/editproduct/:id",
  component: _components_EditProduct_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/payment",
  component: _components_Payment_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
})));
/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./src/components/AddToCart.js":
/*!*************************************!*\
  !*** ./src/components/AddToCart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile */ "./src/components/UserProfile.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



const AddToCart = function () {
  let cart = [];
  let order_id = 0;
  const userId = _UserProfile__WEBPACK_IMPORTED_MODULE_0__["default"].getUserId();
  const URL = "https://pamper-my-pet.herokuapp.com/orders.json";
  let temp = null;

  const getCart = function () {
    if (typeof Storage !== "undefined") {
      temp = localStorage.getItem('cart');

      if (temp !== null) {
        console.log("getCart 1");
        cart = JSON.parse(temp); // if (emptyCart()) {
        //   return axios.get(URL).then((results) => {
        //       const index = results.data.findIndex((item) => item.user_id === userId && item.status === 'Open');
        //
        //       if (index >= 0)
        //       {
        //         this.setState({order_id: results.data[index].id});
        //         AddToCart.setOrderId(this.state.order_id);
        //       } else {
        //         this.createOrder();
        //       }
        //     }
        //   });
        // }
      }

      if (temp === null || cart === null) {
        cart = [];
        console.log("getCart == " + cart);
        return cart;
      }
    }
  };

  const getCartItems = function () {
    let cart = getCart();

    if (cart === null) {
      cart = [];
    }

    return cart.length;
  };

  const setCart = function (product_id, name, image, price, quantity, order_item_id) {
    console.log('addtocart order_item_id = ', order_item_id);

    if (product_id !== null && quantity !== null && name !== null && quantity !== null && order_item_id !== null) {
      console.log("setCart 1"); // Update product quantity in cart if product already exists

      if (cart !== null && cart.some(item => product_id === item.id)) {
        console.log("setCart 2");
        const productIndex = cart.findIndex(item => product_id === item.id);
        cart[productIndex].quantity += quantity;
        console.log('Updated cart', cart);

        if (typeof Storage !== "undefined") {
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      } else {
        console.log("setCart 3"); // IF product does not exist in cart then add in Cart

        addInCart(product_id, name, image, price, quantity, order_item_id);
      }
    }
  };

  const addInCart = function (product_id, name, image, price, quantity, order_item_id) {
    if (product_id !== null && quantity !== null && name !== null && quantity !== null && order_item_id !== null) {
      console.log("setCart 4");
      const product = {
        id: product_id,
        name: name,
        image: image,
        price: price,
        quantity: quantity,
        order_item_id: order_item_id
      };
      const cart = getCart();

      if (cart === null) {
        cart = [];
      }

      cart.push(product);

      if (typeof Storage !== "undefined") {
        localStorage.setItem('cart', JSON.stringify(cart));
      }

      console.log("setCart 5"); //console.log('cart', cart);
    }
  };

  const emptyCart = function () {
    if (typeof Storage !== "undefined") {
      localStorage.setItem('cart', null);
    }
  };

  const finalizeCart = function () {
    console.log('final cart');
  };

  const getOrderId = function () {
    if (typeof Storage !== "undefined") {
      let temp = localStorage.getItem('order_id');

      if (temp != null) {
        order_id = temp;
      }
    }

    return order_id;
  };

  const setOrderId = function (n) {
    if (n != null) {
      order_id = n;

      if (typeof Storage !== "undefined") {
        localStorage.setItem('order_id', order_id);
      }
    }
  };

  const removeFromCart = function (order_item_id) {
    let indexToDelete = -1;
    const cart = getCart();
    console.log("before" + cart);

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].order_item_id === order_item_id) {
        indexToDelete = i;
        break;
      }
    }

    cart.splice(indexToDelete, 1);
    console.log("after" + cart);
  };

  const replaceCart = function (c) {
    cart = c;

    if (typeof Storage !== "undefined") {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  return {
    replaceCart: replaceCart,
    getOrderId: getOrderId,
    setOrderId: setOrderId,
    getCart: getCart,
    setCart: setCart,
    emptyCart: emptyCart,
    finalizeCart: finalizeCart,
    getCartItems: getCartItems,
    removeFromCart: removeFromCart
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (AddToCart);

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.js */ "./src/components/Home.js");
/* harmony import */ var _Nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav.js */ "./src/components/Nav.js");
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.js */ "./src/components/Footer.js");
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/components/App.js";





function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Checkout.js":
/*!************************************!*\
  !*** ./src/components/Checkout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav.js */ "./src/components/Nav.js");
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.js */ "./src/components/Footer.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserProfile */ "./src/components/UserProfile.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddToCart */ "./src/components/AddToCart.js");
/* harmony import */ var _Payment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Payment */ "./src/components/Payment.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/components/Checkout.js";













class Checkout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [],
      total: 0
    };
    this.displayAfterRemove = this.displayAfterRemove.bind(this);
    this.renderCartItems = this.renderCartItems.bind(this);
  }

  displayAfterRemove(cart) {
    //this.setState()
    console.log("should redisplay");
    this.renderCartItems();
  }
  /*
  _removeHandler(e) {
    const oid = e.target.id;
   const url = "https://pamper-my-pet.herokuapp.com/order_items/" + oid + ".json";
    console.log("oid to delete=" + oid)
     AddToCart.removeFromCart(oid);
     axios.delete(url).then((res) => {
      //post
    });
  }*/

  /*  renderEmptyCart() {
      return (
        <div>
          No items in your cart.
        </div>
      );
    }
  
    renderItems(cart) {
      console.log("renderCartItems cart now");
      for ( let y=0; y<cart.length; y++ ) {
        console.log(cart[y]);
        console.log(cart[y].image);
      }
      cart.map( (c) => console.log(c) );
  
      return (
        <div>
        {
          cart.map( (c) =>
          <div>
            <img src={c.image}/>
            <p><strong>Name:</strong> {c.name}</p>
            <p><strong>Price:</strong> AUD {c.price}</p>
            <p><strong>Quantity:</strong> { c.quantity}</p>
            <p><strong>Total Price: </strong> AUD {c.price * c.quantity}</p>
            <p>{c.order_item_id}</p>
            <p>
            <Link to={"/product/" + c.id} ><span><button>Edit</button></span></Link>
            <span><button onClick={this._removeHandler} id={c.order_item_id}>Remove</button></span>
            </p>
          </div>
        )}
        </div>
      );
    }
  
    grandTotal() {
      const total = AddToCart.getCart();
      if (total !== null) {
        let values = [];
  
        total.map( (t) =>
          values.push(t.price * t.quantity)
        )
        console.log(values)
        const add = (a, b) =>
        a + b
        const final = values.reduce(add)
        return (
          <p><strong>Grand Total:
          AUD {
            final
          }
          </strong></p>
        );
      }
    }*/


  renderCartItems() {
    const userId = _UserProfile__WEBPACK_IMPORTED_MODULE_4__["default"].getUserId();
    let cart = _AddToCart__WEBPACK_IMPORTED_MODULE_5__["default"].getCart();
    const ordersUrl = "https://pamper-my-pet.herokuapp.com/orders.json";
    const orderItemsUrl = "https://pamper-my-pet.herokuapp.com/order_items.json"; //console.log('Cart', cart);

    if (cart === null || cart === undefined) {
      cart = [];
    } ////


    if (cart.length === 0) {
      //empty
      console.log("renderCartItems 0");
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(ordersUrl).then(results => {
        console.log("renderCartItems 1");
        const index = results.data.findIndex(item => item.user_id === userId && item.status === 'Open');

        if (index >= 0) {
          console.log("renderCartItems 2");
          const orderId = results.data[index].id;
          console.log('aasdfasdas=', orderId);
          _AddToCart__WEBPACK_IMPORTED_MODULE_5__["default"].setOrderId(orderId);
          axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(orderItemsUrl).then(results => {
            console.log('rfr', results.data);
            const filteredArray = results.data.filter(item => item.order_id === orderId);
            console.log('filteredArray', filteredArray);

            for (let y = 0; y < filteredArray.length; y++) {
              const oi = filteredArray[y];
              console.log(oi.product_id);
              /*const product = {
                id: oi.product_id,
                name: "BLAH",
                image: "https://www.fillmurray.com/200/300",
                price: 5,
                quantity: oi.quantity,
                order_item_id: oi.id
              };*/

              cart.push({
                id: oi.product_id,
                name: "BLAH",
                image: "https://www.fillmurray.com/200/300",
                price: 5,
                quantity: oi.quantity,
                order_item_id: oi.id
              });
            }

            console.log("renderCartItems 3");
            console.log("rcart" + cart); // if (filteredArray >= 0) {
            //
            //   }

            /*const product = {
              id: 111,
              name: "BLAH",
              image: "https://www.fillmurray.com/200/300",
              price: 123,
              quantity: 31,
              order_item_id: 11
            };*/
            //const ccc = [];
            //ccc.push(product);
            //return ccc;
          }).then(() => {
            return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://pamper-my-pet.herokuapp.com/products.json").then(results => {
              const p = results.data;

              for (let y = 0; y < cart.length; y++) {
                for (let z = 0; z < p.length; z++) {
                  if (cart[y].id === p[z].id) {
                    cart[y].image = p[z].image;
                    cart[y].price = p[z].price;
                    cart[y].name = p[z].name;
                  }
                }
              }
            });
          }).then(() => {
            _AddToCart__WEBPACK_IMPORTED_MODULE_5__["default"].replaceCart(cart);
            console.log("rcioio art = " + _AddToCart__WEBPACK_IMPORTED_MODULE_5__["default"].getCart());
            console.log("renderCartItems 32");
            this.setState({
              shoppingList: cart
            }); //console.log("rcioio arty" + this.state.cart);

            /*if (cart !== null) {
              console.log("renderCartItems 33");
              this.renderItems(cart);
              //return (<div>TEST</div>);
            } else {
              console.log("renderCartItems 34");
              this.renderEmptyCart();
              //return (<div>TEST2</div>);
            }*/

            let values = [];
            cart.map(t => values.push(t.price * t.quantity));

            if (values.length > 0) {
              console.log(values);

              const add = (a, b) => a + b;

              const final = values.reduce(add);
              console.log("grandtotal = " + final);
              this.setState({
                total: final
              });
            }
          });
        }
      });
    } else {
      //if cart is not empty
      this.setState({
        shoppingList: cart
      });
      let values = [];
      cart.map(t => values.push(t.price * t.quantity));
      console.log(values);

      const add = (a, b) => a + b;

      const final = values.reduce(add);
      console.log("grandtotal = " + final);
      this.setState({
        total: final
      });
    } ////

    /*console.log("renderCartItems 32");
    if (cart !== null) {
      console.log("renderCartItems 33");
      this.renderItems(cart);
    } else {
      console.log("renderCartItems 34");
      this.renderEmptyCart();
    }*/
    //return cart !== null ? this.renderItems(cart) : this.renderEmptyCart();

  }

  componentDidMount() {
    console.log("show");
    this.renderCartItems();
  }

  render() {
    /*const cart = AddToCart.getCart();
    console.log("yey cart now");
    for ( let y=0; y<cart.length; y++ ) {
      console.log(cart[y]);
      console.log(cart[y].image);
    }*/
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "checkout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }, "Your Order Details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DisplayCart, {
      cart: this.state.shoppingList,
      total: this.state.total,
      onSubmit: this.displayAfterRemove,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }));
  }

}

class DisplayCart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this._removeHandler = this._removeHandler.bind(this);
  }

  _removeHandler(e) {
    const oid = e.target.id;
    const url = "https://pamper-my-pet.herokuapp.com/order_items/" + oid + ".json";
    console.log("oid to delete=" + oid); //AddToCart.removeFromCart(oid);

    let indexToDelete = -1;
    let cart = []; //AddToCart.getCart();

    const promise = new Promise((resolve, reject) => {
      cart = _AddToCart__WEBPACK_IMPORTED_MODULE_5__["default"].getCart();

      if (cart === null || cart === undefined) {
        console.log("0");
        cart = this.props.cart;
      }

      if (cart === null || cart === undefined) {
        console.log("1");
        cart = [];
      }

      if (cart.length > 0) {
        console.log(cart.length);

        for (let i = 0; i < cart.length; i++) {
          console.log(cart[i].order_item_id);

          if (parseInt(cart[i].order_item_id) === parseInt(oid)) {
            console.log("index to delete == " + i);
            indexToDelete = i;
            break;
          }
        }

        console.log("index to delete == " + indexToDelete);
      }

      console.log("2");

      if (indexToDelete > -1) {
        console.log("4");
        cart.splice(indexToDelete, 1);
        _AddToCart__WEBPACK_IMPORTED_MODULE_5__["default"].replaceCart(cart);
        axios__WEBPACK_IMPORTED_MODULE_7___default.a.delete(url).then(res => {
          //post
          this.props.onSubmit(cart);
        });
      }
    });
    promise.then(res => {
      console.log("3");
    }).catch(err => {
      console.log("error with promise = " + err);
    });
    /*let indexToDelete = -1;
    const cart = AddToCart.getCart();
    //console.log("before");
    //console.log(Object.values(cart));
     console.log("index to delete == " + indexToDelete);
     if(indexToDelete> -1) {
      cart.splice(indexToDelete, 1);
      AddToCart.replaceCart(cart);
       axios.delete(url).then((res) => {
        //post
        this.props.onSubmit(cart);
      });
    }
    console.log("after");
    console.log(Object.values(cart));*/
  } //# {c.order_item_id}


  render() {
    console.log("DisplayCart = " + this.props.cart);
    const cart = this.props.cart;

    if (cart.length === 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "no-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "No items in your cart.");
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "checkout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, "Product"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, "ID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, "Unit Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, "Quantity"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "Total Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, "\xA0"), cart.map(c => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        key: c.id + 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: c.id + 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        key: c.id + 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: c.image,
        className: "thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        key: c.id + 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, "#", c.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        key: c.id + 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, c.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        key: c.id + 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, "AUD ", c.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        key: c.id + 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, c.quantity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        key: c.id + 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, "AUD ", c.price * c.quantity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        key: c.id + 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/product/" + c.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "favicon fa fa-edit fa-2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        key: c.id + 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "favicon fa fa-trash fa-2x",
        onClick: this._removeHandler,
        id: c.order_item_id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: 7,
        id: "total",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, "Grand Total AUD ", this.props.total)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/payment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "pay",
        className: "btn btn-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, "Pay Now"))));
    }
  }

}
/*
class PaymentForm extends Component {
  render() {
    return (
      <div>
      <h2>Fill out the Payment details</h2>
      <form>
      <label>Card Number:</label>
      <input type="number"/>
      <label>Expiry date:</label>
      <input type="date"/>
      <button type="submit">Pay Now!</button>
      </form>
      </div>
    )
  }
}*/


/* harmony default export */ __webpack_exports__["default"] = (Checkout);
/*
const userId = UserProfile.getUserId();
  const ordersUrl = "https://pamper-my-pet.herokuapp.com/orders.json";
  const orderItemsUrl = "https://pamper-my-pet.herokuapp.com/order_items.json";

  const getCart = function() {
    console.log('In get cart');
    if (typeof (Storage) !== "undefined") {
      let temp = localStorage.getItem('cart');
      if (temp !== 'null') {
        console.log('CART NOT NULL', temp);
        cart = JSON.parse(temp);
        return cart;
      } else {
        console.log('CArt is null');
        return axios.get(ordersUrl).then((results) => {
          const index = results.data.findIndex((item) => item.user_id === userId && item.status === 'Open');
          if (index >= 0) {
            const orderId = results.data[index].id;
            console.log('aasdfasdas', orderId)
            AddToCart.setOrderId(orderId);
            return axios.get(orderItemsUrl).then((results) => {
              console.log('rfr', results.data);
              const filteredArray = results.data.filter((item) => item.order_id === orderId);
              console.log('filteredArray', filteredArray);
              // if (filteredArray >= 0) {
              //
              //   }
              const product = {
                id: 111,
                name: 'BLAH',
                image: 'https://cdn.vox-cdn.com/thumbor/H-L1zDOm2T75rq4qDxSXdSVRbIc=/0x0:1215x717/1200x800/filters:focal(582x94:776x288)/cdn.vox-cdn.com/uploads/chorus_image/image/59882547/taric_master_yi.0.png',
                price: 123,
                quantity: 31,
                order_item_id: 11
              };
              const ccc = [];
              ccc.push(product);
              return ccc;
            });
            // get order items - pass order id
            // and set cart ---- cart = order items with product id, quantity blah blah
            // and return the cart items
          }
        });
        cart=[]
      }
    }
    console.log("getCart ==" + cart)
    return cart;
  };
*/

/***/ }),

/***/ "./src/components/CheckoutForm.js":
/*!****************************************!*\
  !*** ./src/components/CheckoutForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-stripe-elements */ "./node_modules/react-stripe-elements/es/index.js");
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddToCart */ "./src/components/AddToCart.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserProfile */ "./src/components/UserProfile.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/components/CheckoutForm.js";






class CheckoutForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      didsplayErr: false
    };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    const stripeserver = "https://pamper-my-pet.herokuapp.com/orders/"; //const stripeserver = "http://localhost:3000/orders";

    let _ref = await this.props.stripe.createToken({
      name: "Name"
    }),
        token = _ref.token;

    console.log(token); //console.log("token id = " + token.id);

    let response = "";
    const userId = _UserProfile__WEBPACK_IMPORTED_MODULE_3__["default"].getUserId();
    const orderId = _AddToCart__WEBPACK_IMPORTED_MODULE_2__["default"].getOrderId();
    const em = _UserProfile__WEBPACK_IMPORTED_MODULE_3__["default"].getEmail();
    /*let resp = await fetch( "/charge", {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: tok.id
      });*/

    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(stripeserver + "/charge", {
      token: token,
      user_id: userId,
      order_id: orderId,
      email: em
    }).then(result => {
      console.log(result);
      console.log(result.data);
      console.log(result.statusText);

      if (result.statusText === "OK") {
        response = "OK";
        console.log("Purchase Complete!");
        this.setState({
          complete: true
        });
        console.log("payment order_id = " + orderId);
        _AddToCart__WEBPACK_IMPORTED_MODULE_2__["default"].emptyCart();
        const url = "https://pamper-my-pet.herokuapp.com/orders/" + orderId + ".json";
        console.log("Order ID = " + orderId + ", set to Completed."); //update to "Completed"

        axios__WEBPACK_IMPORTED_MODULE_4___default.a.put(url, {
          status: 'Completed'
        }).then(result => {});
      } else {
        this.setState({
          didsplayErr: true
        });
      }
    });
    /*console.log(resp);
     if (resp.ok) {
      //response = "OK";
    }*/

    /*if (response==="OK") {
        console.log("Purchase Complete!")
        this.setState({complete: true});
        console.log("payment order_id = " + orderId);
        AddToCart.emptyCart();
         const url = "https://pamper-my-pet.herokuapp.com/orders/" + orderId + ".json";
        console.log("Order ID = " + orderId + ", set to Completed.")
        //update to "Completed"
        axios.put(url, { status: 'Completed' }).then((result) => {});
    } else {
      this.setState({didsplayErr: true});
    } */
  }

  render() {
    if (this.state.complete) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Purchase Complete. Shop More, we have other amazing products.");
    } else if (this.state.didsplayErr === true) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Purchase Cannot Be Completed At This Time. Try Again After A Few Seconds.");
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "checkout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Enter Card Details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        borderRadius: '0.5em',
        height: '100px',
        padding: '50px',
        border: '3px solid orange',
        marginTop: '10px',
        marginBottom: '30px',
        marginRight: '350px',
        marginLeft: '350px',
        backgroundColor: 'aliceblue'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__["CardElement"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.submit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Send"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__["injectStripe"])(CheckoutForm));
/*
style={{borderRadius: '0.5em', height: '100px', padding: '50px', border: '3px solid orange', marginTop: '10px', marginBottom: '30px', marginRight: '350px', marginLeft: '350px', backgroundColor: 'aliceblue' }} 

border-radius: 0.5em; height: 100px; padding: 50px; border: 3px solid orange; margin-top: 10px; margin-bottom: 30px; margin-right: 350px; margin-left: 350px; background-color: aliceblue;
*/

/***/ }),

/***/ "./src/components/EditProduct.js":
/*!***************************************!*\
  !*** ./src/components/EditProduct.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserProfile */ "./src/components/UserProfile.js");
/* harmony import */ var _Nav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav.js */ "./src/components/Nav.js");
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer.js */ "./src/components/Footer.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/components/EditProduct.js";









class EditProduct extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      edit_pro: []
    };
    this.updateProduct = this.updateProduct.bind(this);
    const pro_id = this.props.match.params.id;
    const URL = "https://pamper-my-pet.herokuapp.com/products/" + pro_id + ".json";

    const fetchValues = () => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(URL).then(results => {
        console.table(results.data);
        this.setState({
          edit_pro: results.data
        });
        console.log(this.state.edit_pro); //setTimeout(fetchPlanes, 4000);
      });
    };

    fetchValues();
  }

  updateProduct(name, image, description, size, color, price, stock, category, pettype) {
    const pro_id = this.props.match.params.id;
    const URL = "https://pamper-my-pet.herokuapp.com/products/" + pro_id + ".json";
    console.log(URL);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(URL, {
      name: name,
      image: image,
      description: description,
      size: size,
      color: color,
      price: price,
      stock: stock,
      classification: category,
      pet_type: pettype
    }).then(result => {
      this.setState({
        edit_prod: result.data
      });
      console.log(result.data);
    });
    const urlback = "/product/" + pro_id;
    this.props.history.push(urlback);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "editform",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Edit Product"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EditForm, {
      edit_pro: this.state.edit_pro,
      onSubmit: this.updateProduct,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }));
  }

}

;

class EditForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      description: '',
      size: '',
      color: '',
      price: 0,
      stock: 0,
      category: '',
      pettype: ''
    };
    this._handleChangeCategory = this._handleChangeCategory.bind(this);
    this._handleChangePetType = this._handleChangePetType.bind(this);
    this._handleChangeName = this._handleChangeName.bind(this);
    this._handleInputImage = this._handleInputImage.bind(this);
    this._handleInputDescription = this._handleInputDescription.bind(this);
    this._handleInputPrice = this._handleInputPrice.bind(this);
    this._handleInputColor = this._handleInputColor.bind(this);
    this._handleInputSize = this._handleInputSize.bind(this);
    this._handleInputStock = this._handleInputStock.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: this.props.edit_pro.name
    });
    this.setState({
      image: this.props.edit_pro.image
    });
    this.setState({
      description: this.props.edit_pro.description
    });
    this.setState({
      size: this.props.edit_pro.size
    });
    this.setState({
      color: this.props.edit_pro.color
    });
    this.setState({
      price: this.props.edit_pro.price
    });
    this.setState({
      stock: this.props.edit_pro.stock
    });
    this.setState({
      category: this.props.edit_pro.classification
    });
    this.setState({
      pettype: this.props.edit_pro.pet_type
    });
  }

  _handleChangeCategory(event) {
    this.setState({
      category: event.target.value
    }); //console.log(this.state.category);
  }

  _handleChangePetType(event) {
    this.setState({
      pettype: event.target.value
    }); //console.log(this.state.pettype);
  }

  _handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  _handleInputImage(event) {
    this.setState({
      image: event.target.value
    });
  }

  _handleInputDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  _handleInputPrice(event) {
    this.setState({
      price: parseInt(event.target.value)
    });
    console.log(this.state.price);
  }

  _handleInputColor(event) {
    this.setState({
      color: event.target.value
    });
  }

  _handleInputSize(event) {
    this.setState({
      size: event.target.value
    });
  }

  _handleInputStock(event) {
    this.setState({
      stock: parseInt(event.target.value)
    });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.image, this.state.description, this.state.size, this.state.color, this.state.price, this.state.stock, this.state.category, this.state.pettype);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "editform",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this._handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      defaultValue: this.props.edit_pro.name,
      onChange: this._handleChangeName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, "Image"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      defaultValue: this.props.edit_pro.image,
      onInput: this._handleInputImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, "Details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      defaultValue: this.props.edit_pro.description,
      onInput: this._handleInputDescription,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, "Size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      defaultValue: this.props.edit_pro.size,
      onInput: this._handleInputSize,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, "Color"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      defaultValue: this.props.edit_pro.color,
      onInput: this._handleInputColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      defaultValue: this.props.edit_pro.price,
      onChange: this._handleInputPrice,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, "Stock"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      defaultValue: this.props.edit_pro.stock,
      onInput: this._handleInputStock,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "Category:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      defaultValue: this.props.edit_pro.classification,
      onChange: this._handleChangeCategory,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, "Clothing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, "Accessories"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "Toys")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, "Pet Type:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      defaultValue: this.props.edit_pro.pet_type,
      onChange: this._handleChangePetType,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, "Dog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "Cat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, "Fish")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "alter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, "Edit Item")));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (EditProduct);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/components/Footer.js";



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Footer coming soon"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Nav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav.js */ "./src/components/Nav.js");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-alice-carousel */ "./node_modules/react-alice-carousel/lib/react-alice-carousel.js");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ "./node_modules/react-alice-carousel/lib/alice-carousel.css");
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer.js */ "./src/components/Footer.js");
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/components/Home.js";








const FEATURECT = 5;

class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      featuredproducts: [] //pick random products

    };

    const fetchFeatured = () => {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://pamper-my-pet.herokuapp.com/products.json").then(results => {
        //console.log("axios call=" + results.data);
        const allproducts = results.data;
        const randIndexArray = [];
        const featured = [];

        if (allproducts < 3) {
          featured = allproducts;
        } else {
          //pick random
          for (let y = 0; y < FEATURECT; y++) {
            let tempInd = 0;

            do {
              tempInd = Math.floor(Math.random() * allproducts.length);
            } while (randIndexArray.includes(tempInd) === true);

            randIndexArray[y] = tempInd;
          } //populate frestured


          for (let y = 0; y < FEATURECT; y++) {
            const ridx = randIndexArray[y];
            featured[y] = allproducts[ridx];
          }
        }

        this.setState({
          featuredproducts: featured
        });
        setTimeout(fetchFeatured, 10000);
      });
    };

    fetchFeatured();
  } //constructor


  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Pamper My Pet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        backgroundColor: 'aliceblue'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DisplayFeatured, {
      featured: this.state.featuredproducts,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }));
  }

}

class DisplayFeatured extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.responsive = {
      0: {
        items: 1
      },
      1024: {
        items: 2
      }
    };
    this.state = {
      galleryItems: [] //[1, 2, 3].map((i) => (<h2 key={i}>{i}</h2>)),

    };

    const setupProducts = () => {
      const products = this.props.featured; //console.log("setupProducts props=" + products);

      const newp = products.map(urpl => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/product/" + urpl.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: urpl.image,
        alt: urpl.name,
        style: {
          marginTop: '70px'
        },
        class: "featurenotify",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }))); //console.log("formatted = " + newp);

      this.setState({
        galleryItems: newp
      }); //console.log("state= " + this.state.galleryItems);

      setTimeout(setupProducts, 5000);
    }; //console.log("props=" + this.props);


    setupProducts();
  } //constructor


  onSlideChange(e) {//console.debug('Item`s position during a change: ', e.item)
    //console.debug('Slide`s position during a change: ', e.slide)
  }

  onSlideChanged(e) {//console.debug('Item`s position after changes: ', e.item)
    //console.debug('Slide`s position after changes: ', e.slide)
  }

  render() {
    //console.log("render props=" + this.props);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_alice_carousel__WEBPACK_IMPORTED_MODULE_5___default.a, {
      items: this.state.galleryItems,
      responsive: this.responsive,
      autoPlayInterval: 2000,
      autoPlayDirection: "rtl",
      autoPlay: true,
      fadeOutAnimation: true,
      mouseDragEnabled: true,
      playButtonEnabled: true,
      disableAutoPlayOnAction: true,
      onSlideChange: this.onSlideChange,
      onSlideChanged: this.onSlideChanged,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Item.js":
/*!********************************!*\
  !*** ./src/components/Item.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav.js */ "./src/components/Nav.js");
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer.js */ "./src/components/Footer.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserProfile */ "./src/components/UserProfile.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddToCart */ "./src/components/AddToCart.js");
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/components/Item.js";








class Item extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    };
    const product_id = this.props.match.params.id;
    const URL = "https://pamper-my-pet.herokuapp.com/products/" + product_id + ".json";

    const fetchProduct = () => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(URL).then(results => {
        //console.log(results.data);
        this.setState({
          item: results.data
        });
      });
    };

    fetchProduct();
  }

  render() {
    const isAdmin = _UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"].getAdmin();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DetailsWithRouter, {
      item: this.state.item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), isAdmin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/editproduct/" + this.state.item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Edit Product")) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }));
  }

}

;

class Details extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      quantity: 1,
      order_id: -1,
      order_item_id: -1
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleCart = this._handleCart.bind(this);
  }

  createOrder() {
    const URL = "https://pamper-my-pet.herokuapp.com/orders.json";
    const userId = _UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"].getUserId();
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(URL, {
      user_id: userId,
      status: 'Open'
    }).then(result => {
      this.setState({
        order_id: result.data.id
      });
      _AddToCart__WEBPACK_IMPORTED_MODULE_6__["default"].setOrderId(this.state.order_id);
    });
  }

  async fetchOrder() {
    const URL = "https://pamper-my-pet.herokuapp.com/orders.json";
    const userId = _UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"].getUserId();
    console.log("fetchOrder");
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(URL).then(results => {
      if (results.data.length === 0) {
        this.createOrder();
      } else {
        const index = results.data.findIndex(item => item.user_id === userId && item.status === 'Open');
        console.log(index);

        if (index >= 0) {
          this.setState({
            order_id: results.data[index].id
          });
          _AddToCart__WEBPACK_IMPORTED_MODULE_6__["default"].setOrderId(this.state.order_id);
        } else {
          this.createOrder();
        }
      }

      console.log("fetchOrder order: " + this.state.order_id);
    });
  }

  // createOrderItem(order_id, product_id, quantity) {
  //   const url = "https://pamper-my-pet.herokuapp.com/order_items.json";
  //   return axios.post(url, {order_id: order_id, product_id: product_id, quantity: quantity}).then((result) => {
  //     console.log(result.data);
  //     this.setState({order_item_id: result.data.id});
  //     console.log('order_item_id', this.state.order_item_id);
  //   });
  // }
  // updateOrderItem(item, q) {
  //   const url = "https://pamper-my-pet.herokuapp.com/order_items.json";
  //   return axios.put(url, {item.quantity: q}).then((result) => {
  //     console.log(result.data);
  //     this.setState({order_item_id: result.data.id});
  //     console.log(this.state.order_item_id);
  //   });
  // }
  async checkOrderItem(order_id, product_id, quantity) {
    const url = "https://pamper-my-pet.herokuapp.com/order_items.json";
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(results => {
      //console.log('flethdhf', results.data.length);
      //console.log('order_item_id', this.state.order_item_id);
      if (results.data.length === 0) {
        //this.createOrderItem(order_id, product_id, quantity);
        //const url = "https://pamper-my-pet.herokuapp.com/order_items.json";
        return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, {
          order_id: order_id,
          product_id: product_id,
          quantity: quantity
        }).then(result => {
          //console.log(result.data);
          this.setState({
            order_item_id: result.data.id
          }); //console.log('order_item_id', this.state.order_item_id);
        });
      } else {
        const index = results.data.findIndex(item => item.order_id === order_id && item.product_id === product_id); //console.log('index', index);
        //console.log('order_item_id', this.state.order_item_id);

        if (index >= 0) {
          this.setState({
            order_item_id: results.data[index].id
          });
          const ind = results.data[index].quantity; //console.log(results.data[index])
          //console.log('order_item_id', this.state.order_item_id);

          let tempq = results.data[index].quantity;
          tempq += quantity; //console.log('initial quantity', quantity)
          //console.log('updated quantity', tempq)

          const lnk = "https://pamper-my-pet.herokuapp.com/order_items/" + results.data[index].id + ".json"; //console.log(lnk);

          return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(lnk, {
            quantity: tempq
          }).then(result => {
            //console.log(result.data);
            this.setState({
              order_item_id: result.data.id
            }); //console.log('order_item_id', this.state.order_item_id);
          });
        } else {
          //this.createOrderItem(order_id, product_id, quantity);
          //const url = "https://pamper-my-pet.herokuapp.com/order_items.json";
          return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, {
            order_id: order_id,
            product_id: product_id,
            quantity: quantity
          }).then(result => {
            //console.log(result.data);
            this.setState({
              order_item_id: result.data.id
            }); //console.log('order_item_id', this.state.order_item_id);
          });
        }
      }
    });
  }

  _handleChange(event) {
    event.preventDefault();
    this.setState({
      quantity: event.target.value
    });
  }

  _handleCart(event) {
    event.preventDefault(); // Check if order exists for the current user with the status Open
    // If order exists then use that order
    // IF order does not exist then create an order and use that order id
    // Check if order item id exists in the table of that order id and product id
    // If exists then increment the Quantity
    // If does not exist, insert new record of order id, product id and Quantity

    const id = event.target.id;
    this.fetchOrder().then(() => {
      // Add in order item id table
      this.checkOrderItem(this.state.order_id, this.props.item.id, parseInt(this.state.quantity)).then(() => {
        //AddToCart.setCart(this.props.item.id, this.props.item.name, this.props.item.image, this.props.item.price, parseInt(this.state.quantity), this.state.order_item_id);
        if (id === "2") {
          const urlback = "/checkout/";
          this.props.history.push(urlback);
        }
      });
    });
  }

  createQuantitySelect() {
    const stockLimit = this.props.item.stock;
    if (stockLimit === 0) return; //TODO Disable this

    let items = [];

    for (let i = 1; i <= stockLimit; i++) {
      items.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: i,
        value: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, i));
    }

    return items;
  }

  render() {
    const cardStyle = {
      height: 'auto'
    };
    const isOutOfStock = this.props.item.stock === 0;
    const userPresent = _UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"].getEmail() === "";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "newProd-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "item-image",
      src: this.props.item.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, "Name:\u2002"), this.props.item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, "Price: \u2002"), " AUD ", this.props.item.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "item-description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, "Description: \u2002"), this.props.item.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, "Size: \u2002"), this.props.item.size), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, "Color: \u2002"), this.props.item.color), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, "Stock: \u2002"), isOutOfStock ? 'Out of Stock' : 'Available'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, "Select quantity: \u2002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      onChange: this._handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, this.createQuantitySelect())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, userPresent ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, "Add to Cart")), "\u2002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, "Buy Now"), ">")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-warning",
      onClick: this._handleCart,
      id: "1",
      disabled: isOutOfStock,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, "Add to Cart"), "\u2002\u2002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-warning",
      onClick: this._handleCart,
      id: "2",
      disabled: isOutOfStock,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, "Buy Now"))))));
  }

}

;
const DetailsWithRouter = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Details);
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserProfile */ "./src/components/UserProfile.js");
/* harmony import */ var _Nav_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav.js */ "./src/components/Nav.js");
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer.js */ "./src/components/Footer.js");
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/components/Login.js";

 //import powerpuff from './../img/powerpuff.png';

 //import "./Login.css";




 //import { Redirect } from 'react-router-dom';
//import Home from './Home';
//const SERVER_URL = 'https://powerpuffairlines.herokuapp.com/users.json';
// alert('Logged in');
// this.props.userHasAuthenticated(true);

class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    };

    this.handleSubmit = event => {
      event.preventDefault();
      /*
      // store user id
      // via windows localstorage
      let user_id = -1;
      let userDetail = null;
      //const getUser_id = () => {
        axios.get(SERVER_URL).then((results) => {
          //this.setState({user_id: results.data});
          const userslist = results.data;
          console.log(this.state.email);
          console.log(userslist);
          for (let i=0; i<userslist.length; i++) {
            if (userslist[i].email === this.state.email) {
              user_id = userslist[i].id;
              userDetail = userslist[i];
              break;
            }
          }
          console.log(user_id);
          if ( user_id > 0 ) {
              console.log("Login=" + userDetail.admin);
              //user id found
              //direct to homepage
              UserProfile.setName(userDetail.name);
              UserProfile.setUserId(user_id);
              UserProfile.setAdmin(userDetail.admin);
              UserProfile.setEmail(userDetail.email);
               //http://localhost:3000/#/home
              let urlstr = window.location.href;
              if (urlstr.includes("#")) {
                  urlstr = urlstr.split("#")[0] + "#/home"
              }
               window.location.replace(urlstr);
              //return (<Home />)
          }
        });
        //}
      //};
      //getUser_id()
       // //if (typeof (Storage) !== "undefined") {
      // localStorage.setItem('user_id', user_id);
      // //}
      // //
      */
      //handle sending to json
      //users/login

      /*
      {
        "email": "test@example.com",
        "password": "anewpassword"
      }
      */
      //const baseURL = "http://localhost:3000";

      const baseURL = "https://pamper-my-pet.herokuapp.com"; //console.log(baseURL);

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(baseURL + "/users/login", {
        email: this.state.email,
        password: this.state.password
      }).then(result => {
        //post actions
        //console.log(result);
        //console.log(result.statusText);
        if (result.statusText === "OK") {
          _UserProfile__WEBPACK_IMPORTED_MODULE_4__["default"].setName(result.data.name);
          _UserProfile__WEBPACK_IMPORTED_MODULE_4__["default"].setUserId(result.data.user_id);
          _UserProfile__WEBPACK_IMPORTED_MODULE_4__["default"].setAdmin(result.data.admin);
          _UserProfile__WEBPACK_IMPORTED_MODULE_4__["default"].setEmail(result.data.email);
          let urlstr = window.location.href;

          if (urlstr.includes('#')) {
            urlstr = urlstr.split('#')[0] + '#/home';
          }

          window.location.replace(urlstr);
        }
      });
    };

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App Login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "App-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      action: "/home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
      controlId: "email",
      bsSize: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        color: 'black'
      },
      className: "fa fa-envelope-o fa-fw",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      autoFocus: true,
      type: "email",
      value: this.state.email,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
      controlId: "password",
      bsSize: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        color: 'black'
      },
      className: "fa fa-key fa-fw",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      value: this.state.password,
      onChange: this.handleChange,
      type: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      block: true,
      bsSize: "large",
      disabled: !this.validateForm(),
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, "Login"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/components/Logout.js":
/*!**********************************!*\
  !*** ./src/components/Logout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserProfile */ "./src/components/UserProfile.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddToCart */ "./src/components/AddToCart.js");





class Logout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    _UserProfile__WEBPACK_IMPORTED_MODULE_2__["default"].setName('');
    _UserProfile__WEBPACK_IMPORTED_MODULE_2__["default"].setEmail('');
    _UserProfile__WEBPACK_IMPORTED_MODULE_2__["default"].setUserId(-1); //UserProfile.setAdmin(false);

    _AddToCart__WEBPACK_IMPORTED_MODULE_3__["default"].emptyCart();

    if (typeof Storage !== "undefined") {
      localStorage.clear();
    }

    let urlstr = window.location.href;

    if (urlstr.includes('#')) {
      urlstr = urlstr.split('#')[0] + '#/home';
    }

    console.log(urlstr);
    window.location.replace(urlstr);
  }

  render() {
    return "/";
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Logout);

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserProfile */ "./src/components/UserProfile.js");
/* harmony import */ var _NavCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavCart */ "./src/components/NavCart.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/components/Nav.js";






class Nav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    if (_UserProfile__WEBPACK_IMPORTED_MODULE_2__["default"].getEmail() === "") {
      // not logged in
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        style: {
          paddingBottom: '90px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        class: "top-level-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "All Products")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          width: '250px',
          textAlign: 'centert'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Shop By Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        class: "second-level-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Dog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        class: "third-level-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/products/Dog/Clothing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Clothing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/products/Dog/Accessories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Accessories")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/products/Dog/Toys",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Toys")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Cat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        class: "third-level-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/products/Cat/Clothing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Clothing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/products/Cat/Accessories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Accessories")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/products/Cat/Toys",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Toys")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Bird"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        class: "third-level-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/products/Bird/Accessories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Accessories")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/products/Bird/Miscellaneous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Miscellaneous")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Others"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        class: "third-level-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/products/Others/Accessories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Accessories")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/products/Others/Miscellaneous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Miscellaneous")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Sign Up"))));
    }

    const hello = _UserProfile__WEBPACK_IMPORTED_MODULE_2__["default"].getName(); // logged in

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      style: {
        paddingBottom: '80px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      class: "top-level-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "All Products")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      style: {
        width: '250px',
        textAlign: 'centert'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Shop By Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      class: "second-level-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Dog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      class: "third-level-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Dog/Clothing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Clothing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Dog/Accessories",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Accessories")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Dog/Toys",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Toys")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Cat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      class: "third-level-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Cat/Clothing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Clothing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Cat/Accessories",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Accessories")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Cat/Toys",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Toys")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Bird"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      class: "third-level-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Bird/Accessories",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Accessories")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Bird/Miscellaneous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Miscellaneous")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Others"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      class: "third-level-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Others/Accessories",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Accessories")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Others/Miscellaneous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Miscellaneous")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavCart__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/logout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Logout")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "Welcome ", hello), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, " \uD83D\uDED2 "));
  }

}

;

class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "All Products"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "subnav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "subnavbtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "Dog ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-caret-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "subnav-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Dog/Clothing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "Clothing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Cat/Accessories",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "Accessories"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Bird/Toys",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "Toys"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "subnav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "subnavbtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, "Cat ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-caret-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "subnav-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Cat/Clothing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, "Clothing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Cat/Accessories",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, "Accessories"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Cat/Toys",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "Toys"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "subnav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "subnavbtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, "Fish ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-caret-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "subnav-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Fish/Accessories",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "Food"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Fish/Toys",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, "Miscellaneous"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "subnav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "subnavbtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "Birds ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-caret-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "subnav-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Fish/Accessories",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, "Food"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/products/Fish/Toys",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, "Miscellaneous"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavCart__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Nav);
/**
 * float: left;
    padding: 5px;
    background: maroon;
    border-left: 1px dotted #fff;
 */

/**
 *     display: block;
   padding: 2px 20px;
   color: #fff;
   font-family: arial;
 */

/**
 *         <nav id="main_nav">
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">All Products</a>
        </li>
        <li>
          <a href="">Shop By Category</a>
          <ul>
            <li>
              <a href="">Dog</a>
              <ul>
                <li><a href="">Clothing</a></li>
                <li><a href="">Accessories</a></li>
                <li><a href="">Toys</a></li>
              </ul>
            </li>
            <li>
              <a href="">Cat</a>
              <ul>
              <li><a href="">Clothing</a></li>
                <li><a href="">Accessories</a></li>
                <li><a href="">Toys</a></li>
              </ul>
            </li>
            <li>
              <a href="">Bird</a>
              <ul>
                <li><a href="">Accessories</a></li>
                <li><a href="">Miscellaneous</a></li>
              </ul>
            </li>
            <li>
              <a href="">Others</a>
              <ul>
                <li><a href="">Accessories</a></li>
                <li><a href="">Miscellaneous</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">Sign Up</a>
        </li>
      </ul>
    </nav>
  */

/***/ }),

/***/ "./src/components/NavCart.js":
/*!***********************************!*\
  !*** ./src/components/NavCart.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserProfile */ "./src/components/UserProfile.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/components/NavCart.js";





class NavCart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      cartItems: 0
    };

    const getCartItems = () => {
      //check database first
      const ordersUrl = "https://pamper-my-pet.herokuapp.com/orders.json";
      const orderItemsUrl = "https://pamper-my-pet.herokuapp.com/order_items.json";
      let cart = []; //AddToCart.getCart();

      const user_id = _UserProfile__WEBPACK_IMPORTED_MODULE_2__["default"].getUserId(); //if ( cart.length === 0 ) {

      console.log("navcart 1"); //check if truly empty

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(ordersUrl).then(results => {
        const index = results.data.findIndex(item => item.user_id === user_id && item.status === 'Open');

        if (index > 0) {
          let orderId = results.data[index].id;
          let filteredArray = [];
          axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(orderItemsUrl).then(results => {
            filteredArray = results.data.filter(item => item.order_id === orderId);
          }).then(() => {
            this.setState({
              cartItems: filteredArray.length
            });
          });
        }
      });
    }; //getCartItems


    getCartItems();
    setInterval(getCartItems, 5000);
  } //constructor


  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/checkout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Cart (", this.state.cartItems, ") ");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavCart);

/***/ }),

/***/ "./src/components/NewProducts.js":
/*!***************************************!*\
  !*** ./src/components/NewProducts.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserProfile */ "./src/components/UserProfile.js");
/* harmony import */ var _Nav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav.js */ "./src/components/Nav.js");
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer.js */ "./src/components/Footer.js");
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/components/NewProducts.js";







class NewProducts extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      newProd: []
    };
    this.saveProduct = this.saveProduct.bind(this);
  }

  saveProduct(name, image, description, size, color, price, stock, category, pettype) {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("https://pamper-my-pet.herokuapp.com/products.json", {
      name: name,
      image: image,
      description: description,
      size: size,
      color: color,
      price: price,
      stock: stock,
      classification: category,
      pet_type: pettype
    }).then(result => {
      this.setState({
        newProd: [...this.state.newProd, result.data]
      });
      console.log(result.data);
      this.props.history.push("/products");
    });
  }

  render() {
    // const admin = UserProfile.isAdmin() === true;
    if (true) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Create Product"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateForm, {
        onSubmit: this.saveProduct,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }));
    }
  }

}

; // const Allproducts = (props) => {
//   //console.log("products" + props.products.length);
//   if (props.products.length === 0){
//     return 'You have 0 search rresult';
//   } else {
//     return(
//       <div>
//     {props.products.map( (p) =>
//       <div>
//      <img src={p.image}/>
//      <p><strong>Name:</strong><Link to={ "/product/" + p.id }>{p.name}</Link></p>
//      </div>
//    )}
//    </div>
//  )
//
//
//   }
// }

class CreateForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      name: '',
      image: '',
      description: '',
      size: '',
      color: '',
      price: 0,
      stock: 0,
      category: '',
      pettype: ''
    };
    this._handleChangeCategory = this._handleChangeCategory.bind(this);
    this._handleChangePetType = this._handleChangePetType.bind(this);
    this._handleInputName = this._handleInputName.bind(this);
    this._handleInputImage = this._handleInputImage.bind(this);
    this._handleInputDescription = this._handleInputDescription.bind(this);
    this._handleInputPrice = this._handleInputPrice.bind(this);
    this._handleInputColor = this._handleInputColor.bind(this);
    this._handleInputSize = this._handleInputSize.bind(this);
    this._handleInputStock = this._handleInputStock.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChangeCategory(event) {
    console.log(event.target.value);
    this.setState({
      category: event.target.value
    }); //console.log(this.state.category);
  }

  _handleChangePetType(event) {
    console.log(event.target.value);
    this.setState({
      pettype: event.target.value
    }); //console.log(this.state.pettype);
  }

  _handleInputName(event) {
    console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
  }

  _handleInputImage(event) {
    console.log(event.target.value);
    this.setState({
      image: event.target.value
    });
  }

  _handleInputDescription(event) {
    console.log(event.target.value);
    this.setState({
      description: event.target.value
    });
  }

  _handleInputPrice(event) {
    console.log(event.target.value);
    this.setState({
      price: parseInt(event.target.value)
    });
    console.log(this.state.price);
  }

  _handleInputColor(event) {
    console.log(event.target.value);
    this.setState({
      color: event.target.value
    });
  }

  _handleInputSize(event) {
    console.log(event.target.value);
    this.setState({
      size: event.target.value
    });
  }

  _handleInputStock(event) {
    console.log(event.target.value);
    this.setState({
      stock: parseInt(event.target.value)
    });
  }

  _handleSubmit(event) {
    event.preventDefault(); // console.log("hi");

    console.log(this.state.category + "HI");
    console.log(this.state.pettype + "Hello");
    this.props.onSubmit(this.state.name, this.state.image, this.state.description, this.state.size, this.state.color, this.state.price, this.state.stock, this.state.category, this.state.pettype); //this.props.onSubmit("TEST", "this.state.pettype");
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      onInput: this._handleInputName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, "Image"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      onInput: this._handleInputImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      onInput: this._handleInputDescription,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, "Size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      onInput: this._handleInputSize,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, "Color"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      onInput: this._handleInputColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      onInput: this._handleInputPrice,
      min: "0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, "Stock"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      onInput: this._handleInputStock,
      min: "0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this._handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, "Category:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      onChange: this._handleChangeCategory,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Clothing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "Clothing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Accessories",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, "Accessories"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Toys",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, "Toys")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, "Pet Type:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      onChange: this._handleChangePetType,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Dog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, "Dog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Cat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, "Cat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Fish",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, "Fish")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      onClick: "http://localhost:3000/#/products",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, "Create Item!"))));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (NewProducts);

/***/ }),

/***/ "./src/components/Order.js":
/*!*********************************!*\
  !*** ./src/components/Order.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.js */ "./src/components/Footer.js");
/* harmony import */ var _Nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav.js */ "./src/components/Nav.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/components/Order.js";




 // Create Orders page, display only recent 10 Orders, sorted by date
// id | date last updated | status
//
// if status = "Open" add link to Checkout

class Order extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      order: [],
      load: 10 //const order_id = this.props.match.params.id;

    };
    this._incrementOrder = this._incrementOrder.bind(this);

    const fetchOrder = () => {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://pamper-my-pet.herokuapp.com/orders.json").then(results => {
        console.log(results.data);
        this.setState({
          order: results.data
        });
      });
    };

    fetchOrder();
  }

  _incrementOrder() {
    console.log(this.state.load);
    this.setState({
      load: this.state.load + 10
    });
    console.log(this.state.load);
  }

  render() {
    const orderSortedByDate = this.state.order;
    orderSortedByDate.sort(function (a, b) {
      console.log(a.updated_at);
      return new Date(b.updated_at) - new Date(a.updated_at);
    });
    console.log(orderSortedByDate);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, console.log(this.state.load), orderSortedByDate.slice(0, this.state.load).map(o => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "User_Id: ", o.user_id), o.status === 'Open' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/checkout/" + o.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Open!")) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "Created_At: ", o.created_at), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Updated_At: ", o.updated_at)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this._incrementOrder,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, " Load More..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Order);

/***/ }),

/***/ "./src/components/Payment.js":
/*!***********************************!*\
  !*** ./src/components/Payment.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-stripe-elements */ "./node_modules/react-stripe-elements/es/index.js");
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CheckoutForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckoutForm */ "./src/components/CheckoutForm.js");
/* harmony import */ var _Nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav.js */ "./src/components/Nav.js");
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer.js */ "./src/components/Footer.js");
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/components/Payment.js";






class Payment extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__["StripeProvider"], {
      apiKey: "pk_test_TYooMQauvdEDq54NiTphI7jx",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "example",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Payment Form"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__["Elements"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckoutForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Payment);

/***/ }),

/***/ "./src/components/Products.js":
/*!************************************!*\
  !*** ./src/components/Products.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav.js */ "./src/components/Nav.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer.js */ "./src/components/Footer.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserProfile */ "./src/components/UserProfile.js");
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/components/Products.js";










class Products extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.fetchProducts = (c, p) => {
      const category = c;
      const pet_type = p; //console.log(category + " = category");
      //console.log(pet_type + " = pet_type");

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://pamper-my-pet.herokuapp.com/products.json").then(results => {
        const p_data = results.data;
        const listProducts = [];

        for (let i = 0; i < p_data.length; i++) {
          const productData = p_data[i];

          if (category === "" && pet_type === "") {
            listProducts.push(productData); //All product items
          } else if (category !== "" && pet_type === "") {
            if (productData.classification !== null && productData.classification === category) {
              listProducts.push(productData); //all pet_type and selected category
            }
          } else if (category === "" && pet_type !== null) {
            if (productData.pet_type !== null && productData.pet_type === pet_type) {
              listProducts.push(productData); //all category and selected pet type
            }
          } else {
            // console.log(productData.classification);
            // console.log(productData.pet_type);
            if (productData.classification === category && productData.pet_type === pet_type) {
              listProducts.push(productData); //selected category and pet_type
            }
          }
        } //console.log("listProducts =" + listProducts.length);


        this.setState({
          products: listProducts
        });
      });
    };

    this.state = {
      products: [],
      pet: '',
      category: '',
      pets: [],
      categories: []
    };
    this.fetchProducts = this.fetchProducts.bind(this);

    const showProducts = () => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://pamper-my-pet.herokuapp.com/products.json").then(results => {
        this.setState({
          products: results.data
        });
      });
    };

    showProducts();

    const getPets = () => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://pamper-my-pet.herokuapp.com/pets.json").then(results => {
        //console.log("pets " + results.data );
        const pets = [];
        results.data.map(p => {
          pets.push(p.name);
        }); //console.log(pets);

        this.setState({
          pets: pets
        });
      });
    };

    getPets();

    const getCategories = () => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://pamper-my-pet.herokuapp.com/categories.json").then(results => {
        const categories = [];
        results.data.map(c => {
          categories.push(c.name);
        });
        this.setState({
          categories: categories
        }); //console.log("thisis catefory" + categories);
      });
    };

    getCategories();

    if (this.props.match.params.category !== undefined && this.props.match.params.pet !== undefined) {
      // console.log("props here");
      // console.log(this.props.match.params.category);
      //get value from params
      const category = this.props.match.params.category;
      const pet = this.props.match.params.pet; //console.log("1a=" + pet);
      //setstate

      this.setState({
        category: category,
        pet: pet
      }); //console.log("1b=" + this.state.pet);

      this.fetchProducts(category, pet);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log('update!', this.props.match);
    //console.log(prevProps.match);
    //console.log(prevState);
    // todo: update the state here
    const pet = this.props.match.params.pet;
    const category = this.props.match.params.category;
    const prevpet = prevProps.match.params.pet;
    const prevcategory = prevProps.match.params.category; //this.setState({pet: this.props.match.params.pet, category: this.props.match.params.category})
    // todo: maybe fetch products

    if (pet !== prevpet || category !== prevcategory) {
      this.fetchProducts(category, pet); //this.setState({category: category, pet: pet});
      //console.log("2==" + this.state.pet);
    }
  }

  render() {
    const isAdmin = _UserProfile__WEBPACK_IMPORTED_MODULE_8__["default"].getAdmin(); //console.log("parent = " + this.state.categories);
    //console.log("parent pet = " + this.state.pet);
    //console.log("render props pet = " + this.props.match.params.pet);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, this.state.pet, " Pamper My Pet Products"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchForm, {
      pet: this.props.match.params.pet,
      category: this.props.match.params.category,
      pets: this.state.pets,
      categories: this.state.categories,
      onSubmit: this.fetchProducts,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }), isAdmin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/newproducts",
      style: linkStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-outline-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "Add New Product"))) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Allproducts, {
      products: this.state.products,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }));
  }

}

;
const cardStyle = {
  height: '25rem'
};
const imgStyle = {
  height: '100%',
  width: '100%',
  marginLeft: '0',
  marginTop: '0'
};
const linkStyle = {
  textDecoration: "none",
  color: "black"
};

const Allproducts = props => {
  //console.log("products = " + props.products.length);
  if (props.products.length === 0) {
    return 'You have 0 search result';
  } else {
    return (//console.log('rendering...')
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: undefined
      }, props.products.map(p => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card",
        style: cardStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/product/" + p.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: p.image,
        className: "card-img-top",
        style: imgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: undefined
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/product/" + p.id,
        style: linkStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        size: "sm",
        className: "btn btn-outline-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: undefined
      }, p.name)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: undefined
      })))))
    );
  }
};

class SearchForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      category: '',
      pettype: ''
    };
    this._handleChangeCategory = this._handleChangeCategory.bind(this);
    this._handleChangePetType = this._handleChangePetType.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this); //setstate from props values
    //this.setState({pets: this.props.pets})
    //console.log("searchform = " + props.pets);
  }

  _handleChangeCategory(event) {
    //console.log(event.target.value);
    this.setState({
      category: event.target.value
    }); //console.log(this.state.category);
  }

  _handleChangePetType(event) {
    //console.log(event.target.value);
    this.setState({
      pettype: event.target.value
    }); //console.log(this.state.pettype);
  }

  _handleSubmit(event) {
    event.preventDefault(); // console.log("hi");

    this.props.onSubmit(this.state.category, this.state.pettype); //this.props.onSubmit("TEST", "this.state.pettype");
  }

  render() {
    //console.log("here 123 = " + this.props.categories);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this._handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }, "Pet:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      className: "product-option",
      onChange: this._handleChangePetType,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }), this.props.pets.map(p => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      name: p,
      value: p,
      selected: p === this.props.pet ? "selected" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, p))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, "Category:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      className: "product-option",
      onChange: this._handleChangeCategory,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }), this.props.categories.map(c => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      className: "dropdown-item",
      name: c,
      value: c,
      selected: c === this.props.category ? "selected" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }, c))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      size: "sm",
      className: "btn btn-outline-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      },
      __self: this
    }, "Search!")));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./src/components/SignUp.js":
/*!**********************************!*\
  !*** ./src/components/SignUp.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserProfile */ "./src/components/UserProfile.js");
/* harmony import */ var _Nav_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav.js */ "./src/components/Nav.js");
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer.js */ "./src/components/Footer.js");
var _jsxFileName = "/Users/rashidabengali/Projects/pet_shop_react/src/components/SignUp.js";

 //import powerpuff from './../img/powerpuff.png';

 //import "./Login.css";




 //import { Redirect } from 'react-router-dom';
//import Home from './Home';
//const SERVER_URL = 'https://powerpuffairlines.herokuapp.com/users.json';
// alert('Logged in');
// this.props.userHasAuthenticated(true);

class SignUp extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    };

    this.handleSubmit = event => {
      event.preventDefault();
      /*
      // store user id
      // via windows localstorage
      let user_id = -1;
      let userDetail = null;
      //const getUser_id = () => {
        axios.get(SERVER_URL).then((results) => {
          //this.setState({user_id: results.data});
          const userslist = results.data;
          console.log(this.state.email);
          console.log(userslist);
          for (let i=0; i<userslist.length; i++) {
            if (userslist[i].email === this.state.email) {
              user_id = userslist[i].id;
              userDetail = userslist[i];
              break;
            }
          }
          console.log(user_id);
          if ( user_id > 0 ) {
              console.log("Login=" + userDetail.admin);
              //user id found
              //direct to homepage
              UserProfile.setName(userDetail.name);
              UserProfile.setUserId(user_id);
              UserProfile.setAdmin(userDetail.admin);
              UserProfile.setEmail(userDetail.email);
               //http://localhost:3000/#/home
              let urlstr = window.location.href;
              if (urlstr.includes("#")) {
                  urlstr = urlstr.split("#")[0] + "#/home"
              }
               window.location.replace(urlstr);
              //return (<Home />)
          }
        });
        //}
      //};
      //getUser_id()
       // //if (typeof (Storage) !== "undefined") {
      // localStorage.setItem('user_id', user_id);
      // //}
      // //
      */
      //handle sending to json
      //post to http://localhost:3000/users:

      /*
      {
          user: {
            email: 'test@example.com',
            password: 'anewpassword',
            password_confirmation: 'anewpassword'
          }
      }*/

      console.log(this.state.email, this.state.password, this.state.password_confirmation);

      if (this.state.password !== this.state.password_confirmation) {
        this.setState({
          error_message: 'Passwords do not match.'
        });
        return;
      }

      console.log('passwords ok');
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("https://pamper-my-pet.herokuapp.com/users", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }).then(result => {
        //post actions
        console.log(result);
        console.log(result.statusText);

        if (result.statusText === "Created") {
          _UserProfile__WEBPACK_IMPORTED_MODULE_4__["default"].setName(result.data.name);
          _UserProfile__WEBPACK_IMPORTED_MODULE_4__["default"].setUserId(result.data.user_id);
          _UserProfile__WEBPACK_IMPORTED_MODULE_4__["default"].setAdmin(result.data.admin);
          _UserProfile__WEBPACK_IMPORTED_MODULE_4__["default"].setEmail(result.data.email);
          let urlstr = window.location.href;

          if (urlstr.includes('#')) {
            urlstr = urlstr.split('#')[0] + '#/home';
          }

          window.location.replace(urlstr);
        }
      }).catch(error => {
        console.log('error', error.response.data.errors[0]);
        this.setState({
          error_message: error.response.data.errors[0]
        });
      });
    };

    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      error_message: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App Login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "App-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      action: "/home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
      controlId: "name",
      bsSize: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        color: 'black'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      autoFocus: true,
      type: "name",
      value: this.state.name,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
      controlId: "email",
      bsSize: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        color: 'black'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      autoFocus: true,
      type: "email",
      value: this.state.email,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
      controlId: "password",
      bsSize: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        color: 'black'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      value: this.state.password,
      onChange: this.handleChange,
      type: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
      controlId: "password_confirmation",
      bsSize: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        color: 'black'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, "Confirm Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      value: this.state.password_confirmation,
      onChange: this.handleChange,
      type: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      block: true,
      bsSize: "large",
      disabled: !this.validateForm(),
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, this.state.error_message)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/components/UserProfile.js":
/*!***************************************!*\
  !*** ./src/components/UserProfile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const UserProfile = function () {
  let name = "";
  let email = "";
  let user_id = -1;
  let admin = false;

  const getName = function () {
    if (typeof Storage !== "undefined") {
      let temp = localStorage.getItem('name');

      if (temp != null) {
        name = temp;
      }
    }

    return name;
  };

  const setName = function (n) {
    if (n != null) {
      name = n;

      if (typeof Storage !== "undefined") {
        localStorage.setItem('name', name);
      }
    }
  };

  const getEmail = function () {
    if (typeof Storage !== "undefined") {
      let temp = localStorage.getItem('email');

      if (temp !== null) {
        email = temp;
      }
    }

    return email;
  };

  const setEmail = function (e) {
    if (e !== null) {
      email = e;

      if (typeof Storage !== "undefined") {
        localStorage.setItem('email', email);
      }
    }
  };

  const getUserId = function () {
    if (typeof Storage !== "undefined") {
      let temp = localStorage.getItem('user_id');

      if (temp !== null) {
        user_id = temp;
      }
    }

    return parseInt(user_id);
  };

  const setUserId = function (id) {
    user_id = id;

    if (typeof Storage !== "undefined") {
      localStorage.setItem('user_id', user_id);
    }
  };

  const getAdmin = function () {
    if (typeof Storage !== "undefined") {
      let temp = localStorage.getItem('admin');

      if (temp !== null) {
        if (temp === "true" || temp === true) {
          admin = true;
        } else {
          admin = false;
        }
      }
    }

    return admin;
  };

  const setAdmin = function (ad) {
    admin = ad;

    if (typeof Storage !== "undefined") {
      localStorage.setItem('admin', admin);
    }
  };

  return {
    getName: getName,
    setName: setName,
    getEmail: getEmail,
    setEmail: setEmail,
    getUserId: getUserId,
    setUserId: setUserId,
    getAdmin: getAdmin,
    setAdmin: setAdmin
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./src/img/Shopping-dog.jpg":
/*!**********************************!*\
  !*** ./src/img/Shopping-dog.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Shopping-dog.f7f1f7ba.jpg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Routes */ "./src/Routes.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(_Routes__WEBPACK_IMPORTED_MODULE_3__["default"], document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/rashidabengali/Projects/pet_shop_react/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/rashidabengali/Projects/pet_shop_react/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map
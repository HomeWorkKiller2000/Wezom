(()=>{var __webpack_modules__={481:()=>{eval('window.addEventListener("DOMContentLoaded", function () {\n  [].forEach.call(document.querySelectorAll(\'.feedback-block__phone\'), function (input) {\n    var keyCode;\n\n    function mask(event) {\n      event.keyCode && (keyCode = event.keyCode);\n      var pos = this.selectionStart;\n      if (pos < 3) event.preventDefault();\n      var matrix = "+38 (0__) __ __ ___",\n          i = 0,\n          def = matrix.replace(/\\D/g, ""),\n          val = this.value.replace(/\\D/g, ""),\n          new_value = matrix.replace(/[_\\d]/g, function (a) {\n        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n      });\n      i = new_value.indexOf("_");\n\n      if (i != -1) {\n        i < 5 && (i = 3);\n        new_value = new_value.slice(0, i);\n      }\n\n      var reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {\n        return "\\\\d{1," + a.length + "}";\n      }).replace(/[+()]/g, "\\\\$&");\n      reg = new RegExp("^" + reg + "$");\n      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;\n      if (event.type == "blur" && this.value.length < 5) this.value = "";\n    }\n\n    input.addEventListener("input", mask, false);\n    input.addEventListener("focus", mask, false);\n    input.addEventListener("blur", mask, false);\n    input.addEventListener("keydown", mask, false);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbXBvbmVudHMvcGhvbmUuanM/N2U0ZiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZm9yRWFjaCIsImNhbGwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dCIsImtleUNvZGUiLCJtYXNrIiwiZXZlbnQiLCJwb3MiLCJzZWxlY3Rpb25TdGFydCIsInByZXZlbnREZWZhdWx0IiwibWF0cml4IiwiaSIsImRlZiIsInJlcGxhY2UiLCJ2YWwiLCJ2YWx1ZSIsIm5ld192YWx1ZSIsImEiLCJsZW5ndGgiLCJjaGFyQXQiLCJpbmRleE9mIiwic2xpY2UiLCJyZWciLCJzdWJzdHIiLCJSZWdFeHAiLCJ0ZXN0IiwidHlwZSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQVc7QUFDbkQsS0FBR0MsT0FBSCxDQUFXQyxJQUFYLENBQWlCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLHdCQUExQixDQUFqQixFQUFzRSxVQUFTQyxLQUFULEVBQWdCO0FBQ3RGLFFBQUlDLE9BQUo7O0FBQ0EsYUFBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ2pCQSxNQUFBQSxLQUFLLENBQUNGLE9BQU4sS0FBa0JBLE9BQU8sR0FBR0UsS0FBSyxDQUFDRixPQUFsQztBQUNBLFVBQUlHLEdBQUcsR0FBRyxLQUFLQyxjQUFmO0FBQ0EsVUFBSUQsR0FBRyxHQUFHLENBQVYsRUFBYUQsS0FBSyxDQUFDRyxjQUFOO0FBQ2IsVUFBSUMsTUFBTSxHQUFHLHFCQUFiO0FBQUEsVUFDSUMsQ0FBQyxHQUFHLENBRFI7QUFBQSxVQUVJQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csT0FBUCxDQUFlLEtBQWYsRUFBc0IsRUFBdEIsQ0FGVjtBQUFBLFVBR0lDLEdBQUcsR0FBRyxLQUFLQyxLQUFMLENBQVdGLE9BQVgsQ0FBbUIsS0FBbkIsRUFBMEIsRUFBMUIsQ0FIVjtBQUFBLFVBSUlHLFNBQVMsR0FBR04sTUFBTSxDQUFDRyxPQUFQLENBQWUsUUFBZixFQUF5QixVQUFTSSxDQUFULEVBQVk7QUFDN0MsZUFBT04sQ0FBQyxHQUFHRyxHQUFHLENBQUNJLE1BQVIsR0FBaUJKLEdBQUcsQ0FBQ0ssTUFBSixDQUFXUixDQUFDLEVBQVosS0FBbUJDLEdBQUcsQ0FBQ08sTUFBSixDQUFXUixDQUFYLENBQXBDLEdBQW9ETSxDQUEzRDtBQUNILE9BRlcsQ0FKaEI7QUFPQU4sTUFBQUEsQ0FBQyxHQUFHSyxTQUFTLENBQUNJLE9BQVYsQ0FBa0IsR0FBbEIsQ0FBSjs7QUFDQSxVQUFJVCxDQUFDLElBQUksQ0FBQyxDQUFWLEVBQWE7QUFDVEEsUUFBQUEsQ0FBQyxHQUFHLENBQUosS0FBVUEsQ0FBQyxHQUFHLENBQWQ7QUFDQUssUUFBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUNLLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUJWLENBQW5CLENBQVo7QUFDSDs7QUFDRCxVQUFJVyxHQUFHLEdBQUdaLE1BQU0sQ0FBQ2EsTUFBUCxDQUFjLENBQWQsRUFBaUIsS0FBS1IsS0FBTCxDQUFXRyxNQUE1QixFQUFvQ0wsT0FBcEMsQ0FBNEMsS0FBNUMsRUFDTixVQUFTSSxDQUFULEVBQVk7QUFDUixlQUFPLFdBQVdBLENBQUMsQ0FBQ0MsTUFBYixHQUFzQixHQUE3QjtBQUNILE9BSEssRUFHSEwsT0FIRyxDQUdLLFFBSEwsRUFHZSxNQUhmLENBQVY7QUFJQVMsTUFBQUEsR0FBRyxHQUFHLElBQUlFLE1BQUosQ0FBVyxNQUFNRixHQUFOLEdBQVksR0FBdkIsQ0FBTjtBQUNBLFVBQUksQ0FBQ0EsR0FBRyxDQUFDRyxJQUFKLENBQVMsS0FBS1YsS0FBZCxDQUFELElBQXlCLEtBQUtBLEtBQUwsQ0FBV0csTUFBWCxHQUFvQixDQUE3QyxJQUFrRGQsT0FBTyxHQUFHLEVBQVYsSUFBZ0JBLE9BQU8sR0FBRyxFQUFoRixFQUFvRixLQUFLVyxLQUFMLEdBQWFDLFNBQWI7QUFDcEYsVUFBSVYsS0FBSyxDQUFDb0IsSUFBTixJQUFjLE1BQWQsSUFBd0IsS0FBS1gsS0FBTCxDQUFXRyxNQUFYLEdBQW9CLENBQWhELEVBQW9ELEtBQUtILEtBQUwsR0FBYSxFQUFiO0FBQ3ZEOztBQUVEWixJQUFBQSxLQUFLLENBQUNMLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDTyxJQUFoQyxFQUFzQyxLQUF0QztBQUNBRixJQUFBQSxLQUFLLENBQUNMLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDTyxJQUFoQyxFQUFzQyxLQUF0QztBQUNBRixJQUFBQSxLQUFLLENBQUNMLGdCQUFOLENBQXVCLE1BQXZCLEVBQStCTyxJQUEvQixFQUFxQyxLQUFyQztBQUNBRixJQUFBQSxLQUFLLENBQUNMLGdCQUFOLENBQXVCLFNBQXZCLEVBQWtDTyxJQUFsQyxFQUF3QyxLQUF4QztBQUVELEdBaENDO0FBa0NILENBbkNEIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIFtdLmZvckVhY2guY2FsbCggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZlZWRiYWNrLWJsb2NrX19waG9uZScpLCBmdW5jdGlvbihpbnB1dCkge1xuICAgIHZhciBrZXlDb2RlO1xuICAgIGZ1bmN0aW9uIG1hc2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQua2V5Q29kZSAmJiAoa2V5Q29kZSA9IGV2ZW50LmtleUNvZGUpO1xuICAgICAgICB2YXIgcG9zID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgaWYgKHBvcyA8IDMpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBtYXRyaXggPSBcIiszOCAoMF9fKSBfXyBfXyBfX19cIixcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgZGVmID0gbWF0cml4LnJlcGxhY2UoL1xcRC9nLCBcIlwiKSxcbiAgICAgICAgICAgIHZhbCA9IHRoaXMudmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpLFxuICAgICAgICAgICAgbmV3X3ZhbHVlID0gbWF0cml4LnJlcGxhY2UoL1tfXFxkXS9nLCBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgPCB2YWwubGVuZ3RoID8gdmFsLmNoYXJBdChpKyspIHx8IGRlZi5jaGFyQXQoaSkgOiBhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgaSA9IG5ld192YWx1ZS5pbmRleE9mKFwiX1wiKTtcbiAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgIGkgPCA1ICYmIChpID0gMyk7XG4gICAgICAgICAgICBuZXdfdmFsdWUgPSBuZXdfdmFsdWUuc2xpY2UoMCwgaSlcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVnID0gbWF0cml4LnN1YnN0cigwLCB0aGlzLnZhbHVlLmxlbmd0aCkucmVwbGFjZSgvXysvZyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcXFxcZHsxLFwiICsgYS5sZW5ndGggKyBcIn1cIlxuICAgICAgICAgICAgfSkucmVwbGFjZSgvWysoKV0vZywgXCJcXFxcJCZcIik7XG4gICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoXCJeXCIgKyByZWcgKyBcIiRcIik7XG4gICAgICAgIGlmICghcmVnLnRlc3QodGhpcy52YWx1ZSkgfHwgdGhpcy52YWx1ZS5sZW5ndGggPCA1IHx8IGtleUNvZGUgPiA0NyAmJiBrZXlDb2RlIDwgNTgpIHRoaXMudmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgIGlmIChldmVudC50eXBlID09IFwiYmx1clwiICYmIHRoaXMudmFsdWUubGVuZ3RoIDwgNSkgIHRoaXMudmFsdWUgPSBcIlwiXG4gICAgfVxuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIG1hc2ssIGZhbHNlKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgbWFzaywgZmFsc2UpO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIG1hc2ssIGZhbHNlKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBtYXNrLCBmYWxzZSlcblxuICB9KTtcblxufSk7Il0sImZpbGUiOiI0ODEuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///481\n')},846:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";eval('\n// EXTERNAL MODULE: ./assets/images/product-img1.jpg\nvar product_img1 = __webpack_require__(557);\n// EXTERNAL MODULE: ./assets/images/product-img2.jpg\nvar product_img2 = __webpack_require__(932);\n// EXTERNAL MODULE: ./assets/images/product-img3.jpg\nvar product_img3 = __webpack_require__(168);\n// EXTERNAL MODULE: ./assets/images/product-img4.jpg\nvar product_img4 = __webpack_require__(248);\n// EXTERNAL MODULE: ./assets/images/sprite.svg\nvar sprite = __webpack_require__(633);\n;// CONCATENATED MODULE: ./assets/reviews.json\nconst reviews_namespaceObject = JSON.parse(\'[{"name":"Кирил Селигей","date":"/  10 февраля 2022","ratingValue":6,"text":"Покупкой доволен. Товар пришел быстро, без задержек."},{"name":"Абдул Сабуров","date":"/  11 февраля 2022","ratingValue":10,"text":"Наверное, самый быстрый сервис, спасибо огромное. :)"}]\');\n;// CONCATENATED MODULE: ./scripts/vars.js\n/* harmony default export */ const vars = ({\n  window: window,\n  document: document,\n  html: document.documentElement,\n  body: document.body,\n  catalogMenu: document.querySelector(\'.catalog__menu\'),\n  menu: document.querySelector(\'.header__nav-bar\'),\n  catalog: document.querySelector(\'.header__catalog\'),\n  catalogItem: document.querySelectorAll(\'.catalog__item\'),\n  reviewsButton: document.querySelector(\'.reviews__button\'),\n  allReviewsButton: document.querySelector(\'.reviews__title-button\'),\n  reviewsCounter: document.querySelector(\'.reviews__title-counter\'),\n  shoppingCart: document.querySelector(\'.product-management__item3\'),\n  productManagment: document.querySelector(\'.header__product-management\')\n});\n;// CONCATENATED MODULE: ./scripts/components/reviews.js\n\n\nvar index = 0;\nvars.reviewsCounter.textContent = reviews_namespaceObject.length + 2;\nvars.reviewsButton.addEventListener(\'click\', function (e) {\n  if (reviews_namespaceObject.length > 0 && index < reviews_namespaceObject.length) {\n    var review = reviews_namespaceObject[index];\n    initReviews(review);\n    index++;\n  }\n\n  if (reviews_namespaceObject.length == index) {\n    vars.reviewsButton.style.display = \'none\';\n    vars.allReviewsButton.style.display = \'none\';\n  }\n});\nvars.allReviewsButton.addEventListener(\'click\', function (e) {\n  if (reviews_namespaceObject.length > 0 && index < reviews_namespaceObject.length) {\n    for (var i = 0; i < reviews_namespaceObject.length; i++) {\n      if (index <= i) {\n        var review = reviews_namespaceObject[i];\n        initReviews(review);\n        index++;\n      }\n    }\n  }\n\n  index = reviews_namespaceObject.length;\n  vars.reviewsButton.style.display = \'none\';\n  vars.allReviewsButton.style.display = \'none\';\n});\n\nfunction initReviews(review) {\n  var name = review.name;\n  var date = review.date;\n  var ratingValue = review.ratingValue;\n  var text = review.text;\n  var div = document.createElement(\'div\');\n  div.className = "reviews__item";\n  div.innerHTML = "<div class=\\"reviews__item-title\\"><div class=\\"reviews__item-name\\">".concat(name, "</div><div class=\\"reviews__item-date\\">").concat(date, "  </div><div class=\\"rating reviews__item__rating rating__set\\"><div class=\\"rating__body\\"><div class=\\"rating__active\\"></div><div class=\\"rating__items\\"><input type=\\"radio\\" class=\\"rating__item\\" value=\\"2.4\\" name=\\"rating\\"><input type=\\"radio\\" class=\\"rating__item\\" value=\\"4.8\\" name=\\"rating\\"><input type=\\"radio\\" class=\\"rating__item\\" value=\\"7.2\\" name=\\"rating\\"><input type=\\"radio\\" class=\\"rating__item\\" value=\\"9.6\\" name=\\"rating\\"><input type=\\"radio\\" class=\\"rating__item\\" value=\\"12\\" name=\\"rating\\"></div></div><div class=\\"rating__value\\">").concat(ratingValue, "</div></div></div><div class=\\"reviews__item-main\\"><p>").concat(text, "</p></div>");\n  document.querySelector(\'.reviews__items\').append(div);\n}\n;// CONCATENATED MODULE: ./scripts/components/catalog.js\n\nvars.catalogMenu.addEventListener(\'click\', function (e) {\n  var screenWidth = window.screen.width;\n\n  if (screenWidth < 768) {\n    e.target.classList.remove(\'_pc\');\n    e.target.classList.add(\'_phone\');\n    isActive(e);\n  } else {\n    e.target.classList.remove(\'_phone\');\n    e.target.classList.add(\'_pc\');\n    isActive(e);\n  }\n});\nvars.catalogItem.forEach(function (item) {\n  item.addEventListener(\'click\', function (e) {\n    unsetActive();\n  });\n});\n\nfunction unsetActive() {\n  if (vars.catalog.classList.contains(\'_active\')) {\n    vars.catalog.classList.remove(\'_active\');\n    vars.catalogMenu.classList.remove(\'_active\');\n  }\n}\n\nfunction isActive(e) {\n  if (e.target.classList.contains(\'_active\')) {\n    removeActive(e);\n  } else {\n    setActive(e);\n  }\n}\n\nfunction removeActive(e) {\n  if (e.target.classList.contains(\'_phone\')) {\n    e.target.classList.remove(\'_active\');\n    vars.menu.classList.remove(\'_active\');\n  } else if (e.target.classList.contains(\'_pc\')) {\n    e.target.classList.remove(\'_active\');\n    vars.catalog.classList.remove(\'_active\');\n  }\n}\n\nfunction setActive(e) {\n  if (e.target.classList.contains(\'_phone\')) {\n    e.target.classList.add(\'_active\');\n    vars.menu.classList.add(\'_active\');\n  } else if (e.target.classList.contains(\'_pc\')) {\n    e.target.classList.add(\'_active\');\n    vars.catalog.classList.add(\'_active\');\n  }\n}\n// EXTERNAL MODULE: ./scripts/components/phone.js\nvar phone = __webpack_require__(481);\n;// CONCATENATED MODULE: ./scripts/components/shopping-cart.js\n\nvars.shoppingCart.addEventListener(\'click\', function (e) {\n  console.log(e.target.vars);\n  shopping_cart_isActive(e);\n});\n\nfunction shopping_cart_isActive(e) {\n  if (e.target.classList.contains(\'_active\')) {\n    shopping_cart_removeActive(e);\n  } else {\n    shopping_cart_setActive(e);\n  }\n}\n\nfunction shopping_cart_removeActive(e) {\n  e.target.classList.remove(\'_active\');\n  vars.productManagment.classList.remove(\'_active\');\n}\n\nfunction shopping_cart_setActive(e) {\n  e.target.classList.add(\'_active\');\n  vars.productManagment.classList.add(\'_active\');\n}\n;// CONCATENATED MODULE: ./scripts/index.js\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjcmlwdHMvdmFycy5qcz9hNzU4Iiwid2VicGFjazovLy8uL3NjcmlwdHMvY29tcG9uZW50cy9yZXZpZXdzLmpzPzc3NjIiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21wb25lbnRzL2NhdGFsb2cuanM/ZjVhNiIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbXBvbmVudHMvc2hvcHBpbmctY2FydC5qcz8xNmZlIiwid2VicGFjazovLy8uL3NjcmlwdHMvaW5kZXguanM/MjIxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdHtcbiAgICB3aW5kb3c6IHdpbmRvdyxcbiAgICBkb2N1bWVudDogZG9jdW1lbnQsXG4gICAgaHRtbDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgIGJvZHk6IGRvY3VtZW50LmJvZHksXG4gICAgY2F0YWxvZ01lbnU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nX19tZW51JyksXG4gICAgbWVudTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LWJhcicpLFxuICAgIGNhdGFsb2c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NhdGFsb2cnKSxcbiAgICBjYXRhbG9nSXRlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2dfX2l0ZW0nKSxcbiAgICByZXZpZXdzQnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3c19fYnV0dG9uJyksXG4gICAgYWxsUmV2aWV3c0J1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmlld3NfX3RpdGxlLWJ1dHRvbicpLFxuICAgIHJldmlld3NDb3VudGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3c19fdGl0bGUtY291bnRlcicpLFxuICAgIHNob3BwaW5nQ2FydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtbWFuYWdlbWVudF9faXRlbTMnKSxcbiAgICBwcm9kdWN0TWFuYWdtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19wcm9kdWN0LW1hbmFnZW1lbnQnKSxcbn0gIiwiaW1wb3J0IFJldmlld3MgZnJvbSAnLi4vLi4vYXNzZXRzL3Jldmlld3MuanNvbic7XG5pbXBvcnQgdmFycyBmcm9tICcuLi92YXJzJztcblxubGV0IGluZGV4ID0gMDtcbnZhcnMucmV2aWV3c0NvdW50ZXIudGV4dENvbnRlbnQgPSBSZXZpZXdzLmxlbmd0aCArIDI7XG5cbnZhcnMucmV2aWV3c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKFJldmlld3MubGVuZ3RoID4gMCAmJiBpbmRleCA8IFJldmlld3MubGVuZ3RoKSB7XG4gICAgICAgIGxldCByZXZpZXcgPSBSZXZpZXdzW2luZGV4XTtcbiAgICAgICAgaW5pdFJldmlld3MocmV2aWV3KTtcbiAgICAgICAgaW5kZXgrKztcbiAgICB9XG4gICAgaWYgKFJldmlld3MubGVuZ3RoID09IGluZGV4KSB7XG4gICAgICAgIHZhcnMucmV2aWV3c0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB2YXJzLmFsbFJldmlld3NCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG59KTtcblxudmFycy5hbGxSZXZpZXdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoUmV2aWV3cy5sZW5ndGggPiAwICYmIGluZGV4IDwgUmV2aWV3cy5sZW5ndGgpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCBSZXZpZXdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPD0gaSl7XG4gICAgICAgICAgICAgICAgbGV0IHJldmlldyA9IFJldmlld3NbaV07XG4gICAgICAgICAgICAgICAgaW5pdFJldmlld3MocmV2aWV3KTtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGluZGV4ID0gUmV2aWV3cy5sZW5ndGg7XG4gICAgdmFycy5yZXZpZXdzQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdmFycy5hbGxSZXZpZXdzQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxuZnVuY3Rpb24gaW5pdFJldmlld3MocmV2aWV3KSB7XG4gICAgbGV0IG5hbWUgPSByZXZpZXcubmFtZTtcbiAgICBsZXQgZGF0ZSA9IHJldmlldy5kYXRlO1xuICAgIGxldCByYXRpbmdWYWx1ZSA9IHJldmlldy5yYXRpbmdWYWx1ZTtcbiAgICBsZXQgdGV4dCA9IHJldmlldy50ZXh0O1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJyZXZpZXdzX19pdGVtXCI7XG4gICAgZGl2LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicmV2aWV3c19faXRlbS10aXRsZVwiPjxkaXYgY2xhc3M9XCJyZXZpZXdzX19pdGVtLW5hbWVcIj4ke25hbWV9PC9kaXY+PGRpdiBjbGFzcz1cInJldmlld3NfX2l0ZW0tZGF0ZVwiPiR7ZGF0ZX0gIDwvZGl2PjxkaXYgY2xhc3M9XCJyYXRpbmcgcmV2aWV3c19faXRlbV9fcmF0aW5nIHJhdGluZ19fc2V0XCI+PGRpdiBjbGFzcz1cInJhdGluZ19fYm9keVwiPjxkaXYgY2xhc3M9XCJyYXRpbmdfX2FjdGl2ZVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJyYXRpbmdfX2l0ZW1zXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicmF0aW5nX19pdGVtXCIgdmFsdWU9XCIyLjRcIiBuYW1lPVwicmF0aW5nXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicmF0aW5nX19pdGVtXCIgdmFsdWU9XCI0LjhcIiBuYW1lPVwicmF0aW5nXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicmF0aW5nX19pdGVtXCIgdmFsdWU9XCI3LjJcIiBuYW1lPVwicmF0aW5nXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicmF0aW5nX19pdGVtXCIgdmFsdWU9XCI5LjZcIiBuYW1lPVwicmF0aW5nXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicmF0aW5nX19pdGVtXCIgdmFsdWU9XCIxMlwiIG5hbWU9XCJyYXRpbmdcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwicmF0aW5nX192YWx1ZVwiPiR7cmF0aW5nVmFsdWV9PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cInJldmlld3NfX2l0ZW0tbWFpblwiPjxwPiR7dGV4dH08L3A+PC9kaXY+YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3c19faXRlbXMnKS5hcHBlbmQoZGl2KTtcbn0iLCJpbXBvcnQgdmFycyBmcm9tICcuLi92YXJzJztcblxudmFycy5jYXRhbG9nTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICAgIGlmIChzY3JlZW5XaWR0aCA8IDc2OCl7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19wYycpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdfcGhvbmUnKTtcbiAgICAgICAgaXNBY3RpdmUoZSk7XG4gICAgfSBcbiAgICBlbHNlIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3Bob25lJyk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19wYycpO1xuICAgICAgICBpc0FjdGl2ZShlKTtcbiAgICB9XG59KTtcblxudmFycy5jYXRhbG9nSXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB1bnNldEFjdGl2ZSgpO1xuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIHVuc2V0QWN0aXZlKCkge1xuICAgIGlmICh2YXJzLmNhdGFsb2cuY2xhc3NMaXN0LmNvbnRhaW5zKCdfYWN0aXZlJykpIHtcbiAgICAgICAgdmFycy5jYXRhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgICAgdmFycy5jYXRhbG9nTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0FjdGl2ZShlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX2FjdGl2ZScpKXtcbiAgICAgICAgcmVtb3ZlQWN0aXZlKGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEFjdGl2ZShlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZShlKSB7XG4gICAgaWYgIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19waG9uZScpKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgICAgdmFycy5tZW51LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3BjJykpIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgICB2YXJzLmNhdGFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgIH1cbiAgICAgXG59XG4gIFxuZnVuY3Rpb24gc2V0QWN0aXZlKGUpIHtcbiAgICBpZiAgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3Bob25lJykpIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICB2YXJzLm1lbnUuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3BjJykpIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICB2YXJzLmNhdGFsb2cuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgIH1cbiAgXG59IiwiaW1wb3J0IHZhcnMgZnJvbSAnLi4vdmFycyc7XG5cbnZhcnMuc2hvcHBpbmdDYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YXJzKTtcbiAgICBpc0FjdGl2ZShlKTtcbn0pO1xuXG5mdW5jdGlvbiBpc0FjdGl2ZShlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX2FjdGl2ZScpKXtcbiAgICAgICAgcmVtb3ZlQWN0aXZlKGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEFjdGl2ZShlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZShlKSB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgIHZhcnMucHJvZHVjdE1hbmFnbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG59XG4gIFxuZnVuY3Rpb24gc2V0QWN0aXZlKGUpIHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgdmFycy5wcm9kdWN0TWFuYWdtZW50LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbn0iLCJpbXBvcnQgcHJvZHVjdEltYWdlMSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3QtaW1nMS5qcGcnO1xuaW1wb3J0IHByb2R1Y3RJbWFnZTIgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wcm9kdWN0LWltZzIuanBnJztcbmltcG9ydCBwcm9kdWN0SW1hZ2UzIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcHJvZHVjdC1pbWczLmpwZyc7XG5pbXBvcnQgcHJvZHVjdEltYWdlNCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3QtaW1nNC5qcGcnO1xuaW1wb3J0IFNwcml0ZXMgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9zcHJpdGUuc3ZnJztcbmltcG9ydCBSZXZpZXdzIGZyb20gJy4vY29tcG9uZW50cy9yZXZpZXdzJztcbmltcG9ydCBDYXRhbG9nIGZyb20gJy4vY29tcG9uZW50cy9jYXRhbG9nJztcbmltcG9ydCBQaG9uZVBsYWNlaG9sZGVyIGZyb20gJy4vY29tcG9uZW50cy9waG9uZSc7XG5pbXBvcnQgU2hvcHBpbmdDYXJ0IGZyb20gJy4vY29tcG9uZW50cy9zaG9wcGluZy1jYXJ0JztcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLnNjc3MnOyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJkb2N1bWVudCIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwiY2F0YWxvZ01lbnUiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImNhdGFsb2ciLCJjYXRhbG9nSXRlbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXZpZXdzQnV0dG9uIiwiYWxsUmV2aWV3c0J1dHRvbiIsInJldmlld3NDb3VudGVyIiwic2hvcHBpbmdDYXJ0IiwicHJvZHVjdE1hbmFnbWVudCIsIlJldmlld3MiLCJ2YXJzIiwiaW5kZXgiLCJ0ZXh0Q29udGVudCIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmV2aWV3IiwiaW5pdFJldmlld3MiLCJzdHlsZSIsImRpc3BsYXkiLCJpIiwibmFtZSIsImRhdGUiLCJyYXRpbmdWYWx1ZSIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwic2NyZWVuV2lkdGgiLCJzY3JlZW4iLCJ3aWR0aCIsInRhcmdldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImlzQWN0aXZlIiwiZm9yRWFjaCIsIml0ZW0iLCJ1bnNldEFjdGl2ZSIsImNvbnRhaW5zIiwicmVtb3ZlQWN0aXZlIiwic2V0QWN0aXZlIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RJbWFnZTEiLCJwcm9kdWN0SW1hZ2UyIiwicHJvZHVjdEltYWdlMyIsInByb2R1Y3RJbWFnZTQiLCJTcHJpdGVzIiwiQ2F0YWxvZyIsIlBob25lUGxhY2Vob2xkZXIiLCJTaG9wcGluZ0NhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///846\n')},557:(Q,F,B)=>{"use strict";Q.exports=B.p+"assets/product-img1.jpg"},932:(Q,F,B)=>{"use strict";Q.exports=B.p+"assets/product-img2.jpg"},168:(Q,F,B)=>{"use strict";Q.exports=B.p+"assets/product-img3.jpg"},248:(Q,F,B)=>{"use strict";Q.exports=B.p+"assets/product-img4.jpg"},633:(Q,F,B)=>{"use strict";Q.exports=B.p+"assets/sprite.svg"}},__webpack_module_cache__={};function __webpack_require__(Q){var F=__webpack_module_cache__[Q];if(void 0!==F)return F.exports;var B=__webpack_module_cache__[Q]={exports:{}};return __webpack_modules__[Q](B,B.exports,__webpack_require__),B.exports}__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(Q){if("object"==typeof window)return window}}(),(()=>{var Q;__webpack_require__.g.importScripts&&(Q=__webpack_require__.g.location+"");var F=__webpack_require__.g.document;if(!Q&&F&&(F.currentScript&&(Q=F.currentScript.src),!Q)){var B=F.getElementsByTagName("script");B.length&&(Q=B[B.length-1].src)}if(!Q)throw new Error("Automatic publicPath is not supported in this browser");Q=Q.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=Q})();var __webpack_exports__=__webpack_require__(846)})();
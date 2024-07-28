"use strict";

var _interopRequireWildcard = require("/Users/jordy.saintalbin/Desktop/project/react-custom-modals/node_modules/@babel/runtime/helpers/interopRequireWildcard.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Modal.css");
const Modal = _ref => {
  let {
    message,
    onClose,
    showCloseButton,
    backgroundColor,
    closeOnOutsideClick
  } = _ref;
  (0, _react.useEffect)(() => {
    const handleOutsideClick = event => {
      if (closeOnOutsideClick && event.target.className === "modal") {
        onClose();
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [closeOnOutsideClick, onClose]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    style: {
      backgroundColor: backgroundColor || "#fff"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("p", null, message), showCloseButton && /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose
  }, "Close")));
};
Modal.defaultProps = {
  showCloseButton: false,
  backgroundColor: "#fff",
  closeOnOutsideClick: false
};
var _default = exports.default = Modal;
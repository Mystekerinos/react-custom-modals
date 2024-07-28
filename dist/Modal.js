"use strict";

var _interopRequireDefault = require("/Users/jordy.saintalbin/Desktop/project/react-custom-modals/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
const Modal = _ref => {
  let {
    message,
    onClose,
    showCloseButton = false,
    backgroundColor = "#fff"
  } = _ref;
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay",
    onClick: handleOverlayClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    style: {
      backgroundColor
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "close-button",
    onClick: onClose
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("p", null, message), showCloseButton && /*#__PURE__*/_react.default.createElement("button", {
    className: "close-modal-button",
    onClick: onClose
  }, "Close")));
};
var _default = exports.default = Modal;
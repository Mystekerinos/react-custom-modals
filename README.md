# react-custom-modals

A library of custom modal components for React applications.

## Installation

You can install `react-custom-modals` using npm. Run the following command:

```bash
npm install react-custom-modals


import React, { useState } from "react";
import Modal from "react-custom-modals";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1>Welcome to my application</h1>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen && (
        <Modal
          message="Hello, world!"
          onClose={toggleModal}
          showCloseButton={true}         // Optional: Show a close button inside the modal
          backgroundColor="#f0f0f0"      // Optional: Set a custom background color for the modal
        />
      )}
    </div>
  );
};

export default App;



Props
The Modal component accepts the following props:

.message: The message to display inside the modal.
.onClose: Function called when the modal is closed.
.showCloseButton (boolean): Optional. If true, shows a close button inside the modal. Default is false.
.backgroundColor (string): Optional. Sets the background color of the modal. Default is #fff.

Closing Modal by Clicking Outside
The modal can also be closed by clicking outside of it (on the overlay).

Example
Here's an example demonstrating the usage of react-custom-modals:

import React, { useState } from "react";
import Modal from "react-custom-modals";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1>Welcome to my application</h1>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen && (
        <Modal
          message="Hello, world!"
          onClose={toggleModal}
          showCloseButton={true}         // Optional: Show a close button inside the modal
          backgroundColor="#f0f0f0"      // Optional: Set a custom background color for the modal
        />
      )}
    </div>
  );
};

export default App;

/* modal.css */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: #fff; /* This will be overridden by the backgroundColor prop */
    padding: 20px;
    border-radius: 10px;
    position: relative;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    width: 100%;
}

.close-button {
    position: absolute;
    top: -14px;
    right: 13px;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.close-button:hover {
    background: #555;
}

.close-modal-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.close-modal-button:hover {
    background-color: #555;
}



```

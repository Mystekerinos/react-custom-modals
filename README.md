# react-custom-modals

A library of custom modal components for React applications.

## Installation

You can install `react-custom-modals` using npm. Run the following command:

```bash
npm install react-custom-modals


Usage
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
      {isOpen && <Modal message="Hello, world!" onClose={toggleModal} />}
    </div>
  );
};

export default App;


Props
The Modal component accepts the following props:

.message: The message to display inside the modal.
.onClose: Function called when the modal is closed.


```

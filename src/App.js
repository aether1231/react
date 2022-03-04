import React, { useState } from "react";
import Container from "./components/UI/Container";
import Modal from "./components/UI/Modal";

function App() {
  const [userData, setUserData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const addUserButtonHandler = (newUser) => {
    if (Number(newUser.age) < 0) {
      setShowModal(true);
      setModalText("Please enter a valid age (> 0).");
      return;
    }
    if (!newUser.name || !newUser.age) {
      setShowModal(true);
      setModalText("Please enter a valid name and age (non-empty values).");
      return;
    }

    setUserData((previousUsers) => {
      return [newUser, ...previousUsers];
    });
  };

  const modalButtonHandler = (event) => {
    setShowModal(false);
    document
      .querySelectorAll("input")
      [modalText === "Please enter a valid age (> 0)." ? 1 : 0].focus();
  };

  return (
    <div>
      <Container data={userData} onAddUser={addUserButtonHandler} />
      {showModal && (
        <Modal text={modalText} onClickModal={modalButtonHandler} />
      )}
    </div>
  );
}

export default App;

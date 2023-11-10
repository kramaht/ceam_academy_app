import React from "react";
import { Button, Modal, Center, NativeBaseProvider } from "native-base";
import { useState } from "react";

function ModalStyled({ showModal, setShowModal }) {
  //const [showModal, setShowModal] = useState(false);
  return (
    <Center>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        _backdrop={{
          _dark: {
            bg: "coolGray.800",
          },
          bg: "#000",
        }}
        size={"xl"}
      >
        <Modal.Content height={500}>
          <Modal.CloseButton />
          <Modal.Header>Return Policy</Modal.Header>
          <Modal.Body>
            Create a 'Return Request' under “My Orders” section of App/Website.
            Follow the screens that come up after tapping on the 'Return’
            button. Please make a note of the Return ID that we generate at the
            end of the process. Keep the item ready for pick up or ship it to us
            basis on the return mode.
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}

export default () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Center flex={1} px="3">
      <Button onPress={() => setShowModal(!showModal)}>holsssa</Button> 
      <ModalStyled showModal={showModal} setShowModal={setShowModal} />
    </Center>
  );
};

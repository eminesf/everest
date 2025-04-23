import { Meta, StoryFn } from "@storybook/react";
import { Modal } from ".";
import { Button } from "../Button";
import React from "react";

export default {
  title: "components/Modal",
  component: Modal,
  argTypes: {},
} as Meta;

const Template: StoryFn = (args) => {
  const [openModal, setOpenModal] = React.useState(args.openModal || false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "20px",
      }}
    >
      <Button variant="confirm" onClick={() => setOpenModal(!openModal)}>
        Open Modal
      </Button>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} {...args}>
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 20px",
          }}
        >
          Opened Modal
        </div>
      </Modal>
    </div>
  );
};

export const DefaultModal = Template.bind({});

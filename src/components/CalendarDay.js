import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import Text from "./Text";
import Video from "./Video";
import Image from "./Image";
import CalendarPuzzle from "./CalendarPuzzle";
import Link from "./Link";

export default function CalendarDay(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    const d = new Date();
    if (props.day <= d.getDate()) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className={"circle d-flex align-items-center justify-content-center"}
      onClick={toggleModal}
    >
      <div className={"number"}>{props.day}</div>

      <Modal centered size={"lg"} show={isOpen} toggle={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{props.data.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={"modalText"}>
            {props.data.text.type === "text" ? (
              <Text data={props.data.text} />
            ) : null}
            {props.data.text.type === "link" ? (
              <Video data={props.data.text} />
            ) : null}
          </div>
          <div className={"modalContent"}>
            {props.data.content.type === "text" ? (
              <Text data={props.data.content} />
            ) : null}
            {props.data.content.type === "link" ? (
              <Video data={props.data.content} />
            ) : null}
            {props.data.additionalContent?.type === "link" ? (
              <Video data={props.data.additionalContent} />
            ) : null}

            {props.data.content.type === "image" ? (
              <Image data={props.data.content} />
            ) : null}
            {props.data.additionalContent?.type === "image" ? (
              <Image data={props.data.additionalContent} />
            ) : null}

            {props.data.content.type === "puzzle" ? (
              <CalendarPuzzle data={props.data.content} />
            ) : null}
            {props.data.content.type === "tiny-link" ? (
              <Link data={props.data.content} />
            ) : null}
            {props.data.additionalContent?.type === "tiny-link" ? (
              <Link data={props.data.additionalContent} />
            ) : null}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

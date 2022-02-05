import "./TextInput.css";
import { useState } from "react";
import { FiSend, FiCamera } from "react-icons/fi";

export default function TextInput(props) {
  const [text, setText] = useState("");

  function send() {
    props.sendMessage(text);
    setText("");
  }
  function onKeyPress(e) {
    if (e.key === "Enter") {
      send();
    }
  }
  // footer container with the user text input and the send button
  return (
    <footer className="footer">
      <button className="camera" onClick={props.showCamera}>
        <FiCamera />
      </button>
      <input
        className="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <button className="send" onClick={send}>
        <FiSend />
      </button>
    </footer>
  );
}
import "./NamePicker.css";
import {useState} from "react";
import { FiEdit } from "react-icons/fi";

export default function NamePicker(props) {
    const [name, setName] = useState("Set username:");
    const [editName, setEditName] = useState(false);

    // renders text input box or username
    function renderInput() {
        if (editName) {
            return <input
            className="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={onKeyPress}
            />
        } else {
            return <div className="username">{name}</div>;
        }
    }

    // renders text input box or username
    function renderButton() {
        if (editName) {
            return "OK";
        } else {
            return <FiEdit />
        }
    }

    // set username, edit username
    function submit() {
        if (editName) {
            setEditName(false);
        } else {
            setName("");
            setEditName(true);
        }
    }

    // enter key triggers submit function
    function onKeyPress(e) {
        if (e.key === "Enter") {
            submit();
        }
    }

    // renders username/text input + submit button
    return (
        <div className="container">
            {renderInput()}
            <button className="submit" onClick={submit}>
                {renderButton()}
            </button>
        </div>
    );
}
import './App.css';
import TextInput from "./TextInput"
import { useState } from "react"
import Message from "./Message"

function App() {
  const [messages, setMessages] = useState([]);
  // message sending function
  function sendMessage(text) {
    const newMessage = {
      text,
      time: Date.now(),
      user: "Allen",
    };
    setMessages([newMessage, ...messages]);
  }
  console.log(messages);
  // one header container with the logo and the title, and one footer container with the user text input and the send button
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">CHATTER</span>
      </header>
      <div className="messages">
        {messages.map((msg) => {
          return <Message {...msg} />;
        })}
      </div>
      <TextInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;

/* Sources:
https://github.com/Evanfeenstra/chatter_2022
https://www.w3schools.com/css/css_background.asp
https://www.w3schools.com/CSSref/pr_background-color.asp
https://www.w3schools.com/csSref/css3_pr_background-size.asp
https://unicode-table.com/en/279E/
https://www.createdebate.com/debate/show/Oklahoma_City_Most_Normal_City_in_America
https://coolors.co/aa90dd-ab9edd-aebadd-b1d6dd-b3f2dd
*/
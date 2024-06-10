import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Button, Input, message } from "antd"
import { SettingOutlined, UserOutlined, PlusCircleOutlined, HomeOutlined, MessageOutlined } from '@ant-design/icons';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const [messageContent, setMessageContent] = useState("");
  const [messages, setMessages] = useState([]);

  const getCharLength = (e) => {
    var rawLength = document.getElementById('msgInput').value;
    var len = rawLength.trim().length;
    
    var display = document.getElementById('len');
    display.innerHTML = len;

    console.log(e);
    setMessageContent(e);
  }


  const assignUsername = () => {
    setIsLoading(true);

    setDisplayName(document.getElementById("username_change").value)
    document.getElementById("saveUSR_btn").style.color = "green";
    document.getElementById("saveUSR_btn").style.fontWeight = 500;

    document.getElementById("saveUSR_btn").style.color = "black";
    document.getElementById("saveUSR_btn").style.fontWeight = 100;

    setIsLoading(false);
  }

  const checkEnterPress = (event) => {
    if (event.key === 'Enter') {
      const newMessage = {
        username: displayName,
        content: messageContent,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }
  }

  return (
    <div className="App">
      {/* <div className='homeBar'>
        <Button className='gbtn'><HomeOutlined /></Button>
        <Button className='gbtn'><MessageOutlined /></Button>
        <Button className='gbtn'><PlusCircleOutlined /></Button>
        <Button className='gbtn'><UserOutlined /></Button>
        <Button className='gbtn'><SettingOutlined /></Button>
      </div> */}

      <div className='name'>
        <Input id='username_change' placeholder='assign your display name!' disabled={isLoading} style={{ width: "40vh", textAlign: 'center'}}></Input>
        <Button id='saveUSR_btn' onClick={() => assignUsername()} loading={isLoading}>Save</Button>
      </div>

      <div className='chatBox' id='chatContainer'>
        {messages.map((message, index) => (
          <div key={index} className="message-box">
            <span id='usr'>{message.username}</span><br></br>
            <span id='content'>{message.content}</span>
          </div>
        ))}
      </div>

    
      <div className="inputs">
        <span id='lengthCos'>Chars: <span id='len'>0</span></span>
        <Input className='textinput' id='msgInput' placeholder='Send a global message' onChange={(e) => getCharLength(e.target.value)} onKeyDown={checkEnterPress}></Input>
        <Button>Send</Button>
      </div>
    </div>
  );
}

export default App;

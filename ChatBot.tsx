import { useState, useEffect } from "react";
import '../styles/ChatBot.css';

function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [typedMessage, setTypedMessage] = useState("");
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8000/chat");
        setSocket(socket);
        socket.onmessage = (event) => {
            const receivedMessage = event.data;
            setMessages((prevMessages) => [...prevMessages, receivedMessage]);
        };

        return () => {
            socket.close();
        };
    }, [messages]);
    
    const handleSendMessage = () => {
        if (typedMessage.trim() !== "") {
            socket.send(typedMessage);
            setTypedMessage("");
        }
    };

    return (
        <div className="wrapper">
            <div className="main_content">
                <div className="header"><p>Welcome</p></div>
                <div className="info">
                    {messages.map((message, index) => (
                        <div key={index}>
                            {message}
                        </div>
                    ))}
                </div>
                <input
                    name="typedMessage"
                    type="text"
                    value={typedMessage}
                    placeholder="Type something..."
                    onChange={(e) => setTypedMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" ? handleSendMessage() : null}
                />
            </div>
        </div>
    );
}

export default ChatBot;
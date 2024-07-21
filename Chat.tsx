import { useState, useEffect } from "react";
import '../styles/App.css';

function Chat() {
    const [messages, setMessages] = useState([]);
    const [typedMessage, setTypedMessage] = useState("");
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8000/doc");
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
            <div className="sidebar">
                <h2>Health Booth</h2>
                <ul className="sidebar-list">
                    <li className="sidebar-item"><a className="sidebar-link" href="#"><i className="fas fa-home"></i>Home</a></li>
                    <li className="sidebar-item" ><a className="sidebar-link" href="#"><i className="fas fa-user"></i>Profile</a></li>
                </ul>
                <div className="social_media">
                    <a className="sidebar-media-icons" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="sidebar-media-icons" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="sidebar-media-icons" href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
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

export default Chat;

import React, { useState, useEffect, useRef } from 'react';
import '../index.css';

interface ChatbotProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{
                id: 1,
                text: "Hi! I'm Amey's bot. He built me in his basement. Naah, just kidding! I'm here to help you with any questions you have about Amey's work or interests.",
                sender: 'bot'
            }]);
        }
    }, [isOpen, messages.length]);

    const sendMessage = (text: string): void => {
        const clean = text.trim();
        if (clean === '') return;
        const userMessage: Message = { id: Date.now(), text: clean, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);
        setTimeout(() => {
            const botResponseText = getBotResponse(clean);
            const botMessage: Message = { id: Date.now() + 1, text: botResponseText, sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500 + Math.random() * 500);
    };

    const handleQuickReply = (text: string): void => {
        sendMessage(text);
    };

    const getBotResponse = (userInput: string): string => {
        const lcInput = userInput.toLowerCase();
        if (lcInput.includes('hello') || lcInput.includes('hi') || lcInput.includes('hey')) return "Hello! Hope you liked this portfolio. This portfolio is like a minefield of bugs.";
        if (lcInput.includes('help')) return "So, yeah Amey can help you with iOS development, backend solutions in .NET/C# or Golang, and even some DevOps magic.! Just reach out to him via Github";
        if (lcInput.includes('tech')) return "Okay tech! I love tech and so does Amey. He works with Swift for iOS/macOS, .NET and Golang for backend, and is diving into Generative AI.";
        if (lcInput.includes('contact')) return "You can contact Amey via email at amey.sunu13@gmail.com or open an issue at his Github repository. You can find that on the footer of this page."; 

        return "Sorry, I didn't quite understand that. Could you rephrase? You can ask about services, hobbies, or tech.";
    };
    
    const CloseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>);

    return (
        <div className={`chatbot-container ${isOpen ? 'open' : 'closed'}`}>
            <div className="chatbot-widget">
                <div className="chatbot-header">
                    <h3>Contact me</h3>
                    <button onClick={onClose}><CloseIcon /></button>
                </div>

                <div className="messages-area">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`message-container ${msg.sender}`}>
                            <div className={`message-bubble ${msg.sender}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="typing-indicator">
                            <div className="typing-bubble">
                                <div className="typing-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="input-area">
                    <div className="quick-replies">
                        <button className="quick-reply" onClick={() => handleQuickReply('hello')}>Just saying hello!</button>
                        <button className="quick-reply" onClick={() => handleQuickReply('help')}>What can Amey help with?</button>
                        <button className="quick-reply" onClick={() => handleQuickReply('tech')}>Tech stuff Amey is involved with</button>
                        <button className="quick-reply" onClick={() => handleQuickReply('contact')}>Get in touch</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;

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
    const [inputValue, setInputValue] = useState<string>('');
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
            }, {
                id: 2,
                text: "Just simply type in keywords like 'hello', 'contact', 'hobby', or 'tech' to get started.",
                sender: 'bot'
            }]);
        }
    }, [isOpen, messages.length]);

    const handleSendMessage = (): void => {
        if (inputValue.trim() === '') return;
        const userMessage: Message = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);
        setTimeout(() => {
            const botResponseText = getBotResponse(inputValue);
            const botMessage: Message = { id: Date.now() + 1, text: botResponseText, sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500 + Math.random() * 500);
    };

    const getBotResponse = (userInput: string): string => {
        const lcInput = userInput.toLowerCase();
        if (lcInput.includes('hello') || lcInput.includes('hi') || lcInput.includes('hey')) return "Hi there! What can I do for you?";
        if (lcInput.includes('service')) return "So, yeah Amey can help you with iOS development, backend solutions, and even some DevOps magic. Just ask!";
        if (lcInput.includes('hobby')) return "In my free time, you'll find me playing video games, exploring new tech, or just chilling with a pint.";
        if (lcInput.includes('magic')) return "Ohhh okay! So, I'm built with React and TypeScript, and I can help you with questions about Amey's work, interests, or even just to chat! Here's the real magic: Amey built me with lot of bugs and help from ChatGPT. So, if you find any bugs, just let him know!";
        if (lcInput.includes('bye') || lcInput.includes('thank')) return "You're welcome! Feel free to reach out anytime. Have a great day!";
        if (lcInput.includes('tech')) return "Okay tech! I love tech and so does Amey. He works with Swift for iOS/macOS, .NET and Golang for backend, and is diving into Generative AI. If you want to know more about his tech stack, just give him a shout!";
        if (lcInput.includes('contact')) return "You can contact Amey via email at amey.sunu13@gmail.com or open an issue at his Github repository. You can find that on the footer of this page."; 

        return "Sorry, I didn't quite understand that. Could you rephrase? You can ask about services, hobbies, or tech.";
    };

    const SendIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>);
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
                    <div className="input-wrapper">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Type a message..."
                        />
                        <button onClick={handleSendMessage} disabled={!inputValue.trim()}>
                            <SendIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;

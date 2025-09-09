import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Chatbot from './pages/Chatbot';
import NotFound from './404';
import Home from './pages/Home';
import SystemCrash from './pages/SystemCrash';
import About from './pages/About';
import Stuff from './pages/Stuff';
import Construction from './pages/Construction';
// import Banner from './pages/Banner';
import BackgroundDecor from './components/BackgroundDecor';

const App = () => {

  const [isChatbotOpen, setChatbotOpen] = useState(false);
  const toggleChatbot = () => {
    setChatbotOpen(!isChatbotOpen);
  };

  return (
    <Router>
      {/* <Banner /> */}
      <BackgroundDecor />
      <Header onContactClick={toggleChatbot} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/system-crash" element={<SystemCrash />}/>
        <Route path="/stuff" element={<Stuff />}/>
        <Route path = '/under-construction' element = {<Construction />} />
      </Routes>
      <Chatbot isOpen={isChatbotOpen} onClose={toggleChatbot} />
    </Router>
  );
};

export default App;
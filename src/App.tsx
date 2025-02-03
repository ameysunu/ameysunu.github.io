import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './404';
import Home from './pages/Home';
import SystemCrash from './pages/SystemCrash';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/system-crash" element={<SystemCrash />}/>
      </Routes>
    </Router>
  );
};

export default App;

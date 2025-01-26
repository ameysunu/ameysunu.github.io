import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Holder from './Holder';
import NotFound from './404';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Holder />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
};

export default App;

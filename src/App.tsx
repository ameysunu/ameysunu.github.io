import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shell from './Shell';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import PostDetail from './PostDetail';
import NotFound from './404';

export default function App() {
  return (
    <Router>
      <Shell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Shell>
    </Router>
  );
}

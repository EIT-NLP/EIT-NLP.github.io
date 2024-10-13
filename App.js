import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Publications from './Publications';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </Router>
  );
}

export default App;

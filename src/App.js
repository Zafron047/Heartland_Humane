import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/Details" Component={Details} />
      </Routes>
    </Router>
  );
}

export default App;

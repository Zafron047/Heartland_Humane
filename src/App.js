import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/Details" Component={Details} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

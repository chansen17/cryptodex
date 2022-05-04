import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Faq from './pages/Faq';
import Trending from './pages/Trending';
import Watchlist from './pages/Watchlist';
import CoinDetails from './pages/CoinDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/trending" element={<Trending/>} />
          <Route exact path="/watchlist" element={<Watchlist/>} />
          <Route exact path="/faq" element={<Faq/>} />
          <Route exact path="/details/:id" element={<CoinDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

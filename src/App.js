import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Faq from './pages/Faq';
import Trending from './pages/Trending';
import Watchlist from './pages/Watchlist';
import CoinDetails from './pages/CoinDetails';
import FeatureDetails from './pages/FeatureDetails';

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
          <Route exact path="/fast-money" element={<FeatureDetails/>}/>
          <Route exact path="/the-future" element={<FeatureDetails/>}/>
          <Route exact path="/going-green" element={<FeatureDetails/>}/>
          <Route exact path="/support" element={<FeatureDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

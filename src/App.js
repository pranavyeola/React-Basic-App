import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Home } from './components/home/Home';

function App() {
  return (
    <div>
    <Header />
    <Home />
    <Footer />

    </div>
   
  );
}

export default App;

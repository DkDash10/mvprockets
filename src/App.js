import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Restaurants from './components/Restaurants';
import Map from './components/Map';
import Menu from './components/Menu';
import Chef from './components/Chef';
import Fonditas from './components/Fonditas';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="header">
        <Navbar/>
        <Banner/>
      </div>
      <Categories/>
      <Restaurants/>
      <Map/>
      <Menu/>
      <Chef/>
      <Fonditas/>
      <Footer/>
    </>
  );
}

export default App;

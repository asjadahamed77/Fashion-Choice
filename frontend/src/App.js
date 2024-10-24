import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Collections from './pages/Collections';
import CollectionDetails from './pages/CollectionDetails';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/collections/:productCategory' element={<Collections />} />
        <Route path='/product/:productId' element={<CollectionDetails />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

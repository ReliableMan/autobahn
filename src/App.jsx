import Header from './components/Header/Header';
import HeroScroller from './components/HeroScroller/HeroScroller';
import Services from './components/Services/Services';
import AboutGallery from './components/AboutGallery/AboutGallery';
import Footer from './components/Footer/Footer';

import Imprint from './pages/Imprint';

import SmoothScroll from './helpers/SmoothScroll';
import ScrollToTop from './helpers/ScrollToTop';

import { Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <HeroScroller />
        <Services />
        <AboutGallery />
      </main>
      <Footer />
        <div className="ios-safari-buffer" />
    </SmoothScroll>
  );
}

function MinimalLayout({ children }) {
  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff' }}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/imprint" 
          element={
            <MinimalLayout>
              <Imprint />
            </MinimalLayout>
          } 
        />
      </Routes>
    </>
  );
}
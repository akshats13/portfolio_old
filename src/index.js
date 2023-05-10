import ReactDOM from 'react-dom';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei'; 
import './index.css';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Suspense fallback={null}>
     <Portfolio />
     <Footer />
  </Suspense>
  <Loader />
  </>
);



import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Home />
      </main>
      <Footer />
    </>
  );
}

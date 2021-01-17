import React from 'react';
import Router from './utils/Router';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';

function App() {
  return (
    <div id="app" className="app">
      <Header />
      <main id="app-main" className="app-main container-fluid">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;

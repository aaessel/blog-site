import React from 'react';
import Navbar from './components/Navbar';
import PageTitle from './components/PageTitle';
import RecentCard, {AllCards,MainCard} from './components/card';
import Footer from './components/Footer';
import PageBody from './components/PageBody';



function App() {
  return (
    <div>
    <Navbar/>
    <PageTitle/>
    <PageBody/>
    <Footer/>
    
    </div>
  );
}

export default App;

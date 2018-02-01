import React from 'react';
import './App.css';

import Header from '../../containers/Header/Header';
import Menu from '../../containers/Menu/Menu';
import Main from '../../containers/Main/Main';
import Footer from '../../containers/Footer/Footer';


const App = () => {
  return (
    <div>
        <Header />
        <Menu />
        <Main arr = {[1,2,3]}/>
        <Footer />
    </div>
  )
}

export default App;
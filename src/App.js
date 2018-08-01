import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import JumboTron from './components/Jumbotron';
import Kartu from './components/Card';
import Kartu2 from './components/Card2';
import Kegiatan from './components/Kegiatan';
import Mondok from './components/Mondok';
import Sponsor from './components/Sponsor';
import Kontak from './components/Kontak';
import Footer from './components/Footer';
import '../src/components/Style.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <JumboTron />
        <Kartu />
        <hr />
        <Kartu2 />
        <hr />
        <br />
        <Kegiatan />
        <br />
        <hr />
        <Mondok />
        <br />
        <hr />
        <Sponsor />
        <hr />
        <br />
        <Kontak />
        <hr />
        <Footer />
        <br />
      </div>
    );
  }
}

export default App;

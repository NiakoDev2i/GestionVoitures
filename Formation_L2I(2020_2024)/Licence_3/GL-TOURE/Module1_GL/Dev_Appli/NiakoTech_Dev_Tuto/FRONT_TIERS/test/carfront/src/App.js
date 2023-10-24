import './App.css';
import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar'; 
import Typography from "@mui/material/Typography";
import Carlist from './components/Carlist';
import logo from './NIAKO KEBE.png'; // Importez l'image du logo depuis le répertoire public
import Footer from './Footer'; // Importez le composant de footer
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarInfo from './components/CarInfo';


function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>Carshop</Typography>
          <div style={{ maxWidth: '100px', maxHeight: '50px' }}>
            <img src={logo} alt="Logo de l'application" style={{ width: '100%', height: '100%' }} />
          </div>
        </Toolbar>
      </AppBar>
      <Router>
        <Routes>
          <Route path="/" element={<Carlist />} />
          <Route path="/car/:id" element={<CarInfo />} />
        </Routes>
      </Router>
      <Footer /> {/* Ajoutez le composant de footer en bas de l'application */}
    </div>
  );
}

export default App;

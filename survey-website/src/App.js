import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import BasicInfo from './Components/BasicInfo';
import AdditionalQuestions from './Components/AdditionalQuestions';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' element={
            <BasicInfo />
        }
        />
        <Route path='/questions' element={
          <AdditionalQuestions />
        } />

      </Routes>
      <Header />
      <Footer />

    </Router>

  );
}

export default App;

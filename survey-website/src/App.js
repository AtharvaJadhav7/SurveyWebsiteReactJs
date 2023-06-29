import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import BasicInfo from './Components/BasicInfo';
import AdditionalQuestions from './Components/AdditionalQuestions';
import EnteredDetails from './Components/EnteredDetails';
import ThankYouPage from './Components/ThankYouPage';
import { About } from './Components/About';

function App() {
  const initBasicData = JSON.parse(localStorage.getItem('data')) ?? {};
  
  const [basicData, setBasicData] = useState(initBasicData);
  useEffect(() => {
    JSON.parse(localStorage.getItem('data'));
  }, [basicData]);
  const addBasicData = (name,email,contact)=>{
    console.log("I am adding", name, email, contact);
    const myBasicData={
      name: name,
      email: email,
      contact: contact
    }
    console.log(myBasicData);
    setBasicData(myBasicData);
    console.log(basicData);
    localStorage.setItem("data", JSON.stringify(myBasicData));
  }

  const initQuestionsData = JSON.parse(localStorage.getItem('questiondata')) ?? {};

  const [questiondData, setQuestionData] = useState(initQuestionsData);
  useEffect(() => {
    JSON.parse(localStorage.getItem('questiondata'));
  }, [questiondData]);

  const addQuestionData = (profession,interest,reference)=>{
    console.log("I am adding", profession, interest, reference);
    const myQuestionData={
      profession: profession,
      interest: interest,
      reference: reference
    }
    console.log(myQuestionData);
    setQuestionData(myQuestionData);
    localStorage.setItem("questiondata", JSON.stringify(myQuestionData));
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<BasicInfo addBasicData={addBasicData}/>} />
        <Route
          path='/questions'
          element={<AdditionalQuestions addQuestionData={addQuestionData}/>}
        />
        <Route
          path='/details'
          element={
            <EnteredDetails data={basicData} questiondData={questiondData}/>
          }
        />
        <Route
          path='/thanks'
          element={
            <ThankYouPage/>
          }
        />
        <Route
          path='/about'
          element={
            <About/>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

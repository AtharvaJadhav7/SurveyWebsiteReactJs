import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import BasicInfo from './Components/BasicInfo';
import AdditionalQuestions from './Components/AdditionalQuestions';
import EnteredDetails from './Components/EnteredDetails';
import ThankYouPage from './Components/ThankYouPage';

function App() {
  let initBasicData;
  if (localStorage.getItem('data') === null) {
    initBasicData = {};
  } else {
    initBasicData = JSON.parse(localStorage.getItem('data'));
  }
  
  const [basicData, setBasicData] = useState(
    initBasicData
  );

  const addBasicData = (name,email,contact)=>{
    console.log("I am adding", name, email, contact);
    const myBasicData={
      name: name,
      email: email,
      contact: contact
    }
    console.log(myBasicData);
    setBasicData([basicData,myBasicData])
    localStorage.setItem("data", JSON.stringify(myBasicData));
  }

  let initQuestionsData;
  if (localStorage.getItem('questiondata') === null) {
    initQuestionsData = {};
  } else {
    initQuestionsData = JSON.parse(localStorage.getItem('questiondata'));
  }

  const [questiondData, setQuestionData] = useState(
    initQuestionsData
  );

  const addQuestionData = (profession,interest,reference)=>{
    console.log("I am adding", profession, interest, reference);
    const myQuestionData={
      profession: profession,
      interest: interest,
      reference: reference
    }
    console.log(myQuestionData);
    setQuestionData([questiondData,myQuestionData])
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

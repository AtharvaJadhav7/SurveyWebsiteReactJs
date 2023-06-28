import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdditionalQuestions({addQuestionData}) {
  const [profession, setProfession] = useState("");
  const [interest, setInterest] = useState("");
  const [reference, setReference] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!profession || !interest || !reference) {
      alert("All fields necessary!");
    } else {
      console.log(profession, interest, reference);
      addQuestionData(profession,interest,reference);
      navigate('/details');
    }
  };

  const handleProfessionChange = (e) => {
    setProfession(e.target.value);
  };

  const handleInterestChange = (e) => {
    setInterest(e.target.value);
  };

  const handleReferenceChange = (e) => {
    setReference(e.target.value);
  };

  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left h-100">
            <div className="card-body">
              <form onSubmit={submit}>
                <label htmlFor="">
                  <h4>Addtional Questions</h4>
                </label>
                <div className="form-group my-2" onChange={handleProfessionChange}>
                  <label htmlFor="q1">
                    {" "}
                    <b>1.</b> What is your profession?
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="student"
                    autoComplete="off"
                    className="mx-1"
                    value="Student"
                  />
                  <label htmlFor="student"> Student</label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="sde"
                    autoComplete="off"
                    className="mx-1"
                    value="Software Engineer"
                  />
                  <label htmlFor="sde"> Software Engineer</label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="teacher"
                    autoComplete="off"
                    className="mx-1"
                    value="Teacher"
                  />
                  <label htmlFor="teacher"> Teacher</label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="others"
                    autoComplete="off"
                    className="mx-1"
                    value="Others"
                  />
                  <label htmlFor="others"> Others:</label>
                  <input
                    type="text"
                    id="otherProfession"
                    autoComplete="off"
                    className="form-control mx-1"
                  />
                  <br />
                  <hr />
                </div>
                <div className="form-group my-2" onChange={handleInterestChange}>
                  <label htmlFor="q2">
                    {" "}
                    <b>2.</b> What are your interests?
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="dsa"
                    autoComplete="off"
                    className="mx-1"
                    value="DSA"
                  />
                  <label htmlFor="dsa"> DSA</label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="fullstack"
                    autoComplete="off"
                    className="mx-1"
                    value="Full Stack Development"
                  />
                  <label htmlFor="fullstack"> Full Stack Development</label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="dataScience"
                    autoComplete="off"
                    className="mx-1"
                    value="Data Science"
                  />
                  <label htmlFor="dataScience"> Data Science</label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="compeProgramming"
                    autoComplete="off"
                    className="mx-1"
                    value="Competitive Programming"
                  />
                  <label htmlFor="compeProgramming"> Competitive Programming</label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="others"
                    autoComplete="off"
                    className="mx-1"
                    value="Others"
                  />
                  <label htmlFor="others"> Others:</label>
                  <input
                    type="text"
                    id="otherInterest"
                    autoComplete="off"
                    className="form-control mx-1"
                  />
                  <br />
                  <hr />
                </div>
                <div className="form-group my-2" onChange={handleReferenceChange}>
                  <label htmlFor="q3">
                    {" "}
                    <b>3.</b> Where did you hear about us?
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="referenceRadio"
                    id="news"
                    autoComplete="off"
                    className="mx-1"
                    value="News Paper"
                  />
                  <label htmlFor="News Paper"> News Paper</label>
                  <br />
                  <input
                    type="radio"
                    name="referenceRadio"
                    id="LinkedIn"
                    autoComplete="off"
                    className="mx-1"
                    value="LinkedIn"
                  />
                  <label htmlFor="LinkedIn"> LinkedIn</label>
                  <br />
                  <input
                    type="radio"
                    name="referenceRadio"
                    id="Instagram"
                    autoComplete="off"
                    className="mx-1"
                    value="Instagram"
                  />
                  <label htmlFor="Instagram"> Instagram</label>
                  <br />
                  <input
                    type="radio"
                    name="referenceRadio"
                    id="others"
                    autoComplete="off"
                    className="mx-1"
                    value="Others"
                  />
                  <label htmlFor="others"> Others:</label>
                  <input
                    type="text"
                    id="otherReference"
                    autoComplete="off"
                    className="form-control mx-1"
                  />
                  <br />
                </div>
                <button type="submit" className="btn btn-success mx-3">
                  Next
                </button>
              </form>
              <center>
                <span className="badge rounded-pill disabled">1</span>
                <span className="badge badge-pill bg-success">
                  <b>2</b>
                </span>
                <span className="badge rounded-pill disabled">3</span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

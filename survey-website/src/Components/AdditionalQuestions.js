import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdditionalQuestions(onSubmit) {
    const [profession, setProfession] = useState('');
  const [interests, setInterests] = useState([]);
  const [referral, setReferral] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      profession,
      interests,
      referral
    };
    onSubmit(formData);
    navigate('/details');
  };
    return (
        <div className="container-fluid qform">
            <div className="col-md-5 m-auto">
                <div className="mt-3">
                    <div className="card text-left h-100">
                        <div className="card-body">
                            <form onSubmit={handleFormSubmit}>
                                <label htmlFor=""><h4>Addtional Questions</h4></label>
                                <div className="form-group my-2">
                                    <label htmlFor="">
                                        {" "}
                                        <b>1.</b> What is your profession?
                                    </label>
                                    <br />
                                    <input type="radio"
                                        name="ProfessionRadio"
                                        id="student"
                                        autoComplete='off'
                                        className='mx-1'
                                    />
                                    <label htmlFor="student"> Student</label>
                                    <br />
                                    <input type="radio"
                                        name="ProfessionRadio"
                                        id="sde"
                                        autoComplete='off'
                                        className='mx-1'
                                    />
                                    <label htmlFor="sde"> Software Engineer</label>
                                    <br />
                                    <input type="radio"
                                        name="ProfessionRadio"
                                        id="teacher"
                                        autoComplete='off'
                                        className='mx-1'
                                    />
                                    <label htmlFor="teacher"> Teacher</label>
                                    <br />
                                    <input type="radio"
                                        name="ProfessionRadio"
                                        id="others"
                                        autoComplete='off'
                                        className='mx-1'
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
                                <div className="form-group my-2">
                                    <label htmlFor="">
                                        {" "}
                                        <b>2.</b> What are your interests?
                                    </label>
                                    <br />
                                    <input type="checkbox"
                                        name="interestRadio"
                                        id="dsa"
                                        autoComplete='off'
                                        className='mx-1'
                                    />
                                    <label htmlFor="dsa"> DSA</label>
                                    <br />
                                    <input type="checkbox"
                                        name="interestRadio"
                                        id="fullstack"
                                        autoComplete='off'
                                        className='mx-1'
                                    />
                                    <label htmlFor="fullstack"> Full Stack Development</label>
                                    <br />
                                    <input type="checkbox"
                                        name="interestRadio"
                                        id="dataScience"
                                        autoComplete='off'
                                        className='mx-1'
                                    />
                                    <label htmlFor="dataScience"> Data Science</label>
                                    <br />
                                    <input type="checkbox"
                                        name="interestRadio"
                                        id="compeProgramming"
                                        autoComplete='off'
                                        className='mx-1'
                                    />
                                    <label htmlFor="compeProgramming"> Competitive Programming</label>
                                    <br />
                                    <input type="checkbox"
                                        name="interestRadio"
                                        id="others"
                                        autoComplete='off'
                                        className='mx-1'
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
                                <div className="form-group my-2">
                                    <label htmlFor="">
                                        {" "}
                                        <b>3.</b> Where did you hear about us?
                                    </label>
                                    <br />
                                    <input type="radio"
                                        name="interestRadio"
                                        id="dsa"
                                        autoComplete='off'
                                        className='mx-1'
                                    />
                                    <label htmlFor="student"> News Paper</label>
                                    <br />
                                    <input type="radio"
                                        name="interestRadio"
                                        id="news"
                                        autoComplete='off'
                                        className='mx-1'
                                    />
                                    <label htmlFor="sde"> LinkedIn</label>
                                    <br />
                                    <input type="radio"
                                        name="interestRadio"
                                        id="linkedin"
                                        autoComplete='off'
                                        className='mx-1'
                                    />
                                    <label htmlFor="teacher"> Teacher</label>
                                    <br />
                                    <input type="radio"
                                        name="interestRadio"
                                        id="others"
                                        autoComplete='off'
                                        className='mx-1'
                                    />
                                    <label htmlFor="others"> Others:</label>
                                    <input
                                        type="text"
                                        id="otherInterest"
                                        autoComplete="off"
                                        className="form-control mx-1"
                                    />
                                    <br />
                                </div>
                                <button type='submit' className='btn btn-success mx-3'>Next</button>
                            </form>
                            <center>
                                <span className="badge rounded-pill disabled">1</span>
                                <span className="badge badge-pill bg-success"><b>2</b></span>
                                <span className="badge rounded-pill disabled">3</span>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export default function BasicInfo() {
  return (
    <div className="container-fluid qform">
        <div className="col-md-5 m-auto">
            <div className="mt-3">
                <div className="card text-left h-100">
                    <div className="card-body my-3">
                        <form>
                            <label htmlFor="">
                                <h4>Basic Details</h4>
                            </label>
                            <div className="form-group my-3">
                                <label htmlFor="">
                                    {" "}
                                    <b>1.</b> Name
                                </label>
                                <input  type="text"
                                        name="name"
                                        className='form-control my-2'
                                        placeholder='Enter your Name'
                                        autoComplete='off'
                                 />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="">
                                    {" "}
                                    <b>2.</b> Email
                                </label>
                                <input  type="email"
                                        name='email'
                                        className='form-control my-2'
                                        placeholder='Enter your Email'
                                        autoComplete='off' 
                                />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="">
                                    {" "}
                                    <b>3.</b> Contact No.
                                </label>
                                <input  type="tel"
                                        name='contact'
                                        className='form-control my-2'
                                        placeholder='Enter your Contact No.'
                                        autoComplete='off' 
                                />
                            </div>
                            <button type='submit' className='btn btn-success mx-3'>Next</button>
                        </form>
                        <center>
                            <span className="badge badge-pill bg-success"><b>1</b></span>
                            <span className="badge rounded-pill disabled">2</span>
                            <span className="badge rounded-pill disabled">3</span>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

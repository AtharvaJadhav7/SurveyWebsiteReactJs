import React from 'react';

export default function EnteredDetails({ name, email, contact, profession, interests, referral }) {
  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left h-100">
            <div className="card-body my-3">
              <h4>Entered Details</h4>
              <div className="details">
                <p><b>Name:</b> {name}</p>
                <p><b>Email:</b> {email}</p>
                <p><b>Contact No.:</b> {contact}</p>
                <p><b>Profession:</b> {profession}</p>
                <p><b>Interests:</b> {interests.join(", ")}</p>
                <p><b>Referral:</b> {referral}</p>
              </div>
              <button type="submit" className="btn btn-success mx-3">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

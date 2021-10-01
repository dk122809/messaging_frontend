import React from "react";
import projectImage from "assets/image/projectImage.png";

const Dashboard = () => {
  return (
    <div className="container dashboard">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body creat-team-body">
              <div className="card-top create-team">
                <img
                  src={projectImage}
                  alt="Project icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="card-top">
                <img
                  src={projectImage}
                  alt="Project icon"
                />
                <span>{new Date().toDateString()}</span>
              </div>
              <hr />
              This is some text within a card body.
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="card-top">
                <img
                  src={projectImage}
                  alt="Project icon"
                />
                <span>{new Date().toDateString()}</span>
              </div>
              <hr />
              This is some text within a card body.
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="card-top">
                <img
                  src={projectImage}
                  alt="Project icon"
                />
                <span>{new Date().toDateString()}</span>
              </div>
              <hr />
              This is some text within a card body.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import projectImage from "assets/image/projectImage.png";
import * as Api from "utils/apiHandle";

const Dashboard = () => {
  const [joinedTeams, setJoinedTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const teams = await Api.apiHandle("team/joinedTeam", "", "GET");
      if (teams) setJoinedTeams(teams.data);
    };
    fetchTeams();
  }, []);

  const displayTeamCards = joinedTeams.map((item, index) => (
    <div className="col-md-4" key={index}>
      <div className="card">
        <div className="card-body">
          <div className="card-top">
            <img src={projectImage} alt="Project icon" />
            <span>{new Date(item.createdAt).toDateString()}</span>
          </div>
          <hr />
          {item.name}
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container dashboard">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body creat-team-body">
              <div className="card-top create-team">
                <img src={projectImage} alt="Project icon" />
              </div>
            </div>
          </div>
        </div>
        {displayTeamCards}
      </div>
    </div>
  );
};

export default Dashboard;

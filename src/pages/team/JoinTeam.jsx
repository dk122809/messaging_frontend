import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FormField from "json/Team/teamJoin.json";
import * as Api from "utils/apiHandle";
import SelectOptionGroup from "components/form/SelectOptionGroup";
import { useHistory } from "react-router-dom";
import AuthForm from "components/form/AuthNTeamForm";
import uiData from "json/Team/teamJoinUiData.json";

const JoinTeam = () => {
  const defaultTeamData = {
    teamId: "",
  };
  const [teamData, setTeamData] = useState({ ...defaultTeamData });
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchTeams = async () => {
      const teams = await Api.apiHandle("team/", "", "GET");
      if (teams) setTeams([{ name: "Select team", _id: "" }, ...teams.data]);
    };
    fetchTeams();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const teamCreate = await Api.apiHandle("team/", teamData, "PUT");
    if (teamCreate) {
      setTeamData({ ...defaultTeamData });
      toast.success(teamCreate.message);
      setLoading(false);
      history.push("/");
    } else {
      setLoading(false);
    }
  };

  const displayFields = FormField.map((item, index) => (
    <SelectOptionGroup
      key={index}
      label={item.label}
      icon={item.icon}
      value={teamData[item.name]}
      onChange={handleChange}
      name={item.name}
      options={teams}
    />
  ));

  return (
    <>
      <AuthForm
        displayFields={displayFields}
        handleSubmit={handleSubmit}
        loading={loading}
        uiData={uiData}
      />
    </>
  );
};

export default JoinTeam;

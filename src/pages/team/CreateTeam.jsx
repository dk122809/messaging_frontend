import React, { useState } from "react";
import { toast } from "react-toastify";
import InputWithIcon from "components/form/InputWithIcon";
import FormField from "json/Team/teamCreate.json";
import * as Api from "utils/apiHandle";
import { useHistory } from "react-router-dom";
import AuthForm from "components/form/AuthNTeamForm";
import uiData from "json/Team/teamCreateUiData.json";

const CreateTeam = () => {
  const defaultTeamData = {
    name: "",
  };
  const [teamData, setTeamData] = useState({ ...defaultTeamData });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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
    const teamCreate = await Api.apiHandle("team/", teamData, "POST");
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
    <InputWithIcon
      key={index}
      label={item.label}
      icon={item.icon}
      type={item.type}
      placeholder={item.placeholder}
      value={teamData[item.name]}
      onChange={handleChange}
      name={item.name}
      required={item.required}
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

export default CreateTeam;

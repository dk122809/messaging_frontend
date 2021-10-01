import React, { useState } from "react";
import { toast } from "react-toastify";
import InputWithIcon from "components/form/InputWithIcon";
import FormField from "json/Auth/signup.json";
import * as Api from "utils/apiHandle";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "assets/css/custom.css";
import { useHistory } from "react-router-dom";
import AuthForm from "components/form/AuthNTeamForm";
import uiData from "json/Auth/signupUiData.json";

const Signup = () => {
  const history = useHistory();
  const defaultUserData = {
    name: "",
    username: "",
    password: "",
  };
  const [userData, setUserData] = useState({ ...defaultUserData });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userCreate = await Api.apiHandle("auth/register", userData, "POST");
    if (userCreate) {
      setUserData({ ...defaultUserData });
      localStorage.setItem("token", userCreate.data.token);
      toast.success(userCreate.message);
      setLoading(false);
      history.push("/teamCreate");
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
      value={userData[item.name]}
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

export default Signup;

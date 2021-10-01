import React, { useState } from "react";
import { toast } from "react-toastify";
import InputWithIcon from "components/form/InputWithIcon";
import FormField from "json/Auth/signin.json";
import * as Api from "utils/apiHandle";
import { useHistory } from "react-router-dom";
import AuthForm from "components/form/AuthNTeamForm";
import uiData from "json/Auth/signinUiData.json";

const Signin = () => {
  const history = useHistory();
  const defaultUserData = {
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
    const userLogin = await Api.apiHandle("auth/login", userData, "POST");
    if (userLogin.status === 200) {
      setUserData({ ...defaultUserData });
      localStorage.setItem("token", userLogin.data.data.token);
      toast.success(userLogin.data.message);
      setLoading(false);
      history.push("/");
    } else {
      toast.error(userLogin.data.message);
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

export default Signin;

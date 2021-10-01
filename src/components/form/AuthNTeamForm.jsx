import React from "react";
import Top from "components/form/Top";
import Buttom from "components/form/Buttom";
import Button from "components/form/Button";
import Loader from "react-loader-spinner";

const AuthForm = ({ handleSubmit, displayFields, loading, uiData }) => {
  return (
    <div className="account-pages my-5 pt-sm-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <Top
              title={uiData.title}
              subTitle={`${uiData.title} to continue to Chatvia.`}
            />

            <div className="card">
              <div className="card-body p-4">
                <div className="p-3">
                  <form onSubmit={handleSubmit}>
                    {displayFields}
                    <div className="d-flex justify-content-center background-purple">
                      <Button
                        type="submit"
                        className="btn btn-primary waves-effect waves-light"
                        value={uiData.title}
                      />
                      <Loader
                        type="Bars"
                        color="#FFF"
                        height={30}
                        width={30}
                        className="loader"
                        visible={loading}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <Buttom
              title={uiData.ButtomTitle}
              to={uiData.ButtomUrl}
              value={uiData.ButtomText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

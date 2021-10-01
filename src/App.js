import "assets/css/bootstrap.min.css";
import "assets/css/icons.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "routes/Routes";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "assets/css/custom.css";

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Router />
    </div>
  );
}

export default App;

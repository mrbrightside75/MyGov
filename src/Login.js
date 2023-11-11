import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div id="logInRow" className="row">
      <div id="logInCol" className="col">
        <div className="row">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Log-In
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <form>
                    <div className="row">
                      <strong>Username/Email: </strong>
                      <input
                        id="userName"
                        className="form-control"
                        type="text"
                      />
                    </div>
                    <div className="row">
                      <strong>Password: </strong>
                      <input
                        id="passWord"
                        className="form-control"
                        type="password"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* End of Accordion 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Create New Account
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <form>
                    <div className="row">
                      <strong>Email: </strong>
                      <input className="form-control" type="email" />
                    </div>
                    <div className="row">
                      <strong>Password: </strong>
                      <input className="form-control" type="password" />
                    </div>
                    <div id="createAccountBtn" className="row">
                      <button type="button" className="btn btn-primary btn-sm">
                        Create Account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* End of Accordion 2 */}
          </div>
        </div>
        {/* End of accordion row */}
        <div id="buttonRow" className="row">
          <div id="continueAnyway" className="col">
            <Link to="/dashboard">
              <button type="button" className="btn btn-primary btn-lg">
                Continue Without Logging In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

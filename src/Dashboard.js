import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import VotingInfoTool from "./VotingInfoComponent";
export const address = "";
const Dashboard = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div id="user-info-section" className="row">
        {/* <!--Profile Card--> */}
        <div id="profile-card" className="col-5">
          <div id="profile-pic" className="col-5">
            <img src="Images/IMG_6076 2.jpg" />
          </div>
          <div id="profile-card-info" className="col-5">
            <div id="profile-card-name" className="row">
              <p>Joseph Smith</p>
            </div>

            <div id="profile-card-location" className="row">
              <strong>{address}</strong>
            </div>
          </div>
          <div id="login-button" className="col button">
            <Link to="/" className="btn btn-primary btn-sm" role="button">
              Login
            </Link>
          </div>
        </div>

        {/* <!--Notification Center--> */}
        <div id="notification-center" className="col">
          {/* <!--Card 1--> */}
          <div id="card-1" className="col-4 nc-card">
            <div className="card">
              <img
                id="card-logo"
                src="Images/exclamation-mark.jpg"
                className="card-img-top-left"
                alt="..."
                width="22"
                height="40"
              />
              <div className="card-body bg-dark">
                <h5 className="card-title text-light">Card title</h5>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          {/* <!--Card 2--> */}
          <div id="card-2" className="col-4 nc-card">
            <div className="card">
              <img
                id="card-logo"
                src="Images/exclamation-mark.jpg"
                className="card-img-top-left"
                alt="..."
                width="22"
                height="40"
              />
              <div className="card-body bg-dark">
                <h5 className="card-title text-light">Card title</h5>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          {/* <!--Card 3--> */}
          <div id="card-3" className="col-4 nc-card">
            <div className="card">
              <img
                id="card-logo"
                src="Images/exclamation-mark.jpg"
                className="card-img-top-left"
                alt="..."
                width="22"
                height="40"
              />
              <div className="card-body bg-dark">
                <h5 className="card-title text-light">Card title</h5>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          {/* <!--End Cards--> */}
        </div>
      </div>
      <hr />
      {/* <!--Event Calendar--> */}
      <div className="row">
        <div id="cal-section" className="col-5">
          <h2 id="event-cal-title">Event Calendar</h2>
          <table id="event-cal" className="table table-bordered table-dark">
            <thead>
              <tr>
                <th className="col-1">Sun</th>
                <th className="col-1">Mon</th>
                <th className="col-1">Tue</th>
                <th className="col-1">Wed</th>
                <th className="col-1">Thu</th>
                <th className="col-1">Fri</th>
                <th className="col-1">Sat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
              </tr>
              <tr>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
              </tr>
              <tr>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <VotingInfoTool /> */}
    </>
  );
};
export default Dashboard;

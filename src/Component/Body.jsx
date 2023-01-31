import React from "react";
import HomeRoutes from "../Routes/HomeRoutes";
import { NavLink } from "react-router-dom";

const Body = () => {
  return (
    <div className="main-body">
      <div>
        <div className="body-content">
          <div className="row">
            <div className="col-md-3">
              <div className="body-drawer">
                <div className="main-depart">
                  <ul>
                    <li>
                      <h3>Dashboard</h3>
                    </li>
                    <li>
                    <NavLink to="/administration"><h3>Administration</h3></NavLink>
                    </li>
                    <li>
                    <NavLink to="/assignment"><h3>Assignment</h3></NavLink>
                    </li>
                    <li>
                      <NavLink to="/library"><h3>Library</h3></NavLink>
                    </li>
                    <li>
                      <NavLink to="/student_service"><h3>Student Service</h3></NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="body-show">
                <HomeRoutes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "../../assets/img/generalImages/favicon.png";

var ps;

function Sidebar(props) {
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a
          href="http://localhost:3001/"
          className="simple-text logo-mini"
          target="_blank"
        >
          <div className="logo-img">
            <img src={logo} />
          </div>
        </a>
        <a
          href="http://localhost:3000/"
          className="simple-text logo-normal"
          target="_blank"
        >
          NODEGAMING
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;

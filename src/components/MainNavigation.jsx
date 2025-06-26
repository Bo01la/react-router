import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigaion() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              } // NavLink takes a function that has a built in object include a "isActive" property which is true when we are in the url defined in the "to={}"
              end // used to tell react that "isActive" is true only if "/" not "/something"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import { NavLink } from "react-router-dom";

const ProfileLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text text_type_main-medium ${isActive ? "" : "text_color_inactive"}`
      }
    >
      {children}
    </NavLink>
  );
};

export default ProfileLink;

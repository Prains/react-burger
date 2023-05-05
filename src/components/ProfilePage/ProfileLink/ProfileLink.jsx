import { NavLink } from "react-router-dom";

const ProfileLink = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text text_type_main-medium ${isActive ? "" : "text_color_inactive"}`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

export default ProfileLink;

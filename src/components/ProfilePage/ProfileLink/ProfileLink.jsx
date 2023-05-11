import { NavLink } from "react-router-dom";

const ProfileLink = ({ to, children, onClick, end}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text text_type_main-medium ${isActive ? "" : "text_color_inactive"}`
      }
      onClick={onClick}
      end
    >
      {children}
    </NavLink>
  );
};

export default ProfileLink;

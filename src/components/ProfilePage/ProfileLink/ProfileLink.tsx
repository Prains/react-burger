import React, { MouseEvent } from "react";
import { NavLink } from "react-router-dom";

interface ProfileLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  end?: boolean;
}

const ProfileLink: React.FC<ProfileLinkProps> = ({
  to,
  children,
  onClick,
  end,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text text_type_main-medium ${isActive ? "" : "text_color_inactive"}`
      }
      onClick={onClick}
      end={end}
    >
      {children}
    </NavLink>
  );
};

export default ProfileLink;

import * as React from "react";
import * as Menubar from "@radix-ui/react-menubar"; // Import Radix Menubar
import { Home, Fuel, CreditCard, Box, Tag, Users, FileText } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css"; // Import the CSS file

const NavigationBar = () => {
  const menuItems = [
    { name: "HOME", icon: Home, path: "/" },
    { name: "PUMP", icon: Fuel, path: "/pump-management" },
    { name: "TRANSACTIONS", icon: CreditCard, path: "/transactions" },
    { name: "INVENTORY", icon: Box, path: "/inventory" },
    { name: "FUEL PRICE", icon: Tag, path: "/fuel-price" },
    { name: "STAFF", icon: Users, path: "/staff" },
    { name: "REPORT", icon: FileText, path: "/report" },
  ];

  return (
    <Menubar.Root className="navigation-bar">
      {menuItems.map(({ name, icon: Icon, path }) => (
        <Menubar.Menu key={name}>
          <Menubar.Trigger asChild>
            <NavLink to={path} className="nav-link">
              <Icon className="nav-link-icon" />
              <span className="nav-link-text">{name}</span>
            </NavLink>
          </Menubar.Trigger>
        </Menubar.Menu>
      ))}
      <div className="profile-container">
        <div className="profile-image-container">
          <img
            src="/public/placeholder.svg"
            alt="User Profile"
            className="profile-image"
          />
        </div>
        <div className="profile-text-container">
          <div className="profile-name">John Doe</div>
          <div className="profile-email">john.doe@example.com</div>
        </div>
      </div>
    </Menubar.Root>
  );
};

export default NavigationBar;
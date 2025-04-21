import * as React from "react";
import * as Menubar from "@radix-ui/react-menubar"; // Import Radix Menubar
import { Home, Fuel, CreditCard, Box } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css"; // Import the CSS file

const NavigationBar = () => {
  const menuItems = [
    { name: "HOME", icon: Home, path: "/" },
    { name: "PUMP", icon: Fuel, path: "/pump-management" },
    { name: "TRANSACTIONS", icon: CreditCard, path: "/transactions" },
    { name: "INVENTORY", icon: Box, path: "/inventory" },
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
    </Menubar.Root>
  );
};

export default NavigationBar;
import React from "react";
import classes from "./Dropdown.module.scss";
import { learnContent } from "./navbarItems";
import DropdownItem from "./DropdownItem";

const LearnDropdown: React.FC<{ onCloseMobileMenu?: () => void }> = ({
  onCloseMobileMenu,
}) => {
  return (
    <div className={classes.learnContainer}>
      {learnContent.map((item, index) => (
        <DropdownItem
          key={`learn-item-${index}`}
          img={item.icon}
          title={item.title}
          desc={item.description}
          url={item.url}
          customSize={undefined}
          onCloseMobileMenu={onCloseMobileMenu}
        />
      ))}
    </div>
  );
};

export default LearnDropdown;

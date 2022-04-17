import React from "react";

const MobileAppBar = ({leading, actions}) => {
  return (
    <header className="mobile-Appbar">
      <div className="mobile-Appbar__leading">
        {leading}
      </div>
      <div className="mobile-Appbar__actions">
        {actions}
      </div>
    </header>
  );
};

export default MobileAppBar;

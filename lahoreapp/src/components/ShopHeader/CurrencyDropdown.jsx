import React from "react";
const CurrencyDropdown = props => {
  return (
    <div className="btn-group">
      <button
        className="btn dropdown-toggle my-2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        data-toggle="tooltip"
        title="Select currency"
      >
        CURRENCY
      </button>

      <div className="dropdown-menu dropdown-menu-right">
        <a href="#" className="dropdown-item">
          PKR
        </a>
        <a href="#" className="dropdown-item active">
          USD
        </a>
      </div>
    </div>
  );
};

export default CurrencyDropdown;

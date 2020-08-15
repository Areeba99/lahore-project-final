import React from "react";
const CurrencyDropdown = props => {
  return (
    <div class="btn-group">
      <button
        class="btn dropdown-toggle my-2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        data-toggle="tooltip"
        title="Select currency"
      >
        CURRENCY
      </button>

      <div class="dropdown-menu dropdown-menu-right">
        <a href="#" class="dropdown-item">
          PKR
        </a>
        <a href="#" class="dropdown-item active">
          USD
        </a>
      </div>
    </div>
  );
};

export default CurrencyDropdown;

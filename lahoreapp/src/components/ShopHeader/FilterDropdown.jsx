import React from "react";
const FilterDropdown = () => {
  return (
    <div className="btn-group">
      <button
        className="btn dropdown-toggle my-2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        data-toggle="tooltip"
        title="Filter results"
      >
        FILTER
      </button>

      <div id="filter" className="dropdown-menu dropdown-menu-right">
        <div className="dropdown-item custom-control custom-radio">
          <input
            type="radio"
            className="custom-control-input"
            id="defaultGroupExample1"
            name="groupOfDefaultRadios"
          />
          <label className="custom-control-label" for="defaultGroupExample1">
            Alphabetically
          </label>
        </div>

        <div className="dropdown-item custom-control custom-radio">
          <input
            type="radio"
            className="custom-control-input"
            id="defaultGroupExample2"
            name="groupOfDefaultRadios"
            checked
          />
          <label className="custom-control-label" for="defaultGroupExample2">
            Price Low to High
          </label>
        </div>

        <div className="dropdown-item custom-control custom-radio">
          <input
            type="radio"
            className="custom-control-input"
            id="defaultGroupExample3"
            name="groupOfDefaultRadios"
          />
          <label className="custom-control-label" for="defaultGroupExample3">
            Price High to Low
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;

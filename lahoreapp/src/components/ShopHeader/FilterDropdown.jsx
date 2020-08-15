import React from "react";
const FilterDropdown = () => {
  return (
    <div class="btn-group">
      <button
        class="btn dropdown-toggle my-2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        data-toggle="tooltip"
        title="Filter results"
      >
        FILTER
      </button>

      <div id="filter" class="dropdown-menu dropdown-menu-right">
        <div class="dropdown-item custom-control custom-radio">
          <input
            type="radio"
            class="custom-control-input"
            id="defaultGroupExample1"
            name="groupOfDefaultRadios"
          />
          <label class="custom-control-label" for="defaultGroupExample1">
            Alphabetically
          </label>
        </div>

        <div class="dropdown-item custom-control custom-radio">
          <input
            type="radio"
            class="custom-control-input"
            id="defaultGroupExample2"
            name="groupOfDefaultRadios"
            checked
          />
          <label class="custom-control-label" for="defaultGroupExample2">
            Price Low to High
          </label>
        </div>

        <div class="dropdown-item custom-control custom-radio">
          <input
            type="radio"
            class="custom-control-input"
            id="defaultGroupExample3"
            name="groupOfDefaultRadios"
          />
          <label class="custom-control-label" for="defaultGroupExample3">
            Price High to Low
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;

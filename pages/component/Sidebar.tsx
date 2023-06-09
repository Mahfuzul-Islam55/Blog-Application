import React, { Fragment } from "react";

const Sidebar = () => {
  return (
    <Fragment>
      <aside>
        <div className="sidebar-items">
          <div className="sidebar-content">
            <h4>Sort</h4>
            <select
              name="sort"
              id="lws-sort"
              className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            >
              <option value="">Default</option>
              <option value="newest">Newest</option>
              <option value="most_liked">Most Liked</option>
            </select>
          </div>
          <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-all"
                  className="radio"
                />
                <label htmlFor="lws-all">All</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-saved"
                  className="radio"
                />
                <label htmlFor="lws-saved">Saved</label>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </Fragment>
  );
};

export default Sidebar;

import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">OBus</a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

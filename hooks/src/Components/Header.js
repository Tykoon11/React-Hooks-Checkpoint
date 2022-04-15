import React from "react";
import { useState } from "react";

const Header = ({ handleChange, handleSearch }) => {
  const [entry, setEntry] = useState("");
 

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <p className="navbar-brand">Navbar</p>
          <form class="d-flex">
            <input
              className="form-control me-2"
              type="text number"
              placeholder="Search movie by title or rating"
              value={entry}
              onChange={(e) => {
                setEntry(e.target.value)
              }}
            />
            <button
              className="btn btn-dark"
              type="button"
              onClick={() => {
                handleSearch(entry);
              }}
            >
              Search
            </button>
            <button
              onClick={handleChange}
              style={{ marginLeft: 10, width: 200 }}
              type="button"
              className="btn btn-light"
            >
              Add Movie
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;



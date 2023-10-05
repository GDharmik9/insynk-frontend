import React from "react";
import "./Common.css";

function Header({ title, activeTab }) {
  return (
    <nav>
      <div className="header">
        <div ></div>
        <div >
          <span className="title">{title}</span>
        </div>
        <div className="warpper">
          <button
            className={
              activeTab === "tabcontent1" ? "addButton dispaly" : "addButton"
            }
            type="submit"
            onClick={() => console.log("add")}
          >
            Add
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;

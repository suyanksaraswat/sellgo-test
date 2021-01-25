import React from "react";
const Input = ({ value, onChange, onClick }) => {
  return (
    <div className="row search-input">
      <div className="input-field col s6 offset-s3">
        <input
          autoFocus
          value={value}
          onChange={onChange}
          type="text"
          className="search-input"
          style={{ fontSize: 21 }}
        />
        <button
          type="submit"
          onClick={onClick}
          className="waves-effect waves-light btn-large"
        >
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Input;

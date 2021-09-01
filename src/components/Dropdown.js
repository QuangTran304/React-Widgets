import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ selected, onSelectedChange, options }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      // If 'ref' to the Dropdown element contains the clicking area
      if (ref.current.contains(event.target)) {
        return; // then don't do anything
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    // If the 'option' and the selected value are the same:
    if (option.value === selected.value) {
      return null; // don't render anything
    }

    return (
      <div
        onClick={() => {
          onSelectedChange(option);
        }}
        className="item"
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

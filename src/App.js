import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
// import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

// items for Accordion component
// const items = [
//   {
//     title: "What is React?",
//     content: "React is a frontend javascript framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite JS library among Engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use React by creating components",
//   },
// ];

// data for Dropdown component
// const options = [
//   {
//     label: "The Red Color",
//     value: "red",
//   },
//   {
//     label: "The Green Color",
//     value: "green",
//   },
//   {
//     label: "The Blue Color",
//     value: "blue",
//   },
// ];

const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>

      <br />
      <br />

      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}

      <Translate />
    </div>
  );
};

export default App;

import React from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./Dropdown";

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

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown />
    </div>
  );
};

export default App;

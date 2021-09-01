import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

// items for Accordion component
const items = [
  {
    title: "What is React?",
    content: "React is a frontend javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among Engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

// data for Dropdown component
const options = [
  {
    label: "The Red Color",
    value: "red",
  },
  {
    label: "The Green Color",
    value: "green",
  },
  {
    label: "The Blue Color",
    value: "blue",
  },
];

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};

export default App;

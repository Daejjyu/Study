import React, { useEffect, useState } from "react";
import "./styles.css";

const useTitle = (initinalTitle) => {
  const [title, setTitle] = useState(initinalTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 3000);
  return <div className="App"></div>;
}

import React, { useState } from "react";
import Child from "./Child";
import Child2 from "./Child2";

function App() {
  const [movies, setMovies] = useState([]);
  const [tab, setTab] = useState(1);
  const [formData, setFormData] = useState({ selectedMovie: "" });
  const changeTab = (tab) => {
    setTab(tab);
  };
  const handleSelect = (e) => {
    setFormData({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value })
  };
  return (
    <div className="App">
      <div className="tab" onClick={() => changeTab(1)}>
        Tab 1
      </div>
      <div className="tab" onClick={() => changeTab(2)}>
        Tab 2
      </div>

      {tab === 1 && (
        <Child
          movies={movies}
          setMovies={setMovies}
          handleSelect={handleSelect}
          name={"selectedMovie"}
        />
      )}
      {tab === 2 && <Child2 />}
    </div>
  );
}

export default App;

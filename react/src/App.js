import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setData(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>People List</h1>
        {data.length > 0 ? (
          data.map((person) => (
            <div key={person.id} className="card">
              <h2>{person.name}</h2>
              <p>{person.address}</p>
            </div>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </header>
    </div>
  );
}

export default App;

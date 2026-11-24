
import React, { useState } from "react";
import "./App.css";

function App() {
  const [donors, setDonors] = useState([
    { name: "Rahul", blood: "O+", phone: "9876543210" }
  ]);

  const [name, setName] = useState("");
  const [blood, setBlood] = useState("O+");
  const [phone, setPhone] = useState("");

  function addDonor(e) {
    e.preventDefault();
    setDonors([...donors, { name, blood, phone }]);
    setName("");
    setPhone("");
  }

  return (
    <div className="app">
      <h1>Blood Bank Management</h1>
      <h2>Donor Registration</h2>

      <form onSubmit={addDonor}>
        <input placeholder="Donor Name" value={name}
          onChange={e => setName(e.target.value)} required />

        <select value={blood}
          onChange={e => setBlood(e.target.value)}>
          {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(b =>
            <option key={b}>{b}</option>
          )}
        </select>

        <input placeholder="Phone Number" value={phone}
          onChange={e => setPhone(e.target.value)}
          pattern="[0-9]{10}" maxLength="10" required />

        <button>Add Donor</button>
      </form>

      <h2>Donor Details</h2>

      {donors.map((d, i) => (
        <div className="card" key={i}>
          <h3>{d.name}</h3>
          <p>Blood Group: {d.blood}</p>
          <p>Contact: {d.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

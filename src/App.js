import { useState } from "react";
import "./styles.css";

export default function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function handleChange(Event) {
    const { value, name } = Event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="App">
      <h1>
        Hello {contact.fName + " "}
        {contact.lName}
      </h1>
      <p>{contact.email}</p>

      <form>
        <input
          type="text"
          placeholder="First Name"
          name="fName"
          value={contact.fName}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          name="lName"
          value={contact.lName}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          placeholder="email@abc.xyz"
          name="email"
          value={contact.email}
          onChange={handleChange}
        />
        <br /> <button>Submite</button>
      </form>
    </div>
  );
}

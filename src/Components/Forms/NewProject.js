import React from 'react';

export default function App() {
    const [StartDate, setStartDate] = React.useState("");
    const [Term, setTerm] = React.useState("");
    const [Technology, setTechnology] = React.useState("");
    const [Structure, setStructure] = React.useState(false);
  
    const handleSubmit = (event) => {
      console.log(`
        StartDate: ${StartDate}
        Term: ${Term}
        Technology: ${Technology}
        Structure: ${Structure}
      `);
  
      event.preventDefault();
    }
    return (
      <form
       onSubmit={handleSubmit}
       className="FormInputs"
       >
        <h1 className="MainTitle">New Project</h1>

        <div className="InputsSection">

        <label className="InputLabel">
          Start Date   
          </label>
          <input
            name="StartDate"
            type="date"
            value={StartDate}
            onChange={e => setStartDate(e.target.value)}
            required />
        

        <br></br>

        <label className="InputLabel">
        Project Life   
        </label>

          <input
            name="Term"
            value={Term}
            onChange={e => setTerm(e.target.value)}
            required />
        
        
        <br></br>
  
        <label className="InputLabel">
          Technology   
          </label>

          <select
            name="Technology"
            value={Technology}
            onChange={e => setTechnology(e.target.value)}
            required>

                <option value="1">Solar</option>
                <option value="2">Wind</option>

          </select>
        

        <br></br>
  
        <label className="InputLabel">
            Structure   
            </label>
          <select
            name="Structure"
            value={Structure}
            onChange={e => setStructure(e.target.value)}
            required>

                <option value="1">Date Based Flip</option>
                <option value="1">Yield Based Flip</option>
        </select>

        <br></br>
  
        <button className="NextButton">Next</button>
        </div>
      </form>
    );
  }
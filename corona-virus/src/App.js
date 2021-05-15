import React, { useState } from "react";
import "./App.css";
import Table from "./Table";

function App() {
  const [inputVirus, setVirus] = useState("");
  const [inputNumber, setNumber] = useState(0);
  const [ShowInputForCompositions, setShowInputForCompositions] =
    useState(false);
    const [showTable, setShowTable] =
    useState(false);
  const [compositions, setCompositions] = useState("");
  const [listOfBloodComposition, setListOfBloodComposition] = useState([]);

  function patientCompositions() {
    var list = compositions.split(",").slice(0,inputNumber)
    var lVirus = inputVirus.length
    let compositionList = []
    list.map(item => {
      let lComposition = item.length
      let i = 0
      let j = 0
      while (i<lComposition && j<lVirus){
        if(item[i] === inputVirus[j])
          i++
        else j++
      }
      if(i===lComposition)
        compositionList.push({"composition":item,"result":"POSITIVE"})
      else
      compositionList.push({"composition":item,"result":"NEGATIVE"})
      setListOfBloodComposition(compositionList)
      setShowTable(true)
      return (compositionList)
    })
  }
  return (
    <div className="App">
      <div>
      <label htmlFor="virus">Virus name:</label>
      <input
        type="text"
        id="virus"
        name="virus"
        onChange={(e) => setVirus(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="number">Number of People:</label>
      <input
        type="number"
        placeholder="input value 1 to 10"
        id="number"
        name="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setShowInputForCompositions(true)}>
        Submit
      </button>
      {(ShowInputForCompositions && (inputNumber<=10) )&&
        <div className="compositionList">
          <input
            type="text"
            id="compositions"
            name="compositions"
            onChange={(e) => setCompositions(e.target.value)}
          /> <span id="infoMsg">* add the composition separated with "," without adding spaces</span>
          <br />
          <br />
          <button onClick={() => patientCompositions()}>
            Add
          </button>
        </div>
      }
      </div>
      {showTable &&
      <Table  compositionList={listOfBloodComposition}/>}
    </div>
  );
}

export default App;

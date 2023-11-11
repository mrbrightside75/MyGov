import "./MyRep.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import RepresentativeComponent from "./RepresentativeComponent.js";
import { address as initialAddress } from "./Dashboard.js";

const MyRep = () => {
  const [address, setAddress] = useState(initialAddress); // State to store the address of the user

  const handleAddressChange = (e) => {
    // Update the address state when the input value changes
    setAddress(e.target.value);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div id="body">
        <div className="row">
          <p id="inputInstructions">Please Enter Your Zip Code:</p>
          <input
            id="addressInputField"
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={handleAddressChange}
          />
          {/* <input
          type="text"
          placeholder="Enter election date"
          value={electionDate}
          onChange={handleElectionDateChange}
        /> */}
          <RepresentativeComponent
            id="repComponentElement"
            address={address}
            // electionDate={electionDate} //YYYY-MM-DD Format
          />
        </div>
        {/* <div className="row">
          <div id="fedSection" className="col">
            <h1>This is the section for Federal Cards</h1>
          </div>
        </div>
        <div className="row">
          <div id="stateSection" className="col">
            <h1>This is the section for State Cards</h1>
          </div>
        </div>
        <div className="row">
          <div id="localSection" className="col">
            <h1>This is the section for Local Cards</h1>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MyRep;

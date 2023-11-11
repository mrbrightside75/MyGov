import Navbar from "./Navbar";
import "./MyBallot.css";
import React, { useState } from "react";
import BallotComponent from "./BallotComponent";
import RepresentativeComponent from "./RepresentativeComponent.js";
import { address as initialAddress } from "./Dashboard.js";

const MyBallot = () => {
  const [address, setAddress] = useState(initialAddress); // State to store the address

  const handleAddressChange = (e) => {
    // Update the address state when the input value changes
    setAddress(e.target.value);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div id="addressField" className="row">
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={handleAddressChange}
        />
      </div>
      <div>
        <p id="testAddress">
          Test addressess: - 3117 Kansas Ave, Norfolk, VA 23513 - 106 Northfield
          Drive, North Syracuse, New York 13212 - 200 NORTHLAND AVE STILLWATER
          MN 55082
        </p>
      </div>
      <div id="ballotComponentRow" className="row">
        <h1>Your Ballot</h1>
        <BallotComponent address={address} /> {/* Pass the address prop here */}
      </div>
      <div id="representativeComponentRow" className="row">
        <h1>Your Elected Officials</h1>
        <RepresentativeComponent id="repComponentElement" address={address} />
      </div>
    </>
  );
};

export default MyBallot;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RepresentativeComponent.css";

const RepresentativeComponent = ({ address }) => {
  const [civicInfo, setCivicInfo] = useState(null);

  const fetchCivicInfo = async () => {
    try {
      // Updated the API endpoint to backend server's endpoint
      const response = await axios.get(`/api/representatives`, {
        params: { address },
      });
      console.log(response.data);
      setCivicInfo(response.data);
    } catch (error) {
      console.error("Error fetching civic info:", error);
    }
  };

  // useEffect(() => {
  //   if (address) {
  //     fetchCivicInfo();
  //   }
  // }, [address]);

  useEffect(() => {
    fetchCivicInfo();
  }, [address]);

  const getPartyClass = (party) => {
    if (party === "Republican Party") {
      return "republican";
    } else if (party === "Democratic Party") {
      return "democrat";
    } else {
      return "other"; // Handle other parties or no party affiliation
    }
  };

  const renderRepresentative = () => {
    if (!civicInfo || !civicInfo.offices) return "Loading...";

    return (
      <div>
        {civicInfo &&
          civicInfo.officials.map((official, index) => {
            const office = civicInfo.offices.find((o) =>
              o.officialIndices.includes(index)
            );
            const partyClass = getPartyClass(official.party);
            return (
              <div id="representativeCard" key={index}>
                <h2 id="officeName">{office ? office.name : ""}</h2>
                <img
                  id="officialPhoto"
                  src={
                    official.photoUrl
                      ? official.photoUrl
                      : "Images/blank_photo.webp"
                  }
                  alt={`${official.name}`}
                />
                <p id="officialName">{official.name}</p>
                <p id="officialParty" className={partyClass}>
                  {official.party}
                </p>
              </div>
            );
          })}
      </div>
    );
  };

  return <div className="Representative">{renderRepresentative()}</div>;
};

export default RepresentativeComponent;

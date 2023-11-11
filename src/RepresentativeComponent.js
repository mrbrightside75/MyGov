import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RepresentativeComponent.css";

const RepresentativeComponent = ({ address }) => {
  const [civicInfo, setCivicInfo] = useState(null);

  const fetchCivicInfo = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/civicinfo/v2/representatives",
        {
          params: {
            key: secrets.REACT_APP_API_KEY,
            address,
          },
        }
      );
      console.log(response.data);
      setCivicInfo(response.data);
    } catch (error) {
      console.error("Error fetching civic info:", error);
    }
  };

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
    //Original render with a new card for every office
    // return (
    //   <div>
    //     {civicInfo.offices.map((office, index) => (
    //       <div id="representativeCard" key={index}>
    //         <h2 id="officeName">{office.name}</h2>
    //         {office.officialIndices &&
    //           office.officialIndices.map((officialIndex) => {
    //             const official = civicInfo.officials[officialIndex];
    //             const partyClass = getPartyClass(official.party); // Get the CSS class for this official's party
    //             return (
    //               <div key={officialIndex}>
    //                 <p id="officialName">{official.name}</p>
    //                 <p id="officialParty" className={partyClass}>
    //                   {official.party}
    //                 </p>
    //               </div>
    //             );
    //           })}
    //       </div>
    //     ))}
    //   </div>
    // );

    //New render with a new card for every Official

    return (
      <div>
        {civicInfo &&
          civicInfo.officials.map((official, index) => {
            const office = civicInfo.offices.find((office) =>
              office.officialIndices.includes(index)
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

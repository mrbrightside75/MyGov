import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BallotComponent.css";

const BallotComponent = ({ address }) => {
  // Accept the address prop here
  const [voterInfo, setVoterInfo] = useState(null);
  const api_Key = process.env.REACT_APP_API_KEY;
  const fetchVoterInfo = async () => {
    try {
      const response = await axios.get(
        `https://mygov-back-end.fly.dev/api/voterinfo`,
        {
          params: { address }, // Use the address prop as the value for voter_key
        }
      );
      console.log(response.data);
      setVoterInfo(response.data);
    } catch (error) {
      console.error("Error fetching voter info:", error);
    }
  };

  // useEffect(() => {
  //   if (address) {
  //     fetchVoterInfo();
  //   }
  // }, [address]);

  useEffect(() => {
    fetchVoterInfo();
  }, [address]);

  const getPartyClass = (party) => {
    if (party === "Republican") {
      return "republican";
    } else if (party === "Democratic") {
      return "democrat";
    } else {
      return "other"; // Handle other parties or no party affiliation
    }
  };

  const renderVoterInfo = () => {
    if (!voterInfo || !voterInfo.contests)
      return <p id="loading">Loading...</p>;
    return (
      <div>
        {/*Polling Location Section*/}
        <div>
          {voterInfo.pollingLocations.map((pollingLocation, index) => (
            <div id="pollingInfo" className="row">
              <div id="pollingLocation">
                <h2>Polling Location:</h2>
                <p>
                  {`${pollingLocation.address.locationName}, ${pollingLocation.address.line1}, ${pollingLocation.address.city}, ${pollingLocation.address.state} ${pollingLocation.address.zip}`}
                </p>
              </div>
              <div id="pollingHours">
                <h2>Polling Hours:</h2>
                <p>{pollingLocation.pollingHours}</p>
              </div>
            </div>
          ))}
        </div>
        {/*Election resources Section*/}
        <div>
          {voterInfo.state.map((state, index) => (
            <div id="electionAdminBody">
              <strong>{state.electionAdministrationBody.name}</strong>
              <a
                href={state.electionAdministrationBody.electionInfoUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {state.electionAdministrationBody.electionInfoUrl}
              </a>
            </div>
          ))}
        </div>
        {/*Election referendum Info*/}
        <div>
          {voterInfo.contests.map((contest, index) => (
            <div id="ballotOffice" key={index}>
              <h2 id="officeName">{contest.ballotTitle}</h2>
              <h3>{contest.referendumSubtitle}</h3>
              <div>
                <p id="referendumText">{contest.referendumText}</p>
              </div>
            </div>
          ))}
        </div>
        {/*Election Office and Cadidate Info*/}
        <div>
          {voterInfo.contests.map((contest, index) => (
            <div id="ballotOffice" key={index}>
              <h2 id="officeName">{contest.office}</h2>

              {contest.candidates &&
                contest.candidates.map((candidate, candidateIndex) => (
                  <div id="candidateInfo" key={candidateIndex}>
                    <p id="candidateName">{candidate.name}</p>
                    <p
                      id="candidateParty"
                      className={getPartyClass(candidate.party)}
                    >
                      {candidate.party}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div className="Ballot">{renderVoterInfo()}</div>;
};

export default BallotComponent;

import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';

export default function League() {
  const [searchText, setSearchText] = useState(""); //User input
  const [playerData, setPlayerData] = useState({}); //For 1st API call with basic user info
  const [rankData, setRankData] = useState({}); //For 2nd API call with user battle info
  const [firstRank, setFirstRank] = useState({}); //For first queue type
  const [secRank, setSecRank] = useState({}); //For second queue type
  const [winRate1, setWinRate1] = useState(0); //First win rate
  const [winRate2, setWinRate2] = useState(0); //Second win rate
  const [buttonClicked, setButtonClicked] = useState(false); //State to know when button pressed
  const apiCalledRef = useRef(false); //To prevent repeating API calls
  const API_KEY = "RGAPI-aa356206-c50c-44fd-86c6-42582f06c955"; //API Key

  useEffect(() => {
    const fetchData = async () => {
    if(buttonClicked) {
      try {
        const response2 = await axios.get(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerData.id}` + "?api_key=" + API_KEY);
        setRankData(response2.data);
        response2.data[0] ? setFirstRank(response2.data[0]) :setFirstRank(response2.data[1])
        setWinRate1(response2.data[0].wins*100/(response2.data[0].wins+response2.data[0].losses));
        if (Object.keys(response2.data).length === 2) {
          response2.data[1] ? setSecRank(response2.data[1]) :setSecRank(response2.data[0])
          setWinRate2(response2.data[1].wins*100/(response2.data[1].wins+response2.data[1].losses));
        }
        apiCalledRef.current = true;
      }
      catch (error) {
        console.log(error);
      }
    }
    };
    if (apiCalledRef.current) {
      apiCalledRef.current = false;
    }
    else {
      fetchData();
    }
  }, [playerData, secRank, buttonClicked, rankData]);


  const searchForPlayer = async () => {
    try {    
      const response1 = await axios.get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY);
      setPlayerData(response1.data);
      setButtonClicked(true);
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='league-bg'>
      <div className='league-search'>
        <h1>League of Legends</h1>
        <h3>Player Search</h3>
        <input type="text" placeholder="Enter Player Name" onChange={e => setSearchText(e.target.value)}></input>
        <button onClick={searchForPlayer}>Search</button>
      </div>
      <div className="league-table">
        {JSON.stringify(playerData) !== '{}' ? 
        <>
          <img className='league-pfp' alt="" src={"http://ddragon.leagueoflegends.com/cdn/13.7.1/img/profileicon/" + playerData.profileIconId + ".png"} />
          <p className='league-info'>{playerData.name}</p>
          <p className='league-info'>Summoner Level: {playerData.summonerLevel}</p>
          <p className='league-info'>Most Recent Queue: {firstRank.queueType}</p>
          <p className='league-info'>Tier: {firstRank.tier} {firstRank.rank}</p>
          <p className='league-info'>Win Rate: {winRate1.toFixed(2)}%</p>
          {Object.keys(rankData).length === 2 ? 
          <>
            <p className='league-info'>Next Queue: {secRank.queueType}</p>
            <p className='league-info'>Tier: {secRank.tier} {secRank.rank}</p>
            <p className='league-info'>Win Rate: {winRate2.toFixed(2)}%</p>
          </> : <></>}
        </> 
          : 
          <></>
        }
      </div>
      
      <div className='league-champs'>
      </div>
    </div>
    
  );
}
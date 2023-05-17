import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import './League.css';

export default function League() {
  const [searchText, setSearchText] = useState(""); //User input to find player
  const [searchChamp, setSearchChamp] = useState(""); //User input to find champion
  const [playerData, setPlayerData] = useState({}); //For 1st API call with basic user info
  const [rankData, setRankData] = useState([]); //For 2nd API call with user battle info
  const [firstRank, setFirstRank] = useState({}); //For first queue type
  const [secRank, setSecRank] = useState({}); //For second queue type
  const [winRate1, setWinRate1] = useState(0); //First win rate
  const [winRate2, setWinRate2] = useState(0); //Second win rate
  const [queue1, setQueue1] = useState("");
  const [queue2, setQueue2] = useState("");
  const [status, setStatus] = useState({});
  const [champData, setChampData] = useState({});
  const [imgURL, setImgURL] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [skill4, setSkill4] = useState("");
  const [retrieveSkill1, setRetrieveSkill1] = useState("");
  const [retrieveSkill2, setRetrieveSkill2] = useState("");
  const [retrieveSkill3, setRetrieveSkill3] = useState("");
  const [retrieveSkill4, setRetrieveSkill4] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false); //State to know when button pressed
  const [champButtonClicked, setChampButtonClicked] = useState(false);
  const [showSkill1, setShowSkill1] = useState(false);
  const [showSkill2, setShowSkill2] = useState(false);
  const [showSkill3, setShowSkill3] = useState(false);
  const [showSkill4, setShowSkill4] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const apiCalledRef = useRef(false); //To prevent repeating API calls
  const API_KEY = "RGAPI-34f1e571-1bb9-49bd-b901-48ae0a573601"; //API Key

  useEffect(() => {
    const fetchData = async () => {
    if(buttonClicked) {
      try {
        const response2 = await axios.get(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerData.id}` + "?api_key=" + API_KEY);
        const result = JSON.stringify(response2);
        if (result === '[]' && result.length <= 1) {
          apiCalledRef.current = true;
          setRankData([]);
        }
        else {
          apiCalledRef.current = true;
          setRankData(response2.data);
          response2.data[0] ? setFirstRank(response2.data[0]) :setFirstRank(response2.data[1])
          setQueue1(response2.data[0].queueType.replace(/_/g, " "));
          setWinRate1(response2.data[0].wins*100/(response2.data[0].wins+response2.data[0].losses));
          if (Object.keys(response2.data).length === 2) {
            response2.data[1] ? setSecRank(response2.data[1]) :setSecRank(response2.data[0])
            setWinRate2(response2.data[1].wins*100/(response2.data[1].wins+response2.data[1].losses));
            setQueue2(response2.data[1].queueType.replace(/_/g, " "));
          }
        }
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
      console.log(playerData)
    }
    catch (error) {
      console.log(error);
    }
  };

  const leagueStatus = async () => {
    try {
      const statusResponse = await axios.get("https://na1.api.riotgames.com/lol/status/v4/platform-data" + "?api_key=" + API_KEY);
      setStatus(statusResponse.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getSkills = async () => {
      if (champButtonClicked) {
        apiCalledRef.current = true;
        const skillResponse1 = await axios.get("http://ddragon.leagueoflegends.com/cdn/13.7.1/img/spell/" + (retrieveSkill1) + ".png")
        const skillResponse2 = await axios.get("http://ddragon.leagueoflegends.com/cdn/13.7.1/img/spell/" + (retrieveSkill2) + ".png")
        const skillResponse3 = await axios.get("http://ddragon.leagueoflegends.com/cdn/13.7.1/img/spell/" + (retrieveSkill3) + ".png")
        const skillResponse4 = await axios.get("http://ddragon.leagueoflegends.com/cdn/13.7.1/img/spell/" + (retrieveSkill4) + ".png")
        setSkill1(skillResponse1.config.url);
        setSkill2(skillResponse2.config.url);
        setSkill3(skillResponse3.config.url);
        setSkill4(skillResponse4.config.url);
        console.log(skill1)
        setChampButtonClicked(false);
      }
      
    };
    if (apiCalledRef.current) {
      apiCalledRef.current = false;
    }
    else {
      getSkills();
    }
  }, [imgURL, champData, retrieveSkill1, skill1, champButtonClicked, retrieveSkill2, retrieveSkill3, retrieveSkill4])

  const leagueChamps = async () => {
    try {
      const champURL = "http://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/champion/" + searchChamp + ".json"
      let champResponse = await fetch(champURL)
      let responseJSON = await champResponse.json();
      setChampData(responseJSON.data);
      setImgURL("http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + searchChamp + "_0.jpg")
      setRetrieveSkill1((JSON.stringify(responseJSON.data[Object.keys(responseJSON.data)[0]]["spells"]["0"]["id"])).replace(/"/g, ''))
      setRetrieveSkill2((JSON.stringify(responseJSON.data[Object.keys(responseJSON.data)[0]]["spells"]["1"]["id"])).replace(/"/g, ''))
      setRetrieveSkill3((JSON.stringify(responseJSON.data[Object.keys(responseJSON.data)[0]]["spells"]["2"]["id"])).replace(/"/g, ''))
      setRetrieveSkill4((JSON.stringify(responseJSON.data[Object.keys(responseJSON.data)[0]]["spells"]["3"]["id"])).replace(/"/g, ''))
      setChampButtonClicked(true);
    } catch (error) {
      console.log(error)
    }
  }

  const handleImageClick = (id) => {
    switch(id) {
      case 'Q':
        setShowSkill1(!showSkill1);
        break;
      case 'W':
        setShowSkill2(!showSkill2);
        break;
      case 'E':
        setShowSkill3(!showSkill3);
        break;
      case 'R':
        setShowSkill4(!showSkill4);
        break;
      default:
          console.log('Unknown element clicked');
          break;
    }
    
  }

  const handleMouseEnter = (id) => {
    switch(id) {
      case 'Q':
        setIsHovered1(true);
        break;
      case 'W':
        setIsHovered2(true);
        break;
      case 'E':
        setIsHovered3(true);
        break;
      case 'R':
        setIsHovered4(true);
        break;
      default:
          console.log('Unknown element hovered');
          break;
    }
  }

  const handleMouseLeave = (id) => {
    switch(id) {
      case 'Q':
        setIsHovered1(false);
        break;
      case 'W':
        setIsHovered2(false);
        break;
      case 'E':
        setIsHovered3(false);
        break;
      case 'R':
        setIsHovered4(false);
        break;
      default:
          console.log('Unknown element hovered');
          break;
    }
  }

  function capFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className='league-bg'>
      <h1>League of Legends</h1>
      <div>
          <h3>Server Status</h3>
          <button className="lol-btn" onClick={leagueStatus}>Check Status</button>
      </div>
      <div className="server">
        <p className="server-name">Server: {status.name}</p>
        {(JSON.stringify(status.maintenances) === '[]') &&  (JSON.stringify(status.incidents) === '[]') ?
        <>
          <div className="lol-status">
            <p style={{fontFamily:'Cocogoose'}}>Online</p>
            <div className="green-circle"></div>
          </div>
        </>
        :
        <>
          <div className="lol-status">
            <p style={{fontFamily:'Cocogoose'}}>Ongoing Maintenance</p>
            <div className="red-circle"></div>
          </div>
        </>
        }
      </div>
      <div className='league-search'>
        <h3>Player Search</h3>
        <input className="lol-bar" type="text" placeholder="Enter Player Name" onChange={e => setSearchText(e.target.value)}></input>
        <button className="lol-btn" onClick={searchForPlayer}>Search</button>
      </div>
      <div className="league-table">
        {JSON.stringify(playerData) !== '{}' ? 
        <>
          <div className="league-profile">
            <img className='league-pfp' alt="" src={"http://ddragon.leagueoflegends.com/cdn/13.7.1/img/profileicon/" + playerData.profileIconId + ".png"} />
            <section className="league-name">
              <p className='league-info' style={{fontSize: 50}}>{playerData.name}</p>
              <p className='league-info'>Summoner Level: {playerData.summonerLevel}</p>
            </section>
          </div>
          {JSON.stringify(rankData) !== '[]' ?
          <>
            <p className='league-info'>Most Recent Queue: {queue1}</p>
            <p className='league-info'>Tier: {firstRank.tier} {firstRank.rank}</p>
            <p className='league-info'>Win Rate: {winRate1.toFixed(2)}%</p>
            {Object.keys(rankData).length === 2 ? 
            <>
              <p className='league-info'>Next Queue: {queue2}</p>
              <p className='league-info'>Tier: {secRank.tier} {secRank.rank}</p>
              <p className='league-info'>Win Rate: {winRate2.toFixed(2)}%</p>
            </> 
            : 
            <></>
            }  
          </> 
          : 
          <> 
          <p className='league-info'>No rank data</p>
          </>
          }
        </> 
          : 
          <><p className='league-info'>No player data</p></>
        }
      </div>
      
      <div className='league-champs'>
        <h3>Champions</h3>
        <h4 className="champ-description">Look for your favorite champions!</h4>
        <input className="lol-bar" type="text" placeholder="Enter Champion Name" onChange={e => setSearchChamp(e.target.value.replace(/\s/g, ""))}></input>
        <button className="lol-btn" onClick={leagueChamps}>Search</button>
        {JSON.stringify(champData) !== '{}' ? 
        <>
          <div className='champ-table'>
            <div className="league-profile">
              <img className="champ-img" alt="" src={imgURL} />
              <section className='champ-stats'>
                <p className='league-info' style={{fontSize:50}}>{champData[Object.keys(champData)[0]]["name"]} </p>
                <p className='league-info'>{capFirstLetter(champData[Object.keys(champData)[0]]["title"])} </p>
                <p className='league-info'>Attack: {(champData[Object.keys(champData)[0]]["info"]["attack"])} </p>
                <p className='league-info'>Defense: {(champData[Object.keys(champData)[0]]["info"]["defense"])} </p>
                <p className='league-info'>Magic: {(champData[Object.keys(champData)[0]]["info"]["magic"])} </p>
                <p className='league-info'>Difficulty: {(champData[Object.keys(champData)[0]]["info"]["difficulty"])} </p>
                <p className='league-info'>Type: {(champData[Object.keys(champData)[0]]["tags"][0])} {(champData[Object.keys(champData)[0]]["tags"][1])} </p>
                <p className='league-info'>Passive: {(champData[Object.keys(champData)[0]]["passive"]["name"])} </p>
                <p className='league-info'>Abilities:</p>


                <div className="skills">
                  <div className="show-skill">
                    <img className="skill-img" alt="" src={skill1} onClick={() => handleImageClick('Q')} onMouseEnter={() => handleMouseEnter('Q')} onMouseLeave={() => handleMouseLeave('Q')}/>
                    {isHovered1 && (showSkill1===false) && <p className="skill-overlay">Q</p>}
                  </div>
                  <p className='league-info' style={{marginLeft:'10px'}}>{(champData[Object.keys(champData)[0]]["spells"]["0"]["name"])} </p>
                </div>
                {showSkill1 ?
                <>
                  {<p className={`slide-in-out-fade-in-out show`}>{(champData[Object.keys(champData)[0]]["spells"]["0"]["description"])}</p>}
                </>
                :
                <>
                  {<p className={`slide-in-out-fade-in-out hide`}>{(champData[Object.keys(champData)[0]]["spells"]["0"]["description"])}</p>}
                </>}
                


                <div className="skills">
                  <div className="show-skill">
                    <img className="skill-img" alt="" src={skill2} onClick={() => handleImageClick('W')} onMouseEnter={() => handleMouseEnter('W')} onMouseLeave={() => handleMouseLeave('W')}/>
                    {isHovered2 && (showSkill2===false) && <p className="skill-overlay">W</p>}
                  </div>
                  <p className='league-info' style={{marginLeft:'10px'}}>{(champData[Object.keys(champData)[0]]["spells"]["1"]["name"])} </p>
                </div>
                {showSkill2 ?
                <>
                  {<p className={`slide-in-out-fade-in-out show`}>{(champData[Object.keys(champData)[0]]["spells"]["1"]["description"])}</p>}
                </>
                :
                <>
                  {<p className={`slide-in-out-fade-in-out hide`}>{(champData[Object.keys(champData)[0]]["spells"]["1"]["description"])}</p>}
                </>}


                <div className="skills">
                  <div className="show-skill">
                    <img className="skill-img" alt="" src={skill3} onClick={() => handleImageClick('E')} onMouseEnter={() => handleMouseEnter('E')} onMouseLeave={() => handleMouseLeave('E')}/>
                    {isHovered3 && (showSkill3===false) && <p className="skill-overlay">E</p>}
                  </div>
                  <p className='league-info' style={{marginLeft:'10px'}}>{(champData[Object.keys(champData)[0]]["spells"]["2"]["name"])} </p>
                </div>
                {showSkill3 ?
                <>
                  {<p className={`slide-in-out-fade-in-out show`}>{(champData[Object.keys(champData)[0]]["spells"]["2"]["description"])}</p>}
                </>
                :
                <>
                  {<p className={`slide-in-out-fade-in-out hide`}>{(champData[Object.keys(champData)[0]]["spells"]["2"]["description"])}</p>}
                </>}


                <div className="skills">
                  <div className="show-skill">
                    <img className="skill-img" alt="" src={skill4} onClick={() => handleImageClick('R')} onMouseEnter={() => handleMouseEnter('R')} onMouseLeave={() => handleMouseLeave('R')}/>
                    {isHovered4 && (showSkill4===false) && <p className="skill-overlay">R</p>}
                  </div>
                  <p className='league-info' style={{marginLeft:'10px'}}>{(champData[Object.keys(champData)[0]]["spells"]["3"]["name"])} </p>
                </div>
                {showSkill4 ?
                <>
                  {<p className={`slide-in-out-fade-in-out show`}>{(champData[Object.keys(champData)[0]]["spells"]["3"]["description"])}</p>}
                </>
                :
                <>
                  {<p className={`slide-in-out-fade-in-out hide`}>{(champData[Object.keys(champData)[0]]["spells"]["3"]["description"])}</p>}
                </>}
              </section>
              
            </div>
            <p className='league-info' style={{fontSize:30}}>Background</p>
            <p className='league-info'>{champData[Object.keys(champData)[0]]["lore"]} </p>
          </div>
        </>
        :
        <>
          <p>No champion data.</p>
        </>  
        }
      </div>
    </div>
    
  );
}
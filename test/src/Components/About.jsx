export default function About() {
    return (
        <div>
          <h1>About</h1>
          <p>Whether you're a novice or an expert, Esports Frenzy provides everything you need, at your fingertips.</p>
          <br></br>

          <p>Introduction</p>
          <p>Are you interested in looking into Esports? Well, this is the perfect website for you. You will be able to find contents such as introduction to Esports, careers in Esports, and how to pursue further in Esports more than ever.</p>

          <p>Would you like to enhance your knowledge of Esports? Check out the following video for more information!</p>

          <iframe width="560" 
          height="315" 
          src="https://www.youtube.com/embed/m0zWiUGrzBk" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
          </iframe>

          <p></p>
          <br></br>

          <p>Pursuing Esports </p>
          <p>Looking to learn more about Esports? Look no further! This website has everything you need to know about the world of Esports. Take a quick overview of some of the most popular games here!</p>
          <p></p>
          <br></br>
          <p style={{color: 'lightpink'}}>Game 1: League of Legends</p>
          <p style={{color: 'lightpink'}}>League of Legends is a popular multiplayer online battle arena (MOBA) video game developed and published by Riot Games. In League of Legends, players control a champion with unique abilities and battle against a team of other players, with the ultimate goal of destroying the opposing team's nexus, a structure located in their base.</p>
          <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/-157HBpPZ24" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p></p>
          <button><a href="https://mobalytics.gg/blog/absolute-beginners-guide-to-league-of-legends/" target="_blank" rel="noopener noreferrer" style={{color: 'lightpink'}}>GUIDE</a></button>

          <p></p>
          <br></br>
          <p style={{color: 'lightblue'}}>Game 2: Valorant</p>
          <p style={{color: 'lightblue'}}>Valorant is a team-based tactical first-person shooter game developed and published by Riot Games. The game is designed to be played competitively and features a diverse set of characters, called agents, each with their unique abilities that can be used to outplay opponents and win rounds. </p>
          <button><a href="https://playvalorant.com/en-us/news/announcements/beginners-guide/" target="_blank" rel="noopener noreferrer" style={{color: 'lightblue'}}>GUIDE</a></button>

          <p></p>
          <br></br>

          <p>If you want to learn more Esports games, check out our other pages!</p>

          <p></p>
          <br></br>
          <p>Careers in Esports</p>
          <p>On our website, you can also find job openings from various esports companies, providing you with the chance to work in your desired field and pursue your passion.</p>
          <p>Check out an article discussing other careers!</p>
          <div className="news-article">
            <img src="https://readyesports.com/wp-content/uploads/2019/04/32624961317_c387f0242a_o-768x512.jpg" alt="Article" className="article-image" />
            <h2 className="article-title">What Esports Jobs Are Available Other Than Gaming??</h2>
            <p className="article-date">Updated on April 7, 2023</p>
            <p className="article-summary">Are you aware that there are various career opportunities within the esports industry? It's surprising how many exciting jobs one can have in the world of video games.</p>
            <p className="article-content">Are you curious about the diverse career opportunities available in esports beyond gaming? While many believe that esports is only about professional gaming, there are actually numerous jobs in management, operations, sales, event planning, coaching, travel coordinating, and social media.</p>
            <div className="article-footer">
              <a href="https://readyesports.com/what-esports-jobs-are-available-other-than-gaming/" className="read-more-link">Click Here for More</a>
            </div>
          </div>

          <p></p>
          <br></br>
          <p>Feel free to stick around for more updates and more content!</p>

        </div>
      );
  }
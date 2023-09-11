import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './home.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './home.css';

export default function Home() {
  return (
      <div>
      <h1>Welcome to Esports Frenzy!</h1>
      <p>Home to the Best Esports Content!</p>

      <br></br>

      <p>Do you want to know the latest news of Esports?</p>
      <p>Check it out here!</p> 
      <div className="news-article">
        <img src="https://www.animationxpress.com/wp-content/uploads/2021/04/Esports-Sponsorship-Gemba.jpg" alt="Article" className="article-image" />
        <h2 className="article-title">How do esports players make money — and how much?</h2>
        <p className="article-date">Published on April 6, 2023</p>
        <p className="article-summary">Esports athletes are among the highest-paid players in the sports industry, with some earning millions of dollars annually, and many others earning hundreds of thousands. However, have you ever wondered about the source of their income and how much they actually make?</p>
        <p className="article-content">Typically, esports players earn a substantial income from the salaries they receive from their respective teams. The amount of the salary is influenced by different factors such as the team's size, the player's skill level, the particular game in which the player competes, the competitions in which the team participates, and other relevant factors. At the highest level, some esports players can earn millions of dollars per year from their team.</p>
        <div className="article-footer">
          <a href="https://esportsinsider.com/2023/04/how-do-esports-players-make-money" className="read-more-link">Click Here for More</a>
        </div>
      </div>

      
      <br></br>

      <p>Here are some upcoming events!</p>

      <div style={{  display: 'flex', margin: '50px', borderRadius: '30px' }}>

      <div className="card" style={{ width: '45%', marginRight: '20px', borderRadius: '30px'}}>
        <img src="https://resources.esportsinsider.com/esportsinsider/2022/11/ESI-Singapore-Generic-Announcement-1024x512px-medium_large.png" className="card-img-top" style={{ borderRadius: '30px'}} alt="Placeholder" />
        <div className="card-body">
          <h5 className="card-title" style={{color: 'green'}}>The Future of Esports</h5>
          <p className="card-text" style={{color: 'lightgreen'}}>"Experience the exciting future of esports as we bring you top-notch programming, outstanding food and beverage options, and plenty of enjoyable networking opportunities over two unforgettable days in the Lion City."</p>
          <a href="https://esportsinsider.com/events/esi-singapore-2023" className="btn btn-primary">Click Here</a>
        </div>
      </div>
      
      <div className="card" style={{ width: '45%', borderRadius: '30px'}}>
        <img src="https://resources.esportsinsider.com/esportsinsider/2022/09/ESI-London-Sub-Event-Announcements-Trio_1600x900-medium_large.png" className="card-img-top" style={{ borderRadius: '30px'}} alt="Placeholder" />
        <div className="card-body">
          <h5 className="card-title" style={{color: 'lightpink'}}>World's Esports Industry Festival</h5>
          <p className="card-text" style={{color: 'magenta'}}>"Experience the ultimate in networking, education, content, and hospitality in the esports and video game industry as #ESILDN makes its return to the UK's capital this Autumn, with exciting surprises in store."</p>
          <a href="https://esportsinsider.com/events/esi-singapore-2023" className="btn btn-primary">Click Here</a>
        </div>
      </div>
      </div>
      </div>
  );
}
import { Container, Row, Col, Carousel, Button, Modal, Card, CardGroup} from 'react-bootstrap';
import React, { useState } from 'react';
import httpclient from "../httpclient";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function ExampleCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img  style={{height: '900px'}}
          className="d-block w-100"
          src="https://www.mediabistro.com/wp-content/uploads/2016/02/what-does-a-community-manager-do.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Community Management Lead</h3>
          <p>Skills: Community Management, Customer Service, Project Management</p>
          <p>Company: Keywards Studios</p>
          <a href="https://hitmarker.net/jobs/keywords-studios-player-support-community-management-lead-908714">Apply Now</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{height: '900px'}}
          className="d-block w-100"
          src="https://massive.io/wp-content/uploads/2021/10/Team-Liquid-featured-image.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>Want to work in an Esports Team?</p>
          <a href="https://careers.teamliquid.com/">Apply Now</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{height: '900px'}}
          className="d-block w-100"
          src="https://cdn.vox-cdn.com/thumbor/jEhORgA8AmcxGyF3-5Lf4az03Gg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19349214/jbareham_191158_ply0958_decade_lolengends.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Riot Games</h3>
          <p>Want to learn more about League of Legends in your Career?</p>
          <p>Pursue with Riot Games to expand your dream goals</p>
          <a href="https://www.riotgames.com/en/work-with-us/jobs">Apply Now</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function JobModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{background: 'navy', justifyContent: 'center'}}>
       Learn More About Our Positions
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{background: 'blue'}}>
          <Modal.Title style={{color: 'greenyellow'}}>Job Positions Descriptions</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{background: 'purple'}}>
          <p>Esports Analyst: Responsible for analyzing performance data, scouting new talent, and providing strategic insights for a competitive esports team or organization.</p>
          <p> Marketing Manager - Responsible for developing and executing marketing campaigns to promote esports events, teams, and products. This includes social media marketing, email marketing, and advertising.</p>
          <p>Esports Coach - Responsible for coaching and training competitive esports players to improve their performance. This includes developing training plans, analyzing gameplay footage, and providing feedback and guidance.</p>
          <p>Content Creator - Responsible for creating content related to esports, such as video content, written articles, social media posts, and livestreams. This includes researching and reporting on esports news, creating tutorials, and providing commentary on esports events.</p>
        </Modal.Body>
        <Modal.Footer style={{background: 'blue'}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Apply Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function CareerCardGroup() {
  return (
    <CardGroup style={{marginRight: '20px'}}>
      <Card>
        <Card.Img variant="top" src="https://www.ycp.edu/media/york-website/offices-and-departments/it/esports-page-intro.jpg" style={{height: '600px'}}/>
        <Card.Body>
          <Card.Title>Esports + College = ?</Card.Title>
          <Card.Text>
            Want to integrate Esports to College? Look out for Esports opportunities at your school!
          </Card.Text>
          <a href="https://www.intelligent.com/best-esports-colleges/">Click Here for Colleges</a>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.insider.com/5a2847233dbef430008ba824?width=1000&format=jpeg&auto=webp"  style={{height: '600px'}} />
        <Card.Body>
          <Card.Title>Develop and Hone Your Talent in Esports</Card.Title>
          <Card.Text>
            Read more to find out how you can use your talent in the Esports World!
          </Card.Text>
          <a href="https://www.nasef.org/career-pathways">Find out more!</a>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default function Careers() {
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = async (e) => {
    try {
      await httpclient.post("https://esports-frenzy-flask.onrender.com/careers", {
        email,
        full_name,
        position
      });
    } catch (error) {
      if (error.response.status === 401) {
        alert("Invalid information");
      }
    }
  };
  
  return (
    <Container>
      <Row>
        <Col>
          <h2>Careers in Esports</h2>
          <p>Join our team of passionate esports professionals and help shape the future of gaming.</p>
        </Col>
      </Row>
      <Row style={{color: 'greenyellow'}}>
        <Col md={6}>
          <h3>Open Positions</h3>
          <ul style={{listStyle:"none"}}>
            <li>Esports Analyst</li>
            <li>Marketing Manager</li>
            <li>Esports Coach</li>
            <li>Content Creator</li>
          </ul>
        </Col>
        <Col md={6}>
          <h3 >Apply Now</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input style={{margin:"5px"}} onChange={(e) => setFullName(e.target.value)} type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
              <input style={{margin:"5px"}} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input style={{margin:"5px"}} onChange={(e) => setPosition(e.target.value)}  type="text" className="form-control" placeholder="Position" />
            </div>
            <div className="form-group">
              <input type="file" className="form-control-file" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Col>
      </Row>
    <br></br>
    <JobModal />
    <br></br>

    <br></br>
    <h1>Featured Positions</h1>
    <ExampleCarousel />

    <br></br>
    <h1>Other Positions and Programs</h1>
    <CareerCardGroup />

    <br></br>
    </Container>
  );
}

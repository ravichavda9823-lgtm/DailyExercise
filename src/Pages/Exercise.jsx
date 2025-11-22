import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate} from "react-router-dom";

function Execrcise() {
  let [exercise, setExercise] = useState([]);
   let [query, setQuery] = useState("");
    let navigate = useNavigate();


  async function ExeList() {
    const url = "https://exercisedb.p.rapidapi.com/exercises";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "201f7d4684msheed7ae8591cb35fp12a367jsnb49b1b720713",
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setExercise(result);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSubmit(e){
     e.preventDefault();
    navigate(`/searchExe?query=${query}`);
  }

  useEffect(() => {
    ExeList();
  }, []);

  
 

  return (
    <>
      <main>
        {/*? Hero Start */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="text-right">
                  <form onSubmit={handleSubmit}>
                    <input onChange={(e)=>{
                        setQuery(e.target.value)
                    }}
                      type="search"
                      className="p-3 w-25 fs-4"
                      placeholder="Search for Exercise..."
                    />
                  </form>
                </div>
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70">
                    <h2>Execrcise List</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}

        {/* Api section */}
        <Container>
          <Row>
            {exercise ? (
              <>
                {exercise.map((value) => {
                  return (
                    <Col sm="6" md="4">
                      <Card className="my-5">
                        <Card.Img
                          variant="top"
                          src="https://www.shutterstock.com/image-vector/woman-sport-gym-vector-illustration-260nw-1677799246.jpg"
                        />
                        <Card.Body>
                          <Card.Title>
                            <h3>{value.name}</h3>
                          </Card.Title>
                          <Card.Text>{value.description}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroup.Item>
                            <b>BodyPart</b> : {value.bodyPart}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <b>Equipment</b> : {value.equipment}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <b>Target</b> : {value.target}
                          </ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                          <Link to={`/details/${value.id}`}>View More</Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </>
            ) : (
              <>
                <h2>Fetching Details...</h2>
              </>
            )}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Execrcise;

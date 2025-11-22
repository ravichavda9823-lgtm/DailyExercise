import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useLocation } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";

function Details() {
  let id = useLocation().pathname.split("/")[2];
  let [instructions, setInstructions] = useState([]);
  let [details, setDetails] = useState(null);
  let [image, setImage] = useState("");
  console.log(id);
  
  async function FetchDetails() {
    const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
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
      console.log(result);
      setDetails(result);
      console.log(details);
      setInstructions(result.instructions);
    } catch (error) {
      console.error(error);
    }
  }

  async function FetchImage() {
    const url = `https://exercisedb.p.rapidapi.com/image?resolution=360&exerciseId=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "f73988df9fmsh8f8ab4eec1c228fp1d0570jsn933e9c61d5d9",
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const blob = await response.blob();
      const imgUrl = URL.createObjectURL(blob);
      setImage(imgUrl);
      console.log(imgUrl);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (id) {
      FetchDetails();
      FetchImage();
    }
  }, [id]);

  console.log(details);

  return (
    <>
    <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70">
                    <h2>Exercise Details</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
      <Container>
        <Row className="my-4">
          <Col md="6" sm="12">
            {image ? (
              <>
                {" "}
                <div className="text-center">
                  <img src={image} alt="" />
                </div>
              </>
            ) : (
              <>
                <h1 className="text-center">Image Loading...</h1>
              </>
            )}
          </Col>

          <Col md="6" sm="12">
            {details ? (
              <>
                <Card className="my-5">
                  <Card.Body>
                    <Card.Title>
                      <h2>{details.name}</h2>
                    </Card.Title>
                    <Card.Text>{details.description}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <b>BodyPart</b> : {details.bodyPart}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>Equipment</b> : {details.equipment}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>Target</b> : {details.target}
                      <h3 className="mt-4 ">Instructions :</h3>
                      {instructions.map((value) => {
                        return <p className="mt-2">- {value}</p>;
                      })}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </>
            ) : (
              <>Loading details...</>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Details;

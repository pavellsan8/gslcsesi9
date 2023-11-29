import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import guitarImage1 from "../../../asset/yamaha-fg800.jpg";
import guitarImage2 from "../../../asset/ephiphone-dr-100.jpg";
import guitarImage3 from "../../../asset/taylor-110e.jpg";
import guitarImage4 from "../../../asset/ephiphone-gibson-j200.jpg";
import './collectionContent.css';

function CustomCard(props) { 
	return ( 
		<Card style= {{ margin: "2rem"}}> 
            <Card.Img variant="top" src= {props.src} 
                style={{
                    width: "100%", 
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"}} /> 
            <Card.Body> 
                <Card.Title> {props.title} </Card.Title> 
                <Card.Text> {props.text} </Card.Text> 
            </Card.Body>
		</Card> 
        ); 
}

function CollectionContent() {
  return (
    <div>
        <h1 className="mt-5">Check out our collection guitars</h1>
        <Row xs={1} md={2} className="g-4">
            <Col> 
				<CustomCard src={guitarImage1} title="Yamaha FG800" text="A perfect guitar at the price point and the tone produced is outstanding."/>
            </Col> 
			<Col> 
				<CustomCard src={guitarImage2} title="Ephiphone DR100" text="One of the an entry-level acoustic with the feel of something far more prestigious." /> 
            </Col> 
			<Col> 
				<CustomCard src={guitarImage3} title="Taylor Acoustic 110e" text="Guitar with delivering some signature of best tone and feel Taylor is known for public." /> 
            </Col> 
			<Col> 
				<CustomCard src={guitarImage4} title="Ephiphone inspired by Gibson J200" text="The Epiphone Inspired by Gibson J-45 and J-200 closely capture the irresistible tones and appealing mojo of the originals."/> </Col> 
        </Row>
    </div>
  );
}

export default CollectionContent;

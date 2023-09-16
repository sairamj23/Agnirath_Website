import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './BlogGrid.css'; // Import the external CSS file

function BlogGrid() {
  return (
    <div className="blog-section"> {/* Apply the background color style */}
      <h2 className="blog-heading">Blog</h2> {/* Add the "Blog" heading */}
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BlogGrid;

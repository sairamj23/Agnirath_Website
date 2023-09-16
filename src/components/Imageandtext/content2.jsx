import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useMediaQuery } from 'react-responsive';

function Content2() {
  // Check if the screen size is smaller than a desktop
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <Container>
      <Card>
        {isMobile ? (
          <>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </>
        ) : (
          <>
            <div style={{ display: 'flex', flexDirection: 'row-reverse', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Card.Img variant="top" src="holder.js/100px180" style={{ flex: '1' }} />
              <Card.Body style={{ flex: '2', textAlign: 'right' }}>
                <div>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laborum necessitatibus nostrum illum nulla minima optio? Eligendi unde ipsum harum cum, rerum voluptate itaque aliquam, error natus facilis illum doloremque voluptas eum mollitia! Soluta delectus vel aliquam nobis, quia explicabo, nisi beatae, porro iste itaque labore? Unde maiores ex impedit.
                  </Card.Text>
                </div>
              </Card.Body>
            </div>
          </>
        )}
      </Card>
    </Container>
  );
}

export default Content2;

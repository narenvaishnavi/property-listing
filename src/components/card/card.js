import { Card } from 'react-bootstrap';
import heartStroke from '../../assets/heart-stroke.svg';
import heartFill from '../../assets/heart-fill.svg';
import './card.scss';

export default function CardList(props) {
  return (
    <div className="row d-flex justify-content-center text-center">
      {props.updateEstate.length !== 0 &&
        props.updateEstate.map((d) => (
          <div style={{ display: 'contents' }} key={d.id}>
            <div className="col-sm-24 col-md-1 col-lg-1"></div>
            <div className="col-sm-24 col-md-5 col-lg-3">
              <Card>
                <div className="full-width">
                  <Card.Img
                    variant="top"
                    className="imgone"
                    id="imgone"
                    src={d.photo}
                  />
                  {d.favorite ? (
                    <Card.Img
                      variant="top"
                      className="imgtwo"
                      src={heartFill}
                      onClick={() => {
                        props.parentCallback(d);
                      }}
                    />
                  ) : (
                    <Card.Img
                      variant="top"
                      className="imgtwo"
                      src={heartStroke}
                      onClick={() => {
                        props.parentCallback(d);
                      }}
                    />
                  )}
                </div>
                <Card.Body>
                  <Card.Text className="specs">
                    {d.bedroom} BR | {d.baths} Bathrooms | {d.area} Sq Ft
                  </Card.Text>
                  <Card.Text className="listPrice">${d.listPrice}</Card.Text>
                  <Card.Text className="address">{d.address}</Card.Text>
                  <Card.Text className="listedDate">
                    Listed: {d.listDate}
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </div>
          </div>
        ))}
    </div>
  );
}

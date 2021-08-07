import { Navbar } from 'react-bootstrap';
import './header.scss';

export default function Header({ title }) {
  return (
    <Navbar fixed="top" expand="lg" variant="light" bg="light">
      <div className="header" id="myHeader">
        <h2>{title}</h2>
      </div>
    </Navbar>
  );
}

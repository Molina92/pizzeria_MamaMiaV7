import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FormatearMonto from "../Components/FormatearMonto";
import { Container } from "react-bootstrap";
import { DisplayNombre } from "../Components/DisplayNombre";
import { useNavigate } from "react-router-dom";

export default function CardPizza({ id, nombre, precio, ingredientes, imagen, addToCart, pizza }) {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/pizzas/${id}`);
  };

  return (
    <Container className="m-3">
      <Card
        style={{ width: "25rem", height: "41rem" }}
        className="border border-3 p-2"
      >
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title className="fs-3 border-bottom border-3 p-2">
            Pizza {DisplayNombre(nombre)}
          </Card.Title>
          <div className="d-flex align-items-center border-bottom border-3 justify-content-evenly p-1 ">
            <Card.Text>
              <span className="fs-5 fw-light">Ingredientes:</span>
            </Card.Text>
            <ul className="list-group list-group-flush text-start">
              {ingredientes.map((ingrediente, index) => (
                <li key={index} className="list-group-item">
                  {" "}
                  🍕{ingrediente}{" "}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-3 border-bottom border-3">
            <Card.Text className="fs-3 fw-semibold">
              Precio: {FormatearMonto(precio)}
            </Card.Text>
            <div className="d-flex justify-content-around mb-3">
              <Button variant="light" className="border border-3" onClick={() => handleNavigate(id)}>
                Ver Más 👀
              </Button>
              <Button
                variant="dark"
                className="border border-3"
                onClick={() => addToCart(pizza)}
              >
                Añadir 🛒
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

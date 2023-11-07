import "./App.css";
import pizzaData from "./assets/data";

function Pizza({ pizzaImg, name, ingredients, price }) {
  return (
    <li className="pizza">
      {/* SHOULD ADD ALT IN THE IMAGE TAG  */}
      <img src={pizzaImg} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((data) => (
            <Pizza
              pizzaImg={data.photoName}
              name={data.name}
              ingredients={data.ingredients}
              price={data.price}
              key={data.name}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Pizza Pooh and Tiger Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  // else "Sorry we are closed";
  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <div className="order">
            <p>We're are open until {closeHour}:00. Come visit us or online</p>
            <button className="btn">Order</button>
          </div>
        ) : (
          <div className="order">
            <p>Closed, will open at {openHour}:00.</p>
          </div>
        )}
      </footer>
    </>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;

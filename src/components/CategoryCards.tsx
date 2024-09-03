import "../Cards.css";
import { mockedCategorys } from "../MockedData/MockedCategorys";

export default function CategoryCards() {
  return (
    <>
      <h1 className="headlineCategory">Shop by category</h1>
      <div className="categoryCards">
        {mockedCategorys.map((category) => (
          <div key={category.id} className="categoryCard">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

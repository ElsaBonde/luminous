import "../Cards.css";
import { mockedCategorys } from "../MockedData/MockedCategorys";

export default function CategoryCards() {
  return (
    <>
      <h2 className="headlineCategory">Shop by category</h2>
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

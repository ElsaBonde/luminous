import { mockedProducts, newProduct } from "./MockedProducts";
import './NewInCard.css';

export default function NewInCards() {
  return (
    <div>
      <div className="newInCards">
        {mockedProducts.map((product: newProduct) => (
          <div key={product.id} className="newInCard">
            <img src={product.image} alt={product.name} />
            {product.isNew && <div className="newInLabel">New in</div>}
            <h3>{product.name}</h3>
            <p>{product.price} $</p>
            <button>Buy now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

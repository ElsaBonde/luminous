import "../App.css";

export default function Newsletter() {
    return (
        <div className="newsletter">
            
        <h2>Subscribe to our newsletter</h2>
        <p>Stay in the loop with the latest beauty tips, exclusive discounts, and new product launches! Sign up for our Luminous newsletter and be the first to know about everything happening in our world. Don’t miss out on special offers and the inside scoop — join our community today!</p>
        <form>
            <label htmlFor="email">Your email:</label>
            <input type="email"/>
            <button>Subscribe</button>
        </form>
           
        </div>
    );
    }

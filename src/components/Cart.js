import '../styles/Cart.css';

function Cart() {
const cactusPrice = 8;
const yukaPrice = 8;
const avocatierPrice =10;


    return (
        <div className = "lmj-cart">
            <h2>Mon panier : 🌵</h2>
            <ul>
                <li>Cactus: {cactusPrice} €</li>
                <li>Yuka: {yukaPrice} €</li>
                <li>Avocatier: {avocatierPrice} €</li>
            </ul>

            <h3>Total: {cactusPrice+yukaPrice+avocatierPrice} €</h3>
        </div>
    )
}
export default Cart;
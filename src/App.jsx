import {Header} from './components/Header'
import {ItemListContainer} from './components/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer'
import {Checkout} from './components/Checkout'
import {CartProvider} from './contexts/CartContext'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.scss';
import {CartView} from './components/CartView'

function App() {
  	return (
		<CartProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<ItemListContainer nombre="Piedras" />} />
					<Route path="/category/:id" element={<ItemListContainer nombre="Piedras" />} />
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<CartView />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
  	);
}

export default App

//Add event listener en mount y remove en dismount
//(post pre entrega 2)
/*
func = (event) => {}
useEffect(() => {
	addEventListener(func)
	return () = {
		removeEventListener(func)
	}
}, []);

tambien directo
<div onClick={func}>
</div>
*/
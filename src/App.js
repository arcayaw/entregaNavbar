import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import Navbar2 from "./components/Navbar/Navbar2";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import CartWidget from "./components/CartWidget/CartWidget";
// import Footer from "./components/Footer/Footer";

/* Comment */
import Cart from "./views/Cart";
import Home from "./views/Home";
import Category from "./views/Category";
import Product from "./views/Product";
import Products from "./views/Products";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Navbar2 />
    //     <Route exact path="/">
    //       <ItemListContainer title={"Bienvenido"} />
    //     </Route>

    //     <Route path="/category/:CategoriID" component={ItemListContainer} />

    //     <Route exact path="/detalle/:id">
    //       <ItemDetailContainer />
    //     </Route>

    //     <Route exact path="/cart">
    //       <CartWidget />
    //     </Route>
    //     <Footer />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route exact path="*" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:productId" element={<Product />} />
        <Route exact path="/category/:categoryId" element={<Category />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

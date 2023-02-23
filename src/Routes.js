import { Route, Routes as BaseRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Order from "./pages/Order";

export default function Routes() {
    return (
        <BaseRoutes>
            <Route path="/" element={<Home />} />
            <Route path="products">
                <Route index element={<Products />} />
                <Route path=":id" element={<Product />} />
            </Route>
            <Route path="order">
                <Route exact path=":id" element={<Order />} />
            </Route>
        </BaseRoutes>
    );
}

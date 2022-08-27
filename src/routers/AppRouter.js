import React from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink,useParams,useSearchParams } from 'react-router-dom'


const Nav = () => (
    <nav>
        <NavLink end to="/" className={({ isActive }) =>  (isActive ? " active" : "")}>Home</NavLink> |
        <NavLink to="/contact#email" className={({ isActive }) =>  (isActive ? " active" : "")}>Contact</NavLink> |
        <NavLink end to="/products" className={({ isActive }) =>  (isActive ? " active" : "")}>Products</NavLink> |
        <NavLink to="/products/12?orderby=price" className={({ isActive }) =>  (isActive ? " active" : "")}>Product Details</NavLink> |
    </nav>
);

const Header = () => (
    <header>
        <h1>Github Finder</h1>
    </header>
);

const HomePage = () => (
    <>
        <div>Home Page</div>
    </>
);

const ContactPage = () => {

    return (
        <>
            <div>Contact Page</div>
        </>
    );
}

const ProductsPage = () => (
    <>
        <div>Products Page</div>
    </>
);

const ProductDetailsPage = () => {
    let { id } = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    let user = searchParams.get("orderby");

    return (
        <>
            <div>ProductDetails Page </div>
            <div>Id: +{id}</div>
        </>
    );
};

const NotFoundPage = () => (
    <>
        <div>NotFound Page</div>
    </>
);




const AppRouter = ()=> (
    <BrowserRouter>
    <Header />
    <Nav />
    <Routes>
        <Route end path="/" element={   <HomePage/> } />
        <Route path="/contact" element={  <ContactPage/> } />
        <Route end path="/products" element={  <ProductsPage/> } />
        <Route path="/products/:id" element={  <ProductDetailsPage/> } />
      
        <Route element={ <NotFoundPage/> } />
    </Routes>
</BrowserRouter>
);

export default AppRouter;
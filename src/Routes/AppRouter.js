import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { CartPage } from "../Pages/CartPage";
import { InformationPage } from "../Pages/InformationPage";
import { MainPage } from "../Pages/MainPage";
import { ProductPage } from "../Pages/ProductPage";
import { ProductDetails } from "../Pages/ProductDetails";
import { ProductDetailsMale } from "../Pages/ProductDetailsMale";
import { ProductDetailsFemale } from "../Pages/ProductDetailsFemale";



import { NavBar } from "../Components/NavBar";
import { FooterBar } from "../Components/FooterBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/products" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/information" component={InformationPage} />
          <Route exact path="/products/male" component={ProductDetailsMale} />
          <Route exact path="/products/female" component={ProductDetailsFemale} />
          <Route  path="/products/:id" component={ProductDetails} />
          <Redirect to="/" />
        </Switch>
        <FooterBar />
      </div>
    </Router>
  );
};
/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserPage from "views/Users.js";
import Products from "views/Products";
import Brands from "views/Brands";
import Categories from "views/Categories";

var routes = [
  {
    path: "/dashboard",
    name: "DASHBOARD",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "USUARIOS",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/products",
    name: "PRODUCTOS",
    icon: "nc-icon nc-app",
    component: Products,
    layout: "/admin"
  },
  {
    path: "/categories",
    name: "CATEGORIAS",
    icon: "nc-icon nc-single-copy-04",
    component: Categories,
    layout: "/admin"
  },
  {
    path: "/brands",
    name: "MARCAS",
    icon: "nc-icon nc-chart-bar-32",
    component: Brands,
    layout: "/admin"
  },
];
export default routes;

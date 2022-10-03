import '../assets/css/generalStyles.css';
import { useState, useEffect } from 'react';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [lastUser, setLastUser] = useState({});
  const [lastProduct, setLastProduct] = useState({});
  const [lastCategory, setLastCategory] = useState({});
  const [lastBrand, setLastBrand] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(({ users }) => {
        setUsers(users)
        setLastUser(users[users.length - 1])
      })
      .catch(error => console.error(error));
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(({ products }) => {
        setProducts(products)
        setLastProduct(products[products.length - 1])
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/api/categories')
      .then(response => response.json())
      .then(({ categories }) => {
        setCategories(categories)
        setLastCategory(categories[categories.length - 1])
      })
      .catch(error => console.error(error));
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/api/brands')
      .then(response => response.json())
      .then(({ brands }) => {
        setBrands(brands)
        setLastBrand(brands[brands.length - 1])
      })
      .catch(error => console.error(error));
  }, [])

  return (
    <>
      <div className="content">
        <div>
          <h6 className='content-subtitle'> TOTALES GENERALES </h6>
          <div className='content-total'>
            <div className='content-child table-dark child1'>
              <div className='content-icon'>
                <i className='nc-icon nc-single-02 icon-users'></i>
              </div>
              <p className='subtitle'> <a href='/admin/users'> USUARIOS </a> </p>
              <p> {users.length} </p>
            </div>
            <div className='content-child table-dark child2'>
              <div className='content-icon'>
                <i className='nc-icon nc-app icon-products'></i>
              </div>
              <p className='subtitle'> <a href='/admin/products'> PRODUCTOS </a> </p>
              <p> {products.length} </p>
            </div>
            <div className='content-child table-dark child3'>
              <div className='content-icon'>
                <i className='nc-icon nc-single-copy-04 icon-categories'></i>
              </div>
              <p className='subtitle'> <a href='/admin/categories'> CATEGORIAS </a> </p>
              <p> {categories.length} </p>
            </div>
            <div className='content-child table-dark child4'>
              <div className='content-icon'>
                <i className='nc-icon nc-chart-bar-32 icon-brands dangerous'></i>
              </div>
              <p className='subtitle'> <a href='/admin/brands'> MARCAS </a> </p>
              <p> {brands.length} </p>
            </div>
          </div>
        </div>
        <div className='last-register'>
          <h6 className='content-subtitle'> ULTIMOS REGISTROS EN NUESTRA BASE DE DATOS </h6>
          <div className='content-lastUser'>
            <h6 className='register-db'> USUARIO </h6>
            {Object.keys(lastUser).length === 0 ?
              <p> Cargando.. </p>
              :
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <tbody>
                  <tr>
                    <th className='table-dark'>ID</th>
                    <th className='table-dark'>NOMBRE</th>
                    <th className='table-dark'>APELLIDO</th>
                    <th className='table-dark'>EMAIL</th>
                    <th className='table-dark'>TELEFONO</th>
                  </tr>
                  <tr>
                    <td className='table-secondary'> {lastUser.id} </td>
                    <td className='table-danger'> {lastUser.firstname} </td>
                    <td className='table-warning'> {lastUser.lastname} </td>
                    <td className='table-success'> {lastUser.email} </td>
                    <td className='table-info'> {lastUser.phone} </td>
                  </tr>
                </tbody>

              </table>
            }
          </div>
          <div className='content-lastProduct'>
            <h6 className='register-db'> PRODUCTO </h6>
            {Object.keys(lastProduct).length === 0 ?
              <p> Cargando.. </p>
              :
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <tbody>
                  <tr>
                    <th className='table-dark'>ID</th>
                    <th className='table-dark'>NOMBRE</th>
                    <th className='table-dark'>CATEGORIA</th>
                    <th className='table-dark'>MARCA</th>
                    <th className='table-dark'>DESCRIPCION</th>
                  </tr>
                  <tr>
                    <td className='table-secondary'> {lastProduct.id} </td>
                    <td className='table-danger'> {lastProduct.name} </td>
                    <td className='table-warning'> {lastProduct.relations[0]} </td>
                    <td className='table-success'> {lastProduct.relations[1]} </td>
                    <td className='table-info'> {lastProduct.description} </td>
                  </tr>
                </tbody>
              </table>
            }
          </div>
          <div className='content-lastProduct last-category'>
            <h6 className='register-db'> CATEGORIA </h6>
            {Object.keys(lastCategory).length === 0 ?
              <p> Cargando.. </p>
              :
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <tbody>
                  <tr>
                    <th className='table-dark'>ID</th>
                    <th className='table-dark'>NOMBRE</th>
                    <th className='table-dark'>CANTIDAD PRODUCTOS</th>
                  </tr>
                  <tr>
                    <td className='table-secondary'> {lastCategory.id} </td>
                    <td className='table-danger'> {lastCategory.type} </td>
                    <td className='table-warning'> {lastCategory.products.length} </td>
                  </tr>
                </tbody>
              </table>
            }
          </div>
          <div className='content-lastProduct last-brand'>
            <h6 className='register-db'> MARCA </h6>
            {Object.keys(lastBrand).length === 0 ?
              <p> Cargando.. </p>
              :
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <tbody>
                  <tr>
                    <th className='table-dark'>ID</th>
                    <th className='table-dark'>NOMBRE</th>
                    <th className='table-dark'>CANTIDAD PRODUCTOS</th>
                  </tr>
                  <tr>
                    <td className='table-secondary'> {lastBrand.id} </td>
                    <td className='table-success'> {lastBrand.name} </td>
                    <td className='table-info'> {lastBrand.products.length} </td>
                  </tr>
                </tbody>
              </table>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
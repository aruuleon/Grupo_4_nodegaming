import { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(({ products }) => {
        setProducts(products)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <div className='content'>
        <h6 className='content-subtitle'> DETALLE PRODUCTOS </h6>
        {products.length === 0 ?
          <p> Cargando.. </p>
          :
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <tbody>
              <tr>
                <th className='table-dark'>ID</th>
                <th className='table-dark'>NOMBRE</th>
                <th className='table-dark'>CATEGORIA</th>
                <th className='table-dark'>MARCA</th>
                <th className='table-dark'>IMAGEN</th>
              </tr>
              {
                products.map((product, i) => {
                  return (
                    <tr key={i}>
                      <td className='table-secondary'> {product.id} </td>
                      <td className='table-danger'> {product.name} </td>
                      <td className='table-warning'> {product.relations[0]} </td>
                      <td className='table-success'> {product.relations[1]} </td>
                      <td className='table-light img-product'> <img src={product.image}></img> </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        }

      </div>
    </>
  )
}

export default Products;
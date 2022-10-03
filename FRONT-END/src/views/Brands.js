import { useState, useEffect } from 'react';

function Brands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/brands')
      .then(response => response.json())
      .then(({ brands }) => {
        setBrands(brands)
      })
      .catch(error => console.error(error));
  }, [])

  return (
    <>
      <div className="content">
        <h6 className='content-subtitle'> DETALLE MARCAS </h6>
        {brands.length === 0 ?
          <p> Cargando.. </p>
          :
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <tbody>
              <tr>
                <th className='table-dark'>ID</th>
                <th className='table-dark'>NOMBRE</th>
                <th className='table-dark'>CANTIDAD PRODUCTOS</th>
              </tr>
              {
                brands.map((brand, i) => {
                  return (
                    <tr key={i}>
                      <td className='table-secondary'> {brand.id} </td>
                      <td className='table-success'> {brand.name} </td>
                      <td className='table-info'> {brand.products.length} </td>
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

export default Brands;
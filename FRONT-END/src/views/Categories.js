import { useState, useEffect } from 'react';

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/categories')
            .then(response => response.json())
            .then(({ categories }) => {
                setCategories(categories)
            })
            .catch(error => console.error(error));
    }, [])

    return (
        <>
            <div className="content">
                <h6 className='content-subtitle'> DETALLE CATEGORIAS </h6>
                {categories.length === 0 ?
                    <p> Cargando.. </p>
                    :
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <tbody>
                            <tr>
                                <th className='table-dark'>ID</th>
                                <th className='table-dark'>TIPO</th>
                                <th className='table-dark'>CANTIDAD PRODUCTOS</th>
                            </tr>
                            {
                                categories.map((category, i) => {
                                    return (
                                        <tr key={i}>
                                            <td className='table-secondary'> {category.id} </td>
                                            <td className='table-danger'> {category.type} </td>
                                            <td className='table-warning'> {category.products.length} </td>
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

export default Categories;
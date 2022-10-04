import { useState, useEffect } from 'react';

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(({ users }) => {
        setUsers(users);
      })
      .catch(error => console.error(error));
  }, [])

  return (
    <>
      <div className="content">
        <h6 className='content-subtitle'> DETALLE USUARIOS </h6>
        {users.length === 0 ?
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
                <th className='table-dark'>IMAGEN</th>
              </tr>
              {
                users.map((user, i) => {
                  return (
                    <tr key={i}>
                      <td className='table-secondary'> {user.id} </td>
                      <td className='table-danger'> {user.firstname} </td>
                      <td className='table-warning'> {user.lastname} </td>
                      <td className='table-success'> {user.email} </td>
                      <td className='table-info'> {user.phone} </td>
                      <td className='table-light img-user'> <img src={user.avatar}></img> </td>
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

export default User;
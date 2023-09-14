import React from 'react'
import me from "../../assets/ritik.jpg"

const Users = () => {
    const arr = [1,2,3,4];
    return (
        <>
            <section className="tableClass">
            <main>
        <table>
            <thead> 
                <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Role</th>
                        <th>Since</th>
                    </tr>
            </thead>
            <tbody>
              {arr.map((i) => (
                  <tr key={i}>
                  <td>#11bvshgs562jnbsdj</td>
                  <td>Ritik Pathak</td>
                  <td>
                   <img src={me} alt="ritik" />
                  </td>
                  <td>Admin</td>
                  <td>4-07-2023</td>
              </tr>
              ))}
            </tbody>
        </table>
    </main>
            </section>
        </>
    )
}

export default Users

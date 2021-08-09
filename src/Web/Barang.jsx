import React, { useEffect,useState, handleRemove } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Barang =()=> {
  const [post, setPost] = useState([])

      useEffect(()=>{
        axios.get('http://backendpkl.spacearts.id/api/barang/get_list')
        .then((result)=>{
            // console.log(result.data)
            setPost(result.data._data,
            )
        })
      },[])

// Delete
hapusData=(id) =>{
  console.log('hapus id yang ; ', id)
}
// handleRemove = (data) =>{
//   console.log(data)
//   axios.delete(`http://backendpkl.spacearts.id/api/barang/delete/%7BID_Barang%7D/${data}`).then((res)=>{
//     this.useEffect()
//   })
// }

return (
          <>
          {/* ----------- */}
          <br/><br/><br/>
          <center><h2 >Table Barang</h2></center>
        <table className="table table-dark table-hover" hapusData={this.hapusData}>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">Harga</th>
            <th scope="col">Kategori</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className='body'>
        {
            post.map(post => {
              return (
                <tr className='data'>
                <td>{post.id} </td>
                <td>{post.nama}</td>
                <td>{post.harga}</td>
                <td>{post.kategori}</td>
                <td>
                  <button  type="button" class="btn btn-primary"><Link to='/update'>Update</Link></button>
                  <button onClick={post.handleRemove} type="button" class="btn btn-danger">Delete</button>
                </td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
      <br/>
      {/* ------------- */}


      {/* <div className="container">
        <div className="row">
          <div className="col align-self-center">
                <p>Nama</p>
                <div className="input-group flex-nowrap">
                  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <p>Harga</p>
                <div className="input-group flex-nowrap">
                  <input type="number" className="form-control" placeholder="Harga" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <p>Kategori</p>
                <div className="input-group flex-nowrap">
                  <input type="text" className="form-control" placeholder="Kategori" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <button type="button" class="btn btn-primary">Simpan</button>
          </div>
        </div>
      </div> */}
      <button type="button" className="btn btn-dark"><Link color='white' to='create'>Tambah Data</Link></button>


      <br/><br/><br/><br/>
      <center>        
          <div className="card-header">
        <h1> .........</h1>
        </div>
        </center>
          </>
        )
    }


export default Barang


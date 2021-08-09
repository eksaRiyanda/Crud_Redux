import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm} from 'react-hook-form'
import {useHistory, Link} from 'react-router-dom'

const Create = () => {
    const[data, setData] = useState([]);
    const [namaBarang, setNamaBarang] = useState('');
    const [hargaBarang, setHargaBarang] = useState('');
    const [kategoriBarang, setKategoriBarang] = useState('');
    const { handleSubmit} = useForm();
    let history = useHistory();


    const getData = () => {
        axios.get('http://backendpkl.spacearts.id/api/barang/get_list')
        .then((result)=>{
            setData(result.data._data,)
        })
    }

    const onSubmit = (data) => {
        axios.post('http://backendpkl.spacearts.id/api/barang/create', {
            nama: namaBarang,
            harga: hargaBarang,
            kategori: kategoriBarang,
        }).then(() => {
            history.push('/barang');
        });
    };

    useEffect(() => {
        getData();
        console.log(namaBarang);
        return () => {};
    }, []);

    return (
        <>
       <br/>
       <br/>
       <br/>
        <div className="container">
            <div className="row">
                <div className="col align-self-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <span></span>
                        <input type='text' value={namaBarang || ''} onChange={(e) =>setNamaBarang(e.target.value)}></input>
                    </div>
                    <div>
                        <span></span>
                        <input type='text' value={hargaBarang || ''} onChange={(e) =>setHargaBarang(e.target.value)}></input>
                    </div>
                    <div>
                        <span></span>
                        <input type='text' value={kategoriBarang || ''} onChange={(e) =>setKategoriBarang(e.target.value)}></input>
                    </div>
                
                <button>Save</button>
                </form>
                </div>
            </div>
        </div>
        </>
    )

}
export default Create





// import React, { Component } from 'react'
// import axios from 'axios'
// // import {Container, Col, Row, FormGroup, Alert, Label, Input, Button} from 'reactstrap'
// import { Link } from 'react-router-dom'


// const api = 'http://backendpkl.spacearts.id/api/barang/create'

// export default class Create extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             nama: '',
//             harga: '',
//             kategori: '',
//             response: '',
//             display: 'none'
//         }
//     }

//     handleChange = (e) => {
//         this.setState({[e.target.name] : e.target.value})
//     }
//     AddData = () => {
//         axios.post(api+ '/create', {
//             nama: this.state.nama,
//             harga: this.state.harga,
//             kategori: this.state.kategori
//         }).then(json => {
//             if(json.data._message === "OK"){
//                 this.setState({
//                     response: json.data._data,
//                     display: 'block'
//                 })
//             }else {
//                 this.setState({
//                     response: json.data._data,
//                     display: 'block'
//                 })
//             }
//         })
//     }
    
//     render() {
//         return (
//             <>
//             <br/><br/><br/>
//             <div className="container">
//             <div className="row">
//               <div className="col align-self-center">
//                   <alert color="success" style={{display: this.state.display}}>
//                   {this.state.response}
//                   </alert>
//                     <button class="btn btn-dark "><Link to='barang'>Kembali</Link></button>
//                     <p>Nama</p>
//                     <div className="input-group flex-nowrap">
//                       <input type="text" name='nama' value={this.state.nama} onChange={this.handleChange} placeholder="Username"  />
//                     </div>
//                     <p>Harga</p>
//                     <div className="input-group flex-nowrap">
//                       <input type="number" name='harga' value={this.state.harga} onChange={this.handleChange} placeholder="Harga"   />
//                     </div>
//                     <p>Kategori</p>
//                     <div className="input-group flex-nowrap">
//                       <input type="text" name='kategori' value={this.state.kategori} onChange={this.handleChange} placeholder="Kategori"   />
//                     </div><br/>
//                     <button type="button" class="btn btn-primary" onClick={this.AddData}>Simpan</button>
//               </div>
//             </div>
//           </div>
//           </>
//         )
//     }
// }























// // import React, { Component } from 'react'

// // export const Create =(params)=>{
// //   const [NamaBarang, setNamaBarang]=useState('')
// //   const [HargaBarang , setHargaBarang]=useState('')
// //   const [KategoriBarang, setKategoriBarang]=useState('')
// //   const {register, handleSubmit, reset, formState: {errors}}=useForm();
// //   let history=useHistory();
// //   const axios = require('axios')

// //   const onSubmit = (data, e)=>{
// //     axios.post(ServerUrl +'barang/create',{
// //       nama: NamaBarang,
// //       harga: HargaBarang,
// //       kategori: KategoriBarang
// //     })
// //     .then(function (response){
// //       Alert.success('Barang berhasil dibuat')
// //       Swal.fire({
// //         icon:'success',
// //         showConfirmButton:false,
// //         confirmButtonText:'Confirm',
// //         onClose:redirectToList
// //       }).then(function(){
// //         history.push("/barang")
// //       });
// //       function redirectToList(){
// //       }
// //     })
// //   }
// //   <Form onSubmit={handleSubmit(onSubmit)}>
// //     <div className="container">
// //         <div className="row">
// //           <div className="col align-self-center">
// //                 <p>Nama</p>
// //                 <div className="input-group flex-nowrap">
// //                   <input type="text" className="form-control" placeholder="Username" {..register('nama',{require:true})}/>
// //                 </div>
// //                 <p>Harga</p>
// //                 <div className="input-group flex-nowrap">
// //                   <input type="number" className="form-control" placeholder="Harga"/>
// //                 </div>
// //                 <p>Kategori</p>
// //                 <div className="input-group flex-nowrap">
// //                   <input type="text" className="form-control" placeholder="Kategori"/>
// //                 </div>
// //                 <button type="button" class="btn btn-primary">Simpan</button>
// //           </div>
// //         </div>
// // }

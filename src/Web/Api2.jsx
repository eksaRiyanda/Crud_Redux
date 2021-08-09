import React from 'react'
import Api from './Api'

class Api2 extends React.Component{
    state = ({ post: []});

    async componentDidMount(){
        const response = await Api.get('https://jsonplaceholder.typicode.com/posts')

        this.setState({post: response.data.result});
        console.log(response)

    }





    render(){
        return(
            <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama</th>
                <th scope="col">Harga</th>
                {/* <th scope="col">Kategori</th> */}
              </tr>
            </thead>
            <tbody>
                {this.state.post.map(item=>
                              <tr key={item.id}>
                              <th scope="row">1</th>
                              <td>{item.title}</td>
                              <td>{item.body}</td>
                              {/* <td>{item.kategori}</td> */}
                            </tr>
                    
                    )}

            </tbody>
          </table>
        )
    }
}
export default Api2;
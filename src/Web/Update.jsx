import React, { Component } from 'react'
import { useForm} from 'react-hook-form'


export default class Update extends Component {
    render() {
        return (
            <>
            <br/><br/><br/>
            <div className="container">
            <div className="row">
                <div className="col align-self-center">
                <form >
                    <div>
                        <span></span>
                        <input type='text' ></input>
                    </div>
                    <div>
                        <span></span>
                        <input type='text' ></input>
                    </div>
                    <div>
                        <span></span>
                        <input type='text' ></input>
                    </div>
                
                <button>Save</button>
                </form>
                </div>
            </div>
        </div>
        </>
        )
    }
}

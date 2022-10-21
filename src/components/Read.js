import React from "react";
import { Books } from "./Books";
import axios, { Axios } from "axios";

export class Read extends React.Component{
    componentDidMount(){
        axios.get('https:jsonblob.com/api/jsonblob/1027219693823606784')
        .then(
            (response)=>{
                this.setState({
                    books:response.data    
                })
            }
                
        )
        .catch((error)=>{
            console.log(error)
        });
    }
    state = {
        //array of books to be displayed
        books:[]
    }

    render(){
        return(
            <div>
                <h3>Read component</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}
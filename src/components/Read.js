import React from "react";
import { Books } from "./Books";
import axios, { Axios } from "axios";

export class Read extends React.Component{
    componentDidMount(){
        axios.get('http://localhost:4000/api/books')
        .then(
            (response)=>{
                this.setState({
                    books:response.data.myBooks
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
import React from "react";

export class Create extends React.Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);

        this.state = {
            title:'',
            cover: '',
            author: '',
            url: ''

        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(`${this.state.title}`);
        console.log(`${this.state.cover}`);
        console.log(`${this.state.author}`);
        console.log(`${this.state.url}`);
    }

    //This will update book title
    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }
     //This will update book cover
    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
        })
    }
     //This will update book author
    onChangeBookAuthor(e){
        this.setState({
            author:e.target.value
        })
    }
     //This will update page url
    onChangeUrl(e){
        this.setState({
            url:e.target.value
        })
    }

    render(){
        return(

            //in these divs the user can input the necessary data for each input box
            <div>
                <h3>Hello from my Create component!</h3>
                {/**event being called*/}
                <form onSubmit={this.handleSubmit}>
                
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChangeBookTitle}

                        />

                    </div>

                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.cover}
                        onChange={this.onChangeBookCover}

                        />

                    </div>

                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.cover}
                        onChange={this.onChangeBookAuthor}

                        />

                    </div>

                    <div className="form-group">
                        <label>Add Front Page Url: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.url}
                        onChange={this.onChangeUrl}

                        />

                    </div>


                <input type="submit" values="Add Book"/>
                </form>
            </div>
        );
    }
}
import React, { Component } from 'react'
import BooksContainer from './BooksContainer'
import InputContainer from './InputContainer'
import Nav from './Nav'

import axios from 'axios';

export class HomeContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data: []
        }
    }
    

    componentDidMount () {
        axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json')
        .then((response) => {
            this.setState({
                data: response.data
            });
        })
        .catch((error) => {
            console.log('Error fetching data', error);
        });
    }

    render() {

        const { 
            data 
        } = this.state;

        return (
            <div>
                <Nav/>
                <InputContainer/>
                <BooksContainer
                    data={data}
                />
            </div>
        )
    }
}

export default HomeContainer

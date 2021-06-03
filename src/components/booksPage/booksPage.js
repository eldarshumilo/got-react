import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails, {Field} from '../itemDetails';
import gotService from '../../services';
import ErrorMessage from '../error';
import RowBlock from '../rowBlock';

export default class BooksPage extends Component {
    
    gotService = new gotService();

    state = {
        selectedBook: 10,
        error: false
        
    }
    
    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    componentDidCatch(){
            this.setState({
            error: true
        })
    }

    render(){
        if (this.state.error){
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => `${name}`}/>
        )

        const charDetails = (
            <CharDetails ItemId={this.state.selectedBook}>
                <Field field='authors' label='Authors'/>
                <Field field='numberOfPages' label='Number of Pages'/>
                <Field field='publisher' label='Publisher'/>
            </CharDetails>
        )

    
        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}
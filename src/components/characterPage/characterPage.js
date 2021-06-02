import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import gotService from '../../services';
import ErrorMessage from '../error';

export default class CharacterPage extends Component {
    
    gotService = new gotService();

    state = {
        selectedChar: 131,
        error: false
        
    }
    
    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
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

        return (
            <Row>
                <Col md='6'>
                    <ItemList 
                        onCharSelected={this.onCharSelected}
                        getData={this.gotService.getAllCharacters}
                        renderItem={(item) => item.name}/>
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar}/>
                </Col>
            </Row>
        )
    }
}
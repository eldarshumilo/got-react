import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ErrorMessage from '../error';
import './toggleButton.css';
import gotService from '../../services';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import BooksPage from '../booksPage';


class ToggleButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
      const viewForm = <RandomChar/>
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
  
    }
    
    render() {
      return (
        <>
            {this.state.isToggleOn ? this.ViewForm = <RandomChar/> : null}
            <button className='togButton' onClick={this.handleClick}>
            {this.state.isToggleOn ? 'TOGGLE ON' : 'TOGGLE OFF'}
            </button>
        </>
      );
    }
}

export default class App extends Component{

    state = {
        error: false
    }
    gotService = new gotService();
    componentDidCatch(){
        console.log('error');
        this.setState({
            error: true
        })
    }

    render() {

        if (this.state.error){
            return <ErrorMessage/>
        }
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <viewForm/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ToggleButton/>
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <BooksPage/>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onItemSelected={this.onItemSelected}
                                getData={this.gotService.getAllHouses}
                                renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <ItemDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
 };

 
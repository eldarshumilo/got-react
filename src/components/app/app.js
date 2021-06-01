import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './toggleButton.css';


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
            {this.state.isToggleOn ? this.viewForm = <RandomChar/> : null}
            <button className='togButton' onClick={this.handleClick}>
            {this.state.isToggleOn ? 'TOGGLE ON' : 'TOGGLE OFF'}
            </button>
        </>
      );
    }
  }
const App = () => {
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
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;
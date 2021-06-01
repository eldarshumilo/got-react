import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import noData from '../noData';
import gotService from '../../services';

const Header = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 5px;
`,
    H4 = styled.h4`
        margin-bottom: 20px;
        text-align: center;
    `
;
export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount(){
        this.updateChar();
    }

    componentDidUpdate(prevProps){
        if (this.props.charId !== prevProps.charId){
            this.updateChar();
        }
    }

    updateChar(){
        const{charId} = this.props;
        if (!charId) {
            return;
        }

        this.gotService.getChatacter(charId)
            .then((char)=>{
                this.setState({char})
            })
    }

    render() {

        if (!this.state.char) {
            return <span className='select-error'>Please select a character</span>
        }

        const {name, gender, born, died, culture} = this.state.char;

        return (
            <Header>
                <H4>{noData(name)}</H4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{noData(gender)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{noData(born)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{noData(died)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{noData(culture)}</span>
                    </li>
                </ul>
            </Header>
        );
    }
}
import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import ErrorMessage from '../error';
import gotService from '../../services/gotServices'
const Block = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 5px;
`,
    H4 = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`,
    SP = styled.span`
    font-weight: bold;  
`;

export default class RandomChar extends Component {
    
    constructor() {
        super();
        this.updateChar();
    }
    
    gotService = new gotService();
    state= {
        char:{},
        loading: true
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false
        })
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar() {
        const id = Math.floor(Math.random()*140 + 25); //25-140?
        this.gotService.getChatacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    

    render() {
        const {char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;
        
        return (
            <Block>
                {errorMessage}
                {spinner}
                {content}
            </Block>
        );
    }
}

const View = ({char})=>{
    const {name, gender, born, died, culture}= char;
    const noData = function(info){
        if (info) {
            return info;
        } else {
            console.log(info);
            return 'no data :(';
        }
    }
    return(
        <>
            <H4>Random Character: {name}</H4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <SP>Gender </SP>
                    <span>{noData(gender)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <SP>Born </SP>
                    <span>{noData(born)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <SP>Died </SP>
                    <span>{noData(died)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <SP>Culture </SP>
                    <span>{noData(culture)}</span>
                </li>
            </ul>
        </>
    )
}
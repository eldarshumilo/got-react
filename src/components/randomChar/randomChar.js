import React, {Component} from 'react';
import styled from 'styled-components';
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

    render() {

        return (
            <Block>
                <H4>Random Character: John</H4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <SP>Gender </SP>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <SP>Born </SP>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <SP>Died </SP>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <SP>Culture </SP>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </Block>
        );
    }
}

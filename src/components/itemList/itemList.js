import React, {Component} from 'react';
import styled from 'styled-components';

const listItem = styled.li`
    cursor: pointer;
`,
    unorderedList = styled.ul`
    cursor: pointer;    
`;
export default class ItemList extends Component {

    render() {
        return (
            <unorderedList className="item-list list-group">
                <listItem className="list-group-item">
                    John Snow
                </listItem>
                <listItem className="list-group-item">
                    Brandon Stark
                </listItem>
                <listItem className="list-group-item">
                    Geremy
                </listItem>
            </unorderedList>
        );
    }
}
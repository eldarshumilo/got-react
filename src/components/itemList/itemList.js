import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from '../../services';
import Spinner from '../spinner';
const ListItem = styled.li`
    cursor: pointer;
`,
    UnorderedList = styled.ul`
    cursor: pointer;    
`;
export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null
    }

    componentDidMount(){
        this.gotService.getAllCharacters()
            .then((charList)=>{
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr){
        return arr.map((item, index) => {
            return (
                <ListItem 
                    key = {index}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(41 + index)}>
                    {item.name}
                </ListItem>
            )
        })
    }
    render() {

        const {charList} = this.state;

        if(!charList){
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <UnorderedList className="item-list list-group">
                {items}
            </UnorderedList>
        );
    }
}
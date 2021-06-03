import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
const ListItem = styled.li`
    cursor: pointer;
`,
    UnorderedList = styled.ul`
    cursor: pointer;    
`;
export default class ItemList extends Component {


    state = {
        charList: null
    }

    componentDidMount(){
        const {getData} = this.props;
        getData()
            .then((itemList)=>{
                this.setState({
                    itemList
            })
        })
    }

    renderItems(arr){
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <ListItem 
                    key = {id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </ListItem>
            )
        })
    }
    render() {

        const {itemList} = this.state;

        if(!itemList){
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <UnorderedList className="item-list list-group">
                {items}
            </UnorderedList>
        );
    }
}
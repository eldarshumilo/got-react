import React, {Component} from 'react';
import styled from 'styled-components';
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
const Field = ({item, field, label}) => {
    return(
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{noData(item[field])}</span>
        </li>
)
}

export {
    Field
}

export default class ItemDetails extends Component {

    gotService = new gotService();

    state = {
        item: null
    }

    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if (this.props.ItemId !== prevProps.ItemId){
            this.updateItem();
        }
    }

    updateItem(){
        const{ItemId} = this.props;
        if (!ItemId) {
            return;
        }

        this.gotService.getChatacter(ItemId)
            .then((item)=>{
                this.setState({item})
            })
    }

    render() {

        if (!this.state.item) {
            return <span className='select-error'>Please select a item</span>
        }
        const {item} = this.state;
        const {name} = item;

        

        return (
            <Header>
                <H4>{noData(name)}</H4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child)=>{
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </Header>
        );
    }
}
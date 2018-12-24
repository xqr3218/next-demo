import React from 'react';
import { connect } from 'react-redux';
import List from '../components/list';

const mapDispatchToProps = dispatch => {
    return {
        addList: (title) => {
            dispatch({type:'ADD_LIST',title})
        }
    }
}

const mapStateToProps = state => {
    return {list: state.listApp.lists}
}

let i = 1;
class Container extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps)
    }

    render(){
        console.log(this.props);
        const { addList, list } = this.props;
        return (
            <div>
                <button onClick={() => {
                    addList(i++)
                }}>
                    try
                </button>
                123
                {
                    list.length ? list.map((d,i) => (<List key={`li${i}`} title={d.title} />)) : ''
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
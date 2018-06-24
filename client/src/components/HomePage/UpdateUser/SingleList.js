import React from "react";
import { connect } from 'react-redux';
import { editingUser, delUser, goToPage } from '../../../actions';
// import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

class SingleList extends React.Component {
    editingUser = () => {
        // console.log("editing: "+singleData);
        this.props.editingUser(this.props.info);
    }
    delUser = () => {
        // console.log("del:"+id);
        this.props.delUser(this.props.info._id);
    }
    roleName(num){
        if(num===0)
            return "student";
        else if(num===1){
            return "teacher";
        }else{
            return "admin";
        }
    }
    render() {
        return (<tr>
            <td className="text-center" width="25%">
                {this.props.info.username}
            </td>
            <td className="text-center" width="25%">
                {this.roleName(this.props.info.role)}
            </td>
            <td className="text-center" width="25%">
                <Button bsStyle="warning" onClick={() => this.editingUser()} disabled={this.props.info.role===2||this.props.isLoading}>Edit</Button>
            </td>
            <td className="text-center" width="25%">
                <Button onClick={() => this.delUser()} bsStyle="danger" disabled={this.props.info.role===2||this.props.isLoading}>Delete</Button></td>
        </tr>)
    }
}


const mapstateToProps = state => {
    return {
        isLoading: state.isLoading,
    }
}

function mapdispatchToProps(dispatch) {
    return ({
        editingUser: (info) => {
            dispatch({ type: 'ITEMS_IS_LOADING' });
            dispatch(editingUser(info));
            dispatch(goToPage(7));
        },
        delUser: (id) => {
            dispatch({ type: 'ITEMS_IS_LOADING' });
            dispatch(delUser(id));
        }
    })
}

export default connect(mapstateToProps, mapdispatchToProps)(SingleList);
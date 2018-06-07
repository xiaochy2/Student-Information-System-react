import React from "react";
import { connect } from 'react-redux';
import { editing, del, goToPage } from '../../../actions';
// import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

class SingleList extends React.Component {
    editing = () => {
        // console.log("editing: "+singleData);
        this.props.editing(this.props.info);
    }
    del = () => {
        // console.log("del:"+id);
        this.props.del(this.props.info._id);
    }
    render() {
        
            return (<tr>
                <td width="10%">
                    <Button bsStyle="warning" onClick={() => this.editing()} disabled={this.props.isLoading}>Edit</Button>
                </td>
                <td width="10%">
                    <Button onClick={() => this.del()} bsStyle="danger" disabled={this.props.isLoading}>Delete</Button>
                </td>

                <td className="text-center" width="25%">
                    {this.props.info.username}
                </td>
                <td className="text-center" width="25%">
                    {this.props.info.English}
                </td>
                <td className="text-center" width="25%">
                    {this.props.info.Math}
                </td>
                <td className="text-center" width="25%">
                    {this.props.info.Physics}
                </td>
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
        editing: (info) => {
            dispatch({ type: 'ITEMS_IS_LOADING' });
            dispatch(editing(info));
            dispatch(goToPage(5));
        },
        del: (id) => {
            dispatch({ type: 'ITEMS_IS_LOADING' });
            dispatch(del(id));
        }
    })
}

export default connect(mapstateToProps, mapdispatchToProps)(SingleList);
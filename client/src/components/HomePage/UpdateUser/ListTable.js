import React from "react";
import SingleList from './SingleList';
import Page from './Page';
import { connect } from 'react-redux';
import { Table, Col, Button } from "react-bootstrap";
import { sortUser } from '../../../actions';


class ListTable extends React.Component {
    sortUser = (tag) => {
        this.props.sortUser(tag);
    }

    render() {
        let count = 0;
        let min = (this.props.page_num - 1) * 5;
        let max = this.props.page_num * 5;
        return (<Col><Table striped condensed hover>
            <thead>
                <tr>
                    <th className="text-center"><Button bsStyle="default" onClick={() => this.sortUser("username")}>username</Button></th>
                    <th className="text-center"><Button bsStyle="default" onClick={() => this.sortUser("role")}>role</Button></th>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.userList.map((item) => {
                        count++;
                        if (count > min && count <= max) {
                            return <SingleList info={item} key={count} />
                        } else{
                            return ""
                        }
                    })
                }
            </tbody>
        </Table>
            <Page page_num={this.props.page_num} length={this.props.userList.length} />

        </Col>);
    }
}

const mapstateToProps = state => {
    return {
        userList: state.userList,
        page_num: state.page_num
    }
}

function mapdispatchToProps(dispatch) {
    return ({
        sortUser: (tag) => dispatch(sortUser(tag))
    })
}

export default connect(mapstateToProps, mapdispatchToProps)(ListTable);
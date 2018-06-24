import React from 'react';
import { connect } from 'react-redux';
import { getUser,goToPage } from '../../../actions';
import Search from './Search';
import { Grid, Col, Row, Button } from "react-bootstrap";
import ListTable from './ListTable';


class UpdateUser extends React.Component {
    componentDidMount() {
        // console.log("GET");
        this.props.getUser();
    }
    goToPage = () =>{
        this.props.goToPage(6);
    }
    render() {
        if (this.props.isLoading) {
            return (
                <div>loading...</div>
            )
        }
        return (<Grid>
            <Row>
                <Col md={2}></Col>
                <Col md={6} mdOffset={1}>
                    <Search />
                </Col>
                <Col md={2}></Col>
            </Row>
            <Row>
                <Col md={2}></Col>
                <Col md={6} mdOffset={1}>
                    <ListTable />
                </Col>
                <Col md={2}></Col>
            </Row>

            <Row>
                <Col md={4} mdOffset={5}>
                    <Button bsStyle="success" onClick={() => this.goToPage()}>Create New User</Button>
                </Col>
            </Row>
        </Grid>);
    }
}


const mapstateToProps = state => {
    return {
        isLoading: state.isLoading,
    }
}

function mapdispatchToProps(dispatch) {
    return ({
        getUser: () => {
            dispatch({ type: 'ITEMS_IS_LOADING' });
            dispatch(getUser());
        },
        goToPage: (num) => dispatch(goToPage(num))
    })
}

export default connect(mapstateToProps, mapdispatchToProps)(UpdateUser);
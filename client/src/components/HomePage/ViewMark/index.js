import React from 'react';
import { connect } from 'react-redux';
import { getInfo } from '../../../actions';
import Search from './Search';
import { Grid, Col, Row,} from "react-bootstrap";
import ListTable from './ListTable';

class ViewMark extends React.Component {
    componentDidMount() {
        // console.log("GET");
        this.props.getInfo();
    }
    render() {
        if(this.props.isLoading){
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
        getInfo: () => {
            dispatch({ type: 'ITEMS_IS_LOADING' });
            dispatch(getInfo());
        }
    })
}

export default connect(mapstateToProps, mapdispatchToProps)(ViewMark);
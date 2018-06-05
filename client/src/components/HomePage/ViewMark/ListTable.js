import React from "react";
import SingleList from './SingleList';
import Page from './Page';
import { connect } from 'react-redux';
import { Table, Col, Button } from "react-bootstrap";


class ListTable extends React.Component {

    
    render() {
        let count = 0;
        let min = (this.props.page_num - 1) * 5;
        let max = this.props.page_num * 5;
        return (<Col><Table striped condensed hover>
            <thead>
                <tr>
                    <th className="text-center"><Button bsStyle="default" onClick={() => this.sort("username")}>username</Button></th>
                    <th className="text-center"><Button bsStyle="default" onClick={() => this.sort("english")}>English</Button></th>
                    <th className="text-center"><Button bsStyle="default" onClick={() => this.sort("math")}>Math</Button></th>
                    <th className="text-center"><Button bsStyle="default" onClick={() => this.sort("physics")}>Physics</Button></th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.dataList.map((item) => {
                        count++;
                        if (count > min && count <= max) {
                           
                            return <SingleList info = {item} />
                        }
                    })
                }
            </tbody>
        </Table>
            <Page page_num = {this.props.page_num} length = {this.props.dataList.length}/>

        </Col>);
    }
}

const mapstateToProps = state => {
    return {
        dataList: state.dataList,
        page_num: state.page_num
    }
}

export default connect(mapstateToProps)(ListTable);
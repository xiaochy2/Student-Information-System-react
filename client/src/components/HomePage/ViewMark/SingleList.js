import React from "react";

class SingleList extends React.Component {
    render() {
        return (<tr>
            <td width="25%">
                {this.props.info.username}
            </td>
            <td width="25%">
                {this.props.info.English}
            </td>
            <td width="25%">
                {this.props.info.Math}
            </td>
            <td width="25%">
                {this.props.info.Physics}
            </td>
        </tr>)
    }
}
export default SingleList;
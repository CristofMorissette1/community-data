import React, {Component} from 'react';
import axios from 'axios';
import ReactTable from "react-table";
import 'react-table/react-table.css';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            items: []
        }
    }

    componentDidMount(){
        axios.get('https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes')
        .then(
            (response) => {
                 this.setState({
                     items: response.data
                 }) 
            })
            .catch(error => {
                console.log(error)
            })
    }


    render(){
        const { items } = this.state;
        const columns = [
            {
                Header: "Home Id",
                accessor: "communityId",
                sortable: false,
                style:{ textAlign: 'left'}
            },
            {
                Header: "Home Price",
                accessor: "price",
                style:{ textAlign: 'left'}
            },
            {
                Header: "Size of home (sqtf)",
                accessor: "area",
                style:{ textAlign: 'left'}
            },
            {
                Header: "Type of Home",
                accessor: "type",
                style:{ textAlign: 'left'}
            }
    ]
        return(
            <div className="header">
                <h2>List of Homes</h2>
                <ReactTable 
                columns={columns}
                data={this.state.items}
                defaultPageSize={15}
                showPagination={false}
                noDataText={"Please wait for data..."}
                >

            </ReactTable>
           </div>
        )
    }
}

export default Home;
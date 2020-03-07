import React, {Component} from 'react';
import axios from 'axios';
import ReactTable from "react-table";
import 'react-table/react-table.css';

class Community extends Component {
    constructor(props) {
        super(props);
        this.state={
            items: []
        }
    }

   componentDidMount(){
       axios.get('https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities')
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



    render() {
        const { items } = this.state;
        const  columns  = [
            {
                Header: "Community Id",
                accessor: "id",
                sortable: false,
                style:{ textAlign: 'left'}
            },
            {
                Header: "Community Name",
                accessor: "name",
                style:{ textAlign: 'left',
                        height: '50px'}
            },
            {
                Header: "Community Img",
                accessor: "imgUrl",
                Cell: row => (
                    <div>
                    <img className="img-responsive" src={row.row.imgUrl} />
                    </div>
                    ),
                style:{ textAlign: 'left'},
                maxHeight: -100
            },
            {
                Header: "Community Group",
                accessor: "group",
                style:{ textAlign: 'left'}
            }
    ]
       return(
           <div className='header'>
            <h2>List of Communities</h2>
            <ReactTable 
                columns={columns}
                data={this.state.items}
                showPagination={false}
                defaultPageSize={10}
                noDataText={"Please wait for data..."}
            >
            </ReactTable>
            </div>
       )
    }
}



export default Community;
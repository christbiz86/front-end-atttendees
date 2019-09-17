import React, { Component } from 'react';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import * as Constant from '../../_helpers/constant';
import Toggle from 'react-toggle'
import './unit.css';
import swal from 'sweetalert';

let postUpdate=[];
let isChecked=[];
class Unit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requiredItem: 0,
            isLoading: false,
            open: false,
            selectedPost: null,
            edit:false,
            tableRows:[],
            items:[]
        }

    }

    updateSubmit(){
        this.setState({
            isLoading:true
        })
        fetch(Constant.API_LIVE + '/units', {
            method: 'PUT',
            body: JSON.stringify(postUpdate),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => { res.json()
            if(res.ok) {
                swal("Success!", "Data Successfully Updated!", "success");
                this.setState({disabled:true,edit:false, isLoading:false})
                this.getData()
            }else{
                swal("Failed!", "Data Failed to update!", "error")
                this.setState({disabled:true,edit:false, isLoading:false})
            }
        })
        .catch(error => {
            swal("Failed!", "Data Failed to update!", "error")
            this.setState({disabled:true,edit:false, isLoading:false})
        })
    }

    changeStatus(unit,isStatus,index){
        var unitUpdate=unit;
        if(isStatus){
            unitUpdate.idStatus.status="Inactive"
            isChecked[index]=false
        }else{
            unitUpdate.idStatus.status="Active"
            isChecked[index]=true
        }
        if(postUpdate[index]==undefined){
            postUpdate[index]=unitUpdate ;
        }else{
            delete postUpdate[index];
        }
    }
    
    changeDisable(){       
        postUpdate={};
        this.setState({edit:true,tableRows:this.assemblePosts(this.state.items,false)})
    }

    cancel= async() =>{
        console.log(postUpdate);
        postUpdate.forEach(item =>{
            console.log(item);
            if(item.idStatus.status==="Inactive"){
                item.idStatus.status = "Active";
            }else{
                item.idStatus.status = "Inactive";
            }
        })
        console.log(postUpdate);
        console.log(this.state.items);
        postUpdate={};
        this.setState({edit:false,tableRows:this.assemblePosts(this.state.items,true) })
        // await this.getData();
    }

    componentDidMount= async() =>{
        await this.getData();
    }

    getData(){
        axios.request(Constant.API_LIVE + '/unit', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({items:data,tableRows:this.assemblePosts(data,true),edit:false })
        })

    }

    assemblePosts = (data,disabled) => {
        return( data.map((unit, index) => {   
            if(unit.idStatus.status=="Active"){
                isChecked[index]=true;
            }else {
                isChecked[index]=false;
            }
            return(
                {
                    nomor: index + 1,
                    unit: unit.unit,
                    status: unit.idStatus.status,
                    action: 
                    <>
                        <div className="text-center">
                        <Toggle 
                        disabled={disabled}
                        defaultChecked={isChecked[index]}
                        onClick={()=>this.changeStatus(unit,isChecked[index],index)}>
                        </Toggle>
                        </div>
                    </>
                }
            );
        })
        );
    }

    render(){
        const { open } = this.state;
        const data = {
            columns: [
                {
                    label: '#',
                    field: 'nomor',
                    width: 100
                },
                {
                    label: 'Unit',
                    field: 'unit',
                    width: 150
                },
                {
                    label: 'Status',
                    field: 'status',
                    width: 150
                },
                {
                    label: 'Action',
                    field: 'action',
                    width: 100
                    
                }
            ],

            rows: this.state.tableRows,
        }

        return(
            <div className="content-page">
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h4 className="page-title">Unit</h4>
                                <ol className="breadcrumb">
                                    <li>
                                        <a href="#">Attendee Application</a>
                                    </li>
                                    <li>
                                        <a href="#">Unit</a>
                                    </li>
                                    <li className="active">
                                        List
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card-box table-responsive">
                                    <h4 className="m-t-0 header-title"><b>Unit List</b></h4>
                                    <br />
                                    {
                                        !this.state.edit &&
                                        <NavLink to={'/unit/form'}><button type="button" className="btn btn-default btn-rounded waves-effect waves-light">Create</button></NavLink>
                                    }
                                    {
                                        this.state.edit && !this.state.isLoading &&
                                        <button type="button" className="btn btn-default btn-rounded waves-effect waves-light" onClick={()=>this.updateSubmit()}>Submit</button>    
                                    }
                                    {
                                         this.state.edit && this.state.isLoading &&  <i className="spinner-border">  </i> 
                                    }
                                    
                                    {
                                        !this.state.edit &&
                                        <button type="button" className="btn btn-default btn-rounded waves-effect waves-light" onClick={()=>this.changeDisable()}>Edit</button>
                                    }{
                                        this.state.edit && !this.state.isLoading &&
                                        <button type="button" className="btn btn-default btn-rounded waves-effect waves-light" onClick={()=>this.cancel()}>Cancel</button>    
                                    }
                                    <hr/>
                                    <div>
                                        <MDBDataTable paging={false} striped bordered data={data} />
                                    </div>
                                    <div>
                                        <Modal open={open} onClose={this.onCloseModal} center>
                                            <h3>Detail Unit</h3>
                                            {/* <div>{this.renderModal()}</div> */}
                                        </Modal>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer">© 2016. All rights reserved.
                </footer>

            </div>
        );  
    }
}

export default Unit;
import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function Dashboard() {
    // const [empData, setEmpData] = useState([]);
    // const [desData, setDesData] = useState([]);
    // const [gradeData, setGradeData] = useState([]);
    // var totEmp = 0, totDes = 0, totGrade = 0;
    // const getAllDesignations = () => {
    //     Axios  
    //     .get(process.env.REACT_APP_API+"DesignationAPI")  
    //     .then(result => {setDesData(result.data);})
    // }
    // const getAllEmployees = () => {
    //     Axios  
    //     .get(process.env.REACT_APP_API+"EmployeeAPI")  
    //         .then(result => setEmpData(result.data)); 
    // }
    // const getAllGrades = () => {
    //     Axios  
    //     .get(process.env.REACT_APP_API+"GradeAPI")  
    //         .then(result => setGradeData(result.data)); 
    // }
    useEffect(() => {  
        // getAllDesignations();
        // getAllEmployees();
        // getAllGrades();
    } );
        return (
            <div>
                <Helmet>
                    <title>BuildIt Studio | Dashboard</title>
                </Helmet>
                 {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <Header/>
                <Sidebar/>
                <div className="main-content">

                    <div className="page-content">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box d-flex align-items-center justify-content-between">
                                        <h4 className="mb-0 font-size-18">BuildIt Studio Admin Dashboard</h4>

                                        <div className="page-title-right">
                                            <ol className="breadcrumb m-0">
                                                <li className="breadcrumb-item"><a href="#">Admin</a></li>
                                                <li className="breadcrumb-item active">Dashboard</li>
                                            </ol>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="media">
                                                        <div className="mr-3">
                                                            <img src="https://www.pngitem.com/pimgs/m/128-1280822_check-mark-box-clip-art-blue-admin-icon.png" alt="" className="avatar-md rounded-circle img-thumbnail" />
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="text-muted">
                                                                <p className="mb-2">Welcome to BuildIt Studio Dashboard</p>
                                                                <h5 className="mb-1">{sessionStorage.getItem("userName")}</h5>
                                                                {/* <p className="mb-0">{sessionStorage.getItem("userType")}</p> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 align-self-center">
                                                    <div className="text-lg-center mt-4 mt-lg-0">
                                                        <div className="row">
                                                            <div className="col-4">
                                                                <div>
                                                                    <p className="text-muted text-truncate mb-2">Total Users</p>
                                                                    {/* {empData.map((item) => { 
                                                                    totEmp = totEmp + 1
                                                                    })} */}
                                                                    {/* <h5 className="mb-0">{totEmp}</h5> */}
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div>
                                                                    <p className="text-muted text-truncate mb-2">Brands</p>
                                                                    {/* {desData.map((item) => { 
                                                                    totDes = totDes + 1
                                                                    })}
                                                                    <h5 className="mb-0">{totDes}</h5> */}
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div>
                                                                    <p className="text-muted text-truncate mb-2">Builds</p>
                                                                    {/* {gradeData.map((item) => { 
                                                                    totGrade = totGrade + 1
                                                                    })}
                                                                    <h5 className="mb-0">{totGrade}</h5> */}

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-4">
                                                                <div>
                                                                    <p className="text-muted text-truncate mb-2">Orders</p>
                                                                    {/* {empData.map((item) => { 
                                                                    totEmp = totEmp + 1
                                                                    })} */}
                                                                    {/* <h5 className="mb-0">{totEmp}</h5> */}
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div>
                                                                    <p className="text-muted text-truncate mb-2">Products</p>
                                                                    {/* {desData.map((item) => { 
                                                                    totDes = totDes + 1
                                                                    })}
                                                                    <h5 className="mb-0">{totDes}</h5> */}
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div>
                                                                    <p className="text-muted text-truncate mb-2">Factors</p>
                                                                    {/* {gradeData.map((item) => { 
                                                                    totGrade = totGrade + 1
                                                                    })}
                                                                    <h5 className="mb-0">{totGrade}</h5> */}

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="card bg-soft-primary">
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <div className="text-primary p-3">
                                                        <h5 className="text-primary">Welcome Back !</h5>
                                                        <p>BuildIt Studio Dashboard</p>
                                                    </div>
                                                </div>
                                                <div className="col-5 align-self-end">
                                                    <img src="assets/images/profile-img.png" alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <div className="avatar-xs mr-3">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-18">
                                                                <i className="bx bx-copy-alt"></i>
                                                            </span>
                                                        </div>
                                                        <h5 className="font-size-14 mb-0">Users</h5>
                                                    </div>
                                                    <div className="text-muted mt-4">
                                                        <h4>1,452 <i className="mdi mdi-chevron-up ml-1 text-success"></i></h4>
                                                        <div className="d-flex">
                                                            <span className="badge badge-soft-success font-size-12"> + 0.2% </span> <span className="ml-2 text-truncate">From previous period</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <div className="avatar-xs mr-3">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-18">
                                                                <i className="bx bx-archive-in"></i>
                                                            </span>
                                                        </div>
                                                        <h5 className="font-size-14 mb-0">Revenue</h5>
                                                    </div>
                                                    <div className="text-muted mt-4">
                                                        <h4>$ 28,452 <i className="mdi mdi-chevron-up ml-1 text-success"></i></h4>
                                                        <div className="d-flex">
                                                            <span className="badge badge-soft-success font-size-12"> + 0.2% </span> <span className="ml-2 text-truncate">From previous period</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <div className="avatar-xs mr-3">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-18">
                                                                <i className="bx bx-purchase-tag-alt"></i>
                                                            </span>
                                                        </div>
                                                        <h5 className="font-size-14 mb-0">Down</h5>
                                                    </div>
                                                    <div className="text-muted mt-4">
                                                        <h4>$ 16.2 <i className="mdi mdi-chevron-up ml-1 text-success"></i></h4>

                                                        <div className="d-flex">
                                                            <span className="badge badge-soft-warning font-size-12"> 0% </span> <span className="ml-2 text-truncate">From previous period</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6">
                                    <script>document.write(new Date().getFullYear())</script> © BuildIt Studio.
                                </div>
                                <div className="col-sm-6">
                                    <div className="text-sm-right d-none d-sm-block">
                                        Design & Develop by "drogon-codes"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        );
}
export default Dashboard;

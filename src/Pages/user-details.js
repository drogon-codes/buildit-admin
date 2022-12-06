/* eslint-disable no-script-url */
import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate, useParams} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function UserDetails(prop){
    const [data, setData] = useState([]);  
    const params = useParams();
    let navigate = useNavigate();
    useEffect(() => {  
        // debugger;  
        Axios  
            .get("http://localhost:8090/admin/findByUserId/"+params.userId)
            .then(result => setData(result.data));  
        // debugger;  
    } );

    return(
        <div>
        <Helmet>
        <title>BuildIt Studio | User Details</title>
    </Helmet>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <Header/>
        <Sidebar/>
        <div class="main-content">
                <div class="page-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 class="mb-0 font-size-18">User Details</h4>

                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="">Users</a></li>
                                            <li class="breadcrumb-item active">User Details</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="pt-3">
                                            <div class="row justify-content-center">
                                                <div class="col-xl-8">
                                                    <div>
                                                        <div class="mt-4">
                                                            <table className="table text-muted font-size-14" border="0">
                                                            <tbody>
                                                            {data.map((item, i=1) => {  
                                                    return<tr key={item.userDetailId}>
                                                        <td>{item.userId}</td>
                                                                    </tr>
                                                                })}
                                                                </tbody>
                                                            </table>
                                                            <hr/>
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

                
                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                <script>document.write(new Date().getFullYear())</script> © BuildIt Studio.
                            </div>
                            <div class="col-sm-6">
                                <div class="text-sm-right d-none d-sm-block">
                                    Design & Develop by "drogon-codes"
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            </div>
            </div>
    );
}
export default UserDetails;
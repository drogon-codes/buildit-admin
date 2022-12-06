import React,{useState} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from "axios";
function AddBrand(){
    const initialInputState = { brandName: "", isActive: "" };
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const [eachEntry2, setEachEntry2] = useState(initialInputState);
    const [showLoading, setShowLoading] = useState(false);
    let navigate = useNavigate();
    const {brandName} = eachEntry;
    const {isActive} = eachEntry2;

    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
        setEachEntry2({ ...eachEntry2, [e.target.name]: e.target.value });
    };

    const handleFinalSubmit = e => {
        e.preventDefault();
        debugger;
        const data = {brandName:eachEntry.brandName, isActive:eachEntry2.isActive}
        axios.post("http://localhost:8090/admin/addBrand",data).then(navigate("/ViewBrands"));
        console.log(eachEntry);
      };

    console.log(eachEntry);
    return(
        <div>
            <Helmet>
                    <title>HRMS | Add Brand</title>
                </Helmet>
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <Header/>
            <Sidebar/>
            <div className="main-content" align="left">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0 font-size-18">Add Brand</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Manage Brands</a></li>
                                            <li className="breadcrumb-item active">Add Brand</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Add new Brand</h4>
                                        <div className="text-sm-right">
                                            <Link to="/ViewBrands" className="btn btn-sm btn btn-warning w-md">View Brands</Link>
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="formrow-firstname-input">Brand name</label>
                                                <input type="text" className="form-control" name="brandName"  onChange={handleInputChange} value={brandName} id="formrow-firstname-input"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="formrow-firstname-input">Is Active?</label>
                                                <select className="form-control" onChange={handleInputChange} name="isActive" value={isActive} id="formrow-firstname-input">
                                                <option value="" selected>--Select Activity Status--</option>
                                                    <option value="Y">Yes</option>
                                                    <option value="N" >No</option>
                                                </select>
                                                {/* <input type="text" className="form-control" name="stateName"  onChange={handleInputChange} value={stateName} id="formrow-firstname-input"/> */}
                                            </div>
                                            <div>
                                                <button onClick={handleFinalSubmit} className="btn btn-primary w-md">Add</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <script>document.write(new Date().getFullYear())</script> © Skote.
                            </div>
                            <div className="col-sm-6">
                                <div className="text-sm-right d-none d-sm-block">
                                    Design & Develop by Themesbrand
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default AddBrand;
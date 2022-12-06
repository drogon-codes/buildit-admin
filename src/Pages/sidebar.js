import React from "react";
import { Route, Link } from 'react-router-dom';
function Sidebar(){
        return(
            <div>
                <div className="vertical-menu">
                    <div data-simplebar className="h-100">

                        <div id="sidebar-menu" align="left">
                            <ul className="metismenu list-unstyled" id="side-menu">
                                <li className="menu-title" key="t-menu">Admin Tools</li>

                                <li>
                                    <Link to="/ViewUsers" className="waves-effect">
                                        <i className="bx bx-map-pin"></i>
                                        <span key="t-dashboards">Users</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewBrands" className="waves-effect">
                                        <i className="bx bx-map"></i>
                                        <span key="t-dashboards">Brands</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewCategories" className="waves-effect">
                                        <i className="bx bx-calendar"></i>
                                        <span key="t-dashboards">Categories</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewProducts" className="waves-effect">
                                        <i className="bx bx-building"></i>
                                        <span key="t-dashboards">Products</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewFactors" className="waves-effect">
                                        <i className="bx bx-pen"></i>
                                        <span key="t-dashboards">Factors</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewBuilds" className="waves-effect">
                                        <i className="bx bx-user"></i>
                                        <span key="t-dashboards">Builds</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewOrders" className="waves-effect">
                                        <i className="bx bx-money"></i>
                                        <span key="t-dashboards">Orders</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Sidebar;
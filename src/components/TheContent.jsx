import React from "react";
import {
    CBadge,
    CButton,
    CButtonGroup, CCallout,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CContainer,
    CProgress,
    CRow
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import WidgetsDropdown from "./WidgetsDropdown";
import MainChartExample from "./MainChartExample";

const TheContent = () => {
    return (
        <main className="c-main">
            <CContainer fluid>
                <>
                    <WidgetsDropdown/>
                    <CCard>
                        <CCardBody>
                            <CRow>
                                <CCol sm="5">
                                    <h4 id="traffic" className="card-title mb-0">Traffic</h4>
                                    <div className="small text-muted">November 2017</div>
                                </CCol>
                                <CCol sm="7" className="d-none d-md-block">
                                    <CButton color="primary" className="float-right">
                                        <CIcon name="cil-cloud-download"/>
                                    </CButton>
                                    <CButtonGroup className="float-right mr-3">
                                        {
                                            ['Day', 'Month', 'Year'].map(value => (
                                                <CButton
                                                    color="outline-secondary"
                                                    key={value}
                                                    className="mx-0"
                                                    active={value === 'Month'}
                                                >
                                                    {value}
                                                </CButton>
                                            ))
                                        }
                                    </CButtonGroup>
                                </CCol>
                            </CRow>
                            <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
                        </CCardBody>
                        <CCardFooter>
                            <CRow className="text-center">
                                <CCol md sm="12" className="mb-sm-2 mb-0">
                                    <div className="text-muted">Visits</div>
                                    <strong>29.703 Users (40%)</strong>
                                    <CProgress
                                        className="progress-xs mt-2"
                                        precision={1}
                                        color="success"
                                        value={40}
                                    />
                                </CCol>
                                <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
                                    <div className="text-muted">Unique</div>
                                    <strong>24.093 Users (20%)</strong>
                                    <CProgress
                                        className="progress-xs mt-2"
                                        precision={1}
                                        color="info"
                                        value={40}
                                    />
                                </CCol>
                                <CCol md sm="12" className="mb-sm-2 mb-0">
                                    <div className="text-muted">Pageviews</div>
                                    <strong>78.706 Views (60%)</strong>
                                    <CProgress
                                        className="progress-xs mt-2"
                                        precision={1}
                                        color="warning"
                                        value={40}
                                    />
                                </CCol>
                                <CCol md sm="12" className="mb-sm-2 mb-0">
                                    <div className="text-muted">New Users</div>
                                    <strong>22.123 Users (80%)</strong>
                                    <CProgress
                                        className="progress-xs mt-2"
                                        precision={1}
                                        color="danger"
                                        value={40}
                                    />
                                </CCol>
                                <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
                                    <div className="text-muted">Bounce Rate</div>
                                    <strong>Average Rate (40.15%)</strong>
                                    <CProgress
                                        className="progress-xs mt-2"
                                        precision={1}
                                        value={40}
                                    />
                                </CCol>
                            </CRow>
                        </CCardFooter>
                    </CCard>

                    <CRow>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    Traffic {' & '} Sales
                                </CCardHeader>
                                <CCardBody>
                                    <CRow>
                                        <CCol xs="12" md="6" xl="6">

                                            <CRow>
                                                <CCol sm="6">
                                                    <CCallout color="info">
                                                        <small className="text-muted">New Clients</small>
                                                        <br/>
                                                        <strong className="h4">9,123</strong>
                                                    </CCallout>
                                                </CCol>
                                                <CCol sm="6">
                                                    <CCallout color="danger">
                                                        <small className="text-muted">Recurring Clients</small>
                                                        <br/>
                                                        <strong className="h4">22,643</strong>
                                                    </CCallout>
                                                </CCol>
                                            </CRow>

                                            <hr className="mt-0"/>

                                            <div className="progress-group mb-4">
                                                <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Monday
                      </span>
                                                </div>
                                                <div className="progress-group-bars">
                                                    <CProgress className="progress-xs" color="info" value="34"/>
                                                    <CProgress className="progress-xs" color="danger" value="78"/>
                                                </div>
                                            </div>


                                            <div className="progress-group mb-4">
                                                <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Thursday
                      </span>
                                                </div>
                                                <div className="progress-group-bars">
                                                    <CProgress className="progress-xs" color="info" value="43"/>
                                                    <CProgress className="progress-xs" color="danger" value="91"/>
                                                </div>
                                            </div>


                                            <div className="legend text-center">
                                                <small>
                                                    <sup className="px-1"><CBadge shape="pill"
                                                                                  color="info">&nbsp;</CBadge></sup>
                                                    New clients
                                                    &nbsp;
                                                    <sup className="px-1"><CBadge shape="pill"
                                                                                  color="danger">&nbsp;</CBadge></sup>
                                                    Recurring clients
                                                </small>
                                            </div>
                                        </CCol>

                                        <CCol xs="12" md="6" xl="6">

                                            <CRow>
                                                <CCol sm="6">
                                                    <CCallout color="warning">
                                                        <small className="text-muted">Pageviews</small>
                                                        <br/>
                                                        <strong className="h4">78,623</strong>
                                                    </CCallout>
                                                </CCol>
                                                <CCol sm="6">
                                                    <CCallout color="success">
                                                        <small className="text-muted">Organic</small>
                                                        <br/>
                                                        <strong className="h4">49,123</strong>
                                                    </CCallout>
                                                </CCol>
                                            </CRow>

                                            <hr className="mt-0"/>

                                            <div className="progress-group mb-4">
                                                <div className="progress-group-header">
                                                    <CIcon className="progress-group-icon" name="cil-user"/>
                                                    <span className="title">Users</span>
                                                    <span className="ml-auto font-weight-bold">43%</span>
                                                </div>
                                                <div className="progress-group-bars">
                                                    <CProgress className="progress-xs" color="warning" value="43"/>
                                                </div>
                                            </div>
                                            <div className="progress-group">
                                                <div className="progress-group-header">
                                                    <CIcon className="progress-group-icon" name="cil-globe-alt"/>
                                                    <span className="title">Organic Search</span>
                                                    <span className="ml-auto font-weight-bold">191,235 <span
                                                        className="text-muted small">(56%)</span></span>
                                                </div>
                                                <div className="progress-group-bars">
                                                    <CProgress className="progress-xs" color="success" value="56"/>
                                                </div>
                                            </div>

                                            <div className="divider text-center">
                                                <CButton color="link" size="sm" className="text-muted">
                                                    <CIcon name="cil-options"/>
                                                </CButton>
                                            </div>

                                        </CCol>
                                    </CRow>

                                    <br/>

                                    <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                                        <thead className="thead-light">
                                        <tr>
                                            <th className="text-center"><CIcon name="cil-people"/></th>
                                            <th>User</th>
                                            <th className="text-center">Country</th>
                                            <th>Usage</th>
                                            <th className="text-center">Payment Method</th>
                                            <th>Activity</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-center">
                                                <div className="c-avatar">
                                                    <img src={'https://picsum.photos/200'} className="c-avatar-img"
                                                         alt="test@example.com"/>
                                                    <span className="c-avatar-status bg-success"></span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>Yiorgos Avraamu</div>
                                                <div className="small text-muted">
                                                    <span>New</span> | Registered: Jan 1, 2015
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <CIcon height={25} name="cif-us" title="us" id="us"/>
                                            </td>
                                            <td>
                                                <div className="clearfix">
                                                    <div className="float-left">
                                                        <strong>50%</strong>
                                                    </div>
                                                    <div className="float-right">
                                                        <small className="text-muted">Jun 11, 2015 - Jul 10,
                                                            2015</small>
                                                    </div>
                                                </div>
                                                <CProgress className="progress-xs" color="success" value="50"/>
                                            </td>
                                            <td className="text-center">
                                                <CIcon height={25} name="cib-cc-mastercard"/>
                                            </td>
                                            <td>
                                                <div className="small text-muted">Last login</div>
                                                <strong>10 sec ago</strong>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </>
            </CContainer>
        </main>
    )
}

export default TheContent;

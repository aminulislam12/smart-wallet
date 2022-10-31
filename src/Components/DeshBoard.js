/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Col from "./Col";
import ContentWrapper from "./ContentWrapper";
import Row from "./Row";

export default function DeshBoard() {
  return (
    <>
      <ContentWrapper>
        <Row>
          <Col className="col-sm-12">
            <div className="page-title-box">
              <div className="row align-items-center">
                <Col className="col-md-8">
                  <h4 className="page-title m-0">Dashboard</h4>
                </Col>
                {/* <!-- end col --> */}
              </div>
              {/* <!-- end row --> */}
            </div>
            {/* <!-- end page-title-box --> */}
          </Col>
        </Row>
        {/* <!-- end page title --> */}

        <Row>
          <Col className="col-xl-3 col-md-6">
            <div className="card bg-gradient-green mini-stat text-white">
              <div className="p-3 mini-stat-desc">
                <div className="clearfix">
                  <h6 className="text-uppercase mt-0 float-left text-white-60">
                    Balance
                  </h6>
                  <h4 className="mb-3 mt-0 float-right">৳1,587</h4>
                </div>
                <div>
                  <span className="badge badge-success text-white">
                    +110 Tk
                  </span>
                  <span className="ml-2">From Last Trasaction </span>
                </div>
              </div>
              <div className="p-3">
                <div className="float-right">
                  <a href="#" className="text-white-50">
                    <i className="mdi mdi-wallet-outline h5"></i>
                  </a>
                </div>
                <p className="font-14 m-0">Last: ৳ 1447</p>
              </div>
            </div>
          </Col>

          <div className="col-xl-3 col-md-6">
            <div className="card bg-gradient-orange mini-stat text-white">
              <div className="p-3 mini-stat-desc">
                <div className="clearfix">
                  <h6 className="text-uppercase mt-0 float-left text-white-60">
                    Income
                  </h6>
                  <h4 className="mb-3 mt-0 float-right">$46,785</h4>
                </div>
                <div>
                  <span className="badge badge-light text-success">250 Tk</span>
                  <span className="ml-2">From Last Income</span>
                </div>
              </div>
              <div className="p-3">
                <div className="float-right">
                  <a href="#" className="text-white-50">
                    <i className="mdi mdi-credit-card-plus h5"></i>
                  </a>
                </div>
                <p className="font-14 m-0">Last : ৳47,596</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-gradient-indigo mini-stat text-white">
              <div className="p-3 mini-stat-desc">
                <div className="clearfix">
                  <h6 className="text-uppercase mt-0 float-left text-white-60">
                    Expenses
                  </h6>
                  <h4 className="mb-3 mt-0 float-right">৳15.9</h4>
                </div>
                <div>
                  <span className="badge badge-light text-primary"> 0% </span>
                  <span className="ml-2">From previous period</span>
                </div>
              </div>
              <div className="p-3">
                <div className="float-right">
                  <a href="#" className="text-white-50">
                    <i className="ti-shopping-cart h5"></i>
                  </a>
                </div>
                <p className="font-14 m-0">Last : 15.8</p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card bg-gradient-blue mini-stat text-white">
              <div className="p-3 mini-stat-desc">
                <div className="clearfix">
                  <h6 className="text-uppercase mt-0 float-left text-white-60">
                    Total Amount
                  </h6>
                  <h4 className="mb-3 mt-0 float-right">1890</h4>
                </div>
                <div>
                  <span className="badge badge-light text-info"> +89% </span>
                  <span className="ml-2">Total Trasaction</span>
                </div>
              </div>
              <div className="p-3">
                <div className="float-right">
                  <a href="#" className="text-white-50">
                    <i className="mdi mdi-briefcase-check h5"></i>
                  </a>
                </div>
                <p className="font-14 m-0">Total TNX : 1776</p>
              </div>
            </div>
          </div>
        </Row>
        {/* <!-- end row --> */}
        <div className="row">
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <h4 className="mt-0 header-title">Sales Report</h4>
                <div className="row">
                  <div className="col-lg-8">
                    <div
                      id="morris-line-example"
                      className="morris-chart"
                      style={{ height: "300px" }}
                    ></div>
                  </div>
                  <div className="col-lg-4">
                    <div>
                      <h5 className="font-14 mb-5">Yearly Sales Report</h5>

                      <div>
                        <h5 className="mb-3">2018 : $19523</h5>
                        <p className="text-muted mb-4">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis atque quos dolores et
                        </p>
                        <a href="#" className="btn btn-primary btn-sm">
                          Read more <i className="mdi mdi-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card">
              <div className="card-body">
                <h4 className="mt-0 header-title">Sales Analytics</h4>
                <div
                  id="morris-donut-example"
                  className="morris-chart"
                  style={{ height: "300px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end row --> */}
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
                <h4 className="mt-0 header-title mb-4">Latest Trasaction</h4>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">TNX No.</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Account</th>
                        <th scope="col">Category</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">#14567</th>
                        <td>Michael Mitchell</td>
                        <td>14 Jan 2022</td>
                        <td>Thu 06:53 PM</td>
                        <td>Cash</td>
                        <td>
                          <span className="badge badge-success">Income</span>
                        </td>
                        <td>$148</td>
                      </tr>
                      <tr>
                        <th scope="row">#14568</th>
                        <td>Dennis Cervantes</td>
                        <td>14 Jan 2022</td>
                        <td>Thu 06:53 PM</td>
                        <td>Cash</td>
                        <td>
                          <span className="badge badge-danger">Expense</span>
                        </td>
                        <td>$144</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end row -->

              <!-- end row -->

              <!-- end row --> */}

        {/* <!-- container fluid --> */}
      </ContentWrapper>
    </>
  );
}

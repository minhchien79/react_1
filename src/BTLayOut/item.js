import React, { Component } from "react";
import {
  BsCollectionFill,
  BsFillCloudArrowDownFill,
  BsFillPostcardFill,
  BsFillBootstrapFill,
  BsCode,
  BsFillPatchCheckFill,
} from "react-icons/bs";

export default class Item extends Component {
  render() {
    return (
      <div className="row">      
          <div className=" col-sm-4 mb-5">
            <div className="card bg-light border-0 h-100 align-items-center">
              <div className="card-body text-center pt-0 pt-lg-0">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <BsCollectionFill />
                </div>
                <h2 className="fs-4 fw-bold">Fresh new layout</h2>
                <p className="mb-0">
                  With Bootstrap 5, we've created a fresh new layout for this
                  template!
                </p>
              </div>
              <button className="btn btn-info m-5">Find Out More</button>
            </div>
          </div>
          <div className=" col-sm-4 mb-5">
            <div className="card bg-light border-0 h-100 align-items-center">
              <div className="card-body text-center  pt-0 pt-lg-0">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <BsFillCloudArrowDownFill />
                </div>
                <h2 className="fs-4 fw-bold">Free to download</h2>
                <p className="mb-0">
                  As always, Start Bootstrap has a powerful collectin of free
                  templates.
                </p>
              </div>
              <button className="btn btn-info m-5">Find Out More</button>
            </div>
          </div>
          <div className="col-sm-4 mb-5">
            <div className="card bg-light border-0 h-100 align-items-center">
              <div className="card-body text-center pt-0 pt-lg-0">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <BsFillPostcardFill />
                </div>
                <h2 className="fs-4 fw-bold">Jumbotron hero header</h2>
                <p className="mb-0">
                  The heroic part of this template is the jumbotron hero header!
                </p>
              </div>
              <button className="btn btn-info m-5">Find Out More</button>
            </div>
          </div>
          <div className="col-sm-4 mb-5">
            <div className="card bg-light border-0 h-100 align-items-center">
              <div className="card-body text-center pt-0 pt-lg-0">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <BsFillBootstrapFill />
                </div>
                <h2 className="fs-4 fw-bold">Feature boxes</h2>
                <p className="mb-0">
                  We've created some custom feature boxes using Bootstrap icons!
                </p>
              </div>
              <button className="btn btn-info m-5">Find Out More</button>
            </div>
          </div>
          <div className="col-sm-4 mb-5">
            <div className="card bg-light border-0 h-100 align-items-center">
              <div className="card-body text-center pt-0 pt-lg-0">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <BsCode />
                </div>
                <h2 className="fs-4 fw-bold">Simple clean code</h2>
                <p className="mb-0">
                  We keep our dependencies up to date and squash bugs as they
                  come!
                </p>
              </div>
              <button className="btn btn-info m-5">Find Out More</button>
            </div>
          </div>
          <div className="col-sm-4 mb-5">
            <div className="card bg-light border-0 h-100 align-items-center">
              <div className="card-body text-center pt-0 pt-lg-0">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <BsFillPatchCheckFill />
                </div>
                <h2 className="fs-4 fw-bold">A name you trust</h2>
                <p className="mb-0">
                  Start Bootstrap has been the leader in free Bootstrap
                  templates since 2013!
                </p>
              </div>
                  <button className="btn btn-info m-5">Find Out More</button>
            </div>
          </div>
      </div>
    );
  }
}

import React, { Component } from "react";

class Contact extends Component {


render() {
  return (
    <div>
      <div className="row">
        <div className=" col-sm-12 jumbotron">
          <h1 className="contact">Contact</h1>
          <hr className="my-4" />

          

        <div className="row">
        <div className="col-sm-6">
        <label className="label is-large ml-4">
              <button className="fas fa-book"></button> Email
            </label>
      <br />

        <button type="button" className="btn btn-default btn-lg">
        <span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> Phone
        </button>


        <br />

        <button type="button" className="btn btn-default btn-lg">
        <span className="glyphicon glyphicon-#0077b5" aria-hidden="true"></span> LinkedIn
        </button>

        <br />

        <button type="button" className="btn btn-default btn-lg">
        <span className="glyphicon glyphicon-#24292e" aria-hidden="true"></span> Github
        </button>




        </div>

          <div className="col-sm-6">
            <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Name</label>
            </div>
    
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="John Smith"
          ></input>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
      </form>
</div>
</div>

        </div>
      </div>
    </div>
  );
}
}
export default Contact;

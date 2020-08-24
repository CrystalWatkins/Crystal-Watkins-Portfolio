import React, { Component } from "react";



class Contact extends Component {
  state= {
    information: {},
  };
  saveInformation = (e) => {
    this.setState(e)
    console.log(e);
  }

render() {
  return (
    <div>
      <div className="row">
        <div className=" col-sm-12 jumbotron">
          <h1 className="contact">Contact</h1>
          <hr className="my-4" />
          <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Name</label>
            </div>
          </form>
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="John Smith"
          ></input>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-secondary" onClick={() => this.saveInformation(information)} >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
}
export default Contact;

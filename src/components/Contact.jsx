import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="row mt-5">
        <div className="jumbotron">
          <h1 class="contact">Contact</h1>
          <hr class="my-4" />
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
            </div>
          </form>
          <input
            type="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="John Smith"
          ></input>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="example@gmail.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

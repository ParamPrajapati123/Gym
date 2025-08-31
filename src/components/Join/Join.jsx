import React, { useRef } from "react";
import "./Join.css";
import emailJs from "@emailjs/browser";
import { toast } from "sonner";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs
      .sendForm(
        "service_omvrlpl",
        "template_cvimozj",
        form.current,
        "A39UXqsID-5KHeBKT"
      )
      .then(
        (res) => {
          form.current.user_email.value = "";
          toast.success("Mail Successfully Send.");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form
          onSubmit={sendEmail}
          ref={form}
          action=""
          className="email-container"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;

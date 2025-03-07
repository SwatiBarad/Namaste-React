import { React, useState } from "react";
const Contact = () => {
  return (
    <div className="w-full ">
      <h3 className="flex justify-center text-4xl p-10 font-bold text-green-800 drop-shadow-xl">
        Contact us
      </h3>
      <div className=" flex">
        <form className=" flex flex-col  w-6/12 items-center justify-center">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-2 border-gray-800 rounded-lg p-2 m-2 w-6/12"
          />

          <input
            type="email"
            placeholder="E-mail"
            className="border-2 rounded-lg p-2  border-gray-800 m-2 w-6/12"
          />

          <input
            type="text"
            maxLength={50}
            className=" border-2 rounded-lg p-2 m-2 w-6/12  border-gray-800"
            name="msg"
            placeholder="Message"
          />
          <button className=" bg-green-600 text-white border-2 rounded-2xl my-4 w-56 text-xl h-12 cursor-pointer">
            Send Message
          </button>
        </form>
        <img
          className="h-80 m-auto"
          src="https://thumbs.dreamstime.com/b/3d-man-email-envelope-20775360.jpg"
        />
      </div>
    </div>
  );
};

export default Contact;

import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[rgb(31,40,51)] flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/901264f5-cb21-43a7-83d9-afc5d92f94be" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#3faec1] text-gray-300">Contact</p>
          <p className="text-gray-300 pt-4 text-2xl">Submit the form below or shoot me an email:</p>
        </div>
        <input className="bg-[#ccd6f6] p-2 hover:scale-105 duration-300" type="text" placeholder="Name" name="name" required/>
        <input className="my-4 p-2 bg-[#ccd6f6] hover:scale-105 duration-300" type="email" placeholder="Email" name="email" required/>
        <textarea className="bg-[#ccd6f6] p-2 hover:scale-105 duration-300" name="message" rows="10" placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-[#3faec1] hover:border-[#3faec1] px-4 py-3 my-8 mx-auto flex items-center duration-300">Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;

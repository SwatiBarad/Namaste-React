const Contact = () => {
  return (
    <div>
      <h3 className="contact-heading">Contact us</h3>
      <div className="contact-container">
        <form className="contact-form">
          <label>
            Name <i className="fa-solid fa-user"></i>
          </label>
          <input type="text"></input>
          <label>
            Email <i className="fa-solid fa-envelope"></i>
          </label>
          <input type="email"></input>
          <label>Message</label>
          <input type="text" maxLength={50} className="messageinput"></input>
          <button className="contact-btn">Send Message</button>
        </form>
        <img src="https://thumbs.dreamstime.com/b/3d-man-email-envelope-20775360.jpg" />
      </div>
    </div>
  );
};

export default Contact;

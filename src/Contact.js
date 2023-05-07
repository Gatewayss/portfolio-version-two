const Contact = () => {

  return (
    <div className="contact">
      <h2>Contact</h2>
      <form type="submit">
        <label>Name:</label><br />
        <input
          type="text"
          id="name"
          required /><br />
        <label>Email:</label><br />
        <input
          type="email"
          id="email"
          required /><br />
        <label>Message:</label><br />
        <textarea
          type="text"
          id="message"
          required /><br />
        <button className="send-btn">Send!</button>
      </form>
    </div>
  );
}

export default Contact;
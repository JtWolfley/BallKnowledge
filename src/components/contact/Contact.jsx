
import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact">
            <div id="contact-title">
                <p>GET IN TOUCH</p>
                <h2>CONTACT ME</h2>
                <p>
                    Have a question, suggestion, or feedback about
                    Beyond The Arc? Send me a message!
                </p>
            </div>

            <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="contact-name">NAME</label>
                <input
                    id="contact-name"
                    type="text"
                    placeholder="Your Name"
                />

                <label htmlFor="contact-email">EMAIL</label>
                <input
                    id="contact-email"
                    type="email"
                    placeholder="Your Email"
                />

                <label htmlFor="contact-message">MESSAGE</label>
                <textarea
                    id="contact-message"
                    placeholder="Your Message"
                    rows="5"
                />

                <button type="submit">
                    SEND MESSAGE
                </button>
            </form>
        </section>
    );
};

export default Contact;

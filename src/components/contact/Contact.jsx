
import "./Contact.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const [sending, setSending] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSending(true);

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", "af04a787-ad5f-4284-9493-d3f87131f64f");
        formData.append("subject", "Beyond The Arc Contact Form");

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );

            const result = await response.json();

            if (response.ok && result.success) {
                toast.success("Message sent successfully!");
                form.reset();
            } else {
                toast.error("Message failed. Please try again.");
            }

        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact">
            <Toaster position="top-center" />

            <div id="contact-title">
                <p>GET IN TOUCH</p>
                <h2>CONTACT ME</h2>
                <p>
                    Have a question, suggestion, or feedback about
                    Beyond The Arc? Send me a message!
                </p>
            </div>

            <form id="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="contact-name">NAME</label>
                <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                />

                <label htmlFor="contact-email">EMAIL</label>
                <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                />

                <label htmlFor="contact-message">MESSAGE</label>
                <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                />

                <button
                    id="contact-button"
                    type="submit"
                    disabled={sending}
                >
                    {sending ? "SENDING..." : "SEND MESSAGE"}
                </button>
            </form>
        </section>
    );
};

export default Contact;

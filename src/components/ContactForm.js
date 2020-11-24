import React from 'react';

const ContactForm = () => {
    return (
        <div className="actions stacked">
            <form name="contact" method="post">
                <input name="name" placeholder="Your Name" type="text" />
                <input name="email" placeholder="example@example.com" type="email" />
                <textarea name="message" />
                <button className="button fit primary">Send</button>
            </form>
        </div>
    )
};

export default ContactForm;
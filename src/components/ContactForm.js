import React from 'react';

const ContactForm = () => {
    return (
        <div className="actions stacked">
            <form name="contact" method="post">
                <input name="name" placeholder="Full Name" type="text" />
                <input name="email" placeholder="Email" type="email" />
                <textarea name="message" placeholder="Message" />
                <button className="button fit primary">Send</button>
            </form>
        </div>
    )
};

export default ContactForm;
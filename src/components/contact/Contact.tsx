import type { ReactNode } from "react";
import "./contact.css";

export function Contact(): ReactNode {
    const handleSubmit = (e: any) => {
        e.preventDefault();

        const subject = e.target.subject.value;
        const message = e.target.message.value;

        const mailtoLink = `
            mailto:sosabruno3384@gmail.com
            ?subject=${encodeURIComponent(subject)}
            &body=${encodeURIComponent(
            `${message}`
        )}
        `;

        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="reveal">
            <div className="contact-tittle--container">
                <h4>Contáctame</h4>
            </div>
            <div className="contact--container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <input type="email" name="email" id="email" placeholder="Tu correo" required />
                    </div>
                    <div>
                        <input type="text" name="subject" id="subject" placeholder="Asunto" required />
                    </div>
                    <div>
                        <textarea name="message" id="message" placeholder="Mensaje"></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Enviar" className="contact-form-input-submit" />
                    </div>
                </form>
            </div>
        </section>
    );
}
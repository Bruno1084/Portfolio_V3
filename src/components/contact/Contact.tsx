import type { ReactNode } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import "./contact.css";

export function Contact(): ReactNode {
  const { t } = useLanguage();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const mailtoLink = `
            mailto:sosabruno3384@gmail.com
            ?subject=${encodeURIComponent(subject)}
            &body=${encodeURIComponent(`${message}`)}
        `;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="reveal">
      <div className="contact-tittle--container">
        <h4>{t.contact.title}</h4>
      </div>
      <div className="contact--container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={t.contact.emailPlaceholder}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder={t.contact.subjectPlaceholder}
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              placeholder={t.contact.messagePlaceholder}
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value={t.contact.submit}
              className="contact-form-input-submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

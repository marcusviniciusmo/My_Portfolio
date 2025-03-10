import { useState } from 'react';
import { toast } from 'react-toastify';
import { TitlePage } from '../../components/TitlePage';
import { Toastify } from '../../components/Toastify';
import { ContactFormType, contactFormInitialState } from '../../@types/contact.d';
import { ContactContainer, Form, Text, Inputs, Submit } from './styles';
import emailjs from 'emailjs-com';

export function Contact() {
  const [contactForm, setContactForm] = useState<ContactFormType>(contactFormInitialState)

  function handleChangeField(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value })
  }

  function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const userId = import.meta.env.VITE_EMAILJS_USER_ID;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const form = event.target as HTMLFormElement;

    emailjs
      .sendForm(serviceId, templateId, form, userId)
      .then((result) => {
        toast.success(`${result.text}!! Message sent!`);
      })
      .catch((error) => {
        toast.error(`Error! ${error}.`);
      })
      .finally(() => {
        setContactForm(contactFormInitialState)
      })
  }

  return (
    <ContactContainer>
      <TitlePage title="Contact" />

      <Form onSubmit={handleSubmitForm}>
        <Text>Thanks for taking the time to reach out.</Text>
        <Inputs>
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            value={contactForm.name}
            onChange={handleChangeField}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={contactForm.email}
            onChange={handleChangeField}
          />
        </Inputs>

        <textarea
          name="message"
          placeholder="Message"
          required
          value={contactForm.message}
          onChange={handleChangeField}
        />

        <Submit type='submit'>Submit</Submit>
        <Toastify />
      </Form>
    </ContactContainer>
  );
}

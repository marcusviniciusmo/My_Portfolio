import { useState } from 'react';
import { TitlePage } from '../../components/TitlePage';
import { ContactContainer, Form, Text, Inputs, Submit } from './styles';
import emailjs from 'emailjs-com';

interface ContactFormType {
  name: string;
  email: string;
  message: string;
}

const contactFormInitialState: ContactFormType = {
  name: '',
  email: '',
  message: ''
}

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
        console.log(result.text)
      })
      .catch((error) => {
        console.log(error)
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
      </Form>
    </ContactContainer>
  );
}

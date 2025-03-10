import { TitlePage } from '../../components/TitlePage';
import { ContactContainer, Form, Text, Inputs, Submit } from './styles';

export function Contact() {
  return (
    <ContactContainer>
      <TitlePage title="Contact" />

      <Form>
        <Text>Thanks for taking the time to reach out.</Text>
        <Inputs>
          <input name="name" type="text" placeholder="Name" required/>
          <input name="email" type="email" placeholder="Email" required/>
        </Inputs>

        <textarea name="message" placeholder="Message" required />

        <Submit type='submit'>Submit</Submit>
      </Form>
    </ContactContainer>
  );
}

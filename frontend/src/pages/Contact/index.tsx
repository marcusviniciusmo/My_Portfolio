import { TitlePage } from '../../components/TitlePage';
import { ContactContainer, Form, Text, Inputs, Submit } from './styles';

export function Contact() {
  return (
    <ContactContainer>
      <TitlePage title="Contact" />

      <Form>
        <Text>Thanks for taking the time to reach out.</Text>
        <Inputs>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
        </Inputs>

        <textarea name="" id="" placeholder="Message" />

        <Submit>Submit</Submit>
      </Form>
    </ContactContainer>
  );
}

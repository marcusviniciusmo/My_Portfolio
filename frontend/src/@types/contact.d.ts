export interface ContactFormType {
  name: string;
  email: string;
  message: string;
}

export const contactFormInitialState: ContactFormType = {
  name: '',
  email: '',
  message: ''
}
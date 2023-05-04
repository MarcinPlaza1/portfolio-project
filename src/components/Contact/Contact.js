import React, { useState } from 'react';
import { Container, Form, InputWrapper, Input, TextArea, Label, Button } from './ContactStyles';

const Contact = () => {
  const [nameActive, setNameActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [messageActive, setMessageActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika wysyłania formularza
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="text"
            name="name"
            id="name"
            required
            placeholder=" "
            onFocus={() => setNameActive(true)}
            onBlur={(e) => setNameActive(e.target.value !== '')}
          />
          <Label htmlFor="name" active={nameActive}>
            Imię
          </Label>
        </InputWrapper>
        <InputWrapper>
          <Input
            type="email"
            name="email"
            id="email"
            required
            placeholder=" "
            onFocus={() => setEmailActive(true)}
            onBlur={(e) => setEmailActive(e.target.value !== '')}
          />
          <Label htmlFor="email" active={emailActive}>
            Email
          </Label>
        </InputWrapper>
        <InputWrapper>
          <TextArea
            name="message"
            id="message"
            rows="4"
            required
            placeholder=" "
            onFocus={() => setMessageActive(true)}
            onBlur={(e) => setMessageActive(e.target.value !== '')}
          />
          <Label htmlFor="message" active={messageActive}>
            Wiadomość
          </Label>
        </InputWrapper>
        <Button type="submit">Wyślij</Button>
      </Form>
    </Container>
  );
};

export default Contact;

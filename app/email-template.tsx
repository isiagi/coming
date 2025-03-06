import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>Your email address is: {email}</p>
    <p>Your message is: {message}</p>
    <p>
      Thank you for your message. We will get back to you as soon as possible.
    </p>
  </div>
);

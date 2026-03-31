export const contactHeroData = {
  badge: "Contact",
  titleStart: "Let’s start a",
  highlightedWord: "conversation",
  titleEnd: ".",
  description:
    "Whether you have a project idea, a collaboration in mind, or just want to say hello, I’d love to hear from you.",
};

export const contactInfoData = [
  {
    id: 1,
    title: "Phone",
    value: "+251 900 000 000",
  },
  {
    id: 2,
    title: "Email",
    value: "hello@yourportfolio.com",
  },
  {
    id: 3,
    title: "Location",
    value: "Addis Ababa, Ethiopia",
  },
];

export const contactFormData = {
  label: "Send a Message",
  title: "Tell me about your project or idea.",
  description:
    "Fill out the form below and I’ll get back to you as soon as possible.",
  fields: [
    {
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Your Name",
    },
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Email Address",
    },
    {
      id: "subject",
      name: "subject",
      type: "text",
      placeholder: "Subject",
    },
  ],
  textarea: {
    id: "message",
    name: "message",
    placeholder: "Write your message...",
  },
  buttonText: "Send Message",
};

export const contactMapData = {
  label: "Find Me",
  title: "My Location",
  embedUrl:
    "https://www.google.com/maps?q=Addis%20Ababa%2C%20Ethiopia&z=13&output=embed",
};
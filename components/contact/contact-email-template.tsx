import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Hr,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
export const ContactEmail = ({
  name,
  email,
  phone,
  subject,
  message,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>New contact form submission from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={h1}>New Contact Form Submission</Heading>
        </Section>

        <Section style={content}>
          <Text style={greeting}>
            You have received a new message from your website contact form.
          </Text>

          <Section style={detailsSection}>
            <Text style={label}>Name:</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>

            <Text style={label}>Phone:</Text>
            <Text style={value}>{phone}</Text>

            <Text style={label}>Subject:</Text>
            <Text style={value}>{subject}</Text>
          </Section>

          <Hr style={divider} />

          <Section style={messageSection}>
            <Text style={label}>Message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Section>

        <Section style={footer}>
          <Text style={footerText}>
            This message was sent from your website contact form.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;

const main = {
  backgroundColor: "#f8fafc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
};

const header = {
  backgroundColor: "#2563eb",
  borderRadius: "8px 8px 0 0",
  padding: "32px 24px",
  textAlign: "center" as const,
};

const h1 = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0",
  lineHeight: "1.3",
};

const content = {
  backgroundColor: "#ffffff",
  padding: "32px 24px",
  borderRadius: "0 0 8px 8px",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
};

const greeting = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 24px 0",
};

const detailsSection = {
  margin: "0 0 24px 0",
};

const label = {
  color: "#2563eb",
  fontSize: "14px",
  fontWeight: "600",
  margin: "16px 0 4px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
};

const value = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0 0 8px 0",
  padding: "8px 12px",
  backgroundColor: "#f1f5f9",
  borderRadius: "4px",
  border: "1px solid #e2e8f0",
};

const divider = {
  borderColor: "#e2e8f0",
  margin: "24px 0",
};

const messageSection = {
  margin: "24px 0 0 0",
};

const messageText = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
  padding: "16px",
  backgroundColor: "#f8fafc",
  borderRadius: "6px",
  border: "1px solid #e2e8f0",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  textAlign: "center" as const,
  margin: "32px 0 0 0",
};

const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "1.4",
  margin: "0",
};

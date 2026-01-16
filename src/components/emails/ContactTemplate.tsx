import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
    name: string;
    email: string;
    brand: string;
    service: string;
    website?: string;
    budget?: string;
    message: string;
}

export const ContactEmail = ({
    name,
    email,
    brand,
    service,
    website,
    budget,
    message,
}: ContactEmailProps) => {
    const previewText = `New lead from ${name} (${brand})`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>New Project Inquiry</Heading>
                    <Text style={text}>
                        You have received a new lead from your portfolio website.
                    </Text>
                    <Section style={section}>
                        <Text style={label}>Client Details</Text>
                        <Hr style={hr} />
                        <Text style={detail}>
                            <strong>Name:</strong> {name}
                        </Text>
                        <Text style={detail}>
                            <strong>Email:</strong> {email}
                        </Text>
                        <Text style={detail}>
                            <strong>Business / Brand:</strong> {brand}
                        </Text>
                        <Text style={detail}>
                            <strong>Service Needed:</strong> {service}
                        </Text>
                        {budget && (
                            <Text style={detail}>
                                <strong>Budget Range:</strong> {budget}
                            </Text>
                        )}
                        {website && (
                            <Text style={detail}>
                                <strong>Current Website:</strong> {website}
                            </Text>
                        )}
                    </Section>
                    <Section style={section}>
                        <Text style={label}>Message</Text>
                        <Hr style={hr} />
                        <Text style={messageText}>{message}</Text>
                    </Section>
                    <Hr style={hr} />
                    <Text style={footer}>
                        This message was sent from Vectr Labs Contact Form.
                        Reply directly to {email}.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

export default ContactEmail;

const main = {
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "580px",
};

const h1 = {
    color: "#000000",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center" as const,
    margin: "30px 0",
};

const text = {
    color: "#444444",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center" as const,
};

const section = {
    margin: "24px 0",
};

const label = {
    fontSize: "12px",
    textTransform: "uppercase" as const,
    color: "#888888",
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginBottom: "4px",
};

const detail = {
    fontSize: "16px",
    color: "#222222",
    margin: "8px 0",
};

const messageText = {
    fontSize: "16px",
    color: "#222222",
    lineHeight: "24px",
    backgroundColor: "#f9f9f9",
    padding: "16px",
    borderRadius: "8px",
    whiteSpace: "pre-wrap" as const,
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
    textAlign: "center" as const,
    marginTop: "48px",
};

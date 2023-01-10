import React from "react";
import { Button, Col, Row } from "reactstrap";

const Welcome = () => {
  return (
    <React.Fragment>
      <div className="chat-welcome-section">
        <Row className="w-100 justify-content-center">
          <Col xxl={5} md={7}>
            <div className="p-4 text-center">
              <div className="avatar-xl mx-auto mb-4">
                <div className="avatar-title bg-soft-primary rounded-circle">
                  <i className="bx bxs-message-alt-detail display-4 text-primary m-0"></i>
                </div>
              </div>
              <h4>Welcome to ChatGPT Enhanced</h4>
              <p className="text-muted mb-4">
              ChatGPT is a natural language processing-based AI chatbot developed by Microsoft. It uses Generative Pre-trained Transformer (GPT-2) technology to have intelligent, meaningful conversations with users in multiple languages. It can answer questions, give advice, and even ask its own questions based on the user’s responses.

Features: 
- Natural language processing-based
- Multi-lingual
- Easily customizable with additional scripts
- Generates realistic answers and conversation threads
- Understands and interprets context from previous messages
- Automatically generates appropriate questions
              </p>
              <Button type="button" className="btn btn-primary w-lg">
                Get Started
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Welcome;

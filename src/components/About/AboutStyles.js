import styled from 'styled-components';

const AboutSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  margin-left: 500px;
`;

const AboutHeader = styled.h2`
  position: absolute;
  margin-top: 22px;
  font-size: 15px;
  color: #888685;
  letter-spacing: 0.02em;
  font-weight: lighter;
  margin-bottom: -80px;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
`;

const AboutText = styled.p`
  font-size: 24px;
  line-height: 36px;
  margin-right: 40px;
  margin-bottom: 0;
  text-align: justify;
  font-weight: lighter;
`;

const AboutImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10%;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
`;

const SocialLink = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-right: 30px;
  background-color: gainsboro;
  color: #000;
  font-size: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
`;

const ContactBox = styled.div`
  margin-top: 60px;
  padding: 40px;
  background: var(--light-color);
  border: 1px solid #DEDCD9;
  border-radius: 12px;
  width: min-content;
`;

const ContactHeader = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #b1b1b1;
  margin-bottom: 12px
`;

const ContactButton = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
  font-size: 18px;
  color: #cfa7a5;
  transition: background-color 0.3s ease-in-out;
`;

export {
  AboutSection,
  AboutHeader,
  AboutContent,
  AboutText,
  AboutImage,
  SocialLinks,
  SocialLink,
  ContactBox,
  ContactHeader,
  ContactButton,
};

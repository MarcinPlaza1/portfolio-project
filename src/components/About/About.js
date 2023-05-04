import React from 'react';
import { AboutSection, AboutHeader, AboutContent, AboutText, AboutImage, SocialLinks, SocialLink, ContactBox, ContactHeader, ContactButton } from './AboutStyles';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  return (
    <AboutSection>
      <AboutHeader>ABOUT</AboutHeader>
      <AboutContent>
        <AboutText>
        Hi, my name is Marcin and I call myself a creative Frontend Developer. For several years I have been creating responsive websites and applications for clients from various industries. In my work, I focus on quality and attention to detail. I am always looking for the best solutions for my clients to make their websites both functional and beautiful.
        </AboutText>
        <AboutImage src="./avatar.png" alt="Marcin" />
      </AboutContent>
      <SocialLinks>
        <SocialLink href="https://github.com/MarcinPlaza1">
        <FontAwesomeIcon icon={faGithub} />
        </SocialLink>
        <SocialLink href="https://www.upwork.com/freelancers/~018ddb2be5ad1feb4f">
        <svg role="img" viewBox="-6 0 36 22" xmlns="http://www.w3.org/2000/svg"><title>Upwork</title><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>
        </SocialLink>
        <SocialLink href="https://www.facebook.com/profile.php?id=100006487237457">
        <FontAwesomeIcon icon={faFacebook} />
        </SocialLink>
      </SocialLinks>
      <ContactBox>
        <ContactHeader>CONTACT WITH ME</ContactHeader>
        <ContactButton href="mailto:marcinplaza@mojemail.pl">contact.marcinplaza@gmail.com</ContactButton>
      </ContactBox>
    </AboutSection>
  );
};

export default About;

"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, ShieldCheck, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "About",          id: "about"},
        {
          name: "Services",          id: "features"},
        {
          name: "Results",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Hair Again"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "gradient-bars"}}
      title="Restore Your Hair. Renew Your Confidence."
      description="At Hair Again, we combine advanced technology with artistic precision to deliver natural-looking, permanent hair restoration results."
      testimonials={[
        {
          name: "Mark S.",          handle: "@marks",          testimonial: "The results were far beyond my expectations. My confidence has returned completely.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-man-navy-t-shirt-with-serious-skeptic-face-standing-pink-wall_141793-81834.jpg"},
        {
          name: "John D.",          handle: "@johnd",          testimonial: "Professional team and seamless experience. I couldn't be happier with the outcome.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/successful-man-pointing-camera-with-finger_1262-3118.jpg"},
        {
          name: "David L.",          handle: "@davidl",          testimonial: "Everything about this clinic is top-tier. My hair looks exactly like it did 10 years ago.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/contemplated-young-man-standing-against-wall_23-2148130359.jpg"},
        {
          name: "Sam W.",          handle: "@samw",          testimonial: "A life-changing experience. Highly recommended for anyone considering restoration.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-confident-businessman-black-wall_176420-3456.jpg"},
        {
          name: "Kevin B.",          handle: "@kevinb",          testimonial: "Natural look, professional care, and incredible support throughout the process.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-businessman-posing-outside_74855-1183.jpg"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-getting-hair-loss-treatment-clinic_23-2149152743.jpg"
      imageAlt="Hair transplant result medical"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/handsome-middle-aged-man-portrait_23-2149051795.jpg",          alt: "Portrait of handsome middle-aged man"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",          alt: "Close up of successful man"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-handsome-man-standing-with-crossed-arms-isolated-gray-background_231208-14065.jpg",          alt: "Smiling man with crossed arms"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-confident-young-man-looking-camera_23-2148130305.jpg",          alt: "Confident young man looking at camera"},
        {
          src: "http://img.b2bpic.net/free-photo/laughing-happily-with-arms-crossed-with-relaxed-positive-satisfied-pose_1194-413783.jpg",          alt: "Laughing happy man"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Clinically Proven Results"},
        {
          type: "text",          text: "Advanced FUE Techniques"},
        {
          type: "text",          text: "Natural Hairline Design"},
        {
          type: "text",          text: "Permanent Restoration"},
        {
          type: "text",          text: "Trusted by Thousands"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Why Choose Hair Again?"
      description="We are a pioneer in modern hair transplant technology, serving thousands of satisfied patients with care and clinical excellence."
      metrics={[
        {
          value: "15+",          title: "Years Experience"},
        {
          value: "5k+",          title: "Successful Transplants"},
        {
          value: "99%",          title: "Patient Satisfaction"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/blur-toilet_74190-5255.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          icon: ShieldCheck,
          title: "FUE Precision",          description: "Follicular Unit Extraction for minimal scarring and maximum density."},
        {
          icon: Sparkles,
          title: "PRP Therapy",          description: "Non-surgical treatment to stimulate natural hair growth and health."},
        {
          icon: Award,
          title: "Custom Designs",          description: "Tailored hairline restoration designed for your facial structure."},
      ]}
      title="Our Advanced Solutions"
      description="Comprehensive hair restoration techniques tailored to your unique needs."
    />
  </div>

  <div id="stats" data-section="stats">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Clinical Excellence"
      tag="Our Impact"
      metrics={[
        {
          id: "m1",          value: "24/7",          description: "Dedicated Patient Support"},
        {
          id: "m2",          value: "0",          description: "Hidden Cost Policy"},
        {
          id: "m3",          value: "30+",          description: "Trained Specialists"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Elena M., Recovery Success",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-with-healthy-hair-posing-studio_23-2148154694.jpg"},
        {
          id: "t2",          name: "Marcus R., Transformation Achieved",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-successful-businessman-wearing-suit_1163-4706.jpg"},
        {
          id: "t3",          name: "Sarah K., Natural Results",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-looking-camera_23-2148130353.jpg"},
        {
          id: "t4",          name: "James L., Life-Changing",          imageSrc: "http://img.b2bpic.net/free-photo/happy-man-with-healthy-hair_23-2148130288.jpg"},
        {
          id: "t5",          name: "Linda D., Professional Care",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-woman_23-2148130368.jpg"},
      ]}
      cardTitle="Patient Success Stories"
      cardTag="Clinical Outcomes"
      cardAnimation="slide-up"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "HealthCare Today",        "MedTech News",        "Global Surgical Union",        "Dermatology Monthly",        "Clinic Excellence Awards",        "Hair Restoration Association",        "Modern Surgery Review"]}
      title="Trusted By Industry Leaders"
      description="Recognized by top medical and healthcare institutions for clinical standards."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "What is the FUE recovery time?",          content: "Most patients return to light activities within 2-3 days, with full recovery in 7-10 days."},
        {
          id: "f2",          title: "Is the procedure safe for medical conditions?",          content: "We conduct a thorough pre-operative assessment to ensure the procedure is safe for your health profile."},
        {
          id: "f3",          title: "Are there follow-up treatments required?",          content: "We offer personalized aftercare plans to ensure long-term graft survival and scalp health."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/senior-man-patient-arriving-appointment-with-physician-mockup_482257-126341.jpg"
      title="Medical FAQ"
      description="Frequently asked questions regarding our surgical standards and patient safety."
      faqsAnimation="slide-up"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Schedule Your Consultation"
      description="Take the first step toward your new hairline today. Our team is here to answer all your questions."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Full Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Email Address",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "How can we help you?",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/mature-man-having-balding-problems_23-2149152803.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Services",              href: "#features"},
            {
              label: "Testimonials",              href: "#testimonials"},
          ],
        },
        {
          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
      ]}
      logoText="Hair Again"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

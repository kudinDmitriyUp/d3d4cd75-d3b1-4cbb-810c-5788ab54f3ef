"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Building, DollarSign, HelpCircle, Lightbulb, Rocket, Sparkles, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="large"
        background="floatingGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Programs",
          id: "programs",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      button={{
        text: "Enroll Now",
        href: "#",
      }}
      brandName="IT Academy"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "sparkles-gradient",
      }}
      imagePosition="right"
      title="Master In-Demand IT Skills for a Brighter Future"
      description="Our IT Academy offers cutting-edge courses in software development, cybersecurity, data science, and more. Learn from industry experts and launch your high-tech career with confidence."
      kpis={[
        {
          value: "100+",
          label: "Courses Offered",
        },
        {
          value: "95%",
          label: "Job Placement Rate",
        },
        {
          value: "15K+",
          label: "Graduates",
        },
      ]}
      enableKpiAnimation={true}
      tag="Your Future in Tech Starts Here"
      tagIcon={Sparkles}
      buttons={[
        {
          text: "Explore Courses",
          href: "#programs",
        },
        {
          text: "Get Started",
          href: "#",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/a-modern-clean-software-dashboard-interf-1774442730909-a3d74352.png"
      imageAlt="IT Academy dashboard interface showing student progress"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="About Our IT Academy"
      description={[
        "At IT Academy, we are dedicated to fostering the next generation of technology leaders. Our curriculum is meticulously designed by industry veterans to ensure relevance and excellence.",
        "We believe in hands-on learning, practical application, and continuous mentorship. Our state-of-the-art facilities and virtual labs provide an immersive learning environment that prepares you for real-world challenges.",
      ]}
      buttons={[
        {
          text: "Our Mission",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="programs" data-section="programs">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Software Development Bootcamp",
          description: "Become a full-stack developer in just months. Master programming languages, frameworks, and build real-world applications.",
          phoneOne: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/a-smartphone-displaying-a-sleek-mobile-a-1774442730740-48149d72.png",
            imageAlt: "Mobile app UI for coding fundamentals course",
          },
          phoneTwo: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/a-smartphone-displaying-a-mobile-app-ui--1774442729231-8d595cc9.png",
            imageAlt: "Mobile app UI for cloud computing lab",
          },
        },
        {
          id: 2,
          title: "Cybersecurity Expert Track",
          description: "Protect digital assets and networks. Learn ethical hacking, risk management, and incident response from certified professionals.",
          phoneOne: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/a-smartphone-displaying-a-mobile-app-ui--1774442728677-81cab648.png",
            imageAlt: "Mobile app UI for cybersecurity quiz",
          },
          phoneTwo: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/a-smartphone-displaying-a-mobile-app-ui--1774442731172-37c80332.png",
            imageAlt: "Mobile app UI for data science project collaboration",
          },
        },
        {
          id: 3,
          title: "Data Science & AI Specialization",
          description: "Unlock insights from data and develop intelligent systems. Explore machine learning, predictive analytics, and big data technologies.",
          phoneOne: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/a-smartphone-displaying-a-mobile-app-ui--1774442729460-24008b8a.png",
            imageAlt: "Mobile app UI for web development roadmap",
          },
          phoneTwo: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/a-smartphone-displaying-a-mobile-app-ui--1774442729132-aa9840a0.png",
            imageAlt: "Mobile app UI for DevOps pipeline status",
          },
        },
      ]}
      showStepNumbers={true}
      title="Our Transformative Programs"
      description="Dive into specialized tracks designed to equip you with the skills demanded by today's tech industry. From foundational concepts to advanced specializations, we cover it all."
      tag="Learn & Grow"
      tagIcon={Zap}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "starter",
          badge: "Beginner",
          badgeIcon: Lightbulb,
          price: "$299/month",
          subtitle: "Foundational courses for new learners.",
          buttons: [
            {
              text: "Start Learning",
              href: "#",
            },
          ],
          features: [
            "Access to introductory courses",
            "Weekly live Q&A sessions",
            "Community forum access",
            "Basic career guidance",
          ],
        },
        {
          id: "pro",
          badge: "Popular",
          badgeIcon: Rocket,
          price: "$499/month",
          subtitle: "Comprehensive programs for rapid career advancement.",
          buttons: [
            {
              text: "Enroll Now",
              href: "#",
            },
          ],
          features: [
            "Full course catalog access",
            "Personalized mentorship",
            "Project-based learning",
            "Advanced career placement support",
            "Certification preparation",
          ],
        },
        {
          id: "enterprise",
          badge: "Custom",
          badgeIcon: Building,
          price: "Contact Us",
          subtitle: "Tailored solutions for corporate training.",
          buttons: [
            {
              text: "Request Quote",
              href: "#",
            },
          ],
          features: [
            "Customizable curriculum",
            "Dedicated corporate liaison",
            "On-site or virtual training",
            "Bulk enrollment discounts",
            "Performance analytics",
          ],
        },
      ]}
      title="Flexible Learning Plans"
      description="Choose the program that best fits your career goals and budget. All plans include expert instruction and career support."
      tag="Invest in Yourself"
      tagIcon={DollarSign}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="The IT Academy transformed my career path. The instructors are incredibly knowledgeable, and the hands-on projects gave me the confidence to excel in a new role. Highly recommended!"
      rating={5}
      author="Sarah Chen, Software Engineer at TechCo"
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-headshot-of-a-young-smiling-1774442728980-6d2fb81a.png",
          alt: "Sarah Chen avatar",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-headshot-of-a-confident-mal-1774442727779-5b6e67cd.png",
          alt: "Michael Rodriguez avatar",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-headshot-of-a-focused-femal-1774442728930-3942ecdf.png",
          alt: "Emily Johnson avatar",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-headshot-of-an-experienced--1774442730915-d299cb92.png",
          alt: "David Lee avatar",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "What prerequisites do I need for the courses?",
          content: "Most of our introductory courses require no prior experience. For advanced tracks, basic programming knowledge or relevant certifications may be beneficial. Check individual course descriptions for details.",
        },
        {
          id: "2",
          title: "Do you offer job placement assistance?",
          content: "Yes, we have a dedicated career services team that provides resume building, interview preparation, and connects graduates with our network of hiring partners. Our goal is your success.",
        },
        {
          id: "3",
          title: "Are the courses online or in-person?",
          content: "We offer a flexible hybrid model, with options for fully online, in-person, or blended learning. Our virtual labs ensure a high-quality experience regardless of your chosen format.",
        },
        {
          id: "4",
          title: "What certifications can I earn?",
          content: "Our programs are aligned with industry-recognized certifications from vendors like CompTIA, Microsoft, AWS, and Google Cloud. Specific certifications vary by program.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about our courses, enrollment, and career support."
      tag="Got Questions?"
      tagIcon={HelpCircle}
      faqsAnimation="slide-up"
      showCard={true}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Programs",
          items: [
            {
              label: "Software Dev",
              href: "#programs",
            },
            {
              label: "Cybersecurity",
              href: "#programs",
            },
            {
              label: "Data Science",
              href: "#programs",
            },
            {
              label: "Cloud Computing",
              href: "#",
            },
          ],
        },
        {
          title: "Academy",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Contact Us",
              href: "#",
            },
            {
              label: "Blog",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 IT Academy. All rights reserved."
      bottomRightText="Privacy Policy | Terms of Service"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

export interface GalleryImage {
  src: string;
  isMockup?: boolean;
  variant?: "cyan-blue" | "blue-indigo" | "cyan-indigo" | "dark-indigo";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  coverImage: string;
  images: (string | GalleryImage)[];
  client: string;
  year: string;
  role: string;
  tools: string[];
  aiTools: string[];
  challenge: string;
  solution: string;
  outcome: string;
  process: string;
  type: "work" | "personal";
  outcomeImage: string;
}

export const projects: Project[] = [
  {
    id: "vidoser-app",
    title: "Vidoser - AI Creator tools",
    description:
      "An all-in-one mobile platform designed for creators to discover collaborations, enhance their skills, and leverage advanced AI tools (a CreationDose project).",
    category: "Mobile App",
    coverImage: "/projects/vidoser/main.png",
    outcomeImage: "/projects/vidoser/outcome.png",
    images: [
      "/projects/vidoser/01.png",
      "/projects/vidoser/02.png",
      "/projects/vidoser/03.png",
    ],
    client: "CreationDose (Vidoser App)",
    year: "2021 - Present",
    role: "Product Designer",
    tools: [],
    aiTools: [],
    challenge:
      "The original Vidoser App needed to scale from a simple task-based tool to a comprehensive ecosystem for creators. The challenge was to simplify complex campaign workflows and AI-driven content requirements into a mobile-first experience that keeps creators engaged and productive.",
    solution:
      "I designed a streamlined mobile experience that centralizes campaign discovery, collaboration management, and performance tracking. By prioritizing a human-centered interface, I integrated complex features—such as AI-powered scouting and real-time analytics—into an intuitive workspace that guides creators through every step of their collaboration.",
    outcome:
      "The restyling and optimization led to a significant increase in user retention and a more efficient campaign completion rate. The app now serves as a high-performance bridge between brands and thousands of creators, scaling the platform's capacity to handle professional marketing campaigns.",
    process:
      "User Journey Mapping: Conducted in-depth research to identify friction points in the creator collaboration flow and mapped the complete user journey. Rapid Prototyping: Created interactive prototypes to test AI-driven features early, ensuring technical complexity integrated seamlessly into the mobile experience. Iterative Testing: Gathered feedback from the creator community and refined the interface through multiple testing cycles to optimize usability. Design System Development: Built a scalable, consistent design system that ensures a seamless experience across the entire Vidoser mobile ecosystem.",
    type: "work",
  },
  {
    id: "vidoser-platform",
    title: "Vidoser Platform - AI Campaign Management",
    description:
      "An end-to-end web platform designed for brands and agencies to manage creator marketing campaigns at scale (a CreationDose project).",
    category: "Desktop Platform",
    coverImage: "/projects/platform/main.png",
    outcomeImage: "/projects/platform/outcome.png",
    images: [
      "/projects/platform/01.png",
      "/projects/platform/02.png",
      "/projects/platform/03.png",
      "/projects/platform/04.png",
    ],
    client: "CreationDose (Vidoser Platform)",
    year: "2021 - Present",
    role: "Product Designer",
    tools: [],
    aiTools: [],
    challenge:
      "Brands and agencies needed a scalable, professional way to manage complex creator marketing campaigns. The challenge was to transform intricate business requirements and massive amounts of data into an end-to-end web platform that remains intuitive for high-level campaign management.",
    solution:
      "Working within a multidisciplinary team, I drove the UI/UX design of the platform, focusing on architecting complex workflows—such as AI-driven scouting, collaboration management, and real-time analytics. My role was to translate technical power into a professional, high-performance digital workspace, ensuring the design remained intuitive while meeting demanding business goals.",
    outcome:
      "The platform has become an essential tool for agencies to manage campaigns at scale. By simplifying the management of thousands of collaborations, the design has significantly reduced the operational overhead for campaign managers, providing a robust interface for data-driven decision-making.",
    process:
      "Stakeholder Collaboration: Worked closely with developers and business stakeholders to translate complex technical requirements into clear, actionable UI components. Workflow Architecture: Designed intuitive interfaces for advanced AI-driven scouting and real-time analytics, ensuring professional users could navigate complex workflows with ease. Scalable Prototyping: Built and tested interactive prototypes that balanced depth of functionality with speed and clarity for professional-grade operations. System Integration: Developed a comprehensive design system capable of handling deep data structures and multifaceted management tools at enterprise scale.",
    type: "work",
  },
  {
    id: "agm-costruzioni",
    title: "AGM Costruzioni",
    description:
      "A corporate website for a firm specializing in high-end residential and commercial construction.",
    category: "Restyling Website",
    coverImage: "/projects/agm/main.png",
    outcomeImage: "/projects/agm/outcome.png",
    images: [
      "/projects/agm/01.png",
      "/projects/agm/02.png",
      "/projects/agm/03.png",
      "/projects/agm/04.png",
    ],
    client: "AGM Costruzioni",
    year: "2026",
    role: "UI/UX Designer",
    tools: [],
    aiTools: [],
    challenge:
      "A firm specializing in high-end construction needed a digital presence that matched the quality of their physical builds. The previous website failed to communicate the brand's craftsmanship, making it difficult for premium clients to appreciate the technical expertise and the prestige of their residential and commercial portfolio.",
    solution:
      "I drove the complete UI/UX restyling, focusing on a minimal and sophisticated interface. I redefined the visual identity and the user journey to create a 'gallery-first' experience. By prioritizing high-quality visuals and clean typography, I ensured that the craftsmanship and technical details of the projects remained the focal point of the digital experience.",
    outcome:
      "The new website successfully positions AGM Costruzioni as a leader in the luxury construction market. The streamlined navigation and premium aesthetic have improved brand perception and user engagement, providing a high-end showcase that effectively converts professional inquiries and high-profile leads.",
    process:
      "Brand Architecture Analysis: Identified the key architectural elements and values that define the brand's high-end positioning and translated them into digital design principles. Visual Identity System: Created a minimal, sophisticated design system with clean typography and gallery-focused layouts to showcase craftsmanship. User Journey Design: Developed a streamlined navigation structure that guides visitors intuitively through the portfolio, highlighting key projects and services. Responsive Execution: Ensured a high-performance, responsive experience across all devices, maintaining the premium aesthetic on every screen size.",
    type: "work",
  },
  {
    id: "privatechef-catania",
    title: "PrivateChef Catania",
    description:
      "A boutique website connecting professional chefs with clients for exclusive, high-end in-home dining experiences.",
    category: "Website",
    coverImage: "/projects/privatechef/main.png",
    images: [
      "/projects/privatechef/01.png",
      "/projects/privatechef/02.png",
      "/projects/privatechef/03.png",
      "/projects/privatechef/04.png",
    ],
    client: "PrivateChef Catania",
    year: "2024",
    role: "UI/UX Designer",
    tools: [],
    aiTools: [],
    challenge:
      "A boutique culinary service needed a digital home that felt as exclusive as their in-home dining experiences. The challenge was to create a platform that didn't just list services, but conveyed the premium atmosphere of a private chef's work, while making the complex process of menu selection and booking feel effortless.",
    solution:
      "I drove the UI/UX design and the visual identity from the ground up. I created a sophisticated interface that prioritizes high-impact culinary photography and elegant typography. By streamlining the user journey, I transformed the booking and menu exploration into a seamless, intuitive experience that reflects the high-end nature of the service.",
    outcome:
      "The website successfully established a strong digital presence for the brand, aligning it with the luxury market in Sicily. The intuitive booking flow has simplified client interactions, resulting in a more professional image and an increased conversion rate for high-end dinner party inquiries.",
    process:
      "Mood and Identity Definition: Established a visual palette and design language that evokes exclusivity and professional culinary craftsmanship, setting the tone before interface design. Booking Funnel Optimization: Designed and simplified the customer journey, reducing friction points in menu exploration and event booking to create an effortless experience. Visual Storytelling: Built a gallery-focused layout that leverages high-impact photography to create emotional connections and showcase the premium dining experience. Mobile-First Refinement: Ensured the mobile experience was as refined as desktop, recognizing that high-end clients often book services on-the-go.",
    type: "work",
    outcomeImage: "/projects/privatechef/outcome.png",
  },
];

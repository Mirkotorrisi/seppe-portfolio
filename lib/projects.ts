export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  coverImage: string;
  images: string[];
  client: string;
  year: string;
  role: string;
  tools: string[];
  aiTools: string[];
  challenge: string;
  solution: string;
  outcome: string;
  process: string;
  type: "work" | "personal"; // Added type field for filtering
}

export const projects: Project[] = [
  {
    id: "vidoser-app",
    title: "Vidoser - AI Creator tools",
    description:
      "An all-in-one mobile platform designed for creators to discover collaborations, enhance their skills, and leverage advanced AI tools (a CreationDose project).",
    category: "Mobile App",
    coverImage: "/Vidoser_01.png",
    images: ["/Vidoser_01.png"],
    client: "CreationDose",
    year: "2021 – Present",
    role: "Product Designer",
    tools: [],
    aiTools: ["AI-driven scouting", "Performance analytics"],
    type: "work",
    challenge:
      "The original Vidoser App needed to scale from a simple task-based tool to a comprehensive ecosystem for creators. The challenge was to simplify complex campaign workflows and AI-driven content requirements into a mobile-first experience that keeps creators engaged and productive.",
    solution:
      "I designed a streamlined mobile experience that centralizes campaign discovery, collaboration management, and performance tracking. By prioritizing a human-centered interface, I integrated complex features—such as AI-powered scouting and real-time analytics—into an intuitive workspace that guides creators through every step of their collaboration.",
    outcome:
      "The restyling and optimization led to a significant increase in user retention and a more efficient campaign completion rate. The app now serves as a high-performance bridge between brands and thousands of creators, scaling the platform's capacity to handle professional marketing campaigns.",
    process:
      "The development followed a rigorous human-centered methodology. I started by mapping the user journey to identify friction points in the collaboration flow. Working closely with developers, I created rapid prototypes to test AI-driven features early on. Through iterative testing and feedback from the creator community, we refined the interface to ensure technical complexity never compromised usability.",
  },
  {
    id: "agm-costruzioni",
    title: "Agm Costruzioni",
    description:
      "A corporate website for a firm specializing in high-end residential and commercial construction.",
    category: "Restyling Website",
    coverImage: "/AGM_Costruzioni_03.png",
    images: ["/AGM_Costruzioni_03.png"],
    client: "AGM Costruzioni",
    year: "2026",
    role: "UI/UX Designer",
    tools: [],
    aiTools: [],
    type: "work",
    challenge:
      "A firm specializing in high-end construction needed a digital presence that matched the quality of their physical builds. The previous website failed to communicate the brand’s craftsmanship, making it difficult for premium clients to appreciate the technical expertise and the prestige of their residential and commercial portfolio.",
    solution:
      'I driven the complete UI/UX restyling, focusing on a minimal and sophisticated interface. I redefined the visual identity and the user journey to create a "gallery-first" experience. By prioritizing high-quality visuals and clean typography, I ensured that the craftsmanship and technical details of the projects remained the focal point of the digital experience.',
    outcome:
      "The new website successfully positions AGM Costruzioni as a leader in the luxury construction market. The streamlined navigation and premium aesthetic have improved brand perception and user engagement, providing a high-end showcase that effectively converts professional inquiries and high-profile leads.",
    process:
      "I managed the entire design lifecycle, from initial concept to final hand-off. I started by identifying the key architectural elements that define the brand’s style, translating them into a digital design system. I then focused on creating a seamless user journey that guides visitors through the portfolio, ensuring a responsive and high-performance experience across all devices.",
  },
  {
    id: "vidoser-platform",
    title: "Vidoser Platform - Ai Campaign Management",
    description:
      "An end-to-end web platform designed for brands and agencies to manage creator marketing campaigns at scale (a CreationDose project).",
    category: "Desktop Platform",
    coverImage: "/VidoserPlatform_02.png",
    images: ["/VidoserPlatform_02.png"],
    client: "CreationDose",
    tools: [],
    aiTools: ["AI-driven scouting", "Real-time analytics"],
    type: "work",
    year: "2021 – Present",
    role: "Product Designer",
    challenge:
      "Brands and agencies needed a scalable, professional way to manage complex creator marketing campaigns. The challenge was to transform intricate business requirements and massive amounts of data into an end-to-end web platform that remains intuitive for high-level campaign management.",
    solution:
      "Working within a multidisciplinary team, I driven the UI/UX design of the platform, focusing on architecting complex workflows—such as AI-driven scouting, collaboration management, and real-time analytics. My role was to translate technical power into a professional, high-performance digital workspace, ensuring the design remained intuitive while meeting demanding business goals.",
    outcome:
      "The platform has become an essential tool for agencies to manage campaigns at scale. By simplifying the management of thousands of collaborations, the design has significantly reduced the operational overhead for campaign managers, providing a robust interface for data-driven decision-making.",
    process:
      "The project required a deep dive into professional user needs. I collaborated closely with developers and stakeholders to ensure that complex AI features were translated into clear, actionable UI components. Through iterative prototyping and a focus on scalability, we built a digital environment that handles professional-grade workflows without sacrificing speed or clarity.",
  },
  {
    id: "private-chef-catania",
    title: "PrivateChef Catania",
    description:
      "A boutique website connecting professional chefs with clients for exclusive, high-end in-home dining experiences.",
    category: "Website",
    coverImage: "/PrivateChef_04.png",
    images: ["/PrivateChef_04.png"],
    tools: [],
    aiTools: [],
    type: "work",
    client: "PrivateChef Catania",
    year: "2024",
    role: "UI/UX Designer",
    challenge:
      "A boutique culinary service needed a digital home that felt as exclusive as their in-home dining experiences. The challenge was to create a platform that didn't just list services, but conveyed the premium atmosphere of a private chef's work, while making the complex process of menu selection and booking feel effortless.",
    solution:
      "I driven the UI/UX design and the visual identity from the ground up. I created a sophisticated interface that prioritizes high-impact culinary photography and elegant typography. By streamlining the user journey, I transformed the booking and menu exploration into a seamless, intuitive experience that reflects the high-end nature of the service.",
    outcome:
      "The website successfully established a strong digital presence for the brand, aligning it with the luxury market in Sicily. The intuitive booking flow has simplified client interactions, resulting in a more professional image and an increased conversion rate for high-end dinner party inquiries.",
    process:
      "I focused on 'designing the mood' before the interface. I started by defining a visual palette that evoked exclusivity and professional craftsmanship. I then mapped out a simplified booking funnel, reducing the number of steps required to request a custom menu. Throughout the process, I ensured that the mobile experience was just as refined as the desktop version, as most high-end clients book on the go.",
  },
];

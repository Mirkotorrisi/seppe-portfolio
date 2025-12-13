export interface Project {
  id: string
  title: string
  description: string
  category: string
  coverImage: string
  images: string[]
  client: string
  year: string
  role: string
  tools: string[]
  aiTools: string[]
  challenge: string
  solution: string
  outcome: string
  process: string
  type: "work" | "personal" // Added type field for filtering
}

export const projects: Project[] = [
  {
    id: "ai-powered-healthcare-dashboard",
    title: "AI-Powered Healthcare Dashboard",
    description:
      "A comprehensive healthcare analytics platform that leverages AI to provide actionable insights for medical professionals.",
    category: "Healthcare",
    coverImage: "/healthcare-dashboard-analytics.jpg",
    images: ["/healthcare-dashboard.jpg", "/healthcare-analytics.jpg"],
    client: "MedTech Innovations",
    year: "2023",
    role: "Lead Product Designer",
    tools: ["Figma", "Framer", "Adobe Creative Suite", "Miro"],
    aiTools: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face"],
    challenge:
      "Healthcare professionals were struggling with data overload, making it difficult to identify critical patient insights in a timely manner.",
    solution:
      "We designed an intuitive dashboard that uses AI to analyze patient data and surface the most relevant information, allowing for faster and more informed decision-making.",
    outcome:
      "The platform reduced the time spent on data analysis by 40% and improved diagnostic accuracy by 25%, leading to better patient outcomes and more efficient healthcare delivery.",
    process:
      "We began with extensive user research, interviewing over 30 healthcare professionals to understand their workflow and pain points. This informed our design process, which included multiple iterations of wireframing, prototyping, and usability testing. We worked closely with AI engineers to ensure the machine learning models were effectively integrated into the user experience.",
    type: "work",
  },
  {
    id: "fintech-mobile-app",
    title: "FinTech Mobile App",
    description:
      "A mobile banking application that simplifies financial management through AI-driven insights and personalized recommendations.",
    category: "Finance",
    coverImage: "/fintech-mobile-banking-app.jpg",
    images: ["/fintech-app.png", "/banking-app-interface.png"],
    client: "NextGen Banking",
    year: "2022",
    role: "UX/UI Designer",
    tools: ["Sketch", "Principle", "Zeplin", "InVision"],
    aiTools: ["Machine Learning", "Natural Language Processing", "Predictive Analytics"],
    challenge:
      "Traditional banking apps were complex and difficult to navigate, leading to low user engagement and satisfaction.",
    solution:
      "We created a clean, intuitive interface with AI-powered features that help users understand their spending patterns, set realistic financial goals, and receive personalized advice.",
    outcome:
      "The app achieved a 4.8/5 star rating on app stores, with users particularly praising its ease of use and helpful insights. User engagement increased by 60% compared to the client's previous app.",
    process:
      "Our design process involved creating detailed user personas, journey mapping, and information architecture before moving into visual design. We conducted weekly user testing sessions to refine the experience iteratively. The AI components were developed in parallel, with regular integration points to ensure a seamless experience.",
    type: "work",
  },
  {
    id: "e-commerce-product-recommendation-engine",
    title: "E-Commerce Product Recommendation Engine",
    description:
      "An AI-driven product recommendation system that enhances the shopping experience through personalized suggestions.",
    category: "E-Commerce",
    coverImage: "/ecommerce-product-recommendation-engine.jpg",
    images: ["/ecommerce-recommendation.jpg", "/vibrant-market-scene.png"],
    client: "Global Retail Solutions",
    year: "2023",
    role: "Product Designer",
    tools: ["Figma", "Adobe XD", "Protopie", "Maze"],
    aiTools: ["Recommendation Algorithms", "Computer Vision", "User Behavior Analysis"],
    challenge:
      "The client's e-commerce platform had low conversion rates and high cart abandonment due to customers struggling to find products that matched their preferences.",
    solution:
      "We designed a recommendation engine that analyzes user behavior, purchase history, and visual preferences to suggest relevant products in a visually appealing and non-intrusive way.",
    outcome:
      "The implementation resulted in a 35% increase in average order value and a 28% reduction in cart abandonment rate, significantly boosting the client's revenue.",
    process:
      "We started by analyzing existing user data to identify patterns and pain points. We then created multiple design concepts for integrating recommendations throughout the user journey. After selecting the most promising approach, we refined it through A/B testing and iterative improvements based on real user data.",
    type: "work",
  },
  {
    id: "ai-writing-assistant",
    title: "AI Writing Assistant",
    description:
      "A personal project exploring how AI can enhance the writing process for both creative and professional content.",
    category: "Productivity",
    coverImage: "/ai-writing-assistant-tool.jpg",
    images: ["/writing-assistant.jpg", "/content-creation-workspace.png"],
    client: "Self-initiated",
    year: "2022",
    role: "Designer & Developer",
    tools: ["Figma", "React", "CSS", "JavaScript"],
    aiTools: ["GPT-4", "BERT", "Sentiment Analysis"],
    challenge:
      "Writers often face creative blocks, struggle with editing, or need assistance with research and fact-checking.",
    solution:
      "I created a writing assistant that offers contextual suggestions, helps refine tone and style, and provides relevant research without disrupting the creative flow.",
    outcome:
      "The tool has been used by over 500 writers in its beta phase, with 85% reporting improved productivity and 70% noting enhanced quality in their writing.",
    process:
      "This personal project evolved through several phases, starting with a simple prototype that I tested with fellow writers. I gradually added features based on feedback, focusing on creating an interface that felt like a helpful companion rather than an intrusive tool. The AI components were fine-tuned to provide suggestions that matched the user's writing style.",
    type: "personal",
  },
  {
    id: "virtual-interior-designer",
    title: "Virtual Interior Designer",
    description:
      "An AR application that helps users visualize furniture and decor in their space before making purchasing decisions.",
    category: "Augmented Reality",
    coverImage: "/ar-virtual-interior-designer-furniture.jpg",
    images: ["/ar-interior.jpg", "/furniture-visualization.jpg"],
    client: "Self-initiated",
    year: "2023",
    role: "UX Designer & AR Developer",
    tools: ["Unity", "Blender", "ARKit", "ARCore"],
    aiTools: ["Object Recognition", "Spatial Mapping", "Style Transfer"],
    challenge:
      "Consumers often struggle to imagine how furniture and decor will look in their homes, leading to purchase hesitation and high return rates.",
    solution:
      "I developed an AR app that uses AI to recognize spaces, suggest appropriate furniture, and realistically render items in the user's environment with accurate lighting and scale.",
    outcome:
      "The prototype has garnered interest from several furniture retailers and interior design firms, with discussions ongoing about potential commercial applications.",
    process:
      "This project began as an exploration of AR capabilities, but quickly evolved into a more comprehensive tool as I identified the potential to solve a common consumer problem. I focused on creating realistic rendering and intuitive interactions, testing with friends and family to refine the experience. The AI components were particularly challenging, requiring extensive training to accurately recognize different types of spaces and lighting conditions.",
    type: "personal",
  },
]

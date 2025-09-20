
import { ResumeData } from './types';

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Basim Bashir",
    phone: "+92 30171 444 99",
    email: "basim.bashir0968@gmail.com"
  },
  profile: "Results-oriented Applied AI Engineer specializing in Machine Learning, Computer Vision, and NLP. Proven ability to architect and deploy production-grade AI solutions, from voice cloning and image generation to sophisticated social media automation. Adept at translating complex business needs into market-ready products using cutting-edge deep learning frameworks. Seeking to leverage technical expertise and a passion for innovation to solve challenging real-world problems and drive AI adoption.",
  education: [
    {
      dates: "2022 – 2023",
      location: "Faisalabad, Pakistan",
      degree: "Machine learning and Deep Learning",
      institution: "NAVTTEC",
      details: "by Govt. of Pakistan"
    },
    {
      dates: "05/2019 – 08/2021",
      location: "Faisalabad, Pakistan",
      degree: "Cloud Computing (Docker & Kubernettes)",
      institution: "PIAIC",
      details: ""
    },
    {
      dates: "2018 – 2022",
      location: "Faisalabad, Pakistan",
      degree: "Bachelor Degree of Software Engineering",
      institution: "Riphah International University Faisalabad Campus",
      details: "CGPA 3.69/4.0"
    }
  ],
  workExperience: [
    {
      dates: "01/2024 – present",
      location: "Auckland, New Zealand",
      role: "Applied AI Engineer",
      company: "OuterAspect IP Ltd",
      achievements: [
        "Architected an AI-powered voice cloning module using TTS and ASR for an automated customer care system, improving service efficiency by processing calls autonomously with natural voice interactions.",
        "Developed a scalable image generation API with custom-trained LoRA and Stable Diffusion models, automating the creation of high-quality marketing visuals and reducing content creation timelines.",
        "Pioneered a multimodal human simulation tool for social media automation, integrating Computer Vision and VLLMs to intelligently identify targets, extract data, and conduct automated conversations, significantly scaling outreach capabilities.",
        "Engineered a multimodal web scraping module using Vision Language Models to identify and qualify potential B2B customers, and developed an AI-driven educational platform to enhance student learning with real-time references.",
        "Innovated an onboarding system for 3D asset modelers using advanced multimodal AI, streamlining workflows and increasing productivity through personalized, automated guidance.",
        "Led the development of 'PostPerfect,' a production-grade Instagram automation platform. Engineered a multi-container architecture using Docker, implemented a robust RESTful API for programmatic control, and integrated advanced VPN support to ensure account security."
      ]
    },
    {
      dates: "07/2023 – 12/2023",
      location: "Islamabad, Pakistan",
      role: "Computer Vision Engineer",
      company: "TW-Spark Game Studios",
      achievements: [
        "Engineered computer vision models to detect and track cricket balls, improving tracking accuracy by 15% and enabling advanced sports analytics for lbw trajectory analysis.",
        "Automated cricket highlight generation through a custom web application, achieving a 10x speed increase over manual methods and empowering coaches with accelerated match insights.",
        "Designed and implemented virtual coaching agents using reinforcement learning to identify player weaknesses, providing personalized training through automated feedback and targeted drills."
      ]
    },
    {
      dates: "2022 – 2023",
      location: "Faisalabad, Pakistan",
      role: "Full Stack Data Scientist",
      company: "Visibility Bots",
      achievements: [
        "Deployed a computer vision security system using neural networks for object detection to safeguard facilities.",
        "Constructed an end-to-end AI-driven HR platform featuring intelligent resume screening and an internal chatbot to streamline recruitment and employee information access.",
        "Expanded computer vision capabilities across multiple applications, implementing YOLO, VGGNet, and ViT for person detection, fall detection, and live attendance monitoring.",
        "Increased customer support engagement by deploying a GPT-2 based chatbot and a voice bot with advanced NLP for seamless, natural language interactions.",
        "Drove call center efficiency and boosted customer satisfaction by automating key functions with call bot technology."
      ]
    }
  ],
  skills: [
    { category: "Computer Vision", skills: ["Object Detection (YOLO, ViT)", "Image Processing (Pillow, OpenCV)", "Image Generation (Stable Diffusion, LoRA)", "Multimodal Models (VLLMs)"] },
    { category: "Natural Language Processing (NLP)", skills: ["Text-to-Speech (TTS)", "Speech-to-Text (STT)", "Language Model Fine-tuning (Llama)", "Autoregressive Models"] },
    { category: "Machine Learning & Deep Learning", skills: ["Model Training & Fine-tuning", "Reinforcement Learning", "Custom Schedulers & Checkpointing"] },
    { category: "Web Development & APIs", skills: ["RESTful API Design", "Flask", "FastAPI", "Django"] },
    { category: "Systems, Cloud & DevOps", skills: ["Docker & Containerization", "Docker Compose", "MLOps & CI/CD Principles", "AWS", "Private Server Management", "VPN Configuration"] },
    { category: "Database Management", skills: ["Model Storage", "API Data Retrieval", "SQLite, PostgreSQL, MongoDB"] },
    { category: "Frameworks & Libraries", skills: ["PyTorch, TensorFlow, Keras", "LangChain", "Diffusers, Transformers"] },
    { category: "Data Analysis", skills: ["Data Annotation & Validation", "Model Performance Evaluation", "Sports Analytics"] }
  ],
  achievements: [
    { text: "Managed multimodal projects achieving over 90% accuracy in image processing and description generation." },
    { text: "Optimized Text-to-Speech functionality, reducing audio generation time by 30% for lengthy inputs." },
    { text: "Improved model training pipelines, increasing data generation efficiency by 25%." },
    { text: "Streamlined API workflows, decreasing response times by 40% while upholding high accuracy standards." },
    { text: "Ensured high customer satisfaction through effective communication and timely project deliveries." }
  ],
  hobbies: [
    { name: "Exploring distant lands", icon: "plane" },
    { name: "Getting lost in a good book", icon: "book" },
    { name: "Capturing moments", icon: "camera" },
    { name: "Feeling the music", icon: "music" },
    { name: "Cricket", icon: "cricket" },
  ],
  socialMedia: [
    { platform: "linkedin", handle: "@BasimBashir", url: "https://www.linkedin.com/in/basim-bashir-035403214/" }
  ],
  goal: "To secure an AI Engineering role where I can utilize my expertise in machine learning and deep learning algorithms to drive innovation and enhance artificial intelligence systems."
};
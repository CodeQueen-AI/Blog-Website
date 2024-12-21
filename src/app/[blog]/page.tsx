'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Topic {
  title: string;
  description: string;
  advantages: string[];
  details: string[];
}
const topics: Record<string, Topic> = {
  ai: {
    title: 'Artificial Intelligence',
    description: 'Artificial Intelligence (AI) is a groundbreaking technology designed to simulate human intelligence. It enables machines to learn, reason, and make decisions, revolutionizing industries such as healthcare, finance, transportation, and more. From predictive analytics to autonomous vehicles, AI is shaping the future and empowering humanity with innovative tools for solving complex challenges.',
    advantages: [
      'Improved Efficiency: AI can automate repetitive tasks, saving time and reducing human error.',
      'Data Processing: AI systems can analyze vast amounts of data quickly and accurately, making it easier to derive insights.',
      'Enhanced Decision Making: AI supports better decision-making by providing data-driven insights and predictions.',
      'Personalization: AI can offer personalized experiences, such as content recommendations or tailored customer service.',
      'Cost Savings: By automating tasks, AI can reduce operational costs and improve productivity.',
      'Advancements in Healthcare: AI is being used in medical diagnostics, drug discovery, and personalized treatment plans.',
      'Improved Safety: AI-driven systems can enhance safety in fields like autonomous vehicles, manufacturing, and cybersecurity.'
    ],
    details : [
      'AI, which stands for artificial intelligence, is a branch of computer science that develops machine systems capable of demonstrating behaviors linked to human intelligence. AI programs use data collected from different interactions to improve the way they mimic humans in order to perform tasks such as learning, planning, knowledge representation, perception and problem-solving',
      'Artificial intelligence technology is used for a wide range of applications, including in web development, such as automated chatbots for customer service, product recommendations based on a user’s habits, speech recognition, and even to build a website from scratch. Essentially, the purpose of AI is to improve the systems we already use by automating tasks to make them more efficient',
      'AI systems process large amounts of data through algorithms in order to find patterns that will help them understand and replicate human intelligence by predicting future behavior from an end-user. For example, when using an AI-powered chatbot, the system will work to preempt a user’s next question by offering information as a real chat agent would. '
    ]
  },
  
  gaming: {
    title: 'Gaming',
    description: 'Gaming is a rapidly growing industry that blends entertainment with technology, offering an immersive experience through interactive gameplay. With advancements in virtual reality (VR), artificial intelligence (AI), and online multiplayer gaming, the gaming world has transformed into an expansive universe that offers something for everyone. Gaming has become a mainstream form of entertainment and is now an integral part of digital culture, bridging the gap between technology and entertainment in exciting new ways.',
    advantages: [
      'Immersive Experiences: With virtual reality, gaming has become a deeply immersive experience, allowing players to interact with virtual worlds in ways that were once unimaginable.',
      'AI-Powered Gameplay: AI is used to create smarter non-playable characters (NPCs), allowing for more dynamic and challenging gameplay. AI can also adapt to players\' styles, enhancing the gaming experience.',
      'Global Connectivity: Multiplayer gaming connects players from all over the world, enabling them to collaborate or compete in real-time, regardless of their geographic location.',
      'Cross-Platform Play: Many games now support cross-platform play, allowing players on different devices to join the same game session, broadening accessibility and community.',
      'E-Sports Growth: Competitive gaming has evolved into e-sports, a multi-billion dollar industry with professional players, tournaments, and global audiences.'
    ],
    details: [
      'The gaming industry has evolved significantly over the past few decades, from simple 2D games to fully immersive 3D environments. The rise of gaming consoles, powerful PCs, and mobile devices has opened up new possibilities for developers and players alike.',
      'Gaming has become a form of interactive storytelling, where players can engage with complex narratives and experience adventures from different perspectives. Whether in single-player campaigns or multiplayer open worlds, games have reached new levels of complexity and realism.',
      'The integration of AI in gaming has revolutionized the way characters and environments behave, enabling smarter NPCs and more dynamic, unpredictable gameplay.'
    ]
  },

  ml: {
    title: 'Machine Learning',
    description: 'Machine Learning (ML) is a subset of artificial intelligence that allows computers to learn from data and improve from experience without being explicitly programmed. It enables systems to identify patterns, make predictions, and adapt to new data without human intervention. ML has a wide range of applications, from self-driving cars to personalized recommendations and fraud detection.',
    advantages: [
      'Automated Decision Making: ML systems can analyze data and make decisions without human intervention, speeding up decision-making processes.',
      'Personalization: ML allows for personalized experiences, such as recommendation systems that suggest content based on user preferences.',
      'Predictive Analysis: ML models can predict future trends, which is beneficial in fields like finance, healthcare, and marketing.',
      'Efficiency: By automating repetitive tasks, ML can improve efficiency and reduce human error.',
      'Scalability: ML models can handle vast amounts of data and scale to meet the demands of growing data sets and complex applications.'
    ],
    details: [
      'Machine Learning is divided into three main types: supervised learning, unsupervised learning, and reinforcement learning. In supervised learning, the model is trained using labeled data, while unsupervised learning works with unlabeled data. Reinforcement learning allows machines to learn by interacting with an environment and receiving feedback.',
      'ML has a wide range of applications across various industries. In healthcare, it is used for medical diagnosis and personalized treatment plans. In finance, ML models help in predicting market trends and detecting fraudulent transactions.',
      'The process of machine learning involves gathering large amounts of data, preparing it for analysis, and then training a model using algorithms such as decision trees, neural networks, and regression analysis. The model is then tested and refined based on its performance.'
    ]
  },

  cybersecurity: {
    title: 'Cybersecurity',
    description: 'Cybersecurity involves protecting systems, networks, and data from digital attacks, theft, or damage...',
    advantages: [
      'Protection from Data Breaches: Cybersecurity safeguards sensitive data from unauthorized access and theft.',
      'Prevention of Cyberattacks: Effective cybersecurity measures help prevent malware, phishing, and ransomware attacks.',
      'Regulatory Compliance: Businesses can meet data privacy regulations by implementing cybersecurity protocols.',
      'Reduced Operational Costs: Preventing data breaches and cyber incidents saves businesses from costly recovery efforts.',
      'Maintaining Customer Trust: Strong cybersecurity ensures customer data is safe, fostering trust and loyalty.'
    ],
    details: [
      'Cybersecurity involves a wide range of practices and technologies aimed at protecting systems from cyber threats, including firewalls, encryption, intrusion detection systems...',
      'The primary objective of cybersecurity is to protect data integrity, confidentiality, and availability...',
      'Cybersecurity includes various practices such as network security, application security, cloud security, and data protection...'
    ]
  }, 

  programming: {
    title: 'Programming Tools',
    description: 'Programming tools are software and applications that aid developers in writing, testing, and debugging code. These tools improve productivity, facilitate collaboration, and ensure code quality in software development.',
    advantages: [
      'Enhanced Productivity: Programming tools automate repetitive tasks, such as code formatting and error detection.',
      'Code Quality: Tools like linters and IDEs help maintain high-quality, error-free code.',
      'Collaboration: Version control tools such as Git enable developers to work together efficiently, track changes, and resolve conflicts.',
      'Debugging: Debuggers make it easier to find and fix issues in code, improving the reliability of software.',
      'Efficiency: Tools like compilers and build automation tools streamline the development process, reducing time spent on manual tasks.'
    ],
    details: [
      'Popular programming tools include Integrated Development Environments (IDEs) like Visual Studio Code, IntelliJ IDEA, and Eclipse. These provide an environment for writing, testing, and debugging code.',
      'Version control tools like Git, SVN, and Mercurial help developers manage and track changes to their code over time. GitHub and GitLab are popular platforms for hosting and sharing repositories.',
      'Other tools include testing frameworks, such as Jest and Mocha, which automate the process of verifying code correctness and ensuring quality across different environments.',
      'Additionally, continuous integration and deployment (CI/CD) tools, such as Jenkins and CircleCI, allow for automated testing, building, and deploying applications, which ensures smooth collaboration between development and operations teams.'
    ]
  },

  robotics: {
    title: 'Robot',
    description: 'A robot is a programmable machine that can carry out a series of actions automatically. Robots are used in a wide range of industries for tasks that require precision, repetition, and speed.',
    advantages: [
        'Increased productivity and efficiency',
        'Ability to work in hazardous environments',
        'Consistency in tasks without fatigue',
        'Can work 24/7 without breaks',
        'Reduces human error and injury'
    ],
    details: [
        'Robots can be humanoid or industrial machines, designed for specific tasks.',
        'They can be autonomous or controlled remotely.',
        'Robots are often powered by electricity or hydraulic systems.',
        'Modern robots use artificial intelligence and machine learning for advanced tasks.'
    ]
},

   technology: {
  title: '3D Technology',
  description: '3D technology involves the creation of three-dimensional objects or images. It is widely used in various fields such as entertainment, medical imaging, architecture, and product design.',
  advantages: [
      'Enhanced realism and visual experience',
      'Helps in accurate modeling and simulation',
      'Improves product prototyping and design',
      'Used in medical procedures for better imaging',
      'Facilitates immersive experiences in gaming and VR'
  ],
  details: [
      '3D technology is used in the creation of 3D models, animations, and virtual environments.',
      'It is employed in a wide range of industries including film, video games, healthcare, and manufacturing.',
      'Technologies like 3D printing and 3D rendering have revolutionized design and production processes.',
      '3D technology has advanced with the use of VR (Virtual Reality) and AR (Augmented Reality).'
  ]
},

  computing: {
  title: 'Cloud Computing',
  description: 'Cloud computing is the delivery of computing services such as servers, storage, databases, networking, software, and analytics over the internet (the cloud), offering flexible resources and economies of scale.',
  advantages: [
      'Cost-effective and scalable infrastructure',
      'Access to data and services from anywhere',
      'Improved collaboration and efficiency',
      'Automatic software updates and patches',
      'Enhanced data security and backup solutions'
  ],
  details: [
      'Cloud computing provides on-demand access to shared computing resources, without requiring direct management by the user.',
      'It is offered in various models such as SaaS (Software as a Service), PaaS (Platform as a Service), and IaaS (Infrastructure as a Service).',
      'Popular cloud providers include Amazon Web Services (AWS), Microsoft Azure, and Google Cloud.',
      'Cloud services support both public and private cloud models, offering flexibility and security.'
  ]
}
};

const TopicDetails = () => {
  const { blog } = useParams<{ blog: string }>();
  const [topicData, setTopicData] = useState<Topic | null>(null);
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState<string[]>([]);

  useEffect(() => {
    if (blog) {
      const data = topics[blog.toLowerCase()];
      setTopicData(data || null);
    }
  }, [blog]);

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      setCommentsList([...commentsList, comment]);
      setComment('');
    }
  };

  if (!topicData) {
    return <p className="text-white text-center mt-20">Topic not found!</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-[#315F8C] via-blue-500 to-black text-white flex flex-col justify-start items-center">
      <div className="mt-[50px] text-center px-6 sm:px-12 lg:px-24">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl">
          {topicData.title}
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-white inline-flex" />
        </div>
        <p className="mt-6 text-lg leading-relaxed text-gray-200 max-w-4xl mx-auto">
          {topicData.description}
        </p>
      </div>

      {/* Advantages Section */}
      <div className="mt-12 max-w-4xl mx-auto text-left px-6 sm:px-12 lg:px-32">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Advantages</h2>
        <ul className="list-disc pl-6 space-y-3 text-lg text-gray-200">
          {topicData.advantages.map((advantage, index) => (
            <li key={index} className="border-b border-gray-300 pb-3">
              {advantage}
            </li>
          ))}
        </ul>
      </div>

      {/* Details Section */}
      <div className="mt-12 max-w-4xl mx-auto text-left px-6 sm:px-12 lg:px-32">
        <p className="text-lg text-gray-200 leading-relaxed">{topicData.details.join(' ')}</p>
      </div>

      {/* Comment Section */}
      <div className="mt-12 max-w-4xl mx-auto px-6 sm:px-12 lg:px-32 flex flex-col items-center">
        <textarea
          className="w-full sm:w-[500px] p-4 bg-gradient-to-r from-blue-500 via-blue-800 to-white text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          value={comment}
          onChange={handleCommentChange}
          placeholder="Enter Your Comment!"
        />
        <button
          onClick={handleCommentSubmit}
          className="mt-4 w-full sm:w-[500px] py-3 bg-white text-blue-800 border border-blue-800 font-bold rounded-full hover:bg-blue-800 hover:text-white transition duration-300"
        >
          Submit
        </button>
        <div className="mt-8 w-full sm:w-[500px]">
          <div className="space-y-4 mt-4 max-w-md mx-auto px-10">
            {commentsList.length > 0 &&
              commentsList.map((comment, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-500 via-blue-800 to-white p-4 rounded-md border border-blue-600"
                >
                  <p className="text-gray-200">{comment}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetails;

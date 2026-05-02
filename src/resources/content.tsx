import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Saurabh",
  lastName: "Singh",
  name: `Saurabh Singh`,
  role: "Full-Stack Engineer (MERN)",
  avatar: "/images/avatar.jpg",
  email: "saaurabhsigh13@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on full-stack development, MERN projects, and real-time web apps.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/saurabhsingh72487-hub",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/saurabh-singh7",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Full-Stack MERN Developer`,
  description: `Portfolio website of ${person.name}, a Full-Stack Engineer specialized in MERN stack, WebRTC, Socket.io, Redux, AWS, and GCP.`,
  headline: <>Building scalable real-time web applications</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">P2P Video Chat</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/p2p-video-chat",
  },
  subline: (
    <>
      I'm Saurabh, a <Text as="span" size="xl" weight="strong">Full-Stack MERN Developer</Text>{" "}
      focused on secure APIs, real-time communication, Redux-powered frontends, and cloud-ready web apps.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Haldwani, Uttarakhand`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Full-Stack Developer specialized in architecting high-performance, real-time web
        applications using the MERN stack. My work focuses on secure REST APIs, Redux state
        management, WebRTC-based communication, Socket.io signaling, and cloud integrations using
        AWS, GCP, Firebase, and Cloudinary.
      </>
    ),
  },
  work: {
    display: true,
    title: "Projects & Work Experience",
    experiences: [
      {
        company: "p2p-video-chat",
        timeframe: "Jan 2026 – Mar 2026",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Architected a peer-to-peer video communication platform using WebRTC and Socket.io,
            reducing server-side media streaming bottlenecks.
          </>,
          <>
            Engineered secure signaling logic with STUN/TURN integration to improve connectivity
            across restricted networks.
          </>,
          <>
            Built a responsive React interface that synchronizes media stream states across
            different devices and hardware setups.
          </>,
        ],
        images: [],
      },
      {
        company: "chart-the-stock-market",
        timeframe: "Dec 2025 – Feb 2026",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Built a real-time financial dashboard for live market tracking and stock trend
            analysis.
          </>,
          <>
            Created dynamic data visualization modules for historical stock trends and analytical
            insights.
          </>,
          <>
            Implemented authentication and personalized portfolio data handling for secure user
            experiences.
          </>,
        ],
        images: [],
      },
      {
        company: "pinterest-clone",
        timeframe: "Nov 2025 – Jan 2026",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Developed a media-heavy social platform using MongoDB, Express, React, Node.js,
            Cloudinary, JWT, and Redux.
          </>,
          <>
            Integrated asynchronous image upload and processing workflows through Cloudinary.
          </>,
          <>
            Centralized app state using Redux Toolkit and protected REST endpoints using JWT-based
            authorization.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "MIET Kumaon, Haldwani",
        description: <>BCA — Bachelor of Computer Applications, 2023 | 7.0 CGPA</>,
      },
      {
        name: "Uttarakhand Board",
        description: <>Class XII, 2020 | 70%</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "MERN Stack",
        description: (
          <>
            Building scalable full-stack applications with React, Node.js, Express, and MongoDB.
          </>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "Express",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "State Management & APIs",
        description: (
          <>
            Designing REST APIs, JWT authentication flows, schema structures, and frontend state
            using Redux Toolkit and Context API.
          </>
        ),
        tags: [
          {
            name: "Redux",
            icon: "redux",
          },
          {
            name: "JWT",
            icon: "javascript",
          },
          {
            name: "REST API",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Real-Time Communication",
        description: (
          <>
            Developing low-latency applications using WebRTC, Socket.io, peer-to-peer architecture,
            and STUN/TURN servers.
          </>
        ),
        tags: [
          {
            name: "WebRTC",
            icon: "javascript",
          },
          {
            name: "Socket.io",
            icon: "nodejs",
          },
        ],
        images: [],
      },
      {
        title: "Cloud & Media Infrastructure",
        description: (
          <>
            Working with AWS S3/EC2, GCP, Firebase, and Cloudinary for deployment, storage,
            authentication, and media handling.
          </>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "GCP",
            icon: "google",
          },
          {
            name: "Firebase",
            icon: "firebase",
          },
          {
            name: "Cloudinary",
            icon: "cloud",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about full-stack development...",
  description: `Technical notes and development updates by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full-stack MERN, real-time, and cloud-based projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A collection of project visuals by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
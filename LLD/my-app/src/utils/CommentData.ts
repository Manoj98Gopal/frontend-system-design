export interface CommentItem {
  id: number;
  userName: string;
  time: string;
  profilePic: string;
  comment: string;
  replies?: CommentItem[];
}

export const commentsData: CommentItem[] = [
  {
    id: 11,
    userName: "kiran_dev",
    time: "2026-03-24T09:10:00Z",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    comment:
      "This dashboard looks really scalable and well-structured. I like how the components are separated and reusable. It gives a clean architecture vibe. Just curious, did you use Redux Toolkit or React Context for managing global state across different modules?",
    replies: [
      {
        id: 12,
        userName: "manoj_dev",
        time: "2026-03-24T09:15:20Z",
        profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
        comment:
          "Thanks a lot! I actually used Redux Toolkit because it simplifies a lot of boilerplate and gives better control over async operations. It also helps in debugging with DevTools which is really useful in large-scale applications.",
        replies: [
          {
            id: 13,
            userName: "kiran_dev",
            time: "2026-03-24T09:17:00Z",
            profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
            comment:
              "That makes sense. Redux Toolkit definitely improves developer experience. I also like how it enforces a better structure and reduces bugs when handling complex state updates across multiple components.",
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 14,
    userName: "megha_ui",
    time: "2026-03-24T10:30:00Z",
    profilePic: "https://randomuser.me/api/portraits/women/30.jpg",
    comment:
      "The animations feel extremely smooth and natural, especially the transitions between sections. It doesn't feel heavy at all. I wanted to know if you are using Framer Motion or any custom CSS animations for achieving this level of performance and smoothness.",
    replies: [
      {
        id: 15,
        userName: "manoj_dev",
        time: "2026-03-24T10:35:45Z",
        profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
        comment:
          "Yes, I am using Framer Motion for most of the animations and transitions. It provides great control and performance. I also optimized animations by limiting re-renders and using lazy loading where necessary to keep everything smooth.",
        replies: []
      }
    ]
  },
  {
    id: 18,
    userName: "rahul_api",
    time: "2026-03-24T11:00:00Z",
    profilePic: "https://randomuser.me/api/portraits/men/50.jpg",
    comment:
      "I am really interested in understanding how you handled authentication in this project. Did you build a custom auth system or rely on an external service? Also, how are you managing session persistence and security for logged-in users?",
    replies: [
      {
        id: 19,
        userName: "manoj_dev",
        time: "2026-03-24T11:05:00Z",
        profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
        comment:
          "I used SuperTokens for authentication because it provides a secure and scalable solution out of the box. It handles session management, token refresh, and also supports multiple authentication strategies which made development easier.",
        replies: []
      }
    ]
  },
  {
    id: 21,
    userName: "deepak_ops",
    time: "2026-03-24T12:20:00Z",
    profilePic: "https://randomuser.me/api/portraits/men/70.jpg",
    comment:
      "From a DevOps perspective, I am curious about your deployment strategy. Did you containerize the application using Docker? Also, are you using any CI/CD pipelines to automate the build and deployment process?",
    replies: [
      {
        id: 22,
        userName: "manoj_dev",
        time: "2026-03-24T12:25:30Z",
        profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
        comment:
          "Yes, the application is fully containerized using Docker. I also configured Nginx as a reverse proxy. For CI/CD, I used GitHub Actions to automate builds and deployments, ensuring zero downtime during updates.",
        replies: []
      }
    ]
  },
  {
    id: 25,
    userName: "anil_js",
    time: "2026-03-24T13:00:00Z",
    profilePic: "",
    comment:
      "SEO is always tricky in modern applications. I wanted to know how you handled SEO in your Next.js project. Did you use static generation, server-side rendering, or dynamic metadata handling for improving search engine visibility?",
    replies: [
      {
        id: 26,
        userName: "manoj_dev",
        time: "2026-03-24T13:05:10Z",
        profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
        comment:
          "I used Next.js metadata API along with static generation wherever possible. For dynamic pages, I implemented server-side rendering and dynamic meta tags to ensure better SEO performance across different routes.",
        replies: []
      }
    ]
  }
];

export const getTimeAgo = (dateString: string): string => {
  const now = new Date();
  const past = new Date(dateString);

  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(diffInSeconds / 3600);
  const days = Math.floor(diffInSeconds / 86400);
  const weeks = Math.floor(diffInSeconds / 604800);
  const months = Math.floor(diffInSeconds / 2592000);
  const years = Math.floor(diffInSeconds / 31536000);

  if (diffInSeconds < 60) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  if (weeks < 4) return `${weeks}w ago`;
  if (months < 12) return `${months}mo ago`;
  return `${years}y ago`;
};
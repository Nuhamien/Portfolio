// src/data/homeData.js

export const homeData = {
  hero: {
    badge: "Hello!",
    title: {
      main: "I’m Nuhamien,",
      sub: "I design and build clean digital experiences",
      highlight: "Nuhamien",
    },
    description:
      "I create simple, user-friendly interfaces and bring them to life with clean frontend code.",
    buttons: [
      {
        text: "View Projects",
        action: "scroll",
        target: "projects",
        variant: "primary",
      },
      {
        text: "Hire Me",
        action: "navigate",
        target: "/contact",
        variant: "secondary",
      },
    ],
    image: {
      type: "avatar",
      src: "YOUR_IMAGE_URL_HERE",
      alt: "Nuhamien portrait",
    },
  },

  servicesPreview: {
    badge: "What I Do",
    title: {
      main: "My",
      highlight: "Services",
      suffix: ".",
    },
    description:
      "I design clean interfaces and build responsive frontend experiences that focus on clarity, usability, and simplicity.",
    serviceIds: [
      "ui-ux-design",
      "web-design",
      "mobile-app-design",
      "frontend-development",
    ],
  },

  blogPreview: {
    title: {
      main: "From my",
      sub: "blog post",
    },
    button: {
      text: "See All",
      path: "/blog",
    },
    posts: [
      {
        id: "post-1",
        category: "UI/UX Design",
        author: "Jayesh Patil",
        date: "10 Nov, 2023",
        title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
        excerpt: "Short blog description here.",
         image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIAUgZS4wxBVzs3n_lnchgdiTIlGvFiz1o5AkdF4Pz-FpJBAAqy_vDKyYA7Ee8t0hI5w7C3JS9GsFsjAu-paIMHZ1duILWn-mXQEGzrsuDWGW4KvT4DFW13-nYx8JopaKsl2pF22CnQ4B5Slko4DsgeLAK7-VX76sU33ug7iqWi1qBZOJ9gwRJwBqSVQfN01ZM_acm9Pp4_uTHDbaI0IOOgqR_RToSKtVLXkkAapjyeQOFjtIE-mCQmMWCwFwiWQP-24NquphEEZQL",
        bgColor: "#dcdde1",
        slug: "your-first-blog-title",
      },
      {
        id: "post-2",
        category: "App Design",
        author: "Jayesh Patil",
        title: "Sugee: Loan Management System for Rural Sector.",
        excerpt: "Another short blog description here.",
        image:
           "https://lh3.googleusercontent.com/aida-public/AB6AXuA0gBoEnEhU_ZcS8cPpIUzOftPA9W-OWFVhZcnBvl4x5PYejmM2BNOH2XBYIoRv01_XB3A1yDvZmmYNcDdCD8gzeXTu0G3P2d_XU661-KCelRly73of7CHSBV50v0T4hPJDBglKVoohjcxgyhvy9jYEPS8uU3EXBhxNyaDEHmrrwJJnLycRBNDfxeNKP15pN6mKUrpdnRlrfsKsx8O2Os_cU66AwKtKKZI2_5pqS597qeGs4O-G9nV5y3s6bECYV4ZIgALhbXhfAK0k",
        date: "09 Oct, 2023",
        bgColor: "#0e8354",
        slug: "another-blog-title",
      },
      {
        id: "post-3",
        category: "App Design",
        author: "Jayesh Patil",
        title: "Cinetrade: Innovative way to invest in Digital Media",
        excerpt: "Another blog summary.",
        image:
               "https://lh3.googleusercontent.com/aida-public/AB6AXuDlvun2y7cX7ZnmjcLMXeyuaOtfs-9ENq3BD6Wh4uAe7eNBhBfvrpw25gDqph90LMifuEZ8VPqkeO6fFcXuG6VZlB7Zev63bwhd0V1v0d5BKFcLrdzkUk2GnfwA7MmXCbYTTqx0sPpXjeouExgm8h0xLH_I9Z9MjUgZNOhV47wh2QfrN4lkEvKvi6LazSHW6xpMEPtTUfvAoJh8x9J9obBn6NEIsBq8lCcSa1-3x5UhRa224Hm83-40nw9ygsjLTGc5grmuEDF3pYjW",
        date: "13 Aug, 2023",
        bgColor: "#ffbd00",
        slug: "third-blog-title",
      },
    ],
  },
  testimonials: {
  enabled: true,

  title: {
    main: "What people",
    highlight: "say",
    suffix: ".",
  },

  description:
    "Feedback from people I’ve worked with and collaborated with.",

  items: [
   {
    id: 1,
    name: "Jayesh Patil",
    role: "CEO, Lirante",
    rating: "5.0",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBdaJ62o6oqkKHp7N01pji45kt_qbCpUbwXop5xn_Qvb8eMRZa1E8Dox7LvtgGSI--bwB-ElpTxa_mhXh6PBtZUQzdGdGVlmCHs9BALVxera43ZoiuTq7rPtcuMOM-8EMbCgyVWqTNdOs_tsXMR_V8QY5dkW0ivvtAGkRmXCpgHBTsBhyFlakEESEMLPH_hmwGjDZsPRvUe7lSIm85zT7AzECkWf_fIEdcLAWXuTgST9W9JV25Zx9X7Joieow1gkK0oDn2QhFg0RyC",
    text: "Jenny’s design work brought clarity, elegance, and strong usability to our product. Highly recommended for premium digital experiences.",
  },
  {
    id: 2,
    name: "Jayesh Patil",
    role: "CEO, Lirante",
    rating: "5.0",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBdaJ62o6oqkKHp7N01pji45kt_qbCpUbwXop5xn_Qvb8eMRZa1E8Dox7LvtgGSI--bwB-ElpTxa_mhXh6PBtZUQzdGdGVlmCHs9BALVxera43ZoiuTq7rPtcuMOM-8EMbCgyVWqTNdOs_tsXMR_V8QY5dkW0ivvtAGkRmXCpgHBTsBhyFlakEESEMLPH_hmwGjDZsPRvUe7lSIm85zT7AzECkWf_fIEdcLAWXuTgST9W9JV25Zx9X7Joieow1gkK0oDn2QhFg0RyC",
    text: "From concept to polished interface, the work was thoughtful, user-focused, and visually impressive throughout the project.",
  },
  ],
 placeholder: {
    title: "Testimonials coming soon...",
    description:
      "I’m currently building my portfolio and collecting feedback from real projects and collaborations. This section will be updated as I grow and complete more work.",
    quoteMark: "“",
  },
},
processPreview: {
  badge: "My Process",
  title: {
    main: "How I turn ideas into",
    highlight: "usable digital experiences",
  },
  featuredCount: 3,
  stepIds: [
    "research-brainstorming",
    "planning",
    "design-system-setup",
    "ui-design",
    "development",
  ],
},
marquee: {
  items: [
    "UX Design",
    "App Design",
    "Dashboard",
    "Wireframe",
    "User Research",
  ],
  separator: "✦",
},
 projectsPreview: {
  title: {
    main: "Lets have a look at",
    sub: "my",
    highlight: "Projects",
  },
  projectIds: [
    "gift-shop",
    "one-stop-auto-lounge",
    "pulsechat"
  ],
},
 whyHireMe: {
      titleStart: "Why ",
  titleHighlight: "Hire me",
  titleEnd: "?",
    description:
      "I design clean, user-friendly interfaces and turn them into responsive frontend experiences with attention to detail.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVykUyrbe3srrYWq7eKCmaP0YUh_FIACBBpZpCuJREni1EJKaLCDzfxHl_yCxySotblIA9H9Kl1cZrXodU6KNIXD8-9jwSv3njhxgjTq_HwqYg6vQHg2GRjX_yhJH9lEA4KQaeBeCLFZq1CsGjHm6C70yGzhsBdi7rRCGOZ3kiD3Tw7e6DZyT792Nuy0pR-bF36RxMNgMJP23b9tTXWBQSbOZYWMJJEwqWuDx4x0RmLih-ezbVvp51wwlGfYGu8vlzkxDBwZVJKfvL",
    stats: [
      {
        value: "5+",
        label: "Projects Completed",
      },
      {
        value: "1+",
        label: "Years Learning & Building",
      },
    ],
    buttonText: "Hire Me",
    buttonLink: "/contact",
  },
homeCTA: {
  title: {
    line1: "Have an Awesome Project Idea?",
    line2Start: "",
    line2Highlight: "Let's Discuss",
  },

  input: {
    placeholder: "Enter Email Address",
    buttonText: "Send",
  },

  highlights: [
    { text: "4.9/5 Average Ratings" },
    { text: "25+ Winning Awards" },
    { text: "Certified Product Designer" },
  ],
},
};
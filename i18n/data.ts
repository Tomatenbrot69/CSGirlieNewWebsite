export const constant = {
  notFoundPage: {
    text: {
      header: "404 PagenotFound",
      description: "this page doesnt exist BUT you can play minesweeper",
    },
    buttonText: "Start Game",
  },

  homePage: {
    landingPage: {
      quote: "If your dreams do not scare you, they are not big enough.",
      author: "- Ellen Johnson Sirleaf",
    },
    mission: {
      header:"Our Mission",
      description:"Our Mission is to empower Gen Z women in tech worldwide to believe in their dreams—whether that’s building a product, earning a degree, landing a job, or finding community—and to show them those dreams are not just possible, but achievable.",
      button: "ButtonText"
    },
    whatWeDo: {
      header: "What do we do?",
      title1: "Redefine Learning in Tech",
      description1:
        "Memorable and Engaging Education: We make complex tech concepts relatable by linking them to familiar, cute themes, ensuring that learning is both effective and enjoyable.",
      title2: "Redefine Community in Tech",
      description2:
        "Your Online Support Network: Connect with other Gen Z women who share your experiences, celebrate your wins, and provide support — all in one vibrant online community.",
      title3: "Redefine Diversity in Tech",
      description3:
        "Bringing Opportunities to You: We source and share internships, scholarships, and events that might otherwise go unnoticed, placing them directly in front of you on platforms you use every day.",
    },
    stats: {
      membersNum: "Members on Discord",
      verifiedMem: "Verified members",
      reach: "Total Reach",
      description: "With over 12,000 members and counting, our Discord server is a vibrant space where Gen Z women in tech can connect, support, and uplift each other. Whether you're celebrating a win, seeking advice, or just hanging out for a virtual movie night, this community is all about belonging. \n We know what it\'s like to feel alone in a male-dominated space, which is why we’ve created a place where you can find mentorship, share experiences, and build lifelong connections. It’s not just about tech—it’s about empowerment, support, and growth. Here, you\'re never alone."
    },
  },

  components: {
    scrollComp: "scroll down",
  },
} as const;

export type TextKeys = typeof constant;

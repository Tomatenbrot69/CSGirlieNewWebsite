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
    whatWeDo:{
      
    }
  },

  components: {
    scrollComp: "scroll down",
  },
} as const;

export type TextKeys = typeof constant;

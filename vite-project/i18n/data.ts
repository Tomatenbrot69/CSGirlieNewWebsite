export const constant = {

  notFoundPage: {
    text: {
      header: "404 PagenotFound",
      description: "this page doesnt exist BUT you can play minesweeper",
    },
    buttonText: "Start Game"
  },

  homePage: {
    landingPage: {
      header: "Welcome to the CS Girlie Website",
    },
  },

  components: {
    scrollComp: "scroll down",
  },

} as const;

export type TextKeys = typeof constant;

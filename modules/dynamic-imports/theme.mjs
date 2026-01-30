// Exports functions that manage the applications theme

let theme = null;

// light theme function
export const setLightTheme = () => {
  console.log("Theme: Light");
  theme = "light";
};

// dark theme function
export const setDarkTheme = () => {
  console.log("Theme: Dark");
  theme = "dark";
};

// async function `loadConfig` = dynamically imports theme.mjs and decides which to call based on hour of the day

async function loadConfig() {
  //import theme.mjs
  const theme = await import("./theme.mjs");

  // get current hour
  const currentHour = new Date().getHours();

  // call theme function based on hour
  if (currentHour < 18) {
    theme.setLightTheme();
  } else {
    theme.setDarkTheme();
  }
}

// execute func
loadConfig();

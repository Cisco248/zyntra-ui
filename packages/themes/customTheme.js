// main.js
import theme from "./customTheme.json";

document.documentElement.style.setProperty(
  "--primary-color",
  theme.primaryColor
);
document.documentElement.style.setProperty(
  "--secondary-color",
  theme.secondaryColor
);

document.documentElement.style.setProperty("--full-width", theme.wFull);

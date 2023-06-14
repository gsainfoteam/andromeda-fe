const galactic_green = "#33B687";
const galactic_purple = "#972CC9";

const galactic_red = "#B6333B";
const galactic_yellow = "#D0A025";

const colorSet = {
  galactic_green,
  galactic_purple,
  galactic_gradient_1: `linear-gradient(90deg, ${galactic_green} 0%, ${galactic_purple} 100%)`,
  galactic_gradient_1_hover: `linear-gradient(0deg, ${galactic_purple} 0%, ${galactic_green} 100%)`,

  galactic_gradient_2: `linear-gradient(0deg, ${galactic_red} 0%, ${galactic_yellow} 100%)`,

  // Neutral
  colorless: "#FFFFFF",
  titleText: "#A0A0A0",
  deselected: "#474747",
  card: "#222222",
  background: "#171717",
};

export default colorSet;

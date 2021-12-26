const fs = require("fs").promises;
const getTheme = require("./theme");
const getClassicTheme = require("./classic/theme");

const lightDefaultTheme = getTheme({
  theme: "light",
  name: "GitHub Light Default",
});

const lightColorblindTheme = getTheme({
  theme: "light_colorblind",
  name: "GitHub Light Colorblind",
});

const darkDefaultTheme = getTheme({
  theme: "dark",
  name: "GitHub Dark Default",
});

const darkDimmedTheme = getTheme({
  theme: "dimmed",
  name: "GitHub Dark Dimmed"
})

const darkHighContrastTheme = getTheme({
  theme: "hc",
  name: "GitHub Dark High Contrast"
})

const darkColorblindTheme = getTheme({
  theme: "dark_colorblind",
  name: "GitHub Dark Colorblind"
})

// Classic

const lightTheme = getClassicTheme({
  style: "light",
  name: "GitHub Light",
});

const darkTheme = getClassicTheme({
  style: "dark",
  name: "GitHub Dark",
});

// Write themes

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/light-default.json", JSON.stringify(lightDefaultTheme, null, 2)),
    fs.writeFile("./themes/light-colorblind.json", JSON.stringify(lightColorblindTheme, null, 2)),
    fs.writeFile("./themes/dark-default.json", JSON.stringify(darkDefaultTheme, null, 2)),
    fs.writeFile("./themes/dark-dimmed.json", JSON.stringify(darkDimmedTheme, null, 2)),
    fs.writeFile("./themes/dark-colorblind.json", JSON.stringify(darkColorblindTheme, null, 2)),
    fs.writeFile("./themes/dark-high-contrast.json", JSON.stringify(darkHighContrastTheme, null, 2)),
    fs.writeFile("./themes/light.json", JSON.stringify(lightTheme, null, 2)),
    fs.writeFile("./themes/dark.json", JSON.stringify(darkTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))

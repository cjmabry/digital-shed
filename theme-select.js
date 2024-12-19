const themeSelector = document.getElementById("theme");
const themeStyle = document.getElementById("theme-style");

const themes = {
  "90s": {
    body: "background-color: #c0c0c0; font-family: 'Comic Sans MS', cursive;",
    h1: "color: #ff4500; text-shadow: 2px 2px #ffcc00; border: 3px dashed #0000ff; box-shadow: 5px 5px 0px #888888;",
    projectList:
      "background: linear-gradient(to bottom, #ffffff, #d3d3d3); box-shadow: 4px 4px black inset, 4px 4px black;",
    config:
      "border: 2px solid #000; padding: 10px; background: linear-gradient(to bottom, #ffffff, #d3d3d3); box-shadow: 4px 4px black;",
    button:
      "background-color: #ffa500; color: black; border: 2px solid black; padding: 5px 15px; cursor: pointer;",
    buttonHover: "background-color: #ff4500; color: white;",
    input: "border: 2px solid black; padding: 5px; background-color: #fffacd;",
    links: "list-style-type: disc; padding-left: 40px; text-align: left;",
    linkItem: "margin: 5px 0;",
    link: "color: #0000ff; text-decoration: underline;",
    linkHover: "color: #ff4500;",
  },
  "2000s": {
    body: "background-color: #f0f0f0; font-family: Arial, sans-serif;",
    h1: "color: #333; text-shadow: none; border: none;",
    projectList: "background: #ffffff; box-shadow: 2px 2px 5px #ccc;",
    config:
      "border: 1px solid #ccc; padding: 10px; background: #ffffff; box-shadow: 2px 2px 5px #ccc;",
    button:
      "background-color: #e0e0e0; color: black; border: 1px solid #aaa; padding: 5px 15px; cursor: pointer;",
    buttonHover: "background-color: #d0d0d0; color: black;",
    input: "border: 1px solid #aaa; padding: 5px; background-color: #ffffff;",
    links: "list-style-type: circle; padding-left: 30px; text-align: left;",
    linkItem: "margin: 4px 0;",
    link: "color: #333333; text-decoration: underline;",
    linkHover: "color: #555555;",
  },
  "2010s": {
    body: "background-color: white; font-family: Helvetica, sans-serif;",
    h1: "color: #444; text-shadow: none; border-bottom: 2px solid #ccc;",
    projectList: "background: #fafafa; box-shadow: 1px 1px 3px #ddd;",
    config:
      "border: 1px solid #ddd; padding: 10px; background: #fafafa; box-shadow: 1px 1px 3px #ddd;",
    button:
      "background-color: #f5f5f5; color: black; border: 1px solid #bbb; padding: 6px 16px; cursor: pointer;",
    buttonHover: "background-color: #eeeeee; color: black;",
    input: "border: 1px solid #bbb; padding: 5px; background-color: #ffffff;",
    links: "list-style-type: square; padding-left: 30px; text-align: left;",
    linkItem: "margin: 6px 0;",
    link: "color: #666666; text-decoration: underline;",
    linkHover: "color: #888888;",
  },
  "2020s": {
    body: "background-color: #1a1a1a; color: #f5f5f5; font-family: 'Roboto', sans-serif;",
    h1: "color: #61dafb; text-shadow: none; border: none;",
    projectList:
      "background: #2a2a2a; box-shadow: 3px 3px 5px #000; color: #f5f5f5;",
    config:
      "border: 1px solid #333; padding: 12px; background: #2a2a2a; box-shadow: 3px 3px 5px #000;",
    button:
      "background-color: #333333; color: #f5f5f5; border: 1px solid #555; padding: 7px 18px; cursor: pointer;",
    buttonHover: "background-color: #444444; color: #ffffff;",
    input:
      "border: 1px solid #555; padding: 6px; background-color: #2a2a2a; color: #f5f5f5;",
    links: "list-style-type: none; padding-left: 20px; text-align: left;",
    linkItem: "margin: 8px 0;",
    link: "color: #61dafb; text-decoration: none;",
    linkHover: "color: #8ad5fb;",
  },
  future: {
    body: "background-color: #000; color: #0ff; font-family: 'Orbitron', sans-serif;",
    h1: "color: #0ff; text-shadow: 0 0 10px #0ff; border: none;",
    projectList:
      "background: #111; box-shadow: 0 0 15px #0ff inset, 5px 5px 15px #0ff;",
    config:
      "border: 2px solid #0ff; padding: 12px; background: #111; box-shadow: 0 0 15px #0ff inset, 5px 5px 15px #0ff;",
    button:
      "background-color: #0ff; color: #000; border: 2px solid #0ff; padding: 8px 20px; cursor: pointer;",
    buttonHover: "background-color: #00b7ff; color: #000;",
    input:
      "border: 2px solid #0ff; padding: 6px; background-color: #111; color: #0ff;",
    links: "list-style-type: none; padding-left: 20px; text-align: left;",
    linkItem: "margin: 10px 0;",
    link: "color: #0ff; text-decoration: none;",
    linkHover: "color: #00b7ff;",
  },
};

// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = getCookie("selectedTheme");
  if (savedTheme && themes[savedTheme]) {
    themeSelector.value = savedTheme;
    const selectedTheme = themes[savedTheme];
    themeStyle.textContent = `
        body { ${selectedTheme.body} }
        h1 { ${selectedTheme.h1} }
        .project-list { ${selectedTheme.projectList} }
        .config, .links { ${selectedTheme.config} }
        button { ${selectedTheme.button} }
        button:hover { ${selectedTheme.buttonHover} }
        input[type="text"], input[type="number"], select { ${selectedTheme.input} }
        .links ul { ${selectedTheme.links} }
        .links ul li { ${selectedTheme.linkItem} }
        a { ${selectedTheme.link} }
        a:hover { ${selectedTheme.linkHover} }
        `;
  } else {
    const selectedTheme = themes["90s"];
    themeStyle.textContent = `
        body { ${selectedTheme.body} }
        h1 { ${selectedTheme.h1} }
        .project-list { ${selectedTheme.projectList} }
        .config, .links { ${selectedTheme.config} }
        button { ${selectedTheme.button} }
        button:hover { ${selectedTheme.buttonHover} }
        input[type="text"], input[type="number"], select { ${selectedTheme.input} }
        .links ul { ${selectedTheme.links} }
        .links ul li { ${selectedTheme.linkItem} }
        a { ${selectedTheme.link} }
        a:hover { ${selectedTheme.linkHover} }
        `;
  }
});

themeSelector.addEventListener("change", () => {
  const selectedTheme = themes[themeSelector.value];
  themeStyle.textContent = `
        body { ${selectedTheme.body} }
        h1 { ${selectedTheme.h1} }
        .project-list { ${selectedTheme.projectList} }
        .config, .links { ${selectedTheme.config} }
        button { ${selectedTheme.button} }
        button:hover { ${selectedTheme.buttonHover} }
        input[type="text"], input[type="number"], select { ${selectedTheme.input} }
        .links ul { ${selectedTheme.links} }
        .links ul li { ${selectedTheme.linkItem} }
        a { ${selectedTheme.link} }
        a:hover { ${selectedTheme.linkHover} }
        `;
  setCookie("selectedTheme", themeSelector.value, 30);
});

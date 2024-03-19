const shadowTarget = document.getElementById("shadow-root-iframes");
const shadow = shadowTarget.attachShadow({ mode: "open" });

const shadowButton = document.createElement("button");
const shadowParagraph = document.createElement("p");
const shadowStyles = document.createElement("style");

const shadowIframe = document.createElement('iframe');
const shadowIframe2 = document.createElement('iframe');

shadowStyles.innerHTML = `
  p {
    color: purple;
    font-weight: bold;
  }
`;

shadowButton.type = "button";
shadowButton.innerHTML = "Click Shadow";
shadowParagraph.innerHTML = "This box is a Shadow Root. Includes Shadow DOM only, with iframe and iframe with shadow dom.";
shadowIframe.src = "http://localhost:3040/iframe-content.html";
shadowIframe2.src = "http://localhost:3040/iframe-content-shadow.html";

shadow.appendChild(shadowStyles);
shadow.appendChild(shadowButton);
shadow.appendChild(shadowParagraph);
shadow.appendChild(shadowIframe);
shadow.appendChild(shadowIframe2);

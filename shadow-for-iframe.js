const shadowTarget = document.getElementById("shadow-root-2");
const shadow = shadowTarget.attachShadow({ mode: "open" });

const shadowParagraph = document.createElement("p");
const shadowStyles = document.createElement("style");


shadowStyles.innerHTML = `
  p {
    color: red;
    font-weight: bold;
  }
`;

shadowParagraph.innerHTML = "Shadow Paragraph";

shadow.appendChild(shadowStyles);
shadow.appendChild(shadowParagraph);

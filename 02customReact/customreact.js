function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.childern;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);

  for (const prop in reactElement.props) {
    if (prop === "childern") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}

// react create a object like this to jsx
const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  childern: "Click me to visit google.",
};

const mainContainer = document.querySelector("#root");

// then  the custom hook renders the object in the container
customRender(reactElement, mainContainer);

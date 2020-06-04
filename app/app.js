const input = document.querySelector('.switch__input');
const headLinks = document.head.getElementsByTagName('link');
let styleLink;
for (i = 0; i < headLinks.length; i++) {
     if (headLinks[i].attributes.rel.value === "stylesheet") {
          styleLink = headLinks[i];
     }
}

input.addEventListener('click', changeTheme);

function changeTheme() {
     if (input.checked) {
          styleLink.attributes.href.value = "styles/mode-light.css";
     } else {
          styleLink.attributes.href.value = "styles/mode-dark.css";
     }
}
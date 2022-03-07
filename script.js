const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const logo = document.querySelector(".logo");
const nav = document.querySelector(".navbar");
const body = document.body;
const menuParent = document.querySelector(".list-item");
const subMenuParent = document.querySelector(".sub-menu_list");
const input = document.querySelector("input");
const errorTxt = document.querySelector(".Error");

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  logo.classList.toggle("active");
  nav.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
  logo.classList.remove("active");
  body.classList.remove("noscroll");
}

const cards = [
  {
    img: "./image/spring-boot.svg",
    alt: "spring-boot",
    name: "Spring Boot",
    text: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible",
  },
  {
    img: "./image/spring-framework.svg",
    alt: "Spring Framework",
    name: "Spring Framework",
    text: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
  },
  {
    img: "./image/spring-data.svg",
    alt: "Spring Data",
    name: "Spring Data",
    text: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
  },
  {
    img: "./image/spring-cloud.svg",
    alt: "Spring Cloud",
    name: "Spring Cloud",
    text: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
  },
  {
    img: "./image/spring-cloud.svg",
    alt: "Spring Cloud Data Flow",
    name: "Spring Cloud Data Flow",
    text: "Provides an orchestration service for composable data microservice applications on modern runtimes.",
  },
  {
    img: "./image/spring-security.svg",
    alt: "Spring Security",
    name: "Spring Security",
    text: "Protects your application with comprehensive and extensible authentication and authorization support.",
  },
];

let parent = document.querySelector(".flex-wrap");

function cardRender(renderItem) {
  const newParent = document.createElement("div");
  newParent.classList.add("flex-wrap");

  renderItem.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("box");
    element.innerHTML = `
    <div class="box-wrapper">
    <div class="img-cont">
      <img src=${item.img} alt=${item.alt}>
    </div>
    <div class="flex-text">
      <h2 class="name">
        ${item.name}
      </h2>
      <span>${item.text}</span>
    </div>
    `;
    newParent.append(element);
  });

  parent.replaceWith(newParent);
  parent = newParent;
}

cardRender(cards);

function cardsSearch(search) {
  let result = [];
  if (search != "") {
    cards.forEach((elem) => {
      if (elem.name.search(search) !== -1 || elem.text.search(search) !== -1) {
        result.push(elem);
        cardRender(result);
        errorTxt.style.display = "none";
      } else if (result.length == 0 || search =="") {
        errorTxt.style.display = "block";
        cardRender(result);
      }
    });
  }
}
let timeoutId=0;
input.addEventListener("keyup", () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(()=>{
    cardsSearch(input.value);
  }, 0,3);
});
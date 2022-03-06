const hamb = document.querySelector("#hamb"),
      popup = document.querySelector("#popup"),
      menu = document.querySelector("#menu").cloneNode(1),
      logo = document.querySelector(".logo"),
      nav = document.querySelector(".navbar"),
      body = document.body,
      parent = document.querySelector(".flex-wrap"),
      menuParent = document.querySelector(".list-item"),
      subMenuParent = document.querySelector(".sub-menu_list"),
      input = document.querySelector("input"),
      btn = document.querySelector(".btn"),
      parentElements = document.querySelectorAll(".Error"),
      errorTxt = document.querySelector(".Error");

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



let cards = [
  {
    img: "./image/spring-boot.svg",
    alt: "spring-boot",
    name: "Spring Boot",
    text: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible",
  },
  {
    img: "./image/spring-boot.svg",
    alt: "spring-boot",
    name: "Spring Boot",
    text: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible",
  },
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



function search(search) {
  const text = "There is no such results";

  let result = cards.filter((val) => {
    return val.name == search;
  });

  if (result.length == 0 && input.value != "") {
    /* const element = document.createElement("div");
    element.classList.add("Error");
    element.innerHTML = `
    ${text}
    `;
    errorTxt.replaceWith(element); */
    errorTxt.style.display='block';
  } else simpleRender(result);
}
setTimeout(() => {
  input.addEventListener("keyup", () => {
    search(input.value);
  });
}, 3000);

function simpleRender(qwe) {

  errorTxt.style.display='none';
  
  qwe.forEach((item) => {
   
        
    const element = document.createElement("div");

    element.innerHTML = `
    <div class="box ">
    <div class="box-wrapper">
    <div class="img-cont">
      <img src=${item.img} alt=${item.alt}>
    </div>
    <div class="flex-text">
      <h2>
        ${item.name}
      </h2>
      <span>${item.text}</span>
    </div>
    </div>
    `;
    /* errorTxt.remove(); */
   
    /*  errorTxt.replaceWith(element); */
    parent.append(element);
  });
  console.log(qwe);
}

function cardRender(renderItem) {
  const newParent = document.createElement("div");
  newParent.classList.add("flex-wrap");

  renderItem.forEach((item) => {
    const element = document.createElement("div");

    element.innerHTML = `
    <div class="box ">
    <div class="box-wrapper">
    <div class="img-cont">
      <img src=${item.img} alt=${item.alt}>
    </div>
    <div class="flex-text">
      <h2>
        ${item.name}
      </h2>
      <span>${item.text}</span>
    </div>
    </div>
    `;
    newParent.append(element);
  });
  parent.replaceWith(newParent);
  console.log("work cardrender");
}

btn.addEventListener("click", () => {
  cardRender(cards);
});
// let URL = `http://localhost:8000`;
let URL = `https://stepup-field.onrender.com`;
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
};

async function fetch_product() {
  let req = await fetch(`${URL}/users`);
  let res = await req.json();
  let product_details = document.querySelector(".sales-details");
  let productData = res;
  console.log(productData);
  product_details.innerHTML = productData
    .map((el) => {
      return `<div class="card">
      <div class="img"><img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" ></div>
        <div>
            <p><span class="name"> Name:- </span><span class="ans-name">${el.name}</span></p>
           
            <p><span class="name">email:- </span> ${el.email}</p>
            <p><span class="name">Phone No:- </span>${el.phoneNo}</p>
            <p><span class="name">password:- </span>***********</p>
            <p><span class="name">Gender:- </span>${el.gender}</p>
        </div>
    </div>`;
    })
    .join("");
}
fetch_product();
let admin_name = document.getElementById("admin_name");
let login_name = JSON.parse(localStorage.getItem("login_name")) || [];
admin_name.innerText = login_name;
console.log(login_name);

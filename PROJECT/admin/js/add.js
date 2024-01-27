// lấy Elemnet form : getElementById, getElementsByTagName, getElementsByClassName

window.addEventListener("DOMContentLoaded", init);

function init() {
  form.addEventListener("submit", handleSumit);
}
const form = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const descriptionElement = document.getElementById("description");
const PriceElement = document.getElementById("price");

const categoryElement = document.getElementById("category");

function handleSumit(event) {
  event.preventDefault();
// 2. lấy dữ liệu từ form
  const title = titleElement.value;
  const image = imageElement.value;
  const description = descriptionElement.value;
  const price = PriceElement.value;
  const category = categoryElement.value;

  console.log({title, image, description, price, category});

  //  tao bien luu tru du lieu
  const newProdcut = {
    title,
    image,
    description,
    price,
    category:Number(price) ,
  };
  console.log(newProdcut);

  // check validate
  if(!title || !image || !description || !price || !category) {
    alert("Vui lòng nhập thong tin sản phẩm");
    return;
  }

  
//4. gửi dữ liệu lên server call api post json server : localhost:3000/products,newProdcut



}

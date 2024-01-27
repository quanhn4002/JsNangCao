// lấy Elemnet form : getElementById, getElementsByTagName, getElementsByClassName

const form = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const descriptionElement = document.getElementById("description");
const PriceElement = document.getElementById("price");

const categoryElement = document.getElementById("category");
let productid = null;


window.addEventListener("DOMContentLoaded", init);

function init() {
  form.addEventListener("submit", handleSumit);
  getproductId();
}

function getproductId() {
    // 1. Extract product ID from the URL
    const productId = window.location.search.split("=")[1];
    console.log("Product ID:", productId);

    // 2. Hardcoded data for demonstration (replace this with actual API call)
    const productData = {
        title: "Example Product",
        image: "example.jpg",
        description: "This is an example product description.",
        price: "100",
        category: "maytinh"
    };
    console.log("Product Data:", productData);

    // 3. Populate form fields with retrieved product data
    titleElement.value = productData.title;
    imageElement.value = productData.image;
    descriptionElement.value = productData.description;
    PriceElement.value = productData.price;
    categoryElement.value = productData.category;
}



function handleSumit(event) {
    event.preventDefault();
    
    // Lấy dữ liệu từ form
    const title = titleElement.value;
    const image = imageElement.value;
    const description = descriptionElement.value;
    const price = PriceElement.value;
    const category = categoryElement.value;

    // Kiểm tra validate
    if (!title || !image || !description || !price || !category) {
        alert("Vui lòng nhập thông tin sản phẩm");
        return;
    }

    // Tạo một đối tượng chứa dữ liệu sản phẩm
    const newProduct = {
        title,
        image,
        description,
        price : Number(price),
        category
    };

    console.log(newProduct); // Kiểm tra dữ liệu mới trước khi gửi đi
    if(!title || !image || !description || !price || !category) {
        alert("Vui lòng nhập thong tin sản phẩm");
        return;
      }
    // Tiếp tục xử lý dữ liệu hoặc gửi dữ liệu đi tại đây
}

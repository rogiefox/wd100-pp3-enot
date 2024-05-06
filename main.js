let main_image = document.querySelector("#main-image")
let galleryImages = document.querySelectorAll(".gallery-images")

const imageChange = (e) => {
    let imgAttr = e.target.getAttribute("src");
    main_image.setAttribute("src", imgAttr);
};

galleryImages.forEach(images =>{
    images.addEventListener("click", imageChange)
});
// Changing Images

let acerContainer = document.querySelector("#acer-container");
let itemContainer = document.querySelector("#item-container");
let cartContainer = document.querySelector("#cart-container");


const addToCart = (image, name, price) =>{
    
    cartItems.push({cart_image: image, cart_name: name, cart_price: price});
    localStorage.setItem("shopping_cart", JSON.stringify(cartItems));
    showCart();
}

const showCart = () => {
    let x = 0
    cartContainer.innerHTML = "";
    cartItems.forEach((cart) => {
        cartContainer.innerHTML += `
            <tr>
                <td class="table-danger">
                    <img src="${cart.cart_image}" alt="" width = "100" class="rounded">
                </td>
                <td class="table-danger fw-bold justify-content-center">
                    ${cart.cart_name}
                </td>
                <td class="table-danger fw-bold">
                    ${cart.cart_price}
                </td>
                <td class="table-danger">
                    <button class = "btn btn-outline-warning text-dark fw-bold" onclick = "removeItem(${x++})">Delete</button>
                </td>  
            </tr>
        `;
    })
};


const removeItem =(close) => {
    cartItems.splice(close, 1);
    localStorage.setItem("shopping_cart", cartItems);
    showCart();
};


const showProduct = () => {
    items.forEach((item) => {
        itemContainer.innerHTML += `
        <div class="col-md-4 rounded">
                    <div class="card h-100 shadow">
                        <img src="${item.product_image}" class="card-img">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">
                                ${item.product_name}
                            </h5>
                            <h6 class="fw-bold">${item.product_price}</h6>
                            <p class="card-text fw-bold">
                                ${item.product_dec}
                            </p>
                        </div>
                        <div class="card-footer bg-transparent text-start border-white text-warning">
                            <button class="btn btn-outline-warning text-dark fw-bold" onclick="addToCart('${item.product_image}','${item.product_name}','${item.product_price}');">Add to cart</button>
                            <div class="card-footer bg-transparent text-start border-white text-warning ">
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i> 
                                <i class="fa-regular fa-star"></i>
                            </div>   
                        </div>
                    </div>    
            </div>
        `;
    })
};

const filterSearch = (e) => {
    
    itemContainer.innerHTML = "";
    const searchString = document.querySelector("#search-item").value.toLowerCase();
    const filterSearch = items.filter(value => {
        return value.product_name.toLowerCase().includes(searchString);
    });
    // console.log(filterSearch[index]);
    if (filterSearch.length > 0){
        for(let index = 0; index < filterSearch.length; index++){
            itemContainer.innerHTML += `
            <div class="col-md-4">
                        <div class="card h-100 shadow">
                            <img src="${filterSearch[index].product_image}" class="card-img">
                            <div class="card-body">
                                <h5 class="card-title fw-bold">
                                    ${filterSearch[index].product_name}
                                </h5>
                                <h6 class="fw-bold">${filterSearch[index].product_price}</h6>
                                <p class="card-text fw-bold">
                                    ${filterSearch[index].product_dec}
                                </p>
                            </div>
                            <div class="card-footer bg-transparent text-start border-white text-warning">
                                <button class="btn btn-outline-warning text-dark fw-bold" onclick="addToCart('${filterSearch[index].product_image}','${filterSearch[index].product_name}','${filterSearch[index].product_price}');">Add to cart</button>
                                <div class="card-footer bg-transparent text-start border-white text-warning ">
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i> 
                                    <i class="fa-regular fa-star"></i>
                                </div>   
                            </div>
                        </div>    
                </div>
            `;
        }
    }
    else {
        itemContainer.innerHTML = `<h5>Item Not Found</h5>`;
    }
};

const showAcer = () => {
    itemAcer.forEach((item1) => {
        acerContainer.innerHTML += `
        <div class="col-md-4 rounded">
                    <div class="card h-100 shadow">
                        <img src="${item1.product_image}" class="card-img">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">
                                ${item1.product_name}
                            </h5>
                            <h6 class="fw-bold">${item1.product_price}</h6>
                            <p class="card-text fw-bold">
                                ${item1.product_dec}
                            </p>
                        </div>
                        <div class="card-footer bg-transparent text-start border-white text-warning">
                            <button class="btn btn-outline-warning text-dark fw-bold" onclick="addToCart('${item1.product_image}','${item1.product_name}','${item1.product_price}');">Add to cart</button>
                            <div class="card-footer bg-transparent text-start border-white text-warning ">
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i> 
                                <i class="fa-regular fa-star"></i>
                            </div>   
                        </div>
                    </div>    
            </div>
        `;
        
    })
    
};

const productSearch = (e) => {
    
    acerContainer.innerHTML = "";
    const searchString = document.querySelector("#search-product").value.toLowerCase();
    const productSearch = itemAcer.filter(value => {
        return value.product_name.toLowerCase().includes(searchString);
    });
    // console.log(filterSearch[index]);
    if (productSearch.length > 0){
        for(let index = 0; index < productSearch.length; index++){
            acerContainer.innerHTML += `
            <div class="col-md-4">
                        <div class="card h-100 shadow">
                            <img src="${productSearch[index].product_image}" class="card-img">
                            <div class="card-body">
                                <h5 class="card-title fw-bold">
                                    ${productSearch[index].product_name}
                                </h5>
                                <h6 class="fw-bold">${productSearch[index].product_price}</h6>
                                <p class="card-text fw-bold">
                                    ${productSearch[index].product_dec}
                                </p>
                            </div>
                            <div class="card-footer bg-transparent text-start border-white text-warning">
                                <button class="btn btn-outline-warning text-dark fw-bold" onclick="addToCart('${productSearch[index].product_image}','${productSearch[index].product_name}','${productSearch[index].product_price}');">Add to cart</button>
                                <div class="card-footer bg-transparent text-start border-white text-warning ">
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i> 
                                    <i class="fa-regular fa-star"></i>
                                </div>   
                            </div>
                        </div>    
                </div>
            `;
        }
    }
    else {
        acerContainer.innerHTML = `<h5>Item Not Found</h5>`;
    }
};



showAcer(); 
showCart();






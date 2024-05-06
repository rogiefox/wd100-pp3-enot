const items = [
    {
        product_no: 1,
        product_name: "Machcreator-A i5 (8GB)",
        product_price: "&#8369;24,500.00",
        product_dec: "Model Name: Machcreator-A",
        product_image: "img/product-item/bestseller1.jpg"

    },
    {
        product_no: 2,
        product_name: "IPASON P3 Notebook i3 (1TB)",
        product_price: "&#8369;23,995.00",
        product_dec: "Model Name: PASON P3 Notebook i3",
        product_image: "img/product-item/bestseller2.jpg"

    },
    {
        product_no: 3,
        product_name: "Gigabyte G5 KF-E3PH333SH",
        product_price: "&#8369;56,995.00",
        product_dec: "Model Name: Gigabyte G5 KF-E3PH333SH",
        product_image: "img/product-item/bestseller3.jpg"

    },
    {
        product_no: 4,
        product_name: "Lenovo Ideapad 1 14AMN7 82VF0094PH",
        product_price: "&#8369;24,995.00",
        product_dec: "Model Name: Lenovo Ideapad 1 14AMN7 82VF0094PH",
        product_image: "img/product-item/bestseller4.jpg"

    },
    {
        product_no: 5,
        product_name: " Lenovo Ideapad 3 15IAU7",
        product_price: "&#8369;24,495.00",
        product_dec: "Model Name: Lenovo Ideapad 3 15IAU7 82RK00WKPH",
        product_image: "img/product-item/bestseller7.jpg"

    },
    {
        product_no: 6,
        product_name: "Machcreator-A i5 (8GB)",
        product_price: "&#8369;39,995.00",
        product_dec: "Model Name: Machenike F117-7 i5",
        product_image: "img/product-item/bestseller6.jpg"

    },
];




const itemAcer = [
    {
        product_no: 1,
        product_name: "Acer Aspire Lite",
        product_price: "&#8369;25,500.00",
        product_dec: "Acer Aspire Lite AL14-31P-35XW",
        product_image: "img/acerbrand/acer-1.jpg"
        
    },
    {
        product_no: 2,
        product_name: "Acer Aspire Lite",
        product_price: "&#8369;31,995.00",
        product_dec: "Acer Aspire Lite AL15-51M-55R1",
        product_image: "img/acerbrand/acer-2.jpg"
        
    },
    {
        product_no: 3,
        product_name: "Acer Aspire Lite",
        product_price: "&#8369;37,995.00",
        product_dec: "Acer Aspire Lite AL15-51M-773W",
        product_image: "img/acerbrand/acer-3.jpg"
        
    },
    {
        product_no: 4,
        product_name: "Acer Aspire Vero",
        product_price: "&#8369;38,995.00",
        product_dec: "Acer Aspire Vero AV15-53P-58T2",
        product_image: "img/acerbrand/acer-4.jpg"
        
    },
    {
        product_no: 5,
        product_name: "Acer Nitro 5",
        product_price: "&#8369;64,995.00",
        product_dec: "Acer Nitro 5 AN515-58-78A6",
        product_image: "img/acerbrand/acer-5.jpg"
        
    },
    {
        product_no: 6,
        product_name: "Acer Travelmate",
        product_price: "&#8369;64,995.00",
        product_dec: "ACER TRAVELMATE P2 TMP214-53-3891",
        product_image: "img/acerbrand/acer-6.jpg"
        
    },                  
];


let cartItems = [];

if(localStorage.getItem("shopping_cart")){
    cartItems = JSON.parse(localStorage.getItem("shopping_cart"))
};
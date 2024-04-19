document.addEventListener('DOMContentLoaded', function () {
    const listItem = [
        { imageURL: "IMG/phuongcongnguyen.jpg", name: "Nguyên Bần Hèn (Hạ)", price: 500, des: "Mo ta san pham" },
        { imageURL: "IMG/phuongcongnguyen.jpg", name: "San pham 2", price: 1000, des: "Mo ta san pham" },
        { imageURL: "IMG/phuongcongnguyen.jpg", name: "San pham 3", price: 1500, des: "Mo ta san pham" },
        { imageURL: "IMG/phuongcongnguyen.jpg", name: "San pham 4", price: 50, des: "Mo ta san pham" },
        { imageURL: "IMG/phuongcongnguyen.jpg", name: "San pham 4", price: 50, des: "Mo ta san pham" }
    ];

    const listItemEl = document.getElementById('list-item');
    listItemEl.style.display = "flex";
    listItemEl.style.flexWrap = "wrap";
    listItemEl.style.justifyContent = "space-around";
    listItemEl.style.background = "linear-gradient(to right, #6a11cb, #2575fc) ";
    listItemEl.style.padding = "20px";

    listItem.forEach(el => {
        const item = document.createElement('div');
        item.style.width = "260px";
        item.style.margin = "10px";  
        item.style.border = "1px solid #eee";
        item.style.borderRadius = "10px";
        item.style.overflow = "hidden";
        item.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
        item.style.transition = "transform 0.3s ease";

        item.onmouseover = function() { item.style.transform = "translateY(-5px)"; };
        item.onmouseout = function() { item.style.transform = "translateY(0px)"; };

        const img = document.createElement('img');
        img.src = el.imageURL;
        img.style.width = "100%";
        img.style.height = "240px"; 
        img.style.objectFit = "cover";

        const name = document.createElement('p');
        name.textContent = el.name;
        name.style.padding = "10px";
        name.style.margin = "0";
        name.style.backgroundColor = "#f8f8f8";
        name.style.textAlign = "center";

        const price = document.createElement('p');
        price.textContent = `${el.price} VND`;
        price.style.padding = "10px";
        price.style.margin = "0";
        price.style.backgroundColor = "#f1f1f1";
        price.style.textAlign = "center";
        if (el.price === 1500) {
            price.style.color = "red";
        }

        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = "flex";
        buttonContainer.style.padding = "10px";

        const buyBtn = createButton('Mua ngay', 'rgb(239 109 202)');
        const addToCartBtn = createButton('Thêm vào giỏ hàng', '#ff7f50');

        buttonContainer.appendChild(buyBtn);
        buttonContainer.appendChild(addToCartBtn);

        item.appendChild(img);
        item.appendChild(name);
        item.appendChild(price);
        item.appendChild(buttonContainer);

        listItemEl.appendChild(item);
    });

    function createButton(text, bgColor) {
        const button = document.createElement('button');
        button.textContent = text;
        button.style.flex = "1";
        button.style.margin = "5px";
        button.style.padding = "10px";
        button.style.border = "none";
        button.style.borderRadius = "5px"; 
        button.style.cursor = "pointer";
        button.style.backgroundColor = bgColor;
        button.style.color = "white";
        button.style.transition = "background-color 0.3s, transform 0.2s, box-shadow 0.2s, border-radius 0.2s";

        button.onmouseover = function() {
            button.style.backgroundColor = "#9b59b6"; 
            button.style.transform = "scale(1.1)";
            button.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
            button.style.borderRadius = "20px"; 
        };
        button.onmouseout = function() {
            button.style.backgroundColor = bgColor;
            button.style.transform = "scale(1)";
            button.style.boxShadow = "none";
            button.style.borderRadius = "5px";
        };

        return button;
    }
});

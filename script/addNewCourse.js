'use strict'


const productTable = document.querySelector('.product-list');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpeModal = document.querySelectorAll('.show-modal');
const btnSave = document.querySelector('#save');
const kursnummerIdInput = document.querySelector('#kursnummerIdInput');
const kursnummerInput = document.querySelector('#kursnummerInput');
const kursBeskrivningInput = document.querySelector('#kursBeskrivningInput');
const kursTitelInput = document.querySelector('#kursTitelInput');
const kursLängdInput = document.querySelector('#kursLängdInput');
const kursKategoriInput = document.querySelector('#kursKategoriInput');
const kursPrisInput = document.querySelector('#kursPrisInput');


//MODAL

for (let i = 0; i < btnsOpeModal.length; i++) btnsOpeModal[i].addEventListener('click', function() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
});

const closeModal = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
	if(e.key === "Escape") {
        if(!modal.classList.contains('hidden')) {
            closeModal();
        }
	}    
});

//ADD COURSE
const addProduct = () => {
    const product = 
        {
            id: Number(kursnummerIdInput.value),
            courseNumber: Number(kursnummerInput.value),
            title: kursTitelInput.value,
            description: kursBeskrivningInput.value,
            courseLength: Number(kursLängdInput.value),
            category: kursKategoriInput.value,
            price: Number(kursPrisInput.value),
            img: "./content/img/newCourse_logo1.png"
        }
    ;
    products.push(product);
    createTable(products);
};

function createTable(productList){
    productTable.innerHTML = '';
    for( let product of productList){
        createRow(product);
    }
};


btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    addProduct();
    closeModal()
});

function createRow(product){
    productTable.insertAdjacentHTML('beforeend',
    `<div class = "product-item">
        <div class = "product-img">
            <img src = "${product.img}" alt = "product image">
            <button type = "button" class = "add-to-cart-btn">
                <i class = "fas fa-shopping-cart"></i>Lägg till i kundvagn
            </button>
        </div>
        <div class = "product-content">
            <h3 class = "product-name">${product.title}</h3>
            <span class = "product-code">Kurskod: ${product.courseNumber}</span>
            <p class = "product-price">${product.price} kr</p>
        </div>
    </div>
     `);
};

createTable(products);











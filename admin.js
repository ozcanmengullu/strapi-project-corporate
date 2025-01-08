document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan davranışını engelle

    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productImage = document.getElementById('productImage').value;

    // Ürün bilgilerini dinamik olarak listeye ekle
    const productList = document.getElementById('productList');
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    productItem.innerHTML = `
        <h3>${productName}</h3>
        <p>${productDescription}</p>
        <img src="${productImage}" alt="${productName}" />
    `;
    productList.appendChild(productItem);

    // Formu temizle
    event.target.reset();
});

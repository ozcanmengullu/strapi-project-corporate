document.addEventListener('DOMContentLoaded', () => {
    // Tüm menü öğelerini seçiyoruz
    const menuItems = document.querySelectorAll('.dropdown-item'); 
  
    menuItems.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault(); // Sayfanın yeniden yüklenmesini engelliyoruz
  
        // Tıklanan öğenin data-id değerini alıyoruz
        const productId = this.getAttribute('data-id');
        
        // Yönlendirme URL'sini oluşturuyoruz
        const productPageUrl = `product.html?productId=${productId}`;
  
        // Sayfayı yeni URL'ye yönlendiriyoruz
        window.location.href = productPageUrl;
      });
    });
  });

  // Menü öğesine tıklama işlemini dinle
const menuItems = document.querySelectorAll('.dropdown-item');

menuItems.forEach(item => {
  item.addEventListener('click', function(event) {
    // Tıklanan menü öğesinin data-id'sini al
    const productId = event.target.getAttribute('data-id');
    const productName = event.target.textContent; // Menüdeki metin

    // URL'yi dinamik olarak oluştur
    const productUrl = `product.html?product=${productId}`;

    // Sayfayı uygun ürüne yönlendirmek
    window.location.href = productUrl;

    // Başlık metnini değiştirmek için yerel depolama ya da bir başka yöntem kullanılabilir
    localStorage.setItem('productName', productName);
  });
});
  
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  const menu_btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  
  menu.style.display = "none";
  
  menu_btn.addEventListener("click", function (e) {
    e.stopPropagation(); // Butona tıklarken body'e gitmesin
    menu.style.display = "block";
  });
  
  // Menüye tıklayınca kapanmasın
  menu.addEventListener("click", function (e) {
    e.stopPropagation();
  });
  
  // Sayfanın herhangi boş bir yerine tıklanınca menüyü kapat
  document.addEventListener("click", function (e) {
    // Eğer tıklanan şey ne menu ne de menu_btn ise kapat
    if (!menu.contains(e.target) && !menu_btn.contains(e.target)) {
      menu.style.display = "none";
    }
  });
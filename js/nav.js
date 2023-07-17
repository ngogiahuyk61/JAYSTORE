const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
        <div class="nav">
        <img src="img/logo-store.png" class="brand-logo" alt="">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn">search</button>
            </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
                <li class="link-item"><a href="#" class="link">HOME</a></li>
                <li class="link-item"><a  class="link" onclick="scrollToSection('section1')" >VAPE</a></li>
                <li class="link-item"><a  class="link" onclick="scrollToSection('section2')">POD</a></li>
                <li class="link-item"><a  class="link">ESSENTIAL OIL Vape</a></li>
                <li class="link-item"><a  class="link">TRADEMARK</a></li>
        </ul>
    `;
}

createNav();
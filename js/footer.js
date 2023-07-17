const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/logo-store.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Vape</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>                    
        </ul>
        <ul class="category">
            <li class="category-title">pod</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>                    
        </ul>               
    </div>
</div>
<p class="footer-title">about store</p>
<p class="info">
    Vape stores offer a range of benefits for vaping enthusiasts. Firstly, these stores provide a dedicated 
    space where customers can explore and select from a wide variety of vape products, including e-liquids,
    devices, and accessories. The knowledgeable staff in vape stores can offer guidance and recommendations
    based on individual preferences and needs, ensuring customers find the right products for their vaping 
    experience.Another advantage of vape stores is the opportunity to sample different flavors before making 
    a purchase.This allows customers to try out new and exciting e-liquid flavors, ensuring they find ones 
    that suit their taste preferences.Additionally, vape stores often carry a diverse selection of brands,
    giving customers access to a wider range of flavors and options.</p>
    <p class="info">support emails - help@clothing.com,
        customersupport@clothing.com</p>
    <p class="info">telephone - 180 00 00 001,180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
</div>
<p class="footer-credit">Vape To The Next Level - Experience Excellence!</p>

    `;
}

createFooter();
<template>
    <footer>

       <div class="row">
            <div class="col-3">                
                    <p class="footer-cat-links">Welcome to our pet shop, where you'll find an incredible selection of furry friends, high-quality products, and everything you need to make your pet's tail wag with joy!</p>
            </div>
            <div class="col-3">
                <div class="link-cat" onclick="footerToggle(this)">
                    <span class="footer-toggle"></span>
                    <span class="footer-cat">Quick Links</span>
                </div>
                <ul class="footer-cat-links">
                    <li><a href=""><span>Health Advice</span></a></li>
                    <li><a href=""><span>Dogs Products</span></a></li>
                    <li><a href=""><span>Cats Products</span></a></li>
                    <li><a href=""><span></span>Bird Products</a></li>
                </ul>
            </div>
            <div class="col-3">
                <div class="link-cat" onclick="footerToggle(this)">
                    <span class="footer-toggle"></span>
                    <span class="footer-cat">Quick Links</span>
                </div>
                <ul class="footer-cat-links">
                    <li><a href=""><span>Home</span></a></li>
                    <li><a href=""><span>About Us</span></a></li>
                    <li><a href=""><span>Products</span></a></li>
                    <li><a href=""><span>Contact Us</span></a></li>
                </ul>
            </div>
            <div class="col-3" id="newsletter">
                <span>Stay Connected</span>
                <form id="subscribe">
                    <input type="email" id="subscriber-email" placeholder="Enter Email Address" disabled>
                    <input type="submit" value="Subscribe" id="btn-scribe"/>
                </form>      
            </div>
       </div>
       <div id="copyright">
           &copy; All Rights Reserved 2023   Designed by <a href="">K.B.M. Pubudu Deepamal</a>
       </div>
    </footer>     
</template>
    
<script>
    export default {
      name: 'footersection'
  
    }
</script>
    
<style src="../assets/style/style.css" scoped></style>

<style scoped>
.col-3{
    text-align: center;
}

@media (max-width: 800px){
    footer .logo{
    margin-left: 38%;
}
}

@media (min-width: 1200px){
    footer .logo{
    margin-left: 8%;
}
}
</style>
  
  
  
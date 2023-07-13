<template>

    <!-- About Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="about-img position-relative overflow-hidden p-5 pe-0">
                        <img class="img-fluid w-100" src="/src/assets/img/about.png" data-v-89133d6f="" alt="JackPets">
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 class="display-5 mb-4"><b>Welcome to JackPets!</b></h1>
                    <p class="mb-4">At JackPets, we are passionate about connecting families with their perfect pets and providing exceptional care for our furry friends. We understand the joy and companionship that pets bring into our lives, and we strive to create a warm and inviting environment where both pets and pet owners feel valued and supported.</p>
                    <h3 class="display-5 mb-4"> <b>Our Commitment to Quality:</b></h3>
                    <p class="me-3">Healthy and Happy Pets: We prioritize the health and well-being of all our animals. Our pets are sourced from reputable breeders, rescue organizations, and shelters to ensure that they receive the best care from the beginning. Each pet undergoes thorough health checks and vaccinations to ensure they are in optimal condition.</p>
                    <p class="me-3">Premium Products and Services: In addition to pets, we offer a comprehensive selection of high-quality pet supplies, including food, toys, bedding, grooming essentials, and more. We carefully curate our inventory to ensure that our customers have access to the best products on the market. We also provide additional services like grooming, training, and veterinary referrals to help you meet your pet's specific needs.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->

    <!-- Feature Start -->
    <div class="container-fluid bg-light bg-icon py-6">
        <div class="container">
            <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <h1 class="display-5 mb-3"><b>Why choose us</b></h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="bg-white text-center h-100 p-4 p-xl-5">
                        <h4 class="mb-3">New product update</h4>
                        <p class="mb-4">We know how important newness is in the pet trade. That’s why we bring you new product launches every month.</p>
                        <button class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"><RouterLink to="/notfound">Read More</RouterLink></button>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="bg-white text-center h-100 p-4 p-xl-5">
                        <h4 class="mb-3">Fast Shipping Service</h4>
                        <p class="mb-4">Most of our products can be customized. You can modify to suit your client’s preferences.</p>
                        <button class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"><RouterLink to="/notfound">Read More</RouterLink></button>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="bg-white text-center h-100 p-4 p-xl-5">
                        <h4 class="mb-3">Everyone Customized</h4>
                        <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                        <button class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"><RouterLink to="/notfound">Read More</RouterLink></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Feature End -->
    
</template>
  
<script>
export default {
  name: 'aboutus',
}
</script>
  
<style src="../assets/style/style.css" scoped></style>

<style scoped>

@media (min-width: 1200px)
{
    .p-xl-5 {
        padding: 2rem !important;
    }
}

.py-6{
    padding-top: 1rem;
    padding-bottom: 3rem;
}

.btn.btn-primary .btn.btn-secondary .btn.btn-outline-primary:hover .btn.btn-outline-secondary:hover {
    color: #FFFFFF;
    background: #f0d8b6;
    border-color: #f0d8b6;
}

.btn-outline-primary {
    --bs-btn-color: black;
    --bs-btn-border-color:#f0d8b6;
}

.p-5 {
    padding: 0rem !important;
}

#textcolour{
    color: #FFFFFF;
}

.g-5, .gx-5 {
    margin-top: 30px;
}

h1{
    padding-top: 40px;
}

.bg-light {
    padding-bottom: 50px;
}

.mb-4 {
    text-align: center;
    font-family: emoji;
}

.me-3 {
    text-align: center;
    font-family: emoji;
}

.btn:hover{
    background:#f0d8b6;
    color: black;
    border: black;
}

.p-xl-5 {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
}

a {
    color: #050606;
    text-decoration: unset;
}

</style>
  
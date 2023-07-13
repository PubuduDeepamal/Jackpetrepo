<template>

    <div id="scolour">
    <br>
    <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
              <h2 id="producttittle" style="font-size: 50px;"><b> Product Offers</b></h2>
    </div>
  
    <div class="container mx-auto max-w-2xl md:py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="row row-cols-1 gap-4 gap-lg-5">
        <div v-for="offers in offers" :key="offers.id" class="col mb-4">
          <div class="group hover:scale-105 delay-150 rounded1 shadow1 product-card"        >
            <div class="overflow-hidden h-60 rounded1-md lg:aspect-none d-flex align-items-center justify-content-center mx-auto group-hover:opacity-75">
              <img :src="offers.imageSrc" :alt="offers.imageAlt" class="img-fluid h-60 object-fit-center" />
            </div>
  
                <p class="prdoutdetailseliment"> <b>{{ offers.name }} {{ offers.offer }}</b></p>
                <p class="prdoutdetailseliment">Old Price :  {{ offers.price }}</p>
                <p class="prdoutdetailseliment">New Price :<b>{{ offers.newprice }}</b></p>
                <button class="btn btn-primary w-100 py-1 px-4 rounded1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="BuyButton">
                <b> Buy Now</b>
                </button>
          </div>
        </div>
      </div>
    </div>
</div>
<br>
  </template>
  
  <script>
  import offersMain from '../assets/json/offers.json'

  
    export default {
        name: "ProductCardMain",
        data(){ 
            return { 
                offers: offersMain,
            };
        },
    }
  </script>
  
  <style lang="scss" scoped>
  
  .row-cols-1 > * {
      flex: 275px;
      width: 100%;
  }
  
  #BuyButton{
    background:white;
    border-color: #f0d8b6;
    color: black;
  }
  
  #BuyButton:hover{
      background:#f0d8b6;
      color: black;
      border: black;
  }
  
  .img-fluid {
      padding: 20px;
  }
  
  .prdoutdetailseliment{
    text-align: center;
  }
  
  .w-100 {
      width: 80% !important;
      margin-bottom: 20px;
      margin-left: 10%;
  }
  
  .rounded1 {
      border-radius: 10px;
  }
  
  .shadow1 {
      border: 1px solid #f0d8b6;
  }
  
  .shadow1:hover {
      box-shadow: 0 0.2rem 0.4rem #f0d8b6;
      border: 1px solid #f0d8b6;
  }
  
  #scolour{
    background: #f8f8f8;
  }
  
  .producttittle{
    font-size: 50px;
    margin-top: 0px;
  }
  
  .rounded1{
      background: white;
  }
  </style>
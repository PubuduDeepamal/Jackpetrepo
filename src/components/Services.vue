<template>
    <div>
       <div class="card-container">
  <div class="card">
    <h1>Pets</h1>
    <p>Discover our adorable and diverse range of pets ready to bring joy and companionship into your home. From cuddly kittens and playful puppies to colorful fish and chirpy birds, we have a wide selection of pets to suit every pet lover's preference.</p>
  </div>
  
  <div class="card">

    <h1>Products</h1>

    <p>Explore our extensive collection of high-quality pet products designed to meet the needs of your furry, feathered, or scaly friends. From premium pet food and treats to comfortable bedding, stylish accessories, and interactive toys, we have everything you need to provide the best care for your beloved pets.</p>

  </div>
  
  <div class="card">

    <h1>Health Advice</h1>

    <p>Ensure your pets stay in optimal health with our expert health advice. Our team of experienced veterinarians and pet care specialists provide valuable tips and guidance on topics such as nutrition, grooming, training, and overall well-being. We are committed to helping you make informed decisions and promoting the well-being of your pets.</p>

  </div>

  <div class="card">

    <h1>Offers</h1>

    <p>Take advantage of our exciting offers and promotions to save on your favorite pet products. From discounts on specific items to bundle deals and seasonal sales, we regularly provide great opportunities to get the best value for your money. Keep an eye out for our special offers to make your pet care budget go further.</p>

  </div>
</div>
        
    </div>  

</template>
          
<script>
    export default {
        name: 'Services'   
    }
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.card:hover {
  opacity: 0.7;
  background:rgba(240,216,182,255);
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card{
    flex: 1 0 30%;
    margin: 10px;
    text-align: center;
    padding: 14px;
    box-sizing: border-box;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
}

@media (min-width: 1200px) {

  .card{
    HEIGHT: 321px;
}
  
}

.card img {
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .card {
    flex-basis: 45%; /* Adjust the width for smaller screens */
  }

  .card-container[data-v-e2d1790d] {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-content: stretch;
    justify-content: center;
}
}


@media (min-width: 1200px) {

    .card-container{
    margin-bottom: 34px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.card-container{
    margin-bottom: 34px;
    margin-top: 35px;
}

}

.card-container {
    margin-bottom: 34px;
}

h1, .h1, p, .p {
    font-family: emoji;
}

h1, .h1 {
    font-size: 45.8px;
}
</style>
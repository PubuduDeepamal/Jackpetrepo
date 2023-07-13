<template>
    <div>
      <br><br><br><br>
      <div class="coupon">
        <div class="container" id="containertop">
          <h3>Jackpet Voucher</h3>
        </div>
        <img src="../assets/img/voucher.webp" alt="Avatar" style="width:100%;">
        <div class="container" style="background-color:white">
          <h2><b>20% OFF YOUR PURCHASE</b></h2> 
          <p>Enjoy a special discount on your next visit to our pet shop!</p>
          <p>To redeem this voucher, present it at the checkout counter during your next visit. Don't miss out on this opportunity to pamper your beloved pets!</p>
        </div>
        <div class="container" id="containerbootom">
          <p id="textfont">Use Promo Code: <span class="promo">BOH232</span></p>
          <p class="expire">Expires: sep 03, 2023</p>
        </div>
      </div> 
      <br>
      <br>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Homevoucher',
    data() {
      return {
        isSignedIn: true
      }
    }
  }
  </script>


<style scoped>

.coupon {
  border: 2px solid #f0d8b6;
  width: 80%;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 600px;
}

.container {
  padding: 2px 16px;
  background-color: #f0d8b6;;
}

.promo {
  background: #ccc;
  padding: 3px;
}

.expire {
  color: red;
  text-align: center;
}

p {
    text-align: center;
    font-family: emoji;
}

#textfont{
    font-family: cursive;
    margin-top: 8px;
}

h3, .h3 {
    font-size: calc(1.3rem + 0.6vw);
    text-align: center;
    font-family: emoji;
}

#containertop{

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

#containerbootom{
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

}
h2, .h2 {
    text-align: center;
}

.goolesinin{
  background: #f0d8b6;
    color: black;
    border: 0;
    text-transform: uppercase;
    transition: all 0.3s;
    border-radius: 6px; 
    margin-top: -18px;
    margin-bottom: 20px;
    padding: 10px;
}


</style>
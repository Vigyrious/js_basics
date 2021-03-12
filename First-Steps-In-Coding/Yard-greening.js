function YardGreening(input){
    sqMeter = Number(input)*7.61;
    final_price = sqMeter - (sqMeter*0.18);
    discout = sqMeter * 0.18;
    console.log(`The final price is: ${final_price}`)   ;
    console.log(`The discount is: ${discout}`);
}
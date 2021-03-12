function a(a1,a2,a3,a4,a5) {
    let pricePage = Number(a1) * 899;
    let priceBlank = Number(a2) * 2;
    let discount = Number(a3) / 100;
    let priceDesigner = Number(a4);
    let teamPrice = Number(a5) / 100;
    let book = pricePage+priceBlank;
    let priceDiscount = (book - (book * discount)) + priceDesigner;
    let teamDiscount = priceDiscount - (priceDiscount *teamPrice);
    console.log(`Avtonom should pay ${teamDiscount.toFixed(2)} BGN.`);
}
a(0.05,1.2,40,19.99,20)
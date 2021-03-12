function a(a1,a2,a3){
    let savings = Number(a1);
    let mounthCount = Number(a2);
    let neededMoney = Number(a3);
    let percentage = savings * 0.3;
    let res = savings - (percentage + neededMoney);
    console.log(`She can save ${((res/savings)*100).toFixed(2)}% ${(mounthCount*res).toFixed(2)}`);
}
a(2050,5,900)
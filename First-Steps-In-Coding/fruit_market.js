function plodove_suma(yagodi_cena, banani_kilo, portokali_kilo, malini_kilo, yagodi_kilo) {
    let yagodi = Number(yagodi_cena)*Number(yagodi_kilo);
    let malini = Number(yagodi_cena)/2;
    let portokali = malini * 0.6;
    let banani = malini * 0.2
    let suma_malini = malini * Number(malini_kilo);
    let suma_portokali = portokali * Number(portokali_kilo);
    let suma_banani = banani * Number(banani_kilo);
    let result = yagodi + suma_banani + suma_malini + suma_portokali
    console.log(result);
}
plodove_suma("48","10","3.3","6.5","1.7");
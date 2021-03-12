function a(a1){
    let k = 0;
    let back = 0;
    let abs = 0;
    let chest = 0;
    let legs = 0;
    let shake = 0;
    let bar = 0;
    let visitors = Number(a1[k]);
    let current = "";

    for (i=0;i<visitors;i++) {
        k++;
        current = a1[k];
        if (current == "Abs"){
            abs +=1;
        }
        else if (current == "Back"){
            back +=1;
        }
        else if (current == "Chest"){
            chest +=1;
        }
        else if (current == "Legs"){
            legs +=1;
        }
        else if (current == "Protein shake"){
            shake +=1 ;
        }
        else if (current == "Protein bar"){
            bar +=1;
        }
    }
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${shake} - protein shake`);
    console.log(`${bar} - protein bar`);
    console.log(`${((((back+chest+legs+abs)/visitors))*100).toFixed(2)}% - work out`);
    console.log(`${((((shake+bar)/visitors)*100).toFixed(2))}% - protein`);
}
a(["7" ,"Chest", "Back", "Legs", "Legs", "Abs" ,"Protein shake" ,"Protein bar"])
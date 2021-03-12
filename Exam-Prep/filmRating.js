function a(a1){
    let movieCount = Number(a1.shift());
    let movieName = a1.shift();
    let movieRating = Number(a1.shift());
    let maxMovie = "";
    let minMovie = "";
    let maxRating = Number.MIN_SAFE_INTEGER;
    let minRating = Number.MAX_SAFE_INTEGER;
    let allRating = 0;
    let isMax = false;
    let isMin = false;
    for(i=0;i<movieCount;i++){
        if(movieRating > maxRating){
            isMax = true;
            maxMovie = movieName;
            maxRating = movieRating;
            allRating += movieRating;
        }
        else if(movieRating < minRating){
            isMin = true;
            minMovie = movieName;
            minRating = movieRating;
            allRating += movieRating;
        }
        else {
            allRating += movieRating;
        }
        movieName = a1.shift();
        movieRating = Number(a1.shift());
    }
    if(isMin && isMax){
    console.log(`${maxMovie} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minMovie} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${(allRating/movieCount).toFixed(1)}`);
    }
}
a(["3","Interstellar","8.5","Dangal" ,"8.3", "Green Book", "8.2"]);
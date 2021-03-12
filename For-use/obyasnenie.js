/*                                             Function declaration
 
// Не искаме да я използваме, заради начина, по който се хойства.Function declarations in JavaScript are hoisted to the top of the enclosing function or global scope. You can use the function before you declared it:Тоест, няма проблем в случая да я конзолнем, ще върне респонс, но това е нежелано..Първо създаваш, после ползваш..както е прието за всичко :Д
 
console.log(someFnc());
function someFnc() {
	return 5;
};
 
 
 
 
 
//                                Function expression
 
/Ако се опиташ сега да я конзолнеш ще ти върне Reference Error(това се получава в следствие на това, че ти вече записваш функцията към променлива, която е от тип const/let)Следователно не можеш да я викнеш преди да си я създал
 
console.log(someFnc());
const someFnc= function() {
  return 5;
};
 
 
 
 
//                               Аrrow/Fat function
//Ако се опиташ пак да я конзолнеш, също няма да се получи..поради същите причини.Разликата между function expression и arrow function е в това, че arrow function е shorthand syntax  и има ралика с this context-а(няма смисъл да го обясняваме сега).
 
console.log(someFnc());
const someFnc = () => {
 
return 5;
 
};
 
 
 
Обобщение:
 
С Function expression и arrow function не позволяват да извикаш функциите преди тяхното създаване, заради начина по който се хойстват let и const променливите.Те са въведени с ECMAScript 2015.Бих ти препоръчал да ползваш arrow functions, по удобни са, лесни за разбиране, а и също имат много готина функция, тоест може да изпуснеш return-a.. Пример : const someFnc = (a) => console.log(a);
Ако всичко е на един ред, както горе, ти веднага ретърнваш това, което е след "=>", в нашия случай ти казваш  return console.log(a);, но изпускаш това излишното писане на return :D


*/
let cont = document.querySelector('.content');
let newOL = document.createElement('ol');
cont.append(newOL);
newOL.className = "countries";

let btn = document.querySelector('button');



function generate(num) {
    countries_copy = countries.slice(countries)
    newArr = []
    let i = 1;
    while (i<num+1) {
        let randIn = Math.floor(Math.random() * countries_copy.length);
        let get = countries_copy.splice(randIn, 1)
        newArr.push(get[0])
        i = i + 1
    }
    return newArr
}



btn.onclick = function() {
    let countries_ol = document.querySelector('.countries');
    countries_ol.innerHTML = " ";
    let n = 1;
    let list_25 = generate(25)
    for (i=0; i<list_25.length; i++) {
        let newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(list_25[i]["code"]+ " "+list_25[i]["name"]));
        countries_ol.appendChild(newLi);
    }
}


function generate(num, list) {
    list_copy = list.slice(list)
    randList = []
    let i = 1;
    while (i<num+1) {
        let randIn = Math.floor(Math.random() * list_copy.length);
        let get = list_copy.splice(randIn, 1)
        randList.push(get[0])
        i = i + 1
    }
    return randList
    }
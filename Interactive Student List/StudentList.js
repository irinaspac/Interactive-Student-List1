const array = [];
//Separating the array to be easier to manipulate
(function init() {
    data.forEach(name => {
        const names = name.split(' ');
        const firstName = names[0];
        const lastName = names[names.length - 1];
        const middleNames = names.slice(1, names.length - 1);
        const middleName = middleNames.join(' ');
        const person = {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
        }

        array.push(person);
    })
    sort();
})();

//Sorts the names depending on the value of the options tag
function sort() {
    let select = document.getElementById('option').value;
    array.sort(function (a, b) {
        if (a[select] < b[select]) return -1;
        if (a[select] > b[select]) return 1;
        return 0;
    })
    console.log(array);
    map(array);
}

function map(array) {
    // Cleanup
    let ul = document.getElementById("myList");
    while (ul.firstChild) ul.removeChild(ul.firstChild);

    // Mapping the new array to a LI Element
    array.map(index => {
        console.log
        let x = document.createElement("LI");
        let t = document.createTextNode(`${index.firstName} ${index.middleName} ${index.lastName}`);
        x.onclick = function () {
            if (event.target.tagName == "LI") {
                alert("more info " + index.firstName + " " + index.lastName)
            }
            else {
                //Hiding the element from the dom
                let close = document.getElementsByClassName("close");
                for (let i = 0; i < close.length; i++) {
                    close[i].onclick = function () {
                        let li = this.parentElement;
                        li.style.display = "none";
                                //removing the x from the string |
                                                            //   V
                        removeName(li.innerText.substring(0, li.innerText.length - 1));
                    }
                }
            }
        };
        x.appendChild(t);
        document.getElementById("myList").appendChild(x);
    })

    //Got this bit from W3Schools just to append the X Sighn to the List
    let myNodelist = document.getElementsByTagName("LI");
    for (let i = 0; i < myNodelist.length; i++) {
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }


}

// loops trough the array and finds the element that matches with the name that was clicked and removes it.
function removeName(name) {
    array.forEach(function (element) {
        if (`${element.firstName} ${element.middleName} ${element.lastName}` == name) {
            array.splice(element, 1);
            console.log(array);
        }
    });
}
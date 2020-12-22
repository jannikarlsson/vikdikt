(function () {
    'use strict';

    let inputForm = document.getElementById("line");
    let charCount = document.getElementById("charCount");
    let button = document.getElementById("add");
    let showButton = document.getElementById("show");
    let reset = document.getElementById("reset");
    let poemDiv = document.getElementsByClassName("poem")[0];
    let poem = [];

    button.addEventListener("click", function () {
        let strippedString = inputForm.value.replace(/(<([^>]+)>)/gi, "");
        poem.push(strippedString);
        console.log(inputForm.value)
        inputForm.value = "";
        charCount.innerHTML = "";
    });

    reset.addEventListener("click", function () {
        poem = [];
        poemDiv.innerHTML = "";
        inputForm.value = "";
        charCount.innerHTML = "";
        inputForm.style.display = "inline";
        button.style.display = "inline";
        showButton.style.display = "inline";
        charCount.style.display = "inline";
    });

    showButton.addEventListener("click", function () {
        unfold(poem);
    });

    inputForm.addEventListener("keyup", function () {
        charcountupdate(this.value);
    });

    function unfold(poem) {
        let time = 200;
        for (let i = 0; i < poem.length; i++) {
                window.setTimeout(function() {
                    let temp = document.createElement("div");
                    if (i % 2) {
                        temp.className = "fold grey shadow";
                    } else {
                        temp.className = "fold shadow";
                    }
                    temp.innerHTML = "<p>" + poem[i] + "</p>";
                    poemDiv.appendChild(temp);
                }, time);
                time += 400;
        }
        inputForm.style.display = "none";
        button.style.display = "none";
        showButton.style.display = "none";
        charCount.style.display = "none";
    }

    function charcountupdate(str) {
	    let length = str.length;
	    charCount.innerHTML = "<p class='count'>" + length + ' av 110 tecken</p>';
    }

})();

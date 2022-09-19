document.querySelector(".inputs").addEventListener("input", (e) => {
    e.preventDefault();
    let tip = document.querySelector("#tip");
    let total = document.querySelector("#total");
    var bill = document.getElementById("bill").value;
    var people = document.querySelector(".count").value;
    let yes = document.querySelectorAll(".based");
    for (let i = 0; i < yes.length; i++) {
        yes[i].addEventListener("input", () => {
            globalThis.myVal = yes[i].value;
        })
        yes[i].addEventListener("click", (e) => {
            e.preventDefault();
            globalThis.myVal = yes[i].value;
            console.log(yes[i].id);
            if (yes[i].id !== "enter") {
                yes[i].style.backgroundColor = "hsl(172, 67%, 45%)";
            }
        })
    }
    var output = (bill * (myVal / 100)) / people;
    var perperson = (bill / people) + output;
    tip.innerHTML = Math.round(output * 100) / 100;
    total.innerHTML = Math.round(perperson * 100) / 100;
    if (document.forms["inputs"]["bill"].value !== 0 || document.forms["inputs"]['people'].value !== "") {
        document.querySelector(".submit").style.backgroundColor = "hsl(172, 67%, 45%)";
    }
    if (document.forms["inputs"]["people"].value == "") {
        document.forms["inputs"]["people"].value = 1;
    }
    if (document.forms["inputs"]["people"].value == 0) {

        document.getElementsByTagName("input")[2].classList.add("outline");
        document.querySelector(".viz").style.display = "block";
    } else {

        document.querySelector(".viz").style.display = "none";
        document.getElementsByTagName("input")[2].classList.remove("outline");
    }
})
document.querySelector(".submit").addEventListener("click", () => {
    window.location.reload();
})

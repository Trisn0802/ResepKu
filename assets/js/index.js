var hamburger = document.getElementById("hamburger");
var myElement = document.getElementById("myElement");
var press1 = document.getElementById("press1");
var press2 = document.getElementById("press2");
var press3 = document.getElementById("press3");
var press4 = document.getElementById("press4");

function toggleMenu(hamburger) {
    // Mengganti icon dari humberger menjadi X
    hamburger.classList.toggle("change");

    // Menampilkan atau menyembunyikan sidebar-nav
    myElement.style.display = (myElement.style.display === "flex") ? "none" : "flex";
    myElement.style.position = (myElement.style.display === "flex") ? "fixed" : "static";
}

function tutupOtomatis() {
    // Mengganti icon dari humberger menjadi X
    hamburger.classList.remove("change");

    // Menyembunyikan sidebar-nav
    myElement.style.display = "none";
}

hamburger.addEventListener("click", toggleMenu);

// Tambahkan event listener pada setiap elemen press
press1.addEventListener("click", tutupOtomatis);
press2.addEventListener("click", tutupOtomatis);
press3.addEventListener("click", tutupOtomatis);
press4.addEventListener("click", tutupOtomatis);

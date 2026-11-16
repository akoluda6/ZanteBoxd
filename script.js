var buttons = document.querySelectorAll(".filter_button");
var cards = document.querySelectorAll(".card_gallery");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var filter = button.dataset.filter;

        buttons.forEach(function (b) {
            b.classList.remove("selected");
        });
        button.classList.add("selected");

        cards.forEach(function (card) {
            if (filter === "wszystkie" || card.dataset.genre === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

var form = document.getElementById("contact_form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("form_status").textContent =
            "Dzięki! Wiadomość została zapisana.";
        form.reset();
    });
}

alert("Welcome to Cailey's Webpage");


function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "9826761-Portrait-of-senior-man-gardening-Stock-Photo-gardener.jpg")
    {
        document.getElementById("imgClickAndChange").src = "9826761-Portrait-of-senior-man-gardening-Stock-Photo-gardener.jpg";
    }

    else if (document.getElementById("imgClickAndChange").src = "gardening-senior-gardener-with-a-basket-of-harvested-vegetables-stock-photograph_csp4659429.jpg")
    {
        document.getElementById("imgClickAndChange").src = "gardening-senior-gardener-with-a-basket-of-harvested-vegetables-stock-photograph_csp4659429.jpg";
    }

    else
    {
        document.getElementById("imgClickAndChange").src = "9826761-Portrait-of-senior-man-gardening-Stock-Photo-gardener.jpg"
    }
}

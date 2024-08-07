const button = document.querySelector(".convert-button");
const selectedFrom = document.querySelector(".currency-selected-from");
const selectedTo = document.querySelector(".currency-selected-to");

function convertValues() {
    const input = document.querySelector(".value-to-convert").value;
    const convertValueFrom = document.querySelector(".value-convert-from");
    const convertValueTo = document.querySelector(".value-converd-to");

    let dolarToday = 5.66;
    let euroToday = 6.18;
    let libraToday = 7.19;
    let ieneToday = 0.038;
    let realToday = 1;

    let fromValue;

    if (selectedFrom.value == "real") {
        fromValue = input * realToday;
        convertValueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(input);
    }
    if (selectedFrom.value == "dolar") {
        fromValue = input * dolarToday;
        convertValueFrom.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input);
    }
    if (selectedFrom.value == "euro") {
        fromValue = input * euroToday;
        convertValueFrom.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input);
    }
    if (selectedFrom.value == "libra") {
        fromValue = input * libraToday;
        convertValueFrom.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(input);
    }
    if (selectedFrom.value == "iene") {
        fromValue = input * ieneToday;
        convertValueFrom.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(input);
    }

    let toValue;

    if (selectedTo.value == "real") {
        toValue = fromValue / realToday;
        convertValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(toValue);
    }
    if (selectedTo.value == "dolar") {
        toValue = fromValue / dolarToday;
        convertValueTo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(toValue);
    }
    if (selectedTo.value == "euro") {
        toValue = fromValue / euroToday;
        convertValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(toValue);
    }
    if (selectedTo.value == "libra") {
        toValue = fromValue / libraToday;
        convertValueTo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(toValue);
    }
    if (selectedTo.value == "iene") {
        toValue = fromValue / ieneToday;
        convertValueTo.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(toValue);
    }
}

function changeSelectedFrom() {
    const nomeFrom = document.getElementById("moeda-from")
    const imageFrom = document.querySelector(".image-from")

    if (selectedFrom.value == "real") {
        nomeFrom.innerHTML = "Real"
        imageFrom.src = './img/real-icon.png'
    }

    if (selectedFrom.value == "dolar") {
        nomeFrom.innerHTML = "Dólar americano"
        imageFrom.src = './img/dolar-icon.png'
    }
    
    if (selectedFrom.value == "euro") {
        nomeFrom.innerHTML = "Euro"
        imageFrom.src = './img/euro-icon.png'
    }

    if (selectedFrom.value == "libra") {
        nomeFrom.innerHTML = "Libra esterlina"
        imageFrom.src = './img/libra-icon.png'
    }

    if (selectedFrom.value == "iene") {
        nomeFrom.innerHTML = "Iene"
        imageFrom.src = './img/iene-icon.png'
    }
}

function changeSelectedTo () {
    const nomeTo = document.getElementById("moeda-to")
    const imageTo = document.querySelector(".image-to")

    if (selectedTo.value == "real") {
        nomeTo.innerHTML = "Real"
        imageTo.src = './img/real-icon.png'
    }

    if (selectedTo.value == "dolar") {
        nomeTo.innerHTML = "Dólar americano"
        imageTo.src = './img/dolar-icon.png'
    }

    if (selectedTo.value == "euro") {
        nomeTo.innerHTML = "Euro"
        imageTo.src = './img/euro-icon.png'
    }

    if (selectedTo.value == "libra") {
        nomeTo.innerHTML = "Libra esterlina"
        imageTo.src = './img/libra-icon.png'
    }

    if (selectedTo.value == "iene") {
        nomeTo.innerHTML = "Iene"
        imageTo.src = './img/iene-icon.png'
    }
}

selectedTo.addEventListener("change", changeSelectedTo )
selectedFrom.addEventListener("change", changeSelectedFrom);
button.addEventListener("click", convertValues);

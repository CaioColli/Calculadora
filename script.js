let numeroGuardado = Number(document.querySelector("#valorOperacao"));

let audio = document.querySelector("#somClique");

function backSpace() {
    let input = document.querySelector("#valorOperacao");
    let inputValor = input.value;
    input.value = inputValor.substring(0, inputValor.length - 1);
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
}

document.querySelector("#txtApagar").addEventListener("click", function () {
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
})

document.querySelector("#n7").addEventListener("click", function () {
    document.querySelector("#valorOperacao").value += 7;
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
});

document.querySelector("#n8").addEventListener("click", function () {
    document.querySelector("#valorOperacao").value += 8;
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
});

document.querySelector("#n9").addEventListener("click", function () {
    document.querySelector("#valorOperacao").value += 9;
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
});

document.querySelector("#txtDiv").addEventListener("click", function () {
    document.querySelector("#valorOperacao").value += "/";
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
});

document.querySelector("#n4").addEventListener("click", function () {
    document.querySelector("#valorOperacao").value += 4;
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
});

document.querySelector("#n5").addEventListener("click", function () {
    document.querySelector("#valorOperacao").value += 5;
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
});

document.querySelector("#n6").addEventListener("click", function () {
    document.querySelector("#valorOperacao").value += 6;
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
});

document.querySelector("#txtAdicao").addEventListener("click", function () {
    document.querySelector("#valorOperacao").value += "*";
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
});

document.querySelector("#n1").addEventListener("click", function () {
    document.querySelector("#valorOperacao").value += 1;
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
});

document.querySelector("#n2").addEventListener("click", function () {
    document.querySelector("#valorOperacao").value += 2;
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
});

document.querySelector("#n3").addEventListener("click", function () {
    document.querySelector("#valorOperacao").value += 3;
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
});

document.querySelector("#txtMulti").addEventListener("click", function () {
    document.querySelector("#valorOperacao").value += "+";
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
});

document.querySelector("#txtPonto").addEventListener("click", function () {
    document.querySelector("#valorOperacao").value += ".";
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
});

document.querySelector("#n0").addEventListener("click", function () {
    document.querySelector("#valorOperacao").value += 0;
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
});

document.querySelector("#txtSubtracao").addEventListener("click", function () {
    document.querySelector("#valorOperacao").value += "-";
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();
});

document.querySelector("#txtIgual").addEventListener("click", igualA);

function igualA() {
    let resultado = eval(document.querySelector("#valorOperacao").value);
    document.querySelector("#valorOperacao").value += " = " + resultado;
    audio = new Audio ("audio/click.mp3")
    audio.volume = 0.2;
    audio.play();

    const ids = [
        "#txtDiv",
        "#n7",
        "#n8",
        "#n9",
        "txtAdicao",
        "#n4",
        "#n5",
        "#n6",
        "txtSubtracao",
        "#n1",
        "#n2",
        "#n3",
        "txtMulti",
        "#n0",
        "#txtPonto",
        "txtIgual",
    ];

    ids.forEach((id) => {
        document.querySelector("#txtDiv").disabled = true;
        document.querySelector("#n7").disabled = true;
        document.querySelector("#n8").disabled = true;
        document.querySelector("#n9").disabled = true;
        document.querySelector("#txtAdicao").disabled = true;
        document.querySelector("#n4").disabled = true;
        document.querySelector("#n5").disabled = true;
        document.querySelector("#n6").disabled = true;
        document.querySelector("#txtSubtracao").disabled = true;
        document.querySelector("#n1").disabled = true;
        document.querySelector("#n2").disabled = true;
        document.querySelector("#n3").disabled = true;
        document.querySelector("#txtMulti").disabled = true;
        document.querySelector("#n0").disabled = true;
        document.querySelector("#txtPonto").disabled = true;
        document.querySelector("#txtIgual").disabled = true;
    });
}

function apagar() {
    document.querySelector("#txtApagar").addEventListener("click", function () {
        document.querySelector("#valorOperacao").value = "";
        document.querySelector(".result").innerHTML = "";
    });

    const ids = [
        "#txtDiv",
        "#n7",
        "#n8",
        "#n9",
        "txtAdicao",
        "#n4",
        "#n5",
        "#n6",
        "txtSubtracao",
        "#n1",
        "#n2",
        "#n3",
        "txtMulti",
        "#n0",
        "#txtPonto",
        "txtIgual",
    ];

    ids.forEach((id) => {
        document.querySelector("#txtDiv").disabled = false;
        document.querySelector("#n7").disabled = false;
        document.querySelector("#n8").disabled = false;
        document.querySelector("#n9").disabled = false;
        document.querySelector("#txtAdicao").disabled = false;
        document.querySelector("#n4").disabled = false;
        document.querySelector("#n5").disabled = false;
        document.querySelector("#n6").disabled = false;
        document.querySelector("#txtSubtracao").disabled = false;
        document.querySelector("#n1").disabled = false;
        document.querySelector("#n2").disabled = false;
        document.querySelector("#n3").disabled = false;
        document.querySelector("#txtMulti").disabled = false;
        document.querySelector("#n0").disabled = false;
        document.querySelector("#txtPonto").disabled = false;
        document.querySelector("#txtIgual").disabled = false;
    });
}
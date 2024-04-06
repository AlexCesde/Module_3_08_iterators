function example() {
    let out = ""

    // iterators
    const numbers = [1, 2, 3, 4, 5];
    const iterator = numbers[Symbol.iterator]();
    out += `<h1>Iterator: ${iterator.next().value}</h1>`;
    out += `<h1>Iterator: ${iterator.next().done}</h1>`;

    document.getElementById("root").innerHTML = out;
}

window.addEventListener("load", example);
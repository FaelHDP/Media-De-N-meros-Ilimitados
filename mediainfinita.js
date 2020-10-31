function main() {
    var abc = parseInt(prompt("quantidade de numeros para tirar media: "));
    var abcd = new Array(abc);

    for (let sla = 0; sla < abc; sla++)
        abcd[sla] = parseInt(prompt("número" + (sla + 1) + ":"))
    var potato = 0;

    for (let sla in abcd)
        potato += abcd[sla];
    var media = potato / abc;
    document.write("Média dos números indicados: " + media);
}
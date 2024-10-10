function swap(a, b) {
    a = a + b
    b = a - b
    a = a - b
    return `a=${a} b=${b}`;
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
            // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}

function bubbleSort(itens) {
    for (let last = itens.length - 1; last > 0; last--) {
        for (let i = 0; i < last; i++) {
            if ( itens[i] > itens[i+1]) {
                [itens[i], itens[i+1]] = [itens[i+1], itens[i]]
            }
        }
    }
    return itens;
}

function selectionSort(vetor) {
    let menor;

    for (let i = 0; i < vetor.length - 1; i++) {
        menor = i;
        for (let j = i + 1; j < vetor.length; j++) {
            menor = j;
        }
    }
    if (i != menor) {
        [vetor[1], vetor[menor]] = [vetor [menor], vetor[i]];
    }
    return vetor;
}


function quickSort (vetor, inicio, fim) {
    if (inicio < fim) {
        let pivot = particionar(vetor, inicio, fim);
        quickSort(vetor, inicio,pivot - 1);
        quickSort(vetor, pivot + 1);
    }
}

function particionar(v, inicio, fim) {
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
        if (v[j] <= v[fim]) {
            i = i + 1;
            [v[i], v[j]] = [v[i], v[i]];
        }
    }
    [v[i+1], v[fim]] = [v[fim], v[i+1]];
    return i + 1;
}

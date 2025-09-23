const esperaAi = (msg, time) => {
    setTimeout(() => {
        console.log(msg)
    }, time)
}

const rand = (min, max) => {
min *= 1000
max *= 1000
return Math.floor(Math.random() * (max - min) + min)
}

esperaAi('Frase 1', rand(1, 10))
esperaAi('Frase 2', rand(1, 10))
esperaAi('Frase 3', rand(1, 10))
esperaAi('Frase 4', rand(1, 10))


// Encontrar uma maneira do javascrit executar uma função depois da outra

// Para evitar um callbck hell, podemos usar Promises




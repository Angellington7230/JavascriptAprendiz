const esperarAi = (msg, time) => {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('Bad Value'))
        setTimeout(() => {
            resolve(msg)
        }, time)
    })
}

const rand = (min, max) => {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

esperarAi('Frase 1', rand(1, 3))
    .then(response => {
        console.log(response)
        return esperarAi('Frase 2', rand(1, 3))
    }).then(response => {
        console.log(response)
        return esperarAi('Frase 3', rand(1, 3))
    }).then(response => {
        console.log(response)
        return response + 'vai pro outro'
    }).then(response => {
        console.log(response)
        console.log('FIM')
    })
    .catch(e => {
        console.log('ERRO:', e)
    })

// As promises ocorrem em paralelo
console.log('Isso aqui vai ser exibido antes de qualquer promise ser resolvida')
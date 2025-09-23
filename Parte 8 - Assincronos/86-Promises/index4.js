const darOi = (msg, time) => {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('Bad Value'))
        setTimeout(() => {
            resolve(msg)
        })
    })
}

const rand = (min, max) => {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

darOi('Frase 1', rand(1, 3))
    .then(response => {
        console.log(response)
        return darOi('Frase 2', rand(1, 3))
    }).then(response => {
        console.log(response)
        return darOi('Frase 3', rand(1, 3))
    }).then(response => {
        console.log(response)
        return darOi('Frase 4', rand(1, 3))
    })
    .catch(e => {
        console.log('ERRO:', e)
    })

// Paralelismo
console.log('Isso aqui vai ser exibido antes de qualquer promise ser resolvida')
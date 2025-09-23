const darOi = (msg, time, cb) => {
    setTimeout(() => {
        console.log(msg)
        if(cb) cb()
    }, time)
}

const rand = (min, max) => {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

// Callback Hell
darOi('Frase 1', rand(1, 3), function() {
    darOi('Frase 2', rand(1, 3), function() {
        darOi('Frase 3', rand(1, 3), function(){
            darOi('Frase 4', rand(1, 3))
        })
    })
})
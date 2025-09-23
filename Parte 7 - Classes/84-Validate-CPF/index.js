class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, ''),
            writable: false,
            enumerable: true,
            configurable: false
        });
    }

    eSequence() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    gerarNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.gerarDigito(cpfSemDigitos);
        const digito2 = this.gerarDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    gerarDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let numero of cpfSemDigitos) {
            total += reverso * Number(numero);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    valida() {
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.eSequence()) return false;

        this.gerarNovoCpf();
        return this.novoCpf === this.cpfLimpo;
    }
}

// Testando
const validaCPF = new ValidaCPF('070.987.720-03');
console.log(validaCPF.valida()); // true

const Carro={
    _motor: 'V8',
    _portamala: 'Sedan',

    get tipoMotor(){return this._motor},
    set mudarMotor(novoMotor){
        this._motor=novoMotor
    },
    get tipoPortamala(){return this._portamala},
    set mudarPortamala(novoPortamala){
        this._portamala=novoPortamala
    }
}
Carro.mudarMotor='V6'

console.log(Carro._motor)

Object.freeze(Carro)

Carro.mudarMotor='V2'

console.log(Carro._motor)
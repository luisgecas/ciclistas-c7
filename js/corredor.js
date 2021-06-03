export default class Corredor{
constructor(nombre,carrera1,carrera2,carrera3,carrera4,carrera5,carrera6){
    this.nombre=nombre;
    this.carrera1=carrera1;
    this.carrera2=carrera2;
    this.carrera3=carrera3;
    this.carrera4=carrera4;
    this.carrera5=carrera5;
    this.carrera6=carrera6;
}

    calcularPromedio(){
        return (this.carrera1 + this.carrera2 + this.carrera1 + this.carrera1 + 
            this.carrera1 + this.carrera1 + this.carrera1)/5;
    }

}
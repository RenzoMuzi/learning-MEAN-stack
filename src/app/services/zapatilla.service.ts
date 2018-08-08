import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla('reebook classic', 'reebook', 'blanco', 80, false),
            new Zapatilla('nike runner md', 'nike', 'negras', 60, true),
            new Zapatilla('adidas yeezzy', 'adidas', 'gris', 180, false),
            new Zapatilla('adidas 23', 'adidas', 'azul', 200, true),
            new Zapatilla('nike pegasus', 'nike', 'negras', 145, false)
        ];
    }
    getTexto(){
        return "hola mundo desde un servicio"
    }
    
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}
import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreTienda: string = 'MundoCelu';
  encargado: string = 'Carlos Hidalgo';
  numeroSucursal: number = 1;
  tiendaAbierta: boolean = true;
  categorias: string[] = ['Celulares', 'Accesorios', 'Reparaciones','Tablet'];
  

 
  producto: Producto = {
    nombre: 'Samsung Galaxy S26',
    precio: 9500,
    disponible: true
  };
 

  
 
  
}
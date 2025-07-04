import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:4000/api/productos/';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }
  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  registarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.url, producto);
  }
  obtenerProducto(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  editarProducto(id: string, producto: Producto): Observable<any> {
    return this.http.put(this.url + id, producto);
  }


}

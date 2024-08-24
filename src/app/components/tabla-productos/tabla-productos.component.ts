import { Component, inject } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tabla-productos.component.html',
  styleUrl: './tabla-productos.component.css'
})
export class TablaProductosComponent {

  servicio = inject(ProductoService)

  producto: any
  filtroTipo: string = '';

  ngOnInit() {
    this.servicio.getProducto().subscribe(p => {
      this.producto = p

    })
  }
  
  get productosFiltrados(): any[] {
    if (!this.filtroTipo) {
      return this.producto;
    }
    return this.producto.filter((item: any) => this.filtrarPorTipo(item));
  }

  filtrarPorTipo(item: any): boolean {
    return item.tipo.toLowerCase().includes(this.filtroTipo.toLowerCase());
  }

}

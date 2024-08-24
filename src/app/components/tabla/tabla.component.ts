import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servicio=inject(ProductoService)
  producto:any
  ngOnInit(){
    this.servicio.getProducto().subscribe(p=>{
      this.producto=p
    })
  }

  eliminar(id:any){
    this.servicio.deleteProducto(id).subscribe()
  }

}

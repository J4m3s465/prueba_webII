import { Component } from '@angular/core';
import { TablaComponent } from "../../components/tabla/tabla.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TablaProductosComponent } from "../../components/tabla-productos/tabla-productos.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, TablaComponent, TablaProductosComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { APIComponent } from './pages/api/api.component';
import { EditarTablaComponent } from './pages/editar-tabla/editar-tabla.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"gestion", component: GestionComponent},
    {path:"producto", component: ProductosComponent},
    {path:"editarProductos/:idProducto", component:EditarTablaComponent},
    {path:"api", component: APIComponent},
    {path:"**",redirectTo:"",pathMatch:'full' }
];

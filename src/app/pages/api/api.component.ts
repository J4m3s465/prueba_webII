import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PersonalService } from '../../service/personal.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class APIComponent {

personal:any
servicio=inject(PersonalService)

ngOnInit(){
  this.servicio.getPersonal().subscribe(p=> {console.log(p)
    this.personal=p.musica
  })
  
}
}

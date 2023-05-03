import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NosotrosService } from 'src/app/services/nosotros.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css'],
})
export class AdministracionComponent {
  //Mètodo POST
  constructor(private servicio: NosotrosService) {}

  guardarNosotros(
    id: string,
    nombre: string,
    apellido: string,
    email: string,
    genero: string,
    modelo: string
  ) {
    const ide: number = parseInt(id);

    const temp = {
      id: ide,
      first_name: nombre,
      last_name: apellido,
      email: email,
      gender: genero,
      ip_address: modelo,
    };

    this.servicio.postNosotros(temp).subscribe((item) => {});
  }

  actualizarNosotros(
    id: string,
    nombre: string,
    apellido: string,
    email: string,
    genero: string,
    modelo: string
  ) {
    const ide: number = parseInt(id);

    const temp = {
      id: ide,
      first_name: nombre,
      last_name: apellido,
      email: email,
      gender: genero,
      ip_address: modelo,
    };

    this.servicio.putNosotros(temp, ide).subscribe((u) => {});
  }

  eliminarNosotros(id: string) {
    const ide: number = parseInt(id)
    this.servicio.deleteNosotros(ide).subscribe(u=>{})
  }
}

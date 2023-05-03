import { Component } from '@angular/core';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent {
  constructor(private service: PersonalService) {}

  dataPersonal: any;

  // apenas arranca la app
  ngOnInit() {
    this.service.getPersonal().subscribe((personal) => {
      this.dataPersonal = personal;
    });
  }
}

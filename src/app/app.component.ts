import { Component } from '@angular/core';
import { CSservicesService } from '../app/services/csservices.service';
import { Tmodelos } from './models/tmodelos.model';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  ListDataClient:any;
  txtcedula:string = "135";


  constructor(private httpService: CSservicesService) {}

  ngOnInit(): void {
      this.httpService.ObtenerDatos().subscribe({
        next: (data) => {   
          this.ListDataClient = data.data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  ConsultarDatos(){
    
    let micedula:string = this.txtcedula;
    if (micedula.toString().trim() !== "") {
      this.httpService.ObtenerDato(micedula).subscribe({
        next: (data) => {   
          this.ListDataClient = data.data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });  
    }else{
      this.httpService.ObtenerDatos().subscribe({
        next: (data) => {   
          this.ListDataClient = data.data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    }

    

    return false;
  }

}

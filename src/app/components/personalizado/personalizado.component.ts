import { Component } from '@angular/core';


@Component({
  selector: 'app-personalizado',
  templateUrl: './personalizado.component.html',
  styleUrls: ['./personalizado.component.css']
})


export class PersonalizadoComponent {
  imageSrc = '';
    messageText = '';
    imageButtons = [ {src:'../../../assets/resources/vinylpers1.png', name: ''}]
    imageButtons2 = [{src:'../../../assets/resources/vinylpers2.png', name: ''}]
    imageButtons3 = [ {src:'../../../assets/resources/vinylpers3.png', name: ''}]
    imageButtons4 = [ {src:'../../../assets/resources/vinylpers4.png', name: ''}]
    imageButtons5 = [ {src:'../../../assets/resources/vinylpers5.png', name:''}]
    imageButtons6 = [{src:'../../../assets/resources/vinylpers6.png', name:''}]
    imageButtons7 = [{src:'../../../assets/resources/vinylpers7.png', name:''}]
    imageButtons8 = [{src:'../../../assets/resources/vinylpers8.png', name:''}]
    imageButtons9 = [{src:'../../../assets/resources/vinylpers9.png', name:''}]
    imageButtons10 = [{src:'../../../assets/resources/vinylpers10.png', name:''}]
    
  constructor() { }
    ngOnInit() {
    }
    onClick(imageNameObject: { src: string; name: string; }) {
      this.imageSrc = imageNameObject.src;
      this.messageText = imageNameObject.name;
    }


    
  
  }


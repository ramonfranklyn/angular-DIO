import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  count = 0;

  pessoas =[
    {
      nome: "Ramon",
      sobrenome: "Ladeia"
    },
    {
      nome: "Franklyn",
      sobrenome: "Carvalho"
    },
    {
      nome: "Debora",
      sobrenome: "Carvalho"
    },
    {
      nome: "Lenir",
      sobrenome: "Alves"
    }
  ];

  constructor(){

  }

  ngOnInit(){
    console.log(this.pessoas);
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval);
      }
    }, 1000)
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "assets/img/minha-gata.jpeg";
  contentTitle:string = "Minha Notícia";
  contentDescription:string = "Olá Mundo";
  constructor(
    private route:ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get('id'))
    );
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { mockData } from '../../data/mockData';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  id: string | null = "0";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.id = params.get('id'));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = mockData.filter(article => article.id == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo
  }

}

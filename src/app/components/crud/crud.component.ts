import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Product } from '@app/models/product';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  private apiServer = "http://localhost:3000/products";

  product = [
    { id: 1, category: "Iphone", name: "Iphone11pro", start: 2007, price: 800 }
  ]


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.getSelectedThemeThreads().subscribe(v => console.log(v))
    this.getJson()

    this.product.forEach(pro => {
      console.log(`${pro.category}X`)
    })
  }


  public getJson() {
    return this.http.get(this.apiServer).subscribe(data => console.log(data))
  }

  getSelectedThemeThreads(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiServer).pipe(
      map(result =>
        result.filter(product => product.price < 300)
      )
    )
  }
}

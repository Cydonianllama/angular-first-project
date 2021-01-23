import { Component, OnInit ,Input } from '@angular/core';

import {ItemProduct} from '../../models/itemProduct'


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent implements OnInit {

  @Input() item: ItemProduct = new ItemProduct()

  constructor() {

  }

  ngOnInit(): void {

  }

}

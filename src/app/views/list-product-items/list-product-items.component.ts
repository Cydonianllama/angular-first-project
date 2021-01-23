import { Component, OnInit } from '@angular/core';
import {ItemProduct} from '../../models/itemProduct'

import fake_items from './fake-items'

@Component({
  selector: 'app-list-product-items',
  templateUrl: './list-product-items.component.html',
  styleUrls: ['./list-product-items.component.sass']
})
export class ListProductItemsComponent implements OnInit {

  //the array of the model product
  items: ItemProduct[] = []

  constructor() {}

  ngOnInit(): void {
    this.items = [
      ...fake_items
    ]
  }

}

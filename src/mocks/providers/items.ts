import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Página 1",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Introdução"
      },
      {
        "name": "Página 2",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Indicações Diversas"
      },
      {
        "name": "Página 3",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Cardápio Balanceado 4 semanas."
      },
      {
        "name": "Página 4",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Cardápio: 1 Semana"
      },
      {
        "name": "Página 5",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Cardápio: 2 Semana"
      },
       
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}

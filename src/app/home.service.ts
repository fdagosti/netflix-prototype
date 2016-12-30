import { Injectable } from '@angular/core';
import {IVPService} from "./ivp.service";
import {Observable} from "rxjs";

@Injectable()
export class HomeService {

  private leafCats = [];

  private channel = {
    id: "live",
    name: "Live Channels",
    preventFullContent: true
  }

  constructor(private ivp:IVPService) { }

  public getLolomoRows() {
    this.leafCats = [];
    return this.getCategories()
      .switchMap(v=>this.getCategories(v[0]))
      .map((v)=>[this.channel].concat(this.leafCats))
  }

  private getCategories(zeCats?){
    return this.ivp.getCategories(zeCats ? zeCats.id : "")
      .map((cats: any) => cats.categories)
      .do(cats => this.leafCats = this.leafCats.concat(cats.filter(v => v.leaf)))
      .map(cats => cats.filter(v => !v.leaf))
      ;
  }



}

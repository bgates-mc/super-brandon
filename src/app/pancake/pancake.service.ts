import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PancakeService {
  fazbear = 10;
  foobar = 6;

  slap() {
    this.foobar++;
  }

  eat() {
    this.foobar--;
  }
}

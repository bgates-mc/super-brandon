import { Component, Input, OnInit } from "@angular/core";
import { PancakeService } from "./pancake.service";

@Component({
  selector: "app-pancake",
  templateUrl: "./pancake.component.html",
  styleUrls: ["./pancake.component.scss"]
})
export class PancakeComponent implements OnInit {
  @Input() sauce = "default";

  constructor(public pancake: PancakeService) {}

  ngOnInit(): void {}

  eatOrSlap() {
    if (this.sauce === "default") {
      this.pancake.eat();
    } else {
      this.pancake.slap();
    }
  }
}

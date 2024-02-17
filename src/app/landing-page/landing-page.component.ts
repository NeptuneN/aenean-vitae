import { Component, OnInit } from '@angular/core';
import { PacketsService } from '../packets.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  packets: any[] = [];

  constructor(private packetsService: PacketsService) { }

  ngOnInit() {
    this.packetsService.getPacketData().subscribe((data: any) => {
      this.packets = data;
      console.log(this.packets);
    });
  }
}

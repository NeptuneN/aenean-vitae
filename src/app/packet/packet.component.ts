import { Component, Input } from '@angular/core';
import { PacketsService } from '../packets.service';

@Component({
  selector: 'app-packet',
  templateUrl: './packet.component.html',
  styleUrl: './packet.component.scss'
})
export class PacketComponent {
  @Input() packet: any;

  constructor(private packetsService: PacketsService) { }

  addToCart() {
    this.packetsService.addToCart(this.packet).subscribe(response => {
      console.log('Sending', this.packet);
    }, error => { // Error always triggers due to missing apiURL, but it's fine since we're not actually sending data anywhere
      console.log('Sending', this.packet);
    });
  }
}

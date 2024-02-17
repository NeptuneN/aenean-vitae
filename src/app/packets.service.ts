import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PacketsService {
  private dataUrl = 'assets/json/packets.json';
  private apiUrl = ''; // Missing apiURL
  private localCart: any[] = []; // Save packets to local storage

  constructor(private http: HttpClient) { }

  getPacketData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

  addToCart(packet: any): Observable<any> {
    if (!this.localCart.some(item => item.id === packet.id)) { // Quick check for duplicates
      this.localCart.push(packet);
      alert('Item added to cart! (Console log for details)');
    } else {
      alert('This item is already in your cart!');
    }
    console.log('Shopping cart:', this.localCart);
    return this.http.post(this.apiUrl, packet);
  }
}
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface Units {
  unit?: string;
  value?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})
export class AppComponent {
  constructor(private messageService: MessageService) {}

  value!: number;
  cols: any[] = [];
  values: Units[] = [];
  showTable: boolean = false;

  verify(): void {
    this.showTable = false;

    switch (true) {
      case this.value === 0:
        this.addSingle('warn', '', 'El numero es 0');
        break;
      case this.value >= 1 || this.value <= -1:
        this.values = [
          {
            unit: 'kilometros (km)',
            value: this.value / 1000,
          },
          {
            unit: 'hectometros (hm)',
            value: this.value / 100,
          },
          {
            unit: 'decametros (dm)',
            value: this.value / 10,
          },
          {
            unit: 'centimetros (cm)',
            value: this.value * 100,
          },
          {
            unit: 'milimetros (mm)',
            value: this.value * 1000,
          },
        ];
        this.showTable = true;
        break;
      default:
        this.addSingle('error', '', 'Por favor ingrese un numero');
        break;
    }
  }

  addSingle(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity, summary, detail });
  }
}

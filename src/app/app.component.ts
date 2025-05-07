import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReportingAngularViewerComponent, ReportingAngularViewerModule } from '@progress/telerik-angular-native-report-viewer'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReportingAngularViewerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'telerik-kendo-net8';

  @ViewChild('viewer') public viewer!: ReportingAngularViewerComponent;
}

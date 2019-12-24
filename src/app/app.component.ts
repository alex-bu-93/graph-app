import { ChangeDetectionStrategy, Component }     from '@angular/core';
import { backToFrontAdaptation, mockBackendData } from './functions';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html'
})
export class AppComponent {

  data = backToFrontAdaptation(mockBackendData());
  refreshData = () => this.data = backToFrontAdaptation(mockBackendData());
}

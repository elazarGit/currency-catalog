import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CurrenciesComponent} from '../currencies/currencies.component';
import {CurrencyDetailComponent} from '../currency-detail/currency-detail.component';
import {CurrencyWrapperComponent} from '../currency-wrapper/currency-wrapper.component';



const routes: Routes = [
  // {
  //   path: 'app',
  //   children: [{
  //     path: 'main',
  //     component: CurrencyWrapperComponent,
  //     children: [
  //       {
  //         outlet: 'detail',
  //         path: 'currency/:id',
  //         component: CurrencyDetailComponent
  //       },
  //       {
  //         path: 'currencies',
  //         component: CurrenciesComponent
  //       }
  //     ]
  //   }]
  // }
  // {path: '',  pathMatch: 'full'},
  {path: 'currency/:id', component: CurrencyDetailComponent},
  {path: '**', redirectTo: '', component: CurrenciesComponent}


];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {useHash: true})]

})

export class AppRoutingModule {


}

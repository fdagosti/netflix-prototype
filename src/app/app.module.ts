import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PresentationComponent} from "./presentation/presentation.component";
import {PlayerComponent} from "./player/player.component";
import {CtapService} from "./ctap.service";
import {StoreComponent} from "./store/store.component";
import {AuthenticationService} from "./authentication.service";
import {PeterPlaygroundComponent} from "./peter/peter-playground/peter-playground.component";
import {DagoPlaygroundComponent} from "./dago/dago-playground/dago-playground.component";
import {DagoModule} from "./dago/dago.module";
import {PeterModule} from "./peter/peter.module";
import {InfiniteUxModule} from "./infinite-ux/infinite-ux.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    PlayerComponent,
    StoreComponent,
  ],
  imports: [
    DagoModule,
    PeterModule,
    InfiniteUxModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: "presentation", component: PresentationComponent},
      {path: "video", component: PlayerComponent},
      {path: "peter", component: PeterPlaygroundComponent},
      {path: "dago", component: DagoPlaygroundComponent},
      {path: "", component: HomeComponent},
    ]),

  ],
  providers: [
    CtapService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

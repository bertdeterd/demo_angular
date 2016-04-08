import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'my-app',
    template: '<div><p>hello {{pageTitle}}</p></div>',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

export class AppComponent {
    pageTitle: string = 'Hello variable';
}
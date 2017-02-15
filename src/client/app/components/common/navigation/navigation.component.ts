import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'navigation',
    templateUrl: 'navigation.template.html'
})

export class NavigationComponent implements AfterViewInit {

    constructor(private router: Router) { }

    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
    }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }
}

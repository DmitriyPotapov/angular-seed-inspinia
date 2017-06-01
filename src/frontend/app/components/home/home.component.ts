import { Component, OnInit } from '@angular/core';

import { ApiTestService } from '../../services/api.service';

@Component({
    moduleId: module.id,
    selector: 'home-view',
    templateUrl: 'home.template.html'
})

export class HomeComponent implements OnInit {

    greeting: string;

    constructor(private apiTestService: ApiTestService) {
    }
    ngOnInit() {
        this.greet('Hello from .NET Core APi');
    }

    greet(name: string): void {
        this.apiTestService
            .greet(name)
            .subscribe(data => this.greeting = data);
    }
}

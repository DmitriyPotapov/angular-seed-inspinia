import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { CatalogueService } from '../../services/catalogue.service';
import { Vendor } from '../../models/index';

@Component({
    moduleId: module.id,
    selector: 'vendor-view',
    templateUrl: 'vendor.template.html',
    styleUrls: ['vendor.style.css']
})
export class VendorComponent implements OnInit {
    @Input() vendor: Vendor;
    vendors: Vendor[];
    ASSETS_FOLDER: string = '/assets/img/catalogue/vendor';
    constructor(private catalogueService: CatalogueService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }
    ngOnInit() {
        console.log('VendorsComponent init');
        this.loadVendors();
    }
    loadVendors() {
        this.catalogueService.getVendors().subscribe(
            result => { this.vendors = result; },
            error => { console.log(error); },
        );
    }
    selectVendor(vendor: Vendor) {
        this.router.navigate(['classification', vendor.vendorId], {relativeTo: this.activatedRoute.parent});
    }
}

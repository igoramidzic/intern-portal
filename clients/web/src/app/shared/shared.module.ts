import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    exports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    entryComponents: []
})
export class SharedModule { }

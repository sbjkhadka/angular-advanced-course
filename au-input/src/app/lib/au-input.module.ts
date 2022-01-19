import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuFaInputComponent } from "./au-fa-input/au-fa-input.component";
import { InputRefDirective } from "./au-fa-input/common/input-ref.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AuFaInputComponent,
        InputRefDirective
    ],
    exports: [
        AuFaInputComponent,
        InputRefDirective
    ]
})
export class AuInputModule {}
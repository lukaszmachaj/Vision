import {NgModule} from '@angular/core';
import {MinisterialEffectsComponent} from './ministerial-effects/ministerial-effects.component';
import {MinisterialEffectAddComponent} from './ministerial-effect-add/ministerial-effect-add.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MinisterialEffectEditComponent} from "./ministerial-effect-edit/ministerial-effect-edit.component";
import {EducationProgramsComponent} from "./education-programs/education-programs.component";
import {EducationProgramAddComponent} from "./education-program-add/education-program-add.component";
import {EducationProgramEditComponent} from "./education-program-edit/education-program-edit.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations:
    [
      MinisterialEffectsComponent,
      MinisterialEffectAddComponent,
      MinisterialEffectEditComponent,
      EducationProgramsComponent,
      EducationProgramAddComponent,
      EducationProgramEditComponent
    ]
})
export class AdminModule {
}

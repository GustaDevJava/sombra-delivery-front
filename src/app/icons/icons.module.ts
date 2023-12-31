import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  exports: [FontAwesomeModule]
})
export class IconsModule { constructor(library: FaIconLibrary) {
  // Add an icon to the library for convenient access in other components
  library.addIcons(faBeerMugEmpty);
}}

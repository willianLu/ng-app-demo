import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product.routing.module';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ChildComponent } from '../components/child/child.component';
import { HoverDirective } from '../../directives/hover.directive';
import { CopyDirective } from '../../directives/copy.directive';
import { SummaryPipe } from '../../pipes/summary.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ChildComponent,
    HoverDirective,
    CopyDirective,
    SummaryPipe,
  ],
  imports: [CommonModule, FormsModule, ProductRoutingModule],
})
export class ProductModule {}

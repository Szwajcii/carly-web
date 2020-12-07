import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {PartsComponent} from './components/parts/parts.component';
import {CarsComponent} from './components/cars/cars.component';
import {OrdersComponent} from './components/orders/orders.component';
import {EnginesComponent} from './components/engines/engines.component';
import {EngineAddComponent} from './components/engines/engine-add/engine-add.component';
import {EngineEditComponent} from './components/engines/engine-edit/engine-edit.component';
import {BrakesComponent} from './components/brakes/brakes.component';
import {BrakesFormComponent} from './components/brakes/brakes-form/brakes-form.component';
import {BrakesEditComponent} from './components/brakes/brakes-edit/brakes-edit.component';
import {CarlyMatModule} from './modules/carly-mat.module';
import {RouterModule} from '@angular/router';
import {EquipmentComponent} from './components/equipment/equipment.component';
import {EquipmentAddComponent} from './components/equipment/equipment-add/equipment-add.component';
import {EquipmentEditComponent} from './components/equipment/equipment-edit/equipment-edit.component';
import {TiresComponent} from './components/tires/tires.component';
import {TiresAddComponent} from './components/tires/tires-add/tires-add.component';
import {TiresEditComponent} from './components/tires/tires-edit/tires-edit.component';
import {WheelsComponent} from './components/wheels/wheels.component';
import {WheelsAddComponent} from './components/wheels/wheels-add/wheels-add.component';
import {WheelsEditComponent} from './components/wheels/wheels-edit/wheels-edit.component';
import {WindowsComponent} from './components/windows/windows.component';
import {WindowsAddComponent} from './components/windows/windows-add/windows-add.component';
import {WindowsEditComponent} from './components/windows/windows-edit/windows-edit.component';
import {PaintingComponent} from './components/painting/painting.component';
import {PaintingAddComponent} from './components/painting/painting-add/painting-add.component';
import {PaintingEditComponent} from './components/painting/painting-edit/painting-edit.component';
import {FormGroupComponent} from './components/form-group/form-group.component';
import {FilterBarComponent} from './components/filter-bar/filter-bar.component';
import {PartsFormComponent} from './components/parts/parts-form/parts-form.component';
import {BrakesAddComponent} from './components/brakes/brakes-add/brakes-add.component';
import {EngineFormComponent} from './components/engines/engine-form/engine-form.component';
import {WheelsFormComponent} from './components/wheels/wheels-form/wheels-form.component';
import {WindowsFormComponent} from './components/windows/windows-form/windows-form.component';
import {TiresFormComponent} from './components/tires/tires-form/tires-form.component';
import {PaintingFormComponent} from './components/painting/painting-form/painting-form.component';
import {EquipmentFormComponent} from './components/equipment/equipment-form/equipment-form.component';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import {UserCanAccessDirective} from './directives/user-can-access.directive';
import {CarlyRoleGuard} from './services/guards/carly-role-guard';
import {SliderComponent} from './components/slider/slider.component';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {NewsComponent} from './components/news/news.component';
import {NewsAddComponent} from './components/news/news-add/news-add.component';
import {NewsEditComponent} from './components/news/news-edit/news-edit.component';
import {NewsFormComponent} from './components/news/news-form/news-form.component';
import {CompanyComponent} from './components/company/company.component';
import {CompanyEditComponent} from './components/company/company-edit/company-edit.component';
import {CustomerComponent} from './components/customer/customer.component';
import {CustomerEditComponent} from './components/customer/customer-edit/customer-edit.component';
import {NotificationsBadgeComponent} from './components/notifications/notifications-badge/notifications-badge.component';
import {FormGroupHelperService} from './services/form-group-helper.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthComponent} from './components/auth/auth.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {RegistrationConfirmationComponent} from './components/registration/registration-confirmation/registration-confirmation.component';
import {RegistrationCompanyComponent} from './components/registration/registration-company/registration-company.component';
import {RegistrationCustomerComponent} from './components/registration/registration-customer/registration-customer.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {DatePipe, DateTimePipe} from './services/date.pipe';
import {DataTableComponent} from './components/data-table/data-table.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {CarModelComponent} from './components/car-model/car-model.component';
import {CarModelFormComponent} from './components/car-model/car-model-form/car-model-form.component';
import {CarModelAddComponent} from './components/car-model/car-model-add/car-model-add.component';
import {CarModelEditComponent} from './components/car-model/car-model-edit/car-model-edit.component';
import {CarFormComponent} from './components/cars/car-form/car-form.component';
import {CarEditComponent} from './components/cars/car-edit/car-edit.component';
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';
import {FactoriesComponent} from './components/factories/factories.component';
import {DeletePartDialogComponent} from './components/delete-part-dialog/delete-part-dialog.component';
import {FactoryMatchDialogComponent} from './components/factories/factory-match-request-dialog/factory-match-dialog.component';
import {FactoryDetailsComponent} from './components/factories/factory-details/factory-details.component';
import {FactoryPartsComponent} from './components/factories/factory-parts/factory-parts.component';
import {FactoriesDataTableComponent} from './components/factories/factories-data-table/factories-data-table.component';
import {PartDetailsDialogComponent} from './components/part-details-dialog/part-details-dialog.component';
import {AddPartDialogComponent} from './components/factories/add-part-dialog/add-part-dialog.component';
import {OrderDataTableComponent} from './components/orders/order-data-table/order-data-table.component';
import {CartDataComponent} from './components/orders/cart-data/cart-data.component';
import {OrderDetailsComponent} from './components/orders/order-details/order-details.component';
import {PricePipe} from './services/price.pipe';
import {StatusPipe} from './services/status.pipe';
import {PaymentCardComponent} from './components/payment-card/payment-card.component';
import {PaymentCardFormComponent} from './components/payment-card/payment-card-form/payment-card-form.component';
import {PaymentCardAddComponent} from './components/payment-card/payment-card-add/payment-card-add.component';
import {PaymentCardEditComponent} from './components/payment-card/payment-card-edit/payment-card-edit.component';
import {PaymentProcessComponent} from './components/payment-process/payment-process.component';
import {CardNumberPipe} from './services/card-number.pipe';
import {ProfileFormComponent} from './components/profile-form/profile-form.component';
import {FactoryComponent} from './components/factory/factory.component';
import {FactoryEditComponent} from './components/factory/factory-edit/factory-edit.component';


@NgModule({
  declarations: [
    AuthComponent,
    HomeComponent,
    PartsComponent,
    CarsComponent,
    OrdersComponent,
    EnginesComponent,
    EngineAddComponent,
    EngineEditComponent,
    BrakesComponent,
    BrakesFormComponent,
    BrakesEditComponent,
    EquipmentComponent,
    EquipmentAddComponent,
    EquipmentEditComponent,
    TiresComponent,
    TiresAddComponent,
    TiresEditComponent,
    WheelsComponent,
    WheelsAddComponent,
    WheelsEditComponent,
    WindowsComponent,
    WindowsAddComponent,
    WindowsEditComponent,
    PaintingComponent,
    PaintingAddComponent,
    PaintingEditComponent,
    FormGroupComponent,
    FilterBarComponent,
    PartsFormComponent,
    BrakesAddComponent,
    EngineFormComponent,
    WheelsFormComponent,
    WindowsFormComponent,
    TiresFormComponent,
    PaintingFormComponent,
    EquipmentFormComponent,
    LoadingSpinnerComponent,
    UserCanAccessDirective,
    SliderComponent,
    NotificationsComponent,
    NewsComponent,
    NewsAddComponent,
    NewsEditComponent,
    NewsFormComponent,
    CompanyComponent,
    CompanyEditComponent,
    CustomerComponent,
    CustomerEditComponent,
    NotificationsBadgeComponent,
    RegistrationComponent,
    RegistrationConfirmationComponent,
    RegistrationCompanyComponent,
    RegistrationCustomerComponent,
    ResetPasswordComponent,
    DatePipe,
    DateTimePipe,
    DataTableComponent,
    ChangePasswordComponent,
    CarModelComponent,
    CarModelFormComponent,
    CarModelAddComponent,
    CarModelEditComponent,
    CarFormComponent,
    CarEditComponent,
    ConfirmationDialogComponent,
    FactoriesComponent,
    DeletePartDialogComponent,
    FactoryMatchDialogComponent,
    FactoryDetailsComponent,
    FactoryPartsComponent,
    FactoriesDataTableComponent,
    PartDetailsDialogComponent,
    AddPartDialogComponent,
    OrderDataTableComponent,
    CartDataComponent,
    OrderDetailsComponent,
    PricePipe,
    StatusPipe,
    CardNumberPipe,
    PaymentCardComponent,
    PaymentCardFormComponent,
    PaymentCardAddComponent,
    PaymentCardEditComponent,
    PaymentProcessComponent,
    ProfileFormComponent,
    FactoryComponent,
    FactoryEditComponent
  ],
  exports: [
    LoadingSpinnerComponent,
    UserCanAccessDirective,
    CarlyMatModule,
    FormGroupComponent,
    DatePipe,
    DateTimePipe,
    PricePipe,
    StatusPipe,
    CardNumberPipe
  ],
  imports: [
    CommonModule,
    CarlyMatModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CarlyRoleGuard,
    FormGroupHelperService
  ]
})
export class CarlySharedModule {
}

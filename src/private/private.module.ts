import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { MessagersModule } from './messagers/messagers.module';
import { CommandesModule } from './commandes/commandes.module';
import { FournisseursModule } from './fournisseurs/fournisseurs.module';
import { CategoriesModule } from './categories/categories.module';
import { ProduitsModule } from './produits/produits.module';
import { EmployesModule } from './employes/employes.module';
import { DetailsCommandesModule } from './details-commandes/details-commandes.module';

@Module({
  imports: [
    ClientsModule,
    MessagersModule,
    CommandesModule,
    FournisseursModule,
    CategoriesModule,
    ProduitsModule,
    EmployesModule,
    DetailsCommandesModule,
  ],
})
export class PrivateModule {}

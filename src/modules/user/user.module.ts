import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DefaultPermissions } from '../organisation-permissions/entities/default-permissions.entity';
import { Permissions } from '../organisation-permissions/entities/permissions.entity';
import { OrganisationRole } from '../organisation-role/entities/organisation-role.entity';
import { DefaultRole } from '../organisation-role/entities/role.entity';
import { OrganisationMember } from '../organisations/entities/org-members.entity';
import { Organisation } from '../organisations/entities/organisations.entity';
import { OrganisationsService } from '../organisations/organisations.service';
import { Profile } from '../profile/entities/profile.entity';
import { User } from '../user/entities/user.entity';
import { UserController } from './user.controller';
import UserService from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Organisation,
      Profile,
      OrganisationMember,
      OrganisationRole,
      DefaultRole,
      DefaultPermissions,
      Permissions,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, Repository, OrganisationsService],
  exports: [UserService],
})
export class UserModule {}

import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractBaseEntity } from '../../../entities/base.entity';
import { Product } from '../../../modules/products/entities/product.entity';
import { Invite } from '../../invite/entities/invite.entity';
import { OrganisationRole } from '../../organisation-role/entities/organisation-role.entity';
import { User } from '../../user/entities/user.entity';
import { OrganisationMember } from './org-members.entity';
import { OrganisationPreference } from './org-preferences.entity';

@Entity()
export class Organisation extends AbstractBaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column('text', { nullable: false })
  description: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false, default: '' })
  industry: string;

  @Column({ nullable: false, default: '' })
  type: string;

  @Column({ nullable: false, default: '' })
  country: string;

  @Column('text', { nullable: false, default: '' })
  address: string;

  @ManyToOne(() => User, user => user.owned_organisations, { nullable: false })
  owner: User;

  @Column({ nullable: false, default: '' })
  state: string;

  @ManyToOne(() => User, user => user.created_organisations, { nullable: false })
  creator: User;

  @Column('boolean', { default: false, nullable: false })
  isDeleted: boolean;

  @OneToMany(() => Product, product => product.org, { cascade: true })
  products: Product[];

  @OneToMany(() => OrganisationPreference, preference => preference.organisation)
  preferences: OrganisationPreference[];

  @OneToMany(() => OrganisationRole, role => role.organisation, { eager: false })
  role: OrganisationRole[];

  @OneToMany(() => Invite, invite => invite.organisation.id)
  invites: Invite[];

  @OneToMany(() => OrganisationMember, organisationMember => organisationMember.organisation_id)
  organisationMembers: OrganisationMember[];
}

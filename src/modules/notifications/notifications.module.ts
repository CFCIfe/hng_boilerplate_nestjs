import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailService } from '../email/email.service';
import { NotificationSettings } from '../settings/notification-settings/entities/notification-setting.entity';
import { NotificationSettingsService } from '../settings/notification-settings/notification-settings.service';
import { User } from '../user/entities/user.entity';
import UserService from '../user/user.service';
import { Notification } from './entities/notification.entity';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';

@Module({
  imports: [TypeOrmModule.forFeature([Notification, User, NotificationSettings])],
  controllers: [NotificationsController],
  providers: [NotificationsService, Repository, UserService, NotificationSettingsService, EmailService],
})
export class NotificationsModule {}
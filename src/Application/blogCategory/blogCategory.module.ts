import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { BlogCategoryController } from '../../api/controllers/blogCategory/blogCategory.controller';
import { BlogCategoryNameExistsRule } from '../../api/cutsomValidators/blogCategoryNameExists';
import { IsAdminOrSuperAdminMiddleware } from '../../api/middleware/isAdminOrSuperAdmin.middleware';
import { IsAuthenticatedMiddleware } from '../../api/middleware/isAuthenticated.middleware';
import { BlogCategoryRepoModule } from '../../persistance/mysql/repos/blogCategory/blogCategoryRepo.module';
import { BlogCategoryRepo } from '../../persistance/mysql/repos/blogCategory/blogCategoryRepo.service';
import IBlogCategoryRepo from '../Interfaces/IBlogCategoryRepo';
import AddBlogCategoryCommand from './AddBlogCategoryCommand/AddBlogCategoryCommand.service';
import DeleteBlogCategoryCommand from './DeleteBlogCategoryCommand/DeleteBlogCategoryCommand.service';
import GetBlogCategoriesCommand from './GetBlogCategoriesCommand/GetBlogCategoriesCommand.service';
import UpdateBlogCategoryCommand from './UpdateBlogCategoryCommand/UpdateBlogCategoryCommand.service';

@Module({
  imports: [BlogCategoryRepoModule],
  providers: [
    { provide: IBlogCategoryRepo, useClass: BlogCategoryRepo },
    BlogCategoryNameExistsRule,
    GetBlogCategoriesCommand,
    AddBlogCategoryCommand,
    UpdateBlogCategoryCommand,
    DeleteBlogCategoryCommand,
  ],
  exports: [GetBlogCategoriesCommand, AddBlogCategoryCommand, UpdateBlogCategoryCommand, DeleteBlogCategoryCommand],
})
export class BlogCategoryModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IsAuthenticatedMiddleware, IsAdminOrSuperAdminMiddleware)
      .exclude({ path: '/api/blog-categories', method: RequestMethod.GET })
      .forRoutes(BlogCategoryController);
  }
}

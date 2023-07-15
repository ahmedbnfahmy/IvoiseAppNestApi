import { Injectable } from '@nestjs/common';

import IBlogCategoryRepo from '../../Interfaces/IBlogCategoryRepo';
import IDeleteBlogCategoryCommand from './IDeleteBlogCategoryCommand';

@Injectable()
export default class DeleteBlogCategoryCommand implements IDeleteBlogCategoryCommand {
  constructor(private blogCategoryRepo: IBlogCategoryRepo) {}
  async execute(blogCategoryId: number): Promise<void> {
    try {
      await this.blogCategoryRepo.delete(blogCategoryId);
    } catch (error) {
      throw error;
    }
  }
}

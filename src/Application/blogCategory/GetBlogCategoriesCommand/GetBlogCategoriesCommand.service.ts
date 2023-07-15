import { Injectable } from '@nestjs/common';

import BlogCategory from '../../../domain/blogCategory/blogCategory';
import IBlogCategoryRepo from '../../Interfaces/IBlogCategoryRepo';
import IGetBlogCategoriesCommand from './IGetBlogCategoriesCommand';

@Injectable()
export default class GetBlogCategoriesCommand implements IGetBlogCategoriesCommand {
  constructor(private blogCategoryRepo: IBlogCategoryRepo) {}

  async execute(searchTerm: string, limit: number, skip: number): Promise<{ blogCategories: BlogCategory[]; count: number }> {
    try {
      return this.blogCategoryRepo.getAll(searchTerm, limit, skip);
    } catch (error) {
      throw error;
    }
  }
}

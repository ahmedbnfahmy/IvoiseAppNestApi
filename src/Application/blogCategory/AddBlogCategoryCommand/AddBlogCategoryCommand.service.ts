import { Injectable } from '@nestjs/common';
import AddBlogCategoryBodyDto from '../../../api/controllers/blogCategory/DTOs/addBlogCategoryBody.dto';
import BlogCategory from '../../../domain/blogCategory/blogCategory';
import IBlogCategoryRepo from '../../Interfaces/IBlogCategoryRepo';
import IAddBlogCategoryCommand from './IAddBlogCategoryCommand';

@Injectable()
export default class AddBlogCategoryCommand implements IAddBlogCategoryCommand {
  constructor(private blogCategoryRepo: IBlogCategoryRepo) {}
  async execute(addBlogCategoryDto: AddBlogCategoryBodyDto): Promise<BlogCategory> {
    try {
      const blogCategory = { name: addBlogCategoryDto.name, parentCategoryId: addBlogCategoryDto.parentCategoryId } as BlogCategory;
      return this.blogCategoryRepo.create(blogCategory);
    } catch (error) {
      throw error;
    }
  }
}

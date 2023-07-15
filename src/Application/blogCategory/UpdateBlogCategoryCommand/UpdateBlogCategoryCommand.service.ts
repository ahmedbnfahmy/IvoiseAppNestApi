import { Injectable } from '@nestjs/common';
import UpdateBlogCategoryBodyDto from '../../../api/controllers/blogCategory/DTOs/updateBlogCategoryBody.dto';
import BlogCategory from '../../../domain/blogCategory/blogCategory';
import IBlogCategoryRepo from '../../Interfaces/IBlogCategoryRepo';
import IUpdateBlogCategoryCommand from './IUpdateBlogCategoryCommand';

@Injectable()
export default class UpdateBlogCategoryCommand implements IUpdateBlogCategoryCommand {
  constructor(private blogCategoryRepo: IBlogCategoryRepo) {}
  async execute(updateBlogCategoryDto: UpdateBlogCategoryBodyDto, id: number): Promise<BlogCategory> {
    try {
      const blogCategory = { name: updateBlogCategoryDto.name, parentCategoryId: updateBlogCategoryDto.parentCategoryId } as BlogCategory;
      return this.blogCategoryRepo.update(id, blogCategory);
    } catch (error) {
      throw error;
    }
  }
}

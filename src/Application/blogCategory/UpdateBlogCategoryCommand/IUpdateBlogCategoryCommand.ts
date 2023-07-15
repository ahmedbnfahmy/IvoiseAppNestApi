import UpdateBlogCategoryBodyDto from '../../../api/controllers/blogCategory/DTOs/updateBlogCategoryBody.dto';
import BlogCategory from '../../../domain/blogCategory/blogCategory';

export default interface IUpdateBlogCategoryCommand {
  execute(blogCategory: UpdateBlogCategoryBodyDto, id: number): Promise<BlogCategory>;
}

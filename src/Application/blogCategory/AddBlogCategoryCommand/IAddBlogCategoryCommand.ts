import AddBlogCategoryBodyDto from '../../../api/controllers/blogCategory/DTOs/addBlogCategoryBody.dto';
import BlogCategory from '../../../domain/blogCategory/blogCategory';

export default interface IAddBlogCategoryCommand {
  execute(blogCategory: AddBlogCategoryBodyDto): Promise<BlogCategory>;
}

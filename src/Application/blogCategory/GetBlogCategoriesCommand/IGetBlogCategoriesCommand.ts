import BlogCategory from '../../../domain/blogCategory/blogCategory';

export default interface IGetBlogCategoriesCommand {
  execute(name: string, limit: number, skip: number): Promise<{ blogCategories: BlogCategory[]; count: number }>;
}

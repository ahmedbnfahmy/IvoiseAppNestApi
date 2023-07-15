export default interface IDeleteBlogCategoryCommand {
  execute(blogCategoryId: number): Promise<void>;
}

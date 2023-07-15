export default abstract class IRepo<T> {
  abstract create(item: T): Promise<T>;
  abstract getById(id: number | string): Promise<T>;
  abstract update(id: number | string, updatedItem: T): Promise<T>;
  abstract delete(id: number | string): Promise<void>;
}

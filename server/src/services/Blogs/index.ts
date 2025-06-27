import { GetBlogsByUserRepository } from "../../repositories/Blogs";

export const GetBlogsByUserService = async (userId: string) => {
  try {
    const blogsByUser = await GetBlogsByUserRepository(userId);

    return blogsByUser;
  } catch (error) {}
};

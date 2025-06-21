import { Request, Response } from 'express';
import { GetBlogsByUserService } from '../../services/Blogs';

export const GetBlogsByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;

  try {
    const blogsByUser = await GetBlogsByUserService(userId);

    return response.status(200).json(blogsByUser);
  } catch (error) {}
};

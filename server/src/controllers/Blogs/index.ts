import { Request, Response } from 'express';
import {
  GetBlogsByUserService,
  CreateBlogsByUserService,
} from '../../services/Blogs';
import { ThrowControllerException } from '../../utils/Functions';

export const GetBlogsByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;
  const route = 'GetBlogsByUser';

  try {
    const blogsByUser = await GetBlogsByUserService(route, userId);

    return response.status(200).json(blogsByUser);
  } catch (error) {
    ThrowControllerException(error, response, route, userId);
  }
};

export const CreateBlogsByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;
  const route = 'CreateBlogsByUser';

  try {
    const blogsByUserInserted = await CreateBlogsByUserService(route, userId);

    return response.status(201).json(blogsByUserInserted);
  } catch (error) {}
};

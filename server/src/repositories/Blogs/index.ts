import { prisma } from '../../config/Repository';
import { GetBlogsByUserToInsert } from '../../scripts/Blogs';
import {
  ThrowRepositoryException,
  ThrowConflictException,
} from '../../utils/Functions';

export const GetBlogsByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const blogsByUser = await prisma.blogs.findMany({
      where: { user_ID: userId },
    });

    const blogsByUserFormatted = blogsByUser.map(blog => ({
      ...blog,
      id: blog.blog_ID,
      blog_ID: undefined,
    }));

    return blogsByUserFormatted;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};

export const CreateBlogsByUserRepository = async (
  route: string,
  userId: string,
) => {
  const blogsByUserToInsert = GetBlogsByUserToInsert(userId);

  try {
    const existingBlogsByUser = await GetBlogsByUserRepository(route, userId);

    const existingBlogsNamesByUser = new Set(
      existingBlogsByUser?.map(existingBlogName =>
        existingBlogName.name.toLowerCase().trim(),
      ),
    );

    const blogsToInsert = blogsByUserToInsert.filter(
      blogToInsert =>
        !existingBlogsNamesByUser.has(blogToInsert.name.toLowerCase().trim()),
    );

    if (blogsToInsert.length === 0) {
      ThrowConflictException(route, userId);
    }

    const blogsByUserInserted = await prisma.$transaction(async tx => {
      const inserted = [];

      for (const blog of blogsToInsert) {
        const blogToInsert = await tx.blogs.create({
          data: blog,
        });

        inserted.push(blogToInsert);
      }

      return inserted;
    });

    return blogsByUserInserted;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};

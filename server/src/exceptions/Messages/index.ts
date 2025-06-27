export const Controller = {
  GetBlogsByUser: ({ userId }: { userId: string }) =>
    `Failed to process blog(s) request for user ID ${userId}.`,
  GetProfileById: ({ userId }: { userId: string }) =>
    `Failed to process request for user ID ${userId}.`,
  CreateProfile: () => `Failed to process request to create new profile.`,
};

export const Service = {
  GetBlogsByUser: ({ userId }: { userId: string }) =>
    `Unable to retrieve blog(s) for user ID ${userId}.`,
  GetProfileById: ({ userId }: { userId: string }) =>
    `Unable to retrieve profile for user ID ${userId}.`,
  CreateProfile: () => `Unable to create new profile.`,
};

export const Repository = {
  GetBlogsByUser: ({ userId }: { userId: string }) =>
    `Failed to fetch blog(s) for user ID ${userId}.`,
  GetProfileById: ({ userId }: { userId: string }) =>
    `Failed to fetch profile for user ID ${userId}.`,
  CreateProfile: () => `Failed to create new profile.`,
};

export const NotFound = {
  GetBlogsByUser: ({ userId }: { userId: string }) =>
    `Blog(s) from user ID ${userId} not found.`,
  GetProfileById: ({ userId }: { userId: string }) =>
    `Profile with user ID ${userId} not found.`,
};

export const AuthenticationFailed = {
  AuthenticationFailed: () => `Failed to authenticate the request.`,
};

export const InvalidToken = {
  InvalidToken: () => `Invalid token.`,
};

export const RestrictWriteRoute = {
  RestrictWriteRoute: () =>
    `Write routes are disabled in production environment`,
};

export const Unknown = (layer: string, route: string) =>
  `Unknown error in the layer ${layer} and route ${route}`;

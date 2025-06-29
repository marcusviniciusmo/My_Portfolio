export const Controller = {
  GetBlogsByUser: ({ userId }: { userId: string }) =>
    `Failed to process blog(s) request for user ID ${userId}.`,
  CreateBlogsByUser: ({ userId }: { userId: string }) =>
    `Failed to create blog(s) for user ID ${userId}.`,
  GetCertificateAreas: () =>
    `Failed to process request to get certificate areas.`,
  CreateCertificateAreas: () =>
    `Failed to process request to create certificate area(s).`,
  GetCertificateTypes: () =>
    `Failed to process request to get certificate type(s).`,
  CreateCertificateTypes: () =>
    `Failed to process request to create certificate type(s).`,
  GetCertificatesByUser: ({ userId }: { userId: string }) =>
    `Failed to process request for user ID ${userId}.`,
  GetProfileById: ({ userId }: { userId: string }) =>
    `Failed to process request for user ID ${userId}.`,
  CreateProfile: () => `Failed to process request to create new profile.`,
};

export const Service = {
  GetBlogsByUser: ({ userId }: { userId: string }) =>
    `Unable to retrieve blog(s) for user ID ${userId}.`,
  CreateBlogsByUser: ({ userId }: { userId: string }) =>
    `Unable to create blog(s) for user ID ${userId}.`,
  GetCertificateAreas: () => `Unable to retrieve certificate areas.`,
  CreateCertificateAreas: () => `Unable to create certificate area(s).`,
  GetCertificateTypes: () => `Unable to retrieve certificate type(s).`,
  CreateCertificateTypes: () => `Unable to create certificate type(s).`,
  GetCertificatesByUser: ({ userId }: { userId: string }) =>
    `Unable to retrieve certificate(s) for user ID ${userId}.`,
  GetProfileById: ({ userId }: { userId: string }) =>
    `Unable to retrieve profile for user ID ${userId}.`,
  CreateProfile: () => `Unable to create new profile.`,
};

export const Repository = {
  GetBlogsByUser: ({ userId }: { userId: string }) =>
    `Failed to fetch blog(s) for user ID ${userId}.`,
  CreateBlogsByUser: ({ userId }: { userId: string }) =>
    `Failed to create blog(s) for user ID ${userId}.`,
  GetCertificateAreas: () => `Failed to fetch certificate areas.`,
  CreateCertificateAreas: () => `Failed to create certificate area(s).`,
  GetCertificateTypes: () => `Failed to fetch certificate type(s).`,
  CreateCertificateTypes: () => `Failed to create certificate type(s).`,
  GetCertificatesByUser: ({ userId }: { userId: string }) =>
    `Failed to fetch certificate(s) for user ID ${userId}.`,
  GetProfileById: ({ userId }: { userId: string }) =>
    `Failed to fetch profile for user ID ${userId}.`,
  CreateProfile: () => `Failed to create new profile.`,
};

export const NotFound = {
  GetBlogsByUser: ({ userId }: { userId: string }) =>
    `Blog(s) from user ID ${userId} not found.`,
  GetCertificateAreas: () => `Certificate areas not found.`,
  GetCertificateTypes: () => `Certificate type(s) not found.`,
  GetCertificatesByUser: ({ userId }: { userId: string }) =>
    `Certificate(s) with user ID ${userId} not found.`,
  GetProfileById: ({ userId }: { userId: string }) =>
    `Profile with user ID ${userId} not found.`,
};

export const Conflict = {
  CreateBlogsByUser: ({ userId }: { userId: string }) =>
    `Blog(s) with user ID ${userId} exists on database.`,
  CreateCertificateAreas: () => `Certificate area(s) exists on database.`,
  CreateCertificateTypes: () => `Certificate type(s) exists on database.`,
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

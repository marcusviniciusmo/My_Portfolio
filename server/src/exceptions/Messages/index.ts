export const Controller = {
  GetProfileById: ({ userId }: { userId: string }) =>
    `Failed to process request for user ID ${userId}.`,
  CreateProfile: () => `Failed to process request to create new profile.`,
};

export const Service = {
  GetProfileById: ({ userId }: { userId: string }) =>
    `Unable to retrieve profile for user ID ${userId}.`,
  CreateProfile: () => `Unable to create the new profile.`,
};

export const Repository = {
  GetProfileById: ({ userId }: { userId: string }) =>
    `Failed to fetch profile for user ID ${userId}.`,
  CreateProfile: () => `Failed to create the new profile.`,
};

export const NotFound = {
  GetProfileById: ({ userId }: { userId: string }) =>
    `Profile with user ID ${userId} not found.`,
};

export const AuthenticationFailed = {
  Authentication: () => `Failed to authenticate the request.`,
};

export const InvalidToken = {
  Token: () => `Invalid token.`,
};

export const RestrictWriteRoutes = {
  RestrictWrite: () => `Write routes are disabled in production environment.`,
};

export const Unknown = (layer: string, route: string) =>
  `Unknown error in the layer ${layer} and route ${route}.`;

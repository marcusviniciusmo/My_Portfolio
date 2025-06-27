export const Controller = {
  GetProfileById: ({ userId }: { userId: string }) =>
    `Failed to process request for user ID ${userId}.`,
  CreateProfile: () => `Failed to process request to create new profile.`,
};

export const Service = {
  GetProfileById: ({ userId }: { userId: string }) =>
    `Unable to retrieve profile for user ID ${userId}.`,
  CreateProfile: () => `Unable to create new profile.`,
};

export const Repository = {
  GetProfileById: ({ userId }: { userId: string }) =>
    `Failed to fetch profile for user ID ${userId}.`,
  CreateProfile: () => `Failed to create new profile.`,
};

export const NotFound = {
  GetProfileById: ({ userId }: { userId: string }) =>
    `Profile with user ID ${userId} not found.`,
};

export const AuthenticationFailed = {
  AuthenticationFailed: () => `Failed to authenticate the request.`,
};

export const InvalidToken = {
  InvalidToken: () => `Invalid token.`,
};

export const Unknown = (layer: string, route: string) =>
  `Unknown error in the layer ${layer} and route ${route}`;

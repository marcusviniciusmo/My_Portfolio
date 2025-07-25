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
  CreateCertificatesByUser: ({ userId }: { userId: string }) =>
    `Failed to process request for user ID ${userId}.`,
  GetEducationByUser: ({ userId }: { userId: string }) =>
    `Failed to process request to get education for user ID ${userId}.`,
  CreateEducationByUser: ({ userId }: { userId: string }) =>
    `Failed to process request to create education for user ID ${userId}.`,
  GetExperiencesByUser: ({ userId }: { userId: string }) =>
    `Failed to process request to get experience(s) for user ID ${userId}.`,
  CreateExperiencesByUser: ({ userId }: { userId: string }) =>
    `Failed to process request to create experience(s) for user ID ${userId}.`,
  GetExpertisesByUser: ({ userId }: { userId: string }) =>
    `Failed to process request to get expertise(s) for user ID ${userId}.`,
  CreateExpertisesByUser: ({ userId }: { userId: string }) =>
    `Failed to process request to create expertise(s) for user ID ${userId}.`,
  GetIcons: () => `Failed to process request to get icon(s).`,
  CreateIcons: () => `Failed to process request to create icon(s).`,
  GetKnowledgesByUser: ({ userId }: { userId: string }) =>
    `Failed to process request to get knowledge(s) for user ID ${userId}.`,
  CreateKnowledgesByUser: ({ userId }: { userId: string }) =>
    `Failed to process request to create knowledge(s) for user ID ${userId}.`,
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
  CreateCertificatesByUser: ({ userId }: { userId: string }) =>
    `Unable to create certificate(s) for user ID ${userId}.`,
  GetEducationByUser: ({ userId }: { userId: string }) =>
    `Unable to retrieve education for user ID ${userId}.`,
  CreateEducationByUser: ({ userId }: { userId: string }) =>
    `Unable do create education for user ID ${userId}.`,
  GetExperiencesByUser: ({ userId }: { userId: string }) =>
    `Unable to retrieve experience(s) for user ID ${userId}.`,
  CreateExperiencesByUser: ({ userId }: { userId: string }) =>
    `Unable to create experience(s) for user ID ${userId}.`,
  GetExpertisesByUser: ({ userId }: { userId: string }) =>
    `Unable to retrieve expertise(s) for user ID ${userId}.`,
  CreateExpertisesByUser: ({ userId }: { userId: string }) =>
    `Unable to create expertise(s) for user ID ${userId}.`,
  GetIcons: () => `Unable to retrieve icon(s).`,
  CreateIcons: () => `Unable to create icon(s).`,
  GetKnowledgesByUser: ({ userId }: { userId: string }) =>
    `Unable to retrieve knowledge(s) for user ID ${userId}.`,
  CreateKnowledgesByUser: ({ userId }: { userId: string }) =>
    `Unable to create knowledge(s) for user ID ${userId}.`,
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
  CreateCertificatesByUser: ({ userId }: { userId: string }) =>
    `Failed to create certificate(s) for user ID ${userId}.`,
  GetEducationByUser: ({ userId }: { userId: string }) =>
    `Failed to fetch education for user ID ${userId}.`,
  CreateEducationByUser: ({ userId }: { userId: string }) =>
    `Failed to create education for user ID ${userId}.`,
  GetExperiencesByUser: ({ userId }: { userId: string }) =>
    `Failed to fetch experience(s) for user ID ${userId}.`,
  CreateExperiencesByUser: ({ userId }: { userId: string }) =>
    `Failed to create experience(s) for user ID ${userId}.`,
  GetExpertisesByUser: ({ userId }: { userId: string }) =>
    `Failed to fetch expertise(s) for user ID ${userId}.`,
  CreateExpertisesByUser: ({ userId }: { userId: string }) =>
    `Failed to create expertise(s) for user ID ${userId}.`,
  GetIcons: () => `Failed to fetch icon(s).`,
  CreateIcons: () => `Failed to create icon(s).`,
  GetKnowledgesByUser: ({ userId }: { userId: string }) =>
    `Failed to fetch knowledge(s) for user ID ${userId}.`,
  CreateKnowledgesByUser: ({ userId }: { userId: string }) =>
    `Failed to create knowledge(s) for user ID ${userId}.`,
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
  GetEducationByUser: ({ userId }: { userId: string }) =>
    `Education with user ID ${userId} not found.`,
  GetExperiencesByUser: ({ userId }: { userId: string }) =>
    `Experience(s) with user ID ${userId} not found.`,
  GetExpertisesByUser: ({ userId }: { userId: string }) =>
    `Expertise(s) with user ID ${userId} not found.`,
  GetIcons: () => `Icon(s) not found.`,
  GetKnowledgesByUser: ({ userId }: { userId: string }) =>
    `Knowledge(s) with user ID ${userId} not found.`,
  GetProfileById: ({ userId }: { userId: string }) =>
    `Profile with user ID ${userId} not found.`,
};

export const Conflict = {
  CreateBlogsByUser: ({ userId }: { userId: string }) =>
    `Blog(s) with user ID ${userId} exists on database.`,
  CreateCertificateAreas: () => `Certificate area(s) exists on database.`,
  CreateCertificateTypes: () => `Certificate type(s) exists on database.`,
  CreateCertificatesByUser: ({ userId }: { userId: string }) =>
    `Certificate(s) with user ID ${userId} exists on database.`,
  CreateEducationByUser: ({ userId }: { userId: string }) =>
    `Education with user ID ${userId} exists on database.`,
  CreateExperiencesByUser: ({ userId }: { userId: string }) =>
    `Experience(s) with user ID ${userId} exists on database.`,
  CreateExpertisesByUser: ({ userId }: { userId: string }) =>
    `Expertise(s) with user ID ${userId} exists on database.`,
  CreateIcons: () => `Icon(s) exists on database.`,
  CreateKnowledgesByUser: ({ userId }: { userId: string }) => 
    `Knowledge(s) with user ID ${userId} exists on database.`
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

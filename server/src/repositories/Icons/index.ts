import { prisma } from "../../config/Repository";

export const GetIconsRepository = async () => {
  try {
    const icons = await prisma.icons.findMany();

    return icons;
  } catch (error) {}
};

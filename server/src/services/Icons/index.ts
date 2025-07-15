import { GetIconsRepository } from '../../repositories/Icons';

export const GetIconsService = async () => {
  try {
    const icons = await GetIconsRepository();

    return icons;
  } catch (error) {}
};

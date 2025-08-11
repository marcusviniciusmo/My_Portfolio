import { GetNetworksByUserRepository } from '../../repositories/Networks';

export const GetNetworksByUserService = async (userId: string) => {
  try {
    const networksByUser = await GetNetworksByUserRepository(userId);

    return networksByUser;
  } catch (error) {}
};

import * as faker from 'faker';
import type { NextApiRequest, NextApiResponse } from 'next'
import type Friend from '@/interfaces/friend.interface';

type FriendsData = {
  friends: Friend[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FriendsData>
) {
  res.status(200).json({
    friends: Array.from({ length: 10 }, () => ({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      avatar: faker.image.imageUrl(100, 100, 'avatars', true),
    }))
  });
}

import faker from 'faker';
import type { NextApiRequest, NextApiResponse } from 'next'

type Friend = {
  name: string;
  lastName: string;
  email: string;
  avatar: string;
}

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
      avatar: faker.image.avatar(),
    }))
  });
}

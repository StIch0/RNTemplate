import { mockList } from '@app/common/constants/mockData';

const getSomeData = async () => {
  try {
    return await Promise.resolve(mockList);
  } catch (error) {
    return Promise.reject(error);
  }
};

export { getSomeData };

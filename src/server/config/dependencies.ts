import { useCases } from '../useCases';
import { repositories } from '../frameworks/repository/inMemory';

export default {
  useCases,
  ...repositories,
};

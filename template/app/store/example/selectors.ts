import { listSelector } from './slice';

const getAllList = listSelector.selectAll;

const getListEntities = listSelector.selectEntities;

export { getListEntities, getAllList };

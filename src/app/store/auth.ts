import {proxy, useSnapshot} from 'valtio';

interface Store {
  products: string[];
  productSelectedId: string;
  status: StatusType;
}

export type StatusType = 'pending' | 'refused' | 'blocked' | 'approved';

const store = proxy<Store>({
  products: [],
  productSelectedId: '',
  status: 'pending',
});

const actions = {
  changeStatus(selectStatus: StatusType) {
    store.status = selectStatus;
  },
};

export function useModeration() {
  const snapshot = useSnapshot(store);
  return {snapshot, actions};
}

import { dashboardApiRef } from "../api/api";
import { useApi } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';

export function useContacts() {
  const dashboardApi = useApi(dashboardApiRef);
  const response = useAsync(() => dashboardApi.getContacts(), []);
  return (response && response.value) ? response.value.data : [];
}
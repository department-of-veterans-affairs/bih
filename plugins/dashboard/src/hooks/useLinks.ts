import { dashboardApiRef } from "../api/api";
import { useApi } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';

export function useLinks() {
  const dashboardApi = useApi(dashboardApiRef);
  const response = useAsync(() => dashboardApi.getImportantLinks(), []);
  return (response && response.value) ? response.value.data : [];
}

import { request } from '@/utils/Request';

//
export const getValue = async (token: string): Promise<any | null> => {
  let response = await request('/api/kv/get', {
    headers: {
      Authorization: token,
      'idns-kv-version': '0',
    },
  });
  console.log(response, 'getValue');

  return response;
};

//
export const setValue = async (
  token: string,
  value: string,
  version: string,
): Promise<any | null> => {
  let response = await request(`/api/kv/set/${value}`, {
    headers: {
      Authorization: token,
      'idns-kv-version': version,
    },
  });
  console.log(response, 'setValue');

  return response;
};

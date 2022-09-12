import { setLocalValue } from '@/utils';
import { request } from '@/utils/Request';

//
export const userImportAndLogin = async (
  password: string,
  phrase: string,
): Promise<any | null> => {
  //

  let public_key =
    '7a0b9c92b65218204416d335c7b85ef9d47da1ba92bbb2b3a23224c6cd38ce54';
  let application_key =
    'c85c0ddf8e2debd5883c1f53069e22fbea4b333c562ab3dee51b54485620a918';

  let response = await request('/api/login/app', {
    method: 'POST',
    data: {
      public_key: public_key,
      application_key: application_key,
      signature:
        '24ea8ce0b8bd085040d4c60d8eb2cd5c7ab06a39781d0ab5fa89c02d7decc17c2cc69ff9d694a234b6345dfa38bcfda9eded5887b799084d51b94fda9b2de189',
      nonce: '88549624',
    },
    headers: {},
  });

  console.log(response, '======');

  setLocalValue('public_key', public_key);
  setLocalValue('application_key', application_key);
  setLocalValue('token', response);

  return response;
};

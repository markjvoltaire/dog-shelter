import { checkError, client } from './client';

export async function updateDog(name, bio, image, age) {
  const resp = await client.from('dogs')
  .update( { name, bio, image, age } );
  .eq('id', id)

  return checkError(resp)
}

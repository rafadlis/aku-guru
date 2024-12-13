import { getTugas } from './get-tugas';

export const TugasTable = async () => {
  const data = await getTugas();
  return <div>{JSON.stringify(data)}</div>;
};

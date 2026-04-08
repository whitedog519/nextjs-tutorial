import { revalidatePath } from "next/cache";

async function getHeavyData() {
  'use cache'
  await new Promise((resolve) => setTimeout(resolve, 3000));
  revalidatePath('/');
  return '重いデータの取得完了';
}

export default async function Home() {
  const data = await getHeavyData();
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

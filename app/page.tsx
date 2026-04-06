export default function Home() {
  const createAction = async (formData: FormData) => {
    'use server';
    const name = formData.get('name');
    console.log('Server Action で実行されました。')
  };

  return <form action={createAction}>
    <input type="text" name="name" />
    <button type="submit">送信</button>
  </form>
}

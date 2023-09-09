export default function Home() {
  return (
    <main>
      <form action={serverAction}>
        <input type='hidden' defaultValue='hello world' name='name' />
        <button type='submit'>
          CLICK ME
        </button>
      </form>

    </main>
  )
}

async function serverAction (formData) {
  'use server';
  console.log(formData.get('name'))
}

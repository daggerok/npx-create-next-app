async function CardCount() {
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const response = await fetch('https://api.scryfall.com/sets');
    const body = await response.json();
    // const totalCards = body.reduce((acc: number, el: any) => acc + (!el ? 0 : 1), 0);
    const totalCards = body.data.reduce((acc: number, el: any) => acc + el['card_count'], 0);
    return <div>{totalCards.toLocaleString()} cards in total</div>;
}

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-8 gap-y-8">
          <CardCount />
          <div className="grid grid-cols-4 gap-2 justify-items-center"></div>
      </main>
  )
}

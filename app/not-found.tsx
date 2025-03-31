// app/not-found.tsx
export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-32 text-center">
        <h1 className="mb-4 text-3xl font-bold text-black dark:text-white">
          Página não encontrada
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          O conteúdo que você procurava não existe ou foi movido.
        </p>
        <a
          href="/"
          className="inline-block rounded-full bg-black px-6 py-3 font-medium text-white transition-all hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
        >
          Voltar para a Home
        </a>
      </div>
    );
  }
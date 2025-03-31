// app/not-found.tsx
export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center px-4">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
          Página não encontrada
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
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
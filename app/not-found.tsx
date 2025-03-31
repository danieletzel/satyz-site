import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black px-4">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
        Página não encontrada
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        A página que você está procurando não existe.
      </p>
      <Link
        href="/"
        className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
      >
        Voltar para Home
      </Link>
    </div>
  );
}
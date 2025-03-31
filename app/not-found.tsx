// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col text-center px-4 py-16">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-4">404 - Página não encontrada</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        A página que você tentou acessar não existe ou foi movida.
      </p>
      <Link href="/" className="text-primary underline hover:opacity-75">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
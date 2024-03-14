export default function Home() {
  const { NEXT_PUBLIC_APP_URL } = process.env

  return (
    <main className="min-h-screen">
      <a
        className="text-3xl font-bold text-gray-200"
        href={`${NEXT_PUBLIC_APP_URL}/products`}
      >
        Get Started
      </a>
    </main>
  )
}

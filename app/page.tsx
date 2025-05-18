export const dynamic = "force-static"

export default function Home() {
  return <div style={{ display: "none" }}>Redirecting to PayGo Finance...</div>
}

// This ensures the page is redirected on the client side as well
export function generateMetadata() {
  return {
    metadataBase: new URL("https://paygo-finance.vercel.app"),
    title: "PayGo Finance",
    description: "Redirecting to PayGo Finance",
  }
}

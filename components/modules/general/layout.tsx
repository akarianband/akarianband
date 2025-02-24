import { ReactNode } from "react"

import Header from "./header"
import Footer from "./footer"

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<body className={`antialiased`}>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</body>
	)
}

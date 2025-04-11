import { ReactNode } from "react"
import { blackchancery, tisk } from "@/lib/fonts"

import Header from "./header"
import Footer from "./footer"

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<body
			className={`${tisk.variable} ${blackchancery.variable} antialiased`}
		>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</body>
	)
}

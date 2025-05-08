import { ReactNode } from "react"
import { blackchancery, tisk } from "@/lib/fonts"

import Header from "./header"
import Footer from "./footer"
import { ThemeProvider } from "./theme"

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<body
			className={`${tisk.variable} ${blackchancery.variable} antialiased`}
		>
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				disableTransitionOnChange
			>
				<Header />
				<main>
					{children}
				</main>
				<Footer />
			</ThemeProvider>
		</body>
	)
}

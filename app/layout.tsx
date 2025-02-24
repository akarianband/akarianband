import type { Metadata } from "next"
import { ReactNode } from "react"

import "./globals.css"
import Layout from "@/components/modules/general/layout"

export const metadata: Metadata = {
	title: "Imba Token",
	description: "Imba Token"
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en">
			<head />
			<Layout>
				{children}
			</Layout>
		</html>
	)
}

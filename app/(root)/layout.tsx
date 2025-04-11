import type { Metadata } from "next"
import { ReactNode } from "react"

import Layout from "@/components/modules/general/layout"

import "./globals.css"

export const metadata: Metadata = {
	metadataBase: new URL("https://akarian.band"),
	title: {
		template: "%s | Akarian",
		default: "Akarian",
		absolute: "Akarian | A creative movement you can be part of"
	},
	description: "More than a band, a creative movement you can be part of",
	applicationName: "Akarian",
	authors: [
		{
			url: new URL("https://nizarsyahmi37.com"),
			name: "Nizar Syahmi bin Nazlan"
		}
	],
	keywords: [
		"akarianband",
		"akarian band",
		"akarian",
		"music band",
		"band",
		"music",
		"creative movement",
		"NizarSyahmi37"
	],
	creator: "NizarSyahmi37",
	publisher: "NizarSyahmi37",
	alternates: {
		canonical: "/",
		languages: {
			"en": "/"
		}
	},
    manifest: new URL("https://akarian.band/manifest.json"),
	openGraph: {
		title: "Akarian",
		description: "More than a band, a creative movement you can be part of",
		emails: [
			"support@akarian.band",
		],
		siteName: "Akarian",
		locale: "en",
		alternateLocale: [

		],
		url: new URL("https://akarian.band"),
		type: "website",
	},
    twitter: {
		site: "@akarianband",
		siteId: "1892977447282581504",
		creator: "@akarianband",
		creatorId: "1892977447282581504",
		title: {
			template: "%s | Akarian",
			default: "Akarian",
			absolute: "Akarian"
		}
	}
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

"use client"

import { QueryClient, QueryClientProvider, isServer } from "@tanstack/react-query"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

const makeQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000
			}
		}
	})

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
	if (isServer) return makeQueryClient()

	if (!browserQueryClient) browserQueryClient = makeQueryClient()
	return browserQueryClient
}

export function Providers({ children, ...props }: ThemeProviderProps) {
	const queryClient = getQueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<NextThemesProvider {...props}>{children}</NextThemesProvider>
		</QueryClientProvider>
	)
}

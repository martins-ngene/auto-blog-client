import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MDXProvider } from "@mdx-js/react";

import Layout from "@/components/layout";
import MDXComponents from "@/components/mdx_components";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MDXProvider components={MDXComponents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </QueryClientProvider>
  );
}

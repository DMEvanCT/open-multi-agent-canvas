"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CopilotKit } from "@copilotkit/react-core";
import { CoAgentsProvider } from "@/components/coagents-provider";
import { Auth0Provider } from "@/components/auth0-provider";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Auth0Provider>
        <CopilotKit
          showDevConsole={false}
          publicApiKey={process.env.NEXT_PUBLIC_COPILOT_CLOUD_API_KEY}
        >
          <CoAgentsProvider>{children}</CoAgentsProvider>
        </CopilotKit>
      </Auth0Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CheckinScreen from "./CheckinScreen";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CheckinScreen />
    </QueryClientProvider>
  );
};

export default App;

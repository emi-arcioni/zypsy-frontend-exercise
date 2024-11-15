// TestWrapper.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CategoryProvider } from "../providers/CategoryProvider";

export default function TestWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <CategoryProvider>{children}</CategoryProvider>
    </BrowserRouter>
  );
}

/**
 * @fileoverview Page Loading Context for Global Loading State Management
 *
 * This file defines the `PageLoadingContext` and `PageLoadingProvider`,
 * which are used to manage the global loading state of the application.
 * It provides a way to track whether a page is currently loading and to update that state.
 */

import {
  createContext,
  useState,
  useMemo,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';

interface PageLoadingContextType {
  isPageLoading: boolean;
  setIsPageLoading: Dispatch<SetStateAction<boolean>>;
}

const PageLoadingContext = createContext<PageLoadingContextType | undefined>(
  undefined,
);

/**
 * Context provider for page loading state.
 * Manages the `isPageLoading` state and provides it to consuming components.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered within the provider's scope.
 * @returns {JSX.Element} The provider component.
 */
export function PageLoadingProvider({ children }: { children: ReactNode }): JSX.Element {
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true); // Default to true

  const value = useMemo(
    () => ({ isPageLoading, setIsPageLoading }),
    [isPageLoading],
  );

  return (
    <PageLoadingContext.Provider value={value}>
      {children}
    </PageLoadingContext.Provider>
  );
};

/**
 * Custom hook to consume the `PageLoadingContext`.
 * Provides access to the `isPageLoading` state and `setIsPageLoading` setter.
 *
 * @returns {PageLoadingContextType} The context value containing `isPageLoading` and `setIsPageLoading`.
 * @throws {Error} If `usePageLoading` is used outside of a `PageLoadingProvider`.
 */
export const usePageLoading = (): PageLoadingContextType => {
  const context = useContext(PageLoadingContext);
  if (context === undefined) {
    throw new Error('usePageLoading must be used within a PageLoadingProvider');
  }
  return context;
};
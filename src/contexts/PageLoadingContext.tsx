import React,
{
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

export const PageLoadingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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

export const usePageLoading = (): PageLoadingContextType => {
  const context = useContext(PageLoadingContext);
  if (context === undefined) {
    throw new Error('usePageLoading must be used within a PageLoadingProvider');
  }
  return context;
}; 
import { Component, ErrorInfo, ReactNode } from "react";
import Dugme from "./Dugme";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uhvaćena greška od strane graničnog hvatača:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center flex flex-col items-center min-h-screen mt-8">
          <h1 className="text-3xl font-bold">Oops! Nešto je pošlo po zlu.</h1>
          <p className="mt-2">Pokušajte osvježiti stranicu ili se vratite nazad.</p>
          <Dugme
            className="mt-4 py-2"
            text="Nazad"
            onClick={() => {
              window.history.back();
              setTimeout(() => {
                window.location.reload();
              }, 100);
            }}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

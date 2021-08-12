import React from "react";

interface ErrorComponentProps {
  error: any;
}

function withError<P>(Component: React.ComponentType<P>, ErrorComponent: React.ComponentType<ErrorComponentProps>) {
  return class extends React.Component<P> {
    state = {
      error: false
    }

    render() {
      const { error } = this.state;
      const props = this.props;

      return (
        error
          ? <ErrorComponent error={error} />
          : <Component {...props as P} />
      );
    }
  }
}

export default withError;

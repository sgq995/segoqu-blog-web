import React, { Dispatch, SetStateAction } from 'react';

function withLoading<P>(Component: React.ComponentType<P>, loaderElement: JSX.Element) {
  return class extends React.Component<P> {
    state = {
      loading: false
    }

    render() {
      const { loading } = this.state;
      const props = this.props;

      const setLoading: Dispatch<SetStateAction<boolean>> = (loading) => {
        // loading(false);
        // S | ((prevState: S) => S);
        console.log('called')
        if (typeof loading === 'boolean') {
          this.setState({ loading });
        } else {
          this.setState((prevState: { loading: boolean }) => ({
            loading: loading(prevState.loading)
          }))
        }
      }

      return (
        <>
          <Component
            {...props as P}
            setLoading={setLoading}
          />
          {loading && loaderElement}
        </>
      );
    }
  }
}

export default withLoading;

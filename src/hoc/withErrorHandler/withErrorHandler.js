import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, Axios) =>
  class WithErrorHandler extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
      };
      Axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      Axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error });
        }
      );
    }

    closeErrorHanlder = () => {
      this.setState({ error: null });
    };

    render() {
      const { error } = this.state;
      return (
        <Aux>
          <Modal show={!!error} close={this.closeErrorHanlder}>
            {error ? error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };

export default withErrorHandler;

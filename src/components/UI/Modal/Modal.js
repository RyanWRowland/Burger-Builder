import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ children, show, cancel }) => (
  <Aux>
    <Backdrop show={show} cancel={cancel} />
    <div
      className={styles.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      {children}
    </div>
  </Aux>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default Modal;

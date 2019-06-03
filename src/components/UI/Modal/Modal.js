import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ children, show, close }) => (
  <Aux>
    <Backdrop show={show} click={close} />
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

const shouldNotUpdate = (prevProps, nextProps) =>
  nextProps.show === prevProps.show &&
  nextProps.children === prevProps.children;

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default React.memo(Modal, shouldNotUpdate);

// AboutModal.tsx
import React from 'react';
import CustomModal from './Modal';

interface AboutModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onRequestClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onRequestClose, children }) => {
  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Nosotros</h2>
      {children}
    </CustomModal>
  );
};

export default AboutModal;
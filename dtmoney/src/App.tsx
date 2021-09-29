//import styled from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';

import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransacitionModalOpen, setIsNewTransacitionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransacitionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransacitionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <GlobalStyle />

      <NewTransactionModal
        isOpen={isNewTransacitionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Dashboard />

    </>

  );
}



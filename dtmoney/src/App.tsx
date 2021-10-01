import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { TransactionsProvider } from './useTransactions'
import { NewTransactionModal } from './components/NewTransactionModal';

import { useState } from 'react';

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
    <TransactionsProvider >
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <GlobalStyle />

      <NewTransactionModal
        isOpen={isNewTransacitionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Dashboard />

    </TransactionsProvider >

  );
}

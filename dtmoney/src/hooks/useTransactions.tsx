import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { api } from '../services/api';


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}
interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then((res) => setTransactions(res.data.transactions))

    }, []);
    async function createTransaction(transactionInput: TransactionInput) {

        const response = await api.post('/transaction', { ...transactionInput, createdAt: new Date() });
        const { transaction } = response.data;

        setTransactions([
            ...transactions, transaction
        ])
    }

    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransaction() {
    const context = useContext(TransactionContext);

    return context;
}
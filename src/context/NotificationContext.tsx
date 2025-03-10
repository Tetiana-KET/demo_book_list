import { createContext, useContext, useState } from 'react';
import Toast from '@components/ui/toast';

interface NotificationContextType {
	showMessage: (message: string) => void;
}

interface NotificationProviderType {
	children: React.ReactNode;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export function NotificationProvider({ children }: NotificationProviderType) {
	const [message, setMessage] = useState<string | null>(null);

	const showMessage = (msg: string) => {
		setMessage(msg);
		setTimeout(() => setMessage(null), 3000);
	};
	return (
		<NotificationContext.Provider value={{ showMessage }}>
			{children}
			{message && <Toast message={message} />}
		</NotificationContext.Provider>
	);
}

export const useNotification = () => {
	const context = useContext(NotificationContext);
	if (!context)
		throw new Error(
			'useNotification must be used within a NotificationProvider'
		);
	// TODO: error boundary
	return context;
};

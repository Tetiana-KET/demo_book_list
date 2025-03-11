export interface Book {
	id: number;
	title: string;
	author: string;
	category: string;
	isbn: string;
	createdAt: Date | string | null;
	modifiedAt: Date | string | null;
	isActive: boolean;
}

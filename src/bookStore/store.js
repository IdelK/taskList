import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext({
	items: [], //aqui se almacenaran los items
	createItem: (item) => {}, //metodo para crea los items
	getItem: (id) => {}, //metodo para leer los items
	updateItem: (item) => {}, //metodo para modifcar los items
});

function Store({ children }) {
	const [items, setItems] = useState([]);

	function createItem(item) {
		const temp = [...items];
		temp.push(item);
		setItems(temp);
	}
	function getItem(id) {
		const item = items.find((item) => item.id === id);

		return item;
	}

	function updateItem(item) {
		const index = items.findIndex((i) => i.id === item.id);
		const temp = [...items];
		temp[index] = { ...item };
		return item;
	}

	return (
		<AppContext.Provider value={{ items, createItem, getItem, updateItem }}>
			{' '}
			{children}{' '}
		</AppContext.Provider>
	); //todo lo que este dentro del provider va a tner acceso a los metodos y atributos del contexto creado
}

export default Store;

//hook useAppContenxt
export function useAppContext (){
    return useContext(AppContext);
}


import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
	const [firstdata, setFirstData] = useState([]);
	const [show, setShow] = useState(false);
	const [child, setChild] = useState('');
	const [editFlag, setEditFlag] = useState(true);
	const [editRow, setEditRow] = useState(true);

	// console.log('editRow context:', editRow)
	const [id, setId] = useState(0);

	const handleClose = () => {
		setChild('');
		setShow(false);
		setEditRow(true);
		setId(0)
	};
	const handleShow = (enterChild) => {
		setChild(enterChild);
		setShow(true);
	};

	const handleEditButton = (flag_value) => {
		setEditFlag(flag_value);
	};

	const handleEditRow = (data) => {
		setChild(data.child);
		setId(data.Id);
		setEditRow(data.edit);
		setShow(true);

		// console.log(data);
	};

	const handleFirstData = (data) => {
		setFirstData(data);
	};

	const value = {
		firstdata,
		id,
		handleFirstData,
		show,
		handleClose,
		handleShow,
		child,
		editFlag,
		handleEditButton,
		editRow,
		handleEditRow,
	};

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
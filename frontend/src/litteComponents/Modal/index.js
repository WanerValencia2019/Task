import React, { useState, useEffect } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
} from '@material-ui/core';

const Transition = React.forwardRef((props, ref) => {
	return <Slide direction="up" ref={ref} {...props}></Slide>;
});

function Modal(props) {
	const {
		open,
		setOpen,
		title,
		message,
		accept,
		message_accept,
		message_disclaim,
		color_disclaim,
		color_accept,
	} = props;

	/*const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		if (open) {
			setIsOpen(true);
		}
	}, [open]);*/

	const handleClose = () => {
		//setIsOpen(false);
		setOpen(false);
	};
	const handleAccept = () => {
		accept();
		handleClose();
	};
	const handleDisclaim = () => {
		handleClose();
	};
	const dialog = (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-labelledby="modal-delete"
			aria-labelledby="modal-update"
		>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>{message}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					variant="outlined"
					style={{ borderColor: color_disclaim }}
					onClick={() => handleDisclaim()}
				>
					{message_disclaim}
				</Button>
				<Button
					variant="contained"
					onClick={() => handleAccept()}
					style={{ backgroundColor: color_accept }}
				>
					{message_accept}
				</Button>
			</DialogActions>
		</Dialog>
	);

	return <div>{dialog}</div>;
}
export default Modal;

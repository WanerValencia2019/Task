import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types"
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
		description,
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
				<DialogContentText>{description}</DialogContentText>
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


Modal.propTypes = {
  open:PropTypes.bool.isRequired,
	setOpen:PropTypes.func.isRequired,
	title:PropTypes.string.isRequired,
	description:PropTypes.string.isRequired,
	message_accept:PropTypes.string.isRequired,
	message_disclaim:PropTypes.string.isRequired,
	color_accept:PropTypes.string.isRequired,
	color_disclaim:PropTypes.string.isRequired,
	accept:PropTypes.func.isRequired,
}
Modal.defaultProps = {
  open:false,
	color_accept:"#a234",
	color_disclaim:"#f4f4f3",
	message_accept:"Aceptar",
	message_disclaim:"Cancelar"
}


export default Modal;

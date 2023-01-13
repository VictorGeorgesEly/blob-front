import React, { useCallback, useState } from 'react';

type Props = {};

interface Address {
	street: string;
	city: string;
	state: string;
	zip: string;
}

interface Phone {
	phone: number;
}

interface FormData {
	firstName: string;
	addresses: Address[];
	phones: Phone[];
}

const Test: React.FC<Props> = (): JSX.Element => {
	// TODO Add Loading + Error

	const initialFormState: FormData = {
		firstName: '',
		addresses: [{ street: '', city: '', state: '', zip: '' }],
		phones: [{ phone: 0 }],
	};
	const [formState, setFormState] = useState<FormData>(initialFormState);

	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = event.target;
			setFormState((prevState) => ({ ...prevState, [name]: value }));
		},
		[setFormState],
	);

	const handleAddressChange = useCallback(
		(index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
			const newAddresses = [...formState.addresses];
			newAddresses[index] = {
				...newAddresses[index],
				[event.target.name]: event.target.value,
			};
			setFormState((prevState) => ({
				...prevState,
				addresses: newAddresses,
			}));
		},
		[formState.addresses, setFormState],
	);

	const addAddress = useCallback(() => {
		const isValid = Object.values(
			formState.addresses[formState.addresses.length - 1],
		).every((value) => Boolean(value));
		if (isValid) {
			setFormState((prevState) => ({
				...prevState,
				addresses: [
					...prevState.addresses,
					{ street: '', city: '', state: '', zip: '' },
				],
			}));
		}
	}, [formState.addresses, setFormState]);

	const removeAddress = useCallback(
		(index: number) => () => {
			if (index === 0) {
				return;
			}
			const newAddresses = [...formState.addresses];
			newAddresses.splice(index, 1);
			setFormState((prevState) => ({
				...prevState,
				addresses: newAddresses,
			}));
		},
		[formState.addresses, setFormState],
	);

	const handlePhoneChange = useCallback(
		(index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
			const newPhones = [...formState.phones];
			newPhones[index] = {
				...newPhones[index],
				[event.target.name]: event.target.value,
			};
			setFormState((prevState) => ({ ...prevState, phones: newPhones }));
		},
		[formState.phones, setFormState],
	);

	const addPhone = useCallback(() => {
		const isValid =
			formState.phones[formState.phones.length - 1].phone !== 0;
		if (isValid) {
			setFormState((prevState) => ({
				...prevState,
				phones: [...prevState.phones, { phone: 0 }],
			}));
		}
	}, [formState.phones, setFormState]);

	const removePhone = useCallback(
		(index: number) => () => {
			if (index === 0) {
				return;
			}
			const newPhones = [...formState.phones];
			newPhones.splice(index, 1);
			setFormState((prevState) => ({ ...prevState, phones: newPhones }));
		},
		[formState.phones, setFormState],
	);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Perform validation
		const isValid =
			formState.firstName !== '' &&
			formState.addresses.every(
				(address) =>
					address.street !== '' &&
					address.city !== '' &&
					address.state !== '' &&
					address.zip !== '',
			) &&
			formState.phones.every((phone) => phone.phone !== 0);

		if (isValid) {
			// Send form data to server or perform other actions
			console.log(formState);
		} else {
			// Display error messages or highlight invalid fields
		}
	};

	// TODO const isValid + Const check + Add new React.FC

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Prénom:
				<input
					type="text"
					name="firstName"
					value={formState.firstName}
					onChange={handleChange}
				/>
			</label>
			<br />
			{formState.addresses.map((address, index) => (
				<AddressFields
					key={index}
					index={index}
					address={address}
					onChange={handleAddressChange}
					onRemove={removeAddress}
				/>
			))}
			<br />
			{Object.values(
				formState.addresses[formState.addresses.length - 1],
			).every((value) => Boolean(value)) && (
				<button type="button" onClick={addAddress}>
					Ajouter une adresse
				</button>
			)}
			<br />
			{formState.phones.map((phone, index) => (
				<div key={index}>
					<label>
						Téléphone:
						<input
							type="text"
							name="phone"
							value={phone.phone}
							onChange={handlePhoneChange(index)}
						/>
					</label>
					{index !== 0 && (
						<button type="button" onClick={removePhone(index)}>
							Supprimer ce téléphone
						</button>
					)}
				</div>
			))}
			{!!formState.phones[formState.phones.length - 1].phone && (
				<button type="button" onClick={addPhone}>
					Ajouter un téléphone
				</button>
			)}
			<br />
			<button type="submit">Ajouter l&apos;utilisateur</button>
		</form>
	);
};

export default Test;

interface AddressFieldsProps {
	index: number;
	address: Address;
	onChange: (
		index: number,
	) => (event: React.ChangeEvent<HTMLInputElement>) => void;
	onRemove: (index: number) => () => void;
}

const AddressFields: React.FC<AddressFieldsProps> = ({
	index,
	address,
	onChange,
	onRemove,
}) => {
	return (
		<div key={index}>
			<label>
				Rue:
				<input
					type="text"
					name="street"
					value={address.street}
					onChange={onChange(index)}
				/>
			</label>
			<br />
			<label>
				Ville:
				<input
					type="text"
					name="city"
					value={address.city}
					onChange={onChange(index)}
				/>
			</label>
			<br />
			<label>
				Etat:
				<input
					type="text"
					name="state"
					value={address.state}
					onChange={onChange(index)}
				/>
			</label>
			<br />
			<label>
				Code postal:
				<input
					type="text"
					name="zip"
					value={address.zip}
					onChange={onChange(index)}
				/>
			</label>
			<br />
			{index !== 0 && (
				<button type="button" onClick={onRemove(index)}>
					Supprimer cette adresse
				</button>
			)}
			<br />
		</div>
	);
};

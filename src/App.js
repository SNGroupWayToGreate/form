import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import TypeList from './Components/TypeList/TypelList';
import UserList from './Components/UserList/UserList';

function App() {
	const [users, setUsers] = useState([]);
	const [jobTypes, setJobType] = useState([]);
	const [isDisabled, setIsDisabled] = useState(true)


	const inputsValues = {
		username: "",
		surname: "",
		phoneNumber: "",
		email: "",
		birthDate: "",
		companyName: "",
		jobType: "",
		experience: ""
	}

	const [values, setValues] = useState(inputsValues);

	const initialValues = {
		user_infos: {
			firstName: values.name,
			lastName: values.surname,
			phone_number: values.phoneNumber,
			email: values.email,
			dob: values.birthDate,
		},
		work_area: {
			company_name: values.companyName,
			job_type: values.jobType,
			experience: values.experience,
		},
	};


	const getUsers = () => {
		setIsDisabled(true)
		axios
			.get("https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/users")
			.then((res) => {
				setUsers(res.data);
				console.log(users)
				setIsDisabled(false)
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getJobType = () => {
		setIsDisabled(true)
		axios
			.get("https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/types")
			.then((res) => {
				setJobType(res.data)
				setIsDisabled(false)
				console.log(res.data)
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		getUsers();
		getJobType();
	}, []);

	const resetForm = () => {
		console.log('reset form')
		setValues(inputsValues);
	};

	const deleteUser = (id) => {
		setIsDisabled(true)
		axios
			.delete(`https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/users/${id}`)
			.then((res) => {
				getUsers();
				setIsDisabled(false)
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const addUser = (e) => {
		e.preventDefault();
		const data = {
			...initialValues,
		};
		setIsDisabled(true)
		axios
			.post(
				"https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/users",
				data
			)
			.then(() => {
				getUsers();
				resetForm();
				setIsDisabled(false)
			})
			.catch((err) => console.log("err", err))
	};

	const addJobType = (e) => {
		e.preventDefault();
		console.log("addJobType");

		const data = {
			label: initialValues.work_area.job_type,
		};
		setIsDisabled(true)
		axios
			.post(
				"https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/types",
				data
			)
			.catch((err) => console.log(err))
			.finally(() => {
				getJobType();
				resetForm();
				setIsDisabled(false)
			});
	};
	const deleteJobType = (id) => {
		console.log('delete Job type')
		setIsDisabled(true)
		axios
			.delete(`https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/types/${id}`)
			.then(() => {
				getJobType()
				setIsDisabled(false)
			}
			)

	};



	return (<>
		<Form
			addUser={addUser}
			addJobType={addJobType}
			values={values}
			setValues={setValues}
			resetForm={resetForm}
			jobTypes={jobTypes}
			isDisabled={isDisabled}
		/>
		<UserList
			users={users}
			deleteUser={deleteUser}
			isDisabled={isDisabled}
		/>
		<TypeList
			jobTypes={jobTypes}
			deleteJobType={deleteJobType}
			isDisabled={isDisabled}
		/>
	</>
	);
}

export default App;

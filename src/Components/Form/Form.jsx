import React from 'react'
import FormInput from '../FormInput/FormInput'
import MButton from '../MButton/MButton'
import './Form.css'

export default function Form({
	addUser,
	values,
	setValues,
	addJobType,
	jobTypes,
	resetForm,
	isDisabled
}) {


	const userInfoInputs = [
		{
			name: "username",
			placeholder: "Enter your name",
			type: "text",
			errorMessage: "name is required, must be at least 3 characters",
			label: "name",
			value: values.username,
			required: true,
			pattern: "^[a-zA-Z0-9]{3,}$",
		},
		{
			name: "surname",
			placeholder: "Enter your surname",
			type: "text",
			errorMessage: "Surname is required, must be at least 3 characters",
			label: "Surname",
			value: values.surname,
			required: true,
			pattern: "^[a-zA-Z0-9]{3,}$",
		},
		{
			label: "Phone Number",
			name: "phoneNumber",
			placeholder: "Enter your number",
			type: "number",
			required: true,
			value: values.phoneNumber,
			errorMessage: "Phone number is required",
		},
		{
			name: "email",
			type: "email",
			placeholder: "Enter your email",
			errorMessage: "Email is required",
			label: "Email",
			value: values.email,
			required: true,
			pattern:
				"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
		},
		{
			label: "Date of birth",
			name: "birthDate",
			placeholder: "Choose your date of birth",
			type: "date",
			required: true,
			value: values.birthDate,
			errorMessage: "Date of birth is required",
		}
	]

	const onChange = (e) => {
		console.log('e.target.name', e.target.user);
		console.log('e.target.value', e.target.value);
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	const userInfoInputsElems = userInfoInputs.map((input) => (
		<FormInput
			key={input.name}
			{...input}
			handleChange={onChange}
		/>
	))
	const optionElems = jobTypes?.map((jobType) => (
		<option key={jobType?.id} value={jobType?.label}>
			{jobType?.label}
		</option>
	))



	return (
		<div className="formWrapper">
			<div className="form">
				<div className="form__container">
					<div className="form__block block">
						<form onSubmit={addUser}>
							<div className="userInfo block">
								<h1 className="userInfo__title">
									User Info
								</h1>
								<hr />
								<div className="userInfo__items">
									{userInfoInputsElems}
								</div>
							</div>
							<div className='workDetails block'>
								<h1 className="workDetails__title title">
									Work Details
								</h1>
								<hr />
								<div className="workDetails__items">
									<div className="workDetails__input">
										<FormInput
											name="companyName"
											placeholder="Enter your company"
											type="text"
											errorMessage="job is required, must be at least 3 characters"
											label="Company Name"
											value={values.companyName}
											required={true}
											pattern="^[a-zA-Z0-9]{3,}$"
											handleChange={onChange}
										/>
									</div>
									<div className="workDetails__selects">
										<div className="workDetails__select">
											<p className="workDetails__label">
												<label htmlFor="jobType">Job Type</label>
											</p>
											<select
												name="jobType"
												id="jobType"
												required
												value={values.jobType}
												onChange={onChange}
											>
												<option value="">Select job type</option>
												{optionElems}
											</select>
										</div>
										<div className="workDetails__select">
											<p className="workDetails__label">
												<label htmlFor="experience">Experience</label>
											</p>
											<select
												name="experience"
												id="experience"
												value={values.experience}
												required
												onChange={onChange}
											>
												<option value="">Select experience</option>
												<option value="5">5</option>
												<option value="4">4</option>
												<option value="3">3</option>
												<option value="2">2</option>
												<option value="1">1</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div className='userInfo__buttons'>
								<MButton type='submit' BType={isDisabled ? "loading" : null}>Сохранить</MButton>
								<MButton type='button' onClick={() => resetForm()} BType={isDisabled ? "loading" : null}>Отменить</MButton>

							</div>
						</form>
						<form onSubmit={addJobType}>
							<div className="jobType">
								<div className="jobType__block block">
									<h1 className="jobType__title title">
										Job Type
									</h1>
									<hr />
									<div className="jobType__items">
										<FormInput
											name="jobType"
											placeholder="Enter your job"
											type="text"
											errorMessage="job is required, must be at least 3 characters"
											label="Job Type"
											value={values.jobType}
											required={true}
											pattern="^[a-zA-Z0-9]{3,}$"
											handleChange={onChange}
										/>
									</div>
									<div className='buttons'>
										<MButton type='button' onClick={() => resetForm()} BType={isDisabled ? "loading" : null}>Отменить</MButton>
										<MButton BType={isDisabled ? "loading" : null}>Сохранить</MButton>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div >
		</div >
	)
}

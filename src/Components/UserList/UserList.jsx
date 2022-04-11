import React from "react";
import { ReactComponent as ActionIcon } from "../../Assets/Images/action.svg";
import { ReactComponent as DeleteIcon } from "../../Assets/Images/delete.svg";
import MButton from "../MButton/MButton";
import "./userList.css";

const UserList = ({ users, deleteUser, isDisabled }) => {


	return (
		<div className="userList block">
			<h1>Users</h1>
			<hr />
			<div className="static default">
				<div className="item">Full name</div>
				<div className="item">Date of birth</div>
				<div className="item">Phone</div>
				<div className="item">Email</div>
				<div className="item">Company name</div>
				<div className="item">Job Type</div>
				<div className="item">Experience</div>
				<div className="item">
					<ActionIcon className="item action action__btn" />
				</div>
			</div>
			{users &&
				users?.map((user) => (
					<div className="default" key={user?.id}>
						<div className="item">{user?.user_infos.firstName} {user?.user_infos.lastName}</div>
						<div className="item">{user?.user_infos.dob} </div>
						<div className="item">{user?.user_infos.phone_number} </div>
						<div className="item">{user?.user_infos.email} </div>
						<div className="item">{user?.work_area.company_name} </div>
						<div className="item">{user?.work_area.job_type}</div>
						<div className="item">{user?.work_area.experience}</div>
						{isDisabled ?
							<MButton
								onClick={() => {
									deleteUser(user?.uuid)
								}}
								BClass="item action action__delete"
								BType={"loading"}
								BIcon={<DeleteIcon />}
							/>
							: <MButton
								onClick={() => {
									deleteUser(user?.uuid)
								}}
								BClass="item action action__delete"
								BType={"outline-primary"}
								BIcon={<DeleteIcon />}
							/>}
					</div>
				))}
		</div>
	);
};

export default UserList;

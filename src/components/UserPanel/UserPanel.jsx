import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { AiOutlineSetting, AiOutlineBell } from 'react-icons/ai'
import { Panel } from './UserPanel.styles'

const UserPanel = () => {
	const [notificationIsOpen, setNotificationIsOpen] = useState(false)
	const [settingsIsOpen, setSettingsIsOpen] = useState(false)

	return (
		<Panel>
			<span>MĘŻCZYŹNI</span>
			<Form.Check type='switch' id='custom-switch' />
			<span>KOBIETY</span>
			<AiOutlineSetting
				onClick={() => {
					setSettingsIsOpen(!settingsIsOpen)
				}}
			/>
			<AiOutlineBell
				onClick={() => {
					setNotificationIsOpen(!notificationIsOpen)
				}}
			/>
		</Panel>
	)
}

export default UserPanel

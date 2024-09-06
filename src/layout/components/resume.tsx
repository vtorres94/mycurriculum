import React, { useState } from "react";
import {
	Icon,
	Segment,
	Grid,
	Header,
	Responsive,
	Button,
} from "semantic-ui-react";
import HeaderComponent from "./headerComponent";

export interface IResumeProps {
	language: boolean;
}

interface IState {
	facebook: boolean;
	instagram: boolean;
	whatsapp: boolean;
	linkedIn: boolean;
	git: boolean;
}

const defaultState = {
	facebook: false,
	instagram: false,
	whatsapp: false,
	linkedIn: false,
	git: false,
};

const Resume: React.SFC<IResumeProps> = (props) => {
	const [
		state = {
			facebook: false,
			instagram: false,
			whatsapp: false,
			linkedIn: false,
			git: false,
		},
		setState,
	] = useState<IState>(defaultState);

	const openCV = () => {
		window.open("Vladimir Torres CV.pdf", "_blank");
	};

	const social = () => {
		return (
			<div>
				<Icon
					name="git square"
					size="big"
					color={state.git ? "green" : undefined}
					onMouseEnter={() =>
						setState({ ...defaultState, git: true })
					}
					onMouseLeave={() =>
						setState({ ...defaultState, git: false })
					}
					onClick={() =>
						window.open("https://github.com/vtorres94/", "_blank")
					}
				/>
				<Icon
					name="facebook"
					size="big"
					color={state.facebook ? "blue" : undefined}
					onMouseEnter={() =>
						setState({ ...defaultState, facebook: true })
					}
					onMouseLeave={() =>
						setState({ ...defaultState, facebook: false })
					}
					onClick={() =>
						window.open(
							"https://www.facebook.com/MVTorresD/",
							"_blank"
						)
					}
				/>
				<Icon
					name="instagram"
					size="big"
					color={state.instagram ? "purple" : undefined}
					onMouseEnter={() =>
						setState({ ...defaultState, instagram: true })
					}
					onMouseLeave={() =>
						setState({ ...defaultState, instagram: false })
					}
					onClick={() =>
						window.open(
							"https://www.instagram.com/miro_torres/",
							"_blank"
						)
					}
				/>
				<Icon
					name="linkedin"
					size="big"
					color={state.linkedIn ? "blue" : undefined}
					onMouseEnter={() =>
						setState({ ...defaultState, linkedIn: true })
					}
					onMouseLeave={() =>
						setState({ ...defaultState, linkedIn: false })
					}
					onClick={() =>
						window.open(
							"https://www.linkedin.com/in/vladimir-torres-205072185/",
							"_blank"
						)
					}
				/>
			</div>
		);
	};

	return (
		<Segment.Group
			style={{
				background: "#fff",
				marginLeft: "10%",
				marginRight: "10%",
			}}
		>
			<Responsive as={Segment}>
				<HeaderComponent
					language={props.language}
					titulo="Perfíl"
					title="Profile"
					icon="user"
				/>
				<Grid columns={2}>
					<Grid.Column largeScreen={8} textAlign="center">
						{props.language ? (
							<Header as="h4">
								Nombre: Miguel Vladimir Torres Dávila
								<pre />
								Fecha Nacimiento: 10/Dic/1994
								<pre />
								Super poder: Convertir café en código
								<pre />
								{social()}
							</Header>
						) : (
							<Header as="h4">
								Name: Miguel Vladimir Torres Dávila
								<pre />
								Birthday: 10/Dec/1994
								<pre />
								Super power: Convert coffee on code
								<pre />
								{social()}
							</Header>
						)}
					</Grid.Column>
					<Grid.Column largeScreen={8} textAlign="center">
						{props.language ? (
							<Header as="h4">
								País: México
								<pre />
								Estado: Zacatecas
								<pre />
								Municipio: Villanueva
								<pre />
								Ingles: Intermedio B1
							</Header>
						) : (
							<Header as="h4">
								Country: México
								<pre />
								State: Zacatecas
								<pre />
								City: Villanueva
								<pre />
								English: Intermediate B1
							</Header>
						)}
					</Grid.Column>
				</Grid>
				{props.language ? (
					<Header>
						Desarrollador de software con más de 4 años de
						experiencia en el desarrollo de aplicaciones web, <br />
						tanto frontend con React y backend con NodeJS o Django
						además <br />
						con conocimientos en el desarrollo de aplicaciones
						móviles con Flutter. <pre />
					</Header>
				) : (
					<Header>
						Software developer with +4 years of experience in the
						development of web applications, <br />
						both frontend with React and backend with NodeJS or
						Django, as well <br />
						as knowledge in the development of mobile applications
						with Flutter. <pre />
					</Header>
				)}
				<Button
					attached="bottom"
					color="facebook"
					onClick={() => openCV()}
					animated="fade"
				>
					<Button.Content visible>
						{props.language ? "Descargar CV" : "Download Resume"}
					</Button.Content>
					<Button.Content hidden>
						<Icon name="download" />
					</Button.Content>
				</Button>
			</Responsive>
		</Segment.Group>
	);
};

export default Resume;

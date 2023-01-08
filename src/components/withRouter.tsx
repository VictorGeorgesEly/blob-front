import React from 'react';
import { useParams } from 'react-router-dom';

type Props = {
	params: { [key: string]: string };
};

const withRouter = <P extends Props>(
	WrappedComponent: React.ComponentType<P>,
) => {
	// TODO
	// eslint-disable-next-line react/display-name
	return (props: Omit<P, keyof Props>) => {
		const params = useParams();
		return <WrappedComponent {...(props as P)} params={params} />;
	};
};

export default withRouter;

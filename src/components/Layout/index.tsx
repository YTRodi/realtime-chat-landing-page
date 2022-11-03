import React from 'react';

interface Props {
	children: React.ReactNode;
}

export const LAYOUT_OFFSET = 130;

const Layout = ({ children }: Props) => {
	return <div className='layout'>{children}</div>;
};

export default Layout;

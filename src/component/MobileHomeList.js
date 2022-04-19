import React from 'react';
import MobileHomeListItem from './MobileHomeListItem';

const MobileHomeList = ({ datas }) => {
	return (
		<ul className="mobile-home-list">
			{datas?.map((data) => (
				<MobileHomeListItem key={data.id} data={data} />
			))}
		</ul>
	);
};

export default MobileHomeList;

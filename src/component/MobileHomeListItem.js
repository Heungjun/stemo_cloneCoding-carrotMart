import React from 'react';

const MobileHomeListItem = ({
	data: {
		/**
		 *  Type: String
		 *  required
		 *  Description: Image Path
		 */
		imagePath,

		/**
		 *  Type: String
		 *  required
		 *  Description: title
		 */
		title,

		/**
		 *  Type: String
		 *  required
		 *  Description: address
		 */
		address,

		/**
		 *  Type: Number
		 *  required
		 *  Description: price
		 */
		price,

		/**
		 *  Type: Number
		 *  Default: 0
		 *  Description: ["판매중", "예약중", "판매완료"]
		 */
		status = 0,
	},
}) => {
	const statusView = (status) => {
		switch (status) {
			case 1:
				return (
					<div className="mobile-home-list-item__status mobile-home-list-item__status--stay">
						예약중
					</div>
				);
			case 2:
				return (
					<div className="mobile-home-list-item__status mobile-home-list-item__status--done">
						판매완료
					</div>
				);
			default:
				return;
		}
	};

	return (
		<li className="mobile-home-list-item">
			<img className="mobile-home-list-item__image" src={imagePath} />
			<div className="mobile-home-list-item__description">
				<div className="mobile-home-list-item__title">{title}</div>
				<div className="mobile-home-list-item__address">{address}</div>
				<div className="mobile-home-list-item__l3">
					{statusView(status)}
					<div className="mobile-home-list-item__price">
						{price ? price.toLocaleString('ko-KR') + '원' : '나눔'}
					</div>
				</div>
			</div>
		</li>
	);
};

export default MobileHomeListItem;

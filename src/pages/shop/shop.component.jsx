import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions.js';
import { connect } from 'react-redux';

import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container.jsx';
import CollectionPageContainer from '../collection/collection.container.jsx';

class ShopPage extends React.Component {
	componentDidMount(){
		const {fetchCollectionStartAsync} = this.props;
		fetchCollectionStartAsync();
	}

	render(){
		const {match} = this.props;
		return(
			<div className='shop-page'>
				<Route exact path = {`${match.path}`} component={CollectionOverviewContainer}/>
				<Route path = {`${match.path}/:collectionId`} component = {CollectionPageContainer} />
			</div>
		)
	}
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(null,mapDispatchToProps)(ShopPage);
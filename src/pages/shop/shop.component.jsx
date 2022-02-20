import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

import { createStructuredSelector } from 'reselect';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions.js';
import { connect } from 'react-redux';

import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors.js';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component.jsx';
import CollectionPage from '../collection/collection.component.jsx';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	componentDidMount(){
		const {fetchCollectionStartAsync} = this.props;
		fetchCollectionStartAsync();
	}

	render(){
		const {match, isCollectionFetching, selectIsCollectionLoaded} = this.props;
		return(
			<div className='shop-page'>
				<Route exact path = {`${match.path}`} render={(props)=> 
					<CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>
				}/>
				<Route path = {`${match.path}/:collectionId`} render={(props) => 
					<CollectionPageWithSpinner isLoading={!selectIsCollectionLoaded} {...props}/>
				}/>
			</div>
		)
	}
};

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	selectIsCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
	fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);
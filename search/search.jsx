import React from 'react';

class SearchSection extends React.Component {
    render() {
        var sectionLayout = {
            width: "100%",
            height: 500,
            display: "flex",
            paddingBottom: 20,
        };

        var restaurantSearch = {
            width: "50%",
            height: "100%",
            borderRadius: 3,
            backgroundImage: "url(../images/restaurant_search.jpg)",
            backgroundSize: "contain",
            backgroundRepeat: "round",
            marginRight: 5,
        };

        var foodSearch = {
            width: "50%",
            height: "100%",
            borderRadius: 3,
            backgroundImage: "url(../images/food_search.jpg)",
            backgroundSize: "contain",
            backgroundRepeat: "round",
            marginLeft: 5,
        };

        var searchHeadings = {
            color: "white",
            textAlign: "center",
            marginTop: 150,
            fontFamily: "monospace",
        };

        return (
            <div style={sectionLayout}>
                <div style={restaurantSearch}>
                    <h3 style={searchHeadings}><strong>Don't know where to eat?</strong></h3>
                </div>
                <div style={foodSearch}>
                    <h3 style={searchHeadings}><strong>Don't know what to eat?</strong></h3>
                </div>
            </div>
        );
   }
}
export default SearchSection;
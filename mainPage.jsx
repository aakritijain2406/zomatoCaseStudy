import React from 'react';
import LocationPopUp from './location.jsx';
import SearchSection from './search/search.jsx'
import {Jumbotron,Label,Glyphicon} from 'react-bootstrap';

class MainPage extends React.Component {
    constructor() {
        super();
        this.state =  {
            location: {},
        };
        this.handleLocation = this.handleLocation.bind(this);
    }

    handleLocation(location) {
        this.setState({location: location});
    }

    render() {
        var locationInfo = {
            float: "right",
            height: 35,
            width: 200,
            paddingTop: 10,
        }
        var background = {
            backgroundImage: "url(https://b.zmtcdn.com/images/foodshots/cover/pizza3.jpg?output-format=webp)",
            backgroundSize: "cover",
        }
        var logo = {
            borderRadius: 3,
            display: "block",
            margin: "auto",
        }
        var description = {
            fontFamily: "monospace",
            color: "white",
            textAlign: "center",
        }
        return (
            <div className="container">
                <h3 style={locationInfo}>
                    <Glyphicon glyph="send"/> &nbsp;
                    <Label bsStyle="danger">{this.state.location.label}</Label>
                </h3>
                <br/>
                <Jumbotron style={background}>
                    <p style={description}>Find the best restaurants, cafés, and bars.</p>
                    <img style={logo} src="https://b.zmtcdn.com/images/logo/square_zomato_logo_new-2.svg"></img>
                </Jumbotron>
                <SearchSection/>
                <LocationPopUp onSelectLocation={this.handleLocation}/>
            </div>
        );
    }
}
export default MainPage;
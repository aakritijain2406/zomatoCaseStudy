import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import Select from 'react-select';
import Axios from 'axios';
import _ from 'lodash';

class LocationPopUp extends React.Component {

    constructor() {
        super();
        this.state =  {
            showModal: true,
            selectedCity: null,
        };

        this.onCloseModal = this.onCloseModal.bind(this);
        this.searchCity = this.searchCity.bind(this);
        this.selectCity = this.selectCity.bind(this);
        this.setLocation = this.setLocation.bind(this);
    };

    searchCity(input) {
        if (!input) {
			return Promise.resolve({ options: [] });
		}

        var self = this;
        return Axios.get('https://developers.zomato.com/api/v2.1/cities', {
            params: {
                q: input,
            },
            headers: {
                'user-key': 'dcb095c687f51ac3d8356f7df661364b',
            }
        }).then(res => {
            if (res.data.status === 'success') {
                _.each(res.data.location_suggestions, (city) => {
                    city.value = city.id;
                    city.label = city.name;
                });

                return { options: res.data.location_suggestions };
            }
        }).catch((e) => {
            console.error(e);
        });
    };

    selectCity(selected) {
        this.setState({ selectedCity: selected });
    }

    setLocation() {
        this.props.onSelectLocation(this.state.selectedCity);
        this.setState({ showModal: false });
    }

    onCloseModal() {
        this.setState({ showModal: false });
    };

    render() {
        var panel = {
            width: 700,
        };

        return (
            <div className="static-modal modal-container">
                <Modal show={this.state.showModal} onHide={this.onCloseModal} backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>Where are you?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Select.Async value={this.state.selectedCity} onChange={this.selectCity} loadOptions={this.searchCity}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.setLocation}>OK</Button>
                    </Modal.Footer>
                </Modal> 
            </div>
        );
   }
}
export default LocationPopUp;

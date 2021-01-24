import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

class InputContainer extends Component {
    closeContainer() {
        var input = document.querySelector('#input-container');
        input.style.display = 'none';
        input.style.height = "0";
    }

    render() {
        return (
            <div id="input-container">
                <span onClick={() => this.closeContainer()}>&times;</span>
                <div id='inputSearch'>
                    < InputGroup >
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fas fa-search"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input value={this.props.cityName}
                            onClick={() => console.log('cac')}
                            onChange={this.props.handleInputChange}
                            placeholder='search location' />
                    </InputGroup >
                    <Button color='primary' onClick={() => {
                        this.props.searchCity(this.props.cityName);
                        setTimeout(this.closeContainer, 600);
                    }}>Search</Button>
                </div>
            </div >
        )
    }
}

export default InputContainer;
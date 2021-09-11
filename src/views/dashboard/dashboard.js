/**
 * Importing external modules
 *
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Input, Container, ListGroup, ListGroupItem } from 'reactstrap';
import { getSku } from '../../redux/actions/apiAction/dashboard/skuAction';
import { BeatLoader } from 'react-spinners';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      cursor: 0,
      search: '',
      selectedValue: '',
    };
    this.getSkuData = _.debounce(this.getSkuData, 1000);
  }
  /**
   * @function
   *
   * getiing sku data fromapi call which we are doing in action
   *
   */

  getSkuData = () => {
    getSku(this.state.search);
  };

  /**
   *
   * @function
   *
   * function to handle key
   */

  handleKeyDown(e) {
    const { cursor } = this.state;
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState((prevState) => ({
        cursor: prevState.cursor - 1,
      }));
    } else if (e.keyCode === 40 && cursor < this.props.sku.length - 1) {
      this.setState((prevState) => ({
        cursor: prevState.cursor + 1,
      }));
    }
  }

  /**
   * @function
   * ChangeHandler function which is called on input
   *
   */
  changeHandler = (event) => {
    this.setState({ search: event.target.value });
    this.getSkuData();
  };

  /**
   * submit functions being called after selecting any item
   *
   */
  submit = () => {
    this.setState({ selectedValue: this.props.sku[this.state.cursor] });
  };

  /**
   *
   * @returns jsx
   */
  render() {
    const { cursor } = this.state;
    return (
      <Container>
        <Input
          onKeyDown={this.handleKeyDown}
          onChange={this.changeHandler}
          onKeyPress={this.submit}
          placeholder='Type a query...'
        />
        <div className='list-item'>
          <ListGroup>
            {this.props.sku &&
              this.props.sku.map((item, i) => {
                return (
                  <ListGroupItem
                    key={item.sku_id}
                    className={cursor === i ? 'active focus' : null}
                    onMouseEnter={() => {
                      this.setState({ cursor: i });
                    }}
                    onMouseLeave={() => {
                      this.setState({ cursor: 0 });
                    }}
                    onClick={this.submit}
                  >
                    <div>{item.sku_name}</div>
                  </ListGroupItem>
                );
              })}
          </ListGroup>
          {!this.props.loader &&
            this.state.search &&
            !this.props.sku.length && <div className='center'>No Matches</div>}
        </div>{' '}
        {this.state.search && this.props.loader && (
          <div className='center'>
            <BeatLoader
              className='clip-loader'
              sizeUnit={'px'}
              size={20}
              color={'#FF586B'}
              loading={this.props.loader}
            />
          </div>
        )}
        {this.state.selectedValue && (
          <div className='selecetdItem'>
            <p>
              <b>Selected Item</b>
            </p>
            sku_id: {this.state.selectedValue.sku_id}
            <br />
            sku_name: {this.state.selectedValue.sku_name}
            <br />
            product_code: {this.state.selectedValue.product_code}
            <br />
            barcode: {this.state.selectedValue.barcode}
            <br />
            stock_in: {this.state.selectedValue.stock_in}
            <br />
            stock_out: {this.state.selectedValue.stock_out}
            <br />
            stock_on_hand: {this.state.selectedValue.stock_on_hand}
            <br />
            stock_reserved: {this.state.selectedValue.stock_reserved}
            <br />
            stock_available: {this.state.selectedValue.stock_available}
            <br />
            modified_date: {this.state.selectedValue.modified_date}
            <br />
            created_date: {this.state.selectedValue.created_date}
            <br />
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { sku } = state.dashboard;
  const { loader } = state.loader;
  return { sku, loader };
};

export default connect(mapStateToProps, {})(Dashboard);

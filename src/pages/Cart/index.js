import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import * as cartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, removeFromCart }) {
  function handleDeleteProduct(product) {
    removeFromCart(product.id);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUB-TOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          { cart.map(product => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>

            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={product.amount} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>R$259,80</strong>
            </td>

            <td>
              <button type="button" onClick={() => {handleDeleteProduct(product)}}>
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
          )) }
        </tbody>
      </ProductTable>

      <footer>
        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>

        <button type="button">Finalizar pedido</button>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

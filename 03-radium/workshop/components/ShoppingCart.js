import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import numeral from 'numeral'
import { ButtonPlayNow } from './index'
// import ButtonBuyNow

const shoppingCartStyles = {
  display: 'flex',
  alignItems: 'center',
  height: '60px',
  width: '100%',
  position: 'sticky',
  bottom: '0',
  padding: '22px',
  boxSizing: 'border-box',
  backgroundColor: '#07314d',
  color: '#fff',
  overflow: 'hidden',
  transition: 'all 300ms ease 800ms',
  '@media (min-width: 700px)': {
    height: '80px',
    position: 'inherit',
    bottom: 'inherit',
    justifyContent: 'center'
  },
  
  cartTitle: {
    display: 'flex',
    flexGrow: '1',
    fontWeight: 'bold',
    lineHeight: '2',
    '@media (min-width: 700px)': {
      flexGrow: '0'
    }
  },
  
  cartTotal: {
    paddingLeft: '10px',
    paddingRight: '10px',
    minWidth: '80px',
    fontWeight: 'normal'
  },

  confirmed: {
    height: '420px',
    backgroundColor: 'rgba(71, 59, 180, 0.20)',
    '@media (min-width: 700px)': {
      height: '350px'
    },
    cartTitle: {
      fontWeight: 'normal',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: '-30px'
    },
    cartTotal: {
      paddingLeft: '0',
      paddingRight: '0',
      minWidth: 'auto'
    },
    playTitle: {
      margin: '40px auto 20px',
      fontWeight: 'bold',
      fontSize: '20px'
    }
  }
}

@Radium export class ShoppingCart extends Component {

  static propTypes = {
    totalPrice: PropTypes.number.isRequired,
    confirmed: PropTypes.bool.isRequired,
    onBuy: PropTypes.func.isRequired
  }

  render () {
    const { totalPrice, confirmed } = this.props
    const formattedPrice = numeral(totalPrice).format('$0.00')

    return confirmed ? 
    (
      <aside style={ [ shoppingCartStyles, shoppingCartStyles.confirmed ] }>
        <div style={ [ shoppingCartStyles.cartTitle, shoppingCartStyles.confirmed.cartTitle ] }>
          <p>Thank you!</p> 
          <p>Your order is confirmed. Your card was charged 
            <span style={ [ shoppingCartStyles.cartTotal, shoppingCartStyles.confirmed.cartTotal ] }> { formattedPrice }</span>
          </p>
          <h3 style={ [ shoppingCartStyles.confirmed.playTitle ] }>Start Watching Now</h3>
          <ButtonPlayNow>Play</ButtonPlayNow>
        </div>
      </aside>
    ) : (
      <aside style={ [ shoppingCartStyles ] }>
        <div style={ [ shoppingCartStyles.cartTitle ] }>
          Total: <span style={ [ shoppingCartStyles.cartTotal ] }>{ formattedPrice }</span>
        </div>
        { /* render ButtonBuyNow here */ }
      </aside>
    )
  }

}
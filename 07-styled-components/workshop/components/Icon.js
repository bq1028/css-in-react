import React, { Component } from 'react'
import styled from 'styled-components'

const StyledIcon = styled.div`
  content: '';
  display: inline-block;
  width: ${props => props.iconSize === 2 ? '24px' : '12px'};
  height: ${props => props.iconSize === 2 ? '24px' : '12px'};
  background-size: ${props => props.iconSize === 2 ? '24px' : '12px'};
  margin-left: 6px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(/svg/${props => props.iconName }.svg);
`

export const Icon = ({
  iconName,
  children,
  ...otherProps
}) => {

  return (
    <StyledIcon 
      iconName={ iconName }
      { ...otherProps }
    >
    </StyledIcon>
  )

}

import React from 'react'
import styled from 'styled-components'

const StyledSVG = styled.svg`
  fill: ${props => props.color};
  width: ${props => props.width / 2}px;
  height: ${props => props.height / 1.4}px;
  transition: all 300ms ease;
  @media screen and (min-width: 700px) {
    width: ${props => props.width}px;
    height: ${props => props.height}px;
  }
`

export const Logo = ({ color, width, height }) => (
  <StyledSVG color={ color } width={ width } height={ height } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520.24 83.56">
    <title>Festival Store</title>
    <path d="M31.33,39.31v8.31H12.49V83.07H3.36V1.15H35.9V9.46H12.49V39.31H31.33Z" transform="translate(-3.36 -0.33)"/>
    <path d="M72.32,37.43v8.19h-20V74.76H76.88v8.31H43.17V1.15h33.7V9.46H52.3v28h20Z" transform="translate(-3.36 -0.33)"/>
    <path d="M120.78,20.82V23h-8.66V20.35c0-7.38-2.81-11.71-9.36-11.71S93.4,13,93.4,20.23c0,18.37,27.5,20.13,27.5,43.18,0,12.41-6,20.48-18.49,20.48S84,75.81,84,63.41V58.73h8.54v5.15c0,7.37,3,11.7,9.6,11.7s9.6-4.33,9.6-11.7c0-18.26-27.39-20-27.39-43.06,0-12.64,5.85-20.48,18.14-20.48S120.78,8.41,120.78,20.82Z" transform="translate(-3.36 -0.33)"/>
    <path d="M140.82,83.07V9.46h-15.1V1.15H165V9.46H149.95V83.07h-9.13Z" transform="translate(-3.36 -0.33)"/>
    <path d="M182.49,1.15V83.07h-9.13V1.15h9.13Z" transform="translate(-3.36 -0.33)"/>
    <path d="M200.75,1.15l13.34,71.27L227.31,1.15h8.43L220.41,83.07H207L191.5,1.15h9.25Z" transform="translate(-3.36 -0.33)"/>
    <path d="M243.17,66.57L240,83.07h-8.43L247.26,1.15h13.22l15.68,81.92H267l-3.16-16.5H243.17Zm1.17-7.84h18.25l-9.24-47.28Z" transform="translate(-3.36 -0.33)"/>
    <path d="M280.13,83.07V1.15h9.12V74.76h23.41v8.31H280.13Z" transform="translate(-3.36 -0.33)"/>
    <path d="M353.88,20.93v1.52H351.3V20.82c0-9.71-3.63-17.9-14.27-17.9S322.63,11,322.63,20.7c0,20.95,31.36,20.36,31.36,42.6,0,11.35-4.68,20.36-17.2,20.36s-17.08-9-17.08-20.36v-4h2.46v4.09c0,9.95,3.86,17.79,14.63,17.79s14.63-7.84,14.63-17.79c0-20.71-31.36-20-31.36-42.59,0-11.94,5-20.13,16.85-20.25C349.32,0.57,353.88,9.7,353.88,20.93Z" transform="translate(-3.36 -0.33)"/>
    <path d="M376.5,83.07V3.61H358.6V1.15H397V3.61h-17.9V83.07H376.5Z" transform="translate(-3.36 -0.33)"/>
    <path d="M401.41,21.28c0-13.57,6-20.72,17.32-20.72,11.59,0,17.56,7.14,17.56,20.72V62.94c0,13.58-6,20.72-17.56,20.72-11.35,0-17.32-7.14-17.32-20.72V21.28ZM404,63.06c0,12.05,5,18.26,14.75,18.26s15-6.2,15-18.26V21.16c0-12-5.15-18.25-15-18.25S404,9.11,404,21.16v41.9Z" transform="translate(-3.36 -0.33)"/>
    <path d="M463.51,1.15c12.17,0,16.85,7.14,16.85,18.38V26.9c0,10.06-4,15.57-13,17.2,9.13,1.4,13,7.37,13,16.38V73.36c0,3.16.35,7.14,2.22,9.71h-2.81c-1.64-2.57-2-6.2-2-9.71V60.48c0-12.05-7.26-15.21-17.9-15.21H449.82v37.8h-2.58V1.15h16.27Zm-3.63,41.66c11.35,0,17.9-2.93,17.9-15.57V19.76c0-9.95-3.86-16.15-14.39-16.15H449.82V42.82h10.06Z" transform="translate(-3.36 -0.33)"/>
    <path d="M519,40.36V42.7H494.93V80.61H523.6v2.46H492.36V1.15H523.6V3.61H494.93V40.36H519Z" transform="translate(-3.36 -0.33)"/>
  </StyledSVG>
)

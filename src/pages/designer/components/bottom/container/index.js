import React, { useRef, useState, useCallback } from 'react'
import { DropTarget } from 'react-dnd'
import Card from './item'
import ItemTypes from '../../type'
import update from 'immutability-helper'
import './index.less'


const Container = ({ connectDropTarget }) => {
  const ref = useRef(null)
  const [cards, setCards] = useState([
    {
      id: 1,
      text: 'Write a cool JS library',
    },
    {
      id: 2,
      text: 'Make it generic enough',
    },
    {
      id: 3,
      text: 'Write README',
    },
    {
      id: 4,
      text: 'Create some examples',
    },
    {
      id: 5,
      text: 'Spam in Twitter and IRC to promote it',
    },
    {
      id: 6,
      text: '???',
    },
    {
      id: 7,
      text: 'PROFIT',
    },
  ])
  const findCard = useCallback(
    id => {
      const card = cards.filter(c => `${c.id}` === id)[0]
      return {
        card,
        index: cards.indexOf(card),
      }
    },
    [cards],
  )
  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id)
      setCards(
        update(cards, {
          $splice: [[index, 1], [atIndex, 0, card]],
        }),
      )
    },
    [cards, findCard],
  )

  connectDropTarget(ref)
  return (
    <div ref={ref} className='designer-container'>
      {cards.map(card => (
        <Card
          key={card.id}
          id={`${card.id}`}
          text={card.text}
          moveCard={moveCard}
          findCard={findCard}
        />
      ))}
    </div>
  )
}
export default DropTarget(ItemTypes.CARD, {
  canDrop: () => true,
  drop(props, monitor) {
    console.log(monitor.getItem())
  }

}, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(Container)

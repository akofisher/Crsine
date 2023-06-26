import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setChoosenSubPacket } from '../../Store/CarWash/CarWashActCreat'
import {
  selectChoosenPacket,
  selectChoosenSubPacket,
} from '../../Store/CarWash/CarWashSelector'

export default function ExtraServiceCard({ data }) {
  const [choosen, setChoosen] = useState(false)
  const CHOOSEN_PACKET = useSelector(selectChoosenPacket)
  const dispatch = useDispatch()
  const choosenOrNoo = useSelector(selectChoosenSubPacket)
  let isSubPack = choosenOrNoo.some((obj) => obj.SUB_PACKET_ID == data.UID)
  useEffect(() => {
    console.log(choosenOrNoo, 'ORNO')
  }, [choosenOrNoo])

  useEffect(() => {}, [CHOOSEN_PACKET])

  return (
    <div className="online-booking__extra-item">
      <h3 className="online-booking__extra-title">
        <Link to="/servicedetails">{data.PACKET_NAME}</Link>
      </h3>
      <ul className="list-unstyled online-booking__extra-list">
        <li>
          <i className="far fa-clock"></i>
          {data.PACKET_TIME} Minutes
        </li>
        <li>
          <i className="fa fa-tags"></i>${data.PACKET_PRICE}
        </li>
        <li>
          {!isSubPack ? (
            <button
              onClick={() => {
                if (Number(CHOOSEN_PACKET.PRICE) > 0) {
                  dispatch(
                    setChoosenSubPacket({
                      SUB_PACKET_ID: data.UID,
                      PRICE: data.PACKET_PRICE,
                      TIME: data.PACKET_TIME,
                    }),
                  )
                } else {
                  alert('Please choose pricing plan !')
                }
              }}
              className="thm-btn"
            >
              Select Now
              <i className="fa fa-arrow-alt-circle-right"></i>
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch(
                  setChoosenSubPacket({
                    SUB_PACKET_ID: data.UID,
                    PRICE: data.PACKET_PRICE,
                    TIME: data.PACKET_TIME,
                  }),
                )
              }
              className="thm-btn"
            >
              Unselect
              <i className="fa fa-arrow-alt-circle-right"></i>
            </button>
          )}
        </li>
      </ul>
    </div>
  )
}

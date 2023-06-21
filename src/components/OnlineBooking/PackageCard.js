import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChoosenPacket } from '../../Store/CarWash/CarWashActCreat'
import { selectChoosenPacket } from '../../Store/CarWash/CarWashSelector'

const PackageCard = ({ data }) => {
  const [choosen, setChoosen] = useState(false)
  const dispatch = useDispatch()
  const choosenOrNo = useSelector(selectChoosenPacket)
  console.log(choosenOrNo, 'CHOOSEN')
  return (
    <div className="col-md-12 col-lg-4">
      <div className="price-card">
        <p className="price-card__name">{data.PACKET_NAME}</p>
        <p className="price-card__amount">
          <span className="price-card__amount-symbol">$</span>
          {data.PACKET_PRICE}
          <span className="price-card__amount-fraction">.99</span>
        </p>
        <div className="price-card__duration">
          <i className="far fa-clock"></i>
          {data.PACKET_TIME} Minutes
        </div>
        <div className="price-card__bottom">
          <ul className="price-card__list list-unstyled">
            <li>
              <i className="fa fa-check"></i>
              Exterior Wash
            </li>
            <li>
              <i className="fa fa-times"></i>
              Interior Vacuum
            </li>
            <li>
              <i className="fa fa-times"></i>
              Exterior Polish
            </li>
            <li>
              <i className="fa fa-times"></i>
              Windows In & Out
            </li>
          </ul>
          {choosenOrNo.UID !== data.UID ? (
            <button
              onClick={() =>
                dispatch(
                  setChoosenPacket({
                    UID: data.UID,
                    PRICE: data.PACKET_PRICE,
                    TIME: data.PACKET_TIME,
                  }),
                )
              }
              className="thm-btn"
            >
              Select Now
              <i className="far fa-arrow-alt-circle-right"></i>
            </button>
          ) : (
            <button
              onClick={() => dispatch(setChoosenPacket(false))}
              className="thm-btn"
            >
              Unselect
              <i className="far fa-arrow-alt-circle-right"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default memo(PackageCard)

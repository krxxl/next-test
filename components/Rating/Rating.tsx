import React, {useEffect, useState, KeyboardEvent} from 'react';
import {RatingProps} from "./Rating.props";
import styles from './Rating.module.css';
import cn from 'classnames';

export const Rating = ({isEditable = false, rating, setRating, className, ...props}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating)
  }, [rating]);

  const onHover = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i)
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<HTMLDivElement>) => {
    if (!setRating) {
      return;
    }
    if(e.code === 'Enter') {
      setRating(i);
    }
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return <span className={cn(styles.star,{
        [styles.filled]: i < currentRating,
        [styles.editable]: isEditable
      })
      } onMouseEnter={() => onHover(i + 1)}
                   onMouseLeave={() => onHover(i - 1)}
                   onClick={() => onClick(i + 1)}
                   tabIndex={isEditable ? 0 : -1}
                   onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => isEditable && handleSpace(i + 1, e)}
      />
    });
    setRatingArray(updatedArray)
  };

  return <div {...props}>
    {ratingArray.map((r, i) => <React.Fragment key={i}>{r}</React.Fragment>)}
  </div>
};
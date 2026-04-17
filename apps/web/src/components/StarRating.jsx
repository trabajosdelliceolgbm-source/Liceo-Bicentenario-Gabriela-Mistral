import React, { useState } from 'react';
import { Star } from 'lucide-react';

function StarRating({ rating, onRatingChange, readonly = false, size = 24 }) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    if (!readonly && onRatingChange) {
      onRatingChange(value);
    }
  };

  const handleMouseEnter = (value) => {
    if (!readonly) {
      setHoverRating(value);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0);
    }
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((value) => {
        const isFilled = value <= (hoverRating || rating);
        return (
          <button
            key={value}
            type="button"
            onClick={() => handleClick(value)}
            onMouseEnter={() => handleMouseEnter(value)}
            onMouseLeave={handleMouseLeave}
            disabled={readonly}
            className={`transition-all duration-200 ${
              readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'
            }`}
            aria-label={`${value} star${value !== 1 ? 's' : ''}`}
          >
            <Star
              size={size}
              className={`transition-colors duration-200 ${
                isFilled
                  ? 'fill-accent text-accent'
                  : 'fill-none text-muted-foreground'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;
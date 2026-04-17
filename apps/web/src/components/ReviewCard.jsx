import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import StarRating from './StarRating';

function ReviewCard({ review }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="font-semibold text-lg">{review.name}</p>
            <div className="mt-2">
              <StarRating rating={review.rating} readonly size={20} />
            </div>
          </div>
          <span className="text-sm text-muted-foreground">{review.date}</span>
        </div>
        <p className="mt-4 text-foreground leading-relaxed">{review.comment}</p>
      </CardContent>
    </Card>
  );
}

export default ReviewCard;
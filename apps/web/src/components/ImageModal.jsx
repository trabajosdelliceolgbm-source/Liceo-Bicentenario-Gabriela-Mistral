import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

function ImageModal({ image, isOpen, onClose, onPrevious, onNext, hasPrevious, hasNext }) {
  if (!image) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </Button>

          <div className="flex items-center justify-center min-h-[60vh] p-8">
            <img
              src={image.url}
              alt={image.title}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>

          {hasPrevious && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          )}

          {hasNext && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          )}

          <div className="p-6 text-white">
            <h3 className="text-xl font-semibold">{image.title}</h3>
            <p className="text-white/80 mt-1">{image.category}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ImageModal;
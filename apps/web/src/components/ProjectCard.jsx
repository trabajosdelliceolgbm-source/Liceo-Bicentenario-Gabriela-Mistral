import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <Badge variant="secondary">{project.category}</Badge>
        </div>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <p className="text-sm text-muted-foreground">Por: {project.author}</p>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
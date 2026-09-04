const imageDimensions = {
  '/assets/portrait/raquel-hedo.webp': [699, 1280],
  '/assets/raquel-projects/editorial-pool.webp': [1280, 960],
  '/assets/raquel-projects/gallery/bathroom-detail.webp': [910, 815],
  '/assets/raquel-projects/gallery/club-dining.webp': [1028, 1280],
  '/assets/raquel-projects/gallery/club-entrance.webp': [960, 1280],
  '/assets/raquel-projects/gallery/club-gym.webp': [960, 1280],
  '/assets/raquel-projects/gallery/club-lockers.webp': [960, 1280],
  '/assets/raquel-projects/gallery/club-lounge.webp': [960, 1280],
  '/assets/raquel-projects/gallery/club-restaurant.webp': [960, 1280],
  '/assets/raquel-projects/gallery/club-staircase.webp': [1021, 1280],
  '/assets/raquel-projects/gallery/custom-space-dining.webp': [1280, 960],
  '/assets/raquel-projects/gallery/custom-space-sofa-cropped.webp': [1360, 736],
  '/assets/raquel-projects/gallery/projects-blue-bathroom.webp': [960, 1280],
  '/assets/raquel-projects/gallery/projects-red-corridor.webp': [960, 1280],
  '/assets/raquel-projects/gallery/projects-red-dining.webp': [960, 1280],
  '/assets/raquel-projects/gallery/projects-white-staircase.webp': [960, 1280],
  '/assets/raquel-projects/gallery/red-living-dining.webp': [960, 1280],
  '/assets/raquel-projects/gallery/red-living-fireplace.webp': [960, 1280],
  '/assets/raquel-projects/gallery/red-living-overview.webp': [960, 1280],
  '/assets/raquel-projects/gallery/suite-bathroom.webp': [1141, 774],
  '/assets/raquel-projects/hero-bathroom.webp': [1192, 853],
  '/assets/raquel-projects/hero-dining.webp': [1170, 774],
  '/assets/raquel-projects/hero-exterior.webp': [1280, 960],
  '/assets/raquel-projects/hero-living-room.webp': [1095, 771],
  '/assets/raquel-projects/hero-open-plan.webp': [1280, 828],
  '/assets/raquel-projects/hero-staircase.webp': [1036, 762],
  '/assets/raquel-projects/portfolio-bathroom.webp': [1192, 853],
  '/assets/raquel-projects/portfolio-bedroom.webp': [1127, 792],
  '/assets/raquel-projects/portfolio-custom-divider.webp': [1280, 960],
  '/assets/raquel-projects/portfolio-dining-room.webp': [1143, 757],
  '/assets/raquel-projects/portfolio-red-living-room.webp': [1280, 960],
} as const;

export function getImageDimensions(src: string) {
  const [width, height] = imageDimensions[src as keyof typeof imageDimensions] ?? [1280, 960];
  return { width, height };
}

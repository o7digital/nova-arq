// Describe visible features without inventing project locations or client details.
const descriptions: Record<string, string> = {
  'portfolio-dining-room': 'Comedor residencial con mesa y sillas junto a grandes ventanales',
  'hero-living-room': 'Sala de doble altura con sofás claros, arte y ventanales hacia una terraza',
  'portfolio-bedroom': 'Dormitorio principal con cama, cabecera y mobiliario integrado',
  'suite-bathroom': 'Baño de suite con lavabos y acabados de piedra',
  'portfolio-bathroom': 'Baño residencial con bañera y luz natural',
  'bathroom-detail': 'Detalle de los acabados y mobiliario del baño',
  'club-lounge': 'Sala de estar del Club de Empresarios',
  'club-restaurant': 'Área de restaurante del Club de Empresarios',
  'club-staircase': 'Escalera interior del Club de Empresarios',
  'club-dining': 'Comedor del Club de Empresarios',
  'club-lockers': 'Vestidores y casilleros del Club de Empresarios',
  'mobiliario1': 'Sala a desnivel con sofá esquinero, mesas de vidrio y vistas al jardín',
  'mobiliario2': 'Mobiliario de madera, barra y mesa redonda en un espacio con muros de piedra',
  'portfolio-red-living-room': 'Sala residencial con muros rojos y mobiliario de madera',
  'red-living-dining': 'Sala y comedor integrados en un interior de tonos rojos',
  'red-living-fireplace': 'Chimenea y mobiliario en una sala de tonos rojos',
  'red-living-overview': 'Vista general de una sala residencial con muros rojos',
  'projects-red-corridor': 'Pasillo de muros rojos con alfombra de franjas y piso de madera',
  'p1': 'Vista desde la planta alta hacia un vestíbulo de doble altura con ventanales',
  'p2': 'Terraza con piso de madera, pérgola y paneles corredizos',
  'p3': 'Pérgola de madera y vidrio junto a un muro cubierto de vegetación',
  't1': 'Luz y sombras de una pérgola sobre una terraza de madera',
  't2': 'Fachada residencial con ventanales, terraza de madera y jardín',
};

export function projectImageDescription(src: string) {
  const key = src.split('/').pop()?.replace(/\.webp$/, '') ?? '';
  return descriptions[key];
}

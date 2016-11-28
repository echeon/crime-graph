const coords = [
  {lat: 40.64027, lng: -74.127331},
  {lat: 40.638186, lng: -74.127159},
  {lat: 40.637339, lng: -74.128017},
  {lat: 40.637306, lng: -74.128661},
  {lat: 40.636916, lng: -74.128833},
  {lat: 40.634441, lng: -74.128962},
  {lat: 40.633105, lng: -74.129777},
  {lat: 40.631314, lng: -74.130592},
  {lat: 40.629881, lng: -74.13012},
  {lat: 40.624214, lng: -74.132009},
  {lat: 40.622552, lng: -74.132137},
  {lat: 40.620989, lng: -74.131837},
  {lat: 40.612584, lng: -74.130764},
  {lat: 40.612486, lng: -74.130249},
  {lat: 40.608316, lng: -74.129777},
  {lat: 40.608642, lng: -74.12673},
  {lat: 40.609424, lng: -74.122868},
  {lat: 40.610401, lng: -74.119477},
  {lat: 40.611151, lng: -74.116731},
  {lat: 40.611314, lng: -74.114885},
  {lat: 40.611053, lng: -74.112825},
  {lat: 40.610271, lng: -74.109478},
  {lat: 40.610369, lng: -74.103727},
  {lat: 40.610597, lng: -74.096088},
  {lat: 40.610336, lng: -74.093599},
  {lat: 40.609326, lng: -74.09111},
  {lat: 40.60698, lng: -74.08536},
  {lat: 40.606361, lng: -74.082999},
  {lat: 40.606231, lng: -74.078965},
  {lat: 40.606101, lng: -74.076605},
  {lat: 40.605873, lng: -74.074545},
  {lat: 40.605188, lng: -74.072142},
  {lat: 40.603853, lng: -74.068623},
  {lat: 40.602256, lng: -74.063902},
  {lat: 40.601832, lng: -74.060383},
  {lat: 40.601865, lng: -74.059138},
  {lat: 40.602843, lng: -74.056134},
  {lat: 40.60369, lng: -74.053473},
  {lat: 40.604863, lng: -74.053988},
  {lat: 40.605188, lng: -74.053688},
  {lat: 40.605905, lng: -74.053774},
  {lat: 40.606296, lng: -74.055104},
  {lat: 40.606752, lng: -74.055104},
  {lat: 40.606557, lng: -74.055576},
  {lat: 40.607632, lng: -74.056692},
  {lat: 40.608805, lng: -74.05725},
  {lat: 40.610238, lng: -74.058838},
  {lat: 40.610923, lng: -74.059052},
  {lat: 40.611737, lng: -74.059525},
  {lat: 40.612095, lng: -74.060426},
  {lat: 40.613138, lng: -74.060769},
  {lat: 40.614897, lng: -74.061756},
  {lat: 40.615549, lng: -74.062743},
  {lat: 40.616689, lng: -74.063816},
  {lat: 40.616917, lng: -74.064288},
  {lat: 40.617308, lng: -74.063902},
  {lat: 40.617015, lng: -74.064417},
  {lat: 40.617471, lng: -74.065104},
  {lat: 40.618057, lng: -74.064202},
  {lat: 40.618285, lng: -74.064546},
  {lat: 40.617731, lng: -74.065061},
  {lat: 40.61835, lng: -74.066133},
  {lat: 40.61923, lng: -74.065447},
  {lat: 40.618806, lng: -74.066176},
  {lat: 40.621412, lng: -74.06991},
  {lat: 40.622683, lng: -74.070811},
  {lat: 40.624702, lng: -74.072227},
  {lat: 40.627112, lng: -74.0727},
  {lat: 40.627112, lng: -74.072313},
  {lat: 40.629946, lng: -74.072871},
  {lat: 40.62848, lng: -74.068236},
  {lat: 40.628839, lng: -74.068108},
  {lat: 40.630304, lng: -74.073},
  {lat: 40.632128, lng: -74.0733},
  {lat: 40.633626, lng: -74.072828},
  {lat: 40.636525, lng: -74.0733},
  {lat: 40.63672, lng: -74.070468},
  {lat: 40.637632, lng: -74.070511},
  {lat: 40.637274, lng: -74.073386},
  {lat: 40.637697, lng: -74.073472},
  {lat: 40.637762, lng: -74.072657},
  {lat: 40.638577, lng: -74.072614},
  {lat: 40.638642, lng: -74.073129},
  {lat: 40.640726, lng: -74.072828},
  {lat: 40.641019, lng: -74.070082},
  {lat: 40.641312, lng: -74.069996},
  {lat: 40.641019, lng: -74.072828},
  {lat: 40.641638, lng: -74.073},
  {lat: 40.641866, lng: -74.07021},
  {lat: 40.642191, lng: -74.070296},
  {lat: 40.641866, lng: -74.072914},
  {lat: 40.642159, lng: -74.073043},
  {lat: 40.642452, lng: -74.070339},
  {lat: 40.642712, lng: -74.070382},
  {lat: 40.642615, lng: -74.071369},
  {lat: 40.643494, lng: -74.071498},
  {lat: 40.644568, lng: -74.072185},
  {lat: 40.64522, lng: -74.073858},
  {lat: 40.645024, lng: -74.074287},
  {lat: 40.646164, lng: -74.075618},
  {lat: 40.647434, lng: -74.077463},
  {lat: 40.648248, lng: -74.079094},
  {lat: 40.648476, lng: -74.079952},
  {lat: 40.648476, lng: -74.081926},
  {lat: 40.648801, lng: -74.084373},
  {lat: 40.648899, lng: -74.085832},
  {lat: 40.647466, lng: -74.089093},
  {lat: 40.645806, lng: -74.093857},
  {lat: 40.645317, lng: -74.097118},
  {lat: 40.645448, lng: -74.098577},
  {lat: 40.644992, lng: -74.098535},
  {lat: 40.645089, lng: -74.100423},
  {lat: 40.645675, lng: -74.102697},
  {lat: 40.645708, lng: -74.109392},
  {lat: 40.645154, lng: -74.111066},
  {lat: 40.644145, lng: -74.114156},
  {lat: 40.643624, lng: -74.113812},
  {lat: 40.642256, lng: -74.11613},
  {lat: 40.643233, lng: -74.116731},
  {lat: 40.642061, lng: -74.121065},
  {lat: 40.641182, lng: -74.120507},
  {lat: 40.641084, lng: -74.120808},
  {lat: 40.641475, lng: -74.121408},
  {lat: 40.641345, lng: -74.122996},
  {lat: 40.640824, lng: -74.123039},
  {lat: 40.640596, lng: -74.123554},
  {lat: 40.640368, lng: -74.123683},
  {lat: 40.64014, lng: -74.124498},
  {lat: 40.640107, lng: -74.125657},
  {lat: 40.6404, lng: -74.126687}
];

export default {
  id: 120,
  name: "120th Precinct",
  paths: coords
};

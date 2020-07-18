import { LatLng } from 'leaflet';

export function decode(value: string): LatLng[] {
  const factor = 1e5;
  const start = 0;
  const end = value.length;
  const points: LatLng[] = [];
  let x;
  let y;
  let px = 0;
  let py = 0;
  let point;

  integers(value, start, end, (v) => {
    if (y === undefined) {
      // y (as in longitude) comes first
      y = v;
      return;
    }
    x = v;

    x = x + px;
    y = y + py;

    point = [y / factor, x / factor];
    // if ( mapFn ) {
    //   point = mapFn( point );
    // }
    points.push(point);

    px = x;
    py = y;

    x = y = undefined;
  });

  return points;
}

function sign(value) {
  // tslint:disable-next-line:no-bitwise
  return value & 1 ? ~(value >>> 1) : (value >>> 1);
}

function integers(value, start, end, fn) {

  let byte = 0;
  let current = 0;
  let bits = 0;

  for (let i = start; i < end; i++) {

    byte = value.charCodeAt(i) - 63;
    // tslint:disable-next-line:no-bitwise
    current = current | ((byte & 0x1F) << bits);
    bits += 5;

    if (byte < 0x20) {
      if (byte === -1 && bits === 5) {
        // special case - single byte 0 encoded as -1
        current = 0;
      }
      fn(sign(current));
      current = 0;
      bits = 0;
    }
  }
}

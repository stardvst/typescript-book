type Reservation = {
  id: number;
};

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
  (destination: string): Reservation;
};

let id = 1;

let reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
): Reservation => {
  if (fromOrDestination instanceof Date) {
    if (toOrDestination instanceof Date && destination) {
      console.log(
        `round trip to ${destination} from ${fromOrDestination.toISOString()} until ${toOrDestination.toISOString()}`
      );
    } else if (typeof toOrDestination === 'string') {
      console.log(`one-way trip to ${destination} from ${fromOrDestination.toISOString()}`);
    }
  } else if (typeof fromOrDestination === 'string') {
    console.log(`a trip to ${fromOrDestination}`);
  }

  return {
    id: id++,
  };
};

reserve(new Date(), new Date(), 'London');
reserve(new Date(), 'London');
reserve('London');

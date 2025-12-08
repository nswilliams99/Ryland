export type TownGroup = {
  area: string;
  towns: string[];
};

export const townGroups: TownGroup[] = [
  {
    area: "Augusta Area",
    towns: ["Augusta", "Evans", "Martinez", "Grovetown", "Waynesboro"],
  },
  {
    area: "Baxley Area",
    towns: ["Baxley", "Jesup", "Vidalia"],
  },
  {
    area: "Dublin Area",
    towns: ["Dublin", "Eastman"],
  },
  {
    area: "Houston County",
    towns: ["Warner Robins", "Perry", "Centerville"],
  },
  {
    area: "Macon Area",
    towns: ["Macon", "Forsyth"],
  },
  {
    area: "Milledgeville Area",
    towns: ["Milledgeville", "Sandersville"],
  },
  {
    area: "Savannah Area",
    towns: ["Savannah", "Pooler", "Rincon", "Richmond Hill", "Statesboro", "Garden City"],
  },
  {
    area: "Tifton",
    towns: ["Tifton"],
  },
  {
    area: "Waycross",
    towns: ["Waycross"],
  },
];

export function getAllTowns(): string[] {
  return townGroups.flatMap(group => group.towns);
}

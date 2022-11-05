import { faker } from "@faker-js/faker";
const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      backgroundColor: "#1aae6f",
    },
    {
      label: "Expence",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      backgroundColor: "#2a64f1",
    },
  ],
};

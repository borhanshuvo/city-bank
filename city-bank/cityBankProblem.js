function cardDistribution(usersList) {
  const newList = usersList.map((user, index) => {
    const cardNumber =
      user.district.slice(0, 2).toUpperCase() +
      user.currentYear.toString().slice(-2) +
      user.postNo.toString().slice(0, 2) +
      user.birthYear +
      (index + 1).toString().padStart(6, "0");

    return {
      cardNumber,
      gift: Number(cardNumber.slice(-1)) % 2 === 0 ? "R" : "W",
      priority: user.priority,
    };
  });

  const alphabeticallySortedList = newList.sort(function (a, b) {
    if (a.cardNumber.slice(0, 1) < b.cardNumber.slice(0, 1)) {
      return -1;
    }
    if (a.cardNumber.slice(0, 1) > b.cardNumber.slice(0, 1)) {
      return 1;
    }
    return 0;
  });

  return alphabeticallySortedList.sort((a, b) => a.priority - b.priority);
}

const list = cardDistribution([
  {
    name: "Md Rashed",
    birthYear: 1999,
    currentYear: 2022,
    district: "Dhaka",
    postNo: 1200,
    priority: 2,
  },
  {
    name: "Md Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Rajshahi",
    postNo: 1211,
    priority: 1,
  },
  {
    name: "Md Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Rajshahi",
    postNo: 1211,
    priority: 1,
  },
  {
    name: "Md Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Rajshahi",
    postNo: 1211,
    priority: 1,
  },
  {
    name: "Md Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Rajshahi",
    postNo: 1211,
    priority: 2,
  },
  {
    name: "Md Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Rajshahi",
    postNo: 1211,
    priority: 1,
  },
  {
    name: "Md Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Rajshahi",
    postNo: 1211,
    priority: 1,
  },
  {
    name: "Ad Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Rajshahi",
    postNo: 1211,
    priority: 1,
  },
  {
    name: "Md Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Bajshahi",
    postNo: 1211,
    priority: 1,
  },
  {
    name: "Md Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Ajshahi",
    postNo: 1211,
    priority: 2,
  },
  {
    name: "Md Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Ajshahi",
    postNo: 1211,
    priority: 1,
  },
]);

console.log(list);

// 10.3 first check that the key readList contains any value or not it will return the value

const getItemsFromDB = () => {
  const storedBook = localStorage.getItem("readList");
  if (storedBook) {
    const storedBookStr = JSON.parse(storedBook);
    return storedBookStr;
  } else {
    return [];
  }
};
//  10.4 add items in Local storage by getting the id from handleMarkAsRead
const addItemsToLS = (id) => {
  const data = getItemsFromDB();
  //   10.6 check that the id contains in local storage or not
  if (data.includes(id)) {
    alert("Already exist");
  } else {
    data.push(id);
    const dataStringify = JSON.stringify(data);
    localStorage.setItem("readList", dataStringify);
  }
};

// 10.7, 11.6 export
export { addItemsToLS, getItemsFromDB };

fetch("https://immense-lake-69588.herokuapp.com/view-users/")
  .then((response) => response.json())
  .then((json) => console.log(json));

var getUserRepos = function (user) {
  //format the url based on user
  let apiUrl = "https://api.github.com/users/" + user + "/repos";

  //then make an api call
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });

  console.log("outside");
};
getUserRepos('d-mastrocola');

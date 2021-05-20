(function main() {
    const btnsunFollow = document.querySelectorAll('li button'); //node list

    //convert node list to array using es6 spread operator to can loop on it
    [...btnsunFollow].forEach((el) => {
      el.click();
      let confirmUnfollowB = document.querySelector(
        '.aOOlW.-Cab_'
      );
      confirmUnfollowB.click();
    });
  })();

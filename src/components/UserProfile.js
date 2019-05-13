const UserProfile = (function() {
  let name = "";
  let email = "";
  let user_id = -1;
  let admin = false;

  const getName = function() {
    if (typeof (Storage) !== "undefined") {
      let temp = localStorage.getItem('name');
      if (temp != null) {
        name = temp;
      }
    }
    return name;
  };

  const setName = function(n) {
    if (n != null) {
      name = n;
      if (typeof (Storage) !== "undefined") {
        localStorage.setItem('name', name);
      }
    }
  };

  const getEmail = function () {
    if (typeof (Storage) !== "undefined") {
      let temp = localStorage.getItem('email');
      if (temp !== null) {
        email = temp;
      }
    }
    return email;
  };

  const setEmail = function (e) {
    if (e !== null) {
      email = e;
      if (typeof (Storage) !== "undefined") {
        localStorage.setItem('email', email);
      }
    }
  };

  const getUserId = function () {
    if (typeof (Storage) !== "undefined") {
      let temp = localStorage.getItem('user_id');
      if (temp !== null) {
        user_id = temp;
      }
    }
    return parseInt(user_id);
  };

  const setUserId = function (id) {
    user_id = id;
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem('user_id', user_id);
    }
  };

  const getAdmin = function () {
    if (typeof (Storage) !== "undefined") {
      let temp = localStorage.getItem('admin');
      if (temp !== null) {
        if (temp==="true" || temp===true) {
          admin = true;
        } else {
          admin = false;
        }
      }
    }
    return admin;
  };

  const setAdmin = function (ad) {
    admin = ad;
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem('admin', admin);
    }
  };

  return {
    getName: getName,
    setName: setName,
    getEmail: getEmail,
    setEmail: setEmail,
    getUserId: getUserId,
    setUserId: setUserId,
    getAdmin: getAdmin,
    setAdmin: setAdmin
  }

})();

export default UserProfile;

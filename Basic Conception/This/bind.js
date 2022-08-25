
 const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }

  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);
  console.log(fullName())


  const Animal = {
    firstIdentity:"Fecerous",
    secondIdentity:"Strong",
    fullAbbrivation: function(){
        return this.firstIdentity + " " + this.secondIdentity;
    }
  }

  const Tiger = {
    firstIdentity : "It is a strong",
    secondIdentity: "It is fecerous "
  }

  const totalInfo = Animal.fullAbbrivation.bind(Tiger);
  console.log(totalInfo())
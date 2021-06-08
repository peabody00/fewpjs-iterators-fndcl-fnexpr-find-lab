function superbowlWin(array) {
    let year;
    array.find( object => {
      if (object["result"] === "W") {
        year = object["year"]
      }    
    })
    return year;
}

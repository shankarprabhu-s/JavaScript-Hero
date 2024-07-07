let numbers = [1,2,3,4,56,7,8,5,9,5,5,,1,5,8,5,8,,4,7,4,4,7,8,9,6,9,5,3,5,4,1,4,4,5,8,,7,7,7,8,5,5,5,5,555,5,4,4];

let greaterThan4 = numbers.filter(function(item)
{
    return item > 4;
})

console.log(greaterThan4);


let members = [
    {
      name: "John Doe",
      yearOfBirth: 2004
    },
    {
      name: "Maria Alba",
      yearOfBirth: 2007
    },
    {
      name: "Ankit Patel",
      yearOfBirth: 2010
    },
    {
      name: "Mario Gomes",
      yearOfBirth: 1982
    },
    {
      name: "Enzo Alvarez",
      yearOfBirth: 2018
    },
    {
      name: "Jan Hansen",
      yearOfBirth: 1972
    }
    ]; 
    
    // use this variable to store the new array with 18+ years old members only
    let adultMembers = members.filter(function(item)
    {
        return 2024-item.yearOfBirth > 17;
    });


    console.log(adultMembers);
    

//   let pod =   navigator.geolocation.getCurrentPosition(function(position)
// {
//    return position;
// })

// console.log(position);
    

let lessons = [
    {
      id: "273",
      title: "Variables",
      length: 12
    },
    {
     id: "295",
     title: "Conditionals",
     length: 12
    },
    {
     id: "299",
     title: "Functions",
     length: 12
    }
    ]; 
    
    // use this variable to add the lesson titles
    let lessonTitles = [];
    
    // write your code below this line
    
lessons.forEach((lesson,index)=>
{
    lessonTitles.push(lesson.title)
})

console.log(lessonTitles);
    
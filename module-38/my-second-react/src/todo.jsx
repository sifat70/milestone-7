// export default function Todo({task}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// conditional rendering option 1
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }else{
//         return <li>work on: {task}</li>
//     }
// }



// conditional rendering option 2
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }else{
//          <li>work on: {task}</li>
//     }
// }



// // Conditional rendering operator 3: ternary operator

// export default function Todo({task, isDone}){
//     return(
//         <li>{isDone ? 'Finished' : 'Work On'} : {task}</li>
//     )
// }



// // Conditional rendering operator 4: &&

// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }



// Conditional rendering operator 4: &&

// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone || ': Do It'}</li>
//     )
// }


// conditional rendering option 6
export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        listItem =  <li>Finished: {task}</li>
    }else{
        listItem = <li>work on: {task}</li>
    }
    return listItem
}
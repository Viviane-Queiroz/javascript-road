// In case of non-declared parameters inserted, or even when a 
// parameter is not used, common resolutions to deal with them are:

// 1. Arguments
// Array-like object created inside the function
// This obj contaions all the values of the arguments given

function calcPerimeter(side, totalSides = 4) {
    console.log(arguments)
    return side * totalSides;
}

calcPerimeter(10);
calcPerimeter(10, 4, 20);

// 2. Rest Parameter

// By using ... in front of a parameter, all the arguments given at the function activation will be
// inserted in it

// A function should have only one rest paremeter, declared as the last one.

function winnersAnnoucement(...winners) {
    winners.forEach(winner => {
        console.log(winner + ' won =D')
    });
}

winnersAnnoucement('João', 'Sofia', 'Rita');
let closeButtonTable = document.getElementById("icon-close-table-popup");
let openButtonTable = document.getElementById('table-button');
let tablePopupContainer = document.getElementById('table-popup-container');

function openPopupTable() {
    tablePopupContainer.style.transform = "scale(1) translate(-50%,-50%)";
    tablePopupContainer.style.transition = "transform 700ms cubic-bezier(.58,.22,.52,1.19)";
    /* special effect when opening popup */
}
/* show popup */

function closePopupTable() {
    tablePopupContainer.style.transform = "scale(0) translate(-50%,-50%)";
    tablePopupContainer.style.transition = " all 400ms ease-in";
    /* back to normal transition when closing popup */
}
/* hide popup */

closeButtonTable.addEventListener('click', closePopupTable);
openButtonTable.addEventListener('click', openPopupTable);



/* User info */

let endValueName = document.getElementById('end-value-name');
let endValueRounds = document.getElementById('end-value-rounds');
let endValueP1Color = document.getElementById('end-value-p1-color');
let endValueP2Color = document.getElementById('end-value-p2-color');
let endValueP1Icon = document.getElementById('end-value-p1-icon');
let endValueTheme = document.getElementById('end-value-theme');
let endValueWinner = document.getElementById('end-value-winner');
let endValuePointsDifference = document.getElementById('end-value-points-difference');
let endValueTime = document.getElementById('end-value-time');

function updateEndValues() {
    endValueName.innerHTML = usernameValue;
    endValueRounds.innerHTML = roundsValue;
    endValueP1Color.innerHTML = p1ColorValue;
    endValueP1Color.style.backgroundColor = p1ColorValue;
    endValueP2Color.innerHTML = p2ColorValue;
    endValueP2Color.style.backgroundColor = p2ColorValue;
    endValueTime.innerHTML = timeElapsed;

    let iconReadable;
    switch (iconSelected.id) {
        case ("account-hard-hat"):
            iconReadable = "Builder";
            break;
        case ("account-tie-hat"):
            iconReadable = "Student";
            break;
        case ("cat"):
            iconReadable = "Cat";
            break;
        case ("dog"):
            iconReadable = "Dog";
            break;
        default:
            break;
    }
    /* convert icon ids to human readable strings */

    endValueP1Icon.innerHTML = iconReadable;
    /* change content of text to a readable icon name */

    endValueTheme.innerHTML = themeUsed.charAt(0).toUpperCase() + themeUsed.slice(1);
    /* get theme used and capitalize first letter */

    if (finalResult === "p1") /* if player 1 won */ {
        endValueWinner.innerHTML = "You!";
        /* change content of element to the winner */

        endValuePointsDifference.innerHTML = Number(p1ScoreNumberDisplay.innerHTML) - Number(p2ScoreNumberDisplay.innerHTML);
        /* because player 1 won, subtract player 1 points by player 2 points */

    } else /* if player 2 won */ {
        endValueWinner.innerHTML = "Computer";
        /* change content of element to the winner */

        endValuePointsDifference.innerHTML = Number(p2ScoreNumberDisplay.innerHTML) - Number(p1ScoreNumberDisplay.innerHTML);
        /* because player 2 won, subtract player 2 points by player 1 points */

    } /* no tie in this case, because function is only called when the is a winner in the game */
}

/* --------------------------------------- Table --------------------------------------- */

function addFinalResult() {
    //create a Table Object
    let table = document.createElement('table');
    //iterate over every array(row) within tableArr
    for (let row of results) {
        //Insert a new row element into the table element
        table.insertRow();
        //Iterate over every index(cell) in each array(row)
        for (let cell of row) {
            //While iterating over the index(cell)
            //insert a cell into the table element
            let newCell = table.rows[table.rows.length - 1].insertCell();
            //add text to the created cell element
            newCell.textContent = cell;
        }
    }
    //append the compiled table to the DOM
    let tableElement = document.getElementById('table-container').appendChild(table);
    tableElement.setAttribute('id', 'results-table');
}
/* create table with all results from results array */

function exportToExcel(type, fn, dl) {
    const tableElement = document.getElementById('results-table');
    const wb = XLSX.utils.table_to_book(tableElement, {
        sheet: "Results"
    });
    return dl ?
        XLSX.write(wb, {
            bookType: type,
            bookSST: true,
            type: 'base64'
        }) :
        XLSX.writeFile(wb, fn || (setTableName() + '.' + (type || 'xlsx')));
}
/* download table element to xlsx excel file */

function setTableName() {
    const date = new Date();
    /* get the date now */

    const dateFormatted = date.getFullYear() + "_" + date.getMonth() + "_" + date.getDay() + "_" + date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds();
    /* format date to YYYY_MM_DD_HH_mmm_ss */
    /* format accepted because of "_" */

    const nameSuffix = "_table_of_results";
    /* suffix to filename */

    const tableName = dateFormatted + nameSuffix;
    /* make tableName variable and assign to it formatted date followed by set "nameSuffix" value */

    return tableName;
    /* return table name to be used by other functions */
}
/* set Table Name based on date and time, after that, append "_table_of_results" */
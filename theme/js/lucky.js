
var app = new Vue({
    el: '#quote',
    data: {
        text: '',
        author: '',
        url: ''
    },
    mounted () {
        // Credits tutorial : https://benborgers.com/posts/google-sheets-json
        const spreadsheetId = '1LMv7QPWl1SWZiplsJciO7KnKa_Lvt4TBVnu6igYSguk'
        fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&sheet=quotes`)
            .then(res => res.text())
            .then(text => {
                const json = JSON.parse(text.substr(47).slice(0, -2));
                sheetRows = json.table.rows;
                rowIndex = Math.floor(Math.random() * (sheetRows.length - 1));
                this.text = sheetRows[rowIndex].c[0].v;
                this.author = sheetRows[rowIndex].c[1].v;
                this.url = sheetRows[rowIndex].c[2].v;
            })
    }
})
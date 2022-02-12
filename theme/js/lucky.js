Vue.createApp({
    data() {
        return {
            quote_text: '',
            quote_author: '',
            quote_url: '',
            factLink: ''
        }
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
                this.quote_text = sheetRows[rowIndex].c[0].v;
                this.quote_author = sheetRows[rowIndex].c[1].v;
                this.quote_url = sheetRows[rowIndex].c[2].v;
            })
        
        fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&sheet=links`)
            .then(res => res.text())
            .then(text => {
                const json = JSON.parse(text.substr(47).slice(0, -2));
                sheetRows = json.table.rows;
                rowIndex = Math.floor(Math.random() * (sheetRows.length - 1));
                rowIndex = Math.max(1, rowIndex); // first row are column names
                this.factLink = sheetRows[rowIndex].c[0].v;
            })
    }
}).mount('#luck')
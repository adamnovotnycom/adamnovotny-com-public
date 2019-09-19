
var app = new Vue({
    el: '#quote',
    data: {
        text: '',
        url: '',
        author: ''

    },
    mounted () {
        axios
            .get('https://spreadsheets.google.com/feeds/list/1g6UwXwvHwpAQcNwkrR5CszdU2eIEDP02y1OGr3V5H40/od6/public/basic?alt=json')
            .then(response => {
                quotes = response['data']['feed']['entry']
                quoteIndex = Math.floor(Math.random() * (quotes.length - 1))
                selectedQuote = quotes[quoteIndex]; // random quote
                this.text = selectedQuote['title']['$t'];
                this.author = selectedQuote['content']['$t'].split(',')[0].split(' ').slice(1,5).join(" ");
                this.url = selectedQuote['content']['$t'].split(',')[1].split(' ')[2];
            })
    }
})
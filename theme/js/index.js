
// Vue.component('todo-item', {
//     props: ['todo'],
//     template: '<li>{{ todo.text }}</li>'
// })

var app = new Vue({
    el: '.quote',
    data: {
        text: '',
        url: '',
        author: ''

    },
    mounted () {
        axios
            .get('https://spreadsheets.google.com/feeds/list/1g6UwXwvHwpAQcNwkrR5CszdU2eIEDP02y1OGr3V5H40/od6/public/basic?alt=json')
            .then(response => {
                fullQuote = response['data']['feed']['entry'][0]
                this.text = fullQuote['title']['$t'];
                this.author = fullQuote['content']['$t'].split(',')[0].split(' ')[1] + 
                 ' ' + fullQuote['content']['$t'].split(',')[0].split(' ')[2];
                this.url = fullQuote['content']['$t'].split(',')[1].split(' ')[2];
                console.log(fullQuote)
                console.log(this.url)
                console.log(this.author)
                // response.forEach(element => {
                //     console.log(element);
                // }
                //   this.text = response[0])
            }
            )
    }
})

// quotesUrl = '';
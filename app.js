const roster = require('./src/roster.js');
const items = roster.getRoster(function (error,items){
  if (error) {
    throw error
      }
      items.forEach(function (item) {
        console.log(item.data.name + ' '+item.data.number)
      })
})

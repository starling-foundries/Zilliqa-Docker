const get_addr = require('./helpers/get_address')

async function main(){
address = get_addr(process.env.PRIVKEY)
address().then(()=>console.log("the address for your privkey is: "+ address)
)
}
main()
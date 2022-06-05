
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const main = async () => {
    let { dataI, errorI } = await supabase
    .from('app_state')
    .insert([
      { name: 'New List', data: {shop:{name:"AH", total:267.12}} }
    ])


    let { data, error } = await supabase
      .from('app_state')
      .select('name, data')
      .range(0,10)
  
    if (error) {
      console.error(error)
      return
    }
  
    console.log(data)

    subscription1 = supabase
      .from('app_state')
      .on('UPDATE', (v) => console.log('UPDATE on app_state', v))
      .on('INSERT', (v) => console.log('INSERT on app_state', v))
      .subscribe((change) => console.log('app_state changed', change))

    await sleep(30000)
    supabase.removeSubscription(subscription1);
      
  }

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
  
  main()
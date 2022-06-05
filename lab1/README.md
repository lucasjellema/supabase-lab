# supabase-lab
My experiments with Supabase



To try out:

server side experiment

set environment variables
export SUPABASE_KEY='<key value>'
export SUPABASE_URL='<first url segment of SUPABASE URL>'

or under Windows Powershell:

$Env:SUPABASE_KEY = '<key value>'
$Env:SUPABASE_URL = '<first url segment of SUPABASE URL>'

`node index.js`


For Client:

run the Node Web Server side (simple application that only serves the index.html file in directory web)

`node web-server.js`

Then in browser:
http://localhost:3100/?SUPABASE_URL=<segment of your SUPABASE_URL>&SUPABASE_KEY=<your SUPABASE_KEY>

for example:
http://localhost:3100/?SUPABASE_URL=bctbxcxuywqjhsafw&SUPABASE_KEY=eyJhbGciOiJIUzI